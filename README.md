# mylogger

This module enables you to create logging based on console

# Setting up

	npm install mylogger

# Usage

## Input ##
	// Patch console.x methods in order to add timestamp information
	var logger = require("mylogger");
	logger.setLevel('debug');// either of 'log', 'debug', 'info', 'notice', 'warn', 'error'
	logger.setLogPath('/var/log/testLog.txt'); //optional, if not set it will pipe to stdout
	logger.log("Hello", 'world');
	logger.info("iiiiiiii", {txt: ['dummy']}, 'world');
	logger.error("EEEEE", 'world')
	logger.warn("ww", 'world')
	logger.log("Hello World!", 'world');
## Output ##

    2015-11-26 15:24:02 [INFO] iiiiiiii { txt: [ 'dummy' ] } world
    2015-11-26 15:24:02 [ERROR] EEEEE world
    2015-11-26 15:24:02 [WARN] ww world
