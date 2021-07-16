
import './App.css';
import Signin from './Files/Signin';
import Signup from './Files/Signup';
import Home from  './Files/Home';
import Main from './Files/Main';
import Add from './Files/Add';

import { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";


class App extends Component{

  render(){
    return(
       <BrowserRouter>
            <Route path="/Signin" exact component={Signin}/>
            <Route path="/Signup" exact component={Signup}/>
            <Route path="/Main" exact component={Main} />
            <Route path="/Add" exact component={Add} />
            <Route path="/" exact component={Home}/>
       </BrowserRouter> 
    )
  }
}

export default App;

{/*
class App extends Component{
  
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:3001")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render(){
    return (
      <div className="App">
        <Home></Home>
        <Signin></Signin>
        <p className="App-intro">{this.state.apiResponse}</p>
        <Signin></Signin>
        <p>Password manager</p>
        <button>Sign in</button>
        <button>Sign up</button> 
      </div>
    );
  }
}
export default App;
*/}