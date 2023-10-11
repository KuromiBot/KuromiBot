function rgb(r, g, b, text) {
  return `\x1b[38;2;${r};${g};${b}m${text}\x1b[0m`;
}

exports.rgb = rgb;
