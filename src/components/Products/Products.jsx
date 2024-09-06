import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../../context/ProductsContext/ProductsState';

const Products = () => {
  const { getProducts, products, addCart, cart } = useContext(ProductsContext);
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

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  if (loading) return <div>Loading products...</div>;

  return (
    <>
      {products && products.map((product) => (
        <div key={product.id}>
          <span>{product.productName} </span>
          <span>{product.price !== undefined ? product.price.toFixed(2) : 'N/A'}</span>
          <button onClick={() => addCart(product)}>Add Cart</button>
        </div>
      ))}
    </>
  );
};

export default Products;
