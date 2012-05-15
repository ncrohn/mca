var path = require('path');

module.exports = function(logger, props) {
  var pkg = require(path.join(process.cwd(), 'package.json')),
      labelWidth = 12,
      defaults = {
        name: pkg.name,
        version: pkg.version,
        started: Date(),
        mode: process.env.NODE_ENV,
        platform: (process.platform + " " + process.arch),
        node: process.version,
        process: process.pid,
        running: process.mainModule.filename
      };

  process.title = pkg.name;

  function logInfo(key, value) {
    var label = "",
        spaces = labelWidth - key.length;

    for(var i=0;i<spaces;i++) {
      label += " ";
    }

    label = label + key + " :";

    logger.info(label.blue, value.toString().grey);
  }

  for(var k in defaults) {
    logInfo(k, defaults[k]);
  }

  for(var k in props) {
    logInfo(k, props[k]);
  }

};