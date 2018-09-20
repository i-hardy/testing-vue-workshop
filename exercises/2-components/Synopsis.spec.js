import { shallowMount } from "@vue/test-utils";
import Synopsis from "./Synopsis.vue";

// You can use the Vue Test Utils slots option to pass in a slot:
//
// const wrapper = shallowMount(Component, {
//   slots: {
//     foo: '<div />',
//     bar: 'bar',
//   }
// })
//
// https://vue-test-utils.vuejs.org/api/options.html#slots
test("renders short slot, and hides long slot, initially", () => {
  const wrapper = shallowMount(Synopsis, {
    slots: {
      short: "<p>Hallo</p>",
      long: "<p>Tot ziens</p>"
    }
  });
  expect(wrapper.text()).toContain("Hallo");
  expect(wrapper.text()).not.toContain("Tot ziens");
});

// You can use the Vue Test Utils find and trigger methods to trigger an event:
//
// const wrapper = shallowMount(Component)
// wrapper.find('button').trigger('click')
//
// https://vue-test-utils.vuejs.org/api/options.html#slots
test("renders long slot, and hides short slot, when button is clicked", () => {
  const wrapper = shallowMount(Synopsis, {
    slots: {
      short: "<p>Hallo</p>",
      long: "<p>Tot ziens</p>"
    }
  });
  wrapper.find("button").trigger("click");
  expect(wrapper.text()).not.toContain("Hallo");
  expect(wrapper.text()).toContain("Tot ziens");
});

test('toggles "Show more/ show less" when button is clicked', () => {
  const wrapper = shallowMount(Synopsis, {
    slots: {
      short: "<p>Hallo</p>",
      long: "<p>Tot ziens</p>"
    }
  });
  expect(wrapper.text()).not.toContain("Show less");
  expect(wrapper.text()).toContain("Show more");
  wrapper.find("button").trigger("click");
  expect(wrapper.text()).not.toContain("Show more");
  expect(wrapper.text()).toContain("Show less");
});
