
/**
 * Enable Color Mode Setting
 * @type {{reset: string, bold: string, red: string, green: string, yellow: string, blue: string, magenta: string, cyan: string, white: string, bg_red: string, bg_green: string, bg_yellow: string, bg_blue: string, bg_magenta: string, bg_cyan: string, bg_white: string}}
 */
var standardShellConsoleStyles = {
    reset      : '\033[m',
    bold       : '\033[1m',
    red        : '\033[31m',
    green      : '\033[32m',
    yellow     : '\033[33m',
    blue       : '\033[34m',
    magenta    : '\033[35m',
    cyan       : '\033[36m',
    white      : '\033[37m',
    bg_red     : '\033[41m',
    bg_green   : '\033[42m',
    bg_yellow  : '\033[43m',
    bg_blue    : '\033[44m',
    bg_magenta : '\033[45m',
    bg_cyan    : '\033[46m',
    bg_white   : '\033[47m'
};


/**
 * Blank Color Mode Setting
 * @type {{reset: string, bold: string, red: string, green: string, yellow: string, blue: string, magenta: string, cyan: string, white: string, bg_red: string, bg_green: string, bg_yellow: string, bg_blue: string, bg_magenta: string, bg_cyan: string, bg_white: string}}
 */
var emptyStringConsoleStyles = {
    reset      : '',
    bold       : '',
    red        : '',
    green      : '',
    yellow     : '',
    blue       : '',
    magenta    : '',
    cyan       : '',
    white      : '',
    bg_red     : '',
    bg_green   : '',
    bg_yellow  : '',
    bg_blue    : '',
    bg_magenta : '',
    bg_cyan    : '',
    bg_white   : ''
};


module.exports = {
    standard: standardShellConsoleStyles,
    empty: emptyStringConsoleStyles
};