Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :bloggers, only:[:index, :create]
  resources :blogs, only:[:index, :show, :destroy]
  resources :reviews, expect:[:new]
end
