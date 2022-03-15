import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowRight = (props) => (
  <Svg
    width={15}
    height={11}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1.59 5.273h10.393L8.855 2.048a.622.622 0 0 1-.161-.593.6.6 0 0 1 .422-.435.58.58 0 0 1 .575.166l4.136 4.266c.23.238.23.623 0 .861L9.691 10.58a.578.578 0 0 1-.829-.008.623.623 0 0 1-.007-.854l3.128-3.225H1.59A.6.6 0 0 1 1 5.882a.6.6 0 0 1 .59-.609Z"
      fill="#3DAEEE"
      stroke="#3DAEEE"
      strokeWidth={0.5}
    />
  </Svg>
);

export default ArrowRight;
