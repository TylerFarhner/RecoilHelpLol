import * as React from "react"
import Svg, { Path } from "react-native-svg"

const EditIcon = (props) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.732.258a.881.881 0 0 1 1.246 0l3.764 3.765a.883.883 0 0 1 0 1.248L6.747 18.267l-.035.03-.073.061-.07.047-.074.038-.089.036-.04.017-5.246 1.471A.881.881 0 0 1 .035 18.87l1.45-5a.883.883 0 0 1 .27-.622L14.732.258Zm.302 7.225L12.52 4.965l-8.893 8.907 2.516 2.518 8.892-8.907ZM2.84 15.584 4.452 17.2l-2.268.635.655-2.25ZM13.768 3.72l2.515 2.518L17.87 4.65l-2.515-2.518-1.587 1.588Z"
      fill="#D1D1D6"
    />
  </Svg>
)

export default EditIcon
