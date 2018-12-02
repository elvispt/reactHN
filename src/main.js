import { Header } from './components/header.js';
import { StoryList } from './components/story-list.js';
import { _stories } from './repositories/_stories.js';
import { Content } from './components/content.js';
import { CONFIG } from './repositories/_config.js';

const e = React.createElement;

let _storyPile = [];

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: CONFIG.pages.TOP,
      sort: CONFIG.sortTypes.SCORE,
      active: -666,
      items: [{id: -666, title: "Loading stories...", score: 0, descendants: 0, by: '', visited: false}],
      story: { title: "Click on a story"}
    };
    this.changeStory = this.changeStory.bind(this);
    this.changePage = this.changePage.bind(this);
    this.sortByScore = this.sortByScore.bind(this);
    this.sortByComments = this.sortByComments.bind(this);
    this.fetchAllStories = this.fetchAllStories.bind(this);
    this.fetchAllStories();
  }

  render() {
    return (
      <div id="container" className="container">
        <Header page={this.state.page} changePage={this.changePage}/>
        <StoryList items={this.state.items}
                   changeStory={this.changeStory}
                   active={this.state.active}
                   sort={this.state.sort}
                   sortByScore={this.sortByScore}
                   sortByComments={this.sortByComments}
        />
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
  sortByScore() {
    _storyPile.sort(function (a, b) {
      return a.score > b.score ? -1 : 1;
    });
    this.setState({ items: _storyPile, sort: CONFIG.sortTypes.SCORE });
  }

  /**
   * Sort stories by number of comments
   */
  sortByComments() {
    _storyPile.sort(function (a, b) {
      return b.descendants - a.descendants;
    });
    this.setState({ items: _storyPile, sort: CONFIG.sortTypes.COMMENTS });
  }

  fetchAllStories() {
    _stories.fetch()
      .then(json => {
        json.forEach(this.fetchStory.bind(this));
      });
  }

  fetchStory(id) {
    _stories.fetchOne(id)
      .then(this.addStoryToPile)
      .then(this.sortStories.bind(this));
  }

  /**
   * Check if this story should be added to the pile
   * @param story
   * @returns {boolean}
   */
  addStoryToPile(story) {
    if (story.score > CONFIG.minScoreForTopStory) {
      story.visited = false;
      _storyPile.push(story);
      return true;
    }
    return false;
  }

  sortStories(isPushed) {
    if (isPushed) {
      switch (this.state.sort) {
        case CONFIG.sortTypes.SCORE:
          this.sortByScore();
          break;
        case CONFIG.sortTypes.COMMENTS:
          this.sortByComments();
          break
        case CONFIG.sortTypes.AGE:
        // TODO: Implement sorting by age of story
      }
    }
  }
}

const domContainer = document.getElementById('main');
ReactDOM.render(e(Main), domContainer);
