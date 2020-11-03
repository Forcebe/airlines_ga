Rails.application.routes.draw do
  root :to => 'session#new'

  # Session routes to allow login and logout
  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'

  resources :users

  # Planes
  resources :airplanes

  # Flights
  resources :flights 

end
