<template>
  <nav
    class="q-navbar"
    :class="{
      'q-navbar-v-primary': variant === 'primary',
      'q-navbar-v-secondary': variant === 'secondary',
      'q-navbar-v-info': variant === 'info',
      'q-navbar-v-success': variant === 'success',
      'q-navbar-v-warning': variant === 'warning',
      'q-navbar-v-error': variant === 'error',
      'q-navbar-v-bright': variant === 'bright',
      'q-navbar-v-dark': variant === 'dark'
    }"
  >
    <div class="q-navbar-brand">
      <img class="q-navbar-brand-logo" v-if="!!logo" :src="logo" :alt="alt" />
      <h2 class="q-navbar-brand-name" v-else>{{ alt }}</h2>
    </div>
    <div class="q-navbar-navigation-desktop">
      <ul class="q-navbar-list">
        <slot name="navbar-left" />
      </ul>
      <ul class="q-navbar-list">
        <slot name="navbar-right" />
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  setup() {

  },

  props: {
    logo: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: 'Radunia'
    },
    variant: {
      type: String,
      default: "primary",
      validator(value) {
        const isPrimary = value === "primary";
        const isSecondary = value === "secondary";
        const isBright = value === "dark";
        const isDark = value === "bright";
        return (
          isPrimary ||
          isSecondary ||
          isBright ||
          isDark
        );
      },
    },
  }
}
</script>

<style>
@import "./navbar.module.css";
</style>