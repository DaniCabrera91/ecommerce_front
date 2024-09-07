import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../../context/ProductsContext/ProductsState';
import './HomeProducts.scss'; // Asegúrate de agregar estilos en este archivo

const HomeProducts = () => {
  const { getProducts, products, addCart } = useContext(ProductsContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        await getProducts();
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [getProducts]);

  if (loading) return <div>Loading products...</div>;

  return (
    <div className="home-products-container">
      {products && products.map((product) => (
        <div key={product.id} className="home-product-card">
          <img src={product.image || "/src/components/Products/default-image.jpg"} alt={product.productName} className="home-product-image" />
          <h3 className="home-product-name">{product.productName}</h3>
          <p className="home-product-price">{product.price !== undefined ? `$${product.price.toFixed(2)}` : 'N/A'}</p>
          <button onClick={() => addCart(product)} className="home-add-to-cart-button">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default HomeProducts;
