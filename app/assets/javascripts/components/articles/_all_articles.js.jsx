const AllArticles = (props) => {
  const articles = props.articles.map( article => {
    return (
        <Article
          key={article.id}
          article={article}
          delete={props.delete}
          update={props.update}
          duplicate={props.duplicate} />
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
      <h2>Articles:</h2>
      {articles}
    </div>
  )
}
