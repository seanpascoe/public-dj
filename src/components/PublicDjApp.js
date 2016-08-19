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
    this.state = { songs:[], id:0, playedSongs: [] };
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
      id
    });
  };

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo center"><i className="material-icons">cloud</i>Public Dj</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><a href="sass.html">Add Song</a></li>
              <li><a href="badges.html">Played Songs</a></li>
            </ul>
          </div>
        </nav>
        <SongForm addSongItem={this.addSongItem} />
        <MainVotingList songs={this.state.songs} upVoteSong={this.upVoteSong} />
        <PlayedSongsList playedSongs={this.state.playedSongs} />
      </div>
    )
  }
}

export default PublicDjApp;
