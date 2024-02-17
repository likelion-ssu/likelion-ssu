import styled from "styled-components";
import NavBar from "../../components/NavBar";
import banner from "../../assets/Recruit/banner.png";

export const Recruit = () => {
  return (
    <StRecruitContainer>
      <NavBar />
      <img src={banner} alt="Banner" />
    </StRecruitContainer>
  );
};

const StRecruitContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
`;
