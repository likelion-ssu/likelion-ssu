import { useState } from 'react';
import styled from "styled-components";

export const ColorChange = () => {
  const [idx, setIdx] = useState(0);

  const handleChangeColor = () => {
    setIdx(prev => (prev < colors.length - 1 ? prev + 1 : 0));
  };

  return (
    <Container color={colors[idx]}>
      <button onClick={handleChangeColor}>누르면 색 바뀜ㅎㅎ</button>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${props => props.color};
`;

const colors = ['blue', 'pink', 'yellow', 'red'];