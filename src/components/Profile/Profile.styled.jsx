import styled from 'styled-components';

export const ProfileContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 2rem;
  }

  .ant-tabs-nav {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  .ant-tabs-tab {
    color: ${({ theme }) => theme.colors.text};
    
    &:hover {
      color: ${({ theme }) => theme.colors.highlight};
    }
  }

  .ant-tabs-tab-active {
    color: ${({ theme }) => theme.colors.primary};
  }

  .ant-tabs-content {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export const UserInfo = styled.div`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.cardBackground};

  p {
    font-size: 1rem;
    margin: 0.5rem 0;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const OrderList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const OrderCard = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  min-height: 150px;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    font-size: 1rem;
    margin: 0.5rem 0;
    color: ${({ theme }) => theme.colors.text};
  }
`;
