import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ForbiddenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ForbiddenTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
`;

export const ForbiddenMessage = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 30px;
`;

export const StyledLink = styled(Link)`
  padding: 10px 20px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.buttonText};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;
