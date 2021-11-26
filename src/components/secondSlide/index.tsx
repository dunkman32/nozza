import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import bash from '@src/assets/images/bg/bash.svg';

const Main = styled.div`
  align-items: center;
  width: 88%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;
`;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem
`;
const Welcome = styled.span`
  min-width: 400px;
  max-width: 60%;
  margin: 0 auto;
  color: #883a3a;
  font-weight: 500;
  font-size: 1.25rem;
  font-style: italic;
`;
const WelcomeName = styled.span`
  color: #6c82bf;
  font-size: 1.25rem;
  font-weight: bold;
  font-style: normal;
  text-transform: uppercase;
`;

const WelcomeWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const WelcomeDesc = styled.span`
  width: 500px;
  color: rgba(0, 0, 0, 0.73);
  font-weight: 400;
  font-size: 1rem;
`;

const Index = () => (
  <Main>
    <TitleDiv>
      <WelcomeWrapper>
        <Welcome>
          &quot;If debugging is the process of removing bugs, then programming
          must be the process of putting them in&quot;
          {' '}
          <WelcomeName>(Edsger Dijkstra)</WelcomeName>
        </Welcome>
      </WelcomeWrapper>
      <WelcomeDesc />
    </TitleDiv>
    <Image src={bash} width="600" height="400" />
  </Main>
);

export default Index;
