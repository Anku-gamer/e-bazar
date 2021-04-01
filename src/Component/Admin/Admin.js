import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            quantity: data.quantity,
            imageURL: imageURL
        };
        const url = `http://localhost:5055/addProduct`

        fetch(url, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => console.log('success full', res));
    };


    const handleImageUpload = product => {
        console.log(product.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '86c63ceb40480da5f5634fae73891d0c');
        imageData.append('image', product.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="container text-center">
            <h1>Add Products</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" placeholder="Product Name" ref={register} />
                <br />
                <input name="price" placeholder="Price" ref={register} />
                <br />
                <input name="quantity" placeholder="Quantity" ref={register} />
                <br />
                <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Admin;