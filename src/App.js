import React, { Component } from 'react';
import './css/App.css';
import SongForm from './components/SongForm';
import MainVotingList from './components/MainVotingList';
import PlayedSongsList from './components/PlayedSongsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Public Dj</h1>
        <SongForm />
        <MainVotingList />
        <PlayedSongsList />
      </div>
    );
  }
}

export default App;
