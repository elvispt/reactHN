export default class Comment extends React.Component {
  constructor(props) {
    super(props);
  }


  buildItem(comment) {

    if (comment) {
      return (
        <div key={comment.id} className="comment">
          <div>
            <small>
              <span className="by">{comment.by} {moment(comment.time * 1000).fromNow()} </span>
              <span>[-]</span>
            </small>
          </div>
          <p className="text" dangerouslySetInnerHTML={{__html: comment.text}}></p>
        </div>
      );
    }
  }

  render() {
    const { comments } = this.props.story;
    return (
      <div className="comments-listing">
        {comments.map(this.buildItem)}
      </div>
    );
  }
}
