import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import bluelogo from "../assets/Recruit/logo-blue.png";

const NavBar = () => {
  const navigate = useNavigate();
  const [selectedBtn, setSelectedBtn] = useState<string>("");

  const handleClickBtn = (selected: "" | "recruit" | "faq") => {
    setSelectedBtn(selected);
    navigate(`/${selected}`);
  };

  return (
    <StNavContainer>
      <StNavLogo src={bluelogo} alt="logo_blue" />
      <StNavWrapper>
        <StNavBtn
          type="button"
          $isSelected={selectedBtn === ""}
          onClick={() => handleClickBtn("")}
        >
          HOME
        </StNavBtn>
        <StNavBtn
          type="button"
          $isSelected={selectedBtn === "recruit"}
          onClick={() => handleClickBtn("recruit")}
        >
          RECRUIT
        </StNavBtn>
        <StNavBtn
          type="button"
          $isSelected={selectedBtn === "faq"}
          onClick={() => handleClickBtn("faq")}
        >
          FAQ
        </StNavBtn>
      </StNavWrapper>
    </StNavContainer>
  );
};

export default NavBar;

const StNavContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: #ffffff;
`;

const StNavLogo = styled.img`
  width: 7vw;
`;

const StNavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 7vw;
  padding: 2.5% 0%;
`;

const StNavBtn = styled.button<{ $isSelected: boolean }>`
  color: ${({ $isSelected }) => ($isSelected ? "#665a5a" : "black")};
  font-size: 1.8vw;
  font-weight: 600;
  line-height: normal;
  /* border-bottom: ${({ $isSelected }) =>
    $isSelected ? "0.2rem solid #262323" : "none"}; */

  &:hover {
    cursor: pointer;
  }
`;
