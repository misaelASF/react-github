import React from 'react';
import { Container } from './style';

const Form = ({ user, ChangeUser, Submit, error }) => (
    <Container>
         <p>{ error }</p>
        <h1>api do github (reactjs)</h1>
        <form action="" onSubmit={Submit}>
           <input 
           placeholder="Digite o nome do usuário"
           onChange={ChangeUser}
           value={user} />
           <button type="submit">enviar</button>
        </form>
    </Container>
)

export default Form;