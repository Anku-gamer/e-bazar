import React, { useState } from 'react';
import { useEffect } from 'react';
import Product from '../Product';
import './Home.css';

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5055/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div style={{ paddingRight: '5rem' }} className="homeStyle">
            <div style={{ marginBottom: '1rem' }} className="row">
                {
                    products.map(product => <Product product={product} ></Product>)
                }
            </div>
        </div>
    );
};

export default Home;