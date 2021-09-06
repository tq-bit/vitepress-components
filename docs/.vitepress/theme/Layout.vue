<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from "vitepress/theme";

import QThemeButton from "../../components/UI/Theme/QThemeButton.vue";
import QBreadcrumbs from "../../components/Navigation/QBreadcrumbs.vue";
import "./main.css";

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #page-top>
      <q-breadcrumbs />
    </template>
    <template #navbar-search>
      <q-theme-button :initWithPreference="false" style="margin-left: 1.5rem" />
    </template>
  </Layout>
</template>