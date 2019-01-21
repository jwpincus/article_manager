const Article = (props) => {
  let styles = {
    width: '100%',
    border: '1px solid black',
    borderRadius: '5px',
    display: 'inline-block',
    boxSizing: 'border-box',
    textAlign: 'center',
    margin: '8px 0'
  }

  return (
    <div style={styles}>
      <h2>{props.article.title}</h2>
      <p>{props.article.body}</p>
      <button onClick={() => props.delete(props.id)}>Delete Article</button>
    </div>
  )
}
