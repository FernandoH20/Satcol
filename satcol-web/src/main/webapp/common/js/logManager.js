function logger(isDebug) {
    if (isDebug == 'development') {
        window.debug = {
            log: window.console.log.bind(window.console, '%s: %s'),
            error: window.console.error.bind(window.console, 'error: %s'),
            info: window.console.info.bind(window.console, 'info: %s'),
            warn: window.console.warn.bind(window.console, 'warn: %s')
        };
    } else {
        var __no_op = function () {};

        window.debug = {
            log: __no_op,
            error: __no_op,
            warn: __no_op,
            info: __no_op
        };
    }
}

//logger(true);
//debug.log('wat', 'Yay custom levels.'); // -> wat: Yay custom levels.    (line X)
//debug.info('This is info.');            // -> info: This is info.        (line Y)
//debug.error('Bad stuff happened.');     // -> error: Bad stuff happened. (line Z)