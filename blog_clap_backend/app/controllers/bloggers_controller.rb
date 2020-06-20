class BloggersController < ApplicationController
  def index
    bloggers = Blogger.all
    render json: bloggers
  end
  
  def create
    blogger = Blogger.new(new_blogger_params)
    if blogger.save
      render json: BloggerSerializer.new(blogger)
    else
      render json: BloggerSerializer.new(blogger)
    end
  end

  private 
  def new_blogger_params
    params.require(:blogger).permit(:name)
  end
end
