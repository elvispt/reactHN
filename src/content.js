import { Story } from '../dist/components/_story.js';

const e = React.createElement;

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      story: {},
    };
  }

  render() {
    return (
      <div>
        <Story story={this.state.story}/>
      </div>
    );
  }
}

const domContainer = document.getElementById('content');
ReactDOM.render(e(Content), domContainer);
