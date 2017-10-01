describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("Can interact with frame", function() {
    it("can create new Frames", function() {
      newFrame = game.newFrame(2);
      expect(newFrame.getRollLimit()).toEqual(2);
    });

    it("creates frames with roll scorers based on limit", function() {
      newFrame = game.newFrame(2);
      newFrame.createRollScores(2);
      expect(newFrame.getRollScores()).toEqual([0, 0]);
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

    it("stops creating frames at 10", function() {
      for (i = 0; i < 10; i++) {
        newFrame = game.newFrame(2);
      }

      expect(game.newFrame(2)).toEqual("Go home - you've reached your limit!");
    });
  });
});
