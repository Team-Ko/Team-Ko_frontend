import React, {} from 'react';
import styled from 'styled-components';
import Header from '../Component/Header';
import Slide from '../Component/Slide';
import Helper from '../Component/Helper';
import GreenSwich from '../Component/GreenSwich';

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
            <GreenSwich />
        </Container>
    );
}

export default Main;