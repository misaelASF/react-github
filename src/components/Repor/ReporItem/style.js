import styled from 'styled-components';

export const Content = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     margin: 10px;
     width: 300px;
     padding: 30px;
     box-shadow: 0 4px 10px 4px #0003;
     border-radius: 4px;
     border: none;
     flex: 1;

     #name {
          font-weight: bold;
          color: #333;
          text-transform: uppercase;
     }

     #fork {
          margin-top: 10px;
          font-size: 12px;
     }

     strong {
          text-transform: uppercase;
          color: #7156c1;
          font-weight: 900;
          border-bottom: #7156c1;
          margin-bottom: 10px;
     }

     p {
          text-transform: uppercase;
          text-align: center;
          font-size: 14px;
     }

     #desc {
          text-align: center;
          font-size: 14px;
     }
`;