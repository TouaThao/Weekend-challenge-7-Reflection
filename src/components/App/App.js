import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
//Route
import Feeling from '../Feeling/Feeling'
import Understanding from '../Understanding/Understanding'
import Support from '../Support/Support'
import Notfound from '../NotFound/NotFound'
import Comments from '../Comments/Comments'
import Admin from '../Admin/Admin'
import ThankYou from '../ThankYou/ThankYou'



class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path='/comments' component={Comments} />
          <Route exact path='/' component={Feeling} />
          <Route exact path='/Support' component={Support} />
          <Route exact path='/understanding' component={Understanding} />
          <Route exact path='/admin' component={Admin} />
          <Route exact path='/thankYou' component={ThankYou} />
          <Route exact path='/notFound' component={Notfound} />
          </div>
      </Router>
    );
  }
}

export default App;
