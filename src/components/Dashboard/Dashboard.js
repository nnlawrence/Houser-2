import React, { Component } from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            houses: []
         }
    }

    componentDidMount(){
        this.getHouses()
    }

    getHouses = () => {
        axios.get('/api/houses').then(res => {
            this.setState({
                houses: res.data
            })
        })
    }

    deleteHouse = (id) => {
        axios.delete(`/api/house/${id}`).then(res => {
            this.setState({
                houses: res.data
            })
            this.getHouses()
        })
    }

    render() {
        
        const mappedHouses = this.state.houses.map((list, index) => {
            return <House key={ index } houses={ list } deleteHouse={ this.deleteHouse } />
        })

        return ( 
            <div className='dashboard'>
                <h1>Dashboard</h1>
                <h3>Home Listings</h3>
                <Link to='/wizard/step1'><button>Add New Property</button></Link>
                {mappedHouses}
            </div>
         );
    }
}
 
export default Dashboard;