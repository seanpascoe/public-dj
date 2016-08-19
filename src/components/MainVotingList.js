import React from 'react';

class MainVotingList extends React.Component {
  render() {
    let songs = this.props.songs.map((song) => {
      return(
        <div key={song.id} className="row song-item" style={ song.voteTotal > 9 ? {display: "none"} : {} }>

          <div className="col s12 song-item-content">
            <div className="song-details valign left">
              <div className="thin">{song.artist} - {song.song}</div>
              <span className="comments">Comment: {song.comments}</span>
            </div>

            <div className="upvote right">
              <span>{song.voteTotal}</span>
              <i className='material-icons upvote-icon' onClick={() => this.props.upVoteSong(song.id)}>change_history</i>
            </div>
          </div>

        </div>
      )
    })
    return (
      <div className="song-list">
        {songs}
      </div>
    )
  }
}

export default MainVotingList;
