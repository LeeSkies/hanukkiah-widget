import Qe, { useState as X, useRef as Ne, useEffect as Pe } from "react";
var $e = { exports: {} }, Te = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xe;
function hr() {
  if (Xe) return Te;
  Xe = 1;
  var te = Qe, k = Symbol.for("react.element"), N = Symbol.for("react.fragment"), L = Object.prototype.hasOwnProperty, Z = te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(U, R, V) {
    var x, D = {}, O = null, ne = null;
    V !== void 0 && (O = "" + V), R.key !== void 0 && (O = "" + R.key), R.ref !== void 0 && (ne = R.ref);
    for (x in R) L.call(R, x) && !Y.hasOwnProperty(x) && (D[x] = R[x]);
    if (U && U.defaultProps) for (x in R = U.defaultProps, R) D[x] === void 0 && (D[x] = R[x]);
    return { $$typeof: k, type: U, key: O, ref: ne, props: D, _owner: Z.current };
  }
  return Te.Fragment = N, Te.jsx = b, Te.jsxs = b, Te;
}
var Me = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ze;
function vr() {
  return Ze || (Ze = 1, process.env.NODE_ENV !== "production" && function() {
    var te = Qe, k = Symbol.for("react.element"), N = Symbol.for("react.portal"), L = Symbol.for("react.fragment"), Z = Symbol.for("react.strict_mode"), Y = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), U = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), V = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), ne = Symbol.for("react.offscreen"), ye = Symbol.iterator, ke = "@@iterator";
    function E(e) {
      if (e === null || typeof e != "object")
        return null;
      var a = ye && e[ye] || e[ke];
      return typeof a == "function" ? a : null;
    }
    var ae = te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function I(e) {
      {
        for (var a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), u = 1; u < a; u++)
          i[u - 1] = arguments[u];
        fe("error", e, i);
      }
    }
    function fe(e, a, i) {
      {
        var u = ae.ReactDebugCurrentFrame, w = u.getStackAddendum();
        w !== "" && (a += "%s", i = i.concat([w]));
        var T = i.map(function(m) {
          return String(m);
        });
        T.unshift("Warning: " + a), Function.prototype.apply.call(console[e], console, T);
      }
    }
    var oe = !1, ie = !1, de = !1, be = !1, se = !1, Q;
    Q = Symbol.for("react.module.reference");
    function F(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === L || e === Y || se || e === Z || e === V || e === x || be || e === ne || oe || ie || de || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === D || e.$$typeof === b || e.$$typeof === U || e.$$typeof === R || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Q || e.getModuleId !== void 0));
    }
    function pe(e, a, i) {
      var u = e.displayName;
      if (u)
        return u;
      var w = a.displayName || a.name || "";
      return w !== "" ? i + "(" + w + ")" : i;
    }
    function ee(e) {
      return e.displayName || "Context";
    }
    function H(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && I("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case L:
          return "Fragment";
        case N:
          return "Portal";
        case Y:
          return "Profiler";
        case Z:
          return "StrictMode";
        case V:
          return "Suspense";
        case x:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case U:
            var a = e;
            return ee(a) + ".Consumer";
          case b:
            var i = e;
            return ee(i._context) + ".Provider";
          case R:
            return pe(e, e.render, "ForwardRef");
          case D:
            var u = e.displayName || null;
            return u !== null ? u : H(e.type) || "Memo";
          case O: {
            var w = e, T = w._payload, m = w._init;
            try {
              return H(m(T));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var $ = Object.assign, re = 0, le, he, ve, ce, t, r, c;
    function l() {
    }
    l.__reactDisabledLog = !0;
    function d() {
      {
        if (re === 0) {
          le = console.log, he = console.info, ve = console.warn, ce = console.error, t = console.group, r = console.groupCollapsed, c = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: l,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        re++;
      }
    }
    function p() {
      {
        if (re--, re === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: $({}, e, {
              value: le
            }),
            info: $({}, e, {
              value: he
            }),
            warn: $({}, e, {
              value: ve
            }),
            error: $({}, e, {
              value: ce
            }),
            group: $({}, e, {
              value: t
            }),
            groupCollapsed: $({}, e, {
              value: r
            }),
            groupEnd: $({}, e, {
              value: c
            })
          });
        }
        re < 0 && I("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var n = ae.ReactCurrentDispatcher, o;
    function s(e, a, i) {
      {
        if (o === void 0)
          try {
            throw Error();
          } catch (w) {
            var u = w.stack.trim().match(/\n( *(at )?)/);
            o = u && u[1] || "";
          }
        return `
` + o + e;
      }
    }
    var h = !1, y;
    {
      var C = typeof WeakMap == "function" ? WeakMap : Map;
      y = new C();
    }
    function M(e, a) {
      if (!e || h)
        return "";
      {
        var i = y.get(e);
        if (i !== void 0)
          return i;
      }
      var u;
      h = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var T;
      T = n.current, n.current = null, d();
      try {
        if (a) {
          var m = function() {
            throw Error();
          };
          if (Object.defineProperty(m.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(m, []);
            } catch (z) {
              u = z;
            }
            Reflect.construct(e, [], m);
          } else {
            try {
              m.call();
            } catch (z) {
              u = z;
            }
            e.call(m.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (z) {
            u = z;
          }
          e();
        }
      } catch (z) {
        if (z && u && typeof z.stack == "string") {
          for (var v = z.stack.split(`
`), B = u.stack.split(`
`), j = v.length - 1, S = B.length - 1; j >= 1 && S >= 0 && v[j] !== B[S]; )
            S--;
          for (; j >= 1 && S >= 0; j--, S--)
            if (v[j] !== B[S]) {
              if (j !== 1 || S !== 1)
                do
                  if (j--, S--, S < 0 || v[j] !== B[S]) {
                    var G = `
` + v[j].replace(" at new ", " at ");
                    return e.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", e.displayName)), typeof e == "function" && y.set(e, G), G;
                  }
                while (j >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        h = !1, n.current = T, p(), Error.prepareStackTrace = w;
      }
      var me = e ? e.displayName || e.name : "", ue = me ? s(me) : "";
      return typeof e == "function" && y.set(e, ue), ue;
    }
    function _(e, a, i) {
      return M(e, !1);
    }
    function g(e) {
      var a = e.prototype;
      return !!(a && a.isReactComponent);
    }
    function P(e, a, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return M(e, g(e));
      if (typeof e == "string")
        return s(e);
      switch (e) {
        case V:
          return s("Suspense");
        case x:
          return s("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            return _(e.render);
          case D:
            return P(e.type, a, i);
          case O: {
            var u = e, w = u._payload, T = u._init;
            try {
              return P(T(w), a, i);
            } catch {
            }
          }
        }
      return "";
    }
    var A = Object.prototype.hasOwnProperty, W = {}, q = ae.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var a = e._owner, i = P(e.type, e._source, a ? a.type : null);
        q.setExtraStackFrame(i);
      } else
        q.setExtraStackFrame(null);
    }
    function K(e, a, i, u, w) {
      {
        var T = Function.call.bind(A);
        for (var m in e)
          if (T(e, m)) {
            var v = void 0;
            try {
              if (typeof e[m] != "function") {
                var B = Error((u || "React class") + ": " + i + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw B.name = "Invariant Violation", B;
              }
              v = e[m](a, m, u, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (j) {
              v = j;
            }
            v && !(v instanceof Error) && (J(w), I("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", i, m, typeof v), J(null)), v instanceof Error && !(v.message in W) && (W[v.message] = !0, J(w), I("Failed %s type: %s", i, v.message), J(null));
          }
      }
    }
    var Oe = Array.isArray;
    function xe(e) {
      return Oe(e);
    }
    function Ie(e) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, i = a && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function je(e) {
      try {
        return Se(e), !1;
      } catch {
        return !0;
      }
    }
    function Se(e) {
      return "" + e;
    }
    function we(e) {
      if (je(e))
        return I("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ie(e)), Se(e);
    }
    var _e = ae.ReactCurrentOwner, Fe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, Re;
    function Ce(e) {
      if (A.call(e, "ref")) {
        var a = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ae(e) {
      if (A.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function De(e, a) {
      typeof e.ref == "string" && _e.current;
    }
    function er(e, a) {
      {
        var i = function() {
          Ee || (Ee = !0, I("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function rr(e, a) {
      {
        var i = function() {
          Re || (Re = !0, I("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var tr = function(e, a, i, u, w, T, m) {
      var v = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: k,
        // Built-in properties that belong on the element
        type: e,
        key: a,
        ref: i,
        props: m,
        // Record the component responsible for creating this element.
        _owner: T
      };
      return v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(v, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.defineProperty(v, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    };
    function nr(e, a, i, u, w) {
      {
        var T, m = {}, v = null, B = null;
        i !== void 0 && (we(i), v = "" + i), Ae(a) && (we(a.key), v = "" + a.key), Ce(a) && (B = a.ref, De(a, w));
        for (T in a)
          A.call(a, T) && !Fe.hasOwnProperty(T) && (m[T] = a[T]);
        if (e && e.defaultProps) {
          var j = e.defaultProps;
          for (T in j)
            m[T] === void 0 && (m[T] = j[T]);
        }
        if (v || B) {
          var S = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          v && er(m, S), B && rr(m, S);
        }
        return tr(e, v, B, w, u, _e.current, m);
      }
    }
    var Le = ae.ReactCurrentOwner, Ue = ae.ReactDebugCurrentFrame;
    function ge(e) {
      if (e) {
        var a = e._owner, i = P(e.type, e._source, a ? a.type : null);
        Ue.setExtraStackFrame(i);
      } else
        Ue.setExtraStackFrame(null);
    }
    var Be;
    Be = !1;
    function We(e) {
      return typeof e == "object" && e !== null && e.$$typeof === k;
    }
    function Ve() {
      {
        if (Le.current) {
          var e = H(Le.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      return "";
    }
    var He = {};
    function or(e) {
      {
        var a = Ve();
        if (!a) {
          var i = typeof e == "string" ? e : e.displayName || e.name;
          i && (a = `

Check the top-level render call using <` + i + ">.");
        }
        return a;
      }
    }
    function qe(e, a) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var i = or(a);
        if (He[i])
          return;
        He[i] = !0;
        var u = "";
        e && e._owner && e._owner !== Le.current && (u = " It was passed a child from " + H(e._owner.type) + "."), ge(e), I('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, u), ge(null);
      }
    }
    function Je(e, a) {
      {
        if (typeof e != "object")
          return;
        if (xe(e))
          for (var i = 0; i < e.length; i++) {
            var u = e[i];
            We(u) && qe(u, a);
          }
        else if (We(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var w = E(e);
          if (typeof w == "function" && w !== e.entries)
            for (var T = w.call(e), m; !(m = T.next()).done; )
              We(m.value) && qe(m.value, a);
        }
      }
    }
    function ir(e) {
      {
        var a = e.type;
        if (a == null || typeof a == "string")
          return;
        var i;
        if (typeof a == "function")
          i = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === R || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === D))
          i = a.propTypes;
        else
          return;
        if (i) {
          var u = H(a);
          K(i, e.props, "prop", u, e);
        } else if (a.PropTypes !== void 0 && !Be) {
          Be = !0;
          var w = H(a);
          I("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && I("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var a = Object.keys(e.props), i = 0; i < a.length; i++) {
          var u = a[i];
          if (u !== "children" && u !== "key") {
            ge(e), I("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), ge(null);
            break;
          }
        }
        e.ref !== null && (ge(e), I("Invalid attribute `ref` supplied to `React.Fragment`."), ge(null));
      }
    }
    var Ke = {};
    function Ge(e, a, i, u, w, T) {
      {
        var m = F(e);
        if (!m) {
          var v = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var B = ar();
          B ? v += B : v += Ve();
          var j;
          e === null ? j = "null" : xe(e) ? j = "array" : e !== void 0 && e.$$typeof === k ? (j = "<" + (H(e.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : j = typeof e, I("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", j, v);
        }
        var S = nr(e, a, i, w, T);
        if (S == null)
          return S;
        if (m) {
          var G = a.children;
          if (G !== void 0)
            if (u)
              if (xe(G)) {
                for (var me = 0; me < G.length; me++)
                  Je(G[me], e);
                Object.freeze && Object.freeze(G);
              } else
                I("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Je(G, e);
        }
        if (A.call(a, "key")) {
          var ue = H(e), z = Object.keys(a).filter(function(pr) {
            return pr !== "key";
          }), ze = z.length > 0 ? "{key: someKey, " + z.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ke[ue + ze]) {
            var dr = z.length > 0 ? "{" + z.join(": ..., ") + ": ...}" : "{}";
            I(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ze, ue, dr, ue), Ke[ue + ze] = !0;
          }
        }
        return e === L ? sr(S) : ir(S), S;
      }
    }
    function lr(e, a, i) {
      return Ge(e, a, i, !0);
    }
    function cr(e, a, i) {
      return Ge(e, a, i, !1);
    }
    var ur = cr, fr = lr;
    Me.Fragment = L, Me.jsx = ur, Me.jsxs = fr;
  }()), Me;
}
process.env.NODE_ENV === "production" ? $e.exports = hr() : $e.exports = vr();
var f = $e.exports, Ye = {};
(function te(k, N, L, Z) {
  var Y = !!(k.Worker && k.Blob && k.Promise && k.OffscreenCanvas && k.OffscreenCanvasRenderingContext2D && k.HTMLCanvasElement && k.HTMLCanvasElement.prototype.transferControlToOffscreen && k.URL && k.URL.createObjectURL), b = typeof Path2D == "function" && typeof DOMMatrix == "function", U = function() {
    if (!k.OffscreenCanvas)
      return !1;
    try {
      var t = new OffscreenCanvas(1, 1), r = t.getContext("2d");
      r.fillRect(0, 0, 1, 1);
      var c = t.transferToImageBitmap();
      r.createPattern(c, "no-repeat");
    } catch {
      return !1;
    }
    return !0;
  }();
  function R() {
  }
  function V(t) {
    var r = N.exports.Promise, c = r !== void 0 ? r : k.Promise;
    return typeof c == "function" ? new c(t) : (t(R, R), null);
  }
  var x = /* @__PURE__ */ function(t, r) {
    return {
      transform: function(c) {
        if (t)
          return c;
        if (r.has(c))
          return r.get(c);
        var l = new OffscreenCanvas(c.width, c.height), d = l.getContext("2d");
        return d.drawImage(c, 0, 0), r.set(c, l), l;
      },
      clear: function() {
        r.clear();
      }
    };
  }(U, /* @__PURE__ */ new Map()), D = function() {
    var t = Math.floor(16.666666666666668), r, c, l = {}, d = 0;
    return typeof requestAnimationFrame == "function" && typeof cancelAnimationFrame == "function" ? (r = function(p) {
      var n = Math.random();
      return l[n] = requestAnimationFrame(function o(s) {
        d === s || d + t - 1 < s ? (d = s, delete l[n], p()) : l[n] = requestAnimationFrame(o);
      }), n;
    }, c = function(p) {
      l[p] && cancelAnimationFrame(l[p]);
    }) : (r = function(p) {
      return setTimeout(p, t);
    }, c = function(p) {
      return clearTimeout(p);
    }), { frame: r, cancel: c };
  }(), O = /* @__PURE__ */ function() {
    var t, r, c = {};
    function l(d) {
      function p(n, o) {
        d.postMessage({ options: n || {}, callback: o });
      }
      d.init = function(o) {
        var s = o.transferControlToOffscreen();
        d.postMessage({ canvas: s }, [s]);
      }, d.fire = function(o, s, h) {
        if (r)
          return p(o, null), r;
        var y = Math.random().toString(36).slice(2);
        return r = V(function(C) {
          function M(_) {
            _.data.callback === y && (delete c[y], d.removeEventListener("message", M), r = null, x.clear(), h(), C());
          }
          d.addEventListener("message", M), p(o, y), c[y] = M.bind(null, { data: { callback: y } });
        }), r;
      }, d.reset = function() {
        d.postMessage({ reset: !0 });
        for (var o in c)
          c[o](), delete c[o];
      };
    }
    return function() {
      if (t)
        return t;
      if (!L && Y) {
        var d = [
          "var CONFETTI, SIZE = {}, module = {};",
          "(" + te.toString() + ")(this, module, true, SIZE);",
          "onmessage = function(msg) {",
          "  if (msg.data.options) {",
          "    CONFETTI(msg.data.options).then(function () {",
          "      if (msg.data.callback) {",
          "        postMessage({ callback: msg.data.callback });",
          "      }",
          "    });",
          "  } else if (msg.data.reset) {",
          "    CONFETTI && CONFETTI.reset();",
          "  } else if (msg.data.resize) {",
          "    SIZE.width = msg.data.resize.width;",
          "    SIZE.height = msg.data.resize.height;",
          "  } else if (msg.data.canvas) {",
          "    SIZE.width = msg.data.canvas.width;",
          "    SIZE.height = msg.data.canvas.height;",
          "    CONFETTI = module.exports.create(msg.data.canvas);",
          "  }",
          "}"
        ].join(`
`);
        try {
          t = new Worker(URL.createObjectURL(new Blob([d])));
        } catch (p) {
          return typeof console < "u" && typeof console.warn == "function" && console.warn("🎊 Could not load worker", p), null;
        }
        l(t);
      }
      return t;
    };
  }(), ne = {
    particleCount: 50,
    angle: 90,
    spread: 45,
    startVelocity: 45,
    decay: 0.9,
    gravity: 1,
    drift: 0,
    ticks: 200,
    x: 0.5,
    y: 0.5,
    shapes: ["square", "circle"],
    zIndex: 100,
    colors: [
      "#26ccff",
      "#a25afd",
      "#ff5e7e",
      "#88ff5a",
      "#fcff42",
      "#ffa62d",
      "#ff36ff"
    ],
    // probably should be true, but back-compat
    disableForReducedMotion: !1,
    scalar: 1
  };
  function ye(t, r) {
    return r ? r(t) : t;
  }
  function ke(t) {
    return t != null;
  }
  function E(t, r, c) {
    return ye(
      t && ke(t[r]) ? t[r] : ne[r],
      c
    );
  }
  function ae(t) {
    return t < 0 ? 0 : Math.floor(t);
  }
  function I(t, r) {
    return Math.floor(Math.random() * (r - t)) + t;
  }
  function fe(t) {
    return parseInt(t, 16);
  }
  function oe(t) {
    return t.map(ie);
  }
  function ie(t) {
    var r = String(t).replace(/[^0-9a-f]/gi, "");
    return r.length < 6 && (r = r[0] + r[0] + r[1] + r[1] + r[2] + r[2]), {
      r: fe(r.substring(0, 2)),
      g: fe(r.substring(2, 4)),
      b: fe(r.substring(4, 6))
    };
  }
  function de(t) {
    var r = E(t, "origin", Object);
    return r.x = E(r, "x", Number), r.y = E(r, "y", Number), r;
  }
  function be(t) {
    t.width = document.documentElement.clientWidth, t.height = document.documentElement.clientHeight;
  }
  function se(t) {
    var r = t.getBoundingClientRect();
    t.width = r.width, t.height = r.height;
  }
  function Q(t) {
    var r = document.createElement("canvas");
    return r.style.position = "fixed", r.style.top = "0px", r.style.left = "0px", r.style.pointerEvents = "none", r.style.zIndex = t, r;
  }
  function F(t, r, c, l, d, p, n, o, s) {
    t.save(), t.translate(r, c), t.rotate(p), t.scale(l, d), t.arc(0, 0, 1, n, o, s), t.restore();
  }
  function pe(t) {
    var r = t.angle * (Math.PI / 180), c = t.spread * (Math.PI / 180);
    return {
      x: t.x,
      y: t.y,
      wobble: Math.random() * 10,
      wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
      velocity: t.startVelocity * 0.5 + Math.random() * t.startVelocity,
      angle2D: -r + (0.5 * c - Math.random() * c),
      tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
      color: t.color,
      shape: t.shape,
      tick: 0,
      totalTicks: t.ticks,
      decay: t.decay,
      drift: t.drift,
      random: Math.random() + 2,
      tiltSin: 0,
      tiltCos: 0,
      wobbleX: 0,
      wobbleY: 0,
      gravity: t.gravity * 3,
      ovalScalar: 0.6,
      scalar: t.scalar,
      flat: t.flat
    };
  }
  function ee(t, r) {
    r.x += Math.cos(r.angle2D) * r.velocity + r.drift, r.y += Math.sin(r.angle2D) * r.velocity + r.gravity, r.velocity *= r.decay, r.flat ? (r.wobble = 0, r.wobbleX = r.x + 10 * r.scalar, r.wobbleY = r.y + 10 * r.scalar, r.tiltSin = 0, r.tiltCos = 0, r.random = 1) : (r.wobble += r.wobbleSpeed, r.wobbleX = r.x + 10 * r.scalar * Math.cos(r.wobble), r.wobbleY = r.y + 10 * r.scalar * Math.sin(r.wobble), r.tiltAngle += 0.1, r.tiltSin = Math.sin(r.tiltAngle), r.tiltCos = Math.cos(r.tiltAngle), r.random = Math.random() + 2);
    var c = r.tick++ / r.totalTicks, l = r.x + r.random * r.tiltCos, d = r.y + r.random * r.tiltSin, p = r.wobbleX + r.random * r.tiltCos, n = r.wobbleY + r.random * r.tiltSin;
    if (t.fillStyle = "rgba(" + r.color.r + ", " + r.color.g + ", " + r.color.b + ", " + (1 - c) + ")", t.beginPath(), b && r.shape.type === "path" && typeof r.shape.path == "string" && Array.isArray(r.shape.matrix))
      t.fill(he(
        r.shape.path,
        r.shape.matrix,
        r.x,
        r.y,
        Math.abs(p - l) * 0.1,
        Math.abs(n - d) * 0.1,
        Math.PI / 10 * r.wobble
      ));
    else if (r.shape.type === "bitmap") {
      var o = Math.PI / 10 * r.wobble, s = Math.abs(p - l) * 0.1, h = Math.abs(n - d) * 0.1, y = r.shape.bitmap.width * r.scalar, C = r.shape.bitmap.height * r.scalar, M = new DOMMatrix([
        Math.cos(o) * s,
        Math.sin(o) * s,
        -Math.sin(o) * h,
        Math.cos(o) * h,
        r.x,
        r.y
      ]);
      M.multiplySelf(new DOMMatrix(r.shape.matrix));
      var _ = t.createPattern(x.transform(r.shape.bitmap), "no-repeat");
      _.setTransform(M), t.globalAlpha = 1 - c, t.fillStyle = _, t.fillRect(
        r.x - y / 2,
        r.y - C / 2,
        y,
        C
      ), t.globalAlpha = 1;
    } else if (r.shape === "circle")
      t.ellipse ? t.ellipse(r.x, r.y, Math.abs(p - l) * r.ovalScalar, Math.abs(n - d) * r.ovalScalar, Math.PI / 10 * r.wobble, 0, 2 * Math.PI) : F(t, r.x, r.y, Math.abs(p - l) * r.ovalScalar, Math.abs(n - d) * r.ovalScalar, Math.PI / 10 * r.wobble, 0, 2 * Math.PI);
    else if (r.shape === "star")
      for (var g = Math.PI / 2 * 3, P = 4 * r.scalar, A = 8 * r.scalar, W = r.x, q = r.y, J = 5, K = Math.PI / J; J--; )
        W = r.x + Math.cos(g) * A, q = r.y + Math.sin(g) * A, t.lineTo(W, q), g += K, W = r.x + Math.cos(g) * P, q = r.y + Math.sin(g) * P, t.lineTo(W, q), g += K;
    else
      t.moveTo(Math.floor(r.x), Math.floor(r.y)), t.lineTo(Math.floor(r.wobbleX), Math.floor(d)), t.lineTo(Math.floor(p), Math.floor(n)), t.lineTo(Math.floor(l), Math.floor(r.wobbleY));
    return t.closePath(), t.fill(), r.tick < r.totalTicks;
  }
  function H(t, r, c, l, d) {
    var p = r.slice(), n = t.getContext("2d"), o, s, h = V(function(y) {
      function C() {
        o = s = null, n.clearRect(0, 0, l.width, l.height), x.clear(), d(), y();
      }
      function M() {
        L && !(l.width === Z.width && l.height === Z.height) && (l.width = t.width = Z.width, l.height = t.height = Z.height), !l.width && !l.height && (c(t), l.width = t.width, l.height = t.height), n.clearRect(0, 0, l.width, l.height), p = p.filter(function(_) {
          return ee(n, _);
        }), p.length ? o = D.frame(M) : C();
      }
      o = D.frame(M), s = C;
    });
    return {
      addFettis: function(y) {
        return p = p.concat(y), h;
      },
      canvas: t,
      promise: h,
      reset: function() {
        o && D.cancel(o), s && s();
      }
    };
  }
  function $(t, r) {
    var c = !t, l = !!E(r || {}, "resize"), d = !1, p = E(r, "disableForReducedMotion", Boolean), n = Y && !!E(r || {}, "useWorker"), o = n ? O() : null, s = c ? be : se, h = t && o ? !!t.__confetti_initialized : !1, y = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion)").matches, C;
    function M(g, P, A) {
      for (var W = E(g, "particleCount", ae), q = E(g, "angle", Number), J = E(g, "spread", Number), K = E(g, "startVelocity", Number), Oe = E(g, "decay", Number), xe = E(g, "gravity", Number), Ie = E(g, "drift", Number), je = E(g, "colors", oe), Se = E(g, "ticks", Number), we = E(g, "shapes"), _e = E(g, "scalar"), Fe = !!E(g, "flat"), Ee = de(g), Re = W, Ce = [], Ae = t.width * Ee.x, De = t.height * Ee.y; Re--; )
        Ce.push(
          pe({
            x: Ae,
            y: De,
            angle: q,
            spread: J,
            startVelocity: K,
            color: je[Re % je.length],
            shape: we[I(0, we.length)],
            ticks: Se,
            decay: Oe,
            gravity: xe,
            drift: Ie,
            scalar: _e,
            flat: Fe
          })
        );
      return C ? C.addFettis(Ce) : (C = H(t, Ce, s, P, A), C.promise);
    }
    function _(g) {
      var P = p || E(g, "disableForReducedMotion", Boolean), A = E(g, "zIndex", Number);
      if (P && y)
        return V(function(K) {
          K();
        });
      c && C ? t = C.canvas : c && !t && (t = Q(A), document.body.appendChild(t)), l && !h && s(t);
      var W = {
        width: t.width,
        height: t.height
      };
      o && !h && o.init(t), h = !0, o && (t.__confetti_initialized = !0);
      function q() {
        if (o) {
          var K = {
            getBoundingClientRect: function() {
              if (!c)
                return t.getBoundingClientRect();
            }
          };
          s(K), o.postMessage({
            resize: {
              width: K.width,
              height: K.height
            }
          });
          return;
        }
        W.width = W.height = null;
      }
      function J() {
        C = null, l && (d = !1, k.removeEventListener("resize", q)), c && t && (document.body.contains(t) && document.body.removeChild(t), t = null, h = !1);
      }
      return l && !d && (d = !0, k.addEventListener("resize", q, !1)), o ? o.fire(g, W, J) : M(g, W, J);
    }
    return _.reset = function() {
      o && o.reset(), C && C.reset();
    }, _;
  }
  var re;
  function le() {
    return re || (re = $(null, { useWorker: !0, resize: !0 })), re;
  }
  function he(t, r, c, l, d, p, n) {
    var o = new Path2D(t), s = new Path2D();
    s.addPath(o, new DOMMatrix(r));
    var h = new Path2D();
    return h.addPath(s, new DOMMatrix([
      Math.cos(n) * d,
      Math.sin(n) * d,
      -Math.sin(n) * p,
      Math.cos(n) * p,
      c,
      l
    ])), h;
  }
  function ve(t) {
    if (!b)
      throw new Error("path confetti are not supported in this browser");
    var r, c;
    typeof t == "string" ? r = t : (r = t.path, c = t.matrix);
    var l = new Path2D(r), d = document.createElement("canvas"), p = d.getContext("2d");
    if (!c) {
      for (var n = 1e3, o = n, s = n, h = 0, y = 0, C, M, _ = 0; _ < n; _ += 2)
        for (var g = 0; g < n; g += 2)
          p.isPointInPath(l, _, g, "nonzero") && (o = Math.min(o, _), s = Math.min(s, g), h = Math.max(h, _), y = Math.max(y, g));
      C = h - o, M = y - s;
      var P = 10, A = Math.min(P / C, P / M);
      c = [
        A,
        0,
        0,
        A,
        -Math.round(C / 2 + o) * A,
        -Math.round(M / 2 + s) * A
      ];
    }
    return {
      type: "path",
      path: r,
      matrix: c
    };
  }
  function ce(t) {
    var r, c = 1, l = "#000000", d = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
    typeof t == "string" ? r = t : (r = t.text, c = "scalar" in t ? t.scalar : c, d = "fontFamily" in t ? t.fontFamily : d, l = "color" in t ? t.color : l);
    var p = 10 * c, n = "" + p + "px " + d, o = new OffscreenCanvas(p, p), s = o.getContext("2d");
    s.font = n;
    var h = s.measureText(r), y = Math.ceil(h.actualBoundingBoxRight + h.actualBoundingBoxLeft), C = Math.ceil(h.actualBoundingBoxAscent + h.actualBoundingBoxDescent), M = 2, _ = h.actualBoundingBoxLeft + M, g = h.actualBoundingBoxAscent + M;
    y += M + M, C += M + M, o = new OffscreenCanvas(y, C), s = o.getContext("2d"), s.font = n, s.fillStyle = l, s.fillText(r, _, g);
    var P = 1 / c;
    return {
      type: "bitmap",
      // TODO these probably need to be transfered for workers
      bitmap: o.transferToImageBitmap(),
      matrix: [P, 0, 0, P, -y * P / 2, -C * P / 2]
    };
  }
  N.exports = function() {
    return le().apply(this, arguments);
  }, N.exports.reset = function() {
    le().reset();
  }, N.exports.create = $, N.exports.shapeFromPath = ve, N.exports.shapeFromText = ce;
})(/* @__PURE__ */ function() {
  return typeof window < "u" ? window : typeof self < "u" ? self : this || {};
}(), Ye, !1);
const gr = Ye.exports;
Ye.exports.create;
function yr() {
  const [te, k] = X(/* @__PURE__ */ new Set()), [N, L] = X(""), [Z, Y] = X(0), [b, U] = X(!1), [R, V] = X(null), [x, D] = X(1), [O, ne] = X(!1), [ye, ke] = X(!1), [E, ae] = X(!1), [I, fe] = X(!1), [oe, ie] = X(0.1), [de, be] = X(0.1), se = Ne(null), Q = Ne({}), F = Ne(null), pe = {
    en: {
      title: "✡ Chanukkiah ✡",
      nightLabel: "Night",
      reset: "Reset",
      errorOrder: (n) => `Please light candles 1-${n} in order, then the Shamash.`,
      errorNight: (n) => `Tonight is Night ${n}. You only need to light candles 1-${n}.`,
      langBtn: "עברית",
      locked: "Light tonight's candles first!"
    },
    he: {
      title: "✡ חנוכייה ✡",
      nightLabel: "לילה",
      reset: "איפוס",
      errorOrder: (n) => `נא להדליק את הנרות 1-${n} לפי הסדר, ואז את השמש.`,
      errorNight: (n) => `הלילה הוא לילה ${n}. צריך להדליק רק את הנרות 1-${n}.`,
      langBtn: "English",
      locked: "יש להדליק את נרות הלילה קודם!"
    }
  }, ee = O ? pe.he : pe.en;
  Pe(() => {
    const n = document.documentElement.lang || "en";
    ne(n.startsWith("he"));
  }, []), Pe(() => {
    const n = /* @__PURE__ */ new Date(), o = new Date(n.getFullYear(), 11, 14);
    n.setHours(0, 0, 0, 0), o.setHours(0, 0, 0, 0);
    const s = n - o;
    let y = Math.ceil(s / (1e3 * 60 * 60 * 24)) + 1;
    y < 1 && (y = 1), y > 8 && (y = 8), D(y);
  }, []), Pe(() => {
    const n = () => {
      if (se.current) {
        const o = se.current.getBoundingClientRect();
        V({
          top: o.top,
          left: o.left,
          width: o.width,
          height: o.height
        });
      }
    };
    return n(), window.addEventListener("resize", n), window.addEventListener("scroll", n), () => {
      window.removeEventListener("resize", n), window.removeEventListener("scroll", n);
    };
  }, []), Pe(() => {
    k(/* @__PURE__ */ new Set()), L(""), Y(0);
  }, [x]);
  const H = (n) => {
    for (let s = 1; s <= x; s++)
      if (!n.has(s)) return s;
    const o = x;
    return n.size === o && !n.has("shamash") ? "shamash" : null;
  }, $ = (n) => {
    if (!b || te.has(n)) return;
    if (typeof n == "number" && n > x) {
      L(ee.errorNight(x));
      return;
    }
    const o = H(te);
    if (n === o) {
      const s = /* @__PURE__ */ new Set([...te, n]);
      k(s), Y(0), L(""), (s.size === x || s.size === x + 1) && (E || ae(!0), gr({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#ffd700", "#4a90e2", "#ffffff"],
        zIndex: 1e4
        // Ensure it's above the modal
      }));
    } else {
      const s = Z + 1;
      Y(s), s > 2 && L(ee.errorOrder(x));
    }
  }, re = (n) => {
    b && (Q.current[n] && clearTimeout(Q.current[n]), Q.current[n] = setTimeout(() => {
      $(n);
    }, 500));
  }, le = (n) => {
    Q.current[n] && (clearTimeout(Q.current[n]), delete Q.current[n]);
  }, he = (n) => {
    $(n);
  }, ve = () => {
    k(/* @__PURE__ */ new Set()), L(""), Y(0), setShowGreeting(!1);
  }, ce = () => {
    if (b)
      U(!1), F.current && F.current.pause();
    else {
      const n = document.documentElement.lang || "en";
      ne(n.startsWith("he")), U(!0), F.current && (F.current.volume = oe, F.current.currentTime = 0, F.current.play().catch((o) => console.error("Audio play failed:", o)));
    }
  }, t = () => {
    ne(!O);
  }, r = () => {
    oe > 0 ? (be(oe), ie(0), F.current && (F.current.volume = 0)) : (ie(de), F.current && (F.current.volume = de));
  }, c = (n) => {
    const o = parseFloat(n.target.value);
    ie(o), F.current && (F.current.volume = o);
  }, l = ({ id: n, isShamash: o }) => {
    const s = !b || te.has(n);
    return /* @__PURE__ */ f.jsxs(
      "div",
      {
        onMouseEnter: () => re(n),
        onMouseLeave: () => le(n),
        onClick: (h) => {
          h.stopPropagation(), he(n);
        },
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // Cursor handled by container, but we keep pointer for interactive feel or just inherit
          cursor: "inherit",
          transition: "transform 0.2s",
          position: "relative",
          zIndex: 10,
          pointerEvents: b ? "auto" : "none"
        },
        onMouseOver: (h) => {
          b && (h.currentTarget.style.transform = "translateY(-5px)");
        },
        onMouseOut: (h) => {
          b && (h.currentTarget.style.transform = "translateY(0)");
        },
        children: [
          /* @__PURE__ */ f.jsx(
            "div",
            {
              style: {
                width: "20px",
                height: "30px",
                background: s ? "linear-gradient(to top, #ff6b00 0%, #ffaa00 50%, #ffeb3b 100%)" : "transparent",
                borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                opacity: s ? 1 : 0,
                transition: "opacity 0.3s",
                boxShadow: s ? "0 0 20px #ffaa00, 0 0 40px #ff6b00" : "none",
                animation: s ? "flicker 1.5s ease-in-out infinite alternate" : "none",
                marginBottom: "2px"
              }
            }
          ),
          /* @__PURE__ */ f.jsx(
            "div",
            {
              style: {
                width: "25px",
                height: o ? "130px" : "100px",
                background: "linear-gradient(to right, #4a90e2 0%, #5ba3f5 50%, #4a90e2 100%)",
                borderRadius: "3px",
                boxShadow: "inset -2px 0 5px rgba(0, 0, 0, 0.3)"
              }
            }
          )
        ]
      }
    );
  }, d = b ? {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(15, 37, 87, 0.95)",
    zIndex: 9999,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    borderRadius: 0,
    direction: O ? "rtl" : "ltr",
    // RTL support
    cursor: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" style="font-size: 24px;"><text y="22">🕯️</text></svg>') 16 16, auto`
  } : {
    position: "fixed",
    top: R ? `${R.top}px` : "0",
    left: R ? `${R.left}px` : "0",
    width: R ? `${R.width}px` : "120px",
    height: R ? `${R.height}px` : "80px",
    background: "linear-gradient(to bottom, #0f2557 0%, #1a3a6e 100%)",
    zIndex: 9999,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    borderRadius: "12px",
    cursor: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" style="font-size: 24px;"><text y="22">🕯️</text></svg>') 16 16, pointer`,
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    overflow: "hidden"
  }, p = b ? 1 : 0.25;
  return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx("style", { children: `
          @keyframes flicker {
            0%, 100% { transform: scale(1) translateY(0); }
            50% { transform: scale(1.05) translateY(-2px); }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes float {
            0% { transform: translateX(-50%) translateY(0px); }
            50% { transform: translateX(-50%) translateY(-10px); }
            100% { transform: translateX(-50%) translateY(0px); }
          }
          @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.05); opacity: 0.8; }
            100% { transform: scale(1); opacity: 1; }
          }
        .header-text {
          font-family: "Cinzel Decorative", "Segoe UI", sans-serif;
          font-size: 5rem;
          font-weight: 900;
          margin: 0;
          background: linear-gradient(to bottom, #ffd700, #ffaa00, #ffd700);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent; /* Fallback */
          filter: drop-shadow(0 0 25px rgba(255, 215, 0, 0.6));
          letter-spacing: 4px;
          animation: celebrate 4s ease-in-out infinite;
          white-space: nowrap;
          transform-style: preserve-3d;
          padding: 10px; /* Prevent clipping */
        }
        @keyframes celebrate {
          0%, 100% { transform: translateY(0px) scale(1); filter: drop-shadow(0 0 25px rgba(255, 215, 0, 0.6)); }
          50% { transform: translateY(-15px) scale(1.05); filter: drop-shadow(0 0 35px rgba(255, 215, 0, 0.8)); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        ` }),
    /* @__PURE__ */ f.jsx(
      "audio",
      {
        ref: F,
        src: "https://media.vocaroo.com/mp3/14RouJ9dzgvV",
        volume: "0.75"
      }
    ),
    /* @__PURE__ */ f.jsx(
      "div",
      {
        ref: se,
        style: {
          width: "120px",
          height: "80px",
          margin: "20px",
          opacity: 0
        }
      }
    ),
    /* @__PURE__ */ f.jsxs(
      "div",
      {
        style: d,
        onClick: b ? void 0 : ce,
        children: [
          /* @__PURE__ */ f.jsx(
            "button",
            {
              onClick: (n) => {
                n.stopPropagation(), ce();
              },
              style: {
                position: "absolute",
                top: "20px",
                right: O ? "auto" : "20px",
                left: O ? "20px" : "auto",
                background: "transparent",
                border: "none",
                color: "#fff",
                fontSize: "24px",
                cursor: "pointer",
                opacity: b ? 1 : 0,
                pointerEvents: b ? "auto" : "none",
                transition: "opacity 0.3s",
                zIndex: 100
              },
              children: "✕"
            }
          ),
          /* @__PURE__ */ f.jsxs("div", { style: {
            position: "absolute",
            top: "20px",
            left: O ? "auto" : "20px",
            right: O ? "20px" : "auto",
            display: "flex",
            alignItems: "center",
            gap: "15px",
            opacity: b ? 1 : 0,
            pointerEvents: b ? "auto" : "none",
            transition: "opacity 0.3s",
            zIndex: 100
          }, children: [
            /* @__PURE__ */ f.jsx(
              "button",
              {
                onClick: (n) => {
                  n.stopPropagation(), t();
                },
                style: {
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  color: "#fff",
                  fontSize: "14px",
                  padding: "5px 10px",
                  borderRadius: "15px",
                  cursor: "pointer",
                  fontWeight: "bold"
                },
                children: ee.langBtn
              }
            ),
            /* @__PURE__ */ f.jsxs("div", { style: {
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }, children: [
              /* @__PURE__ */ f.jsx(
                "button",
                {
                  onClick: (n) => {
                    n.stopPropagation(), r();
                  },
                  style: {
                    background: "transparent",
                    border: "none",
                    color: "#fff",
                    fontSize: "18px",
                    padding: "5px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    minWidth: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  },
                  onMouseOver: (n) => {
                    n.currentTarget.style.opacity = "0.8";
                  },
                  onMouseOut: (n) => {
                    n.currentTarget.style.opacity = "1";
                  },
                  children: oe === 0 ? /* @__PURE__ */ f.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                    /* @__PURE__ */ f.jsx("polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }),
                    /* @__PURE__ */ f.jsx("line", { x1: "23", y1: "9", x2: "17", y2: "15" }),
                    /* @__PURE__ */ f.jsx("line", { x1: "17", y1: "9", x2: "23", y2: "15" })
                  ] }) : /* @__PURE__ */ f.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                    /* @__PURE__ */ f.jsx("polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }),
                    /* @__PURE__ */ f.jsx("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" })
                  ] })
                }
              ),
              /* @__PURE__ */ f.jsx(
                "input",
                {
                  type: "range",
                  min: "0",
                  max: "1",
                  step: "0.01",
                  value: oe,
                  onChange: c,
                  onClick: (n) => n.stopPropagation(),
                  style: {
                    width: "80px",
                    accentColor: "#ffd700",
                    cursor: "pointer"
                  }
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ f.jsxs(
            "div",
            {
              style: {
                transform: `scale(${p})`,
                transformOrigin: "center center",
                transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                marginTop: "50px"
                // Space for the title
              },
              children: [
                /* @__PURE__ */ f.jsx("div", { style: {
                  textAlign: "center",
                  marginBottom: "60px",
                  // Increased spacing further
                  marginTop: "-60px",
                  zIndex: 50,
                  cursor: "default",
                  userSelect: "none",
                  opacity: b ? 1 : 0,
                  transition: "opacity 0.3s"
                }, children: /* @__PURE__ */ f.jsx("h1", { className: "header-text", children: O ? "חג חנוכה שמח!" : "HAPPY HANUKKAH!" }) }),
                /* @__PURE__ */ f.jsx("div", { style: {
                  marginBottom: "20px",
                  opacity: b ? 1 : 0,
                  transition: "opacity 0.3s",
                  height: b ? "auto" : 0,
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  flexWrap: "wrap",
                  // Allow wrapping if needed
                  justifyContent: "center",
                  maxWidth: "90vw"
                }, children: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => /* @__PURE__ */ f.jsxs(
                  "button",
                  {
                    onClick: (o) => {
                      o.stopPropagation(), E && D(n);
                    },
                    title: E ? "" : ee.locked,
                    style: {
                      background: x === n ? "#ffd700" : "rgba(255,255,255,0.1)",
                      color: x === n ? "#0f2557" : "#fff",
                      border: x === n ? "1px solid #ffd700" : "1px solid rgba(255,255,255,0.3)",
                      padding: "5px 15px",
                      borderRadius: "20px",
                      cursor: E ? "pointer" : "not-allowed",
                      fontWeight: "bold",
                      transition: "all 0.2s",
                      fontSize: "14px",
                      whiteSpace: "nowrap",
                      opacity: E || x === n ? 1 : 0.5
                    },
                    children: [
                      ee.nightLabel,
                      " ",
                      n
                    ]
                  },
                  n
                )) }),
                /* @__PURE__ */ f.jsx("div", { style: {
                  height: "30px",
                  marginBottom: "10px",
                  opacity: b ? 1 : 0,
                  transition: "opacity 0.3s"
                }, children: N && b && /* @__PURE__ */ f.jsx(
                  "div",
                  {
                    style: {
                      color: "#fff",
                      // White text
                      background: "rgba(15, 37, 87, 0.8)",
                      // Dark blue background
                      border: "1px solid #ffd700",
                      // Gold border
                      padding: "5px 15px",
                      borderRadius: "20px",
                      display: "inline-block",
                      animation: "fadeIn 0.3s",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.3)"
                    },
                    children: N
                  }
                ) }),
                /* @__PURE__ */ f.jsxs("div", { style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                  marginTop: b ? 0 : "20px",
                  direction: "ltr"
                  // Always LTR for the menorah itself
                }, children: [
                  /* @__PURE__ */ f.jsxs(
                    "div",
                    {
                      style: {
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "center",
                        gap: "15px",
                        zIndex: 2,
                        marginBottom: "-10px"
                      },
                      children: [
                        /* @__PURE__ */ f.jsx(l, { id: 1 }),
                        /* @__PURE__ */ f.jsx(l, { id: 2 }),
                        /* @__PURE__ */ f.jsx(l, { id: 3 }),
                        /* @__PURE__ */ f.jsx(l, { id: 4 }),
                        /* @__PURE__ */ f.jsx(l, { id: "shamash", isShamash: !0 }),
                        /* @__PURE__ */ f.jsx(l, { id: 5 }),
                        /* @__PURE__ */ f.jsx(l, { id: 6 }),
                        /* @__PURE__ */ f.jsx(l, { id: 7 }),
                        /* @__PURE__ */ f.jsx(l, { id: 8 })
                      ]
                    }
                  ),
                  /* @__PURE__ */ f.jsx(
                    "div",
                    {
                      style: {
                        width: "380px",
                        height: "40px",
                        background: "linear-gradient(to bottom, #d4af37 0%, #f4d03f 50%, #d4af37 100%)",
                        borderRadius: "8px",
                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
                        border: "2px solid #b8941e",
                        zIndex: 1,
                        position: "relative"
                      },
                      children: /* @__PURE__ */ f.jsx("div", { style: {
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center"
                      }, children: [...Array(9)].map((n, o) => /* @__PURE__ */ f.jsx("div", { style: {
                        width: "10px",
                        height: "10px",
                        background: "#b8941e",
                        borderRadius: "50%",
                        opacity: 0.5
                      } }, o)) })
                    }
                  )
                ] }),
                /* @__PURE__ */ f.jsx("div", { style: {
                  marginTop: "50px",
                  opacity: b ? 1 : 0,
                  transition: "opacity 0.3s",
                  pointerEvents: b ? "auto" : "none"
                }, children: /* @__PURE__ */ f.jsx(
                  "button",
                  {
                    onClick: (n) => {
                      n.stopPropagation(), ve();
                    },
                    style: {
                      background: "transparent",
                      border: "1px solid #ffd700",
                      padding: "8px 20px",
                      borderRadius: "20px",
                      fontSize: "14px",
                      color: "#ffd700",
                      cursor: "pointer",
                      opacity: 0.7,
                      transition: "all 0.2s"
                    },
                    onMouseOver: (n) => {
                      n.currentTarget.style.opacity = 1, n.currentTarget.style.background = "rgba(255, 215, 0, 0.1)";
                    },
                    onMouseOut: (n) => {
                      n.currentTarget.style.opacity = 0.7, n.currentTarget.style.background = "transparent";
                    },
                    children: ee.reset
                  }
                ) })
              ]
            }
          )
        ]
      }
    )
  ] });
}
export {
  yr as Chanukkiah
};
