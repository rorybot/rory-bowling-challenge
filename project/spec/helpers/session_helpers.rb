module SessionHelpers
  def new_player
    visit('/new-game')
    fill_in 'player_name_input', with: 'Hank Hill'
    click_button "Name Thyself"
  end
end
