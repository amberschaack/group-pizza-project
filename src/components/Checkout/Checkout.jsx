import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Checkout() {

    const history = useHistory();

    const dispatch = useDispatch();

    const handleCheckout = (event) => {
        dispatch({
            type: 'CLEAR',
        });

        history.push('/')
    }

    const customerReducer = useSelector(store => store.customerReducer);
    const cartReducer = useSelector(store => store.pizzaReducer);

    return (
        <>
        <h1>Checkout</h1>
        {customerReducer.customer_name}
        {customerReducer.street_address}
        {customerReducer.city}
        {cartReducer.type}
        {cartReducer.name}
        {cartReducer.price}
        <div>
            <button onClick={(event) => handleCheckout(event)}>Checkout</button>
        </div>
        </>
    )
}