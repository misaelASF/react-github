import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   * {
       margin: 0;
       padding: 0;
       box-sizing: border-box;
   }

   body {
       font-size: 16px;
       font-family: Arial, Helvetica, sans-serif;
       -webkit-font-smoothing: antialiased;
       text-rendering: optimizeLegibility;
   }

   html, body, #root {
       height: 100%;
   }

   #card {
       display: flex;
       justify-content: center;
       align-items: center;
   }
`;