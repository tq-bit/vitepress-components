<template>
  <section
    class="q-banner-wrapper"
    :class="{
      'q-banner-prallax': prallax,
      'q-banner-reverse-sm': smReverseCols,
    }"
    :style="`background-image: url('${backgroundImage}');`"
  >
    <q-flex-container :fluid="true">
      <q-flex-column :cols="6" :smCols="12">
        <slot name="column-left" />
      </q-flex-column>
      <q-flex-column :cols="6" :smCols="12">
        <slot name="column-right" />
      </q-flex-column>
    </q-flex-container>
  </section>
</template>

<script>
import QFlexContainer from "../../Layout/Flex/QFlexContainer.vue";
import QFlexColumn from "../../Layout/Flex/QFlexColumn.vue";

export default {
  components: {
    QFlexContainer,
    QFlexColumn,
  },
  props: {
    smReverseCols: {
      type: Boolean,
      default: false,
    },
    prallax: {
      type: Boolean,
      default: false,
    },
    backgroundImage: {
      type: String,
    },
  },
};
</script>

<style scoped>
.q-banner-wrapper {
  background-color: var(--background-color-primary);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.q-banner-prallax {
  background-attachment: fixed;
}
</style>