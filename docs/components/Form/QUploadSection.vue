<template>
  <section id="upload">
    <!-- Upload dropdown section -->
    <div id="wrapper" class="border rounded border-primary">
      <div
        id="header"
        class="px-8 py-3 flex-row bg-gradient-to-br from-primary to-secondary"
      >
        <h1 class="font-medium text-xl text-white">{{ heading }}</h1>
        <p class="font-normal text-md text-white">{{ subheading }}</p>
      </div>

      <!-- This is the drag & drop zone -->
      <div
        id="body"
        class=""
        :class="{ 'bg-gray-100 animate-pulse': over }"
        @dragover.prevent="handleDragOver"
        @dragleave.prevent="handleDragLeave"
        @drop.prevent="handleDrop"
      >
        <label for="fileupload" class=""
          ><i class="">Fileupload Icon</i>
          <p class="">Upload</p></label
        >
        <input
          id="fileupload"
          class="hidden"
          type="file"
          name="fileupload"
          @change="handleFileInput"
        />
      </div>
    </div>

    <!-- Footer is only shown after the user inputs a file -->
    <transition appear name="footer-emerge">
      <div v-if="loaded" id="footer" class="">
        <div id="text-wrapper">
          <p class="">{{ file.name }}</p>
          <small class=""
            >Size: {{ file.size }} kb. Current format: {{ file.type }}.
          </small>
        </div>
        <button class="" :disabled="processing" @click="handleUploadFile">
          <!-- When uploading a file, display this svg spinner -->
          <!-- If you'd like to know where I got the spinner, check https://loading.io/css/ -->
          <svg
            v-if="processing"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            style="
              margin: auto;
              background: none;
              display: block;
              shape-rendering: auto;
            "
            width="30px"
            height="30px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <circle
              cx="50"
              cy="50"
              fill="none"
              stroke="#fff"
              stroke-width="10"
              r="40"
              stroke-dasharray="188.49555921538757 64.83185307179586"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="0.75s"
                values="0 50 50;360 50 50"
                keyTimes="0;1"
              ></animateTransform>
            </circle>
          </svg>
          <span v-else> <i class="far fa-paper-plane"></i> Upload </span>
        </button>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  props: {
    heading: String,
    subheading: String,
    uploadUrl: String,
    uploadQuery: String,
    allowedFormats: Array,
  },
  data() {
    return {
      over: false,
      loaded: false,
      processing: false,
      file: {
        name: "",
        size: "",
        type: "",
      },
      buffer: "",
    };
  },
  methods: {
    // Drag & Drop methods
    handleDragOver() {
      this.over = true;
    },
    handleDragLeave() {
      this.over = false;
    },
    // Process the dropped file and emit it back to the parent component as an ArrayBuffer
    handleDrop(event) {
      const fileItem = event.dataTransfer.items[0].getAsFile();
      const reader = new FileReader();
      if (
        this.allowedFormats.length > 0 &&
        !this.allowedFormats.includes(fileItem.type.split("/")[0])
      ) {
        this.over = false;
        this.loaded = true;
        this.$emit(
          "fileIllegalFormat",
          `Filetype ${fileItem.type} not supported.`
        );
      } else {
        this.file = {
          name: fileItem.name,
          size: (fileItem.size / 1000).toFixed(2),
          type: fileItem.type.split("/")[1],
        };
        reader.readAsArrayBuffer(fileItem);
        reader.onloadend = (event) => {
          this.over = false;
          this.loaded = true;
          this.buffer = event.target.result;
          this.$emit("fileLoaded", this.file);
        };
      }
    },
    // Process the selected file and emit it back to the parent component as an ArrayBuffer
    handleFileInput(event) {
      const fileItem = event.target.files[0];
      const reader = new FileReader();
      if (
        this.allowedFormats.length > 0 &&
        !this.allowedFormats.includes(fileItem.type.split("/")[0])
      ) {
        this.over = false;
        this.loaded = true;
        this.$emit("fileError", `Filetype ${fileItem.type} not supported.`);
      } else {
        this.file = {
          name: fileItem.name,
          size: (fileItem.size / 1000).toFixed(2),
          type: fileItem.type.split("/")[1],
        };
        reader.readAsArrayBuffer(fileItem);
        reader.onloadend = (event) => {
          this.over = false;
          this.loaded = true;
          this.buffer = event.target.result;
          this.$emit("fileLoaded", this.file);
        };
      }
    },
    // Upload a file and pass the server response back to the parent component
    async handleUploadFile() {
      this.processing = true;
      const url = this.uploadUrl + this.uploadQuery;
      // Do basic validation to check if relevant params are submitted
      const payload = await this.buffer;
      const options = { method: "post", body: payload };
      try {
        const response = await fetch(url, options);
        if (response.status !== 200) {
          const errorMsg = await response.json();
          this.$emit("imageError", errorMsg.error);
        } else {
          const image = await response.blob();
          const imageUrl = URL.createObjectURL(image);
          this.$emit("imageReceived", imageUrl);
        }
      } catch (e) {
        this.$emit("fileError", `Could not upload file: ${e}`);
      } finally {
        this.processing = false;
      }
    },
    // Helper methods
    checkAllowedFormats(filetype, allowedFiletypes) {
      return allowedFiletypes.includes(filetype) ? true : false;
    },
  },
};
</script>

<style scoped>
/* Transition classes */
.footer-emerge-enter-active {
  transition: all 1s ease-in-out;
}
.footer-emerge-leave-active {
  transition: all 1s ease-in-out;
}
.footer-emerge-enter,
.footer-emerge-leave-to {
  transition: all 1s;
  transform: translateY(-10px);
  opacity: 0;
}
</style>