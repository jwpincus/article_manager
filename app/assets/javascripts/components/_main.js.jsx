class Main extends React.Component  {
  constructor (props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount () {
    fetch('/api/v1/users.json')
      .then( response => {return response.json()})
      .then( json => {this.setState({users: json})})
  }

  render () {
    return (
      <div>
        <h1>Article Manager</h1>
        <AllUsers users={this.state.users} />
      </div>
    )
  }

}
