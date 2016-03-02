/**
 * CI Test Runner communicating with CId
 *
 * @author Jared Allard <jaredallard@outlook.com>
 * @license MIT
 * @version 1.0.0
 **/

// npm modules
const async = require('async'),
      git   = require('nodegit');

// for git status bot.
const sheildImg = 'https://img.shields.io/badge/build-{{status}}-{{color}}.svg?style=flat-square';

// internals
const repo = process.argv[2];
