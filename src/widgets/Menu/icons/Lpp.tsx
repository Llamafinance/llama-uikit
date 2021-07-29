import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M7.7 19.2C3.7 19.2.5 16 .5 12s3.2-7.2 7.2-7.2S14.9 8 14.9 12s-3.2 7.2-7.2 7.2zm0-13.4c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2c3.4 0 6.2-2.8 6.2-6.2s-2.7-6.2-6.2-6.2z" /><path d="M16.3 19.2c-4 0-7.2-3.2-7.2-7.2s3.2-7.2 7.2-7.2S23.5 8 23.5 12s-3.2 7.2-7.2 7.2zm0-13.4c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2c3.4 0 6.2-2.8 6.2-6.2s-2.8-6.2-6.2-6.2z" />
    </Svg>
  );
};

export default Icon;

