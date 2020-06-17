class BlogsController < ApplicationController

  def show
    blog = Blog.find(params[:id])
    # render json: ReviewSerializer.new(reviews, options)

    render json: BlogSerializer.new(blog, options)
  end

  def index
    blogs = Blog.all
    render json: BlogSerializer.new(blogs, options)
  end  
  
  def destroy
    blog = Blog.find(params[:id])
    unless blog.nil?
      blog.destroy
      render json: blog
    else
      render json: {error: 'Blog not Found!'}, status: 404
    end
  end


  def options
    options = {include: [:reviews]}
  end

  
end
