import * as React from "react"
import Svg, { Path } from "react-native-svg"
const HomeSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    viewBox="0 0 1024 1024"
    {...props}
  >
    <Path d="M512 128 128 447.936V896h255.936V640H640v256h255.936V447.936z" />
  </Svg>
)
export default HomeSvg