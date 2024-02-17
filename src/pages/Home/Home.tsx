import styled from "styled-components";
import main from "../../assets/Home/mainBG.png";

export const Home = () => {
  return (
    <Container>
      <Main src={main} alt="main" />
      <Content>
        <Title>
          <p>LIKELION</p>
          <p>Soongsil Univ.</p>
        </Title>
        <Intro>
          <hr />
          <p>숭실대학교에서 개발자로 <br /> 성장하는 방법</p>
        </Intro>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`;

const Main = styled.img`
  width: 100%;
  height: 63%;
`;

const Content = styled.div`
  color: #3383FE;
  width: 50%;
  display: flex;
  align-items: start;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 5rem;
  font-weight: 800;
  p {
    margin: 0;;
  }
  :nth-child(2) {
    font-size: 3rem;
    font-weight: 600;
    margin-top: -1rem;
  }
`;


const Intro = styled.div`
  width: 70%;
  font-size: 4rem;
  font-weight: 800;
  text-align: right;
  line-height: 5.6rem;
  hr {
    width: 100%;
    border: 1.5px solid #3383FE;
    margin: 3rem 0 2.3rem 0;
  }
`;