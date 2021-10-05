<script setup>
import QNavbar from '../../components/Navigation/Navbar/QNavbar.vue';
import QNavbarItem from '../../components/Navigation/Navbar/QNavbarItem.vue';
</script>

<style>
@import '../../.vitepress/theme/main.css'
</style>

# QNavbar component

QNavbar allows for quick and dynamic creation of navbars. This component comes with two slots to place navigation items in:

- `v-slot:navbar-left`
- `v-slot:navbar-right`

It uses the standard variants and is fully responsive.

## Styling

### Available variants

**To be assigned with `variant` binding**

- `primary`: Uses CSS color --accent-color-primary
- `secondary`: Uses CSS color --accent-color-secondary
- `info`: Uses CSS color --color-info
- `success`: Uses CSS color --color-success
- `warning`: Uses CSS color --color-warning
- `error`: Uses CSS color --color-error
- `dark`: Uses CSS color --black-color
- `bright`: Uses CSS color --white-color

## Requirements

:::tip Local CSS
This component uses a CSS module for styling the navbar wrapper, as well as its nested elements.
:::

| Type       | Path / Version                                       | Purpose                     | Optional |
| ---------- | ---------------------------------------------------- | --------------------------- | -------- |
| **Styles** | ../../assets/main.css                                | CSS Variables               | No       |
| **Styles** | ../../components/Navigation/Navbar/navbar.module.css | Navbar & Navbar item styles | No       |

## Usage
```js
import QNavbar from '../../components/Navigation/Navbar/QNavbar.vue';
import QNavbarItem from '../../components/Navigation/Navbar/QNavbarItem.vue';
```

### Basic usage

By default, the navigation bar has the defined primary color set. The text color switches with the currently active theme,

<q-navbar logo="https://blog.q-bit.me/content/images/2021/07/icon_q-bit.png" alt="Radunia" >
  <template v-slot:navbar-left>
    <q-navbar-item>Nav 1</q-navbar-item>
    <q-navbar-item>Nav 2</q-navbar-item>
    <q-navbar-item>Nav 3</q-navbar-item>
  </template>
  <template v-slot:navbar-right>
    <q-navbar-item>Nav 4</q-navbar-item>
    <q-navbar-item>Nav 5</q-navbar-item>
  </template>
</q-navbar>

**Example**

```vue
<template>
  <q-navbar logo="https://blog.q-bit.me/content/images/2021/07/icon_q-bit.png" alt="Radunia" >
    <template v-slot:navbar-left>
      <q-navbar-item>Nav 1</q-navbar-item>
      <q-navbar-item>Nav 2</q-navbar-item>
      <q-navbar-item>Nav 3</q-navbar-item>
    </template>
    <template v-slot:navbar-right>
      <q-navbar-item>Nav 4</q-navbar-item>
      <q-navbar-item>Nav 5</q-navbar-item>
    </template>
  </q-navbar>
</template>
```

### Variants & coloring


Coloring can be customized using `variant` binding

**Primary(default)**

<q-navbar variant="primary" logo="https://blog.q-bit.me/content/images/2021/07/icon_q-bit.png" alt="Radunia" >
  <template v-slot:navbar-right>
    <q-navbar-item>Nav 1</q-navbar-item>
    <q-navbar-item>Nav 2</q-navbar-item>
  </template>
</q-navbar>

**Secondary**

<q-navbar variant="secondary" logo="https://blog.q-bit.me/content/images/2021/07/icon_q-bit.png" alt="Radunia" >
  <template v-slot:navbar-right>
    <q-navbar-item>Nav 1</q-navbar-item>
    <q-navbar-item>Nav 2</q-navbar-item>
  </template>
</q-navbar>

**Info**

<q-navbar variant="info" logo="https://blog.q-bit.me/content/images/2021/07/icon_q-bit.png" alt="Radunia" >
  <template v-slot:navbar-right>
    <q-navbar-item>Nav 1</q-navbar-item>
    <q-navbar-item>Nav 2</q-navbar-item>
  </template>
</q-navbar>

**Success**

<q-navbar variant="success" logo="https://blog.q-bit.me/content/images/2021/07/icon_q-bit.png" alt="Radunia" >
  <template v-slot:navbar-right>
    <q-navbar-item>Nav 1</q-navbar-item>
    <q-navbar-item>Nav 2</q-navbar-item>
  </template>
</q-navbar>

**Warning**

<q-navbar variant="warning" logo="https://blog.q-bit.me/content/images/2021/07/icon_q-bit.png" alt="Radunia" >
  <template v-slot:navbar-right>
    <q-navbar-item>Nav 1</q-navbar-item>
    <q-navbar-item>Nav 2</q-navbar-item>
  </template>
</q-navbar>

**Error**

<q-navbar variant="error" logo="https://blog.q-bit.me/content/images/2021/07/icon_q-bit.png" alt="Radunia" >
  <template v-slot:navbar-right>
    <q-navbar-item>Nav 1</q-navbar-item>
    <q-navbar-item>Nav 2</q-navbar-item>
  </template>
</q-navbar>

**Dark**

<q-navbar variant="dark" logo="https://blog.q-bit.me/content/images/2021/07/icon_q-bit.png" alt="Radunia" >
  <template v-slot:navbar-right>
    <q-navbar-item>Nav 1</q-navbar-item>
    <q-navbar-item>Nav 2</q-navbar-item>
  </template>
</q-navbar>

**Bright**

<q-navbar variant="bright" logo="https://blog.q-bit.me/content/images/2021/07/icon_q-bit.png" alt="Radunia" >
  <template v-slot:navbar-right>
    <q-navbar-item>Nav 1</q-navbar-item>
    <q-navbar-item>Nav 2</q-navbar-item>
  </template>
</q-navbar>