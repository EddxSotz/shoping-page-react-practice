import { useContext } from 'react';
import ShopCartContext from '../store/ShopCartContext.jsx';

export default function Header( {onCartClick} ) {  
  const { cartItems } = useContext(ShopCartContext);
  let cartQuantity = 0;
  
  if( cartItems === undefined){
    cartQuantity = 0;
  }else{
    cartQuantity = cartItems.length;
  }

 return (
    <>
      
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={onCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}
