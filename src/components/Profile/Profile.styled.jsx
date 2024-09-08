import styled from 'styled-components';

export const ProfileContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 2rem;
  }

  .ant-tabs-nav-list {
    justify-content: center;
  }
`;

export const UserInfo = styled.div`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;

  p {
    font-size: 1rem;
    margin: 0.5rem 0;
  }
`;

export const OrderList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

export const OrderCard = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  background-color: white;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    margin: 0.5rem 0;
  }
`;
