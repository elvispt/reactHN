import { StoryListItem } from './_story-list-item.js';
import { CONFIG } from '../repositories/_config.js';

export class StoryList extends React.Component {
  constructor(props) {
    super(props);
    this.SCORE = CONFIG.sortTypes.SCORE;
    this.COMMENTS = CONFIG.sortTypes.COMMENTS;
    this.AGE = CONFIG.sortTypes.AGE;
  }

  render() {
    return (
      <div id="story-list" className="story-list">
        <div className="sort-by">
          <button type="button"
                  className={this.props.sort === this.SCORE ? 'active' : ''}
                  onClick={this.props.sortByScore}
          ><div>SCORE</div></button>
          <button type="button"
                  className={this.props.sort === this.COMMENTS ? 'active' : ''}
                  onClick={this.props.sortByComments}
          ><div>COMMENTS</div></button>
          <button type="button"
                  className={this.props.sort === this.AGE ? 'active' : ''}
          ><div>AGE</div></button>
        </div>
        <StoryListItem items={this.props.items} changeStory={this.props.changeStory} active={this.props.active}/>
      </div>
    );
  }
}
