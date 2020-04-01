<template>
    <b-navbar>
        <template slot="brand">
          <b-navbar-item id="french-ai" tag="router-link" :to="{ name: 'home' }">
            <span style="color: #fff;">
              -- 🧠 -
            </span>
            <span style="color: #1e3799;">
              french
            </span>
            <span style="color: #f3f3f3;">
              -
            </span>
            <span style="color: #eb2f06;">
              ai
            </span>
          </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="router-link" :to="{ name: 'home' }">
              Accueil
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ name: 'projects' }">
              Projets
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ name: 'about' }">
                À propos
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-dark" href="https://discord.gg/KdTANuj" target="_blank">
                      <img
                          src="../assets/png/discord_logo.png"
                          alt="Discord"
                      >
                    </a>
                    <a class="button is-dark" href="https://github.com/french-ai" target="_blank">
                      <img
                          src="../assets/png/github_logo.png"
                          alt="GitHub"
                      >
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      open: false,
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap');

  #french-ai {
    font-family: 'Bree Serif', serif;
  }

</style>
