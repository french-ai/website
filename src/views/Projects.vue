<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container has-text-centered">
          <h1 class="title">Nos projets</h1>
          <p class="subtitle">Voice quelques projets réalisés par la communauté</p>
          <b-tooltip
            type="is-light"
            label="Vous pouvez ajouter un projet en complétant une PR"
            position="is-bottom"
          >
            <b-button tag="a" href="https://github.com/french-ai/" target="_blank" type="is-info">Ajoutez votre projet</b-button>
          </b-tooltip>
      </div>
    </div>
    <div class="columns is-multiline">
      <Repository
        v-for="info in infos"
        :key="info.id"
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
import api from '../api';
import Repository from '../components/Repository.vue';

const repos = [
  'aquadzn/coding-challenges',
  'SkalskiP/make-sense',
  'aquadzn/gpt2-french',
  'aquadzn/website',
  'dhaitz/mplcyberpunk',
];

export default {
  name: 'Project',
  components: {
    Repository,
  },
  data() {
    return {
      infos: [],
    };
  },
  mounted() {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < repos.length; i++) {
      api.getRepos(repos[i])
        .then((response) => (this.infos.push(response.data)))
        // eslint-disable-next-line no-console
        .catch((error) => console.log(error));
    }
  },
};
</script>

<style>
  footer {
    margin-top: 50px;
  }
</style>
