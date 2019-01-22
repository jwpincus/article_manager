class ArticlesController < ApplicationController

  def show
    user = User.find_by_email(params[:email])
    @article = Article.find(params[:id])
    user.reads.create(article: @article) if user
  end

end
