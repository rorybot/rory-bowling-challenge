function Frame(number, bonus) {
  this.ROLL_LIMIT = number;
  this.ROLL_SCORES = [];
  this.bonusFrame = true;
  this.frameScore = 0;
}

Frame.prototype.getRollLimit = function() {
  return this.ROLL_LIMIT;
};

Frame.prototype.getRollScores = function() {
  return this.ROLL_SCORES;
};

Frame.prototype.updateFrameScore = function() {
  for (
    var i = 0, sum = 0;
    i < this.ROLL_SCORES.length;
    sum += this.ROLL_SCORES[i++]
  );
  return (this.frameScore = sum);
};
