import { Header } from './components/header.js';
import { StoryList } from './components/story-list.js';
import { _stories } from './repositories/_stories.js';
import { Content } from './components/content.js';

const e = React.createElement;

let _posts = [];

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: -666,
      items: [{id: -666, title: "Loading stories...", score: 0, descendants: 0, by: ''}],
      story: { title: "Click on a story"}
    };
    this.refresh = this.refresh.bind(this);
    this.refresh();
    this.changeStory = this.changeStory.bind(this);
  }

  render() {
    return (
      <div id="container" className="container">
        <Header/>
        <StoryList items={this.state.items} changeStory={this.changeStory} active={this.state.active}/>
        <Content story={this.state.story}/>
      </div>
    );
  }

  changeStory(story) {
    this.setState({story: story, active: story.id });
  }

  refresh() {
    let self = this;
    _stories.fetch()
      .then(json => {
        json.forEach(id => {
          _stories.fetchOne(id)
            .then(function (response) {
              _posts.push(response);
              self.setState({ items: _posts });
            });
        });
      });
  }
}

const domContainer = document.getElementById('main');
ReactDOM.render(e(Main), domContainer);
