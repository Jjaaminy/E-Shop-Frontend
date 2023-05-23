import React, { useEffect, useState } from 'react';
import './App.css';
import Cart from "./Cart";
import Product from "./Product";
import {Card} from "react-bootstrap";



function App() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems,product]);
    };

    const removeFromCart = (productId) => {
        const index = cartItems.findIndex(item => item.id === productId);
        if (index !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems.splice(index, 1);
            setCartItems(updatedCartItems);
        }
    };

    const handleClick = () => {
        window.location.href = '/Cart.js';
    };

    return (
        <div>
            <nav>
                <div className="title">E-Shop</div>
                <button className="cart" onClick={handleClick}>🛒</button>
            </nav>
            <div>
                <Product addtocart={addToCart}/>
            </div>
            <div>
                <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>
            </div>
        </div>
    )
}
export default App;
