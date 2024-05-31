import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂
const priceReducer = (state = 0, action) => {
  if (action.type === 'CLEAR'){
    return 0;
  } else if (action.type === 'ADD_PIZZA') {
    return Number(state) + Number(action.payload);
  } else if (action.type === 'REMOVE_PIZZA') {
    return Number(state) - Number(action.payload);
  }
  return state;
}

const pizzaReducer = (state = [], action) => {
  if (action.type === 'SET_PIZZAS') {
    return action.payload;
  }
  return state;
}

const cartReducer = (state = [], action) => {
  if (action.type === 'ADD_TO_CART') {
    return [...state, action.payload];
  } else if (action.type === 'REMOVE_FROM_CART') {
    return state.filter((pizza) => Number(pizza.id) !== Number(action.payload.id));
  } else if (action.type === 'CLEAR'){
    return [];
}
  return state;
}

const customerReducer = (state = {}, action) => {
  if(action.type === 'ADD_INFO'){
    console.log(`Customer Info ${action.payload}`);
    return action.payload;
  } else if (action.type === 'CLEAR'){
    return {};
  } else{
    return state;
  }
}

const store = createStore(
  combineReducers({
    pizzaReducer,
    priceReducer,
    customerReducer,
    cartReducer
  }),
  applyMiddleware(logger),
);


export default store;
