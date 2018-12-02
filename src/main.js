import { Header } from './components/header.js';
import { StoryList } from './components/story-list.js';
import { _stories } from './repositories/_stories.js';
import { Content } from './components/content.js';
import { CONFIG } from './repositories/_config.js';

const e = React.createElement;

let _posts = [];

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: CONFIG.pages.TOP,
      active: -666,
      items: [{id: -666, title: "Loading stories...", score: 0, descendants: 0, by: '', visited: false}],
      story: { title: "Click on a story"}
    };
    this.refresh = this.refresh.bind(this);
    this.refresh();
    this.changeStory = this.changeStory.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  render() {
    return (
      <div id="container" className="container">
        <Header page={this.state.page} changePage={this.changePage}/>
        <StoryList items={this.state.items} changeStory={this.changeStory} active={this.state.active}/>
        <Content story={this.state.story}/>
      </div>
    );
  }

  changeStory(story) {
    this.setState({story: story, active: story.id });
    story.visited = true;
  }

  /**
   * Triggers a page change
   * TODO: Load stories for the chosen page
   * @param page
   */
  changePage(page) {
    this.setState({page});
  }

  /**
   * Sort stories by score
   */
  static sortByScore() {
    _posts.sort(function (a, b) {
      return a.score > b.score ? -1 : 1;
    });
  }

  refresh() {
    let self = this;
    _stories.fetch()
      .then(json => {
        json.forEach(id => {
          _stories.fetchOne(id)
            .then(function (response) {
              if (response.score > CONFIG.minScoreForTopStory) {
                response.visited = false;
                _posts.push(response);
                return true;
              }
            })
            .then(function (isPushed) {
              if (isPushed) {
                Main.sortByScore();
                self.setState({ items: _posts });
              }
            });
        });
      });
  }
}

const domContainer = document.getElementById('main');
ReactDOM.render(e(Main), domContainer);
