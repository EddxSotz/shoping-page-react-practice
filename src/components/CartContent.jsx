import {useContext} from 'react';
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
    <>
      <ul id="cart">
        {cartItems.map((item, index) => {
          return (
            <div id="cart-items" key={index}>          
              <li key={index} >
                <div id="cart-items-li">
                  <img src={item.image} alt={item.name} id="cart-items-img"/>
                  <div className="text-formatting">
                    <h3>{item.title}</h3>
                    <p>{item.price}</p>                
                    <p>Quantity: 
                      <span>
                      <button onClick={ ()=> handleQuantityIncrease(item)} className='cart-buttons'>+</button>
                      </span>
                      {item.quantity}
                      <span>
                        <button onClick={ ()=> handleQuantityDecrease(item)}className='cart-buttons'>-</button>
                      </span>
                    </p>                    
                    <button onClick={() => removeItem(item)} className='cart-buttons'>Remove</button>                    
                  </div>                                                
                </div>                
              </li>
            </div>           
          );
        })}
      </ul>      
    </>
  );
}
