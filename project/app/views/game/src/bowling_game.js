"use strict";

function Game() {
  this.frameCounter = 0;
  this.frameArray = [];
  this.SPARE_NUMBER = 1;
  this.STRIKE_NUMBER = 2;
  this.SPARE = false;
  this.STRIKE = false;
}

Game.prototype._newFrame = function(number) {
  var frame = new Frame(number);
  this.frameArray.push(frame);

  frame.createRollScores(number);
  this.frameCounter += 1;

  return this.frameArray;
};

Game.prototype.newFrameRules = function(number) {
  if (this.frameCounter > 10) {
    return "Game over!";
  } else if (this.frameCounter === 10 && this._bonusStatus() === true) {
    return this._newFrame(this._bonusValue());
  } else {
    return this._newFrame(number);
  }
};

Game.prototype.getFrameCounter = function() {
  return this.frameCounter;
};

Game.prototype._bonusStatus = function() {
  return this.SPARE || this.STRIKE;
};

Game.prototype._bonusValue = function() {
  if (this.SPARE === true) {
    return this.SPARE_NUMBER;
  } else {
    return this.STRIKE_NUMBER;
  }
};
