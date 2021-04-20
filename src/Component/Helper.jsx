import React, {} from 'react';
import styled from 'styled-components';
import driver from '../Images/driver.png';
import technics from '../Images/technics.png';
import ebook from '../Images/ebook.png';
import trophy from '../Images/trophy.png';

const Container = styled.div`
    width : 80%;
    height : 450px;
    background-color: white;
    margin : 0 auto;
    display: flex;
`;

const Logo = styled.div`
    width : 25%;
    height : 100%;
    background-color: white;
    text-align: center;
    display: flex;
    flex-direction : column;
    justify-content: center;
    align-items: center;
`;

const Img = styled.img`
    width : 90px;
    height : 90px;
    display : block;
`;



const Helper = () => {
    const List = [
        {
            img : driver,
            title : '드라이버 다운로드',
            content : '드라이버를 다운로드',
            content_2 : '하실 수 있습니다.'
        },
        {
            img : technics,
            title : 'A/S 센터 위치',
            content : '가까운 TG 서비스센터를',
            content_2 : '찾아 보실 수 있습니다.'
        },
        {
            img : ebook,
            title : '웹 카탈로그',
            content : 'E-Book으로 편리하게',
            content_2 : '제품 소개 자료를 보실 수 있습니다.'
        },
        {
            img : trophy,
            title : '수상경력',
            content : 'TG삼보의 수상기록들을',
            content_2 : '보실 수 있습니다'
        }
    ]
    return(
        <Container>
            {List.map(list => (
                <Logo>
                    <Img src={list.img}/>
                    <br/>
                    <br/>
                    <h2>{list.title}</h2>
                    <br/>
                    <p>{list.content}</p>
                    <p>{list.content_2}</p>
                    </Logo>
            ))}
        </Container>
    );
} 

export default Helper;