const { createRPFormatterClass } = require('@reportportal/agent-js-cucumber');
const config = {
   "token": "5b898b25-0ef2-4365-8522-71654351a75e",
    "endpoint": "https://demo.reportportal.io/api/v1",
    "launch": "default_TEST_EXAMPLE",
    "project": "default_personal",
    "takeScreenshot": "onFailure",
    "description": "Awesome launch description.",
    "attributes": [
      {
        "key": "launchAttributeKey",
        "value": "launchAttributeValue"
      }
    ],
    "mode": "DEFAULT",
    "debug": true,
    "scenarioBasedStatistics": true,
    "reportSkippedCucumberStepsOnFailedTest": false,
    "restClientConfig": {
      "timeout": 0
    }
  }

module.exports = createRPFormatterClass(config);