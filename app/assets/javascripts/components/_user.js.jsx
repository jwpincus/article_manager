const User = (props) => {
  let styles = {
    width: '20%',
    border: '1px solid black',
    borderRadius: '5px',
    display: 'inline-block',
    boxSizing: 'border-box',
    padding: '0 8px',
    textAlign: 'center'
  }

  return (
    <div style={styles}>
      {props.name}
    </div>
  )
}
