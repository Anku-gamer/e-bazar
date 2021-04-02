import React, { useState } from 'react';
import { useEffect } from 'react';
import Product from '../Product';
import './Home.css';

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://glacial-reaches-64415.herokuapp.com/products')
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