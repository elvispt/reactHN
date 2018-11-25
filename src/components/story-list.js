import { StoryItemListing } from '../../dist/components/_story-item-listing.js'
import { _stories } from '../../dist/repositories/_stories.js'

let posts = [];

export class StoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{id: -666, title: "Loading stories...", score: 0}],
    };
    this.refresh = this.refresh.bind(this);
    this.refresh();
  }

  render() {
    return (
      <div id="story-list" className="story-list">
        <StoryItemListing items={this.state.items}/>
      </div>
    );
  }

  refresh() {
    let self = this;
    _stories.fetch()
      .then(json => {
        json.forEach(id => {
          _stories.fetchOne(id)
            .then(function (response) {
              posts.push(response);
              self.setState({ items: posts });
            });
        });
      });
  }
}
