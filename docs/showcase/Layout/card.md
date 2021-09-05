<script setup>
import QCard from '../../components/Layout/Cards/QCard.vue'
</script>

<style>
@import '../../.vitepress/theme/main.css'
</style>

# QCard component

Cards are usually composed by a header, body and footer part. They might include images in their upper - and call to actions in their lower part. Cards go well together with **flexbox** or **grid** layout.

## Requirements

| Type       | Path / Version        | Purpose       | Optional |
| ---------- | --------------------- | ------------- | -------- |
| **Styles** | ../../assets/main.css | CSS Variables | No       |

## Usage

Import the following component/s:

```javascript
import QCard from '../../components/Layout/Cards/QCard.vue'
```

### Card with title, body & footer

Cards can be extended using a footer to place call to actions or submit buttons.

<q-card title="A common card element" >
  <template v-slot:card-body>
    <p>
      The card's body can be injected using v-slot:card-body.
      It can be filled with text, form elements or images.
      You can also add a footer by adding the v-slot:card-footer.
    </p>
  </template>
  <template v-slot:card-footer>
    <div>
      <a style="margin-right: 1.5rem;" href="#">Read more</a>
      <a href="#">Sign up</a>
    </div>
  </template>
</q-card>

**Example**

```vue
<q-card title="A common card element" >
  <template v-slot:card-body>
    <p>
      The card's body can be injected using v-slot:card-body.
      It can be filled with text, form elements or images.
      You can also add a footer by adding the v-slot:card-footer.
    </p>
  </template>
  <template v-slot:card-footer>
    <a style="margin-right: 1.5rem;" href="#">Read more</a>
    <a href="#">Sign up</a>
  </template>
</q-card>
```

### Card with an image

<q-card title="A card with an image" imgSrc="../../public/forest.jpg" imgAlt="an image showing a forest" imgLoading="lazy" >
  <template v-slot:card-body>
    <p>
      Images can be bound to the root card element.
      They will be lazy loaded by default, which can
      be overwritten by specifying imgLoading="eager"
    </p>
  </template>
  <template v-slot:card-footer>
    <div>
      <a style="margin-right: 1.5rem;" href="#">Read more</a>
      <a href="#">Sign up</a>
    </div>
  </template>
</q-card>

**Example**

```vue
<q-card
  title="A card with an image"
  imgSrc="../../public/forest.jpg"
  imgAlt="an image showing a forest"
  imgLoading="lazy" >
  <template v-slot:card-body>
    <p>
      Images can be bound to the root card element.
      They will be lazy loaded by default, which can
      be overwritten by specifying imgLoading="eager"
    </p>
  </template>
  <template v-slot:card-footer>
    <div>
      <a style="margin-right: 1.5rem;" href="#">Read more</a>
      <a href="#">Sign up</a>
    </div>
  </template>
</q-card>
```

## Full component's code

### QCard

<<< @/components/Layout/Cards/QCard.vue
