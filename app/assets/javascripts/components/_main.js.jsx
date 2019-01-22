class Main extends React.Component  {
  constructor (props) {
    super(props);
    this.state = {
      users: [],
      articles: []
    };
    this.handleArticleSubmit = this.handleArticleSubmit.bind(this);
    this.handleArticleDelete = this.handleArticleDelete.bind(this);
    this.handleArticleUpdate = this.handleArticleUpdate.bind(this);
    this.handleArticleDuplicate = this.handleArticleDuplicate.bind(this);
  }

  componentDidMount () {
    this.fetchUsers();
    this.fetchArticles()
  }

  fetchUsers () {
    fetch('/api/v1/users.json')
      .then( response => {return response.json()})
      .then( json => {this.setState({users: json})});
  }

  fetchArticles () {
    fetch('/api/v1/articles.json')
      .then( response => {return response.json()})
      .then( json => {this.setState({articles: json})});
  }

  handleArticleUpdate (article) {
    fetch(`/api/v1/articles/${article.id}`,
    {
      method: 'PUT',
      body: JSON.stringify({article: article}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
        this.updateArticle(article)
      })
  }

  updateArticle (article) {
    let newArticles = this.state.articles.map( a => {
      if (a.id === article.id) {
        return article
      } else {
        return a
      }
    })
    this.setState({
      articles: newArticles
    })
  }

  handleArticleDelete (id) {
    fetch(`/api/v1/articles/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((_) => this.deleteArticle(id) )
  }

  deleteArticle (id) {
    let newArticles = this.state.articles.filter( article => article.id !== id)
    this.setState({articles: newArticles})
  }

  handleArticleSubmit (title, articleBody) {
    let body = JSON.stringify({article: {title: title, body: articleBody}});

    fetch('/api/v1/articles',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    })
    .then( response => response.json())
    .then( article => this.appendArticle(article))
  }

  appendArticle (article) {
    let newArticles = [...this.state.articles]
    newArticles.push(article)
    this.setState({articles: newArticles})
  }

  handleArticleDuplicate (title, body) {
    // this seems silly, but is setup to easily handle alternative ways of duplicating rather than creating new on the server side
    this.handleArticleSubmit(title, body)
  }

  render () {
    return (
      <div>
        <h1>Article Manager</h1>
        <ArticleSender
          articles={this.state.articles}
          users={this.state.users} />
        <AllArticles
          articles={this.state.articles}
          delete={this.handleArticleDelete}
          update={this.handleArticleUpdate}
          duplicate={this.handleArticleDuplicate} />
        <NewArticle
          submit={this.handleArticleSubmit} />
      </div>
    )
  }

}
