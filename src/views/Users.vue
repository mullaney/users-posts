<template>
  <div class="users_index">
    <h1>The Users</h1>
    <div v-for="user in users" :key="user.id" class="card">
      <h2>{{ user.name }} ({{ user.username }})</h2>
      <div><em>From {{ user.company.name }}</em></div>
      <div>{{ user.email.toLowerCase() }}</div>
      <div>{{ user.phone }}</div>
      <div>{{ user.website }}</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions(["fetchUsers"])
  },
  computed: {
    ...mapGetters(["users", "fetchedUsersDate"])
  },
  created() {
    if (!this.fetchedUsersDate) {
      this.fetchUsers();
    }
  }
};
</script>

<style>
</style>
