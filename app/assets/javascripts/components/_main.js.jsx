class Main extends React.Component  {
  constructor (props) {
    super(props);
    this.state = {
      users: [],
      articles: []
    };
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

  render () {
    return (
      <div>
        <h1>Article Manager</h1>
        <AllUsers
          users={this.state.users} />
        <AllArticles
          articles={this.state.articles} />
      </div>
    )
  }

}
