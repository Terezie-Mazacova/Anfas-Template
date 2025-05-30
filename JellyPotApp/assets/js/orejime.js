/*! orejime v2.1.1 - BSD-3-Clause license, original work Copyright (c) 2018 DPKit, modified work Copyright (c) 2019 Empreinte Digitale, all rights reserved. */
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? (exports.Orejime = t()) : (e.Orejime = t());
})(window, function () {
  return (function (e) {
      var t = {};
      function n(o) {
          if (t[o]) return t[o].exports;
          var r = (t[o] = { i: o, l: !1, exports: {} });
          return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
      }
      return (
          (n.m = e),
          (n.c = t),
          (n.d = function (e, t, o) {
              n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
          }),
          (n.r = function (e) {
              "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
          }),
          (n.t = function (e, t) {
              if ((1 & t && (e = n(e)), 8 & t)) return e;
              if (4 & t && "object" == typeof e && e && e.__esModule) return e;
              var o = Object.create(null);
              if ((n.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                  for (var r in e)
                      n.d(
                          o,
                          r,
                          function (t) {
                              return e[t];
                          }.bind(null, r)
                      );
              return o;
          }),
          (n.n = function (e) {
              var t =
                  e && e.__esModule
                      ? function () {
                            return e.default;
                        }
                      : function () {
                            return e;
                        };
              return n.d(t, "a", t), t;
          }),
          (n.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (n.p = ""),
          n((n.s = 18))
      );
  })([
      function (e, t, n) {
          "use strict";
          n.r(t);
          var o = n(8),
              r = n.n(o),
              i = function () {},
              a = {},
              s = [],
              l = [];
          function c(e, t) {
              var n,
                  o,
                  r,
                  c,
                  u = l;
              for (c = arguments.length; c-- > 2; ) s.push(arguments[c]);
              for (t && null != t.children && (s.length || s.push(t.children), delete t.children); s.length; )
                  if ((o = s.pop()) && void 0 !== o.pop) for (c = o.length; c--; ) s.push(o[c]);
                  else
                      "boolean" == typeof o && (o = null),
                          (r = "function" != typeof e) && (null == o ? (o = "") : "number" == typeof o ? (o = String(o)) : "string" != typeof o && (r = !1)),
                          r && n ? (u[u.length - 1] += o) : u === l ? (u = [o]) : u.push(o),
                          (n = r);
              var p = new i();
              return (p.nodeName = e), (p.children = u), (p.attributes = null == t ? void 0 : t), (p.key = null == t ? void 0 : t.key), void 0 !== a.vnode && a.vnode(p), p;
          }
          function u(e, t) {
              for (var n in t) e[n] = t[n];
              return e;
          }
          var p = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;
          function d(e, t) {
              return c(e.nodeName, u(u({}, e.attributes), t), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children);
          }
          var f = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
              m = [];
          function h(e) {
              !e._dirty && (e._dirty = !0) && 1 == m.push(e) && (a.debounceRendering || p)(v);
          }
          function v() {
              var e,
                  t = m;
              for (m = []; (e = t.pop()); ) e._dirty && R(e);
          }
          function y(e, t) {
              return e.normalizedNodeName === t || e.nodeName.toLowerCase() === t.toLowerCase();
          }
          function b(e) {
              var t = u({}, e.attributes);
              t.children = e.children;
              var n = e.nodeName.defaultProps;
              if (void 0 !== n) for (var o in n) void 0 === t[o] && (t[o] = n[o]);
              return t;
          }
          function g(e) {
              var t = e.parentNode;
              t && t.removeChild(e);
          }
          function C(e, t, n, o, r) {
              if (("className" === t && (t = "class"), "key" === t));
              else if ("ref" === t) n && n(null), o && o(e);
              else if ("class" !== t || r)
                  if ("style" === t) {
                      if (((o && "string" != typeof o && "string" != typeof n) || (e.style.cssText = o || ""), o && "object" == typeof o)) {
                          if ("string" != typeof n) for (var i in n) i in o || (e.style[i] = "");
                          for (var i in o) e.style[i] = "number" == typeof o[i] && !1 === f.test(i) ? o[i] + "px" : o[i];
                      }
                  } else if ("dangerouslySetInnerHTML" === t) o && (e.innerHTML = o.__html || "");
                  else if ("o" == t[0] && "n" == t[1]) {
                      var a = t !== (t = t.replace(/Capture$/, ""));
                      (t = t.toLowerCase().substring(2)), o ? n || e.addEventListener(t, w, a) : e.removeEventListener(t, w, a), ((e._listeners || (e._listeners = {}))[t] = o);
                  } else if ("list" !== t && "type" !== t && !r && t in e) {
                      try {
                          e[t] = null == o ? "" : o;
                      } catch (e) {}
                      (null != o && !1 !== o) || "spellcheck" == t || e.removeAttribute(t);
                  } else {
                      var s = r && t !== (t = t.replace(/^xlink:?/, ""));
                      null == o || !1 === o
                          ? s
                              ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase())
                              : e.removeAttribute(t)
                          : "function" != typeof o && (s ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), o) : e.setAttribute(t, o));
                  }
              else e.className = o || "";
          }
          function w(e) {
              return this._listeners[e.type]((a.event && a.event(e)) || e);
          }
          var O = [],
              N = 0,
              k = !1,
              _ = !1;
          function E() {
              for (var e; (e = O.pop()); ) a.afterMount && a.afterMount(e), e.componentDidMount && e.componentDidMount();
          }
          function S(e, t, n, o, r, i) {
              N++ || ((k = null != r && void 0 !== r.ownerSVGElement), (_ = null != e && !("__preactattr_" in e)));
              var a = A(e, t, n, o, i);
              return r && a.parentNode !== r && r.appendChild(a), --N || ((_ = !1), i || E()), a;
          }
          function A(e, t, n, o, r) {
              var i = e,
                  a = k;
              if (((null != t && "boolean" != typeof t) || (t = ""), "string" == typeof t || "number" == typeof t))
                  return (
                      e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : ((i = document.createTextNode(t)), e && (e.parentNode && e.parentNode.replaceChild(i, e), P(e, !0))),
                      (i.__preactattr_ = !0),
                      i
                  );
              var s,
                  l,
                  c = t.nodeName;
              if ("function" == typeof c)
                  return (function (e, t, n, o) {
                      var r = e && e._component,
                          i = r,
                          a = e,
                          s = r && e._componentConstructor === t.nodeName,
                          l = s,
                          c = b(t);
                      for (; r && !l && (r = r._parentComponent); ) l = r.constructor === t.nodeName;
                      r && l && (!o || r._component)
                          ? (T(r, c, 3, n, o), (e = r.base))
                          : (i && !s && (U(i), (e = a = null)), (r = j(t.nodeName, c, n)), e && !r.nextBase && ((r.nextBase = e), (a = null)), T(r, c, 1, n, o), (e = r.base), a && e !== a && ((a._component = null), P(a, !1)));
                      return e;
                  })(e, t, n, o);
              if (
                  ((k = "svg" === c || ("foreignObject" !== c && k)),
                  (c = String(c)),
                  (!e || !y(e, c)) && ((s = c), ((l = k ? document.createElementNS("http://www.w3.org/2000/svg", s) : document.createElement(s)).normalizedNodeName = s), (i = l), e))
              ) {
                  for (; e.firstChild; ) i.appendChild(e.firstChild);
                  e.parentNode && e.parentNode.replaceChild(i, e), P(e, !0);
              }
              var u = i.firstChild,
                  p = i.__preactattr_,
                  d = t.children;
              if (null == p) {
                  p = i.__preactattr_ = {};
                  for (var f = i.attributes, m = f.length; m--; ) p[f[m].name] = f[m].value;
              }
              return (
                  !_ && d && 1 === d.length && "string" == typeof d[0] && null != u && void 0 !== u.splitText && null == u.nextSibling
                      ? u.nodeValue != d[0] && (u.nodeValue = d[0])
                      : ((d && d.length) || null != u) &&
                        (function (e, t, n, o, r) {
                            var i,
                                a,
                                s,
                                l,
                                c,
                                u = e.childNodes,
                                p = [],
                                d = {},
                                f = 0,
                                m = 0,
                                h = u.length,
                                v = 0,
                                b = t ? t.length : 0;
                            if (0 !== h)
                                for (var C = 0; C < h; C++) {
                                    var w = u[C],
                                        O = w.__preactattr_,
                                        N = b && O ? (w._component ? w._component.__key : O.key) : null;
                                    null != N ? (f++, (d[N] = w)) : (O || (void 0 !== w.splitText ? !r || w.nodeValue.trim() : r)) && (p[v++] = w);
                                }
                            if (0 !== b)
                                for (var C = 0; C < b; C++) {
                                    (l = t[C]), (c = null);
                                    var N = l.key;
                                    if (null != N) f && void 0 !== d[N] && ((c = d[N]), (d[N] = void 0), f--);
                                    else if (m < v)
                                        for (i = m; i < v; i++)
                                            if (
                                                void 0 !== p[i] &&
                                                ((k = a = p[i]),
                                                (E = r),
                                                "string" == typeof (_ = l) || "number" == typeof _
                                                    ? void 0 !== k.splitText
                                                    : "string" == typeof _.nodeName
                                                    ? !k._componentConstructor && y(k, _.nodeName)
                                                    : E || k._componentConstructor === _.nodeName)
                                            ) {
                                                (c = a), (p[i] = void 0), i === v - 1 && v--, i === m && m++;
                                                break;
                                            }
                                    (c = A(c, l, n, o)), (s = u[C]), c && c !== e && c !== s && (null == s ? e.appendChild(c) : c === s.nextSibling ? g(s) : e.insertBefore(c, s));
                                }
                            var k, _, E;
                            if (f) for (var C in d) void 0 !== d[C] && P(d[C], !1);
                            for (; m <= v; ) void 0 !== (c = p[v--]) && P(c, !1);
                        })(i, d, n, o, _ || null != p.dangerouslySetInnerHTML),
                  (function (e, t, n) {
                      var o;
                      for (o in n) (t && null != t[o]) || null == n[o] || C(e, o, n[o], (n[o] = void 0), k);
                      for (o in t) "children" === o || "innerHTML" === o || (o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o])) || C(e, o, n[o], (n[o] = t[o]), k);
                  })(i, t.attributes, p),
                  (k = a),
                  i
              );
          }
          function P(e, t) {
              var n = e._component;
              n ? U(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), (!1 !== t && null != e.__preactattr_) || g(e), M(e));
          }
          function M(e) {
              for (e = e.lastChild; e; ) {
                  var t = e.previousSibling;
                  P(e, !0), (e = t);
              }
          }
          var x = [];
          function j(e, t, n) {
              var o,
                  r = x.length;
              for (e.prototype && e.prototype.render ? ((o = new e(t, n)), L.call(o, t, n)) : (((o = new L(t, n)).constructor = e), (o.render = D)); r--; )
                  if (x[r].constructor === e) return (o.nextBase = x[r].nextBase), x.splice(r, 1), o;
              return o;
          }
          function D(e, t, n) {
              return this.constructor(e, n);
          }
          function T(e, t, n, o, r) {
              e._disable ||
                  ((e._disable = !0),
                  (e.__ref = t.ref),
                  (e.__key = t.key),
                  delete t.ref,
                  delete t.key,
                  void 0 === e.constructor.getDerivedStateFromProps && (!e.base || r ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, o)),
                  o && o !== e.context && (e.prevContext || (e.prevContext = e.context), (e.context = o)),
                  e.prevProps || (e.prevProps = e.props),
                  (e.props = t),
                  (e._disable = !1),
                  0 !== n && (1 !== n && !1 === a.syncComponentUpdates && e.base ? h(e) : R(e, 1, r)),
                  e.__ref && e.__ref(e));
          }
          function R(e, t, n, o) {
              if (!e._disable) {
                  var r,
                      i,
                      s,
                      l = e.props,
                      c = e.state,
                      p = e.context,
                      d = e.prevProps || l,
                      f = e.prevState || c,
                      m = e.prevContext || p,
                      h = e.base,
                      v = e.nextBase,
                      y = h || v,
                      g = e._component,
                      C = !1,
                      w = m;
                  if (
                      (e.constructor.getDerivedStateFromProps && ((c = u(u({}, c), e.constructor.getDerivedStateFromProps(l, c))), (e.state = c)),
                      h &&
                          ((e.props = d),
                          (e.state = f),
                          (e.context = m),
                          2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(l, c, p) ? (C = !0) : e.componentWillUpdate && e.componentWillUpdate(l, c, p),
                          (e.props = l),
                          (e.state = c),
                          (e.context = p)),
                      (e.prevProps = e.prevState = e.prevContext = e.nextBase = null),
                      (e._dirty = !1),
                      !C)
                  ) {
                      (r = e.render(l, c, p)), e.getChildContext && (p = u(u({}, p), e.getChildContext())), h && e.getSnapshotBeforeUpdate && (w = e.getSnapshotBeforeUpdate(d, f));
                      var k,
                          _,
                          A = r && r.nodeName;
                      if ("function" == typeof A) {
                          var M = b(r);
                          (i = g) && i.constructor === A && M.key == i.__key ? T(i, M, 1, p, !1) : ((k = i), (e._component = i = j(A, M, p)), (i.nextBase = i.nextBase || v), (i._parentComponent = e), T(i, M, 0, p, !1), R(i, 1, n, !0)),
                              (_ = i.base);
                      } else (s = y), (k = g) && (s = e._component = null), (y || 1 === t) && (s && (s._component = null), (_ = S(s, r, p, n || !h, y && y.parentNode, !0)));
                      if (y && _ !== y && i !== g) {
                          var x = y.parentNode;
                          x && _ !== x && (x.replaceChild(_, y), k || ((y._component = null), P(y, !1)));
                      }
                      if ((k && U(k), (e.base = _), _ && !o)) {
                          for (var D = e, L = e; (L = L._parentComponent); ) (D = L).base = _;
                          (_._component = D), (_._componentConstructor = D.constructor);
                      }
                  }
                  for (!h || n ? O.unshift(e) : C || (e.componentDidUpdate && e.componentDidUpdate(d, f, w), a.afterUpdate && a.afterUpdate(e)); e._renderCallbacks.length; ) e._renderCallbacks.pop().call(e);
                  N || o || E();
              }
          }
          function U(e) {
              a.beforeUnmount && a.beforeUnmount(e);
              var t = e.base;
              (e._disable = !0), e.componentWillUnmount && e.componentWillUnmount(), (e.base = null);
              var n = e._component;
              n ? U(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), (e.nextBase = t), g(t), x.push(e), M(t)), e.__ref && e.__ref(null);
          }
          function L(e, t) {
              (this._dirty = !0), (this.context = t), (this.props = e), (this.state = this.state || {}), (this._renderCallbacks = []);
          }
          function I(e, t, n) {
              return S(n, e, {}, !1, t, !1);
          }
          u(L.prototype, {
              setState: function (e, t) {
                  this.prevState || (this.prevState = this.state), (this.state = u(u({}, this.state), "function" == typeof e ? e(this.state, this.props) : e)), t && this._renderCallbacks.push(t), h(this);
              },
              forceUpdate: function (e) {
                  e && this._renderCallbacks.push(e), R(this, 2);
              },
              render: function () {},
          });
          n.d(t, "version", function () {
              return W;
          }),
              n.d(t, "DOM", function () {
                  return se;
              }),
              n.d(t, "Children", function () {
                  return ie;
              }),
              n.d(t, "render", function () {
                  return Y;
              }),
              n.d(t, "createClass", function () {
                  return ge;
              }),
              n.d(t, "createPortal", function () {
                  return te;
              }),
              n.d(t, "createFactory", function () {
                  return ae;
              }),
              n.d(t, "createElement", function () {
                  return ue;
              }),
              n.d(t, "cloneElement", function () {
                  return de;
              }),
              n.d(t, "isValidElement", function () {
                  return fe;
              }),
              n.d(t, "findDOMNode", function () {
                  return ye;
              }),
              n.d(t, "unmountComponentAtNode", function () {
                  return ne;
              }),
              n.d(t, "Component", function () {
                  return Ee;
              }),
              n.d(t, "PureComponent", function () {
                  return Se;
              }),
              n.d(t, "unstable_renderSubtreeIntoContainer", function () {
                  return X;
              }),
              n.d(t, "unstable_batchedUpdates", function () {
                  return Ae;
              }),
              n.d(t, "__spread", function () {
                  return he;
              }),
              n.d(t, "PropTypes", function () {
                  return r.a;
              });
          var W = "15.1.0",
              B = "a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan".split(
                  " "
              ),
              z = ("undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element")) || 60103,
              q = "undefined" != typeof Symbol && Symbol.for ? Symbol.for("__preactCompatWrapper") : "__preactCompatWrapper",
              F = {
                  constructor: 1,
                  render: 1,
                  shouldComponentUpdate: 1,
                  componentWillReceiveProps: 1,
                  componentWillUpdate: 1,
                  componentDidUpdate: 1,
                  componentWillMount: 1,
                  componentDidMount: 1,
                  componentWillUnmount: 1,
                  componentDidUnmount: 1,
              },
              H = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/,
              V = {},
              $ = !1;
          try {
              $ = !1;
          } catch (e) {}
          function G() {
              return null;
          }
          var Z = c("a", null).constructor;
          (Z.prototype.$$typeof = z),
              (Z.prototype.preactCompatUpgraded = !1),
              (Z.prototype.preactCompatNormalized = !1),
              Object.defineProperty(Z.prototype, "type", {
                  get: function () {
                      return this.nodeName;
                  },
                  set: function (e) {
                      this.nodeName = e;
                  },
                  configurable: !0,
              }),
              Object.defineProperty(Z.prototype, "props", {
                  get: function () {
                      return this.attributes;
                  },
                  set: function (e) {
                      this.attributes = e;
                  },
                  configurable: !0,
              });
          var J = a.event;
          a.event = function (e) {
              return J && (e = J(e)), (e.persist = Object), (e.nativeEvent = e), e;
          };
          var K = a.vnode;
          function Y(e, t, n) {
              var o = t && t._preactCompatRendered && t._preactCompatRendered.base;
              o && o.parentNode !== t && (o = null), !o && t && (o = t.firstElementChild);
              for (var r = t.childNodes.length; r--; ) t.childNodes[r] !== o && t.removeChild(t.childNodes[r]);
              var i = I(e, t, o);
              return t && (t._preactCompatRendered = i && (i._component || { base: i })), "function" == typeof n && n(), (i && i._component) || i;
          }
          a.vnode = function (e) {
              if (!e.preactCompatUpgraded) {
                  e.preactCompatUpgraded = !0;
                  var t = e.nodeName,
                      n = (e.attributes = null == e.attributes ? {} : he({}, e.attributes));
                  "function" == typeof t
                      ? (!0 === t[q] || (t.prototype && "isReactComponent" in t.prototype)) &&
                        (e.children && "" === String(e.children) && (e.children = void 0),
                        e.children && (n.children = e.children),
                        e.preactCompatNormalized || pe(e),
                        (function (e) {
                            var t = e.nodeName,
                                n = e.attributes;
                            (e.attributes = {}), t.defaultProps && he(e.attributes, t.defaultProps);
                            n && he(e.attributes, n);
                        })(e))
                      : (e.children && "" === String(e.children) && (e.children = void 0),
                        e.children && (n.children = e.children),
                        n.defaultValue && (n.value || 0 === n.value || (n.value = n.defaultValue), delete n.defaultValue),
                        (function (e, t) {
                            var n, o, r;
                            if (t) {
                                for (r in t) if ((n = H.test(r))) break;
                                if (n) for (r in ((o = e.attributes = {}), t)) t.hasOwnProperty(r) && (o[H.test(r) ? r.replace(/([A-Z0-9])/, "-$1").toLowerCase() : r] = t[r]);
                            }
                        })(e, n));
              }
              K && K(e);
          };
          var Q = function () {};
          function X(e, t, n, o) {
              var r = Y(c(Q, { context: e.context }, t), n),
                  i = r._component || r.base;
              return o && o.call(i, r), i;
          }
          function ee(e) {
              X(this, e.vnode, e.container);
          }
          function te(e, t) {
              return c(ee, { vnode: e, container: t });
          }
          function ne(e) {
              var t = e._preactCompatRendered && e._preactCompatRendered.base;
              return !(!t || t.parentNode !== e) && (I(c(G), e, t), !0);
          }
          (Q.prototype.getChildContext = function () {
              return this.props.context;
          }),
              (Q.prototype.render = function (e) {
                  return e.children[0];
              });
          var oe,
              re = [],
              ie = {
                  map: function (e, t, n) {
                      return null == e ? null : ((e = ie.toArray(e)), n && n !== e && (t = t.bind(n)), e.map(t));
                  },
                  forEach: function (e, t, n) {
                      if (null == e) return null;
                      (e = ie.toArray(e)), n && n !== e && (t = t.bind(n)), e.forEach(t);
                  },
                  count: function (e) {
                      return (e && e.length) || 0;
                  },
                  only: function (e) {
                      if (1 !== (e = ie.toArray(e)).length) throw new Error("Children.only() expects only one child.");
                      return e[0];
                  },
                  toArray: function (e) {
                      return null == e ? [] : re.concat(e);
                  },
              };
          function ae(e) {
              return ue.bind(null, e);
          }
          for (var se = {}, le = B.length; le--; ) se[B[le]] = ae(B[le]);
          function ce(e) {
              var t,
                  n = e[q];
              return n
                  ? !0 === n
                      ? e
                      : n
                  : ((n = ge({
                        displayName: (t = e).displayName || t.name,
                        render: function () {
                            return t(this.props, this.context);
                        },
                    })),
                    Object.defineProperty(n, q, { configurable: !0, value: !0 }),
                    (n.displayName = e.displayName),
                    (n.propTypes = e.propTypes),
                    (n.defaultProps = e.defaultProps),
                    Object.defineProperty(e, q, { configurable: !0, value: n }),
                    n);
          }
          function ue() {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              return (
                  (function e(t, n) {
                      for (var o = n || 0; o < t.length; o++) {
                          var r = t[o];
                          Array.isArray(r) ? e(r) : r && "object" == typeof r && !fe(r) && ((r.props && r.type) || (r.attributes && r.nodeName) || r.children) && (t[o] = ue(r.type || r.nodeName, r.props || r.attributes, r.children));
                      }
                  })(e, 2),
                  pe(c.apply(void 0, e))
              );
          }
          function pe(e) {
              var t;
              (e.preactCompatNormalized = !0),
                  (function (e) {
                      var t = e.attributes || (e.attributes = {});
                      (me.enumerable = "className" in t), t.className && (t.class = t.className);
                      Object.defineProperty(t, "className", me);
                  })(e),
                  "function" != typeof (t = e.nodeName) || (t.prototype && t.prototype.render) || (e.nodeName = ce(e.nodeName));
              var n,
                  o,
                  r = e.attributes.ref,
                  i = r && typeof r;
              return (
                  !oe ||
                      ("string" !== i && "number" !== i) ||
                      (e.attributes.ref =
                          ((n = r),
                          (o = oe)._refProxies[n] ||
                              (o._refProxies[n] = function (e) {
                                  o && o.refs && ((o.refs[n] = e), null === e && (delete o._refProxies[n], (o = null)));
                              }))),
                  (function (e) {
                      var t = e.nodeName,
                          n = e.attributes;
                      if (!n || "string" != typeof t) return;
                      var o = {};
                      for (var r in n) o[r.toLowerCase()] = r;
                      o.ondoubleclick && ((n.ondblclick = n[o.ondoubleclick]), delete n[o.ondoubleclick]);
                      if (o.onchange && ("textarea" === t || ("input" === t.toLowerCase() && !/^fil|che|rad/i.test(n.type)))) {
                          var i = o.oninput || "oninput";
                          n[i] || ((n[i] = we([n[i], n[o.onchange]])), delete n[o.onchange]);
                      }
                  })(e),
                  e
              );
          }
          function de(e, t) {
              for (var n = [], o = arguments.length - 2; o-- > 0; ) n[o] = arguments[o + 2];
              if (!fe(e)) return e;
              var r = e.attributes || e.props,
                  i = [c(e.nodeName || e.type, he({}, r), e.children || (r && r.children)), t];
              return n && n.length ? i.push(n) : t && t.children && i.push(t.children), pe(d.apply(void 0, i));
          }
          function fe(e) {
              return e && (e instanceof Z || e.$$typeof === z);
          }
          var me = {
              configurable: !0,
              get: function () {
                  return this.class;
              },
              set: function (e) {
                  this.class = e;
              },
          };
          function he(e, t) {
              for (var n = arguments, o = 1, r = void 0; o < arguments.length; o++) if ((r = n[o])) for (var i in r) r.hasOwnProperty(i) && (e[i] = r[i]);
              return e;
          }
          function ve(e, t) {
              for (var n in e) if (!(n in t)) return !0;
              for (var o in t) if (e[o] !== t[o]) return !0;
              return !1;
          }
          function ye(e) {
              return (e && (e.base || (1 === e.nodeType && e))) || null;
          }
          function be() {}
          function ge(e) {
              function t(e, t) {
                  !(function (e) {
                      for (var t in e) {
                          var n = e[t];
                          "function" != typeof n || n.__bound || F.hasOwnProperty(t) || ((e[t] = n.bind(e)).__bound = !0);
                      }
                  })(this),
                      Ee.call(this, e, t, V),
                      Oe.call(this, e, t);
              }
              return (
                  (e = he({ constructor: t }, e)).mixins &&
                      (function (e, t) {
                          for (var n in t) t.hasOwnProperty(n) && (e[n] = we(t[n].concat(e[n] || re), "getDefaultProps" === n || "getInitialState" === n || "getChildContext" === n));
                      })(
                          e,
                          (function (e) {
                              for (var t = {}, n = 0; n < e.length; n++) {
                                  var o = e[n];
                                  for (var r in o) o.hasOwnProperty(r) && "function" == typeof o[r] && (t[r] || (t[r] = [])).push(o[r]);
                              }
                              return t;
                          })(e.mixins)
                      ),
                  e.statics && he(t, e.statics),
                  e.propTypes && (t.propTypes = e.propTypes),
                  e.defaultProps && (t.defaultProps = e.defaultProps),
                  e.getDefaultProps && (t.defaultProps = e.getDefaultProps.call(t)),
                  (be.prototype = Ee.prototype),
                  (t.prototype = he(new be(), e)),
                  (t.displayName = e.displayName || "Component"),
                  t
              );
          }
          function Ce(e, t, n) {
              if (("string" == typeof t && (t = e.constructor.prototype[t]), "function" == typeof t)) return t.apply(e, n);
          }
          function we(e, t) {
              return function () {
                  for (var n, o = arguments, r = 0; r < e.length; r++) {
                      var i = Ce(this, e[r], o);
                      if (t && null != i) for (var a in (n || (n = {}), i)) i.hasOwnProperty(a) && (n[a] = i[a]);
                      else void 0 !== i && (n = i);
                  }
                  return n;
              };
          }
          function Oe(e, t) {
              Ne.call(this, e, t), (this.componentWillReceiveProps = we([Ne, this.componentWillReceiveProps || "componentWillReceiveProps"])), (this.render = we([Ne, ke, this.render || "render", _e]));
          }
          function Ne(e, t) {
              if (e) {
                  var n = e.children;
                  if (
                      (n &&
                          Array.isArray(n) &&
                          1 === n.length &&
                          ("string" == typeof n[0] || "function" == typeof n[0] || n[0] instanceof Z) &&
                          ((e.children = n[0]), e.children && "object" == typeof e.children && ((e.children.length = 1), (e.children[0] = e.children))),
                      $)
                  ) {
                      var o = "function" == typeof this ? this : this.constructor,
                          i = this.propTypes || o.propTypes,
                          a = this.displayName || o.name;
                      i && r.a.checkPropTypes(i, e, "prop", a);
                  }
              }
          }
          function ke(e) {
              oe = this;
          }
          function _e() {
              oe === this && (oe = null);
          }
          function Ee(e, t, n) {
              L.call(this, e, t), (this.state = this.getInitialState ? this.getInitialState() : {}), (this.refs = {}), (this._refProxies = {}), n !== V && Oe.call(this, e, t);
          }
          function Se(e, t) {
              Ee.call(this, e, t);
          }
          function Ae(e) {
              e();
          }
          he((Ee.prototype = new L()), {
              constructor: Ee,
              isReactComponent: {},
              replaceState: function (e, t) {
                  for (var n in (this.setState(e, t), this.state)) n in e || delete this.state[n];
              },
              getDOMNode: function () {
                  return this.base;
              },
              isMounted: function () {
                  return !!this.base;
              },
          }),
              (be.prototype = Ee.prototype),
              (Se.prototype = new be()),
              (Se.prototype.isPureReactComponent = !0),
              (Se.prototype.shouldComponentUpdate = function (e, t) {
                  return ve(this.props, e) || ve(this.state, t);
              });
          var Pe = {
              version: W,
              DOM: se,
              PropTypes: r.a,
              Children: ie,
              render: Y,
              createClass: ge,
              createPortal: te,
              createFactory: ae,
              createElement: ue,
              cloneElement: de,
              isValidElement: fe,
              findDOMNode: ye,
              unmountComponentAtNode: ne,
              Component: Ee,
              PureComponent: Se,
              unstable_renderSubtreeIntoContainer: X,
              unstable_batchedUpdates: Ae,
              __spread: he,
          };
          t.default = Pe;
      },
      function (e, t) {
          e.exports = function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          };
      },
      function (e, t) {
          function n(e, t) {
              for (var n = 0; n < t.length; n++) {
                  var o = t[n];
                  (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
              }
          }
          e.exports = function (e, t, o) {
              return t && n(e.prototype, t), o && n(e, o), e;
          };
      },
      function (e, t) {
          e.exports = function (e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e;
          };
      },
      function (e, t, n) {
          var o = n(9),
              r = n(3);
          e.exports = function (e, t) {
              return !t || ("object" !== o(t) && "function" != typeof t) ? r(e) : t;
          };
      },
      function (e, t) {
          function n(t) {
              return (
                  (e.exports = n = Object.setPrototypeOf
                      ? Object.getPrototypeOf
                      : function (e) {
                            return e.__proto__ || Object.getPrototypeOf(e);
                        }),
                  n(t)
              );
          }
          e.exports = n;
      },
      function (e, t, n) {
          var o = n(26);
          e.exports = function (e, t) {
              if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
              (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && o(e, t);
          };
      },
      function (e, t) {
          function n() {
              return (
                  (e.exports = n =
                      Object.assign ||
                      function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                          }
                          return e;
                      }),
                  n.apply(this, arguments)
              );
          }
          e.exports = n;
      },
      function (e, t, n) {
          e.exports = n(21)();
      },
      function (e, t) {
          function n(e) {
              return (n =
                  "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                      ? function (e) {
                            return typeof e;
                        }
                      : function (e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                        })(e);
          }
          function o(t) {
              return (
                  "function" == typeof Symbol && "symbol" === n(Symbol.iterator)
                      ? (e.exports = o = function (e) {
                            return n(e);
                        })
                      : (e.exports = o = function (e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : n(e);
                        }),
                  o(t)
              );
          }
          e.exports = o;
      },
      function (e, t, n) {
          var o = n(27);
          e.exports = function (e, t) {
              if (null == e) return {};
              var n,
                  r,
                  i = o(e, t);
              if (Object.getOwnPropertySymbols) {
                  var a = Object.getOwnPropertySymbols(e);
                  for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
              }
              return i;
          };
      },
      function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }), (t.canUseDOM = t.SafeNodeList = t.SafeHTMLCollection = void 0);
          var o,
              r = n(33);
          var i = ((o = r) && o.__esModule ? o : { default: o }).default,
              a = i.canUseDOM ? window.HTMLElement : {};
          (t.SafeHTMLCollection = i.canUseDOM ? window.HTMLCollection : {}), (t.SafeNodeList = i.canUseDOM ? window.NodeList : {}), (t.canUseDOM = i.canUseDOM);
          t.default = a;
      },
      function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var o,
              r = n(28),
              i = (o = r) && o.__esModule ? o : { default: o };
          (t.default = i.default), (e.exports = t.default);
      },
      function (e, t, n) {
          var o = n(37),
              r = n(38),
              i = n(39);
          e.exports = function (e) {
              return o(e) || r(e) || i();
          };
      },
      function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.default = function (e) {
                  return [].slice.call(e.querySelectorAll("*"), 0).filter(a);
              });
          /*!
           * Adapted from jQuery UI core
           *
           * http://jqueryui.com
           *
           * Copyright 2014 jQuery Foundation and other contributors
           * Released under the MIT license.
           * http://jquery.org/license
           *
           * http://api.jqueryui.com/category/ui-core/
           */
          var o = /input|select|textarea|button|object/;
          function r(e) {
              var t = e.offsetWidth <= 0 && e.offsetHeight <= 0;
              if (t && !e.innerHTML) return !0;
              var n = window.getComputedStyle(e);
              return t ? "visible" !== n.getPropertyValue("overflow") || (e.scrollWidth <= 0 && e.scrollHeight <= 0) : "none" == n.getPropertyValue("display");
          }
          function i(e, t) {
              var n = e.nodeName.toLowerCase();
              return (
                  ((o.test(n) && !e.disabled) || ("a" === n && e.href) || t) &&
                  (function (e) {
                      for (var t = e; t && t !== document.body; ) {
                          if (r(t)) return !1;
                          t = t.parentNode;
                      }
                      return !0;
                  })(e)
              );
          }
          function a(e) {
              var t = e.getAttribute("tabindex");
              null === t && (t = void 0);
              var n = isNaN(t);
              return (n || t >= 0) && i(e, !n);
          }
          e.exports = t.default;
      },
      function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.assertNodeList = l),
              (t.setElement = function (e) {
                  var t = e;
                  if ("string" == typeof t && a.canUseDOM) {
                      var n = document.querySelectorAll(t);
                      l(n, t), (t = n);
                  }
                  return (s = t || s);
              }),
              (t.validateElement = c),
              (t.hide = function (e) {
                  var t = !0,
                      n = !1,
                      o = void 0;
                  try {
                      for (var r, i = c(e)[Symbol.iterator](); !(t = (r = i.next()).done); t = !0) {
                          var a = r.value;
                          a.setAttribute("aria-hidden", "true");
                      }
                  } catch (e) {
                      (n = !0), (o = e);
                  } finally {
                      try {
                          !t && i.return && i.return();
                      } finally {
                          if (n) throw o;
                      }
                  }
              }),
              (t.show = function (e) {
                  var t = !0,
                      n = !1,
                      o = void 0;
                  try {
                      for (var r, i = c(e)[Symbol.iterator](); !(t = (r = i.next()).done); t = !0) {
                          var a = r.value;
                          a.removeAttribute("aria-hidden");
                      }
                  } catch (e) {
                      (n = !0), (o = e);
                  } finally {
                      try {
                          !t && i.return && i.return();
                      } finally {
                          if (n) throw o;
                      }
                  }
              }),
              (t.documentNotReadyOrSSRTesting = function () {
                  s = null;
              }),
              (t.resetForTesting = function () {
                  s = null;
              });
          var o,
              r = n(32),
              i = (o = r) && o.__esModule ? o : { default: o },
              a = n(11);
          var s = null;
          function l(e, t) {
              if (!e || !e.length) throw new Error("react-modal: No elements were found for selector " + t + ".");
          }
          function c(e) {
              var t = e || s;
              return t
                  ? Array.isArray(t) || t instanceof HTMLCollection || t instanceof NodeList
                      ? t
                      : [t]
                  : ((0, i.default)(
                        !1,
                        [
                            "react-modal: App element is not defined.",
                            "Please use `Modal.setAppElement(el)` or set `appElement={el}`.",
                            "This is needed so screen readers don't see main content",
                            "when modal is opened. It is not recommended, but you can opt-out",
                            "by setting `ariaHideApp={false}`.",
                        ].join(" ")
                    ),
                    []);
          }
      },
      function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var o = new (function e() {
              var t = this;
              !(function (e, t) {
                  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
              })(this, e),
                  (this.register = function (e) {
                      -1 === t.openInstances.indexOf(e) && (t.openInstances.push(e), t.emit("register"));
                  }),
                  (this.deregister = function (e) {
                      var n = t.openInstances.indexOf(e);
                      -1 !== n && (t.openInstances.splice(n, 1), t.emit("deregister"));
                  }),
                  (this.subscribe = function (e) {
                      t.subscribers.push(e);
                  }),
                  (this.emit = function (e) {
                      t.subscribers.forEach(function (n) {
                          return n(e, t.openInstances.slice());
                      });
                  }),
                  (this.openInstances = []),
                  (this.subscribers = []);
          })();
          (t.default = o), (e.exports = t.default);
      },
      function (e, t, n) {
          var o = n(23),
              r = n(24),
              i = n(25);
          e.exports = function (e, t) {
              return o(e) || r(e, t) || i();
          };
      },
      function (e, t, n) {
          e.exports = n(19);
      },
      function (e, t, n) {
          n(20);
          var o = n(40);
          function r() {
              void 0 !== window.orejimeConfig && (void 0 === window.orejime || window.orejime instanceof Element) && (window.orejime = o.init(window.orejimeConfig));
          }
          "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", r) : r(), (e.exports = o);
      },
      function (e, t, n) {},
      function (e, t, n) {
          "use strict";
          var o = n(22);
          function r() {}
          e.exports = function () {
              function e(e, t, n, r, i, a) {
                  if (a !== o) {
                      var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                      throw ((s.name = "Invariant Violation"), s);
                  }
              }
              function t() {
                  return e;
              }
              e.isRequired = e;
              var n = { array: e, bool: e, func: e, number: e, object: e, string: e, symbol: e, any: e, arrayOf: t, element: e, instanceOf: t, node: e, objectOf: t, oneOf: t, oneOfType: t, shape: t, exact: t };
              return (n.checkPropTypes = r), (n.PropTypes = n), n;
          };
      },
      function (e, t, n) {
          "use strict";
          e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
      function (e, t) {
          e.exports = function (e) {
              if (Array.isArray(e)) return e;
          };
      },
      function (e, t) {
          e.exports = function (e, t) {
              var n = [],
                  o = !0,
                  r = !1,
                  i = void 0;
              try {
                  for (var a, s = e[Symbol.iterator](); !(o = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); o = !0);
              } catch (e) {
                  (r = !0), (i = e);
              } finally {
                  try {
                      o || null == s.return || s.return();
                  } finally {
                      if (r) throw i;
                  }
              }
              return n;
          };
      },
      function (e, t) {
          e.exports = function () {
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
      },
      function (e, t) {
          function n(t, o) {
              return (
                  (e.exports = n =
                      Object.setPrototypeOf ||
                      function (e, t) {
                          return (e.__proto__ = t), e;
                      }),
                  n(t, o)
              );
          }
          e.exports = n;
      },
      function (e, t) {
          e.exports = function (e, t) {
              if (null == e) return {};
              var n,
                  o,
                  r = {},
                  i = Object.keys(e);
              for (o = 0; o < i.length; o++) (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
              return r;
          };
      },
      function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }), (t.bodyOpenClassName = t.portalClassName = void 0);
          var o =
                  Object.assign ||
                  function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = arguments[t];
                          for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                      }
                      return e;
                  },
              r = (function () {
                  function e(e, t) {
                      for (var n = 0; n < t.length; n++) {
                          var o = t[n];
                          (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
                      }
                  }
                  return function (t, n, o) {
                      return n && e(t.prototype, n), o && e(t, o), t;
                  };
              })(),
              i = n(0),
              a = m(i),
              s = m(n(0)),
              l = m(n(8)),
              c = m(n(29)),
              u = (function (e) {
                  if (e && e.__esModule) return e;
                  var t = {};
                  if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                  return (t.default = e), t;
              })(n(15)),
              p = n(11),
              d = m(p),
              f = n(36);
          function m(e) {
              return e && e.__esModule ? e : { default: e };
          }
          function h(e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
          }
          var v = (t.portalClassName = "ReactModalPortal"),
              y = (t.bodyOpenClassName = "ReactModal__Body--open"),
              b = p.canUseDOM && void 0 !== s.default.createPortal,
              g = function () {
                  return b ? s.default.createPortal : s.default.unstable_renderSubtreeIntoContainer;
              };
          function C(e) {
              return e();
          }
          var w = (function (e) {
              function t() {
                  var e, n, r;
                  !(function (e, t) {
                      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                  })(this, t);
                  for (var i = arguments.length, l = Array(i), u = 0; u < i; u++) l[u] = arguments[u];
                  return (
                      (n = r = h(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(l)))),
                      (r.removePortal = function () {
                          !b && s.default.unmountComponentAtNode(r.node);
                          var e = C(r.props.parentSelector);
                          e && e.contains(r.node) ? e.removeChild(r.node) : console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.');
                      }),
                      (r.portalRef = function (e) {
                          r.portal = e;
                      }),
                      (r.renderPortal = function (e) {
                          var n = g()(r, a.default.createElement(c.default, o({ defaultStyles: t.defaultStyles }, e)), r.node);
                          r.portalRef(n);
                      }),
                      h(r, n)
                  );
              }
              return (
                  (function (e, t) {
                      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                      (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                  })(t, i.Component),
                  r(
                      t,
                      [
                          {
                              key: "componentDidMount",
                              value: function () {
                                  p.canUseDOM &&
                                      (b || (this.node = document.createElement("div")), (this.node.className = this.props.portalClassName), C(this.props.parentSelector).appendChild(this.node), !b && this.renderPortal(this.props));
                              },
                          },
                          {
                              key: "getSnapshotBeforeUpdate",
                              value: function (e) {
                                  return { prevParent: C(e.parentSelector), nextParent: C(this.props.parentSelector) };
                              },
                          },
                          {
                              key: "componentDidUpdate",
                              value: function (e, t, n) {
                                  if (p.canUseDOM) {
                                      var o = this.props,
                                          r = o.isOpen,
                                          i = o.portalClassName;
                                      e.portalClassName !== i && (this.node.className = i);
                                      var a = n.prevParent,
                                          s = n.nextParent;
                                      s !== a && (a.removeChild(this.node), s.appendChild(this.node)), (e.isOpen || r) && !b && this.renderPortal(this.props);
                                  }
                              },
                          },
                          {
                              key: "componentWillUnmount",
                              value: function () {
                                  if (p.canUseDOM && this.node && this.portal) {
                                      var e = this.portal.state,
                                          t = Date.now(),
                                          n = e.isOpen && this.props.closeTimeoutMS && (e.closesAt || t + this.props.closeTimeoutMS);
                                      n ? (e.beforeClose || this.portal.closeWithTimeout(), setTimeout(this.removePortal, n - t)) : this.removePortal();
                                  }
                              },
                          },
                          {
                              key: "render",
                              value: function () {
                                  return p.canUseDOM && b
                                      ? (!this.node && b && (this.node = document.createElement("div")), g()(a.default.createElement(c.default, o({ ref: this.portalRef, defaultStyles: t.defaultStyles }, this.props)), this.node))
                                      : null;
                              },
                          },
                      ],
                      [
                          {
                              key: "setAppElement",
                              value: function (e) {
                                  u.setElement(e);
                              },
                          },
                      ]
                  ),
                  t
              );
          })();
          (w.propTypes = {
              isOpen: l.default.bool.isRequired,
              style: l.default.shape({ content: l.default.object, overlay: l.default.object }),
              portalClassName: l.default.string,
              bodyOpenClassName: l.default.string,
              htmlOpenClassName: l.default.string,
              className: l.default.oneOfType([l.default.string, l.default.shape({ base: l.default.string.isRequired, afterOpen: l.default.string.isRequired, beforeClose: l.default.string.isRequired })]),
              overlayClassName: l.default.oneOfType([l.default.string, l.default.shape({ base: l.default.string.isRequired, afterOpen: l.default.string.isRequired, beforeClose: l.default.string.isRequired })]),
              appElement: l.default.oneOfType([l.default.instanceOf(d.default), l.default.instanceOf(p.SafeHTMLCollection), l.default.instanceOf(p.SafeNodeList), l.default.arrayOf(l.default.instanceOf(d.default))]),
              onAfterOpen: l.default.func,
              onRequestClose: l.default.func,
              closeTimeoutMS: l.default.number,
              ariaHideApp: l.default.bool,
              shouldFocusAfterRender: l.default.bool,
              shouldCloseOnOverlayClick: l.default.bool,
              shouldReturnFocusAfterClose: l.default.bool,
              preventScroll: l.default.bool,
              parentSelector: l.default.func,
              aria: l.default.object,
              data: l.default.object,
              role: l.default.string,
              contentLabel: l.default.string,
              shouldCloseOnEsc: l.default.bool,
              overlayRef: l.default.func,
              contentRef: l.default.func,
              id: l.default.string,
              overlayElement: l.default.func,
              contentElement: l.default.func,
          }),
              (w.defaultProps = {
                  isOpen: !1,
                  portalClassName: v,
                  bodyOpenClassName: y,
                  role: "dialog",
                  ariaHideApp: !0,
                  closeTimeoutMS: 0,
                  shouldFocusAfterRender: !0,
                  shouldCloseOnEsc: !0,
                  shouldCloseOnOverlayClick: !0,
                  shouldReturnFocusAfterClose: !0,
                  preventScroll: !1,
                  parentSelector: function () {
                      return document.body;
                  },
                  overlayElement: function (e, t) {
                      return a.default.createElement("div", e, t);
                  },
                  contentElement: function (e, t) {
                      return a.default.createElement("div", e, t);
                  },
              }),
              (w.defaultStyles = {
                  overlay: { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(255, 255, 255, 0.75)" },
                  content: {
                      position: "absolute",
                      top: "40px",
                      left: "40px",
                      right: "40px",
                      bottom: "40px",
                      border: "1px solid #ccc",
                      background: "#fff",
                      overflow: "auto",
                      WebkitOverflowScrolling: "touch",
                      borderRadius: "4px",
                      outline: "none",
                      padding: "20px",
                  },
              }),
              (0, f.polyfill)(w),
              (t.default = w);
      },
      function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var o =
                  Object.assign ||
                  function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = arguments[t];
                          for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                      }
                      return e;
                  },
              r =
                  "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                      ? function (e) {
                            return typeof e;
                        }
                      : function (e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                        },
              i = (function () {
                  function e(e, t) {
                      for (var n = 0; n < t.length; n++) {
                          var o = t[n];
                          (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
                      }
                  }
                  return function (t, n, o) {
                      return n && e(t.prototype, n), o && e(t, o), t;
                  };
              })(),
              a = n(0),
              s = v(n(8)),
              l = h(n(30)),
              c = v(n(31)),
              u = h(n(15)),
              p = h(n(34)),
              d = n(11),
              f = v(d),
              m = v(n(16));
          function h(e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
              return (t.default = e), t;
          }
          function v(e) {
              return e && e.__esModule ? e : { default: e };
          }
          n(35);
          var y = { overlay: "ReactModal__Overlay", content: "ReactModal__Content" },
              b = 9,
              g = 27,
              C = 0,
              w = (function (e) {
                  function t(e) {
                      !(function (e, t) {
                          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                      })(this, t);
                      var n = (function (e, t) {
                          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
                      })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                      return (
                          (n.setOverlayRef = function (e) {
                              (n.overlay = e), n.props.overlayRef && n.props.overlayRef(e);
                          }),
                          (n.setContentRef = function (e) {
                              (n.content = e), n.props.contentRef && n.props.contentRef(e);
                          }),
                          (n.afterClose = function () {
                              var e = n.props,
                                  t = e.appElement,
                                  o = e.ariaHideApp,
                                  r = e.htmlOpenClassName,
                                  i = e.bodyOpenClassName;
                              i && p.remove(document.body, i),
                                  r && p.remove(document.getElementsByTagName("html")[0], r),
                                  o && C > 0 && 0 === (C -= 1) && u.show(t),
                                  n.props.shouldFocusAfterRender && (n.props.shouldReturnFocusAfterClose ? (l.returnFocus(n.props.preventScroll), l.teardownScopedFocus()) : l.popWithoutFocus()),
                                  n.props.onAfterClose && n.props.onAfterClose(),
                                  m.default.deregister(n);
                          }),
                          (n.open = function () {
                              n.beforeOpen(),
                                  n.state.afterOpen && n.state.beforeClose
                                      ? (clearTimeout(n.closeTimer), n.setState({ beforeClose: !1 }))
                                      : (n.props.shouldFocusAfterRender && (l.setupScopedFocus(n.node), l.markForFocusLater()),
                                        n.setState({ isOpen: !0 }, function () {
                                            n.setState({ afterOpen: !0 }), n.props.isOpen && n.props.onAfterOpen && n.props.onAfterOpen({ overlayEl: n.overlay, contentEl: n.content });
                                        }));
                          }),
                          (n.close = function () {
                              n.props.closeTimeoutMS > 0 ? n.closeWithTimeout() : n.closeWithoutTimeout();
                          }),
                          (n.focusContent = function () {
                              return n.content && !n.contentHasFocus() && n.content.focus({ preventScroll: !0 });
                          }),
                          (n.closeWithTimeout = function () {
                              var e = Date.now() + n.props.closeTimeoutMS;
                              n.setState({ beforeClose: !0, closesAt: e }, function () {
                                  n.closeTimer = setTimeout(n.closeWithoutTimeout, n.state.closesAt - Date.now());
                              });
                          }),
                          (n.closeWithoutTimeout = function () {
                              n.setState({ beforeClose: !1, isOpen: !1, afterOpen: !1, closesAt: null }, n.afterClose);
                          }),
                          (n.handleKeyDown = function (e) {
                              e.keyCode === b && (0, c.default)(n.content, e), n.props.shouldCloseOnEsc && e.keyCode === g && (e.stopPropagation(), n.requestClose(e));
                          }),
                          (n.handleOverlayOnClick = function (e) {
                              null === n.shouldClose && (n.shouldClose = !0), n.shouldClose && n.props.shouldCloseOnOverlayClick && (n.ownerHandlesClose() ? n.requestClose(e) : n.focusContent()), (n.shouldClose = null);
                          }),
                          (n.handleContentOnMouseUp = function () {
                              n.shouldClose = !1;
                          }),
                          (n.handleOverlayOnMouseDown = function (e) {
                              n.props.shouldCloseOnOverlayClick || e.target != n.overlay || e.preventDefault();
                          }),
                          (n.handleContentOnClick = function () {
                              n.shouldClose = !1;
                          }),
                          (n.handleContentOnMouseDown = function () {
                              n.shouldClose = !1;
                          }),
                          (n.requestClose = function (e) {
                              return n.ownerHandlesClose() && n.props.onRequestClose(e);
                          }),
                          (n.ownerHandlesClose = function () {
                              return n.props.onRequestClose;
                          }),
                          (n.shouldBeClosed = function () {
                              return !n.state.isOpen && !n.state.beforeClose;
                          }),
                          (n.contentHasFocus = function () {
                              return document.activeElement === n.content || n.content.contains(document.activeElement);
                          }),
                          (n.buildClassName = function (e, t) {
                              var o = "object" === (void 0 === t ? "undefined" : r(t)) ? t : { base: y[e], afterOpen: y[e] + "--after-open", beforeClose: y[e] + "--before-close" },
                                  i = o.base;
                              return n.state.afterOpen && (i = i + " " + o.afterOpen), n.state.beforeClose && (i = i + " " + o.beforeClose), "string" == typeof t && t ? i + " " + t : i;
                          }),
                          (n.attributesFromObject = function (e, t) {
                              return Object.keys(t).reduce(function (n, o) {
                                  return (n[e + "-" + o] = t[o]), n;
                              }, {});
                          }),
                          (n.state = { afterOpen: !1, beforeClose: !1 }),
                          (n.shouldClose = null),
                          (n.moveFromContentToOverlay = null),
                          n
                      );
                  }
                  return (
                      (function (e, t) {
                          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                          (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                      })(t, a.Component),
                      i(t, [
                          {
                              key: "componentDidMount",
                              value: function () {
                                  this.props.isOpen && this.open();
                              },
                          },
                          {
                              key: "componentDidUpdate",
                              value: function (e, t) {
                                  this.props.isOpen && !e.isOpen ? this.open() : !this.props.isOpen && e.isOpen && this.close(), this.props.shouldFocusAfterRender && this.state.isOpen && !t.isOpen && this.focusContent();
                              },
                          },
                          {
                              key: "componentWillUnmount",
                              value: function () {
                                  this.state.isOpen && this.afterClose(), clearTimeout(this.closeTimer);
                              },
                          },
                          {
                              key: "beforeOpen",
                              value: function () {
                                  var e = this.props,
                                      t = e.appElement,
                                      n = e.ariaHideApp,
                                      o = e.htmlOpenClassName,
                                      r = e.bodyOpenClassName;
                                  r && p.add(document.body, r), o && p.add(document.getElementsByTagName("html")[0], o), n && ((C += 1), u.hide(t)), m.default.register(this);
                              },
                          },
                          {
                              key: "render",
                              value: function () {
                                  var e = this.props,
                                      t = e.id,
                                      n = e.className,
                                      r = e.overlayClassName,
                                      i = e.defaultStyles,
                                      a = e.children,
                                      s = n ? {} : i.content,
                                      l = r ? {} : i.overlay;
                                  if (this.shouldBeClosed()) return null;
                                  var c = {
                                          ref: this.setOverlayRef,
                                          className: this.buildClassName("overlay", r),
                                          style: o({}, l, this.props.style.overlay),
                                          onClick: this.handleOverlayOnClick,
                                          onMouseDown: this.handleOverlayOnMouseDown,
                                      },
                                      u = o(
                                          {
                                              id: t,
                                              ref: this.setContentRef,
                                              style: o({}, s, this.props.style.content),
                                              className: this.buildClassName("content", n),
                                              tabIndex: "-1",
                                              onKeyDown: this.handleKeyDown,
                                              onMouseDown: this.handleContentOnMouseDown,
                                              onMouseUp: this.handleContentOnMouseUp,
                                              onClick: this.handleContentOnClick,
                                              role: this.props.role,
                                              "aria-label": this.props.contentLabel,
                                          },
                                          this.attributesFromObject("aria", o({ modal: !0 }, this.props.aria)),
                                          this.attributesFromObject("data", this.props.data || {}),
                                          { "data-testid": this.props.testId }
                                      ),
                                      p = this.props.contentElement(u, a);
                                  return this.props.overlayElement(c, p);
                              },
                          },
                      ]),
                      t
                  );
              })();
          (w.defaultProps = { style: { overlay: {}, content: {} }, defaultStyles: {} }),
              (w.propTypes = {
                  isOpen: s.default.bool.isRequired,
                  defaultStyles: s.default.shape({ content: s.default.object, overlay: s.default.object }),
                  style: s.default.shape({ content: s.default.object, overlay: s.default.object }),
                  className: s.default.oneOfType([s.default.string, s.default.object]),
                  overlayClassName: s.default.oneOfType([s.default.string, s.default.object]),
                  bodyOpenClassName: s.default.string,
                  htmlOpenClassName: s.default.string,
                  ariaHideApp: s.default.bool,
                  appElement: s.default.oneOfType([s.default.instanceOf(f.default), s.default.instanceOf(d.SafeHTMLCollection), s.default.instanceOf(d.SafeNodeList), s.default.arrayOf(s.default.instanceOf(f.default))]),
                  onAfterOpen: s.default.func,
                  onAfterClose: s.default.func,
                  onRequestClose: s.default.func,
                  closeTimeoutMS: s.default.number,
                  shouldFocusAfterRender: s.default.bool,
                  shouldCloseOnOverlayClick: s.default.bool,
                  shouldReturnFocusAfterClose: s.default.bool,
                  preventScroll: s.default.bool,
                  role: s.default.string,
                  contentLabel: s.default.string,
                  aria: s.default.object,
                  data: s.default.object,
                  children: s.default.node,
                  shouldCloseOnEsc: s.default.bool,
                  overlayRef: s.default.func,
                  contentRef: s.default.func,
                  id: s.default.string,
                  overlayElement: s.default.func,
                  contentElement: s.default.func,
                  testId: s.default.string,
              }),
              (t.default = w),
              (e.exports = t.default);
      },
      function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.handleBlur = c),
              (t.handleFocus = u),
              (t.markForFocusLater = function () {
                  a.push(document.activeElement);
              }),
              (t.returnFocus = function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                      t = null;
                  try {
                      return void (0 !== a.length && (t = a.pop()).focus({ preventScroll: e }));
                  } catch (e) {
                      console.warn(["You tried to return focus to", t, "but it is not in the DOM anymore"].join(" "));
                  }
              }),
              (t.popWithoutFocus = function () {
                  a.length > 0 && a.pop();
              }),
              (t.setupScopedFocus = function (e) {
                  (s = e), window.addEventListener ? (window.addEventListener("blur", c, !1), document.addEventListener("focus", u, !0)) : (window.attachEvent("onBlur", c), document.attachEvent("onFocus", u));
              }),
              (t.teardownScopedFocus = function () {
                  (s = null), window.addEventListener ? (window.removeEventListener("blur", c), document.removeEventListener("focus", u)) : (window.detachEvent("onBlur", c), document.detachEvent("onFocus", u));
              });
          var o,
              r = n(14),
              i = (o = r) && o.__esModule ? o : { default: o };
          var a = [],
              s = null,
              l = !1;
          function c() {
              l = !0;
          }
          function u() {
              if (l) {
                  if (((l = !1), !s)) return;
                  setTimeout(function () {
                      s.contains(document.activeElement) || ((0, i.default)(s)[0] || s).focus();
                  }, 0);
              }
          }
      },
      function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.default = function (e, t) {
                  var n = (0, i.default)(e);
                  if (!n.length) return void t.preventDefault();
                  var o = void 0,
                      r = t.shiftKey,
                      a = n[0],
                      s = n[n.length - 1];
                  if (e === document.activeElement) {
                      if (!r) return;
                      o = s;
                  }
                  s !== document.activeElement || r || (o = a);
                  a === document.activeElement && r && (o = s);
                  if (o) return t.preventDefault(), void o.focus();
                  var l = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
                  if (null == l || "Chrome" == l[1] || null != /\biPod\b|\biPad\b/g.exec(navigator.userAgent)) return;
                  var c = n.indexOf(document.activeElement);
                  c > -1 && (c += r ? -1 : 1);
                  if (void 0 === (o = n[c])) return t.preventDefault(), void (o = r ? s : a).focus();
                  t.preventDefault(), o.focus();
              });
          var o,
              r = n(14),
              i = (o = r) && o.__esModule ? o : { default: o };
          e.exports = t.default;
      },
      function (e, t, n) {
          "use strict";
          var o = function () {};
          e.exports = o;
      },
      function (e, t, n) {
          var o;
          /*!
Copyright (c) 2015 Jed Watson.
Based on code that is Copyright 2013-2015, Facebook, Inc.
All rights reserved.
*/
          /*!
Copyright (c) 2015 Jed Watson.
Based on code that is Copyright 2013-2015, Facebook, Inc.
All rights reserved.
*/
          !(function () {
              "use strict";
              var r = !("undefined" == typeof window || !window.document || !window.document.createElement),
                  i = { canUseDOM: r, canUseWorkers: "undefined" != typeof Worker, canUseEventListeners: r && !(!window.addEventListener && !window.attachEvent), canUseViewport: r && !!window.screen };
              void 0 ===
                  (o = function () {
                      return i;
                  }.call(t, n, t, e)) || (e.exports = o);
          })();
      },
      function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.dumpClassLists = function () {
                  0;
              });
          var o = {},
              r = {};
          (t.add = function (e, t) {
              return (
                  (n = e.classList),
                  (i = "html" == e.nodeName.toLowerCase() ? o : r),
                  void t.split(" ").forEach(function (e) {
                      !(function (e, t) {
                          e[t] || (e[t] = 0), (e[t] += 1);
                      })(i, e),
                          n.add(e);
                  })
              );
              var n, i;
          }),
              (t.remove = function (e, t) {
                  return (
                      (n = e.classList),
                      (i = "html" == e.nodeName.toLowerCase() ? o : r),
                      void t.split(" ").forEach(function (e) {
                          !(function (e, t) {
                              e[t] && (e[t] -= 1);
                          })(i, e),
                              0 === i[e] && n.remove(e);
                      })
                  );
                  var n, i;
              });
      },
      function (e, t, n) {
          "use strict";
          var o,
              r = n(16),
              i = (o = r) && o.__esModule ? o : { default: o };
          var a = void 0,
              s = void 0,
              l = [];
          function c() {
              0 !== l.length && l[l.length - 1].focusContent();
          }
          i.default.subscribe(function (e, t) {
              (a && s) ||
                  ((a = document.createElement("div")).setAttribute("data-react-modal-body-trap", ""),
                  (a.style.position = "absolute"),
                  (a.style.opacity = "0"),
                  a.setAttribute("tabindex", "0"),
                  a.addEventListener("focus", c),
                  (s = a.cloneNode()).addEventListener("focus", c)),
                  (l = t).length > 0
                      ? (document.body.firstChild !== a && document.body.insertBefore(a, document.body.firstChild), document.body.lastChild !== s && document.body.appendChild(s))
                      : (a.parentElement && a.parentElement.removeChild(a), s.parentElement && s.parentElement.removeChild(s));
          });
      },
      function (e, t, n) {
          "use strict";
          function o() {
              var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
              null != e && this.setState(e);
          }
          function r(e) {
              this.setState(
                  function (t) {
                      var n = this.constructor.getDerivedStateFromProps(e, t);
                      return null != n ? n : null;
                  }.bind(this)
              );
          }
          function i(e, t) {
              try {
                  var n = this.props,
                      o = this.state;
                  (this.props = e), (this.state = t), (this.__reactInternalSnapshotFlag = !0), (this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, o));
              } finally {
                  (this.props = n), (this.state = o);
              }
          }
          function a(e) {
              var t = e.prototype;
              if (!t || !t.isReactComponent) throw new Error("Can only polyfill class components");
              if ("function" != typeof e.getDerivedStateFromProps && "function" != typeof t.getSnapshotBeforeUpdate) return e;
              var n = null,
                  a = null,
                  s = null;
              if (
                  ("function" == typeof t.componentWillMount ? (n = "componentWillMount") : "function" == typeof t.UNSAFE_componentWillMount && (n = "UNSAFE_componentWillMount"),
                  "function" == typeof t.componentWillReceiveProps ? (a = "componentWillReceiveProps") : "function" == typeof t.UNSAFE_componentWillReceiveProps && (a = "UNSAFE_componentWillReceiveProps"),
                  "function" == typeof t.componentWillUpdate ? (s = "componentWillUpdate") : "function" == typeof t.UNSAFE_componentWillUpdate && (s = "UNSAFE_componentWillUpdate"),
                  null !== n || null !== a || null !== s)
              ) {
                  var l = e.displayName || e.name,
                      c = "function" == typeof e.getDerivedStateFromProps ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
                  throw Error(
                      "Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" +
                          l +
                          " uses " +
                          c +
                          " but also contains the following legacy lifecycles:" +
                          (null !== n ? "\n  " + n : "") +
                          (null !== a ? "\n  " + a : "") +
                          (null !== s ? "\n  " + s : "") +
                          "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks"
                  );
              }
              if (("function" == typeof e.getDerivedStateFromProps && ((t.componentWillMount = o), (t.componentWillReceiveProps = r)), "function" == typeof t.getSnapshotBeforeUpdate)) {
                  if ("function" != typeof t.componentDidUpdate) throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
                  t.componentWillUpdate = i;
                  var u = t.componentDidUpdate;
                  t.componentDidUpdate = function (e, t, n) {
                      var o = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : n;
                      u.call(this, e, t, o);
                  };
              }
              return e;
          }
          n.r(t),
              n.d(t, "polyfill", function () {
                  return a;
              }),
              (o.__suppressDeprecationWarning = !0),
              (r.__suppressDeprecationWarning = !0),
              (i.__suppressDeprecationWarning = !0);
      },
      function (e, t) {
          e.exports = function (e) {
              if (Array.isArray(e)) {
                  for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                  return n;
              }
          };
      },
      function (e, t) {
          e.exports = function (e) {
              if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
          };
      },
      function (e, t) {
          e.exports = function () {
              throw new TypeError("Invalid attempt to spread non-iterable instance");
          };
      },
      function (e, t, n) {
          "use strict";
          n.r(t);
          var o = n(0),
              r = n(17),
              i = n.n(r),
              a = n(1),
              s = n.n(a),
              l = n(2),
              c = n.n(l);
          function u() {
              for (var e = document.cookie.split(";"), t = [], n = new RegExp("^\\s*([^=]+)\\s*=\\s*(.*?)$"), o = 0; o < e.length; o++) {
                  var r = e[o],
                      i = n.exec(r);
                  null !== i && t.push({ name: i[1], value: i[2] });
              }
              return t;
          }
          function p(e, t) {
              return "".concat(e, "=").concat(t);
          }
          function d(e, t, n) {
              var o = "".concat(e, "=; Max-Age=-99999999;").concat(void 0 !== t ? " path=".concat(t, ";") : " path=/;");
              void 0 === n
                  ? ((document.cookie = o), (document.cookie = "".concat(o, " domain=.").concat(location.hostname, ";")), (document.cookie = "".concat(o, " domain=.").concat(location.hostname.split(".").slice(-2).join("."), ";")))
                  : (document.cookie = "".concat(o, " domain=").concat(n, ";"));
          }
          var f = (function () {
                  function e(t) {
                      s()(this, e),
                          (this.config = t),
                          (this.consents = this.defaultConsents),
                          (this.confirmed = !1),
                          (this.changed = !1),
                          (this.states = {}),
                          (this.executedOnce = {}),
                          (this.watchers = new Set([])),
                          this.loadConsents(),
                          this.applyConsents();
                  }
                  return (
                      c()(e, [
                          {
                              key: "watch",
                              value: function (e) {
                                  this.watchers.has(e) || this.watchers.add(e);
                              },
                          },
                          {
                              key: "unwatch",
                              value: function (e) {
                                  this.watchers.has(e) && this.watchers.delete(e);
                              },
                          },
                          {
                              key: "notify",
                              value: function (e, t) {
                                  var n = this;
                                  this.watchers.forEach(function (o) {
                                      o.update(n, e, t);
                                  });
                              },
                          },
                          {
                              key: "getApp",
                              value: function (e) {
                                  var t = this.config.apps.filter(function (t) {
                                      return t.name == e;
                                  });
                                  if (t.length > 0) return t[0];
                              },
                          },
                          {
                              key: "getDefaultConsent",
                              value: function (e) {
                                  var t = e.default;
                                  return void 0 === t && (t = this.config.default), void 0 === t && (t = !1), t;
                              },
                          },
                          {
                              key: "declineAll",
                              value: function () {
                                  var e = this;
                                  this.config.apps.map(function (t) {
                                      e.updateConsent(t, !1);
                                  });
                              },
                          },
                          {
                              key: "acceptAll",
                              value: function () {
                                  var e = this;
                                  this.config.apps.map(function (t) {
                                      e.updateConsent(t, !0);
                                  });
                              },
                          },
                          {
                              key: "updateConsent",
                              value: function (e, t) {
                                  (e.required && !t) || ((this.consents[e.name] = t), this.notify("consents", this.consents));
                              },
                          },
                          {
                              key: "resetConsent",
                              value: function () {
                                  (this.consents = this.defaultConsents), (this.confirmed = !1), this.applyConsents(), d(this.cookieName), this.notify("consents", this.consents);
                              },
                          },
                          {
                              key: "getConsent",
                              value: function (e) {
                                  return this.consents[e] || !1;
                              },
                          },
                          {
                              key: "_checkConsents",
                              value: function () {
                                  var e = !0,
                                      t = this.config.apps.map(function (e) {
                                          return e.name;
                                      });
                                  Object.keys(this.consents).forEach(
                                      function (e) {
                                          -1 === t.indexOf(e) && delete this.consents[e];
                                      }.bind(this)
                                  ),
                                      this.config.apps.forEach(
                                          function (t) {
                                              void 0 === this.consents[t.name] && ((this.consents[t.name] = this.getDefaultConsent(t)), (e = !1));
                                          }.bind(this)
                                      ),
                                      (this.confirmed = e),
                                      e || (this.changed = !0);
                              },
                          },
                          {
                              key: "loadConsents",
                              value: function () {
                                  var e = (function (e) {
                                      for (var t = u(), n = 0; n < t.length; n++) if (t[n].name == e) return t[n];
                                      return null;
                                  })(this.cookieName);
                                  return null !== e && "" !== e.value && ((this.consents = this.config.parseCookie(e.value)), this._checkConsents(), this.notify("consents", this.consents)), this.consents;
                              },
                          },
                          {
                              key: "saveAndApplyConsents",
                              value: function () {
                                  this.saveConsents(), this.applyConsents();
                              },
                          },
                          {
                              key: "saveConsents",
                              value: function () {
                                  null === this.consents && d(this.cookieName);
                                  var e = this.config.stringifyCookie(this.consents);
                                  !(function (e) {
                                      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                                          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                          o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
                                          r = [p(e, t)];
                                      if (n) {
                                          var i = new Date();
                                          i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3), r.push(p("expires", i.toUTCString()));
                                      }
                                      o && r.push(p("domain", o)), r.push(p("path", "/")), (document.cookie = r.join("; "));
                                  })(this.cookieName, e, this.config.cookieExpiresAfterDays || 120, this.config.cookieDomain),
                                      (this.confirmed = !0),
                                      (this.changed = !1);
                              },
                          },
                          {
                              key: "applyConsents",
                              value: function () {
                                  for (var e = 0; e < this.config.apps.length; e++) {
                                      var t = this.config.apps[e],
                                          n = this.states[t.name],
                                          o = this.confirmed || (void 0 !== t.optOut ? t.optOut : this.config.optOut || !1),
                                          r = this.getConsent(t.name) && o;
                                      n !== r && (this.updateAppElements(t, r), this.updateAppCookies(t, r), void 0 !== t.callback && t.callback(r, t), (this.states[t.name] = r));
                                  }
                              },
                          },
                          {
                              key: "updateAppElements",
                              value: function (e, t) {
                                  if (t) {
                                      if (e.onlyOnce && this.executedOnce[e.name]) return;
                                      this.executedOnce[e.name] = !0;
                                  }
                                  for (var n = document.querySelectorAll("[data-name='" + e.name + "']"), o = 0; o < n.length; o++) {
                                      var r = n[o],
                                          i = r.parentElement,
                                          a = r.dataset,
                                          s = a.type,
                                          l = (a.name, ["href", "src"]);
                                      if ("SCRIPT" == r.tagName) {
                                          for (var c = document.createElement("script"), u = Object.keys(a), p = 0; p < u.length; p++) {
                                              var d = u[p];
                                              c.dataset[d] = a[d];
                                          }
                                          (c.type = "opt-in"),
                                              (c.innerText = r.innerText),
                                              (c.text = r.text),
                                              (c.class = r.class),
                                              (c.style.cssText = r.style),
                                              (c.id = r.id),
                                              (c.name = r.name),
                                              (c.defer = r.defer),
                                              (c.async = r.async),
                                              t && ((c.type = s), void 0 !== a.src && (c.src = a.src)),
                                              i.insertBefore(c, r),
                                              i.removeChild(r);
                                      } else if (t) {
                                          for (var f = 0; f < l.length; f++) {
                                              var m = a[(v = l[f])];
                                              void 0 !== m && (void 0 === a["original" + v] && (a["original" + v] = r[v]), (r[v] = m));
                                          }
                                          void 0 !== a.title && (r.title = a.title), void 0 !== a.originalDisplay && (r.style.display = a.originalDisplay);
                                      } else {
                                          void 0 !== a.title && r.removeAttribute("title"), "true" === a.hide && (void 0 === a.originalDisplay && (a.originalDisplay = r.style.display), (r.style.display = "none"));
                                          for (var h = 0; h < l.length; h++) {
                                              var v;
                                              void 0 !== a[(v = l[h])] && void 0 !== a["original" + v] && (r[v] = a["original" + v]);
                                          }
                                      }
                                  }
                              },
                          },
                          {
                              key: "updateAppCookies",
                              value: function (e, t) {
                                  if (!t && void 0 !== e.cookies && e.cookies.length > 0)
                                      for (var n = u(), o = 0; o < e.cookies.length; o++) {
                                          var r = e.cookies[o],
                                              a = void 0,
                                              s = void 0;
                                          if (r instanceof Array) {
                                              var l = r,
                                                  c = i()(l, 3);
                                              (r = c[0]), (a = c[1]), (s = c[2]);
                                          }
                                          r instanceof RegExp || (r = new RegExp("^" + r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") + "$"));
                                          for (var p = 0; p < n.length; p++) {
                                              var f = n[p];
                                              null !== r.exec(f.name) && d(f.name, a, s);
                                          }
                                      }
                              },
                          },
                          {
                              key: "cookieName",
                              get: function () {
                                  return this.config.cookieName || "orejime";
                              },
                          },
                          {
                              key: "defaultConsents",
                              get: function () {
                                  for (var e = {}, t = 0; t < this.config.apps.length; t++) {
                                      var n = this.config.apps[t];
                                      e[n.name] = this.getDefaultConsent(n);
                                  }
                                  return e;
                              },
                          },
                      ]),
                      e
                  );
              })(),
              m = {
                  cs: {
                      consentModal: {
                          title: "Informace, které shromažďujeme",
                          description: "Zde si můžete prohlédnout a přizpůsobit informace, které o vás shromažďujeme.\n",
                          privacyPolicy: { name: "zásady ochrany osobních údajů", text: "Chcete-li se dozvědět více, přečtěte si naše {privacyPolicy}.\n" },
                      },
                      consentNotice: {
                          title: "Nastavení cookies",
                          changeDescription: "Od vaší poslední návštěvy došlo ke změnám, aktualizujte prosím svůj souhlas.",
                          learnMore: "Upravit nastavení",
                          description: "Na našem webu používáme soubory cookies, abychom zajistili jejich správné fungování a co nejlepší uživatelskou zkušenost. Kliknutím na tlačítko „V pořádku“ dáváte svůj souhlas s použitím cookies pro účely: {purposes}.\n",
                      },
                      accept: "V pořádku",
                      acceptTitle: "Přijměte soubory cookie",
                      acceptAll: "Přijmout všechny",
                      save: "Potvrdit výběr",
                      saveData: "Uložit moji konfiguraci na shromážďované informace",
                      decline: "Povolit jen nezbytné cookies",
                      declineAll: "Odmítnout všechny aplikace",
                      close: "Zavřít",
                      enabled: "Povoleno",
                      disabled: "Zakázáno",
                      app: {
                          optOut: { title: "(opt-out)", description: "Tato aplikace se načte ve výchozím nastavení (ale můžete se odhlásit)" },
                          required: { title: "(vyžadováno)", description: "Tato aplikace je vždy vyžadována" },
                          purposes: "Účely",
                          purpose: "Účel",
                      },
                      poweredBy: " ",
                      newWindow: "nové okno",
                  },
                  de: {
                      consentModal: {
                          title: "Informationen die wir sammeln",
                          description: "Hier können Sie einsehen und anpassen, welche Information wir über Sie sammeln.\n",
                          privacyPolicy: { name: "Datenschutzerklärung", text: "Bitte lesen Sie unsere {privacyPolicy} um weitere Details zu erfahren.\n" },
                      },
                      consentNotice: {
                          changeDescription: "Es gab Änderungen seit Ihrem letzten Besuch, bitte aktualisieren Sie Ihre Auswahl.",
                          description: "Wir speichern und verarbeiten Ihre personenbezogenen Informationen für folgende Zwecke: {purposes}.\n",
                          learnMore: "Mehr erfahren",
                      },
                      save: "Speichern",
                      decline: "Ablehnen",
                      app: {
                          optOut: { title: "(Opt-Out)", description: "Diese Anwendung wird standarmäßig gelanden (aber Sie können sie deaktivieren)" },
                          required: { title: "(immer notwendig)", description: "Diese Anwendung wird immer benötigt" },
                          purposes: "Zwecke",
                          purpose: "Zweck",
                      },
                      poweredBy: "Realisiert mit Orejime",
                  },
                  en: {
                      consentModal: {
                          title: "Information that we collect",
                          description: "Here you can see and customize the information that we collect about you.\n",
                          privacyPolicy: { name: "privacy policy", text: "To learn more, please read our {privacyPolicy}.\n" },
                      },
                      consentNotice: {
                          changeDescription: "There were changes since your last visit, please update your consent.",
                          description: "We collect and process your personal information for the following purposes: {purposes}.\n",
                          learnMore: "Learn more",
                      },
                      accept: "Accept",
                      acceptTitle: "Accept cookies",
                      acceptAll: "Accept all apps",
                      save: "Save",
                      saveData: "Save my configuration on collected information",
                      decline: "Decline",
                      declineAll: "Decline all apps",
                      close: "Close",
                      enabled: "Enabled",
                      disabled: "Disabled",
                      app: {
                          optOut: { title: "(opt-out)", description: "This app is loaded by default (but you can opt out)" },
                          required: { title: "(always required)", description: "This application is always required" },
                          purposes: "Purposes",
                          purpose: "Purpose",
                      },
                      poweredBy: "Powered by Orejime",
                      newWindow: "new window",
                  },
                  fr: {
                      consentModal: {
                          title: "Les informations que nous collectons",
                          description: "Ici, vous pouvez voir et personnaliser les informations que nous collectons sur vous.\n",
                          privacyPolicy: { name: "politique de confidentialité", text: "Pour en savoir plus, merci de lire notre {privacyPolicy}.\n" },
                      },
                      consentNotice: {
                          changeDescription: "Des modifications ont eu lieu depuis votre dernière visite, merci de mettre à jour votre consentement.",
                          description: "Nous collectons et traitons vos informations personnelles dans le but suivant : {purposes}.\n",
                          learnMore: "En savoir plus",
                      },
                      accept: "Accepter",
                      acceptTitle: "Accepter les cookies",
                      acceptAll: "Tout accepter",
                      save: "Sauvegarder",
                      saveData: "Sauvegarder ma configuration sur les informations collectées",
                      decline: "Refuser",
                      declineAll: "Tout refuser",
                      close: "Fermer",
                      enabled: "Activé",
                      disabled: "Désactivé",
                      app: {
                          optOut: { title: "(opt-out)", description: "Cette application est chargée par défaut (mais vous pouvez la désactiver)" },
                          required: { title: "(toujours requis)", description: "Cette application est toujours requise" },
                          purposes: "Utilisations",
                          purpose: "Utilisation",
                      },
                      poweredBy: "Propulsé par Orejime",
                      newWindow: "nouvelle fenêtre",
                  },
                  hu: {
                      consentModal: {
                          title: "Információk, amiket gyűjtünk",
                          description: "Itt láthatod és testreszabhatod az rólad gyűjtött információkat.\n",
                          privacyPolicy: { name: "adatvédelmi irányelveinket", text: "További információért kérjük, olvassd el az {privacyPolicy}.\n" },
                      },
                      consentNotice: {
                          changeDescription: "Az utolsó látogatás óta változások történtek, kérjük, frissítsd a hozzájárulásodat.",
                          description: "Az személyes adataidat összegyűjtjük és feldolgozzuk az alábbi célokra: {purposes}.\n",
                          learnMore: "Tudj meg többet",
                      },
                      save: "Mentés",
                      decline: "Elvet",
                      app: {
                          optOut: { title: "(leiratkozás)", description: "Ez az alkalmazás alapértelmezés szerint betöltött (de ki lehet kapcsolni)" },
                          required: { title: "(mindig kötelező)", description: "Ez az applikáció mindig kötelező" },
                          purposes: "Célok",
                          purpose: "Cél",
                      },
                      poweredBy: "Powered by Orejime",
                  },
                  it: {
                      consentModal: {
                          title: "Informazioni che raccogliamo",
                          description: "Qui puoi vedere e scegliere le informazioni che raccogliamo su di te.\n",
                          privacyPolicy: { name: "policy privacy", text: "Per saperne di più, leggi la nostra {privacyPolicy}.\n" },
                      },
                      consentNotice: {
                          changeDescription: "Ci sono stati cambiamenti dalla tua ultima visita, aggiorna il tuo consenso.",
                          description: "Raccogliamo ed elaboriamo le vostre informazioni personali per i seguenti scopi: {purposes}.\n",
                          learnMore: "Scopri di più",
                      },
                      save: "Salva",
                      decline: "Rifiuta",
                      app: {
                          optOut: { title: "(opt-out)", description: "Quest'applicazione è caricata di default (ma puoi disattivarla)" },
                          required: { title: "(sempre richiesto)", description: "Quest'applicazione è sempre richiesta" },
                          purposes: "Scopi",
                          purpose: "Scopo",
                      },
                      poweredBy: "Realizzato da Orejime",
                  },
                  ro: {
                      consentModal: {
                          title: "Informațiile pe care le colectăm",
                          description: "Aici puteți vedea și personaliza informațiile pe care le colectăm despre dvs.\n",
                          privacyPolicy: { name: "politica privacy", text: "Pentru a afla mai multe, vă rugăm să citiți {privacyPolicy}.\n" },
                      },
                      consentNotice: {
                          changeDescription: "Au existat modificări de la ultima vizită, vă rugăm să actualizați consimțământul.",
                          description: "Colectăm și procesăm informațiile dvs. personale în următoarele scopuri: {purposes}.\n",
                          learnMore: "Află mai multe",
                      },
                      save: "Salvează",
                      decline: "Renunță",
                      app: {
                          optOut: { title: "(opt-out)", description: "Această aplicație este încărcată în mod implicit (dar puteți renunța)" },
                          required: { title: "(întotdeauna necesar)", description: "Această aplicație este întotdeauna necesară" },
                          purposes: "Scopuri",
                          purpose: "Scop",
                      },
                      poweredBy: "Realizat de Orejime",
                  },
                  nb: {
                      consentModal: {
                          title: "Informasjon vi samler inn",
                          description: "Her kan du se og velge hvilken informasjon vi samler inn om deg.\n",
                          privacyPolicy: { name: "personvernerklæring", text: "For å lære mer, vennligst les vår {privacyPolicy}.\n" },
                      },
                      consentNotice: {
                          changeDescription: "Det har skjedd endringer siden ditt siste besøk, vennligst oppdater ditt samtykke.",
                          description: "Vi samler inn og prosesserer din personlige informasjon av følgende årsaker: {purposes}.\n",
                          learnMore: "Lær mer",
                      },
                      save: "Opslaan",
                      decline: "Avslå",
                      app: {
                          optOut: { title: "(opt-out)", description: "Denne appen er lastet som standard (men du kan skru det av)" },
                          required: { title: "(alltid påkrevd)", description: "Denne applikasjonen er alltid påkrevd" },
                          purposes: "Årsaker",
                          purpose: "Årsak",
                      },
                      poweredBy: "Laget med Orejime",
                  },
                  nl: {
                      consentModal: {
                          title: "Informatie die we verzamelen",
                          description: "Hier kunt u de informatie bekijken en aanpassen die we over u verzamelen.\n",
                          privacyPolicy: { name: "privacybeleid", text: "Lees ons privacybeleid voor meer informatie {privacyPolicy}.\n" },
                      },
                      consentNotice: {
                          changeDescription: "Er waren wijzigingen sinds uw laatste bezoek, werk uw voorkeuren bij.",
                          description: "Wij verzamelen en verwerken uw persoonlijke gegevens voor de volgende doeleinden: {purposes}.\n",
                          learnMore: "Lees meer",
                      },
                      accept: "Aanvaarden",
                      acceptAll: "Alles aanvaarden",
                      save: "Opslaan",
                      saveData: "Mijn configuratie voor de informatievergaring opslaan",
                      decline: "Afwijzen",
                      declineAll: "Alles weigeren",
                      close: "Sluiten",
                      enabled: "Geactiveerd",
                      disabled: "Gedesactiveerd",
                      app: {
                          optOut: { title: "(afmelden)", description: "Deze app is standaard geladen (maar je kunt je afmelden)" },
                          required: { title: "(altijd verplicht)", description: "Deze applicatie is altijd vereist" },
                          purposes: "Doeleinden",
                          purpose: "Doeleinde",
                      },
                      poweredBy: "Aangedreven door Orejime",
                      newWindow: "nieuw venster",
                  },
              },
              h = n(4),
              v = n.n(h),
              y = n(5),
              b = n.n(y),
              g = n(6),
              C = n.n(g),
              w = n(3),
              O = n.n(w),
              N = n(7),
              k = n.n(N),
              _ = n(10),
              E = n.n(_);
          var S = n(12),
              A = n.n(S);
          var P = (function (e) {
              function t(e) {
                  var n, r, i, a;
                  return (
                      s()(this, t),
                      (n = v()(this, b()(t).call(this))),
                      e.config.appElement && A.a.setAppElement(e.config.appElement),
                      (n.scrollPosition = null),
                      (r = o.default.version.match(/(\d+)\.(\d+)*/)),
                      (i = 1 * r[1]),
                      (a = 1 * r[2]),
                      i <= 15 || (16 === i && a <= 2) ? (n.componentWillUpdate = n.componentWillUpdateLifecycle) : (n.getSnapshotBeforeUpdate = n.getSnapshotBeforeUpdateLifecycle),
                      n
                  );
              }
              return (
                  C()(t, e),
                  c()(t, [
                      {
                          key: "componentWillUpdateLifecycle",
                          value: function (e) {
                              e.isOpen && !this.props.isOpen && (this.scrollPosition = window.pageYOffset);
                          },
                      },
                      {
                          key: "getSnapshotBeforeUpdateLifecycle",
                          value: function (e) {
                              return this.props.isOpen && !e.isOpen && (this.scrollPosition = window.pageYOffset), null;
                          },
                      },
                      {
                          key: "componentDidUpdate",
                          value: function (e) {
                              var t = this;
                              !this.props.isOpen &&
                                  e.isOpen &&
                                  this.props.handleScrollPosition &&
                                  null !== this.scrollPosition &&
                                  setTimeout(function () {
                                      window.scrollTo(window.pageXOffset, t.scrollPosition), (t.scrollPosition = null);
                                  }, 0);
                          },
                      },
                      {
                          key: "render",
                          value: function () {
                              var e = this.props,
                                  t = e.children,
                                  n = (e.appElement, e.handleScrollPosition, e.config),
                                  r = E()(e, ["children", "appElement", "handleScrollPosition", "config"]);
                              return o.default.createElement(
                                  A.a,
                                  k()(
                                      {
                                          parentSelector: function () {
                                              return document.getElementById(n.elementID || "orejime");
                                          },
                                          htmlOpenClassName: "orejimeHtml-WithModalOpen",
                                          bodyOpenClassName: "orejimeBody-WithModalOpen",
                                      },
                                      r
                                  ),
                                  t
                              );
                          },
                      },
                  ]),
                  t
              );
          })(o.default.Component);
          P.defaultProps = { handleScrollPosition: !0 };
          var M = n(9),
              x = n.n(M),
              j = (function (e) {
                  function t() {
                      return s()(this, t), v()(this, b()(t).apply(this, arguments));
                  }
                  return (
                      C()(t, e),
                      c()(t, [
                          {
                              key: "render",
                              value: function () {
                                  var e = this.props,
                                      t = e.config,
                                      n = e.manager,
                                      r = e.isModalVisible,
                                      i = e.isMandatory,
                                      a = e.t,
                                      s = e.ns,
                                      l = e.onSaveRequest,
                                      c = e.onDeclineRequest,
                                      u = e.onConfigRequest,
                                      p = (function (e) {
                                          for (var t = new Set([]), n = 0; n < e.apps.length; n++) for (var o = e.apps[n].purposes || [], r = 0; r < o.length; r++) t.add(o[r]);
                                          return Array.from(t);
                                      })(t)
                                          .map(function (e) {
                                              return a(["purposes", e]);
                                          })
                                          .join(", "),
                                      d = a(["consentNotice", "title"]);
                                  return o.default.createElement(
                                      "div",
                                      { "aria-hidden": r, className: s("Notice".concat(i ? " Notice--mandatory" : "")) },
                                      o.default.createElement(
                                          "div",
                                          { className: s("Notice-body") },
                                          t.logo &&
                                              o.default.createElement(
                                                  "div",
                                                  { className: s("Notice-logoContainer") },
                                                  o.default.createElement("img", { src: "object" == x()(t.logo) ? t.logo.src : t.logo, alt: "object" == x()(t.logo) && t.logo.alt ? t.logo.alt : "", className: s("Notice-logo") })
                                              ),
                                          o.default.createElement(
                                              "div",
                                              { className: s("Notice-text") },
                                              d && o.default.createElement("h1", { className: s("Notice-title"), id: "orejime-notice-title" }, d),
                                              o.default.createElement(
                                                  "p",
                                                  { className: s("Notice-description") },
                                                  a(["consentNotice", "description"], { purposes: o.default.createElement("strong", { key: "purposes", className: s("Notice-purposes") }, p) }),
                                                  a(["consentNotice", "privacyPolicy", "text"], {
                                                      privacyPolicy: o.default.createElement(
                                                          "a",
                                                          { key: "privacyPolicyLink", className: s("Notice-privacyPolicyLink"), href: t.privacyPolicy },
                                                          a(["consentNotice", "privacyPolicy", "name"])
                                                      ),
                                                  })
                                              )
                                          ),
                                          n.changed && o.default.createElement("p", { className: s("Notice-changes") }, a(["consentNotice", "changeDescription"])),
                                          o.default.createElement(
                                              "ul",
                                              { className: s("Notice-actions") },
                                              o.default.createElement(
                                                  "li",
                                                  { className: s("Notice-actionItem Notice-actionItem--save") },
                                                  o.default.createElement("button", { className: s("Button Button--save Notice-button Notice-saveButton"), type: "button", title: a(["acceptTitle"]), onClick: l }, a(["accept"]))
                                              ),
                                              o.default.createElement(
                                                  "li",
                                                  { className: s("Notice-actionItem Notice-actionItem--info") },
                                                  o.default.createElement("button", { type: "button", className: s("Button Button--info Notice-learnMoreButton"), onClick: u }, a(["consentNotice", "learnMore"]))
                                              ),
                                              o.default.createElement(
                                                  "li",
                                                  { className: s("Notice-actionItem Notice-actionItem--decline") },
                                                  o.default.createElement("button", { className: s("Button Button--decline Notice-button Notice-declineButton"), type: "button", onClick: c }, a(["decline"]))
                                              )
                                          )
                                      )
                                  );
                              },
                          },
                      ]),
                      t
                  );
              })(o.default.Component),
              D = (function (e) {
                  function t() {
                      return s()(this, t), v()(this, b()(t).apply(this, arguments));
                  }
                  return (
                      C()(t, e),
                      c()(t, [
                          {
                              key: "render",
                              value: function () {
                                  var e = this.props,
                                      t = e.isVisible,
                                      n = E()(e, ["isVisible"]);
                                  if (!this.props.isMandatory && !t) return null;
                                  var r = this.props.t(["consentNotice", "title"]) ? { aria: { labelledby: "orejime-notice-title" } } : {};
                                  return this.props.isMandatory
                                      ? o.default.createElement(
                                            P,
                                            k()({ isOpen: t }, r, { config: this.props.config, portalClassName: this.props.ns("NoticePortal"), overlayClassName: this.props.ns("NoticeOverlay"), className: this.props.ns("NoticeWrapper") }),
                                            o.default.createElement(j, n)
                                        )
                                      : o.default.createElement(j, n);
                              },
                          },
                      ]),
                      t
                  );
              })(o.default.Component),
              T = function (e) {
                  var t = e.t,
                      n = e.ns;
                  return o.default.createElement(
                      "svg",
                      { role: "img", className: n("CloseIcon"), "aria-label": t(["close"]), width: "12", height: "12", viewport: "0 0 12 12", version: "1.1", xmlns: "http://www.w3.org/2000/svg" },
                      o.default.createElement("title", null, t(["close"])),
                      o.default.createElement("line", { x1: "1", y1: "11", x2: "11", y2: "1", strokeWidth: "1" }),
                      o.default.createElement("line", { x1: "1", y1: "1", x2: "11", y2: "11", strokeWidth: "1" })
                  );
              },
              R = (function (e) {
                  function t() {
                      return s()(this, t), v()(this, b()(t).apply(this, arguments));
                  }
                  return (
                      C()(t, e),
                      c()(t, [
                          {
                              key: "render",
                              value: function () {
                                  var e = this.props,
                                      t = e.checked,
                                      n = e.onToggle,
                                      r = e.name,
                                      i = e.title,
                                      a = e.description,
                                      s = e.t,
                                      l = e.ns,
                                      c = this.props.required || !1,
                                      u = this.props.optOut || !1,
                                      p = this.props.purposes || [],
                                      d = "orejime-app-item-".concat(r),
                                      f = t || c,
                                      m = p
                                          .map(function (e) {
                                              return s(["purposes", e]);
                                          })
                                          .join(", "),
                                      h = u ? o.default.createElement("span", { className: l("AppItem-optOut"), title: s(["app", "optOut", "description"]) }, s(["app", "optOut", "title"])) : "",
                                      v = c ? o.default.createElement("span", { className: l("AppItem-required"), title: s(["app", "required", "description"]) }, s(["app", "required", "title"])) : "",
                                      y = p.length > 0 ? o.default.createElement("p", { className: l("AppItem-purposes") }, s(["app", p.length > 1 ? "purposes" : "purpose"]), ":", " ", m) : null,
                                      b = f ? "enabled" : "disabled";
                                  return o.default.createElement(
                                      "div",
                                      { className: l("AppItem") },
                                      o.default.createElement("input", {
                                          id: d,
                                          className: l("AppItem-input"),
                                          "aria-describedby": "".concat(d, "-description"),
                                          disabled: c,
                                          checked: f,
                                          type: "checkbox",
                                          onChange: function (e) {
                                              n(e.target.checked);
                                          },
                                      }),
                                      o.default.createElement(
                                          "label",
                                          k()({ htmlFor: d, className: l("AppItem-label") }, c ? { tabIndex: "0" } : {}),
                                          o.default.createElement("span", { className: l("AppItem-title") }, s([r, "title"]) || i),
                                          v,
                                          h,
                                          o.default.createElement(
                                              "span",
                                              { className: l("AppItem-switch ".concat(c ? "AppItem-switch--disabled" : "")) },
                                              o.default.createElement("div", { className: l("AppItem-slider") }),
                                              o.default.createElement("div", { "aria-hidden": "true", className: l("AppItem-switchLabel") }, s(b))
                                          )
                                      ),
                                      o.default.createElement(
                                          "div",
                                          { id: "".concat(d, "-description"), className: l("AppItem-fullDescription") },
                                          o.default.createElement("p", { className: l("AppItem-description"), dangerouslySetInnerHTML: { __html: s([r, "description"]) || a } }),
                                          y
                                      )
                                  );
                              },
                          },
                      ]),
                      t
                  );
              })(o.default.Component),
              U = function (e) {
                  var t = e.t,
                      n = e.ns,
                      r = e.apps,
                      i = e.consents,
                      a = e.onToggle;
                  return o.default.createElement(
                      "ul",
                      { className: n("AppList") },
                      r.map(function (e) {
                          var r = i[e.name];
                          return o.default.createElement(
                              "li",
                              { key: "app-".concat(e.name), className: n("AppList-item AppList-item--".concat(e.name)) },
                              o.default.createElement(
                                  R,
                                  k()(
                                      {
                                          checked: r || e.required,
                                          onToggle: function (t) {
                                              return a(e, t);
                                          },
                                          t: t,
                                          ns: n,
                                      },
                                      e
                                  )
                              )
                          );
                      })
                  );
              },
              L = function (e, t) {
                  return t.map(function (t) {
                      return e.find(function (e) {
                          return e.name === t;
                      });
                  });
              },
              I = function (e) {
                  var t = e.t,
                      n = e.ns,
                      r = e.categories,
                      i = e.apps,
                      a = e.consents,
                      s = e.onToggle;
                  return o.default.createElement(
                      "ul",
                      { className: n("CategorizedAppList") },
                      r.map(function (e) {
                          var r = e.name,
                              l = e.title,
                              c = e.description,
                              u = e.apps;
                          return o.default.createElement(
                              "li",
                              { className: n("CategorizedAppList-item") },
                              o.default.createElement("h2", { className: n("CategorizedAppList-title") }, t(["categories", r, "title"]) || l),
                              o.default.createElement("p", { className: n("CategorizedAppList-description") }, t(["categories", r, "description"]) || c),
                              o.default.createElement("div", { className: n("CategorizedAppList-apps") }, o.default.createElement(U, { t: t, ns: n, apps: L(i, u), consents: a, onToggle: s }))
                          );
                      })
                  );
              },
              W = (function (e) {
                  function t(e, n) {
                      var o;
                      return s()(this, t), (o = v()(this, b()(t).call(this, e, n))), e.manager.watch(O()(O()(o))), (o.state = { consents: e.manager.consents }), o;
                  }
                  return (
                      C()(t, e),
                      c()(t, [
                          {
                              key: "componentWillUnmount",
                              value: function () {
                                  this.props.manager.unwatch(this);
                              },
                          },
                          {
                              key: "update",
                              value: function (e, t, n) {
                                  e == this.props.manager && "consents" == t && this.setState({ consents: n });
                              },
                          },
                          {
                              key: "render",
                              value: function () {
                                  var e = this.props,
                                      t = e.config,
                                      n = e.t,
                                      r = e.ns,
                                      i = e.manager,
                                      a = this.state.consents,
                                      s = t.apps,
                                      l = t.categories,
                                      c = function (e) {
                                          s.map(function (t) {
                                              i.updateConsent(t, e);
                                          });
                                      },
                                      u =
                                          0 ===
                                          s.filter(function (e) {
                                              return !e.required && a[e.name];
                                          }).length,
                                      p =
                                          s.filter(function (e) {
                                              return a[e.name];
                                          }).length === s.length,
                                      d = s.some(function (e) {
                                          return !e.required;
                                      });
                                  return o.default.createElement(
                                      "div",
                                      null,
                                      d
                                          ? o.default.createElement(
                                                "div",
                                                { className: r("AppToggles") },
                                                o.default.createElement(
                                                    "button",
                                                    {
                                                        type: "button",
                                                        className: r("Button Button--info AppToggles-button AppToggles-enableAll"),
                                                        disabled: p,
                                                        onClick: function () {
                                                            return c(!0);
                                                        },
                                                    },
                                                    n(["acceptAll"])
                                                ),
                                                o.default.createElement(
                                                    "button",
                                                    {
                                                        type: "button",
                                                        className: r("Button Button--info AppToggles-button AppToggles-disableAll"),
                                                        disabled: u,
                                                        onClick: function () {
                                                            return c(!1);
                                                        },
                                                    },
                                                    n(["declineAll"])
                                                )
                                            )
                                          : null,
                                      l
                                          ? o.default.createElement(I, { t: n, ns: r, categories: l, apps: s, consents: a, onToggle: i.updateConsent.bind(i) })
                                          : o.default.createElement(U, { t: n, ns: r, apps: s, consents: a, onToggle: i.updateConsent.bind(i) })
                                  );
                              },
                          },
                      ]),
                      t
                  );
              })(o.default.Component),
              B = (function (e) {
                  function t() {
                      return s()(this, t), v()(this, b()(t).apply(this, arguments));
                  }
                  return (
                      C()(t, e),
                      c()(t, [
                          {
                              key: "render",
                              value: function () {
                                  var e = this.props,
                                      t = e.isOpen,
                                      n = e.onHideRequest,
                                      r = e.onSaveRequest,
                                      i = e.config,
                                      a = e.manager,
                                      s = e.t,
                                      l = e.ns,
                                      c = i.mustConsent && (!a.confirmed || a.changed);
                                  return o.default.createElement(
                                      P,
                                      {
                                          isOpen: t,
                                          aria: { labelledby: "orejime-modal-title" },
                                          portalClassName: l("ModalPortal"),
                                          overlayClassName: l("ModalOverlay"),
                                          className: l("ModalWrapper"),
                                          config: i,
                                          onRequestClose: n,
                                          role: c ? "alertdialog" : "dialog",
                                      },
                                      o.default.createElement(
                                          "div",
                                          { className: l("Modal") },
                                          o.default.createElement(
                                              "div",
                                              { className: l("Modal-header") },
                                              !c && o.default.createElement("button", { title: s(["close"]), className: l("Modal-closeButton"), type: "button", onClick: n }, o.default.createElement(T, { t: s, ns: l })),
                                              o.default.createElement("h1", { className: l("Modal-title"), id: "orejime-modal-title" }, s(["consentModal", "title"])),
                                              o.default.createElement(
                                                  "p",
                                                  { className: l("Modal-description") },
                                                  a.changed &&
                                                      (i.mustConsent || i.noNotice) &&
                                                      o.default.createElement("p", { className: l("Modal-description") }, o.default.createElement("strong", { className: l("Modal-changes") }, s(["consentNotice", "changeDescription"]))),
                                                  s(["consentModal", "description"]),
                                                  " ",
                                                  s(["consentModal", "privacyPolicy", "text"], {
                                                      privacyPolicy: o.default.createElement(
                                                          "a",
                                                          {
                                                              key: "privacyPolicyLink",
                                                              className: l("Modal-privacyPolicyLink"),
                                                              onClick: function (e) {
                                                                  n();
                                                              },
                                                              href: i.privacyPolicy,
                                                          },
                                                          s(["consentModal", "privacyPolicy", "name"])
                                                      ),
                                                  })
                                              )
                                          ),
                                          o.default.createElement(
                                              "form",
                                              { className: l("Modal-form") },
                                              o.default.createElement("div", { className: l("Modal-body") }, o.default.createElement(W, { t: s, ns: l, config: i, manager: a })),
                                              o.default.createElement(
                                                  "div",
                                                  { className: l("Modal-footer") },
                                                  o.default.createElement("button", { className: l("Button Button--save Modal-saveButton"), onClick: r, title: s(["saveData"]) }, s(["save"])),
                                                  o.default.createElement(
                                                      "a",
                                                      {
                                                          target: "_blank",
                                                          className: l("Modal-poweredByLink"),
                                                          href: i.poweredBy || "https://orejime.empreintedigitale.fr",
                                                          title: "".concat(s(["poweredBy"]), " (").concat(s(["newWindow"]), ")"),
                                                      },
                                                      s(["poweredBy"])
                                                  )
                                              )
                                          )
                                      )
                                  );
                              },
                          },
                      ]),
                      t
                  );
              })(o.default.Component),
              z = (function (e) {
                  function t(e) {
                      var n;
                      return (
                          s()(this, t),
                          ((n = v()(this, b()(t).call(this, e))).state = { isModalVisible: n.isModalVisible() }),
                          (n.showModal = n.showModal.bind(O()(O()(n)))),
                          (n.hideModal = n.hideModal.bind(O()(O()(n)))),
                          (n.saveAndHideAll = n.saveAndHideAll.bind(O()(O()(n)))),
                          (n.declineAndHideAll = n.declineAndHideAll.bind(O()(O()(n)))),
                          (n.acceptAndHideAll = n.acceptAndHideAll.bind(O()(O()(n)))),
                          n
                      );
                  }
                  return (
                      C()(t, e),
                      c()(t, [
                          {
                              key: "isModalVisible",
                              value: function (e) {
                                  var t = this.props,
                                      n = t.config,
                                      o = t.manager;
                                  return !!e || !(!n.mustConsent || (o.confirmed && !o.changed));
                              },
                          },
                          {
                              key: "isNoticeVisible",
                              value: function () {
                                  var e = this.props,
                                      t = e.config,
                                      n = e.manager;
                                  return !t.mustConsent && !t.noNotice && !(n.confirmed && !n.changed);
                              },
                          },
                          {
                              key: "showModal",
                              value: function (e) {
                                  void 0 !== e && e.preventDefault(), this.setState({ isModalVisible: this.isModalVisible(!0) });
                              },
                          },
                          {
                              key: "hideModal",
                              value: function (e) {
                                  void 0 !== e && e.preventDefault(), this.setState({ isModalVisible: this.isModalVisible(!1) });
                              },
                          },
                          {
                              key: "saveAndHideAll",
                              value: function (e) {
                                  void 0 !== e && e.preventDefault(), this.props.manager.saveAndApplyConsents(), this.setState({ isModalVisible: this.isModalVisible(!1) });
                              },
                          },
                          {
                              key: "declineAndHideAll",
                              value: function (e) {
                                  this.props.manager.declineAll(), this.props.manager.saveAndApplyConsents(), this.setState({ isModalVisible: this.isModalVisible(!1) });
                              },
                          },
                          {
                              key: "acceptAndHideAll",
                              value: function (e) {
                                  this.props.manager.acceptAll(), this.props.manager.saveAndApplyConsents(), this.setState({ isModalVisible: this.isModalVisible(!1) });
                              },
                          },
                          {
                              key: "render",
                              value: function () {
                                  var e = this.props,
                                      t = e.config,
                                      n = e.t,
                                      r = e.manager,
                                      i = e.ns,
                                      a = this.isNoticeVisible();
                                  return o.default.createElement(
                                      "div",
                                      { className: i("Main") },
                                      o.default.createElement(D, {
                                          key: "notice",
                                          t: n,
                                          ns: i,
                                          isVisible: a,
                                          isMandatory: t.mustNotice || !1,
                                          isModalVisible: this.state.isModalVisible,
                                          config: t,
                                          manager: r,
                                          onSaveRequest: this.acceptAndHideAll,
                                          onDeclineRequest: this.declineAndHideAll,
                                          onConfigRequest: this.showModal,
                                      }),
                                      o.default.createElement(B, { key: "modal", isOpen: this.state.isModalVisible, t: n, ns: i, config: t, onHideRequest: this.hideModal, onSaveRequest: this.saveAndHideAll, manager: r })
                                  );
                              },
                          },
                      ]),
                      t
                  );
              })(o.default.Component);
          function q(e) {
              for (var t = new Map([]), n = Object.keys(e), o = 0; o < n.length; o++) {
                  var r = n[o],
                      i = e[r];
                  "string" == typeof r && ("string" == typeof i ? t.set(r, i) : t.set(r, q(i)));
              }
              return t;
          }
          function F(e, t, n, o) {
              var r = function (e, t, n) {
                  if (n instanceof Map) {
                      var o = new Map([]);
                      F(o, n, !0, !1), e.set(t, o);
                  } else e.set(t, n);
              };
              if (!(t instanceof Map && e instanceof Map)) throw "Parameters are not maps!";
              void 0 === n && (n = !0), void 0 === o && (o = !1), o && (e = new e.constructor(e));
              var i = !0,
                  a = !1,
                  s = void 0;
              try {
                  for (var l, c = t.keys()[Symbol.iterator](); !(i = (l = c.next()).done); i = !0) {
                      var u = l.value,
                          p = t.get(u),
                          d = e.get(u);
                      if (e.has(u))
                          if (p instanceof Map && d instanceof Map) e.set(u, F(d, p, n, o));
                          else {
                              if (!n) continue;
                              r(e, u, p);
                          }
                      else r(e, u, p);
                  }
              } catch (e) {
                  (a = !0), (s = e);
              } finally {
                  try {
                      i || null == c.return || c.return();
                  } finally {
                      if (a) throw s;
                  }
              }
              return e;
          }
          var H = n(13),
              V = n.n(H);
          function $(e) {
              for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
              var r,
                  i = x()(n[0]);
              r = 0 == n.length ? {} : "string" === i || "number" === i ? n : n[0];
              for (var a = [], s = e; s.length > 0; ) {
                  var l = s.match(/\{(?!\{)([\w\d]+)\}(?!\})/);
                  if (null !== l) {
                      var c = s.substr(0, l.index);
                      s.substr(l.index, l[0].length);
                      s = s.substr(l.index + l[0].length);
                      var u = parseInt(l[1]);
                      a.push(c), u != u ? a.push(r[l[1]]) : a.push(r[u]);
                  } else a.push(s), (s = "");
              }
              return a;
          }
          function G(e, t, n, o) {
              var r = o;
              Array.isArray(r) || (r = [r]);
              var i = (function (e, t, n) {
                  var o = t;
                  Array.isArray(o) || (o = [o]);
                  for (var r = e, i = 0; i < o.length; i++) {
                      if (void 0 === r) return n;
                      r = r instanceof Map ? r.get(o[i]) : r[o[i]];
                  }
                  return void 0 === r ? n : r;
              })(e, [t].concat(V()(r)));
              if (void 0 === i) return n && console.log($("[missing translation: {lang}/{key}]", { key: r.join("/"), lang: t }).join("")), !1;
              var a = Array.prototype.slice.call(arguments, 4);
              return a.length > 0 ? $.apply(void 0, [i].concat(V()(a))) : i;
          }
          n.d(t, "defaultConfig", function () {
              return J;
          }),
              n.d(t, "init", function () {
                  return K;
              });
          var Z = {};
          var J = {
              elementID: "orejime",
              appElement: void 0,
              stylePrefix: "orejime",
              cookieName: "orejime",
              cookieExpiresAfterDays: 365,
              cookieDomain: void 0,
              stringifyCookie: JSON.stringify.bind(JSON),
              parseCookie: JSON.parse.bind(JSON),
              privacyPolicy: "",
              default: !0,
              mustConsent: !1,
              mustNotice: !1,
              logo: !1,
              lang: window.language || document.documentElement.lang || "en",
              translations: {},
              apps: {},
              debug: !1,
          };
          function K(e) {
              var t = Object.assign({}, J, e),
                  n = [];
              if ((Object.keys(t.apps).length || n.push("  - you must define `apps` to manage"), t.privacyPolicy.length || n.push("  - you must define a `privacyPolicy` url"), n.length))
                  return n.unshift("Orejime config error:"), void console.error(n.join("\n"));
              var r,
                  i = (function (e) {
                      var t = e.elementID,
                          n = e.stylePrefix,
                          o = document.getElementById(t);
                      null === o && (((o = document.createElement("div")).id = t), document.body.insertBefore(o, document.body.firstChild));
                      var r = document.querySelector(".".concat(n, "-AppContainer"));
                      return null === r && (((r = document.createElement("div")).className = "".concat(n, "-AppContainer")), o.appendChild(r)), document.querySelector(".".concat(n, "-AppContainer"));
                  })(t),
                  a = (function (e) {
                      var t = new Map([]);
                      return F(t, q(m)), F(t, q(e.translations)), t;
                  })(t),
                  s = (function (e) {
                      var t = e.elementID;
                      return void 0 === Z[t] && (Z[t] = new f(e)), Z[t];
                  })(t),
                  l = Object(o.render)(
                      o.default.createElement(z, {
                          t: function () {
                              for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                              return G.apply(void 0, [a, t.lang, t.debug].concat(n));
                          },
                          ns:
                              ((r = t.stylePrefix),
                              function (e) {
                                  return e
                                      .split(" ")
                                      .filter(function (e) {
                                          return e.length > 0;
                                      })
                                      .map(function (e) {
                                          return "".concat(r, "-").concat(e);
                                      })
                                      .join(" ");
                              }),
                          manager: s,
                          config: t,
                      }),
                      i
                  );
              return { show: l.showModal.bind(l), internals: { react: l, manager: s, config: t } };
          }
          t.default = { init: K, defaultConfig: J };
      },
  ]);
});
