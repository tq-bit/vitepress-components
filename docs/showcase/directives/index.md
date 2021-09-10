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

Click on an element to copy its value directly to the clipboard. Uses navigator's clipboard API.

[Browser Support](https://caniuse.com/?search=navigator%20clipboard)

:::warning
v-clipboard Currently only works with Input values
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

## Scroll element into view

Click on an element to scroll it to the top of the page. Accepts an optional binding to provide an offset, e.g. for fixed or absolutely positoined Navbars.

### Usage

Import the following directive/s

```javascript
import vScroll from '../../directives/vScroll.js';
```
Register in your `main.js` file:

```js
app.directive('scroll', vScroll);
```

You can then use `v-scroll` anywhere in your project

```vue
<h3 v-scroll>My awesome blog post</h3>
<h3 v-scroll="200">My awesome blog post with an Y-axis-offset of 200px</h3>
```

### Full directive's code

<<< @/directives/vScroll.js