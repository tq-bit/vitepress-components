<template>
  <div class="q-dropdown-wrapper">
    <button
      @click="
        () => {
          isExpanded = !isExpanded;
          toggleDropdown();
        }
      "
      class="q-button-base"
      :id="id"
      :class="{
        'q-button-v-primary': variant === 'primary',
        'q-button-v-secondary': variant === 'secondary',
        'q-button-v-info': variant === 'info',
        'q-button-v-success': variant === 'success',
        'q-button-v-warning': variant === 'warning',
        'q-button-v-error': variant === 'error',
        'q-button-v-link': variant === 'link',
        'q-button-s-small': size === 'small',
        'q-button-s-medium': size === 'medium',
        'q-button-s-large': size === 'large',
        'q-button-s-xlarge': size === 'xlarge',
      }"
    >
      <span>{{ label }}</span>
    </button>
    <ul
      :id="dropdownId"
      class="q-dropdown-base"
      :class="{ '.q-dropdown-align-right': align === 'right' }"
    >
      <li
        class="q-dropdown-item"
        @click="
          () => {
            isExpanded = !isExpanded;
            toggleDropdown();
            $emit(
              'change',
              option.value ? option.value : option.text ? option.text : option
            );
          }
        "
        v-for="option in options"
        :key="option"
      >{{ option.text ? option.text : option.value ? option.value : option }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import uuid from "../../use/uuid";

const id = uuid();
const dropdownId = `dropdown-${id}`;
const isExpanded = ref(false);
const toggleDropdown = () => {
  const dropdown = document.getElementById(dropdownId);
  if (isExpanded.value === true) {
    dropdown.style.maxHeight = dropdown.scrollHeight + "px";
  } else {
    dropdown.style.maxHeight = 0;
  }
};
defineProps({
  label: {
    type: String,
    required: true
  },
  align: {
    type: String,
    default: "left",
    validator(value) {
      const isLeft = value === "left";
      const isRight = value === "right";
      return isLeft || isRight;
    },
  },
  variant: {
    type: String,
    default: "primary",
    validator(value) {
      const isPrimary = value === "primary";
      const isSecondary = value === "secondary";
      const isInfo = value === "info";
      const isSuccess = value === "success";
      const isWarning = value === "warning";
      const isError = value === "error";
      const isLink = value === "link";
      return (
        isPrimary ||
        isSecondary ||
        isInfo ||
        isSuccess ||
        isWarning ||
        isError ||
        isLink
      );
    },
  },
  size: {
    type: String,
    default: "medium",
    validator(value) {
      const isSmall = value === "small";
      const isMedium = value === "medium";
      const isLarge = value === "large";
      const isXlarge = value === "xlarge";
      return isSmall || isMedium || isLarge || isXlarge;
    },
  },
  options: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped>
.q-dropdown-wrapper {
  position: relative;
  display: inline-block;
}

.q-dropdown-base {
  margin: 0;
  padding: 0;
  position: absolute;
  background-color: var(--background-color-tartiary);
  list-style: none;
  min-width: var(--el-size-lg);
  border-radius: var(--gap-xs);
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--duration-quickest) ease-in-out;
  z-index: 2;
}

.q-dropdown-align-right {
  right: var(--gap-sm);
}

.q-dropdown-item {
  cursor: pointer;
  transition: background-color var(--duration-quickest);
  z-index: 2;
  padding: var(--gap-md) var(--gap-sm);
}

.q-dropdown-item:hover {
  background-color: var(--background-color-secondary);
  transition: background-color var(--duration-quickest);
}

.q-button-base {
  border: none;
  border-radius: var(--gap-xs);
  cursor: pointer;
  margin: var(--gap-sm) var(--gap-sm) var(--gap-sm) 0;
  text-align: center;
  font-weight: 600;
}

/* Util classes for the button */
.q-button-u-fluid {
  width: 100%;
  margin: 0;
}

.q-button-base.q-button-u-full-width {
  display: block;
  width: 100%;
}

.q-button-u-disabled {
  opacity: var(--opacity-disabled);
}

/* Variant classes */
.q-button-v-primary {
  background-color: var(--accent-color-primary);
}

.q-button-v-secondary {
  background-color: var(--accent-color-secondary);
}

.q-button-v-info {
  background-color: var(--color-info);
  color: var(--white-color);
}

.q-button-v-success {
  background-color: var(--color-success);
  color: var(--white-color);
}

.q-button-v-warning {
  background-color: var(--color-warning);
  color: var(--white-color);
}

.q-button-v-error {
  background-color: var(--color-error);
  color: var(--white-color);
}

.q-button-v-link {
  background-color: transparent !important;
  padding: var(--gap-sm);
  color: var(--accent-color-primary) !important;
  font-size: var(--text-size-sm);
  width: fit-content;
}

.q-button-v-link:hover {
  text-decoration: underline;
}

/* Sizing classes */
.q-button-s-small {
  padding: var(--gap-sm) var(--gap-lg);
  font-size: var(--text-size-xs);
  width: var(--el-size-sm);
}

.q-button-s-small .loader {
  width: var(--text-size-xs);
  height: var(--text-size-xs);
}

.q-button-s-medium {
  padding: var(--gap-sm) var(--gap-xl);
  font-size: var(--text-size-sm);
  width: var(--el-size-md);
}

.q-button-s-medium .loader {
  width: var(--text-size-sm);
  height: var(--text-size-sm);
}

.q-button-s-large {
  padding: var(--gap-md) var(--gap-xxl);
  font-size: var(--text-size-md);
  height: var(--el-size-xxs);
  width: var(--el-size-lg);
}

.q-button-s-large .loader {
  width: var(--text-size-md);
  height: var(--text-size-md);
}

.q-button-s-xlarge {
  padding: var(--gap-md) var(--gap-xxl);
  font-size: var(--text-size-lg);
  height: var(--el-size-xs);
  width: var(--el-size-xl);
}

.q-button-s-xlarge .loader {
  width: var(--text-size-lg);
  height: var(--text-size-lg);
}

/* Text color classes */
.q-button-c-text-bright {
  color: var(--white-color) !important;
}

.q-button-c-text-dark {
  color: var(--black-color) !important;
}
</style>