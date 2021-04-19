import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
    <g >
      <path d="M9.822 16.437l6.716-8.467-5.934-1.717-4.164 7.979z"></path>
      <path d="M21.428 8.124a1.309 1.309 0 00-1.839.213l-9.198 11.596-7.371-4.806 6.853-13.13A1.31 1.31 0 007.552.784L.149 14.97a1.31 1.31 0 00.445 1.702l9.367 6.106c.566.369 1.32.246 1.74-.283l9.94-12.532a1.31 1.31 0 00-.213-1.839zM22.635 13.414c-.723 0-1.31 2.07-1.31 2.793a1.31 1.31 0 002.62 0c0-.723-.587-2.793-1.31-2.793z"></path>
      </g>
    </Svg>
  );
};

export default Icon;
