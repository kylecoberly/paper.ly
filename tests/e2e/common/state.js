const { Given } = require("cypress-cucumber-preprocessor/steps");
const { getStore } = cy;

Given("I have {int} rolls remaining", rollsRemaining => {
  getStore().setState("rollsRemaining", rollsRemaining);
});
Given("I have a roll rate of {int}", rollRate => {
  getStore().setState("rollRate", rollRate);
});
