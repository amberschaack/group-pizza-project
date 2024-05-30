import { useState } from "react"
import { useDispatch } from "react-redux";

export default function CustomerForm() {
    const [customerInfo, setCustomerInfo] = useState({ customer_name: '', street_address: '', city: '', zip: ''});
    const dispatch = useDispatch();

    const handleNameChange = (event) => {
        event.preventDefault();
        setCustomerInfo({
            ...customerInfo,
            customer_name: event.target.value
        });
    }

    const handleAddressChange = (event) => {
        event.preventDefault();
        setCustomerInfo({
            ...customerInfo,
            street_address: event.target.value
        });
    }

    const handleCityChange = (event) => {
        event.preventDefault();
        setCustomerInfo({
            ...customerInfo,
            city: event.target.value
        });
    }

    const handleZipChange = (event) => {
        event.preventDefault();
        setCustomerInfo({
            ...customerInfo,
            zip: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({ type: 'ADD_INFO', payload: customerInfo});
        setCustomerInfo();
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" onChange={handleNameChange} />
            <input type="text" placeholder="Street Address" onChange={handleAddressChange} />
            <input type="text" placeholder="City" onChange={handleCityChange} />
            <input type="text" placeholder="Zip Code" onChange={handleZipChange} />
            <button type="submit">Next</button>
        </form>
        </>
    )
}