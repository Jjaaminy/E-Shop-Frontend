import React, { useEffect, useState } from 'react';
import './Cart.css';


function Cart({ cartItems, removeFromCart }) {
    const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <div>
            <h2>Shopping cart</h2>
            <div className="cart-items">
                <table className="cart-table">
                    <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cartItems.map(item => (
                        <tr key={item.id} className="cart-item">
                            <td>{item.name}</td>
                            <td>{item.price} Chf</td>
                            <td>
                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="total-amount">
                <div className="total-box">
                    Total Amount:
                    <span className="total-number">{totalAmount} Chf</span>
                </div>
            </div>
        </div>
    );
}
    export default Cart;
