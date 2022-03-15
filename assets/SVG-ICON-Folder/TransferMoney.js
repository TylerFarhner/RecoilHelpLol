import * as React from "react";
import Svg, {
  Mask,
  Path,
  G,
  Ellipse,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

const TransferMoney = (props) => (
  <Svg
    width={30}
    height={24}
    fill="#8074FD"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={30}
      height={24}
    >
      <Path
        d="M15 19.333h6.618V23L29 15.667l-7.382-7.334V12H8.382v3.667L1 8.333 8.382 1v3.667H15"
        stroke="#8074FD"
        strokeWidth={1.98}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Mask>
    <G mask="url(#a)">
      <Ellipse cx={14.703} cy={12.829} rx={22.703} ry={22.829} fill="#8074FD" />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={17.146}
        y1={70.768}
        x2={62.828}
        y2={20.449}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#394168" />
        <Stop offset={0.355} stopColor="#8074FD" />
        <Stop offset={0.903} stopColor="#8074FD" />
        <Stop offset={1} stopColor="#8074FD" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default TransferMoney;
