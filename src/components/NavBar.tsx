import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [selectedBtn, setSelectedBtn] = useState<string>("recruit");

  const handleClickBtn = (
    selected: "" | "project" | "story" | "recruit" | "faq"
  ) => {
    setSelectedBtn(selected);
    navigate(`/${selected}`);
  };

  return (
    <StNavContainer>
      <StNavWrapper>
        <StNavBtn
          type="button"
          isSelected={selectedBtn === "home"}
          onClick={() => handleClickBtn("")}
        >
          HOME
        </StNavBtn>
        <StNavBtn
          type="button"
          isSelected={selectedBtn === "project"}
          onClick={() => handleClickBtn("project")}
        >
          PROJECT
        </StNavBtn>
        <StNavBtn
          type="button"
          isSelected={selectedBtn === "story"}
          onClick={() => handleClickBtn("story")}
        >
          STORY
        </StNavBtn>
        <StNavBtn
          type="button"
          isSelected={selectedBtn === "recruit"}
          onClick={() => handleClickBtn("recruit")}
        >
          RECRUIT
        </StNavBtn>
        <StNavBtn
          type="button"
          isSelected={selectedBtn === "faq"}
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
  justify-content: center;
  align-items: center;
  padding: 2.5% 0%;
  background: #ffffff;
`;

const StNavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5vw;
`;

const StNavBtn = styled.button<{ isSelected: boolean }>`
  color: ${({ isSelected }) => (isSelected ? "#665a5a" : "black")};
  font-size: 1.8vw;
  font-weight: 600;
  line-height: normal;
  border-bottom: ${({ isSelected }) =>
    isSelected ? "0.2rem solid #262323" : "none"};

  &:hover {
    cursor: pointer;
  }
`;
