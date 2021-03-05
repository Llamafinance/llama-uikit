import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="16 16 32 32" {...props}>
     <image width="205" height="26" href="/images/lama-token.svg"></image>
    </Svg>
  );
};

export default Icon;
