import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
class ShowGit extends React.Component{
  render(){
    let info =this.props.gitInfo;
    let styles={
      img:{
        width:'100%',
        maxWidth:'130px',
        borderRadius:'50%',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 3px 10px'

      }
    }
    return(
      <div>
        <img src={info.avatar_url} style={styles.img}/>
        <h3>{info.name}</h3>
        <div className="show-git">
          <p>followers <br/>{info.followers}</p>
          <p>follwing <br/>{info.following}</p>
          <p>public_repos <br/>{info.public_repos}</p>
        </div>
      </div>
    )
  }
}
export default ShowGit;
