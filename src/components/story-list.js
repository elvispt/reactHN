import { StoryItemListing } from '../../dist/components/_story-item-listing.js'

export class StoryList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="story-list" className="story-list">
        <StoryItemListing items={this.props.items} changeStory={this.props.changeStory} active={this.props.active}/>
      </div>
    );
  }
}
