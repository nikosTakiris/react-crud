import React, {Component} from 'react';
import star from '../images/star.png';
import edit from '../images/edit.png';
import theDelete from '../images/delete.jpg';
import '../App.scss';

class Movie extends Component {

  handleDelete() {
    this.props.onDelete(this.props.id);
  }

  render() {

    let i = 0;
    let starArray = [];


    for(i = 1; i <= this.props.rate; i++) {
      starArray.push(<img src={star} key={i} />);
    }

    return (
      <div className="movie">
      <p className="title">{this.props.title}</p>
      <p className="category">{this.props.category}</p>
      <p>{starArray}</p>

      <div className="editDelete">

      <img src={edit} onClick={this.props.onEdit} />
      <img src={theDelete} onClick={this.handleDelete.bind(this)} />

      </div>
      </div>
    );
  }
}

export default Movie;
