import Vuex from "vuex";
import { createLocalVue } from "@vue/test-utils";
import storeConfig from "@/store";
import { cloneDeep } from "lodash";

describe("Store", () => {
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
  });
  describe("Actions", () => {
    describe("decrementRollsRemaining", () => {
      it("should decrement the rollsRemaining by 1", () => {
        const store = new Vuex.Store(cloneDeep(storeConfig));
        store.replaceState({
          rollsRemaining: 10
        });
        expect(store.state.rollsRemaining).toBe(10);
        store.dispatch("decrementRollsRemaining");
        expect(store.state.rollsRemaining).toBe(9);
      });
      it("should not decrement the rollsRemaining beyond 0", () => {
        const store = new Vuex.Store(cloneDeep(storeConfig));
        store.replaceState({
          rollsRemaining: 0
        });
        expect(store.state.rollsRemaining).toBe(0);
        store.dispatch("decrementRollsRemaining");
        expect(store.state.rollsRemaining).toBe(0);
      });
    });
    describe("incrementRollsRemaining", () => {
      it("should increment the rollsRemaining by 1", () => {
        const store = new Vuex.Store(cloneDeep(storeConfig));
        store.replaceState({
          rollsRemaining: 10
        });
        expect(store.state.rollsRemaining).toBe(10);
        store.dispatch("incrementRollsRemaining");
        expect(store.state.rollsRemaining).toBe(11);
      });
    });
  });
  describe("Getters", () => {
    describe("daysRemaining", () => {
      const parameters = [
        {
          rollsRemaining: 4,
          rollRate: 2,
          daysRemaining: 2
        },
        {
          rollsRemaining: 8,
          rollRate: 2,
          daysRemaining: 4
        },
        {
          rollsRemaining: 3,
          rollRate: 2,
          daysRemaining: 1
        }
      ];
      parameters.forEach(({ rollsRemaining, daysRemaining, rollRate }) => {
        it(`calculates ${rollsRemaining} rolls remaining and a roll rate of ${rollRate} as ${daysRemaining} days remaining`, () => {
          const store = new Vuex.Store(cloneDeep(storeConfig));
          store.replaceState({
            rollsRemaining,
            rollRate
          });
          expect(store.getters.daysRemaining).toBe(daysRemaining);
        });
      });
    });
  });
});
