
feature 'Database functionality' do
  let!(:neo) do
    Player.create(name: 'Bobby Hill')
  end

  scenario 'I can create a new player' do
    neo = Player.new(name: 'Peggy Hill')
    expect(neo.save).to eq true
    expect(Player.first.name).to eq 'Bobby Hill' # Testing Peggy is 2nd entry
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
    expect(Frame.map(&:game_id)).to eq Array.new(3, test_game.id)
  end
end
