import * as React from "react"
import Svg, { Path } from "react-native-svg"

const BlueBlackArrow = (props) => (


  <Svg
    width={29}
    height={23}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M27.127 10.204H4.745l6.736-6.947c.331-.33.464-.818.347-1.277a1.293 1.293 0 0 0-.909-.937 1.247 1.247 0 0 0-1.237.358l-8.91 9.187a1.342 1.342 0 0 0 0 1.856l8.91 9.188c.5.497 1.293.49 1.784-.016.49-.507.498-1.325.015-1.84l-6.736-6.947h22.382c.703 0 1.273-.588 1.273-1.313s-.57-1.312-1.273-1.312Z"
      fill="#3DAEEE"
      stroke="#3DAEEE"
      strokeWidth={0.5}
    />
  </Svg>
)

export default BlueBlackArrow
