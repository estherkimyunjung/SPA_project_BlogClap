class ReviewsController < ApplicationController
  def show
    review = Review.find_by_id(params[:id])
    render json: ReviewSerializer.new(review, options)
  end

  def index
    reviews = Review.all
    render json: ReviewSerializer.new(reviews, options)
  end
  
  def create
    review = Review.new(new_review_params)
    if review.save
      render json: ReviewSerializer.new(review, options)
    else
      render json: ReviewSerializer.new(review, options)
    end
  end

  def update
    review = Review.find_by_id(params[:id])
      if review.update(new_review_params)
        render json: ReviewSerializer.new(reviews, options)
      else
        render json: ReviewSerializer.new(reviews, options)
      end
  end

  def destroy
    review = Review.find_by_id(params[:id])
    unless review.nil?
      review.destroy
      render json: review
    else
      render json: {error: 'Review not Found!'}, status: 404
    end
  end

  private 
  def new_review_params
    params.require(:review).permit(:blog_id, :blogger_id, :clap, :comment)
  end

  def options
    options = {include: [:blogger, :blog]}
  end
end
