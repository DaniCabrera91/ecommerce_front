import styled from 'styled-components';

export const ProductsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.small};
  justify-content: space-evenly;
  padding: ${({ theme }) => theme.spacing.small};
`;

export const ProductCardContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border}; // Asegúrate de definir el color de borde en el tema
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.large};
  padding-bottom: 1rem;
  width: 15rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.cardBackground}; // Usa el color del fondo de la tarjeta del tema
  transition: transform 0.3s ease;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  &:hover {
    transform: scale(1.05);
  }

  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  margin: ${({ theme }) => theme.spacing.small};
`;

export const ProductName = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.text}; // Asegúrate de que el color del texto sea visible en ambos temas
`;

export const ProductPrice = styled.p`
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.colors.primary}; // Asegúrate de que el color del precio sea visible en ambos temas
`;

export const AddToCartButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.buttonText};
  padding: ${({ theme }) => theme.spacing.base} ${({ theme }) => theme.spacing.large};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.highlight};
  }
`;
