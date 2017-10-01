"use strict";

function Game() {
  this.frameCounter = 0;
}

Game.prototype.newFrame = function(number) {
  this.frameCounter += 1;
  return new Frame(number);
};

Game.prototype.newFrameRules = function(number) {
  if (this.frameCounter > 10) {
    return "Game over!";
  } else if (this.frameCounter === 10) {
    return this.newFrame(number);
  } else {
    return this.newFrame(number);
  }
};

Game.prototype.getFrameCounter = function() {
  return this.frameCounter;
};
