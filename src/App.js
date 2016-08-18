import React, { Component } from 'react';
import './css/App.css';
import './css/materialize.min.css';
import PublicDjApp from './components/PublicDjApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Public Dj</h1>
        <PublicDjApp />
      </div>
    );
  }
}

export default App;
