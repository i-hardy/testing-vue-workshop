import axios from "axios";
import { fetchItems } from "./api";

jest.mock("axios");

test("resolves with data.items if /items returns 200", async () => {
  expect.assertions(1);
  const items = [{}, {}];
  axios.get.mockResolvedValue(items);
  const data = await fetchItems();
  expect(data).toBe(items);
});

test("rejects with error if /items returns 500", async () => {
  expect.assertions(1);
  axios.get.mockRejectedValue(new Error("500"));
  expect(fetchItems()).rejects.toBeInstanceOf(Error);
});
