import { useState } from "react";
import styled, { keyframes } from "styled-components";
import main from "../../assets/Home/mainBG.png";
import Lottie from "react-lottie-player";
import why1 from "../../assets/Home/why1.png";
import why2 from "../../assets/Home/why2.png";
import why3 from "../../assets/Home/why3.png";
import why01 from "../../assets/Home/why01.json";
import why02 from "../../assets/Home/why02.json";
import why03 from "../../assets/Home/why03.json";
import sun from "../../assets/Home/sun.png";
import pm from "../../assets/Home/pm.png";
import design from "../../assets/Home/design.png";
import fe from "../../assets/Home/fe.png";
import be from "../../assets/Home/be.png";
import sh from "../../assets/Home/sh.png";
import je from "../../assets/Home/je.png";
import em from "../../assets/Home/em.png";
import hi from "../../assets/Home/hi.png";
import sy from "../../assets/Home/sy.png";
import sy1 from "../../assets/Home/sy1.png";
import jw from "../../assets/Home/jw.png";
import gh from "../../assets/Home/gh.png";
import sm from "../../assets/Home/sm.png";
import hs from "../../assets/Home/hs.png";
import ye from "../../assets/Home/ye.png";
import arrow from "../../assets/Home/arrow.png";
import techit from "../../assets/Home/techit.png";
import nexon from "../../assets/Home/nexon.png";
import s from "../../assets/Home/s.png";
import insta from "../../assets/Home/instagram.png";
import git from "../../assets/Home/github.png";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [activeTab, setActiveTab] = useState<string>("PM");
  const navigate = useNavigate();

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName === activeTab ? "PM" : tabName);
  };

  const onClickApplyBtn = () => {
    navigate("/recruit");
  };
  
  return (
    <Container>
      <FirstContainer>
        <Main src={main} alt="main" />
        <Content>
          <FirstTitle>
            <p>LIKELION</p>
            <p>Soongsil Univ.</p>
          </FirstTitle>
          <Intro>
            <hr />
            <p>숭실대학교에서 개발자로 <br /> 성장하는 방법</p>
          </Intro>
        </Content>
      </FirstContainer>
      <SecondContainer>
        <TopContents>
          <SecondTitle>왜, <span>숭실대 멋쟁이사자처럼</span> 인가?</SecondTitle>
          <SecondIntro>
            2013년, 서울대학교에서 이두희 대표를 필두로 시작된 '멋쟁이사자처럼 대학’은 현재 국내외 121개 대학, 4천여 명이
            <br />활동하는 국내 최대 규모의 IT 창업 동아리로 자리매김하였습니다. 숭실대 멋쟁이사자처럼은 2021년부터 시작하여
            <br />지금은 대표적인 IT 동아리로 거듭나, 교내·외 다양한 프로젝트 및 행사를 기획 및 운영하고 있습니다.
          </SecondIntro>
        </TopContents>
        <BottomContents>
          <SecondSection>
            <SecondImage01 src={why1} alt="why1" />
            <LottieWrapper>
              <Lottie
                loop
                animationData={why01}
                play
              />
            </LottieWrapper>
          </SecondSection>
          <SecondSection>
            <SecondImage02 src={why2} alt="why2" />
            <LottieWrapper>
              <Lottie
                loop
                animationData={why02}
                play
              />
            </LottieWrapper>
          </SecondSection>
          <SecondSection>
            <SecondImage03 src={why3} alt="why3" />
            <LottieWrapper>
              <Lottie
                loop
                animationData={why03}
                play
              />
            </LottieWrapper>
          </SecondSection>
        </BottomContents>
      </SecondContainer>
      <SecondContainer>
        <TopContents>
          <SecondTitle>멋사 아래, <span>네 개의 태양<SunImg src={sun}/></span></SecondTitle>
          <SecondIntro2>
            성장을 위한 네 개의 태양이 당신을 기다리고 있어요!
            <br />당신의 선택은 무엇인가요?
          </SecondIntro2>
        </TopContents>
        <BottomContents02>
          <ButtonWrapper>
            <RoundButton onClick={() => handleTabClick("PM")} active={activeTab === "PM"}>PM</RoundButton>
            <RoundButton onClick={() => handleTabClick("Design")} active={activeTab === "Design"}>Design</RoundButton>
            <RoundButton onClick={() => handleTabClick("Frontend")} active={activeTab === "Frontend"}>Frontend</RoundButton>
            <RoundButton onClick={() => handleTabClick("Backend")} active={activeTab === "Backend"}>Backend</RoundButton>
          </ButtonWrapper>
          <ContentsWrapper>
            <ImageWrapper>
              <ContentsImage src={pm} alt="pm" active={activeTab === "PM"}/>
              <ContentsImage src={design} alt="design" active={activeTab === "Design"}/>
              <ContentsImage src={fe} alt="fe" active={activeTab === "Frontend"}/>
              <ContentsImage src={be} alt="be" active={activeTab === "Backend"}/>
            </ImageWrapper>
            {activeTab === "PM" && (
              <ContentsInfo>
                <InfoTitle>PM part.</InfoTitle>
                <InfoSub>통찰력 있는 PM으로 성장하기</InfoSub>
                <InfoContent>
                  Team Leader로서 프로젝트를 리드하며 서비스 기획자와 PM으로 성장하기 위한 역량을 키울 수 있습니다. 이를 통해 협업에 필요한 내용을 설계하는 경험을 쌓을 수 있습니다.
                  <br />PM은 프로젝트의 전반적인 일정 관리를 담당하여 원활한 진행과 완료를 보장합니다. 초기에는 요구 사항 수집과 분석을 통해 프로젝트의 방향과 목표를 설정하고, 이를 팀원들과 공유하여 프로젝트의 길잡이 역할을 수행합니다.
                  <br />와이어프레임 및 플로우차트 등을 작성하여 프로젝트의 구조와 흐름을 시각화하고, 팀원들과 함께 검토하며 최적화하는 역할도 맡습니다. 이를 통해 기획과 디자인 단계에서 효과적인 의사 결정을 도모하고, 개발 단계에서의 문제를 사전에 예방할 수 있습니다.
                  <br />PM은 팀원들의 역량과 성과를 평가하고 인정하며, 필요한 지원과 교육을 제공하여 팀원들의 성장을 도모합니다. 팀원들의 의견을 수렴하고 존중하여 프로젝트의 성과를 극대화합니다.
                </InfoContent>
              </ContentsInfo>
            )}
            {activeTab === "Design" && (
              <ContentsInfo>
                <InfoTitle>Design part.</InfoTitle>
                <InfoSub>통찰력 있는 Design으로 성장하기</InfoSub>
                <InfoContent>
                  디자인 툴을 익히고 다양한 웹 디자인 이론과 용어들을 배우며 협업에 도움이 되는 스킬을 키울 수 있습니다. 이를 통해 협업에 필요한 내용들을 설계하는 경험을 할 수 있습니다. 
                  <br />디자인 파트는 프로젝트의 기획 내용을 기반으로 다양한 디자인 작업을 수행합니다. 주로 서비스 로고, 일러스트레이션, 및 아이콘 및 사용자 인터페이스를 디자인하게 됩니다. 프로젝트의 각 페이지나 화면에 중점을 두어 레이아웃을 설계하고, 모든 디자인 요소를 시각적으로 매력적이고 합리적이게 표현하는 역할을 수행합니다. 
                  사용자 경험과 사용자 인터페이스에 대한 이해를 기반으로 디자인을 진행하며, 각 요소들의 상호작용과 일관성을 고려하여 사용자들에게 직관적이고 효과적인 환경을 제공합니다. 
                  <br />또한 기획 및 개발 파트와의 긴밀한 협업으로 피드백을 주고 받으며 프로젝트의 디자인 측면에서 품질을 향상시키려 노력합니다.
                </InfoContent>
              </ContentsInfo>
            )}
            {activeTab === "Frontend" && (
              <ContentsInfo>
                <InfoTitle>Frontend part.</InfoTitle>
                <InfoSub>찐빵의 팥,, 만두의 속,, 김밥의 단무지,, 그리고,, "멋사의 프론트엔드"</InfoSub>
                <InfoContent>
                  프론트엔드 파트는 사용자가 직접 상호작용하는 웹 애플리케이션의 인터페이스를 개발하는 중요한 역할을 담당합니다. 사용자 경험(UX)과 사용자 인터페이스(UI) 디자인에 중점을 두며, 서비스의 시각적 요소와 상호작용을 설계하고 구현합니다. 
                  프론트엔드 개발자는 HTML, CSS, JavaScript 등의 기술을 활용하여 사용자가 웹사이트를 이용할 때 직관적이고 매력적인 사용자 인터페이스를 제공합니다.
                  <br />프론트엔드 파트는 웹 애플리케이션의 프론트엔드 아키텍처를 설계하고 구축합니다. 최신 프론트엔드 프레임워크와 라이브러리를 활용하여 반응형 및 동적인 웹사이트를 개발합니다. 사용자 경험을 최우선으로 생각하며, 사이트의 접근성과 성능 최적화에도 중점을 둡니다. 
                  백엔드 파트와 협력하여 API를 통해 데이터를 주고받고, 사용자의 요구사항을 반영한 기능을 구현합니다. 웹 표준과 접근성 가이드라인을 준수하여 모든 사용자가 웹사이트를 원활하게 이용할 수 있도록 보장합니다.
                  <br />프론트엔드 파트는 숭실대 멋쟁이사자처럼에서 사용자에게 직접적으로 노출되는 서비스의 '얼굴'을 만들어가는 중요한 역할을 수행합니다. 
                </InfoContent>
              </ContentsInfo>
            )}
            {activeTab === "Backend" && (
              <ContentsInfo>
                <InfoTitle>Backend part.</InfoTitle>
                <InfoSub>통찰력 있는 Backend으로 성장하기</InfoSub>
                <InfoContent>
                  서비스의 요구사항에 맞춰 API를 개발하고 배포 및 운영하여 사용자에게 원활한 서비스를 제공합니다. 백엔드 파트는 눈에 보이지 않는 서버를 전반적으로 담당하며, 서비스의 요구사항을 분석하여 웹 애플리케이션을 구현합니다. 또한, 데이터베이스를 설계하고 애플리케이션과 연동하여 데이터를 효율적으로 관리합니다.
                  <br />백엔드 파트는 웹 애플리케이션의 배포와 유지보수도 담당합니다. 클라우드 컴퓨팅을 통해 애플리케이션과 데이터베이스를 인터넷을 통해 접속할 수 있도록 구성하며, 서비스의 성능과 안정성을 고려하여 서버와 데이터베이스를 구축하고 관리합니다. 또한, 프론트엔드 파트와 PM과 지속적으로 소통하며 원활한 협업을 통해 완성도 있는 서비스를 개발해나갑니다. 
                  <br />백엔드 파트는 숭실대 멋쟁이사자처럼에서 중요한 역할을 담당하고 있으며, 서비스의 기능과 성능을 지속적으로 향상시키기 위해 노력합니다.
                </InfoContent>
              </ContentsInfo>
            )}
          </ContentsWrapper>
        </BottomContents02>
      </SecondContainer>
      <ThirdContainer>
        <YearsWrapper>
          <hr />
          <Years>
            <Year>2023</Year>
            <Year>2024</Year>
          </Years>
        </YearsWrapper>
        <MembersWrapper>
          <MemberTitle><hr/>CORE LEAD</MemberTitle>
          <Members>
            <Member>
              <MemberImg src={sh}/>
              <MemberName>유승한</MemberName>
              <MemberRole>12기 대표</MemberRole>
            </Member>
            <Member>
              <MemberImg src={je}/>
              <MemberName>김지은</MemberName>
              <MemberRole>12기 부대표</MemberRole>
            </Member>
          </Members>
          <MemberTitle><hr/>TECH LEAD</MemberTitle>
          <Members>
            <Member>
              <MemberImg src={em}/>
              <MemberName>정의민</MemberName>
              <MemberRole>기획 파트장</MemberRole>
            </Member>
            <Member>
              <MemberImg src={hi}/>
              <MemberName>이해인</MemberName>
              <MemberRole>디자인 파트장</MemberRole>
            </Member>
            <Member>
              <MemberImg src={sy}/>
              <MemberName>신수연</MemberName>
              <MemberRole>프론트엔드 파트장</MemberRole>
            </Member>
            <Member>
              <MemberImg src={sy1}/>
              <MemberName>박수영</MemberName>
              <MemberRole>백엔드 파트장</MemberRole>
            </Member>
          </Members>
          <MemberTitle><hr/>OPERATIONS MANAGEMENT</MemberTitle>
          <Members>
            <Member>
              <MemberImg src={jw}/>
              <MemberName>한지원</MemberName>
              <MemberRole>기획 팀장</MemberRole>
            </Member>
            <Member>
              <MemberImg src={gh}/>
              <MemberName>김교휘</MemberName>
              <MemberRole>운영 팀장</MemberRole>
            </Member>
            <Member>
              <MemberImg src={sm}/>
              <MemberName>조수민</MemberName>
              <MemberRole>홍보 팀장</MemberRole>
            </Member>
            <Member>
              <MemberImg src={hs}/>
              <MemberName>강해솔</MemberName>
              <MemberRole>디자인 팀장</MemberRole>
            </Member>
            <Member>
              <MemberImg src={ye}/>
              <MemberName>오유은</MemberName>
              <MemberRole>총무</MemberRole>
            </Member>
          </Members>
        </MembersWrapper>
      </ThirdContainer>
      <SecondContainer>
        <SecondTitle>지금 바로 <span><Jiwon href="https://github.com/7iw8n">지원</Jiwon></span>하세요!</SecondTitle>
        <RecruitSub>
          Possibility to Reality
          <br />내 아이디어를 내 손으로 실현하자!
        </RecruitSub>
        <RecruitButton onClick={onClickApplyBtn}>12기 지원하러 가기<Arrow src={arrow}/></RecruitButton>
      </SecondContainer>
      <FourthContainer>
        <LastWrapper>
          <LikeLionTitle>
            숭실대학교 <br />멋쟁이사자처럼 <br />12TH
          </LikeLionTitle>
          <ImgSource src={techit} />
          <ImgSource src={nexon} />
          <ImgSource src={s} />
        </LastWrapper>
        <ContactWrapper>
          <SNSWrapper>
            <SNS src={insta} alt="https://github.com/likelion-ssu" />
            <SNS src={git} alt="https://www.instagram.com/likelion_ssu/" />
          </SNSWrapper>
          <SNSInfo>숭실대학교 멋쟁이사자처럼</SNSInfo>
          <SNSInfo>
            <span>Contact</span>
            <br/>숭실대학교 멋쟁이자사처럼 대표. 유승한
            <br />Email: ssu@likelion.org
            <br />IG: @likelion_ssu
          </SNSInfo>
          <SNSInfo>Copyright LIKELION SSU</SNSInfo>
        </ContactWrapper>
      </FourthContainer>
    </Container>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f8ff;
`;

const FirstContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

const Main = styled.img`
  height: 62vh;
  width: 100%;
  object-fit: cover;
  @media (max-width: 768px) {
    height: 50%;
  }
`;

const Content = styled.div`
  color: #3383FE;
  width: 60%;
  display: flex;
  align-items: start;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 78%;
    flex-direction: column;
    align-items: center;
  }
`;

const FirstTitle = styled.div`
  font-size: 3.3rem;
  font-weight: 800;
  p {
    margin: 0;;
  }
  :nth-child(2) {
    font-size: 1.9rem;
    font-weight: 600;
    margin-top: -0.5rem;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;


const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 67%;
  font-size: 2.2rem;
  font-weight: 800;
  text-align: right;
  line-height: 3.2rem;
  hr {
    width: 100%;
    border: 1.5px solid #3383FE;
    margin: 2.4rem 0 1.5rem 0;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SecondContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TopContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 35vh;
  display: flex;
`;

const SecondTitle = styled.div`
  font-size: 2.3rem;
  font-weight: 800;
  margin: 0;
  span {
    color: #3383FE;
    background-color: #E4EFFF;
  }
`;

const SunImg = styled.img`
  display: inline-block;
  width: 2.4rem;
  height: auto;
  margin: 0 0 -0.35rem 0.5rem;
  padding: 0;
`

const SecondIntro = styled.div`
  font-family: "SUIT";
  font-size: 1rem; 
  font-weight: 400;
  text-align: center;
  line-height: 1.7rem;
  margin-top: 1rem;
  @media (max-width: 768px) {
    width: 80%;
    font-size: 1.3rem;
    line-height: 2rem;
    margin-top: 2.5rem;
    br {
      display: none;
    }
  }
`;

const SecondIntro2 = styled.div`
  font-size: 1rem; 
  font-weight: 400;
  text-align: center;
  line-height: 1.7rem;
  margin-top: 1rem;
  @media (max-width: 768px) {
    width: 80%;
    font-size: 1.3rem;
    line-height: 2rem;
    margin-top: 2.5rem;
  }
`;

const BottomContents = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4rem;
  }
`;

const BottomContents02 = styled.div`
  width: 70%;
  margin-top: -1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4rem;
  }
`;

const SecondSection = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SecondImage01 = styled.img`
  width: 100%;
  height: auto;
`;

const SecondImage02 = styled.img`
  width: 100%;
  height: auto;
`;

const SecondImage03 = styled.img`
  width: 100%;
  height: auto;
`;

const LottieWrapper = styled.div`
  width: 75%;
  height: auto;
  margin-top: 0.5rem;
  @media (max-width: 768px) {
    width: 85%;
  }
`;

const ButtonWrapper = styled.div`
  width: 36rem;
  height: 2.4rem;
  border: 2.5px solid #3383FE;
  border-radius: 10rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
    height: 3.5rem;
  }
`;

interface RoundButtonProps {
  active: boolean;
}

const RoundButton = styled.button<RoundButtonProps>`
  font-family: "SUIT";
  width: 8.85rem;
  height: 1.9rem;
  border-radius: 10rem;
  color: #3383FE;
  font-size: 1rem;
  font-weight: 700;  
  cursor: pointer;
  ${({ active }) => active && `
    background-color: #3383FE;
    color: white;
  `}
  @media (max-width: 768px) {
    width: 24.8%;
    height: 2.8rem;
    font-size: 1.1rem;
  }
`;

const ContentsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 3rem;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  width: 40%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 22vh);
  grid-column-gap: 1rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ContentsImage = styled.img<RoundButtonProps>`
  border-radius: 0.6rem;
  width: 100%;
  height: 90%;
  filter: brightness(35%);
  object-fit: cover;
  transition: filter 1s ease-in-out;
  ${({ active }) => active && `
    filter: brightness(100%);
  `}
`;

const ContentsInfo = styled.div`
  width: 57%;
  display: flex;
  flex-direction: column;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: -4rem;
    align-items: center;
  }
`;

const InfoTitle = styled.div`
  color: #3383FE;
  font-size: 2rem;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const InfoSub = styled.div`
  font-family: "SUIT";
  color: #3383FE;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 0.2rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

const InfoContent = styled.div`
  font-family: "SUIT";
  font-size: 0.8rem;
  margin-top: 1.4rem;
  @media (max-width: 768px) {
    font-size: 1.1rem;
    text-align: center;
  }
`;

const ThirdContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const YearsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 20vh;
  hr {
    height: 100%;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Years = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 1rem;
  font-family: "SUIT";
`;

const Year = styled.div`
  font-family: "SUIT";
`;

const MembersWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "SUIT";
  @media (max-width: 768px) {
    width: 70%;
  }
`;

const MemberTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.05rem;
  font-weight: 800;
  hr {
    height: 1.5rem;
    border: 1.5px solid black;
    margin-right: 0.5rem;
  }
  @media (max-width: 768px) {
    font-size: 1.6rem;
    hr {
      height: 2rem;
    }
  }
`;

const Members = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem 0 1.75rem 0;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 3rem;
  }
`;

const Member = styled.div`
  width: 7rem;
  margin-right: 3.5rem;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const MemberImg = styled.img`
  width: 100%;
  height: 7rem;
  object-fit: cover;
  border-radius: 0.7rem;
  @media (max-width: 768px) {
    height: 20rem;
  }
`;

const MemberName = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  margin: 0.5rem 0 0 0.2rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const MemberRole = styled.div`
  font-size: 0.8rem;
  font-weight: 400;
  margin-left: 0.2rem;
  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 2rem;
  }
`;

const Jiwon = styled.a`
  text-decoration: none;
  color: #3383FE;
  cursor: pointer;
`;

const RecruitSub = styled.div`
  text-align: center;
  margin: 3rem auto;
  font-family: "SUIT";
  font-size: 1rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const RecruitButton = styled.button`
  font-family: "SUIT";
  font-size: 1.1rem;
  background-color: #3383FE;
  width: 26rem;
  height: 4rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    height: 6rem;
  }
`;

const Arrow = styled.img`
  width: 1.1rem;
  height: auto;
  margin-left: 0.5rem;
  @media (max-width: 768px) {
    width: 1.5rem;
  }
`;

const FourthContainer = styled.div`
  width: 70%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  font-family: "SUIT";
  font-size: 1rem;
  font-weight: 400;
  color: #7A7A7A;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.2rem;
  }
`;

const SNSWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin: 8rem 0 1rem 0;
`;

const SNS = styled.img`
  width: 2.5rem;
  height: auto;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 3.5rem;
  }
`;

const SNSInfo = styled.div`
  span {
    font-weight: 600;
  }
`;

const LastWrapper = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const LikeLionTitle = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  color: #3383FE;
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    font-size: 2.7rem;
  }
`;

const ImgSource = styled.img`
  height: 3rem;
  width: auto;
  margin: 2rem 0;
`;
