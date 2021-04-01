import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Delete from '../Delete/Delete';


const ManageProduct = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5055/productManage')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>

            <div >
                {
                    products.map(product => <Delete product={product}></Delete>)
                }
            </div>
        </div>
    );
};

export default ManageProduct;