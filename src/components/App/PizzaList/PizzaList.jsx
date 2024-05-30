import PizzaItem from "../PizzaItem/PizzaItem";
import { Button } from '@mui/material';


export default function PizzaList({ pizzas, fetchPizzas }) {
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
            <Button>Next</Button>
        </div>
        </>
    )
}