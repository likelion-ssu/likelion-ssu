import Slider from "react-slick";
import "../styles/Recruit/slick.css";
import "../styles/Recruit/slick-theme.css";
import styled from "styled-components";
import {
  gidi0,
  gidi1,
  gidi2,
  gidi3,
  gidi4,
  febe0,
  febe1,
  febe2,
  febe3,
  febe4,
} from "../assets/Recruit/index";

const AboutUs = () => {
  const gidiImages = [gidi0, gidi1, gidi2, gidi3, gidi4];
  const febeImages = [febe0, febe1, febe2, febe3, febe4];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <StAboutContainer>
      <StImageWrapper>
        <Slider {...settings}>
          {gidiImages.map((img, index) => (
            <StImage key={index} src={img} alt={`gidi${index}`} />
          ))}
        </Slider>
      </StImageWrapper>
      <StImageWrapper>
        <Slider {...settings}>
          {febeImages.map((img, index) => (
            <StImage key={index} src={img} alt={`febe${index}`} />
          ))}
        </Slider>
      </StImageWrapper>
    </StAboutContainer>
  );
};

export default AboutUs;

const StAboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10vw;
`;

const StImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 35vw;

  .slick-slider {
    width: 100%;
  }
`;

const StImage = styled.img``;
