describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
    roller = new Roller();
  });

  describe("Can interact with frame", function() {
    it("can create new Frames", function() {
      newFrame = game._newFrame(2);
      expect(game.frameArray).toEqual([newFrame]);
    });

    it("creates frames with roll scorers based on limit", function() {
      game._newFrame(2);
      aNewFrame = game.frameArray.slice(-1)[0];
      expect(aNewFrame.getRollScores()).toEqual([]);
    });

    it("can count 0 frames at start", function() {
      expect(game.getFrameCounter()).toEqual(0);
    });

    it("can count 10 frames", function() {
      for (i = 0; i < 10; i++) {
        newFrame = game._newFrame(2);
      }
      expect(game.getFrameCounter()).toEqual(10);
    });

    it("can create frames via the rule method", function() {
      for (i = 0; i < 5; i++) {
        game.newFrameRules(2);
      }
      expect(game.frameArray.length).toEqual(5);
    });

    it("stops creating frames at 10", function() {
      for (i = 0; i < 10; i++) {
        newFrame = game._newFrame(2);
      }
      expect(game.newFrameRules(2)).toEqual("Game Over");
      expect(game.frameArray.length).toEqual(10);
    });

    it("stops creating frames at 10 unless bonus status is true [spare]; create frame with 1 roll", function() {
      for (i = 0; i < 10; i++) {
        newFrame = game._newFrame(2);
      }
      game.spare = true;
      expect(game.newFrameRules(2)).toEqual(game.frameArray.slice(-1)[0]);
      // test above just checks that expected return value of an updated array is created
      expect(game.frameArray.length).toEqual(11);
      expect(game.frameArray.slice(-1)[0].ROLL_LIMIT).toEqual(1);
    });

    it("stops creating frames at 10 unless bonus status is true [strike]; create frame with 2 rolls", function() {
      for (i = 0; i < 10; i++) {
        newFrame = game._newFrame(2);
      }

      game.spare = false;
      game.strike = true;
      expect(game.newFrameRules(2)).toEqual(game.frameArray.slice(-1)[0]);
      // test above just checks that expected return value of an updated array is created
      lastFrame = game.frameArray.slice(-1)[0];
      expect(game.frameArray.length).toEqual(11);
      expect(lastFrame.getRollScores()).toEqual([]);
      expect(lastFrame.ROLL_LIMIT).toEqual(2);
    });

  });

  describe("Adjust overall game score", function(){
    it("Passes last frame score into overall score", function(){
      game.newFrameRules()
      first_frame = game.frameArray[0]
      roller.rollBall(first_frame,5)
      roller.rollBall(first_frame,3)
      expect(game.updateOverallScore()).toEqual(8)
    });

    it("Update score with new frames", function(){
      game.newFrameRules(2)
      first_frame = game.frameArray[0]
      roller.rollBall(first_frame,5)
      roller.rollBall(first_frame,3)
      game.newFrameRules(2)
      second_frame = game.frameArray[1]
      expect(game.overallScore).toEqual(8)
    });
  });
});
