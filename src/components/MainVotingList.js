import React from 'react';

class MainVotingList extends React.Component {
  render() {
    let songs = this.props.songs.map((song) => {
      return (<li key={song.id}>{song.artist} - {song.song}</li>)
    })
    return (
      <div>
        {songs}
      </div>
    )
  }
}

export default MainVotingList;
