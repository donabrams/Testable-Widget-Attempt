var config = module.exports;

config["cfs tests"] = {
  environment: "browser",
  libs: [
    "lib/require.js",
    "lib/jquery.js",
  ],
  sources: [
    "src/**/*.js"
  ],
  tests: [
    "test/**/*-test.js"
  ],
  resources: [{
    "path": "/",
    "content": "<div id=\"something\">loading</div>"
  }]
  //testbed: "resources/cfs.html"
};
