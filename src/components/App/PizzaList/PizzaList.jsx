import { useHistory } from "react-router-dom";
import PizzaItem from "../PizzaItem/PizzaItem";
import { Button } from '@mui/material';
import { useSelector } from "react-redux";

export default function PizzaList({ fetchPizzas }) {
    const history = useHistory();
    const pizzas = useSelector(store => store.pizzaReducer);

    const nextPage = () => {
        console.log('Go to next page');
        history.push('/api/customer_form');
    }

    return (
        <>
        <h1>Pizza List</h1>
        <div>
            {pizzas.map((pizza) => (
                <PizzaItem 
                    key={pizza.id}
                    pizza={pizza}
                    fetchPizzas={fetchPizzas}
                />
            ))}
        </div>
        <div>
            <Button onClick={nextPage}>Next</Button>
        </div>
        </>
    )
}