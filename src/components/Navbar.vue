<template>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ name: 'home' }">
                <img
                    src="https://avatars3.githubusercontent.com/u/50276613"
                    alt="French AI"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="router-link" :to="{ name: 'home' }">
              French AI
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
  name: "Navbar",
  data() {
    return {
      open: false
    };
  }
};
</script>
