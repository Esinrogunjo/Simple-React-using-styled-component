import React from "react";
import styled from "styled-components";
const StyledSVG = styled.svg`
  width: 100%;
  height: 64px;
  stroke: #f8f9fa;
  fill: #f8f9fa;
`;

export const figure1 = () => {
  return (
    <StyledSVG
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 1921 273"
      xml:space="preserve"
    >
      <polygon points="0,273 1921,273 1921,0 "></polygon>
    </StyledSVG>
  );
};

export const figure2 = () => {
  return (
    <StyledSVG
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="100%"
      height="64px"
      viewBox="0 0 1921 273"
      style="margin-bottom: -8px; enable-background:new 0 0 1921 273;"
      xml:space="preserve"
    >
      <polygon class="fill-gray-100" points="1921,0 0,0 0,273 "></polygon>
    </StyledSVG>
  );
};
