import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import desktop from '../Images/desktop.png'
import serber from '../Images/serber.png';
import one_PC from '../Images/one_PC.png';
import labtap from '../Images/labtap.png';
import moniter from '../Images/moniter.png';
import tablePC from '../Images/tablePC.png';
import contents_image1 from '../Images/contents_image_1.png';
import contents_image2 from '../Images/contents_image_2.png';
import contents_image3 from '../Images/contents_image_3.png';
import contents_image4 from '../Images/contents_image_4.png';
import contents_image5 from '../Images/contents_image_5.png';
import contents_image6 from '../Images/contents_image_6.png';

const Container = styled.div`
    width : 1350px;
    height : 600px;
    margin : 0 auto;
    display : flex;
    z-index : 1;
    border : 1px solid black;
    border-radius : 20px;
`;

const Side = styled.div`
    width : 150px;
    height : 100%;
`;

const Screen = styled.div`
    width : 1050px;
    height : 100%;
    border-left : 1px solid black;
    border-right : 1px solid black;
`;

const Left = [
    {
        img: desktop,
        title: "데스크탑",
        num: 0,
        height: 68.76
    },
    {
        img: serber,
        title: "테이블PC",
        num: 1,
        height: 15.87
    },
    {
        img: one_PC,
        title: "일체형",
        num: 2,
        height: 56.38
    }
]

const Right = [
    {
        img: labtap,
        title: "노트북",
        num: 3,
        height: 64.58
    },
    {
        img: moniter,
        title: "모니터",
        num: 4
        ,
        height: 73.6
    },
    {
        img: tablePC,
        title: "서버",
        num: 5,
        height: 26.18
    }
]

const ScreenImage = [
    contents_image1,
    contents_image2,
    contents_image3,
    contents_image4,
    contents_image5,
    contents_image6
]

const Link = [
    "https://www.trigem.co.kr/provide/provide_product_view.jsp?productGubun=DPC&productSeq=476&productNo=",
    "https://www.trigem.co.kr/provide/provide_product_view.jsp?productGubun=TPC&productSeq=428&productNo=",
    "https://www.trigem.co.kr/provide/provide_product_view.jsp?productGubun=DOPC&productSeq=484&productNo=",
    "https://www.trigem.co.kr/provide/provide_product_view.jsp?productGubun=NPC&productSeq=497&productNo=",
    "https://www.trigem.co.kr/provide/provide_product_view.jsp?productGubun=DISP&productSeq=455&productNo=",
    "https://www.trigem.co.kr/provide/provide_product_view.jsp?productGubun=SERV&productSeq=196&productNo=53010669"
]

const Logo = styled.div`
    width : 100%;
    height : 200px;
    display: flex;
    flex-direction : column;
    justify-content: center;
    align-items: center;
    &:last-child {
        border-bottom : none
    }
`;

const ImgBox = styled.div`
    width : 120px;
    height : 120px;
    background-color: #999;
    border-radius : 50%;
    margin : 0 auto;
    display: flex;
    flex-direction : column;
    justify-content: center;
    align-items: center;
    &:hover {
        background-color: skyblue;
        cursor: pointer;
        transition: 0.3s ease-in;    
    }
`;

const LogoImg = styled.img`
    width : 80px;
    display : block;
    user-select: none;
`;

const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

const ScreenImg = styled.img`
    width : 100%;
    height : 100%;

    animation-duration: 0.5s;
    animation-timing-function: ease-in;
    animation-name: ${fadeIn};
     animation-fill-mode: forwards;
`;



const Content = () => {

    const [num, setNum] = useState(0);

    return (
        <Container>
            <Side>
                {Left.map(list => (
                    <Logo onClick={() => setNum(list.num)}>
                        <ImgBox>
                            <LogoImg src={list.img} />
                        </ImgBox>
                        <h2>{list.title}</h2>
                    </Logo>
                ))}
            </Side>
            <Screen>
                <a href={Link[num]}><ScreenImg key={num} src={ScreenImage[num]} alt="Screen" /></a>
            </Screen>
            <Side>
                {Right.map(list => (
                    <Logo onClick={() => setNum(list.num)}>
                        <ImgBox>
                            <LogoImg src={list.img} />
                        </ImgBox>
                        <h2>{list.title}</h2>
                    </Logo>
                ))}
            </Side>
        </Container>
    );
}

export default Content;