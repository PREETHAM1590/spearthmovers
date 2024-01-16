(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9104],
  {
    87199: function (e, t, n) {
      let r = n(2265),
        o = r.forwardRef(function ({ title: e, titleId: t, ...n }, o) {
          return r.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: o,
                "aria-labelledby": t,
              },
              n
            ),
            e ? r.createElement("title", { id: t }, e) : null,
            r.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M6 18L18 6M6 6l12 12",
            })
          );
        });
      e.exports = o;
    },
    83523: function (e, t, n) {
      "use strict";
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
       */ let r = (0, n(62898).Z)("ChevronDown", [
        ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
      ]);
    },
    96891: function (e, t, n) {
      "use strict";
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
       */ let r = (0, n(62898).Z)("Tally2", [
        ["path", { d: "M4 4v16", key: "6qkkli" }],
        ["path", { d: "M9 4v16", key: "81ygyz" }],
      ]);
    },
    5720: function (e, t, n) {
      "use strict";
      n.d(t, {
        VY: function () {
          return em;
        },
        z$: function () {
          return ep;
        },
        ck: function () {
          return ed;
        },
        rU: function () {
          return eg;
        },
        aV: function () {
          return ef;
        },
        fC: function () {
          return ec;
        },
        xz: function () {
          return ev;
        },
        l_: function () {
          return eh;
        },
      });
      var r = n(13428),
        o = n(2265),
        i = n(54887),
        a = n(56989),
        l = n(85744),
        u = n(9381),
        s = n(73763),
        c = n(42210),
        f = n(65400),
        d = n(85606),
        v = n(20966),
        g = n(27733),
        p = n(79249),
        m = n(85184),
        h = n(51030),
        w = n(16459);
      let E = (0, o.forwardRef)((e, t) =>
          (0, o.createElement)(
            u.WV.span,
            (0, r.Z)({}, e, {
              ref: t,
              style: {
                position: "absolute",
                border: 0,
                width: 1,
                height: 1,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                wordWrap: "normal",
                ...e.style,
              },
            })
          )
        ),
        y = "NavigationMenu",
        [M, R, b] = (0, g.B)(y),
        [C, x, L] = (0, g.B)(y),
        [T, _] = (0, a.b)(y, [b, L]),
        [k, N] = T(y),
        [W, P] = T(y),
        S = (0, o.forwardRef)((e, t) => {
          let {
              __scopeNavigationMenu: n,
              value: i,
              onValueChange: a,
              defaultValue: l,
              delayDuration: d = 200,
              skipDelayDuration: v = 300,
              orientation: g = "horizontal",
              dir: p,
              ...m
            } = e,
            [h, w] = (0, o.useState)(null),
            E = (0, c.e)(t, (e) => w(e)),
            y = (0, f.gm)(p),
            M = (0, o.useRef)(0),
            R = (0, o.useRef)(0),
            b = (0, o.useRef)(0),
            [C, x] = (0, o.useState)(!0),
            [L = "", T] = (0, s.T)({
              prop: i,
              onChange: (e) => {
                let t = v > 0;
                "" !== e
                  ? (window.clearTimeout(b.current), t && x(!1))
                  : (window.clearTimeout(b.current),
                    (b.current = window.setTimeout(() => x(!0), v))),
                  null == a || a(e);
              },
              defaultProp: l,
            }),
            _ = (0, o.useCallback)(() => {
              window.clearTimeout(R.current),
                (R.current = window.setTimeout(() => T(""), 150));
            }, [T]),
            k = (0, o.useCallback)(
              (e) => {
                window.clearTimeout(R.current), T(e);
              },
              [T]
            ),
            N = (0, o.useCallback)(
              (e) => {
                L === e
                  ? window.clearTimeout(R.current)
                  : (M.current = window.setTimeout(() => {
                      window.clearTimeout(R.current), T(e);
                    }, d));
              },
              [L, T, d]
            );
          return (
            (0, o.useEffect)(
              () => () => {
                window.clearTimeout(M.current),
                  window.clearTimeout(R.current),
                  window.clearTimeout(b.current);
              },
              []
            ),
            (0, o.createElement)(
              A,
              {
                scope: n,
                isRootMenu: !0,
                value: L,
                dir: y,
                orientation: g,
                rootNavigationMenu: h,
                onTriggerEnter: (e) => {
                  window.clearTimeout(M.current), C ? N(e) : k(e);
                },
                onTriggerLeave: () => {
                  window.clearTimeout(M.current), _();
                },
                onContentEnter: () => window.clearTimeout(R.current),
                onContentLeave: _,
                onItemSelect: (e) => {
                  T((t) => (t === e ? "" : e));
                },
                onItemDismiss: () => T(""),
              },
              (0, o.createElement)(
                u.WV.nav,
                (0, r.Z)(
                  { "aria-label": "Main", "data-orientation": g, dir: y },
                  m,
                  { ref: E }
                )
              )
            )
          );
        }),
        A = (e) => {
          let {
              scope: t,
              isRootMenu: n,
              rootNavigationMenu: r,
              dir: i,
              orientation: a,
              children: l,
              value: u,
              onItemSelect: s,
              onItemDismiss: c,
              onTriggerEnter: f,
              onTriggerLeave: d,
              onContentEnter: g,
              onContentLeave: p,
            } = e,
            [h, E] = (0, o.useState)(null),
            [y, R] = (0, o.useState)(new Map()),
            [b, C] = (0, o.useState)(null);
          return (0, o.createElement)(
            k,
            {
              scope: t,
              isRootMenu: n,
              rootNavigationMenu: r,
              value: u,
              previousValue: (0, m.D)(u),
              baseId: (0, v.M)(),
              dir: i,
              orientation: a,
              viewport: h,
              onViewportChange: E,
              indicatorTrack: b,
              onIndicatorTrackChange: C,
              onTriggerEnter: (0, w.W)(f),
              onTriggerLeave: (0, w.W)(d),
              onContentEnter: (0, w.W)(g),
              onContentLeave: (0, w.W)(p),
              onItemSelect: (0, w.W)(s),
              onItemDismiss: (0, w.W)(c),
              onViewportContentChange: (0, o.useCallback)((e, t) => {
                R((n) => (n.set(e, t), new Map(n)));
              }, []),
              onViewportContentRemove: (0, o.useCallback)((e) => {
                R((t) => (t.has(e) ? (t.delete(e), new Map(t)) : t));
              }, []),
            },
            (0, o.createElement)(
              M.Provider,
              { scope: t },
              (0, o.createElement)(W, { scope: t, items: y }, l)
            )
          );
        },
        D = (0, o.forwardRef)((e, t) => {
          let { __scopeNavigationMenu: n, ...i } = e,
            a = N("NavigationMenuList", n),
            l = (0, o.createElement)(
              u.WV.ul,
              (0, r.Z)({ "data-orientation": a.orientation }, i, { ref: t })
            );
          return (0, o.createElement)(
            u.WV.div,
            { style: { position: "relative" }, ref: a.onIndicatorTrackChange },
            (0, o.createElement)(
              M.Slot,
              { scope: n },
              a.isRootMenu ? (0, o.createElement)(ee, { asChild: !0 }, l) : l
            )
          );
        }),
        [I, V] = T("NavigationMenuItem"),
        F = (0, o.forwardRef)((e, t) => {
          let { __scopeNavigationMenu: n, value: i, ...a } = e,
            l = (0, v.M)(),
            s = (0, o.useRef)(null),
            c = (0, o.useRef)(null),
            f = (0, o.useRef)(null),
            d = (0, o.useRef)(() => {}),
            g = (0, o.useRef)(!1),
            p = (0, o.useCallback)((e = "start") => {
              if (s.current) {
                d.current();
                let t = er(s.current);
                t.length && eo("start" === e ? t : t.reverse());
              }
            }, []),
            m = (0, o.useCallback)(() => {
              if (s.current) {
                let e = er(s.current);
                e.length &&
                  (d.current =
                    (e.forEach((e) => {
                      (e.dataset.tabindex = e.getAttribute("tabindex") || ""),
                        e.setAttribute("tabindex", "-1");
                    }),
                    () => {
                      e.forEach((e) => {
                        let t = e.dataset.tabindex;
                        e.setAttribute("tabindex", t);
                      });
                    }));
              }
            }, []);
          return (0, o.createElement)(
            I,
            {
              scope: n,
              value: i || l || "LEGACY_REACT_AUTO_VALUE",
              triggerRef: c,
              contentRef: s,
              focusProxyRef: f,
              wasEscapeCloseRef: g,
              onEntryKeyDown: p,
              onFocusProxyEnter: p,
              onRootContentClose: m,
              onContentFocusOutside: m,
            },
            (0, o.createElement)(u.WV.li, (0, r.Z)({}, a, { ref: t }))
          );
        }),
        O = "NavigationMenuTrigger",
        z = (0, o.forwardRef)((e, t) => {
          let { __scopeNavigationMenu: n, disabled: i, ...a } = e,
            s = N(O, e.__scopeNavigationMenu),
            f = V(O, e.__scopeNavigationMenu),
            d = (0, o.useRef)(null),
            v = (0, c.e)(d, f.triggerRef, t),
            g = el(s.baseId, f.value),
            p = eu(s.baseId, f.value),
            m = (0, o.useRef)(!1),
            h = (0, o.useRef)(!1),
            w = f.value === s.value;
          return (0, o.createElement)(
            o.Fragment,
            null,
            (0, o.createElement)(
              M.ItemSlot,
              { scope: n, value: f.value },
              (0, o.createElement)(
                en,
                { asChild: !0 },
                (0, o.createElement)(
                  u.WV.button,
                  (0, r.Z)(
                    {
                      id: g,
                      disabled: i,
                      "data-disabled": i ? "" : void 0,
                      "data-state": ea(w),
                      "aria-expanded": w,
                      "aria-controls": p,
                    },
                    a,
                    {
                      ref: v,
                      onPointerEnter: (0, l.M)(e.onPointerEnter, () => {
                        (h.current = !1), (f.wasEscapeCloseRef.current = !1);
                      }),
                      onPointerMove: (0, l.M)(
                        e.onPointerMove,
                        es(() => {
                          i ||
                            h.current ||
                            f.wasEscapeCloseRef.current ||
                            m.current ||
                            (s.onTriggerEnter(f.value), (m.current = !0));
                        })
                      ),
                      onPointerLeave: (0, l.M)(
                        e.onPointerLeave,
                        es(() => {
                          i || (s.onTriggerLeave(), (m.current = !1));
                        })
                      ),
                      onClick: (0, l.M)(e.onClick, () => {
                        s.onItemSelect(f.value), (h.current = w);
                      }),
                      onKeyDown: (0, l.M)(e.onKeyDown, (e) => {
                        let t = {
                          horizontal: "ArrowDown",
                          vertical:
                            "rtl" === s.dir ? "ArrowLeft" : "ArrowRight",
                        }[s.orientation];
                        w &&
                          e.key === t &&
                          (f.onEntryKeyDown(), e.preventDefault());
                      }),
                    }
                  )
                )
              )
            ),
            w &&
              (0, o.createElement)(
                o.Fragment,
                null,
                (0, o.createElement)(E, {
                  "aria-hidden": !0,
                  tabIndex: 0,
                  ref: f.focusProxyRef,
                  onFocus: (e) => {
                    let t = f.contentRef.current,
                      n = e.relatedTarget,
                      r = n === d.current,
                      o = null == t ? void 0 : t.contains(n);
                    (r || !o) && f.onFocusProxyEnter(r ? "start" : "end");
                  },
                }),
                s.viewport && (0, o.createElement)("span", { "aria-owns": p })
              )
          );
        }),
        B = "navigationMenu.linkSelect",
        Z = (0, o.forwardRef)((e, t) => {
          let { __scopeNavigationMenu: n, active: i, onSelect: a, ...s } = e;
          return (0, o.createElement)(
            en,
            { asChild: !0 },
            (0, o.createElement)(
              u.WV.a,
              (0, r.Z)(
                {
                  "data-active": i ? "" : void 0,
                  "aria-current": i ? "page" : void 0,
                },
                s,
                {
                  ref: t,
                  onClick: (0, l.M)(
                    e.onClick,
                    (e) => {
                      let t = e.target,
                        n = new CustomEvent(B, { bubbles: !0, cancelable: !0 });
                      if (
                        (t.addEventListener(
                          B,
                          (e) => (null == a ? void 0 : a(e)),
                          { once: !0 }
                        ),
                        (0, u.jH)(t, n),
                        !n.defaultPrevented && !e.metaKey)
                      ) {
                        let e = new CustomEvent(U, {
                          bubbles: !0,
                          cancelable: !0,
                        });
                        (0, u.jH)(t, e);
                      }
                    },
                    { checkForDefaultPrevented: !1 }
                  ),
                }
              )
            )
          );
        }),
        H = "NavigationMenuIndicator",
        K = (0, o.forwardRef)((e, t) => {
          let { forceMount: n, ...a } = e,
            l = N(H, e.__scopeNavigationMenu),
            u = !!l.value;
          return l.indicatorTrack
            ? i.createPortal(
                (0, o.createElement)(
                  d.z,
                  { present: n || u },
                  (0, o.createElement)(X, (0, r.Z)({}, a, { ref: t }))
                ),
                l.indicatorTrack
              )
            : null;
        }),
        X = (0, o.forwardRef)((e, t) => {
          let { __scopeNavigationMenu: n, ...i } = e,
            a = N(H, n),
            l = R(n),
            [s, c] = (0, o.useState)(null),
            [f, d] = (0, o.useState)(null),
            v = "horizontal" === a.orientation,
            g = !!a.value;
          (0, o.useEffect)(() => {
            var e;
            let t =
              null === (e = l().find((e) => e.value === a.value)) ||
              void 0 === e
                ? void 0
                : e.ref.current;
            t && c(t);
          }, [l, a.value]);
          let p = () => {
            s &&
              d({
                size: v ? s.offsetWidth : s.offsetHeight,
                offset: v ? s.offsetLeft : s.offsetTop,
              });
          };
          return (
            ei(s, p),
            ei(a.indicatorTrack, p),
            f
              ? (0, o.createElement)(
                  u.WV.div,
                  (0, r.Z)(
                    {
                      "aria-hidden": !0,
                      "data-state": g ? "visible" : "hidden",
                      "data-orientation": a.orientation,
                    },
                    i,
                    {
                      ref: t,
                      style: {
                        position: "absolute",
                        ...(v
                          ? {
                              left: 0,
                              width: f.size + "px",
                              transform: `translateX(${f.offset}px)`,
                            }
                          : {
                              top: 0,
                              height: f.size + "px",
                              transform: `translateY(${f.offset}px)`,
                            }),
                        ...i.style,
                      },
                    }
                  )
                )
              : null
          );
        }),
        Y = "NavigationMenuContent",
        $ = (0, o.forwardRef)((e, t) => {
          let { forceMount: n, ...i } = e,
            a = N(Y, e.__scopeNavigationMenu),
            u = V(Y, e.__scopeNavigationMenu),
            s = (0, c.e)(u.contentRef, t),
            f = u.value === a.value,
            v = {
              value: u.value,
              triggerRef: u.triggerRef,
              focusProxyRef: u.focusProxyRef,
              wasEscapeCloseRef: u.wasEscapeCloseRef,
              onContentFocusOutside: u.onContentFocusOutside,
              onRootContentClose: u.onRootContentClose,
              ...i,
            };
          return a.viewport
            ? (0, o.createElement)(
                G,
                (0, r.Z)({ forceMount: n }, v, { ref: s })
              )
            : (0, o.createElement)(
                d.z,
                { present: n || f },
                (0, o.createElement)(
                  j,
                  (0, r.Z)({ "data-state": ea(f) }, v, {
                    ref: s,
                    onPointerEnter: (0, l.M)(
                      e.onPointerEnter,
                      a.onContentEnter
                    ),
                    onPointerLeave: (0, l.M)(
                      e.onPointerLeave,
                      es(a.onContentLeave)
                    ),
                    style: {
                      pointerEvents: !f && a.isRootMenu ? "none" : void 0,
                      ...v.style,
                    },
                  })
                )
              );
        }),
        G = (0, o.forwardRef)((e, t) => {
          let { onViewportContentChange: n, onViewportContentRemove: r } = N(
            Y,
            e.__scopeNavigationMenu
          );
          return (
            (0, h.b)(() => {
              n(e.value, { ref: t, ...e });
            }, [e, t, n]),
            (0, h.b)(() => () => r(e.value), [e.value, r]),
            null
          );
        }),
        U = "navigationMenu.rootContentDismiss",
        j = (0, o.forwardRef)((e, t) => {
          let {
              __scopeNavigationMenu: n,
              value: i,
              triggerRef: a,
              focusProxyRef: u,
              wasEscapeCloseRef: s,
              onRootContentClose: f,
              onContentFocusOutside: d,
              ...v
            } = e,
            g = N(Y, n),
            m = (0, o.useRef)(null),
            h = (0, c.e)(m, t),
            w = el(g.baseId, i),
            E = eu(g.baseId, i),
            y = R(n),
            M = (0, o.useRef)(null),
            { onItemDismiss: b } = g;
          (0, o.useEffect)(() => {
            let e = m.current;
            if (g.isRootMenu && e) {
              let t = () => {
                var t;
                b(),
                  f(),
                  e.contains(document.activeElement) &&
                    (null === (t = a.current) || void 0 === t || t.focus());
              };
              return (
                e.addEventListener(U, t), () => e.removeEventListener(U, t)
              );
            }
          }, [g.isRootMenu, e.value, a, b, f]);
          let C = (0, o.useMemo)(() => {
            let e = y().map((e) => e.value);
            "rtl" === g.dir && e.reverse();
            let t = e.indexOf(g.value),
              n = e.indexOf(g.previousValue),
              r = i === g.value,
              o = n === e.indexOf(i);
            if (!r && !o) return M.current;
            let a = (() => {
              if (t !== n) {
                if (r && -1 !== n) return t > n ? "from-end" : "from-start";
                if (o && -1 !== t) return t > n ? "to-start" : "to-end";
              }
              return null;
            })();
            return (M.current = a), a;
          }, [g.previousValue, g.value, g.dir, y, i]);
          return (0, o.createElement)(
            ee,
            { asChild: !0 },
            (0, o.createElement)(
              p.XB,
              (0, r.Z)(
                {
                  id: E,
                  "aria-labelledby": w,
                  "data-motion": C,
                  "data-orientation": g.orientation,
                },
                v,
                {
                  ref: h,
                  onDismiss: () => {
                    var e;
                    let t = new Event(U, { bubbles: !0, cancelable: !0 });
                    null === (e = m.current) ||
                      void 0 === e ||
                      e.dispatchEvent(t);
                  },
                  onFocusOutside: (0, l.M)(e.onFocusOutside, (e) => {
                    var t;
                    d();
                    let n = e.target;
                    null !== (t = g.rootNavigationMenu) &&
                      void 0 !== t &&
                      t.contains(n) &&
                      e.preventDefault();
                  }),
                  onPointerDownOutside: (0, l.M)(
                    e.onPointerDownOutside,
                    (e) => {
                      var t;
                      let n = e.target,
                        r = y().some((e) => {
                          var t;
                          return null === (t = e.ref.current) || void 0 === t
                            ? void 0
                            : t.contains(n);
                        }),
                        o =
                          g.isRootMenu &&
                          (null === (t = g.viewport) || void 0 === t
                            ? void 0
                            : t.contains(n));
                      (r || o || !g.isRootMenu) && e.preventDefault();
                    }
                  ),
                  onKeyDown: (0, l.M)(e.onKeyDown, (e) => {
                    let t = e.altKey || e.ctrlKey || e.metaKey;
                    if ("Tab" === e.key && !t) {
                      let t = er(e.currentTarget),
                        r = document.activeElement,
                        o = t.findIndex((e) => e === r);
                      if (
                        eo(
                          e.shiftKey
                            ? t.slice(0, o).reverse()
                            : t.slice(o + 1, t.length)
                        )
                      )
                        e.preventDefault();
                      else {
                        var n;
                        null === (n = u.current) || void 0 === n || n.focus();
                      }
                    }
                  }),
                  onEscapeKeyDown: (0, l.M)(e.onEscapeKeyDown, (e) => {
                    s.current = !0;
                  }),
                }
              )
            )
          );
        }),
        q = "NavigationMenuViewport",
        J = (0, o.forwardRef)((e, t) => {
          let { forceMount: n, ...i } = e,
            a = !!N(q, e.__scopeNavigationMenu).value;
          return (0, o.createElement)(
            d.z,
            { present: n || a },
            (0, o.createElement)(Q, (0, r.Z)({}, i, { ref: t }))
          );
        }),
        Q = (0, o.forwardRef)((e, t) => {
          let { __scopeNavigationMenu: n, children: i, ...a } = e,
            s = N(q, n),
            f = (0, c.e)(t, s.onViewportChange),
            v = P(Y, e.__scopeNavigationMenu),
            [g, p] = (0, o.useState)(null),
            [m, h] = (0, o.useState)(null),
            w = g ? (null == g ? void 0 : g.width) + "px" : void 0,
            E = g ? (null == g ? void 0 : g.height) + "px" : void 0,
            y = !!s.value,
            M = y ? s.value : s.previousValue;
          return (
            ei(m, () => {
              m && p({ width: m.offsetWidth, height: m.offsetHeight });
            }),
            (0, o.createElement)(
              u.WV.div,
              (0, r.Z)(
                { "data-state": ea(y), "data-orientation": s.orientation },
                a,
                {
                  ref: f,
                  style: {
                    pointerEvents: !y && s.isRootMenu ? "none" : void 0,
                    "--radix-navigation-menu-viewport-width": w,
                    "--radix-navigation-menu-viewport-height": E,
                    ...a.style,
                  },
                  onPointerEnter: (0, l.M)(e.onPointerEnter, s.onContentEnter),
                  onPointerLeave: (0, l.M)(
                    e.onPointerLeave,
                    es(s.onContentLeave)
                  ),
                }
              ),
              Array.from(v.items).map(
                ([e, { ref: t, forceMount: n, ...i }]) => {
                  let a = M === e;
                  return (0, o.createElement)(
                    d.z,
                    { key: e, present: n || a },
                    (0, o.createElement)(
                      j,
                      (0, r.Z)({}, i, {
                        ref: (0, c.F)(t, (e) => {
                          a && e && h(e);
                        }),
                      })
                    )
                  );
                }
              )
            )
          );
        }),
        ee = (0, o.forwardRef)((e, t) => {
          let { __scopeNavigationMenu: n, ...i } = e,
            a = N("FocusGroup", n);
          return (0, o.createElement)(
            C.Provider,
            { scope: n },
            (0, o.createElement)(
              C.Slot,
              { scope: n },
              (0, o.createElement)(
                u.WV.div,
                (0, r.Z)({ dir: a.dir }, i, { ref: t })
              )
            )
          );
        }),
        et = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"],
        en = (0, o.forwardRef)((e, t) => {
          let { __scopeNavigationMenu: n, ...i } = e,
            a = x(n),
            s = N("FocusGroupItem", n);
          return (0, o.createElement)(
            C.ItemSlot,
            { scope: n },
            (0, o.createElement)(
              u.WV.button,
              (0, r.Z)({}, i, {
                ref: t,
                onKeyDown: (0, l.M)(e.onKeyDown, (e) => {
                  if (["Home", "End", ...et].includes(e.key)) {
                    let t = a().map((e) => e.ref.current);
                    if (
                      ([
                        "rtl" === s.dir ? "ArrowRight" : "ArrowLeft",
                        "ArrowUp",
                        "End",
                      ].includes(e.key) && t.reverse(),
                      et.includes(e.key))
                    ) {
                      let n = t.indexOf(e.currentTarget);
                      t = t.slice(n + 1);
                    }
                    setTimeout(() => eo(t)), e.preventDefault();
                  }
                }),
              })
            )
          );
        });
      function er(e) {
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
      function eo(e) {
        let t = document.activeElement;
        return e.some(
          (e) => e === t || (e.focus(), document.activeElement !== t)
        );
      }
      function ei(e, t) {
        let n = (0, w.W)(t);
        (0, h.b)(() => {
          let t = 0;
          if (e) {
            let r = new ResizeObserver(() => {
              cancelAnimationFrame(t), (t = window.requestAnimationFrame(n));
            });
            return (
              r.observe(e),
              () => {
                window.cancelAnimationFrame(t), r.unobserve(e);
              }
            );
          }
        }, [e, n]);
      }
      function ea(e) {
        return e ? "open" : "closed";
      }
      function el(e, t) {
        return `${e}-trigger-${t}`;
      }
      function eu(e, t) {
        return `${e}-content-${t}`;
      }
      function es(e) {
        return (t) => ("mouse" === t.pointerType ? e(t) : void 0);
      }
      let ec = S,
        ef = D,
        ed = F,
        ev = z,
        eg = Z,
        ep = K,
        em = $,
        eh = J;
    },
    85184: function (e, t, n) {
      "use strict";
      n.d(t, {
        D: function () {
          return o;
        },
      });
      var r = n(2265);
      function o(e) {
        let t = (0, r.useRef)({ value: e, previous: e });
        return (0, r.useMemo)(
          () => (
            t.current.value !== e &&
              ((t.current.previous = t.current.value), (t.current.value = e)),
            t.current.previous
          ),
          [e]
        );
      }
    },
    34570: function (e, t, n) {
      "use strict";
      let r, o;
      n.d(t, {
        v: function () {
          return A;
        },
      });
      var i = n(74101),
        a = n(10961),
        l = n(2265),
        u = n(46567);
      let s = new WeakMap();
      function c({ target: e, contentRect: t, borderBoxSize: n }) {
        var r;
        null === (r = s.get(e)) ||
          void 0 === r ||
          r.forEach((r) => {
            r({
              target: e,
              contentSize: t,
              get size() {
                return (function (e, t) {
                  if (t) {
                    let { inlineSize: e, blockSize: n } = t[0];
                    return { width: e, height: n };
                  }
                  return e instanceof SVGElement && "getBBox" in e
                    ? e.getBBox()
                    : { width: e.offsetWidth, height: e.offsetHeight };
                })(e, n);
              },
            });
          });
      }
      function f(e) {
        e.forEach(c);
      }
      let d = new Set();
      var v = n(42868),
        g = n(69815);
      let p = () => ({
          current: 0,
          offset: [],
          progress: 0,
          scrollLength: 0,
          targetOffset: 0,
          targetLength: 0,
          containerLength: 0,
          velocity: 0,
        }),
        m = () => ({ time: 0, x: p(), y: p() }),
        h = {
          x: { length: "Width", position: "Left" },
          y: { length: "Height", position: "Top" },
        };
      function w(e, t, n, r) {
        let o = n[t],
          { length: i, position: a } = h[t],
          l = o.current,
          u = n.time;
        (o.current = e["scroll" + a]),
          (o.scrollLength = e["scroll" + i] - e["client" + i]),
          (o.offset.length = 0),
          (o.offset[0] = 0),
          (o.offset[1] = o.scrollLength),
          (o.progress = (0, v.Y)(0, o.scrollLength, o.current));
        let s = r - u;
        o.velocity = s > 50 ? 0 : (0, g.R)(o.current - l, s);
      }
      let E = {
          All: [
            [0, 0],
            [1, 1],
          ],
        },
        y = { start: 0, center: 0.5, end: 1 };
      function M(e, t, n = 0) {
        let r = 0;
        if ((void 0 !== y[e] && (e = y[e]), "string" == typeof e)) {
          let t = parseFloat(e);
          e.endsWith("px")
            ? (r = t)
            : e.endsWith("%")
            ? (e = t / 100)
            : e.endsWith("vw")
            ? (r = (t / 100) * document.documentElement.clientWidth)
            : e.endsWith("vh")
            ? (r = (t / 100) * document.documentElement.clientHeight)
            : (e = t);
        }
        return "number" == typeof e && (r = t * e), n + r;
      }
      let R = [0, 0];
      var b = n(3245),
        C = n(34269);
      let x = { x: 0, y: 0 };
      var L = n(72363);
      let T = new WeakMap(),
        _ = new WeakMap(),
        k = new WeakMap(),
        N = (e) => (e === document.documentElement ? window : e);
      var W = n(538);
      function P(e, t) {
        (0, u.K)(
          !!(!t || t.current),
          `You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`
        );
      }
      let S = () => ({
        scrollX: (0, i.BX)(0),
        scrollY: (0, i.BX)(0),
        scrollXProgress: (0, i.BX)(0),
        scrollYProgress: (0, i.BX)(0),
      });
      function A({ container: e, target: t, layoutEffect: n = !0, ...i } = {}) {
        let c = (0, a.h)(S);
        return (
          (n ? W.L : l.useEffect)(
            () => (
              P("target", t),
              P("container", e),
              (function (
                e,
                { container: t = document.documentElement, ...n } = {}
              ) {
                let i = k.get(t);
                i || ((i = new Set()), k.set(t, i));
                let a = (function (e, t, n, r = {}) {
                  return {
                    measure: () =>
                      (function (e, t = e, n) {
                        if (
                          ((n.x.targetOffset = 0),
                          (n.y.targetOffset = 0),
                          t !== e)
                        ) {
                          let r = t;
                          for (; r && r !== e; )
                            (n.x.targetOffset += r.offsetLeft),
                              (n.y.targetOffset += r.offsetTop),
                              (r = r.offsetParent);
                        }
                        (n.x.targetLength =
                          t === e ? t.scrollWidth : t.clientWidth),
                          (n.y.targetLength =
                            t === e ? t.scrollHeight : t.clientHeight),
                          (n.x.containerLength = e.clientWidth),
                          (n.y.containerLength = e.clientHeight);
                      })(e, r.target, n),
                    update: (t) => {
                      w(e, "x", n, t),
                        w(e, "y", n, t),
                        (n.time = t),
                        (r.offset || r.target) &&
                          (function (e, t, n) {
                            let { offset: r = E.All } = n,
                              { target: o = e, axis: i = "y" } = n,
                              a = "y" === i ? "height" : "width",
                              l =
                                o !== e
                                  ? (function (e, t) {
                                      let n = { x: 0, y: 0 },
                                        r = e;
                                      for (; r && r !== t; )
                                        if (r instanceof HTMLElement)
                                          (n.x += r.offsetLeft),
                                            (n.y += r.offsetTop),
                                            (r = r.offsetParent);
                                        else if ("svg" === r.tagName) {
                                          let e = r.getBoundingClientRect(),
                                            t = (r =
                                              r.parentElement).getBoundingClientRect();
                                          (n.x += e.left - t.left),
                                            (n.y += e.top - t.top);
                                        } else if (
                                          r instanceof SVGGraphicsElement
                                        ) {
                                          let { x: e, y: t } = r.getBBox();
                                          (n.x += e), (n.y += t);
                                          let o = null,
                                            i = r.parentNode;
                                          for (; !o; )
                                            "svg" === i.tagName && (o = i),
                                              (i = r.parentNode);
                                          r = o;
                                        } else break;
                                      return n;
                                    })(o, e)
                                  : x,
                              u =
                                o === e
                                  ? {
                                      width: e.scrollWidth,
                                      height: e.scrollHeight,
                                    }
                                  : "getBBox" in o && "svg" !== o.tagName
                                  ? o.getBBox()
                                  : {
                                      width: o.clientWidth,
                                      height: o.clientHeight,
                                    },
                              s = {
                                width: e.clientWidth,
                                height: e.clientHeight,
                              };
                            t[i].offset.length = 0;
                            let c = !t[i].interpolate,
                              f = r.length;
                            for (let e = 0; e < f; e++) {
                              let n = (function (e, t, n, r) {
                                let o = Array.isArray(e) ? e : R,
                                  i = 0;
                                return (
                                  "number" == typeof e
                                    ? (o = [e, e])
                                    : "string" == typeof e &&
                                      (o = (e = e.trim()).includes(" ")
                                        ? e.split(" ")
                                        : [e, y[e] ? e : "0"]),
                                  M(o[0], n, r) - M(o[1], t)
                                );
                              })(r[e], s[a], u[a], l[i]);
                              c ||
                                n === t[i].interpolatorOffsets[e] ||
                                (c = !0),
                                (t[i].offset[e] = n);
                            }
                            c &&
                              ((t[i].interpolate = (0, b.s)(
                                t[i].offset,
                                (0, C.Y)(r)
                              )),
                              (t[i].interpolatorOffsets = [...t[i].offset])),
                              (t[i].progress = t[i].interpolate(t[i].current));
                          })(e, n, r);
                    },
                    notify: () => t(n),
                  };
                })(t, e, m(), n);
                if ((i.add(a), !T.has(t))) {
                  let e = () => {
                      for (let e of i) e.measure();
                    },
                    n = () => {
                      for (let e of i) e.update(L.frameData.timestamp);
                    },
                    a = () => {
                      for (let e of i) e.notify();
                    },
                    l = () => {
                      L.Wi.read(e, !1, !0),
                        L.Wi.update(n, !1, !0),
                        L.Wi.update(a, !1, !0);
                    };
                  T.set(t, l);
                  let c = N(t);
                  window.addEventListener("resize", l, { passive: !0 }),
                    t !== document.documentElement &&
                      _.set(
                        t,
                        "function" == typeof t
                          ? (d.add(t),
                            o ||
                              ((o = () => {
                                let e = {
                                    width: window.innerWidth,
                                    height: window.innerHeight,
                                  },
                                  t = {
                                    target: window,
                                    size: e,
                                    contentSize: e,
                                  };
                                d.forEach((e) => e(t));
                              }),
                              window.addEventListener("resize", o)),
                            () => {
                              d.delete(t), !d.size && o && (o = void 0);
                            })
                          : (function (e, t) {
                              r ||
                                "undefined" == typeof ResizeObserver ||
                                (r = new ResizeObserver(f));
                              let n = (function (e, t, n) {
                                var r;
                                if ("string" == typeof e) {
                                  let o = document;
                                  t &&
                                    ((0, u.k)(
                                      !!t.current,
                                      "Scope provided, but no element detected."
                                    ),
                                    (o = t.current)),
                                    n
                                      ? ((null !== (r = n[e]) &&
                                          void 0 !== r) ||
                                          (n[e] = o.querySelectorAll(e)),
                                        (e = n[e]))
                                      : (e = o.querySelectorAll(e));
                                } else e instanceof Element && (e = [e]);
                                return Array.from(e || []);
                              })(e);
                              return (
                                n.forEach((e) => {
                                  let n = s.get(e);
                                  n || ((n = new Set()), s.set(e, n)),
                                    n.add(t),
                                    null == r || r.observe(e);
                                }),
                                () => {
                                  n.forEach((e) => {
                                    let n = s.get(e);
                                    null == n || n.delete(t),
                                      (null == n ? void 0 : n.size) ||
                                        null == r ||
                                        r.unobserve(e);
                                  });
                                }
                              );
                            })(t, l)
                      ),
                    c.addEventListener("scroll", l, { passive: !0 });
                }
                let l = T.get(t);
                return (
                  L.Wi.read(l, !1, !0),
                  () => {
                    var e;
                    (0, L.Pn)(l);
                    let n = k.get(t);
                    if (!n || (n.delete(a), n.size)) return;
                    let r = T.get(t);
                    T.delete(t),
                      r &&
                        (N(t).removeEventListener("scroll", r),
                        null === (e = _.get(t)) || void 0 === e || e(),
                        window.removeEventListener("resize", r));
                  }
                );
              })(
                ({ x: e, y: t }) => {
                  c.scrollX.set(e.current),
                    c.scrollXProgress.set(e.progress),
                    c.scrollY.set(t.current),
                    c.scrollYProgress.set(t.progress);
                },
                {
                  ...i,
                  container: (null == e ? void 0 : e.current) || void 0,
                  target: (null == t ? void 0 : t.current) || void 0,
                }
              )
            ),
            [e, t, JSON.stringify(i.offset)]
          ),
          c
        );
      }
    },
    59291: function (e, t, n) {
      "use strict";
      n.d(t, {
        H: function () {
          return v;
        },
      });
      var r = n(3245);
      let o = (e) => "object" == typeof e && e.mix,
        i = (e) => (o(e) ? e.mix : void 0);
      var a = n(2265),
        l = n(74101),
        u = n(45968),
        s = n(10961),
        c = n(538),
        f = n(72363);
      function d(e, t) {
        let n = (function (e) {
            let t = (0, s.h)(() => (0, l.BX)(e)),
              { isStatic: n } = (0, a.useContext)(u._);
            if (n) {
              let [, n] = (0, a.useState)(e);
              (0, a.useEffect)(() => t.on("change", n), []);
            }
            return t;
          })(t()),
          r = () => n.set(t());
        return (
          r(),
          (0, c.L)(() => {
            let t = () => f.Wi.update(r, !1, !0),
              n = e.map((e) => e.on("change", t));
            return () => {
              n.forEach((e) => e()), (0, f.Pn)(r);
            };
          }),
          n
        );
      }
      function v(e, t, n, o) {
        if ("function" == typeof e)
          return (function (e) {
            (l.S1.current = []), e();
            let t = d(l.S1.current, e);
            return (l.S1.current = void 0), t;
          })(e);
        let a =
          "function" == typeof t
            ? t
            : (function (...e) {
                let t = !Array.isArray(e[0]),
                  n = t ? 0 : -1,
                  o = e[0 + n],
                  a = e[1 + n],
                  l = e[2 + n],
                  u = e[3 + n],
                  s = (0, r.s)(a, l, { mixer: i(l[0]), ...u });
                return t ? s(o) : s;
              })(t, n, o);
        return Array.isArray(e) ? g(e, a) : g([e], ([e]) => a(e));
      }
      function g(e, t) {
        let n = (0, s.h)(() => []);
        return d(e, () => {
          n.length = 0;
          let r = e.length;
          for (let t = 0; t < r; t++) n[t] = e[t].get();
          return t(n);
        });
      }
    },
  },
]);
