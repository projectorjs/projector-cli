// @flow
'use strict';

const child = require('child_process');
const path = require('path');
const bin = path.join(__dirname, 'bin.js');

function exec(command, script = '') {
  return child.execSync(`${bin} ${script} ${command}`, { stdio: 'pipe' }).toString();
}

test('success', () => {
  expect(JSON.parse(exec('SUCCESS --foo 1'))).toEqual({ opts: { foo: 1 } });
});

test('failure', () => {
  expect(() => { exec('FAILURE'); }).toThrow('Oops');
});

test('unserializable', () => {
  expect(() => { exec('UNSERIALIZABLE'); }).toThrow('Converting circular structure to JSON');
});

test('custom projector file', () => {
  expect(JSON.parse(exec('SUCCESS --foo 1', './projector-custom.js'))).toEqual({ opts: { foo: 1 } });
});
