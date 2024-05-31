import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Checkout() {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleCheckout = () => {
        dispatch({
            type: 'CLEAR',
        });
        history.push('/')
    }

    const customerReducer = useSelector(store => store.customerReducer);
    const cartReducer = useSelector(store => store.cartReducer);


    return (
        <>
        <h1>Checkout</h1>
        <li>{customerReducer.customer_name}</li>
        <li>{customerReducer.street_address}</li>
        <li>{customerReducer.city}</li>
        <li>{customerReducer.type}</li>
        <div>
            {cartReducer.map((pizza) => (
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