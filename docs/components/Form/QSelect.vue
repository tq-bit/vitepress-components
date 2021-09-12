<template>
  <label v-if="label" :for="id" class="q-input-label">
    {{ label }}
    <span class="q-input-required-sign" v-if="required">{{
      requiredSign
    }}</span>
  </label>
  <select
    class="q-input-base"
    :class="{
      'q-error': !!error,
    }"
    v-bind="{
      ...$attrs,
      onChange: ($event) => $emit('update:modelValue', $event.target.value),
    }"
    :id="id"
    :required="required"
    :placeholder="labelPrefix ? labelPrefix + label.toLowerCase() : label"
    :aria-label="label"
    :aria-required="required"
    :aria-describedby="error ? `${id}-error` : null"
    :aria-invalid="error ? true : null"
  >
    <option value="" selected disabled aria-disabled>
      {{ labelPrefix ? labelPrefix + label.toLowerCase() : label }}
    </option>
    <option
      v-for="option in options"
      :value="option.value ? option.value : option"
      :key="option.key ? option.key : option"
      :selected="option === modelValue"
      :aria-selected="option.text ? option.text : option.value ? option.value : option"
      :disabled="option.disabled"
      :aria-disabled="option.disabled"
    >
      {{ option.text ? option.text : option.value ? option.value : option }}
    </option>
  </select>
  <small
    v-if="error"
    class="q-input-error-msg"
    :id="`${id}-error`"
    aria-live="assertive"
  >
    {{ error }}
  </small>
</template>

<script>
import uuid from "../../use/uuid";

export default {
  setup() {
    const id = uuid();
    return { id };
  },
  props: {
    labelPrefix: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    error: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    requiredSign: {
      type: String,
      default: "*",
    },
  },
};
</script>

<style scoped>
option {
  background-color: var(--background-color-primary);
  color: var(--text-color-primary);
}

.q-input-base,
.q-input-label {
  display: block;
  width: 100%;
  font-size: var(--text-size-sm);
}

.q-input-label {
  color: var(--accent-color-primary);
  font-size: var(--text-size-sm);
  font-weight: 600;
}

.q-input-required-sign {
  color: var(--color-error);
}

.q-input-base {
  background-color: transparent;
  color: var(--text-color-primary);
  caret-color: var(--text-color-primary);
  border: none;
  border-bottom: var(--gap-xxs) solid transparent;
  padding: var(--gap-sm) var(--gap-xs);
  margin: var(--gap-sm) 0;
}

.q-input-base:focus {
  outline: none;
  transition: var(--duration-quickest);
  border-bottom: var(--gap-xxs) solid var(--accent-color-primary);
}

.q-input-base:focus.q-error {
  border-bottom: var(--gap-xxs) solid var(--color-error);
}

.q-input-error-msg {
  font-size: var(--text-xs);
  color: var(--color-error);
}
</style>