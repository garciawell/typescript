import { createGlobalStyle } from 'styled-components';
import githubBg from '../assets/img/git-bg.svg';

export default createGlobalStyle`

  * {
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box
  }

  body, input, button {
    font: 16px sans-serif;
  }

  body{
    background: #f0f0f5 url(${githubBg}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
  }



  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }

`;
