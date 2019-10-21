import React, { Component } from 'react';

class House extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

        const { id, property_name, address, city, state, zip, rent, mortgage, image } = this.props.houses

        return ( 
            <div className='mapped'>
                <button onClick={ () => this.props.deleteHouse(id) }>X</button>
                <p>Property Name: {property_name}</p>
                <p>Address: {address}</p>
                <p>City: {city}</p>
                <p>State: {state}</p>
                <p>Zip: {zip}</p>
                <p>Rent: {rent}</p>
                <p>Mortgage: {mortgage}</p>
                <p>Image: </p>
                <img src={image} alt='House' />
            </div>
         );
    }
}
 
export default House;