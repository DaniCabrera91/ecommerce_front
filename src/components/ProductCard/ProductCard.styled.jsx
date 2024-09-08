import styled from 'styled-components';

export const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  width: 200px;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const ProductName = styled.h3`
  font-size: 1.2rem;
  margin: 0.5rem 0;
`;

export const ProductPrice = styled.p`
  color: #2ecc71;
  font-size: 1rem;
  font-weight: bold;
`;
