"use strict";

function Game() {
  this.frameCounter = 0;
}

Game.prototype.newFrame = function(number) {
  if (this.frameCounter === 10) {
    return "Go home - you've reached your limit!";
  } else {
    this.frameCounter += 1;
    return new Frame(2);
  }
};

Game.prototype.getFrameCounter = function() {
  return this.frameCounter;
};
