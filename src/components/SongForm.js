import React from 'react';

class SongForm extends React.Component {
  constructor(props) {
    super(props)
    this.addSong = this.addSong.bind(this);
  }

  addSong(e) {
    e.preventDefault();
    let artist = this.refs.artist.value;
    let song = this.refs.song.value;
    let comments = this.refs.comments.value;
    this.refs.songForm.reset();
    this.props.addSongItem(artist, song, comments);
  }

  render() {
    return (
      <div className={this.props.showSongForm}>
        <div className="subSongForm container">
          <form ref="songForm" onSubmit={this.addSong}>
            <input ref="artist" placeholder="Artist..." type="text" />
            <input ref="song" placeholder="Song..." type="text" />
            <textarea ref="comments" className="materialize-textarea" placeholder="Comments..." type="text"></textarea>
            <button className="right btn">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default SongForm;
