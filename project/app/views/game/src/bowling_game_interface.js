$(document).ready(function() {
  var bowlingGame = new Game();
  var roller = new Roller

  $('#new-frame').click(function() {
    bowlingGame.newFrameRules(2);
    updateFrameNumber();
    updateBonusStatus();
    updateRollLimit();
    printOverallScore();
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
  $('#latest-frame').text(score);
  updateRollLimit();
  printFrameScore();
  }

  function updateRollLimit(){
  $('#roll-limit').text(bowlingGame.frameArray.slice(-1)[0].ROLL_LIMIT);
  }

  function printFrameScore(){
  $('#latest-frame-score').text(bowlingGame.frameArray.slice(-1)[0].frameScore);
  }

  function printOverallScore(){
    $('#overall-score').text(bowlingGame.overallScore);
  }

});
