import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

function SvgIconSizeReduce(props) {
  return (
    <Svg
      id="icon-size-reduce_svg__Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      x={0}
      y={0}
      viewBox="0 0 278.2 211.3"
      xmlSpace="preserve"
      {...props}>
      <Path
        fill="#599BEE"
        d="M112.7 85.4l-34.2 3.9C35.4 94.3 0 107.4 0 153.9c0 35.4 31.6 57.4 63.5 57.4 29.6 0 55-8.4 77-32.7.8 17.3 8.9 32.7 33.1 32.7 13.5 0 25.4-8.8 25.4-21.5 0-8.9-5.8-14.2-5.8-37.7V57.7C193.2 17.3 155.9 0 102 0 44.3 0 12.7 28.5 12.7 50.8c0 11.6 9.6 21.6 23.8 21.6 22.3 0 23.5-30.8 65.1-30.8 18.9 0 35.4 6.9 35.4 23.1-.1 16.1-10.8 19.1-24.3 20.7zm24.2 48.1c0 20.8-18.8 40.8-49.6 40.8-19.2 0-31.2-10.4-31.2-23.1 0-17 12.7-24.3 36.2-27.7l20.4-3.1c6.5-1.1 18.1-3.1 24.3-8.9l-.1 22z"
      />
      <Path
        fill="none"
        stroke="#599bee"
        strokeWidth={9.759}
        strokeMiterlimit={10}
        d="M256.8 24.5v144.2"
      />
      <Path fill="#599BEE" d="M278.2 158.9l-21.4 43.3-21.3-43.3" />
    </Svg>
  );
}

export default SvgIconSizeReduce;
