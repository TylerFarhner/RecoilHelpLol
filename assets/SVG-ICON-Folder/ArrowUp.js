import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowUp = (props) => (
  <Svg
    width={12}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M6.517 13.894V3.236l3.308 3.208c.157.157.39.22.608.165a.616.616 0 0 0 .447-.433.594.594 0 0 0-.17-.59L6.333 1.345a.639.639 0 0 0-.884 0L1.075 5.587a.593.593 0 0 0 .008.85c.241.233.63.236.876.007l3.308-3.208v10.658c0 .335.28.606.625.606a.616.616 0 0 0 .625-.606Z"
      fill="#3DAEEE"
      stroke="#3DAEEE"
      strokeWidth={0.5}
    />
  </Svg>
);

export default ArrowUp;
