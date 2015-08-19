(function() {
  'use strict';

  var robot = require("robotjs"),
      sr    = require("seedrandom");

  var autoAlcher = autoAlcher || {};

  autoAlcher.click = function() {
    robot.mouseClick();
  };

  autoAlcher.start = function() {
    Math.seedrandom();
    var time = 700*Math.random()+500;

    setTimeout(function() {
      autoAlcher.click();
      autoAlcher.start();
    }, time );
  };

  autoAlcher.start();
})();