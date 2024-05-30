import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂

const customerReducer = (state = {}, action) => {
  if(action.type === 'ADD_INFO') {
    console.log(`Customer Info ${action.payload}`);
    return action.payload;
  }
    return state;
  }

const store = createStore(
  combineReducers({
    customerReducer,
  }),
  applyMiddleware(logger),
);


export default store;
