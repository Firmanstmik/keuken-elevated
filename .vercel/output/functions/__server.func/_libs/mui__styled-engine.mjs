import "./react.mjs";
import { e as emotionStyled_cjs_defaultExports } from "./emotion__styled.mjs";
import { e as emotionSerialize_cjsExports } from "./emotion__serialize.mjs";
function styled(tag, options) {
  const stylesFactory = emotionStyled_cjs_defaultExports._default(tag, options);
  return stylesFactory;
}
function internal_mutateStyles(tag, processor) {
  if (Array.isArray(tag.__emotion_styles)) {
    tag.__emotion_styles = processor(tag.__emotion_styles);
  }
}
const wrapper = [];
function internal_serializeStyles(styles) {
  wrapper[0] = styles;
  return emotionSerialize_cjsExports.serializeStyles(wrapper);
}
export {
  internal_serializeStyles as a,
  internal_mutateStyles as i,
  styled as s
};
