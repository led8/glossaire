require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get glossaire" do
    get pages_glossaire_url
    assert_response :success
  end

end
