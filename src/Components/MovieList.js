import React, {Component} from 'react';
import MovieEdit from './MovieEdit';
import '../App.scss';
import uuid from 'uuid';

class MovieList extends Component {
  render() {




  if(!this.props.statusList) {
    return (
      <div className="no-movies">
      <p>No movies yet.</p>
      </div>
    );
  } else {
    const movie = this.props.movies.map(movie => {

      return (
        <MovieEdit
        key={uuid.v4()}
        id={movie.id}
        title={movie.title}
        category={movie.category}
        rate={movie.rate}
        handleEdit={this.props.editSubmit}
        onDelete={this.props.onDelete}
         />
      )
    });

    return (
      <div className="movieList">
      <p className="movieList_p">{(movie.length > 1) ? `${movie.length} movies` : `${movie.length} movie` } added</p>
      <h2>{movie}</h2>
      </div>
    )
  }


  }
}

export default MovieList;
