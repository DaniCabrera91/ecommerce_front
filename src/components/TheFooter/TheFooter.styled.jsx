import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.headerFooterBackground};
  color: ${({ theme }) => theme.colors.text};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
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
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  margin: 0 10px;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.highlight};
  }

  svg {
    margin-right: 5px;
  }
`;

export const FooterText = styled.p`
  margin: 0;
`;

export const FooterGithubLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;

  a {
    margin: 0 15px;
  }
`;
