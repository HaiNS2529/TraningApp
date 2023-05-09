import * as React from 'react';
import Svg, {Defs, LinearGradient, Stop, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style, title */
const PromoSvg = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 512 512"
    width={50}
    height={50}
    {...props}>
    <Defs>
      <LinearGradient
        id="linear-gradient"
        x1={78}
        x2={416.927}
        y1={78}
        y2={416.927}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0} stopColor="#e85155" />
        <Stop offset={1} stopColor="#c21d2c" />
      </LinearGradient>
      <LinearGradient
        id="linear-gradient-2"
        x1={168.964}
        x2={318.972}
        y1={168.964}
        y2={318.972}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0} stopColor="#fff" />
        <Stop offset={1} stopColor="#f2eded" />
      </LinearGradient>
    </Defs>
    <Path
      d="m480.641 228.773-37.131-43.567a20.5 20.5 0 0 1-4.859-11.742l-4.557-57.058a41.8 41.8 0 0 0-38.5-38.5l-57.058-4.552a20.539 20.539 0 0 1-11.75-4.865l-43.562-37.127a41.8 41.8 0 0 0-54.448 0l-43.562 37.122a20.522 20.522 0 0 1-11.75 4.868L116.406 77.9a41.806 41.806 0 0 0-38.505 38.5l-4.547 57.055a20.518 20.518 0 0 1-4.87 11.747l-37.125 43.571a41.807 41.807 0 0 0 0 54.454l37.131 43.567a20.5 20.5 0 0 1 4.859 11.742l4.557 57.058a41.8 41.8 0 0 0 38.5 38.5l57.058 4.552a20.539 20.539 0 0 1 11.75 4.865l43.562 37.128a41.8 41.8 0 0 0 54.448 0l43.562-37.122a20.522 20.522 0 0 1 11.75-4.868l57.058-4.552a41.806 41.806 0 0 0 38.5-38.5l4.547-57.055a20.518 20.518 0 0 1 4.87-11.747l37.125-43.565a41.807 41.807 0 0 0 .005-54.457Z"
      style={{
        fill: props.fill,
      }}
    />
    <Path
      d="M202.667 234.667a32 32 0 1 1 32-32 32.035 32.035 0 0 1-32 32Zm0-42.667a10.667 10.667 0 1 0 10.666 10.667A10.679 10.679 0 0 0 202.667 192ZM309.333 341.333a32 32 0 1 1 32-32 32.035 32.035 0 0 1-32 32Zm0-42.666A10.667 10.667 0 1 0 320 309.333a10.678 10.678 0 0 0-10.667-10.666ZM181.333 341.333a10.667 10.667 0 0 1-7.541-18.208l149.333-149.333a10.665 10.665 0 1 1 15.083 15.083L188.875 338.208a10.628 10.628 0 0 1-7.542 3.125Z"
      className="cls-2"
      fill={props.fillIcon}
    />
  </Svg>
);
export default PromoSvg;
