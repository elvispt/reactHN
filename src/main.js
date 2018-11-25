import { Header } from '../dist/components/header.js'
import { StoryList } from '../dist/components/story-list.js'
import { Content } from '../dist/components/content.js'

const e = React.createElement;

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="container" className="container">
        <Header/>
        <StoryList/>
        <Content/>
      </div>
  );
  }
}

const domContainer = document.getElementById('main');
ReactDOM.render(e(Main), domContainer);
