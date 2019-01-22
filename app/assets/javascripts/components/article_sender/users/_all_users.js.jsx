const AllUsers = (props) => {
  const users = props.users.map( user => {
    let selected = (props.selectedUsers.indexOf(user.id) > -1) ? true : false;
    return (
        <User
          key={user.id}
          user={user}
          handleUserClick={props.handleUserClick}
          selected={selected} />
    )
  });

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
      <h2>Users:</h2>
      {props.children}
      {users}
    </div>
  )
}
