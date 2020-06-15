class BloggersController < ApplicationController

  def index
    bloggers = Blogger.all
    render json: bloggers
  end
  

end
