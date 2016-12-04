import React from 'react';
import { Link } from 'react-router'
class LeftNav extends React.Component{
  render(){
    return(
      <div className="leftnav-wrap">
        <h3>YANGHUI@{this.props.title}</h3>
        <Link to="/" activeStyle={{backgroundColor:'rgba(0, 0, 0, 0.3)'}} onlyActiveOnIndex={true}><span className="glyphicon glyphicon-home"></span><span className="leftnav-a">Home</span></Link>
        <Link to="/blog" activeStyle={{backgroundColor:'rgba(0, 0, 0, 0.3)'}}><span className="glyphicon glyphicon-edit"></span><span className="leftnav-a">Blog</span></Link>
        <Link to="/work" activeStyle={{backgroundColor:'rgba(0, 0, 0, 0.3)'}}><span className="glyphicon glyphicon-book"></span><span className="leftnav-a">Work</span></Link>
        <Link to="/about" activeStyle={{backgroundColor:'rgba(0, 0, 0, 0.3)'}}><span className="glyphicon glyphicon-user"></span><span className="leftnav-a">About</span></Link>
      </div>
    )
  }
}
export default LeftNav;
