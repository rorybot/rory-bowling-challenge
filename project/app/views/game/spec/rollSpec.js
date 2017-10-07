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
      expect(first_frame.frameScore).toEqual(8)
    });

    it("sets second roll's value 3 after 5")
    game.newFrameRules(2)
    first_frame = game.frameArray[0]
    expect(roller.rollBall(first_frame, 5)).toEqual([5])
    expect(roller.rollBall(first_frame, 3)).toEqual([5,3])
  });

  it("tracks ROLL_LIMIT",function(){
    game.newFrameRules(2)
    first_frame = game.frameArray[0]
    roller.rollBall(first_frame, 5)
    expect(first_frame.ROLL_LIMIT).toEqual(1)
    roller.rollBall(first_frame, 3)
    expect(first_frame.ROLL_LIMIT).toEqual(0)
  });

  it("Throws up LIMIT REACHED at 3rd roll",function(){
    game.newFrameRules(2)
    first_frame = game.frameArray[0]
    roller.rollBall(first_frame, 5)
    roller.rollBall(first_frame, 3)
    expect(roller.rollBall(first_frame,10)).toEqual('Limit Reached')
  });

  it("tracks frameScore",function(){
    game.newFrameRules(2)
    first_frame = game.frameArray[0]
    roller.rollBall(first_frame, 5)
    roller.rollBall(first_frame, 3)
    expect(first_frame.frameScore).toEqual(8)
  });

});



  // describe("". function(){
  //
  // });

});
