<template>
  <fieldset class="q-input-group" :class="{
    'q-input-group-border': border,
  }">
    <legend class="q-input-group-legend" v-if="title">{{ title }}</legend>
    <slot />
  </fieldset>
</template>

<script setup>
defineProps({
  title: {
    type: String,
  },
  border: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped>
.q-input-group-legend {
  font-size: var(--text-size-md);
  font-weight: 600;
  transform: translateX(-1px);
}

.q-input-group {
  padding: var(--gap-xl) 0;
  color: var(--accent-color-primary);
  width: 100%;
  margin: auto;
  border: none;
}

.q-input-group-border {
  border: 1px solid var(--accent-color-primary);
  border-radius: var(--gap-xxs);
}

.q-input-group-border > .q-input-group-legend {
  color: var(--white-color);
  background-color: var(--accent-color-primary);
  padding: var(--gap-xs) var(--gap-md);
  border-radius: var(--gap-xxs);
}
</style>