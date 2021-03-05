import React from "react";
import styled, { keyframes } from "styled-components";
import PanIcon from "./PanIcon";
import PancakeIcon from "./PancakeIcon";
import { SpinnerProps } from "./types";

const rotate = keyframes`
0% {
  transform: scale(1,1);
}
50% {
  transform: scale(1.3,1.3);
}
100% {
  transform: scale(1,1);
}

`;

const float = keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(10px);
	}
	100% {
		transform: translatey(0px);
	}
`;

const Container = styled.div`
  position: relative;
`;

const RotatingPancakeIcon = styled(PancakeIcon)`
  top: 0;
  left: 0;
  animation: ${rotate} 2s linear infinite;
  transform: translate3d(0, 0, 0);
  image{
    height: 100%;
  }
`;

const FloatingPanIcon = styled(PanIcon)`
  animation: ${float} 6s ease-in-out infinite;
  transform: translate3d(0, 0, 0);
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <RotatingPancakeIcon width={`${size * 2}px`} />
      {/* <FloatingPanIcon width={`${size}px`} /> */}
    </Container>
  );
};

export default Spinner;
