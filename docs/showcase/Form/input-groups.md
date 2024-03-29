<script setup>
import { reactive } from 'vue';

import QInput from '../../components/Form/QInput.vue'
import QSelect from '../../components/Form/QSelect.vue';
import QButton from '../../components/Form/QButton.vue'
import QInputGroup from '../../components/Form/QInputGroup.vue'
import QFlexContainer from "../../components/Layout/Flex/QFlexContainer.vue"
import QFlexColumn from "../../components/Layout/Flex/QFlexColumn.vue"

const inputForm = reactive({
  firstName: "",
  lastName: "",
  cityName: "",
  postcalCode: "",
  cityName: "",
  email: "",
  phone: "",
  reservanceDate: "",
  visitors: "",
  review: false,
})

const visitorOptions = [
  'One Visitor',
  'Two Visitors',
  'Three Visitors',
];
const onCheckForm = () => inputForm.review = true;
const onSubmitForm = () => {
  alert('Submitted form successfully')
  onResetForm();
};
const onResetForm = () => {
  inputForm.firstName = "";
  inputForm.lastName = "";
  inputForm.cityName = "";
  inputForm.postcalCode = "";
  inputForm.cityName = "";
  inputForm.email = "";
  inputForm.phone = "";
  inputForm. reservanceDate = "";
  inputForm.visitors = null;
  inputForm.review = false;
}
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
| **Components** | ../../components/Form/QInput.vue            | Full form example   | Yes      |
| **Components** | ../../components/Form/QButton.vue           | Full form example   | Yes      |

## Usage

Import the following component/s:

```javascript
import QInput from '../../components/Form/QInput.vue'
import QSelect from '../../components/Form/QSelect.vue';
import QButton from '../../components/Form/QButton.vue'
import QInputGroup from '../../components/Form/QInputGroup.vue'
import QFlexContainer from "../../components/Layout/Flex/QFlexContainer.vue"
import QFlexColumn from "../../components/Layout/Flex/QFlexColumn.vue"
```

### Basic usage

QInputGroup provides a wrapper for input elements using the `<legend>` - tag.

> The following example also requires the `QFlexColumn` component from the [/Layout/Flex](../Layout/flex.md) library and `QButton`

<form @submit.prevent="onSubmitForm" style="padding:0.5rem;border:1px solid red;border-radius:4px;">
<q-input-group :border="true" title="Personal information">
  <q-flex-container fluid>
    <q-flex-column :cols="6" :smCols="12">
      <q-input required type="text" labelPrefix="Type in your " label="First Name" v-model="inputForm.firstName" />
    </q-flex-column>
    <q-flex-column :cols="6" :smCols="12">
      <q-input type="text" labelPrefix="Type in your " label="Last Name" v-model="inputForm.lastName" />
    </q-flex-column>
    <q-flex-column :cols="6" :smCols="12">
      <q-input type="text" labelPrefix="Type in your " label="City" v-model="inputForm.cityName" />
    </q-flex-column>
    <q-flex-column :cols="6" :smCols="12">
      <q-input type="text" labelPrefix="Type in your " label="Postal code" v-model="inputForm.postalCode" />
    </q-flex-column>
    <q-flex-column :cols="6" :smCols="12">
      <q-input required type="email" labelPrefix="Type in your " label="Email adress" v-model="inputForm.email" />
    </q-flex-column>
    <q-flex-column :cols="6" :smCols="12">
      <q-input type="tel" labelPrefix="Type in your " label="Phone number" v-model="inputForm.phone" />
    </q-flex-column>
    <q-flex-column :cols="6" :smCols="12">
      <q-input required type="date" labelPrefix="Select your " label="Date of reservation" v-model="inputForm.reservanceDate" />
    </q-flex-column>
    <q-flex-column :cols="6" :smCols="12">
      <q-select required labelPrefix="Please select the " label="Number of attendees" :options="visitorOptions" v-model="inputForm.visitors" />
    </q-flex-column>
    <q-flex-column :cols="12">
      <q-button label="Check options" type="Button" @click="onCheckForm" />
    </q-flex-column>
  </q-flex-container>
</q-input-group>

<section v-if="inputForm.review">
<h3>Please review your input:</h3>
<p>Name: {{inputForm.firstName}} {{inputForm.lastName}} </p>
<p>Adress: {{inputForm.postalCode}} {{inputForm.cityName}}</p>
<p>Reserving for: {{inputForm.reservanceDate}} | {{inputForm.visitors}}</p>
<q-button label="Submit form" type="Submit" />
<q-button variant="link" label="Reset form" type="Reset" @click="onResetForm"/>
</section>

</form>

## Full component's code

### QInputGroup

<<< @/components/Form/QInputGroup.vue
