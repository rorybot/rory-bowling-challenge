feature 'Controlling games' do

  scenario 'Controller creates a new game' do
    visit('/new-game')
    fill_in 'player_name_input', with: 'Hank Hill'
    click_button "Name Thyself"
    expect(Player.first.name).to eq 'Hank Hill' # Testing Peggy is 2nd entry
  end

end
