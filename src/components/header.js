export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="header" className="header">
        <div>
          reactHN
          <span> <a>NEW</a> | <a>TOP</a> | <a>BEST</a> </span>
        </div>
      </div>
    );
  }
}