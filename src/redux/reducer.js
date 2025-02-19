const initialState = {
    name: '', 
    address: '', 
    city: '',
    state: '',
    zip: '',
    rent: '', 
    mortgage: '',
    image: '',
    houses: []
}

export default function (state = initialState, action) {
const { type } = action;
// const { type, payload } = action;
switch(type) {
    case 'ADD_STEP1':
        return Object.assign({}, state, action.payload.componentState); 
    case 'ADD_STEP2': 
        return Object.assign({}, state, action.payload.componentState); 
    case 'ADD_STEP3': 
        return Object.assign({}, state, action.payload.componentState); 
    case 'CANCEL': 
        return Object.assign({}, state, initialState)
    default:
        return state; 
  }
};