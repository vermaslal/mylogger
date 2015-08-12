# mylogger

This module enables you to create logging based on console

## Usage ##

	// Patch console.x methods in order to add timestamp information
	var logger=require("mylogger");
	logger.setLevel('debug');
	logger.log("Hello")
	logger.info("iiiiiiii");
	logger.error("EEEEE")
	logger.warn("ww")
	logger.log("Hello World!");
	// -> 2015-71-8 17:42:49 [ERROR] EEEEE
			2015-71-8 17:42:49 [WARN] ww
 
