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

if (input.length !== 2) {
  cli.showHelp();
}

let generator = resolveFrom(process.cwd(), input[0]);
let task = input[1];

projector(generator, task, flags).then(result => {
  console.log(JSON.stringify(result));
}).catch(err => {
  console.error(err);
  process.exit(1);
});
