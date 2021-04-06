import React, {} from 'react';
import styled from 'styled-components';
import Slide1 from '../Images/slide1.png';

const Container = styled.div`
    width: 100%;
    height: 500px;
    overflow : hidden;
    text-align: center;
    background-color : #DFE1E5;
`;

const Slide = () => {
    return(
        <Container>
            <img src={Slide1} alt="모니터"/>
        </Container>
    );
}

export default Slide;