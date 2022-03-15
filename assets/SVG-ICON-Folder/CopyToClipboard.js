import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CopyToClipboard = (props) => (
    <Svg
        width={18}
        height={18}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.546 0A2.467 2.467 0 0 1 18 2.454v9.816a2.467 2.467 0 0 1-2.454 2.455h-.817v.818A2.473 2.473 0 0 1 12.272 18H2.458A2.473 2.473 0 0 1 0 15.543V5.729a2.473 2.473 0 0 1 2.458-2.457h.816v-.818A2.467 2.467 0 0 1 5.728 0h9.818Zm0 1.636H5.728a.799.799 0 0 0-.818.818v.818h7.362a2.473 2.473 0 0 1 2.457 2.457v7.36h.817c.467 0 .818-.351.818-.819V2.454a.799.799 0 0 0-.818-.818Zm-3.274 3.272H2.458a.804.804 0 0 0-.822.821v9.814c0 .467.354.82.822.82h9.814a.804.804 0 0 0 .82-.82V5.729a.804.804 0 0 0-.82-.82Z"
            fill="#D1D1D6"
        />
    </Svg>
);

export default CopyToClipboard;
