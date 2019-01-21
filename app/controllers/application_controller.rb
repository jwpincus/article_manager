class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session #No longer default in Rails 5+. Allows any request to ignore CSRF token authenticity for API purposes
end
