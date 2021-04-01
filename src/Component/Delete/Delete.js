import React from 'react';
import { Table } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Delete = ({ product }) => {
    const history = useHistory();


    const handleDelete = (id) => {
        fetch(`http://localhost:5055/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(res => {
                console.log('delete successfully');

            })
        console.log('clicked', id);
    }



    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>product name</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>Delete option</th>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>1</td>
                        <td> <button className="btn btn-info btn-lg" onClick={() => handleDelete(product._id)}>Delete</button></td>
                    </tr>
                </tbody>
            </Table>



        </div>
    );
};


export default Delete;