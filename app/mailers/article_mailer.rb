class ArticleMailer < ApplicationMailer
  default from: 'Articles@noom.com'

  def notify (user, article)
    @user = user
    @article = article
    mail(to: @user.email, subject: 'An article recomendation from Noom')
  end

end
