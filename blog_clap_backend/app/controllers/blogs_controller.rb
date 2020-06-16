class BlogsController < ApplicationController

  def show
    blog = Blog.find(params[:id])
    render json: BlogSerializer.new(blog)
  end

  def index
    blogs = Blog.all
    render json: blogs
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
  
end
