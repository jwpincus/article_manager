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
    borderRadius: '5px',
    margin: '16px 0',
    padding: '8px 8px',
    boxSizing: 'border-box'
  }


  return (
    <div style={styles}>
      <h2>Users:</h2>
      {users}
    </div>
  )
}
