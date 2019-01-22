const ArticleSelector = (props) => {

  let styles = {
    width: '100%',
    border: '3px solid black',
    borderRadius: '5px',
    margin: '16px 0',
    padding: '8px 8px',
    boxSizing: 'border-box'
  };


  const articles = props.articles.map( a => {
    let articleStyle = {
      width: '20%',
      border: '1px solid black',
      borderRadius: '5px',
      display: 'inline-block',
      boxSizing: 'border-box',
      padding: '0 8px',
      textAlign: 'center',
      cursor: 'pointer'
    };

    if (a.id === props.selectedArticle) {
      articleStyle = {...articleStyle, border: '2px solid blue' }
    }
    return (
      <div
        key={a.id}
        style={articleStyle}
        onClick={ () => props.handleArticleClick(a.id)}>
        {a.title}
      </div>
    )
  })

  return (
    <div style={styles}>
      <h2>Articles</h2>
      <p>Click to select an article</p>
      {articles}
    </div>
  )

}
