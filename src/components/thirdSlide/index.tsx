import React from 'react';
import styled from 'styled-components';
import Card from '@src/components/thirdSlide/cards';

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
  gap: 1rem;
  margin-bottom: 2rem;
`;
const Welcome = styled.span`
  min-width: 400px;
  max-width: 60%;
  margin: 0 auto;
  color: #6c82bf;
  font-weight: 700;
  font-size: 1.75rem;
  font-style: italic;
  text-align: center;
`;
const Cards = styled.span`
  display: flex;
  gap: 2rem;
`;

const Index = () => (
  <Main>
    <TitleDiv>
      <Welcome>
        # Welcome to our team
      </Welcome>
    </TitleDiv>
    <Cards>
      {
        [0, 1, 2].map((el) => (
          <Card key={el} />
        ))
      }
    </Cards>
  </Main>
);

export default Index;
