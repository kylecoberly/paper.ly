const { Then } = require("cypress-cucumber-preprocessor/steps");
const { the } = cy;

Then("I should see these stats:", rawDataTable => {
  const stats = rawDataTable.rowsHash();
  const daysRemaining = stats["days remaining"];
  const rollsRemaining = stats["rolls remaining"];
  const rollRate = stats["roll rate"];

  the("days-remaining").contains(daysRemaining);
  the("rolls-remaining").contains(rollsRemaining);
  the("roll-rate").contains(rollRate);
});
