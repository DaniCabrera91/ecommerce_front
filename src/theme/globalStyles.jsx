import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  a {
    color: ${(props) => props.theme.colors.text};
    text-decoration: none;
    transition: color 0.3s;
  }

  a:hover {
    color: ${(props) => props.theme.colors.highlight};
  }
`;

export default GlobalStyles;
