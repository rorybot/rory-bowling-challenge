function Roller(){

};


Roller.prototype.rollBall = function (frame, rollValue) {
  frame.ROLL_SCORES.push(rollValue)
  return rollValue
};
