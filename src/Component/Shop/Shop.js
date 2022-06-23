import React, { useEffect, useState } from "react";

import Shoe from "../Shoes/Shoe";
import Cart from "../Cart/Cart";
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
        if(cart.length >= 4)
        {
            alert('please select less than 5');
        }
        else{
            setCart([...cart, shoe]);
        }
    }

    // const onRemove = (id) => {
    //     const remove = carts.filter((cart) =>cart.id !==id);
    //     setCarts(remove);
        
    // }
    
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
                        
                        // onRemove={onRemove}
                        // handleCartClearance={handleCartClearance}
                    ></Shoe>)
                }
            </div>
            <div className="cart-container">
                <Cart 
                choseOne ={choseOne}
                removeAll ={handleCartRemove}
                cart={cart}
                ></Cart>
                
            </div>
        </div>
    );
};


export default Shop;



