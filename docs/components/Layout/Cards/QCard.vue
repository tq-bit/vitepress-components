<template>
  <div class="q-card">
    <img class="q-card-image" v-if="imgSrc" :src="imgSrc" :alt="imgAlt" :loading="imgLoading" />
    <div class="q-card-header">
      <h3>{{ title }}</h3>
    </div>
    <div class="q-card-body">
      <slot name="card-body" />
    </div>
    <div class="q-card-footer">
      <slot name="card-footer" />
    </div>
  </div>
</template>


<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: false,
      default: "",
    },
    imgAlt: {
      type: String,
      required: false,
      default: "",
    },
    imgLoading: {
      type: String,
      required: false,
      default: "lazy",
      validator(value) {
        return ["eager", "lazy"].indexOf(value) !== -1;
      },
    },
    title: {
      type: String,
      required: false,
      default: "A card title",
    },
  },
};
</script>

<style scoped>
.q-card {
  margin: var(--gap-md);
  background-color: var(--background-color-tartiary);
  border-top: 3px solid var(--accent-color-primary);
  border-radius: var(--gap-xs);
  transition: var(--duration-quick) all;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 6px;
}

.q-card-image {
  width: 100%;
  height: auto;
}

.q-card-header {
  margin: var(--gap-xl);
}

.q-card-body {
  margin: var(--gap-md) var(--gap-xl);
}
.q-card-footer {
  padding: var(--gap-md) var(--gap-xl) var(--gap-xl);
}
</style>