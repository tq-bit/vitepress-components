<script setup>
import vClip from '../../directives/vClip.js';
</script>


# Custom directives

All directives that are mentioned here can be configured globally in the `main.js` file:

```js
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App)

// ... register directive

app.mount('#app');
```

## Copy to clipboard

:::warning
Currently only works with Input values
:::

### Usage

Import the following directive/s (and optionally adjust the function's behavior)

```javascript
import vClip from '../../directives/vClip.js';
```

Register in your `main.js` file:

```js
app.directive('clip', vClip);
```

You can then use `v-clip` anywhere in your project

```vue
<input type="text" v-clipboard />
```

### Full directive's code

<<< @/directives/vClip.js
