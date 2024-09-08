import styled from 'styled-components';

export const HomeViewContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.large};
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const HomeViewSubtitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;
