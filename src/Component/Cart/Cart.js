import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove} from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = ({cart, handleCartRemove, choseOne}) =>{
    

 
    return(
        <div className="cart">
            <h4>Order Summary</h4>
            <br />
            {
                cart.map((shoe) =><h4 >{shoe}</h4>)
            }
            <br/>
            <div className=''>
            <button onClick={choseOne} className='cart-btn'>Choose one for me</button><br />
            <button onClick={handleCartRemove} className='cart-btn'>Remove all</button>
            </div>
            
            
        </div>
    );
};

export default Cart;



