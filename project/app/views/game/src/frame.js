
function Frame(number) {
  this.ROLL_LIMIT = number;
  this.ROLL_SCORES = []
}


Frame.prototype.getRollLimit = function() {
  return this.ROLL_LIMIT;
};

Frame.prototype.createRollScores = function(number) {
  var rollScore = 0;
  var rolls = number;
  var rollArray = [];
  var i;
  for (i = 0; i < rolls; i++) {
  rollArray.push(rollScore) ;
  }
  return this.ROLL_SCORES = rollArray;
};

Frame.prototype.getRollScores = function () {
  return this.ROLL_SCORES
};
