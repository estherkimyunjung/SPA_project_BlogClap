class Review < ApplicationRecord
  belongs_to :blogger
  belongs_to :blog
end
