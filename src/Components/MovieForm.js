import React, {Component} from 'react';
import uuid from 'uuid';
import '../App.scss';

class MovieForm extends Component {
  constructor() {
    super();
    this.state = {
      title: (this.props) ? this.props.title : "",
      category: (this.props) ? this.props.category : "",
      rate: (this.props) ? this.props.rate : "",
      titleOff: false,
      titleSameOff: false,
      categoryOff: false,
      rateOff:false
    }
  }

submitForm(e) {
  e.preventDefault();

  let id;
  let title;
  let category;
  let rate;
  let statusSame = false;
  if(this.props.id) {
     id = this.props.id;
     title = (this.state.title === "") ? this.props.title : this.state.title;
     category = (this.state.category === "") ? this.props.category : this.state.category;
     rate = (this.state.rate === "") ? this.props.rate : this.state.rate;
   } else {

     id = uuid.v4();
     title = this.state.title;
     category = this.state.category;
     rate = this.state.rate;

     let newState = Object.assign({}, this.state);
     let title_state = JSON.stringify(newState.title.trim());

     this.props.movies.map(movie => {
       let newMovie = Object.assign({}, movie);
       let movie_title = JSON.stringify(newMovie.title.trim());

       if( title_state.toLowerCase() === movie_title.toLowerCase() ) {
         this.setState({
           titleSameOff: true
         });
         statusSame = true;
       }
     });

     if(statusSame) {
       return;
     }

     if(title === "") {
       this.setState({
         titleOff: true
       });
       return;
     } else if(category === "") {
       this.setState({
         categoryOff: true
       });
       return;
     }
     else if(rate === "") {
       this.setState({
         rateOff: true
       });
       return;
     }


     this.setState({
       titleOff: false,
       categoryOff: false,
       rateOff: false
     });
   }

   this.props.submitForm({
     id: id,
     title: title,
     category: category,
     rate: rate
   });

}



newTitle() {
  if(this.refs.title !== "") {
    this.setState({
      title: this.refs.title.value
    });
  }
}

newCategory() {
  this.setState({
    category: this.refs.category.value
    });
}

newRate() {
    this.setState({
      rate: this.refs.rate.value
    });
  }

  render() {

    const title = (this.props.id) ? this.props.title : "";
    const category = (this.props.id) ? `Choose category. Your current choise is ${this.props.category}` : "Choose category";
    const rate = (this.props.id) ? `Choose rate. Your current rate is  ${this.props.rate}` : "Choose rate";
    const titlePlaceholder = (this.props.id) ? "" : "Movie title";
    const titleValue = (this.props.id) ? this.props.title : "";

    const textButton = (this.props.id) ? "Update movie" : "Create movie";

    return (

      <div className="movieForm">

      <form>

      <textarea ref="title" placeholder={(this.props.id) ? "" : titlePlaceholder} onChange={this.newTitle.bind(this)}>{(this.props.id) ? titleValue : ""}</textarea>
      {(this.state.titleOff) ? <span>Title is missing</span> : ""}
      {(this.state.titleSameOff) ? <span>This movie already exists</span> : ""}
      <select ref="category" onClick={this.newCategory.bind(this)}>
      <option value="">{category}</option>
      <option value="Adventure">Adventure</option>
      <option value="Animation">Animation</option>
      <option value="Biography">Biography</option>
      <option value="Comedy">Comedy</option>
      <option value="Drama">Drama</option>
      <option value="Romance">Romance</option>
      <option value="Science fiction">Science fiction</option>
      <option value="Thriller">Thriller</option>
      </select>

      {(this.state.categoryOff) ? <span>Category is missing</span> : "" }

      <select ref="rate" onClick={this.newRate.bind(this)}>
      <option value="">{rate}</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      </select>

      {(this.state.rateOff) ? <p className="mising-rate">Rate is missing</p> : ""}

      <button onClick={this.submitForm.bind(this)} className="create-upd-btn">{textButton}</button>
      <button onClick={this.props.cancelForm} className="cancel-btn">Cancel</button>

      </form>

      </div>

    );
  }
}

export default MovieForm;
