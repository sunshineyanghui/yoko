import React from 'react';
import NavHeader from './component/NavHeader';
import NavFooter from './component/NavFooter';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
class App extends React.Component {
  constructor(){
    super();
    this.state={title:'Blog'}
  }
  componentWillReceiveProps(){
    // console.log('aaa');
    this.setTitle()
  }
  //首次加载是进行的判断
  componentWillMount(){
    this.setTitle()
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
            this.props.router.isActive('about') ? 'About' : 'Work'
    })
  }
  getChildContext(){
    return{muiTheme:getMuiTheme()};
  }
  render () {
    console.log(this.props);
    return(
      <div className="my-wrap">
        <NavHeader title={this.state.title}/>
        <div className="main">
          {this.props.children}
        </div>
        <NavFooter/>
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
