import React from 'react';
import './App.css';

/**
 * App
 *
 * Simple react js fetch example
 */
class App extends React.Component {

  /**
   * constructor
   *
   * @object  @props  parent props
   * @object  @state  component state
   */
  constructor(props) {

    super(props);

    this.state = {
      items: [],
      isLoaded: false
    }

  }

  /**
   * componentDidMount
   *
   * Fetch json array of objects from given url and update state.
   */
  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json,
          isLoaded: true,
        })
      }).catch((err) => {
        console.log(err);
      });

  }

  /**
   * render
   *
   * Render UI
   */
  render() {

    const { isLoaded, items } = this.state;

    if (!isLoaded)
      return <div>Loading...</div>;

    return (
      <div className="App">
        <p className="text"> Simple Url Rest APi</p>
        {items.map(item => (
          <ul>
            <li>{item.name}</li>
            <ul>
              <li>Email : {item.email}</li>
              <li>Username : {item.username}</li>
            </ul>
          </ul>
        ))}
      </div>

    );

  }

}

export default App;