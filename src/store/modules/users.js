import axios from "axios";

const state = {
  fetchedUsersDate: null,
  users: []
};

const getters = {
  users: state => state.users,
  fetchedUsersDate: state => state.fetchedUsersDate
};

const actions = {
  async fetchUsers({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    commit("setUsers", response.data);
    commit("setFetchedUsersDate", new Date());
  }
};

const mutations = {
  setUsers: (state, users) => (state.users = users),
  setFetchedUsersDate: (state, fetchedUsersDate) =>
    (state.fetchedUsersDate = fetchedUsersDate)
};

export default {
  state,
  getters,
  actions,
  mutations
};
