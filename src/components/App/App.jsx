import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CustomerForm from '../CustomerForm/CustomerForm.jsx';
import CustomerList from '../CustomerList/CustomerList.jsx';
import { useDispatch } from 'react-redux';

function App() {


  const dispatch = useDispatch();

  useEffect(() => {
    console.log('in useEffect');
    customerInfo();
  }, [])

  const customerInfo = () => {
    axios({
      method: 'GET',
      url: '/api/order'
    })
    .then((response) => {
      console.log(response.data);

      dispatch({type: `ADD_INFO`, payload: response.data})
    })
    .catch((error) => {
      console.log('error in GET', error);
    });
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
    
      <CustomerForm customerInfo={customerInfo}/>
      <CustomerList />
    </div>
  );
}

export default App;
