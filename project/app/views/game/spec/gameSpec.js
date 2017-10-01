describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("Can interact with frame", function() {
    it("can create new Frames", function() {
      newFrame = game.newFrame(2);
      expect(game.frameArray).toEqual(newFrame);
    });

    it("creates frames with roll scorers based on limit", function() {
      game.newFrame(2);
      aNewFrame = game.frameArray.slice(-1)[0];
      expect(aNewFrame.getRollScores()).toEqual([0, 0]);
    });

    it("can count 0 frames at start", function() {
      // for (i = 0; i < 10; i++) {
      // newFrame = game.newFrame(2) ;
      // }
      expect(game.getFrameCounter()).toEqual(0);
    });

    it("can count 10 frames", function() {
      for (i = 0; i < 10; i++) {
        newFrame = game.newFrame(2);
      }
      expect(game.getFrameCounter()).toEqual(10);
    });

    it("stops creating frames at 11", function() {
      for (i = 0; i < 11; i++) {
        newFrame = game.newFrame(2);
      }
      expect(game.newFrameRules(2)).toEqual("Game over!");
      expect(game.frameArray.length).toEqual(11);
    });

    it("stops creating frames at 10", function() {
      for (i = 0; i < 10; i++) {
        newFrame = game.newFrame(2);
      }
      expect(game.frameArray.length).toEqual(10);
      expect(game.frameArray.slice(-1)[0].getRollScores()).toEqual([0,0]);
    });

    it("stops creating frames at 10 unless bonus status is true", function() {
      for (i = 0; i < 10; i++) {
        newFrame = game.newFrame(2);
      }
      game.STRIKE = true;
      expect(game.newFrameRules(2)).toEqual(game.frameArray);
      // test above just checks that expected return value of an updated array is created
      expect(game.frameArray.length).toEqual(11);
      expect(game.frameArray.slice(-1)[0].getRollScores()).toEqual([0,0]);
    });
  });
});
