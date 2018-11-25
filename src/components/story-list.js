import { StoryListItem } from './_story-list-item.js'

export class StoryList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="story-list" className="story-list">
        <StoryListItem items={this.props.items} changeStory={this.props.changeStory} active={this.props.active}/>
      </div>
    );
  }
}
