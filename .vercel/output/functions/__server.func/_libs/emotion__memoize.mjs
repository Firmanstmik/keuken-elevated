var emotionMemoize_cjs = { exports: {} };
var emotionMemoize_cjs_prod = {};
var hasRequiredEmotionMemoize_cjs_prod;
function requireEmotionMemoize_cjs_prod() {
  if (hasRequiredEmotionMemoize_cjs_prod) return emotionMemoize_cjs_prod;
  hasRequiredEmotionMemoize_cjs_prod = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    function memoize(fn) {
      var cache = /* @__PURE__ */ Object.create(null);
      return function(arg) {
        if (cache[arg] === void 0) cache[arg] = fn(arg);
        return cache[arg];
      };
    }
    exports["default"] = memoize;
  })(emotionMemoize_cjs_prod);
  return emotionMemoize_cjs_prod;
}
var hasRequiredEmotionMemoize_cjs;
function requireEmotionMemoize_cjs() {
  if (hasRequiredEmotionMemoize_cjs) return emotionMemoize_cjs.exports;
  hasRequiredEmotionMemoize_cjs = 1;
  {
    emotionMemoize_cjs.exports = requireEmotionMemoize_cjs_prod();
  }
  return emotionMemoize_cjs.exports;
}
export {
  requireEmotionMemoize_cjs as r
};
