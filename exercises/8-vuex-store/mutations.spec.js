import mutations from "./mutations";

test("adds filtered items to state", () => {
  const state = {};
  const items = [0, undefined, 1];
  mutations.setItems(state, { items });
  expect(state.items).toEqual([0, 1]);
});
