const initialState = {
  selectedUsers: [],
  selectedArticle: null
}

class ArticleSender extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    };
    this.handleUserClick = this.handleUserClick.bind(this);
    this.handleArticleClick = this.handleArticleClick.bind(this);
  }

  handleUserClick (id) {
    let index = this.state.selectedUsers.indexOf(id)
    let newUsers = [...this.state.selectedUsers]
    if (index === -1) {
      newUsers.push(id)
    } else {
      newUsers.splice(index, 1)
    }
    this.setState({selectedUsers: newUsers})
  }

  handleArticleClick (id) {
    this.setState({selectedArticle: id})
  }

  handleSend () {
    let body = JSON.stringify({
      user_ids: this.state.selectedUsers,
      article_id: this.state.selectedArticle
    })

    fetch('/api/v1/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    })
    .then( (response) => {
      this.setState({
        ...initialState
      })
    })
    console.log(body)
  }

  render () {
    let styles = {
      width: '100%',
      border: '3px solid black',
      borderRadius: '5px',
      margin: '16px 0',
      padding: '8px 8px',
      boxSizing: 'border-box'
    };

    let sendButton = (this.state.selectedArticle && this.state.selectedUsers.length > 0) ? <button onClick={() => this.handleSend()}>Send Article</button> : null

    return (
      <div style={styles}>
        <h2>Send Articles</h2>
        <AllUsers
          handleUserClick={this.handleUserClick}
          users={this.props.users}
          selectedUsers={this.state.selectedUsers}>
          <p>Click to select recipients</p></AllUsers>
        <ArticleSelector
          handleArticleClick={this.handleArticleClick}
          articles={this.props.articles}
          selectedArticle={this.state.selectedArticle} />
        {sendButton}
      </div>
    )
  }
}
