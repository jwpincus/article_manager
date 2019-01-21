class Article extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      editable: false
    }
  }

  handleEdit () {
    if (this.state.editable) {
      let title = this.title.value;
      let body = this.body.value;
      let id = this.props.article.id;
      let article = {id: id, title: title, body: body};
      this.props.update(article);
    }
    this.setState({
      editable: !this.state.editable
    });
  }

  render () {
    let styles = {
      width: '100%',
      border: '1px solid black',
      borderRadius: '5px',
      display: 'inline-block',
      boxSizing: 'border-box',
      textAlign: 'center',
      margin: '8px 0'
    };

    let title = this.state.editable ?
      <div>
        Title: <input type='text' ref={input => this.title = input} defaultValue={this.props.article.title}/>
      </div> :
      <h2>{this.props.article.title}</h2>;

    let body = this.state.editable ?
      <div>
        Body: <textarea ref={input => this.body = input} defaultValue={this.props.article.body}/>
      </div> :
      <p>{this.props.article.body}</p>;

    return (
      <div style={styles}>
        {title}
        {body}
        <button onClick={() => this.handleEdit()}>{this.state.editable ? 'Submit' : 'Edit'}</button>
        <button onClick={() => this.props.delete(this.props.article.id)}>Delete Article</button>
      </div>
    )
  }
}
