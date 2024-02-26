import styled from "styled-components";
// import NavBar from "../../components/NavBar";
import banner from "../../assets/News/banner.png";

export const News = () => {
  const BannerTypo = "멋쟁이사자의 최신 소식,\n 궁금하다면?";

  return (
    <StRecruitContainer>
      <StNavBar>{/* <NavBar /> */}</StNavBar>
      <StBanner src={banner} alt="Banner"></StBanner>
      <StBannerTypo>{BannerTypo}</StBannerTypo>
    </StRecruitContainer>
  );
};

const StRecruitContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  margin-top: 7.2%;
  padding-bottom: 30%;
`;

const StNavBar = styled.div`
  position: fixed;
  top: 0;
`;

const StBanner = styled.img`
  position: relative;
`;

const StBannerTypo = styled.span`
  position: absolute;
  margin-top: 5%;
  margin-right: 10%;
  right: 0;
  text-align: right;
  color: white;
  font-size: 2vw;
  font-weight: 900;
`;
