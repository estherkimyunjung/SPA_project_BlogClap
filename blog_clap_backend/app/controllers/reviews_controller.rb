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
  
  
end
