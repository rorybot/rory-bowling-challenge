describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame(2);
  });

  describe("Can create a frame", function() {
    it("has two rolls as limit", function() {
      expect(frame.getRollLimit()).toEqual(2);
    });

    it("has five rolls as limit", function() {
      frame = new Frame(5);
      expect(frame.getRollLimit()).toEqual(5);
    });

    it("creates bonus frame", function() {
      frame = new Frame(2, true);
      expect(frame.bonusFrame).toEqual(true);
    });
  });

  describe("Score tracking", function() {
    it("can increment the score value", function() {
      frame = new Frame(2);
      frame.ROLL_SCORES = [5, 3];
      expect(frame.updateFrameScore()).toEqual(8);
    });
  });
});
