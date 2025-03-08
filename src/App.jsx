import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import ShopCartContext from './store/ShopCartContext.jsx';
import { useState } from 'react';
import CartModal from './components/CartModal.jsx';
import CartContent from './components/CartContent.jsx';

function App() {

  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    const updatedProduct={...product, quantity: 1};

    setCartItems((prevCartItems) => {
      return [...prevCartItems, updatedProduct];
    });
    setIsCartOpen(true);   
  }

  const handleOpenCartClick = () => {
    setIsCartOpen(true);
  }

  const handleRemoveItem = (item) => {
    setCartItems((prevCartItems) => {
      return prevCartItems.filter((cartItem) => cartItem.id !== item.id);
    });
  }

  const handleUpdateItemQuantity = (item, newQuantity) => {
    setCartItems((prevCartItems) => {
      return prevCartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: newQuantity };
        } else {
          return cartItem;
        }
      });
    });
  }

  return (
    <>
      <ShopCartContext.Provider value={{cartItems}}>  
        <Header onCartClick={handleOpenCartClick}/>      
        <Shop onAddToCart={handleAddToCart}/>
        {isCartOpen && 
        <CartModal onClose={() => setIsCartOpen(false)} cartModalState={isCartOpen}>
          <CartContent removeItem={handleRemoveItem} updateItemQuantity={handleUpdateItemQuantity}/>
        </CartModal>}
      </ShopCartContext.Provider>
    </>
  );
}

export default App;
