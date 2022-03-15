import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const DropDown = (props) => (
    <Svg
        width={14}
        height={9}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.156 8.034a.629.629 0 0 1-.883 0L.48 2.31a.886.886 0 0 1 0-1.263.913.913 0 0 1 1.278 0l4.958 4.896 4.956-4.896a.914.914 0 0 1 1.279 0 .886.886 0 0 1 0 1.263L7.156 8.033Z"
            fill="#55A5FC"
        />
    </Svg>
);

export default DropDown;
