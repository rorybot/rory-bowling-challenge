function Roller() {}

Roller.prototype.rollBall = function(frame, rollValue) {
  if (frame.ROLL_LIMIT === 0) {
    return "Limit Reached";
  } else {
    frame.ROLL_SCORES.push(rollValue);
    frame.ROLL_LIMIT -= 1;
    frame.updateFrameScore();
    return frame.ROLL_SCORES;
  }
};
