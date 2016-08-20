import React from 'react';

class MainVotingList extends React.Component {
  render() {
    let songs = this.props.songs.map((song) => {
      return(
        <div key={song.id} className="row song-item valign-wrapper" style={ song.played === true ? {display: "none"} : {} }>
          <div className="song-details col s8 m9 l8 valign">
            <div className="thin">{song.artist} - {song.song}</div>
            <span className="comments">Comment: {song.comments}</span>
          </div>
          <div className="upvote col s4 m3 l2 pull-l1 valign">
              <i className='material-icons play-icon right' onClick={() => this.props.playSong(song.id)}>play_circle_outline</i>
              <i className='material-icons upvote-icon right' onClick={() => this.props.upVoteSong(song.id)}>change_history</i>
              <div className="vote-total right">{song.voteTotal}</div>
          </div>
        </div>
      )
    });
    return (
      <div className={this.props.showMainList}>
        <div className="song-list">
          {songs}
        </div>
      </div>
    )
  }
}

export default MainVotingList;
