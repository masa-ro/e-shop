class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  def users
    @users = User.all
    render json: @users
  end

  def user
    @user = User.find_by(id: params[:id])
    render json: @user
  end

  def update
    json_request = JSON.parse(request.body.read)
    @user = User.find(params[:id])
    
    # 更新処理
    # 更新が成功した場合、更新後のuser情報をJSON形式で返してください
    # 更新が失敗した場合、nilを返してください
  end
end
