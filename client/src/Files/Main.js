import { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';


class Main extends Component{
    constructor(props) {
        super(props)

        this.state = {
            containers: []
        }
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
                    containers.map(containers => <div key={containers.selfid}>{containers.names} {containers.email} {containers.sepass}</div>) :
                    null
                }
            </div>
            </>
        );
    }
}

export default Main;