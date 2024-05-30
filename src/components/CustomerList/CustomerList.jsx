import React from "react";
import { useSelector } from "react-redux";
import CustomerListInfo from "../CustomerListInfo/CustomerListInfo.jsx";

export default function CustomerList(){

    const customerReducer = useSelector(store => store.customerReducer);
    // console.log(customerReducer);
    
    return (
        <div>
            <li>{customerReducer.customer_name}</li>
            <li>{customerReducer.street_address}</li>
            <li>{customerReducer.city}</li>
            <li>{customerReducer.zip}</li>
        </div>
            
    )
}