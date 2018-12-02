import { CONFIG } from '../repositories/_config.js';

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.TOP = CONFIG.pages.TOP;
    this.NEW = CONFIG.pages.NEW;
    this.BEST = CONFIG.pages.BEST;
  }

  render() {
    return (
      <div id="header" className="header">
        <div>
          reactHN
          <span>
            <a onClick={this.props.changePage.bind(null, this.TOP)}
               className={this.props.page === this.TOP ? 'active' : ''}>TOP</a>
            <a onClick={this.props.changePage.bind(null, this.NEW)}
               className={this.props.page === this.NEW ? 'active' : ''}>NEW</a>
            <a onClick={this.props.changePage.bind(null, this.BEST)}
               className={this.props.page === this.BEST ? 'active' : ''}>BEST</a>
          </span>
        </div>
      </div>
    );
  }
}