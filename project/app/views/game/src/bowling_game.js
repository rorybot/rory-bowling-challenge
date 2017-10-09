"use strict";

function Game() {
  this.overallScore = 0;
  this.frameCounter = 0;
  this.frameArray = [];
  this.scoreArray = [];
  this.spareNumber = 1;
  this.strikeNumber = 2;
  this.spare = false;
  this.strike = false;
  this.score = 0;
  this.lastFrame = this.frameArray.slice(-1)[0];
}

Game.prototype._newFrame = function(number) {
  var frame = new Frame(number);
  this.frameArray.push(frame);
  this.frameCounter += 1;
  return this.frameArray.slice(-1)[0];
};

Game.prototype.newFrameRules = function(number) {
  if (this.frameCounter == 0) {
    return this._newFrame(number);
  } else if (this.frameCounter < 10) {
    this.updateOverallScore();
    return this._newFrame(number);
  } else if (this.frameCounter === 10 && this._bonusStatus() === true) {
    this.updateOverallScore();
    return this._newFrame(this._bonusValue(), true);
  } else {
    return "Game Over";
  }
};

Game.prototype.getFrameCounter = function() {
  return this.frameCounter;
};

Game.prototype._bonusStatus = function() {
  return this.spare || this.strike;
};

Game.prototype._bonusValue = function() {
  if (this.spare === true) {
    return this.spareNumber;
  } else {
    return this.strikeNumber;
  }
};

Game.prototype.bonusPrinter = function() {
  if (this.spare === true) {
    return "Spare!";
  } else if (this.strike === true) {
    return "Strike!";
  } else return "No bonus!";
};

Game.prototype.updateOverallScore = function() {
    var lastFrame = this.frameArray.slice(-1)[0];
    return (this.overallScore += lastFrame.frameScore);
};


Game.prototype.sumUpScores = function(){
  var text2 = ""
for (var i = 0; i < this.frameArray.length; i++){
    text2 += this.frameArray[i]
  }
}
