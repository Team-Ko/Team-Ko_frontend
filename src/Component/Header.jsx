import React, {} from 'react';
import styled from 'styled-components';
import Image from '../Images/TG삼보.png';

const Container = styled.div`
    width : 100%;
    height : 170px;
    text-align: center;
`;

const Img = styled.div`
    width : 100%;
    height : 120px;
    background-color: white;
    margin : 0px auto;
`

const Menu = styled.div`
    width : 100%;
    height : 50px;
    background-color: #707070;
    display : flex;
`;

const MenuButton = styled.div`
    width : 280px;
    height: 50px;
    color : white;
    font-size : 20px;
    line-height : 50px;
    &:hover {
        background-color : #00a7e1;
        color : black;
    }
`;

const Header = () => {
    return(
        <Container>
            <Img>
            <img src={Image} alt="로고" style={{paddingTop:"30px"}}/>
            </Img>
            <Menu>
                <MenuButton style={{marginLeft:"110px"}}>회사소개</MenuButton>
                <MenuButton>제품소개</MenuButton>
                <MenuButton>사업분야</MenuButton>
                <MenuButton>공지사항</MenuButton>
                <MenuButton>고객지원</MenuButton>
                <MenuButton>메일문의</MenuButton>
            </Menu>
        </Container>
    );
}

export default Header;