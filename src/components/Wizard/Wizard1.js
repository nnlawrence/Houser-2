import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store from '../../redux/store';

class Wizard1 extends Component {
    constructor(props) {
        super(props);
        const reduxState = store.getState()
        this.state = { 
            name: reduxState.name, 
            address: reduxState.address, 
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip
            // name: '',
            // address: '',
            // city: '',
            // state: '',
            // zip: 0
         }
    }

    componentDidMount() {
        store.subscribe(() => {
            const reduxState = store.getState(); 
            this.setState({
                name: reduxState.name, 
                address: reduxState.address, 
                city: reduxState.city,
                state: reduxState.state,
                zip: reduxState.zip
            })
        })
    }

    handleName = (e) => {
        this.setState({
            name: e
        })
    }
    handleAddress = (e) => {
        this.setState({
            address: e
        })
    }
    handleCity = (e) => {
        this.setState({
            city: e
        })
    }
    handleState = (e) => {
        this.setState({
            state: e
        })
    }
    handleZip = (e) => {
        this.setState({
            zip: e
        })
    }

    render() { 
        return ( 
            <div className='wizard1'>
                <div>Wizard Step One</div>
                <Link to='/'><button>Cancel</button></Link>
                <label>Property Name: </label>
                <input type='text' placeholder='Name' value={this.state.name} onChange={ (e) => this.handleName(e.target.value)} />
                <label>Address: </label>
                <input type='text' placeholder='Address' value={this.state.address} onChange={ (e) => this.handleAddress(e.target.value)} />
                <label>City: </label>
                <input type='text' placeholder='City' value={this.state.city} onChange={ (e) => this.handleCity(e.target.value)} />
                <label>State: </label>
                <input type='text' placeholder='State' value={this.state.state} onChange={ (e) => this.handleState(e.target.value)} />
                <label>Zip: </label>
                <input type='text' placeholder='Zip' value={this.state.zip} onChange={ (e) => this.handleZip(e.target.value)} />
                <Link to='/wizard/step2'><button onClick={() => store.dispatch({type: 'ADD_STEP1', payload:{componentState: this.state}})} >Next Step</button></Link>
            </div>
         );
    }
}
 
export default Wizard1;