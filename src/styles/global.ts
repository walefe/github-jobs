import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    background: #121214;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
  }
`;
