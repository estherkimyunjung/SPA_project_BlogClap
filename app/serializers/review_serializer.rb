class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :clap, :comment, :created_at
  belongs_to :blogger
  belongs_to :blog
end
