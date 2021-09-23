<script setup>
import { useData } from 'vitepress'
const { site } = useData()
</script>

# Radunia Components

{{site.description}}

## Component collection

Components are grouped by purpose. Each resides in its own directory and has an equivalent inside the Components - directory of the main Radunia project.

### Layout Library

> Components that provide structure to a website, using grids or flexboxes.
>
> [Link to Layout Components](./showcase/Layout/index.md);

### UI Library

> Anything that requires user interaction without meaningful feedback.
>
> [Link to UI Components](./showcase/UI/index.md)

### Form Library

> Anything that is part of a web formular. Form components range from smaller text-inputs over selections up till a bigger and more complex upload section items.
>
> [Link to Form Components](./showcase/Form/index.md)

### Media library

> All components that include dynamic and rich content
>
> [Link to Media Components](./showcase/Media/index.md)

## Custom directives

> Within the showcase, there are some ungrouped, simple custom directives.
>
> [Check out the custom directives](./showcase/directives/index.md)

## Dependencies

Some components depend upon other components or imported functions. Each of them are outlined in the respective component document.

- The styles for this documentation are located under `/docs/assets/main.css`
- Composition functions for this documentation are located under `/docs/use/*.js`

## Global styles

A majority of components in this project depend on global CSS variables. They have to be declared in a separate file or in the `App.vue` component or a dedicated file.

### Template for css variables

Add the following code to your `App.vue` file:

```css
:root.dark-theme {
  /* Background colors */
  --background-color-primary: #1e1e1e;
  --background-color-tartiary: #2d2d30;
  --background-color-secondary: #252526;

  /* Text colors */
  --text-color-primary: #ddd;
  --text-color-secondary: #eee;

  /* Accent colors */
  --color-info: #34568b;
  --color-success: #00a300;
  --color-warning: #ffa500;
  --color-error: #cd212a;
  --grey-color: #3f3f3f;
}

:root {
  /* Background colors */
  --background-color-primary: #eee;
  --background-color-secondary: #f5f5f5;
  --background-color-tartiary: #fefefe;

  /* Accent colors */
  --accent-color-primary: rgb(104, 182, 118);
  --accent-color-secondary: rgb(77, 158, 91);
  --accent-color-blur-primary: rgba(104, 182, 118, 0.7);
  --accent-color-blur-secondary: rgba(77, 158, 91, 0.7);

  /* Text colors */
  --text-color-primary: #222;
  --text-color-secondary: #333;

  --black-color: #29201a;
  --grey-color: #cacaca;
  --white-color: #f2f2f2;
  --color-info: #34568b;
  --color-success: #00a300;
  --color-warning: #ffa500;
  --color-error: #cd212a;
  --duration-quickest: 0.25s;
  --duration-quick: 0.5s;
  --duration-semi: 0.75s;
  --duration-slow: 1s;
  --el-size-xxs: 2.5rem;
  --el-size-xs: 4rem;
  --el-size-sm: 7.5rem;
  --el-size-md: 10rem;
  --el-size-l: 15rem;
  --el-size-xl: 20rem;
  --gap-tiny: 0.1rem;
  --gap-xxs: 0.125rem;
  --gap-xs: 0.25rem;
  --gap-sm: 0.5rem;
  --gap-md: 0.75rem;
  --gap-lg: 1rem;
  --gap-xl: 1.25rem;
  --gap-xxl: 1.5rem;
  --gap-max: 1.75rem;
  --text-size-sm: 0.9rem;
  --text-size-md: 1.05rem;
  --text-size-lg: 1.15rem;
  --text-size-xl: 1.35rem;
  --text-size-xxl: 1.65rem;
}
```

### Darkmode

Radunia has a class-based darkmode which can be toggled by `QThemeButton`. `.dark-mode` is dynamically applied to the root - pseudoelement, based on whether or not the user has dark mode enabled. [Read more](./showcase/UI/themebutton.md)