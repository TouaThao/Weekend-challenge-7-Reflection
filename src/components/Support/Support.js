import React, { Component } from 'react';
import Header from '../Header/Header'
import { connect } from 'react-redux'


class Support extends Component {

    //using reducer from redux
  handleSupport = (event) =>{
    const action= {type: 'SET_SUPPORTED', payload: event.target.value};
    this.props.dispatch(action)
  }

  handleNextButton = (event) => {
    event.preventDefault();
      this.props.history.push('/comments')
  }
    
  render() {
    return (
      <div>
          <Header/>
          <h1>3 of 4 pages</h1>
      <h1> Support Page </h1>
      <p>How well are you being supported?</p>
      <input type="number" placeholder="Rating" onChange={this.handleSupport} />
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
export default connect(mapReduxStateToPros)(Support);