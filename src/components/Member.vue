<template>
    <div class="tile is-parent">
    <a :href="profile" target="_blank" class="tile is-child box">
        <p class="title is-5">{{ username }}</p>
        <figure class="image container is-128x128">
        <img class="is-rounded" :src="avatar">
        </figure>
    </a>
    </div>
</template>

<script>
export default {
  name: 'Member',
  props: {
    profile: String,
    username: String,
    avatar: String,
  },
};
</script>

<style>

</style>
