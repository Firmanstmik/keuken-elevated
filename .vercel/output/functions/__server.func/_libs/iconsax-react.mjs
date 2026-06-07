import { r as reactExports, R as React } from "./react.mjs";
import { P as PropTypes } from "./prop-types.mjs";
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
var _excluded$b = ["variant", "color", "size"];
var Bold$b = function Bold(_ref) {
  var color = _ref.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    fill: color,
    d: "M15.2 10.492l-1.97-1.97-3.21-3.21c-.68-.67-1.84-.19-1.84.77v11.84c0 .96 1.16 1.44 1.84.76l5.18-5.18c.83-.82.83-2.18 0-3.01z"
  }));
};
var Broken$b = function Broken(_ref2) {
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
var Bulk$b = function Bulk(_ref3) {
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
var Linear$b = function Linear(_ref4) {
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
var Outline$b = function Outline(_ref5) {
  var color = _ref5.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    fill: color,
    d: "M8.91 20.67c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l6.52-6.52c.48-.48.48-1.26 0-1.74L8.38 4.61a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l6.52 6.52c.51.51.8 1.2.8 1.93s-.28 1.42-.8 1.93l-6.52 6.52c-.15.14-.34.22-.53.22z"
  }));
};
var TwoTone$b = function TwoTone(_ref6) {
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
var chooseVariant$b = function chooseVariant(variant, color) {
  switch (variant) {
    case "Bold":
      return /* @__PURE__ */ React.createElement(Bold$b, {
        color
      });
    case "Broken":
      return /* @__PURE__ */ React.createElement(Broken$b, {
        color
      });
    case "Bulk":
      return /* @__PURE__ */ React.createElement(Bulk$b, {
        color
      });
    case "Linear":
      return /* @__PURE__ */ React.createElement(Linear$b, {
        color
      });
    case "Outline":
      return /* @__PURE__ */ React.createElement(Outline$b, {
        color
      });
    case "TwoTone":
      return /* @__PURE__ */ React.createElement(TwoTone$b, {
        color
      });
    default:
      return /* @__PURE__ */ React.createElement(Linear$b, {
        color
      });
  }
};
var ArrowRight2 = /* @__PURE__ */ reactExports.forwardRef(function(_ref7, ref) {
  var variant = _ref7.variant, color = _ref7.color, size = _ref7.size, rest = _objectWithoutProperties(_ref7, _excluded$b);
  return /* @__PURE__ */ React.createElement("svg", _extends({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }), chooseVariant$b(variant, color));
});
ArrowRight2.propTypes = {
  variant: PropTypes.oneOf(["Linear", "Bold", "Broken", "Bulk", "Outline", "TwoTone"]),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ArrowRight2.defaultProps = {
  variant: "Linear",
  color: "currentColor",
  size: "24"
};
ArrowRight2.displayName = "ArrowRight2";
var _excluded$a = ["variant", "color", "size"];
var Bold$a = function Bold2(_ref) {
  var color = _ref.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M21.81 3.938c-1.31 3.27-4.3 7.54-7.15 10.33a5.962 5.962 0 0 0-5.07-4.96c2.8-2.86 7.1-5.89 10.38-7.21.58-.22 1.16-.05 1.52.31.38.38.56.95.32 1.53Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M13.78 15.09c-.2.17-.4.34-.6.5l-1.79 1.43c0-.03-.01-.07-.01-.11-.14-1.07-.64-2.06-1.45-2.87a5.029 5.029 0 0 0-2.96-1.46c-.03 0-.07-.01-.1-.01l1.45-1.83c.14-.18.29-.35.45-.53l.68.09c2.15.3 3.88 1.99 4.22 4.13l.11.66Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10.43 17.62c0 1.1-.42 2.15-1.22 2.94-.61.62-1.43 1.04-2.43 1.16l-2.45.27c-1.34.15-2.49-1-2.34-2.35l.27-2.46c.24-2.19 2.07-3.59 4.01-3.63.19-.01.4 0 .6.02.85.11 1.67.5 2.36 1.18.67.67 1.05 1.46 1.16 2.29.02.2.04.39.04.58Z",
    fill: color
  }));
};
var Broken$a = function Broken2(_ref2) {
  var color = _ref2.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M18.02 3.01c.67-.36 1.33-.67 1.94-.91.59-.22 1.16-.06 1.52.31.38.38.56.95.32 1.54-1.54 3.84-5.4 9.06-8.63 11.65l-1.97 1.58c-.25.18-.5.34-.78.45 0-.18-.01-.38-.04-.57-.11-.84-.49-1.62-1.16-2.29-.68-.68-1.51-1.08-2.36-1.19-.2-.01-.4-.03-.6-.01.11-.31.28-.6.49-.84l1.56-1.97c1.35-1.69 3.44-3.56 5.66-5.18",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10.43 17.619c0 1.1-.42 2.15-1.21 2.95-.61.61-1.44 1.03-2.43 1.16l-2.46.27c-1.34.15-2.49-.99-2.33-2.35l.27-2.46c.24-2.19 2.07-3.59 4.01-3.63.2-.01.41 0 .6.01.85.11 1.68.5 2.36 1.19.67.67 1.05 1.45 1.16 2.29.01.19.03.38.03.57ZM14.24 14.468c0-2.61-2.12-4.73-4.73-4.73",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var Bulk$a = function Bulk2(_ref3) {
  var color = _ref3.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M21.81 3.938c-1.31 3.27-4.3 7.54-7.15 10.33a5.962 5.962 0 0 0-5.07-4.96c2.8-2.86 7.1-5.89 10.38-7.21.58-.22 1.16-.05 1.52.31.38.38.56.95.32 1.53Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    opacity: ".4",
    d: "M14.66 14.269c-.5.49-1 .94-1.48 1.32l-1.97 1.58c-.25.18-.5.33-.78.45 0-.19-.02-.38-.04-.58-.11-.83-.49-1.62-1.16-2.29-.69-.68-1.51-1.07-2.36-1.18-.2-.02-.41-.03-.6-.02.11-.31.28-.6.49-.84l1.56-1.97c.37-.47.8-.95 1.27-1.43 2.6.36 4.66 2.38 5.07 4.96Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10.43 17.62c0 1.1-.42 2.15-1.22 2.94-.61.62-1.43 1.04-2.43 1.16l-2.45.27c-1.34.15-2.49-1-2.34-2.35l.27-2.46c.24-2.19 2.07-3.59 4.01-3.63.19-.01.4 0 .6.02.85.11 1.67.5 2.36 1.18.67.67 1.05 1.46 1.16 2.29.02.2.04.39.04.58Z",
    fill: color
  }));
};
var Linear$a = function Linear2(_ref4) {
  var color = _ref4.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M21.81 3.94c-1.54 3.84-5.4 9.06-8.63 11.65l-1.97 1.58c-.25.18-.5.34-.78.45 0-.18-.01-.38-.04-.57-.11-.84-.49-1.62-1.16-2.29-.68-.68-1.51-1.08-2.36-1.19-.2-.01-.4-.03-.6-.01.11-.31.28-.6.49-.84l1.56-1.97c2.58-3.23 7.82-7.11 11.65-8.64.59-.22 1.16-.06 1.52.31.38.37.56.94.32 1.52z"
  }), /* @__PURE__ */ React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M10.43 17.62c0 1.1-.42 2.15-1.21 2.95-.61.61-1.44 1.03-2.43 1.16L4.33 22c-1.34.15-2.49-.99-2.33-2.35l.27-2.46c.24-2.19 2.07-3.59 4.01-3.63.2-.01.41 0 .6.01.85.11 1.68.5 2.36 1.19.67.67 1.05 1.45 1.16 2.29.01.19.03.38.03.57zM14.24 14.47c0-2.61-2.12-4.73-4.73-4.73"
  }));
};
var Outline$a = function Outline2(_ref5) {
  var color = _ref5.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M10.43 18.37c-.15 0-.29-.04-.42-.13a.738.738 0 0 1-.33-.62c0-.15-.01-.31-.03-.47-.09-.71-.41-1.33-.95-1.87s-1.21-.88-1.93-.97c-.12-.01-.29-.02-.45-.01-.26.02-.5-.09-.65-.3a.78.78 0 0 1-.11-.71c.15-.41.37-.78.63-1.08l1.54-1.94c2.65-3.31 8.02-7.29 11.95-8.87a2.17 2.17 0 0 1 2.33.47c.63.63.82 1.53.49 2.35-1.58 3.94-5.55 9.3-8.86 11.95l-1.97 1.58c-.37.27-.67.44-.97.56-.08.04-.18.06-.27.06Zm-2.89-5.43c.84.22 1.59.66 2.22 1.29a4.62 4.62 0 0 1 1.26 2.14l1.69-1.36c3.14-2.51 6.91-7.6 8.4-11.34a.628.628 0 0 0-.16-.72.669.669 0 0 0-.73-.14c-3.72 1.5-8.81 5.27-11.33 8.41l-1.35 1.72Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M4.08 22.75c-.75 0-1.47-.3-2.01-.84-.62-.62-.92-1.48-.82-2.36l.27-2.46c.26-2.44 2.26-4.25 4.74-4.3.19-.01.44 0 .67.02 1.09.14 2.06.63 2.84 1.41.77.77 1.23 1.69 1.37 2.72a4.91 4.91 0 0 1-1.38 4.15c-.77.76-1.76 1.23-2.88 1.37l-2.47.27c-.11.01-.22.02-.33.02Zm2.37-8.45h-.13c-1.51.03-3.11 1.06-3.31 2.96l-.27 2.46c-.05.42.1.83.39 1.13.29.29.7.44 1.11.39l2.46-.27c.77-.1 1.46-.42 1.98-.94.64-.64 1-1.5 1-2.42 0-.15-.01-.31-.03-.47-.09-.71-.41-1.33-.95-1.87s-1.21-.88-1.93-.97h-.32ZM14.24 15.218c-.41 0-.75-.34-.75-.75 0-2.2-1.79-3.98-3.98-3.98-.41 0-.75-.34-.75-.75s.33-.75.74-.75c3.02 0 5.48 2.46 5.48 5.48.01.42-.33.75-.74.75Z",
    fill: color
  }));
};
var TwoTone$a = function TwoTone2(_ref6) {
  var color = _ref6.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M21.81 3.942c-1.54 3.84-5.4 9.06-8.63 11.65l-1.97 1.58c-.25.18-.5.34-.78.45 0-.18-.01-.38-.04-.57-.11-.84-.49-1.62-1.16-2.29-.68-.68-1.51-1.08-2.36-1.19-.2-.01-.4-.03-.6-.01.11-.31.28-.6.49-.84l1.56-1.97c2.58-3.23 7.82-7.11 11.65-8.64.59-.22 1.16-.06 1.52.31.38.37.56.94.32 1.52Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10.43 17.619c0 1.1-.42 2.15-1.21 2.95-.61.61-1.44 1.03-2.43 1.16l-2.46.27c-1.34.15-2.49-.99-2.33-2.35l.27-2.46c.24-2.19 2.07-3.59 4.01-3.63.2-.01.41 0 .6.01.85.11 1.68.5 2.36 1.19.67.67 1.05 1.45 1.16 2.29.01.19.03.38.03.57Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("path", {
    opacity: ".4",
    d: "M14.24 14.468c0-2.61-2.12-4.73-4.73-4.73",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var chooseVariant$a = function chooseVariant2(variant, color) {
  switch (variant) {
    case "Bold":
      return /* @__PURE__ */ React.createElement(Bold$a, {
        color
      });
    case "Broken":
      return /* @__PURE__ */ React.createElement(Broken$a, {
        color
      });
    case "Bulk":
      return /* @__PURE__ */ React.createElement(Bulk$a, {
        color
      });
    case "Linear":
      return /* @__PURE__ */ React.createElement(Linear$a, {
        color
      });
    case "Outline":
      return /* @__PURE__ */ React.createElement(Outline$a, {
        color
      });
    case "TwoTone":
      return /* @__PURE__ */ React.createElement(TwoTone$a, {
        color
      });
    default:
      return /* @__PURE__ */ React.createElement(Linear$a, {
        color
      });
  }
};
var Brush2 = /* @__PURE__ */ reactExports.forwardRef(function(_ref7, ref) {
  var variant = _ref7.variant, color = _ref7.color, size = _ref7.size, rest = _objectWithoutProperties(_ref7, _excluded$a);
  return /* @__PURE__ */ React.createElement("svg", _extends({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }), chooseVariant$a(variant, color));
});
Brush2.propTypes = {
  variant: PropTypes.oneOf(["Linear", "Bold", "Broken", "Bulk", "Outline", "TwoTone"]),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Brush2.defaultProps = {
  variant: "Linear",
  color: "currentColor",
  size: "24"
};
Brush2.displayName = "Brush2";
var _excluded$9 = ["variant", "color", "size"];
var Bold$9 = function Bold3(_ref) {
  var color = _ref.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "m19.37 4.891-5.86-2.61c-.86-.38-2.16-.38-3.02 0l-5.86 2.61c-1.48.66-1.7 1.56-1.7 2.04s.22 1.38 1.7 2.04l5.86 2.61c.43.19.97.29 1.51.29s1.08-.1 1.51-.29l5.86-2.61c1.48-.66 1.7-1.56 1.7-2.04s-.21-1.38-1.7-2.04Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 17.04c-.38 0-.76-.08-1.11-.23l-6.74-3c-1.03-.46-1.83-1.69-1.83-2.82 0-.41.33-.74.74-.74s.74.33.74.74c0 .54.45 1.24.95 1.46l6.74 3c.32.14.69.14 1.01 0l6.74-3c.5-.22.95-.91.95-1.46 0-.41.33-.74.74-.74s.74.33.74.74c0 1.12-.8 2.36-1.83 2.82l-6.74 3c-.34.15-.72.23-1.1.23Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 22c-.38 0-.76-.08-1.11-.23l-6.74-3a3.085 3.085 0 0 1-1.83-2.82c0-.41.33-.74.74-.74s.74.33.74.74c0 .63.37 1.2.95 1.46l6.74 3c.32.14.69.14 1.01 0l6.74-3c.57-.25.95-.83.95-1.46 0-.41.33-.74.74-.74s.74.33.74.74c0 1.22-.72 2.32-1.83 2.82l-6.74 3c-.34.15-.72.23-1.1.23Z",
    fill: color
  }));
};
var Broken$9 = function Broken3(_ref2) {
  var color = _ref2.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M18.92 5.54c1.7.75 1.7 1.99 0 2.74l-5.9 2.62c-.67.3-1.77.3-2.44 0l-5.9-2.62c-1.7-.75-1.7-1.99 0-2.74l5.9-2.62c.67-.3 1.77-.3 2.44 0l1.92.85",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3 11c0 .84.63 1.81 1.4 2.15l6.79 3.02c.52.23 1.11.23 1.62 0l6.79-3.02c.77-.34 1.4-1.31 1.4-2.15",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3 16c0 .93.55 1.77 1.4 2.15l6.79 3.02c.52.23 1.11.23 1.62 0l6.79-3.02c.85-.38 1.4-1.22 1.4-2.15",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var Bulk$9 = function Bulk3(_ref3) {
  var color = _ref3.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "m19.37 4.891-5.86-2.61c-.86-.38-2.16-.38-3.02 0l-5.86 2.61c-1.48.66-1.7 1.56-1.7 2.04s.22 1.38 1.7 2.04l5.86 2.61c.43.19.97.29 1.51.29s1.08-.1 1.51-.29l5.86-2.61c1.48-.66 1.7-1.56 1.7-2.04s-.21-1.38-1.7-2.04Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    opacity: ".4",
    d: "M12 17.04c-.38 0-.76-.08-1.11-.23l-6.74-3c-1.03-.46-1.83-1.69-1.83-2.82 0-.41.33-.74.74-.74s.74.33.74.74c0 .54.45 1.24.95 1.46l6.74 3c.32.14.69.14 1.01 0l6.74-3c.5-.22.95-.91.95-1.46 0-.41.33-.74.74-.74s.74.33.74.74c0 1.12-.8 2.36-1.83 2.82l-6.74 3c-.34.15-.72.23-1.1.23Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    opacity: ".4",
    d: "M12 22c-.38 0-.76-.08-1.11-.23l-6.74-3a3.085 3.085 0 0 1-1.83-2.82c0-.41.33-.74.74-.74s.74.33.74.74c0 .63.37 1.2.95 1.46l6.74 3c.32.14.69.14 1.01 0l6.74-3c.57-.25.95-.83.95-1.46 0-.41.33-.74.74-.74s.74.33.74.74c0 1.22-.72 2.32-1.83 2.82l-6.74 3c-.34.15-.72.23-1.1.23Z",
    fill: color
  }));
};
var Linear$9 = function Linear3(_ref4) {
  var color = _ref4.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M13.01 2.92l5.9 2.62c1.7.75 1.7 1.99 0 2.74l-5.9 2.62c-.67.3-1.77.3-2.44 0l-5.9-2.62c-1.7-.75-1.7-1.99 0-2.74l5.9-2.62c.67-.3 1.77-.3 2.44 0z"
  }), /* @__PURE__ */ React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M3 11c0 .84.63 1.81 1.4 2.15l6.79 3.02c.52.23 1.11.23 1.62 0l6.79-3.02c.77-.34 1.4-1.31 1.4-2.15"
  }), /* @__PURE__ */ React.createElement("path", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M3 16c0 .93.55 1.77 1.4 2.15l6.79 3.02c.52.23 1.11.23 1.62 0l6.79-3.02c.85-.38 1.4-1.22 1.4-2.15"
  }));
};
var Outline$9 = function Outline3(_ref5) {
  var color = _ref5.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M11.79 11.88c-.54 0-1.09-.1-1.52-.29l-5.9-2.62C2.87 8.3 2.65 7.4 2.65 6.91s.22-1.39 1.72-2.06l5.9-2.62c.87-.39 2.18-.39 3.05 0l5.91 2.62c1.49.66 1.72 1.57 1.72 2.06s-.22 1.39-1.72 2.06l-5.91 2.62c-.44.2-.98.29-1.53.29Zm0-8.44c-.34 0-.67.05-.91.16l-5.9 2.62c-.61.28-.83.56-.83.69 0 .13.22.42.82.69l5.9 2.62c.48.21 1.35.21 1.83 0l5.91-2.62c.61-.27.83-.56.83-.69 0-.13-.22-.42-.83-.69l-5.9-2.62c-.24-.1-.58-.16-.92-.16Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 17.09c-.38 0-.76-.08-1.12-.24l-6.79-3.02c-1.03-.45-1.84-1.7-1.84-2.83 0-.41.34-.75.75-.75s.75.34.75.75c0 .55.45 1.24.95 1.47l6.79 3.02c.32.14.69.14 1.02 0l6.79-3.02c.5-.22.95-.92.95-1.47 0-.41.34-.75.75-.75s.75.34.75.75c0 1.13-.81 2.38-1.84 2.84l-6.79 3.02c-.36.15-.74.23-1.12.23Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 22.088c-.38 0-.76-.08-1.12-.24l-6.79-3.02a3.106 3.106 0 0 1-1.84-2.84c0-.41.34-.75.75-.75s.75.35.75.76c0 .63.37 1.21.95 1.47l6.79 3.02c.32.14.69.14 1.02 0l6.79-3.02c.58-.26.95-.83.95-1.47 0-.41.34-.75.75-.75s.75.34.75.75c0 1.23-.72 2.34-1.84 2.84l-6.79 3.02c-.36.15-.74.23-1.12.23Z",
    fill: color
  }));
};
var TwoTone$9 = function TwoTone3(_ref6) {
  var color = _ref6.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "m13.01 2.92 5.9 2.62c1.7.75 1.7 1.99 0 2.74l-5.9 2.62c-.67.3-1.77.3-2.44 0l-5.9-2.62c-1.7-.75-1.7-1.99 0-2.74l5.9-2.62c.67-.3 1.77-.3 2.44 0Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("path", {
    opacity: ".4",
    d: "M3 11c0 .84.63 1.81 1.4 2.15l6.79 3.02c.52.23 1.11.23 1.62 0l6.79-3.02c.77-.34 1.4-1.31 1.4-2.15",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("path", {
    opacity: ".4",
    d: "M3 16c0 .93.55 1.77 1.4 2.15l6.79 3.02c.52.23 1.11.23 1.62 0l6.79-3.02c.85-.38 1.4-1.22 1.4-2.15",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var chooseVariant$9 = function chooseVariant3(variant, color) {
  switch (variant) {
    case "Bold":
      return /* @__PURE__ */ React.createElement(Bold$9, {
        color
      });
    case "Broken":
      return /* @__PURE__ */ React.createElement(Broken$9, {
        color
      });
    case "Bulk":
      return /* @__PURE__ */ React.createElement(Bulk$9, {
        color
      });
    case "Linear":
      return /* @__PURE__ */ React.createElement(Linear$9, {
        color
      });
    case "Outline":
      return /* @__PURE__ */ React.createElement(Outline$9, {
        color
      });
    case "TwoTone":
      return /* @__PURE__ */ React.createElement(TwoTone$9, {
        color
      });
    default:
      return /* @__PURE__ */ React.createElement(Linear$9, {
        color
      });
  }
};
var Layer = /* @__PURE__ */ reactExports.forwardRef(function(_ref7, ref) {
  var variant = _ref7.variant, color = _ref7.color, size = _ref7.size, rest = _objectWithoutProperties(_ref7, _excluded$9);
  return /* @__PURE__ */ React.createElement("svg", _extends({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }), chooseVariant$9(variant, color));
});
Layer.propTypes = {
  variant: PropTypes.oneOf(["Linear", "Bold", "Broken", "Bulk", "Outline", "TwoTone"]),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Layer.defaultProps = {
  variant: "Linear",
  color: "currentColor",
  size: "24"
};
Layer.displayName = "Layer";
var _excluded$8 = ["variant", "color", "size"];
var Bold$8 = function Bold4(_ref) {
  var color = _ref.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2Zm4.78 7.7-5.67 5.67a.75.75 0 0 1-1.06 0l-2.83-2.83a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.3 2.3 5.14-5.14c.29-.29.77-.29 1.06 0 .29.29.29.76 0 1.06Z",
    fill: color
  }));
};
var Broken$8 = function Broken4(_ref2) {
  var color = _ref2.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85M15 10.38l1.12-1.13",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m7.88 12 2.74 2.75 2.55-2.54",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var Bulk$8 = function Bulk4(_ref3) {
  var color = _ref3.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    opacity: ".4",
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10.58 15.582a.75.75 0 0 1-.53-.22l-2.83-2.83a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.3 2.3 5.14-5.14c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-5.67 5.67a.75.75 0 0 1-.53.22Z",
    fill: color
  }));
};
var Linear$8 = function Linear4(_ref4) {
  var color = _ref4.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m7.75 12 2.83 2.83 5.67-5.66",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var Outline$8 = function Outline4(_ref5) {
  var color = _ref5.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10.58 15.582a.75.75 0 0 1-.53-.22l-2.83-2.83a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.3 2.3 5.14-5.14c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-5.67 5.67a.75.75 0 0 1-.53.22Z",
    fill: color
  }));
};
var TwoTone$8 = function TwoTone4(_ref6) {
  var color = _ref6.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("path", {
    opacity: ".34",
    d: "m7.75 12.002 2.83 2.83 5.67-5.66",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var chooseVariant$8 = function chooseVariant4(variant, color) {
  switch (variant) {
    case "Bold":
      return /* @__PURE__ */ React.createElement(Bold$8, {
        color
      });
    case "Broken":
      return /* @__PURE__ */ React.createElement(Broken$8, {
        color
      });
    case "Bulk":
      return /* @__PURE__ */ React.createElement(Bulk$8, {
        color
      });
    case "Linear":
      return /* @__PURE__ */ React.createElement(Linear$8, {
        color
      });
    case "Outline":
      return /* @__PURE__ */ React.createElement(Outline$8, {
        color
      });
    case "TwoTone":
      return /* @__PURE__ */ React.createElement(TwoTone$8, {
        color
      });
    default:
      return /* @__PURE__ */ React.createElement(Linear$8, {
        color
      });
  }
};
var TickCircle = /* @__PURE__ */ reactExports.forwardRef(function(_ref7, ref) {
  var variant = _ref7.variant, color = _ref7.color, size = _ref7.size, rest = _objectWithoutProperties(_ref7, _excluded$8);
  return /* @__PURE__ */ React.createElement("svg", _extends({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }), chooseVariant$8(variant, color));
});
TickCircle.propTypes = {
  variant: PropTypes.oneOf(["Linear", "Bold", "Broken", "Bulk", "Outline", "TwoTone"]),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
TickCircle.defaultProps = {
  variant: "Linear",
  color: "currentColor",
  size: "24"
};
TickCircle.displayName = "TickCircle";
var _excluded$7 = ["variant", "color", "size"];
var Bold$7 = function Bold5(_ref) {
  var color = _ref.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M20.621 8.45c-1.05-4.62-5.08-6.7-8.62-6.7h-.01c-3.53 0-7.57 2.07-8.62 6.69-1.17 5.16 1.99 9.53 4.85 12.28a5.436 5.436 0 0 0 3.78 1.53c1.36 0 2.72-.51 3.77-1.53 2.86-2.75 6.02-7.11 4.85-12.27Zm-8.62 5.01a3.15 3.15 0 1 1 0-6.3 3.15 3.15 0 0 1 0 6.3Z",
    fill: color
  }));
};
var Broken$7 = function Broken5(_ref2) {
  var color = _ref2.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M15.119 10.311c0 1.72-1.39 3.12-3.12 3.12-1.73 0-3.12-1.39-3.12-3.12 0-1.73 1.4-3.12 3.12-3.12.34 0 .67.05.97.15",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M5.98 4.3c4.37-4.11 12.84-2.7 14.4 4.21 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 0 1-7.21 0C5.63 17.88 2.46 13.58 3.62 8.5",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var Bulk$7 = function Bulk5(_ref3) {
  var color = _ref3.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    opacity: ".4",
    d: "M20.621 8.45c-1.05-4.62-5.08-6.7-8.62-6.7h-.01c-3.53 0-7.57 2.07-8.62 6.69-1.17 5.16 1.99 9.53 4.85 12.28a5.436 5.436 0 0 0 3.78 1.53c1.36 0 2.72-.51 3.77-1.53 2.86-2.75 6.02-7.11 4.85-12.27Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12.002 13.46a3.15 3.15 0 1 0 0-6.3 3.15 3.15 0 0 0 0 6.3Z",
    fill: color
  }));
};
var Linear$7 = function Linear5(_ref4) {
  var color = _ref4.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M12 13.43a3.12 3.12 0 1 0 0-6.24 3.12 3.12 0 0 0 0 6.24Z",
    stroke: color,
    strokeWidth: "1.5"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3.62 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 0 1-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05Z",
    stroke: color,
    strokeWidth: "1.5"
  }));
};
var Outline$7 = function Outline5(_ref5) {
  var color = _ref5.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M11.999 14.171c-2.13 0-3.87-1.73-3.87-3.87s1.74-3.86 3.87-3.86 3.87 1.73 3.87 3.87-1.74 3.86-3.87 3.86Zm0-6.23c-1.3 0-2.37 1.06-2.37 2.37s1.06 2.37 2.37 2.37 2.37-1.06 2.37-2.37-1.07-2.37-2.37-2.37Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12.002 22.76a5.97 5.97 0 0 1-4.13-1.67c-2.95-2.84-6.21-7.37-4.98-12.76 1.11-4.89 5.38-7.08 9.11-7.08h.01c3.73 0 8 2.19 9.11 7.09 1.22 5.39-2.04 9.91-4.99 12.75a5.97 5.97 0 0 1-4.13 1.67Zm0-20.01c-2.91 0-6.65 1.55-7.64 5.91-1.08 4.71 1.88 8.77 4.56 11.34a4.425 4.425 0 0 0 6.17 0c2.67-2.57 5.63-6.63 4.57-11.34-1-4.36-4.75-5.91-7.66-5.91Z",
    fill: color
  }));
};
var TwoTone$7 = function TwoTone5(_ref6) {
  var color = _ref6.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    stroke: color,
    strokeWidth: "1.5",
    d: "M12 13.43a3.12 3.12 0 10.001-6.24 3.12 3.12 0 000 6.24z",
    opacity: ".4"
  }), /* @__PURE__ */ React.createElement("path", {
    stroke: color,
    strokeWidth: "1.5",
    d: "M3.62 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 01-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05z"
  }));
};
var chooseVariant$7 = function chooseVariant5(variant, color) {
  switch (variant) {
    case "Bold":
      return /* @__PURE__ */ React.createElement(Bold$7, {
        color
      });
    case "Broken":
      return /* @__PURE__ */ React.createElement(Broken$7, {
        color
      });
    case "Bulk":
      return /* @__PURE__ */ React.createElement(Bulk$7, {
        color
      });
    case "Linear":
      return /* @__PURE__ */ React.createElement(Linear$7, {
        color
      });
    case "Outline":
      return /* @__PURE__ */ React.createElement(Outline$7, {
        color
      });
    case "TwoTone":
      return /* @__PURE__ */ React.createElement(TwoTone$7, {
        color
      });
    default:
      return /* @__PURE__ */ React.createElement(Linear$7, {
        color
      });
  }
};
var Location = /* @__PURE__ */ reactExports.forwardRef(function(_ref7, ref) {
  var variant = _ref7.variant, color = _ref7.color, size = _ref7.size, rest = _objectWithoutProperties(_ref7, _excluded$7);
  return /* @__PURE__ */ React.createElement("svg", _extends({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }), chooseVariant$7(variant, color));
});
Location.propTypes = {
  variant: PropTypes.oneOf(["Linear", "Bold", "Broken", "Bulk", "Outline", "TwoTone"]),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Location.defaultProps = {
  variant: "Linear",
  color: "currentColor",
  size: "24"
};
Location.displayName = "Location";
var _excluded$6 = ["variant", "color", "size"];
var Bold$6 = function Bold6(_ref) {
  var color = _ref.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M20.41 6.961v1.83c0 .64-.3 1.24-.82 1.61l-11 8.06c-.71.52-1.68.52-2.38-.01l-1.44-1.08c-.65-.49-1.18-1.55-1.18-2.36v-8.05c0-1.12.86-2.36 1.91-2.75l5.47-2.05c.57-.21 1.49-.21 2.06 0l5.47 2.05c1.05.39 1.91 1.63 1.91 2.75ZM18.822 12.341c.66-.48 1.59-.01 1.59.81v1.88c0 .81-.53 1.86-1.18 2.35l-5.47 4.09c-.48.35-1.12.53-1.76.53-.64 0-1.28-.18-1.76-.54l-.83-.62a.997.997 0 0 1 .01-1.61l9.4-6.89Z",
    fill: color
  }));
};
var Broken$6 = function Broken6(_ref2) {
  var color = _ref2.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M20.59 7.119c0-1.23-.94-2.59-2.09-3.02l-4.99-1.87c-.83-.31-2.19-.31-3.02 0L5.5 4.109c-1.15.43-2.09 1.79-2.09 3.01v7.43c0 1.18.78 2.73 1.73 3.44l4.3 3.21c1.41 1.06 3.73 1.06 5.14 0l4.3-3.21c.95-.71 1.73-2.26 1.73-3.44v-3.52",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var Bulk$6 = function Bulk6(_ref3) {
  var color = _ref3.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    opacity: ".4",
    d: "M20.41 6.961v2.84L7.4 19.341l-2.63-1.97c-.65-.49-1.18-1.54-1.18-2.35v-8.06c0-1.12.86-2.36 1.91-2.75l5.47-2.05c.57-.21 1.49-.21 2.06 0l5.47 2.05c1.05.39 1.91 1.63 1.91 2.75Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M20.41 11.172v3.85c0 .81-.53 1.86-1.18 2.35l-5.47 4.09c-.48.36-1.12.54-1.76.54-.64 0-1.28-.18-1.76-.54l-1.92-1.43 12.09-8.86Z",
    fill: color
  }));
};
var Linear$6 = function Linear6(_ref4) {
  var color = _ref4.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M10.49 2.23 5.5 4.11c-1.15.43-2.09 1.79-2.09 3.01v7.43c0 1.18.78 2.73 1.73 3.44l4.3 3.21c1.41 1.06 3.73 1.06 5.14 0l4.3-3.21c.95-.71 1.73-2.26 1.73-3.44V7.12c0-1.23-.94-2.59-2.09-3.02l-4.99-1.87c-.85-.31-2.21-.31-3.04 0Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var Outline$6 = function Outline6(_ref5) {
  var color = _ref5.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M11.998 22.761c-1.09 0-2.17-.32-3.02-.95l-4.3-3.21c-1.14-.85-2.03-2.63-2.03-4.04v-7.44c0-1.54 1.13-3.18 2.58-3.72l4.99-1.87c.99-.37 2.55-.37 3.54 0l4.99 1.87c1.45.54 2.58 2.18 2.58 3.72v7.43c0 1.42-.89 3.19-2.03 4.04l-4.3 3.21c-.83.64-1.91.96-3 .96Zm-1.25-19.82-4.99 1.87c-.85.32-1.6 1.4-1.6 2.32v7.43c0 .95.67 2.28 1.42 2.84l4.3 3.21c1.15.86 3.09.86 4.25 0l4.3-3.21c.76-.57 1.42-1.89 1.42-2.84v-7.44c0-.91-.75-1.99-1.6-2.32l-4.99-1.87c-.68-.24-1.84-.24-2.51.01Z",
    fill: color
  }));
};
var TwoTone$6 = function TwoTone6(_ref6) {
  var color = _ref6.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M10.49 2.229 5.5 4.109c-1.15.43-2.09 1.79-2.09 3.01v7.43c0 1.18.78 2.73 1.73 3.44l4.3 3.21c1.41 1.06 3.73 1.06 5.14 0l4.3-3.21c.95-.71 1.73-2.26 1.73-3.44v-7.43c0-1.23-.94-2.59-2.09-3.02l-4.99-1.87c-.85-.31-2.21-.31-3.04 0Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var chooseVariant$6 = function chooseVariant6(variant, color) {
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
var Shield = /* @__PURE__ */ reactExports.forwardRef(function(_ref7, ref) {
  var variant = _ref7.variant, color = _ref7.color, size = _ref7.size, rest = _objectWithoutProperties(_ref7, _excluded$6);
  return /* @__PURE__ */ React.createElement("svg", _extends({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }), chooseVariant$6(variant, color));
});
Shield.propTypes = {
  variant: PropTypes.oneOf(["Linear", "Bold", "Broken", "Bulk", "Outline", "TwoTone"]),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Shield.defaultProps = {
  variant: "Linear",
  color: "currentColor",
  size: "24"
};
Shield.displayName = "Shield";
var _excluded$5 = ["variant", "color", "size"];
var Bold$5 = function Bold7(_ref) {
  var color = _ref.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "m22.36 8.27-.29-2.77c-.42-3.02-1.79-4.25-4.72-4.25H6.59c-2.94 0-4.3 1.23-4.73 4.28l-.27 2.75c-.1 1.07.19 2.11.82 2.92.76.99 1.93 1.55 3.23 1.55 1.26 0 2.47-.63 3.23-1.64A3.754 3.754 0 0 0 12 12.75c1.29 0 2.42-.6 3.11-1.6.77.99 1.96 1.6 3.2 1.6 1.33 0 2.53-.59 3.28-1.63.6-.8.87-1.81.77-2.85ZM11.35 16.66a2.495 2.495 0 0 0-2.23 2.49v2.74c0 .27.22.49.49.49h4.77c.27 0 .49-.22.49-.49V19.5c.01-2.09-1.22-3.08-3.52-2.84Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M21.37 14.398v2.98c0 2.76-2.24 5-5 5a.49.49 0 0 1-.49-.49v-2.39c0-1.28-.39-2.28-1.15-2.96-.67-.61-1.58-.91-2.71-.91-.25 0-.5.01-.77.04a3.485 3.485 0 0 0-3.13 3.48v2.74c0 .27-.22.49-.49.49-2.76 0-5-2.24-5-5v-2.96a1 1 0 0 1 1.34-.94c.27.09.54.16.82.2.12.02.25.04.37.04.16.02.32.03.48.03 1.16 0 2.3-.43 3.2-1.17.86.74 1.98 1.17 3.16 1.17 1.19 0 2.29-.41 3.15-1.15.9.73 2.02 1.15 3.16 1.15.18 0 .36-.01.53-.03a4.818 4.818 0 0 0 1.21-.26.997.997 0 0 1 1.32.94Z",
    fill: color
  }));
};
var Broken$5 = function Broken7(_ref2) {
  var color = _ref2.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M3.01 15.709c0 4.49 1.8 6.29 6.29 6.29h5.39c4.49 0 6.29-1.8 6.29-6.29v-4.49M12 12c1.83 0 3.18-1.49 3-3.32L14.34 2H9.67L9 8.68C8.82 10.51 10.17 12 12 12Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18.31 12c2.02 0 3.5-1.64 3.3-3.65l-.28-2.75C20.97 3 19.97 2 17.35 2H14.3l.7 7.01c.17 1.65 1.66 2.99 3.31 2.99ZM5.64 12c1.65 0 3.14-1.34 3.3-2.99l.22-2.21.48-4.8H6.59C3.97 2 2.97 3 2.61 5.6l-.27 2.75C2.14 10.36 3.62 12 5.64 12ZM12 17c-1.67 0-2.5.83-2.5 2.5V22h5v-2.5c0-1.67-.83-2.5-2.5-2.5Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var Bulk$5 = function Bulk7(_ref3) {
  var color = _ref3.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    opacity: ".4",
    d: "M21.37 11.39v5.99c0 2.76-2.24 5-5 5H7.63c-2.76 0-5-2.24-5-5v-5.92c.76.82 1.84 1.29 3.01 1.29 1.26 0 2.47-.63 3.23-1.64A3.754 3.754 0 0 0 12 12.75c1.28 0 2.42-.6 3.11-1.6.77.99 1.96 1.6 3.2 1.6 1.21 0 2.31-.49 3.06-1.36Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M14.99 1.25h-6l-.74 7.36c-.06.68.04 1.32.29 1.9.58 1.36 1.94 2.24 3.46 2.24 1.54 0 2.87-.86 3.47-2.23.18-.43.29-.93.3-1.44v-.19l-.78-7.64Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    opacity: ".6",
    d: "m22.36 8.27-.29-2.77c-.42-3.02-1.79-4.25-4.72-4.25h-3.84l.74 7.5c.01.1.02.21.02.4.06.52.22 1 .46 1.43.72 1.32 2.12 2.17 3.58 2.17 1.33 0 2.53-.59 3.28-1.63.6-.8.87-1.81.77-2.85ZM6.59 1.25c-2.94 0-4.3 1.23-4.73 4.28l-.27 2.75c-.1 1.07.19 2.11.82 2.92.76.99 1.93 1.55 3.23 1.55 1.46 0 2.86-.85 3.57-2.15.26-.45.43-.97.48-1.51l.78-7.83H6.59v-.01Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M11.35 16.66a2.495 2.495 0 0 0-2.23 2.49v3.23h5.75V19.5c.01-2.09-1.22-3.08-3.52-2.84Z",
    fill: color
  }));
};
var Linear$5 = function Linear7(_ref4) {
  var color = _ref4.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M3.01 11.22v4.49C3.01 20.2 4.81 22 9.3 22h5.39c4.49 0 6.29-1.8 6.29-6.29v-4.49",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 12c1.83 0 3.18-1.49 3-3.32L14.34 2H9.67L9 8.68C8.82 10.51 10.17 12 12 12Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18.31 12c2.02 0 3.5-1.64 3.3-3.65l-.28-2.75C20.97 3 19.97 2 17.35 2H14.3l.7 7.01c.17 1.65 1.66 2.99 3.31 2.99ZM5.64 12c1.65 0 3.14-1.34 3.3-2.99l.22-2.21.48-4.8H6.59C3.97 2 2.97 3 2.61 5.6l-.27 2.75C2.14 10.36 3.62 12 5.64 12ZM12 17c-1.67 0-2.5.83-2.5 2.5V22h5v-2.5c0-1.67-.83-2.5-2.5-2.5Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var Outline$5 = function Outline7(_ref5) {
  var color = _ref5.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M14.7 22.749H9.3c-4.94 0-7.04-2.11-7.04-7.04v-4.49c0-.41.34-.75.75-.75s.75.34.75.75v4.49c0 4.09 1.45 5.54 5.54 5.54h5.39c4.09 0 5.54-1.45 5.54-5.54v-4.49c0-.41.34-.75.75-.75s.75.34.75.75v4.49c.01 4.93-2.1 7.04-7.03 7.04Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M11.999 12.75c-1.1 0-2.1-.43-2.81-1.22s-1.04-1.82-.93-2.92l.67-6.68c.04-.38.36-.68.75-.68h4.67c.39 0 .71.29.75.68l.67 6.68c.11 1.1-.22 2.13-.93 2.92-.74.79-1.74 1.22-2.84 1.22Zm-1.65-10-.6 6.01c-.07.67.13 1.3.55 1.76.85.94 2.55.94 3.4 0 .42-.47.62-1.1.55-1.76l-.6-6.01h-3.3Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18.31 12.75c-2.03 0-3.84-1.64-4.05-3.66l-.7-7.01c-.02-.21.05-.42.19-.58.14-.16.34-.25.56-.25h3.05c2.94 0 4.31 1.23 4.72 4.25l.28 2.78c.12 1.18-.24 2.3-1.01 3.15-.77.85-1.85 1.32-3.04 1.32Zm-3.17-10 .62 6.19c.13 1.25 1.29 2.31 2.55 2.31.76 0 1.44-.29 1.93-.82.48-.53.7-1.24.63-2l-.28-2.75c-.31-2.26-1.04-2.93-3.23-2.93h-2.22ZM5.639 12.75c-1.19 0-2.27-.47-3.04-1.32-.77-.85-1.13-1.97-1.01-3.15l.27-2.75c.42-3.05 1.79-4.28 4.73-4.28h3.05c.21 0 .41.09.56.25.15.16.21.37.19.58l-.7 7.01c-.21 2.02-2.02 3.66-4.05 3.66Zm.95-10c-2.19 0-2.92.66-3.24 2.95l-.27 2.73c-.08.76.15 1.47.63 2s1.16.82 1.93.82c1.26 0 2.43-1.06 2.55-2.31l.62-6.19h-2.22ZM14.5 22.75h-5c-.41 0-.75-.34-.75-.75v-2.5c0-2.1 1.15-3.25 3.25-3.25s3.25 1.15 3.25 3.25V22c0 .41-.34.75-.75.75Zm-4.25-1.5h3.5V19.5c0-1.26-.49-1.75-1.75-1.75s-1.75.49-1.75 1.75v1.75Z",
    fill: color
  }));
};
var TwoTone$5 = function TwoTone7(_ref6) {
  var color = _ref6.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M12 12c1.83 0 3.18-1.49 3-3.32L14.34 2H9.67L9 8.68C8.82 10.51 10.17 12 12 12Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18.31 12c2.02 0 3.5-1.64 3.3-3.65l-.28-2.75C20.97 3 19.97 2 17.35 2H14.3l.7 7.01c.17 1.65 1.66 2.99 3.31 2.99ZM5.64 12c1.65 0 3.14-1.34 3.3-2.99l.22-2.21.48-4.8H6.59C3.97 2 2.97 3 2.61 5.6l-.27 2.75C2.14 10.36 3.62 12 5.64 12Z",
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
    d: "M3.01 11.219v4.49c0 4.49 1.8 6.29 6.29 6.29h5.39c4.49 0 6.29-1.8 6.29-6.29v-4.49"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 17c-1.67 0-2.5.83-2.5 2.5V22h5v-2.5c0-1.67-.83-2.5-2.5-2.5Z"
  })));
};
var chooseVariant$5 = function chooseVariant7(variant, color) {
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
var Shop = /* @__PURE__ */ reactExports.forwardRef(function(_ref7, ref) {
  var variant = _ref7.variant, color = _ref7.color, size = _ref7.size, rest = _objectWithoutProperties(_ref7, _excluded$5);
  return /* @__PURE__ */ React.createElement("svg", _extends({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }), chooseVariant$5(variant, color));
});
Shop.propTypes = {
  variant: PropTypes.oneOf(["Linear", "Bold", "Broken", "Bulk", "Outline", "TwoTone"]),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Shop.defaultProps = {
  variant: "Linear",
  color: "currentColor",
  size: "24"
};
Shop.displayName = "Shop";
var _excluded$4 = ["variant", "color", "size"];
var Bold$4 = function Bold8(_ref) {
  var color = _ref.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "m17.29 4.14-.07 3.79c-.01.52.32 1.21.74 1.52l2.48 1.88c1.59 1.2 1.33 2.67-.57 3.27l-3.23 1.01c-.54.17-1.11.76-1.25 1.31l-.77 2.94c-.61 2.32-2.13 2.55-3.39.51l-1.76-2.85c-.32-.52-1.08-.91-1.68-.88l-3.34.17c-2.39.12-3.07-1.26-1.51-3.08l1.98-2.3c.37-.43.54-1.23.37-1.77L4.27 6.42c-.59-1.9.47-2.95 2.36-2.33l2.95.97c.5.16 1.25.05 1.67-.26l3.08-2.22c1.67-1.19 3-.49 2.96 1.56Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m21.44 20.47-3.03-3.03a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l3.03 3.03c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06Z",
    fill: color
  }));
};
var Broken$4 = function Broken8(_ref2) {
  var color = _ref2.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M4.27 6.42c-.59-1.9.47-2.95 2.36-2.33l2.95.97c.5.16 1.25.05 1.67-.26l3.08-2.22c1.67-1.2 3-.5 2.96 1.55l-.07 3.79c-.01.52.32 1.21.74 1.52l2.48 1.88c1.59 1.2 1.33 2.67-.57 3.27l-3.23 1.01c-.54.17-1.11.76-1.25 1.31l-.77 2.94c-.61 2.32-2.13 2.55-3.39.51l-1.76-2.85c-.32-.52-1.08-.91-1.68-.88l-3.34.17c-2.39.12-3.07-1.26-1.51-3.08l1.98-2.3c.19-.22.32-.52.39-.84M21.91 21.999l-3.03-3.03",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var Bulk$4 = function Bulk8(_ref3) {
  var color = _ref3.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "m17.29 4.141-.07 3.79c-.01.52.32 1.21.74 1.52l2.48 1.88c1.59 1.2 1.33 2.67-.57 3.27l-3.23 1.01c-.54.17-1.11.76-1.25 1.31l-.77 2.94c-.61 2.32-2.13 2.55-3.39.51l-1.76-2.85c-.32-.52-1.08-.91-1.68-.88l-3.34.17c-2.39.12-3.07-1.26-1.51-3.08l1.98-2.3c.37-.43.54-1.23.37-1.77l-1.01-3.23c-.59-1.9.47-2.95 2.36-2.33l2.95.97c.5.16 1.25.05 1.67-.26l3.08-2.22c1.66-1.2 2.99-.5 2.95 1.55Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    opacity: ".4",
    d: "m21.44 20.47-3.03-3.03a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l3.03 3.03c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06Z",
    fill: color
  }));
};
var Linear$4 = function Linear8(_ref4) {
  var color = _ref4.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "m17.29 4.14-.07 3.79c-.01.52.32 1.21.74 1.52l2.48 1.88c1.59 1.2 1.33 2.67-.57 3.27l-3.23 1.01c-.54.17-1.11.76-1.25 1.31l-.77 2.94c-.61 2.32-2.13 2.55-3.39.51l-1.76-2.85c-.32-.52-1.08-.91-1.68-.88l-3.34.17c-2.39.12-3.07-1.26-1.51-3.08l1.98-2.3c.37-.43.54-1.23.37-1.77L4.28 6.43c-.59-1.9.47-2.95 2.36-2.33l2.95.97c.5.16 1.25.05 1.67-.26l3.08-2.22c1.66-1.2 2.99-.5 2.95 1.55ZM21.91 22l-3.03-3.03",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var Outline$4 = function Outline8(_ref5) {
  var color = _ref5.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M13.01 22.499c-.6 0-1.53-.29-2.42-1.75l-1.76-2.85c-.17-.28-.69-.55-1.01-.53l-3.34.17c-2 .1-2.7-.73-2.95-1.23s-.47-1.57.83-3.09l1.98-2.3c.2-.24.31-.76.22-1.06l-1.01-3.23c-.51-1.62.06-2.49.44-2.87.38-.38 1.26-.93 2.88-.39l2.95.97c.27.09.77.01 1-.15l3.08-2.22c1.41-1.02 2.43-.75 2.9-.5.47.25 1.27.93 1.24 2.67l-.07 3.79c-.01.28.22.74.44.91l2.48 1.88c1.35 1.03 1.4 2.06 1.31 2.59-.09.53-.49 1.49-2.11 1.99l-3.23 1.01c-.3.09-.67.48-.75.78l-.77 2.94c-.51 1.93-1.51 2.36-2.07 2.44-.07.02-.16.03-.26.03Zm-5.16-6.63c.86 0 1.81.52 2.25 1.24l1.76 2.85c.5.82.95 1.07 1.19 1.03.23-.03.59-.41.84-1.33l.77-2.94c.21-.8.96-1.59 1.75-1.83l3.23-1.01c.62-.19 1.02-.5 1.08-.82.06-.32-.22-.74-.74-1.14l-2.48-1.88c-.61-.46-1.05-1.38-1.04-2.14l.07-3.79c.01-.67-.15-1.17-.44-1.32-.29-.15-.78 0-1.33.39l-3.08 2.22c-.61.44-1.62.6-2.35.36l-2.95-.97c-.62-.2-1.12-.19-1.35.04-.23.23-.25.73-.06 1.35l1.01 3.23c.25.79.03 1.86-.51 2.48l-1.98 2.3c-.63.73-.73 1.24-.62 1.45.1.21.58.44 1.53.39l3.34-.17c.04.01.08.01.11.01ZM21.91 22.75c-.19 0-.38-.07-.53-.22l-3.03-3.03a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l3.03 3.03c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z",
    fill: color
  }));
};
var TwoTone$4 = function TwoTone8(_ref6) {
  var color = _ref6.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "m17.29 4.141-.07 3.79c-.01.52.32 1.21.74 1.52l2.48 1.88c1.59 1.2 1.33 2.67-.57 3.27l-3.23 1.01c-.54.17-1.11.76-1.25 1.31l-.77 2.94c-.61 2.32-2.13 2.55-3.39.51l-1.76-2.85c-.32-.52-1.08-.91-1.68-.88l-3.34.17c-2.39.12-3.07-1.26-1.51-3.08l1.98-2.3c.37-.43.54-1.23.37-1.77l-1.01-3.23c-.59-1.9.47-2.95 2.36-2.33l2.95.97c.5.16 1.25.05 1.67-.26l3.08-2.22c1.66-1.2 2.99-.5 2.95 1.55Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("path", {
    opacity: ".4",
    d: "m21.91 21.999-3.03-3.03",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var chooseVariant$4 = function chooseVariant8(variant, color) {
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
var MagicStar = /* @__PURE__ */ reactExports.forwardRef(function(_ref7, ref) {
  var variant = _ref7.variant, color = _ref7.color, size = _ref7.size, rest = _objectWithoutProperties(_ref7, _excluded$4);
  return /* @__PURE__ */ React.createElement("svg", _extends({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }), chooseVariant$4(variant, color));
});
MagicStar.propTypes = {
  variant: PropTypes.oneOf(["Linear", "Bold", "Broken", "Bulk", "Outline", "TwoTone"]),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
MagicStar.defaultProps = {
  variant: "Linear",
  color: "currentColor",
  size: "24"
};
MagicStar.displayName = "MagicStar";
var _excluded$3 = ["variant", "color", "size"];
var Bold$3 = function Bold9(_ref) {
  var color = _ref.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M16.75 3.56V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.5h-6.5V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.56c-2.7.25-4.01 1.86-4.21 4.25-.02.29.22.53.5.53h16.92c.29 0 .53-.25.5-.53-.2-2.39-1.51-4-4.21-4.25ZM20 9.84H4c-.55 0-1 .45-1 1V17c0 3 1.5 5 5 5h8c3.5 0 5-2 5-5v-6.16c0-.55-.45-1-1-1ZM9.21 18.21c-.05.04-.1.09-.15.12-.06.04-.12.07-.18.09-.06.03-.12.05-.18.06-.07.01-.13.02-.2.02-.13 0-.26-.03-.38-.08-.13-.05-.23-.12-.33-.21-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.1-.09.2-.16.33-.21.18-.08.38-.1.58-.06.06.01.12.03.18.06.06.02.12.05.18.09l.15.12c.18.19.29.45.29.71 0 .26-.11.52-.29.71Zm0-3.5c-.19.18-.45.29-.71.29-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.28-.28.72-.37 1.09-.21.13.05.24.12.33.21.18.19.29.45.29.71 0 .26-.11.52-.29.71Zm3.5 3.5c-.19.18-.45.29-.71.29-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.37-.37 1.05-.37 1.42 0 .18.19.29.45.29.71 0 .26-.11.52-.29.71Zm0-3.5-.15.12c-.06.04-.12.07-.18.09-.06.03-.12.05-.18.06-.07.01-.13.02-.2.02-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.09-.09.2-.16.33-.21.37-.16.81-.07 1.09.21.18.19.29.45.29.71 0 .26-.11.52-.29.71Zm3.5 3.5c-.19.18-.45.29-.71.29-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.37-.37 1.05-.37 1.42 0 .18.19.29.45.29.71 0 .26-.11.52-.29.71Zm0-3.5-.15.12c-.06.04-.12.07-.18.09-.06.03-.12.05-.18.06-.07.01-.14.02-.2.02-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.1-.09.2-.16.33-.21.18-.08.38-.1.58-.06.06.01.12.03.18.06.06.02.12.05.18.09l.15.12c.18.19.29.45.29.71 0 .26-.11.52-.29.71Z",
    fill: color
  }));
};
var Broken$3 = function Broken9(_ref2) {
  var color = _ref2.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M8 2v3M16 2v3M3.5 9.09h17M3 13.01V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M15.694 13.7h.009M15.694 16.7h.009M11.995 13.7h.009M11.995 16.7h.009M8.295 13.7h.01M8.295 16.7h.01",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var Bulk$3 = function Bulk9(_ref3) {
  var color = _ref3.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M16.75 3.56V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.5h-6.5V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.56c-2.7.25-4.01 1.86-4.21 4.25-.02.29.22.53.5.53h16.92c.29 0 .53-.25.5-.53-.2-2.39-1.51-4-4.21-4.25Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    opacity: ".4",
    d: "M20 9.84c.55 0 1 .45 1 1V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5v-6.16c0-.55.45-1 1-1h16Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M8.5 14.999c-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.28-.28.72-.37 1.09-.21.13.05.24.12.33.21.18.19.29.45.29.71 0 .26-.11.52-.29.71-.19.18-.45.29-.71.29ZM12 14.999c-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.09-.09.2-.16.33-.21.37-.16.81-.07 1.09.21.18.19.29.45.29.71 0 .26-.11.52-.29.71l-.15.12c-.06.04-.12.07-.18.09-.06.03-.12.05-.18.06-.07.01-.13.02-.2.02ZM15.5 15c-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.1-.09.2-.16.33-.21.18-.08.38-.1.58-.06.06.01.12.03.18.06.06.02.12.05.18.09l.15.12c.18.19.29.45.29.71 0 .26-.11.52-.29.71l-.15.12c-.06.04-.12.07-.18.09-.06.03-.12.05-.18.06-.07.01-.14.02-.2.02ZM8.5 18.5c-.13 0-.26-.03-.38-.08-.13-.05-.23-.12-.33-.21-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.1-.09.2-.16.33-.21.18-.08.38-.1.58-.06.06.01.12.03.18.06.06.02.12.05.18.09l.15.12c.18.19.29.45.29.71 0 .26-.11.52-.29.71-.05.04-.1.09-.15.12-.06.04-.12.07-.18.09-.06.03-.12.05-.18.06-.07.01-.13.02-.2.02ZM12 18.5c-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.37-.37 1.05-.37 1.42 0 .18.19.29.45.29.71 0 .26-.11.52-.29.71-.19.18-.45.29-.71.29ZM15.5 18.5c-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.37-.37 1.05-.37 1.42 0 .18.19.29.45.29.71 0 .26-.11.52-.29.71-.19.18-.45.29-.71.29Z",
    fill: color
  }));
};
var Linear$3 = function Linear9(_ref4) {
  var color = _ref4.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M8 2v3M16 2v3M3.5 9.09h17M21 8.5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M15.695 13.7h.009M15.695 16.7h.009M11.995 13.7h.01M11.995 16.7h.01M8.294 13.7h.01M8.294 16.7h.01",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var Outline$3 = function Outline9(_ref5) {
  var color = _ref5.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M8 5.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75ZM16 5.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M15 22.75H9c-5.62 0-6.75-2.65-6.75-6.93V9.65c0-4.74 1.6-6.67 5.71-6.9H16.04c4.11.23 5.71 2.16 5.71 6.9v6.17c0 4.28-1.13 6.93-6.75 6.93ZM8 4.25c-2.8.16-4.25 1.04-4.25 5.4v6.17c0 3.83.73 5.43 5.25 5.43h6c4.52 0 5.25-1.6 5.25-5.43V9.65c0-4.35-1.44-5.24-4.27-5.4H8Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M20.75 18.352H3.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h17.5c.41 0 .75.34.75.75s-.34.75-.75.75ZM12 8.25c-1.23 0-2.27.67-2.27 1.97 0 .62.29 1.09.73 1.39-.61.36-.96.94-.96 1.62 0 1.24.95 2.01 2.5 2.01 1.54 0 2.5-.77 2.5-2.01 0-.68-.35-1.27-.97-1.62.45-.31.73-.77.73-1.39 0-1.3-1.03-1.97-2.26-1.97Zm0 2.84c-.52 0-.9-.31-.9-.8 0-.5.38-.79.9-.79s.9.29.9.79c0 .49-.38.8-.9.8ZM12 14c-.66 0-1.14-.33-1.14-.93 0-.6.48-.92 1.14-.92.66 0 1.14.33 1.14.92 0 .6-.48.93-1.14.93Z",
    fill: color
  }));
};
var TwoTone$3 = function TwoTone9(_ref6) {
  var color = _ref6.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M8 2v3M16 2v3",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("path", {
    opacity: ".4",
    d: "M3.5 9.09h17",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M21 8.5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("path", {
    opacity: ".4",
    d: "M15.694 13.7h.009M15.694 16.7h.009M11.995 13.7h.009M11.995 16.7h.009M8.295 13.7h.01M8.295 16.7h.009",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var chooseVariant$3 = function chooseVariant9(variant, color) {
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
var Calendar = /* @__PURE__ */ reactExports.forwardRef(function(_ref7, ref) {
  var variant = _ref7.variant, color = _ref7.color, size = _ref7.size, rest = _objectWithoutProperties(_ref7, _excluded$3);
  return /* @__PURE__ */ React.createElement("svg", _extends({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }), chooseVariant$3(variant, color));
});
Calendar.propTypes = {
  variant: PropTypes.oneOf(["Linear", "Bold", "Broken", "Bulk", "Outline", "TwoTone"]),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Calendar.defaultProps = {
  variant: "Linear",
  color: "currentColor",
  size: "24"
};
Calendar.displayName = "Calendar";
var _excluded$2 = ["variant", "color", "size"];
var Bold$2 = function Bold10(_ref) {
  var color = _ref.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2Zm4.35 13.57a.746.746 0 0 1-1.03.26l-3.1-1.85c-.77-.46-1.34-1.47-1.34-2.36v-4.1c0-.41.34-.75.75-.75s.75.34.75.75v4.1c0 .36.3.89.61 1.07l3.1 1.85c.36.21.48.67.26 1.03Z",
    fill: color
  }));
};
var Broken$2 = function Broken10(_ref2) {
  var color = _ref2.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "m15.71 15.182-3.1-1.85c-.54-.32-.98-1.09-.98-1.72v-4.1",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var Bulk$2 = function Bulk10(_ref3) {
  var color = _ref3.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    opacity: ".4",
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M15.71 15.932a.67.67 0 0 1-.38-.11l-3.1-1.85c-.77-.46-1.34-1.47-1.34-2.36v-4.1c0-.41.34-.75.75-.75s.75.34.75.75v4.1c0 .36.3.89.61 1.07l3.1 1.85c.36.21.47.67.26 1.03a.77.77 0 0 1-.65.37Z",
    fill: color
  }));
};
var Linear$2 = function Linear10(_ref4) {
  var color = _ref4.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m15.71 15.18-3.1-1.85c-.54-.32-.98-1.09-.98-1.72v-4.1",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var Outline$2 = function Outline10(_ref5) {
  var color = _ref5.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M15.71 15.932a.67.67 0 0 1-.38-.11l-3.1-1.85c-.77-.46-1.34-1.47-1.34-2.36v-4.1c0-.41.34-.75.75-.75s.75.34.75.75v4.1c0 .36.3.89.61 1.07l3.1 1.85c.36.21.47.67.26 1.03a.77.77 0 0 1-.65.37Z",
    fill: color
  }));
};
var TwoTone$2 = function TwoTone10(_ref6) {
  var color = _ref6.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("path", {
    opacity: ".4",
    d: "m15.71 15.182-3.1-1.85c-.54-.32-.98-1.09-.98-1.72v-4.1",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var chooseVariant$2 = function chooseVariant10(variant, color) {
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
var Clock = /* @__PURE__ */ reactExports.forwardRef(function(_ref7, ref) {
  var variant = _ref7.variant, color = _ref7.color, size = _ref7.size, rest = _objectWithoutProperties(_ref7, _excluded$2);
  return /* @__PURE__ */ React.createElement("svg", _extends({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }), chooseVariant$2(variant, color));
});
Clock.propTypes = {
  variant: PropTypes.oneOf(["Linear", "Bold", "Broken", "Bulk", "Outline", "TwoTone"]),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Clock.defaultProps = {
  variant: "Linear",
  color: "currentColor",
  size: "24"
};
Clock.displayName = "Clock";
var _excluded$1 = ["variant", "color", "size"];
var Bold$1 = function Bold11(_ref) {
  var color = _ref.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M17.53 7.77a.739.739 0 0 0-.21 0 2.874 2.874 0 0 1-2.78-2.88C14.54 3.3 15.83 2 17.43 2c1.59 0 2.89 1.29 2.89 2.89a2.89 2.89 0 0 1-2.79 2.88ZM20.792 14.7c-1.12.75-2.69 1.03-4.14.84.38-.82.58-1.73.59-2.69 0-1-.22-1.95-.64-2.78 1.48-.2 3.05.08 4.18.83 1.58 1.04 1.58 2.75.01 3.8ZM6.44 7.77c.07-.01.14-.01.21 0a2.874 2.874 0 0 0 2.78-2.88 2.885 2.885 0 1 0-5.77 0c0 1.56 1.23 2.83 2.78 2.88ZM6.551 12.85c0 .97.21 1.89.59 2.72-1.41.15-2.88-.15-3.96-.86-1.58-1.05-1.58-2.76 0-3.81 1.07-.72 2.58-1.01 4-.85-.41.84-.63 1.79-.63 2.8ZM12.12 15.87a1.13 1.13 0 0 0-.26 0 3.425 3.425 0 0 1-3.31-3.43C8.56 10.54 10.09 9 12 9c1.9 0 3.44 1.54 3.44 3.44a3.434 3.434 0 0 1-3.32 3.43ZM8.87 17.94c-1.51 1.01-1.51 2.67 0 3.67 1.72 1.15 4.54 1.15 6.26 0 1.51-1.01 1.51-2.67 0-3.67-1.71-1.15-4.53-1.15-6.26 0Z",
    fill: color
  }));
};
var Broken$1 = function Broken11(_ref2) {
  var color = _ref2.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M17.998 7.16a.605.605 0 0 0-.19 0 2.573 2.573 0 0 1-2.48-2.58c0-1.43 1.15-2.58 2.58-2.58a2.58 2.58 0 0 1 2.58 2.58 2.589 2.589 0 0 1-2.49 2.58ZM16.968 14.44c1.37.23 2.88-.01 3.94-.72 1.41-.94 1.41-2.48 0-3.42-1.07-.71-2.6-.95-3.97-.71M5.97 7.16c.06-.01.13-.01.19 0a2.573 2.573 0 0 0 2.48-2.58C8.64 3.15 7.49 2 6.06 2a2.58 2.58 0 0 0-2.58 2.58c.01 1.4 1.11 2.53 2.49 2.58ZM7.001 14.44c-1.37.23-2.88-.01-3.94-.72-1.41-.94-1.41-2.48 0-3.42 1.07-.71 2.6-.95 3.97-.71M11.998 14.629a.605.605 0 0 0-.19 0 2.573 2.573 0 0 1-2.48-2.58c0-1.43 1.15-2.58 2.58-2.58a2.58 2.58 0 0 1 2.58 2.58c-.01 1.4-1.11 2.54-2.49 2.58ZM14.909 17.78c-1.59-1.06-4.22-1.06-5.82 0-1.41.94-1.41 2.48 0 3.42 1.6 1.07 4.22 1.07 5.82 0",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var Bulk$1 = function Bulk11(_ref3) {
  var color = _ref3.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    opacity: ".4",
    d: "M17.53 7.77a.739.739 0 0 0-.21 0 2.874 2.874 0 0 1-2.78-2.88C14.54 3.3 15.83 2 17.43 2c1.59 0 2.89 1.29 2.89 2.89a2.89 2.89 0 0 1-2.79 2.88ZM20.792 14.7c-1.12.75-2.69 1.03-4.14.84.38-.82.58-1.73.59-2.69 0-1-.22-1.95-.64-2.78 1.48-.2 3.05.08 4.18.83 1.58 1.04 1.58 2.75.01 3.8ZM6.438 7.77c.07-.01.14-.01.21 0a2.874 2.874 0 0 0 2.78-2.88C9.428 3.3 8.138 2 6.538 2c-1.59 0-2.89 1.29-2.89 2.89a2.89 2.89 0 0 0 2.79 2.88ZM6.551 12.85c0 .97.21 1.89.59 2.72-1.41.15-2.88-.15-3.96-.86-1.58-1.05-1.58-2.76 0-3.81 1.07-.72 2.58-1.01 4-.85-.41.84-.63 1.79-.63 2.8Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12.12 15.87a1.13 1.13 0 0 0-.26 0 3.425 3.425 0 0 1-3.31-3.43c0-1.9 1.53-3.44 3.44-3.44 1.9 0 3.44 1.54 3.44 3.44 0 1.86-1.46 3.37-3.31 3.43ZM8.87 17.94c-1.51 1.01-1.51 2.67 0 3.67 1.72 1.15 4.54 1.15 6.26 0 1.51-1.01 1.51-2.67 0-3.67-1.71-1.15-4.53-1.15-6.26 0Z",
    fill: color
  }));
};
var Linear$1 = function Linear11(_ref4) {
  var color = _ref4.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M18 7.16a.605.605 0 0 0-.19 0 2.573 2.573 0 0 1-2.48-2.58c0-1.43 1.15-2.58 2.58-2.58a2.58 2.58 0 0 1 2.58 2.58A2.589 2.589 0 0 1 18 7.16ZM16.97 14.44c1.37.23 2.88-.01 3.94-.72 1.41-.94 1.41-2.48 0-3.42-1.07-.71-2.6-.95-3.97-.71M5.97 7.16c.06-.01.13-.01.19 0a2.573 2.573 0 0 0 2.48-2.58C8.64 3.15 7.49 2 6.06 2a2.58 2.58 0 0 0-2.58 2.58c.01 1.4 1.11 2.53 2.49 2.58ZM7 14.44c-1.37.23-2.88-.01-3.94-.72-1.41-.94-1.41-2.48 0-3.42 1.07-.71 2.6-.95 3.97-.71M12 14.63a.605.605 0 0 0-.19 0 2.573 2.573 0 0 1-2.48-2.58c0-1.43 1.15-2.58 2.58-2.58a2.58 2.58 0 0 1 2.58 2.58c-.01 1.4-1.11 2.54-2.49 2.58ZM9.09 17.78c-1.41.94-1.41 2.48 0 3.42 1.6 1.07 4.22 1.07 5.82 0 1.41-.94 1.41-2.48 0-3.42-1.59-1.06-4.22-1.06-5.82 0Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var Outline$1 = function Outline11(_ref5) {
  var color = _ref5.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M18 7.912h-.13c-1.89-.06-3.3-1.52-3.3-3.32 0-1.84 1.5-3.33 3.33-3.33s3.33 1.5 3.33 3.33a3.327 3.327 0 0 1-3.22 3.33c0-.01 0-.01-.01-.01Zm-.1-5.16c-1.01 0-1.83.82-1.83 1.83 0 .99.77 1.79 1.76 1.83.01-.01.09-.01.18 0a1.832 1.832 0 0 0-.11-3.66ZM18.009 15.28c-.39 0-.78-.03-1.17-.1a.75.75 0 0 1-.61-.87.75.75 0 0 1 .87-.61c1.23.21 2.53-.02 3.4-.6.47-.31.72-.7.72-1.09 0-.39-.26-.77-.72-1.08-.87-.58-2.19-.81-3.43-.59-.41.08-.8-.2-.87-.61-.07-.41.2-.8.61-.87 1.63-.29 3.32.02 4.52.82.88.59 1.39 1.43 1.39 2.33 0 .89-.5 1.74-1.39 2.34-.91.6-2.09.93-3.32.93ZM5.97 7.91h-.02a3.324 3.324 0 0 1-3.22-3.32c0-1.84 1.5-3.34 3.33-3.34s3.33 1.5 3.33 3.33c0 1.81-1.41 3.27-3.21 3.33l-.21-.75.07.75h-.07Zm.1-1.5c.06 0 .11 0 .17.01.89-.04 1.67-.84 1.67-1.83a1.83 1.83 0 1 0-1.93 1.83c.01-.01.05-.01.09-.01ZM5.96 15.28c-1.23 0-2.41-.33-3.32-.93-.88-.59-1.39-1.44-1.39-2.34 0-.89.51-1.74 1.39-2.33 1.2-.8 2.89-1.11 4.52-.82.41.07.68.46.61.87-.07.41-.46.69-.87.61-1.24-.22-2.55.01-3.43.59-.47.31-.72.69-.72 1.08 0 .39.26.78.72 1.09.87.58 2.17.81 3.4.6.41-.07.8.21.87.61.07.41-.2.8-.61.87-.39.07-.78.1-1.17.1ZM12 15.38h-.13c-1.89-.06-3.3-1.52-3.3-3.32 0-1.84 1.5-3.33 3.33-3.33s3.33 1.5 3.33 3.33a3.327 3.327 0 0 1-3.22 3.33c0-.01 0-.01-.01-.01Zm-.1-5.16c-1.01 0-1.83.82-1.83 1.83 0 .99.77 1.79 1.76 1.83.01-.01.09-.01.18 0 .97-.05 1.72-.85 1.73-1.83 0-1-.82-1.83-1.84-1.83ZM12.001 22.759c-1.2 0-2.4-.31-3.33-.94-.88-.59-1.39-1.43-1.39-2.33 0-.89.5-1.75 1.39-2.34 1.87-1.24 4.8-1.24 6.66 0 .88.59 1.39 1.43 1.39 2.33 0 .89-.5 1.75-1.39 2.34-.93.62-2.13.94-3.33.94Zm-2.5-4.35c-.47.31-.72.7-.72 1.09 0 .39.26.77.72 1.08 1.35.91 3.64.91 4.99 0 .47-.31.72-.7.72-1.09 0-.39-.26-.77-.72-1.08-1.34-.91-3.63-.9-4.99 0Z",
    fill: color
  }));
};
var TwoTone$1 = function TwoTone11(_ref6) {
  var color = _ref6.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    opacity: ".4",
    d: "M17.998 7.16a.605.605 0 0 0-.19 0 2.573 2.573 0 0 1-2.48-2.58c0-1.43 1.15-2.58 2.58-2.58a2.58 2.58 0 0 1 2.58 2.58 2.589 2.589 0 0 1-2.49 2.58ZM16.968 14.44c1.37.23 2.88-.01 3.94-.72 1.41-.94 1.41-2.48 0-3.42-1.07-.71-2.6-.95-3.97-.71M5.967 7.16c.06-.01.13-.01.19 0a2.573 2.573 0 0 0 2.48-2.58c0-1.43-1.15-2.58-2.58-2.58a2.58 2.58 0 0 0-2.58 2.58c.01 1.4 1.11 2.53 2.49 2.58ZM6.997 14.44c-1.37.23-2.88-.01-3.94-.72-1.41-.94-1.41-2.48 0-3.42 1.07-.71 2.6-.95 3.97-.71",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M11.998 14.629a.605.605 0 0 0-.19 0 2.573 2.573 0 0 1-2.48-2.58c0-1.43 1.15-2.58 2.58-2.58a2.58 2.58 0 0 1 2.58 2.58c-.01 1.4-1.11 2.54-2.49 2.58ZM9.089 17.78c-1.41.94-1.41 2.48 0 3.42 1.6 1.07 4.22 1.07 5.82 0 1.41-.94 1.41-2.48 0-3.42-1.59-1.06-4.22-1.06-5.82 0Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var chooseVariant$1 = function chooseVariant11(variant, color) {
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
var People = /* @__PURE__ */ reactExports.forwardRef(function(_ref7, ref) {
  var variant = _ref7.variant, color = _ref7.color, size = _ref7.size, rest = _objectWithoutProperties(_ref7, _excluded$1);
  return /* @__PURE__ */ React.createElement("svg", _extends({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }), chooseVariant$1(variant, color));
});
People.propTypes = {
  variant: PropTypes.oneOf(["Linear", "Bold", "Broken", "Bulk", "Outline", "TwoTone"]),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
People.defaultProps = {
  variant: "Linear",
  color: "currentColor",
  size: "24"
};
People.displayName = "People";
var _excluded = ["variant", "color", "size"];
var Bold12 = function Bold13(_ref) {
  var color = _ref.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "m2.58 19.011-.02.02c-.27-.59-.44-1.26-.51-2 .07.73.26 1.39.53 1.98ZM9.001 10.381a2.38 2.38 0 1 0 0-4.76 2.38 2.38 0 0 0 0 4.76Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.38c0 1.09.19 2.04.56 2.84.86 1.9 2.7 2.97 5.25 2.97h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm4.18 10.5c-.78-.67-2.04-.67-2.82 0l-4.16 3.57c-.78.67-2.04.67-2.82 0l-.34-.28c-.71-.62-1.84-.68-2.64-.14l-3.74 2.51c-.22-.56-.35-1.21-.35-1.97V7.81c0-2.82 1.49-4.31 4.31-4.31h8.38c2.82 0 4.31 1.49 4.31 4.31v4.8l-.13-.11Z",
    fill: color
  }));
};
var Broken12 = function Broken13(_ref2) {
  var color = _ref2.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M2 12.99V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M11 8c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2M2.672 18.949l4.93-3.31c.79-.53 1.93-.47 2.64.14l.33.29c.78.67 2.04.67 2.82 0l4.16-3.57c.78-.67 2.04-.67 2.82 0l1.63 1.4",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var Bulk12 = function Bulk13(_ref3) {
  var color = _ref3.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    opacity: ".4",
    d: "M22 7.81v6.09l-1.63-1.4c-.78-.67-2.04-.67-2.82 0l-4.16 3.57c-.78.67-2.04.67-2.82 0l-.34-.28c-.71-.62-1.84-.68-2.64-.14l-4.92 3.3-.11.08c-.37-.8-.56-1.75-.56-2.84V7.81C2 4.17 4.17 2 7.81 2h8.38C19.83 2 22 4.17 22 7.81Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M9.001 10.381a2.38 2.38 0 1 0 0-4.76 2.38 2.38 0 0 0 0 4.76ZM21.999 13.899v2.29c0 3.64-2.17 5.81-5.81 5.81h-8.38c-2.55 0-4.39-1.07-5.25-2.97l.11-.08 4.92-3.3c.8-.54 1.93-.48 2.64.14l.34.28c.78.67 2.04.67 2.82 0l4.16-3.57c.78-.67 2.04-.67 2.82 0l1.63 1.4Z",
    fill: color
  }));
};
var Linear12 = function Linear13(_ref4) {
  var color = _ref4.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M9 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2.67 18.95l4.93-3.31c.79-.53 1.93-.47 2.64.14l.33.29c.78.67 2.04.67 2.82 0l4.16-3.57c.78-.67 2.04-.67 2.82 0L22 13.9",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var Outline12 = function Outline13(_ref5) {
  var color = _ref5.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z",
    fill: color
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M9 10.75c-1.52 0-2.75-1.23-2.75-2.75S7.48 5.25 9 5.25 11.75 6.48 11.75 8 10.52 10.75 9 10.75Zm0-4a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM2.669 19.699a.746.746 0 0 1-.41-1.37l4.93-3.31c1.08-.73 2.57-.64 3.55.19l.33.29c.5.43 1.35.43 1.84 0l4.16-3.57c1.06-.91 2.73-.91 3.8 0l1.63 1.4c.31.27.35.74.08 1.06-.27.31-.74.35-1.06.08l-1.63-1.4c-.5-.43-1.35-.43-1.85 0l-4.16 3.57c-1.06.91-2.73.91-3.8 0l-.33-.29c-.46-.39-1.22-.43-1.73-.08l-4.93 3.31c-.13.08-.28.12-.42.12Z",
    fill: color
  }));
};
var TwoTone12 = function TwoTone13(_ref6) {
  var color = _ref6.color;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
    d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ React.createElement("path", {
    opacity: ".4",
    d: "M9 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2.672 18.949l4.93-3.31c.79-.53 1.93-.47 2.64.14l.33.29c.78.67 2.04.67 2.82 0l4.16-3.57c.78-.67 2.04-.67 2.82 0l1.63 1.4",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
var chooseVariant12 = function chooseVariant13(variant, color) {
  switch (variant) {
    case "Bold":
      return /* @__PURE__ */ React.createElement(Bold12, {
        color
      });
    case "Broken":
      return /* @__PURE__ */ React.createElement(Broken12, {
        color
      });
    case "Bulk":
      return /* @__PURE__ */ React.createElement(Bulk12, {
        color
      });
    case "Linear":
      return /* @__PURE__ */ React.createElement(Linear12, {
        color
      });
    case "Outline":
      return /* @__PURE__ */ React.createElement(Outline12, {
        color
      });
    case "TwoTone":
      return /* @__PURE__ */ React.createElement(TwoTone12, {
        color
      });
    default:
      return /* @__PURE__ */ React.createElement(Linear12, {
        color
      });
  }
};
var Gallery = /* @__PURE__ */ reactExports.forwardRef(function(_ref7, ref) {
  var variant = _ref7.variant, color = _ref7.color, size = _ref7.size, rest = _objectWithoutProperties(_ref7, _excluded);
  return /* @__PURE__ */ React.createElement("svg", _extends({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    ref,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }), chooseVariant12(variant, color));
});
Gallery.propTypes = {
  variant: PropTypes.oneOf(["Linear", "Bold", "Broken", "Bulk", "Outline", "TwoTone"]),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Gallery.defaultProps = {
  variant: "Linear",
  color: "currentColor",
  size: "24"
};
Gallery.displayName = "Gallery";
export {
  ArrowRight2 as A,
  Brush2 as B,
  Calendar as C,
  Gallery as G,
  Layer as L,
  MagicStar as M,
  People as P,
  Shield as S,
  TickCircle as T,
  Clock as a,
  Location as b,
  Shop as c
};
