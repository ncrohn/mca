module.exports = function(path, app, logger) {
  var pkg = require(path);

  logger.info("      name :".blue, pkg.name.grey);
  logger.info("   version :".blue, pkg.version.grey);
  logger.info("started at :".blue, Date().grey);
  //logger.info("   on port :".blue, app.server.address().port.grey);
  logger.info("   in mode :".blue, process.env.NODE_ENV.grey);

};