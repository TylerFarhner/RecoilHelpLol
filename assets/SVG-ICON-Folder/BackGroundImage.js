import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={775}
    height={320}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M-2.505 91.719.198 304.268l372.498-.411L377.534.267S337.932 79.67 235.017 98.18C132.102 116.69-2.505 91.72-2.505 91.72Z"
      fill="#131936"
      stroke="#131936"
    />
  </Svg>
)

export default SvgComponent
