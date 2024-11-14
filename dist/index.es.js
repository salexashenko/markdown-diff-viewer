var rr = Object.defineProperty;
var tr = (u, e, r) => e in u ? rr(u, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : u[e] = r;
var Ie = (u, e, r) => tr(u, typeof e != "symbol" ? e + "" : e, r);
import r0, { useMemo as nr } from "react";
var ee = { exports: {} }, pu = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Me;
function cr() {
  if (Me) return pu;
  Me = 1;
  var u = r0, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), t = Object.prototype.hasOwnProperty, n = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(i, a, f) {
    var l, d = {}, x = null, p = null;
    f !== void 0 && (x = "" + f), a.key !== void 0 && (x = "" + a.key), a.ref !== void 0 && (p = a.ref);
    for (l in a) t.call(a, l) && !c.hasOwnProperty(l) && (d[l] = a[l]);
    if (i && i.defaultProps) for (l in a = i.defaultProps, a) d[l] === void 0 && (d[l] = a[l]);
    return { $$typeof: e, type: i, key: x, ref: p, props: d, _owner: n.current };
  }
  return pu.Fragment = r, pu.jsx = o, pu.jsxs = o, pu;
}
var xu = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function ir() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var u = r0, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), h = Symbol.iterator, C = "@@iterator";
    function y(s) {
      if (s === null || typeof s != "object")
        return null;
      var b = h && s[h] || s[C];
      return typeof b == "function" ? b : null;
    }
    var F = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(s) {
      {
        for (var b = arguments.length, _ = new Array(b > 1 ? b - 1 : 0), E = 1; E < b; E++)
          _[E - 1] = arguments[E];
        g("error", s, _);
      }
    }
    function g(s, b, _) {
      {
        var E = F.ReactDebugCurrentFrame, S = E.getStackAddendum();
        S !== "" && (b += "%s", _ = _.concat([S]));
        var T = _.map(function(w) {
          return String(w);
        });
        T.unshift("Warning: " + b), Function.prototype.apply.call(console[s], console, T);
      }
    }
    var k = !1, D = !1, v = !1, I = !1, N = !1, W;
    W = Symbol.for("react.module.reference");
    function tu(s) {
      return !!(typeof s == "string" || typeof s == "function" || s === t || s === c || N || s === n || s === f || s === l || I || s === p || k || D || v || typeof s == "object" && s !== null && (s.$$typeof === x || s.$$typeof === d || s.$$typeof === o || s.$$typeof === i || s.$$typeof === a || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      s.$$typeof === W || s.getModuleId !== void 0));
    }
    function du(s, b, _) {
      var E = s.displayName;
      if (E)
        return E;
      var S = b.displayName || b.name || "";
      return S !== "" ? _ + "(" + S + ")" : _;
    }
    function yu(s) {
      return s.displayName || "Context";
    }
    function $(s) {
      if (s == null)
        return null;
      if (typeof s.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
        return s.displayName || s.name || null;
      if (typeof s == "string")
        return s;
      switch (s) {
        case t:
          return "Fragment";
        case r:
          return "Portal";
        case c:
          return "Profiler";
        case n:
          return "StrictMode";
        case f:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case i:
            var b = s;
            return yu(b) + ".Consumer";
          case o:
            var _ = s;
            return yu(_._context) + ".Provider";
          case a:
            return du(s, s.render, "ForwardRef");
          case d:
            var E = s.displayName || null;
            return E !== null ? E : $(s.type) || "Memo";
          case x: {
            var S = s, T = S._payload, w = S._init;
            try {
              return $(w(T));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var G = Object.assign, U = 0, Au, he, be, pe, xe, _e, me;
    function ke() {
    }
    ke.__reactDisabledLog = !0;
    function S0() {
      {
        if (U === 0) {
          Au = console.log, he = console.info, be = console.warn, pe = console.error, xe = console.group, _e = console.groupCollapsed, me = console.groupEnd;
          var s = {
            configurable: !0,
            enumerable: !0,
            value: ke,
            writable: !0
          };
          Object.defineProperties(console, {
            info: s,
            log: s,
            warn: s,
            error: s,
            group: s,
            groupCollapsed: s,
            groupEnd: s
          });
        }
        U++;
      }
    }
    function T0() {
      {
        if (U--, U === 0) {
          var s = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: G({}, s, {
              value: Au
            }),
            info: G({}, s, {
              value: he
            }),
            warn: G({}, s, {
              value: be
            }),
            error: G({}, s, {
              value: pe
            }),
            group: G({}, s, {
              value: xe
            }),
            groupCollapsed: G({}, s, {
              value: _e
            }),
            groupEnd: G({}, s, {
              value: me
            })
          });
        }
        U < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Lu = F.ReactCurrentDispatcher, Nu;
    function Fu(s, b, _) {
      {
        if (Nu === void 0)
          try {
            throw Error();
          } catch (S) {
            var E = S.stack.trim().match(/\n( *(at )?)/);
            Nu = E && E[1] || "";
          }
        return `
` + Nu + s;
      }
    }
    var ju = !1, vu;
    {
      var R0 = typeof WeakMap == "function" ? WeakMap : Map;
      vu = new R0();
    }
    function ge(s, b) {
      if (!s || ju)
        return "";
      {
        var _ = vu.get(s);
        if (_ !== void 0)
          return _;
      }
      var E;
      ju = !0;
      var S = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var T;
      T = Lu.current, Lu.current = null, S0();
      try {
        if (b) {
          var w = function() {
            throw Error();
          };
          if (Object.defineProperty(w.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(w, []);
            } catch (q) {
              E = q;
            }
            Reflect.construct(s, [], w);
          } else {
            try {
              w.call();
            } catch (q) {
              E = q;
            }
            s.call(w.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (q) {
            E = q;
          }
          s();
        }
      } catch (q) {
        if (q && E && typeof q.stack == "string") {
          for (var A = q.stack.split(`
`), z = E.stack.split(`
`), B = A.length - 1, P = z.length - 1; B >= 1 && P >= 0 && A[B] !== z[P]; )
            P--;
          for (; B >= 1 && P >= 0; B--, P--)
            if (A[B] !== z[P]) {
              if (B !== 1 || P !== 1)
                do
                  if (B--, P--, P < 0 || A[B] !== z[P]) {
                    var H = `
` + A[B].replace(" at new ", " at ");
                    return s.displayName && H.includes("<anonymous>") && (H = H.replace("<anonymous>", s.displayName)), typeof s == "function" && vu.set(s, H), H;
                  }
                while (B >= 1 && P >= 0);
              break;
            }
        }
      } finally {
        ju = !1, Lu.current = T, T0(), Error.prepareStackTrace = S;
      }
      var iu = s ? s.displayName || s.name : "", nu = iu ? Fu(iu) : "";
      return typeof s == "function" && vu.set(s, nu), nu;
    }
    function B0(s, b, _) {
      return ge(s, !1);
    }
    function P0(s) {
      var b = s.prototype;
      return !!(b && b.isReactComponent);
    }
    function wu(s, b, _) {
      if (s == null)
        return "";
      if (typeof s == "function")
        return ge(s, P0(s));
      if (typeof s == "string")
        return Fu(s);
      switch (s) {
        case f:
          return Fu("Suspense");
        case l:
          return Fu("SuspenseList");
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case a:
            return B0(s.render);
          case d:
            return wu(s.type, b, _);
          case x: {
            var E = s, S = E._payload, T = E._init;
            try {
              return wu(T(S), b, _);
            } catch {
            }
          }
        }
      return "";
    }
    var hu = Object.prototype.hasOwnProperty, Ee = {}, De = F.ReactDebugCurrentFrame;
    function Su(s) {
      if (s) {
        var b = s._owner, _ = wu(s.type, s._source, b ? b.type : null);
        De.setExtraStackFrame(_);
      } else
        De.setExtraStackFrame(null);
    }
    function I0(s, b, _, E, S) {
      {
        var T = Function.call.bind(hu);
        for (var w in s)
          if (T(s, w)) {
            var A = void 0;
            try {
              if (typeof s[w] != "function") {
                var z = Error((E || "React class") + ": " + _ + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw z.name = "Invariant Violation", z;
              }
              A = s[w](b, w, E, _, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (B) {
              A = B;
            }
            A && !(A instanceof Error) && (Su(S), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", E || "React class", _, w, typeof A), Su(null)), A instanceof Error && !(A.message in Ee) && (Ee[A.message] = !0, Su(S), m("Failed %s type: %s", _, A.message), Su(null));
          }
      }
    }
    var M0 = Array.isArray;
    function $u(s) {
      return M0(s);
    }
    function O0(s) {
      {
        var b = typeof Symbol == "function" && Symbol.toStringTag, _ = b && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return _;
      }
    }
    function z0(s) {
      try {
        return Ce(s), !1;
      } catch {
        return !0;
      }
    }
    function Ce(s) {
      return "" + s;
    }
    function ye(s) {
      if (z0(s))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", O0(s)), Ce(s);
    }
    var bu = F.ReactCurrentOwner, q0 = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ae, Fe, Uu;
    Uu = {};
    function L0(s) {
      if (hu.call(s, "ref")) {
        var b = Object.getOwnPropertyDescriptor(s, "ref").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return s.ref !== void 0;
    }
    function N0(s) {
      if (hu.call(s, "key")) {
        var b = Object.getOwnPropertyDescriptor(s, "key").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return s.key !== void 0;
    }
    function j0(s, b) {
      if (typeof s.ref == "string" && bu.current && b && bu.current.stateNode !== b) {
        var _ = $(bu.current.type);
        Uu[_] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', $(bu.current.type), s.ref), Uu[_] = !0);
      }
    }
    function $0(s, b) {
      {
        var _ = function() {
          Ae || (Ae = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        _.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: _,
          configurable: !0
        });
      }
    }
    function U0(s, b) {
      {
        var _ = function() {
          Fe || (Fe = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        _.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: _,
          configurable: !0
        });
      }
    }
    var H0 = function(s, b, _, E, S, T, w) {
      var A = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: s,
        key: b,
        ref: _,
        props: w,
        // Record the component responsible for creating this element.
        _owner: T
      };
      return A._store = {}, Object.defineProperty(A._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(A, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: E
      }), Object.defineProperty(A, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: S
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    };
    function Z0(s, b, _, E, S) {
      {
        var T, w = {}, A = null, z = null;
        _ !== void 0 && (ye(_), A = "" + _), N0(b) && (ye(b.key), A = "" + b.key), L0(b) && (z = b.ref, j0(b, S));
        for (T in b)
          hu.call(b, T) && !q0.hasOwnProperty(T) && (w[T] = b[T]);
        if (s && s.defaultProps) {
          var B = s.defaultProps;
          for (T in B)
            w[T] === void 0 && (w[T] = B[T]);
        }
        if (A || z) {
          var P = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          A && $0(w, P), z && U0(w, P);
        }
        return H0(s, A, z, S, E, bu.current, w);
      }
    }
    var Hu = F.ReactCurrentOwner, ve = F.ReactDebugCurrentFrame;
    function cu(s) {
      if (s) {
        var b = s._owner, _ = wu(s.type, s._source, b ? b.type : null);
        ve.setExtraStackFrame(_);
      } else
        ve.setExtraStackFrame(null);
    }
    var Zu;
    Zu = !1;
    function Wu(s) {
      return typeof s == "object" && s !== null && s.$$typeof === e;
    }
    function we() {
      {
        if (Hu.current) {
          var s = $(Hu.current.type);
          if (s)
            return `

Check the render method of \`` + s + "`.";
        }
        return "";
      }
    }
    function W0(s) {
      return "";
    }
    var Se = {};
    function V0(s) {
      {
        var b = we();
        if (!b) {
          var _ = typeof s == "string" ? s : s.displayName || s.name;
          _ && (b = `

Check the top-level render call using <` + _ + ">.");
        }
        return b;
      }
    }
    function Te(s, b) {
      {
        if (!s._store || s._store.validated || s.key != null)
          return;
        s._store.validated = !0;
        var _ = V0(b);
        if (Se[_])
          return;
        Se[_] = !0;
        var E = "";
        s && s._owner && s._owner !== Hu.current && (E = " It was passed a child from " + $(s._owner.type) + "."), cu(s), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', _, E), cu(null);
      }
    }
    function Re(s, b) {
      {
        if (typeof s != "object")
          return;
        if ($u(s))
          for (var _ = 0; _ < s.length; _++) {
            var E = s[_];
            Wu(E) && Te(E, b);
          }
        else if (Wu(s))
          s._store && (s._store.validated = !0);
        else if (s) {
          var S = y(s);
          if (typeof S == "function" && S !== s.entries)
            for (var T = S.call(s), w; !(w = T.next()).done; )
              Wu(w.value) && Te(w.value, b);
        }
      }
    }
    function G0(s) {
      {
        var b = s.type;
        if (b == null || typeof b == "string")
          return;
        var _;
        if (typeof b == "function")
          _ = b.propTypes;
        else if (typeof b == "object" && (b.$$typeof === a || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        b.$$typeof === d))
          _ = b.propTypes;
        else
          return;
        if (_) {
          var E = $(b);
          I0(_, s.props, "prop", E, s);
        } else if (b.PropTypes !== void 0 && !Zu) {
          Zu = !0;
          var S = $(b);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", S || "Unknown");
        }
        typeof b.getDefaultProps == "function" && !b.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Y0(s) {
      {
        for (var b = Object.keys(s.props), _ = 0; _ < b.length; _++) {
          var E = b[_];
          if (E !== "children" && E !== "key") {
            cu(s), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", E), cu(null);
            break;
          }
        }
        s.ref !== null && (cu(s), m("Invalid attribute `ref` supplied to `React.Fragment`."), cu(null));
      }
    }
    var Be = {};
    function Pe(s, b, _, E, S, T) {
      {
        var w = tu(s);
        if (!w) {
          var A = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (A += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var z = W0();
          z ? A += z : A += we();
          var B;
          s === null ? B = "null" : $u(s) ? B = "array" : s !== void 0 && s.$$typeof === e ? (B = "<" + ($(s.type) || "Unknown") + " />", A = " Did you accidentally export a JSX literal instead of a component?") : B = typeof s, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", B, A);
        }
        var P = Z0(s, b, _, S, T);
        if (P == null)
          return P;
        if (w) {
          var H = b.children;
          if (H !== void 0)
            if (E)
              if ($u(H)) {
                for (var iu = 0; iu < H.length; iu++)
                  Re(H[iu], s);
                Object.freeze && Object.freeze(H);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Re(H, s);
        }
        if (hu.call(b, "key")) {
          var nu = $(s), q = Object.keys(b).filter(function(er) {
            return er !== "key";
          }), Vu = q.length > 0 ? "{key: someKey, " + q.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Be[nu + Vu]) {
            var ur = q.length > 0 ? "{" + q.join(": ..., ") + ": ...}" : "{}";
            m(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Vu, nu, ur, nu), Be[nu + Vu] = !0;
          }
        }
        return s === t ? Y0(P) : G0(P), P;
      }
    }
    function J0(s, b, _) {
      return Pe(s, b, _, !0);
    }
    function Q0(s, b, _) {
      return Pe(s, b, _, !1);
    }
    var X0 = Q0, K0 = J0;
    xu.Fragment = t, xu.jsx = X0, xu.jsxs = K0;
  }()), xu;
}
process.env.NODE_ENV === "production" ? ee.exports = cr() : ee.exports = ir();
var ze = ee.exports;
const qe = {};
function or(u) {
  let e = qe[u];
  if (e)
    return e;
  e = qe[u] = [];
  for (let r = 0; r < 128; r++) {
    const t = String.fromCharCode(r);
    e.push(t);
  }
  for (let r = 0; r < u.length; r++) {
    const t = u.charCodeAt(r);
    e[t] = "%" + ("0" + t.toString(16).toUpperCase()).slice(-2);
  }
  return e;
}
function su(u, e) {
  typeof e != "string" && (e = su.defaultChars);
  const r = or(e);
  return u.replace(/(%[a-f0-9]{2})+/gi, function(t) {
    let n = "";
    for (let c = 0, o = t.length; c < o; c += 3) {
      const i = parseInt(t.slice(c + 1, c + 3), 16);
      if (i < 128) {
        n += r[i];
        continue;
      }
      if ((i & 224) === 192 && c + 3 < o) {
        const a = parseInt(t.slice(c + 4, c + 6), 16);
        if ((a & 192) === 128) {
          const f = i << 6 & 1984 | a & 63;
          f < 128 ? n += "��" : n += String.fromCharCode(f), c += 3;
          continue;
        }
      }
      if ((i & 240) === 224 && c + 6 < o) {
        const a = parseInt(t.slice(c + 4, c + 6), 16), f = parseInt(t.slice(c + 7, c + 9), 16);
        if ((a & 192) === 128 && (f & 192) === 128) {
          const l = i << 12 & 61440 | a << 6 & 4032 | f & 63;
          l < 2048 || l >= 55296 && l <= 57343 ? n += "���" : n += String.fromCharCode(l), c += 6;
          continue;
        }
      }
      if ((i & 248) === 240 && c + 9 < o) {
        const a = parseInt(t.slice(c + 4, c + 6), 16), f = parseInt(t.slice(c + 7, c + 9), 16), l = parseInt(t.slice(c + 10, c + 12), 16);
        if ((a & 192) === 128 && (f & 192) === 128 && (l & 192) === 128) {
          let d = i << 18 & 1835008 | a << 12 & 258048 | f << 6 & 4032 | l & 63;
          d < 65536 || d > 1114111 ? n += "����" : (d -= 65536, n += String.fromCharCode(55296 + (d >> 10), 56320 + (d & 1023))), c += 9;
          continue;
        }
      }
      n += "�";
    }
    return n;
  });
}
su.defaultChars = ";/?:@&=+$,#";
su.componentChars = "";
const Le = {};
function ar(u) {
  let e = Le[u];
  if (e)
    return e;
  e = Le[u] = [];
  for (let r = 0; r < 128; r++) {
    const t = String.fromCharCode(r);
    /^[0-9a-z]$/i.test(t) ? e.push(t) : e.push("%" + ("0" + r.toString(16).toUpperCase()).slice(-2));
  }
  for (let r = 0; r < u.length; r++)
    e[u.charCodeAt(r)] = u[r];
  return e;
}
function Eu(u, e, r) {
  typeof e != "string" && (r = e, e = Eu.defaultChars), typeof r > "u" && (r = !0);
  const t = ar(e);
  let n = "";
  for (let c = 0, o = u.length; c < o; c++) {
    const i = u.charCodeAt(c);
    if (r && i === 37 && c + 2 < o && /^[0-9a-f]{2}$/i.test(u.slice(c + 1, c + 3))) {
      n += u.slice(c, c + 3), c += 2;
      continue;
    }
    if (i < 128) {
      n += t[i];
      continue;
    }
    if (i >= 55296 && i <= 57343) {
      if (i >= 55296 && i <= 56319 && c + 1 < o) {
        const a = u.charCodeAt(c + 1);
        if (a >= 56320 && a <= 57343) {
          n += encodeURIComponent(u[c] + u[c + 1]), c++;
          continue;
        }
      }
      n += "%EF%BF%BD";
      continue;
    }
    n += encodeURIComponent(u[c]);
  }
  return n;
}
Eu.defaultChars = ";/?:@&=+$,-_.!~*'()#";
Eu.componentChars = "-_.!~*'()";
function ce(u) {
  let e = "";
  return e += u.protocol || "", e += u.slashes ? "//" : "", e += u.auth ? u.auth + "@" : "", u.hostname && u.hostname.indexOf(":") !== -1 ? e += "[" + u.hostname + "]" : e += u.hostname || "", e += u.port ? ":" + u.port : "", e += u.pathname || "", e += u.search || "", e += u.hash || "", e;
}
function Bu() {
  this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
}
const sr = /^([a-z0-9.+-]+:)/i, fr = /:[0-9]*$/, lr = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, dr = ["<", ">", '"', "`", " ", "\r", `
`, "	"], hr = ["{", "}", "|", "\\", "^", "`"].concat(dr), br = ["'"].concat(hr), Ne = ["%", "/", "?", ";", "#"].concat(br), je = ["/", "?", "#"], pr = 255, $e = /^[+a-z0-9A-Z_-]{0,63}$/, xr = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, Ue = {
  javascript: !0,
  "javascript:": !0
}, He = {
  http: !0,
  https: !0,
  ftp: !0,
  gopher: !0,
  file: !0,
  "http:": !0,
  "https:": !0,
  "ftp:": !0,
  "gopher:": !0,
  "file:": !0
};
function ie(u, e) {
  if (u && u instanceof Bu) return u;
  const r = new Bu();
  return r.parse(u, e), r;
}
Bu.prototype.parse = function(u, e) {
  let r, t, n, c = u;
  if (c = c.trim(), !e && u.split("#").length === 1) {
    const f = lr.exec(c);
    if (f)
      return this.pathname = f[1], f[2] && (this.search = f[2]), this;
  }
  let o = sr.exec(c);
  if (o && (o = o[0], r = o.toLowerCase(), this.protocol = o, c = c.substr(o.length)), (e || o || c.match(/^\/\/[^@\/]+@[^@\/]+/)) && (n = c.substr(0, 2) === "//", n && !(o && Ue[o]) && (c = c.substr(2), this.slashes = !0)), !Ue[o] && (n || o && !He[o])) {
    let f = -1;
    for (let h = 0; h < je.length; h++)
      t = c.indexOf(je[h]), t !== -1 && (f === -1 || t < f) && (f = t);
    let l, d;
    f === -1 ? d = c.lastIndexOf("@") : d = c.lastIndexOf("@", f), d !== -1 && (l = c.slice(0, d), c = c.slice(d + 1), this.auth = l), f = -1;
    for (let h = 0; h < Ne.length; h++)
      t = c.indexOf(Ne[h]), t !== -1 && (f === -1 || t < f) && (f = t);
    f === -1 && (f = c.length), c[f - 1] === ":" && f--;
    const x = c.slice(0, f);
    c = c.slice(f), this.parseHost(x), this.hostname = this.hostname || "";
    const p = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!p) {
      const h = this.hostname.split(/\./);
      for (let C = 0, y = h.length; C < y; C++) {
        const F = h[C];
        if (F && !F.match($e)) {
          let m = "";
          for (let g = 0, k = F.length; g < k; g++)
            F.charCodeAt(g) > 127 ? m += "x" : m += F[g];
          if (!m.match($e)) {
            const g = h.slice(0, C), k = h.slice(C + 1), D = F.match(xr);
            D && (g.push(D[1]), k.unshift(D[2])), k.length && (c = k.join(".") + c), this.hostname = g.join(".");
            break;
          }
        }
      }
    }
    this.hostname.length > pr && (this.hostname = ""), p && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
  }
  const i = c.indexOf("#");
  i !== -1 && (this.hash = c.substr(i), c = c.slice(0, i));
  const a = c.indexOf("?");
  return a !== -1 && (this.search = c.substr(a), c = c.slice(0, a)), c && (this.pathname = c), He[r] && this.hostname && !this.pathname && (this.pathname = ""), this;
};
Bu.prototype.parseHost = function(u) {
  let e = fr.exec(u);
  e && (e = e[0], e !== ":" && (this.port = e.substr(1)), u = u.substr(0, u.length - e.length)), u && (this.hostname = u);
};
const _r = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: su,
  encode: Eu,
  format: ce,
  parse: ie
}, Symbol.toStringTag, { value: "Module" })), t0 = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, n0 = /[\0-\x1F\x7F-\x9F]/, mr = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/, oe = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, c0 = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/, i0 = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/, kr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Any: t0,
  Cc: n0,
  Cf: mr,
  P: oe,
  S: c0,
  Z: i0
}, Symbol.toStringTag, { value: "Module" })), gr = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((u) => u.charCodeAt(0))
), Er = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((u) => u.charCodeAt(0))
);
var Gu;
const Dr = /* @__PURE__ */ new Map([
  [0, 65533],
  // C1 Unicode control character reference replacements
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]), Cr = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (Gu = String.fromCodePoint) !== null && Gu !== void 0 ? Gu : function(u) {
    let e = "";
    return u > 65535 && (u -= 65536, e += String.fromCharCode(u >>> 10 & 1023 | 55296), u = 56320 | u & 1023), e += String.fromCharCode(u), e;
  }
);
function yr(u) {
  var e;
  return u >= 55296 && u <= 57343 || u > 1114111 ? 65533 : (e = Dr.get(u)) !== null && e !== void 0 ? e : u;
}
var O;
(function(u) {
  u[u.NUM = 35] = "NUM", u[u.SEMI = 59] = "SEMI", u[u.EQUALS = 61] = "EQUALS", u[u.ZERO = 48] = "ZERO", u[u.NINE = 57] = "NINE", u[u.LOWER_A = 97] = "LOWER_A", u[u.LOWER_F = 102] = "LOWER_F", u[u.LOWER_X = 120] = "LOWER_X", u[u.LOWER_Z = 122] = "LOWER_Z", u[u.UPPER_A = 65] = "UPPER_A", u[u.UPPER_F = 70] = "UPPER_F", u[u.UPPER_Z = 90] = "UPPER_Z";
})(O || (O = {}));
const Ar = 32;
var eu;
(function(u) {
  u[u.VALUE_LENGTH = 49152] = "VALUE_LENGTH", u[u.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", u[u.JUMP_TABLE = 127] = "JUMP_TABLE";
})(eu || (eu = {}));
function re(u) {
  return u >= O.ZERO && u <= O.NINE;
}
function Fr(u) {
  return u >= O.UPPER_A && u <= O.UPPER_F || u >= O.LOWER_A && u <= O.LOWER_F;
}
function vr(u) {
  return u >= O.UPPER_A && u <= O.UPPER_Z || u >= O.LOWER_A && u <= O.LOWER_Z || re(u);
}
function wr(u) {
  return u === O.EQUALS || vr(u);
}
var M;
(function(u) {
  u[u.EntityStart = 0] = "EntityStart", u[u.NumericStart = 1] = "NumericStart", u[u.NumericDecimal = 2] = "NumericDecimal", u[u.NumericHex = 3] = "NumericHex", u[u.NamedEntity = 4] = "NamedEntity";
})(M || (M = {}));
var uu;
(function(u) {
  u[u.Legacy = 0] = "Legacy", u[u.Strict = 1] = "Strict", u[u.Attribute = 2] = "Attribute";
})(uu || (uu = {}));
class Sr {
  constructor(e, r, t) {
    this.decodeTree = e, this.emitCodePoint = r, this.errors = t, this.state = M.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = uu.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(e) {
    this.decodeMode = e, this.state = M.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
  }
  /**
   * Write an entity to the decoder. This can be called multiple times with partial entities.
   * If the entity is incomplete, the decoder will return -1.
   *
   * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
   * entity is incomplete, and resume when the next string is written.
   *
   * @param string The string containing the entity (or a continuation of the entity).
   * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  write(e, r) {
    switch (this.state) {
      case M.EntityStart:
        return e.charCodeAt(r) === O.NUM ? (this.state = M.NumericStart, this.consumed += 1, this.stateNumericStart(e, r + 1)) : (this.state = M.NamedEntity, this.stateNamedEntity(e, r));
      case M.NumericStart:
        return this.stateNumericStart(e, r);
      case M.NumericDecimal:
        return this.stateNumericDecimal(e, r);
      case M.NumericHex:
        return this.stateNumericHex(e, r);
      case M.NamedEntity:
        return this.stateNamedEntity(e, r);
    }
  }
  /**
   * Switches between the numeric decimal and hexadecimal states.
   *
   * Equivalent to the `Numeric character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericStart(e, r) {
    return r >= e.length ? -1 : (e.charCodeAt(r) | Ar) === O.LOWER_X ? (this.state = M.NumericHex, this.consumed += 1, this.stateNumericHex(e, r + 1)) : (this.state = M.NumericDecimal, this.stateNumericDecimal(e, r));
  }
  addToNumericResult(e, r, t, n) {
    if (r !== t) {
      const c = t - r;
      this.result = this.result * Math.pow(n, c) + parseInt(e.substr(r, c), n), this.consumed += c;
    }
  }
  /**
   * Parses a hexadecimal numeric entity.
   *
   * Equivalent to the `Hexademical character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericHex(e, r) {
    const t = r;
    for (; r < e.length; ) {
      const n = e.charCodeAt(r);
      if (re(n) || Fr(n))
        r += 1;
      else
        return this.addToNumericResult(e, t, r, 16), this.emitNumericEntity(n, 3);
    }
    return this.addToNumericResult(e, t, r, 16), -1;
  }
  /**
   * Parses a decimal numeric entity.
   *
   * Equivalent to the `Decimal character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericDecimal(e, r) {
    const t = r;
    for (; r < e.length; ) {
      const n = e.charCodeAt(r);
      if (re(n))
        r += 1;
      else
        return this.addToNumericResult(e, t, r, 10), this.emitNumericEntity(n, 2);
    }
    return this.addToNumericResult(e, t, r, 10), -1;
  }
  /**
   * Validate and emit a numeric entity.
   *
   * Implements the logic from the `Hexademical character reference start
   * state` and `Numeric character reference end state` in the HTML spec.
   *
   * @param lastCp The last code point of the entity. Used to see if the
   *               entity was terminated with a semicolon.
   * @param expectedLength The minimum number of characters that should be
   *                       consumed. Used to validate that at least one digit
   *                       was consumed.
   * @returns The number of characters that were consumed.
   */
  emitNumericEntity(e, r) {
    var t;
    if (this.consumed <= r)
      return (t = this.errors) === null || t === void 0 || t.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
    if (e === O.SEMI)
      this.consumed += 1;
    else if (this.decodeMode === uu.Strict)
      return 0;
    return this.emitCodePoint(yr(this.result), this.consumed), this.errors && (e !== O.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
  }
  /**
   * Parses a named entity.
   *
   * Equivalent to the `Named character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNamedEntity(e, r) {
    const { decodeTree: t } = this;
    let n = t[this.treeIndex], c = (n & eu.VALUE_LENGTH) >> 14;
    for (; r < e.length; r++, this.excess++) {
      const o = e.charCodeAt(r);
      if (this.treeIndex = Tr(t, n, this.treeIndex + Math.max(1, c), o), this.treeIndex < 0)
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === uu.Attribute && // We shouldn't have consumed any characters after the entity,
        (c === 0 || // And there should be no invalid characters.
        wr(o)) ? 0 : this.emitNotTerminatedNamedEntity();
      if (n = t[this.treeIndex], c = (n & eu.VALUE_LENGTH) >> 14, c !== 0) {
        if (o === O.SEMI)
          return this.emitNamedEntityData(this.treeIndex, c, this.consumed + this.excess);
        this.decodeMode !== uu.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
      }
    }
    return -1;
  }
  /**
   * Emit a named entity that was not terminated with a semicolon.
   *
   * @returns The number of characters consumed.
   */
  emitNotTerminatedNamedEntity() {
    var e;
    const { result: r, decodeTree: t } = this, n = (t[r] & eu.VALUE_LENGTH) >> 14;
    return this.emitNamedEntityData(r, n, this.consumed), (e = this.errors) === null || e === void 0 || e.missingSemicolonAfterCharacterReference(), this.consumed;
  }
  /**
   * Emit a named entity.
   *
   * @param result The index of the entity in the decode tree.
   * @param valueLength The number of bytes in the entity.
   * @param consumed The number of characters consumed.
   *
   * @returns The number of characters consumed.
   */
  emitNamedEntityData(e, r, t) {
    const { decodeTree: n } = this;
    return this.emitCodePoint(r === 1 ? n[e] & ~eu.VALUE_LENGTH : n[e + 1], t), r === 3 && this.emitCodePoint(n[e + 2], t), t;
  }
  /**
   * Signal to the parser that the end of the input was reached.
   *
   * Remaining data will be emitted and relevant errors will be produced.
   *
   * @returns The number of characters consumed.
   */
  end() {
    var e;
    switch (this.state) {
      case M.NamedEntity:
        return this.result !== 0 && (this.decodeMode !== uu.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      case M.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case M.NumericHex:
        return this.emitNumericEntity(0, 3);
      case M.NumericStart:
        return (e = this.errors) === null || e === void 0 || e.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      case M.EntityStart:
        return 0;
    }
  }
}
function o0(u) {
  let e = "";
  const r = new Sr(u, (t) => e += Cr(t));
  return function(n, c) {
    let o = 0, i = 0;
    for (; (i = n.indexOf("&", i)) >= 0; ) {
      e += n.slice(o, i), r.startEntity(c);
      const f = r.write(
        n,
        // Skip the "&"
        i + 1
      );
      if (f < 0) {
        o = i + r.end();
        break;
      }
      o = i + f, i = f === 0 ? o + 1 : o;
    }
    const a = e + n.slice(o);
    return e = "", a;
  };
}
function Tr(u, e, r, t) {
  const n = (e & eu.BRANCH_LENGTH) >> 7, c = e & eu.JUMP_TABLE;
  if (n === 0)
    return c !== 0 && t === c ? r : -1;
  if (c) {
    const a = t - c;
    return a < 0 || a >= n ? -1 : u[r + a] - 1;
  }
  let o = r, i = o + n - 1;
  for (; o <= i; ) {
    const a = o + i >>> 1, f = u[a];
    if (f < t)
      o = a + 1;
    else if (f > t)
      i = a - 1;
    else
      return u[a + n];
  }
  return -1;
}
const Rr = o0(gr);
o0(Er);
function a0(u, e = uu.Legacy) {
  return Rr(u, e);
}
function Br(u) {
  return Object.prototype.toString.call(u);
}
function ae(u) {
  return Br(u) === "[object String]";
}
const Pr = Object.prototype.hasOwnProperty;
function Ir(u, e) {
  return Pr.call(u, e);
}
function Mu(u) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(r) {
    if (r) {
      if (typeof r != "object")
        throw new TypeError(r + "must be object");
      Object.keys(r).forEach(function(t) {
        u[t] = r[t];
      });
    }
  }), u;
}
function s0(u, e, r) {
  return [].concat(u.slice(0, e), r, u.slice(e + 1));
}
function se(u) {
  return !(u >= 55296 && u <= 57343 || u >= 64976 && u <= 65007 || (u & 65535) === 65535 || (u & 65535) === 65534 || u >= 0 && u <= 8 || u === 11 || u >= 14 && u <= 31 || u >= 127 && u <= 159 || u > 1114111);
}
function Pu(u) {
  if (u > 65535) {
    u -= 65536;
    const e = 55296 + (u >> 10), r = 56320 + (u & 1023);
    return String.fromCharCode(e, r);
  }
  return String.fromCharCode(u);
}
const f0 = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g, Mr = /&([a-z#][a-z0-9]{1,31});/gi, Or = new RegExp(f0.source + "|" + Mr.source, "gi"), zr = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
function qr(u, e) {
  if (e.charCodeAt(0) === 35 && zr.test(e)) {
    const t = e[1].toLowerCase() === "x" ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
    return se(t) ? Pu(t) : u;
  }
  const r = a0(u);
  return r !== u ? r : u;
}
function Lr(u) {
  return u.indexOf("\\") < 0 ? u : u.replace(f0, "$1");
}
function fu(u) {
  return u.indexOf("\\") < 0 && u.indexOf("&") < 0 ? u : u.replace(Or, function(e, r, t) {
    return r || qr(e, t);
  });
}
const Nr = /[&<>"]/, jr = /[&<>"]/g, $r = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
function Ur(u) {
  return $r[u];
}
function ru(u) {
  return Nr.test(u) ? u.replace(jr, Ur) : u;
}
const Hr = /[.?*+^$[\]\\(){}|-]/g;
function Zr(u) {
  return u.replace(Hr, "\\$&");
}
function R(u) {
  switch (u) {
    case 9:
    case 32:
      return !0;
  }
  return !1;
}
function _u(u) {
  if (u >= 8192 && u <= 8202)
    return !0;
  switch (u) {
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 32:
    case 160:
    case 5760:
    case 8239:
    case 8287:
    case 12288:
      return !0;
  }
  return !1;
}
function mu(u) {
  return oe.test(u) || c0.test(u);
}
function ku(u) {
  switch (u) {
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
    case 58:
    case 59:
    case 60:
    case 61:
    case 62:
    case 63:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 124:
    case 125:
    case 126:
      return !0;
    default:
      return !1;
  }
}
function Ou(u) {
  return u = u.trim().replace(/\s+/g, " "), "ẞ".toLowerCase() === "Ṿ" && (u = u.replace(/ẞ/g, "ß")), u.toLowerCase().toUpperCase();
}
const Wr = { mdurl: _r, ucmicro: kr }, Vr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  arrayReplaceAt: s0,
  assign: Mu,
  escapeHtml: ru,
  escapeRE: Zr,
  fromCodePoint: Pu,
  has: Ir,
  isMdAsciiPunct: ku,
  isPunctChar: mu,
  isSpace: R,
  isString: ae,
  isValidEntityCode: se,
  isWhiteSpace: _u,
  lib: Wr,
  normalizeReference: Ou,
  unescapeAll: fu,
  unescapeMd: Lr
}, Symbol.toStringTag, { value: "Module" }));
function Gr(u, e, r) {
  let t, n, c, o;
  const i = u.posMax, a = u.pos;
  for (u.pos = e + 1, t = 1; u.pos < i; ) {
    if (c = u.src.charCodeAt(u.pos), c === 93 && (t--, t === 0)) {
      n = !0;
      break;
    }
    if (o = u.pos, u.md.inline.skipToken(u), c === 91) {
      if (o === u.pos - 1)
        t++;
      else if (r)
        return u.pos = a, -1;
    }
  }
  let f = -1;
  return n && (f = u.pos), u.pos = a, f;
}
function Yr(u, e, r) {
  let t, n = e;
  const c = {
    ok: !1,
    pos: 0,
    str: ""
  };
  if (u.charCodeAt(n) === 60) {
    for (n++; n < r; ) {
      if (t = u.charCodeAt(n), t === 10 || t === 60)
        return c;
      if (t === 62)
        return c.pos = n + 1, c.str = fu(u.slice(e + 1, n)), c.ok = !0, c;
      if (t === 92 && n + 1 < r) {
        n += 2;
        continue;
      }
      n++;
    }
    return c;
  }
  let o = 0;
  for (; n < r && (t = u.charCodeAt(n), !(t === 32 || t < 32 || t === 127)); ) {
    if (t === 92 && n + 1 < r) {
      if (u.charCodeAt(n + 1) === 32)
        break;
      n += 2;
      continue;
    }
    if (t === 40 && (o++, o > 32))
      return c;
    if (t === 41) {
      if (o === 0)
        break;
      o--;
    }
    n++;
  }
  return e === n || o !== 0 || (c.str = fu(u.slice(e, n)), c.pos = n, c.ok = !0), c;
}
function Jr(u, e, r, t) {
  let n, c = e;
  const o = {
    // if `true`, this is a valid link title
    ok: !1,
    // if `true`, this link can be continued on the next line
    can_continue: !1,
    // if `ok`, it's the position of the first character after the closing marker
    pos: 0,
    // if `ok`, it's the unescaped title
    str: "",
    // expected closing marker character code
    marker: 0
  };
  if (t)
    o.str = t.str, o.marker = t.marker;
  else {
    if (c >= r)
      return o;
    let i = u.charCodeAt(c);
    if (i !== 34 && i !== 39 && i !== 40)
      return o;
    e++, c++, i === 40 && (i = 41), o.marker = i;
  }
  for (; c < r; ) {
    if (n = u.charCodeAt(c), n === o.marker)
      return o.pos = c + 1, o.str += fu(u.slice(e, c)), o.ok = !0, o;
    if (n === 40 && o.marker === 41)
      return o;
    n === 92 && c + 1 < r && c++, c++;
  }
  return o.can_continue = !0, o.str += fu(u.slice(e, c)), o;
}
const Qr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  parseLinkDestination: Yr,
  parseLinkLabel: Gr,
  parseLinkTitle: Jr
}, Symbol.toStringTag, { value: "Module" })), Q = {};
Q.code_inline = function(u, e, r, t, n) {
  const c = u[e];
  return "<code" + n.renderAttrs(c) + ">" + ru(c.content) + "</code>";
};
Q.code_block = function(u, e, r, t, n) {
  const c = u[e];
  return "<pre" + n.renderAttrs(c) + "><code>" + ru(u[e].content) + `</code></pre>
`;
};
Q.fence = function(u, e, r, t, n) {
  const c = u[e], o = c.info ? fu(c.info).trim() : "";
  let i = "", a = "";
  if (o) {
    const l = o.split(/(\s+)/g);
    i = l[0], a = l.slice(2).join("");
  }
  let f;
  if (r.highlight ? f = r.highlight(c.content, i, a) || ru(c.content) : f = ru(c.content), f.indexOf("<pre") === 0)
    return f + `
`;
  if (o) {
    const l = c.attrIndex("class"), d = c.attrs ? c.attrs.slice() : [];
    l < 0 ? d.push(["class", r.langPrefix + i]) : (d[l] = d[l].slice(), d[l][1] += " " + r.langPrefix + i);
    const x = {
      attrs: d
    };
    return `<pre><code${n.renderAttrs(x)}>${f}</code></pre>
`;
  }
  return `<pre><code${n.renderAttrs(c)}>${f}</code></pre>
`;
};
Q.image = function(u, e, r, t, n) {
  const c = u[e];
  return c.attrs[c.attrIndex("alt")][1] = n.renderInlineAsText(c.children, r, t), n.renderToken(u, e, r);
};
Q.hardbreak = function(u, e, r) {
  return r.xhtmlOut ? `<br />
` : `<br>
`;
};
Q.softbreak = function(u, e, r) {
  return r.breaks ? r.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
Q.text = function(u, e) {
  return ru(u[e].content);
};
Q.html_block = function(u, e) {
  return u[e].content;
};
Q.html_inline = function(u, e) {
  return u[e].content;
};
function lu() {
  this.rules = Mu({}, Q);
}
lu.prototype.renderAttrs = function(e) {
  let r, t, n;
  if (!e.attrs)
    return "";
  for (n = "", r = 0, t = e.attrs.length; r < t; r++)
    n += " " + ru(e.attrs[r][0]) + '="' + ru(e.attrs[r][1]) + '"';
  return n;
};
lu.prototype.renderToken = function(e, r, t) {
  const n = e[r];
  let c = "";
  if (n.hidden)
    return "";
  n.block && n.nesting !== -1 && r && e[r - 1].hidden && (c += `
`), c += (n.nesting === -1 ? "</" : "<") + n.tag, c += this.renderAttrs(n), n.nesting === 0 && t.xhtmlOut && (c += " /");
  let o = !1;
  if (n.block && (o = !0, n.nesting === 1 && r + 1 < e.length)) {
    const i = e[r + 1];
    (i.type === "inline" || i.hidden || i.nesting === -1 && i.tag === n.tag) && (o = !1);
  }
  return c += o ? `>
` : ">", c;
};
lu.prototype.renderInline = function(u, e, r) {
  let t = "";
  const n = this.rules;
  for (let c = 0, o = u.length; c < o; c++) {
    const i = u[c].type;
    typeof n[i] < "u" ? t += n[i](u, c, e, r, this) : t += this.renderToken(u, c, e);
  }
  return t;
};
lu.prototype.renderInlineAsText = function(u, e, r) {
  let t = "";
  for (let n = 0, c = u.length; n < c; n++)
    switch (u[n].type) {
      case "text":
        t += u[n].content;
        break;
      case "image":
        t += this.renderInlineAsText(u[n].children, e, r);
        break;
      case "html_inline":
      case "html_block":
        t += u[n].content;
        break;
      case "softbreak":
      case "hardbreak":
        t += `
`;
        break;
    }
  return t;
};
lu.prototype.render = function(u, e, r) {
  let t = "";
  const n = this.rules;
  for (let c = 0, o = u.length; c < o; c++) {
    const i = u[c].type;
    i === "inline" ? t += this.renderInline(u[c].children, e, r) : typeof n[i] < "u" ? t += n[i](u, c, e, r, this) : t += this.renderToken(u, c, e, r);
  }
  return t;
};
function L() {
  this.__rules__ = [], this.__cache__ = null;
}
L.prototype.__find__ = function(u) {
  for (let e = 0; e < this.__rules__.length; e++)
    if (this.__rules__[e].name === u)
      return e;
  return -1;
};
L.prototype.__compile__ = function() {
  const u = this, e = [""];
  u.__rules__.forEach(function(r) {
    r.enabled && r.alt.forEach(function(t) {
      e.indexOf(t) < 0 && e.push(t);
    });
  }), u.__cache__ = {}, e.forEach(function(r) {
    u.__cache__[r] = [], u.__rules__.forEach(function(t) {
      t.enabled && (r && t.alt.indexOf(r) < 0 || u.__cache__[r].push(t.fn));
    });
  });
};
L.prototype.at = function(u, e, r) {
  const t = this.__find__(u), n = r || {};
  if (t === -1)
    throw new Error("Parser rule not found: " + u);
  this.__rules__[t].fn = e, this.__rules__[t].alt = n.alt || [], this.__cache__ = null;
};
L.prototype.before = function(u, e, r, t) {
  const n = this.__find__(u), c = t || {};
  if (n === -1)
    throw new Error("Parser rule not found: " + u);
  this.__rules__.splice(n, 0, {
    name: e,
    enabled: !0,
    fn: r,
    alt: c.alt || []
  }), this.__cache__ = null;
};
L.prototype.after = function(u, e, r, t) {
  const n = this.__find__(u), c = t || {};
  if (n === -1)
    throw new Error("Parser rule not found: " + u);
  this.__rules__.splice(n + 1, 0, {
    name: e,
    enabled: !0,
    fn: r,
    alt: c.alt || []
  }), this.__cache__ = null;
};
L.prototype.push = function(u, e, r) {
  const t = r || {};
  this.__rules__.push({
    name: u,
    enabled: !0,
    fn: e,
    alt: t.alt || []
  }), this.__cache__ = null;
};
L.prototype.enable = function(u, e) {
  Array.isArray(u) || (u = [u]);
  const r = [];
  return u.forEach(function(t) {
    const n = this.__find__(t);
    if (n < 0) {
      if (e)
        return;
      throw new Error("Rules manager: invalid rule name " + t);
    }
    this.__rules__[n].enabled = !0, r.push(t);
  }, this), this.__cache__ = null, r;
};
L.prototype.enableOnly = function(u, e) {
  Array.isArray(u) || (u = [u]), this.__rules__.forEach(function(r) {
    r.enabled = !1;
  }), this.enable(u, e);
};
L.prototype.disable = function(u, e) {
  Array.isArray(u) || (u = [u]);
  const r = [];
  return u.forEach(function(t) {
    const n = this.__find__(t);
    if (n < 0) {
      if (e)
        return;
      throw new Error("Rules manager: invalid rule name " + t);
    }
    this.__rules__[n].enabled = !1, r.push(t);
  }, this), this.__cache__ = null, r;
};
L.prototype.getRules = function(u) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[u] || [];
};
function V(u, e, r) {
  this.type = u, this.tag = e, this.attrs = null, this.map = null, this.nesting = r, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
}
V.prototype.attrIndex = function(e) {
  if (!this.attrs)
    return -1;
  const r = this.attrs;
  for (let t = 0, n = r.length; t < n; t++)
    if (r[t][0] === e)
      return t;
  return -1;
};
V.prototype.attrPush = function(e) {
  this.attrs ? this.attrs.push(e) : this.attrs = [e];
};
V.prototype.attrSet = function(e, r) {
  const t = this.attrIndex(e), n = [e, r];
  t < 0 ? this.attrPush(n) : this.attrs[t] = n;
};
V.prototype.attrGet = function(e) {
  const r = this.attrIndex(e);
  let t = null;
  return r >= 0 && (t = this.attrs[r][1]), t;
};
V.prototype.attrJoin = function(e, r) {
  const t = this.attrIndex(e);
  t < 0 ? this.attrPush([e, r]) : this.attrs[t][1] = this.attrs[t][1] + " " + r;
};
function l0(u, e, r) {
  this.src = u, this.env = r, this.tokens = [], this.inlineMode = !1, this.md = e;
}
l0.prototype.Token = V;
const Xr = /\r\n?|\n/g, Kr = /\0/g;
function ut(u) {
  let e;
  e = u.src.replace(Xr, `
`), e = e.replace(Kr, "�"), u.src = e;
}
function et(u) {
  let e;
  u.inlineMode ? (e = new u.Token("inline", "", 0), e.content = u.src, e.map = [0, 1], e.children = [], u.tokens.push(e)) : u.md.block.parse(u.src, u.md, u.env, u.tokens);
}
function rt(u) {
  const e = u.tokens;
  for (let r = 0, t = e.length; r < t; r++) {
    const n = e[r];
    n.type === "inline" && u.md.inline.parse(n.content, u.md, u.env, n.children);
  }
}
function tt(u) {
  return /^<a[>\s]/i.test(u);
}
function nt(u) {
  return /^<\/a\s*>/i.test(u);
}
function ct(u) {
  const e = u.tokens;
  if (u.md.options.linkify)
    for (let r = 0, t = e.length; r < t; r++) {
      if (e[r].type !== "inline" || !u.md.linkify.pretest(e[r].content))
        continue;
      let n = e[r].children, c = 0;
      for (let o = n.length - 1; o >= 0; o--) {
        const i = n[o];
        if (i.type === "link_close") {
          for (o--; n[o].level !== i.level && n[o].type !== "link_open"; )
            o--;
          continue;
        }
        if (i.type === "html_inline" && (tt(i.content) && c > 0 && c--, nt(i.content) && c++), !(c > 0) && i.type === "text" && u.md.linkify.test(i.content)) {
          const a = i.content;
          let f = u.md.linkify.match(a);
          const l = [];
          let d = i.level, x = 0;
          f.length > 0 && f[0].index === 0 && o > 0 && n[o - 1].type === "text_special" && (f = f.slice(1));
          for (let p = 0; p < f.length; p++) {
            const h = f[p].url, C = u.md.normalizeLink(h);
            if (!u.md.validateLink(C))
              continue;
            let y = f[p].text;
            f[p].schema ? f[p].schema === "mailto:" && !/^mailto:/i.test(y) ? y = u.md.normalizeLinkText("mailto:" + y).replace(/^mailto:/, "") : y = u.md.normalizeLinkText(y) : y = u.md.normalizeLinkText("http://" + y).replace(/^http:\/\//, "");
            const F = f[p].index;
            if (F > x) {
              const D = new u.Token("text", "", 0);
              D.content = a.slice(x, F), D.level = d, l.push(D);
            }
            const m = new u.Token("link_open", "a", 1);
            m.attrs = [["href", C]], m.level = d++, m.markup = "linkify", m.info = "auto", l.push(m);
            const g = new u.Token("text", "", 0);
            g.content = y, g.level = d, l.push(g);
            const k = new u.Token("link_close", "a", -1);
            k.level = --d, k.markup = "linkify", k.info = "auto", l.push(k), x = f[p].lastIndex;
          }
          if (x < a.length) {
            const p = new u.Token("text", "", 0);
            p.content = a.slice(x), p.level = d, l.push(p);
          }
          e[r].children = n = s0(n, o, l);
        }
      }
    }
}
const d0 = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, it = /\((c|tm|r)\)/i, ot = /\((c|tm|r)\)/ig, at = {
  c: "©",
  r: "®",
  tm: "™"
};
function st(u, e) {
  return at[e.toLowerCase()];
}
function ft(u) {
  let e = 0;
  for (let r = u.length - 1; r >= 0; r--) {
    const t = u[r];
    t.type === "text" && !e && (t.content = t.content.replace(ot, st)), t.type === "link_open" && t.info === "auto" && e--, t.type === "link_close" && t.info === "auto" && e++;
  }
}
function lt(u) {
  let e = 0;
  for (let r = u.length - 1; r >= 0; r--) {
    const t = u[r];
    t.type === "text" && !e && d0.test(t.content) && (t.content = t.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–")), t.type === "link_open" && t.info === "auto" && e--, t.type === "link_close" && t.info === "auto" && e++;
  }
}
function dt(u) {
  let e;
  if (u.md.options.typographer)
    for (e = u.tokens.length - 1; e >= 0; e--)
      u.tokens[e].type === "inline" && (it.test(u.tokens[e].content) && ft(u.tokens[e].children), d0.test(u.tokens[e].content) && lt(u.tokens[e].children));
}
const ht = /['"]/, Ze = /['"]/g, We = "’";
function Tu(u, e, r) {
  return u.slice(0, e) + r + u.slice(e + 1);
}
function bt(u, e) {
  let r;
  const t = [];
  for (let n = 0; n < u.length; n++) {
    const c = u[n], o = u[n].level;
    for (r = t.length - 1; r >= 0 && !(t[r].level <= o); r--)
      ;
    if (t.length = r + 1, c.type !== "text")
      continue;
    let i = c.content, a = 0, f = i.length;
    u:
      for (; a < f; ) {
        Ze.lastIndex = a;
        const l = Ze.exec(i);
        if (!l)
          break;
        let d = !0, x = !0;
        a = l.index + 1;
        const p = l[0] === "'";
        let h = 32;
        if (l.index - 1 >= 0)
          h = i.charCodeAt(l.index - 1);
        else
          for (r = n - 1; r >= 0 && !(u[r].type === "softbreak" || u[r].type === "hardbreak"); r--)
            if (u[r].content) {
              h = u[r].content.charCodeAt(u[r].content.length - 1);
              break;
            }
        let C = 32;
        if (a < f)
          C = i.charCodeAt(a);
        else
          for (r = n + 1; r < u.length && !(u[r].type === "softbreak" || u[r].type === "hardbreak"); r++)
            if (u[r].content) {
              C = u[r].content.charCodeAt(0);
              break;
            }
        const y = ku(h) || mu(String.fromCharCode(h)), F = ku(C) || mu(String.fromCharCode(C)), m = _u(h), g = _u(C);
        if (g ? d = !1 : F && (m || y || (d = !1)), m ? x = !1 : y && (g || F || (x = !1)), C === 34 && l[0] === '"' && h >= 48 && h <= 57 && (x = d = !1), d && x && (d = y, x = F), !d && !x) {
          p && (c.content = Tu(c.content, l.index, We));
          continue;
        }
        if (x)
          for (r = t.length - 1; r >= 0; r--) {
            let k = t[r];
            if (t[r].level < o)
              break;
            if (k.single === p && t[r].level === o) {
              k = t[r];
              let D, v;
              p ? (D = e.md.options.quotes[2], v = e.md.options.quotes[3]) : (D = e.md.options.quotes[0], v = e.md.options.quotes[1]), c.content = Tu(c.content, l.index, v), u[k.token].content = Tu(
                u[k.token].content,
                k.pos,
                D
              ), a += v.length - 1, k.token === n && (a += D.length - 1), i = c.content, f = i.length, t.length = r;
              continue u;
            }
          }
        d ? t.push({
          token: n,
          pos: l.index,
          single: p,
          level: o
        }) : x && p && (c.content = Tu(c.content, l.index, We));
      }
  }
}
function pt(u) {
  if (u.md.options.typographer)
    for (let e = u.tokens.length - 1; e >= 0; e--)
      u.tokens[e].type !== "inline" || !ht.test(u.tokens[e].content) || bt(u.tokens[e].children, u);
}
function xt(u) {
  let e, r;
  const t = u.tokens, n = t.length;
  for (let c = 0; c < n; c++) {
    if (t[c].type !== "inline") continue;
    const o = t[c].children, i = o.length;
    for (e = 0; e < i; e++)
      o[e].type === "text_special" && (o[e].type = "text");
    for (e = r = 0; e < i; e++)
      o[e].type === "text" && e + 1 < i && o[e + 1].type === "text" ? o[e + 1].content = o[e].content + o[e + 1].content : (e !== r && (o[r] = o[e]), r++);
    e !== r && (o.length = r);
  }
}
const Yu = [
  ["normalize", ut],
  ["block", et],
  ["inline", rt],
  ["linkify", ct],
  ["replacements", dt],
  ["smartquotes", pt],
  // `text_join` finds `text_special` tokens (for escape sequences)
  // and joins them with the rest of the text
  ["text_join", xt]
];
function fe() {
  this.ruler = new L();
  for (let u = 0; u < Yu.length; u++)
    this.ruler.push(Yu[u][0], Yu[u][1]);
}
fe.prototype.process = function(u) {
  const e = this.ruler.getRules("");
  for (let r = 0, t = e.length; r < t; r++)
    e[r](u);
};
fe.prototype.State = l0;
function X(u, e, r, t) {
  this.src = u, this.md = e, this.env = r, this.tokens = t, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0;
  const n = this.src;
  for (let c = 0, o = 0, i = 0, a = 0, f = n.length, l = !1; o < f; o++) {
    const d = n.charCodeAt(o);
    if (!l)
      if (R(d)) {
        i++, d === 9 ? a += 4 - a % 4 : a++;
        continue;
      } else
        l = !0;
    (d === 10 || o === f - 1) && (d !== 10 && o++, this.bMarks.push(c), this.eMarks.push(o), this.tShift.push(i), this.sCount.push(a), this.bsCount.push(0), l = !1, i = 0, a = 0, c = o + 1);
  }
  this.bMarks.push(n.length), this.eMarks.push(n.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
}
X.prototype.push = function(u, e, r) {
  const t = new V(u, e, r);
  return t.block = !0, r < 0 && this.level--, t.level = this.level, r > 0 && this.level++, this.tokens.push(t), t;
};
X.prototype.isEmpty = function(e) {
  return this.bMarks[e] + this.tShift[e] >= this.eMarks[e];
};
X.prototype.skipEmptyLines = function(e) {
  for (let r = this.lineMax; e < r && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++)
    ;
  return e;
};
X.prototype.skipSpaces = function(e) {
  for (let r = this.src.length; e < r; e++) {
    const t = this.src.charCodeAt(e);
    if (!R(t))
      break;
  }
  return e;
};
X.prototype.skipSpacesBack = function(e, r) {
  if (e <= r)
    return e;
  for (; e > r; )
    if (!R(this.src.charCodeAt(--e)))
      return e + 1;
  return e;
};
X.prototype.skipChars = function(e, r) {
  for (let t = this.src.length; e < t && this.src.charCodeAt(e) === r; e++)
    ;
  return e;
};
X.prototype.skipCharsBack = function(e, r, t) {
  if (e <= t)
    return e;
  for (; e > t; )
    if (r !== this.src.charCodeAt(--e))
      return e + 1;
  return e;
};
X.prototype.getLines = function(e, r, t, n) {
  if (e >= r)
    return "";
  const c = new Array(r - e);
  for (let o = 0, i = e; i < r; i++, o++) {
    let a = 0;
    const f = this.bMarks[i];
    let l = f, d;
    for (i + 1 < r || n ? d = this.eMarks[i] + 1 : d = this.eMarks[i]; l < d && a < t; ) {
      const x = this.src.charCodeAt(l);
      if (R(x))
        x === 9 ? a += 4 - (a + this.bsCount[i]) % 4 : a++;
      else if (l - f < this.tShift[i])
        a++;
      else
        break;
      l++;
    }
    a > t ? c[o] = new Array(a - t + 1).join(" ") + this.src.slice(l, d) : c[o] = this.src.slice(l, d);
  }
  return c.join("");
};
X.prototype.Token = V;
const _t = 65536;
function Ju(u, e) {
  const r = u.bMarks[e] + u.tShift[e], t = u.eMarks[e];
  return u.src.slice(r, t);
}
function Ve(u) {
  const e = [], r = u.length;
  let t = 0, n = u.charCodeAt(t), c = !1, o = 0, i = "";
  for (; t < r; )
    n === 124 && (c ? (i += u.substring(o, t - 1), o = t) : (e.push(i + u.substring(o, t)), i = "", o = t + 1)), c = n === 92, t++, n = u.charCodeAt(t);
  return e.push(i + u.substring(o)), e;
}
function mt(u, e, r, t) {
  if (e + 2 > r)
    return !1;
  let n = e + 1;
  if (u.sCount[n] < u.blkIndent || u.sCount[n] - u.blkIndent >= 4)
    return !1;
  let c = u.bMarks[n] + u.tShift[n];
  if (c >= u.eMarks[n])
    return !1;
  const o = u.src.charCodeAt(c++);
  if (o !== 124 && o !== 45 && o !== 58 || c >= u.eMarks[n])
    return !1;
  const i = u.src.charCodeAt(c++);
  if (i !== 124 && i !== 45 && i !== 58 && !R(i) || o === 45 && R(i))
    return !1;
  for (; c < u.eMarks[n]; ) {
    const k = u.src.charCodeAt(c);
    if (k !== 124 && k !== 45 && k !== 58 && !R(k))
      return !1;
    c++;
  }
  let a = Ju(u, e + 1), f = a.split("|");
  const l = [];
  for (let k = 0; k < f.length; k++) {
    const D = f[k].trim();
    if (!D) {
      if (k === 0 || k === f.length - 1)
        continue;
      return !1;
    }
    if (!/^:?-+:?$/.test(D))
      return !1;
    D.charCodeAt(D.length - 1) === 58 ? l.push(D.charCodeAt(0) === 58 ? "center" : "right") : D.charCodeAt(0) === 58 ? l.push("left") : l.push("");
  }
  if (a = Ju(u, e).trim(), a.indexOf("|") === -1 || u.sCount[e] - u.blkIndent >= 4)
    return !1;
  f = Ve(a), f.length && f[0] === "" && f.shift(), f.length && f[f.length - 1] === "" && f.pop();
  const d = f.length;
  if (d === 0 || d !== l.length)
    return !1;
  if (t)
    return !0;
  const x = u.parentType;
  u.parentType = "table";
  const p = u.md.block.ruler.getRules("blockquote"), h = u.push("table_open", "table", 1), C = [e, 0];
  h.map = C;
  const y = u.push("thead_open", "thead", 1);
  y.map = [e, e + 1];
  const F = u.push("tr_open", "tr", 1);
  F.map = [e, e + 1];
  for (let k = 0; k < f.length; k++) {
    const D = u.push("th_open", "th", 1);
    l[k] && (D.attrs = [["style", "text-align:" + l[k]]]);
    const v = u.push("inline", "", 0);
    v.content = f[k].trim(), v.children = [], u.push("th_close", "th", -1);
  }
  u.push("tr_close", "tr", -1), u.push("thead_close", "thead", -1);
  let m, g = 0;
  for (n = e + 2; n < r && !(u.sCount[n] < u.blkIndent); n++) {
    let k = !1;
    for (let v = 0, I = p.length; v < I; v++)
      if (p[v](u, n, r, !0)) {
        k = !0;
        break;
      }
    if (k || (a = Ju(u, n).trim(), !a) || u.sCount[n] - u.blkIndent >= 4 || (f = Ve(a), f.length && f[0] === "" && f.shift(), f.length && f[f.length - 1] === "" && f.pop(), g += d - f.length, g > _t))
      break;
    if (n === e + 2) {
      const v = u.push("tbody_open", "tbody", 1);
      v.map = m = [e + 2, 0];
    }
    const D = u.push("tr_open", "tr", 1);
    D.map = [n, n + 1];
    for (let v = 0; v < d; v++) {
      const I = u.push("td_open", "td", 1);
      l[v] && (I.attrs = [["style", "text-align:" + l[v]]]);
      const N = u.push("inline", "", 0);
      N.content = f[v] ? f[v].trim() : "", N.children = [], u.push("td_close", "td", -1);
    }
    u.push("tr_close", "tr", -1);
  }
  return m && (u.push("tbody_close", "tbody", -1), m[1] = n), u.push("table_close", "table", -1), C[1] = n, u.parentType = x, u.line = n, !0;
}
function kt(u, e, r) {
  if (u.sCount[e] - u.blkIndent < 4)
    return !1;
  let t = e + 1, n = t;
  for (; t < r; ) {
    if (u.isEmpty(t)) {
      t++;
      continue;
    }
    if (u.sCount[t] - u.blkIndent >= 4) {
      t++, n = t;
      continue;
    }
    break;
  }
  u.line = n;
  const c = u.push("code_block", "code", 0);
  return c.content = u.getLines(e, n, 4 + u.blkIndent, !1) + `
`, c.map = [e, u.line], !0;
}
function gt(u, e, r, t) {
  let n = u.bMarks[e] + u.tShift[e], c = u.eMarks[e];
  if (u.sCount[e] - u.blkIndent >= 4 || n + 3 > c)
    return !1;
  const o = u.src.charCodeAt(n);
  if (o !== 126 && o !== 96)
    return !1;
  let i = n;
  n = u.skipChars(n, o);
  let a = n - i;
  if (a < 3)
    return !1;
  const f = u.src.slice(i, n), l = u.src.slice(n, c);
  if (o === 96 && l.indexOf(String.fromCharCode(o)) >= 0)
    return !1;
  if (t)
    return !0;
  let d = e, x = !1;
  for (; d++, !(d >= r || (n = i = u.bMarks[d] + u.tShift[d], c = u.eMarks[d], n < c && u.sCount[d] < u.blkIndent)); )
    if (u.src.charCodeAt(n) === o && !(u.sCount[d] - u.blkIndent >= 4) && (n = u.skipChars(n, o), !(n - i < a) && (n = u.skipSpaces(n), !(n < c)))) {
      x = !0;
      break;
    }
  a = u.sCount[e], u.line = d + (x ? 1 : 0);
  const p = u.push("fence", "code", 0);
  return p.info = l, p.content = u.getLines(e + 1, d, a, !0), p.markup = f, p.map = [e, u.line], !0;
}
function Et(u, e, r, t) {
  let n = u.bMarks[e] + u.tShift[e], c = u.eMarks[e];
  const o = u.lineMax;
  if (u.sCount[e] - u.blkIndent >= 4 || u.src.charCodeAt(n) !== 62)
    return !1;
  if (t)
    return !0;
  const i = [], a = [], f = [], l = [], d = u.md.block.ruler.getRules("blockquote"), x = u.parentType;
  u.parentType = "blockquote";
  let p = !1, h;
  for (h = e; h < r; h++) {
    const g = u.sCount[h] < u.blkIndent;
    if (n = u.bMarks[h] + u.tShift[h], c = u.eMarks[h], n >= c)
      break;
    if (u.src.charCodeAt(n++) === 62 && !g) {
      let D = u.sCount[h] + 1, v, I;
      u.src.charCodeAt(n) === 32 ? (n++, D++, I = !1, v = !0) : u.src.charCodeAt(n) === 9 ? (v = !0, (u.bsCount[h] + D) % 4 === 3 ? (n++, D++, I = !1) : I = !0) : v = !1;
      let N = D;
      for (i.push(u.bMarks[h]), u.bMarks[h] = n; n < c; ) {
        const W = u.src.charCodeAt(n);
        if (R(W))
          W === 9 ? N += 4 - (N + u.bsCount[h] + (I ? 1 : 0)) % 4 : N++;
        else
          break;
        n++;
      }
      p = n >= c, a.push(u.bsCount[h]), u.bsCount[h] = u.sCount[h] + 1 + (v ? 1 : 0), f.push(u.sCount[h]), u.sCount[h] = N - D, l.push(u.tShift[h]), u.tShift[h] = n - u.bMarks[h];
      continue;
    }
    if (p)
      break;
    let k = !1;
    for (let D = 0, v = d.length; D < v; D++)
      if (d[D](u, h, r, !0)) {
        k = !0;
        break;
      }
    if (k) {
      u.lineMax = h, u.blkIndent !== 0 && (i.push(u.bMarks[h]), a.push(u.bsCount[h]), l.push(u.tShift[h]), f.push(u.sCount[h]), u.sCount[h] -= u.blkIndent);
      break;
    }
    i.push(u.bMarks[h]), a.push(u.bsCount[h]), l.push(u.tShift[h]), f.push(u.sCount[h]), u.sCount[h] = -1;
  }
  const C = u.blkIndent;
  u.blkIndent = 0;
  const y = u.push("blockquote_open", "blockquote", 1);
  y.markup = ">";
  const F = [e, 0];
  y.map = F, u.md.block.tokenize(u, e, h);
  const m = u.push("blockquote_close", "blockquote", -1);
  m.markup = ">", u.lineMax = o, u.parentType = x, F[1] = u.line;
  for (let g = 0; g < l.length; g++)
    u.bMarks[g + e] = i[g], u.tShift[g + e] = l[g], u.sCount[g + e] = f[g], u.bsCount[g + e] = a[g];
  return u.blkIndent = C, !0;
}
function Dt(u, e, r, t) {
  const n = u.eMarks[e];
  if (u.sCount[e] - u.blkIndent >= 4)
    return !1;
  let c = u.bMarks[e] + u.tShift[e];
  const o = u.src.charCodeAt(c++);
  if (o !== 42 && o !== 45 && o !== 95)
    return !1;
  let i = 1;
  for (; c < n; ) {
    const f = u.src.charCodeAt(c++);
    if (f !== o && !R(f))
      return !1;
    f === o && i++;
  }
  if (i < 3)
    return !1;
  if (t)
    return !0;
  u.line = e + 1;
  const a = u.push("hr", "hr", 0);
  return a.map = [e, u.line], a.markup = Array(i + 1).join(String.fromCharCode(o)), !0;
}
function Ge(u, e) {
  const r = u.eMarks[e];
  let t = u.bMarks[e] + u.tShift[e];
  const n = u.src.charCodeAt(t++);
  if (n !== 42 && n !== 45 && n !== 43)
    return -1;
  if (t < r) {
    const c = u.src.charCodeAt(t);
    if (!R(c))
      return -1;
  }
  return t;
}
function Ye(u, e) {
  const r = u.bMarks[e] + u.tShift[e], t = u.eMarks[e];
  let n = r;
  if (n + 1 >= t)
    return -1;
  let c = u.src.charCodeAt(n++);
  if (c < 48 || c > 57)
    return -1;
  for (; ; ) {
    if (n >= t)
      return -1;
    if (c = u.src.charCodeAt(n++), c >= 48 && c <= 57) {
      if (n - r >= 10)
        return -1;
      continue;
    }
    if (c === 41 || c === 46)
      break;
    return -1;
  }
  return n < t && (c = u.src.charCodeAt(n), !R(c)) ? -1 : n;
}
function Ct(u, e) {
  const r = u.level + 2;
  for (let t = e + 2, n = u.tokens.length - 2; t < n; t++)
    u.tokens[t].level === r && u.tokens[t].type === "paragraph_open" && (u.tokens[t + 2].hidden = !0, u.tokens[t].hidden = !0, t += 2);
}
function yt(u, e, r, t) {
  let n, c, o, i, a = e, f = !0;
  if (u.sCount[a] - u.blkIndent >= 4 || u.listIndent >= 0 && u.sCount[a] - u.listIndent >= 4 && u.sCount[a] < u.blkIndent)
    return !1;
  let l = !1;
  t && u.parentType === "paragraph" && u.sCount[a] >= u.blkIndent && (l = !0);
  let d, x, p;
  if ((p = Ye(u, a)) >= 0) {
    if (d = !0, o = u.bMarks[a] + u.tShift[a], x = Number(u.src.slice(o, p - 1)), l && x !== 1) return !1;
  } else if ((p = Ge(u, a)) >= 0)
    d = !1;
  else
    return !1;
  if (l && u.skipSpaces(p) >= u.eMarks[a])
    return !1;
  if (t)
    return !0;
  const h = u.src.charCodeAt(p - 1), C = u.tokens.length;
  d ? (i = u.push("ordered_list_open", "ol", 1), x !== 1 && (i.attrs = [["start", x]])) : i = u.push("bullet_list_open", "ul", 1);
  const y = [a, 0];
  i.map = y, i.markup = String.fromCharCode(h);
  let F = !1;
  const m = u.md.block.ruler.getRules("list"), g = u.parentType;
  for (u.parentType = "list"; a < r; ) {
    c = p, n = u.eMarks[a];
    const k = u.sCount[a] + p - (u.bMarks[a] + u.tShift[a]);
    let D = k;
    for (; c < n; ) {
      const U = u.src.charCodeAt(c);
      if (U === 9)
        D += 4 - (D + u.bsCount[a]) % 4;
      else if (U === 32)
        D++;
      else
        break;
      c++;
    }
    const v = c;
    let I;
    v >= n ? I = 1 : I = D - k, I > 4 && (I = 1);
    const N = k + I;
    i = u.push("list_item_open", "li", 1), i.markup = String.fromCharCode(h);
    const W = [a, 0];
    i.map = W, d && (i.info = u.src.slice(o, p - 1));
    const tu = u.tight, du = u.tShift[a], yu = u.sCount[a], $ = u.listIndent;
    if (u.listIndent = u.blkIndent, u.blkIndent = N, u.tight = !0, u.tShift[a] = v - u.bMarks[a], u.sCount[a] = D, v >= n && u.isEmpty(a + 1) ? u.line = Math.min(u.line + 2, r) : u.md.block.tokenize(u, a, r, !0), (!u.tight || F) && (f = !1), F = u.line - a > 1 && u.isEmpty(u.line - 1), u.blkIndent = u.listIndent, u.listIndent = $, u.tShift[a] = du, u.sCount[a] = yu, u.tight = tu, i = u.push("list_item_close", "li", -1), i.markup = String.fromCharCode(h), a = u.line, W[1] = a, a >= r || u.sCount[a] < u.blkIndent || u.sCount[a] - u.blkIndent >= 4)
      break;
    let G = !1;
    for (let U = 0, Au = m.length; U < Au; U++)
      if (m[U](u, a, r, !0)) {
        G = !0;
        break;
      }
    if (G)
      break;
    if (d) {
      if (p = Ye(u, a), p < 0)
        break;
      o = u.bMarks[a] + u.tShift[a];
    } else if (p = Ge(u, a), p < 0)
      break;
    if (h !== u.src.charCodeAt(p - 1))
      break;
  }
  return d ? i = u.push("ordered_list_close", "ol", -1) : i = u.push("bullet_list_close", "ul", -1), i.markup = String.fromCharCode(h), y[1] = a, u.line = a, u.parentType = g, f && Ct(u, C), !0;
}
function At(u, e, r, t) {
  let n = u.bMarks[e] + u.tShift[e], c = u.eMarks[e], o = e + 1;
  if (u.sCount[e] - u.blkIndent >= 4 || u.src.charCodeAt(n) !== 91)
    return !1;
  function i(m) {
    const g = u.lineMax;
    if (m >= g || u.isEmpty(m))
      return null;
    let k = !1;
    if (u.sCount[m] - u.blkIndent > 3 && (k = !0), u.sCount[m] < 0 && (k = !0), !k) {
      const I = u.md.block.ruler.getRules("reference"), N = u.parentType;
      u.parentType = "reference";
      let W = !1;
      for (let tu = 0, du = I.length; tu < du; tu++)
        if (I[tu](u, m, g, !0)) {
          W = !0;
          break;
        }
      if (u.parentType = N, W)
        return null;
    }
    const D = u.bMarks[m] + u.tShift[m], v = u.eMarks[m];
    return u.src.slice(D, v + 1);
  }
  let a = u.src.slice(n, c + 1);
  c = a.length;
  let f = -1;
  for (n = 1; n < c; n++) {
    const m = a.charCodeAt(n);
    if (m === 91)
      return !1;
    if (m === 93) {
      f = n;
      break;
    } else if (m === 10) {
      const g = i(o);
      g !== null && (a += g, c = a.length, o++);
    } else if (m === 92 && (n++, n < c && a.charCodeAt(n) === 10)) {
      const g = i(o);
      g !== null && (a += g, c = a.length, o++);
    }
  }
  if (f < 0 || a.charCodeAt(f + 1) !== 58)
    return !1;
  for (n = f + 2; n < c; n++) {
    const m = a.charCodeAt(n);
    if (m === 10) {
      const g = i(o);
      g !== null && (a += g, c = a.length, o++);
    } else if (!R(m)) break;
  }
  const l = u.md.helpers.parseLinkDestination(a, n, c);
  if (!l.ok)
    return !1;
  const d = u.md.normalizeLink(l.str);
  if (!u.md.validateLink(d))
    return !1;
  n = l.pos;
  const x = n, p = o, h = n;
  for (; n < c; n++) {
    const m = a.charCodeAt(n);
    if (m === 10) {
      const g = i(o);
      g !== null && (a += g, c = a.length, o++);
    } else if (!R(m)) break;
  }
  let C = u.md.helpers.parseLinkTitle(a, n, c);
  for (; C.can_continue; ) {
    const m = i(o);
    if (m === null) break;
    a += m, n = c, c = a.length, o++, C = u.md.helpers.parseLinkTitle(a, n, c, C);
  }
  let y;
  for (n < c && h !== n && C.ok ? (y = C.str, n = C.pos) : (y = "", n = x, o = p); n < c; ) {
    const m = a.charCodeAt(n);
    if (!R(m))
      break;
    n++;
  }
  if (n < c && a.charCodeAt(n) !== 10 && y)
    for (y = "", n = x, o = p; n < c; ) {
      const m = a.charCodeAt(n);
      if (!R(m))
        break;
      n++;
    }
  if (n < c && a.charCodeAt(n) !== 10)
    return !1;
  const F = Ou(a.slice(1, f));
  return F ? (t || (typeof u.env.references > "u" && (u.env.references = {}), typeof u.env.references[F] > "u" && (u.env.references[F] = { title: y, href: d }), u.line = o), !0) : !1;
}
const Ft = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], vt = "[a-zA-Z_:][a-zA-Z0-9:._-]*", wt = "[^\"'=<>`\\x00-\\x20]+", St = "'[^']*'", Tt = '"[^"]*"', Rt = "(?:" + wt + "|" + St + "|" + Tt + ")", Bt = "(?:\\s+" + vt + "(?:\\s*=\\s*" + Rt + ")?)", h0 = "<[A-Za-z][A-Za-z0-9\\-]*" + Bt + "*\\s*\\/?>", b0 = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", Pt = "<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->", It = "<[?][\\s\\S]*?[?]>", Mt = "<![A-Za-z][^>]*>", Ot = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", zt = new RegExp("^(?:" + h0 + "|" + b0 + "|" + Pt + "|" + It + "|" + Mt + "|" + Ot + ")"), qt = new RegExp("^(?:" + h0 + "|" + b0 + ")"), ou = [
  [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
  [/^<!--/, /-->/, !0],
  [/^<\?/, /\?>/, !0],
  [/^<![A-Z]/, />/, !0],
  [/^<!\[CDATA\[/, /\]\]>/, !0],
  [new RegExp("^</?(" + Ft.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
  [new RegExp(qt.source + "\\s*$"), /^$/, !1]
];
function Lt(u, e, r, t) {
  let n = u.bMarks[e] + u.tShift[e], c = u.eMarks[e];
  if (u.sCount[e] - u.blkIndent >= 4 || !u.md.options.html || u.src.charCodeAt(n) !== 60)
    return !1;
  let o = u.src.slice(n, c), i = 0;
  for (; i < ou.length && !ou[i][0].test(o); i++)
    ;
  if (i === ou.length)
    return !1;
  if (t)
    return ou[i][2];
  let a = e + 1;
  if (!ou[i][1].test(o)) {
    for (; a < r && !(u.sCount[a] < u.blkIndent); a++)
      if (n = u.bMarks[a] + u.tShift[a], c = u.eMarks[a], o = u.src.slice(n, c), ou[i][1].test(o)) {
        o.length !== 0 && a++;
        break;
      }
  }
  u.line = a;
  const f = u.push("html_block", "", 0);
  return f.map = [e, a], f.content = u.getLines(e, a, u.blkIndent, !0), !0;
}
function Nt(u, e, r, t) {
  let n = u.bMarks[e] + u.tShift[e], c = u.eMarks[e];
  if (u.sCount[e] - u.blkIndent >= 4)
    return !1;
  let o = u.src.charCodeAt(n);
  if (o !== 35 || n >= c)
    return !1;
  let i = 1;
  for (o = u.src.charCodeAt(++n); o === 35 && n < c && i <= 6; )
    i++, o = u.src.charCodeAt(++n);
  if (i > 6 || n < c && !R(o))
    return !1;
  if (t)
    return !0;
  c = u.skipSpacesBack(c, n);
  const a = u.skipCharsBack(c, 35, n);
  a > n && R(u.src.charCodeAt(a - 1)) && (c = a), u.line = e + 1;
  const f = u.push("heading_open", "h" + String(i), 1);
  f.markup = "########".slice(0, i), f.map = [e, u.line];
  const l = u.push("inline", "", 0);
  l.content = u.src.slice(n, c).trim(), l.map = [e, u.line], l.children = [];
  const d = u.push("heading_close", "h" + String(i), -1);
  return d.markup = "########".slice(0, i), !0;
}
function jt(u, e, r) {
  const t = u.md.block.ruler.getRules("paragraph");
  if (u.sCount[e] - u.blkIndent >= 4)
    return !1;
  const n = u.parentType;
  u.parentType = "paragraph";
  let c = 0, o, i = e + 1;
  for (; i < r && !u.isEmpty(i); i++) {
    if (u.sCount[i] - u.blkIndent > 3)
      continue;
    if (u.sCount[i] >= u.blkIndent) {
      let p = u.bMarks[i] + u.tShift[i];
      const h = u.eMarks[i];
      if (p < h && (o = u.src.charCodeAt(p), (o === 45 || o === 61) && (p = u.skipChars(p, o), p = u.skipSpaces(p), p >= h))) {
        c = o === 61 ? 1 : 2;
        break;
      }
    }
    if (u.sCount[i] < 0)
      continue;
    let x = !1;
    for (let p = 0, h = t.length; p < h; p++)
      if (t[p](u, i, r, !0)) {
        x = !0;
        break;
      }
    if (x)
      break;
  }
  if (!c)
    return !1;
  const a = u.getLines(e, i, u.blkIndent, !1).trim();
  u.line = i + 1;
  const f = u.push("heading_open", "h" + String(c), 1);
  f.markup = String.fromCharCode(o), f.map = [e, u.line];
  const l = u.push("inline", "", 0);
  l.content = a, l.map = [e, u.line - 1], l.children = [];
  const d = u.push("heading_close", "h" + String(c), -1);
  return d.markup = String.fromCharCode(o), u.parentType = n, !0;
}
function $t(u, e, r) {
  const t = u.md.block.ruler.getRules("paragraph"), n = u.parentType;
  let c = e + 1;
  for (u.parentType = "paragraph"; c < r && !u.isEmpty(c); c++) {
    if (u.sCount[c] - u.blkIndent > 3 || u.sCount[c] < 0)
      continue;
    let f = !1;
    for (let l = 0, d = t.length; l < d; l++)
      if (t[l](u, c, r, !0)) {
        f = !0;
        break;
      }
    if (f)
      break;
  }
  const o = u.getLines(e, c, u.blkIndent, !1).trim();
  u.line = c;
  const i = u.push("paragraph_open", "p", 1);
  i.map = [e, u.line];
  const a = u.push("inline", "", 0);
  return a.content = o, a.map = [e, u.line], a.children = [], u.push("paragraph_close", "p", -1), u.parentType = n, !0;
}
const Ru = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  ["table", mt, ["paragraph", "reference"]],
  ["code", kt],
  ["fence", gt, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", Et, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", Dt, ["paragraph", "reference", "blockquote", "list"]],
  ["list", yt, ["paragraph", "reference", "blockquote"]],
  ["reference", At],
  ["html_block", Lt, ["paragraph", "reference", "blockquote"]],
  ["heading", Nt, ["paragraph", "reference", "blockquote"]],
  ["lheading", jt],
  ["paragraph", $t]
];
function zu() {
  this.ruler = new L();
  for (let u = 0; u < Ru.length; u++)
    this.ruler.push(Ru[u][0], Ru[u][1], { alt: (Ru[u][2] || []).slice() });
}
zu.prototype.tokenize = function(u, e, r) {
  const t = this.ruler.getRules(""), n = t.length, c = u.md.options.maxNesting;
  let o = e, i = !1;
  for (; o < r && (u.line = o = u.skipEmptyLines(o), !(o >= r || u.sCount[o] < u.blkIndent)); ) {
    if (u.level >= c) {
      u.line = r;
      break;
    }
    const a = u.line;
    let f = !1;
    for (let l = 0; l < n; l++)
      if (f = t[l](u, o, r, !1), f) {
        if (a >= u.line)
          throw new Error("block rule didn't increment state.line");
        break;
      }
    if (!f) throw new Error("none of the block rules matched");
    u.tight = !i, u.isEmpty(u.line - 1) && (i = !0), o = u.line, o < r && u.isEmpty(o) && (i = !0, o++, u.line = o);
  }
};
zu.prototype.parse = function(u, e, r, t) {
  if (!u)
    return;
  const n = new this.State(u, e, r, t);
  this.tokenize(n, n.line, n.lineMax);
};
zu.prototype.State = X;
function Du(u, e, r, t) {
  this.src = u, this.env = r, this.md = e, this.tokens = t, this.tokens_meta = Array(t.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1, this.linkLevel = 0;
}
Du.prototype.pushPending = function() {
  const u = new V("text", "", 0);
  return u.content = this.pending, u.level = this.pendingLevel, this.tokens.push(u), this.pending = "", u;
};
Du.prototype.push = function(u, e, r) {
  this.pending && this.pushPending();
  const t = new V(u, e, r);
  let n = null;
  return r < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), t.level = this.level, r > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], n = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(t), this.tokens_meta.push(n), t;
};
Du.prototype.scanDelims = function(u, e) {
  const r = this.posMax, t = this.src.charCodeAt(u), n = u > 0 ? this.src.charCodeAt(u - 1) : 32;
  let c = u;
  for (; c < r && this.src.charCodeAt(c) === t; )
    c++;
  const o = c - u, i = c < r ? this.src.charCodeAt(c) : 32, a = ku(n) || mu(String.fromCharCode(n)), f = ku(i) || mu(String.fromCharCode(i)), l = _u(n), d = _u(i), x = !d && (!f || l || a), p = !l && (!a || d || f);
  return { can_open: x && (e || !p || a), can_close: p && (e || !x || f), length: o };
};
Du.prototype.Token = V;
function Ut(u) {
  switch (u) {
    case 10:
    case 33:
    case 35:
    case 36:
    case 37:
    case 38:
    case 42:
    case 43:
    case 45:
    case 58:
    case 60:
    case 61:
    case 62:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 125:
    case 126:
      return !0;
    default:
      return !1;
  }
}
function Ht(u, e) {
  let r = u.pos;
  for (; r < u.posMax && !Ut(u.src.charCodeAt(r)); )
    r++;
  return r === u.pos ? !1 : (e || (u.pending += u.src.slice(u.pos, r)), u.pos = r, !0);
}
const Zt = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
function Wt(u, e) {
  if (!u.md.options.linkify || u.linkLevel > 0) return !1;
  const r = u.pos, t = u.posMax;
  if (r + 3 > t || u.src.charCodeAt(r) !== 58 || u.src.charCodeAt(r + 1) !== 47 || u.src.charCodeAt(r + 2) !== 47) return !1;
  const n = u.pending.match(Zt);
  if (!n) return !1;
  const c = n[1], o = u.md.linkify.matchAtStart(u.src.slice(r - c.length));
  if (!o) return !1;
  let i = o.url;
  if (i.length <= c.length) return !1;
  i = i.replace(/\*+$/, "");
  const a = u.md.normalizeLink(i);
  if (!u.md.validateLink(a)) return !1;
  if (!e) {
    u.pending = u.pending.slice(0, -c.length);
    const f = u.push("link_open", "a", 1);
    f.attrs = [["href", a]], f.markup = "linkify", f.info = "auto";
    const l = u.push("text", "", 0);
    l.content = u.md.normalizeLinkText(i);
    const d = u.push("link_close", "a", -1);
    d.markup = "linkify", d.info = "auto";
  }
  return u.pos += i.length - c.length, !0;
}
function Vt(u, e) {
  let r = u.pos;
  if (u.src.charCodeAt(r) !== 10)
    return !1;
  const t = u.pending.length - 1, n = u.posMax;
  if (!e)
    if (t >= 0 && u.pending.charCodeAt(t) === 32)
      if (t >= 1 && u.pending.charCodeAt(t - 1) === 32) {
        let c = t - 1;
        for (; c >= 1 && u.pending.charCodeAt(c - 1) === 32; ) c--;
        u.pending = u.pending.slice(0, c), u.push("hardbreak", "br", 0);
      } else
        u.pending = u.pending.slice(0, -1), u.push("softbreak", "br", 0);
    else
      u.push("softbreak", "br", 0);
  for (r++; r < n && R(u.src.charCodeAt(r)); )
    r++;
  return u.pos = r, !0;
}
const le = [];
for (let u = 0; u < 256; u++)
  le.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(u) {
  le[u.charCodeAt(0)] = 1;
});
function Gt(u, e) {
  let r = u.pos;
  const t = u.posMax;
  if (u.src.charCodeAt(r) !== 92 || (r++, r >= t)) return !1;
  let n = u.src.charCodeAt(r);
  if (n === 10) {
    for (e || u.push("hardbreak", "br", 0), r++; r < t && (n = u.src.charCodeAt(r), !!R(n)); )
      r++;
    return u.pos = r, !0;
  }
  let c = u.src[r];
  if (n >= 55296 && n <= 56319 && r + 1 < t) {
    const i = u.src.charCodeAt(r + 1);
    i >= 56320 && i <= 57343 && (c += u.src[r + 1], r++);
  }
  const o = "\\" + c;
  if (!e) {
    const i = u.push("text_special", "", 0);
    n < 256 && le[n] !== 0 ? i.content = c : i.content = o, i.markup = o, i.info = "escape";
  }
  return u.pos = r + 1, !0;
}
function Yt(u, e) {
  let r = u.pos;
  if (u.src.charCodeAt(r) !== 96)
    return !1;
  const n = r;
  r++;
  const c = u.posMax;
  for (; r < c && u.src.charCodeAt(r) === 96; )
    r++;
  const o = u.src.slice(n, r), i = o.length;
  if (u.backticksScanned && (u.backticks[i] || 0) <= n)
    return e || (u.pending += o), u.pos += i, !0;
  let a = r, f;
  for (; (f = u.src.indexOf("`", a)) !== -1; ) {
    for (a = f + 1; a < c && u.src.charCodeAt(a) === 96; )
      a++;
    const l = a - f;
    if (l === i) {
      if (!e) {
        const d = u.push("code_inline", "code", 0);
        d.markup = o, d.content = u.src.slice(r, f).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
      }
      return u.pos = a, !0;
    }
    u.backticks[l] = f;
  }
  return u.backticksScanned = !0, e || (u.pending += o), u.pos += i, !0;
}
function Jt(u, e) {
  const r = u.pos, t = u.src.charCodeAt(r);
  if (e || t !== 126)
    return !1;
  const n = u.scanDelims(u.pos, !0);
  let c = n.length;
  const o = String.fromCharCode(t);
  if (c < 2)
    return !1;
  let i;
  c % 2 && (i = u.push("text", "", 0), i.content = o, c--);
  for (let a = 0; a < c; a += 2)
    i = u.push("text", "", 0), i.content = o + o, u.delimiters.push({
      marker: t,
      length: 0,
      // disable "rule of 3" length checks meant for emphasis
      token: u.tokens.length - 1,
      end: -1,
      open: n.can_open,
      close: n.can_close
    });
  return u.pos += n.length, !0;
}
function Je(u, e) {
  let r;
  const t = [], n = e.length;
  for (let c = 0; c < n; c++) {
    const o = e[c];
    if (o.marker !== 126 || o.end === -1)
      continue;
    const i = e[o.end];
    r = u.tokens[o.token], r.type = "s_open", r.tag = "s", r.nesting = 1, r.markup = "~~", r.content = "", r = u.tokens[i.token], r.type = "s_close", r.tag = "s", r.nesting = -1, r.markup = "~~", r.content = "", u.tokens[i.token - 1].type === "text" && u.tokens[i.token - 1].content === "~" && t.push(i.token - 1);
  }
  for (; t.length; ) {
    const c = t.pop();
    let o = c + 1;
    for (; o < u.tokens.length && u.tokens[o].type === "s_close"; )
      o++;
    o--, c !== o && (r = u.tokens[o], u.tokens[o] = u.tokens[c], u.tokens[c] = r);
  }
}
function Qt(u) {
  const e = u.tokens_meta, r = u.tokens_meta.length;
  Je(u, u.delimiters);
  for (let t = 0; t < r; t++)
    e[t] && e[t].delimiters && Je(u, e[t].delimiters);
}
const p0 = {
  tokenize: Jt,
  postProcess: Qt
};
function Xt(u, e) {
  const r = u.pos, t = u.src.charCodeAt(r);
  if (e || t !== 95 && t !== 42)
    return !1;
  const n = u.scanDelims(u.pos, t === 42);
  for (let c = 0; c < n.length; c++) {
    const o = u.push("text", "", 0);
    o.content = String.fromCharCode(t), u.delimiters.push({
      // Char code of the starting marker (number).
      //
      marker: t,
      // Total length of these series of delimiters.
      //
      length: n.length,
      // A position of the token this delimiter corresponds to.
      //
      token: u.tokens.length - 1,
      // If this delimiter is matched as a valid opener, `end` will be
      // equal to its position, otherwise it's `-1`.
      //
      end: -1,
      // Boolean flags that determine if this delimiter could open or close
      // an emphasis.
      //
      open: n.can_open,
      close: n.can_close
    });
  }
  return u.pos += n.length, !0;
}
function Qe(u, e) {
  const r = e.length;
  for (let t = r - 1; t >= 0; t--) {
    const n = e[t];
    if (n.marker !== 95 && n.marker !== 42 || n.end === -1)
      continue;
    const c = e[n.end], o = t > 0 && e[t - 1].end === n.end + 1 && // check that first two markers match and adjacent
    e[t - 1].marker === n.marker && e[t - 1].token === n.token - 1 && // check that last two markers are adjacent (we can safely assume they match)
    e[n.end + 1].token === c.token + 1, i = String.fromCharCode(n.marker), a = u.tokens[n.token];
    a.type = o ? "strong_open" : "em_open", a.tag = o ? "strong" : "em", a.nesting = 1, a.markup = o ? i + i : i, a.content = "";
    const f = u.tokens[c.token];
    f.type = o ? "strong_close" : "em_close", f.tag = o ? "strong" : "em", f.nesting = -1, f.markup = o ? i + i : i, f.content = "", o && (u.tokens[e[t - 1].token].content = "", u.tokens[e[n.end + 1].token].content = "", t--);
  }
}
function Kt(u) {
  const e = u.tokens_meta, r = u.tokens_meta.length;
  Qe(u, u.delimiters);
  for (let t = 0; t < r; t++)
    e[t] && e[t].delimiters && Qe(u, e[t].delimiters);
}
const x0 = {
  tokenize: Xt,
  postProcess: Kt
};
function un(u, e) {
  let r, t, n, c, o = "", i = "", a = u.pos, f = !0;
  if (u.src.charCodeAt(u.pos) !== 91)
    return !1;
  const l = u.pos, d = u.posMax, x = u.pos + 1, p = u.md.helpers.parseLinkLabel(u, u.pos, !0);
  if (p < 0)
    return !1;
  let h = p + 1;
  if (h < d && u.src.charCodeAt(h) === 40) {
    for (f = !1, h++; h < d && (r = u.src.charCodeAt(h), !(!R(r) && r !== 10)); h++)
      ;
    if (h >= d)
      return !1;
    if (a = h, n = u.md.helpers.parseLinkDestination(u.src, h, u.posMax), n.ok) {
      for (o = u.md.normalizeLink(n.str), u.md.validateLink(o) ? h = n.pos : o = "", a = h; h < d && (r = u.src.charCodeAt(h), !(!R(r) && r !== 10)); h++)
        ;
      if (n = u.md.helpers.parseLinkTitle(u.src, h, u.posMax), h < d && a !== h && n.ok)
        for (i = n.str, h = n.pos; h < d && (r = u.src.charCodeAt(h), !(!R(r) && r !== 10)); h++)
          ;
    }
    (h >= d || u.src.charCodeAt(h) !== 41) && (f = !0), h++;
  }
  if (f) {
    if (typeof u.env.references > "u")
      return !1;
    if (h < d && u.src.charCodeAt(h) === 91 ? (a = h + 1, h = u.md.helpers.parseLinkLabel(u, h), h >= 0 ? t = u.src.slice(a, h++) : h = p + 1) : h = p + 1, t || (t = u.src.slice(x, p)), c = u.env.references[Ou(t)], !c)
      return u.pos = l, !1;
    o = c.href, i = c.title;
  }
  if (!e) {
    u.pos = x, u.posMax = p;
    const C = u.push("link_open", "a", 1), y = [["href", o]];
    C.attrs = y, i && y.push(["title", i]), u.linkLevel++, u.md.inline.tokenize(u), u.linkLevel--, u.push("link_close", "a", -1);
  }
  return u.pos = h, u.posMax = d, !0;
}
function en(u, e) {
  let r, t, n, c, o, i, a, f, l = "";
  const d = u.pos, x = u.posMax;
  if (u.src.charCodeAt(u.pos) !== 33 || u.src.charCodeAt(u.pos + 1) !== 91)
    return !1;
  const p = u.pos + 2, h = u.md.helpers.parseLinkLabel(u, u.pos + 1, !1);
  if (h < 0)
    return !1;
  if (c = h + 1, c < x && u.src.charCodeAt(c) === 40) {
    for (c++; c < x && (r = u.src.charCodeAt(c), !(!R(r) && r !== 10)); c++)
      ;
    if (c >= x)
      return !1;
    for (f = c, i = u.md.helpers.parseLinkDestination(u.src, c, u.posMax), i.ok && (l = u.md.normalizeLink(i.str), u.md.validateLink(l) ? c = i.pos : l = ""), f = c; c < x && (r = u.src.charCodeAt(c), !(!R(r) && r !== 10)); c++)
      ;
    if (i = u.md.helpers.parseLinkTitle(u.src, c, u.posMax), c < x && f !== c && i.ok)
      for (a = i.str, c = i.pos; c < x && (r = u.src.charCodeAt(c), !(!R(r) && r !== 10)); c++)
        ;
    else
      a = "";
    if (c >= x || u.src.charCodeAt(c) !== 41)
      return u.pos = d, !1;
    c++;
  } else {
    if (typeof u.env.references > "u")
      return !1;
    if (c < x && u.src.charCodeAt(c) === 91 ? (f = c + 1, c = u.md.helpers.parseLinkLabel(u, c), c >= 0 ? n = u.src.slice(f, c++) : c = h + 1) : c = h + 1, n || (n = u.src.slice(p, h)), o = u.env.references[Ou(n)], !o)
      return u.pos = d, !1;
    l = o.href, a = o.title;
  }
  if (!e) {
    t = u.src.slice(p, h);
    const C = [];
    u.md.inline.parse(
      t,
      u.md,
      u.env,
      C
    );
    const y = u.push("image", "img", 0), F = [["src", l], ["alt", ""]];
    y.attrs = F, y.children = C, y.content = t, a && F.push(["title", a]);
  }
  return u.pos = c, u.posMax = x, !0;
}
const rn = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, tn = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;
function nn(u, e) {
  let r = u.pos;
  if (u.src.charCodeAt(r) !== 60)
    return !1;
  const t = u.pos, n = u.posMax;
  for (; ; ) {
    if (++r >= n) return !1;
    const o = u.src.charCodeAt(r);
    if (o === 60) return !1;
    if (o === 62) break;
  }
  const c = u.src.slice(t + 1, r);
  if (tn.test(c)) {
    const o = u.md.normalizeLink(c);
    if (!u.md.validateLink(o))
      return !1;
    if (!e) {
      const i = u.push("link_open", "a", 1);
      i.attrs = [["href", o]], i.markup = "autolink", i.info = "auto";
      const a = u.push("text", "", 0);
      a.content = u.md.normalizeLinkText(c);
      const f = u.push("link_close", "a", -1);
      f.markup = "autolink", f.info = "auto";
    }
    return u.pos += c.length + 2, !0;
  }
  if (rn.test(c)) {
    const o = u.md.normalizeLink("mailto:" + c);
    if (!u.md.validateLink(o))
      return !1;
    if (!e) {
      const i = u.push("link_open", "a", 1);
      i.attrs = [["href", o]], i.markup = "autolink", i.info = "auto";
      const a = u.push("text", "", 0);
      a.content = u.md.normalizeLinkText(c);
      const f = u.push("link_close", "a", -1);
      f.markup = "autolink", f.info = "auto";
    }
    return u.pos += c.length + 2, !0;
  }
  return !1;
}
function cn(u) {
  return /^<a[>\s]/i.test(u);
}
function on(u) {
  return /^<\/a\s*>/i.test(u);
}
function an(u) {
  const e = u | 32;
  return e >= 97 && e <= 122;
}
function sn(u, e) {
  if (!u.md.options.html)
    return !1;
  const r = u.posMax, t = u.pos;
  if (u.src.charCodeAt(t) !== 60 || t + 2 >= r)
    return !1;
  const n = u.src.charCodeAt(t + 1);
  if (n !== 33 && n !== 63 && n !== 47 && !an(n))
    return !1;
  const c = u.src.slice(t).match(zt);
  if (!c)
    return !1;
  if (!e) {
    const o = u.push("html_inline", "", 0);
    o.content = c[0], cn(o.content) && u.linkLevel++, on(o.content) && u.linkLevel--;
  }
  return u.pos += c[0].length, !0;
}
const fn = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, ln = /^&([a-z][a-z0-9]{1,31});/i;
function dn(u, e) {
  const r = u.pos, t = u.posMax;
  if (u.src.charCodeAt(r) !== 38 || r + 1 >= t) return !1;
  if (u.src.charCodeAt(r + 1) === 35) {
    const c = u.src.slice(r).match(fn);
    if (c) {
      if (!e) {
        const o = c[1][0].toLowerCase() === "x" ? parseInt(c[1].slice(1), 16) : parseInt(c[1], 10), i = u.push("text_special", "", 0);
        i.content = se(o) ? Pu(o) : Pu(65533), i.markup = c[0], i.info = "entity";
      }
      return u.pos += c[0].length, !0;
    }
  } else {
    const c = u.src.slice(r).match(ln);
    if (c) {
      const o = a0(c[0]);
      if (o !== c[0]) {
        if (!e) {
          const i = u.push("text_special", "", 0);
          i.content = o, i.markup = c[0], i.info = "entity";
        }
        return u.pos += c[0].length, !0;
      }
    }
  }
  return !1;
}
function Xe(u) {
  const e = {}, r = u.length;
  if (!r) return;
  let t = 0, n = -2;
  const c = [];
  for (let o = 0; o < r; o++) {
    const i = u[o];
    if (c.push(0), (u[t].marker !== i.marker || n !== i.token - 1) && (t = o), n = i.token, i.length = i.length || 0, !i.close) continue;
    e.hasOwnProperty(i.marker) || (e[i.marker] = [-1, -1, -1, -1, -1, -1]);
    const a = e[i.marker][(i.open ? 3 : 0) + i.length % 3];
    let f = t - c[t] - 1, l = f;
    for (; f > a; f -= c[f] + 1) {
      const d = u[f];
      if (d.marker === i.marker && d.open && d.end < 0) {
        let x = !1;
        if ((d.close || i.open) && (d.length + i.length) % 3 === 0 && (d.length % 3 !== 0 || i.length % 3 !== 0) && (x = !0), !x) {
          const p = f > 0 && !u[f - 1].open ? c[f - 1] + 1 : 0;
          c[o] = o - f + p, c[f] = p, i.open = !1, d.end = o, d.close = !1, l = -1, n = -2;
          break;
        }
      }
    }
    l !== -1 && (e[i.marker][(i.open ? 3 : 0) + (i.length || 0) % 3] = l);
  }
}
function hn(u) {
  const e = u.tokens_meta, r = u.tokens_meta.length;
  Xe(u.delimiters);
  for (let t = 0; t < r; t++)
    e[t] && e[t].delimiters && Xe(e[t].delimiters);
}
function bn(u) {
  let e, r, t = 0;
  const n = u.tokens, c = u.tokens.length;
  for (e = r = 0; e < c; e++)
    n[e].nesting < 0 && t--, n[e].level = t, n[e].nesting > 0 && t++, n[e].type === "text" && e + 1 < c && n[e + 1].type === "text" ? n[e + 1].content = n[e].content + n[e + 1].content : (e !== r && (n[r] = n[e]), r++);
  e !== r && (n.length = r);
}
const Qu = [
  ["text", Ht],
  ["linkify", Wt],
  ["newline", Vt],
  ["escape", Gt],
  ["backticks", Yt],
  ["strikethrough", p0.tokenize],
  ["emphasis", x0.tokenize],
  ["link", un],
  ["image", en],
  ["autolink", nn],
  ["html_inline", sn],
  ["entity", dn]
], Xu = [
  ["balance_pairs", hn],
  ["strikethrough", p0.postProcess],
  ["emphasis", x0.postProcess],
  // rules for pairs separate '**' into its own text tokens, which may be left unused,
  // rule below merges unused segments back with the rest of the text
  ["fragments_join", bn]
];
function Cu() {
  this.ruler = new L();
  for (let u = 0; u < Qu.length; u++)
    this.ruler.push(Qu[u][0], Qu[u][1]);
  this.ruler2 = new L();
  for (let u = 0; u < Xu.length; u++)
    this.ruler2.push(Xu[u][0], Xu[u][1]);
}
Cu.prototype.skipToken = function(u) {
  const e = u.pos, r = this.ruler.getRules(""), t = r.length, n = u.md.options.maxNesting, c = u.cache;
  if (typeof c[e] < "u") {
    u.pos = c[e];
    return;
  }
  let o = !1;
  if (u.level < n) {
    for (let i = 0; i < t; i++)
      if (u.level++, o = r[i](u, !0), u.level--, o) {
        if (e >= u.pos)
          throw new Error("inline rule didn't increment state.pos");
        break;
      }
  } else
    u.pos = u.posMax;
  o || u.pos++, c[e] = u.pos;
};
Cu.prototype.tokenize = function(u) {
  const e = this.ruler.getRules(""), r = e.length, t = u.posMax, n = u.md.options.maxNesting;
  for (; u.pos < t; ) {
    const c = u.pos;
    let o = !1;
    if (u.level < n) {
      for (let i = 0; i < r; i++)
        if (o = e[i](u, !1), o) {
          if (c >= u.pos)
            throw new Error("inline rule didn't increment state.pos");
          break;
        }
    }
    if (o) {
      if (u.pos >= t)
        break;
      continue;
    }
    u.pending += u.src[u.pos++];
  }
  u.pending && u.pushPending();
};
Cu.prototype.parse = function(u, e, r, t) {
  const n = new this.State(u, e, r, t);
  this.tokenize(n);
  const c = this.ruler2.getRules(""), o = c.length;
  for (let i = 0; i < o; i++)
    c[i](n);
};
Cu.prototype.State = Du;
function pn(u) {
  const e = {};
  u = u || {}, e.src_Any = t0.source, e.src_Cc = n0.source, e.src_Z = i0.source, e.src_P = oe.source, e.src_ZPCc = [e.src_Z, e.src_P, e.src_Cc].join("|"), e.src_ZCc = [e.src_Z, e.src_Cc].join("|");
  const r = "[><｜]";
  return e.src_pseudo_letter = "(?:(?!" + r + "|" + e.src_ZPCc + ")" + e.src_Any + ")", e.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", e.src_auth = "(?:(?:(?!" + e.src_ZCc + "|[@/\\[\\]()]).)+@)?", e.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", e.src_host_terminator = "(?=$|" + r + "|" + e.src_ZPCc + ")(?!" + (u["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + e.src_ZPCc + "))", e.src_path = "(?:[/?#](?:(?!" + e.src_ZCc + "|" + r + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + e.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + e.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + e.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + e.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + e.src_ZCc + "|[']).)+\\'|\\'(?=" + e.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + e.src_ZCc + "|[.]|$)|" + (u["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + // allow `,,,` in paths
  ",(?!" + e.src_ZCc + "|$)|;(?!" + e.src_ZCc + "|$)|\\!+(?!" + e.src_ZCc + "|[!]|$)|\\?(?!" + e.src_ZCc + "|[?]|$))+|\\/)?", e.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', e.src_xn = "xn--[a-z0-9\\-]{1,59}", e.src_domain_root = // Allow letters & digits (http://test1)
  "(?:" + e.src_xn + "|" + e.src_pseudo_letter + "{1,63})", e.src_domain = "(?:" + e.src_xn + "|(?:" + e.src_pseudo_letter + ")|(?:" + e.src_pseudo_letter + "(?:-|" + e.src_pseudo_letter + "){0,61}" + e.src_pseudo_letter + "))", e.src_host = "(?:(?:(?:(?:" + e.src_domain + ")\\.)*" + e.src_domain + "))", e.tpl_host_fuzzy = "(?:" + e.src_ip4 + "|(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%)))", e.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%))", e.src_host_strict = e.src_host + e.src_host_terminator, e.tpl_host_fuzzy_strict = e.tpl_host_fuzzy + e.src_host_terminator, e.src_host_port_strict = e.src_host + e.src_port + e.src_host_terminator, e.tpl_host_port_fuzzy_strict = e.tpl_host_fuzzy + e.src_port + e.src_host_terminator, e.tpl_host_port_no_ip_fuzzy_strict = e.tpl_host_no_ip_fuzzy + e.src_port + e.src_host_terminator, e.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + e.src_ZPCc + "|>|$))", e.tpl_email_fuzzy = "(^|" + r + '|"|\\(|' + e.src_ZCc + ")(" + e.src_email_name + "@" + e.tpl_host_fuzzy_strict + ")", e.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + e.src_ZPCc + "))((?![$+<=>^`|｜])" + e.tpl_host_port_fuzzy_strict + e.src_path + ")", e.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + e.src_ZPCc + "))((?![$+<=>^`|｜])" + e.tpl_host_port_no_ip_fuzzy_strict + e.src_path + ")", e;
}
function te(u) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(r) {
    r && Object.keys(r).forEach(function(t) {
      u[t] = r[t];
    });
  }), u;
}
function qu(u) {
  return Object.prototype.toString.call(u);
}
function xn(u) {
  return qu(u) === "[object String]";
}
function _n(u) {
  return qu(u) === "[object Object]";
}
function mn(u) {
  return qu(u) === "[object RegExp]";
}
function Ke(u) {
  return qu(u) === "[object Function]";
}
function kn(u) {
  return u.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
const _0 = {
  fuzzyLink: !0,
  fuzzyEmail: !0,
  fuzzyIP: !1
};
function gn(u) {
  return Object.keys(u || {}).reduce(function(e, r) {
    return e || _0.hasOwnProperty(r);
  }, !1);
}
const En = {
  "http:": {
    validate: function(u, e, r) {
      const t = u.slice(e);
      return r.re.http || (r.re.http = new RegExp(
        "^\\/\\/" + r.re.src_auth + r.re.src_host_port_strict + r.re.src_path,
        "i"
      )), r.re.http.test(t) ? t.match(r.re.http)[0].length : 0;
    }
  },
  "https:": "http:",
  "ftp:": "http:",
  "//": {
    validate: function(u, e, r) {
      const t = u.slice(e);
      return r.re.no_http || (r.re.no_http = new RegExp(
        "^" + r.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
        // with code comments
        "(?:localhost|(?:(?:" + r.re.src_domain + ")\\.)+" + r.re.src_domain_root + ")" + r.re.src_port + r.re.src_host_terminator + r.re.src_path,
        "i"
      )), r.re.no_http.test(t) ? e >= 3 && u[e - 3] === ":" || e >= 3 && u[e - 3] === "/" ? 0 : t.match(r.re.no_http)[0].length : 0;
    }
  },
  "mailto:": {
    validate: function(u, e, r) {
      const t = u.slice(e);
      return r.re.mailto || (r.re.mailto = new RegExp(
        "^" + r.re.src_email_name + "@" + r.re.src_host_strict,
        "i"
      )), r.re.mailto.test(t) ? t.match(r.re.mailto)[0].length : 0;
    }
  }
}, Dn = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", Cn = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
function yn(u) {
  u.__index__ = -1, u.__text_cache__ = "";
}
function An(u) {
  return function(e, r) {
    const t = e.slice(r);
    return u.test(t) ? t.match(u)[0].length : 0;
  };
}
function u0() {
  return function(u, e) {
    e.normalize(u);
  };
}
function Iu(u) {
  const e = u.re = pn(u.__opts__), r = u.__tlds__.slice();
  u.onCompile(), u.__tlds_replaced__ || r.push(Dn), r.push(e.src_xn), e.src_tlds = r.join("|");
  function t(i) {
    return i.replace("%TLDS%", e.src_tlds);
  }
  e.email_fuzzy = RegExp(t(e.tpl_email_fuzzy), "i"), e.link_fuzzy = RegExp(t(e.tpl_link_fuzzy), "i"), e.link_no_ip_fuzzy = RegExp(t(e.tpl_link_no_ip_fuzzy), "i"), e.host_fuzzy_test = RegExp(t(e.tpl_host_fuzzy_test), "i");
  const n = [];
  u.__compiled__ = {};
  function c(i, a) {
    throw new Error('(LinkifyIt) Invalid schema "' + i + '": ' + a);
  }
  Object.keys(u.__schemas__).forEach(function(i) {
    const a = u.__schemas__[i];
    if (a === null)
      return;
    const f = { validate: null, link: null };
    if (u.__compiled__[i] = f, _n(a)) {
      mn(a.validate) ? f.validate = An(a.validate) : Ke(a.validate) ? f.validate = a.validate : c(i, a), Ke(a.normalize) ? f.normalize = a.normalize : a.normalize ? c(i, a) : f.normalize = u0();
      return;
    }
    if (xn(a)) {
      n.push(i);
      return;
    }
    c(i, a);
  }), n.forEach(function(i) {
    u.__compiled__[u.__schemas__[i]] && (u.__compiled__[i].validate = u.__compiled__[u.__schemas__[i]].validate, u.__compiled__[i].normalize = u.__compiled__[u.__schemas__[i]].normalize);
  }), u.__compiled__[""] = { validate: null, normalize: u0() };
  const o = Object.keys(u.__compiled__).filter(function(i) {
    return i.length > 0 && u.__compiled__[i];
  }).map(kn).join("|");
  u.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + e.src_ZPCc + "))(" + o + ")", "i"), u.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + e.src_ZPCc + "))(" + o + ")", "ig"), u.re.schema_at_start = RegExp("^" + u.re.schema_search.source, "i"), u.re.pretest = RegExp(
    "(" + u.re.schema_test.source + ")|(" + u.re.host_fuzzy_test.source + ")|@",
    "i"
  ), yn(u);
}
function Fn(u, e) {
  const r = u.__index__, t = u.__last_index__, n = u.__text_cache__.slice(r, t);
  this.schema = u.__schema__.toLowerCase(), this.index = r + e, this.lastIndex = t + e, this.raw = n, this.text = n, this.url = n;
}
function ne(u, e) {
  const r = new Fn(u, e);
  return u.__compiled__[r.schema].normalize(r, u), r;
}
function j(u, e) {
  if (!(this instanceof j))
    return new j(u, e);
  e || gn(u) && (e = u, u = {}), this.__opts__ = te({}, _0, e), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = te({}, En, u), this.__compiled__ = {}, this.__tlds__ = Cn, this.__tlds_replaced__ = !1, this.re = {}, Iu(this);
}
j.prototype.add = function(e, r) {
  return this.__schemas__[e] = r, Iu(this), this;
};
j.prototype.set = function(e) {
  return this.__opts__ = te(this.__opts__, e), this;
};
j.prototype.test = function(e) {
  if (this.__text_cache__ = e, this.__index__ = -1, !e.length)
    return !1;
  let r, t, n, c, o, i, a, f, l;
  if (this.re.schema_test.test(e)) {
    for (a = this.re.schema_search, a.lastIndex = 0; (r = a.exec(e)) !== null; )
      if (c = this.testSchemaAt(e, r[2], a.lastIndex), c) {
        this.__schema__ = r[2], this.__index__ = r.index + r[1].length, this.__last_index__ = r.index + r[0].length + c;
        break;
      }
  }
  return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (f = e.search(this.re.host_fuzzy_test), f >= 0 && (this.__index__ < 0 || f < this.__index__) && (t = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (o = t.index + t[1].length, (this.__index__ < 0 || o < this.__index__) && (this.__schema__ = "", this.__index__ = o, this.__last_index__ = t.index + t[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (l = e.indexOf("@"), l >= 0 && (n = e.match(this.re.email_fuzzy)) !== null && (o = n.index + n[1].length, i = n.index + n[0].length, (this.__index__ < 0 || o < this.__index__ || o === this.__index__ && i > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = o, this.__last_index__ = i))), this.__index__ >= 0;
};
j.prototype.pretest = function(e) {
  return this.re.pretest.test(e);
};
j.prototype.testSchemaAt = function(e, r, t) {
  return this.__compiled__[r.toLowerCase()] ? this.__compiled__[r.toLowerCase()].validate(e, t, this) : 0;
};
j.prototype.match = function(e) {
  const r = [];
  let t = 0;
  this.__index__ >= 0 && this.__text_cache__ === e && (r.push(ne(this, t)), t = this.__last_index__);
  let n = t ? e.slice(t) : e;
  for (; this.test(n); )
    r.push(ne(this, t)), n = n.slice(this.__last_index__), t += this.__last_index__;
  return r.length ? r : null;
};
j.prototype.matchAtStart = function(e) {
  if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return null;
  const r = this.re.schema_at_start.exec(e);
  if (!r) return null;
  const t = this.testSchemaAt(e, r[2], r[0].length);
  return t ? (this.__schema__ = r[2], this.__index__ = r.index + r[1].length, this.__last_index__ = r.index + r[0].length + t, ne(this, 0)) : null;
};
j.prototype.tlds = function(e, r) {
  return e = Array.isArray(e) ? e : [e], r ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter(function(t, n, c) {
    return t !== c[n - 1];
  }).reverse(), Iu(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, Iu(this), this);
};
j.prototype.normalize = function(e) {
  e.schema || (e.url = "http://" + e.url), e.schema === "mailto:" && !/^mailto:/i.test(e.url) && (e.url = "mailto:" + e.url);
};
j.prototype.onCompile = function() {
};
const au = 2147483647, Y = 36, de = 1, gu = 26, vn = 38, wn = 700, m0 = 72, k0 = 128, g0 = "-", Sn = /^xn--/, Tn = /[^\0-\x7F]/, Rn = /[\x2E\u3002\uFF0E\uFF61]/g, Bn = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, Ku = Y - de, J = Math.floor, ue = String.fromCharCode;
function K(u) {
  throw new RangeError(Bn[u]);
}
function Pn(u, e) {
  const r = [];
  let t = u.length;
  for (; t--; )
    r[t] = e(u[t]);
  return r;
}
function E0(u, e) {
  const r = u.split("@");
  let t = "";
  r.length > 1 && (t = r[0] + "@", u = r[1]), u = u.replace(Rn, ".");
  const n = u.split("."), c = Pn(n, e).join(".");
  return t + c;
}
function D0(u) {
  const e = [];
  let r = 0;
  const t = u.length;
  for (; r < t; ) {
    const n = u.charCodeAt(r++);
    if (n >= 55296 && n <= 56319 && r < t) {
      const c = u.charCodeAt(r++);
      (c & 64512) == 56320 ? e.push(((n & 1023) << 10) + (c & 1023) + 65536) : (e.push(n), r--);
    } else
      e.push(n);
  }
  return e;
}
const In = (u) => String.fromCodePoint(...u), Mn = function(u) {
  return u >= 48 && u < 58 ? 26 + (u - 48) : u >= 65 && u < 91 ? u - 65 : u >= 97 && u < 123 ? u - 97 : Y;
}, e0 = function(u, e) {
  return u + 22 + 75 * (u < 26) - ((e != 0) << 5);
}, C0 = function(u, e, r) {
  let t = 0;
  for (u = r ? J(u / wn) : u >> 1, u += J(u / e); u > Ku * gu >> 1; t += Y)
    u = J(u / Ku);
  return J(t + (Ku + 1) * u / (u + vn));
}, y0 = function(u) {
  const e = [], r = u.length;
  let t = 0, n = k0, c = m0, o = u.lastIndexOf(g0);
  o < 0 && (o = 0);
  for (let i = 0; i < o; ++i)
    u.charCodeAt(i) >= 128 && K("not-basic"), e.push(u.charCodeAt(i));
  for (let i = o > 0 ? o + 1 : 0; i < r; ) {
    const a = t;
    for (let l = 1, d = Y; ; d += Y) {
      i >= r && K("invalid-input");
      const x = Mn(u.charCodeAt(i++));
      x >= Y && K("invalid-input"), x > J((au - t) / l) && K("overflow"), t += x * l;
      const p = d <= c ? de : d >= c + gu ? gu : d - c;
      if (x < p)
        break;
      const h = Y - p;
      l > J(au / h) && K("overflow"), l *= h;
    }
    const f = e.length + 1;
    c = C0(t - a, f, a == 0), J(t / f) > au - n && K("overflow"), n += J(t / f), t %= f, e.splice(t++, 0, n);
  }
  return String.fromCodePoint(...e);
}, A0 = function(u) {
  const e = [];
  u = D0(u);
  const r = u.length;
  let t = k0, n = 0, c = m0;
  for (const a of u)
    a < 128 && e.push(ue(a));
  const o = e.length;
  let i = o;
  for (o && e.push(g0); i < r; ) {
    let a = au;
    for (const l of u)
      l >= t && l < a && (a = l);
    const f = i + 1;
    a - t > J((au - n) / f) && K("overflow"), n += (a - t) * f, t = a;
    for (const l of u)
      if (l < t && ++n > au && K("overflow"), l === t) {
        let d = n;
        for (let x = Y; ; x += Y) {
          const p = x <= c ? de : x >= c + gu ? gu : x - c;
          if (d < p)
            break;
          const h = d - p, C = Y - p;
          e.push(
            ue(e0(p + h % C, 0))
          ), d = J(h / C);
        }
        e.push(ue(e0(d, 0))), c = C0(n, f, i === o), n = 0, ++i;
      }
    ++n, ++t;
  }
  return e.join("");
}, On = function(u) {
  return E0(u, function(e) {
    return Sn.test(e) ? y0(e.slice(4).toLowerCase()) : e;
  });
}, zn = function(u) {
  return E0(u, function(e) {
    return Tn.test(e) ? "xn--" + A0(e) : e;
  });
}, F0 = {
  /**
   * A string representing the current Punycode.js version number.
   * @memberOf punycode
   * @type String
   */
  version: "2.3.1",
  /**
   * An object of methods to convert from JavaScript's internal character
   * representation (UCS-2) to Unicode code points, and back.
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode
   * @type Object
   */
  ucs2: {
    decode: D0,
    encode: In
  },
  decode: y0,
  encode: A0,
  toASCII: zn,
  toUnicode: On
}, qn = {
  options: {
    // Enable HTML tags in source
    html: !1,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !1,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 100
  },
  components: {
    core: {},
    block: {},
    inline: {}
  }
}, Ln = {
  options: {
    // Enable HTML tags in source
    html: !1,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !1,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "text"
      ],
      rules2: [
        "balance_pairs",
        "fragments_join"
      ]
    }
  }
}, Nn = {
  options: {
    // Enable HTML tags in source
    html: !0,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !0,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "blockquote",
        "code",
        "fence",
        "heading",
        "hr",
        "html_block",
        "lheading",
        "list",
        "reference",
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "autolink",
        "backticks",
        "emphasis",
        "entity",
        "escape",
        "html_inline",
        "image",
        "link",
        "newline",
        "text"
      ],
      rules2: [
        "balance_pairs",
        "emphasis",
        "fragments_join"
      ]
    }
  }
}, jn = {
  default: qn,
  zero: Ln,
  commonmark: Nn
}, $n = /^(vbscript|javascript|file|data):/, Un = /^data:image\/(gif|png|jpeg|webp);/;
function Hn(u) {
  const e = u.trim().toLowerCase();
  return $n.test(e) ? Un.test(e) : !0;
}
const v0 = ["http:", "https:", "mailto:"];
function Zn(u) {
  const e = ie(u, !0);
  if (e.hostname && (!e.protocol || v0.indexOf(e.protocol) >= 0))
    try {
      e.hostname = F0.toASCII(e.hostname);
    } catch {
    }
  return Eu(ce(e));
}
function Wn(u) {
  const e = ie(u, !0);
  if (e.hostname && (!e.protocol || v0.indexOf(e.protocol) >= 0))
    try {
      e.hostname = F0.toUnicode(e.hostname);
    } catch {
    }
  return su(ce(e), su.defaultChars + "%");
}
function Z(u, e) {
  if (!(this instanceof Z))
    return new Z(u, e);
  e || ae(u) || (e = u || {}, u = "default"), this.inline = new Cu(), this.block = new zu(), this.core = new fe(), this.renderer = new lu(), this.linkify = new j(), this.validateLink = Hn, this.normalizeLink = Zn, this.normalizeLinkText = Wn, this.utils = Vr, this.helpers = Mu({}, Qr), this.options = {}, this.configure(u), e && this.set(e);
}
Z.prototype.set = function(u) {
  return Mu(this.options, u), this;
};
Z.prototype.configure = function(u) {
  const e = this;
  if (ae(u)) {
    const r = u;
    if (u = jn[r], !u)
      throw new Error('Wrong `markdown-it` preset "' + r + '", check name');
  }
  if (!u)
    throw new Error("Wrong `markdown-it` preset, can't be empty");
  return u.options && e.set(u.options), u.components && Object.keys(u.components).forEach(function(r) {
    u.components[r].rules && e[r].ruler.enableOnly(u.components[r].rules), u.components[r].rules2 && e[r].ruler2.enableOnly(u.components[r].rules2);
  }), this;
};
Z.prototype.enable = function(u, e) {
  let r = [];
  Array.isArray(u) || (u = [u]), ["core", "block", "inline"].forEach(function(n) {
    r = r.concat(this[n].ruler.enable(u, !0));
  }, this), r = r.concat(this.inline.ruler2.enable(u, !0));
  const t = u.filter(function(n) {
    return r.indexOf(n) < 0;
  });
  if (t.length && !e)
    throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + t);
  return this;
};
Z.prototype.disable = function(u, e) {
  let r = [];
  Array.isArray(u) || (u = [u]), ["core", "block", "inline"].forEach(function(n) {
    r = r.concat(this[n].ruler.disable(u, !0));
  }, this), r = r.concat(this.inline.ruler2.disable(u, !0));
  const t = u.filter(function(n) {
    return r.indexOf(n) < 0;
  });
  if (t.length && !e)
    throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + t);
  return this;
};
Z.prototype.use = function(u) {
  const e = [this].concat(Array.prototype.slice.call(arguments, 1));
  return u.apply(u, e), this;
};
Z.prototype.parse = function(u, e) {
  if (typeof u != "string")
    throw new Error("Input data should be a String");
  const r = new this.core.State(u, this, e);
  return this.core.process(r), r.tokens;
};
Z.prototype.render = function(u, e) {
  return e = e || {}, this.renderer.render(this.parse(u, e), this.options, e);
};
Z.prototype.parseInline = function(u, e) {
  const r = new this.core.State(u, this, e);
  return r.inlineMode = !0, this.core.process(r), r.tokens;
};
Z.prototype.renderInline = function(u, e) {
  return e = e || {}, this.renderer.render(this.parseInline(u, e), this.options, e);
};
class Vn {
  static splitIntoWords(e) {
    return e.split(/(\s+|\b|[.,!?;])/g).filter((r) => r.length > 0);
  }
  static findLCS(e, r) {
    const t = e.length, n = r.length, c = Array(t + 1).fill(null).map(() => Array(n + 1).fill(0));
    for (let o = 1; o <= t; o++)
      for (let i = 1; i <= n; i++)
        e[o - 1] === r[i - 1] ? c[o][i] = c[o - 1][i - 1] + 1 : c[o][i] = Math.max(c[o - 1][i], c[o][i - 1]);
    return c;
  }
  static backtrack(e, r, t, n, c) {
    return n === 0 && c === 0 ? [] : n === 0 ? [...this.backtrack(e, r, t, n, c - 1), { type: "addition", value: t[c - 1] }] : c === 0 ? [...this.backtrack(e, r, t, n - 1, c), { type: "deletion", value: r[n - 1] }] : r[n - 1] === t[c - 1] ? [...this.backtrack(e, r, t, n - 1, c - 1), { type: "equal", value: r[n - 1] }] : e[n][c - 1] > e[n - 1][c] ? [...this.backtrack(e, r, t, n, c - 1), { type: "addition", value: t[c - 1] }] : [...this.backtrack(e, r, t, n - 1, c), { type: "deletion", value: r[n - 1] }];
  }
  static generateDiff(e, r) {
    const t = this.splitIntoWords(e), n = this.splitIntoWords(r), c = this.findLCS(t, n);
    return this.backtrack(c, t, n, t.length, n.length);
  }
  static getDiffRanges(e) {
    const r = [];
    let t = null, n = 0;
    for (const c of e) {
      if (c.type === "equal") {
        t && (r.push(t), t = null), n += c.value.length;
        continue;
      }
      !t || t.type !== c.type ? (t && r.push(t), t = {
        start: n,
        end: n + c.value.length,
        type: c.type,
        content: c.value
      }) : (t.end = n + c.value.length, t.content += c.value), n += c.value.length;
    }
    return t && r.push(t), r;
  }
  static applyDiffToMarkdown(e, r) {
    let t = e, n = 0;
    for (const c of r) {
      const o = c.start + n, i = c.end + n, f = `<span class="${c.type === "addition" ? "diff-addition" : "diff-deletion"}">`, l = "</span>";
      t = t.slice(0, o) + f + t.slice(o, i) + l + t.slice(i), n += f.length + l.length;
    }
    return t;
  }
}
class w0 {
  static renderWithDiff(e, r) {
    const t = Vn.generateDiff(e, r);
    let n = "";
    t.forEach((o) => {
      switch (o.type) {
        case "equal":
          n += o.value;
          break;
        case "deletion":
          n += `<!--DEL_START--><span class="diff-deletion">${o.value}</span><!--DEL_END-->`;
          break;
        case "addition":
          n += `<!--ADD_START--><span class="diff-addition">${o.value}</span><!--ADD_END-->`;
          break;
      }
    });
    let c = this.md.render(n);
    return c = c.replace(/(<span[^>]*>)\s*<span([^>]*)>/g, "$1").replace(/<\/span>\s*(<\/span>)/g, "$1").replace(/<!--DEL_START-->|<!--DEL_END-->|<!--ADD_START-->|<!--ADD_END-->/g, ""), c;
  }
  static renderMarkdown(e) {
    return this.md.render(e);
  }
}
Ie(w0, "md", new Z({
  html: !0,
  breaks: !0,
  linkify: !0,
  typographer: !0
}));
const Jn = ({ oldText: u, newText: e }) => {
  const r = nr(() => ({
    __html: w0.renderWithDiff(u, e)
  }), [u, e]);
  return /* @__PURE__ */ ze.jsx("div", { className: "markdown-diff-viewer", children: /* @__PURE__ */ ze.jsx(
    "div",
    {
      className: "markdown-content",
      dangerouslySetInnerHTML: r
    }
  ) });
};
export {
  Vn as DiffProcessor,
  Jn as MarkdownDiff,
  w0 as MarkdownRenderer
};
