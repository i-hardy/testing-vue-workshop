import { fetchData } from "./api";
import actions from "./actions";

jest.mock("./api");

test("fetchItems commits setLoading when called", () => {
  const items = [{}, {}];
  fetchData.mockResolvedValue(items);
  const commit = jest.fn();
  actions.fetchItems({ commit });
  expect(commit).toHaveBeenCalledWith("setLoading", true);
});

test("fetchItems commits items returned by api method and sets loading to false", async () => {
  expect.assertions(2);
  const items = [{}, {}];
  fetchData.mockResolvedValue(items);
  const commit = jest.fn();
  await actions.fetchItems({ commit });
  expect(commit).toHaveBeenCalledWith("setLoading", false);
  expect(commit).toHaveBeenCalledWith("setItems", { items });
});

test("fetchItems commits error and sets loading to false if api method rejects", async () => {
  expect.assertions(2);
  fetchData.mockRejectedValue(new Error("go away"));
  const commit = jest.fn();
  await actions.fetchItems({ commit });
  expect(commit).toHaveBeenCalledWith("setLoading", false);
  expect(commit).toHaveBeenCalledWith("setError", {
    message: "Failed to load items"
  });
});
