import React from 'react';

class PlayedSongsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
  }
  



  render() {
    let playedSongs = this.props.playedSongs.map((song) => {
      return(
        <div key={song.id} className="row">
        <div className="col s6 offset-s3">
          <div className="card green lighten-2">
            <div className="card-content white-text">
              <span className="card-title">{song.artist} - {song.song}</span>
              <p>Comment: {song.comments}</p>
            </div>
            <div className="card-action">
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
        <h3>Vote For Your Favorite playedSongs</h3>
        {playedSongs}
      </div>
    )
  }

}

export default PlayedSongsList;
