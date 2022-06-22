import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
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
                <p className="btn-text">Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                
            </button>
        </div>
    );
};


export default Shoe;