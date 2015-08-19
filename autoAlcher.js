(function() {
  'use strict';

  var robot = require("robotjs"),
      sr    = require("seedrandom");

  module.exports = {
    counter: 0,
    times: 0,
    click: function() {
      robot.mouseClick();
      this.counter++;
    },
    calcXp: function(n) {
      return (n)*65;
    },
    recurs: function() {
      Math.seedrandom();
      var delay = 1200*Math.random()+300;

      setTimeout(function() {
        if(this.counter < this.times || this.times === 0) {
          this.click();
          this.recurs();
        } else {

          console.log('Finished. You\'ve just gained on average delicious ' + this.calcXp(this.counter) + ' XP.');
          process.exit(0);
          return;
        }
      }.bind(this), delay );
    },
    start: function(n) {
      console.log('Starting Oldfield\'s Alch-O-Matic-5000. Set to perform roughly ' + (n || ' infinite') + ' alchs.');
      this.times = n;
      this.recurs();
    }
  };

})();