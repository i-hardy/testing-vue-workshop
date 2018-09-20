import { shallowMount } from "@vue/test-utils";
import ProgressBar from "./ProgressBar.vue";

test("increments width by 1% every 100ms", () => {
  jest.useFakeTimers();
  const wrapper = shallowMount(ProgressBar);
  expect(wrapper.attributes("style")).toBe("width: 0%;");
  jest.advanceTimersByTime(100);
  expect(wrapper.attributes("style")).toBe("width: 1%;");
});
