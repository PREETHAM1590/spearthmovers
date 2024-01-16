"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4853],
  {
    62898: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return i;
        },
      });
      var r = t(2265),
        u = {
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        };
      /**
       * @license lucide-react v0.302.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let o = (e) =>
          e
            .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
            .toLowerCase()
            .trim(),
        i = (e, n) => {
          let t = (0, r.forwardRef)(
            (
              {
                color: t = "currentColor",
                size: i = 24,
                strokeWidth: l = 2,
                absoluteStrokeWidth: c,
                className: a = "",
                children: s,
                ...d
              },
              f
            ) =>
              (0, r.createElement)(
                "svg",
                {
                  ref: f,
                  ...u,
                  width: i,
                  height: i,
                  stroke: t,
                  strokeWidth: c ? (24 * Number(l)) / Number(i) : l,
                  className: ["lucide", `lucide-${o(e)}`, a].join(" "),
                  ...d,
                },
                [
                  ...n.map(([e, n]) => (0, r.createElement)(e, n)),
                  ...(Array.isArray(s) ? s : [s]),
                ]
              )
          );
          return (t.displayName = `${e}`), t;
        };
    },
    85744: function (e, n, t) {
      t.d(n, {
        M: function () {
          return r;
        },
      });
      function r(e, n, { checkForDefaultPrevented: t = !0 } = {}) {
        return function (r) {
          if ((null == e || e(r), !1 === t || !r.defaultPrevented))
            return null == n ? void 0 : n(r);
        };
      }
    },
    56989: function (e, n, t) {
      t.d(n, {
        b: function () {
          return o;
        },
        k: function () {
          return u;
        },
      });
      var r = t(2265);
      function u(e, n) {
        let t = (0, r.createContext)(n);
        function u(e) {
          let { children: n, ...u } = e,
            o = (0, r.useMemo)(() => u, Object.values(u));
          return (0, r.createElement)(t.Provider, { value: o }, n);
        }
        return (
          (u.displayName = e + "Provider"),
          [
            u,
            function (u) {
              let o = (0, r.useContext)(t);
              if (o) return o;
              if (void 0 !== n) return n;
              throw Error(`\`${u}\` must be used within \`${e}\``);
            },
          ]
        );
      }
      function o(e, n = []) {
        let t = [],
          u = () => {
            let n = t.map((e) => (0, r.createContext)(e));
            return function (t) {
              let u = (null == t ? void 0 : t[e]) || n;
              return (0, r.useMemo)(
                () => ({ [`__scope${e}`]: { ...t, [e]: u } }),
                [t, u]
              );
            };
          };
        return (
          (u.scopeName = e),
          [
            function (n, u) {
              let o = (0, r.createContext)(u),
                i = t.length;
              function l(n) {
                let { scope: t, children: u, ...l } = n,
                  c = (null == t ? void 0 : t[e][i]) || o,
                  a = (0, r.useMemo)(() => l, Object.values(l));
                return (0, r.createElement)(c.Provider, { value: a }, u);
              }
              return (
                (t = [...t, u]),
                (l.displayName = n + "Provider"),
                [
                  l,
                  function (t, l) {
                    let c = (null == l ? void 0 : l[e][i]) || o,
                      a = (0, r.useContext)(c);
                    if (a) return a;
                    if (void 0 !== u) return u;
                    throw Error(`\`${t}\` must be used within \`${n}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let n = e[0];
              if (1 === e.length) return n;
              let t = () => {
                let t = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let u = t.reduce((n, { useScope: t, scopeName: r }) => {
                    let u = t(e)[`__scope${r}`];
                    return { ...n, ...u };
                  }, {});
                  return (0, r.useMemo)(
                    () => ({ [`__scope${n.scopeName}`]: u }),
                    [u]
                  );
                };
              };
              return (t.scopeName = n.scopeName), t;
            })(u, ...n),
          ]
        );
      }
    },
    20966: function (e, n, t) {
      t.d(n, {
        M: function () {
          return c;
        },
      });
      var r,
        u = t(2265),
        o = t(51030);
      let i = (r || (r = t.t(u, 2)))["useId".toString()] || (() => void 0),
        l = 0;
      function c(e) {
        let [n, t] = u.useState(i());
        return (
          (0, o.b)(() => {
            e || t((e) => (null != e ? e : String(l++)));
          }, [e]),
          e || (n ? `radix-${n}` : "")
        );
      }
    },
    85606: function (e, n, t) {
      t.d(n, {
        z: function () {
          return l;
        },
      });
      var r = t(2265),
        u = t(54887),
        o = t(42210),
        i = t(51030);
      let l = (e) => {
        let { present: n, children: t } = e,
          l = (function (e) {
            var n, t;
            let [o, l] = (0, r.useState)(),
              a = (0, r.useRef)({}),
              s = (0, r.useRef)(e),
              d = (0, r.useRef)("none"),
              [f, m] =
                ((n = e ? "mounted" : "unmounted"),
                (t = {
                  mounted: {
                    UNMOUNT: "unmounted",
                    ANIMATION_OUT: "unmountSuspended",
                  },
                  unmountSuspended: {
                    MOUNT: "mounted",
                    ANIMATION_END: "unmounted",
                  },
                  unmounted: { MOUNT: "mounted" },
                }),
                (0, r.useReducer)((e, n) => {
                  let r = t[e][n];
                  return null != r ? r : e;
                }, n));
            return (
              (0, r.useEffect)(() => {
                let e = c(a.current);
                d.current = "mounted" === f ? e : "none";
              }, [f]),
              (0, i.b)(() => {
                let n = a.current,
                  t = s.current;
                if (t !== e) {
                  let r = d.current,
                    u = c(n);
                  e
                    ? m("MOUNT")
                    : "none" === u ||
                      (null == n ? void 0 : n.display) === "none"
                    ? m("UNMOUNT")
                    : t && r !== u
                    ? m("ANIMATION_OUT")
                    : m("UNMOUNT"),
                    (s.current = e);
                }
              }, [e, m]),
              (0, i.b)(() => {
                if (o) {
                  let e = (e) => {
                      let n = c(a.current).includes(e.animationName);
                      e.target === o &&
                        n &&
                        (0, u.flushSync)(() => m("ANIMATION_END"));
                    },
                    n = (e) => {
                      e.target === o && (d.current = c(a.current));
                    };
                  return (
                    o.addEventListener("animationstart", n),
                    o.addEventListener("animationcancel", e),
                    o.addEventListener("animationend", e),
                    () => {
                      o.removeEventListener("animationstart", n),
                        o.removeEventListener("animationcancel", e),
                        o.removeEventListener("animationend", e);
                    }
                  );
                }
                m("ANIMATION_END");
              }, [o, m]),
              {
                isPresent: ["mounted", "unmountSuspended"].includes(f),
                ref: (0, r.useCallback)((e) => {
                  e && (a.current = getComputedStyle(e)), l(e);
                }, []),
              }
            );
          })(n),
          a =
            "function" == typeof t
              ? t({ present: l.isPresent })
              : r.Children.only(t),
          s = (0, o.e)(l.ref, a.ref);
        return "function" == typeof t || l.isPresent
          ? (0, r.cloneElement)(a, { ref: s })
          : null;
      };
      function c(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      l.displayName = "Presence";
    },
    9381: function (e, n, t) {
      t.d(n, {
        WV: function () {
          return l;
        },
        jH: function () {
          return c;
        },
      });
      var r = t(13428),
        u = t(2265),
        o = t(54887),
        i = t(67256);
      let l = [
        "a",
        "button",
        "div",
        "form",
        "h2",
        "h3",
        "img",
        "input",
        "label",
        "li",
        "nav",
        "ol",
        "p",
        "span",
        "svg",
        "ul",
      ].reduce((e, n) => {
        let t = (0, u.forwardRef)((e, t) => {
          let { asChild: o, ...l } = e,
            c = o ? i.g7 : n;
          return (
            (0, u.useEffect)(() => {
              window[Symbol.for("radix-ui")] = !0;
            }, []),
            (0, u.createElement)(c, (0, r.Z)({}, l, { ref: t }))
          );
        });
        return (t.displayName = `Primitive.${n}`), { ...e, [n]: t };
      }, {});
      function c(e, n) {
        e && (0, o.flushSync)(() => e.dispatchEvent(n));
      }
    },
    16459: function (e, n, t) {
      t.d(n, {
        W: function () {
          return u;
        },
      });
      var r = t(2265);
      function u(e) {
        let n = (0, r.useRef)(e);
        return (
          (0, r.useEffect)(() => {
            n.current = e;
          }),
          (0, r.useMemo)(
            () =>
              (...e) => {
                var t;
                return null === (t = n.current) || void 0 === t
                  ? void 0
                  : t.call(n, ...e);
              },
            []
          )
        );
      }
    },
    73763: function (e, n, t) {
      t.d(n, {
        T: function () {
          return o;
        },
      });
      var r = t(2265),
        u = t(16459);
      function o({ prop: e, defaultProp: n, onChange: t = () => {} }) {
        let [o, i] = (function ({ defaultProp: e, onChange: n }) {
            let t = (0, r.useState)(e),
              [o] = t,
              i = (0, r.useRef)(o),
              l = (0, u.W)(n);
            return (
              (0, r.useEffect)(() => {
                i.current !== o && (l(o), (i.current = o));
              }, [o, i, l]),
              t
            );
          })({ defaultProp: n, onChange: t }),
          l = void 0 !== e,
          c = l ? e : o,
          a = (0, u.W)(t);
        return [
          c,
          (0, r.useCallback)(
            (n) => {
              if (l) {
                let t = "function" == typeof n ? n(e) : n;
                t !== e && a(t);
              } else i(n);
            },
            [l, e, i, a]
          ),
        ];
      }
    },
    51030: function (e, n, t) {
      t.d(n, {
        b: function () {
          return u;
        },
      });
      var r = t(2265);
      let u = (null == globalThis ? void 0 : globalThis.document)
        ? r.useLayoutEffect
        : () => {};
    },
    96061: function (e, n, t) {
      t.d(n, {
        j: function () {
          return i;
        },
      });
      var r = t(57042);
      let u = (e) => ("boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e),
        o = r.W,
        i = (e, n) => (t) => {
          var r;
          if ((null == n ? void 0 : n.variants) == null)
            return o(
              e,
              null == t ? void 0 : t.class,
              null == t ? void 0 : t.className
            );
          let { variants: i, defaultVariants: l } = n,
            c = Object.keys(i).map((e) => {
              let n = null == t ? void 0 : t[e],
                r = null == l ? void 0 : l[e];
              if (null === n) return null;
              let o = u(n) || u(r);
              return i[e][o];
            }),
            a =
              t &&
              Object.entries(t).reduce((e, n) => {
                let [t, r] = n;
                return void 0 === r || (e[t] = r), e;
              }, {});
          return o(
            e,
            c,
            null == n
              ? void 0
              : null === (r = n.compoundVariants) || void 0 === r
              ? void 0
              : r.reduce((e, n) => {
                  let { class: t, className: r, ...u } = n;
                  return Object.entries(u).every((e) => {
                    let [n, t] = e;
                    return Array.isArray(t)
                      ? t.includes({ ...l, ...a }[n])
                      : { ...l, ...a }[n] === t;
                  })
                    ? [...e, t, r]
                    : e;
                }, []),
            null == t ? void 0 : t.class,
            null == t ? void 0 : t.className
          );
        };
    },
  },
]);
