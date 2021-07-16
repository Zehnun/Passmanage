import { Component } from 'react';
import Navbar from './Navbar';

class Main extends Component{

    state = {
        loading: true,
        containers: null
    };

    async componentDidMount(){
        const url = "http://localhost:3001/main";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ containers: data.results[0], loading: false});
    }

    render(){
        return(
            <>
            <Navbar></Navbar>
            <div>
                {this.state.loading || !this.state.containers ? (
                    <div>loading..</div>
                ) : (
                    <div>
                        <div> {this.state.containers} </div>
                    </div>
                )}
            </div>
            </>
        );
    }
}

export default Main;