<script setup>
import QInput from '../../components/Form/QInput.vue';
import vClip from '../../directives/vClip.js'
</script>

<style>
@import '../../.vitepress/theme/main.css'
</style>

# vClip directive

Click on an element to copy its value directly to the clipboard. Uses navigator's clipboard API.

[Browser Support](https://caniuse.com/?search=navigator%20clipboard)

## Usage

Register the following directive/s:

```js
import vClip from '../../directives/vClip.js';

// ...

app.directive('clip', vClip)
```

### Basic usage

vClip causes clicks on an element to copy its respective `value` binding. It is especially useful for copying longer text contents from inactive input elements or text areas.

:::warning
Since vClip is considered a runtime directive, it cannot be previewed in these docs.
:::

**Example**

```vue
<template>
  <q-input disabled v-model="inputValue" v-clip />
</template>
```

## Full directive's code

### vClip.js

<<< @/directives/vClip.js
