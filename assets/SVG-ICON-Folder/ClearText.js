import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const ClearText = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={13} cy={12} r={11} fill="#EFEFF4" />
    <Path
      d="M17.568 6.52a.812.812 0 0 0-.577.242l-4.04 4.079-4.038-4.079a.81.81 0 0 0-1.388.358.83.83 0 0 0 .235.807l4.039 4.078-4.04 4.078a.83.83 0 0 0 .36 1.39.81.81 0 0 0 .794-.224l4.039-4.078 4.039 4.078c.16.16.368.24.576.24.33 0 .628-.2.754-.508a.83.83 0 0 0-.177-.897l-4.038-4.079 4.039-4.078a.83.83 0 0 0 0-1.165.812.812 0 0 0-.577-.241Z"
      fill="#fff"
      stroke="#fff"
      strokeWidth={0.5}
    />
  </Svg>
);

export default ClearText;
