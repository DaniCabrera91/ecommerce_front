import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => (theme === 'dark' ? '#333' : '#fff')};
  color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
  border-top: 1px solid ${({ theme }) => (theme === 'dark' ? '#444' : '#ddd')};
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FooterLink = styled(Link)`
  color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
  text-decoration: none;
  margin: 0 10px;

  &:hover {
    color: ${({ theme }) => (theme === 'dark' ? '#ffeb3b' : '#ff9800')};
  }

  svg {
    margin-right: 5px;
  }
`;

export const FooterText = styled.p`
  margin: 0;
`;
