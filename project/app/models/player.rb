# Handle the generation of peeps in the database
class Player
  include DataMapper::Resource

  property(:id, Serial)
  property(:name, String)
end
