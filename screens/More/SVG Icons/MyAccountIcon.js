import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={38}
    height={38}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M19.013 20.267a7.6 7.6 0 1 1 0-15.2 7.6 7.6 0 0 1 0 15.2Zm0-12.667a5.066 5.066 0 1 0 0 10.132 5.066 5.066 0 0 0 0-10.132Z"
      fill="#3DAEEE"
    />
    <Path
      d="M19.013 38a19.003 19.003 0 0 1-14.68-6.954l-.66-.81.66-.798a18.998 18.998 0 0 1 29.361 0l.659.797-.659.81v.001A19 19 0 0 1 19.014 38Zm-12.02-7.752a16.466 16.466 0 0 0 24.067 0 16.47 16.47 0 0 0-24.067 0Z"
      fill="#3DAEEE"
    />
    <Path
      d="M19.013 38A19.002 19.002 0 0 1 1.92 10.677a19 19 0 1 1 17.093 27.322V38Zm0-35.466A16.468 16.468 0 0 0 7.37 30.644a16.467 16.467 0 1 0 11.644-28.11Z"
      fill="#3DAEEE"
    />
  </Svg>
)

export default SvgComponent
