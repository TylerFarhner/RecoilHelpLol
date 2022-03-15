import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ModalArrow = (props) => (
  <Svg
    width={6}
    height={11}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M5.499 5.468a.454.454 0 0 0-.114-.273L1.296.652a.456.456 0 1 0-.678.61L4.434 5.5.618 9.738a.456.456 0 1 0 .678.61l4.09-4.543a.454.454 0 0 0 .113-.337Z"
      fill="#394168"
      stroke="#394168"
    />
  </Svg>
);

export default ModalArrow;
