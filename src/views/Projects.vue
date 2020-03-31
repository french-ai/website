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
      v-for="repo in info" v-bind:key="repo['id']"
      v-bind:avatar="repo['avatar_url']"
      v-bind:repository="repo.name"
      v-bind:profile="repo['login']"
      v-bind:description="repo.description"
      v-bind:lang="repo.language"
      />
    </div>

  </section>
</template>

<script>
import axios from 'axios';
import Repository from "../components/Repository"

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
