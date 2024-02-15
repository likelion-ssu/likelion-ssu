import styled from "styled-components";

/**
 * 색상 관련 토큰
 */
export const Colors = {
  primary: '#3383FE',
  bluewhite: '#F8FAFC',
  solidWhite: '#FDFDFF',
  grey100: '#C4C4C4',
  grey200: '#909090',
  grey300: '#7A7A7A',
  grey400: '#454545',
  grey500: '#4B4B4B',
  grey600: '#1C1C1C',
};

/**
 * 타이포 관련 토큰
 */
export const Typo = {
  title100: styled.div`
    font-size: 4.8rem;
    font-weight: 800;
  `,
  title200: styled.div`
    font-size: 6.4rem;
    font-weight: 800;
  `,
  subtitle100: styled.div`
    font-size: 3.6rem;
    font-weight: 800;
  `,
  subtitle200: styled.div`
    font-size: 4rem;
    font-weight: 600;
  `,
  content100: styled.div`
    font-size: 1.6rem;
    font-weight: 500;
  `,
  content200: styled.div`
    font-size: 1.6rem;
    font-weight: 700;
  `,
  content300: styled.div`
    font-size: 1.8rem;
    font-weight: 400;
  `,
  content400: styled.div`
    font-size: 1.8rem;
    font-weight: 700;
  `,
  content500: styled.div`
    font-size: 2rem;
    font-weight: 400;
  `,
  content600: styled.div`
    font-size: 2rem;
    font-weight: 600;
  `,
  caption100: styled.div`
    font-size: 1.3rem;
    font-weight: 500;
  `,
  caption200: styled.div`
    font-size: 1.3rem;
    font-weight: 700;
  `,
  caption300: styled.div`
    font-size: 1.4rem;
    font-weight: 500;
  `,
};

export const breakpoints = [320, 375, 425, 768, 1024, 1441, 2560];

/**
 * 종단점
 * @default default 적용하지 않을 경우 가장 작은 디바이스
 * @children_0 small_mobile device
 * @children_1 basic_mobile device
 * @children_2 small_tablet device
 * @children_3 basic_tablet device
 * @children_4 small_pc device
 * @children_5 basic_pc device
 * @children_6 large_pc device
 */
export const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);
