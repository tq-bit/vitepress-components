<script setup>
import { ref } from 'vue';
import QButton from '../../components/Form/QButton.vue';

let isLoading = ref(false);
let loadingCounter = ref(3)

const onButtonClick = () => {
  isLoading.value = true
  loadingCounter.value = 3;
  const countdown = setInterval(() => {
    loadingCounter.value -= 1;
    if(loadingCounter.value <= 0) {
      isLoading.value = false
      return clearInterval(countdown)
    }
  }, 1000)
}
</script>

<style>
@import '../../.vitepress/theme/main.css'
</style>

# QButton component

QButton is used to trigger actions or to display links. It includes a variety of classes to customize appearance.

## Styling

<!-- TODO: replace variants with new properties -->

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

### Available coloring

#### Background coloring

**To be assigned with `bgColor` binding**

- `primary` Uses the `--accent-color-primary` CSS variable
- `secondary` Uses the `--accent-color-secondary` CSS variable

#### Text coloring

**To be assigned with `textColor` binding**

> If undefined, the text color will depend on the color theme

- `bright` Uses the `--accent-color-primary` CSS variable
- `dark` Uses the `--accent-color-secondary` CSS variable


## Requirements

| Type          | Path / Version        | Purpose             | Optional |
| ------------- | --------------------- | ------------------- | -------- |
| **Styles**    | ../../assets/main.css | CSS Variables       | No       |
| **Functions** | ../../use/uuid        | Assign ids to items | No       |

## Usage

Import the following component/s:

```javascript
import QButton from '../../components/Form/QButton.vue'
```

### Basic usage

By default, the button has the defined primary color set. The text color switches with the currently active theme, the label & the loader are toggled based on whether `loading` is set to true or false

<div style="padding:0.5rem;border:1px solid red;border-radius:4px;">
  <q-button label="Submit form" :loading="isLoading" @click="onButtonClick" />
  <p v-if="isLoading && loadingCounter > 1">Done in {{loadingCounter}} seconds ...</p>
  <p v-else-if="isLoading && loadingCounter === 1">Almost there ...</p>
  <p v-else>Loader idle</p>
</div>

**Example**

```vue
<template>
  <q-button label="Submit form" :loading="isLoading" @click="onButtonClick" />
  <p v-if="isLoading && loadingCounter > 1">Done in {{loadingCounter}} seconds ...</p>
  <p v-else-if="isLoading && loadingCounter === 1">Almost there ...</p>
  <p v-else>Loader idle</p>
</template>

<script setup>
import { ref } from 'vue';

let isLoading = ref(false);
let loadingCounter = ref(3)

const onButtonClick = () => {
  isLoading.value = true
  loadingCounter.value = 3;
  const countdown = setInterval(() => {
    loadingCounter.value -= 1;
    if(loadingCounter.value <= 0) {
      isLoading.value = false
      return clearInterval(countdown)
    }
  }, 1000)
}
</script>
```

### Variants & sizing

Coloring and sizing can be customized using `variant` and `size` bindings.

<div style="padding:0.5rem;border:1px solid red;border-radius:4px;">
  <p><strong>Small sizing</strong> | Added by <code>size="small"</code></p>
  <q-button variant="info" size="small" label="Info" :loading="isLoading" @click="onButtonClick" />
  <q-button variant="success" size="small" label="Success" :loading="isLoading" @click="onButtonClick" />
  <q-button variant="warning" size="small" label="Warning" :loading="isLoading" @click="onButtonClick" />
  <q-button variant="error" size="small" label="Error" :loading="isLoading" @click="onButtonClick" />
  <q-button variant="primary" size="small" label="Primary" :loading="isLoading" @click="onButtonClick" />
  <q-button variant="secondary" size="small" label="Secondary" :loading="isLoading" @click="onButtonClick" />
  <q-button variant="link" size="small" label="Link" @click="onButtonClick" />

  **Example**
  ```vue
  <template>
    <q-button variant="info" size="small" label="Info" :loading="isLoading" @click="onButtonClick" />
  </template>
  ```

  <p><strong>Default sizing</strong> | Default setting</p>
  <q-button variant="info" label="Info" :loading="isLoading" @click="onButtonClick" />
  <q-button variant="success" label="Success" :loading="isLoading" @click="onButtonClick" />
  <q-button variant="warning" label="Warning" :loading="isLoading" @click="onButtonClick" />
  <q-button variant="error" label="Error" :loading="isLoading" @click="onButtonClick" />
  <q-button variant="primary" label="Primary" :loading="isLoading" @click="onButtonClick" />
  <q-button variant="secondary" label="Secondary" :loading="isLoading" @click="onButtonClick" />
  <q-button variant="link" label="Link" @click="onButtonClick" />

  **Example**
  ```vue
  <template>
    <q-button variant="info" size="medium" label="Info" :loading="isLoading" @click="onButtonClick" />
  </template>
  ```

  <p>
  <strong>Large sizing</strong>
  </p>
  <q-button variant="info" size="large" label="Info" :loading="isLoading" @click="onButtonClick" />
  <q-button variant="success" size="large" label="Success" :loading="isLoading" @click="onButtonClick" />
  <q-button variant="warning" size="large" label="Warning" :loading="isLoading" @click="onButtonClick" />
  <q-button variant="error" size="large" label="Error" :loading="isLoading" @click="onButtonClick" />
  <q-button variant="primary" size="large" label="Primary" :loading="isLoading" @click="onButtonClick" />
  <q-button variant="secondary" size="large" label="Secondary" :loading="isLoading" @click="onButtonClick" />
  <q-button variant="link" size="large" label="Link" @click="onButtonClick" />

  **Example**
  ```vue
  <template>
    <q-button variant="info" size="large" label="Info" :loading="isLoading" @click="onButtonClick" />
  </template>
  ```

  <p>
  <strong>XL sizing</strong>
  </p>
  <q-button variant="info" size="xlarge" label="Info" :loading="isLoading" @click="onButtonClick" />
  <q-button variant="success" size="xlarge" label="Success" :loading="isLoading" @click="onButtonClick" />
  <q-button variant="warning" size="xlarge" label="Warning" :loading="isLoading" @click="onButtonClick" />
  <q-button variant="error" size="xlarge" label="Error" :loading="isLoading" @click="onButtonClick" />
  <q-button variant="primary" size="xlarge" label="Primary" :loading="isLoading" @click="onButtonClick" />
  <q-button variant="secondary" size="xlarge" label="Secondary" :loading="isLoading" @click="onButtonClick" />
  <q-button variant="link" size="xlarge" label="Link" @click="onButtonClick" />

  **Example**
  ```vue
  <template>
    <q-button variant="info" size="xlarge" label="Info" :loading="isLoading" @click="onButtonClick" />
  </template>
  ```

  <p v-if="isLoading && loadingCounter > 1">Done in {{loadingCounter}} seconds ...</p>
  <p v-else-if="isLoading && loadingCounter === 1">Almost there ...</p>
  <p v-else>Loader idle</p>

  <p><strong>Full width</strong> | Added by <code>fluid</code> binding:</p>

  <q-button variant="info" fluid label="Info" :loading="isLoading" @click="onButtonClick" />
  <q-button variant="success" fluid label="Success" :loading="isLoading" @click="onButtonClick" />
  <q-button variant="warning" fluid label="Warning" :loading="isLoading" @click="onButtonClick" />
  <q-button variant="error" fluid label="Error" :loading="isLoading" @click="onButtonClick" />
  <q-button variant="primary" fluid label="Primary" :loading="isLoading" @click="onButtonClick" />
  <q-button variant="secondary" fluid label="Secondary" :loading="isLoading" @click="onButtonClick" />
  <q-button variant="link" fluid label="Link" @click="onButtonClick" />

  **Example**
  ```vue
  <template>
    <q-button variant="info" fluid label="Info" :loading="isLoading" @click="onButtonClick" />
  </template>
  ```

</div>

### Wave effect

Once registered, you can use the `v-ripple` - directive on these buttons, making them resemble their material design counterparts. Read more about ripple effects [here](../directives/ripple.md)

<q-button variant="info" label="Waving infos" v-ripple />

## Full component's code

### QButton

<<< @/components/Form/QButton.vue
