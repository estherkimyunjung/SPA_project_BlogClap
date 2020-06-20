class Review < ApplicationRecord
  belongs_to :blogger
  belongs_to :blog

  validates :blog_id, presence: true
  validates :comment, length: { maximum: 50, 
    too_long: "%{count} characters is the maximum allowed" }
end
