<script setup>
import vLazy from '../../directives/vLazy.js'
</script>

<style>
@import '../../.vitepress/theme/main.css'
</style>

# vLazy directive

Scroll an element into view. Adding a value to the binding permits you to define a y-offset. This is useful if there's a navbar on top of your page.

## Usage

Register the following directive/s:

```js
import vLazy from '../../directives/vLazy.js';

// ...

app.directive('lazy', vLazy)
```

**Example**

> This directive is a required by the [QImage](../Media/image.md) component

```vue
<template>
  <q-image src="../assets/img/my-image.png" />
</template>
```

## Full directive's code

### vLazy.js

<<< @/directives/vLazy.js
