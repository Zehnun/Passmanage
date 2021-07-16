import { Component } from 'react';
import { useHistory }from "react-router-dom";
//let history = useHistory();

class Home extends Component{
    handleSignin = e =>{
        this.props.history.push("/signin");
    }
    
    handleSignup = e =>{
        this.props.history.push("/signup");
    }
    render(){
      return ( 
        <div className="App">
          <p>Password manager</p>
          <button onClick={this.handleSignin}>Sign in</button>
          <button onClick={this.handleSignup}>Sign up</button>
        </div>
      );
    }
  }
  export default Home;