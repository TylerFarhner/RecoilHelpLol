import * as React from "react"
import Svg, { Path } from "react-native-svg"

const GreyRightArrow = (props) => (
  <Svg
    width={10}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M9.4 10.139a.8.8 0 0 0-.2-.482l-7.2-8A.803.803 0 1 0 .805 2.732l6.718 7.463-6.718 7.462a.802.802 0 1 0 1.193 1.076l7.2-8a.801.801 0 0 0 .2-.594Z"
      fill="#D1D1D6"
      stroke="#D1D1D6"
    />
  </Svg>
)

export default GreyRightArrow
