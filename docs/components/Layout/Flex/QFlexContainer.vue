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
  margin: auto;
  width: 95%;
  display: flex;
  flex-wrap: wrap;
}

.q-flex-fluid {
  width: 100%;
}
</style>