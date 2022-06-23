import React, { useEffect, useState } from "react";

import Shoe from "../Shoes/Shoe";
import Cart from "../Cart/Cart";
import './Shop.css';

const Shop = () => {
    const [shoes, setShoe] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setShoe(data))
    },[])

    const handleAddToCart = (name)=>{
        
        if(cart.length >= 4)
        {
            alert('please select less than 5');
        }
        else{
            setCart([...cart, name]);
        }
    }


    
    const handleCartRemove = () =>{
        setCart([]);
    }
    const choseOne = () =>{
        const randomNumber = (Math.floor(Math.random() * (cart.length-1)));
        alert(cart[randomNumber]);
    }
    return(
        <div className="container">
            <div className="products-container">
                {
                    shoes.map(shoe=> <Shoe 
                        key={shoe.id} shoe={shoe}
                        handleAddToCart={handleAddToCart}                       
                        ></Shoe>)
                }
            </div>
            <div className="cart-container">
                <Cart 
                choseOne ={choseOne}
                removeItem ={handleCartRemove}
                cart={cart}
                ></Cart>
                
            </div>
        </div>
    );
};


export default Shop;



