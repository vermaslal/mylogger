# mylogger

This module enables you to create logging based on console

# Usage

## Input ##
	// Patch console.x methods in order to add timestamp information
	var logger = require("mylogger");
	logger.setLevel('debug');
	logger.log("Hello", 'world');
	logger.info("iiiiiiii", {txt: ['dummy']}, 'world');
	logger.error("EEEEE", 'world')
	logger.warn("ww", 'world')
	logger.log("Hello World!", 'world');
## Output ##

    2015-11-26 15:24:02 [INFO] iiiiiiii { txt: [ 'dummy' ] } world
    2015-11-26 15:24:02 [ERROR] EEEEE world
    2015-11-26 15:24:02 [WARN] ww world
