import React from 'react';
import List from './List';
import TodoForm from './TodoForm';
import Filter from './Filter';

class DJApp extends React.Component {
  constructor(props){
    super(props);
    this.addSongItem = this.addSongItem.bind(this);
    this.onTodoClick = this.onTodoClick.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.filteredItems= this.filteredItems.bind(this);

    this.state = { items: [], id: 0, filter: 'All' };
  }

  addSongItem(song, artist) {
    let id = ++this.state.id;

    this.setState({
      songs: [
      { song_name, artist, id }
      ...this.state.songs
      ],

      id
    });
  }

  render() {
    return (
      <div>
        <TodoForm addSongItem={this.addSongItem} />
        <List />
      </div>
    )
  }
}

export default TodoApp;

