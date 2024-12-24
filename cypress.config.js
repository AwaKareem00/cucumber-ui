const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://techglobal-training.com/frontend/project-4',
    specPattern: 'cypress/e2e/features/*.feature',
    supportFile: 'cypress/e2e/support/commands.js',
  },
});
