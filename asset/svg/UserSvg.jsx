import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */
const UserSvg = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="Icons"
    x={0}
    y={0}
    width={50}
    height={50}
    style={{
      enableBackground: 'new 0 0 32 32',
    }}
    viewBox="0 0 32 32"
    {...props}>
    <Path
      {...props}
      d="M28 25c.9-1.2 1.6-2.5 2.1-3.9 0-.1.1-.2.1-.4.1-.2.1-.5.2-.7.1-.2.1-.4.2-.6 0-.2.1-.4.1-.6.1-.3.1-.6.1-.8 0-.2 0-.3.1-.5 0-.5.1-.9.1-1.4 0-8.3-6.7-15-15-15S1 7.7 1 16c0 .5 0 .9.1 1.4 0 .2 0 .3.1.5 0 .3.1.6.1.8 0 .2.1.4.1.6 0 .2.1.4.2.6.1.2.1.5.2.7 0 .1.1.2.1.4.5 1.5 1.2 2.8 2.1 4 2.7 3.6 7.1 6 12 6s9.2-2.4 12-6zm-12 4c-4.6 0-8.6-2.4-10.9-6 1.6-2.6 4.1-4.5 7.1-5.4-1.4-1.1-2.2-2.8-2.2-4.6 0-3.3 2.7-6 6-6s6 2.7 6 6c0 1.8-.8 3.5-2.1 4.6 2.9.9 5.4 2.9 7.1 5.4-2.4 3.6-6.4 6-11 6z"
    />
  </Svg>
);
export default UserSvg;
