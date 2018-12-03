import { CONFIG } from '../repositories/_config.js';

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.TOP = CONFIG.pages.TOP;
    this.NEW = CONFIG.pages.NEW;
    this.BEST = CONFIG.pages.BEST;
  }

  className(page) {
    return this.props.page === page ? 'active' : '';
  }

  render() {
    return (
      <div id="header" className="header">
        <div>
          reactHN
          <span>
            <a onClick={this.props.changePage.bind(null, this.TOP)}
               className={this.className(this.TOP)}>TOP</a>
            <a onClick={this.props.changePage.bind(null, this.NEW)}
               className={this.className(this.NEW)}>NEW</a>
            <a onClick={this.props.changePage.bind(null, this.BEST)}
               className={this.className(this.BEST)}>BEST</a>
          </span>
        </div>
      </div>
    );
  }
}