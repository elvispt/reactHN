import { _stories } from '/dist/repositories/_stories.js';
import { StoryItemListing } from '/dist/components/_story-item-listing.js'

const e = React.createElement;

class StoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Loading...",
          body: "",
        }
      ],
    };

    this.refresh = this.refresh.bind(this);

    _stories.fetch()
      .then(json => {
        this.setState({items: json});
      });
  }

  render() {
    return (
      <div>
        <button onClick={this.refresh}>Refresh List</button>
        <StoryItemListing items={this.state.items}/>
      </div>
    );
  }

  refresh() {
    _stories.fetch()
      .then(json => {
        json[0].title = "Proof of refresh: time -- " + Date.now();
        this.setState({items: json});
      });
  }
}

const domContainer = document.getElementById('story-list');
ReactDOM.render(e(StoryList), domContainer);
