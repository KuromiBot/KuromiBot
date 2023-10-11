function hex(code, text) {
  var aRgbHex = code.match(/.{1,2}/g);
  var aRgb = [
    parseInt(aRgbHex[0], 16),
    parseInt(aRgbHex[1], 16),
    parseInt(aRgbHex[2], 16),
  ];

  return `\x1b[38;2;${aRgb[0]};${aRgb[1]};${aRgb[2]}m${text}\x1b[0m`;
}

exports.hex = hex;
