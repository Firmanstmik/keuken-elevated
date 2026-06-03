var reactIs$1 = { exports: {} };
var reactIs_production = {};
var hasRequiredReactIs_production;
function requireReactIs_production() {
  if (hasRequiredReactIs_production) return reactIs_production;
  hasRequiredReactIs_production = 1;
  var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = /* @__PURE__ */ Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = /* @__PURE__ */ Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo"), REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy"), REACT_VIEW_TRANSITION_TYPE = /* @__PURE__ */ Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = /* @__PURE__ */ Symbol.for("react.client.reference");
  function typeOf(object) {
    if ("object" === typeof object && null !== object) {
      var $$typeof = object.$$typeof;
      switch ($$typeof) {
        case REACT_ELEMENT_TYPE:
          switch (object = object.type, object) {
            case REACT_FRAGMENT_TYPE:
            case REACT_PROFILER_TYPE:
            case REACT_STRICT_MODE_TYPE:
            case REACT_SUSPENSE_TYPE:
            case REACT_SUSPENSE_LIST_TYPE:
            case REACT_VIEW_TRANSITION_TYPE:
              return object;
            default:
              switch (object = object && object.$$typeof, object) {
                case REACT_CONTEXT_TYPE:
                case REACT_FORWARD_REF_TYPE:
                case REACT_LAZY_TYPE:
                case REACT_MEMO_TYPE:
                  return object;
                case REACT_CONSUMER_TYPE:
                  return object;
                default:
                  return $$typeof;
              }
          }
        case REACT_PORTAL_TYPE:
          return $$typeof;
      }
    }
  }
  reactIs_production.ContextConsumer = REACT_CONSUMER_TYPE;
  reactIs_production.ContextProvider = REACT_CONTEXT_TYPE;
  reactIs_production.Element = REACT_ELEMENT_TYPE;
  reactIs_production.ForwardRef = REACT_FORWARD_REF_TYPE;
  reactIs_production.Fragment = REACT_FRAGMENT_TYPE;
  reactIs_production.Lazy = REACT_LAZY_TYPE;
  reactIs_production.Memo = REACT_MEMO_TYPE;
  reactIs_production.Portal = REACT_PORTAL_TYPE;
  reactIs_production.Profiler = REACT_PROFILER_TYPE;
  reactIs_production.StrictMode = REACT_STRICT_MODE_TYPE;
  reactIs_production.Suspense = REACT_SUSPENSE_TYPE;
  reactIs_production.SuspenseList = REACT_SUSPENSE_LIST_TYPE;
  reactIs_production.isContextConsumer = function(object) {
    return typeOf(object) === REACT_CONSUMER_TYPE;
  };
  reactIs_production.isContextProvider = function(object) {
    return typeOf(object) === REACT_CONTEXT_TYPE;
  };
  reactIs_production.isElement = function(object) {
    return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
  };
  reactIs_production.isForwardRef = function(object) {
    return typeOf(object) === REACT_FORWARD_REF_TYPE;
  };
  reactIs_production.isFragment = function(object) {
    return typeOf(object) === REACT_FRAGMENT_TYPE;
  };
  reactIs_production.isLazy = function(object) {
    return typeOf(object) === REACT_LAZY_TYPE;
  };
  reactIs_production.isMemo = function(object) {
    return typeOf(object) === REACT_MEMO_TYPE;
  };
  reactIs_production.isPortal = function(object) {
    return typeOf(object) === REACT_PORTAL_TYPE;
  };
  reactIs_production.isProfiler = function(object) {
    return typeOf(object) === REACT_PROFILER_TYPE;
  };
  reactIs_production.isStrictMode = function(object) {
    return typeOf(object) === REACT_STRICT_MODE_TYPE;
  };
  reactIs_production.isSuspense = function(object) {
    return typeOf(object) === REACT_SUSPENSE_TYPE;
  };
  reactIs_production.isSuspenseList = function(object) {
    return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
  };
  reactIs_production.isValidElementType = function(type) {
    return "string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE || void 0 !== type.getModuleId) ? true : false;
  };
  reactIs_production.typeOf = typeOf;
  return reactIs_production;
}
var hasRequiredReactIs$1;
function requireReactIs$1() {
  if (hasRequiredReactIs$1) return reactIs$1.exports;
  hasRequiredReactIs$1 = 1;
  {
    reactIs$1.exports = /* @__PURE__ */ requireReactIs_production();
  }
  return reactIs$1.exports;
}
var reactIsExports = /* @__PURE__ */ requireReactIs$1();
var reactIs = { exports: {} };
var reactIs_production_min = {};
var hasRequiredReactIs_production_min;
function requireReactIs_production_min() {
  if (hasRequiredReactIs_production_min) return reactIs_production_min;
  hasRequiredReactIs_production_min = 1;
  var b = "function" === typeof Symbol && Symbol.for, c = b ? /* @__PURE__ */ Symbol.for("react.element") : 60103, d = b ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, e = b ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, f = b ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, g = b ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, h = b ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, k = b ? /* @__PURE__ */ Symbol.for("react.context") : 60110, l = b ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, m = b ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, n = b ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, p = b ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, q = b ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, r = b ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, t = b ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, v = b ? /* @__PURE__ */ Symbol.for("react.block") : 60121, w = b ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, x = b ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, y = b ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function z(a) {
    if ("object" === typeof a && null !== a) {
      var u = a.$$typeof;
      switch (u) {
        case c:
          switch (a = a.type, a) {
            case l:
            case m:
            case e:
            case g:
            case f:
            case p:
              return a;
            default:
              switch (a = a && a.$$typeof, a) {
                case k:
                case n:
                case t:
                case r:
                case h:
                  return a;
                default:
                  return u;
              }
          }
        case d:
          return u;
      }
    }
  }
  function A(a) {
    return z(a) === m;
  }
  reactIs_production_min.AsyncMode = l;
  reactIs_production_min.ConcurrentMode = m;
  reactIs_production_min.ContextConsumer = k;
  reactIs_production_min.ContextProvider = h;
  reactIs_production_min.Element = c;
  reactIs_production_min.ForwardRef = n;
  reactIs_production_min.Fragment = e;
  reactIs_production_min.Lazy = t;
  reactIs_production_min.Memo = r;
  reactIs_production_min.Portal = d;
  reactIs_production_min.Profiler = g;
  reactIs_production_min.StrictMode = f;
  reactIs_production_min.Suspense = p;
  reactIs_production_min.isAsyncMode = function(a) {
    return A(a) || z(a) === l;
  };
  reactIs_production_min.isConcurrentMode = A;
  reactIs_production_min.isContextConsumer = function(a) {
    return z(a) === k;
  };
  reactIs_production_min.isContextProvider = function(a) {
    return z(a) === h;
  };
  reactIs_production_min.isElement = function(a) {
    return "object" === typeof a && null !== a && a.$$typeof === c;
  };
  reactIs_production_min.isForwardRef = function(a) {
    return z(a) === n;
  };
  reactIs_production_min.isFragment = function(a) {
    return z(a) === e;
  };
  reactIs_production_min.isLazy = function(a) {
    return z(a) === t;
  };
  reactIs_production_min.isMemo = function(a) {
    return z(a) === r;
  };
  reactIs_production_min.isPortal = function(a) {
    return z(a) === d;
  };
  reactIs_production_min.isProfiler = function(a) {
    return z(a) === g;
  };
  reactIs_production_min.isStrictMode = function(a) {
    return z(a) === f;
  };
  reactIs_production_min.isSuspense = function(a) {
    return z(a) === p;
  };
  reactIs_production_min.isValidElementType = function(a) {
    return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
  };
  reactIs_production_min.typeOf = z;
  return reactIs_production_min;
}
var hasRequiredReactIs;
function requireReactIs() {
  if (hasRequiredReactIs) return reactIs.exports;
  hasRequiredReactIs = 1;
  {
    reactIs.exports = requireReactIs_production_min();
  }
  return reactIs.exports;
}
export {
  requireReactIs as a,
  reactIsExports as r
};
