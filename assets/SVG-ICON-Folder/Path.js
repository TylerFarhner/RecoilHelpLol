import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Plus = (props) => (
  <Svg
    width={21}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M18.686 8.59h-6.94V1.61c0-.88-.705-1.61-1.602-1.61-.876 0-1.602.709-1.602 1.61v6.98h-6.94C.726 8.59 0 9.297 0 10.2c0 .45.17.838.47 1.138.299.3.683.473 1.132.473h6.94v6.979c0 .45.171.837.47 1.138.3.3.684.472 1.132.472.876 0 1.602-.709 1.602-1.61v-6.98h6.94c.876 0 1.602-.708 1.602-1.61 0-.88-.705-1.61-1.602-1.61Z"
      fill="#fff"
    />
  </Svg>
);

export default Plus;
