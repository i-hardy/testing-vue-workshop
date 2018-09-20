import { shallowMount } from "@vue/test-utils";
import flushPromises from "flush-promises";
import ItemView from "./ItemView.vue";
import Item from "./Item.vue";
import { fetchItems } from "./api";

jest.mock("./api");

test("renders items resolved from fetchItems", async () => {
  const items = [{}, {}];
  fetchItems.mockResolvedValue(items);
  const wrapper = shallowMount(ItemView);
  await flushPromises();
  expect(wrapper.findAll(Item)).toHaveLength(2);
});

test("renders error if fetchItems rejects", async () => {
  fetchItems.mockRejectedValue(new Error("go away"));
  const wrapper = shallowMount(ItemView);
  await flushPromises();
  expect(wrapper.text()).toContain("Error loading items");
});
