import React, {} from 'react';
import styled from 'styled-components';
import Header from '../Component/Header';
import Slide from '../Component/Slide';
import Helper from '../Component/Helper';

const Container = styled.div`
    width : 100%;
    height: 100vh;
`;

const Main = () => {
    return(
        <Container>
            <Header />
            <Slide />
            <Helper />
        </Container>
    );
}

export default Main;