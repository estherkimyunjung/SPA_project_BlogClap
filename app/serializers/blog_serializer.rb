class BlogSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :link, :description
end
