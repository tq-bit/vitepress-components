<script setup>
import { ref } from 'vue';

import QSelect from '../../components/Form/QSelect.vue';
import QButton from '../../components/Form/QButton.vue';
const selectValue = ref(null);
const selectOptions = [
  'One Visitor',
  'Two Visitors',
  'Three Visitors',
];
const selectOptionsText = [
  { key: 1, text: "One Visitor", value: 1 },
  { key: 2, text: "Two Visitors", value: 2, disabled: true },
  { key: 3, text: "Three visitors", value: 3 }
];
const onSubmit = () => alert(`${selectValue.value} will be attending`);
</script>

<style>
@import '../../.vitepress/theme/main.css'
</style>

# QSelect component

QSelect allows your user to select from a variety of options. Its properties and functionalities are similar to the ones from [QInput](input.md), including label behavior and error handling.

## Requirements

| Type           | Path / Version                    | Purpose             | Optional |
| -------------- | --------------------------------- | ------------------- | -------- |
| **Styles**     | ../../assets/main.css             | CSS Variables       | No       |
| **Functions**  | ../../use/uuid                    | Assign ids to items | No       |
| **Components** | ../../components/Form/QButton.vue | Full form example   | Yes      |

## Usage

Import the following component/s:

```javascript
import QSelect from '../../components/Form/QSelect.vue';
```

### Placeholder prefix

QSelect uses the label as a first, inactive element in the options. In case the label alone is not enough, you can extend it with a prefix. Doing so makes the placeholder become lower case.

<form @submit.prevent="onSubmit"  style="padding:0.5rem;border:1px solid red;border-radius:4px;">
  <q-select labelPrefix="Please select the " label="Number of attendees" :options="selectOptions" v-model="selectValue"></q-select>
  <p>Output: {{ selectValue }}</p>
  <q-button type="submit" label="Submit" />
</form>

**Example**

```vue
<template>
  <form @submit.prevent="onSubmit">
    <q-select labelPrefix="Please " label="Number of attendees" :options="selectOptions" v-model="selectValue"></q-select>
    <p>Output: {{ selectValue }}</p>
    <q-button type="submit" label="Submit" />
  </form>
</template>

<script setup>
import { ref } from 'vue';

const selectValue = ref(null);
const selectOptions = [
  'One Visitor',
  'Two Visitors',
  'Three Visitors',
];

const onSubmit = () => alert(`${selectValue.value} will be attending`);
</script>
```

### Bind objects

Beside binding an array of strings, you can also bind an array of objects. These have to include the following props:

- `value` (required) => what gets bound to `v-model`
- `key` (optional) => a `:key` prop to identify the unique entry
- `text` (optional) => text to be shown instead of the value
- `disabled` (optional) => whether option element is `disabled` or not

**QSelect will then try the following:**

1. Create one option element for each `value` property and bind it.
2. If value does not exist, fall back to binding the whole object
3. Try and bind the `key` property to the option element
4. If key does not exist, fall back to binding the `value`
5. Try and show the `text` property for each option
6. If text does not exist, fall back to binding the `value`

<form @submit.prevent="onSubmit"  style="padding:0.5rem;border:1px solid red;border-radius:4px;">
  <q-select labelPrefix="Please select the " label="Number of attendees" :options="selectOptionsText" v-model="selectValue"></q-select>
  <p>Output: [ {{ selectValue }} ] visitors are attending</p>
  <q-button type="submit" label="Submit" />
</form>

**Example**

```vue
<template>
  <form @submit.prevent="onSubmit">
    <q-select labelPrefix="Please " label="Number of attendees" :options="selectOptionsText" v-model="selectValue"></q-select>
    <p>Output: [ {{ selectValue }} ] visitors are attending</p>
    <q-button type="submit" label="Submit" />
  </form>
</template>

<script setup>
import { ref } from 'vue';

const selectValue = ref(null)
const selectOptionsText = [
  { key: 1, text: "One Visitor", value: 1 },
  { key: 2, text: "Two Visitors", value: 2, disabled: true },
  { key: 3, text: "Three visitors", value: 3 }
]

const onSubmit = () => alert(`${selectValue.value} will be attending`);
</script>
```

### Required fields

> See [QInput@required-fields](input.md#required-fields) for behavior and customization

<form @submit.prevent="onSubmit" style="padding:0.5rem;border:1px solid red;border-radius:4px;">
  <q-select required requiredSign="(please select one)" label="Number of attendees" :options="selectOptions" v-model="selectValue"></q-select>
  <p>Output: {{ selectValue }}</p>
  <q-button type="submit" label="Submit" />
</form>

**Example**

```vue
<template>
  <form @submit.prevent="onSubmit">
    <q-select required requiredSign="(please select one)" label="Number of attendees" :options="selectOptions" v-model="selectValue"></q-select>
    <p>Output: {{ selectValue }}</p>
    <q-button type="submit" label="Submit" />
  </form>
</template>

<script setup>
import { ref } from 'vue';

const selectValue = ref(null)
const selectOptions = [
  'One Visitor',
  'Two Visitors',
  'Three Visitors',
];


const onSubmit = () => alert(`${selectValue.value} will be attending`);
</script>
```

### Multiple values behavior

When declaring the `multiple` HTML5 attribute, `QSelect` will not consider all selected entries. While this behavior could be adjusted, I'd recommend to just use `QCheckbox` whenever the selection of multiple elements is necessary

<form @submit.prevent="onSubmit" style="padding:0.5rem;border:1px solid red;border-radius:4px;">
  <q-select multiple labelPrefix="Please select the " label="Number of attendees" :options="selectOptionsText" v-model="selectValue"></q-select>
  <p>Output: [ {{ selectValue }} ] visitors are attending</p>
  <q-button type="submit" label="Submit" />
</form>

## Full component's code

### QSelect

<<< @/components/Form/QSelect.vue


