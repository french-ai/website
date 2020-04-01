<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="columns">
        <div class="column">
          <div class="container">
            <figure class="image is-fullwidth">
              <img src="../assets/svg/404.svg">
            </figure>
          </div>
        </div>
        <div class="column">
          <div class="container has-text-centered">
            <h1 class="title">Vous êtes perdu ?</h1>
            <p class="subtitle">Retournez sur la page d'accueil</p>
            <b-button
              tag="router-link" :to="{ name: 'home' }"
              type="is-info"
              size="is-medium"
            >Accueil
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
