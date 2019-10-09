<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/users">Users</router-link> |
      <router-link to="/posts">Posts</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
.card {
  border: 1px solid black;
  padding: 1rem;
  margin: 1rem;
}

.card > h2 {
  margin: 0;
}
</style>