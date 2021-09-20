<script setup>
import vRipple from '../../directives/vRipple.js'
import QButton from '../../components/Form/QButton.vue'
</script>

<style>
@import '../../.vitepress/theme/main.css'
</style>

# vRipple directive

Use a smooth wave animation whereever the user of your applications clicks.

## Usage

Register the following directive/s:

```js
import vRipple from '../../directives/vRipple.js';

// ...

app.directive('ripple', vRipple)
```

### Basic usage

While waves can be added to any element, the most common use case is still with buttons:

<div style="padding:0.5rem;border:1px solid red;border-radius:4px;">
  <q-button size="large" variant="info" v-ripple label="Click me" />
  <q-button size="medium" variant="error" v-ripple label="Click me" />
  <q-button size="small" variant="secondary" v-ripple label="Click me" />
  <q-button size="small" variant="link" v-ripple label="Click me" />
</div>

**Example**

```vue
<template>
  <q-button size="large" variant="info" v-ripple label="Click me" />
  <q-button size="medium" variant="error" v-ripple label="Click me" />
  <q-button size="small" variant="secondary" v-ripple label="Click me" />
  <q-button size="small" variant="link" v-ripple label="Click me" />
</template>

<script setup>
import QButton from '../../Form/QButton.vue'
</script>
```

## Full directive's code

### vRipple.js

<<< @/directives/vRipple.js
