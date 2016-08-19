import React from 'react';

class MainVotingList extends React.Component {
  render() {
    let songs = this.props.songs.map((song) => {
      return(
        <div key={song.id} className="row">
        <div className="col s6 offset-s3">
          <div className="card blue lighten-2">
            <div className="card-content white-text">
              <span className="card-title">{song.artist} - {song.song}</span>
              <p>Comment: {song.comments}</p>
            </div>
            <div className="card-action">
              <button className='btn' onClick={() => this.props.upVoteSong(song.id)}>Vote!</button>
              <span className="badge">{song.voteTotal}</span>
              <span className="id"> {song.id} </span>
            </div>
          </div>
        </div>
      </div>
      )
    })
    return (
      <div>
        <h3>Vote For Your Favorite Songs</h3>
        {songs}
      </div>
    )
  }
}

export default MainVotingList;
