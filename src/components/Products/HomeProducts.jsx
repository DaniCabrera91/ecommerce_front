import React, { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../../context/ProductsContext/ProductsState';
import { UserContext } from '../../context/UserContext/UserState'; // Importa el contexto del usuario
import Button from '../Button/Button'; // Asegúrate de usar tu componente Button
import { ProductsGrid, ProductCardContainer, ProductImage, ProductName, ProductPrice } from './HomeProducts.styled';

const HomeProducts = () => {
  const { getProducts, products, addCart } = useContext(ProductsContext);
  const { token } = useContext(UserContext); // Aquí tomas el token del usuario
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
    <ProductsGrid>
      {products.map(product => (
        <ProductCardContainer key={product.id}>
          <ProductImage src={product.image || "/src/components/Products/default-image.jpg"} alt={product.productName} />
          <ProductName>{product.productName}</ProductName>
          <ProductPrice>{`$${product.price.toFixed(2)}`}</ProductPrice>
          <Button onClick={() => addCart(product)} disabled={!token}>
            {token ? 'Add to Cart' : 'Login to Purchase'}
          </Button>
        </ProductCardContainer>
      ))}
    </ProductsGrid>
  );
};

export default HomeProducts;
