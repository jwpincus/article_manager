const NewArticle = (props) => {

  let form = {}

  let styles = {
    width: '100%',
    border: '3px solid black',
    borderRadius: '5px',
    margin: '16px 0',
    padding: '8px 8px',
    boxSizing: 'border-box'
  }

  return(
    <form
      style={styles}
      onSubmit={ e => {
        e.preventDefault();
        props.submit(form.title.value, form.body.value); e.target.reset();
      }}>
      <input
        ref={value => form.title = value}
        placeholder='Enter the title of the article'/><br/>
      <textarea
         ref={value => form.body = value}
         placeholder='Enter the body here' /><br/>
       <button>Submit</button>
    </form>
  )
}
