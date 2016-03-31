'use-strict';
var levels = ['log', 'debug', 'info', 'notice', 'warn', 'error'];
var util = require('util');
var fs = require('fs');
var Logger = function () {
    this.loglevel = 0;
    this.excludes = [];
    this.fPath = null;
    for (var key in levels) {
        this.createFunction(key);
    }
};

Logger.prototype.writeLog = function (arr) {
    if (this.fPath === null) {
        console.log.apply(console, arr);
    } else {
        this.fileWs.write(arr.map(function (elm) {
            if (typeof (elm) !== 'object') {
                return elm;
            }
            return util.inspect(elm);
        }).join(' ') + '\r\n');
    }
}
Logger.prototype.createFunction = function (key) {
    var self = this;
    this[levels[key]] = function (str) {
        if (self.excludes.indexOf(levels[key]) === -1) {
            var ar = Array.prototype.slice.call(arguments);
            var l = levels[key].toUpperCase();
            var strDate = self.formatDate(new Date);
            ar.unshift("[" + l + "]");
            ar.unshift(strDate);
            self.writeLog(ar);
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
Logger.prototype.setLogPath = function (fPath) {
    this.fPath = fPath;
    this.fileWs = fs.createWriteStream(fPath, {flags: 'a'});
}
Logger.prototype.formatDate = function (d) {
    function pad(n) {
        return n < 10 ? '0' + n : n;
    }
    return d.getFullYear() + '-' +
            pad(d.getMonth() + 1) + '-' +
            pad(d.getDate()) + ' ' +
            pad(d.getHours()) + ':' +
            pad(d.getMinutes()) + ':' +
            pad(d.getSeconds());
};

module.exports = new Logger();
