const scanner = require("sonarqube-scanner");

let options = {
    "sonar.sources": "lib",
    "sonar.tests": "test",
    "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
    "sonar.projectKey": "com.sap.signavio.svg-intersections"
}

process.argv.forEach(function (val, index, array) {
if (index > 1) {
    const val_arr = val.split("=")
    if (val_arr[0] === "sonar.branch.name"){
        options["sonar.branch.name"] = val_arr[1]
    }
    if (val_arr[0] === "sonar.pullrequest.base"){
        options["sonar.pullrequest.base"] = val_arr[1]
    }
    if (val_arr[0] === "sonar.pullrequest.key"){
        options["sonar.pullrequest.key"]=val_arr[1]
    }
    if (val_arr[0] === "sonar.pullrequest.branch"){
        options["sonar.pullrequest.branch"]=val_arr[1]
    }
}
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