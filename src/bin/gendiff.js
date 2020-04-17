#!/usr/bin/env node
const { program } = require('commander');

program
  .version('0.0.1', '-V, --version', 'output the version number')
  .description('Compares two configuration files and shows a difference.');

program
  .option('-f --format [type]', 'output format')
  .arguments('<firstConfig> <secondConfig>');

program.parse(process.argv);
