import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowDown = (props) => (
  <Svg
    width={12}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M5.283 1.773V12.43L1.975 9.223a.638.638 0 0 0-.608-.165.616.616 0 0 0-.447.433.594.594 0 0 0 .17.59l4.376 4.242a.64.64 0 0 0 .884 0l4.375-4.243a.593.593 0 0 0-.008-.85.64.64 0 0 0-.876-.007l-3.308 3.208V1.773a.616.616 0 0 0-.625-.606.616.616 0 0 0-.625.606Z"
      fill="#3DAEEE"
      stroke="#3DAEEE"
      strokeWidth={0.5}
    />
  </Svg>
);

export default ArrowDown;
