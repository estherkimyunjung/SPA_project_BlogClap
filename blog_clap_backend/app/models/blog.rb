class Blog < ApplicationRecord
  has_many :reviews
  has_many :bloggers, through: :reviews
end
