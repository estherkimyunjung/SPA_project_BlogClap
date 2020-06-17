class BlogSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :link, :description
  has_many :reviews 

  attribute :clap do |object|
    object.getClaps
  end
  
end
