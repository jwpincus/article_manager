const User = (props) => {
  let styles = {
    width: '20%',
    border: '1px solid black',
    borderRadius: '5px',
    display: 'inline-block',
    boxSizing: 'border-box',
    padding: '0 8px',
    textAlign: 'center',
    cursor: 'pointer'
  };

  if (props.selected) {
    styles = {
      ...styles,
      border: '2px solid blue'
    }
  }

  return (
    <div
      style={styles}
      onClick={() => props.handleUserClick(props.user.id)}>
      {props.user.name}
    </div>
  )
}
