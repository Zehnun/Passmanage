import { Component } from 'react';
import { withRouter }from "react-router-dom";

class Navbar extends Component{

    handleSignout = e =>{
        this.props.history.push("/");
    }

    handleAdd = e =>{
        this.props.history.push("/Add");
    }

    render(){
        return(
            <div className="nav">
                <button onClick={this.handleAdd}>Add</button>
                <button onClick={this.handleSignout} >sign out</button>
                <input type="text" placeholder="Search.." />
            </div>
        );
    }
}

export default withRouter(Navbar);