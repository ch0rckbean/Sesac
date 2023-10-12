import React from 'react';
import styled from 'styled-components';

// CSS in JS : js 안에 css 작성
// styled-components, emotion, styled-jsx, ...

const StyledContainer = styled.div`
  display: flex;
`;

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgcolor || 'palegreen'};

  &:hover {
    transform: translateY(-20px);
  }
`;

export default function StyledComponent() {
  return (
    <StyledContainer>
      <StyledBox bgcolor='red'></StyledBox>
      <StyledBox bgcolor='orange'></StyledBox>
      <StyledBox bgcolor='yellow'></StyledBox>
      <StyledBox></StyledBox>
    </StyledContainer>
  );
}
