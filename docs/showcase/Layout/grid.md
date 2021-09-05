<script setup>
import QGridContainer from '../../components/Layout/Grid/QGridContainer.vue'
import QGridColumn from '../../components/Layout/Grid/QGridColumn.vue'
</script>

<style>
@import '../../.vitepress/theme/main.css'
</style>

# QGrid components

Each container can have one or several sub items. Usage of columns is encouraged as they provide some standard paddings. They're not mandatory though.

## Requirements

| Type       | Path / Version        | Purpose       | Optional |
| ---------- | --------------------- | ------------- | -------- |
| **Styles** | ../../assets/main.css | CSS Variables | No       |

## Usage

Import the following component/s:

```javascript
import QGridContainer from '../../components/Layout/Grid/QGridContainer.vue'
import QGridColumn from '../../components/Layout/Grid/QGridColumn.vue'
```

### One column layout

Containers are responsive. Their width is relative to their respective parent element.

<q-grid-container format="1">
  <q-grid-column style="padding: 0.5rem; background-color: #aaa; text-align: center">Column 1</q-grid-column>
  <q-grid-column style="padding: 0.5rem; background-color: #888; text-align: center">Column 2</q-grid-column>
  <q-grid-column style="padding: 0.5rem; background-color: #aaa; text-align: center">Column 3</q-grid-column>
</q-grid-container>

```vue
<q-grid-container format="1">
  <q-grid-column >Column 1</q-grid-column>
  <q-grid-column >Column 2</q-grid-column>
  <q-grid-column >Column 3</q-grid-column>
</q-grid-container>
```

### Three even columns - format

Three columns that scale down at less than `992px`. Use whenever you need a bit of space around your content

<q-grid-container format="1">
  <q-grid-column style="padding: 0.5rem; background-color: #aaa; text-align: center">Column 1</q-grid-column>
  <q-grid-column style="padding: 0.5rem; background-color: #888; text-align: center">Column 2</q-grid-column>
  <q-grid-column style="padding: 0.5rem; background-color: #aaa; text-align: center">Column 3</q-grid-column>
</q-grid-container>

**Example**

```vue
<q-grid-container format="1/1/1">
  <q-grid-column>Column 1</q-grid-column>
  <q-grid-column>Column 2</q-grid-column>
  <q-grid-column>Column 3</q-grid-column>
</q-grid-container>
```

### Three even columns - cols

Another way to achieve the above is to specify `cols` instead of `format`. Cols can be any numeric value, but should not be extended beyond 12

<q-grid-container :cols="3">
  <q-grid-column style="padding: 0.5rem; background-color: #aaa; text-align: center">Column 1</q-grid-column>
  <q-grid-column style="padding: 0.5rem; background-color: #888; text-align: center">Column 2</q-grid-column>
  <q-grid-column style="padding: 0.5rem; background-color: #aaa; text-align: center">Column 3</q-grid-column>
</q-grid-container>

**Example**

```vue
<q-grid-container :cols="3">
  <q-grid-column>Column 1</q-grid-column>
  <q-grid-column>Column 2</q-grid-column>
  <q-grid-column>Column 3</q-grid-column>
</q-grid-container>
```

### 1/2/1 format

A big column surrounded by two smaller ones. Useful to make content stand out or reduce the size of the normal container.

<q-grid-container format="1/2/1">
  <q-grid-column style="padding: 0.5rem; background-color: #aaa; text-align: center">Column 1</q-grid-column>
  <q-grid-column style="padding: 0.5rem; background-color: #888; text-align: center">Column 2</q-grid-column>
  <q-grid-column style="padding: 0.5rem; background-color: #aaa; text-align: center">Column 3</q-grid-column>
</q-grid-container>

**Example**

```vue
<q-grid-container format="1/2/1">
  <q-grid-column>Column 1</q-grid-column>
  <q-grid-column>Column 2</q-grid-column>
  <q-grid-column>Column 3</q-grid-column>
</q-grid-container>
```

### 2/1/2 format

A small column surrounded by two bigger ones. Useful in case you'd like to make two separate columns stand out

<q-grid-container format="2/1/2">
  <q-grid-column style="padding: 0.5rem; background-color: #aaa; text-align: center">Column 1</q-grid-column>
  <q-grid-column style="padding: 0.5rem; background-color: #888; text-align: center">Column 2</q-grid-column>
  <q-grid-column style="padding: 0.5rem; background-color: #aaa; text-align: center">Column 3</q-grid-column>
</q-grid-container>

**Example**

```vue
<q-grid-container format="2/1/2">
  <q-grid-column>Column 1</q-grid-column>
  <q-grid-column>Column 2</q-grid-column>
  <q-grid-column>Column 3</q-grid-column>
</q-grid-container>
```

### Fluid container

In order to scale a container to its full size, just add `:fluid="true"` to the grid container element

<q-grid-container :fluid="true" format="1/1/1">
  <q-grid-column style="padding: 0.5rem; background-color: #aaa; text-align: center">Column 1</q-grid-column>
  <q-grid-column style="padding: 0.5rem; background-color: #888; text-align: center">Column 2</q-grid-column>
  <q-grid-column style="padding: 0.5rem; background-color: #aaa; text-align: center">Column 3</q-grid-column>
</q-grid-container>

```vue
<q-grid-container :fluid="true" format="1/1/1">
  <q-grid-column>Column 1</q-grid-column>
  <q-grid-column>Column 2</q-grid-column>
  <q-grid-column>Column 3</q-grid-column>
</q-grid-container>
```

## Full component's code

### QGridContainer

<<< @/components/Layout/Grid/QGridContainer.vue

### QGridColumn

<<< @/components/Layout/Grid/QGridColumn.vue
