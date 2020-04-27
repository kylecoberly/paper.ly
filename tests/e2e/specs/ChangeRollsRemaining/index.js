import { When, Then } from "cypress-cucumber-preprocessor/steps";
const { clickThe, the } = cy;

When("I increment the rolls remaining", () => {
  clickThe("increment-rolls-remaining-button");
});

When("I decrement the rolls remaining", () => {
  clickThe("decrement-rolls-remaining-button");
});

Then("I should see {int} rolls remaining", rollsRemaining => {
  the("rolls-remaining").contains(rollsRemaining);
});
