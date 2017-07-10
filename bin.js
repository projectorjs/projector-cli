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
  if (err instanceof projector.ChildError) {
    console.error(err.stderr);
    process.exit(err.code);
  } else {
    console.error(err.stack);
    process.exit(1);
  }
});
