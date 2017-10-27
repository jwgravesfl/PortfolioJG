import React, { Component } from 'react';
import { StaggeredMotion, spring } from 'react-motion';
import styled from 'styled-components';
import Page1Middle from './Page1Middle.jsx';
// import Background from './images/CypressSunset.jpg';

const colors = [
  '#90A4AE',
  '#607D8B',
  '#455A64',
  '#263238',
  '#969696',
  '#525252',
  '#000000',
];

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  min-height: 90vh;
`;

const Box = styled.div`
  flex-basis: ${(props) => props.width}%;
  background: ${(props) => props.bgColor};
`;

const ContentWrapper = styled.div`
  background: ${(props) => props.bgColor};
  flex-basis: 100%;
`;

export default class EntranceAnimation extends Component {
  render(){
    const {
      children,
      startAnimation,
    } = this.props;
    return (
      <StaggeredMotion
        defaultStyles={[
          { width: 100 },
          { width: 100 },
          { width: 100 },
          { width: 100 },
          { width: 100 },
          { width: 100 },
        ]}
        styles={(prevStyles) => [
          { width: spring(0) },
          { width: spring(prevStyles[0].width) },
          { width: spring(prevStyles[1].width) },
          { width: spring(prevStyles[2].width) },
          { width: spring(prevStyles[3].width) },
          { width: spring(prevStyles[4].width) },
        ]}
      >
        {(styles) => (
          <Wrapper>
            <Box bgColor={colors[0]} width={styles[0].width} />
            <Box bgColor={colors[1]} width={styles[1].width} />
            <Box bgColor={colors[2]} width={styles[2].width} />
            <Box bgColor={colors[3]} width={styles[3].width} />
            <Box bgColor={colors[4]} width={styles[4].width} />
            <Box bgColor={colors[5]} width={styles[5].width} />
            <ContentWrapper bgColor={colors[6]}>
              <Page1Middle />
            </ContentWrapper>
          </Wrapper>
        )}
      </StaggeredMotion>
    );
  }
}
