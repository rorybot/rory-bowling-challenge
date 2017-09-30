class Frame
  include DataMapper::Resource

  property(:id, Serial)
  property(:roll_1, Integer)
  property(:roll_2, Integer)

  belongs_to :game, required: true
end
