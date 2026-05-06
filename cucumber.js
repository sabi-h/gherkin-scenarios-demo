export default {
  paths: ["features/**/*.feature"],
  import: ["features/step_definitions/**/*.js"],
  format: ["progress", "html:reports/cucumber-report.html"],
};
