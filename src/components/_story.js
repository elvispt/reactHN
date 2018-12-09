import Helpers from '../libraries/_helpers.js';
import Comment from "./_comment.js";

export default class Story extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.story.id > 0) {
      return (
        <div className="story">
          <article>
            {this.props.story.title} <small>{Helpers.hostname(this.props.story.url)}</small>
            <div>
              <small>
                <span>{this.props.story.score}</span> |
                <span> by {this.props.story.by}</span> |
                <span> {moment(this.props.story.time * 1000).fromNow()}</span> |
                <span> {this.props.story.descendants} comments</span>
              </small>
            </div>
          </article>
          <p dangerouslySetInnerHTML={{ __html: this.props.story.text }}></p>

          <hr/>

          <Comment story={this.props.story}/>

        </div>
      );
    } else {
      return '';
    }
  }
}
