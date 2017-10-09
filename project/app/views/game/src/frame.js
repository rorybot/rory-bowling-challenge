function Frame(number, bonus, rollDebt) {
  this.ROLL_LIMIT = number;
  this.ROLL_SCORES = [];
  this.bonusFrame = bonus;
  this.frameScore = 0;
  this.strike = false;
  this.spare = false;
  this.rollBonus = 'none';
}

Frame.prototype.getRollLimit = function() {
  return this.ROLL_LIMIT;
};

Frame.prototype.getRollScores = function() {
  return this.ROLL_SCORES;
};

Frame.prototype.sumFrameScore = function() {
  for (
    var i = 0, sum = 0;
    i < this.ROLL_SCORES.length;
    sum += this.ROLL_SCORES[i++]
  );

    return (this.frameScore = sum)

};

Frame.prototype.isClosedFrame = function () {
  if(this.rollBonus != 'none' && this.ROLL_SCORES.length < 3){
    return false
  }
  else {
    return true;
  }
};
