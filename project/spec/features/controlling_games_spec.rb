feature 'Controlling games' do

  scenario 'Controller creates a new game' do
    new_player
    expect(Player.first.name).to eq 'Hank Hill'
    expect(Game.count).to eq 1
    expect(Player.count).to eq 1
    expect(Frame.count).to eq 10
  end

  scenario 'Controller can give a frame value' do
    new_player
    visit('/')
    p status_code
    click_button "This Gives Your First Roll 10 points"
    # expect()
  end

end
