import { Posts } from '/dist/posts.js';
import { PostItems } from '/dist/components/_post-items.js'

const e = React.createElement;

class PostsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Loading...",
          body: "",
        }
      ],
    };

    this.refresh = this.refresh.bind(this);

    Posts.fetch()
      .then(json => {
        this.setState({items: json});
      });
  }

  render() {
    return (
      <div>
        <button onClick={this.refresh}>Refresh List</button>
        <PostItems items={this.state.items}/>
      </div>
    );
  }

  refresh() {
    Posts.fetch()
      .then(json => {
        json[0].title = "Proof of refresh";
        this.setState({items: json});
      });
  }
}

const domContainer = document.getElementById('posts-list');
ReactDOM.render(e(PostsList), domContainer);
