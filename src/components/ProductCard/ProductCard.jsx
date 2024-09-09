import { CardContainer, ProductImage, ProductName, ProductPrice } from './ProductCard.styled'

function ProductCard({ product }) {
  return (
    <CardContainer>
      <ProductImage src={product.image} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <ProductPrice>${product.price}</ProductPrice>
    </CardContainer>
  )
}

export default ProductCard
