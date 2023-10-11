# chalk-advanced

Chalk-advanced is a library that allows you to color your console output. This tool is used by projects like [Would You Bot](https://wouldyoubot.gg).

[![npm](https://img.shields.io/npm/v/chalk-advanced?color=red&label=VERSION)](https://www.npmjs.com/package/chalk-advanced)


[![size](https://img.shields.io/github/repo-size/mezotv/chalk-advanced?color=red&label=SIZE)](https://www.npmjs.com/package/chalk-advanced)

[![downloads](https://img.shields.io/npm/dt/chalk-advanced?color=red)](https://www.npmjs.com/package/chalk-advanced)

## Quick Links

- [Installation](#installation)
  - [Code Example](#code-example)
- [Colors](#colors)
- [Contributors](#contributors)

## Installation

Install chalk-advanced with npm

```bash
  npm install chalk-advanced
```

Install chalk-advanced with yarn

```bash
  yarn add chalk-advanced
```

## Code Examples

```js
const { ChalkAdvanced } = require('chalk-advanced');

console.log(ChalkAdvanced.red('Hello World!'));
```

```js
const { red } = require('chalk-advanced');

console.log(red('Hello World!'));
```

```js
const { rgb } = require('chalk-advanced');

console.log(rgb(250, 30, 107, "Hello World!"));
```

## Colors

- **`black(text)`**:
- **`red(text)`**:
- **`green(text)`**:
- **`yellow(text)`**:
- **`blue(text)`**:
- **`magenta(text)`**:
- **`cyan(text)`**:
- **`white(text)`**:
- **`gray(text)`**:
- **`redBright(text)`**:
- **`greenBright(text)`**:
- **`yellowBright(text)`**:
- **`blueBright(text)`**:
- **`magentaBright(text)`**:
- **`cyanBright(text)`**:
- **`whiteBright(text)`**:
- **`bgBlack(text)`**:
- **`bgRed(text)`**:
- **`bgGreen(text)`**:
- **`bgYellow(text)`**:
- **`bgBlue(text)`**:
- **`bgMagenta(text)`**:
- **`bgCyan(text)`**:
- **`bgWhite(text)`**:
- **`bgRedBright(text)`**:
- **`bgGreenBright(text)`**:
- **`bgYellowBright(text)`**:
- **`bgBlueBright(text)`**:
- **`bgMagentaBright(text)`**:
- **`bgCyanBright(text)`**:
- **`bgWhiteBright(text)`**:
- **`bold(text)`**:
- **`dim(text)`**:
- **`italic(text)`**:
- **`underline(text)`**:
- **`inverse(text)`**:
- **`hide(text)`**:
- **`strikethrough(text)`**:
- **`hex(code, text)`**:
- **`hsl(h, s, l, text)`**:
- **`rgb(r, g, b, text)`**:

## Contributors

![image](https://contrib.rocks/image?repo=mezotv/chalk-advanced)
