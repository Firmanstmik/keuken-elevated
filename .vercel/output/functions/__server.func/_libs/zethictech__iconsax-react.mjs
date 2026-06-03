import { r as reactExports, R as React } from "./react.mjs";
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
var _excluded$6 = ["variant", "color", "size"];
var Bold$6 = function Bold(_ref) {
  var color = _ref.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    fill: color,
    d: "M15.2 10.492l-1.97-1.97-3.21-3.21c-.68-.67-1.84-.19-1.84.77v11.84c0 .96 1.16 1.44 1.84.76l5.18-5.18c.83-.82.83-2.18 0-3.01z"
  }));
};
var Broken$6 = function Broken(_ref2) {
  var color = _ref2.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: "1.5",
    d: "M12.9 7.94l2.62 2.62c.77.77.77 2.03 0 2.8L9 19.87M9 4.04l1.04 1.04"
  }));
};
var Bulk$6 = function Bulk(_ref3) {
  var color = _ref3.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    fill: color,
    d: "M13.23 8.52l-5.05 3.79v5.61c0 .96 1.16 1.44 1.84.76l5.18-5.18c.83-.83.83-2.18 0-3.01l-1.97-1.97z",
    opacity: ".4"
  }), /* @__PURE__ */ React.createElement("path", {
    fill: color,
    d: "M8.18 6.08v6.23l5.05-3.79-3.21-3.21c-.68-.67-1.84-.19-1.84.77z"
  }));
};
var Linear$6 = function Linear(_ref4) {
  var color = _ref4.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: "1.5",
    d: "M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"
  }));
};
var Outline$6 = function Outline(_ref5) {
  var color = _ref5.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    fill: color,
    d: "M8.91 20.67c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l6.52-6.52c.48-.48.48-1.26 0-1.74L8.38 4.61a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l6.52 6.52c.51.51.8 1.2.8 1.93s-.28 1.42-.8 1.93l-6.52 6.52c-.15.14-.34.22-.53.22z"
  }));
};
var TwoTone$6 = function TwoTone(_ref6) {
  var color = _ref6.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: "1.5",
    d: "M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"
  }));
};
var chooseVariant$6 = function chooseVariant(variant, color) {
  switch (variant) {
    case "Bold":
      return /* @__PURE__ */ React.createElement(Bold$6, {
        color
      });
    case "Broken":
      return /* @__PURE__ */ React.createElement(Broken$6, {
        color
      });
    case "Bulk":
      return /* @__PURE__ */ React.createElement(Bulk$6, {
        color
      });
    case "Linear":
      return /* @__PURE__ */ React.createElement(Linear$6, {
        color
      });
    case "Outline":
      return /* @__PURE__ */ React.createElement(Outline$6, {
        color
      });
    case "TwoTone":
      return /* @__PURE__ */ React.createElement(TwoTone$6, {
        color
      });
    default:
      return /* @__PURE__ */ React.createElement(Linear$6, {
        color
      });
  }
};
var ArrowRight2 = /* @__PURE__ */ reactExports.forwardRef(function(_ref7, ref) {
  var _ref7$variant = _ref7.variant, variant = _ref7$variant === void 0 ? "Linear" : _ref7$variant, _ref7$color = _ref7.color, color = _ref7$color === void 0 ? "currentColor" : _ref7$color, _ref7$size = _ref7.size, size = _ref7$size === void 0 ? "24" : _ref7$size, rest = _objectWithoutProperties(_ref7, _excluded$6);
  return /* @__PURE__ */ React.createElement("svg", _extends({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }), chooseVariant$6(variant, color));
});
ArrowRight2.displayName = "ArrowRight2";
var _excluded$5 = ["variant", "color", "size"];
var Bold$5 = function Bold2(_ref) {
  var color = _ref.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M22 21.249h-1V9.979c0-.62-.28-1.2-.77-1.58L19 7.439l-.02-2.45c0-.55-.45-.99-1-.99h-3.41l-1.34-1.04c-.72-.57-1.74-.57-2.46 0l-7 5.44c-.49.38-.77.96-.77 1.57l-.05 11.28H2c-.41 0-.75.34-.75.75s.34.75.75.75h20c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Zm-15.5-8.5v-1.5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1Zm8 8.5h-5v-2.75c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v2.75Zm3-8.5c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1.5Z",
    fill: color
  }));
};
var Broken$5 = function Broken2(_ref2) {
  var color = _ref2.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M2 22h20M3 9.971c0-.61.29-1.19.77-1.57l7-5.45c.72-.56 1.73-.56 2.46 0l7 5.44c.49.38.77.96.77 1.58v12.03M2.95 22.001l.03-7.97",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M13 17h-2c-.83 0-1.5.67-1.5 1.5V22h5v-3.5c0-.83-.67-1.5-1.5-1.5ZM9.5 13.75h-2c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1ZM16.5 13.75h-2c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m19 7-.03-3h-4.4",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var Bulk$5 = function Bulk2(_ref3) {
  var color = _ref3.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M22 22.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    opacity: ".4",
    d: "M21 9.979v12.02H2.95L3 9.969c0-.61.28-1.19.77-1.57l7-5.44c.72-.57 1.74-.57 2.46 0l1.34 1.04L19 7.439l1.23.96c.49.38.77.96.77 1.58Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M13 17h-2c-.83 0-1.5.67-1.5 1.5V22h5v-3.5c0-.83-.67-1.5-1.5-1.5ZM9.5 13.75h-2c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1ZM16.5 13.75h-2c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1ZM19 7.44 14.57 4h3.41c.55 0 1 .44 1 .99L19 7.44Z",
    fill: color
  }));
};
var Linear$5 = function Linear2(_ref4) {
  var color = _ref4.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M2 22h20",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2.95 22 3 9.97c0-.61.29-1.19.77-1.57l7-5.45a2.01 2.01 0 0 1 2.46 0l7 5.44c.49.38.77.96.77 1.58V22",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M13 17h-2c-.83 0-1.5.67-1.5 1.5V22h5v-3.5c0-.83-.67-1.5-1.5-1.5ZM9.5 13.75h-2c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1ZM16.5 13.75h-2c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m19 7-.03-3h-4.4",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var Outline$5 = function Outline2(_ref5) {
  var color = _ref5.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M22 22.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3.7 21.999H2.2l.05-12.03c0-.85.39-1.64 1.06-2.16l7-5.45c.99-.77 2.38-.77 3.38 0l7 5.44c.66.52 1.06 1.33 1.06 2.17v12.03h-1.5V9.979c0-.38-.18-.75-.48-.99l-7-5.44a1.26 1.26 0 0 0-1.54 0l-7 5.45c-.3.23-.48.6-.48.98l-.05 12.02Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M14.5 22.75h-5c-.41 0-.75-.34-.75-.75v-3.5c0-1.24 1.01-2.25 2.25-2.25h2c1.24 0 2.25 1.01 2.25 2.25V22c0 .41-.34.75-.75.75Zm-4.25-1.5h3.5V18.5c0-.41-.34-.75-.75-.75h-2c-.41 0-.75.34-.75.75v2.75ZM9.5 14.5h-2c-.96 0-1.75-.79-1.75-1.75v-1.5c0-.96.79-1.75 1.75-1.75h2c.96 0 1.75.79 1.75 1.75v1.5c0 .96-.79 1.75-1.75 1.75Zm-2-3.5c-.14 0-.25.11-.25.25v1.5c0 .14.11.25.25.25h2c.14 0 .25-.11.25-.25v-1.5c0-.14-.11-.25-.25-.25h-2ZM16.5 14.5h-2c-.96 0-1.75-.79-1.75-1.75v-1.5c0-.96.79-1.75 1.75-1.75h2c.96 0 1.75.79 1.75 1.75v1.5c0 .96-.79 1.75-1.75 1.75Zm-2-3.5c-.14 0-.25.11-.25.25v1.5c0 .14.11.25.25.25h2c.14 0 .25-.11.25-.25v-1.5c0-.14-.11-.25-.25-.25h-2ZM19 7.75c-.41 0-.75-.33-.75-.74l-.02-2.26h-3.65c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.4c.41 0 .75.33.75.74l.03 3c-.01.42-.34.76-.76.76 0 0 .01 0 0 0Z",
    fill: color
  }));
};
var TwoTone$5 = function TwoTone2(_ref6) {
  var color = _ref6.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M2 22h20",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2.95 22.001 3 9.971c0-.61.29-1.19.77-1.57l7-5.45c.72-.56 1.73-.56 2.46 0l7 5.44c.49.38.77.96.77 1.58v12.03",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("path", {
    opacity: ".4",
    d: "M13 17h-2c-.83 0-1.5.67-1.5 1.5V22h5v-3.5c0-.83-.67-1.5-1.5-1.5ZM9.5 13.75h-2c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1ZM16.5 13.75h-2c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m19 7-.03-3h-4.4",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var chooseVariant$5 = function chooseVariant2(variant, color) {
  switch (variant) {
    case "Bold":
      return /* @__PURE__ */ React.createElement(Bold$5, {
        color
      });
    case "Broken":
      return /* @__PURE__ */ React.createElement(Broken$5, {
        color
      });
    case "Bulk":
      return /* @__PURE__ */ React.createElement(Bulk$5, {
        color
      });
    case "Linear":
      return /* @__PURE__ */ React.createElement(Linear$5, {
        color
      });
    case "Outline":
      return /* @__PURE__ */ React.createElement(Outline$5, {
        color
      });
    case "TwoTone":
      return /* @__PURE__ */ React.createElement(TwoTone$5, {
        color
      });
    default:
      return /* @__PURE__ */ React.createElement(Linear$5, {
        color
      });
  }
};
var House = /* @__PURE__ */ reactExports.forwardRef(function(_ref7, ref) {
  var _ref7$variant = _ref7.variant, variant = _ref7$variant === void 0 ? "Linear" : _ref7$variant, _ref7$color = _ref7.color, color = _ref7$color === void 0 ? "currentColor" : _ref7$color, _ref7$size = _ref7.size, size = _ref7$size === void 0 ? "24" : _ref7$size, rest = _objectWithoutProperties(_ref7, _excluded$5);
  return /* @__PURE__ */ React.createElement("svg", _extends({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }), chooseVariant$5(variant, color));
});
House.displayName = "House";
var _excluded$4 = ["variant", "color", "size"];
var Bold$4 = function Bold3(_ref) {
  var color = _ref.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    fill: color,
    d: "M11.05 14.95L9.2 16.8c-.39.39-1.01.39-1.41.01-.11-.11-.22-.21-.33-.32a28.414 28.414 0 01-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41C2.24 8.67 2 7.58 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56l2.32 3.27c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.1.1.21.2.31.3.4.39.41 1.03.01 1.43zM21.97 18.33a2.54 2.54 0 01-.25 1.09c-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.01 0-.02.01-.03.01-.59.24-1.23.37-1.92.37-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98c-.39-.29-.78-.58-1.15-.89l3.27-3.27c.28.21.53.37.74.48.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78z"
  }));
};
var Broken$4 = function Broken3(_ref2) {
  var color = _ref2.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M9.39 6.01c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.54.53 1.06 1.02 1.59 1.47.52.44.95.74 1.29.92.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78 0 .36-.08.73-.25 1.09-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.6.25-1.25.38-1.95.38-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98a28.75 28.75 0 0 1-3.28-2.8 28.414 28.414 0 0 1-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41C2.24 8.67 2 7.58 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var Bulk$4 = function Bulk3(_ref3) {
  var color = _ref3.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    opacity: ".4",
    d: "m11.79 14.21-3.27 3.27c-.36-.32-.71-.65-1.05-.99a28.414 28.414 0 0 1-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41C2.24 8.67 2 7.58 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56l2.32 3.27c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.36.35.71.69 1.06.99Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M21.97 18.33a2.54 2.54 0 0 1-.25 1.09c-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.01 0-.02.01-.03.01-.59.24-1.23.37-1.92.37-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98c-.39-.29-.78-.58-1.15-.89l3.27-3.27c.28.21.53.37.74.48.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78Z",
    fill: color
  }));
};
var Linear$4 = function Linear3(_ref4) {
  var color = _ref4.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M21.97 18.33c0 .36-.08.73-.25 1.09-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.6.25-1.25.38-1.95.38-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98a28.75 28.75 0 0 1-3.28-2.8 28.414 28.414 0 0 1-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41C2.24 8.67 2 7.58 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56l2.32 3.27c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.54.53 1.06 1.02 1.59 1.47.52.44.95.74 1.29.92.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10"
  }));
};
var Outline$4 = function Outline3(_ref5) {
  var color = _ref5.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M17.45 22.75c-1.13 0-2.32-.27-3.55-.79-1.2-.51-2.41-1.21-3.59-2.06-1.17-.86-2.3-1.82-3.37-2.87-1.06-1.07-2.02-2.2-2.87-3.36-.86-1.2-1.55-2.4-2.04-3.56-.52-1.24-.78-2.44-.78-3.57 0-.78.14-1.52.41-2.21.28-.71.73-1.37 1.34-1.94.77-.76 1.65-1.14 2.59-1.14.39 0 .79.09 1.13.25.39.18.72.45.96.81L10 5.58c.21.29.37.57.48.85.13.3.2.6.2.89 0 .38-.11.75-.32 1.1a4 4 0 0 1-.67.85l-.68.71c.01.03.02.05.03.07.12.21.36.57.82 1.11.49.56.95 1.07 1.41 1.54.59.58 1.08 1.04 1.54 1.42.57.48.94.72 1.16.83l-.02.05.73-.72c.31-.31.61-.54.9-.69.55-.34 1.25-.4 1.95-.11.26.11.54.26.84.47l3.32 2.36c.37.25.64.57.8.95.15.38.22.73.22 1.08 0 .48-.11.96-.32 1.41-.21.45-.47.84-.8 1.2-.57.63-1.19 1.08-1.91 1.37-.69.28-1.44.43-2.23.43Zm-11.86-20c-.55 0-1.06.24-1.55.72-.46.43-.78.9-.98 1.41-.21.52-.31 1.07-.31 1.66 0 .93.22 1.94.66 2.98.45 1.06 1.08 2.16 1.88 3.26.8 1.1 1.71 2.17 2.71 3.18 1 .99 2.08 1.91 3.19 2.72 1.08.79 2.19 1.43 3.29 1.89 1.71.73 3.31.9 4.63.35.51-.21.96-.53 1.37-.99.23-.25.41-.52.56-.84.12-.25.18-.51.18-.77 0-.16-.03-.32-.11-.5a.757.757 0 0 0-.28-.3l-3.32-2.36c-.2-.14-.38-.24-.55-.31-.22-.09-.31-.18-.65.03-.2.1-.38.25-.58.45l-.76.75c-.39.38-.99.47-1.45.3l-.27-.12c-.41-.22-.89-.56-1.42-1.01-.48-.41-1-.89-1.63-1.51-.49-.5-.98-1.03-1.49-1.62-.47-.55-.81-1.02-1.02-1.41l-.12-.3c-.06-.23-.08-.36-.08-.5 0-.36.13-.68.38-.93l.75-.78c.2-.2.35-.39.45-.56.08-.13.11-.24.11-.34 0-.08-.03-.2-.08-.32-.07-.16-.18-.34-.32-.53L6.46 3.17a.922.922 0 0 0-.37-.31c-.16-.07-.33-.11-.5-.11Zm8.36 12.26-.16.68.27-.7c-.05-.01-.09 0-.11.02Z",
    fill: color
  }));
};
var TwoTone$4 = function TwoTone3(_ref6) {
  var color = _ref6.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M21.97 18.33c0 .36-.08.73-.25 1.09-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.6.25-1.25.38-1.95.38-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98a28.75 28.75 0 0 1-3.28-2.8 28.414 28.414 0 0 1-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41C2.24 8.67 2 7.58 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56l2.32 3.27c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.54.53 1.06 1.02 1.59 1.47.52.44.95.74 1.29.92.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10"
  }));
};
var chooseVariant$4 = function chooseVariant3(variant, color) {
  switch (variant) {
    case "Bold":
      return /* @__PURE__ */ React.createElement(Bold$4, {
        color
      });
    case "Broken":
      return /* @__PURE__ */ React.createElement(Broken$4, {
        color
      });
    case "Bulk":
      return /* @__PURE__ */ React.createElement(Bulk$4, {
        color
      });
    case "Linear":
      return /* @__PURE__ */ React.createElement(Linear$4, {
        color
      });
    case "Outline":
      return /* @__PURE__ */ React.createElement(Outline$4, {
        color
      });
    case "TwoTone":
      return /* @__PURE__ */ React.createElement(TwoTone$4, {
        color
      });
    default:
      return /* @__PURE__ */ React.createElement(Linear$4, {
        color
      });
  }
};
var Call = /* @__PURE__ */ reactExports.forwardRef(function(_ref7, ref) {
  var _ref7$variant = _ref7.variant, variant = _ref7$variant === void 0 ? "Linear" : _ref7$variant, _ref7$color = _ref7.color, color = _ref7$color === void 0 ? "currentColor" : _ref7$color, _ref7$size = _ref7.size, size = _ref7$size === void 0 ? "24" : _ref7$size, rest = _objectWithoutProperties(_ref7, _excluded$4);
  return /* @__PURE__ */ React.createElement("svg", _extends({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }), chooseVariant$4(variant, color));
});
Call.displayName = "Call";
var _excluded$3 = ["variant", "color", "size"];
var Bold$3 = function Bold4(_ref) {
  var color = _ref.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M17 3.5H7c-3 0-5 1.5-5 5v7c0 3.5 2 5 5 5h10c3 0 5-1.5 5-5v-7c0-3.5-2-5-5-5Zm.47 6.09-3.13 2.5c-.66.53-1.5.79-2.34.79-.84 0-1.69-.26-2.34-.79l-3.13-2.5a.77.77 0 0 1-.12-1.06c.26-.32.73-.38 1.05-.12l3.13 2.5c.76.61 2.05.61 2.81 0l3.13-2.5c.32-.26.8-.21 1.05.12.26.32.21.8-.11 1.06Z",
    fill: color
  }));
};
var Broken$3 = function Broken4(_ref2) {
  var color = _ref2.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M22 12.98v2.52c0 3.5-2 5-5 5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m17 9-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var Bulk$3 = function Bulk4(_ref3) {
  var color = _ref3.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    opacity: ".4",
    d: "M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M11.999 12.872c-.84 0-1.69-.26-2.34-.79l-3.13-2.5a.748.748 0 0 1 .93-1.17l3.13 2.5c.76.61 2.05.61 2.81 0l3.13-2.5c.32-.26.8-.21 1.05.12.26.32.21.8-.12 1.05l-3.13 2.5c-.64.53-1.49.79-2.33.79Z",
    fill: color
  }));
};
var Linear$3 = function Linear4(_ref4) {
  var color = _ref4.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m17 9-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var Outline$3 = function Outline4(_ref5) {
  var color = _ref5.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M17 21.25H7c-3.65 0-5.75-2.1-5.75-5.75v-7c0-3.65 2.1-5.75 5.75-5.75h10c3.65 0 5.75 2.1 5.75 5.75v7c0 3.65-2.1 5.75-5.75 5.75Zm-10-17c-2.86 0-4.25 1.39-4.25 4.25v7c0 2.86 1.39 4.25 4.25 4.25h10c2.86 0 4.25-1.39 4.25-4.25v-7c0-2.86-1.39-4.25-4.25-4.25H7Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M11.999 12.868c-.84 0-1.69-.26-2.34-.79l-3.13-2.5a.748.748 0 0 1 .93-1.17l3.13 2.5c.76.61 2.05.61 2.81 0l3.13-2.5c.32-.26.8-.21 1.05.12.26.32.21.8-.12 1.05l-3.13 2.5c-.64.53-1.49.79-2.33.79Z",
    fill: color
  }));
};
var TwoTone$3 = function TwoTone4(_ref6) {
  var color = _ref6.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("path", {
    opacity: ".4",
    d: "m17 9-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var chooseVariant$3 = function chooseVariant4(variant, color) {
  switch (variant) {
    case "Bold":
      return /* @__PURE__ */ React.createElement(Bold$3, {
        color
      });
    case "Broken":
      return /* @__PURE__ */ React.createElement(Broken$3, {
        color
      });
    case "Bulk":
      return /* @__PURE__ */ React.createElement(Bulk$3, {
        color
      });
    case "Linear":
      return /* @__PURE__ */ React.createElement(Linear$3, {
        color
      });
    case "Outline":
      return /* @__PURE__ */ React.createElement(Outline$3, {
        color
      });
    case "TwoTone":
      return /* @__PURE__ */ React.createElement(TwoTone$3, {
        color
      });
    default:
      return /* @__PURE__ */ React.createElement(Linear$3, {
        color
      });
  }
};
var Sms = /* @__PURE__ */ reactExports.forwardRef(function(_ref7, ref) {
  var _ref7$variant = _ref7.variant, variant = _ref7$variant === void 0 ? "Linear" : _ref7$variant, _ref7$color = _ref7.color, color = _ref7$color === void 0 ? "currentColor" : _ref7$color, _ref7$size = _ref7.size, size = _ref7$size === void 0 ? "24" : _ref7$size, rest = _objectWithoutProperties(_ref7, _excluded$3);
  return /* @__PURE__ */ React.createElement("svg", _extends({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }), chooseVariant$3(variant, color));
});
Sms.displayName = "Sms";
var _excluded$2 = ["variant", "color", "size"];
var Bold$2 = function Bold5(_ref) {
  var color = _ref.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm2.56 12c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.25h-4.5v4.5H14c.41 0 .75.34.75.75s-.34.75-.75.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.25v-4.5h-4.5V14c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v1.25h4.5v-4.5H10c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75h-1.25v4.5h4.5V10c0-.41.34-.75.75-.75s.75.34.75.75v4Z",
    fill: color
  }));
};
var Broken$2 = function Broken5(_ref2) {
  var color = _ref2.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M2 9V6.5C2 4.01 4.01 2 6.5 2H9M15 2h2.5C19.99 2 22 4.01 22 6.5V9M22 16v1.5c0 2.49-2.01 4.5-4.5 4.5H16M9 22H6.5C4.01 22 2 19.99 2 17.5V15M18 12v-2m-1.05 2H18h-1.05ZM6 12h8-8Zm0 0v-2 2Zm0 0v2-2Zm12 0v2-2ZM12 6h2m-2 12V6v12Zm0 0h2-2Zm0 0h-2 2Zm0-12h-2 2Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var Bulk$2 = function Bulk5(_ref3) {
  var color = _ref3.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    opacity: ".4",
    d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18 9.25c-.41 0-.75.34-.75.75v1.25h-4.5v-4.5H14c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-4c-.41 0-.75.34-.75.75s.34.75.75.75h1.25v4.5h-4.5V10c0-.41-.34-.75-.75-.75s-.75.34-.75.75v4c0 .41.34.75.75.75s.75-.34.75-.75v-1.25h4.5v4.5H10c-.41 0-.75.34-.75.75s.34.75.75.75h4c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.25v-4.5h4.5V14c0 .41.34.75.75.75s.75-.34.75-.75v-4c0-.41-.34-.75-.75-.75Z",
    fill: color
  }));
};
var Linear$2 = function Linear5(_ref4) {
  var color = _ref4.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M2 9.98V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7h-1",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m13 11 5.01-5.02H14M18.01 5.98v4.01M11 16.15v2.7C11 21.1 10.1 22 7.85 22h-2.7C2.9 22 2 21.1 2 18.85v-2.7C2 13.9 2.9 13 5.15 13h2.7c2.25 0 3.15.9 3.15 3.15Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var Outline$2 = function Outline5(_ref5) {
  var color = _ref5.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M2 9.75c-.41 0-.75-.34-.75-.75V6.5c0-2.89 2.36-5.25 5.25-5.25H9c.41 0 .75.34.75.75s-.34.75-.75.75H6.5c-2.07 0-3.75 1.68-3.75 3.75V9c0 .41-.34.75-.75.75ZM22 9.75c-.41 0-.75-.34-.75-.75V6.5c0-2.07-1.68-3.75-3.75-3.75H15c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.5c2.89 0 5.25 2.36 5.25 5.25V9c0 .41-.34.75-.75.75ZM17.5 22.75H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.5c2.07 0 3.75-1.68 3.75-3.75V16c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 2.89-2.36 5.25-5.25 5.25ZM9 22.75H6.5c-2.89 0-5.25-2.36-5.25-5.25V15c0-.41.34-.75.75-.75s.75.34.75.75v2.5c0 2.07 1.68 3.75 3.75 3.75H9c.41 0 .75.34.75.75s-.34.75-.75.75ZM18 14.75c-.41 0-.75-.34-.75-.75v-1.25H6.75V14c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v1.25h10.5V10c0-.41.34-.75.75-.75s.75.34.75.75v4c0 .41-.34.75-.75.75Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M14 18.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.25V6.75H10c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75h-1.25v10.5H14c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};
var TwoTone$2 = function TwoTone5(_ref6) {
  var color = _ref6.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M2 9.98V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7h-1",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("g", {
    opacity: ".4",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m13 11 5.01-5.02H14M18.01 5.98v4.01"
  })), /* @__PURE__ */ React.createElement("path", {
    opacity: ".4",
    d: "M11 16.15v2.7C11 21.1 10.1 22 7.85 22h-2.7C2.9 22 2 21.1 2 18.85v-2.7C2 13.9 2.9 13 5.15 13h2.7c2.25 0 3.15.9 3.15 3.15Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var chooseVariant$2 = function chooseVariant5(variant, color) {
  switch (variant) {
    case "Bold":
      return /* @__PURE__ */ React.createElement(Bold$2, {
        color
      });
    case "Broken":
      return /* @__PURE__ */ React.createElement(Broken$2, {
        color
      });
    case "Bulk":
      return /* @__PURE__ */ React.createElement(Bulk$2, {
        color
      });
    case "Linear":
      return /* @__PURE__ */ React.createElement(Linear$2, {
        color
      });
    case "Outline":
      return /* @__PURE__ */ React.createElement(Outline$2, {
        color
      });
    case "TwoTone":
      return /* @__PURE__ */ React.createElement(TwoTone$2, {
        color
      });
    default:
      return /* @__PURE__ */ React.createElement(Linear$2, {
        color
      });
  }
};
var Maximize = /* @__PURE__ */ reactExports.forwardRef(function(_ref7, ref) {
  var _ref7$variant = _ref7.variant, variant = _ref7$variant === void 0 ? "Linear" : _ref7$variant, _ref7$color = _ref7.color, color = _ref7$color === void 0 ? "currentColor" : _ref7$color, _ref7$size = _ref7.size, size = _ref7$size === void 0 ? "24" : _ref7$size, rest = _objectWithoutProperties(_ref7, _excluded$2);
  return /* @__PURE__ */ React.createElement("svg", _extends({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }), chooseVariant$2(variant, color));
});
Maximize.displayName = "Maximize";
var _excluded$1 = ["variant", "color", "size"];
var Bold$1 = function Bold6(_ref) {
  var color = _ref.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M10.65 19.11V4.89c0-1.35-.57-1.89-2.01-1.89H5.01C3.57 3 3 3.54 3 4.89v14.22C3 20.46 3.57 21 5.01 21h3.63c1.44 0 2.01-.54 2.01-1.89ZM21.002 19.11V4.89c0-1.35-.57-1.89-2.01-1.89h-3.63c-1.43 0-2.01.54-2.01 1.89v14.22c0 1.35.57 1.89 2.01 1.89h3.63c1.44 0 2.01-.54 2.01-1.89Z",
    fill: color
  }));
};
var Broken$1 = function Broken6(_ref2) {
  var color = _ref2.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M5.01 3C3.57 3 3 3.54 3 4.89v14.22C3 20.46 3.57 21 5.01 21h3.63c1.43 0 2.01-.54 2.01-1.89V4.89c0-1.35-.57-1.89-2.01-1.89M18.992 21c1.43 0 2.01-.54 2.01-1.89V4.89c0-1.35-.57-1.89-2.01-1.89h-3.63c-1.43 0-2.01.54-2.01 1.89v14.22c0 1.35.57 1.89 2.01 1.89",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var Bulk$1 = function Bulk6(_ref3) {
  var color = _ref3.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M10.65 19.11V4.89c0-1.35-.57-1.89-2.01-1.89H5.01C3.57 3 3 3.54 3 4.89v14.22C3 20.46 3.57 21 5.01 21h3.63c1.44 0 2.01-.54 2.01-1.89Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    opacity: ".4",
    d: "M21.002 19.11V4.89c0-1.35-.57-1.89-2.01-1.89h-3.63c-1.43 0-2.01.54-2.01 1.89v14.22c0 1.35.57 1.89 2.01 1.89h3.63c1.44 0 2.01-.54 2.01-1.89Z",
    fill: color
  }));
};
var Linear$1 = function Linear6(_ref4) {
  var color = _ref4.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M10.65 19.11V4.89c0-1.35-.57-1.89-2.01-1.89H5.01C3.57 3 3 3.54 3 4.89v14.22C3 20.46 3.57 21 5.01 21h3.63c1.44 0 2.01-.54 2.01-1.89ZM21 19.11V4.89C21 3.54 20.43 3 18.99 3h-3.63c-1.43 0-2.01.54-2.01 1.89v14.22c0 1.35.57 1.89 2.01 1.89h3.63c1.44 0 2.01-.54 2.01-1.89Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var Outline$1 = function Outline6(_ref5) {
  var color = _ref5.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M8.64 21.75H5.01c-1.86 0-2.76-.86-2.76-2.64V4.89c0-1.78.9-2.64 2.76-2.64h3.63c1.86 0 2.76.86 2.76 2.64v14.22c0 1.78-.9 2.64-2.76 2.64Zm-3.63-18c-1.08 0-1.26.27-1.26 1.14v14.22c0 .87.17 1.14 1.26 1.14h3.63c1.08 0 1.26-.27 1.26-1.14V4.89c0-.87-.17-1.14-1.26-1.14H5.01ZM18.992 21.75h-3.63c-1.86 0-2.76-.86-2.76-2.64V4.89c0-1.78.9-2.64 2.76-2.64h3.63c1.86 0 2.76.86 2.76 2.64v14.22c0 1.78-.9 2.64-2.76 2.64Zm-3.63-18c-1.08 0-1.26.27-1.26 1.14v14.22c0 .87.17 1.14 1.26 1.14h3.63c1.08 0 1.26-.27 1.26-1.14V4.89c0-.87-.17-1.14-1.26-1.14h-3.63Z",
    fill: color
  }));
};
var TwoTone$1 = function TwoTone6(_ref6) {
  var color = _ref6.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    opacity: ".4",
    d: "M10.65 19.11V4.89c0-1.35-.57-1.89-2.01-1.89H5.01C3.57 3 3 3.54 3 4.89v14.22C3 20.46 3.57 21 5.01 21h3.63c1.44 0 2.01-.54 2.01-1.89Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M21.002 19.11V4.89c0-1.35-.57-1.89-2.01-1.89h-3.63c-1.43 0-2.01.54-2.01 1.89v14.22c0 1.35.57 1.89 2.01 1.89h3.63c1.44 0 2.01-.54 2.01-1.89Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var chooseVariant$1 = function chooseVariant6(variant, color) {
  switch (variant) {
    case "Bold":
      return /* @__PURE__ */ React.createElement(Bold$1, {
        color
      });
    case "Broken":
      return /* @__PURE__ */ React.createElement(Broken$1, {
        color
      });
    case "Bulk":
      return /* @__PURE__ */ React.createElement(Bulk$1, {
        color
      });
    case "Linear":
      return /* @__PURE__ */ React.createElement(Linear$1, {
        color
      });
    case "Outline":
      return /* @__PURE__ */ React.createElement(Outline$1, {
        color
      });
    case "TwoTone":
      return /* @__PURE__ */ React.createElement(TwoTone$1, {
        color
      });
    default:
      return /* @__PURE__ */ React.createElement(Linear$1, {
        color
      });
  }
};
var Pause = /* @__PURE__ */ reactExports.forwardRef(function(_ref7, ref) {
  var _ref7$variant = _ref7.variant, variant = _ref7$variant === void 0 ? "Linear" : _ref7$variant, _ref7$color = _ref7.color, color = _ref7$color === void 0 ? "currentColor" : _ref7$color, _ref7$size = _ref7.size, size = _ref7$size === void 0 ? "24" : _ref7$size, rest = _objectWithoutProperties(_ref7, _excluded$1);
  return /* @__PURE__ */ React.createElement("svg", _extends({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }), chooseVariant$1(variant, color));
});
Pause.displayName = "Pause";
var _excluded = ["variant", "color", "size"];
var Bold7 = function Bold8(_ref) {
  var color = _ref.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M17.49 9.6 5.6 16.77c-.7.42-1.6-.08-1.6-.9v-8c0-3.49 3.77-5.67 6.8-3.93l4.59 2.64 2.09 1.2c.69.41.7 1.41.01 1.82ZM18.089 15.46l-4.05 2.34-4.04 2.33c-1.45.83-3.09.66-4.28-.18-.58-.4-.51-1.29.1-1.65l12.71-7.62c.6-.36 1.39-.02 1.5.67.25 1.55-.39 3.22-1.94 4.11Z",
    fill: color
  }));
};
var Broken7 = function Broken8(_ref2) {
  var color = _ref2.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M17.13 7.98c3.83 2.21 3.83 5.83 0 8.04l-3.09 1.78-3.09 1.78C7.13 21.79 4 19.98 4 15.56V8.44c0-4.42 3.13-6.23 6.96-4.02l2.25 1.3",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var Bulk7 = function Bulk8(_ref3) {
  var color = _ref3.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M18.7 8.98 4.14 17.71c-.09-.33-.14-.68-.14-1.04V7.33c0-3.08 3.33-5 6-3.46l4.04 2.33 4.05 2.34c.22.13.43.27.61.44Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    opacity: ".4",
    d: "m18.089 15.46-4.05 2.34-4.04 2.33c-1.91 1.1-4.16.44-5.28-1.17l.42-.25 14.44-8.66c1 1.8.51 4.26-1.49 5.41Z",
    fill: color
  }));
};
var Linear7 = function Linear8(_ref4) {
  var color = _ref4.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M4 12V8.44c0-4.42 3.13-6.23 6.96-4.02l3.09 1.78 3.09 1.78c3.83 2.21 3.83 5.83 0 8.04l-3.09 1.78-3.09 1.78C7.13 21.79 4 19.98 4 15.56V12Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var Outline7 = function Outline8(_ref5) {
  var color = _ref5.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M7.87 21.28c-.79 0-1.54-.19-2.2-.57-1.56-.9-2.42-2.73-2.42-5.14V8.44c0-2.42.86-4.24 2.42-5.14 1.56-.9 3.57-.73 5.67.48l6.17 3.56c2.09 1.21 3.25 2.87 3.25 4.67 0 1.8-1.15 3.46-3.25 4.67l-6.17 3.56c-1.21.69-2.39 1.04-3.47 1.04Zm0-17.06c-.54 0-1.02.12-1.45.37-1.08.62-1.67 1.99-1.67 3.85v7.12c0 1.86.59 3.22 1.67 3.85 1.08.63 2.56.45 4.17-.48l6.17-3.56c1.61-.93 2.5-2.12 2.5-3.37s-.89-2.44-2.5-3.37l-6.17-3.56c-.98-.56-1.9-.85-2.72-.85Z",
    fill: color
  }));
};
var TwoTone7 = function TwoTone8(_ref6) {
  var color = _ref6.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M4 12V8.44c0-4.42 3.13-6.23 6.96-4.02l3.09 1.78 3.09 1.78c3.83 2.21 3.83 5.83 0 8.04l-3.09 1.78-3.09 1.78C7.13 21.79 4 19.98 4 15.56V12Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var chooseVariant7 = function chooseVariant8(variant, color) {
  switch (variant) {
    case "Bold":
      return /* @__PURE__ */ React.createElement(Bold7, {
        color
      });
    case "Broken":
      return /* @__PURE__ */ React.createElement(Broken7, {
        color
      });
    case "Bulk":
      return /* @__PURE__ */ React.createElement(Bulk7, {
        color
      });
    case "Linear":
      return /* @__PURE__ */ React.createElement(Linear7, {
        color
      });
    case "Outline":
      return /* @__PURE__ */ React.createElement(Outline7, {
        color
      });
    case "TwoTone":
      return /* @__PURE__ */ React.createElement(TwoTone7, {
        color
      });
    default:
      return /* @__PURE__ */ React.createElement(Linear7, {
        color
      });
  }
};
var Play = /* @__PURE__ */ reactExports.forwardRef(function(_ref7, ref) {
  var _ref7$variant = _ref7.variant, variant = _ref7$variant === void 0 ? "Linear" : _ref7$variant, _ref7$color = _ref7.color, color = _ref7$color === void 0 ? "currentColor" : _ref7$color, _ref7$size = _ref7.size, size = _ref7$size === void 0 ? "24" : _ref7$size, rest = _objectWithoutProperties(_ref7, _excluded);
  return /* @__PURE__ */ React.createElement("svg", _extends({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }), chooseVariant7(variant, color));
});
Play.displayName = "Play";
export {
  ArrowRight2 as A,
  Call as C,
  House as H,
  Maximize as M,
  Pause as P,
  Sms as S,
  Play as a
};
