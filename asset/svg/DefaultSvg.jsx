import * as React from "react"
import Svg, { G, Path, Circle } from "react-native-svg"

function DefaultSvg(props) {
  return (
    <Svg
      width="50px"
      height="50px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path d="M12 8L12 12" />
        <Path d="M12 16L12 16" />
        <Circle cx={12} cy={12} data-name="--Circle" r={10} />
      </G>
    </Svg>
  )
}

export default DefaultSvg
