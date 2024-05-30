import React from "react";
import { useSelector } from "react-redux";

export default function CustomerList(){

    const personalInfo = useSelector(store => store.personalInfo);

    return (
        <div>
            <ul>{personalInfo.map((info) => {
                return (
                    <div>
                        <li>{info.customer_name}</li>
                        <li>{info.street_address}</li>
                        <li>{info.city}</li>
                        <li>{info.zip}</li>
                    </div>
                )
            })}
            </ul>
        </div>
            
    )
}