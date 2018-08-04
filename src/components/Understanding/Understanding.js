import React, { Component } from 'react';
import Header from '../Header/Header'
import { connect } from 'react-redux';


class Understanding extends Component {

  //using reducer from redux
  
  handleUnderstanding = (event)=>{
    const action = {type: 'UNDERSTAND', payload: event.target.value};
    this.props.dispatch(action)
  }

  handleNextButton = (event) => {
    event.preventDefault();
      this.props.history.push('/Support')
  }

  render() {
    return (
      <div>
          <Header/>
      <h1> 
        Understanding Page 
      </h1>
    {/* Yes i know i'm missing e in are. 
    But i'm following the picture that was given to us
    =P. I will fix it after grading.*/}
      <p>
        How Well ar you understanding the content?
        <input type="number" placeholder="Rating" onChange={this.handleUnderstanding}/>
      </p>
      <button onClick={this.handleNextButton}>
            Next
          </button>
     
      </div>
    );
  }
}

//Allow us to us redux store
const mapReduxStateToPros = (reduxState) => ({
  reduxState
})

export default connect(mapReduxStateToPros)(Understanding);