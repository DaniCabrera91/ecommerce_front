import styled from 'styled-components';

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 10px;
  max-width: 600px;
  margin: 2rem auto;
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};

  span {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;
