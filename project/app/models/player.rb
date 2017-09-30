# Handle the generation of peeps in the database
class Player
  include DataMapper::Resource

  property(:id, Serial)
  property(:name, String)

  def see_frame(number)
    Frame.all[number]
  end
end
