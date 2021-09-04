import { Component } from 'react';
import { withRouter }from "react-router-dom";
import "./Style/nav.css";

class Navbar extends Component{

    handleSignout = e =>{
        this.props.history.push("/");
    }

    handleAdd = e =>{
        this.props.history.push("/Add");
    }
    /*<input type="text" placeholder="Search.." />*/
    render(){
        return(
            <div className="nav">
                <div className="nav-rect">
                    <label className="nav-lb">Password Manager</label>
                    <button className="nav-add" onClick={this.handleAdd}>Add</button>
                    <button className="nav-out" onClick={this.handleSignout} >sign out</button>
                </div>
            </div>
        );
    }
}

export default withRouter(Navbar);