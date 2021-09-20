<script setup>
import vClip from '../../directives/vClip.js';
</script>


# Custom directives

## Register a directive

All directives that are mentioned here can be configured globally in the `main.js` file:

```js
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App)

// ... register directive

app.mount('#app');
```

## Overview


| Namespace            | Name       |          Link          |
| -------------------- | ---------- | :--------------------: |
| /directives/vClip/   | vClip.js   |   [vClip](./clip.md)   |
| /directives/vScroll/ | vScroll.js | [vScroll](./scroll.md) |
| /directives/vRipple/ | vRipple.js | [vRipple](./ripple.md) |