/*jshint node:true*/
module.exports = {
  "framework": "qunit",
  "test_page": "tests/index.html?hidepassed",
  "disable_watching": true,
  "launch_in_ci": [
    "PhantomJS"
  ],
  "launch_in_dev": [
    "Chrome"
  ],
  browser_args: {
    Chrome: [
      '--headless',
      '--window-size=1440,900',
      '--disable-gpu',
      '--remote-debugging-port=9222'
    ]
  }
};
