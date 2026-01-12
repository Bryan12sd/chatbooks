import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

function SvgIconSizeAdd(props) {
  return (
    <Svg
      id="icon-size-add_svg__Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      x={0}
      y={0}
      viewBox="0 0 321.9 287.1"
      xmlSpace="preserve"
      {...props}>
      <Path
        fill="#599BEE"
        d="M71.9 259.4c0 17 11.9 27.7 29.3 27.7 15 0 23.9-5 28.1-17.3l16.6-46.2h101.6l16.2 46.2c4.6 12.3 14.6 17.3 28.5 17.3 16.2 0 29.7-12.3 29.7-27.7 0-6.9-3.9-18.1-6.2-24.2L239.5 23.1C232.6 3.5 219.9 0 205.6 0h-15c-15.4 0-25.4 5-30.8 19.2L78.2 235.1c-2.4 6.3-6.3 17.4-6.3 24.3zM197 68.5h.8l35.8 111.2h-73.9L197 68.5z"
      />
      <Path
        fill="none"
        stroke="#599bee"
        strokeWidth={9.759}
        strokeMiterlimit={10}
        d="M21.4 284.6V140.4"
      />
      <Path fill="#599BEE" d="M0 150.1l21.4-43.3 21.4 43.3" />
    </Svg>
  );
}

export default SvgIconSizeAdd;
