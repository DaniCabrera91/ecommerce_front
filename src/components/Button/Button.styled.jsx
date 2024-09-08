import styled from 'styled-components';

export const ButtonStyled = styled.button`
  background-color: ${({ theme }) => (theme === 'dark' ? '#3498db' : '#2980b9')};
  color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#fff')};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => (theme === 'dark' ? '#2980b9' : '#1f6d9f')};
  }

  &:disabled {
    background-color: #bdc3c7;
    cursor: not-allowed;
  }
`;
