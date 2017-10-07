$(document).ready(function() {
  var bowlingGame = new Game();

  $('#new-frame').click(function() {
    bowlingGame.newFrameRules();
    updateFrameNumber();
  });

  function updateFrameNumber(){
  $('#frame-number').text(bowlingGame.frameCounter);
}

function updateBonusStatus(){
$('#bonus-status').text(bowlingGame._bonusStatus);
}

});
