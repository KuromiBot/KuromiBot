function black(text) {
  return `\x1b[30m${text}\x1b[0m`;
}

function red(text) {
  return `\x1b[31m${text}\x1b[0m`;
}

function green(text) {
  return `\x1b[32m${text}\x1b[0m`;
}

function yellow(text) {
  return `\x1b[33m${text}\x1b[0m`;
}

function blue(text) {
  return `\x1b[34m${text}\x1b[0m`;
}

function magenta(text) {
  return `\x1b[35m${text}\x1b[0m`;
}

function cyan(text) {
  return `\x1b[36m${text}\x1b[0m`;
}

function white(text) {
  return `\x1b[37m${text}\x1b[0m`;
}

function gray(text) {
  return `\x1b[90m${text}\x1b[0m`;
}

function redBright(text) {
  return `\x1b[91m${text}\x1b[0m`;
}

function greenBright(text) {
  return `\x1b[92m${text}\x1b[0m`;
}

function yellowBright(text) {
  return `\x1b[93m${text}\x1b[0m`;
}

function blueBright(text) {
  return `\x1b[94m${text}\x1b[0m`;
}

function magentaBright(text) {
  return `\x1b[95m${text}\x1b[0m`;
}

function cyanBright(text) {
  return `\x1b[96m${text}\x1b[0m`;
}

function whiteBright(text) {
  return `\x1b[97m${text}\x1b[0m`;
}

function bgBlack(text) {
  return `\x1b[40m${text}\x1b[0m`;
}

function bgRed(text) {
  return `\x1b[41m${text}\x1b[0m`;
}

function bgGreen(text) {
  return `\x1b[42m${text}\x1b[0m`;
}

function bgYellow(text) {
  return `\x1b[43m${text}\x1b[0m`;
}

function bgBlue(text) {
  return `\x1b[44m${text}\x1b[0m`;
}

function bgMagenta(text) {
  return `\x1b[45m${text}\x1b[0m`;
}

function bgCyan(text) {
  return `\x1b[46m${text}\x1b[0m`;
}

function bgWhite(text) {
  return `\x1b[47m${text}\x1b[0m`;
}

function bgRedBright(text) {
  return `\x1b[101m${text}\x1b[0m`;
}

function bgGreenBright(text) {
  return `\x1b[102m${text}\x1b[0m`;
}

function bgYellowBright(text) {
  return `\x1b[103m${text}\x1b[0m`;
}

function bgBlueBright(text) {
  return `\x1b[104m${text}\x1b[0m`;
}

function bgMagentaBright(text) {
  return `\x1b[105m${text}\x1b[0m`;
}

function bgCyanBright(text) {
  return `\x1b[106m${text}\x1b[0m`;
}

function bgWhiteBright(text) {
  return `\x1b[107m${text}\x1b[0m`;
}

function bold(text) {
  return `\x1b[1m${text}\x1b[0m`;
}

function dim(text) {
  return `\x1b[2m${text}\x1b[0m`;
}

function italic(text) {
  return `\x1b[3m${text}\x1b[0m`;
}

function underline(text) {
  return `\x1b[4m${text}\x1b[0m`;
}

function inverse(text) {
  return `\x1b[7m${text}\x1b[0m`;
}

function hide(text) {
  return `\x1b[8m${text}\x1b[0m`;
}

function strikethrough(text) {
  return `\x1b[9m${text}\x1b[0m`;
}

exports.black = black;
exports.red = red;
exports.green = green;
exports.yellow = yellow;
exports.blue = blue;
exports.magenta = magenta;
exports.cyan = cyan;
exports.white = white;
exports.gray = gray;
exports.redBright = redBright;
exports.greenBright = greenBright;
exports.yellowBright = yellowBright;
exports.blueBright = blueBright;
exports.magentaBright = magentaBright;
exports.cyanBright = cyanBright;
exports.whiteBright = whiteBright;
exports.bgBlack = bgBlack;
exports.bgRed = bgRed;
exports.bgGreen = bgGreen;
exports.bgYellow = bgYellow;
exports.bgBlue = bgBlue;
exports.bgMagenta = bgMagenta;
exports.bgCyan = bgCyan;
exports.bgWhite = bgWhite;
exports.bgRedBright = bgRedBright;
exports.bgGreenBright = bgGreenBright;
exports.bgYellowBright = bgYellowBright;
exports.bgBlueBright = bgBlueBright;
exports.bgMagentaBright = bgMagentaBright;
exports.bgCyanBright = bgCyanBright;
exports.bgWhiteBright = bgWhiteBright;
exports.bold = bold;
exports.dim = dim;
exports.italic = italic;
exports.underline = underline;
exports.inverse = inverse;
exports.hide = hide;
exports.strikethrough = strikethrough;
