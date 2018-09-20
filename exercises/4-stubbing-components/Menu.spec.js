import { RouterLinkStub, shallowMount } from "@vue/test-utils";
import Menu from "./Menu.vue";

test("renders router-link to /login page when signedIn is false", () => {
  const wrapper = shallowMount(Menu, {
    stubs: {
      "router-link": RouterLinkStub
    },
    propsData: {
      signedIn: false
    }
  });
  expect(wrapper.find(RouterLinkStub).props("to")).toBe("/login");
});

test("renders <a> that signs user out if signedIn is true", () => {
  const signOut = jest.fn();
  const wrapper = shallowMount(Menu, {
    stubs: {
      "router-link": RouterLinkStub
    },
    propsData: {
      signedIn: true,
      signOut
    }
  });
  wrapper.find("a").trigger("click");
  expect(signOut).toHaveBeenCalled();
});
