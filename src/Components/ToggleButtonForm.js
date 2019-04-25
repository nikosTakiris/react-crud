import React, {Component} from 'react';
import MovieForm from './MovieForm';
import '../App.scss';

class ToggleButtonForm extends Component {

  constructor() {
    super();

    this.state = {
      isOpen: false
    }
  }

  btnClick() {
    this.setState({
      isOpen:true
    });
  }

  closeForm(e) {
    e.preventDefault();
    this.setState({
      isOpen: false
    });
  }

  handleSubmit(movie) {
    this.props.handleCreate(movie);
    this.setState({
      isOpen: false
    });
  }

  render() {

    if(!this.state.isOpen) {
      return (
        <div className="createMovie">
        <button onClick={this.btnClick.bind(this)}>Add movie</button>
        </div>
      );
    } else {
      return (
        <MovieForm submitForm={this.handleSubmit.bind(this)} cancelForm={this.closeForm.bind(this)} movies={this.props.movies} />
      );
    }

  }
}

export default ToggleButtonForm;
