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
    this.state = { songs:[{artist: "Joe Walsh", song: "adlkjadv lkjh lkjh", comments: "me too, joe!", voteTotal: 5, id: 88}, {artist: "Larry Johnson", song: "Hey dude , jhkv kjhb kjhb kjhb kjhb kjh kjh khg", comments: "asco, jascoe!", voteTotal: 2, id: 89},
  {artist: "Fronky", song: "Horses", comments: "bla bla!", voteTotal: 7, id: 85}], id:0, playedSongs: [], showSongForm: 'hidden' };
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
          <div className="nav-wrapper orange darken-2">
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
