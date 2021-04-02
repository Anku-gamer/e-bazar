import React from 'react';

const CheckProduct = ({order}) => {
    return (
        <div>
            <h2 className="text-center text-secondary py-2">Check Out Here</h2>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Product</th>
                       <th scope="col">Price</th>
                       <th scope="col">Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{order.name}</td>
                        <td>{order.price}</td>
                        <td>{order.orderTime}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CheckProduct;