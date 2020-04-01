<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="columns">
        <div class="column">
          <div class="container">
            <figure class="image is-fullwidth">
              <img src="../assets/svg/home.svg">
            </figure>
          </div>
        </div>
        <div class="column">
          <div class="container has-text-centered">
            <h1 class="title">Communauté francophone sur l'intelligence artificielle</h1>
            <p class="subtitle">Plus de 2000 membres présents!</p>
            <br/>
            <div class="buttons is-centered">
                <b-button tag="a" href="https://discord.gg/KdTANuj" target="_blank" type="is-info" size="is-medium">Rejoignez-nous</b-button>
                <b-tooltip type="is-light" label="Découvrez les projets des membres de la communauté" position="is-bottom" size="is-medium" multilined>
                  <b-button tag="router-link" :to="{ name: 'projects' }" type="is-danger" size="is-medium">Projets</b-button>
                </b-tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
