var levels = ['log', 'debug', 'info', 'notice', 'warn', 'error'];
var Logger = function () {
  this.loglevel = 0;
  this.excludes = [];
  var self = this;
  for (var key in levels) {
    this.createFunction(key);
  }
};
Logger.prototype.createFunction = function (key) {
  var self = this;
  this[levels[key]] = function (str) {
    if (self.excludes.indexOf(levels[key]) === -1) {
      var l = levels[key].toUpperCase();
      var strDate = new Date().toISOString().substr(0, 19).replace('T', ' ');
        console.log(strDate + " [" + l + "] ", str);
    }
  }
}
Logger.prototype.setLevel = function (level) {
  if (typeof level === "string") {
    for (var i = levels.indexOf(level) - 1; i >= 0; i--) {
      this.excludes.push(levels[i]);
    }
  }
};

module.exports = new Logger();
