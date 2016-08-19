import React from 'react'
import SongForm from './SongForm';
import MainVotingList from './MainVotingList';

class PublicDjApp extends React.Component {
  constructor(props) {
    super(props)
    this.addSongItem = this.addSongItem.bind(this);
    this.upVoteSong = this.upVoteSong.bind(this);

    this.state = { songs:[], id:0 };
  }

  upVoteSong(id){
    let songs = this.state.songs.map( (song) =>{
      console.log(id, song.id);
      if (song.id === id) {
        console.log(song.voteTotal);
        return {
          ...song,
          voteTotal: ++song.voteTotal
        }
      }
      return song;
    });

    this.setState({ songs });
  }

  addSongItem(artist, song, comments, voteTotal) {
    let id = ++this.state.id;

    this.setState({
      songs: [
        { artist, song, comments, voteTotal, id },
        ...this.state.songs
      ],
      id
    });
  }

  render() {
    return (
      <div>
        <SongForm addSongItem={this.addSongItem} />
        <MainVotingList songs={this.state.songs} upVoteSong={this.upVoteSong} />
      </div>
    )
  }
}

export default PublicDjApp;



