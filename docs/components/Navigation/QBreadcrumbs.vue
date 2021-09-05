<template>
  <nav class="q-breadcrumb-list">
    <span class="q-breadcrumb-item">
      <a :href="origin"> Home </a>
    </span>
    <span
      class="q-breadcrumb-item"
      v-for="breadcrumb in breadcrumbs"
      :key="breadcrumb"
    >
      {{ separator }}
      <a :href="`${origin}/${breadcrumb.link}/`"> {{ breadcrumb.text }} </a>
    </span>
  </nav>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const origin = ref(window.location.origin);
    let activeLocation = ref(window.location.href);
    let activePath = ref([]);
    let breadcrumbs = ref([]);

    const monitorLocation = () => {
      setInterval(() => {
        const { href, pathname } = window.location;
        if (href !== activeLocation) {
          activeLocation = href;
          activePath = pathname;
          breadcrumbs.value = setBreadcrumbs();
        }
      }, 250);
    };

    const setBreadcrumbs = () => {
      const pathway = activePath.split("/").filter((el) => !!el);
      const pathlength = pathway.length;
      const crumbs = pathway.map((path, index) => {
        const elToSplice = pathlength - index;
        const wayClone = [...pathway];
        const crumbs = wayClone.splice(0, elToSplice);
        return {
          link: crumbs.join("/"),
          text: crumbs[elToSplice - 1],
        };
      });
      return crumbs.reverse();
    };

    onMounted(() => monitorLocation());

    return { origin, breadcrumbs };
  },
  props: {
    separator: {
      type: String,
      required: false,
      default: " / ",
    },
  },
};
</script>

<style scoped>
span {
  color: var(--text-color-primary);
}

.q-breadcrumb-list {
  padding: var(--gap-md) 0;
}
</style>