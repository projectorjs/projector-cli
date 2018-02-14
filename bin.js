#!/usr/bin/env node
// @flow
'use strict';

const meow = require('meow');
const path = require('path');
const resolveFrom = require('resolve-from');
const projector = require('projector');

const cli = meow(`
  Usage
    $ projector [path/to/script] [exportName] <...opts>

  Example
    $ projector ./projector.js build --foo 42
`);

let {input, flags} = cli;
let [projectorFile, projectorTask] = input;

if (input.length === 0) {
  cli.showHelp();
} else if (input.length === 1) {
  projectorTask = projectorFile;
  projectorFile = './projector.js';
}

let generator = resolveFrom(process.cwd(), projectorFile);

projector(generator, projectorTask, [flags]).then(result => {
  if (result !== undefined) console.log(JSON.stringify(result));
}).catch(err => {
  console.error(err);
  process.exit(1);
});
