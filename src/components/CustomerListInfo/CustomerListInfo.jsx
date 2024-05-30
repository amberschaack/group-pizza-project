import React from "react";

export default function CustomerListInfo({ info }){

    return (
        <div>
            <li>{info.customer_name}</li>
            <li>{info.street_address}</li>
            <li>{info.city}</li>
            <li>{info.zip}</li>
        </div>
    )
}