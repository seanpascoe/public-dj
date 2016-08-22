import React from 'react';

const NavBar = (props) => (
  <nav>
    <div className="nav-wrapper orange darken-2">
      <span className="brand-logo center"><i className="material-icons">queue_music</i>Public Dj</span>
      <ul id="nav-mobile" className="left">
        <li><a onClick={props.toggleSongForm}><i className="material-icons">{(props.showSongForm === "show") ? "close" : "playlist_add"}</i></a></li>
      </ul>
      <ul id="nav-mobile2" className="right">
        <li><a onClick={props.togglePlayedSongs}><i className="material-icons">{(props.showMainList === "show") ? "playlist_play" : "toc"}</i></a></li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
