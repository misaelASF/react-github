import styled from 'styled-components';

export const Container = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     margin-top: 50px;

     h1 {
         color: #333;
         text-transform: uppercase;
         border-bottom: 2px solid #333;
         font-size: 20px;
     }

     p {
         color: #f00;
         text-transform: uppercase;
         font-size: 16px;
         margin-bottom: 10px;
     }

     form {
         display: flex;
         justify-content: center;
         align-items: center;
         flex-direction: column;
         width: 300px;
     }

     form input {
        height: 48px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 16px;
        padding: 0 20px;
        margin-top: 30px;
     }

     form button {
        height: 48px;
        background: #3471c1;
        border-radius: 4px;
        border: none;
        width: 80%;
        font-size: 16px;
        padding: 0 20px;
        margin-top: 15px;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
        text-transform: uppercase;
     }

     form button:hover {
         opacity: 0.19;
         transition: all 0.5s ease;
     }
`;