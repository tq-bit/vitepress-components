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

### Navigation Library

> Components to navigate with.
>
> [Link to Navigation Components](./showcase/Navigation/index.md)

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


<<< @/.vitepress/theme/main.css

### Darkmode

Radunia has a class-based darkmode which can be toggled by `QThemeButton`. `.dark-mode` is dynamically applied to the root - pseudoelement, based on whether or not the user has dark mode enabled. [Read more](./showcase/UI/themebutton.md)