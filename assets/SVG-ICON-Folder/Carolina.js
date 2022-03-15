import * as React from 'react';
import Svg, {Mask, Path, G, Ellipse} from 'react-native-svg';

const Carolina = (props) => (
    <Svg
        width={46}
        height={46}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Mask
            id="a"
            style={{
                maskType: 'alpha',
            }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={46}
            height={46}>
            <Path
                d="M44.407 22.829c0 12.06-9.722 21.828-21.704 21.828C10.723 44.657 1 34.89 1 22.83 1 10.768 10.722 1 22.703 1c11.982 0 21.704 9.768 21.704 21.829Z"
                stroke="white"
                strokeWidth={2}
            />
            <Path
                d="M12.931 21.706h16.372l-4.927-5.062a.973.973 0 0 1-.254-.93.944.944 0 0 1 .665-.683.915.915 0 0 1 .905.261l6.517 6.694a.975.975 0 0 1 0 1.352l-6.517 6.694a.914.914 0 0 1-1.305-.012.975.975 0 0 1-.011-1.34l4.927-5.062H12.931a.944.944 0 0 1-.931-.956c0-.528.417-.956.931-.956Z"
                fill="#8074FD"
            />
        </Mask>
        <G mask="url(#a)">
            <Ellipse
                cx={22.703}
                cy={22.829}
                rx={22.703}
                ry={22.829}
                fill="#8074FD"
            />
        </G>
    </Svg>
);

export default Carolina;
