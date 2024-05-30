import PizzaItem from "../PizzaItem/PizzaItem";

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
        </>
    )
}