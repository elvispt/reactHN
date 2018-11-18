export class StoryItemListing extends React.Component {
  render() {
    return (
      <ul>
        { this.props.items.map(item => (
          <li data-id={item.id} key={item.id}>
            {item.title} <a href={item.url} title="Open in new window/tab" target="_blank">[>]</a>
            <div><small>Score: {item.score} | {item.time} | Comments: {item.descendants}</small></div>
          </li>
        ))}
      </ul>
    );
  }
}
