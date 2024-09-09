import styled from 'styled-components';

export const ButtonStyled = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.buttonText};
  border: none;
  padding: 0.5rem 1rem;
  margin: 1rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.highlight};
  }

  &:disabled {
    background-color: #bdc3c7;
    cursor: not-allowed;
  }
`;
