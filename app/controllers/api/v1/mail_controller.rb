class Api::V1::MailController < ApplicationController

  def create
    users = User.where(id: params[:user_ids])
    article = Article.find(params[:article_id])
    users.each do |user|
      ArticleMailer.notify(user, article).deliver_later
    end
    head :ok
  end

end
