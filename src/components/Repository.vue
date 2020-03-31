<template>
    <div class="column is-one-third">
    <div class="card">
        <div class="card-content">
        <div class="media">
            <div class="media-left">
            <figure class="image is-48x48">
                <img :src="avatar" alt="User avatar">
            </figure>
            </div>
            <div class="media-content">
            <p class="title is-4">{{ repository }}</p>
            <a class="subtitle is-6">@{{ profile }}</a>
            </div>
        </div>

        <div class="content">
            {{ description }}
            <p>{{ lang }}</p>
            <br>
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
        </div>
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
        "lang": String
    }
}
</script>

<style>

</style>
