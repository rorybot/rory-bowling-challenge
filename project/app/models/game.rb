class Game
  include DataMapper::Resource

  property(:id, Serial)
  property(:score, Integer)

  def frame_setter
    10.times{Frame.create(game_id: self.id)}
  end

  belongs_to :player, required: false
  has n, :frames
end
