import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂
const pizzaReducer = (state = [], action) => {
  return state;
}

const store = createStore(
  combineReducers({
    pizzaReducer
  }),
  applyMiddleware(logger),
);


export default store;
