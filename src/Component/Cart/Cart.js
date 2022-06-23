import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove} from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = (props) =>{
    const {cart,handleCartRemove,choseOne} = props;
    let total = 0;
    for(const shoe of cart){
        total = total + shoe.price;
    }
    const tax = parseFloat((total * 0.01).toFixed(2));
 
    return(
        <div className="cart">
            <h4>Order Summary</h4>
            <div>{cart.length === 0 && <div>Cart is Empty</div>}
            </div>
            <br />
            {/* {
                cart.map((shoe) => {shoe})
            } */}
            <br />
            {
                cart.map(cart =>(
                    <div className="cart-items">
                        <div><img src={cart.picture} alt="" /></div>
                        <div className="name">{cart.name}</div>
                        
                        <div className="addToRemove">
                            <button>
                            +
                            </button>
                            <button>
                            <FontAwesomeIcon icon={faRemove}></FontAwesomeIcon>
                            </button>
                        </div>
                    </div>
                ))
            }
            <p>Selected Items: {cart.length}</p>
            <p>Total price: ${total}</p>
            <p>Tax: {tax}</p><br />
            
            <button onClick={choseOne}>Choose one for me</button> <br />
            <button onClick={handleCartRemove}> Clear Cart</button>
            
            <br />
            <div>
                <button className="checkout" onClick={() => alert('Implement Checkout')}>
                    Checkout
                </button>
            </div>
            
            
        </div>
    );
};

export default Cart;



