import React from 'react';
import { distanceInWords } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Content } from './style';

const Repor = ({ repo }) => 
(
    <Content>
        <span id="name">{repo.name}</span>
        <span id="fork">{repo.forks}</span>
        <span id="desc">{repo.description}</span>
        <strong>{repo.language}</strong>
        <p>há {" "}{ distanceInWords(repo.created_at, new Date(), 
            { locale: pt }
        )}</p>
    </Content>
);

export default Repor;