module Features
  module SessionHelpers
    def sign_up_with(email, password)
      visit new_user_session_path
      fill_in 'Email', with: email
      fill_in 'Password', with: password
      click_button 'Sign up'
    end

    def sign_in_admin(email="test@corpusbuilder.org")
      user = create(
        :user,
        accepted_terms: true,
        is_admin: true,
        is_editor: true,
        email: "test@corpusbuilder.org"
      )

      visit new_user_session_path
      fill_in 'Email', with: user.email
      fill_in 'Password', with: user.password
      click_button 'Sign in'
    end
  end
end