"use strict";

function Game() {
  this.frameCounter = 0;
  this.frameArray = [];
  this.SPARE_NUMBER = 1;
  this.STRIKE_NUMBER = 2;
  this.SPARE = false;
  this.STRIKE = false;
}

Game.prototype.newFrame = function(number) {
  var frame = new Frame(number);
  this.frameArray.push(frame);

  frame.createRollScores(number);
  this.frameCounter += 1;

  return this.frameArray;
};

Game.prototype.newFrameRules = function(number) {
  if (this.frameCounter > 10) {
    return "Game over!";
  } else if (this.frameCounter === 10 && this.bonusStatus() === true) {
    return this.newFrame(this.bonusValue());
  } else {
    return this.newFrame(number);
  }
};

Game.prototype.getFrameCounter = function() {
  return this.frameCounter;
};

Game.prototype.bonusStatus = function() {
  return this.SPARE || this.STRIKE;
};

Game.prototype.bonusValue = function() {
  if (this.SPARE === true) {
    return this.SPARE_NUMBER;
  } else {
    return this.STRIKE_NUMBER;
  }
};
