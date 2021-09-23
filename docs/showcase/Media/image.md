<script setup>
import { ref } from 'vue';

import QImage from '../../components/Media/QImage.vue';

const inputValue = ref('');
</script>

<style>
@import '../../.vitepress/theme/main.css'
</style>

# QImage component

QImage is kept as simple as possible to allow for a variety of use cases. It defaults to `100%` width and uses some basic [aria attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA), including error handling.

:::tip HTML input types
An extensive list of HTML5 input elements can be found [at the end of this page](#list-of-input-types)
:::

## Requirements

| Type           | Path / Version                                  | Purpose              | Optional |
| -------------- | ----------------------------------------------- | -------------------- | -------- |
| **Styles**     | ../../assets/main.css                           | CSS Variables        | No       |
| **Directives** | [../../directives/vLazy](../directives/lazy.md) | Lazy load this image | No       |

## Usage

QImage can be used instead of any common image. It lazy loads the image by default using the browser's `IntersectionObserver`. It will be loaded once 25% of the image placeholder's content are visible within the screen area.

> This behavior can be overwritten inside the directive

### Basic usage

Place an image source into the `src` binding.

:::warning
Make sure to have the `vLazy` directive imported and globally enabled
:::

<q-image src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80" />

<q-image src="https://images.unsplash.com/photo-1611923186986-9351177d3816?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80" />

<q-image v-lazy src="https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" />

<q-image v-lazy src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" />

**Example**

```vue
<template>
  <q-image src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80" />
</template>
```

## Full component's code

### QImage

<<< @/components/Media/QImage.vue