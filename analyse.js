const scanner = require("sonarqube-scanner");

scanner(
  {
    serverUrl: "https://sonar.tools.sap/",
    options: {
      "sonar.sources": "lib",
      "sonar.tests": "test",
      "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
      "sonar.projectKey": "com.sap.signavio.svg-intersections"
    },
  },
  () => {
    // callback is required
  }
);