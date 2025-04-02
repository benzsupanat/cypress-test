const { defineConfig } = require('cypress');
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Dungbhumi Editor Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // ✅ เชื่อม plugin ของ mochawesome
      require('cypress-mochawesome-reporter/plugin')(on);

      // ✅ เพิ่มบรรทัดนี้สำหรับให้ cy.task() ทำงานได้
      addMatchImageSnapshotPlugin(on, config);

      return config;
    },
  },
});
