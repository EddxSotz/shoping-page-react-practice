import {useContext, useState} from 'react';
import {ShopCartContext} from '../store/ShopCartContext.jsx';

export default function CartContent({removeItem, updateItemQuantity}) {
  const { cartItems } = useContext(ShopCartContext);
  

  const handleQuantityIncrease = (item) => {
    const quantity = item.quantity + 1;
    updateItemQuantity(item, quantity);
  }

  const handleQuantityDecrease = (item) => {
    let quantity = 0;
    if(item.quantity === 1){
      removeItem(item);      
    } else {
      quantity = item.quantity - 1;
    }
    updateItemQuantity(item, quantity);    
  }

  return (
    <div id="cart">
      <ul>
        {cartItems.map((item, index) => {
          return (
            <div id="cart-items" key={index}>          
            <li key={index} id="cart-items-li">
              <div>
                <img src={item.image} alt={item.name} id="cart-items-img"/>
                <h3>{item.title}</h3>
                <p>{item.price}</p>                
                  <p>Quantity: {item.quantity}</p>                
                <div>
                  <button onClick={() => removeItem(item)}>Remove</button>
                  <button  onClick={ ()=> handleQuantityIncrease(item)}>+</button>
                  <button onClick={ ()=> handleQuantityDecrease(item)}>-</button>
                </div>            
              </div>
            </li>
            </div>           
          );
        })}
      </ul>      
    </div>
  );
}
