import * as React from "react"
import Svg, { Mask, Path, G, Circle } from "react-native-svg"

const CreditIcon = (props) => (
  <Svg
    width={38}
    height={41}
    fill="none"
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
      width={38}
      height={41}
    >
      <Path
        d="m32.633 22.265-6.286 1.428a2.884 2.884 0 0 0-2.204-1.142l-9.51-.409a5.877 5.877 0 0 0-3.796 1.225l-5.224 4.081-4.327 4.531c-.408.408-.367 1.102.041 1.47l6.327 6c.408.407 1.102.367 1.469-.042l3.796-3.959 6.571.653a9.908 9.908 0 0 0 6.408-1.632l9.306-6.327a3.31 3.31 0 0 0 1.347-3.51 3.27 3.27 0 0 0-3.918-2.367ZM8.348 37.245 3.53 32.672l2.694-2.816 4.816 4.57-2.693 2.817ZM34.02 26.427l-9.346 6.326a7.806 7.806 0 0 1-5.02 1.266l-6.735-.653-5.184-4.939L12.143 25a3.703 3.703 0 0 1 2.409-.776l9.51.408c.408 0 .734.327.775.735a.84.84 0 0 1-.612.898l-2.327.612c-.898.245-1.836.326-2.734.326l-2.694-.04c-.572 0-1.061.449-1.061 1.02 0 .572.449 1.061 1.02 1.061l2.694.082c1.102.04 2.245-.123 3.306-.367l2.326-.613a3.006 3.006 0 0 0 2.204-2.612l6.123-1.388c.612-.122 1.265.245 1.387.858.164.449-.04.938-.449 1.224ZM34.061 1H13.286a2.926 2.926 0 0 0-2.938 2.939v12.979a2.926 2.926 0 0 0 2.938 2.939h20.775a2.927 2.927 0 0 0 2.94-2.939V3.938A2.927 2.927 0 0 0 34.06 1ZM13.286 3.122h20.775c.45 0 .817.368.817.817v1.755H12.47V3.939c0-.45.367-.817.816-.817Zm20.775 14.612H13.286a.819.819 0 0 1-.816-.816V9.081h22.408v7.837a.819.819 0 0 1-.817.816Z"
        fill="#3DAEEE"
        stroke="#000"
        strokeWidth={0.6}
      />
      <Path
        d="M17.613 13.53h-2.816a.279.279 0 0 0-.286.286v1.633c0 .163.122.285.286.285h2.816a.279.279 0 0 0 .285-.285v-1.633c.041-.163-.122-.286-.285-.286ZM22.592 13.53h-2.816a.279.279 0 0 0-.286.286v1.633c0 .163.123.285.286.285h2.816a.279.279 0 0 0 .286-.285v-1.633c.04-.163-.122-.286-.286-.286ZM27.572 13.53h-2.817a.279.279 0 0 0-.285.286v1.633c0 .163.122.285.285.285h2.817a.279.279 0 0 0 .285-.285v-1.633a.279.279 0 0 0-.285-.286ZM32.551 13.53h-2.816a.279.279 0 0 0-.286.286v1.633c0 .163.123.285.286.285h2.816a.279.279 0 0 0 .286-.285v-1.633a.279.279 0 0 0-.286-.286Z"
        fill="#3DAEEE"
        stroke="#000"
        strokeWidth={0.6}
      />
    </Mask>
    <G mask="url(#a)">
      <Circle cx={20.5} cy={20.5} r={29.5} fill="#3DAEEE" />
    </G>
  </Svg>
)

export default CreditIcon