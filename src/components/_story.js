export class Story extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="story">
        <div>
          {this.props.story.title} <small>(domain.com)</small>
          <div>
            <small>
              <span>{this.props.story.score}</span> |
              <span> by {this.props.story.by}</span> |
              <span> {moment(this.props.story.time * 1000).fromNow()}</span> |
              <span> {this.props.story.descendants} comments</span>
            </small>
          </div>
        </div>
        <p dangerouslySetInnerHTML={{ __html: this.props.story.text }}></p>
      </div>
    );
  }
}
