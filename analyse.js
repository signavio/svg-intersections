const scanner = require("sonarqube-scanner");

let options = {
    "sonar.sources": "lib",
    "sonar.tests": "test",
    "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
    "sonar.projectKey": "com.sap.signavio.svg-intersections"
}

process.argv.slice(2).forEach(function (argument) {
  const [key, value] = argument.split("=");
  options[key] = value;
});

scanner(
  {
    serverUrl: "https://sonar.tools.sap/",
    options: options,
  },
  () => {
    // callback is required
  }
);