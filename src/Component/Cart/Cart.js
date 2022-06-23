import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove} from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = ({carts,onRemove,handleAddToCart,handleCartClearance}) =>{
    let total = 0;
    for(const shoe of carts){
        total = total + shoe.price;
    }
    const tax = parseFloat((total * 0.01).toFixed(2));
    return(
        <div className="cart">
            <h4>Order Summary</h4>
            <div>{carts.length === 0 && <div>Cart is Empty</div>}
            </div>
            {
                carts.map(cart =>(
                    <div className="cart-items">
                        <div><img src={cart.picture} alt="" /></div>
                        <div className="name">{cart.name}</div>
                        <div className="addToRemove">
                            <button  onClick={() => handleAddToCart(cart)}>
                            +
                            </button>
                            <button  onClick={() => onRemove(cart.id)}>
                            <FontAwesomeIcon icon={faRemove}></FontAwesomeIcon>
                            </button>
                        </div>
                    </div>
                ))
            }
            <p>Selected Items: {carts.length}</p>
            <p>Total price: ${total}</p>
            <p>Tax: {tax}</p>
            <div>
                {
                    carts.length >=1 && (
                    <button onClick={handleCartClearance}>
                    Clear Cart
                     </button>
                )}
            </div>
            <div>
                <button className="checkout" onClick={() => alert('Implement Checkout')}>
                    Checkout
                </button>
            </div>
            
        </div>
    );
};

export default Cart;