<template>
  <div class="posts_index">
    <h1>The Posts</h1>
    <div v-for="post in posts" :key="post.id" class="card">
      <h2>{{ post.title }}</h2>
      <p>
        {{ post.body }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions(["fetchPosts"])
  },
  computed: {
    ...mapGetters(["posts", "fetchedPostsDate"])
  },
  created() {
    if (!this.fetchedPostsDate) {
      this.fetchPosts();
    }
  }
};
</script>
