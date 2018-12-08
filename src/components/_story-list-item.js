import CONFIG from '../repositories/_config.js';
import Helpers from '../libraries/_helpers.js';

export default class StoryListItem extends React.Component {
  constructor(props) {
    super(props);
    StoryListItem.hostname = StoryListItem.hostname.bind(this);
    this.classes = this.classes.bind(this);
  }

  static hostname(url) {
    const hostname = Helpers.hostname(url);
    if (hostname) {
      return `(${hostname})`;
    }
    return '';
  }

  classes(story) {
    if (this.props.active === story.id) {
      return 'active';
    }

    if (story.visited) {
      return 'visited';
    }
    return null;
  }

  render() {
    return (
      <ul>
        { this.props.items.map(item => (
          <li onClick={this.props.changeStory.bind(null, item)} key={item.id} className={this.classes(item)}>
            <span className="title">{item.title} <small>{StoryListItem.hostname(item.url)}</small></span>
            <a href={item.url} title="Open in new window/tab" target="_blank">[>]</a>
            <div>
              <small>S: {item.score} | {moment(item.time * 1000).fromNow()} | C: {item.descendants} | <a href={CONFIG.hnCommentsPage(item.id)} target="_blank" rel="nofollow" title="Go to Hacker News post">[hn >]</a></small>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
