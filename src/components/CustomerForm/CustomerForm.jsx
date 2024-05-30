import { useDispatch } from "react-redux";
import { useState } from "react";
import CustomerList from "../CustomerList/CustomerList";
// import axios from "axios";

export default function CustomerForm(){
    const dispatch = useDispatch();

    const [customerInfo, setCustomerInfo] = useState({ customer_name: '', street_address: '', city: '', zip: ''});

    const handleNameChange = (event) => {
        event.preventDefault();
        setCustomerInfo({
            ...customerInfo,
            customer_name: event.target.value
        })
    }

    const handleAddressChange = (event) => {
        event.preventDefault();
        setCustomerInfo({
            ...customerInfo,
            street_address: event.target.value
        })
    }

    const handleCityChange = (event) => {
        event.preventDefault();
        setCustomerInfo({
            ...customerInfo,
            city: event.target.value
        })
    }

    const handleZipChange = (event) => {
        event.preventDefault();
        setCustomerInfo({
            ...customerInfo,
            zip: event.target.value
        })
    }
    
    const addInfo = (event) => {
        event.preventDefault();
        dispatch({ type: 'ADD_INFO', payload: customerInfo});
        setCustomerInfo('');
    }
    
    
    
    return (
        <>
            <form onSubmit={(event) => addInfo(event)}>
                <input
                    type="text"
                    placeholder="Name"
                    onChange={handleNameChange}
                />
                <input
                    type="text"
                    placeholder="Street Address"
                    onChange={handleAddressChange}
                />
                <input
                    type="text"
                    placeholder="City"
                    onChange={handleCityChange}
                />
                <input
                    type="number"
                    placeholder="Zip"
                    onChange={handleZipChange}
                />
                <button type="submit">Next</button>
            </form>
        </>
    )
}