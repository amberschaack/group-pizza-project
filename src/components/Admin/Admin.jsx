import { useSelector } from "react-redux";
import axios from 'axios';
import { useState, useEffect } from "react";

export default function Admin() {
    // const customer = useSelector(store => store.customerReducer);
    const price = useSelector(store => store.priceReducer);
    const [orderList, setOrderList] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, [])

    const fetchOrders = () => {
        axios({
            method: 'GET',
            url: '/api/order'
        }).then(response => {
            setOrderList(response.data);
            console.log('GETting orders: ', response);
        }).catch(error => {
            console.log('Error GETting: ', error);
        })
    }

    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Time Order Placed</th>
                    <th>Type</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody>
                {orderList.map((order, i) => (
                    <tr key={i}>
                        <td>{order.customer_name}</td>
                        <td>{order.time}</td>
                        <td>{order.type}</td>
                        <td>{order.total}</td>
                    </tr>
                    ))}
            </tbody>
        </table>
        </>
    )
}