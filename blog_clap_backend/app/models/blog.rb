class Blog < ApplicationRecord
  has_many :reviews, dependent: :destroy
  has_many :bloggers, through: :reviews

  validates :title, :link, :description, presence: true

  def getClaps
    review = self.reviews.first
    review ? self.reviews.pluck(:clap).sum : 0
  end  
end
