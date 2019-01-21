class ArticleSender extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedUsers: [],
      selectedArticle: null
    };
    this.handleUserClick = this.handleUserClick.bind(this)
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

  render () {
    let styles = {
      width: '100%',
      border: '3px solid black',
      borderRadius: '5px',
      margin: '16px 0',
      padding: '8px 8px',
      boxSizing: 'border-box'
    };

    return (
      <div style={styles}>
        <h2>Send Articles</h2>
        <AllUsers
          handleUserClick={this.handleUserClick}
          users={this.props.users}
          selectedUsers={this.state.selectedUsers}>
          <p>Click to select recipients</p></AllUsers>
      </div>
    )
  }
}
