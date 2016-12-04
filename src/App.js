import React from 'react';
import NavHeader from './component/NavHeader';
import NavFooter from './component/NavFooter';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import LeftNav from './component/LeftNav'
class App extends React.Component {
  constructor(){
    super();
    this.state={
      title:'Blog',
      showLeftNav:false
    }
  }
  componentWillReceiveProps(){
    // console.log('aaa');
    this.setTitle()
  }
  //首次加载是进行的判断
  componentWillMount(){
    this.setTitle();
    //首次加载时判断屏幕宽度
    // if (window.innerWidth>760) {
    //   this.setState({showLeftNav:true})
    // }
    this.setNavBar();
  }

  componentDidMount(){
    //onresize随着屏幕的大小变化
    // let _this = this;
    // window.onresize = function(){
    //   if(window.innerWidth>760){
    //     _this.setState({showLeftNav:true})
    //   }else{
    //     _this.setState({showLeftNav:false})
    //   }
    // }
    window.onresize = this.setNavBar.bind(this)

  }
  setNavBar(){
    this.setState({
      showLeftNav:window.innerWidth>760 ? true : false
    })
  }
  // setTitle(){
  //   this.setState({
  //     title:this.context.router.isActive('/',true) ? 'Home' :
  //           this.context.router.isActive('blog') ? 'Blog' :
  //           this.context.router.isActive('about') ? 'About' : 'Work'
  //   })
  // }
  setTitle(){
    this.setState({
      title:this.props.router.isActive('/',true) ? 'Home' :
            this.props.router.isActive('blog') ? 'Blog' :
            this.props.router.isActive('work') ? 'Work' :
            this.props.router.isActive('about') ? 'About' : 'Blog'
    })
  }
  getChildContext(){
    return{muiTheme:getMuiTheme()};
  }
  render () {
    console.log(this.props);
    return(
      <div className="my-wrap">
        {this.state.showLeftNav ? <LeftNav title={this.state.title}/> : <NavHeader title={this.state.title}/>}
        <div className="main">
          {this.props.children}
        </div>
        {this.state.showLeftNav ? null : <NavFooter/>}
      </div>
    )
  }
}
// App.contextTypes={
//   router:React.PropTypes.object
// }
App.childContextTypes={
  muiTheme:React.PropTypes.object.isRequired,
}
export default App;
