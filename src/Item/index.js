import React from 'react';
import marked from 'marked';

class Item extends React.Component{
  render(){
    console.log(this.props.params.title);
    let content = this.props.params.title==0 ? '这是第一个页面' :
    this.props.params.title ==1 ? '这是第二个页面' : '这是第ｎ个页面'
    return(
      <div>
        {content}
        <div dangerouslySetInnerHTML={{__html:marked('# assdadjhj')}}></div>
      </div>
    )
  }
}
export default Item;
