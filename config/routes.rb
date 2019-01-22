Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index]
      resources :articles, only: [:index, :create, :destroy, :update]
      resources :mail, only: [:create]
    end
  end

  root to: 'home#index'
end
