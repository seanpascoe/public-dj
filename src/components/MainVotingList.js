import React from 'react';

class MainVotingList extends React.Component {
  render() {
    let songs = this.props.songs.map((song) => {
      return(
        <div key={song.id} className="container" style={ song.voteTotal > 9 ? {display: "none"} : {} }>
          <table className="striped responsive-table">
            <thead>
              <tr>
                <div className="row">
                  <div className="col s3">
                    <th data-field="song_id" className="id">ID</th>
                  </div>
                  <div className="col s3">
                    <th data-field="id" className="badge">Rating</th>
                  </div>
                  <div className="col s3">
                    <th data-field="name">Song Name</th>
                  </div>
                  <div className="col s3">
                    <th data-field="price">Artist</th>
                  </div>
                </div>
              </tr>
            </thead>

            <tbody>
              <tr>
                <div className="row">
                  <div className="col s3">
                    <td><span className="id"> {song.id} </span></td>
                  </div>
                  <div className="col s3">
                    <td>
                      <button className='btn' onClick={() => this.props.upVoteSong(song.id)}>{song.voteTotal} +</button>
                    </td>
                  </div>
                  <div className="col s3">
                    <td>{song.song}</td>
                  </div>
                  <div className="col s3">
                    <td>{song.artist}</td>
                  </div>
                </div>
              </tr>
            </tbody>
          </table>
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

