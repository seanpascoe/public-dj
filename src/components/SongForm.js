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
    let voteTotal = this.refs.voteTotal.value;
    this.refs.songForm.reset();
    this.props.addSongItem(artist, song, comments, voteTotal);
  }

  render() {
    return (
      <div className="container">
        <form ref="songForm" onSubmit={this.addSong}>
          <input ref="artist" placeholder="Artist..." type="text" />
          <input ref="song" placeholder="Song..." type="text" />
          <input ref="voteTotal" type="hidden" value="0" />
          <textarea ref="comments" placeholder="Comments..." type="text"></textarea>
          <button className="btn">Submit</button>
        </form>
      </div>
    )
  }
}

export default SongForm;
