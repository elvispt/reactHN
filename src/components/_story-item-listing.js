export class StoryItemListing extends React.Component {
  render() {
    return (
      <ul>
        { this.props.items.map(item => (
          <li data-id={item.id} key={item.id}>{item.title}</li>
        ))}
      </ul>
    );
  }
}
