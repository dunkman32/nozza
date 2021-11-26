import React, { useRef, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import styled from 'styled-components';
import Image from 'next/image';
import nozza from '@src/assets/images/avatars/MicrosoftTeams-image.png';

const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Div = styled(animated.div)`
  width: 400px;
  height: 400px;
  position: relative;
  background: transparent;
  border-radius: 5px;
  transition: box-shadow 0.5s;
  will-change: transform;
  padding: 40px;
  box-shadow: inset 0 0 10px 0 rgba(108, 130, 191, 0.76);
`;

const ImageWrapperDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ImageWrapper = styled(Image)`
  border-radius: 50%;
`;

const TitleDiv = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 1rem
`;
const Title = styled.span`
  min-width: 400px;
  color: rgba(0, 0, 0, 0.78);
  font-weight: 700;
  font-size: 1.75rem;
`;
const Desc = styled.span`
  color: rgba(0, 0, 0, 0.50);
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
`;

const calc = (x: number, y: number, rect: any) => [
  -(y - rect.top - rect.height / 2) / 30,
  (x - rect.left - rect.width / 2) / 30,
  1,
];
const trans = (
  x: number,
  y: number,
  s: number,
) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function Card() {
  const ref: any = useRef(null);
  const [xys, set] = useState([0, 0, 1]);
  const config = {
    mass: 1,
    tension: 450,
    friction: 120,
    clamp: false,
    precision: 0.01,
    velocity: 0,
    easing: (t: number) => t,
  };
  const props = useSpring({
    xys,
    config,
  });

  return (
    <Main ref={ref}>
      <Div
        style={{ transform: props.xys.to(trans) }}
        onMouseLeave={() => set([0, 0, 1])}
        onMouseMove={(e) => {
          const rect = ref.current.getBoundingClientRect();
          set(calc(e.clientX, e.clientY, rect));
        }}
      >
        <ImageWrapperDiv>
          <ImageWrapper src={nozza} width="150" height="150" />
        </ImageWrapperDiv>
        <TitleDiv>
          <Title>
            ავსო გიჟი
          </Title>
          <Desc>
            &#8226; გიიიიიიიიიიიიიიჟია და ღიპიანი
          </Desc>
        </TitleDiv>
      </Div>
    </Main>
  );
}
