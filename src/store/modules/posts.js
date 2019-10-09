import axios from "axios";

const state = {
  fetchedPostsDate: null,
  posts: []
};

const getters = {
  posts: state => state.posts,
  fetchedPostsDate: state => state.fetchedPostsDate
};

const actions = {
  async fetchPosts({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    commit("setPosts", response.data);
    commit("setFetchedPostsDate", new Date());
  }
};

const mutations = {
  setPosts: (state, posts) => (state.posts = posts),
  setFetchedPostsDate: (state, fetchedPostsDate) =>
    (state.fetchedPostsDate = fetchedPostsDate)
};

export default {
  state,
  getters,
  actions,
  mutations
};
