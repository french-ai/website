<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<template>
  <div>
    <Navbar/>

    <div class="container section">
      <div class="columns">
        <div class="column is-8">
          <slot/>
        </div>

        <div class="column is-4">
          <side-bar/>
        </div>
      </div>
    </div>

    <Footer/>
  </div>
</template>
