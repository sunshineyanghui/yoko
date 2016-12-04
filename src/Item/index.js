import React from 'react';
import marked from 'marked';
import axios from 'axios';
import Loading from '../component/Loading';
class Item extends React.Component{
  constructor(){
    super();
    this.state={
      data:''
    }
  }
  componentDidMount(){
    let address = this.props.params.title;
    // console.log(address);
    axios.get(`https://raw.githubusercontent.com/sunshineyanghui/yoko/master/data/${address}.md`)
    .then( res => this.setState({data:res.data}) )
    .catch( err => alert(err))
  }
  render(){
    // console.log(this.props.params.title);
    // let content = this.props.params.title==0 ? '这是第一个页面' :
    // this.props.params.title ==1 ? '这是第二个页面' : '这是第ｎ个页面'
    // let content = this.state.data.length==0 ? <Loading /> : marked(this.state.data);
    return(
      <div className="item-wrap">

        {/* <div dangerouslySetInnerHTML={{__html:marked('# assdadjhj')}}></div> */}
        {this.state.data.length==0 ?  <Loading /> : <div className="post-wrap" dangerouslySetInnerHTML={{__html:marked(this.state.data)}}/> }

      </div>
    )
  }
}
export default Item;
