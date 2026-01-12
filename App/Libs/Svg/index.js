import React from 'react';
import SvgIconMenu1 from '../../Assets/Svg/JS/icon-menu-1';
import SvgIconMenu2 from '../../Assets/Svg/JS/icon-menu-2';
import SvgIconMenu3 from '../../Assets/Svg/JS/icon-menu-3';
import SvgIconMenu4 from '../../Assets/Svg/JS/icon-menu-4';
import SvgIconMenu5 from '../../Assets/Svg/JS/icon-menu-5';
import SvgIconMenu6 from '../../Assets/Svg/JS/icon-menu-6';
import SvgIconMenu7 from '../../Assets/Svg/JS/icon-menu-7';
import SvgIconMenu8 from '../../Assets/Svg/JS/icon-menu-8';
import SvgIconMenu9 from '../../Assets/Svg/JS/icon-menu-9';
import SvgIconSizeAdd from '../../Assets/Svg/JS/icon-size-add';
import SvgIconSizeReduce from '../../Assets/Svg/JS/icon-size-reduce';
import SvgIconDrawing from '../../Assets/Svg/JS/icon-drawing';
import SvgIconLogo from '../../Assets/Svg/JS/icon-logo';
import SvgIconConsole from '../../Assets/Svg/JS/icon-console';
import SvgIconOpenBook from '../../Assets/Svg/JS/icon-open-book';
import SvgIconSpeaker from '../../Assets/Svg/JS/icon-speaker';
import SvgIconArrowDown from '../../Assets/Svg/JS/icon-arrow-down';
import SvgIconArrowLeft from '../../Assets/Svg/JS/icon-arrow-left';
import SvgIconArrowRight from '../../Assets/Svg/JS/icon-arrow-right';
import SvgIconArrowUp from '../../Assets/Svg/JS/icon-arrow-up';

const components = {
  icon_menu_1: SvgIconMenu1,
  icon_menu_2: SvgIconMenu2,
  icon_menu_3: SvgIconMenu3,
  icon_menu_4: SvgIconMenu4,
  icon_menu_5: SvgIconMenu5,
  icon_menu_6: SvgIconMenu6,
  icon_menu_7: SvgIconMenu7,
  icon_menu_8: SvgIconMenu8,
  icon_menu_9: SvgIconMenu9,
  icon_size_add: SvgIconSizeAdd,
  icon_size_reduce: SvgIconSizeReduce,
  icon_drawing: SvgIconDrawing,
  icon_logo: SvgIconLogo,
  icon_console: SvgIconConsole,
  icon_open_book: SvgIconOpenBook,
  icon_speaker: SvgIconSpeaker,
  icon_arrow_down: SvgIconArrowDown,
  icon_arrow_left: SvgIconArrowLeft,
  icon_arrow_right: SvgIconArrowRight,
  icon_arrow_up: SvgIconArrowUp,
};

const Svg = props => {
  const SpecificIco = components[props.name];
  return (
    <SpecificIco
      style={props.style}
      width={props.width}
      height={props.height}
    />
  );
};

export default Svg;
