import React, { Component } from 'react';
import Header from '../Header/Header'
import { connect } from 'react-redux'
import axios from 'axios'


class Admin extends Component {

  constructor(props) {
      super(props);
      this.state = {
          results: []
      }
  }

  componentDidMount() {
      this.getData();
  }

  getData() {
    console.log('did we get here?')
      axios.get('/api/feedback').then((response) => {
          console.log(response.data[0]);
          this.setState({
              results: response.data
          })
      }).catch((error) => {
          console.log('Admin error', error)
      })
  }


  deleteFeedback = (event) => {
      console.log('feedback id:', event.target.value);
      let id = event.target.value;
      axios.delete('/api/feedback/' + id, this.state).then(response => {
          console.log('delete', response)
          return this.getData();
      }).catch((error) => {
         console.log('Error in admin page',error)
      })
  }


  render() {
      //Variable to display on DOM
      let feedback = this.state.results.map((feedback) => {
          return <tr key={feedback.id}>
              <td>{feedback.feeling}</td>
              <td>{feedback.understanding}</td>
              <td>{feedback.support}</td>
              <td>{feedback.comments}</td>
              <td><button value={feedback.id} onClick={this.deleteFeedback}>Delete</button></td>
          </tr>
      })

      return (
          <div>
             <Header/>
              <h2><u>Results</u></h2>
              <div>
                  <table align="center">
                      <thead>
                          <tr>
                              <th>Feeling</th>
                              <th>Understanding</th>
                              <th>Support</th>
                              <th>Comments</th>
                              <th>Delete</th>
                          </tr>
                      </thead>
                      <tbody>
                          {feedback}
                      </tbody>
                  </table>
              </div>

          </div>
      );
  }
}


const mapReduxStateToProps = (reduxState) => (
  { reduxState }
);

export default connect(mapReduxStateToProps)(Admin);