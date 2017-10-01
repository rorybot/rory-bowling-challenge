'use strict';

function Game() {
  this.frameCounter = 0
}


Game.prototype.newFrame = function(number){
  this.frameCounter += 1;
  return new Frame(2);
};

Game.prototype.getFrameCounter = function () {
 return this.frameCounter;
};
