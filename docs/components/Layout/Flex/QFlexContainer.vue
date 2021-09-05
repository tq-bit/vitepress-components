<template>
  <div
    class="q-flex"
    :class="{
      'q-flex-fluid': fluid === true,
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    fluid: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style scoped>
.q-flex {
  width: 95%;
  display: flex;
  margin: auto;
}

.q-flex-fluid {
  width: 100%;
}
</style>