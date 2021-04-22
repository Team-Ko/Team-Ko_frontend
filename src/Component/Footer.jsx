import React, { } from 'react';
import styled from 'styled-components';
import LogoY from '../Images/LogoY.png';
import LogoK from '../Images/LogoK.png';
import LogoF from '../Images/LogoF.png';

const Container = styled.div`
    width : 100%;
    margin : 0 auto;
    margin-top : 100px;
    background-color: #f7f7f7;
    padding-top : 40px;
`;


const Sns = styled.div`
    width : 300px;
    height : 80px;
    margin : 0 auto;
    margin-top : 20px;
    display : flex;
    justify-content : space-between;

    & > a > img {
        width : 60px;
        height : 60px;
    }
`;



const Copyright = styled.div`
    width : 100%;
    height : 170px;
    margin : 0 auto;
    margin-top : 10px;
    text-align: center;
    padding-top : 20px;
    display : flex;
    flex-direction : column;
`;

const CopyrightBold = styled.p`
    font-size : 16px;
    font-weight : 400;
`;

const CopyrightLight = styled.p`
    font-size : 14px;
    font-weight : 300;
`;

const Footer = () => {
    return (
        <Container>
            <Sns>
                <a href="https://www.youtube.com/channel/UCj02qWnwVHXW5C8Vh8cwUmQ" target="_blank" rel="noreferrer"><img src={LogoY} alt='Youtube' /></a>
                <a href="https://pf.kakao.com/_QKxoeV" target="_blank" rel="noreferrer"><img src={LogoK} alt='Kakao' /></a>
                <a href="https://www.facebook.com/TGtrust" target="_blank" rel="noreferrer"><img src={LogoF} alt='Facebook' /></a>
            </Sns>
            <Copyright>
                <CopyrightBold>개인정보 처리방침 | 이메일무단수집거부</CopyrightBold>
                <CopyrightLight>대표이사:이홍선 | 본사: 경기도 안산시 단원구 능안로 98-12(신길동) | 서울사무소:서울시 종로구 구기동 127-1</CopyrightLight>
                <CopyrightLight>제품 및 서비스 문의: 1588-3582 | 조달제품문의: 1666-3510 | 사업자 등록번호: 134-87-00681 | 통신판매신고번호: 제 2012-경기안산-0766호</CopyrightLight>
                <CopyrightBold>Copyright @ TG삼보. All Rights Reserved.</CopyrightBold>
            </Copyright>

        </Container>
    );
}

export default Footer;