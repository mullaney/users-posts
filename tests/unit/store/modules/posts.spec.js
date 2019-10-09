import post_store from "@/store/modules/posts";
const { state, getters, mutations } = post_store;
import { expect } from "chai";
const testState = { posts: ["1", "2", "3"] };
const fetchedPosts = ["a", "b", "c"];

describe("posts store", () => {
  describe("state", () => {
    it("contains an array of posts", () => {
      expect(Array.isArray(state.posts)).to.equal(true);
    });
  });

  describe("getters", () => {
    describe("posts", () => {
      it("returns all posts from the state", () => {
        expect(getters.posts(testState)).to.equal(testState.posts);
      });
    });
  });

  describe("mutations", () => {
    describe("setPosts", () => {
      it("should set state.posts to posts", () => {
        mutations.setPosts(testState, fetchedPosts);
        expect(testState.posts).to.equal(fetchedPosts);
      });
    });
  });
});
