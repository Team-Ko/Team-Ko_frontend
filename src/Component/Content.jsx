import React, {} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width : 80%;
    height : 720px;
    margin : 0 auto;
    background-color: gray;
`;

const Test = styled.div`
height : 500px;
background-color:pink;
`;

const Content = () => {
    return (
        <Container>
            <Test />
        </Container>
    );
}

export default Content;