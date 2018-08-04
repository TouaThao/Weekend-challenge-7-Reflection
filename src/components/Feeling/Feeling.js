import React, { Component } from 'react';
import Header from '../Header/Header';
import { connect } from 'react-redux';



class Feeling extends Component {

  //Redux store reducer
  handleFeelingChange = (event) => {
    const action = { type: 'FEELING', payload: event.target.value }
    this.props.dispatch(action)
  }

  handleNextButton = (event) => {
    event.preventDefault();
    this.props.history.push('/understanding')
  }


  render() {
    console.log('feelings', this.props.reduxState);
    return (
      <div>
        <Header />
        <h2>1 of 4 pages</h2>
        <div>
          <div className="card-design">
            <p>How are you feeling today?</p>
            <input type="number" placeholder="Rating" onChange={this.handleFeelingChange} />
          </div>
          <br />
          <button onClick={this.handleNextButton}>
            Next
          </button>
          <div>
          </div>
        </div>

      </div>
    );
  }
}

//Allow us to us redux store
const mapReduxStateToPros = (reduxState) => ({
  reduxState
})


export default connect(mapReduxStateToPros)(Feeling);