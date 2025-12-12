import Ce, { useState as _, useRef as ue, useEffect as se } from "react";
var le = { exports: {} }, ne = {};
var ge;
function je() {
  if (ge) return ne;
  ge = 1;
  var k = Symbol.for("react.transitional.element"), g = Symbol.for("react.fragment");
  function E(T, b, y) {
    var f = null;
    if (y !== void 0 && (f = "" + y), b.key !== void 0 && (f = "" + b.key), "key" in b) {
      y = {};
      for (var A in b)
        A !== "key" && (y[A] = b[A]);
    } else y = b;
    return b = y.ref, {
      $$typeof: k,
      type: T,
      key: f,
      ref: b !== void 0 ? b : null,
      props: y
    };
  }
  return ne.Fragment = g, ne.jsx = E, ne.jsxs = E, ne;
}
var ae = {};
var ve;
function Se() {
  return ve || (ve = 1, process.env.NODE_ENV !== "production" && (function() {
    function k(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === G ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case h:
          return "Fragment";
        case ie:
          return "Profiler";
        case re:
          return "StrictMode";
        case Z:
          return "Suspense";
        case te:
          return "SuspenseList";
        case w:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case oe:
            return "Portal";
          case L:
            return e.displayName || "Context";
          case J:
            return (e._context.displayName || "Context") + ".Consumer";
          case Y:
            var n = e.render;
            return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case $:
            return n = e.displayName || null, n !== null ? n : k(e.type) || "Memo";
          case S:
            n = e._payload, e = e._init;
            try {
              return k(e(n));
            } catch {
            }
        }
      return null;
    }
    function g(e) {
      return "" + e;
    }
    function E(e) {
      try {
        g(e);
        var n = !1;
      } catch {
        n = !0;
      }
      if (n) {
        n = console;
        var o = n.error, s = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o.call(
          n,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          s
        ), g(e);
      }
    }
    function T(e) {
      if (e === h) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === S)
        return "<...>";
      try {
        var n = k(e);
        return n ? "<" + n + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function b() {
      var e = P.A;
      return e === null ? null : e.getOwner();
    }
    function y() {
      return Error("react-stack-top-frame");
    }
    function f(e) {
      if (X.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function A(e, n) {
      function o() {
        V || (V = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          n
        ));
      }
      o.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: o,
        configurable: !0
      });
    }
    function C() {
      var e = k(this.type);
      return Q[e] || (Q[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function D(e, n, o, s, l, t) {
      var a = o.ref;
      return e = {
        $$typeof: ee,
        type: e,
        key: n,
        props: o,
        _owner: s
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: C
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: l
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: t
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function x(e, n, o, s, l, t) {
      var a = n.children;
      if (a !== void 0)
        if (s)
          if (U(a)) {
            for (s = 0; s < a.length; s++)
              z(a[s]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else z(a);
      if (X.call(n, "key")) {
        a = k(e);
        var i = Object.keys(n).filter(function(p) {
          return p !== "key";
        });
        s = 0 < i.length ? "{key: someKey, " + i.join(": ..., ") + ": ...}" : "{key: someKey}", r[a + s] || (i = 0 < i.length ? "{" + i.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          s,
          a,
          i,
          a
        ), r[a + s] = !0);
      }
      if (a = null, o !== void 0 && (E(o), a = "" + o), f(n) && (E(n.key), a = "" + n.key), "key" in n) {
        o = {};
        for (var u in n)
          u !== "key" && (o[u] = n[u]);
      } else o = n;
      return a && A(
        o,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), D(
        e,
        a,
        o,
        b(),
        l,
        t
      );
    }
    function z(e) {
      j(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === S && (e._payload.status === "fulfilled" ? j(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function j(e) {
      return typeof e == "object" && e !== null && e.$$typeof === ee;
    }
    var N = Ce, ee = Symbol.for("react.transitional.element"), oe = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), re = Symbol.for("react.strict_mode"), ie = Symbol.for("react.profiler"), J = Symbol.for("react.consumer"), L = Symbol.for("react.context"), Y = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), w = Symbol.for("react.activity"), G = Symbol.for("react.client.reference"), P = N.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = Object.prototype.hasOwnProperty, U = Array.isArray, B = console.createTask ? console.createTask : function() {
      return null;
    };
    N = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var V, Q = {}, K = N.react_stack_bottom_frame.bind(
      N,
      y
    )(), H = B(T(y)), r = {};
    ae.Fragment = h, ae.jsx = function(e, n, o) {
      var s = 1e4 > P.recentlyCreatedOwnerStacks++;
      return x(
        e,
        n,
        o,
        !1,
        s ? Error("react-stack-top-frame") : K,
        s ? B(T(e)) : H
      );
    }, ae.jsxs = function(e, n, o) {
      var s = 1e4 > P.recentlyCreatedOwnerStacks++;
      return x(
        e,
        n,
        o,
        !0,
        s ? Error("react-stack-top-frame") : K,
        s ? B(T(e)) : H
      );
    };
  })()), ae;
}
var xe;
function Pe() {
  return xe || (xe = 1, process.env.NODE_ENV === "production" ? le.exports = je() : le.exports = Se()), le.exports;
}
var c = Pe(), de = {};
(function k(g, E, T, b) {
  var y = !!(g.Worker && g.Blob && g.Promise && g.OffscreenCanvas && g.OffscreenCanvasRenderingContext2D && g.HTMLCanvasElement && g.HTMLCanvasElement.prototype.transferControlToOffscreen && g.URL && g.URL.createObjectURL), f = typeof Path2D == "function" && typeof DOMMatrix == "function", A = (function() {
    if (!g.OffscreenCanvas)
      return !1;
    try {
      var r = new OffscreenCanvas(1, 1), e = r.getContext("2d");
      e.fillRect(0, 0, 1, 1);
      var n = r.transferToImageBitmap();
      e.createPattern(n, "no-repeat");
    } catch {
      return !1;
    }
    return !0;
  })();
  function C() {
  }
  function D(r) {
    var e = E.exports.Promise, n = e !== void 0 ? e : g.Promise;
    return typeof n == "function" ? new n(r) : (r(C, C), null);
  }
  var x = /* @__PURE__ */ (function(r, e) {
    return {
      transform: function(n) {
        if (r)
          return n;
        if (e.has(n))
          return e.get(n);
        var o = new OffscreenCanvas(n.width, n.height), s = o.getContext("2d");
        return s.drawImage(n, 0, 0), e.set(n, o), o;
      },
      clear: function() {
        e.clear();
      }
    };
  })(A, /* @__PURE__ */ new Map()), z = (function() {
    var r = Math.floor(16.666666666666668), e, n, o = {}, s = 0;
    return typeof requestAnimationFrame == "function" && typeof cancelAnimationFrame == "function" ? (e = function(l) {
      var t = Math.random();
      return o[t] = requestAnimationFrame(function a(i) {
        s === i || s + r - 1 < i ? (s = i, delete o[t], l()) : o[t] = requestAnimationFrame(a);
      }), t;
    }, n = function(l) {
      o[l] && cancelAnimationFrame(o[l]);
    }) : (e = function(l) {
      return setTimeout(l, r);
    }, n = function(l) {
      return clearTimeout(l);
    }), { frame: e, cancel: n };
  })(), j = /* @__PURE__ */ (function() {
    var r, e, n = {};
    function o(s) {
      function l(t, a) {
        s.postMessage({ options: t || {}, callback: a });
      }
      s.init = function(a) {
        var i = a.transferControlToOffscreen();
        s.postMessage({ canvas: i }, [i]);
      }, s.fire = function(a, i, u) {
        if (e)
          return l(a, null), e;
        var p = Math.random().toString(36).slice(2);
        return e = D(function(m) {
          function v(M) {
            M.data.callback === p && (delete n[p], s.removeEventListener("message", v), e = null, x.clear(), u(), m());
          }
          s.addEventListener("message", v), l(a, p), n[p] = v.bind(null, { data: { callback: p } });
        }), e;
      }, s.reset = function() {
        s.postMessage({ reset: !0 });
        for (var a in n)
          n[a](), delete n[a];
      };
    }
    return function() {
      if (r)
        return r;
      if (!T && y) {
        var s = [
          "var CONFETTI, SIZE = {}, module = {};",
          "(" + k.toString() + ")(this, module, true, SIZE);",
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
          r = new Worker(URL.createObjectURL(new Blob([s])));
        } catch (l) {
          return typeof console < "u" && typeof console.warn == "function" && console.warn("🎊 Could not load worker", l), null;
        }
        o(r);
      }
      return r;
    };
  })(), N = {
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
  function ee(r, e) {
    return e ? e(r) : r;
  }
  function oe(r) {
    return r != null;
  }
  function h(r, e, n) {
    return ee(
      r && oe(r[e]) ? r[e] : N[e],
      n
    );
  }
  function re(r) {
    return r < 0 ? 0 : Math.floor(r);
  }
  function ie(r, e) {
    return Math.floor(Math.random() * (e - r)) + r;
  }
  function J(r) {
    return parseInt(r, 16);
  }
  function L(r) {
    return r.map(Y);
  }
  function Y(r) {
    var e = String(r).replace(/[^0-9a-f]/gi, "");
    return e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), {
      r: J(e.substring(0, 2)),
      g: J(e.substring(2, 4)),
      b: J(e.substring(4, 6))
    };
  }
  function Z(r) {
    var e = h(r, "origin", Object);
    return e.x = h(e, "x", Number), e.y = h(e, "y", Number), e;
  }
  function te(r) {
    r.width = document.documentElement.clientWidth, r.height = document.documentElement.clientHeight;
  }
  function $(r) {
    var e = r.getBoundingClientRect();
    r.width = e.width, r.height = e.height;
  }
  function S(r) {
    var e = document.createElement("canvas");
    return e.style.position = "fixed", e.style.top = "0px", e.style.left = "0px", e.style.pointerEvents = "none", e.style.zIndex = r, e;
  }
  function w(r, e, n, o, s, l, t, a, i) {
    r.save(), r.translate(e, n), r.rotate(l), r.scale(o, s), r.arc(0, 0, 1, t, a, i), r.restore();
  }
  function G(r) {
    var e = r.angle * (Math.PI / 180), n = r.spread * (Math.PI / 180);
    return {
      x: r.x,
      y: r.y,
      wobble: Math.random() * 10,
      wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
      velocity: r.startVelocity * 0.5 + Math.random() * r.startVelocity,
      angle2D: -e + (0.5 * n - Math.random() * n),
      tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
      color: r.color,
      shape: r.shape,
      tick: 0,
      totalTicks: r.ticks,
      decay: r.decay,
      drift: r.drift,
      random: Math.random() + 2,
      tiltSin: 0,
      tiltCos: 0,
      wobbleX: 0,
      wobbleY: 0,
      gravity: r.gravity * 3,
      ovalScalar: 0.6,
      scalar: r.scalar,
      flat: r.flat
    };
  }
  function P(r, e) {
    e.x += Math.cos(e.angle2D) * e.velocity + e.drift, e.y += Math.sin(e.angle2D) * e.velocity + e.gravity, e.velocity *= e.decay, e.flat ? (e.wobble = 0, e.wobbleX = e.x + 10 * e.scalar, e.wobbleY = e.y + 10 * e.scalar, e.tiltSin = 0, e.tiltCos = 0, e.random = 1) : (e.wobble += e.wobbleSpeed, e.wobbleX = e.x + 10 * e.scalar * Math.cos(e.wobble), e.wobbleY = e.y + 10 * e.scalar * Math.sin(e.wobble), e.tiltAngle += 0.1, e.tiltSin = Math.sin(e.tiltAngle), e.tiltCos = Math.cos(e.tiltAngle), e.random = Math.random() + 2);
    var n = e.tick++ / e.totalTicks, o = e.x + e.random * e.tiltCos, s = e.y + e.random * e.tiltSin, l = e.wobbleX + e.random * e.tiltCos, t = e.wobbleY + e.random * e.tiltSin;
    if (r.fillStyle = "rgba(" + e.color.r + ", " + e.color.g + ", " + e.color.b + ", " + (1 - n) + ")", r.beginPath(), f && e.shape.type === "path" && typeof e.shape.path == "string" && Array.isArray(e.shape.matrix))
      r.fill(Q(
        e.shape.path,
        e.shape.matrix,
        e.x,
        e.y,
        Math.abs(l - o) * 0.1,
        Math.abs(t - s) * 0.1,
        Math.PI / 10 * e.wobble
      ));
    else if (e.shape.type === "bitmap") {
      var a = Math.PI / 10 * e.wobble, i = Math.abs(l - o) * 0.1, u = Math.abs(t - s) * 0.1, p = e.shape.bitmap.width * e.scalar, m = e.shape.bitmap.height * e.scalar, v = new DOMMatrix([
        Math.cos(a) * i,
        Math.sin(a) * i,
        -Math.sin(a) * u,
        Math.cos(a) * u,
        e.x,
        e.y
      ]);
      v.multiplySelf(new DOMMatrix(e.shape.matrix));
      var M = r.createPattern(x.transform(e.shape.bitmap), "no-repeat");
      M.setTransform(v), r.globalAlpha = 1 - n, r.fillStyle = M, r.fillRect(
        e.x - p / 2,
        e.y - m / 2,
        p,
        m
      ), r.globalAlpha = 1;
    } else if (e.shape === "circle")
      r.ellipse ? r.ellipse(e.x, e.y, Math.abs(l - o) * e.ovalScalar, Math.abs(t - s) * e.ovalScalar, Math.PI / 10 * e.wobble, 0, 2 * Math.PI) : w(r, e.x, e.y, Math.abs(l - o) * e.ovalScalar, Math.abs(t - s) * e.ovalScalar, Math.PI / 10 * e.wobble, 0, 2 * Math.PI);
    else if (e.shape === "star")
      for (var d = Math.PI / 2 * 3, R = 4 * e.scalar, O = 8 * e.scalar, I = e.x, W = e.y, q = 5, F = Math.PI / q; q--; )
        I = e.x + Math.cos(d) * O, W = e.y + Math.sin(d) * O, r.lineTo(I, W), d += F, I = e.x + Math.cos(d) * R, W = e.y + Math.sin(d) * R, r.lineTo(I, W), d += F;
    else
      r.moveTo(Math.floor(e.x), Math.floor(e.y)), r.lineTo(Math.floor(e.wobbleX), Math.floor(s)), r.lineTo(Math.floor(l), Math.floor(t)), r.lineTo(Math.floor(o), Math.floor(e.wobbleY));
    return r.closePath(), r.fill(), e.tick < e.totalTicks;
  }
  function X(r, e, n, o, s) {
    var l = e.slice(), t = r.getContext("2d"), a, i, u = D(function(p) {
      function m() {
        a = i = null, t.clearRect(0, 0, o.width, o.height), x.clear(), s(), p();
      }
      function v() {
        T && !(o.width === b.width && o.height === b.height) && (o.width = r.width = b.width, o.height = r.height = b.height), !o.width && !o.height && (n(r), o.width = r.width, o.height = r.height), t.clearRect(0, 0, o.width, o.height), l = l.filter(function(M) {
          return P(t, M);
        }), l.length ? a = z.frame(v) : m();
      }
      a = z.frame(v), i = m;
    });
    return {
      addFettis: function(p) {
        return l = l.concat(p), u;
      },
      canvas: r,
      promise: u,
      reset: function() {
        a && z.cancel(a), i && i();
      }
    };
  }
  function U(r, e) {
    var n = !r, o = !!h(e || {}, "resize"), s = !1, l = h(e, "disableForReducedMotion", Boolean), t = y && !!h(e || {}, "useWorker"), a = t ? j() : null, i = n ? te : $, u = r && a ? !!r.__confetti_initialized : !1, p = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion)").matches, m;
    function v(d, R, O) {
      for (var I = h(d, "particleCount", re), W = h(d, "angle", Number), q = h(d, "spread", Number), F = h(d, "startVelocity", Number), be = h(d, "decay", Number), ye = h(d, "gravity", Number), we = h(d, "drift", Number), fe = h(d, "colors", L), Me = h(d, "ticks", Number), he = h(d, "shapes"), Ee = h(d, "scalar"), ke = !!h(d, "flat"), pe = Z(d), me = I, ce = [], Te = r.width * pe.x, Re = r.height * pe.y; me--; )
        ce.push(
          G({
            x: Te,
            y: Re,
            angle: W,
            spread: q,
            startVelocity: F,
            color: fe[me % fe.length],
            shape: he[ie(0, he.length)],
            ticks: Me,
            decay: be,
            gravity: ye,
            drift: we,
            scalar: Ee,
            flat: ke
          })
        );
      return m ? m.addFettis(ce) : (m = X(r, ce, i, R, O), m.promise);
    }
    function M(d) {
      var R = l || h(d, "disableForReducedMotion", Boolean), O = h(d, "zIndex", Number);
      if (R && p)
        return D(function(F) {
          F();
        });
      n && m ? r = m.canvas : n && !r && (r = S(O), document.body.appendChild(r)), o && !u && i(r);
      var I = {
        width: r.width,
        height: r.height
      };
      a && !u && a.init(r), u = !0, a && (r.__confetti_initialized = !0);
      function W() {
        if (a) {
          var F = {
            getBoundingClientRect: function() {
              if (!n)
                return r.getBoundingClientRect();
            }
          };
          i(F), a.postMessage({
            resize: {
              width: F.width,
              height: F.height
            }
          });
          return;
        }
        I.width = I.height = null;
      }
      function q() {
        m = null, o && (s = !1, g.removeEventListener("resize", W)), n && r && (document.body.contains(r) && document.body.removeChild(r), r = null, u = !1);
      }
      return o && !s && (s = !0, g.addEventListener("resize", W, !1)), a ? a.fire(d, I, q) : v(d, I, q);
    }
    return M.reset = function() {
      a && a.reset(), m && m.reset();
    }, M;
  }
  var B;
  function V() {
    return B || (B = U(null, { useWorker: !0, resize: !0 })), B;
  }
  function Q(r, e, n, o, s, l, t) {
    var a = new Path2D(r), i = new Path2D();
    i.addPath(a, new DOMMatrix(e));
    var u = new Path2D();
    return u.addPath(i, new DOMMatrix([
      Math.cos(t) * s,
      Math.sin(t) * s,
      -Math.sin(t) * l,
      Math.cos(t) * l,
      n,
      o
    ])), u;
  }
  function K(r) {
    if (!f)
      throw new Error("path confetti are not supported in this browser");
    var e, n;
    typeof r == "string" ? e = r : (e = r.path, n = r.matrix);
    var o = new Path2D(e), s = document.createElement("canvas"), l = s.getContext("2d");
    if (!n) {
      for (var t = 1e3, a = t, i = t, u = 0, p = 0, m, v, M = 0; M < t; M += 2)
        for (var d = 0; d < t; d += 2)
          l.isPointInPath(o, M, d, "nonzero") && (a = Math.min(a, M), i = Math.min(i, d), u = Math.max(u, M), p = Math.max(p, d));
      m = u - a, v = p - i;
      var R = 10, O = Math.min(R / m, R / v);
      n = [
        O,
        0,
        0,
        O,
        -Math.round(m / 2 + a) * O,
        -Math.round(v / 2 + i) * O
      ];
    }
    return {
      type: "path",
      path: e,
      matrix: n
    };
  }
  function H(r) {
    var e, n = 1, o = "#000000", s = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
    typeof r == "string" ? e = r : (e = r.text, n = "scalar" in r ? r.scalar : n, s = "fontFamily" in r ? r.fontFamily : s, o = "color" in r ? r.color : o);
    var l = 10 * n, t = "" + l + "px " + s, a = new OffscreenCanvas(l, l), i = a.getContext("2d");
    i.font = t;
    var u = i.measureText(e), p = Math.ceil(u.actualBoundingBoxRight + u.actualBoundingBoxLeft), m = Math.ceil(u.actualBoundingBoxAscent + u.actualBoundingBoxDescent), v = 2, M = u.actualBoundingBoxLeft + v, d = u.actualBoundingBoxAscent + v;
    p += v + v, m += v + v, a = new OffscreenCanvas(p, m), i = a.getContext("2d"), i.font = t, i.fillStyle = o, i.fillText(e, M, d);
    var R = 1 / n;
    return {
      type: "bitmap",
      // TODO these probably need to be transfered for workers
      bitmap: a.transferToImageBitmap(),
      matrix: [R, 0, 0, R, -p * R / 2, -m * R / 2]
    };
  }
  E.exports = function() {
    return V().apply(this, arguments);
  }, E.exports.reset = function() {
    V().reset();
  }, E.exports.create = U, E.exports.shapeFromPath = K, E.exports.shapeFromText = H;
})(/* @__PURE__ */ (function() {
  return typeof window < "u" ? window : typeof self < "u" ? self : this || {};
})(), de, !1);
const _e = de.exports;
de.exports.create;
function Ie() {
  const [k, g] = _(/* @__PURE__ */ new Set()), [E, T] = _(""), [b, y] = _(0), [f, A] = _(!1), [C, D] = _(null), [x, z] = _(1), [j, N] = _(!1), [ee, oe] = _(!1), [h, re] = _(!1), [ie, J] = _(!1), [L, Y] = _(0.1), [Z, te] = _(0.1), $ = ue(null), S = ue({}), w = ue(null), G = {
    en: {
      title: "✡ Chanukkiah ✡",
      nightLabel: "Night",
      reset: "Reset",
      errorOrder: (t) => `Please light candles 1-${t} in order, then the Shamash.`,
      errorNight: (t) => `Tonight is Night ${t}. You only need to light candles 1-${t}.`,
      langBtn: "עברית",
      locked: "Light tonight's candles first!"
    },
    he: {
      title: "✡ חנוכייה ✡",
      nightLabel: "לילה",
      reset: "איפוס",
      errorOrder: (t) => `נא להדליק את הנרות 1-${t} לפי הסדר, ואז את השמש.`,
      errorNight: (t) => `הלילה הוא לילה ${t}. צריך להדליק רק את הנרות 1-${t}.`,
      langBtn: "English",
      locked: "יש להדליק את נרות הלילה קודם!"
    }
  }, P = j ? G.he : G.en;
  se(() => {
    const t = document.documentElement.lang || "en";
    N(t.startsWith("he"));
  }, []), se(() => {
    const t = /* @__PURE__ */ new Date(), a = new Date(t.getFullYear(), 11, 14);
    t.setHours(0, 0, 0, 0), a.setHours(0, 0, 0, 0);
    const i = t - a;
    let p = Math.ceil(i / (1e3 * 60 * 60 * 24)) + 1;
    p < 1 && (p = 1), p > 8 && (p = 8), z(p);
  }, []), se(() => {
    const t = () => {
      if ($.current) {
        const a = $.current.getBoundingClientRect();
        D({
          top: a.top,
          left: a.left,
          width: a.width,
          height: a.height
        });
      }
    };
    return t(), window.addEventListener("resize", t), window.addEventListener("scroll", t), () => {
      window.removeEventListener("resize", t), window.removeEventListener("scroll", t);
    };
  }, []), se(() => {
    g(/* @__PURE__ */ new Set()), T(""), y(0);
  }, [x]);
  const X = (t) => {
    for (let i = 1; i <= x; i++)
      if (!t.has(i)) return i;
    const a = x;
    return t.size === a && !t.has("shamash") ? "shamash" : null;
  }, U = (t) => {
    if (!f || k.has(t)) return;
    if (typeof t == "number" && t > x) {
      T(P.errorNight(x));
      return;
    }
    const a = X(k);
    if (t === a) {
      const i = /* @__PURE__ */ new Set([...k, t]);
      g(i), y(0), T(""), (i.size === x || i.size === x + 1) && (h || re(!0), _e({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#ffd700", "#4a90e2", "#ffffff"],
        zIndex: 1e4
        // Ensure it's above the modal
      }));
    } else {
      const i = b + 1;
      y(i), i > 2 && T(P.errorOrder(x));
    }
  }, B = (t) => {
    f && (S.current[t] && clearTimeout(S.current[t]), S.current[t] = setTimeout(() => {
      U(t);
    }, 500));
  }, V = (t) => {
    S.current[t] && (clearTimeout(S.current[t]), delete S.current[t]);
  }, Q = (t) => {
    U(t);
  }, K = () => {
    g(/* @__PURE__ */ new Set()), T(""), y(0), setShowGreeting(!1);
  }, H = () => {
    if (f)
      A(!1), w.current && w.current.pause();
    else {
      const t = document.documentElement.lang || "en";
      N(t.startsWith("he")), A(!0), w.current && (w.current.volume = L, w.current.currentTime = 0, w.current.play().catch((a) => console.error("Audio play failed:", a)));
    }
  }, r = () => {
    N(!j);
  }, e = () => {
    L > 0 ? (te(L), Y(0), w.current && (w.current.volume = 0)) : (Y(Z), w.current && (w.current.volume = Z));
  }, n = (t) => {
    const a = parseFloat(t.target.value);
    Y(a), w.current && (w.current.volume = a);
  }, o = ({ id: t, isShamash: a }) => {
    const i = !f || k.has(t);
    return /* @__PURE__ */ c.jsxs(
      "div",
      {
        onMouseEnter: () => B(t),
        onMouseLeave: () => V(t),
        onClick: (u) => {
          u.stopPropagation(), Q(t);
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
          pointerEvents: f ? "auto" : "none"
        },
        onMouseOver: (u) => {
          f && (u.currentTarget.style.transform = "translateY(-5px)");
        },
        onMouseOut: (u) => {
          f && (u.currentTarget.style.transform = "translateY(0)");
        },
        children: [
          /* @__PURE__ */ c.jsx(
            "div",
            {
              style: {
                width: "20px",
                height: "30px",
                background: i ? "linear-gradient(to top, #ff6b00 0%, #ffaa00 50%, #ffeb3b 100%)" : "transparent",
                borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                opacity: i ? 1 : 0,
                transition: "opacity 0.3s",
                boxShadow: i ? "0 0 20px #ffaa00, 0 0 40px #ff6b00" : "none",
                animation: i ? "flicker 1.5s ease-in-out infinite alternate" : "none",
                marginBottom: "2px"
              }
            }
          ),
          /* @__PURE__ */ c.jsx(
            "div",
            {
              style: {
                width: "25px",
                height: a ? "130px" : "100px",
                background: "linear-gradient(to right, #4a90e2 0%, #5ba3f5 50%, #4a90e2 100%)",
                borderRadius: "3px",
                boxShadow: "inset -2px 0 5px rgba(0, 0, 0, 0.3)"
              }
            }
          )
        ]
      }
    );
  }, s = f ? {
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
    direction: j ? "rtl" : "ltr",
    // RTL support
    cursor: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" style="font-size: 24px;"><text y="22">🕯️</text></svg>') 16 16, auto`
  } : {
    position: "fixed",
    top: C ? `${C.top}px` : "0",
    left: C ? `${C.left}px` : "0",
    width: C ? `${C.width}px` : "120px",
    height: C ? `${C.height}px` : "80px",
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
  }, l = f ? 1 : 0.25;
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsx("style", { children: `
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
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        ` }),
    /* @__PURE__ */ c.jsx(
      "audio",
      {
        ref: w,
        src: "https://media.vocaroo.com/mp3/14RouJ9dzgvV",
        volume: "0.75"
      }
    ),
    /* @__PURE__ */ c.jsx(
      "div",
      {
        ref: $,
        style: {
          width: "120px",
          height: "80px",
          margin: "20px",
          opacity: 0
        }
      }
    ),
    /* @__PURE__ */ c.jsxs(
      "div",
      {
        style: s,
        onClick: f ? void 0 : H,
        children: [
          /* @__PURE__ */ c.jsx(
            "button",
            {
              onClick: (t) => {
                t.stopPropagation(), H();
              },
              style: {
                position: "absolute",
                top: "20px",
                right: j ? "auto" : "20px",
                left: j ? "20px" : "auto",
                background: "transparent",
                border: "none",
                color: "#fff",
                fontSize: "24px",
                cursor: "pointer",
                opacity: f ? 1 : 0,
                pointerEvents: f ? "auto" : "none",
                transition: "opacity 0.3s",
                zIndex: 100
              },
              children: "✕"
            }
          ),
          /* @__PURE__ */ c.jsxs("div", { style: {
            position: "absolute",
            top: "20px",
            left: j ? "auto" : "20px",
            right: j ? "20px" : "auto",
            display: "flex",
            alignItems: "center",
            gap: "15px",
            opacity: f ? 1 : 0,
            pointerEvents: f ? "auto" : "none",
            transition: "opacity 0.3s",
            zIndex: 100
          }, children: [
            /* @__PURE__ */ c.jsx(
              "button",
              {
                onClick: (t) => {
                  t.stopPropagation(), r();
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
                children: P.langBtn
              }
            ),
            /* @__PURE__ */ c.jsxs("div", { style: {
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }, children: [
              /* @__PURE__ */ c.jsx(
                "button",
                {
                  onClick: (t) => {
                    t.stopPropagation(), e();
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
                  onMouseOver: (t) => {
                    t.currentTarget.style.opacity = "0.8";
                  },
                  onMouseOut: (t) => {
                    t.currentTarget.style.opacity = "1";
                  },
                  children: L === 0 ? /* @__PURE__ */ c.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                    /* @__PURE__ */ c.jsx("polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }),
                    /* @__PURE__ */ c.jsx("line", { x1: "23", y1: "9", x2: "17", y2: "15" }),
                    /* @__PURE__ */ c.jsx("line", { x1: "17", y1: "9", x2: "23", y2: "15" })
                  ] }) : /* @__PURE__ */ c.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                    /* @__PURE__ */ c.jsx("polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }),
                    /* @__PURE__ */ c.jsx("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" })
                  ] })
                }
              ),
              /* @__PURE__ */ c.jsx(
                "input",
                {
                  type: "range",
                  min: "0",
                  max: "1",
                  step: "0.01",
                  value: L,
                  onChange: n,
                  onClick: (t) => t.stopPropagation(),
                  style: {
                    width: "80px",
                    accentColor: "#ffd700",
                    cursor: "pointer"
                  }
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ c.jsxs(
            "div",
            {
              style: {
                transform: `scale(${l})`,
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
                /* @__PURE__ */ c.jsx("div", { style: {
                  textAlign: "center",
                  marginBottom: "40px",
                  // Increased spacing
                  marginTop: "-60px",
                  // Pull it up further
                  zIndex: 50,
                  cursor: "default",
                  userSelect: "none",
                  opacity: f ? 1 : 0,
                  // Ensure hidden when minimized
                  transition: "opacity 0.3s"
                }, children: /* @__PURE__ */ c.jsx("h1", { style: {
                  fontFamily: '"Cinzel Decorative", "Segoe UI", sans-serif',
                  fontSize: "3.5rem",
                  fontWeight: "900",
                  margin: 0,
                  background: "linear-gradient(to bottom, #ffd700, #ffaa00)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 15px rgba(255, 215, 0, 0.4))",
                  letterSpacing: "2px",
                  animation: "float 6s ease-in-out infinite",
                  whiteSpace: "nowrap"
                }, children: j ? "חג חנוכה שמח!" : "HAPPY HANUKKAH!" }) }),
                /* @__PURE__ */ c.jsx("div", { style: {
                  marginBottom: "20px",
                  opacity: f ? 1 : 0,
                  transition: "opacity 0.3s",
                  height: f ? "auto" : 0,
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  flexWrap: "wrap",
                  // Allow wrapping if needed
                  justifyContent: "center",
                  maxWidth: "90vw"
                }, children: [1, 2, 3, 4, 5, 6, 7, 8].map((t) => /* @__PURE__ */ c.jsxs(
                  "button",
                  {
                    onClick: (a) => {
                      a.stopPropagation(), h && z(t);
                    },
                    title: h ? "" : P.locked,
                    style: {
                      background: x === t ? "#ffd700" : "rgba(255,255,255,0.1)",
                      color: x === t ? "#0f2557" : "#fff",
                      border: x === t ? "1px solid #ffd700" : "1px solid rgba(255,255,255,0.3)",
                      padding: "5px 15px",
                      borderRadius: "20px",
                      cursor: h ? "pointer" : "not-allowed",
                      fontWeight: "bold",
                      transition: "all 0.2s",
                      fontSize: "14px",
                      whiteSpace: "nowrap",
                      opacity: h || x === t ? 1 : 0.5
                    },
                    children: [
                      P.nightLabel,
                      " ",
                      t
                    ]
                  },
                  t
                )) }),
                /* @__PURE__ */ c.jsx("div", { style: {
                  height: "30px",
                  marginBottom: "10px",
                  opacity: f ? 1 : 0,
                  transition: "opacity 0.3s"
                }, children: E && f && /* @__PURE__ */ c.jsx(
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
                    children: E
                  }
                ) }),
                /* @__PURE__ */ c.jsxs("div", { style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                  marginTop: f ? 0 : "20px",
                  direction: "ltr"
                  // Always LTR for the menorah itself
                }, children: [
                  /* @__PURE__ */ c.jsxs(
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
                        /* @__PURE__ */ c.jsx(o, { id: 1 }),
                        /* @__PURE__ */ c.jsx(o, { id: 2 }),
                        /* @__PURE__ */ c.jsx(o, { id: 3 }),
                        /* @__PURE__ */ c.jsx(o, { id: 4 }),
                        /* @__PURE__ */ c.jsx(o, { id: "shamash", isShamash: !0 }),
                        /* @__PURE__ */ c.jsx(o, { id: 5 }),
                        /* @__PURE__ */ c.jsx(o, { id: 6 }),
                        /* @__PURE__ */ c.jsx(o, { id: 7 }),
                        /* @__PURE__ */ c.jsx(o, { id: 8 })
                      ]
                    }
                  ),
                  /* @__PURE__ */ c.jsx(
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
                      children: /* @__PURE__ */ c.jsx("div", { style: {
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center"
                      }, children: [...Array(9)].map((t, a) => /* @__PURE__ */ c.jsx("div", { style: {
                        width: "10px",
                        height: "10px",
                        background: "#b8941e",
                        borderRadius: "50%",
                        opacity: 0.5
                      } }, a)) })
                    }
                  )
                ] }),
                /* @__PURE__ */ c.jsx("div", { style: {
                  marginTop: "50px",
                  opacity: f ? 1 : 0,
                  transition: "opacity 0.3s",
                  pointerEvents: f ? "auto" : "none"
                }, children: /* @__PURE__ */ c.jsx(
                  "button",
                  {
                    onClick: (t) => {
                      t.stopPropagation(), K();
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
                    onMouseOver: (t) => {
                      t.currentTarget.style.opacity = 1, t.currentTarget.style.background = "rgba(255, 215, 0, 0.1)";
                    },
                    onMouseOut: (t) => {
                      t.currentTarget.style.opacity = 0.7, t.currentTarget.style.background = "transparent";
                    },
                    children: P.reset
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
  Ie as Chanukkiah
};
