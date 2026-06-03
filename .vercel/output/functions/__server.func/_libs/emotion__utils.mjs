var emotionUtils_cjs = {};
var hasRequiredEmotionUtils_cjs;
function requireEmotionUtils_cjs() {
  if (hasRequiredEmotionUtils_cjs) return emotionUtils_cjs;
  hasRequiredEmotionUtils_cjs = 1;
  Object.defineProperty(emotionUtils_cjs, "__esModule", { value: true });
  var isBrowser = typeof document !== "undefined";
  function getRegisteredStyles(registered, registeredStyles, classNames) {
    var rawClassName = "";
    classNames.split(" ").forEach(function(className) {
      if (registered[className] !== void 0) {
        registeredStyles.push(registered[className] + ";");
      } else if (className) {
        rawClassName += className + " ";
      }
    });
    return rawClassName;
  }
  var registerStyles = function registerStyles2(cache, serialized, isStringTag) {
    var className = cache.key + "-" + serialized.name;
    if (
      // we only need to add the styles to the registered cache if the
      // class name could be used further down
      // the tree but if it's a string tag, we know it won't
      // so we don't have to add it to registered cache.
      // this improves memory usage since we can avoid storing the whole style string
      (isStringTag === false || // we need to always store it if we're in compat mode and
      // in node since emotion-server relies on whether a style is in
      // the registered cache to know whether a style is global or not
      // also, note that this check will be dead code eliminated in the browser
      isBrowser === false && cache.compat !== void 0) && cache.registered[className] === void 0
    ) {
      cache.registered[className] = serialized.styles;
    }
  };
  var insertStyles = function insertStyles2(cache, serialized, isStringTag) {
    registerStyles(cache, serialized, isStringTag);
    var className = cache.key + "-" + serialized.name;
    if (cache.inserted[serialized.name] === void 0) {
      var stylesForSSR = "";
      var current = serialized;
      do {
        var maybeStyles = cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
        if (!isBrowser && maybeStyles !== void 0) {
          stylesForSSR += maybeStyles;
        }
        current = current.next;
      } while (current !== void 0);
      if (!isBrowser && stylesForSSR.length !== 0) {
        return stylesForSSR;
      }
    }
  };
  emotionUtils_cjs.getRegisteredStyles = getRegisteredStyles;
  emotionUtils_cjs.insertStyles = insertStyles;
  emotionUtils_cjs.registerStyles = registerStyles;
  return emotionUtils_cjs;
}
export {
  requireEmotionUtils_cjs as r
};
