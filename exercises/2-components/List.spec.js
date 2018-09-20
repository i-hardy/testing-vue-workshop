import { shallowMount } from "@vue/test-utils";
import List from "./List.vue";

test('renders "no items" if items prop is undefined', () => {
  const wrapper = shallowMount(List);
  expect(wrapper.text()).toBe("No items");
});

test("renders text using each item in items prop array", () => {
  const wrapper = shallowMount(List, {
    propsData: {
      items: ["red", "blue", "green"]
    }
  });

  expect(wrapper.text()).toContain("red");
  expect(wrapper.text()).toContain("blue");
  expect(wrapper.text()).toContain("green");
});
