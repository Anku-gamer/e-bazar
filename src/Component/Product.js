import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
    const { _id } = product;
    const addEvent = id => {

    }

    return (
        <div style={{ paddingLeft: "2rem" }} className="card-deck">
            <div className='col-sm-4'>
                <div className='card-body card' style={{ width: "18rem", paddingLeft: "5rem" }} >
                    <Link to={`/order/${_id}`}>
                        <img style={{ height: '100px' }} src={product.imageURL} alt="" />
                        <h5>{product.name}</h5>
                        <h6>{product.quantity}</h6>
                        <h6>{product.price}</h6>
                        <button className="btn btn-outline-info" onClick={() => addEvent(product._id)}>Add product</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;