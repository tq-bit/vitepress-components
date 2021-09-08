<script setup>
import {ref} from 'vue';
import QInput from '../../components/Form/QInput.vue'
import QInputGroup from '../../components/Form/QInputGroup.vue'
import QFlexContainer from "../../components/Layout/Flex/QFlexContainer.vue"
import QFlexColumn from "../../components/Layout/Flex/QFlexColumn.vue"
const inputValue = ref('');
const inputError = ref('');
const inputForm = ref({
  firstName: "",
  lastName: "",
  cityName: "",
  postcalCode: "",
  reservanceDate: "",
})
const onError = () => (inputError.value = inputError.value === "" ? "An error has occured" : "");;
const onSubmit = () => alert(`Your input: ${inputValue.value}`);
</script>

<style>
@import '../../.vitepress/theme/main.css'
</style>

# QInput component

QInput is kept as simple as possible to allow for a variety of use cases. It defaults to `100%` width and uses some basic [aria attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA), including error handling.

:::tip HTML input types
An extensive list of HTML5 input elements can be found [at the end of this page](#list-of-input-types)
:::

## Requirements

| Type           | Path / Version                              | Purpose             | Optional |
| -------------- | ------------------------------------------- | ------------------- | -------- |
| **Styles**     | ../../assets/main.css                       | CSS Variables       | No       |
| **Functions**  | ../../use/uuid                              | Assign ids to items | No       |
| **Components** | ../../components/Layout/Flex/QFlexContainer | Full form example   | Yes      |
| **Components** | ../../components/Layout/Flex/QFlexColumn    | Full form example   | Yes      |



## Usage

Import the following component/s:

```javascript
import QInput from '../../components/Form/QInput.vue'
```

### Basic use case

You can use `v-model` & `label` bindings on the component. The placeholder defaults to the label

<form @submit.prevent="onSubmit"  style="padding:0.5rem;border:1px solid red;border-radius:4px;">
  <q-input label="Name" v-model="inputValue" />
  <p>Output: {{inputValue}}</p>
</form>

**Example**

```vue
<script setup>
import { ref } from 'vue';
const inputValue = ref('');
</script>

<template>
  <q-input label="Name" v-model="inputValue" />
  <p>Output: {{inputValue}}</p>
</template>
```

### Placeholder prefix

In case the label alone is not enough, you can extend it with a prefix. Doing so makes the placeholder become lower case

<form @submit.prevent="onSubmit"  style="padding:0.5rem;border:1px solid red;border-radius:4px;">
  <q-input labelPrefix="Type in your " label="Name" v-model="inputValue" />
  <p>Output: {{inputValue}}</p>
</form>

**Example**

```vue
<script setup>
import { ref } from 'vue';
const inputValue = ref('');
</script>

<template>
  <q-input labelPrefix="Type in your " label="Name" v-model="inputValue" />
  <p>Output: {{inputValue}}</p>
</template>
```

### Required fields

Adding `required` as an attribute also adds a `requiredSign`. You can optionally customize its content.

#### Default ( * )

<form @submit.prevent="onSubmit" style="padding:0.5rem;border:1px solid red;border-radius:4px;">
  <q-input labelPrefix="Type in your " required label="Name" v-model="inputValue" />
  <p>Output: {{inputValue}}</p>
</form>

#### Custom sign ( required )

<form @submit.prevent="onSubmit" style="padding:0.5rem;border:1px solid red;border-radius:4px;">
  <q-input labelPrefix="Type in your " required requiredSign="(required)" label="Name" v-model="inputValue" />
  <p>Output: {{inputValue}}</p>
</form>

**Example**

```vue
<script setup>
import { ref } from 'vue';
const inputValue = ref('');
const onSubmit = () => alert(`Your input: ${inputValue.value}`);
</script>

<template>
  <form @submit.prevent="onSubmit">
    <q-input labelPrefix="Type in your " required requiredSign="(required)" label="Name" v-model="inputValue" />
    <p>Output: {{inputValue}}</p>
  </form>
</template>
```

### Error handling

Errors are rendered right below the input element. The form below will toggle errors when submitted to give you an idea of how they look like

<form @submit.prevent="onError" style="padding:0.5rem;border:1px solid red;border-radius:4px;">
  <q-input :error="inputError" labelPrefix="Type in your " label="Name" v-model="inputValue" />
  <p>Error: {{inputError}}</p>
</form>

**Example**

```vue
<script setup>
import { ref } from 'vue';
const inputError = ref('');
const onError = () => (inputError.value = inputError.value === "" ? "An error has occured" : "");
</script>

<template>
  <form @submit.prevent="onError">
    <q-input :error="inputError" labelPrefix="Type in your " label="Name" v-model="inputValue" />
    <p>Erorr: {{inputError}}</p>
  </form>
</template>
```

### Input groups

QInputGroup provides a wrapper for input elements using the `<legend>` - tag.

> The following example also requires the `QFlexColumn` component from the [/Layout/Flex](../Layout/flex.md) library

<form @submit.prevent="onSubmit" style="padding:0.5rem;border:1px solid red;border-radius:4px;">
<q-input-group :border="true" title="Personal information">
  <q-flex-container fluid>
    <q-flex-column :cols="6" :smCols="12">
      <q-input type="text" :error="inputError" labelPrefix="Type in your " label="First Name" v-model="inputForm.firstName" />
    </q-flex-column>
    <q-flex-column :cols="6" :smCols="12">
      <q-input type="text" :error="inputError" labelPrefix="Type in your " label="Last Name" v-model="inputForm.lastName" />
    </q-flex-column>
    <q-flex-column :cols="6" :smCols="12">
      <q-input type="text" :error="inputError" labelPrefix="Type in your " label="City" v-model="inputForm.cityName" />
    </q-flex-column>
    <q-flex-column :cols="6" :smCols="12">
      <q-input type="text" :error="inputError" labelPrefix="Type in your " label="Postal code" v-model="inputForm.postalCode" />
    </q-flex-column>
    <q-flex-column :cols="6" :smCols="12">
      <q-input type="date" :error="inputError" labelPrefix="Select your " label="Date of reservation" v-model="inputForm.reservanceDate" />
    </q-flex-column>
  </q-flex-container>
</q-input-group>

<section v-if="inputForm.review">
<h3>Please review your input:</h3>
<p>Name: {{inputForm.firstName}} {{inputForm.lastName}} </p>
<p>Adress: {{inputForm.postalCode}} {{inputForm.cityName}}</p>
<p>Reserving for: {{inputForm.reservanceDate}} </p>
</section>

</form>


```vue
<script setup>
import QFlexContainer from "../../components/Layout/Flex/QFlexContainer.vue";
import QFlexColumn from "../../components/Layout/Flex/QFlexColumn.vue";
const inputForm = ref({
  firstName: "",
  lastName: "",
  cityName: "",
  postcalCode: "",
  reservanceDate: "",
  review: false;
})
</script>

<template>
<form @submit.prevent="onSubmit">
<q-input-group :border="true" title="Personal information">
  <q-flex-container fluid>
    <q-flex-column :cols="6" :smCols="12">
      <q-input type="text" :error="inputError" labelPrefix="Type in your " label="First Name" v-model="inputForm.firstName" />
    </q-flex-column>
    <q-flex-column :cols="6" :smCols="12">
      <q-input type="text" :error="inputError" labelPrefix="Type in your " label="Last Name" v-model="inputForm.lastName" />
    </q-flex-column>
    <q-flex-column :cols="6" :smCols="12">
      <q-input type="text" :error="inputError" labelPrefix="Type in your " label="City" v-model="inputForm.cityName" />
    </q-flex-column>
    <q-flex-column :cols="6" :smCols="12">
      <q-input type="text" :error="inputError" labelPrefix="Type in your " label="Postal code" v-model="inputForm.postalCode" />
    </q-flex-column>
  </q-flex-container>
</q-input-group>
</form>

<h1>Your information:</h1>
<p>Name: {{inputForm.firstName}} {{inputForm.lastName}} </p>
<p>Adress: {{inputForm.postalCode}} {{inputForm.cityName}}</p>
</template>

```

## Full component's code

### QInput

<<< @/components/Form/QInput.vue

## List of input types

> Source: [W3schools](https://www.w3schools.com/html/html_form_input_types.asp)

TODO: Add a list element here