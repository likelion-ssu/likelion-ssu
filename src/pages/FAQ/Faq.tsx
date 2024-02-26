import styled from "styled-components";
import NavBar from "../../components/NavBar";
import { banner } from "../../assets/Recruit";

export const Faq = () => {
  return (
    <StFaqContainer>
      <StNavBar>
        <NavBar />
      </StNavBar>
      <img src={banner} alt="Banner" />
      <StRecruitTypoWrapper>
        <StRecruitTitle>COMING SOON</StRecruitTitle>
        <StRecruitContent>
          🦁 FAQ는 인스타 무물 진행 뒤 업데이트 예정입니다 🦁
        </StRecruitContent>
      </StRecruitTypoWrapper>
    </StFaqContainer>
  );
};

const StFaqContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  margin-top: 7%;
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
  align-items: center;
  padding: 12% 10%;
`;

const StRecruitTitle = styled.span`
  padding: 30% 0% 0% 0%;
  color: #3274d9;
  font-family: "BowlbyOne";
  font-size: 6vw;
  font-weight: 400;
  line-height: 7vw;
`;

const StRecruitContent = styled.span`
  padding: 10% 0% 0% 0%;
  color: #1c1c1c;
  font-size: 3vw;
  font-weight: 500;
  line-height: 4vw;
`;
