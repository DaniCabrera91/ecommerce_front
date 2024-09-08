import React, { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../../context/ProductsContext/ProductsState';
import { ProductsGrid, ProductCardContainer, ProductImage, ProductName, ProductPrice, AddToCartButton } from './HomeProducts.styled';

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
    <ProductsGrid>
      {products.map(product => (
        <ProductCardContainer key={product.id}>
          <ProductImage src={product.image || "/src/components/Products/default-image.jpg"} alt={product.productName} />
          <ProductName>{product.productName}</ProductName>
          <ProductPrice>{`$${product.price.toFixed(2)}`}</ProductPrice>
          <AddToCartButton onClick={() => addCart(product)}>Add to Cart</AddToCartButton>
        </ProductCardContainer>
      ))}
    </ProductsGrid>
  );
};

export default HomeProducts;
