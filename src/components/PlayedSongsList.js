import React from 'react';

class PlayedSongsList extends React.Component {
  render() {
    let playedSongs = this.props.playedSongs.map((song) => {
      return(
        <div key={song.id + 100} className="row song-item-complete valign-wrapper">
          <div className="song-details-complete col s9 m10 l8 valign">
            <div className="thin">{song.artist} - {song.song}</div>
            <span className="comments">Comment: {song.comments}</span>
          </div>
          <div className="upvote col s3 m2 pull-l1 valign">
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
