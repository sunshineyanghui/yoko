import React from 'react';
import {Link} from 'react-router';
class NavFooter extends React.Component {
  render () {
    return(
      <div className="nav-footer">
        <Link to="/" activeStyle={{color:'#47a34b'}} onlyActiveOnIndex={true}><span className="glyphicon glyphicon-home"></span><br/>Home</Link>
        <Link to="/blog" activeStyle={{color:'#47a34b'}}><span className="glyphicon glyphicon-edit"></span><br/>Blog</Link>
        <Link to="/work" activeStyle={{color:'#47a34b'}}><span className="glyphicon glyphicon-book"></span><br/>Work</Link>
        <Link to="/about" activeStyle={{color:'#47a34b'}}><span className="glyphicon glyphicon-user"></span><br/>About</Link>
      </div>
    )
  }
}

export default NavFooter;
