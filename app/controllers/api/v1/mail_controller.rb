class Api::V1::MailController < ApplicationController

  def create
    users = User.where(id: params[:user_ids])
    article = Article.find(params[:article_id])
    users.each do |user|
      next if Rails.env.production? # This is here only for the deployment to Heroku since production email has not been set up yet
      ArticleMailer.notify(user, article).deliver_later
    end
    head :ok
  end

end
