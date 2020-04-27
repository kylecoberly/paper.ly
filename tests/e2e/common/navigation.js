const { Given } = require("cypress-cucumber-preprocessor/steps");
const { visit, the } = cy;

Given("I am on the main page", () => {
  visit("/");
  the("logo").contains("paper.ly");
});
