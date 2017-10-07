describe("Roller", function(){

  var roller;

  beforeEach(function() {
    roller = new Roller();
    game = new Game();
  });

  describe("Can change a frame's first and second roll value", function(){
    it("sets first roll's value to 5",function(){
      game.newFrameRules(2)
      first_frame = game.frameArray[0]
      expect(roller.rollBall(first_frame, 5)).toEqual([5])
      expect(first_frame.ROLL_LIMIT).toEqual(1)
      expect(roller.rollBall(first_frame, 3)).toEqual([5,3])
      expect(first_frame.ROLL_LIMIT).toEqual(0)
      expect(roller.rollBall(first_frame,10)).toEqual('Limit Reached')
    });
  });

  // describe("". function(){
  //
  // });

});
