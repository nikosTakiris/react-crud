import React, { Component } from 'react';
import MovieList from './MovieList';
import ToggleButtonForm from './ToggleButtonForm';
import '../App.scss';
import uuid from 'uuid';

class MovieBoard extends Component {
constructor() {
  super();

  this.state = {
    movies:[],
    statusList: false
  }

}

 createMovie = (movie) => {
this.setState({
  movies: this.state.movies.concat(movie),
  statusList: true,
});

}


load() {
  if(JSON.parse(window.localStorage.getItem('movies'))) {
    const movies = JSON.parse(window.localStorage.getItem('movies'));
    const statusList = JSON.parse(window.localStorage.getItem("statusList"));
    this.setState({
      movies: movies,
      statusList: statusList
    });
  }
}

componentDidUpdate() {
  window.localStorage.setItem("movies", JSON.stringify(this.state.movies));
  window.localStorage.setItem("statusList", JSON.stringify(this.state.statusList));
}

componentWillMount() {
  this.load();
}

editMovie(movie) {
this.setState({
  movies: this.state.movies.map(theMovie => {
    if(theMovie.id === movie.id) {
      return Object.assign({}, movie, {
        id: movie.id,
        title: movie.title,
        category: movie.category,
        rate: movie.rate,
      });
    } else {
      return theMovie;
    }
  }),
});
}

handleDelete(id) {
  this.setState({
    movies: this.state.movies.filter(m => m.id !== id),
  });

  if(this.state.movies.length === 1) {
    this.setState({
      statusList: false
    });
  }

}

  render() {

    return (
      <div className="movieBoard">
      
      <MovieList key={uuid.v4()} movies={this.state.movies} statusList={this.state.statusList} editSubmit={this.editMovie.bind(this)} onDelete={this.handleDelete.bind(this)} />
      <ToggleButtonForm handleCreate={this.createMovie.bind(this)} movies={this.state.movies} />
    </div>
  );
  }
}

export default MovieBoard;
