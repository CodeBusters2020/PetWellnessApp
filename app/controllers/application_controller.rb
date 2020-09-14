class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token

  def after_sign_in_path_for(resource)
    '/mypets'
  end

  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
  end


end
