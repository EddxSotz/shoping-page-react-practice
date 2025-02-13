import {useContext} from 'react';
import {ShopCartContext} from '../store/ShopCartContext.jsx';

export default function CartContent({removeItem, updateItemQuantity}) {
  const { cartItems } = useContext(ShopCartContext);
  
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
                {item.quantity ? (
                  <p>Quantity: {item.quantity}</p>
                ) : (
                  <p>Quantity: 1</p>
                )}
                <div>
                  <button onClick={() => removeItem(item)}>Remove</button>
                  <button onClick={() => updateItemQuantity(item, 1)}>+</button>
                  <button onClick={() => updateItemQuantity(item, -1)}>-</button>
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
