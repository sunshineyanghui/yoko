import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import Loading from '../component/Loading';
import ShowGit from '../component/ShowGit';

class About extends React.Component {
  constructor(){
    super();
    this.state={
      data:{},
      //0 没搜索 1 后台没相应数据未接收　２数据接受完
      wait:0
    }
  }
  handleSubmit(e){
    e.preventDefault();
    this.setState({
      wait:1
    })
    // console.log(this.refs.gitname.getValue());
    let value = this.refs.gitname.getValue();
    axios.get(`https://api.github.com/users/${value}`)
    .then( res => this.setState({
      data:res.data,wait:2
    }))
    .catch( error => alert(error),this.setState({wait:0}) )
    this.refs.form.reset()
  }
  render () {
    let showGitinfo = this.state.wait==0 ? null :
    this.state.wait==1 ? <Loading /> : <ShowGit gitInfo={this.state.data}/>
    return(
      <div className="about-wrap">

        <div className="git-card">
          <h2>Search Git Info</h2>
          <form className="about-form" ref='form' onSubmit={this.handleSubmit.bind(this)}>
            <TextField style={{width:'60%'}} ref="gitname" hintText="github username" underlineFocusStyle={{ borderColor: 'blue500'}}/>
            <RaisedButton label="search" primary={true} style={{marginLeft:'10px'}} onClick={this.handleSubmit.bind(this)}/>
          </form>
          {showGitinfo}
        </div>
      </div>
    )
  }
}

export default About;
