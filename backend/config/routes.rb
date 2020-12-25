Rails.application.routes.draw do
  get 'users/users'
  get '/items', to: 'products#items'
  get '/categories', to: 'products#categories'
  get '/users', to: 'users#users'
  get '/users/:id', to: 'users#user'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
