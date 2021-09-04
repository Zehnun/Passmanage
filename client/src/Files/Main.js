import { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import Delete from './Delete';
import "./Style/main.css";

class Main extends Component{
    constructor(props) {
        super(props)

        this.state = {
            containers: []
        }
    }
    /*
    changeHandler = (e) =>{
        this.setState({ [e.target.names]: e.target.value})
        console.log("it clicks handler");
    }
    click(){
        console.log("it clicks");
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
    */
    componentDidMount(){
        axios.get('http://localhost:3001/main')
        .then((response) => {
            this.setState({containers: response.data})
            console.log(response.data + " fresh list")
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
            <div className="main">
                <div className="main-lb">
                    <label className="lb-name">Name </label>
                    <label className="lb-em">Email</label>
                    <label className="lb-pass">Password</label>
                </div>
                {
                    containers.length ?
                    containers.map(containers => 
                        <div className="main-info" key={containers.selfid}>
                            <div className="main-line"></div>
                            <div className="main-inside">
                                <div className="main-name">{containers.names}</div>
                                <div className="main-em">{containers.email}</div> 
                                <div className="main-pass"> {containers.sepass}</div>
                                <Delete className="main-del" names={containers.names} email={containers.email}></Delete>
                            </div>
                        </div>
                    ) : null
                }
            </div>
            </>
        );
    }
}

export default Main;