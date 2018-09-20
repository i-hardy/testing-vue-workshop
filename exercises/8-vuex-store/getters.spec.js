import getters from "./getters";

const items = [];

for (let i = 1; i < 41; i++) {
  items.push(i);
}

test("returns first 20 items if state.page value is 1", () => {
  const page = 1;
  expect(getters.displayItems({ page, items })).toHaveLength(20);
  expect(getters.displayItems({ page, items })[0]).toBe(1);
});

test("returns items 21-40 if state.page value is 2", () => {
  const page = 2;
  expect(getters.displayItems({ page, items })).toHaveLength(20);
  expect(getters.displayItems({ page, items })[0]).toBe(21);
});
