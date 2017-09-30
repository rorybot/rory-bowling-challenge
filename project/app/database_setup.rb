require 'data_mapper'
require 'dm-postgres-adapter'
require 'dm-migrations'
require 'pg'

require_relative 'models/player'
require_relative 'models/frame'
require_relative 'models/game'

localhost = "postgres://localhost/bowling_database_#{ENV['RACK_ENV']}"

DataMapper.setup(:default, ENV['DATABASE_URL'] || localhost)

DataMapper.finalize
