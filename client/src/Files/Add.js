import { Component } from 'react';
import axios from 'axios';

class Add extends Component{

    constructor(props){
        super(props)

        this.state = {
            org: '',
            email: '',
            password: ''
        }
    }
    changeHandler = (e) =>{
        this.setState({ [e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:3001/add', this.state)
            .then(response =>{
                console.log(response)
                alert("information submitted")
                window.location.reload(false);
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const {email, password} = this.state
        return(
            <div className="App">
                <p>Add information</p>
                <form onSubmit={this.submitHandler}>
                    <label>Organization:</label>
                    <input type="text" name = "org" onChange={this.changeHandler} placeholder="Enter organization..."></input>
                    <label>Email:</label>
                    <input type="email" name = "email" value = {email} onChange={this.changeHandler} placeholder="Enter email..."></input>
                    <label>Password:</label>
                    <input type="password" name= "password" value = {password} onChange={this.changeHandler} placeholder="Enter password.."></input>
                    <button type="submit">submit</button>
                </form>
            </div>
        );
    }
}

export default Add;