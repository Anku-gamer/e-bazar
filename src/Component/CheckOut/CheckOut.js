import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';

const CheckOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [order, setOrder] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5055/order?email=${loggedInUser.email}`, {
            method: "GET",
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setOrder(data)
            })
    }, [])

    return (
        <div>
           <ul>
               {
                   order.map(or => 
                   <li>{or.price}</li>)
               }
           </ul>
        </div>
    );
};

export default CheckOut;