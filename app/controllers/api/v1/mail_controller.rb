class Api::V1::MailController < ApplicationController

  def create
    users = User.where(id: params[:user_ids])
    article = Article.find(params[:article_id])
    # do something with sending mail
    head :ok
  end

end
