import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Shoe from "../Shoes/Shoe";
import './Shop.css';

const Shop = () => {
    const [shoes, setShoes] = useState([]);
    const [carts, setCarts] = useState([]);
    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setShoes(data))
    },[])

    const handleAddToCart = (shoe)=>{
        // console.log(shoe);
        const newCart = [...carts, shoe];
        setCarts(newCart);
    }


    
    // const onRemove = (shoe) =>{
    //     const exist = carts.find((x)=> x.id === shoe.id);
    //     if(exist.qty === 1){
    //         setCarts(carts.filter((x) => x.id !== shoe.id));
    //     }
    //     else{
    //         setCarts(
    //             carts.map((x) =>
    //             x.id === shoe.id ? {...exist, qty: exist.qty -1} : x
    //             )
    //         );
    //     }
    // };

    const onRemove = (id) => {
        const remove = carts.filter((cart) =>cart.id !==id);
        setCarts(remove);
        
    }
    
    const handleCartClearance = () =>{
        setCarts([]);
    }
    return(
        <div className="container">
            <div className="products-container">
                {
                    shoes.map(shoe=> <Shoe key={shoe.id} shoe={shoe}
                        handleAddToCart={handleAddToCart}
                        onRemove={onRemove}
                        handleCartClearance={handleCartClearance}
                    ></Shoe>)
                }
            </div>
            <div className="cart-container">
                <Cart carts={carts}></Cart>
                
            </div>
        </div>
    );
};


export default Shop;