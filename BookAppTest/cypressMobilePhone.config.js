const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000/",
    setupNodeEvents(on, config) {
      return { retries: 0 }; //количество прогонов теста
      // implement node event listeners here
    },
    viewportWidth: 480,
    viewportHeight: 800,
  },
});
