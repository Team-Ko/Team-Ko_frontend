import React, {} from 'react';
import styled from 'styled-components';
import Header from '../Component/Header';
import Slide from '../Component/Slide';
import Helper from '../Component/Helper';
import Content from '../Component/Content';
import Footer from '../Component/Footer';

const Container = styled.div`
    width : 1920px;
    height: 100vh;
`;


const Main = () => {
    return(
        <Container>
            <Header />
            <Slide />
            <Helper />
            <Content />
            <Footer />
        </Container>
    );
}

export default Main;