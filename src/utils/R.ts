class RColor {
  RED = '#65000b';

  BG_LIGHT = '#f2f2f2';
  BG_DARK = '#f6f5f3';

  BORDER_DARK = "#e5e5e5";
  BORDER_LIGHT = "#e5e5e5";

  TEXT_DARK = '#000000';
  TEXT_LIGHT = '#5e5637';


  TEXT_INPUT_BG = '#FFF';


  BUTTON_YELLOW = '#ffd964';
  BUTTON_YELLOW_DISABLED = '#ffd96470';

}

class RStyle {
  BORDER_RADIUS = {
    SMALL: 8,
    MIDDLE: 12,
    BIG: 16
  };
  TEXT_INPUT = {
    HEIGHT: 40,
    PADDING: 10
  };
  FONT_SIZE = {
    SMALL: 12,
    MIDDLE: 16,
    BIG: 20,
    BIGGER: 32
  };
  SHADOW_WRAPPER = {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  };
  PADDING = {
    SMALL: 8,
    MIDDLE: 10,
    BIG: 12
  }
  BUTTON_OPACITY = 0.8
  BOTTOM_NAVIGATION =
    {
      ICON: {
        SIZE: 26,
        ACTIVE_COLOR: '#f7ca60',
        INACTIVE_COLOR: R.color.TEXT_DARK,
        STYLE: { marginTop: 0 }
      }
    }
}

class RInitial {
  TASK_OBJECT = {
    title: '',
    text: '',
    important: false
  }
}

class RCheckProps {
  TASK_TITLE_MINIMUM = 4;
  TASK_TEXT_MINIMUM = 8;
}



export default class R {
  static color = new RColor();
  static style = new RStyle();
  static initial = new RInitial();
  static checkProps = new RCheckProps();

}
