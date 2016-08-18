import React from 'react'
import SongForm from './SongForm';
import MainVotingList from './MainVotingList';

class PublicDjApp extends React.Component {
  constructor(props) {
    super(props)
    this.addSongItem = this.addSongItem.bind(this);

    this.state = { songs:[], id:0 };
  }

  addSongItem(artist, song, comments) {
    let id = ++this.state.id;

    this.setState({
      songs: [
        { artist, song, comments, id },
        ...this.state.songs
      ],
      id
    });
  }

  render() {
    return (
      <div>
        <SongForm addSongItem={this.addSongItem} />
        <MainVotingList songs={this.state.songs} />
      </div>
    )
  }
}

export default PublicDjApp;
