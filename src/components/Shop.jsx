import { DUMMY_PRODUCTS } from '../dummy-products.js';

export default function Shop({ onAddToCart }) {

    return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>
      <ul id="products">
      {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}> 
          <article className="product">
            <img src={product.image} alt={product.title} />
            <div className="product-content">
              <div>
                <h3>{product.title}</h3>
                <p className='product-price'>${product.price}</p>
                <p>{product.description}</p>
              </div>
              <p className='product-actions'>
                <button onClick={ () => onAddToCart(product)}>Add to Cart</button>
              </p>
            </div>
          </article>
          </li>
        ))}      
      </ul>
    </section>
  );
}
