
const e = React.createElement;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        reactHN
        <span> <a>NEW</a> | <a>TOP</a> | <a>BEST</a> </span>
      </div>
    );
  }
}

const domContainer = document.getElementById('header');
ReactDOM.render(e(Header), domContainer);