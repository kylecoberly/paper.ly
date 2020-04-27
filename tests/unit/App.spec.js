import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import storeConfig from "@/store";
import App from "@/App.vue";
import { cloneDeep } from "lodash";

describe("App.vue", () => {
  describe("Roll commands", () => {
    describe("Incrementing", () => {
      it("increments the rolls remaining when the increment button is clicked", () => {
        const localVue = createLocalVue();
        localVue.use(Vuex);

        const incrementRollsRemaining = jest.fn();

        const store = new Vuex.Store({
          ...cloneDeep(storeConfig),
          ...{ actions: { incrementRollsRemaining } }
        });

        const $App = shallowMount(App, { store, localVue });

        $App
          .find("[data-test-increment-rolls-remaining-button]")
          .trigger("click");

        expect(incrementRollsRemaining).toHaveBeenCalled();
      });
    });
    describe("Decrementing", () => {
      it("decrements the rolls remaining when the decrement button is clicked", () => {
        const localVue = createLocalVue();
        localVue.use(Vuex);

        const decrementRollsRemaining = jest.fn();

        const store = new Vuex.Store({
          ...cloneDeep(storeConfig),
          ...{ actions: { decrementRollsRemaining } }
        });

        const $App = shallowMount(App, { store, localVue });

        $App
          .find("[data-test-decrement-rolls-remaining-button]")
          .trigger("click");

        expect(decrementRollsRemaining).toHaveBeenCalled();
      });
    });
  });
});
