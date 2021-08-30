import { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';


class Main extends Component{
    constructor(props) {
        super(props)

        this.state = {
            containers: [],
            names: '',
            email: ''
        }
    }
    changeHandler = (e) =>{
        this.setState({ [e.target.names]: e.target.value})
    }
    
    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:3001/delete', this.state)
            .then(response =>{
                console.log(response.data);
            })
            .catch(error => {
                console.log(error)
            })
    }

    componentDidMount(){
        axios.get('http://localhost:3001/main')
        .then((response) => {
            this.setState({containers: response.data})
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }
     
    /*
    async componentDidMount(){
        const url = "http://localhost:3001/main";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ containers: data.results, loading: false});
    }
   
    <div> {this.state.containers}   </div>
            
*/
    render(){
        const { containers } = this.state
        return(
            <>
            <Navbar></Navbar>
            <div>
                {
                    containers.length ?
                    containers.map(containers => <div key={containers.selfid}>{containers.names} {containers.email} {containers.sepass} <button onChange={this.changeHandler} onSubmit={this.submitHandler}>Delete</button></div>) :
                    null
                }
            </div>
            </>
        );
    }
}

export default Main;