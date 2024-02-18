import styled from "styled-components";
import NavBar from "../../components/NavBar";
import banner from "../../assets/Recruit/banner.png";
import process from "../../assets/Recruit/process.png";
import { title, content, finishment } from "../../constants/Recruit/TypoData";

export const Recruit = () => {
  return (
    <StRecruitContainer>
      <StNavBar>
        <NavBar />
      </StNavBar>
      <img src={banner} alt="Banner" />
      <StRecruitTypoWrapper>
        <StRecruitTitle>{title}</StRecruitTitle>
        <StRecruitContent>{content}</StRecruitContent>
        <StRecruitFinishMent>{finishment}</StRecruitFinishMent>
        <StSectionTitle>TIMELINE</StSectionTitle>
        <StSectionTitle>Recruiting Process</StSectionTitle>
        <img src={process} />
      </StRecruitTypoWrapper>
      <StRecruitInfoWrapper>
        <StInfoTitle>ABOUT US</StInfoTitle>
        <StInfoSubtitle>
          숭실대 멋쟁이 사자처럼은 이런 사람들이에요
        </StInfoSubtitle>
        <StInfoTitle>We are looking for</StInfoTitle>
        <StInfoSubtitle>
          숭실대 멋쟁이 사자처럼은 이런 사람을 원해요
        </StInfoSubtitle>
      </StRecruitInfoWrapper>
    </StRecruitContainer>
  );
};

const StRecruitContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  margin-top: 6%;
  padding-bottom: 30%;
`;

const StNavBar = styled.div`
  position: fixed;
  top: 0;
`;

const StRecruitTypoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 8% 10%;
`;

const StRecruitTitle = styled.span`
  color: #3274d9;
  font-family: "BowlbyOne";
  font-size: 5vw;
  font-weight: 400;
  line-height: 7vw;
`;

const StRecruitContent = styled.span`
  padding: 4% 15% 0% 0%;
  color: #1c1c1c;
  font-size: 2vw;
  font-weight: 500;
  line-height: 4vw;
`;

const StRecruitFinishMent = styled.span`
  padding: 4% 15% 40% 0%;
  color: #1c1c1c;
  font-size: 2vw;
  font-weight: 500;
  line-height: 4vw;
`;

const StSectionTitle = styled.span`
  padding: 4% 15% 5% 0%;
  color: #3274d9;
  font-family: "BowlbyOne";
  font-size: 4vw;
  font-weight: 400;
  line-height: 7vw;
`;

const StRecruitInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StInfoTitle = styled.span`
  padding: 10% 0% 1% 0%;
  color: #3274d9;
  font-family: "BowlbyOne";
  font-size: 4vw;
  font-weight: 400;
  line-height: 7vw;
`;

const StInfoSubtitle = styled.span`
  color: #3274d9;
  font-size: 2vw;
  font-weight: 500;
  line-height: 7vw;
`;
