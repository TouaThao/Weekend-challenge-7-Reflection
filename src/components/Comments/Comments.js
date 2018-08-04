import React, { Component } from 'react';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import axios from 'axios';

class Comments extends Component {

  //Need to send comment back to server and POST data when submit is click
   
  submitFeedback = () => {
    console.log('sending data', this.props.reduxState)
    const data = {
        feeling: this.props.reduxState.feelingReducer,
        understanding: this.props.reduxState.understandingReducer,
        support: this.props.reduxState.supportReducer,
        comments: this.props.reduxState.commentsReducer,
    }
    axios.post('/api/feedback', data).then((response) => {
        this.props.history.push('/thankYou')
    }).catch((error) => {
        console.log(error)
    })
}
  

   //using reducer from redux
   handleComments = (event)=>{
     const action = {type: 'Comment', payload: event.target.value};
     this.props.dispatch(action);
   }

  render() {
    return (
      <div>
          <Header/>
          <h1>4 of 4 pages</h1>

                <div>
                    <div className="card-design">
                        <p>Any comments you want to leave?</p>
                        <input type="text" placeholder="Comments" onChange={this.handleComments} />
                    </div>
                    <br />
                    <button onClick={this.submitFeedback}>Submit</button>
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

export default connect(mapReduxStateToPros) (Comments);