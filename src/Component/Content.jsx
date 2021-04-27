import React, {} from 'react';
import styled from 'styled-components';
import desktop from '../Images/desktop.png'
import serber from '../Images/serber.png';
import one_PC from '../Images/one_PC.png';
import labtap from '../Images/labtap.png';
import moniter from '../Images/moniter.png';
import tablePC from '../Images/tablePC.png';

const Container = styled.div`
    width : 1350px;
    height : 600px;
    margin : 0 auto;
    display : flex;
`;

const Side = styled.div`
    width : 150px;
    height : 100%;
    background-color : #eeeeee;
`;

const Screen = styled.div`
    width : 1050px;
    height : 100%;
    background-color : pink;
`;

const Left = [
    {
        img : desktop,
        title : "데스크탑"
    },
    {
        img : serber,
        title : "테이블PC"
    },
    {
        img : one_PC,
        title : "일체형"
    }
]

const Right = [
    {
        img : labtap,
        title : "노트북"
    },
    {
        img : moniter,
        title : "모니터"
    },
    {
        img : tablePC,
        title : "서버"
    }
]

const Logo = styled.div`
    width : 100%;
    height : 200px;
    border-bottom : 1px solid black;
    display: flex;
    flex-direction : column;
    justify-content: center;
    align-items: center;
    &:last-child {
        border-bottom : none
    }
`;

const Img = styled.img`
    width : 80px;
    height : 80px;
    display : block;
`;

const Content = () => {
    return (
        <Container>
            <Side>
                {Left.map(list => (
                    <Logo>
                        <Img src={list.img}/>
                        <h2>{list.title}</h2>
                    </Logo>
                ))}
            </Side>
            <Screen>

            </Screen>
            <Side>
                {Right.map(list => (
                    <Logo>
                        <Img src={list.img}/>
                        <h2>{list.title}</h2>
                    </Logo>
                ))}
            </Side>
        </Container>
    );
}

export default Content;