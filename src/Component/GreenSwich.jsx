import React, { } from 'react';
import styled from 'styled-components';
import GreenSwichImg from '../Images/GreenSwich.png';
import youtube from '../Images/youtube.png';

const Container = styled.div`
    width : 88.5%;
    height : 500px;
    margin : 0 auto;
    border : 1px solid black;
    display : flex;
`;

const Left = styled.div`
width : 50%;
height : 500px;
border-right : 1px solid black;
background-image: url(${GreenSwichImg});
background-size: 100% 498px;
background-repeat: no-repeat;
opacity: 0.7;
line-height : 500px;
padding-top : 187.5px;
& > img {
    display : block;
    margin : auto;
    width : 125px;
    height : 125px;
    opacity: 1;
    
}
`;

const GreenSwich = () => {
    return (
        <Container>
            <Left><img src={youtube} alt="유튜브"/></Left>
        </Container>
    );
}

export default GreenSwich;