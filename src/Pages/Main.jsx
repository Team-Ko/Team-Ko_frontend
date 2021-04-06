import React, {} from 'react';
import styled from 'styled-components';
import Header from '../Component/Header';
import Slide from '../Component/Slide';

const Container = styled.div`
    width : 100%;
    height: 100vh;
`;

const Main = () => {
    return(
        <Container>
            <Header />
            <Slide />
        </Container>
    );
}

export default Main;