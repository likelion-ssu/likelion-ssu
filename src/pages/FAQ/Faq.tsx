import styled from "styled-components";
import NavBar from "../../components/NavBar";
import { useLocation } from "react-router-dom";
import { banner } from "../../assets/Recruit";

export const Faq = () => {
  const { state } = useLocation();

  return (
    <StFaqContainer>
      <StNavBar>
        <NavBar selectedBtn={state.selectedBtn} />
      </StNavBar>
      <img src={banner} alt="Banner" />
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
