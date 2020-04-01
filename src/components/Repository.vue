<template>
  <div class="column is-one-third">
    <div v-tilt class="box">
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
          <p id="desc">{{ description }}</p>
          <nav class="level is-mobile">
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Langage</p>
                <p class="title is-4">{{ lang }}</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Stars</p>
                <p style="color: #f1c40f" class="title is-4">{{ stars }}</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Forks</p>
                <p class="title is-4">{{ forks }}</p>
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
  name: 'Repository',
  props: {
    avatar: String,
    repository: String,
    profile: String,
    description: String,
    lang: String,
    stars: String,
    forks: String,
    url: String,
  },
};
</script>

<style scoped>
  .box {
    transform-style: preserve-3d;
    transform: perspective(1000px);
  }

  .media {
    transform: translateZ(20px);
  }

  #desc {
    padding-top: 30px;
  }

  .card-footer {
    margin-top: 10px;
    transform: translateZ(20px);
  }

  .card-footer a {
    color: hsl(0, 0%, 21%);
  }

</style>
