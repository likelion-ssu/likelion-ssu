import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Recruit/logo-blue.png";

const NavBar = () => {
  const navigate = useNavigate();
  const [selectedBtn, setSelectedBtn] = useState<string>("recruit");

  const handleClickHomeBtn = () => {
    navigate("/");
  };

  const handleClickBtn = (
    selected: "project" | "story" | "recruit" | "faq"
  ) => {
    setSelectedBtn(selected);
    navigate(`/${selected}`);
  };

  return (
    <StNavContainer>
      <StLogoWrapper onClick={handleClickHomeBtn}>
        <img src={logo} alt="Logo" />
      </StLogoWrapper>
      <StNavWrapper>
        <StNavBtn
          type="button"
          isSelected={selectedBtn === "project"}
          onClick={() => handleClickBtn("project")}
        >
          프로젝트
        </StNavBtn>
        <StNavBtn
          type="button"
          isSelected={selectedBtn === "story"}
          onClick={() => handleClickBtn("story")}
        >
          스토리
        </StNavBtn>
        <StNavBtn
          type="button"
          isSelected={selectedBtn === "recruit"}
          onClick={() => handleClickBtn("recruit")}
        >
          리쿠르팅
        </StNavBtn>
        <StNavBtn
          type="button"
          isSelected={selectedBtn === "faq"}
          onClick={() => handleClickBtn("faq")}
        >
          자주 묻는 질문
        </StNavBtn>
      </StNavWrapper>
    </StNavContainer>
  );
};

export default NavBar;

const StNavContainer = styled.div`
  width: 100%;
  height: 9rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const StLogoWrapper = styled.button`
  width: 9rem;
  height: 4rem;
`;

const StNavWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  padding-left: 2rem;
  gap: 1.5rem;
`;

const StNavBtn = styled.button<{ isSelected: boolean }>`
  color: ${({ isSelected }) => (isSelected ? "#7a7a7a" : "#909090")};
  font-size: 1.5rem;
  font-weight: ${({ isSelected }) => (isSelected ? 700 : 500)};
  line-height: normal;

  &:hover {
    color: #7a7a7a;
    font-size: 1.5rem;
    font-weight: 700;
    cursor: pointer;
  }
`;
