/**
 * CI Test Runner communicating with CId
 *
 * @author Jared Allard <jaredallard@outlook.com>
 * @license MIT
 * @version 1.0.0
 **/

// npm modules
const async = require('async'),
      git   = require('nodegit'),
      fs    = require('fs');

// for git status bot (later on?)
const sheildImg = 'https://img.shields.io/badge/build-{{status}}-{{color}}.svg?style=flat-square';

// internals
const org    = process.argv[2];
const repo   = process.argv[3];
const commit = process.argv[4];

if(org === undefined || repo === undefined) {
  console.error('Bad opts.');
  process.exit(1);
}

const testSource = "https://github.com/"+org+"/"+repo;

// Clone the repository
console.log('cloning test source from master branch')
git.Clone(testSource, "./source")
  .then(function(repo) {
    console.log('cloned', testSource);
  });
