<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="columns is-multiline">
        <div class="column">
          <div class="container">
            <figure class="image">
              <img src="../assets/svg/about.svg">
            </figure>
          </div>
        </div>

      <div class="column">
      <div class="container has-text-centered">
        <h1 class="title">
          À propos de French AI
        </h1>
        <h2 class="subtitle">
          Nous sommes une communauté de personnes intéressées par l'intelligence artificielle
        </h2>
        <div class="tile is-ancestor">
          <Member
            v-for="user in info" :key="user.id"
            v-bind:profile="user.html_url"
            v-bind:username="user.login"
            v-bind:avatar="user.avatar_url"
          />
        </div>
      </div>
      </div>

      </div>

    </div>
  </section>
</template>

<script>
import api from '../api';
import Member from '../components/Member.vue';

export default {
  name: 'About',
  components: {
    Member,
  },
  data() {
    return {
      info: null,
    };
  },
  mounted() {
    api.getMembers()
      // eslint-disable-next-line no-return-assign
      .then((response) => (this.info = response.data))
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error));
  },
};
</script>
