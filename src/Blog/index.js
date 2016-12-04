import React from 'react';
import BlogCard from '../component/BlogCard';
import axios from 'axios';
import Loading from '../component/Loading';
// let data=[
//   {index:1,title:'我是第一条',desc:'收到返还随时即可后方法思考'},
//   {index:2,title:'我是第二条',desc:'收到返还随时即可后方法思考'},
//   {index:3,title:'我是第三条',desc:'收到返还随时即可后方法思考'},
//   {index:4,title:'我是第四条',desc:'收到返还随时即可后方法思考'},
//   {index:5,title:'我是第五条',desc:'收到返还随时即可后方法思考'},
// ]
class Blog extends React.Component {
  constructor(){
    super()
    this.state={
      data:[],
      wait:true
    }
  }
  componentDidMount(){
    axios.get('https://raw.githubusercontent.com/sunshineyanghui/yoko/master/data/blogcard.json')
    .then( res => this.setState({data:res.data,wait:false}))
  }
  render () {
    // let cards=this.state.data.map( (item,i) => <BlogCard {...item} key={i}/>)
    return(
      <div className="blog-warp">
        {this.state.wait ? <Loading /> : this.state.data.map( (item,i) => <BlogCard {...item} key={i}/> )}
      </div>
    )
  }
}

export default Blog;
