class Game
  include DataMapper::Resource

  property(:id, Serial)
  property(:score, Integer)

  belongs_to :player, required: false
  has n, :frames
end
