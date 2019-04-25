import React, {Component} from 'react';
import Movie from './Movie';
import MovieForm from './MovieForm';
import '../App.scss';

class MovieEdit extends Component {
  constructor() {
    super();
    this.state = {
      isEdit: false
    }
  }

  openEdit() {
    this.setState({
      isEdit:true
    });
  }

  closeEdit(e) {
    e.preventDefault();
    this.setState({
      isEdit: false
    });
  }

  handleSubmit(movie) {
    this.props.handleEdit(movie);
    this.setState({
      isEdit:false
    });
  }

  render() {

    if(!this.state.isEdit) {
      return (
        <Movie
        key={this.props.id}
        id={this.props.id}
        title={this.props.title}
        category={this.props.category}
        rate={this.props.rate}
        onEdit={this.openEdit.bind(this)}
        onDelete={this.props.onDelete}
        />
      );
    } else {
      return (
        <MovieForm
        key={this.props.id}
        id={this.props.id}
        title={this.props.title}
        category={this.props.category}
        rate={this.props.rate}
        submitForm={this.handleSubmit.bind(this)} cancelForm={this.closeEdit.bind(this)}
         />
      );
    }

  }
}

export default MovieEdit;
