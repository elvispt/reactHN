import StoryListItem from './_story-list-item.js';
import CONFIG from '../repositories/_config.js';

export default class StoryList extends React.Component {
  constructor(props) {
    super(props);
    this.SCORE = CONFIG.sortTypes.SCORE;
    this.COMMENTS = CONFIG.sortTypes.COMMENTS;
    this.AGE = CONFIG.sortTypes.AGE;
    this.state = {
      sortScore: CONFIG.sortDirection.DESC,
      sortComments: CONFIG.sortDirection.DESC,
      sortAge: CONFIG.sortDirection.DESC,
      prev: this.SCORE,
    };
    this.className = this.className.bind(this);
    this.sort = this.sort.bind(this);
  }

  className(sortType) {
    let classes = [];
    if (sortType === this.props.sort) {
      classes.push('active');
    }
    switch (sortType) {
      case this.SCORE:
        classes.push(StoryList.sortClass(this.state.sortScore));
        break;
      case this.COMMENTS:
        classes.push(StoryList.sortClass(this.state.sortComments));
        break;
      case this.AGE:
        classes.push(StoryList.sortClass(this.state.sortAge));
        break;
    }
    return classes.join(' ');
  }

  static sortClass(sortDirection) {
    return sortDirection === CONFIG.sortDirection.DESC
      ? 'descending'
      : 'ascending';
  }

  sort(sortType) {
    let sortDirection;
    switch (sortType) {
      case this.SCORE:
        sortDirection = StoryList.toggleSortDirection(this.state.sortScore, this.state.prev, this.SCORE);
        this.setState({prev: this.SCORE, sortScore: sortDirection}, undefined);
        break;
      case this.COMMENTS:
        sortDirection = StoryList.toggleSortDirection(this.state.sortComments, this.state.prev, this.COMMENTS);
        this.setState({prev: this.COMMENTS, sortComments: sortDirection}, undefined);
        break;
      case this.AGE:
        sortDirection = StoryList.toggleSortDirection(this.state.sortAge, this.state.prev, this.AGE);
        this.setState({prev: this.AGE, sortAge: sortDirection}, undefined);
        break;
    }
    this.props.sortBy(sortType, sortDirection);
  }

  static toggleSortDirection(def, prev, current) {
    let sortDirection = def;
    if (prev === current) {
      sortDirection = sortDirection === CONFIG.sortDirection.ASC
        ? CONFIG.sortDirection.DESC
        : CONFIG.sortDirection.ASC;
    }
    return sortDirection;
  }

  render() {
    return (
      <div id="story-list" className="story-list">
        <div className="sort-by">
          <button type="button"
                  className={this.className(this.SCORE)}
                  onClick={this.sort.bind(null, this.SCORE)}
          ><div>SCORE</div></button>
          <button type="button"
                  className={this.className(this.COMMENTS)}
                  onClick={this.sort.bind(null, this.COMMENTS)}
          ><div>COMMENTS</div></button>
          <button type="button"
                  className={this.className(this.AGE)}
                  onClick={this.sort.bind(null, this.AGE)}
          ><div>AGE</div></button>
        </div>
        <StoryListItem items={this.props.items} changeStory={this.props.changeStory} active={this.props.active}/>
      </div>
    );
  }
}
