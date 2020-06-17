class BlogSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :link, :description
  has_many :reviews
end
