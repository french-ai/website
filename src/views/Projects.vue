<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container has-text-centered">
          <h1 class="title">Nos projets</h1>
          <p class="subtitle">Voice quelques projets réalisés par la communauté</p>
      </div>
    </div>
    <div class="columns is-multiline">
      <Repository
        v-bind:avatar="info.owner.avatar_url"
        v-bind:repository="info.name"
        v-bind:profile="info.owner.login"
        v-bind:description="info.description"
        v-bind:lang="info.language"
        v-bind:stars="info.stargazers_count"
        v-bind:forks="info.forks_count"
        v-bind:url="info.html_url"
      />
    </div>

  </section>
</template>

<script>
import axios from 'axios';
import Repository from "../components/Repository"

// let one = "https://github.com/aquadzn/coding-challenges";
// let two = "https://github.com/SkalskiP/make-sense";
// let three = "https://github.com/aquadzn/gpt2-french";

export default {
    name: "Project",
    components: {
      Repository
    },
    data() {
        return {
            info: null
        }
    },
    mounted() {
        axios
        .get('https://api.github.com/repos/aquadzn/website')
        .then(response => (this.info = response.data))
        .catch(error => console.log(error))
    }
}
</script>
