import React from 'react';
import { Container } from './style';

const Card = ({ result }) =>
(
    <Container>
        <img src={result.avatar_url} alt="Avatar" />
        <h2>{result.name}</h2>
        <hr />
        <span>{result.bio}</span>
        <a target="_blank" rel="noopener noreferrer" href={result.blog}>{result.blog}</a>
        <a id="git" target="_blank" rel="noopener noreferrer" href={result.html_url}>github</a>
    </Container>
);

export default Card;