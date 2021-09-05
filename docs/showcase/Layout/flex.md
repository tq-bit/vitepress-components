<script setup>
import QFlexContainer from '../../components/Layout/Flex/QFlexContainer.vue'
import QFlexColumn from '../../components/Layout/Flex/QFlexColumn.vue'
</script>

<style>
@import '../../.vitepress/theme/main.css'
</style>

# QFlex components

Whenever the layouts QGrid provides are not sufficient, QFlex provides a more customizable approach. It extends the maximum count of columns from 4 to 12 and includes a powerful & responsive column component.

## Requirements

| Type       | Path / Version        | Purpose       | Optional |
| ---------- | --------------------- | ------------- | -------- |
| **Styles** | ../../assets/main.css | CSS Variables | No       |

## Usage

Import the following component/s:

```javascript
import QFlexContainer from '../../components/Layout/Flex/QFlexContainer.vue'
import QFlexColumn from '../../components/Layout/Flex/QFlexColumn.vue'
```

### Basic usage

Flex columns scale automatically depending on how many elements are nested within its parent component. That means that if no column attribute is bound, columns will take up all the remaining space within.

<q-flex-container>
  <q-flex-column style="padding: 0.5rem; background-color: #aaa; text-align: center">Column 1 / 3</q-flex-column>
  <q-flex-column style="padding: 0.5rem; background-color: #888; text-align: center">Column 2 / 3</q-flex-column>
  <q-flex-column style="padding: 0.5rem; background-color: #aaa; text-align: center">Column 3 / 3</q-flex-column>
</q-flex-container>

<q-flex-container>
  <q-flex-column style="padding: 0.5rem; background-color: #aaa; text-align: center">Column 1 / 6</q-flex-column>
  <q-flex-column style="padding: 0.5rem; background-color: #888; text-align: center">Column 2 / 6</q-flex-column>
  <q-flex-column style="padding: 0.5rem; background-color: #aaa; text-align: center">Column 3 / 6</q-flex-column>
  <q-flex-column style="padding: 0.5rem; background-color: #888; text-align: center">Column 4 / 6</q-flex-column>
  <q-flex-column style="padding: 0.5rem; background-color: #aaa; text-align: center">Column 5 / 6</q-flex-column>
  <q-flex-column style="padding: 0.5rem; background-color: #888; text-align: center">Column 6 / 6</q-flex-column>
</q-flex-container>

**Example**

```vue
<q-flex-container>
  <q-flex-column>Column 1 / 3</q-flex-column>
  <q-flex-column>Column 2 / 3</q-flex-column>
  <q-flex-column>Column 3 / 3</q-flex-column>
</q-flex-container>

<q-flex-container>
  <q-flex-column>Column 1 / 6</q-flex-column>
  <q-flex-column>Column 2 / 6</q-flex-column>
  <q-flex-column>Column 3 / 6</q-flex-column>
  <q-flex-column>Column 4 / 6</q-flex-column>
  <q-flex-column>Column 5 / 6</q-flex-column>
  <q-flex-column>Column 6 / 6</q-flex-column>
</q-flex-container>
```

### Set columns manually

If you're familiar with bootstrap's grid system, this one will be a breeze. The maximum amount of columns that can be assigned are 12

<q-flex-container>
  <q-flex-column :cols="3" style="padding: 0.5rem; background-color: #aaa; text-align: center">3 / 12 columns </q-flex-column>
  <q-flex-column :cols="5" style="padding: 0.5rem; background-color: #888; text-align: center">5 / 12 columns</q-flex-column>
  <q-flex-column :cols="4" style="padding: 0.5rem; background-color: #aaa; text-align: center">4 / 12 columns</q-flex-column>
</q-flex-container>

**Example**

```vue
<q-flex-container>
  <q-flex-column :cols="3">3 / 12 columns </q-flex-column>
  <q-flex-column :cols="5">5 / 12 columns</q-flex-column>
  <q-flex-column :cols="4">4 / 12 columns</q-flex-column>
</q-flex-container>
```

### Fluid sizing

Unline QGrid, QFLex does not scale down with screensize. Therefor, setting this container to fluid grants only a bit of additional spacing

<q-flex-container :fluid="true">
  <q-flex-column :cols="3" style="padding: 0.5rem; background-color: #aaa; text-align: center">3 / 12 columns </q-flex-column>
  <q-flex-column :cols="5" style="padding: 0.5rem; background-color: #888; text-align: center">5 / 12 columns</q-flex-column>
  <q-flex-column :cols="4" style="padding: 0.5rem; background-color: #aaa; text-align: center">4 / 12 columns</q-flex-column>
</q-flex-container>

**Example**

```vue
<q-flex-container :fluid="true">
  <q-flex-column :cols="3">3 / 12 columns </q-flex-column>
  <q-flex-column :cols="5">5 / 12 columns</q-flex-column>
  <q-flex-column :cols="4">4 / 12 columns</q-flex-column>
</q-flex-container>
```

### Responsive column sizing

Just like with the grid sizing, QFlex follows the standard layout media queries. For each screen size, a column width can be specified:

| Vue Attribute | Media Query                                |
| :-----------: | ------------------------------------------ |
|    smCols     | (max-width: 768px)                         |
|    mdCols     | (max-width: 992px) and (min-width: 768px)  |
|    lgCols     | (max-width: 1200px) and (min-width: 992px) |
|    xlCols     | (min-width: 1200px)                        |

<q-flex-container>
  <q-flex-column style="background-color: #aaa; text-align: center"></q-flex-column>
  <q-flex-column :smCols="12" :mdCols="10" :lgCols="8" :xlCols="6" style="padding: 0.5rem; background-color: #888; text-align: center">The width of the inner column scales up with screen size</q-flex-column>
  <q-flex-column style="background-color: #aaa; text-align: center"></q-flex-column>
</q-flex-container>

**Example**

```vue
<q-flex-container>
  <q-flex-column></q-flex-column>
  <q-flex-column :smCols="12" :mdCols="10" :lgCols="8" :xlCols="6">
    Inner column's width scales up with screen size
  </q-flex-column>
  <q-flex-column></q-flex-column>
</q-flex-container>
```

## Full component's code

### QFlexContainer

<<< @/components/Layout/Flex/QFlexContainer.vue

### QFlexColumn

<<< @/components/Layout/Flex/QFlexColumn.vue
