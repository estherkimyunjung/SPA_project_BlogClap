class ReviewsController < ApplicationController

  def show
    review = Review.find(params[:id])
    render json: ReviewSerializer.new(review, options)
  end

  def index
    reviews = Review.all
    render json: ReviewSerializer.new(reviews, options)
  end
  
  def create 
    new_review = Review.create(new_review_params)
    render json:ReviewSerializer.new(review)
  end

  private 
  def new_review_params
    params.require(:review).permit(:blog_id, :blogger_id, :clap, :comment, :created_at)
  end

  def options
    potions = {include: [:blogger, :blog]}
  end
end
