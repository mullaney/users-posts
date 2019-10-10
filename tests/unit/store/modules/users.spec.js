import user_store from "@/store/modules/users";
const { state, getters, mutations, actions } = user_store;
import { expect } from "chai";
const initialState = {
  users: [1, 2, 3],
  fetchedUsersDate: null
};

const fetchedUsers = ["a", "b", "c"];

describe("users store", () => {
  describe("state", () => {
    it("contains an array of users", () => {
      expect(Array.isArray(state.users)).to.equal(true);
    });
  });

  describe("getters", () => {
    describe("users", () => {
      it("returns all users from the state", () => {
        expect(getters.users(initialState)).to.equal(initialState.users);
      });
    });
  });

  describe("mutations", () => {
    let testState;

    beforeEach(() => {
      testState = { ...initialState };
    });

    describe("setUsers", () => {
      it("should set state.users to users", () => {
        mutations.setUsers(testState, fetchedUsers);
        expect(testState.users).to.equal(fetchedUsers);
      });
    });

    describe("setFetchedUsersDate", () => {
      it("should set state.fetchedUsersDate", () => {
        const date = new Date();
        mutations.setFetchedUsersDate(testState, date);
        expect(testState.fetchedUsersDate).to.equal(date);
      });
    });
  });
});
