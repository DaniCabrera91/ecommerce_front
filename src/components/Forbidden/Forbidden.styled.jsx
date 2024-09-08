import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ForbiddenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
`;

export const ForbiddenTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #dc3545;
  margin-bottom: 20px;
`;

export const ForbiddenMessage = styled.p`
  font-size: 18px;
  color: #6c757d;
  margin-bottom: 30px;
`;

export const StyledLink = styled(Link)`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
