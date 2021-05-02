import React, { } from 'react';
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
    return (
        <Container>
            <Img>
                <img src={Image} alt="로고" style={{ paddingTop: "30px" }} />
            </Img>
            <Menu>
                <MenuButton style={{ marginLeft: "5.7%" }}> <a href="https://www.trigem.co.kr/company/company_history.jsp">회사소개</a></MenuButton>
                <MenuButton><a href="https://www.trigem.co.kr/provide/provide_product_list.jsp?productGubun=DPC">제품소개</a></MenuButton>
                <MenuButton><a href="https://www.trigem.co.kr/customer/remote/m1_remote_1.jsp">원격지원 A/S 신청</a></MenuButton>
                <MenuButton><a href="https://www.trigem.co.kr/customer/m1_sub_notice_list.jsp">공지사항</a></MenuButton>
                <MenuButton><a href="https://www.trigem.co.kr/customer/m1_faq.jsp?category=1">고객지원</a></MenuButton>
                <MenuButton style={{ marginRight: "5.7%" }}><a href="https://www.trigem.co.kr/customer/m1_faq_email_140930.jsp">메일문의</a></MenuButton>
            </Menu>
        </Container>
    );
}

export default Header;