import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import Product from './components/Product.jsx';
import { ShopCartProvider } from './store/ShopCartContext.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';

function App() {
  

  return (
    <>
    <ShopCartProvider>
      <Header/>      
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}> 
          <Product {...product} />
          </li>
        ))}
      </Shop>
    </ShopCartProvider>
    </>
  );
}

export default App;
