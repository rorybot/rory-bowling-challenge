feature 'Accessor methods' do


  scenario 'Players can see their score' do
    new_player
    frames =  Frame.map{|x| x.game_id = Game.last.id
    x}
    frames.each{|x| x.update(:roll_1 => 10)}
    p frames.last.update(:roll_1 => 666)
    p frames
    last_frame = Player.last.see_frame(-1)
    expect(last_frame.roll_1).to eq 666

    # (player_id => Player.last.id)
  end

end
