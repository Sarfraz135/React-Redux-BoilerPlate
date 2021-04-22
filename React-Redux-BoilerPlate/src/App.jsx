import React,{Component} from 'react';
import './App.css';
// import Child from './component/child'
import { connect } from 'react-redux';
import { set_data } from './store/action'

class App extends Component{
  constructor(){
    super()
    this.state = {
      count:0
      // ,
      // data:[]
    }
  }
  render(){
    console.log("redux_data==>>",this.props)
    return(
      // componentWillUnmount
           
      <div style={{textAlign: 'center'}}>
        {/* {this.state.count <5 &&        <Child count={this.state.count}/>} */}
 
       
     <button onClick={()=> this.setState({count: this.state.count+1})}>Increament</button>
     <button onClick={()=> this.setState({count: this.state.count - 1})}>Dicreament</button>
     <br/>
     <button onClick={()=>this.props.set_data("bhai data yhn se bhi ja skta hai")}>Set Data</button>
         </div>
       )

  }
}

// mapStateToProps mai hmri state hoti hai jo hum redux se get krte hain 

const mapStateToProps = (state) =>({
  username: state.auth.username,
  email: state.auth.email,
  app_name : state.app.app_name
})

// mapDispacthToProps mai hmre function hte hain jo hum action mai bnate hain 

const mapDispatchToProp = (dispatch)=>({
  set_data: (data)=> dispatch(set_data(data))
})
export default connect(mapStateToProps,mapDispatchToProp)(App);
