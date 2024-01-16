"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3584],
  {
    68291: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      /**
       * @license lucide-react v0.302.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let n = (0, r(62898).Z)("ArrowRight", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
      ]);
    },
    72490: function (e, t, r) {
      r.d(t, {
        Qd: function () {
          return U;
        },
        VY: function () {
          return en;
        },
        h4: function () {
          return et;
        },
        ck: function () {
          return ee;
        },
        fC: function () {
          return X;
        },
        xz: function () {
          return er;
        },
      });
      var n = r(13428),
        o = r(2265),
        l = r(56989),
        a = r(27733),
        i = r(42210),
        c = r(85744),
        d = r(73763),
        u = r(9381),
        s = r(51030),
        p = r(85606),
        f = r(20966);
      let m = "Collapsible",
        [b, g] = (0, l.b)(m),
        [v, h] = b(m),
        E = (0, o.forwardRef)((e, t) => {
          let {
              __scopeCollapsible: r,
              open: l,
              defaultOpen: a,
              disabled: i,
              onOpenChange: c,
              ...s
            } = e,
            [p = !1, m] = (0, d.T)({ prop: l, defaultProp: a, onChange: c });
          return (0, o.createElement)(
            v,
            {
              scope: r,
              disabled: i,
              contentId: (0, f.M)(),
              open: p,
              onOpenToggle: (0, o.useCallback)(() => m((e) => !e), [m]),
            },
            (0, o.createElement)(
              u.WV.div,
              (0, n.Z)(
                { "data-state": R(p), "data-disabled": i ? "" : void 0 },
                s,
                { ref: t }
              )
            )
          );
        }),
        w = (0, o.forwardRef)((e, t) => {
          let { __scopeCollapsible: r, ...l } = e,
            a = h("CollapsibleTrigger", r);
          return (0, o.createElement)(
            u.WV.button,
            (0, n.Z)(
              {
                type: "button",
                "aria-controls": a.contentId,
                "aria-expanded": a.open || !1,
                "data-state": R(a.open),
                "data-disabled": a.disabled ? "" : void 0,
                disabled: a.disabled,
              },
              l,
              { ref: t, onClick: (0, c.M)(e.onClick, a.onOpenToggle) }
            )
          );
        }),
        y = "CollapsibleContent",
        C = (0, o.forwardRef)((e, t) => {
          let { forceMount: r, ...l } = e,
            a = h(y, e.__scopeCollapsible);
          return (0, o.createElement)(
            p.z,
            { present: r || a.open },
            ({ present: e }) =>
              (0, o.createElement)(A, (0, n.Z)({}, l, { ref: t, present: e }))
          );
        }),
        A = (0, o.forwardRef)((e, t) => {
          let { __scopeCollapsible: r, present: l, children: a, ...c } = e,
            d = h(y, r),
            [p, f] = (0, o.useState)(l),
            m = (0, o.useRef)(null),
            b = (0, i.e)(t, m),
            g = (0, o.useRef)(0),
            v = g.current,
            E = (0, o.useRef)(0),
            w = E.current,
            C = d.open || p,
            A = (0, o.useRef)(C),
            _ = (0, o.useRef)();
          return (
            (0, o.useEffect)(() => {
              let e = requestAnimationFrame(() => (A.current = !1));
              return () => cancelAnimationFrame(e);
            }, []),
            (0, s.b)(() => {
              let e = m.current;
              if (e) {
                (_.current = _.current || {
                  transitionDuration: e.style.transitionDuration,
                  animationName: e.style.animationName,
                }),
                  (e.style.transitionDuration = "0s"),
                  (e.style.animationName = "none");
                let t = e.getBoundingClientRect();
                (g.current = t.height),
                  (E.current = t.width),
                  A.current ||
                    ((e.style.transitionDuration =
                      _.current.transitionDuration),
                    (e.style.animationName = _.current.animationName)),
                  f(l);
              }
            }, [d.open, l]),
            (0, o.createElement)(
              u.WV.div,
              (0, n.Z)(
                {
                  "data-state": R(d.open),
                  "data-disabled": d.disabled ? "" : void 0,
                  id: d.contentId,
                  hidden: !C,
                },
                c,
                {
                  ref: b,
                  style: {
                    "--radix-collapsible-content-height": v ? `${v}px` : void 0,
                    "--radix-collapsible-content-width": w ? `${w}px` : void 0,
                    ...e.style,
                  },
                }
              ),
              C && a
            )
          );
        });
      function R(e) {
        return e ? "open" : "closed";
      }
      var _ = r(65400);
      let k = "Accordion",
        x = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [I, Z, M] = (0, a.B)(k),
        [V, D] = (0, l.b)(k, [M, g]),
        O = g(),
        S = o.forwardRef((e, t) => {
          let { type: r, ...l } = e;
          return o.createElement(
            I.Provider,
            { scope: e.__scopeAccordion },
            "multiple" === r
              ? o.createElement(q, (0, n.Z)({}, l, { ref: t }))
              : o.createElement(W, (0, n.Z)({}, l, { ref: t }))
          );
        });
      S.propTypes = {
        type(e) {
          let t = e.value || e.defaultValue;
          return e.type && !["single", "multiple"].includes(e.type)
            ? Error(
                "Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`."
              )
            : "multiple" === e.type && "string" == typeof t
            ? Error(
                "Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`."
              )
            : "single" === e.type && Array.isArray(t)
            ? Error(
                "Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`."
              )
            : null;
        },
      };
      let [T, N] = V(k),
        [P, z] = V(k, { collapsible: !1 }),
        W = o.forwardRef((e, t) => {
          let {
              value: r,
              defaultValue: l,
              onValueChange: a = () => {},
              collapsible: i = !1,
              ...c
            } = e,
            [u, s] = (0, d.T)({ prop: r, defaultProp: l, onChange: a });
          return o.createElement(
            T,
            {
              scope: e.__scopeAccordion,
              value: u ? [u] : [],
              onItemOpen: s,
              onItemClose: o.useCallback(() => i && s(""), [i, s]),
            },
            o.createElement(
              P,
              { scope: e.__scopeAccordion, collapsible: i },
              o.createElement($, (0, n.Z)({}, c, { ref: t }))
            )
          );
        }),
        q = o.forwardRef((e, t) => {
          let {
              value: r,
              defaultValue: l,
              onValueChange: a = () => {},
              ...i
            } = e,
            [c = [], u] = (0, d.T)({ prop: r, defaultProp: l, onChange: a }),
            s = o.useCallback((e) => u((t = []) => [...t, e]), [u]),
            p = o.useCallback(
              (e) => u((t = []) => t.filter((t) => t !== e)),
              [u]
            );
          return o.createElement(
            T,
            {
              scope: e.__scopeAccordion,
              value: c,
              onItemOpen: s,
              onItemClose: p,
            },
            o.createElement(
              P,
              { scope: e.__scopeAccordion, collapsible: !0 },
              o.createElement($, (0, n.Z)({}, i, { ref: t }))
            )
          );
        }),
        [B, H] = V(k),
        $ = o.forwardRef((e, t) => {
          let {
              __scopeAccordion: r,
              disabled: l,
              dir: a,
              orientation: d = "vertical",
              ...s
            } = e,
            p = o.useRef(null),
            f = (0, i.e)(p, t),
            m = Z(r),
            b = "ltr" === (0, _.gm)(a),
            g = (0, c.M)(e.onKeyDown, (e) => {
              var t;
              if (!x.includes(e.key)) return;
              let r = e.target,
                n = m().filter((e) => {
                  var t;
                  return !(
                    null !== (t = e.ref.current) &&
                    void 0 !== t &&
                    t.disabled
                  );
                }),
                o = n.findIndex((e) => e.ref.current === r),
                l = n.length;
              if (-1 === o) return;
              e.preventDefault();
              let a = o,
                i = l - 1,
                c = () => {
                  (a = o + 1) > i && (a = 0);
                },
                u = () => {
                  (a = o - 1) < 0 && (a = i);
                };
              switch (e.key) {
                case "Home":
                  a = 0;
                  break;
                case "End":
                  a = i;
                  break;
                case "ArrowRight":
                  "horizontal" === d && (b ? c() : u());
                  break;
                case "ArrowDown":
                  "vertical" === d && c();
                  break;
                case "ArrowLeft":
                  "horizontal" === d && (b ? u() : c());
                  break;
                case "ArrowUp":
                  "vertical" === d && u();
              }
              null === (t = n[a % l].ref.current) || void 0 === t || t.focus();
            });
          return o.createElement(
            B,
            { scope: r, disabled: l, direction: a, orientation: d },
            o.createElement(
              I.Slot,
              { scope: r },
              o.createElement(
                u.WV.div,
                (0, n.Z)({}, s, {
                  "data-orientation": d,
                  ref: f,
                  onKeyDown: l ? void 0 : g,
                })
              )
            )
          );
        }),
        F = "AccordionItem",
        [K, L] = V(F),
        U = o.forwardRef((e, t) => {
          let { __scopeAccordion: r, value: l, ...a } = e,
            i = H(F, r),
            c = N(F, r),
            d = O(r),
            u = (0, f.M)(),
            s = (l && c.value.includes(l)) || !1,
            p = i.disabled || e.disabled;
          return o.createElement(
            K,
            { scope: r, open: s, disabled: p, triggerId: u },
            o.createElement(
              E,
              (0, n.Z)(
                { "data-orientation": i.orientation, "data-state": J(s) },
                d,
                a,
                {
                  ref: t,
                  disabled: p,
                  open: s,
                  onOpenChange: (e) => {
                    e ? c.onItemOpen(l) : c.onItemClose(l);
                  },
                }
              )
            )
          );
        }),
        Q = o.forwardRef((e, t) => {
          let { __scopeAccordion: r, ...l } = e,
            a = H(k, r),
            i = L("AccordionHeader", r);
          return o.createElement(
            u.WV.h3,
            (0, n.Z)(
              {
                "data-orientation": a.orientation,
                "data-state": J(i.open),
                "data-disabled": i.disabled ? "" : void 0,
              },
              l,
              { ref: t }
            )
          );
        }),
        Y = "AccordionTrigger",
        j = o.forwardRef((e, t) => {
          let { __scopeAccordion: r, ...l } = e,
            a = H(k, r),
            i = L(Y, r),
            c = z(Y, r),
            d = O(r);
          return o.createElement(
            I.ItemSlot,
            { scope: r },
            o.createElement(
              w,
              (0, n.Z)(
                {
                  "aria-disabled": (i.open && !c.collapsible) || void 0,
                  "data-orientation": a.orientation,
                  id: i.triggerId,
                },
                d,
                l,
                { ref: t }
              )
            )
          );
        }),
        G = o.forwardRef((e, t) => {
          let { __scopeAccordion: r, ...l } = e,
            a = H(k, r),
            i = L("AccordionContent", r),
            c = O(r);
          return o.createElement(
            C,
            (0, n.Z)(
              {
                role: "region",
                "aria-labelledby": i.triggerId,
                "data-orientation": a.orientation,
              },
              c,
              l,
              {
                ref: t,
                style: {
                  "--radix-accordion-content-height":
                    "var(--radix-collapsible-content-height)",
                  "--radix-accordion-content-width":
                    "var(--radix-collapsible-content-width)",
                  ...e.style,
                },
              }
            )
          );
        });
      function J(e) {
        return e ? "open" : "closed";
      }
      let X = S,
        ee = U,
        et = Q,
        er = j,
        en = G;
    },
    27733: function (e, t, r) {
      r.d(t, {
        B: function () {
          return i;
        },
      });
      var n = r(2265),
        o = r(56989),
        l = r(42210),
        a = r(67256);
      function i(e) {
        let t = e + "CollectionProvider",
          [r, i] = (0, o.b)(t),
          [c, d] = r(t, {
            collectionRef: { current: null },
            itemMap: new Map(),
          }),
          u = e + "CollectionSlot",
          s = n.forwardRef((e, t) => {
            let { scope: r, children: o } = e,
              i = d(u, r),
              c = (0, l.e)(t, i.collectionRef);
            return n.createElement(a.g7, { ref: c }, o);
          }),
          p = e + "CollectionItemSlot",
          f = "data-radix-collection-item";
        return [
          {
            Provider: (e) => {
              let { scope: t, children: r } = e,
                o = n.useRef(null),
                l = n.useRef(new Map()).current;
              return n.createElement(
                c,
                { scope: t, itemMap: l, collectionRef: o },
                r
              );
            },
            Slot: s,
            ItemSlot: n.forwardRef((e, t) => {
              let { scope: r, children: o, ...i } = e,
                c = n.useRef(null),
                u = (0, l.e)(t, c),
                s = d(p, r);
              return (
                n.useEffect(
                  () => (
                    s.itemMap.set(c, { ref: c, ...i }),
                    () => void s.itemMap.delete(c)
                  )
                ),
                n.createElement(a.g7, { [f]: "", ref: u }, o)
              );
            }),
          },
          function (t) {
            let r = d(e + "CollectionConsumer", t);
            return n.useCallback(() => {
              let e = r.collectionRef.current;
              if (!e) return [];
              let t = Array.from(e.querySelectorAll(`[${f}]`));
              return Array.from(r.itemMap.values()).sort(
                (e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current)
              );
            }, [r.collectionRef, r.itemMap]);
          },
          i,
        ];
      }
    },
    65400: function (e, t, r) {
      r.d(t, {
        gm: function () {
          return l;
        },
      });
      var n = r(2265);
      let o = (0, n.createContext)(void 0);
      function l(e) {
        let t = (0, n.useContext)(o);
        return e || t || "ltr";
      }
    },
  },
]);
