<template>
  <div :class="{ reverse: reversed, topside: !reversed }">
    <button
      :class="{
        expanded: isExpanded,
        collapsed: !isExpanded,
        'q-rounded-top': roundedTop,
        'q-rounded-bottom': roundedBottom && !isExpanded,
      }"
      @click="isExpanded = !isExpanded"
      class="q-accordion-header-wrapper"
    >
      <h3 class="q-accordion-header-title">
        {{ title }}
      </h3>
      <span class="q-accordion-header-icon" :id="iconId">
        {{ icon }}
      </span>
    </button>
    <section
      :id="panelId"
      :class="{ 'q-rounded-bottom': roundedBottom && isExpanded }"
      :aria-expanded="isExpanded"
      class="q-accordion-body"
    >
      <slot />
    </section>
  </div>
</template>

<script>
import { ref, watch, onMounted } from "vue";
import uuid from "../../../use/uuid";

export default {
  setup({ expanded, targetRotation, baseRotation }) {
    const panelId = `panel-${uuid()}`;
    const iconId = `icon-${uuid()}`;
    let isExpanded = ref(expanded);

    // Rotate the icon and open/close the accordion on click
    const togglePanel = () => {
      const panel = document.getElementById(panelId);
      const icon = document.getElementById(iconId);

      if (isExpanded.value === true) {
        panel.style.maxHeight = panel.scrollHeight + "px";
        icon.style.transform = `rotate(${targetRotation}deg)`;
      } else {
        panel.style.maxHeight = null;
        icon.style.transform = `rotate(${baseRotation}deg)`;
      }
    };

    watch(isExpanded, () => togglePanel());
    onMounted(() => togglePanel());

    return { isExpanded, panelId, iconId };
  },
  props: {
    // Content
    title: {
      type: String,
      required: true,
    },

    icon: {
      type: String,
      required: false,
      default: "+",
    },

    // Style properties
    targetRotation: {
      type: Number,
      required: false,
      default: 45,
    },

    baseRotation: {
      type: Number,
      required: false,
      default: 0,
    },

    reversed: {
      type: Boolean,
      required: false,
      default: false,
    },

    roundedTop: {
      type: Boolean,
      required: false,
      default: false,
    },

    roundedBottom: {
      type: Boolean,
      required: false,
      default: false,
    },

    expanded: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style scoped>
.topside {
  display: flex;
  flex-direction: column;
}

.reverse {
  display: flex;
  flex-direction: column-reverse;
}

.q-accordion-header-wrapper {
  width: 100%;
  background-color: var(--background-color-secondary);
  padding: var(--gap-lg);
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}

.q-accordion-header-title,
.q-accordion-header-icon {
  font-size: var(--text-size-lg);
  color: var(--text-color-primary);
  margin: 0;
}

.q-accordion-header-icon {
  transition: all var(--duration-quickest);
  text-align: right;
}

.q-accordion-header-title {
  text-align: left;
}

.q-rounded-top {
  border-top-left-radius: var(--gap-xs);
  border-top-right-radius: var(--gap-xs);
}

.q-rounded-bottom {
  border-bottom-left-radius: var(--gap-xs);
  border-bottom-right-radius: var(--gap-xs);
}

.q-accordion-body {
  background-color: var(--background-color-tartiary);
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--duration-quickest) ease-in-out;
  padding: 0 var(--gap-lg);
}
</style>