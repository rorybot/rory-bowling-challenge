
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
        frame = new Frame(2, true)
      expect(frame.bonusFrame).toEqual(true);
    });
  });


});
