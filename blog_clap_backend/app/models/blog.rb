class Blog < ApplicationRecord
  has_many :reviews, dependent: :destroy
  has_many :bloggers, through: :reviews
  
end
