import React from "react";
import './Shoe.css';

const Shoe = (props) => {
    const {shoe, handleAddToCart} = props;
    const {name, picture, price} = shoe;
    // console.log(props);
    
    return(
        <div className="shoe">
            <img src={picture} alt="" />
            <div className="shoe-information">
            <p className="shoe-name">{name}</p>
            <p>Price: ${price}</p>
            </div>
            <button onClick={() => handleAddToCart(shoe)} className="btn-cart">
                Add to Cart
            </button>
        </div>
    );
};


export default Shoe;