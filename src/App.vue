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
const default_layout = "default";

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    }
  },

  created() {
    // nothing defined here (when this.$route.path is other than "/")
    console.log(this.$route, this.$route.meta.layout);
  },

  updated() {
    // something defined here whatever the this.$route.path
    console.log(this.$route, this.$route.meta.layout);
  }
};
</script>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Sen&display=swap');

  html, body {
    font-family: 'Roboto', sans-serif;
  }
  a {
    font-family: 'Sen', sans-serif;
  }

  html { position: absolute; top: 0; bottom: 0; left: 0; right: 0; }    
/* alternatively: html { min-height: 100%; height: 100%; } */    

  html { min-height: 100%; }
  body { min-height: 100%; }

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
