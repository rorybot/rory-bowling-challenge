
feature 'Database functionality' do
  let!(:neo) do
    Player.create(name: 'Bobby Hill')
  end

  scenario 'I can create a new player' do
    peggy = Player.new(name: 'Peggy Hill')
    expect(peggy.save).to eq true
    expect(Player.last.name).to eq 'Peggy Hill' # Testing Peggy is 2nd entry
    expect(Player.first.name).to eq 'Bobby Hill' # Testing Bobby is 1st entry
  end

  scenario 'A player can have a game' do
    bobby = Player.all[0]
    test_game = Game.create(player_id: bobby.id)

    game_player_id = test_game.player_id
    lookup_that_player = Player.first(id: game_player_id)
    expect(lookup_that_player.name).to eq bobby.name
  end

  scenario 'A player can have multiple games and be identified' do
    player_names = ['Bobby Hill', 'Bobby Hill', 'Bobby Hill', 'Peggy Hill']
    bobby = Player.all[0]
    peggy = Player.create(name: player_names[3])

    3.times { Game.create(player_id: bobby.id) }
    Game.create(player_id: peggy.id)

    player_ids = Game.map(&:player_id)
    players = player_ids.map { |x| Player.first(id: x) }
    expect(players.map(&:name)).to eq player_names
  end

  scenario 'A game can have 10 frames' do
    bobby = Player.all[0]
    test_game = Game.create(player_id: bobby.id)
    10.times { Frame.create(game_id: test_game.id) }
    expect(Frame.map(&:game_id)).to eq Array.new(10, test_game.id)
  end

  scenario 'Frames store roll of balls' do
    test_game = Game.create
    test_game.frame_setter
    p game_frames = Frame.map{|x| x.game_id = test_game.id
      x}
      arr = (1..10).to_a
      game_frames.each{|x| x.update(:roll_1 => arr.delete_at(0))}

      frames_roll_array = game_frames.map(&:roll_1)
    p Game.all
    p Frame.all
    expect(frames_roll_array.inject(0){|sum,x| sum + x}).to eq 55
  end
end
