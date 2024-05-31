import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from 'axios';

export default function Checkout() {
    const history = useHistory();
    const dispatch = useDispatch();

    const customer = useSelector(store => store.customerReducer);
    const cart = useSelector(store => store.cartReducer);
    const price = useSelector(store => store.priceReducer);
    
    const handleCheckout = () => {
        const checkout = {
            "customer_name": customer.customer_name, 
            "street_address": customer.street_address,
            "city": customer.city,
            "zip": customer.zip,
            "total": price,
            "type": customer.type,
            "pizzas": cart.map(pizza => ({id: pizza.id, quantity: 1}))
        }

        axios.post('/api/order', checkout)
            .then(response => {
                dispatch({ type: 'CLEAR' });
            })
        history.push('/')
    }

    return (
        <>
        <h1>Checkout</h1>
        <li>{customer.customer_name}</li>
        <li>{customer.street_address}</li>
        <li>{customer.city}</li>
        <li>{customer.type}</li>
        <div>
            {cart.map((pizza) => (
                <div key={pizza.id}>
                {pizza.type}
                {pizza.name}
                {pizza.price}
                </div>
            ))}
        </div>
        <div>
            <button onClick={(event) => handleCheckout(event)}>Checkout</button>
        </div>
        </>
    )
}