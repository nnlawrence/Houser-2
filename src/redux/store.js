import { createStore } from 'redux'; 
import reducer from './reducer'; 

export default createStore(reducer); 

// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import promiseMiddleware from 'redux-promise-middleware';
// import reducer from './reducer';

// const rootReducer = combineReducers({
//     reducer
// })

// export default createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
//         applyMiddleware(promiseMiddleware)
//       )
// )