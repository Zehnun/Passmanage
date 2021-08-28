import { Component } from 'react';
import axios from 'axios';

class Signin extends Component{

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
        axios.post('http://localhost:3001/signin', this.state)
            .then(response =>{
                if(response.data !== "fail"){
                    console.log(response.data);
                    document.cookie = "email=" + response.data.email + "; SameSite=None;";
                    document.cookie = "pass=" + response.data.pass + "; SameSite=None;";
                    this.props.history.push("/main");
                }else{
                    alert("Try again");
                    window.location.reload(false);
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const {email, password} = this.state
        return(
            <div className="App">
                <p>Sign in</p>
                <form onSubmit={this.submitHandler}>
                    <label>Email:</label>
                    <input type="email" name = "email" value = {email} onChange={this.changeHandler} placeholder="Enter email..."></input>
                    <label>Password:</label>
                    <input type="password" name= "password" value = {password} onChange = {this.changeHandler} placeholder="Enter password.."></input>
                    <button type="submit">Sign in</button>
                </form>
            </div>
        );
    }
}

export default Signin;