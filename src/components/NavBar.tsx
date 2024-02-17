import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [selectedBtn, setSelectedBtn] = useState<string>("recruit");

  const handleClickBtn = (
    selected: "home" | "project" | "story" | "recruit" | "faq"
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
          onClick={() => handleClickBtn("home")}
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
  height: 8rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #3383fe 0%, rgba(51, 131, 254, 0) 100%);
`;

const StNavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  gap: 3rem;
`;

const StNavBtn = styled.button<{ isSelected: boolean }>`
  color: ${({ isSelected }) => (isSelected ? "#FFFFFF" : "#EBF7FF")};
  font-size: 1.5rem;
  font-weight: 600;
  line-height: normal;
  border-bottom: ${({ isSelected }) =>
    isSelected ? "0.3rem solid #FFFFFF" : "none"};

  &:hover {
    cursor: pointer;
  }
`;
