require 'test_helper'

class DecoControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

end
