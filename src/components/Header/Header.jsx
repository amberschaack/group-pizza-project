import { useSelector } from "react-redux"

export default function Header() {
const price = useSelector(store => store.priceReducer);

    return (
        <>
        <h1>Pizza Store</h1>
        <h3>Cart Total: ${price}</h3>
        </>
    )
}
