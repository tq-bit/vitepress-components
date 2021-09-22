<script setup>
import { ref } from 'vue';

import QDropdown from '../../components/Form/QDropdown.vue';

const dropdownValue = ref(null);
const dropdownOptions = [
  'One Visitor',
  'Two Visitors',
  'Three Visitors',
];
const dropdownOptionsText = [
  { text: "One Visitor", value: 1 },
  { text: "Two Visitors", value: 2 },
  { text: "Three visitors", value: 3 }
];
const onSubmit = () => alert(`${dropdownValue.value} will be attending`);
</script>

<style>
@import '../../.vitepress/theme/main.css'
</style>

# QDropdown component

QDropdown allows your user to select from a variety of options. Its properties and functionalities are similar to the ones from [QInput](input.md), including label behavior and error handling.

## Requirements

| Type          | Path / Version        | Purpose             | Optional |
| ------------- | --------------------- | ------------------- | -------- |
| **Styles**    | ../../assets/main.css | CSS Variables       | No       |
| **Functions** | ../../use/uuid        | Assign ids to items | No       |

## Usage

Import the following component/s:

```javascript
import QDropdown from '../../components/Form/QDropdown.vue';
```
### Basic usage

QDropdown is a styled button that toggles a menu of selectable items. Whatever item is clicked on will be emitted back to the calling component.

:::tip
This component uses the same variants and sizes as [QButton](../Form/button.md#variants-sizing)
:::

<div style="padding:0.5rem;border:1px solid red;border-radius:4px;">
<q-dropdown label="Dropdown" @change="dropdownValue = $event" :options="dropdownOptions" />
<q-dropdown label="Dropdown info" variant="info" @change="dropdownValue = $event" :options="dropdownOptions" />
<p>Number of attendees: {{dropdownValue}}</p>
</div>

**Example**

```vue
<script setup>
const dropdownValue = ref(null);
const dropdownOptions = [
  'One Visitor',
  'Two Visitors',
  'Three Visitors',
];
</script>

<template>
  <q-dropdown label="Dropdown" @change="dropdownValue = $event" :options="dropdownOptions" />
  <q-dropdown label="Dropdown info" variant="info" @change="dropdownValue = $event" :options="dropdownOptions" />
  <p>Number of attendees: {{dropdownValue}}</p>
</template>
```

### Bind objects

Beside binding an array of strings, you can also bind an array of objects. These have to include the following props:

- `value` (required) => What gets shown in - and emitted from - the dropdown element
- `text` (optional) => text to be shown instead of the value

<div style="padding:0.5rem;border:1px solid red;border-radius:4px;">
  <q-dropdown label="Dropdown" @change="dropdownValue = $event" :options="dropdownOptionsText" />
  <q-dropdown label="Dropdown info" variant="info" @change="dropdownValue = $event" :options="dropdownOptionsText" />
  <p>Number of attendees: {{dropdownValue}}</p>
</div>

**Example**

```vue
<script setup>
const dropdownValue = ref(null);
const dropdownOptionsText = [
  { text: "One Visitor", value: 1 },
  { text: "Two Visitors", value: 2 },
  { text: "Three visitors", value: 3 }
];
</script>

<template>
  <q-dropdown label="Dropdown" @change="dropdownValue = $event" :options="dropdownOptionsText" />
  <q-dropdown label="Dropdown info" variant="info" @change="dropdownValue = $event" :options="dropdownOptionsText" />
  <p>Number of attendees: {{dropdownValue}}</p>
</template>
```

## Full component's code

### QDropdown

<<< @/components/Form/QDropdown.vue


