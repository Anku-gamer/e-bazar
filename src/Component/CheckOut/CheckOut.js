import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import CheckProduct from './CheckProduct';
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
                   order.map(order => <CheckProduct order={order}></CheckProduct>)
               }
           </ul>
        </div>
    );
};

export default CheckOut;