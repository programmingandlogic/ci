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

// for git status bot.
const sheildImg = 'https://img.shields.io/badge/build-{{status}}-{{color}}.svg?style=flat-square';

// internals
const org  = process.argv[2];
const repo = process.argv[3];

if(org === undefined || repo === undefined) {
  console.error('Bad opts.');
  process.exit(1);
}

git.Clone("https://github.com/"+org+"/"+repo, "./tmp")
  // Look up this known commit.
  .then(function(repo) {
    console.log('repository cloned.')
    console.log('fs:', fs.readdirSync('./tmp'));
  });
