import React, { } from 'react';
import styled from 'styled-components';
import Slide1 from '../Images/slide1.png';
import Slide2 from '../Images/slide2.png';
import Slide3 from '../Images/slide3.png';
import Slide4 from '../Images/slide4.png';
import Slide5 from '../Images/slide5.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        right: "5vw",
        top: "50%"
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        left: "5vw",
        top: "50%",
        zIndex: '1'
      }}
      onClick={onClick}
    />
  );
}

const Container = styled.div`
    width: 1920px;
    height: 500px;
    text-align: center;
    
`;


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
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
  return (
    <Slider {...settings}>
      <Container> <img src={Slide1} alt='image1'/></Container>
      <Container> <img src={Slide2} alt='image2'/></Container>
      <Container> <img src={Slide3} alt='image3'/></Container>
      <Container> <img src={Slide4} alt='image4'/></Container>
      <Container> <img src={Slide5} alt='image5'/></Container>
    </Slider>
  );
}

export default Slide;