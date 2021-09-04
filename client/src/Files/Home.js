import { Component } from 'react';
import { useHistory }from "react-router-dom";
import "./Style/Home.css"
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
        <div className="Home">
          <p className="Home-txt">Simple, secure password management for everyone</p>
          <div className="Home-b">
            <button className="Home-in" onClick={this.handleSignin}>Sign in</button>
            <button className="Home-up" onClick={this.handleSignup}>Sign up</button>
          </div>
        </div>
      );
    }
  }
  export default Home;