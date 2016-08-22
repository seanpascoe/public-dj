import React from 'react'
import SongForm from './SongForm';
import MainVotingList from './MainVotingList';
import PlayedSongsList from './PlayedSongsList';
import NavBar from './NavBar';

class PublicDjApp extends React.Component {
  constructor(props) {
    super(props)
    this.addSongItem = this.addSongItem.bind(this);
    this.upVoteSong = this.upVoteSong.bind(this);
    this.playSong = this.playSong.bind(this);
    this.filterPlayedSongs = this.filterPlayedSongs.bind(this);
    this.toggleSongForm = this.toggleSongForm.bind(this);
    this.togglePlayedSongs = this.togglePlayedSongs.bind(this);
    this.state = { songs:[{artist: "Gogol Bordello", song: "Mishto!", comments: "awwww yea!", voteTotal: 5, id: 88, played: false}, {artist: "MF Doom", song: "Doomsday", comments: "asco, jascoe!", voteTotal: 2, id: 89, played: false},
  {artist: "J.J. Cale", song: "Mama Don't", comments: "bla bla!", voteTotal: 7, id: 90, played: false}, {artist: "Ween", song: "Don't Get 2 Close 2 My Fantasy", comments: "kjg kjhg kjg!", voteTotal: 4, id: 91, played: false}, {artist: "The Pogues", song: "A Pair of Brown Eyes", comments: "bla bla!", voteTotal: 11, id: 92, played: false}, {artist: "Black Sabbath", song: "A National Acrobat", comments: "bla bla!", voteTotal: 9, id: 93, played: false}, {artist: "Black Flag", song: "TV Party", comments: "bla bla!", voteTotal: 8, id: 94, played: false}], id:0, playedSongs: [], showSongForm: 'hidden', showPlayedSongs: "hidden", showMainList: "show" };
  }

  filterPlayedSongs(songArray) {
    let playedSongs = songArray.filter(song => song.played === true);
    return playedSongs;
  }

  playSong(id) {
    let now = Date.now();
    let songs = this.state.songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          played: true,
          timePlayed: now
        }
      }
      return song;
    });

    this.setState({ songs });
  }

  sortSongs(songArray, objKey) {
    let sortedSongs = songArray.sort((a, b) => {
      return b[objKey] - a[objKey];
    });
    return sortedSongs;
  }

  upVoteSong(id) {
    let songs = this.state.songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          voteTotal: ++song.voteTotal
        }
      }
      return song;
    });
    this.setState({ songs });
  }

  addSongItem(artist, song, comments) {
    let id = ++this.state.id;

    this.setState({
      songs: [
        { artist, song, comments, voteTotal: 0, id, played: false},
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

  togglePlayedSongs() {
    let playedListState = (this.state.showPlayedSongs === 'hidden') ? 'show' : 'hidden';
    let mainListState = (this.state.showMainList === 'show') ? 'hidden' : 'show';
    this.setState({showPlayedSongs: playedListState, showMainList: mainListState});
  }

  render() {
    return (
      <div>
        <NavBar
          toggleSongForm={this.toggleSongForm}
          togglePlayedSongs={this.togglePlayedSongs}
          showSongForm={this.state.showSongForm}
          showMainList={this.state.showMainList} />
        <SongForm
          showSongForm={this.state.showSongForm}
          addSongItem={this.addSongItem} />
        <MainVotingList
          showMainList={this.state.showMainList} songs={this.sortSongs(this.state.songs, "voteTotal")}
          upVoteSong={this.upVoteSong}
          playSong={this.playSong} />
        <PlayedSongsList
          showPlayedSongs={this.state.showPlayedSongs} playedSongs={this.sortSongs(this.filterPlayedSongs(this.state.songs), "timePlayed")} />
      </div>
    )
  }
}

export default PublicDjApp;
