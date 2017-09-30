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

  post '/update_city' do
    headers 'Access-Control-Allow-Origin' => '*'
    # session[:text_to_store] =  params[:hello_world]
    # @stored_text = session[:text_to_store]
    PersistentThermostat.last.update(user_city: params[:user_city])
    redirect('/thermostat')
  end

  get '/current_city_exist' do
    { last_city: PersistentThermostat.last.user_city }.to_json
  end

  run! if app_file == $PROGRAM_NAME
end
#   enable :sessions
#   set :session_secret, 'super secret'
#   use Rack::MethodOverride
#
#   get '/peeps' do
#     @peeps = Peep.all.reverse
#     @no_peeping = true unless signed_in?
#
#     @current_user = session[:current_user]
#     @current_user ||= 'Stranger'
#
#     @welcome = 'Welcome back ' if just_signed_in?
#     reset_returning_user_status
#     @welcome ||= 'Welcome to the peepline, '
#
#     erb :'peeps/index'
#   end
#
#   post '/peep/new' do
#     peep = Peep.create(body: params[:peep_body],
#                        user_id: session[:user_id])
#     peep.user
#     peep.save
#     redirect to('/peeps')
#   end
#
#   get '/signup_to_peep' do
#     @user_email = session[:email_address]
#     @user_real_name = session[:real_name]
#     pw_mismatch = 'Password and confirmation password do not match'
#     flash.now[:notice] = pw_mismatch if session[:mismatch_password] == 'true'
#     erb :'sign_up/signup_to_peep'
#   end
#
#   run! if app_file == $PROGRAM_NAME
# end
