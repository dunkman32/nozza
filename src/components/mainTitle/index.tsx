import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import dev from '@src/assets/images/bg2.png';

const HeaderImage = styled.div`
  align-items: center;
  width: 88%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  z-index: 2;
  height: 98vh;
`;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem
`;
const Welcome = styled.span`
  min-width: 400px;
  color: #000;
  font-weight: 500;
  font-size: 1.75rem;
`;
const WelcomeName = styled.span`
  color: #6c82bf;
  font-size: 1.75rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const WelcomeDiv = styled.div`
  background-color: #6c82bf;
  width: 1.125rem;
  height: 2rem;
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
  <HeaderImage>
    <TitleDiv>
      <WelcomeWrapper>
        <WelcomeDiv />
        <Welcome>
          Welcome to the
          {' '}
          <WelcomeName>cosmic dev</WelcomeName>
        </Welcome>
      </WelcomeWrapper>
      <WelcomeDesc>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </WelcomeDesc>
    </TitleDiv>
    <Image src={dev} width="600" height="400" />
  </HeaderImage>
);

export default Index;
