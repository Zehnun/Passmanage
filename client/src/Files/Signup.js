import axios from "axios";
import { Component } from "react";
import "./Style/up.css"

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
            alert("signed up");
    
            this.props.history.push("/");
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    render() {
        const {email, password} = this.state
        return(
            <div className="up">
                <p>Sign up</p>
                <form className="up-form" onSubmit={this.submitHandler}>
                    <label>Email:</label>
                    <input className="up-em" type="email" name = "email" value = {email} onChange={this.changeHandler} placeholder="Enter email..."></input>
                    <label>Password:</label>
                    <input className="up-pass" type="password" name= "password" value = {password} onChange = {this.changeHandler} placeholder="Enter password.."></input>
                    <button className="up-btn" type="submit">Sign up</button>
                </form>
            </div>
        );
    }
}

export default Signup;