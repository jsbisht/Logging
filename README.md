# Logging
Added library to enable and disable logging. Enable and disable the logging of console.log() and console.dir()

To import the Logging module:

    var logging = require('Logging');

One can disable the logging of console.log() and console.dir() using:

    logging.disable();

Enable the same using:

    logging.enable();

Also, you can use toggle() to enable and disable logging. Eg.

    logging.toggle();    
