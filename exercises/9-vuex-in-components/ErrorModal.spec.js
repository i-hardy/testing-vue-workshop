import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import ErrorModal from "./ErrorModal.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

let store;
const setError = jest.fn();

beforeEach(() => {
  store = new Vuex.Store({
    state: { error: true },
    mutations: { setError }
  });
});

test("adds is-active class when state.error is set", () => {
  const wrapper = shallowMount(ErrorModal, {
    localVue,
    store
  });
  expect(wrapper.attributes("class")).toBe("is-active");
});

test("commits setError with null when close button is clicked", () => {
  const wrapper = shallowMount(ErrorModal, {
    localVue,
    store
  });
  wrapper.find('[aria-label="close"]').trigger("click");
  expect(setError).toHaveBeenCalledWith(store.state, null);
});
