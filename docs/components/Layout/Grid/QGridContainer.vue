<template>
  <div
    v-if="cols"
    class="q-grid"
    :class="{
      'q-grid-fluid': fluid === true,
    }"
    :style="{ 'grid-template-columns': `repeat(${cols}, 1fr)` }"
  >
    <slot />
  </div>
  <div
    v-if="format"
    class="q-grid"
    :class="{
      'q-grid-fluid': fluid === true,
      'q-grid-1': format === '1',
      'q-grid-1-1': format === '1/1',
      'q-grid-1-2': format === '1/2',
      'q-grid-1-3': format === '1/3',
      'q-grid-1-1-1': format === '1/1/1',
      'q-grid-1-2-1': format === '1/2/1',
      'q-grid-2-1-2': format === '2/1/2',
      'q-grid-dynamic': format === 'dynamic',
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
    cols: {
      type: Number,
      required: false,
    },
    format: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
.q-grid {
  width: 95%;
  display: grid;
  margin: auto;
  grid-column: auto;
}

.q-grid-fluid {
  width: 100% !important;
}

.q-grid-1,
.q-grid-1-1,
.q-grid-1-2,
.q-grid-1-3,
.q-grid-1-1-1,
.q-grid-1-2-1,
.q-grid-2-1-2 {
  grid-template-columns: 100%;
}

@media (min-width: 768px) {
  .q-grid {
    width: 80%;
  }
  .q-grid-1-1,
  .q-grid-1-3 {
    grid-template-columns: 50% 50%;
  }

  .q-grid-2-1-2 {
    grid-template-columns: 35% 30% 35%;
  }
}

@media (min-width: 992px) {
  .q-grid {
    width: 70%;
  }
  .q-grid-1-2 {
    grid-template-columns: 33.33% 66.67%;
  }
  .q-grid-1-3 {
    grid-template-columns: 25% 75%;
  }
  .q-grid-1-1-1 {
    grid-template-columns: 33.33% 33.34% 33.33%;
  }

  .q-grid-1-2-1 {
    grid-template-columns: 25% 50% 25%;
  }

  .q-grid-2-1-2 {
    grid-template-columns: 40% 20% 40%;
  }
}

@media (min-width: 1200px) {
  .q-grid {
    width: 60%;
  }
}

@media (min-width: 1400px) {
  .q-grid {
    width: 50%;
  }
}
</style>