import Vuex from "vuex";
import { createLocalVue } from "@vue/test-utils";
import storeConfig from "@/store";
import { cloneDeep } from "lodash";

describe("Store", () => {
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
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
