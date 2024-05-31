import { useSelector } from "react-redux"

export default function Header() {
    const pizzas = useSelector(store => store.cartReducer);
    let totalPrice = 0;
    const totalCartPrice = (array) => {
        for (let i =0; i < array.length; i++) {
            totalPrice += Number(array[i].price)
;        }
        return totalPrice;
    }

    return (
        <>
        <h1>Pizza Store</h1>
        <h3>Cart Total: ${totalCartPrice(pizzas)}</h3>
        </>
    )
}
