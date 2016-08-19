import React from 'react'
import SongForm from './SongForm';
import MainVotingList from './MainVotingList';
import PlayedSongsList from './PlayedSongsList';

class PublicDjApp extends React.Component {
  constructor(props) {
    super(props)
    this.addSongItem = this.addSongItem.bind(this);
    this.upVoteSong = this.upVoteSong.bind(this);
    this.playedSongs = this.playedSongs.bind(this);
    this.toggleSongForm = this.toggleSongForm.bind(this);
    this.state = { songs:[], id:0, playedSongs: [], showSongForm: 'hidden' };
  }

  playedSongs(){
    let playedSongs = this.state.songs.filter( (song) => {
      if (song.voteTotal >= 10) {
        return {
          ...song
        }
      }
      return false;
    });
    this.setState({ playedSongs });
  }

  upVoteSong(id){
    let songs = this.state.songs.map( (song) =>{
      if (song.id === id) {
        return {
          ...song,
          voteTotal: ++song.voteTotal
        }
      }
      return song;
    });
    this.setState({ songs });
    this.playedSongs();
  }

  addSongItem(artist, song, comments, voteTotal) {
    let id = ++this.state.id;

    this.setState({
      songs: [
        { artist, song, comments, voteTotal, id },
        ...this.state.songs
      ],
      id,
      showSongForm: "hidden"
    });
  };

  toggleSongForm() {
    let formState = (this.state.showSongForm === 'hidden') ? 'show' : 'hidden';
    this.setState({showSongForm: formState});
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <span className="brand-logo center"><i className="material-icons">queue_music</i>Public Dj</span>
            <ul id="nav-mobile" className="left">
              <li><a onClick={this.toggleSongForm}><i className="material-icons">playlist_add</i></a></li>
            </ul>
            <ul id="nav-mobile2" className="right">
              <li><a href="badges.html"><i className="material-icons">playlist_play</i></a></li>
            </ul>
          </div>
        </nav>
        <SongForm showSongForm={this.state.showSongForm} addSongItem={this.addSongItem} />
        <MainVotingList songs={this.state.songs} upVoteSong={this.upVoteSong} />
        <PlayedSongsList playedSongs={this.state.playedSongs} />
      </div>
    )
  }
}

export default PublicDjApp;
