<template>
  <img v-lazy class="q-image" :data-url="src" :alt="alt" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
    },
  },
};
</script>

<style scoped>
.q-image {
  min-height: var(--el-size-lg);
  height: 100%;
  min-width: 100%;
  width: auto;
  animation: blink var(--duration-slow) infinite cubic-bezier(0, 0, 0.2, 1);

}
@keyframes blink {
  0% {
    background: var(--background-color-tartiary);
  }
  50% {
    background: var(--background-color-secondary);
  }
  100% {
    background: var(--background-color-tartiary);
  }
}
</style>