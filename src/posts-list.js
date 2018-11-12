import { Posts } from '/dist/posts.js';

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

class PostItems extends React.Component {
  render() {
    return (
      <ul>
        { this.props.items.map(item => (
          <li data-id={item.id} key={item.id}>{item.title}</li>
        ))}
      </ul>
    );
  }
}

const domContainer = document.querySelector('#posts-list');
ReactDOM.render(e(PostsList), domContainer);
