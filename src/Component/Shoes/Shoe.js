import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Shoe.css';


const Shoe = (props) => {
    const {shoe, handleAddToCart} = props;
    const {name, picture, price} = shoe;
    
    
    return(

        <div className='shoe'>
            <img src={picture} alt=""/>
            
            <div className="shoe-information">
            <h2 className="shoe-name">{name}</h2>
            <h3>$ {price}</h3>
            </div>
            <button className="btn-cart" onClick={()=>handleAddToCart(name)}> <p className="btn-text">Add to Cart</p>
            <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>


       
    );
};


export default Shoe;

