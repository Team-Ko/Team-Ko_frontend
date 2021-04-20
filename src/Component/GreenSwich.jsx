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
background-size: 100% 498px;
background-repeat: no-repeat;
padding-top : 187.5px;
position: relative;
&::before {
    content: "";
    background-image: url(${GreenSwichImg});
    opacity: 0.7;
    background-size: cover;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
}
& > a {
    display : block;
    margin : auto;
    width : 125px;
    height : 125px;
    position: relative;
}
& > a > img {
    display : block;
    margin : auto;
    width : 125px;
    height : 125px;
    position: relative;
}
`;

const GreenSwich = () => {
    return (
        <Container>
            <Left><a href="https://www.youtube.com/watch?v=2T6eUC2cpyU"><img src={youtube} alt="유튜브"></img></a></Left>
        </Container>
    );
}

export default GreenSwich;