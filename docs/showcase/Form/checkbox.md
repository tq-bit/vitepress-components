<script setup>
import { ref } from 'vue';

import QCheckbox from '../../components/Form/QCheckbox.vue'
import QButton from '../../components/Form/QButton.vue';

const inputValue = ref(false);
const onSubmit = () => alert(`Your input: ${inputValue.value}`);
</script>

<style>
@import '../../.vitepress/theme/main.css'
</style>

# QCheckbox component


## Requirements

| Type          | Path / Version        | Purpose             | Optional |
| ------------- | --------------------- | ------------------- | -------- |
| **Styles**    | ../../assets/main.css | CSS Variables       | No       |
| **Functions** | ../../use/uuid        | Assign ids to items | No       |

## Usage

Import the following component/s:

```javascript
import QCheckbox from '../../components/Form/QCheckbox.vue'
```

### Basic usage

In the most basic case, you can bind a dynamic boolean value to `v-model`.

<form @submit.prevent="onSubmit"  style="padding:0.5rem;border:1px solid red;border-radius:4px;">
  <q-checkbox v-model="inputValue" label="I have read the terms and conditions" />
  <p>Output: {{inputValue}}</p>
</form>

**Example**

```vue
<template>
  <form @submit.prevent="onSubmit">
    <q-checkbox v-model="inputValue" label="I have read the terms and conditions" />
    <p>Output: {{inputValue}}</p>
</form>
</template>

<script setup>
import { ref } from 'vue';
const inputValue = ref(false);
</script>
```

### Display a switch element

The `variant="switch"` binding makes the checkbox look like a switch.

<form @submit.prevent="onSubmit"  style="padding:0.5rem;border:1px solid red;border-radius:4px;">
  <q-checkbox variant="switch" v-model="inputValue" label="I have read the terms and conditions" />
  <q-button type="submit" label="Submit" />
  <p>Output: {{inputValue}}</p>
</form>

**Example**

```vue
<template>
  <form @submit.prevent="onSubmit">
    <q-checkbox variant="switch" v-model="inputValue" label="I have read the terms and conditions" />
    <p>Output: {{inputValue}}</p>
  </form>
</template>

<script setup>
import { ref } from 'vue';
const inputValue = ref(false);
</script>
```

### Required fields

> See [QInput@required-fields](input.md#required-fields) for behavior and customization

<form @submit.prevent="onSubmit" style="padding:0.5rem;border:1px solid red;border-radius:4px;">
  <q-checkbox required requiredSign="[Please agree]" v-model="inputValue" label="I have read the terms and conditions " />
  <p>Output: {{ inputValue }}</p>
  <q-button type="submit" label="Submit" />
</form>

**Example**

```vue
<template>
  <form @submit.prevent="onSubmit">
    <q-checkbox required requiredSign="[Please agree]" v-model="inputValue" label="I have read the terms and conditions " />
    <p>Output: {{ inputValue }}</p>
    <q-button type="submit" label="Submit" />
  </form>
</template>

<script setup>
import { ref } from 'vue';
const inputValue = ref(false);
</script>
```

## Full component's code

### QCheckbox

<<< @/components/Form/QCheckbox.vue
