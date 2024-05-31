import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import PizzaList from './PizzaList/PizzaList';
import Header from '../Header/Header';
import CustomerForm from '../CustomerForm/CustomerForm';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Checkout from '../Checkout/Checkout';
import { useDispatch } from 'react-redux';
import Admin from '../Admin/Admin';

function App() {
  const dispatch = useDispatch();  

  useEffect(() => {
    fetchPizzas();
  }, []);

  const fetchPizzas = () => {
    axios
      .get('/api/pizza')
      .then((response) => {
        dispatch({ type: 'SET_PIZZAS', payload: response.data });
      })
      .catch((error => {
        alert('Error getting pizzas');
        console.log(error);
      }))
  }

  return (

    <Router>
    <div className='App'>
      <Header />
      <Route path='/' exact>
        <PizzaList />
      </Route>
      <Route path='/api/customer_form'>
        <CustomerForm />
      </Route>
      <Route path='/api/checkout'>
        <Checkout />
      </Route>
      <Route path='/api/admin'>
        <Admin />
      </Route>
    </div>
    </Router>
  );
}

export default App;
