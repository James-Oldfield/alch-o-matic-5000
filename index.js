#!/usr/bin/env node

(function() {
  'use strict';

  var autoAlcher = require('./autoAlcher.js');
  var rl = require('readline');

  var command    = process.argv[2];
  var controller = process.argv[3];

  var read = rl.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  if(!command) {
    read.question("How many times do you want to alch? (Enter 0 to alch indefinitely): ", function(res) {
      read.close();
      autoAlcher.start(res);
    });
  } else if(command === 'start') {
    if(controller) {
      autoAlcher.start(controller);
    } else {
      autoAlcher.start(0);
    }
  }

})();

