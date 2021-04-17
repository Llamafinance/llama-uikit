import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" width="24px" color="text" {...props} >
      <path d="M28 25V10a1 1 0 00-1-1h-4a1 1 0 00-1 1v15h-2V6a1 1 0 00-1-1h-4a1 1 0 00-1 1v19h-2V15a1 1 0 00-1-1H7a1 1 0 00-1 1v10H4V5H2v21a1 1 0 001 1h27v-2zm-4-14h2v14h-2zm-8-4h2v18h-2zm-8 9h2v9H8z">
      </path></Svg>
  );
};

export default Icon;
