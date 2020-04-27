const { Given, Then } = require("cypress-cucumber-preprocessor/steps");
const { visit, the } = cy;

Given("I am on the main page", () => {
  visit("/");
  the("logo").contains("paper.ly");
});

Then("I should see these stats:", rawDataTable => {
  const stats = rawDataTable.rowsHash();
  const daysRemaining = stats["days remaining"];
  const rollsRemaining = stats["rolls remaining"];
  const rollRate = stats["roll rate"];

  the("days-remaining").contains(daysRemaining);
  the("rolls-remaining").contains(rollsRemaining);
  the("roll-rate").contains(rollRate);
});
