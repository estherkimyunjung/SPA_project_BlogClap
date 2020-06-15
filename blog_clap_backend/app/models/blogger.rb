class Blogger < ApplicationRecord
  has_many :reviews
  has_many :blogs, through: :reviews
end
