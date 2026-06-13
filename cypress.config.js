const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'j1po5t',

  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportTitle: 'Projeto do curso de cypress',
      reportPageTitle: 'Projeto do curso de cypress'

    },
    baseUrl: "https://automationpratice.com.br/",
    defaultCommandTimeout: 6000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
