<template>
  <div class="column is-one-third">
    <div v-tilt class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img :src="avatar" alt="User avatar">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{ repository }}</p>
            <p class="subtitle is-6">@{{ profile }}</p>
          </div>
        </div>
        <div class="content has-text-centered">
          <p>{{ description }}</p>
          <nav class="level is-mobile">
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Langage</p>
                <p class="title">{{ lang }}</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Stars</p>
                <p class="title">{{ stars }}</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Forks</p>
                <p class="title">{{ forks }}</p>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <footer class="card-footer">
        <a :href="url" target="_blank" class="card-footer-item">{{ profile }}/{{ repository }}</a>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
      name: "Repository",
      props: {
          "avatar": String,
          "repository": String,
          "profile": String,
          "description": String,
          "lang": String,
          "stars": String,
          "forks": String,
          "url": String
      }
  }
</script>
