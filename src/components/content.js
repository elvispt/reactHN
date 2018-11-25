import { Story } from '../../dist/components/_story.js'

export class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      story: {},
    };
  }

  render() {
    return (
      <div id="content" className="content">
        <Story story={this.state.story}/>
      </div>
    );
  }
}
