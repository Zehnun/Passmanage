import { Component } from 'react';
import { Redirect } from 'react-router';
import signin from './Signin';

class signinContainer extends Component{
    constructor(props){
        super(props)

        if (props.user){
            alert("you can't log in, if you are logged in ");
            <Redirect to='/main' />
        }
    }
    render() {
        return <Signin></Signin>
    }
}

export default withrouter(signinContainer)