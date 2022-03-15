import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Card = ({ focused }) => (
  <Svg width={27} height={20} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 3.471C1 2.108 2.127 1 3.51 1H23.49C24.872 1 26 2.108 26 3.471v13.055C26 17.889 24.872 19 23.489 19H3.51C2.127 19 1 17.889 1 16.526V3.471ZM23.489 1.88H3.51c-.905 0-1.62.701-1.62 1.592v1.936h23.217V3.471c0-.891-.715-1.592-1.62-1.592ZM1.892 6.287h23.216v2.189H1.892v-2.19Zm23.216 3.068H1.892v7.171c0 .891.714 1.595 1.619 1.595h19.978c.904 0 1.62-.704 1.62-1.595V9.355Zm-20.488 2.9a.447.447 0 0 0-.395.216.434.434 0 0 0 0 .445c.082.138.233.22.395.217h5.611a.443.443 0 0 0 .437-.44.443.443 0 0 0-.437-.439H4.62Zm-.394 2.59a.447.447 0 0 1 .394-.216h2.396a.447.447 0 0 1 .395.216.434.434 0 0 1 0 .446.447.447 0 0 1-.395.216H4.62a.447.447 0 0 1-.394-.216.434.434 0 0 1 0-.446Z"
      fill={`${focused ? "#131936" : "#D1D1D6"}`}
    />
    <Path
      d="M1.892 5.407h-.5v.5h.5v-.5Zm23.216 0v.5h.5v-.5h-.5Zm0 .88h.5v-.5h-.5v.5Zm-23.216 0v-.5h-.5v.5h.5Zm23.216 2.189v.5h.5v-.5h-.5Zm-23.216 0h-.5v.5h.5v-.5Zm0 .879v-.5h-.5v.5h.5Zm23.216 0h.5v-.5h-.5v.5ZM4.225 12.47l-.429-.256.43.256Zm.395-.217-.011.5h.01v-.5Zm-.395.662.43-.256-.43.256Zm.395.217v-.5h-.011l.01.5Zm5.611 0v.5h.011l-.01-.5Zm0-.879.011-.5h-.01v.5ZM4.62 14.63l-.011.5h.01v-.5Zm-.394.216.429.256-.43-.256Zm2.79-.216v.5h.011l-.01-.5Zm.395.216-.43.256.43-.256Zm0 .446.43.256-.43-.256Zm-.395.216.011-.5h-.01v.5Zm-2.396 0v-.5h-.011l.01.5Zm-.394-.216-.43.256.43-.256ZM3.51.5C1.859.5.5 1.825.5 3.471h1c0-1.079.896-1.971 2.01-1.971v-1Zm19.978 0H3.51v1h19.978v-1ZM26.5 3.471C26.5 1.824 25.14.5 23.489.5v1c1.114 0 2.011.892 2.011 1.971h1Zm0 2.377V3.471h-1v2.377h1Zm0 3.069V5.848h-1v3.069h1Zm0 7.609V8.917h-1v7.609h1ZM23.489 19.5c1.652 0 3.011-1.328 3.011-2.974h-1c0 1.08-.897 1.974-2.011 1.974v1Zm-19.978 0h19.978v-1H3.51v1ZM.5 16.526c0 1.646 1.358 2.974 3.01 2.974v-1c-1.113 0-2.01-.894-2.01-1.974h-1Zm0-7.609v7.609h1V8.917h-1Zm0-3.069v3.069h1V5.848h-1Zm0-2.377v2.377h1V3.471h-1ZM3.51 2.38H23.49v-1H3.51v1ZM2.393 3.47c0-.607.482-1.092 1.119-1.092v-1c-1.173 0-2.12.917-2.12 2.092h1Zm0 1.936V3.471h-1v1.936h1Zm22.716-.5H1.892v1h23.216v-1Zm-.5-1.436v1.936h1V3.471h-1Zm-1.12-1.092c.637 0 1.12.485 1.12 1.092h1c0-1.175-.947-2.092-2.12-2.092v1Zm1.62 3.408H1.892v1h23.216v-1Zm.5 2.689v-2.19h-1v2.19h1Zm-23.716.5h23.216v-1H1.892v1Zm-.5-2.69v2.19h1v-2.19h-1Zm.5 3.569h23.216v-1H1.892v1Zm.5 6.671V9.355h-1v7.171h1Zm1.119 1.095c-.636 0-1.12-.487-1.12-1.095h-1c0 1.175.946 2.095 2.12 2.095v-1Zm19.978 0H3.51v1h19.978v-1Zm1.12-1.095c0 .608-.485 1.095-1.12 1.095v1c1.173 0 2.12-.92 2.12-2.095h-1Zm0-7.171v7.171h1V9.355h-1ZM4.654 12.727a.053.053 0 0 1-.046.027l.022-1a.948.948 0 0 0-.835.461l.859.512Zm0-.067a.066.066 0 0 1 0 .067l-.859-.512a.934.934 0 0 0 0 .957l.859-.512Zm-.046-.027c.016 0 .034.008.046.027l-.859.512a.948.948 0 0 0 .835.46l-.022-.999Zm5.622 0H4.62v1h5.611v-1Zm-.063.06c0-.039.03-.06.053-.06l.021 1a.943.943 0 0 0 .925-.94h-1Zm.053.061c-.023 0-.053-.02-.053-.06h1a.943.943 0 0 0-.926-.94l-.022 1Zm-5.601 0h5.611v-1H4.62v1Zm.01 1.375a.947.947 0 0 0-.834.46l.859.512a.053.053 0 0 1-.046.028l.022-1Zm2.386 0H4.62v1h2.396v-1Zm.824.46a.947.947 0 0 0-.835-.46l.022 1a.053.053 0 0 1-.046-.027l.86-.512Zm0 .958a.934.934 0 0 0 0-.957l-.859.511a.066.066 0 0 1 0-.066l.86.512Zm-.835.46c.34.008.66-.166.835-.46l-.859-.512a.053.053 0 0 1 .046-.027l-.022 1Zm-2.385 0h2.396v-1H4.62v1Zm-.824-.46a.948.948 0 0 0 .835.46l-.022-1c.016 0 .034.008.046.028l-.859.512Zm0-.957a.934.934 0 0 0 0 .957l.859-.512a.066.066 0 0 1 0 .066l-.859-.511Z"
      fill={`${focused ? "#131936" : "#D1D1D6"}`}
    />
  </Svg>
);

export default Card;