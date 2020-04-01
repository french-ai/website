<template>
  <div id="app">
    <component :is="layout">
      <transition name="fade" mode="out-in">
      <router-view/>
      </transition>
    </component>
  </div>
</template>

<script>
const defaultLayout = 'default';

export default {
  computed: {
    layout() {
      return `${this.$route.meta.layout || defaultLayout}-layout`;
    },
  },
};
</script>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto&family=Source+Sans+Pro:wght@600&display=swap');

  * {
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-kerning: auto;
  }

  html {
    font-family: 'Roboto', sans-serif;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
  }

  a, button, footer {
    font-family: 'Source Sans Pro', sans-serif;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }

</style>
