import React from 'react';

class MainVotingList extends React.Component {
  render() {
    let songs = this.props.songs.map((song) => {
      return(
        <div key={song.id} className="row song-item valign-wrapper" style={ song.voteTotal > 9 ? {display: "none"} : {} }>
          <div className="song-details col s9 m10 l8 valign">
            <div className="thin">{song.artist} - {song.song}</div>
            <span className="comments">Comment: {song.comments}</span>
          </div>
          <div className="upvote col s3 m2 pull-l1 valign">
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
