import React, { Component } from 'react';
import './css/materialize.min.css';
import './css/App.css';
import PublicDjApp from './components/PublicDjApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PublicDjApp />
      </div>
    );
  }
}

export default App;
