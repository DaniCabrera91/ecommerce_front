import styled from 'styled-components';

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background-color: #f5f5f5;
  border-radius: 10px;
  max-width: 600px;
  margin: 0 auto;
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid #ddd;

  span {
    font-size: 1rem;
    color: #333;
  }
`;

export const CartButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;

  button {
    padding: 0.75rem;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #2980b9;
    }
  }
`;
