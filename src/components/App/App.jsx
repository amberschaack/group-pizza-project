import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import PizzaList from './PizzaList/PizzaList';

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
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <PizzaList 
      pizzas={pizzas}
      fetchPizzas={fetchPizzas}
      />
    </div>
  );
}

export default App;
