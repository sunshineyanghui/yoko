import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import Home from './Home/';
import About from './About/';
import Blog from './Blog/';
import Work from './Work/';
import NoMatch from './component/NoMatch';
import Item from './Item/';
class Routers extends React.Component {
  render () {
    return(
      <div>
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="blog" component={Blog} />
            <Route path="work" component={Work} />
            <Route path="about" component={About} />
            <Route path="item/:title" component={Item} />
            <Route path="*" component={NoMatch} />
          </Route>
        </Router>
      </div>
    )
  }
}

export default Routers;
