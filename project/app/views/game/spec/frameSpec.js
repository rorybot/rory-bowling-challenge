
describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame(2);
  });



  describe("Can create a frame", function() {
    it("has two rolls as limit", function() {
      expect(frame.getRollLimit()).toEqual(2);
    });

    it("has one rolls as limit", function() {
        frame = new Frame(1);
      expect(frame.getRollLimit()).toEqual(1);
    });

    it("creates roll scorers based on limit", function() {
        frame.createRollScores(2)
      expect(frame.getRollScores()).toEqual([0,0]) ;
    });



  });
});
