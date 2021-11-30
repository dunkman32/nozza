import React from 'react';
import styled from 'styled-components';
import MainTitle from '@src/components/mainTitle';
import Second from '@src/components/secondSlide';
import Third from '@src/components/thirdSlide';
import Header from '@src/components/header';
// @ts-ignore
import { FullPage, Slide } from 'react-full-page';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

const MainPage = styled.div`
  margin: 0 auto;
  height: 100%;
  position: relative;
  min-height: 100vh;
  `;

const Btns = styled.div`
  position: fixed;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  top: 45vh;
  gap: .5rem;
`;

const BtnChecked = styled(RadioButtonCheckedIcon)`
  color: rgba(108, 130, 191, .75);
`;
const BtnUnChecked = styled(RadioButtonUncheckedIcon)`
  color: rgba(108, 130, 191, 1);
  cursor: pointer;
`;

const CustomControls = (props: any) => {
  const renderSlidesNumbers = (currentSlideIndex: number) => {
    const {
      slidesCount,
      scrollToSlide,
    } = props;
    return Array(slidesCount)
      .fill(0)
      .map((_, i) => {
        const buttonProps = {
          disabled: currentSlideIndex === i,
          key: i,
          onClick: () => scrollToSlide(i),
        };
        return currentSlideIndex !== i ? (
          <BtnUnChecked
            type="button"
            {...buttonProps}
          />
        ) : <BtnChecked />;
      });
  };

  const {
    getCurrentSlideIndex,
  } = props;
  const currentSlideIndex = getCurrentSlideIndex();
  return (
    <Btns>
      {renderSlidesNumbers(currentSlideIndex)}
    </Btns>
  );
};

export default function App() {
  return (
    <MainPage>
      <Header />
      <FullPage
        controls={CustomControls}
        duration={800}
      >
        <Slide>
          <MainTitle />
        </Slide>
        <Slide style={{
          animationTimingFunction: 'cubic-bezier(0.1, -0.6, 0.2, 0)',
        }}
        >
          <Second />
        </Slide>
        <Slide>
          <Third />
        </Slide>
      </FullPage>
    </MainPage>
  );
}
