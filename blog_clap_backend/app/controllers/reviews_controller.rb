class ReviewsController < ApplicationController

  def show
    review = Review.find(params[:id])
    options = {
      include: [:blogger, :blog]
    }
    render json: ReviewSerializer.new(review, options)
  end

  def index
    reviews = Review.all
    render json: ReviewSerializer.new(reviews)
  end
  
  def create 
    new_review = Review.create(new_review_params)
    render json:ReviewSerializer.new(review)
  end

  private 
  def new_review_params
    params.require(:review).permit(:blog_id, :blogger_id, :clap, :comment, :created_at)
  end
end
