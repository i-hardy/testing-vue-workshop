import { shallowMount } from "@vue/test-utils";
import Modal from "./Modal.vue";

test("emits on-close event when close button is clicked", () => {
  const wrapper = shallowMount(Modal);

  wrapper.find("button").trigger("click");
  expect(wrapper.emitted("close-modal")).toBeTruthy();
});
