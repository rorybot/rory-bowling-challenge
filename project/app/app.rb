ENV['RACK_ENV'] ||= 'development'

require 'sinatra/base'
require_relative 'database_setup'
require_relative 'helpers'
require 'json'

# Controls logic of the webpage
class BowlingServer < Sinatra::Base
  enable :sessions
  set :session_secret, '92FCCC5C23D7B5B5DE9D125841CEF'
  use Rack::MethodOverride

  set :public_folder, (proc { File.join(root) })

  get '/time' do
    headers 'Access-Control-Allow-Origin' => '*'
    { time: Time.now.to_s }.to_json
  end


  get '/game' do
    erb :'/game/index'
  end

  post '/player-and-game-creation' do
    new_player = Player.create(name: params[:player_name])
    new_game = Game.create(player_id: new_player.id)
    new_game.frame_setter
    redirect('/game')
  end


  get '/new-game' do
    # Game.create(player_id: peggy.id)
    erb :'/game/new_game'
  end

  run! if app_file == $PROGRAM_NAME
end
