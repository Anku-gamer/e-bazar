import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useParams} from 'react-router';
import { UserContext } from '../../App';
import {Link} from 'react-router-dom';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext (UserContext);
    const {id} = useParams();
    const [product , setProduct] = useState({});

    const handleCheckOut = () =>{
        const orderDetails = { user: loggedInUser.displayName, email: loggedInUser.email, ...product, orderTime: new Date()}
        console.log(orderDetails);
    
        fetch('http://localhost:5055/addOrders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
        })
        
    }
    
    useEffect(() => {
        fetch(`http://localhost:5055/product/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    },[id])
    return (
        <div className="container checkOut">
            <h2 className="text-center text-secondary py-2">Check Out Here</h2>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Product</th>
                       <th scope="col">Description</th>
                       <th scope="col">Quantity</th>
                       <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td ><img style={{height: '25px'}} src={product.imageURL} alt=""/></td>
                        <td>{product.name}</td>
                        <td>{product.quantity}</td>
                        <td>{product.price}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>Total</td>
                        <td></td>
                        <td></td>
                        <td>{product.price}</td>
                    </tr>
                </tbody>
            </table>
            <Link to="/checkOut" className="btn btn-success" onClick={handleCheckOut}>check Out</Link>
        </div>
    );
};

export default Order;