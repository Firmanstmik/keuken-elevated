var emotionHash_cjs = { exports: {} };
var emotionHash_cjs_prod = {};
var hasRequiredEmotionHash_cjs_prod;
function requireEmotionHash_cjs_prod() {
  if (hasRequiredEmotionHash_cjs_prod) return emotionHash_cjs_prod;
  hasRequiredEmotionHash_cjs_prod = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    function murmur2(str) {
      var h = 0;
      var k, i = 0, len = str.length;
      for (; len >= 4; ++i, len -= 4) {
        k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
        k = /* Math.imul(k, m): */
        (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16);
        k ^= /* k >>> r: */
        k >>> 24;
        h = /* Math.imul(k, m): */
        (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
        (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
      }
      switch (len) {
        case 3:
          h ^= (str.charCodeAt(i + 2) & 255) << 16;
        case 2:
          h ^= (str.charCodeAt(i + 1) & 255) << 8;
        case 1:
          h ^= str.charCodeAt(i) & 255;
          h = /* Math.imul(h, m): */
          (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
      }
      h ^= h >>> 13;
      h = /* Math.imul(h, m): */
      (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
      return ((h ^ h >>> 15) >>> 0).toString(36);
    }
    exports["default"] = murmur2;
  })(emotionHash_cjs_prod);
  return emotionHash_cjs_prod;
}
var hasRequiredEmotionHash_cjs;
function requireEmotionHash_cjs() {
  if (hasRequiredEmotionHash_cjs) return emotionHash_cjs.exports;
  hasRequiredEmotionHash_cjs = 1;
  {
    emotionHash_cjs.exports = requireEmotionHash_cjs_prod();
  }
  return emotionHash_cjs.exports;
}
export {
  requireEmotionHash_cjs as r
};
