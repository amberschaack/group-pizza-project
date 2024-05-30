import { useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";

export default function CustomerForm({customerInfo}){
    const dispatch = useDispatch();

    const [customerName, setCustomerName] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Add customer info`, customerName);
        axios.post(`/api/order`, 
        {customer_name: customerName, 
        street_address: streetAddress,
        city: city,
        zip: zip,
        })
        .then(() => {
            dispatch({
                type: "ADD_INFO",

                payload: customerName,

                payload: streetAddress,

                payload: city,

                payload: zip,
            });
            setCustomerName("");
            setStreetAddress("");
            setCity("");
            setZip("");
            customerInfo();
        })
        .catch((error) => {
            console.log(error);
            alert(`Couldnt add customer`)
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={customerName}
                    placeholder="Name"
                    onChange={(event) => {
                        setCustomerName(event.target.value);
                    }}
                />
                <input
                    type="text"
                    value={streetAddress}
                    placeholder="Street Address"
                    onChange={(event) => {
                        setStreetAddress(event.target.value);
                    }}
                />
                <input
                    type="text"
                    value={city}
                    placeholder="City"
                    onChange={(event) => {
                        setCity(event.target.value);
                    }}
                />
                <input
                    type="text"
                    value={zip}
                    placeholder="Zip"
                    onChange={(event) => {
                        setZip(event.target.value);
                    }}
                />
                <button type="submit">Next</button>
            </form>
        </>
    )
}