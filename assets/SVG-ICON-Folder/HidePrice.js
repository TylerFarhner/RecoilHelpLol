import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

const HidePrice = (props) => (
  <Svg
    width={19}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginBottom: 20 }}
    {...props}
  >
    <G opacity={0.608} fill="#fff">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.504 10.515a.66.66 0 0 0 .532.252c.15 0 .3-.04.423-.146a11.05 11.05 0 0 0 1.978-1.982c.75-.978.75-2.3 0-3.278C16.35 2.626 13.007 1 9.5 1c-1.46 0-2.893.278-4.23.806a.656.656 0 0 0-.368.86.68.68 0 0 0 .887.356c1.173-.463 2.428-.7 3.711-.7 3.125 0 5.976 1.387 7.846 3.819a1.373 1.373 0 0 1 0 1.705 9.258 9.258 0 0 1-1.733 1.744.64.64 0 0 0-.11.925ZM.563 8.64C2.65 11.374 5.993 13 9.5 13c1.474 0 2.893-.277 4.23-.82a.645.645 0 0 0 .368-.858.68.68 0 0 0-.887-.357 9.852 9.852 0 0 1-3.711.713c-3.125 0-5.976-1.4-7.832-3.819a1.373 1.373 0 0 1 0-1.705 9.212 9.212 0 0 1 1.365-1.44c.272-.251.3-.661.054-.939a.718.718 0 0 0-.969-.053 10.544 10.544 0 0 0-1.555 1.64c-.75.977-.75 2.299 0 3.277Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.775 7.006c0 .344.27.614.613.614A.615.615 0 0 0 12 7.006 3.008 3.008 0 0 0 9 4a2.92 2.92 0 0 0-1.837.626.61.61 0 0 0-.11.859.607.607 0 0 0 .857.11 1.779 1.779 0 0 1 2.865 1.411ZM6 6.994A3.008 3.008 0 0 0 9 10a2.89 2.89 0 0 0 1.898-.687.607.607 0 0 0 .086-.859.604.604 0 0 0-.857-.086c-.319.27-.71.405-1.127.405-.98 0-1.776-.798-1.776-1.78a.607.607 0 0 0-.612-.613.607.607 0 0 0-.612.614Z"
      />
      <Path d="M15.323 15a.683.683 0 0 1-.504-.226L2.173 1.111a.658.658 0 0 1 .054-.943.7.7 0 0 1 .968.054l12.632 13.676a.658.658 0 0 1-.054.943.715.715 0 0 1-.45.159Z" />
    </G>
  </Svg>
);

export default HidePrice;