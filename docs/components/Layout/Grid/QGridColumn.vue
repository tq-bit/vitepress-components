<template>
  <div class="q-grid-col">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.q-grid-col {
  padding-left: var(--gap-xl);
  padding-right: var(--gap-xl);
}
</style>