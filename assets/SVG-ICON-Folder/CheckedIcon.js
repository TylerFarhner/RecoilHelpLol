import * as React from "react";
import Svg, { Path } from "react-native-svg";

const CheckedIcon = (props) => (
  <Svg
    width={17}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.085.421a1.673 1.673 0 0 0-2.35.13L6.169 8.938 2.85 5.6a1.675 1.675 0 0 0-2.355-.015A1.643 1.643 0 0 0 .48 7.922l4.563 4.587c.313.315.74.491 1.186.491h.041c.46-.01.894-.21 1.2-.55l8.746-9.698a1.642 1.642 0 0 0-.13-2.331Z"
      fill="#fff"
    />
  </Svg>
);

export default CheckedIcon;
