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
    for(int i = 0; i < v.size(); i++ ){
        cin >> x >> y >> z;
        vector<int> v(n);
        for(int j = 0; < w.size(); u++){
            cout << x << y << z << endl;
            for(int i = 0; i < v.size(); i++){
                cin >> y >> z >> endl;
                cout << x << y << z << endl << fastest.
            }
        }
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