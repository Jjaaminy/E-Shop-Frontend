import React, { useState } from 'react';

function something() {
    const [categories, setCategories] = useState([
        { id: 1, name: 'Category 1' },
        { id: 2, name: 'Category 2' },
        { id: 3, name: 'Category 3' }
    ]);

    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', category: 'Category 1', liked: false },
        { id: 2, name: 'Product 2', category: 'Category 1', liked: false },
        { id: 3, name: 'Product 3', category: 'Category 2', liked: false },
        { id: 4, name: 'Product 4', category: 'Category 2', liked: false },
        { id: 5, name: 'Product 5', category: 'Category 3', liked: false },
        { id: 6, name: 'Product 6', category: 'Category 3', liked: false }
    ]);

    const [cartItems, setCartItems] = useState([]);

    const [likedProducts, setLikedProducts] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const toggleLike = (product) => {
        const updatedProducts = products.map((p) =>
            p.id === product.id ? { ...p, liked: !p.liked } : p
        );
        setProducts(updatedProducts);

        if (product.liked) {
            setLikedProducts([...likedProducts, product]);
        } else {
            const updatedLikedProducts = likedProducts.filter(
                (p) => p.id !== product.id
            );
            setLikedProducts(updatedLikedProducts);
        }
    };

    return (
        <div>
            <nav>
                <img src="shopping-cart-logo.png" alt="Shopping Cart" />
                <img src="favourites-logo.png" alt="Favourites" />
            </nav>
            <div>
                {categories.map((category) => (
                    <div key={category.id}>
                        <h2>{category.name}</h2>
                        <div className="product-container">
                            {products
                                .filter((product) => product.category === category.name)
                                .map((product) => (
                                    <div key={product.id} className="product">
                                        <h3>{product.name}</h3>
                                        <button
                                            onClick={() => toggleLike(product)}
                                            className={product.liked ? 'liked' : ''}
                                        >
                                            {product.liked ? 'Unlike' : 'Like'}
                                        </button>
                                        <button onClick={() => addToCart(product)}>
                                            Add to Cart
                                        </button>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <h2>Favourites</h2>
                <div className="product-container">
                    {likedProducts.map((product) => (
                        <div key={product.id} className="product">
                            <h3>{product.name}</h3>
                            <button onClick={() => toggleLike(product)} className="liked">
                                Unlike
                            </button>
                            <button onClick={() => addToCart(product)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h2>Shopping Cart</h2>
                <div className="product-container">
                    {cartItems.map((product) => (
                        <div key={product.id} className="product">
                            <h3>{product.name}</h3>
                            <button onClick={() => toggleLike(product)}>
                                {product.liked ? 'Unlike' : 'Like'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default something;
