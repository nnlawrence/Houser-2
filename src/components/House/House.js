import React, { Component } from 'react';

class House extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

        const { id, property_name, address, city, state, zip, } = this.props.houses

        return ( 
            <div className='mapped'>
                <p>Property Name: {property_name}</p>
                <p>Address: {address}</p>
                <p>City: {city}</p>
                <p>State: {state}</p>
                <p>Zip: {zip}</p>
                <button onClick={ () => this.props.deleteHouse(id) }>X</button>
            </div>
         );
    }
}
 
export default House;