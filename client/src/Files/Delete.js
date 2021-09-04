import { Component } from 'react';
import axios from 'axios';
import "./Style/del.css"
axios.defaults.withCredentials = true;

class Delete extends Component{
    constructor(props) {
        super(props)

        this.state = {
            names: '',
            email: ''
        }
    }
    
    send = () => {
        this.setState(
            {
                names: this.props.names,
                email: this.props.email
            },
            () =>{
                console.log("setting: " + this.state.names + " " + this.state.email);
                axios.post('http://localhost:3001/delete', this.state)
                    .then(response =>{
                        console.log(response.data + " sending deletes - first" + this.state.names + " " + this.state.email);
                        window.location.reload(false);
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        ); 
    }

    render(){  
        return(
            <button className="del-btn" onClick={this.send}></button> 
        );
    }


}

export default Delete;