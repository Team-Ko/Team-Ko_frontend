import React, {} from 'react';
import styled from 'styled-components';
import Slide1 from '../Images/slide1.png';
import Slide2 from '../Images/slide2.png';
import Slide3 from '../Images/slide3.png';
import Slide4 from '../Images/slide4.png';
import Slide5 from '../Images/slide5.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Container = styled.div`
    width: 100%;
    height: 500px;
    overflow : hidden;
    text-align: center;
    background-color : #DFE1E5;
    width: 100%;
`;


const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    arrows: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    appendDots: (dots) => (
        <div
          style={{
            padding: "50px",
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
    };

const Slide = () => {
    return(
            <Slider {...settings}>
                <Container><img src={Slide1} alt="모니터"/></Container>
                <Container><img src={Slide2} alt="모니터"/></Container>
                <Container><img src={Slide3} alt="모니터"/></Container>
                <Container><img src={Slide4} alt="모니터"/></Container>
                <Container><img src={Slide5} alt="모니터"/></Container>
            </Slider>
    );
}

export default Slide;