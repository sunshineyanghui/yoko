import React from 'react';

import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './App';
import Home from './Home/';
import About from './About/';
import Blog from './Blog/';
import Work from './Work/';
class Routers extends React.Component {
  render () {
    return(
      <div>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="blog" component={Blog} />
            <Route path="work" component={Work} />
            <Route path="about" component={About} />
          </Route>
        </Router>
      </div>
    )
  }
}

export default Routers;
