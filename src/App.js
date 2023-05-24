import React, { useEffect, useState } from 'react';
import './App.css';
import Cart from "./Cart";
import Product from "./Product";
import {Card} from "react-bootstrap";



function App() {
    const [cartItems, setCartItems] = useState([]);
    const [show, setShow] = useState(false);
    const [showhome, setShowhome] = useState(true);

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

   /* fetch('/api/carts/addItem', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(product),
});

// Artikel aus dem Warenkorb entfernen
fetch('/api/carts/removeItem', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(product),
});

// Den Warenkorb für eine bestimmte cartId abrufen
fetch(`/api/carts/${cartId}`)
  .then(response => response.json())
  .then(cart => {
 cart.items.forEach(item => {
      console.log(`Produkt: ${item.name}, Preis: ${item.price}, Menge: ${item.quantity}`);
  });

// Den Warenkorb leeren
fetch(`/api/carts/${cartId}`)
  .then(response => response.json())
  .then(cart => {
    // Warenkorb leeren
    fetch(`/api/carts/${cartId}`, { method: 'DELETE' })
      .then(() => {
        console.log('Warenkorb geleert');
        })
      .catch(error => {
        console.error('Fehler beim Leeren des Warenkorbs:', error);
        });
  })
  .catch(error => {
    console.error('Fehler beim Abrufen des Warenkorbs:', error);
  });
//

    */

    const handleClick = () => {
        setShow(true);
        setShowhome(false);
    };

    const handleback = () => {
        setShow(false);
        setShowhome(true);
    };

    return (
        <div>
            <nav>
                <div className="title" onClick={handleback}>Japanese Street Food</div>
                <button className="cart" onClick={handleClick}>🛒</button>
            </nav>
            <div>
               <Product show={showhome} addtocart={addToCart} />
                <Cart show={show} cartItems={cartItems} removeFromCart={removeFromCart} />
            </div>
        </div>
    )
}
export default App;
