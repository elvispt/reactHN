import Header from './components/header.js';
import StoryList from './components/story-list.js';
import _stories from './repositories/_stories.js';
import Content from './components/content.js';
import CONFIG from './repositories/_config.js';

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
    this.sortBy = this.sortBy.bind(this);
    this.fetchAllStories = this.fetchAllStories.bind(this);
    this.fetchAllStories();
  }

  render() {
    return (
      <div id="container" className="container">
        <Header page={this.state.page}
                changePage={this.changePage}
                items={this.state.items}
        />
        <StoryList items={this.state.items}
                   changeStory={this.changeStory}
                   active={this.state.active}
                   sort={this.state.sort}
                   sortBy={this.sortBy}
        />
        <Content story={this.state.story}/>
      </div>
    );
  }

  changeStory(story) {
    this.setState({story: story, active: story.id }, undefined);
    story.visited = true;
  }

  /**
   * Triggers a page change
   * TODO: Load stories for the chosen page
   * @param page
   */
  changePage(page) {
    this.setState({page}, undefined);
  }

  sortBy(type, direction) {
    _storyPile.sort(this.sortExpression(direction, type));
    this.setState({ items: _storyPile, sort: type }, undefined);
  }

  sortExpression(sortDirection, fieldName) {
    let sortExpression;
    if (sortDirection === CONFIG.sortDirection.ASC) {
      sortExpression = (a, b) => a[fieldName] - b[fieldName];
    } else {
      sortExpression = (a, b) => b[fieldName] - a[fieldName];
    }
    return sortExpression;
  }

  fetchAllStories() {
    _stories.fetch()
      .then(json => {
        json.forEach(this.fetchStory.bind(this));
      });
  }

  fetchStory(id) {
    _stories.fetchOne(id)
      .then(Main.shouldAddStoryToPile)
      .then(this.sortStories.bind(this));
  }

  /**
   * Check if this story should be added to the pile
   * @param story
   * @returns {boolean}
   */
  static shouldAddStoryToPile(story) {
    if (story.score > CONFIG.minScoreForTopStory
      && story.descendants > CONFIG.minCommentsForTopStory) {
      story.visited = false;
      _storyPile.push(story);
      return true;
    }
    return false;
  }

  sortStories(isPushed) {
    if (isPushed) {
      this.sortBy(this.state.sort);
    }
  }
}

const domContainer = document.getElementById('main');
ReactDOM.render(e(Main), domContainer);
