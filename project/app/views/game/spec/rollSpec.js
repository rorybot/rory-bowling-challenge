describe("Roller", function(){

  var roller;

  beforeEach(function() {
    roller = new Roller();
    game = new Game();
  });

  describe("Can change a frame's first roll value", function(){
    it("sets first roll's value to 5",function(){
      game.newFrameRules(2)
      first_frame = game.frameArray[0]
      expect(roller.rollBall(first_frame, 5)).toEqual(5)
      expect(first_frame.getRollScores()).toEqual([5,0])
    });
  });

  // describe("". function(){
  //
  // });

});
