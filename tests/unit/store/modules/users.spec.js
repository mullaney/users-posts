import user_store from "@/store/modules/users";
const { state, getters, mutations } = user_store;
import { expect } from "chai";
const testState = { users: [1, 2, 3] };
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
        expect(getters.users(testState)).to.equal(testState.users);
      });
    });
  });

  describe("mutations", () => {
    describe("setUsers", () => {
      it("should set state.users to users", () => {
        mutations.setUsers(testState, fetchedUsers);
        expect(testState.users).to.equal(fetchedUsers);
      });
    });
  });
});
