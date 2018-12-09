export default class Comment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="comments-listing">
        {this.props.story.comments.map(comment => (
          <div key={comment.id} className="comment">
            <div>
              <small>
                <span className="by">{comment.by} {moment(comment.time * 1000).fromNow()} </span>
                <span>[-]</span>
              </small>
            </div>
            <p className="text" dangerouslySetInnerHTML={{ __html: comment.text }}></p>
          </div>
        ))}
      </div>
    );
  }
}
