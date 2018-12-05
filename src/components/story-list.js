import { StoryListItem } from './_story-list-item.js';
import { CONFIG } from '../repositories/_config.js';

export class StoryList extends React.Component {
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
        sortDirection = this.state.sortScore;
        if (this.state.prev === this.SCORE) {
          sortDirection = StoryList.toggleSortDirection(sortDirection);
        }
        this.props.sortBy(this.SCORE, sortDirection);
        this.setState({prev: this.SCORE, sortScore: sortDirection}, undefined);
        break;
      case this.COMMENTS:
        sortDirection = this.state.sortComments;
        if (this.state.prev === this.COMMENTS) {
          sortDirection = StoryList.toggleSortDirection(sortDirection);
        }
        this.props.sortBy(this.COMMENTS, sortDirection);
        this.setState({prev: this.COMMENTS, sortComments: sortDirection}, undefined);
        break;
      case this.AGE:
        sortDirection = this.state.sortAge;
        if (this.state.prev === this.AGE) {
          sortDirection = StoryList.toggleSortDirection(sortDirection);
        }
        this.props.sortBy(this.AGE, sortDirection);
        this.setState({prev: this.AGE, sortAge: sortDirection}, undefined);
        break;
    }
  }

  static toggleSortDirection(sortDirection) {
    return sortDirection === CONFIG.sortDirection.ASC
      ? CONFIG.sortDirection.DESC
      : CONFIG.sortDirection.ASC;
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
