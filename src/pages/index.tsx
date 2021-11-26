import React, { useRef } from 'react';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import styled from 'styled-components';
import MainTitle from '@src/components/mainTitle';
import Second from '@src/components/secondSlide';
import Third from '@src/components/thirdSlide';
import Header from '@src/components/header';
import Image from 'next/image';
import rocket from '@src/assets/images/rocket.png';

const MainDiv = styled.div`
  width: 80% !important;
  margin: 0 auto;
  height: 100%;
  position: relative;
  min-height: 100vh;
  min-width: 100vw;
`;

export default function App() {
  const parallax = useRef<IParallax>(null!);

  const scroll = (page: number) => {
    parallax.current.scrollTo(page);
  };

  return (
    <MainDiv>
      <Parallax
        ref={parallax}
        pages={5}
        className="stars"
      >
        <Header scroll={scroll} />
        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <MainTitle />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          onClick={() => parallax.current.scrollTo(2)}
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Second />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(3)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Third />
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          onClick={() => parallax.current.scrollTo(4)}
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <MainTitle />
        </ParallaxLayer>
        <ParallaxLayer
          offset={4}
          onClick={() => parallax.current.scrollTo(0)}
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{
            position: 'relative',
            top: 400,
          }}
          >
            <Image src={rocket} width="1500" height="500" />
          </div>
        </ParallaxLayer>
      </Parallax>
    </MainDiv>
  );
}
