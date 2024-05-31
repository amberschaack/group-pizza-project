import { useState } from "react"
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function CustomerForm() {
    const [customerInfo, setCustomerInfo] = useState({ customer_name: '', street_address: '', city: '', zip: '', type: ''});
    const dispatch = useDispatch();
    const history = useHistory();

    const nextPage = () => {
        console.log('Go to next page');
        history.push('/api/checkout');
    }

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

    const handlePickupChange = (event) => {
        setCustomerInfo({
            ...customerInfo,
            type: event.target.value
        })
    }

    const handleDeliveryChange = (event) => {
        setCustomerInfo({
            ...customerInfo,
            type: event.target.value
        })
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" onChange={handleNameChange} required/>
            <input type="text" placeholder="Street Address" onChange={handleAddressChange} required/>
            <input type="text" placeholder="City" onChange={handleCityChange} required/>
            <input type="text" placeholder="Zip Code" onChange={handleZipChange} required/>
            <label>
                <input type="radio" value="Pickup" onChange={handlePickupChange} name="method" defaultChecked/>
                Pickup
            </label>
            <label>
                <input type="radio" value="Delivery" onChange={handleDeliveryChange} name="method" />
                Delivery
            </label>
            <button type="submit">Submit</button>
        </form>
        <button onClick={nextPage}>Next Page</button>
        </>
    )
}