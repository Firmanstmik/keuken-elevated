var emotionWeakMemoize_cjs = { exports: {} };
var emotionWeakMemoize_cjs_prod = {};
var hasRequiredEmotionWeakMemoize_cjs_prod;
function requireEmotionWeakMemoize_cjs_prod() {
  if (hasRequiredEmotionWeakMemoize_cjs_prod) return emotionWeakMemoize_cjs_prod;
  hasRequiredEmotionWeakMemoize_cjs_prod = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var weakMemoize = function weakMemoize2(func) {
      var cache = /* @__PURE__ */ new WeakMap();
      return function(arg) {
        if (cache.has(arg)) {
          return cache.get(arg);
        }
        var ret = func(arg);
        cache.set(arg, ret);
        return ret;
      };
    };
    exports["default"] = weakMemoize;
  })(emotionWeakMemoize_cjs_prod);
  return emotionWeakMemoize_cjs_prod;
}
var hasRequiredEmotionWeakMemoize_cjs;
function requireEmotionWeakMemoize_cjs() {
  if (hasRequiredEmotionWeakMemoize_cjs) return emotionWeakMemoize_cjs.exports;
  hasRequiredEmotionWeakMemoize_cjs = 1;
  {
    emotionWeakMemoize_cjs.exports = requireEmotionWeakMemoize_cjs_prod();
  }
  return emotionWeakMemoize_cjs.exports;
}
export {
  requireEmotionWeakMemoize_cjs as r
};
