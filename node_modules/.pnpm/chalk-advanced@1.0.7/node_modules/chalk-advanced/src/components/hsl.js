const { hex } = require("./hex");

function hsl(h, s, l, text) {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };
  const hexValue = `${f(0)}${f(8)}${f(4)}`;

  return hex(hexValue, text);
}

exports.hsl = hsl;
