<script setup>
import QImage from '../../components/Media/QImage.vue';
</script>

<style>
@import '../../.vitepress/theme/main.css'
</style>

# QImage component

Dead simple img component with included lazy loading.

## Requirements

| Type           | Path / Version                                  | Purpose             | Optional |
| -------------- | ----------------------------------------------- | ------------------- | -------- |
| **Styles**     | ../../assets/main.css                           | CSS Variables       | No       |
| **Directives** | [../../directives/vLazy](../directives/lazy.md) | Lazy load the image | No       |

## Usage

QImage can be used instead of any common image. It lazy loads the image by default using the browser's `IntersectionObserver`. It will be loaded once part of the image comes into view.

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