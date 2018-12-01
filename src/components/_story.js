import { Helpers } from '../libraries/_helpers.js';

export class Story extends React.Component {
  constructor(props) {
    super(props);
    this.hostname = this.hostname.bind(this);
  }

  hostname(url) {
    const hostname = Helpers.hostname(url);
    if (hostname) {
      return `(${hostname})`;
    }
    return '';
  }

  render() {
    return (
      <div className="story">
        <div>
          {this.props.story.title} <small>{this.hostname(this.props.story.url)}</small>
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
