const AllUsers = (props) => {
  const users = props.users.map( user => {
    return (
        <User
          key={user.id}
          name={user.name} />
    )
  })

  let styles = {
    width: '100%',
    border: '3px solid black',
    borderRadius: '5px'
  }

  return (
    <div style={styles}>
      <h2>Users:</h2>
      {users}
    </div>
  )
}
