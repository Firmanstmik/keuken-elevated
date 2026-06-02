import { d as requireReact } from "../react.mjs";
var emotionUseInsertionEffectWithFallbacks_cjs = {};
var hasRequiredEmotionUseInsertionEffectWithFallbacks_cjs;
function requireEmotionUseInsertionEffectWithFallbacks_cjs() {
  if (hasRequiredEmotionUseInsertionEffectWithFallbacks_cjs) return emotionUseInsertionEffectWithFallbacks_cjs;
  hasRequiredEmotionUseInsertionEffectWithFallbacks_cjs = 1;
  Object.defineProperty(emotionUseInsertionEffectWithFallbacks_cjs, "__esModule", { value: true });
  var React = requireReact();
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
  var isBrowser = typeof document !== "undefined";
  var syncFallback = function syncFallback2(create) {
    return create();
  };
  var useInsertionEffect = React__namespace["useInsertionEffect"] ? React__namespace["useInsertionEffect"] : false;
  var useInsertionEffectAlwaysWithSyncFallback = !isBrowser ? syncFallback : useInsertionEffect || syncFallback;
  var useInsertionEffectWithLayoutFallback = useInsertionEffect || React__namespace.useLayoutEffect;
  emotionUseInsertionEffectWithFallbacks_cjs.useInsertionEffectAlwaysWithSyncFallback = useInsertionEffectAlwaysWithSyncFallback;
  emotionUseInsertionEffectWithFallbacks_cjs.useInsertionEffectWithLayoutFallback = useInsertionEffectWithLayoutFallback;
  return emotionUseInsertionEffectWithFallbacks_cjs;
}
export {
  requireEmotionUseInsertionEffectWithFallbacks_cjs as r
};
