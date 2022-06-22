import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Shoe from "../Shoes/Shoe";
import './Shop.css';

const Shop = () => {
    const [shoes, setShoes] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setShoes(data))
    },[])

    const handleAddToCart = (shoe)=>{
        // console.log(shoe);
        const newCart = [...cart, shoe];
        setCart(newCart);
    }
    return(
        <div className="container">
            <div className="products-container">
                {
                    shoes.map(shoe=> <Shoe key={shoe.id} shoe={shoe}
                        handleAddToCart={handleAddToCart}
                    ></Shoe>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};


export default Shop;