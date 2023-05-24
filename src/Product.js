import React, {useEffect, useState} from 'react';
import "./App.css"

function Product({addtocart,show}) {
    if (!show) return null;
    const[products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/product")
            . then(response => response.json())
            .then(data => setProducts(data));
    }, []);





    return(
        <div>
            <h2>Products</h2>
            <div className={"product-list"}>
            {products.map(product => (
                <div key={product.id} className={"product-card"}>
                    <h3>{product.name}</h3>
                    <img src={product.image}/>
                        <p>
                            Price: {product.price} Chf <br />
                            Description: {product.comment} <br />
                            <button onClick={() => addtocart(product)}>Add to Cart</button>
                        </p>
                </div>
            ))}
            </div>
        </div>
);
}

export default Product;
