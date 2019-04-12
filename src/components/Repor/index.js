import React from 'react';
import ReporItem from './ReporItem';

import { Container } from './style';

const Repor = ({ repos }) => 
(
    <Container>
        { repos.map(repo => (
            <ReporItem repo={repo} key={repo.id} />
        )) }
    </Container>
);

export default Repor;