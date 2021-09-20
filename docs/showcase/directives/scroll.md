<script setup>
import vScroll from '../../directives/vScroll.js'
</script>

<style>
@import '../../.vitepress/theme/main.css'
</style>

# vScroll directive

Scroll an element into view. Adding a value to the binding permits you to define a y-offset. This is useful if there's a navbar on top of your page.

## Usage

Register the following directive/s:

```js
import vScroll from '../../directives/vScroll.js';

// ...

app.directive('scroll', vScroll)
```

### Basic usage

Consider the following examples:

<div style="padding:0.5rem;border:1px solid red;border-radius:4px;">
  <h2 v-scroll>Click me - I'll be hidden under the navbar</h2>
  <h2 v-scroll="80">And I'll ve scrolled into view just right</h2>
</div>

**Example**

```vue
<template>
  <h2 v-scroll>I am hidden under the navbar</h2>
  <h2 v-scroll="80">I am scrolled into view just right</h2>
</template>
```

## Full directive's code

### vScroll.js

<<< @/directives/vScroll.js
