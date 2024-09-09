import styled from 'styled-components'

export const AdminContainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => (theme === 'dark' ? '#333' : '#f4f4f4')};
  color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};
`

export const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

export const ProductItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid ${({ theme }) => (theme === 'dark' ? '#444' : '#ddd')};
  border-radius: 4px;
  background-color: ${({ theme }) => (theme === 'dark' ? '#444' : '#fff')};
  width: calc(33% - 20px);

  @media (max-width: 768px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
`

export const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`


