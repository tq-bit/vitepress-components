<script setup>
import QThemeButton from '../../components/UI/Theme/QThemeButton.vue'
</script>

<style>
@import '../../.vitepress/theme/main.css'
</style>

# QThemeButton components

Styled as a switch by default, this component is used to toggle between light- and darkmode. It recognizes the user's preferred color scheme using `"(prefers-color-scheme: dark)"` and saves this configuration in the browser's `localstorage`.

The size of this component is based on the CSS variable `--el-size-xs`, which describes its width. `calc` is used to determine all other dimensions, such as height and the size of the toggle ball.

## Requirements

| Type            | Path / Version        | Purpose             | Optional |
| --------------- | --------------------- | ------------------- | -------- |
| **Vue version** | Vue 3                 | Composition API     | No       |
| **Styles**      | ../../assets/main.css | CSS Variables       | Yes      |
| **Functions**   | ../../use/uuid        | Assign ids to items | No       |

## Usage

Import the following component/s:

```javascript
import QThemeButton from '../../components/UI/Theme/QThemeButton.vue'
```

### Basic usage

Just import and include the component into a single file.

<q-theme-button :initWithPreference="false" />

**Example**

```vue
<q-theme-button />
```

### Prefer localstorage settings

By default, the user's browser settings are preferred over those in localstorage. You can use `:initWithPreference="false"` to overwrite this behavior.

<q-theme-button :initWithPreference="false" />

**Example**

```vue
<q-theme-button :initWithPreference="false" />
```

## Full component's code

<<< @/components/UI/Theme/QThemeButton.vue