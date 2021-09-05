<template>
  <div class="q-accordion-wrapper">
    <header class="q-accordion-header">{{ header }}</header>
    <slot />
    <footer class="q-accordion-footer">
      <slot name="accordion-footer" />
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      required: false,
    },
  },
};
</script>

<style>
.q-accordion-wrapper {
  color: var(--text-color-primary);
  width: 100%;
}

.q-accordion-header,
.q-accordion-footer {
  background-color: var(--background-color-secondary);
  color: var(--text-color-primary);
  text-align: left;
  border: none;
}

.q-accordion-header {
  border-top-left-radius: var(--gap-xs);
  border-top-right-radius: var(--gap-xs);
  font-size: var(--text-size-xxl);
  padding: var(--gap-sm) var(--gap-lg);
}

.q-accordion-footer {
  border-bottom-left-radius: var(--gap-xs);
  border-bottom-right-radius: var(--gap-xs);
  padding: var(--gap-sm) var(--gap-lg);
}
</style>