import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import PizzaList from './PizzaList/PizzaList';
import Header from '../Header/Header';

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetchPizzas();
  }, []);

  const fetchPizzas = () => {
    axios
      .get('/api/pizza')
      .then((response) => {
        setPizzas(response.data);
      })
      .catch((error => {
        alert('Error getting pizzas');
        console.log(error);
      }))
  }

  return (
    <div className='App'>
      <Header />
      <PizzaList 
      pizzas={pizzas}
      fetchPizzas={fetchPizzas}
      />
    </div>
  );
}

export default App;
