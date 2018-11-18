'use strict';
import { _stories } from '/dist/repositories/_stories.js';
import { StoryItemListing } from '/dist/components/_story-item-listing.js'

const e = React.createElement;
let posts = [];

class StoryList extends React.Component {
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
      <div>
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

const domContainer = document.getElementById('story-list');
ReactDOM.render(e(StoryList), domContainer);
