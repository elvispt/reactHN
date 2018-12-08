import Story from './_story.js';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="content" className="content">
        <Story story={this.props.story}/>
      </div>
    );
  }
}
