import React from 'react';
import BlogCard from '../component/BlogCard';
let data=[
  {index:1,title:'我是第一条',desc:'收到返还随时即可后方法思考'},
  {index:2,title:'我是第二条',desc:'收到返还随时即可后方法思考'},
  {index:3,title:'我是第三条',desc:'收到返还随时即可后方法思考'},
  {index:4,title:'我是第四条',desc:'收到返还随时即可后方法思考'},
  {index:5,title:'我是第五条',desc:'收到返还随时即可后方法思考'},
]
class Blog extends React.Component {
  render () {
    let cards=data.map( (item,i) => <BlogCard {...item} key={i}/>)
    return(
      <div className="blog-warp">
        {cards}
      </div>
    )
  }
}

export default Blog;
