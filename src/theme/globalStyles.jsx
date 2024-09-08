import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Reset CSS */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Global Styles */
  html, body {
    font-family: 'Arial', sans-serif;
    font-size: ${({ theme }) => theme.fontSize.base};
    line-height: 1.6;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    height: 100%;
    width: 100%;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.heading};
  }

  p {
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
  }
`;

export default GlobalStyles;
