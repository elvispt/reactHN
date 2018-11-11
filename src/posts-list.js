'use strict';

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
      ]
    };

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        this.setState({items: json});
      });
  }

  render() {
    return (
      <PostItems items={this.state.items}/>
    );
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
