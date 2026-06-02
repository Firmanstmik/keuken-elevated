import { r as reactExports } from "./react.mjs";
import { r as reactIsExports } from "./react-is.mjs";
import { c as clsx } from "./clsx.mjs";
function composeClasses(slots, getUtilityClass, classes = void 0) {
  const output = {};
  for (const slotName in slots) {
    const slot = slots[slotName];
    let buffer = "";
    let start = true;
    for (let i = 0; i < slot.length; i += 1) {
      const value = slot[i];
      if (value) {
        buffer += (start === true ? "" : " ") + getUtilityClass(value);
        start = false;
        if (classes && classes[value]) {
          buffer += " " + classes[value];
        }
      }
    }
    output[slotName] = buffer;
  }
  return output;
}
function formatMuiErrorMessage(code, ...args) {
  const url = new URL(`https://mui.com/production-error/?code=${code}`);
  args.forEach((arg) => url.searchParams.append("args[]", arg));
  return `Minified MUI error #${code}; visit ${url} for the full message.`;
}
function capitalize(string) {
  if (typeof string !== "string") {
    throw new Error(formatMuiErrorMessage(7));
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function fastDeepAssign(target, source) {
  const sourceIsArray = Array.isArray(source);
  const targetIsArray = Array.isArray(target);
  if (isPrimitive(source)) {
    return source;
  } else if (isPrimitiveOrBuiltIn(target)) {
    return clone(source);
  } else if (sourceIsArray && targetIsArray) {
    return mergeArray(target, source);
  } else if (sourceIsArray !== targetIsArray) {
    return clone(source);
  } else {
    return mergeObject(target, source);
  }
}
function cloneArray(value) {
  let i = 0;
  const il = value.length;
  const result = new Array(il);
  for (i = 0; i < il; i += 1) {
    result[i] = clone(value[i]);
  }
  return result;
}
function cloneObject(target) {
  const result = {};
  for (const key in target) {
    result[key] = clone(target[key]);
  }
  return result;
}
function mergeArray(target, source) {
  const tl = target.length;
  for (let i = 0; i < source.length; i += 1) {
    target[tl + i] = clone(source[i]);
  }
  return target;
}
function isMergeableObject(value) {
  return typeof value === "object" && value !== null && !(value instanceof RegExp) && !(value instanceof Date);
}
function isPrimitive(value) {
  return typeof value !== "object" || value === null;
}
function isPrimitiveOrBuiltIn(value) {
  return typeof value !== "object" || value === null || value instanceof RegExp || value instanceof Date;
}
function clone(entry) {
  return isMergeableObject(entry) ? Array.isArray(entry) ? cloneArray(entry) : cloneObject(entry) : entry;
}
function mergeObject(target, source) {
  for (const key in source) {
    if (key in target) {
      target[key] = fastDeepAssign(target[key], source[key]);
    } else {
      target[key] = clone(source[key]);
    }
  }
  return target;
}
function isObjectEmpty(object) {
  if (object == null) {
    return true;
  }
  for (const _ in object) {
    return false;
  }
  return true;
}
function isPlainObject(item) {
  if (typeof item !== "object" || item === null) {
    return false;
  }
  const prototype = Object.getPrototypeOf(item);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in item) && !(Symbol.iterator in item);
}
function deepClone(source) {
  if (/* @__PURE__ */ reactExports.isValidElement(source) || reactIsExports.isValidElementType(source) || !isPlainObject(source)) {
    return source;
  }
  const output = {};
  Object.keys(source).forEach((key) => {
    output[key] = deepClone(source[key]);
  });
  return output;
}
function deepmerge(target, source, options = {
  clone: true
}) {
  const output = options.clone ? {
    ...target
  } : target;
  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach((key) => {
      if (/* @__PURE__ */ reactExports.isValidElement(source[key]) || reactIsExports.isValidElementType(source[key])) {
        output[key] = source[key];
      } else if (isPlainObject(source[key]) && // Avoid prototype pollution
      Object.prototype.hasOwnProperty.call(target, key) && isPlainObject(target[key])) {
        output[key] = deepmerge(target[key], source[key], options);
      } else if (options.clone) {
        output[key] = isPlainObject(source[key]) ? deepClone(source[key]) : source[key];
      } else {
        output[key] = source[key];
      }
    });
  }
  return output;
}
const defaultGenerator = (componentName) => componentName;
const createClassNameGenerator = () => {
  let generate = defaultGenerator;
  return {
    configure(generator) {
      generate = generator;
    },
    generate(componentName) {
      return generate(componentName);
    },
    reset() {
      generate = defaultGenerator;
    }
  };
};
const ClassNameGenerator = createClassNameGenerator();
const globalStateClasses = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function generateUtilityClass(componentName, slot, globalStatePrefix = "Mui") {
  const globalStateClass = globalStateClasses[slot];
  return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${ClassNameGenerator.generate(componentName)}-${slot}`;
}
function generateUtilityClasses(componentName, slots, globalStatePrefix = "Mui") {
  const result = {};
  slots.forEach((slot) => {
    result[slot] = generateUtilityClass(componentName, slot, globalStatePrefix);
  });
  return result;
}
function resolveProps(defaultProps, props, mergeClassNameAndStyle = false) {
  const output = {
    ...props
  };
  for (const key in defaultProps) {
    if (Object.prototype.hasOwnProperty.call(defaultProps, key)) {
      const propName = key;
      if (propName === "components" || propName === "slots") {
        output[propName] = {
          ...defaultProps[propName],
          ...output[propName]
        };
      } else if (propName === "componentsProps" || propName === "slotProps") {
        const defaultSlotProps = defaultProps[propName];
        const slotProps = props[propName];
        if (!slotProps) {
          output[propName] = defaultSlotProps || {};
        } else if (!defaultSlotProps) {
          output[propName] = slotProps;
        } else {
          output[propName] = {
            ...slotProps
          };
          for (const slotKey in defaultSlotProps) {
            if (Object.prototype.hasOwnProperty.call(defaultSlotProps, slotKey)) {
              const slotPropName = slotKey;
              output[propName][slotPropName] = resolveProps(defaultSlotProps[slotPropName], slotProps[slotPropName], mergeClassNameAndStyle);
            }
          }
        }
      } else if (propName === "className" && mergeClassNameAndStyle && props.className !== void 0) {
        output.className = clsx(defaultProps?.className, props?.className);
      } else if (propName === "style" && mergeClassNameAndStyle && props.style) {
        output.style = {
          ...defaultProps?.style,
          ...props?.style
        };
      } else if (output[propName] === void 0) {
        output[propName] = defaultProps[propName];
      }
    }
  }
  return output;
}
function clamp(val, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
  return Math.max(min, Math.min(val, max));
}
export {
  clamp as a,
  composeClasses as b,
  capitalize as c,
  deepmerge as d,
  formatMuiErrorMessage as e,
  fastDeepAssign as f,
  generateUtilityClass as g,
  generateUtilityClasses as h,
  isObjectEmpty as i,
  isPlainObject as j,
  resolveProps as r
};
