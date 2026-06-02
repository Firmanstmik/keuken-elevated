import { d as requireReact } from "./react.mjs";
import { r as requireEmotionCache_cjs } from "./emotion__cache.mjs";
import { l as require_extends } from "./babel__runtime.mjs";
import { r as requireEmotionWeakMemoize_cjs } from "./emotion__weak-memoize.mjs";
import { r as requireHoistNonReactStatics_cjs } from "./hoist-non-react-statics.mjs";
import { r as requireEmotionUtils_cjs } from "./emotion__utils.mjs";
import { r as requireEmotionSerialize_cjs } from "./emotion__serialize.mjs";
import { r as requireEmotionUseInsertionEffectWithFallbacks_cjs } from "./@emotion/use-insertion-effect-with-fallbacks+[...].mjs";
var emotionReact_cjs = {};
var emotionElementA1829a1e_cjs = {};
var emotionReact_isolatedHnrs_cjs = {};
var hasRequiredEmotionReact_isolatedHnrs_cjs;
function requireEmotionReact_isolatedHnrs_cjs() {
  if (hasRequiredEmotionReact_isolatedHnrs_cjs) return emotionReact_isolatedHnrs_cjs;
  hasRequiredEmotionReact_isolatedHnrs_cjs = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var hoistNonReactStatics$1 = requireHoistNonReactStatics_cjs();
    function _interopDefault(e) {
      return e && e.__esModule ? e : { "default": e };
    }
    var hoistNonReactStatics__default = /* @__PURE__ */ _interopDefault(hoistNonReactStatics$1);
    var hoistNonReactStatics = (function(targetComponent, sourceComponent) {
      return hoistNonReactStatics__default["default"](targetComponent, sourceComponent);
    });
    exports["default"] = hoistNonReactStatics;
  })(emotionReact_isolatedHnrs_cjs);
  return emotionReact_isolatedHnrs_cjs;
}
var hasRequiredEmotionElementA1829a1e_cjs;
function requireEmotionElementA1829a1e_cjs() {
  if (hasRequiredEmotionElementA1829a1e_cjs) return emotionElementA1829a1e_cjs;
  hasRequiredEmotionElementA1829a1e_cjs = 1;
  (function(exports) {
    var React = requireReact();
    var createCache = requireEmotionCache_cjs();
    var _extends = require_extends();
    var weakMemoize = requireEmotionWeakMemoize_cjs();
    var _isolatedHnrs_dist_emotionReact_isolatedHnrs = /* @__PURE__ */ requireEmotionReact_isolatedHnrs_cjs();
    var utils = requireEmotionUtils_cjs();
    var serialize = requireEmotionSerialize_cjs();
    var useInsertionEffectWithFallbacks = requireEmotionUseInsertionEffectWithFallbacks_cjs();
    function _interopDefault(e) {
      return e && e.__esModule ? e : { "default": e };
    }
    function _interopNamespace(e) {
      if (e && e.__esModule) return e;
      var n = /* @__PURE__ */ Object.create(null);
      if (e) {
        Object.keys(e).forEach(function(k) {
          if (k !== "default") {
            var d = Object.getOwnPropertyDescriptor(e, k);
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: function() {
                return e[k];
              }
            });
          }
        });
      }
      n["default"] = e;
      return Object.freeze(n);
    }
    var React__namespace = /* @__PURE__ */ _interopNamespace(React);
    var createCache__default = /* @__PURE__ */ _interopDefault(createCache);
    var weakMemoize__default = /* @__PURE__ */ _interopDefault(weakMemoize);
    var isDevelopment = false;
    var isBrowser = typeof document !== "undefined";
    var EmotionCacheContext = /* @__PURE__ */ React__namespace.createContext(
      // we're doing this to avoid preconstruct's dead code elimination in this one case
      // because this module is primarily intended for the browser and node
      // but it's also required in react native and similar environments sometimes
      // and we could have a special build just for that
      // but this is much easier and the native packages
      // might use a different theme context in the future anyway
      typeof HTMLElement !== "undefined" ? /* @__PURE__ */ createCache__default["default"]({
        key: "css"
      }) : null
    );
    var CacheProvider = EmotionCacheContext.Provider;
    var __unsafe_useEmotionCache = function useEmotionCache() {
      return React.useContext(EmotionCacheContext);
    };
    exports.withEmotionCache = function withEmotionCache(func) {
      return /* @__PURE__ */ React.forwardRef(function(props, ref) {
        var cache = React.useContext(EmotionCacheContext);
        return func(props, cache, ref);
      });
    };
    if (!isBrowser) {
      exports.withEmotionCache = function withEmotionCache(func) {
        return function(props) {
          var cache = React.useContext(EmotionCacheContext);
          if (cache === null) {
            cache = createCache__default["default"]({
              key: "css"
            });
            return /* @__PURE__ */ React__namespace.createElement(EmotionCacheContext.Provider, {
              value: cache
            }, func(props, cache));
          } else {
            return func(props, cache);
          }
        };
      };
    }
    var ThemeContext = /* @__PURE__ */ React__namespace.createContext({});
    var useTheme = function useTheme2() {
      return React__namespace.useContext(ThemeContext);
    };
    var getTheme = function getTheme2(outerTheme, theme) {
      if (typeof theme === "function") {
        var mergedTheme = theme(outerTheme);
        return mergedTheme;
      }
      return _extends({}, outerTheme, theme);
    };
    var createCacheWithTheme = /* @__PURE__ */ weakMemoize__default["default"](function(outerTheme) {
      return weakMemoize__default["default"](function(theme) {
        return getTheme(outerTheme, theme);
      });
    });
    var ThemeProvider = function ThemeProvider2(props) {
      var theme = React__namespace.useContext(ThemeContext);
      if (props.theme !== theme) {
        theme = createCacheWithTheme(theme)(props.theme);
      }
      return /* @__PURE__ */ React__namespace.createElement(ThemeContext.Provider, {
        value: theme
      }, props.children);
    };
    function withTheme(Component) {
      var componentName = Component.displayName || Component.name || "Component";
      var WithTheme = /* @__PURE__ */ React__namespace.forwardRef(function render(props, ref) {
        var theme = React__namespace.useContext(ThemeContext);
        return /* @__PURE__ */ React__namespace.createElement(Component, _extends({
          theme,
          ref
        }, props));
      });
      WithTheme.displayName = "WithTheme(" + componentName + ")";
      return _isolatedHnrs_dist_emotionReact_isolatedHnrs["default"](WithTheme, Component);
    }
    var hasOwn = {}.hasOwnProperty;
    var typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
    var createEmotionProps = function createEmotionProps2(type, props) {
      var newProps = {};
      for (var _key in props) {
        if (hasOwn.call(props, _key)) {
          newProps[_key] = props[_key];
        }
      }
      newProps[typePropName] = type;
      return newProps;
    };
    var Insertion = function Insertion2(_ref) {
      var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
      utils.registerStyles(cache, serialized, isStringTag);
      var rules = useInsertionEffectWithFallbacks.useInsertionEffectAlwaysWithSyncFallback(function() {
        return utils.insertStyles(cache, serialized, isStringTag);
      });
      if (!isBrowser && rules !== void 0) {
        var _ref2;
        var serializedNames = serialized.name;
        var next = serialized.next;
        while (next !== void 0) {
          serializedNames += " " + next.name;
          next = next.next;
        }
        return /* @__PURE__ */ React__namespace.createElement("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedNames, _ref2.dangerouslySetInnerHTML = {
          __html: rules
        }, _ref2.nonce = cache.sheet.nonce, _ref2));
      }
      return null;
    };
    var Emotion = /* @__PURE__ */ exports.withEmotionCache(function(props, cache, ref) {
      var cssProp = props.css;
      if (typeof cssProp === "string" && cache.registered[cssProp] !== void 0) {
        cssProp = cache.registered[cssProp];
      }
      var WrappedComponent = props[typePropName];
      var registeredStyles = [cssProp];
      var className = "";
      if (typeof props.className === "string") {
        className = utils.getRegisteredStyles(cache.registered, registeredStyles, props.className);
      } else if (props.className != null) {
        className = props.className + " ";
      }
      var serialized = serialize.serializeStyles(registeredStyles, void 0, React__namespace.useContext(ThemeContext));
      className += cache.key + "-" + serialized.name;
      var newProps = {};
      for (var _key2 in props) {
        if (hasOwn.call(props, _key2) && _key2 !== "css" && _key2 !== typePropName && !isDevelopment) {
          newProps[_key2] = props[_key2];
        }
      }
      newProps.className = className;
      if (ref) {
        newProps.ref = ref;
      }
      return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, /* @__PURE__ */ React__namespace.createElement(Insertion, {
        cache,
        serialized,
        isStringTag: typeof WrappedComponent === "string"
      }), /* @__PURE__ */ React__namespace.createElement(WrappedComponent, newProps));
    });
    var Emotion$1 = Emotion;
    exports.CacheProvider = CacheProvider;
    exports.Emotion = Emotion$1;
    exports.ThemeContext = ThemeContext;
    exports.ThemeProvider = ThemeProvider;
    exports.__unsafe_useEmotionCache = __unsafe_useEmotionCache;
    exports.createEmotionProps = createEmotionProps;
    exports.hasOwn = hasOwn;
    exports.isBrowser = isBrowser;
    exports.isDevelopment = isDevelopment;
    exports.useTheme = useTheme;
    exports.withTheme = withTheme;
  })(emotionElementA1829a1e_cjs);
  return emotionElementA1829a1e_cjs;
}
var hasRequiredEmotionReact_cjs;
function requireEmotionReact_cjs() {
  if (hasRequiredEmotionReact_cjs) return emotionReact_cjs;
  hasRequiredEmotionReact_cjs = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var emotionElement = /* @__PURE__ */ requireEmotionElementA1829a1e_cjs();
    var React = requireReact();
    var utils = requireEmotionUtils_cjs();
    var useInsertionEffectWithFallbacks = requireEmotionUseInsertionEffectWithFallbacks_cjs();
    var serialize = requireEmotionSerialize_cjs();
    requireEmotionCache_cjs();
    require_extends();
    requireEmotionWeakMemoize_cjs();
    requireHoistNonReactStatics_cjs();
    function _interopNamespace(e) {
      if (e && e.__esModule) return e;
      var n = /* @__PURE__ */ Object.create(null);
      if (e) {
        Object.keys(e).forEach(function(k) {
          if (k !== "default") {
            var d = Object.getOwnPropertyDescriptor(e, k);
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: function() {
                return e[k];
              }
            });
          }
        });
      }
      n["default"] = e;
      return Object.freeze(n);
    }
    var React__namespace = /* @__PURE__ */ _interopNamespace(React);
    exports.jsx = function jsx(type, props) {
      var args = arguments;
      if (props == null || !emotionElement.hasOwn.call(props, "css")) {
        return React__namespace.createElement.apply(void 0, args);
      }
      var argsLength = args.length;
      var createElementArgArray = new Array(argsLength);
      createElementArgArray[0] = emotionElement.Emotion;
      createElementArgArray[1] = emotionElement.createEmotionProps(type, props);
      for (var i = 2; i < argsLength; i++) {
        createElementArgArray[i] = args[i];
      }
      return React__namespace.createElement.apply(null, createElementArgArray);
    };
    (function(_jsx) {
      var JSX;
      /* @__PURE__ */ (function(_JSX) {
      })(JSX || (JSX = _jsx.JSX || (_jsx.JSX = {})));
    })(exports.jsx || (exports.jsx = {}));
    var Global = /* @__PURE__ */ emotionElement.withEmotionCache(function(props, cache) {
      var styles = props.styles;
      var serialized = serialize.serializeStyles([styles], void 0, React__namespace.useContext(emotionElement.ThemeContext));
      if (!emotionElement.isBrowser) {
        var _ref;
        var serializedNames = serialized.name;
        var serializedStyles = serialized.styles;
        var next = serialized.next;
        while (next !== void 0) {
          serializedNames += " " + next.name;
          serializedStyles += next.styles;
          next = next.next;
        }
        var shouldCache = cache.compat === true;
        var rules = cache.insert("", {
          name: serializedNames,
          styles: serializedStyles
        }, cache.sheet, shouldCache);
        if (shouldCache) {
          return null;
        }
        return /* @__PURE__ */ React__namespace.createElement("style", (_ref = {}, _ref["data-emotion"] = cache.key + "-global " + serializedNames, _ref.dangerouslySetInnerHTML = {
          __html: rules
        }, _ref.nonce = cache.sheet.nonce, _ref));
      }
      var sheetRef = React__namespace.useRef();
      useInsertionEffectWithFallbacks.useInsertionEffectWithLayoutFallback(function() {
        var key = cache.key + "-global";
        var sheet = new cache.sheet.constructor({
          key,
          nonce: cache.sheet.nonce,
          container: cache.sheet.container,
          speedy: cache.sheet.isSpeedy
        });
        var rehydrating = false;
        var node = document.querySelector('style[data-emotion="' + key + " " + serialized.name + '"]');
        if (cache.sheet.tags.length) {
          sheet.before = cache.sheet.tags[0];
        }
        if (node !== null) {
          rehydrating = true;
          node.setAttribute("data-emotion", key);
          sheet.hydrate([node]);
        }
        sheetRef.current = [sheet, rehydrating];
        return function() {
          sheet.flush();
        };
      }, [cache]);
      useInsertionEffectWithFallbacks.useInsertionEffectWithLayoutFallback(function() {
        var sheetRefCurrent = sheetRef.current;
        var sheet = sheetRefCurrent[0], rehydrating = sheetRefCurrent[1];
        if (rehydrating) {
          sheetRefCurrent[1] = false;
          return;
        }
        if (serialized.next !== void 0) {
          utils.insertStyles(cache, serialized.next, true);
        }
        if (sheet.tags.length) {
          var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
          sheet.before = element;
          sheet.flush();
        }
        cache.insert("", serialized, sheet, false);
      }, [cache, serialized.name]);
      return null;
    });
    function css() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return serialize.serializeStyles(args);
    }
    function keyframes() {
      var insertable = css.apply(void 0, arguments);
      var name = "animation-" + insertable.name;
      return {
        name,
        styles: "@keyframes " + name + "{" + insertable.styles + "}",
        anim: 1,
        toString: function toString() {
          return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
        }
      };
    }
    var classnames = function classnames2(args) {
      var len = args.length;
      var i = 0;
      var cls = "";
      for (; i < len; i++) {
        var arg = args[i];
        if (arg == null) continue;
        var toAdd = void 0;
        switch (typeof arg) {
          case "boolean":
            break;
          case "object": {
            if (Array.isArray(arg)) {
              toAdd = classnames2(arg);
            } else {
              toAdd = "";
              for (var k in arg) {
                if (arg[k] && k) {
                  toAdd && (toAdd += " ");
                  toAdd += k;
                }
              }
            }
            break;
          }
          default: {
            toAdd = arg;
          }
        }
        if (toAdd) {
          cls && (cls += " ");
          cls += toAdd;
        }
      }
      return cls;
    };
    function merge(registered, css2, className) {
      var registeredStyles = [];
      var rawClassName = utils.getRegisteredStyles(registered, registeredStyles, className);
      if (registeredStyles.length < 2) {
        return className;
      }
      return rawClassName + css2(registeredStyles);
    }
    var Insertion = function Insertion2(_ref) {
      var cache = _ref.cache, serializedArr = _ref.serializedArr;
      var rules = useInsertionEffectWithFallbacks.useInsertionEffectAlwaysWithSyncFallback(function() {
        var rules2 = "";
        for (var i = 0; i < serializedArr.length; i++) {
          var res = utils.insertStyles(cache, serializedArr[i], false);
          if (!emotionElement.isBrowser && res !== void 0) {
            rules2 += res;
          }
        }
        if (!emotionElement.isBrowser) {
          return rules2;
        }
      });
      if (!emotionElement.isBrowser && rules.length !== 0) {
        var _ref2;
        return /* @__PURE__ */ React__namespace.createElement("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedArr.map(function(serialized) {
          return serialized.name;
        }).join(" "), _ref2.dangerouslySetInnerHTML = {
          __html: rules
        }, _ref2.nonce = cache.sheet.nonce, _ref2));
      }
      return null;
    };
    var ClassNames = /* @__PURE__ */ emotionElement.withEmotionCache(function(props, cache) {
      var hasRendered = false;
      var serializedArr = [];
      var css2 = function css3() {
        if (hasRendered && emotionElement.isDevelopment) {
          throw new Error("css can only be used during render");
        }
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        var serialized = serialize.serializeStyles(args, cache.registered);
        serializedArr.push(serialized);
        utils.registerStyles(cache, serialized, false);
        return cache.key + "-" + serialized.name;
      };
      var cx = function cx2() {
        if (hasRendered && emotionElement.isDevelopment) {
          throw new Error("cx can only be used during render");
        }
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        return merge(cache.registered, css2, classnames(args));
      };
      var content = {
        css: css2,
        cx,
        theme: React__namespace.useContext(emotionElement.ThemeContext)
      };
      var ele = props.children(content);
      hasRendered = true;
      return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, /* @__PURE__ */ React__namespace.createElement(Insertion, {
        cache,
        serializedArr
      }), ele);
    });
    exports.CacheProvider = emotionElement.CacheProvider;
    exports.ThemeContext = emotionElement.ThemeContext;
    exports.ThemeProvider = emotionElement.ThemeProvider;
    exports.__unsafe_useEmotionCache = emotionElement.__unsafe_useEmotionCache;
    exports.useTheme = emotionElement.useTheme;
    Object.defineProperty(exports, "withEmotionCache", {
      enumerable: true,
      get: function() {
        return emotionElement.withEmotionCache;
      }
    });
    exports.withTheme = emotionElement.withTheme;
    exports.ClassNames = ClassNames;
    exports.Global = Global;
    exports.createElement = exports.jsx;
    exports.css = css;
    exports.keyframes = keyframes;
  })(emotionReact_cjs);
  return emotionReact_cjs;
}
export {
  requireEmotionReact_cjs as r
};
