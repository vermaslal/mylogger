'use-strict';
var logger = require("mylogger");
logger.setLevel('debug');
logger.log("Hello", 'world');
logger.info("iiiiiiii", {txt: ['dummy']}, 'world');
logger.error("EEEEE", 'world');
logger.warn("ww", 'world');
logger.log("Hello World!", 'world');
