import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from './App';
import Challenge1 from './Challenges/Challenge1'


const Routes = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/challenges">
          <Route path="1" component={Challenge1}/>
        </Route>
      </Route>
    </Router>
  )
}

export default Routes
