function Frame(number, bonus) {
  this.ROLL_LIMIT = number;
  this.ROLL_SCORES = [];
  this.bonusFrame = true;
}

Frame.prototype.getRollLimit = function() {
  return this.ROLL_LIMIT;
};

Frame.prototype.getRollScores = function() {
  return this.ROLL_SCORES;
};
