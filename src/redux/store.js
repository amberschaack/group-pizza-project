import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂
const someReducer = (state = [], action) => {
  return state;
}

const personalInfo = (state = [], action) => {
  if(action.type === 'ADD_INFO'){
    console.log(`Customer Info ${action.payload}`);
    return [...state, action.payload];
  } else{
    return state;
  }
}

const store = createStore(
  combineReducers({
    someReducer, // 👈 Be sure to replace this, too!
    personalInfo,
  }),
  applyMiddleware(logger),
);


export default store;
