import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import store from '../../redux/store'; 


class Wizard2 extends Component {
    constructor() {
        super();

        const reduxState = store.getState(); 
        
        this.state = {
            img: reduxState.img
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            const reduxState = store.getState(); 
            this.setState({
                img: reduxState.img
            })
        })
    }

    handleImgInput = (e) => {
        this.setState({
            img: e
        })
    }

    render() {
        return (
            <div>
                <div>Wizard Step Two</div>
                <Link to='/'><button onClick={() => store.dispatch({type:'CANCEL'})}>Cancel</button></Link>
                <input placeholder='Image URL' value={this.state.img} onChange={ (e) => this.handleImgInput(e.target.value)} />
                <Link to='/wizard/step1'><button onClick={() => store.dispatch({type: 'ADD_STEP2', payload:{componentState: this.state}})} >Previous Step</button></Link>
                <Link to='/wizard/step3'><button onClick={() => store.dispatch({type: 'ADD_STEP2', payload:{componentState: this.state}})} >Next Step</button></Link>
            </div>
        )
    }
}

export default Wizard2;