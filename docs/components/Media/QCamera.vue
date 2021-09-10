<template>
  <section class="q-camera">
    <select
      class="q-select-camera"
      @change="activeDeviceId = $event.target.value"
      :name="`select-${camera.id}`"
    >
      <option v-for="device in devices" :key="device" :value="device.deviceId">
        {{ device.label }}
      </option>
    </select>
    <q-camera-select
      :options="devices"
      v-model="activeDeviceId"
    ></q-camera-select>
    <video
      class="q-camera-video"
      :id="`video-${camera.id}`"
      autoplay
      playsinline
      :controls="false"
    ></video>
    <canvas class="q-camera-canvas" :id="`canvas-${camera.id}`"></canvas>
    <button class="q-camera-button" @click="onSnap">{{ buttonLabel }}</button>
  </section>
</template>

<script>
import uuid from "../../use/uuid";
import useFileReader from "../../use/useFileReader";

export default {
  async mounted() {
    await this.getVideoDevices();
    this.activeDeviceId = this.devices[0].deviceId;
  },

  data() {
    return {
      camera: {
        id: uuid(),
        hasImageCapture: !!window.ImageCapture,
        imageCapture: {},
        imageBlob: null,
      },
      devices: [],
      activeDeviceId: "",
    };
  },

  props: {
    buttonLabel: {
      type: String,
      default: "Take screenshot",
    },
    format: {
      type: String,
      default: "arraybuffer",
      validator(value) {
        return (
          value === "arraybuffer" ||
          value === "dataurl" ||
          value === "text" ||
          value === "binarystring"
        );
      },
    },
    constraints: {
      type: Object,
      default: {
        video: {
          width: { min: 280, ideal: 320, max: window.innerWidth },
          height: { min: 480, ideal: 520, max: window.innerHeight },
          advanced: [{ aspectRatio: window.innerWidth / window.innerHeight }],
        },
      },
    },
  },

  watch: {
    activeDeviceId() {
      this.onChangeStream();
    },
  },

  methods: {
    async getVideoDevices() {
      try {
        navigator.mediaDevices.getUserMedia({ video: true });
        const mediaDevices = await navigator.mediaDevices.enumerateDevices();
        this.devices = mediaDevices.filter(
          (device) => device.kind === "videoinput"
        );
      } catch (error) {
        if (error.name === "NotAllowedError") {
          console.warn("Access to camera has been denied.");
        }
        console.error(error);
        this.devices = [];
      }
    },

    async onChangeStream() {
      // Assign a camera device to the video
      const videoEl = this.queryVideoEl();
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          deviceId: {
            exact: this.activeDeviceId,
          },
        },
      });

      // Pick up the video track and assign the image capture
      const [mediaStreamTrack] = mediaStream.getVideoTracks();
      this.camera.imageCapture = new ImageCapture(mediaStreamTrack);

      // Start the video
      mediaStreamTrack.applyConstraints(this.constraints.video);
      videoEl.srcObject = mediaStream;
      videoEl.play();
    },

    async onSnap() {
      const { camera, format } = this;
      // Use imageCapture if browser supports it
      if (camera.hasImageCapture) {
        const blob = await camera.imageCapture.takePhoto();
        const { read } = useFileReader(blob, format);
        const file = await read();
        this.$emit("snap", file);

        // Else, fall back to canvas functionality
      } else {
        const canvas = this.queryCanvasEl();
        const video = this.queryVideoEl();

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        canvas.getContext("2d").drawImage(video, 0, 0);
        canvas.toBlob(async (blob) => {
          const { read } = useFileReader(blob, format);
          const file = await read();
          this.$emit("snap", file);
        });
      }
    },

    queryVideoEl() {
      return document.getElementById(`video-${this.camera.id}`);
    },

    queryCanvasEl() {
      return document.getElementById(`canvas-${this.camera.id}`);
    },
  },
};
</script>

<style scoped>
.q-camera-video {
  width: 100%;
  height: 100%;
  margin: auto;
  display: block;
}

.q-camera-canvas {
  display: none;
}

.q-select-camera {
  width: 100%;
  padding: var(--gap-sm) 0;
  background-color: transparent;
  color: var(--text-color-primary);
  caret-color: var(--text-color-primary);
  border: none;
  border-bottom: var(--gap-xxs) solid transparent;
  margin: var(--gap-sm) 0;
}

.q-select-camera:focus {
  outline: none;
  transition: var(--duration-quickest);
  border-bottom: var(--gap-xxs) solid var(--accent-color-primary);
}

.q-camera-button {
  border: none;
  border-radius: var(--gap-xs);
  color: var(--background-color-tartiary);
  cursor: pointer;
  font-size: var(--text-size-md);
  margin: var(--gap-xs) 0;
  padding: var(--gap-md);
  text-align: center;
  width: 100%;
  background-color: var(--accent-color-primary);
  color: var(--background-color-tartiary);
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
