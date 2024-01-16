"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8064],
  {
    82549: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      /**
       * @license lucide-react v0.302.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let r = (0, n(62898).Z)("X", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]);
    },
    88648: function (e, t, n) {
      n.d(t, {
        CR: function () {
          return l;
        },
        XA: function () {
          return u;
        },
        ZT: function () {
          return o;
        },
        _T: function () {
          return i;
        },
        ev: function () {
          return c;
        },
        pi: function () {
          return a;
        },
      });
      var r = function (e, t) {
        return (r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          })(e, t);
      };
      function o(e, t) {
        if ("function" != typeof t && null !== t)
          throw TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
          );
        function n() {
          this.constructor = e;
        }
        r(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      var a = function () {
        return (a =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
      function i(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var o = 0, r = Object.getOwnPropertySymbols(e);
            o < r.length;
            o++
          )
            0 > t.indexOf(r[o]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        return n;
      }
      function u(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && r >= e.length && (e = void 0),
                { value: e && e[r++], done: !e }
              );
            },
          };
        throw TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function l(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          o,
          a = n.call(e),
          i = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; )
            i.push(r.value);
        } catch (e) {
          o = { error: e };
        } finally {
          try {
            r && !r.done && (n = a.return) && n.call(a);
          } finally {
            if (o) throw o.error;
          }
        }
        return i;
      }
      function c(e, t, n) {
        if (n || 2 == arguments.length)
          for (var r, o = 0, a = t.length; o < a; o++)
            (!r && o in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
    },
    27762: function (e, t, n) {
      let r;
      n.d(t, {
        x8: function () {
          return eJ;
        },
        VY: function () {
          return eU;
        },
        dk: function () {
          return eG;
        },
        GG: function () {
          return ej;
        },
        aV: function () {
          return eH;
        },
        h_: function () {
          return eY;
        },
        fC: function () {
          return eK;
        },
        Dx: function () {
          return eq;
        },
        xz: function () {
          return eV;
        },
      });
      var o,
        a,
        i,
        u,
        l,
        c,
        s = n(13428),
        d = n(2265),
        f = n(85744),
        p = n(42210),
        v = n(56989),
        m = n(20966),
        h = n(73763),
        g = n(79249),
        y = n(9381),
        E = n(16459);
      let b = "focusScope.autoFocusOnMount",
        w = "focusScope.autoFocusOnUnmount",
        C = { bubbles: !1, cancelable: !0 },
        D = (0, d.forwardRef)((e, t) => {
          let {
              loop: n = !1,
              trapped: r = !1,
              onMountAutoFocus: o,
              onUnmountAutoFocus: a,
              ...i
            } = e,
            [u, l] = (0, d.useState)(null),
            c = (0, E.W)(o),
            f = (0, E.W)(a),
            v = (0, d.useRef)(null),
            m = (0, p.e)(t, (e) => l(e)),
            h = (0, d.useRef)({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          (0, d.useEffect)(() => {
            if (r) {
              function e(e) {
                if (h.paused || !u) return;
                let t = e.target;
                u.contains(t) ? (v.current = t) : T(v.current, { select: !0 });
              }
              function t(e) {
                if (h.paused || !u) return;
                let t = e.relatedTarget;
                null === t || u.contains(t) || T(v.current, { select: !0 });
              }
              document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
              let n = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && T(u);
              });
              return (
                u && n.observe(u, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    n.disconnect();
                }
              );
            }
          }, [r, u, h.paused]),
            (0, d.useEffect)(() => {
              if (u) {
                S.add(h);
                let e = document.activeElement;
                if (!u.contains(e)) {
                  let t = new CustomEvent(b, C);
                  u.addEventListener(b, c),
                    u.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e, { select: t = !1 } = {}) {
                        let n = document.activeElement;
                        for (let r of e)
                          if (
                            (T(r, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        O(u).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && T(u));
                }
                return () => {
                  u.removeEventListener(b, c),
                    setTimeout(() => {
                      let t = new CustomEvent(w, C);
                      u.addEventListener(w, f),
                        u.dispatchEvent(t),
                        t.defaultPrevented ||
                          T(null != e ? e : document.body, { select: !0 }),
                        u.removeEventListener(w, f),
                        S.remove(h);
                    }, 0);
                };
              }
            }, [u, c, f, h]);
          let g = (0, d.useCallback)(
            (e) => {
              if ((!n && !r) || h.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                o = document.activeElement;
              if (t && o) {
                let t = e.currentTarget,
                  [r, a] = (function (e) {
                    let t = O(e);
                    return [R(t, e), R(t.reverse(), e)];
                  })(t);
                r && a
                  ? e.shiftKey || o !== a
                    ? e.shiftKey &&
                      o === r &&
                      (e.preventDefault(), n && T(a, { select: !0 }))
                    : (e.preventDefault(), n && T(r, { select: !0 }))
                  : o === t && e.preventDefault();
              }
            },
            [n, r, h.paused]
          );
          return (0, d.createElement)(
            y.WV.div,
            (0, s.Z)({ tabIndex: -1 }, i, { ref: m, onKeyDown: g })
          );
        });
      function O(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function R(e, t) {
        for (let n of e)
          if (
            !(function (e, { upTo: t }) {
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === t || e !== t); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(n, { upTo: t })
          )
            return n;
      }
      function T(e, { select: t = !1 } = {}) {
        if (e && e.focus) {
          var n;
          let r = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== r &&
              (n = e) instanceof HTMLInputElement &&
              "select" in n &&
              t &&
              e.select();
        }
      }
      let S =
        ((r = []),
        {
          add(e) {
            let t = r[0];
            e !== t && (null == t || t.pause()), (r = k(r, e)).unshift(e);
          },
          remove(e) {
            var t;
            null === (t = (r = k(r, e))[0]) || void 0 === t || t.resume();
          },
        });
      function k(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
      var _ = n(54887);
      let P = (0, d.forwardRef)((e, t) => {
        var n;
        let {
          container: r = null == globalThis
            ? void 0
            : null === (n = globalThis.document) || void 0 === n
            ? void 0
            : n.body,
          ...o
        } = e;
        return r
          ? _.createPortal(
              (0, d.createElement)(y.WV.div, (0, s.Z)({}, o, { ref: t })),
              r
            )
          : null;
      });
      var L = n(85606);
      let M = 0;
      function A() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.cssText =
            "outline: none; opacity: 0; position: fixed; pointer-events: none"),
          e
        );
      }
      var x = n(88648),
        W = "right-scroll-bar-position",
        F = "width-before-scroll-bar",
        N =
          (void 0 === o && (o = {}),
          ((void 0 === a &&
            (a = function (e) {
              return e;
            }),
          (i = []),
          (u = !1),
          (l = {
            read: function () {
              if (u)
                throw Error(
                  "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                );
              return i.length ? i[i.length - 1] : null;
            },
            useMedium: function (e) {
              var t = a(e, u);
              return (
                i.push(t),
                function () {
                  i = i.filter(function (e) {
                    return e !== t;
                  });
                }
              );
            },
            assignSyncMedium: function (e) {
              for (u = !0; i.length; ) {
                var t = i;
                (i = []), t.forEach(e);
              }
              i = {
                push: function (t) {
                  return e(t);
                },
                filter: function () {
                  return i;
                },
              };
            },
            assignMedium: function (e) {
              u = !0;
              var t = [];
              if (i.length) {
                var n = i;
                (i = []), n.forEach(e), (t = i);
              }
              var r = function () {
                  var n = t;
                  (t = []), n.forEach(e);
                },
                o = function () {
                  return Promise.resolve().then(r);
                };
              o(),
                (i = {
                  push: function (e) {
                    t.push(e), o();
                  },
                  filter: function (e) {
                    return (t = t.filter(e)), i;
                  },
                });
            },
          })).options = (0, x.pi)({ async: !0, ssr: !1 }, o)),
          l),
        I = function () {},
        Z = d.forwardRef(function (e, t) {
          var n,
            r,
            o,
            a = d.useRef(null),
            i = d.useState({
              onScrollCapture: I,
              onWheelCapture: I,
              onTouchMoveCapture: I,
            }),
            u = i[0],
            l = i[1],
            c = e.forwardProps,
            s = e.children,
            f = e.className,
            p = e.removeScrollBar,
            v = e.enabled,
            m = e.shards,
            h = e.sideCar,
            g = e.noIsolation,
            y = e.inert,
            E = e.allowPinchZoom,
            b = e.as,
            w = (0, x._T)(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
            ]),
            C =
              ((n = [a, t]),
              (r = function (e) {
                return n.forEach(function (t) {
                  return (
                    "function" == typeof t ? t(e) : t && (t.current = e), t
                  );
                });
              }),
              ((o = (0, d.useState)(function () {
                return {
                  value: null,
                  callback: r,
                  facade: {
                    get current() {
                      return o.value;
                    },
                    set current(value) {
                      var e = o.value;
                      e !== value && ((o.value = value), o.callback(value, e));
                    },
                  },
                };
              })[0]).callback = r),
              o.facade),
            D = (0, x.pi)((0, x.pi)({}, w), u);
          return d.createElement(
            d.Fragment,
            null,
            v &&
              d.createElement(h, {
                sideCar: N,
                removeScrollBar: p,
                shards: m,
                noIsolation: g,
                inert: y,
                setCallbacks: l,
                allowPinchZoom: !!E,
                lockRef: a,
              }),
            c
              ? d.cloneElement(
                  d.Children.only(s),
                  (0, x.pi)((0, x.pi)({}, D), { ref: C })
                )
              : d.createElement(
                  void 0 === b ? "div" : b,
                  (0, x.pi)({}, D, { className: f, ref: C }),
                  s
                )
          );
        });
      (Z.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (Z.classNames = { fullWidth: F, zeroRight: W });
      var j = function (e) {
        var t = e.sideCar,
          n = (0, x._T)(e, ["sideCar"]);
        if (!t)
          throw Error(
            "Sidecar: please provide `sideCar` property to import the right car"
          );
        var r = t.read();
        if (!r) throw Error("Sidecar medium not found");
        return d.createElement(r, (0, x.pi)({}, n));
      };
      j.isSideCarExport = !0;
      var B = function () {
          var e = 0,
            t = null;
          return {
            add: function (r) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = c || n.nc;
                  return t && e.setAttribute("nonce", t), e;
                })())
              ) {
                var o, a;
                (o = t).styleSheet
                  ? (o.styleSheet.cssText = r)
                  : o.appendChild(document.createTextNode(r)),
                  (a = t),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(a);
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        X = function () {
          var e = B();
          return function (t, n) {
            d.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && n]
            );
          };
        },
        z = function () {
          var e = X();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        },
        K = { left: 0, top: 0, right: 0, gap: 0 },
        V = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        Y = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            o = t["padding" === e ? "paddingRight" : "marginRight"];
          return [V(n), V(r), V(o)];
        },
        H = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return K;
          var t = Y(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        },
        U = z(),
        q = function (e, t, n, r) {
          var o = e.left,
            a = e.top,
            i = e.right,
            u = e.gap;
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(u, "px ")
              .concat(r, ";\n  }\n  body {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(r, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(a, "px;\n    padding-right: ")
                      .concat(
                        i,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(u, "px ")
                      .concat(r, ";\n    "),
                  "padding" === n &&
                    "padding-right: ".concat(u, "px ").concat(r, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(W, " {\n    right: ")
              .concat(u, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(F, " {\n    margin-right: ")
              .concat(u, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(W, " .")
              .concat(W, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(F, " .")
              .concat(F, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(u, "px;\n  }\n")
          );
        },
        G = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? "margin" : r,
            a = d.useMemo(
              function () {
                return H(o);
              },
              [o]
            );
          return d.createElement(U, {
            styles: q(a, !t, o, n ? "" : "!important"),
          });
        },
        J = !1;
      if ("undefined" != typeof window)
        try {
          var Q = Object.defineProperty({}, "passive", {
            get: function () {
              return (J = !0), !0;
            },
          });
          window.addEventListener("test", Q, Q),
            window.removeEventListener("test", Q, Q);
        } catch (e) {
          J = !1;
        }
      var $ = !!J && { passive: !1 },
        ee = function (e, t) {
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            !(
              n.overflowY === n.overflowX &&
              "TEXTAREA" !== e.tagName &&
              "visible" === n[t]
            )
          );
        },
        et = function (e, t) {
          var n = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                n instanceof ShadowRoot &&
                (n = n.host),
              en(e, n))
            ) {
              var r = er(e, n);
              if (r[1] > r[2]) return !0;
            }
            n = n.parentNode;
          } while (n && n !== document.body);
          return !1;
        },
        en = function (e, t) {
          return "v" === e ? ee(t, "overflowY") : ee(t, "overflowX");
        },
        er = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        eo = function (e, t, n, r, o) {
          var a,
            i =
              ((a = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === a ? -1 : 1),
            u = i * r,
            l = n.target,
            c = t.contains(l),
            s = !1,
            d = u > 0,
            f = 0,
            p = 0;
          do {
            var v = er(e, l),
              m = v[0],
              h = v[1] - v[2] - i * m;
            (m || h) && en(e, l) && ((f += h), (p += m)), (l = l.parentNode);
          } while (
            (!c && l !== document.body) ||
            (c && (t.contains(l) || t === l))
          );
          return (
            d && ((o && 0 === f) || (!o && u > f))
              ? (s = !0)
              : !d && ((o && 0 === p) || (!o && -u > p)) && (s = !0),
            s
          );
        },
        ea = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        ei = function (e) {
          return [e.deltaX, e.deltaY];
        },
        eu = function (e) {
          return e && "current" in e ? e.current : e;
        },
        el = 0,
        ec = [],
        es =
          (N.useMedium(function (e) {
            var t = d.useRef([]),
              n = d.useRef([0, 0]),
              r = d.useRef(),
              o = d.useState(el++)[0],
              a = d.useState(function () {
                return z();
              })[0],
              i = d.useRef(e);
            d.useEffect(
              function () {
                i.current = e;
              },
              [e]
            ),
              d.useEffect(
                function () {
                  if (e.inert) {
                    document.body.classList.add(
                      "block-interactivity-".concat(o)
                    );
                    var t = (0, x.ev)(
                      [e.lockRef.current],
                      (e.shards || []).map(eu),
                      !0
                    ).filter(Boolean);
                    return (
                      t.forEach(function (e) {
                        return e.classList.add(
                          "allow-interactivity-".concat(o)
                        );
                      }),
                      function () {
                        document.body.classList.remove(
                          "block-interactivity-".concat(o)
                        ),
                          t.forEach(function (e) {
                            return e.classList.remove(
                              "allow-interactivity-".concat(o)
                            );
                          });
                      }
                    );
                  }
                },
                [e.inert, e.lockRef.current, e.shards]
              );
            var u = d.useCallback(function (e, t) {
                if ("touches" in e && 2 === e.touches.length)
                  return !i.current.allowPinchZoom;
                var o,
                  a = ea(e),
                  u = n.current,
                  l = "deltaX" in e ? e.deltaX : u[0] - a[0],
                  c = "deltaY" in e ? e.deltaY : u[1] - a[1],
                  s = e.target,
                  d = Math.abs(l) > Math.abs(c) ? "h" : "v";
                if ("touches" in e && "h" === d && "range" === s.type)
                  return !1;
                var f = et(d, s);
                if (!f) return !0;
                if (
                  (f ? (o = d) : ((o = "v" === d ? "h" : "v"), (f = et(d, s))),
                  !f)
                )
                  return !1;
                if (
                  (!r.current &&
                    "changedTouches" in e &&
                    (l || c) &&
                    (r.current = o),
                  !o)
                )
                  return !0;
                var p = r.current || o;
                return eo(p, t, e, "h" === p ? l : c, !0);
              }, []),
              l = d.useCallback(function (e) {
                if (ec.length && ec[ec.length - 1] === a) {
                  var n = "deltaY" in e ? ei(e) : ea(e),
                    r = t.current.filter(function (t) {
                      var r;
                      return (
                        t.name === e.type &&
                        t.target === e.target &&
                        (r = t.delta)[0] === n[0] &&
                        r[1] === n[1]
                      );
                    })[0];
                  if (r && r.should) {
                    e.cancelable && e.preventDefault();
                    return;
                  }
                  if (!r) {
                    var o = (i.current.shards || [])
                      .map(eu)
                      .filter(Boolean)
                      .filter(function (t) {
                        return t.contains(e.target);
                      });
                    (o.length > 0 ? u(e, o[0]) : !i.current.noIsolation) &&
                      e.cancelable &&
                      e.preventDefault();
                  }
                }
              }, []),
              c = d.useCallback(function (e, n, r, o) {
                var a = { name: e, delta: n, target: r, should: o };
                t.current.push(a),
                  setTimeout(function () {
                    t.current = t.current.filter(function (e) {
                      return e !== a;
                    });
                  }, 1);
              }, []),
              s = d.useCallback(function (e) {
                (n.current = ea(e)), (r.current = void 0);
              }, []),
              f = d.useCallback(function (t) {
                c(t.type, ei(t), t.target, u(t, e.lockRef.current));
              }, []),
              p = d.useCallback(function (t) {
                c(t.type, ea(t), t.target, u(t, e.lockRef.current));
              }, []);
            d.useEffect(function () {
              return (
                ec.push(a),
                e.setCallbacks({
                  onScrollCapture: f,
                  onWheelCapture: f,
                  onTouchMoveCapture: p,
                }),
                document.addEventListener("wheel", l, $),
                document.addEventListener("touchmove", l, $),
                document.addEventListener("touchstart", s, $),
                function () {
                  (ec = ec.filter(function (e) {
                    return e !== a;
                  })),
                    document.removeEventListener("wheel", l, $),
                    document.removeEventListener("touchmove", l, $),
                    document.removeEventListener("touchstart", s, $);
                }
              );
            }, []);
            var v = e.removeScrollBar,
              m = e.inert;
            return d.createElement(
              d.Fragment,
              null,
              m
                ? d.createElement(a, {
                    styles: "\n  .block-interactivity-"
                      .concat(
                        o,
                        " {pointer-events: none;}\n  .allow-interactivity-"
                      )
                      .concat(o, " {pointer-events: all;}\n"),
                  })
                : null,
              v ? d.createElement(G, { gapMode: "margin" }) : null
            );
          }),
          j),
        ed = d.forwardRef(function (e, t) {
          return d.createElement(Z, (0, x.pi)({}, e, { ref: t, sideCar: es }));
        });
      ed.classNames = Z.classNames;
      var ef = new WeakMap(),
        ep = new WeakMap(),
        ev = {},
        em = 0,
        eh = function (e) {
          return e && (e.host || eh(e.parentNode));
        },
        eg = function (e, t, n, r) {
          var o = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var n = eh(e);
              return n && t.contains(n)
                ? n
                : (console.error(
                    "aria-hidden",
                    e,
                    "in not contained inside",
                    t,
                    ". Doing nothing"
                  ),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          ev[n] || (ev[n] = new WeakMap());
          var a = ev[n],
            i = [],
            u = new Set(),
            l = new Set(o),
            c = function (e) {
              !e || u.has(e) || (u.add(e), c(e.parentNode));
            };
          o.forEach(c);
          var s = function (e) {
            !e ||
              l.has(e) ||
              Array.prototype.forEach.call(e.children, function (e) {
                if (u.has(e)) s(e);
                else {
                  var t = e.getAttribute(r),
                    o = null !== t && "false" !== t,
                    l = (ef.get(e) || 0) + 1,
                    c = (a.get(e) || 0) + 1;
                  ef.set(e, l),
                    a.set(e, c),
                    i.push(e),
                    1 === l && o && ep.set(e, !0),
                    1 === c && e.setAttribute(n, "true"),
                    o || e.setAttribute(r, "true");
                }
              });
          };
          return (
            s(t),
            u.clear(),
            em++,
            function () {
              i.forEach(function (e) {
                var t = ef.get(e) - 1,
                  o = a.get(e) - 1;
                ef.set(e, t),
                  a.set(e, o),
                  t || (ep.has(e) || e.removeAttribute(r), ep.delete(e)),
                  o || e.removeAttribute(n);
              }),
                --em ||
                  ((ef = new WeakMap()),
                  (ef = new WeakMap()),
                  (ep = new WeakMap()),
                  (ev = {}));
            }
          );
        },
        ey = function (e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o =
              t ||
              ("undefined" == typeof document
                ? null
                : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
          return o
            ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
              eg(r, o, n, "aria-hidden"))
            : function () {
                return null;
              };
        },
        eE = n(67256);
      let eb = "Dialog",
        [ew, eC] = (0, v.b)(eb),
        [eD, eO] = ew(eb),
        eR = (0, d.forwardRef)((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = eO("DialogTrigger", n),
            a = (0, p.e)(t, o.triggerRef);
          return (0, d.createElement)(
            y.WV.button,
            (0, s.Z)(
              {
                type: "button",
                "aria-haspopup": "dialog",
                "aria-expanded": o.open,
                "aria-controls": o.contentId,
                "data-state": eB(o.open),
              },
              r,
              { ref: a, onClick: (0, f.M)(e.onClick, o.onOpenToggle) }
            )
          );
        }),
        eT = "DialogPortal",
        [eS, ek] = ew(eT, { forceMount: void 0 }),
        e_ = "DialogOverlay",
        eP = (0, d.forwardRef)((e, t) => {
          let n = ek(e_, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            a = eO(e_, e.__scopeDialog);
          return a.modal
            ? (0, d.createElement)(
                L.z,
                { present: r || a.open },
                (0, d.createElement)(eL, (0, s.Z)({}, o, { ref: t }))
              )
            : null;
        }),
        eL = (0, d.forwardRef)((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = eO(e_, n);
          return (0, d.createElement)(
            ed,
            { as: eE.g7, allowPinchZoom: !0, shards: [o.contentRef] },
            (0, d.createElement)(
              y.WV.div,
              (0, s.Z)({ "data-state": eB(o.open) }, r, {
                ref: t,
                style: { pointerEvents: "auto", ...r.style },
              })
            )
          );
        }),
        eM = "DialogContent",
        eA = (0, d.forwardRef)((e, t) => {
          let n = ek(eM, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            a = eO(eM, e.__scopeDialog);
          return (0, d.createElement)(
            L.z,
            { present: r || a.open },
            a.modal
              ? (0, d.createElement)(ex, (0, s.Z)({}, o, { ref: t }))
              : (0, d.createElement)(eW, (0, s.Z)({}, o, { ref: t }))
          );
        }),
        ex = (0, d.forwardRef)((e, t) => {
          let n = eO(eM, e.__scopeDialog),
            r = (0, d.useRef)(null),
            o = (0, p.e)(t, n.contentRef, r);
          return (
            (0, d.useEffect)(() => {
              let e = r.current;
              if (e) return ey(e);
            }, []),
            (0, d.createElement)(
              eF,
              (0, s.Z)({}, e, {
                ref: o,
                trapFocus: n.open,
                disableOutsidePointerEvents: !0,
                onCloseAutoFocus: (0, f.M)(e.onCloseAutoFocus, (e) => {
                  var t;
                  e.preventDefault(),
                    null === (t = n.triggerRef.current) ||
                      void 0 === t ||
                      t.focus();
                }),
                onPointerDownOutside: (0, f.M)(e.onPointerDownOutside, (e) => {
                  let t = e.detail.originalEvent,
                    n = 0 === t.button && !0 === t.ctrlKey;
                  (2 === t.button || n) && e.preventDefault();
                }),
                onFocusOutside: (0, f.M)(e.onFocusOutside, (e) =>
                  e.preventDefault()
                ),
              })
            )
          );
        }),
        eW = (0, d.forwardRef)((e, t) => {
          let n = eO(eM, e.__scopeDialog),
            r = (0, d.useRef)(!1),
            o = (0, d.useRef)(!1);
          return (0, d.createElement)(
            eF,
            (0, s.Z)({}, e, {
              ref: t,
              trapFocus: !1,
              disableOutsidePointerEvents: !1,
              onCloseAutoFocus: (t) => {
                var a, i;
                null === (a = e.onCloseAutoFocus) ||
                  void 0 === a ||
                  a.call(e, t),
                  t.defaultPrevented ||
                    (r.current ||
                      null === (i = n.triggerRef.current) ||
                      void 0 === i ||
                      i.focus(),
                    t.preventDefault()),
                  (r.current = !1),
                  (o.current = !1);
              },
              onInteractOutside: (t) => {
                var a, i;
                null === (a = e.onInteractOutside) ||
                  void 0 === a ||
                  a.call(e, t),
                  t.defaultPrevented ||
                    ((r.current = !0),
                    "pointerdown" !== t.detail.originalEvent.type ||
                      (o.current = !0));
                let u = t.target;
                (null === (i = n.triggerRef.current) || void 0 === i
                  ? void 0
                  : i.contains(u)) && t.preventDefault(),
                  "focusin" === t.detail.originalEvent.type &&
                    o.current &&
                    t.preventDefault();
              },
            })
          );
        }),
        eF = (0, d.forwardRef)((e, t) => {
          let {
              __scopeDialog: n,
              trapFocus: r,
              onOpenAutoFocus: o,
              onCloseAutoFocus: a,
              ...i
            } = e,
            u = eO(eM, n),
            l = (0, d.useRef)(null),
            c = (0, p.e)(t, l);
          return (
            (0, d.useEffect)(() => {
              var e, t;
              let n = document.querySelectorAll("[data-radix-focus-guard]");
              return (
                document.body.insertAdjacentElement(
                  "afterbegin",
                  null !== (e = n[0]) && void 0 !== e ? e : A()
                ),
                document.body.insertAdjacentElement(
                  "beforeend",
                  null !== (t = n[1]) && void 0 !== t ? t : A()
                ),
                M++,
                () => {
                  1 === M &&
                    document
                      .querySelectorAll("[data-radix-focus-guard]")
                      .forEach((e) => e.remove()),
                    M--;
                }
              );
            }, []),
            (0, d.createElement)(
              d.Fragment,
              null,
              (0, d.createElement)(
                D,
                {
                  asChild: !0,
                  loop: !0,
                  trapped: r,
                  onMountAutoFocus: o,
                  onUnmountAutoFocus: a,
                },
                (0, d.createElement)(
                  g.XB,
                  (0, s.Z)(
                    {
                      role: "dialog",
                      id: u.contentId,
                      "aria-describedby": u.descriptionId,
                      "aria-labelledby": u.titleId,
                      "data-state": eB(u.open),
                    },
                    i,
                    { ref: c, onDismiss: () => u.onOpenChange(!1) }
                  )
                )
              ),
              !1
            )
          );
        }),
        eN = "DialogTitle",
        eI = (0, d.forwardRef)((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = eO(eN, n);
          return (0, d.createElement)(
            y.WV.h2,
            (0, s.Z)({ id: o.titleId }, r, { ref: t })
          );
        }),
        eZ = (0, d.forwardRef)((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = eO("DialogDescription", n);
          return (0, d.createElement)(
            y.WV.p,
            (0, s.Z)({ id: o.descriptionId }, r, { ref: t })
          );
        }),
        ej = (0, d.forwardRef)((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = eO("DialogClose", n);
          return (0, d.createElement)(
            y.WV.button,
            (0, s.Z)({ type: "button" }, r, {
              ref: t,
              onClick: (0, f.M)(e.onClick, () => o.onOpenChange(!1)),
            })
          );
        });
      function eB(e) {
        return e ? "open" : "closed";
      }
      let [eX, ez] = (0, v.k)("DialogTitleWarning", {
          contentName: eM,
          titleName: eN,
          docsSlug: "dialog",
        }),
        eK = (e) => {
          let {
              __scopeDialog: t,
              children: n,
              open: r,
              defaultOpen: o,
              onOpenChange: a,
              modal: i = !0,
            } = e,
            u = (0, d.useRef)(null),
            l = (0, d.useRef)(null),
            [c = !1, s] = (0, h.T)({ prop: r, defaultProp: o, onChange: a });
          return (0, d.createElement)(
            eD,
            {
              scope: t,
              triggerRef: u,
              contentRef: l,
              contentId: (0, m.M)(),
              titleId: (0, m.M)(),
              descriptionId: (0, m.M)(),
              open: c,
              onOpenChange: s,
              onOpenToggle: (0, d.useCallback)(() => s((e) => !e), [s]),
              modal: i,
            },
            n
          );
        },
        eV = eR,
        eY = (e) => {
          let {
              __scopeDialog: t,
              forceMount: n,
              children: r,
              container: o,
            } = e,
            a = eO(eT, t);
          return (0, d.createElement)(
            eS,
            { scope: t, forceMount: n },
            d.Children.map(r, (e) =>
              (0, d.createElement)(
                L.z,
                { present: n || a.open },
                (0, d.createElement)(P, { asChild: !0, container: o }, e)
              )
            )
          );
        },
        eH = eP,
        eU = eA,
        eq = eI,
        eG = eZ,
        eJ = ej;
    },
    79249: function (e, t, n) {
      let r;
      n.d(t, {
        XB: function () {
          return f;
        },
      });
      var o = n(13428),
        a = n(2265),
        i = n(85744),
        u = n(9381),
        l = n(42210),
        c = n(16459);
      let s = "dismissableLayer.update",
        d = (0, a.createContext)({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        f = (0, a.forwardRef)((e, t) => {
          var n;
          let {
              disableOutsidePointerEvents: f = !1,
              onEscapeKeyDown: m,
              onPointerDownOutside: h,
              onFocusOutside: g,
              onInteractOutside: y,
              onDismiss: E,
              ...b
            } = e,
            w = (0, a.useContext)(d),
            [C, D] = (0, a.useState)(null),
            O =
              null !== (n = null == C ? void 0 : C.ownerDocument) &&
              void 0 !== n
                ? n
                : null == globalThis
                ? void 0
                : globalThis.document,
            [, R] = (0, a.useState)({}),
            T = (0, l.e)(t, (e) => D(e)),
            S = Array.from(w.layers),
            [k] = [...w.layersWithOutsidePointerEventsDisabled].slice(-1),
            _ = S.indexOf(k),
            P = C ? S.indexOf(C) : -1,
            L = w.layersWithOutsidePointerEventsDisabled.size > 0,
            M = P >= _,
            A = (function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let n = (0, c.W)(e),
                r = (0, a.useRef)(!1),
                o = (0, a.useRef)(() => {});
              return (
                (0, a.useEffect)(() => {
                  let e = (e) => {
                      if (e.target && !r.current) {
                        let r = { originalEvent: e };
                        function a() {
                          v("dismissableLayer.pointerDownOutside", n, r, {
                            discrete: !0,
                          });
                        }
                        "touch" === e.pointerType
                          ? (t.removeEventListener("click", o.current),
                            (o.current = a),
                            t.addEventListener("click", o.current, {
                              once: !0,
                            }))
                          : a();
                      } else t.removeEventListener("click", o.current);
                      r.current = !1;
                    },
                    a = window.setTimeout(() => {
                      t.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(a),
                      t.removeEventListener("pointerdown", e),
                      t.removeEventListener("click", o.current);
                  };
                }, [t, n]),
                { onPointerDownCapture: () => (r.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...w.branches].some((e) => e.contains(t));
              !M ||
                n ||
                (null == h || h(e),
                null == y || y(e),
                e.defaultPrevented || null == E || E());
            }, O),
            x = (function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let n = (0, c.W)(e),
                r = (0, a.useRef)(!1);
              return (
                (0, a.useEffect)(() => {
                  let e = (e) => {
                    e.target &&
                      !r.current &&
                      v(
                        "dismissableLayer.focusOutside",
                        n,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    t.addEventListener("focusin", e),
                    () => t.removeEventListener("focusin", e)
                  );
                }, [t, n]),
                {
                  onFocusCapture: () => (r.current = !0),
                  onBlurCapture: () => (r.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...w.branches].some((e) => e.contains(t)) ||
                (null == g || g(e),
                null == y || y(e),
                e.defaultPrevented || null == E || E());
            }, O);
          return (
            !(function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let n = (0, c.W)(e);
              (0, a.useEffect)(() => {
                let e = (e) => {
                  "Escape" === e.key && n(e);
                };
                return (
                  t.addEventListener("keydown", e),
                  () => t.removeEventListener("keydown", e)
                );
              }, [n, t]);
            })((e) => {
              P !== w.layers.size - 1 ||
                (null == m || m(e),
                !e.defaultPrevented && E && (e.preventDefault(), E()));
            }, O),
            (0, a.useEffect)(() => {
              if (C)
                return (
                  f &&
                    (0 === w.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = O.body.style.pointerEvents),
                      (O.body.style.pointerEvents = "none")),
                    w.layersWithOutsidePointerEventsDisabled.add(C)),
                  w.layers.add(C),
                  p(),
                  () => {
                    f &&
                      1 === w.layersWithOutsidePointerEventsDisabled.size &&
                      (O.body.style.pointerEvents = r);
                  }
                );
            }, [C, O, f, w]),
            (0, a.useEffect)(
              () => () => {
                C &&
                  (w.layers.delete(C),
                  w.layersWithOutsidePointerEventsDisabled.delete(C),
                  p());
              },
              [C, w]
            ),
            (0, a.useEffect)(() => {
              let e = () => R({});
              return (
                document.addEventListener(s, e),
                () => document.removeEventListener(s, e)
              );
            }, []),
            (0, a.createElement)(
              u.WV.div,
              (0, o.Z)({}, b, {
                ref: T,
                style: {
                  pointerEvents: L ? (M ? "auto" : "none") : void 0,
                  ...e.style,
                },
                onFocusCapture: (0, i.M)(e.onFocusCapture, x.onFocusCapture),
                onBlurCapture: (0, i.M)(e.onBlurCapture, x.onBlurCapture),
                onPointerDownCapture: (0, i.M)(
                  e.onPointerDownCapture,
                  A.onPointerDownCapture
                ),
              })
            )
          );
        });
      function p() {
        let e = new CustomEvent(s);
        document.dispatchEvent(e);
      }
      function v(e, t, n, { discrete: r }) {
        let o = n.originalEvent.target,
          a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && o.addEventListener(e, t, { once: !0 }),
          r ? (0, u.jH)(o, a) : o.dispatchEvent(a);
      }
    },
  },
]);
