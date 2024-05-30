import { useSelector } from "react-redux"

export default function Header() {
const pizzaStore = useSelector(store => store.pizzaReducer);

    return (
        <>
        <h1>Pizza Store</h1>
        <h3>Cart Total: ${pizzaStore}</h3>
        </>
    )
}

// will need to show total price of cart from our store