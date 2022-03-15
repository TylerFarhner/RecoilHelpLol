import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const BlueCrossButton = (props) => (
    <Svg
        width={19}
        height={19}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Path
            d="M16.56 1.032c-.335 0-.656.134-.892.373L9.425 7.708 3.184 1.405a1.253 1.253 0 0 0-1.235-.365 1.267 1.267 0 0 0-.91.918c-.114.451.025.93.362 1.247l6.242 6.303-6.242 6.302c-.328.32-.46.793-.344 1.239.115.445.46.793.9.91.44.116.91-.017 1.227-.347l6.242-6.303 6.242 6.303c.246.248.569.372.89.372.51 0 .97-.31 1.165-.785a1.282 1.282 0 0 0-.272-1.388l-6.242-6.303 6.242-6.303a1.282 1.282 0 0 0 0-1.8 1.255 1.255 0 0 0-.892-.373Z"
            fill="#3DAEEE"
            stroke="#3DAEEE"
            strokeWidth={0.5}
        />
    </Svg>
);

export default BlueCrossButton;
