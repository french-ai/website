<template>
    <b-navbar transparent shadow>
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
            <b-navbar-item tag="router-link" :to="{ name: 'about' }">
                À propos
            </b-navbar-item>
            <b-navbar-dropdown hoverable label="Info">
                <b-navbar-item href="https://github.com/french-ai" target="_blank">
                    GitHub
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary" href="https://discord.gg/KdTANuj" target="_blank">
                      <img
                          src="https://raw.githubusercontent.com/aquadzn/website/master/src/assets/png/discord_logo.png"
                          alt="Discord"
                      >
                    </a>
                    <a class="button" href="https://github.com/french-ai" target="_blank">
                      <img
                          src="https://raw.githubusercontent.com/aquadzn/website/master/src/assets/png/github_logo.png"
                          alt="GitHub"
                      >
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<!--
<template>
  <nav class="navbar is-fixed-top is-transparent has-border-bottom-gray-light">
    <div class="navbar-brand">
      <div class="navbar-item" href="/">
        Vue multi layouts
      </div>

      <a class="navbar-burger" @click="open = !open">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="{'is-active': open}">
      <div class="navbar-start">
        <div class="navbar-item">
          <router-link class="button is-primary" to="/" @click.native="open = false">
            Home
          </router-link>
        </div>
        <div class="navbar-item">
          <router-link class="button is-primary" :to="{name: 'about'}" @click.native="open = false">
            About
          </router-link>
        </div>
        <div class="navbar-item">
          <router-link class="button is-primary" :to="{name: 'photos'}" @click.native="open = false">
            Photos
          </router-link>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <a class="button is-info" href="https://itnext.io/@arieldi" @click="open = false">
            @darkylmnx
          </a>
        </div>
        <div class="navbar-item">
          <a class="button is-info" href="https://foreignrap.com/" @click="open = false">
            Foreignrap
          </a>
        </div>
        <div class="navbar-item">
          <a class="button is-info" href="http://mustsee.earth" @click="open = false">
            Like traveling ? Click
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>
!-->

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
