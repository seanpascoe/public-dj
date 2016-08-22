import React from 'react';

class PlayedSongsList extends React.Component {
  render() {
    let playedSongs = this.props.playedSongs.map((song) => {
      let timePlayed = new Date(song.timePlayed);
      let playTime = timePlayed.toLocaleTimeString();
      return(
        <div key={song.id + 10000} className="row song-item-complete valign-wrapper">
          <div className="song-details-complete col s11 m11 l8 valign">
            <span className="thin song-played">{song.artist} - {song.song}</span>
            <span className="thin time-played">Played: {playTime}</span>
          </div>
          <div className="upvote col s1 m1 pull-l1 valign">
              <div className="vote-total right">{song.voteTotal}</div>
          </div>
        </div>
      )
    })
    return (
      <div className={this.props.showPlayedSongs}>
        <div className="song-list">
          {(playedSongs.length > 0) ? playedSongs : "...no played songs"}
        </div>
      </div>
    )
  }

}

export default PlayedSongsList;
