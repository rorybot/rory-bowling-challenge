function Roller(){

};


Roller.prototype.rollBall = function (frame, rollValue) {
  frame.ROLL_SCORES = [rollValue,0]
  return rollValue
};
