class ProductsController < ApplicationController
  def items
    @name = params[:name]
    @category_id = params[:category_id]
    @products = Product.where("products.name like ? and products.category_id like ?", "%#{@name}%", "%#{@category_id}%").to_json(include: :category)
    render json: @products
  end

  def categories
    @categories = Category.all
    render json: @categories
  end

end
