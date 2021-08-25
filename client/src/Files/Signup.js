import axios from "axios";
import { Component } from "react";

class Signup extends Component{

    constructor(props){
        super(props)

        this.state = {
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
        axios.post('http://localhost:3001/signup', this.state)
        .then(response =>{
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    render() {
        const {email, password} = this.state
        return(
            <div className="App">
                <p>Sign up</p>
                <form onSubmit={this.submitHandler}>
                    <label>Email:</label>
                    <input type="email" name = "email" value = {email} onChange={this.changeHandler} placeholder="Enter email..."></input>
                    <label>Password:</label>
                    <input type="password" name= "password" value = {password} onChange = {this.changeHandler} placeholder="Enter password.."></input>
                    <button type="submit">Sign up</button>
                </form>
            </div>
        );
    }
}

export default Signup;