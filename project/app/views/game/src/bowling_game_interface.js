$(document).ready(function() {
  var bowlingGame = new Game();
  var roller = new Roller

  $('#new-frame').click(function() {
    bowlingGame.newFrameRules(2);
    updateFrameNumber();
    updateBonusStatus();
    updateRollLimit();
  });

  function updateFrameNumber(){
  $('#frame-number').text(bowlingGame.frameCounter);
}

  function updateBonusStatus(){
  $('#bonus-status').text(bowlingGame.bonusPrinter);
  }

  $('#new-roll').click(function() {
    var currentFrame = bowlingGame.frameArray.slice(-1)[0];
    var frameScore = roller.rollBall(currentFrame, 5);
    updateLatestRollScore(frameScore);
    // bowlingGame.score +=
  });


  function updateLatestRollScore(score){
  $('#latest-frame-score').text(score);
  updateRollLimit();
  }

  function updateRollLimit(){
  $('#roll-limit').text(bowlingGame.frameArray.slice(-1)[0].ROLL_LIMIT);
  }

});
