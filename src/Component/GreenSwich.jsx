import React, { } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width : 88.5%;
    height : 500px;
    margin : 0 auto;
    display : flex;

`;

const Left = styled.div`
width : 50%;
height : 500px;

position: relative;


& > iframe {
    display : block;
    margin : auto;
    width : 100%;
    height : 100%;
    position: relative;
}
`;


const GreenSwich = () => {
    return (
        <Container>
            <Left><iframe src="https://www.youtube.com/embed/2T6eUC2cpyU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Left>
        </Container>
    );
}

export default GreenSwich;