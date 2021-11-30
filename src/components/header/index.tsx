import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import nozza from '@src/assets/images/avatars/MicrosoftTeams-image.png';

const Header = styled.div`
  align-items: center;
  width: 88%;
  margin: 1rem auto;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;;
`;

const Right = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`;

const Nav = styled.span`
  font-size: 1.5rem;
  font-style: italic;
  cursor: pointer;
  color: #4f6dbb;
  font-weight: 600;
`;

const ImgWrapper = styled.div`
  & img {
    border-radius: 50%;
  }
`;

const Index = () => (
  <Header>
    <Left>
      <ImgWrapper>
        <Image src={nozza} width="60" height="60" />
      </ImgWrapper>
    </Left>
    <Right>
      <Nav>
        Nav 1
      </Nav>
      <Nav>
        Nav 2
      </Nav>
    </Right>
  </Header>
);

export default Index;
