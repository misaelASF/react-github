import styled from 'styled-components';

export const Container = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     width: 300px;
     box-shadow: 0 5px 20px 5px #0003;
     margin-top: 50px;
     border-radius: 5px;

     img {
         width: 100%;
         height: 250px;
         border-radius: 5px;
     }

     h2 {
         text-transform: uppercase;
         color: #333;
         padding: 10px;
         font-size: 17px;
         text-align: center;
     }

     span {
         text-align: center;
         font-size: 16px;
         margin-bottom: 10px;
     }

     a {
       text-decoration: none;
       color: #344889;
       margin-bottom: 10px;
     }

     hr {
         border-bottom: 2px solid #000;
         width: 95%;
         margin-bottom: 5px;
     }
     
     a:hover {
         opacity: 0.9;
     }

     strong {
         margin-bottom: 10px;
         color: #f00
     }

     #git {
         text-transform: uppercase;
         background: #5671c1;
         color: #fff;
         height: 38px;
         padding: 0 110px;
         display: flex;
         align-items: center;
         justify-content: center;
         border-radius: 5px;
     }
`;