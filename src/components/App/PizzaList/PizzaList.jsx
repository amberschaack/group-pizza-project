import { useHistory } from "react-router-dom";
import PizzaItem from "../PizzaItem/PizzaItem";
import { Button } from '@mui/material';

export default function PizzaList({ pizzas, fetchPizzas }) {
    const history = useHistory();

    const nextPage = () => {
        console.log('Go to next page');
        history.push('/api/customer_form');
    }

    return (
        <>
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