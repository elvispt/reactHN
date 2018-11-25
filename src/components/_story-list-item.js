import { CONFIG } from '../repositories/_config.js'

export class StoryListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        { this.props.items.map(item => (
          <li onClick={this.props.changeStory.bind(null, item)} key={item.id} className={this.props.active === item.id ? "active" : ""}>
            <span className="title">{item.title}</span>
            <a href={item.url} title="Open in new window/tab" target="_blank">[>]</a>
            <div>
              <small>S: {item.score} | {item.time} | C: {item.descendants} | <a href={CONFIG.hnCommentsPage(item.id)} target="_blank" rel="nofollow">[hn >]</a></small>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
