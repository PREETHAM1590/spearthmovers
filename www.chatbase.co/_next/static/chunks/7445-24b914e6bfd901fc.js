(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7445],
  {
    61396: function (t, e, i) {
      t.exports = i(25250);
    },
    45968: function (t, e, i) {
      "use strict";
      i.d(e, {
        _: function () {
          return n;
        },
      });
      let n = (0, i(2265).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    72363: function (t, e, i) {
      "use strict";
      i.d(e, {
        Pn: function () {
          return a;
        },
        Wi: function () {
          return o;
        },
        frameData: function () {
          return l;
        },
        S6: function () {
          return u;
        },
      });
      var n = i(26977);
      class r {
        constructor() {
          (this.order = []), (this.scheduled = new Set());
        }
        add(t) {
          if (!this.scheduled.has(t))
            return this.scheduled.add(t), this.order.push(t), !0;
        }
        remove(t) {
          let e = this.order.indexOf(t);
          -1 !== e && (this.order.splice(e, 1), this.scheduled.delete(t));
        }
        clear() {
          (this.order.length = 0), this.scheduled.clear();
        }
      }
      let s = [
          "prepare",
          "read",
          "update",
          "preRender",
          "render",
          "postRender",
        ],
        {
          schedule: o,
          cancel: a,
          state: l,
          steps: u,
        } = (function (t, e) {
          let i = !1,
            n = !0,
            o = { delta: 0, timestamp: 0, isProcessing: !1 },
            a = s.reduce(
              (t, e) => (
                (t[e] = (function (t) {
                  let e = new r(),
                    i = new r(),
                    n = 0,
                    s = !1,
                    o = !1,
                    a = new WeakSet(),
                    l = {
                      schedule: (t, r = !1, o = !1) => {
                        let l = o && s,
                          u = l ? e : i;
                        return (
                          r && a.add(t),
                          u.add(t) && l && s && (n = e.order.length),
                          t
                        );
                      },
                      cancel: (t) => {
                        i.remove(t), a.delete(t);
                      },
                      process: (r) => {
                        if (s) {
                          o = !0;
                          return;
                        }
                        if (
                          ((s = !0),
                          ([e, i] = [i, e]),
                          i.clear(),
                          (n = e.order.length))
                        )
                          for (let i = 0; i < n; i++) {
                            let n = e.order[i];
                            n(r), a.has(n) && (l.schedule(n), t());
                          }
                        (s = !1), o && ((o = !1), l.process(r));
                      },
                    };
                  return l;
                })(() => (i = !0))),
                t
              ),
              {}
            ),
            l = (t) => a[t].process(o),
            u = () => {
              let r = performance.now();
              (i = !1),
                (o.delta = n
                  ? 1e3 / 60
                  : Math.max(Math.min(r - o.timestamp, 40), 1)),
                (o.timestamp = r),
                (o.isProcessing = !0),
                s.forEach(l),
                (o.isProcessing = !1),
                i && e && ((n = !1), t(u));
            },
            h = () => {
              (i = !0), (n = !0), o.isProcessing || t(u);
            };
          return {
            schedule: s.reduce((t, e) => {
              let n = a[e];
              return (
                (t[e] = (t, e = !1, r = !1) => (i || h(), n.schedule(t, e, r))),
                t
              );
            }, {}),
            cancel: (t) => s.forEach((e) => a[e].cancel(t)),
            state: o,
            steps: a,
          };
        })(
          "undefined" != typeof requestAnimationFrame
            ? requestAnimationFrame
            : n.Z,
          !0
        );
    },
    82797: function (t, e, i) {
      "use strict";
      let n;
      i.d(e, {
        E: function () {
          return n8;
        },
      });
      var r,
        s,
        o = i(2265),
        a = i(45968);
      let l = (0, o.createContext)({}),
        u = (0, o.createContext)(null);
      var h = i(538);
      let c = (0, o.createContext)({ strict: !1 });
      function d(t) {
        return (
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function p(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      function m(t) {
        return "object" == typeof t && "function" == typeof t.start;
      }
      let f = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        v = ["initial", ...f];
      function g(t) {
        return m(t.animate) || v.some((e) => p(t[e]));
      }
      function y(t) {
        return !!(g(t) || t.variants);
      }
      function x(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let P = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        b = {};
      for (let t in P) b[t] = { isEnabled: (e) => P[t].some((t) => !!e[t]) };
      var w = i(16613);
      let A = (0, o.createContext)({}),
        T = (0, o.createContext)({}),
        S = Symbol.for("motionComponentSymbol"),
        V = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function C(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (V.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
        return !1;
      }
      let E = {},
        D = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        M = new Set(D);
      function R(t, { layout: e, layoutId: i }) {
        return (
          M.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!E[t] || "opacity" === t))
        );
      }
      let k = (t) => !!(t && t.getVelocity),
        L = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        j = D.length;
      var F = i(80417);
      let B = (t, e) => (e && "number" == typeof t ? e.transform(t) : t);
      var O = i(2980),
        $ = i(43681);
      let W = { ...O.Rx, transform: Math.round },
        I = {
          borderWidth: $.px,
          borderTopWidth: $.px,
          borderRightWidth: $.px,
          borderBottomWidth: $.px,
          borderLeftWidth: $.px,
          borderRadius: $.px,
          radius: $.px,
          borderTopLeftRadius: $.px,
          borderTopRightRadius: $.px,
          borderBottomRightRadius: $.px,
          borderBottomLeftRadius: $.px,
          width: $.px,
          maxWidth: $.px,
          height: $.px,
          maxHeight: $.px,
          size: $.px,
          top: $.px,
          right: $.px,
          bottom: $.px,
          left: $.px,
          padding: $.px,
          paddingTop: $.px,
          paddingRight: $.px,
          paddingBottom: $.px,
          paddingLeft: $.px,
          margin: $.px,
          marginTop: $.px,
          marginRight: $.px,
          marginBottom: $.px,
          marginLeft: $.px,
          rotate: $.RW,
          rotateX: $.RW,
          rotateY: $.RW,
          rotateZ: $.RW,
          scale: O.bA,
          scaleX: O.bA,
          scaleY: O.bA,
          scaleZ: O.bA,
          skew: $.RW,
          skewX: $.RW,
          skewY: $.RW,
          distance: $.px,
          translateX: $.px,
          translateY: $.px,
          translateZ: $.px,
          x: $.px,
          y: $.px,
          z: $.px,
          perspective: $.px,
          transformPerspective: $.px,
          opacity: O.Fq,
          originX: $.$C,
          originY: $.$C,
          originZ: $.px,
          zIndex: W,
          fillOpacity: O.Fq,
          strokeOpacity: O.Fq,
          numOctaves: W,
        };
      function U(t, e, i, n) {
        let { style: r, vars: s, transform: o, transformOrigin: a } = t,
          l = !1,
          u = !1,
          h = !0;
        for (let t in e) {
          let i = e[t];
          if ((0, F.f9)(t)) {
            s[t] = i;
            continue;
          }
          let n = I[t],
            c = B(i, n);
          if (M.has(t)) {
            if (((l = !0), (o[t] = c), !h)) continue;
            i !== (n.default || 0) && (h = !1);
          } else t.startsWith("origin") ? ((u = !0), (a[t] = c)) : (r[t] = c);
        }
        if (
          (!e.transform &&
            (l || n
              ? (r.transform = (function (
                  t,
                  {
                    enableHardwareAcceleration: e = !0,
                    allowTransformNone: i = !0,
                  },
                  n,
                  r
                ) {
                  let s = "";
                  for (let e = 0; e < j; e++) {
                    let i = D[e];
                    if (void 0 !== t[i]) {
                      let e = L[i] || i;
                      s += `${e}(${t[i]}) `;
                    }
                  }
                  return (
                    e && !t.z && (s += "translateZ(0)"),
                    (s = s.trim()),
                    r ? (s = r(t, n ? "" : s)) : i && n && (s = "none"),
                    s
                  );
                })(t.transform, i, h, n))
              : r.transform && (r.transform = "none")),
          u)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = a;
          r.transformOrigin = `${t} ${e} ${i}`;
        }
      }
      let N = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function z(t, e, i) {
        for (let n in e) k(e[n]) || R(n, i) || (t[n] = e[n]);
      }
      let H = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "onLayoutAnimationStart",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "ignoreStrict",
        "viewport",
      ]);
      function Z(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          H.has(t)
        );
      }
      let Y = (t) => !Z(t);
      try {
        (r = require("@emotion/is-prop-valid").default) &&
          (Y = (t) => (t.startsWith("on") ? !Z(t) : r(t)));
      } catch (t) {}
      function X(t, e, i) {
        return "string" == typeof t ? t : $.px.transform(e + i * t);
      }
      let q = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        G = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function K(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: n,
          originX: r,
          originY: s,
          pathLength: o,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        h,
        c,
        d
      ) {
        if ((U(t, u, h, d), c)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: p, style: m, dimensions: f } = t;
        p.transform && (f && (m.transform = p.transform), delete p.transform),
          f &&
            (void 0 !== r || void 0 !== s || m.transform) &&
            (m.transformOrigin = (function (t, e, i) {
              let n = X(e, t.x, t.width),
                r = X(i, t.y, t.height);
              return `${n} ${r}`;
            })(f, void 0 !== r ? r : 0.5, void 0 !== s ? s : 0.5)),
          void 0 !== e && (p.x = e),
          void 0 !== i && (p.y = i),
          void 0 !== n && (p.scale = n),
          void 0 !== o &&
            (function (t, e, i = 1, n = 0, r = !0) {
              t.pathLength = 1;
              let s = r ? q : G;
              t[s.offset] = $.px.transform(-n);
              let o = $.px.transform(e),
                a = $.px.transform(i);
              t[s.array] = `${o} ${a}`;
            })(p, o, a, l, !1);
      }
      let _ = () => ({ ...N(), attrs: {} }),
        J = (t) => "string" == typeof t && "svg" === t.toLowerCase(),
        Q = (t) => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      function tt(t, { style: e, vars: i }, n, r) {
        for (let s in (Object.assign(t.style, e, r && r.getProjectionStyles(n)),
        i))
          t.style.setProperty(s, i[s]);
      }
      let te = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function ti(t, e, i, n) {
        for (let i in (tt(t, e, void 0, n), e.attrs))
          t.setAttribute(te.has(i) ? i : Q(i), e.attrs[i]);
      }
      function tn(t, e) {
        let { style: i } = t,
          n = {};
        for (let r in i)
          (k(i[r]) || (e.style && k(e.style[r])) || R(r, t)) && (n[r] = i[r]);
        return n;
      }
      function tr(t, e) {
        let i = tn(t, e);
        for (let n in t)
          (k(t[n]) || k(e[n])) &&
            (i[
              -1 !== D.indexOf(n)
                ? "attr" + n.charAt(0).toUpperCase() + n.substring(1)
                : n
            ] = t[n]);
        return i;
      }
      function ts(t, e, i, n = {}, r = {}) {
        return (
          "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, n, r)),
          "string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, n, r)),
          e
        );
      }
      var to = i(10961);
      let ta = (t) => Array.isArray(t),
        tl = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        tu = (t) => (ta(t) ? t[t.length - 1] || 0 : t);
      function th(t) {
        let e = k(t) ? t.get() : t;
        return tl(e) ? e.toValue() : e;
      }
      let tc = (t) => (e, i) => {
        let n = (0, o.useContext)(l),
          r = (0, o.useContext)(u),
          s = () =>
            (function (
              {
                scrapeMotionValuesFromProps: t,
                createRenderState: e,
                onMount: i,
              },
              n,
              r,
              s
            ) {
              let o = {
                latestValues: (function (t, e, i, n) {
                  let r = {},
                    s = n(t, {});
                  for (let t in s) r[t] = th(s[t]);
                  let { initial: o, animate: a } = t,
                    l = g(t),
                    u = y(t);
                  e &&
                    u &&
                    !l &&
                    !1 !== t.inherit &&
                    (void 0 === o && (o = e.initial),
                    void 0 === a && (a = e.animate));
                  let h = !!i && !1 === i.initial,
                    c = (h = h || !1 === o) ? a : o;
                  return (
                    c &&
                      "boolean" != typeof c &&
                      !m(c) &&
                      (Array.isArray(c) ? c : [c]).forEach((e) => {
                        let i = ts(t, e);
                        if (!i) return;
                        let { transitionEnd: n, transition: s, ...o } = i;
                        for (let t in o) {
                          let e = o[t];
                          if (Array.isArray(e)) {
                            let t = h ? e.length - 1 : 0;
                            e = e[t];
                          }
                          null !== e && (r[t] = e);
                        }
                        for (let t in n) r[t] = n[t];
                      }),
                    r
                  );
                })(n, r, s, t),
                renderState: e(),
              };
              return i && (o.mount = (t) => i(n, t, o)), o;
            })(t, e, n, r);
        return i ? s() : (0, to.h)(s);
      };
      var td = i(72363);
      let tp = {
          useVisualState: tc({
            scrapeMotionValuesFromProps: tr,
            createRenderState: _,
            onMount: (t, e, { renderState: i, latestValues: n }) => {
              td.Wi.read(() => {
                try {
                  i.dimensions =
                    "function" == typeof e.getBBox
                      ? e.getBBox()
                      : e.getBoundingClientRect();
                } catch (t) {
                  i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                td.Wi.render(() => {
                  K(
                    i,
                    n,
                    { enableHardwareAcceleration: !1 },
                    J(e.tagName),
                    t.transformTemplate
                  ),
                    ti(e, i);
                });
            },
          }),
        },
        tm = {
          useVisualState: tc({
            scrapeMotionValuesFromProps: tn,
            createRenderState: N,
          }),
        };
      function tf(t, e, i, n = { passive: !0 }) {
        return t.addEventListener(e, i, n), () => t.removeEventListener(e, i);
      }
      let tv = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function tg(t, e = "page") {
        return { point: { x: t[e + "X"], y: t[e + "Y"] } };
      }
      let ty = (t) => (e) => tv(e) && t(e, tg(e));
      function tx(t, e, i, n) {
        return tf(t, e, ty(i), n);
      }
      var tP = i(44694);
      function tb(t) {
        let e = null;
        return () =>
          null === e &&
          ((e = t),
          () => {
            e = null;
          });
      }
      let tw = tb("dragHorizontal"),
        tA = tb("dragVertical");
      function tT(t) {
        let e = !1;
        if ("y" === t) e = tA();
        else if ("x" === t) e = tw();
        else {
          let t = tw(),
            i = tA();
          t && i
            ? (e = () => {
                t(), i();
              })
            : (t && t(), i && i());
        }
        return e;
      }
      function tS() {
        let t = tT(!0);
        return !t || (t(), !1);
      }
      class tV {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      function tC(t, e) {
        let i = "onHover" + (e ? "Start" : "End");
        return tx(
          t.current,
          "pointer" + (e ? "enter" : "leave"),
          (n, r) => {
            if ("touch" === n.type || tS()) return;
            let s = t.getProps();
            t.animationState &&
              s.whileHover &&
              t.animationState.setActive("whileHover", e),
              s[i] && td.Wi.update(() => s[i](n, r));
          },
          { passive: !t.getProps()[i] }
        );
      }
      class tE extends tV {
        mount() {
          this.unmount = (0, tP.z)(tC(this.node, !0), tC(this.node, !1));
        }
        unmount() {}
      }
      class tD extends tV {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = (0, tP.z)(
            tf(this.node.current, "focus", () => this.onFocus()),
            tf(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      let tM = (t, e) => !!e && (t === e || tM(t, e.parentElement));
      var tR = i(26977);
      function tk(t, e) {
        if (!e) return;
        let i = new PointerEvent("pointer" + t);
        e(i, tg(i));
      }
      class tL extends tV {
        constructor() {
          super(...arguments),
            (this.removeStartListeners = tR.Z),
            (this.removeEndListeners = tR.Z),
            (this.removeAccessibleListeners = tR.Z),
            (this.startPointerPress = (t, e) => {
              if ((this.removeEndListeners(), this.isPressing)) return;
              let i = this.node.getProps(),
                n = tx(
                  window,
                  "pointerup",
                  (t, e) => {
                    if (!this.checkPressEnd()) return;
                    let { onTap: i, onTapCancel: n } = this.node.getProps();
                    td.Wi.update(() => {
                      tM(this.node.current, t.target)
                        ? i && i(t, e)
                        : n && n(t, e);
                    });
                  },
                  { passive: !(i.onTap || i.onPointerUp) }
                ),
                r = tx(
                  window,
                  "pointercancel",
                  (t, e) => this.cancelPress(t, e),
                  { passive: !(i.onTapCancel || i.onPointerCancel) }
                );
              (this.removeEndListeners = (0, tP.z)(n, r)),
                this.startPress(t, e);
            }),
            (this.startAccessiblePress = () => {
              let t = tf(this.node.current, "keydown", (t) => {
                  "Enter" !== t.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = tf(
                      this.node.current,
                      "keyup",
                      (t) => {
                        "Enter" === t.key &&
                          this.checkPressEnd() &&
                          tk("up", (t, e) => {
                            let { onTap: i } = this.node.getProps();
                            i && td.Wi.update(() => i(t, e));
                          });
                      }
                    )),
                    tk("down", (t, e) => {
                      this.startPress(t, e);
                    }));
                }),
                e = tf(this.node.current, "blur", () => {
                  this.isPressing &&
                    tk("cancel", (t, e) => this.cancelPress(t, e));
                });
              this.removeAccessibleListeners = (0, tP.z)(t, e);
            });
        }
        startPress(t, e) {
          this.isPressing = !0;
          let { onTapStart: i, whileTap: n } = this.node.getProps();
          n &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !0),
            i && td.Wi.update(() => i(t, e));
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive("whileTap", !1),
            !tS()
          );
        }
        cancelPress(t, e) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: i } = this.node.getProps();
          i && td.Wi.update(() => i(t, e));
        }
        mount() {
          let t = this.node.getProps(),
            e = tx(this.node.current, "pointerdown", this.startPointerPress, {
              passive: !(t.onTapStart || t.onPointerStart),
            }),
            i = tf(this.node.current, "focus", this.startAccessiblePress);
          this.removeStartListeners = (0, tP.z)(e, i);
        }
        unmount() {
          this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
        }
      }
      let tj = new WeakMap(),
        tF = new WeakMap(),
        tB = (t) => {
          let e = tj.get(t.target);
          e && e(t);
        },
        tO = (t) => {
          t.forEach(tB);
        },
        t$ = { some: 0, all: 1 };
      class tW extends tV {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: n = "some", once: r } = t,
            s = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof n ? n : t$[n],
            };
          return (function (t, e, i) {
            let n = (function ({ root: t, ...e }) {
              let i = t || document;
              tF.has(i) || tF.set(i, {});
              let n = tF.get(i),
                r = JSON.stringify(e);
              return (
                n[r] ||
                  (n[r] = new IntersectionObserver(tO, { root: t, ...e })),
                n[r]
              );
            })(e);
            return (
              tj.set(t, i),
              n.observe(t),
              () => {
                tj.delete(t), n.unobserve(t);
              }
            );
          })(this.node.current, s, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), r && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: i, onViewportLeave: n } =
                this.node.getProps(),
              s = e ? i : n;
            s && s(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (i) => t[i] !== e[i];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      function tI(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let n = 0; n < i; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      function tU(t, e, i) {
        let n = t.getProps();
        return ts(
          n,
          e,
          void 0 !== i ? i : n.custom,
          (function (t) {
            let e = {};
            return t.values.forEach((t, i) => (e[i] = t.get())), e;
          })(t),
          (function (t) {
            let e = {};
            return t.values.forEach((t, i) => (e[i] = t.getVelocity())), e;
          })(t)
        );
      }
      let tN = "data-" + Q("framerAppearId");
      var tz = i(46567);
      let tH = (t) => 1e3 * t,
        tZ = (t) => t / 1e3,
        tY = { current: !1 },
        tX = (t) => Array.isArray(t) && "number" == typeof t[0],
        tq = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
        tG = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: tq([0, 0.65, 0.55, 1]),
          circOut: tq([0.55, 0, 1, 0.45]),
          backIn: tq([0.31, 0.01, 0.66, -0.59]),
          backOut: tq([0.33, 1.53, 0.69, 0.99]),
        },
        tK = (t, e, i) =>
          (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function t_(t, e, i, n) {
        if (t === e && i === n) return tR.Z;
        let r = (e) =>
          (function (t, e, i, n, r) {
            let s, o;
            let a = 0;
            do
              (s = tK((o = e + (i - e) / 2), n, r) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(s) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : tK(r(t), e, n));
      }
      let tJ = t_(0.42, 0, 1, 1),
        tQ = t_(0, 0, 0.58, 1),
        t0 = t_(0.42, 0, 0.58, 1),
        t1 = (t) => Array.isArray(t) && "number" != typeof t[0],
        t2 = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        t5 = (t) => (e) => 1 - t(1 - e),
        t3 = (t) => 1 - Math.sin(Math.acos(t)),
        t6 = t5(t3),
        t9 = t2(t6),
        t4 = t_(0.33, 1.53, 0.69, 0.99),
        t8 = t5(t4),
        t7 = t2(t8),
        et = {
          linear: tR.Z,
          easeIn: tJ,
          easeInOut: t0,
          easeOut: tQ,
          circIn: t3,
          circInOut: t9,
          circOut: t6,
          backIn: t8,
          backInOut: t7,
          backOut: t4,
          anticipate: (t) =>
            (t *= 2) < 1 ? 0.5 * t8(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        },
        ee = (t) => {
          if (Array.isArray(t)) {
            (0, tz.k)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, i, n, r] = t;
            return t_(e, i, n, r);
          }
          return "string" == typeof t
            ? ((0, tz.k)(void 0 !== et[t], `Invalid easing type '${t}'`), et[t])
            : t;
        };
      var ei = i(3245),
        en = i(34269);
      function er({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: n = "easeInOut",
      }) {
        let r = t1(n) ? n.map(ee) : ee(n),
          s = { done: !1, value: e[0] },
          o = (i && i.length === e.length ? i : (0, en.Y)(e)).map((e) => e * t),
          a = (0, ei.s)(o, e, {
            ease: Array.isArray(r)
              ? r
              : e.map(() => r || t0).splice(0, e.length - 1),
          });
        return {
          calculatedDuration: t,
          next: (e) => ((s.value = a(e)), (s.done = e >= t), s),
        };
      }
      var es = i(69815);
      function eo(t, e, i) {
        let n = Math.max(e - 5, 0);
        return (0, es.R)(i - t(n), e - n);
      }
      var ea = i(43021);
      function el(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let eu = ["duration", "bounce"],
        eh = ["stiffness", "damping", "mass"];
      function ec(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function ed({ keyframes: t, restDelta: e, restSpeed: i, ...n }) {
        let r;
        let s = t[0],
          o = t[t.length - 1],
          a = { done: !1, value: s },
          {
            stiffness: l,
            damping: u,
            mass: h,
            velocity: c,
            duration: d,
            isResolvedFromDuration: p,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!ec(t, eh) && ec(t, eu)) {
              let i = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: i = 0,
                mass: n = 1,
              }) {
                let r, s;
                (0, tz.K)(
                  t <= tH(10),
                  "Spring duration must be 10 seconds or less"
                );
                let o = 1 - e;
                (o = (0, ea.u)(0.05, 1, o)),
                  (t = (0, ea.u)(0.01, 10, tZ(t))),
                  o < 1
                    ? ((r = (e) => {
                        let n = e * o,
                          r = n * t;
                        return 0.001 - ((n - i) / el(e, o)) * Math.exp(-r);
                      }),
                      (s = (e) => {
                        let n = e * o * t,
                          s = Math.pow(o, 2) * Math.pow(e, 2) * t,
                          a = el(Math.pow(e, 2), o);
                        return (
                          ((n * i + i - s) *
                            Math.exp(-n) *
                            (-r(e) + 0.001 > 0 ? -1 : 1)) /
                          a
                        );
                      }))
                    : ((r = (e) =>
                        -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                      (s = (e) => t * t * (i - e) * Math.exp(-e * t)));
                let a = (function (t, e, i) {
                  let n = i;
                  for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                  return n;
                })(r, s, 5 / t);
                if (((t = tH(t)), isNaN(a)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let e = Math.pow(a, 2) * n;
                  return {
                    stiffness: e,
                    damping: 2 * o * Math.sqrt(n * e),
                    duration: t,
                  };
                }
              })(t);
              (e = {
                ...e,
                ...i,
                velocity: 0,
                mass: 1,
              }).isResolvedFromDuration = !0;
            }
            return e;
          })(n),
          m = c ? -tZ(c) : 0,
          f = u / (2 * Math.sqrt(l * h)),
          v = o - s,
          g = tZ(Math.sqrt(l / h)),
          y = 5 > Math.abs(v);
        if ((i || (i = y ? 0.01 : 2), e || (e = y ? 0.005 : 0.5), f < 1)) {
          let t = el(g, f);
          r = (e) =>
            o -
            Math.exp(-f * g * e) *
              (((m + f * g * v) / t) * Math.sin(t * e) + v * Math.cos(t * e));
        } else if (1 === f)
          r = (t) => o - Math.exp(-g * t) * (v + (m + g * v) * t);
        else {
          let t = g * Math.sqrt(f * f - 1);
          r = (e) => {
            let i = Math.exp(-f * g * e),
              n = Math.min(t * e, 300);
            return (
              o -
              (i * ((m + f * g * v) * Math.sinh(n) + t * v * Math.cosh(n))) / t
            );
          };
        }
        return {
          calculatedDuration: (p && d) || null,
          next: (t) => {
            let n = r(t);
            if (p) a.done = t >= d;
            else {
              let s = m;
              0 !== t && (s = f < 1 ? eo(r, t, n) : 0);
              let l = Math.abs(s) <= i,
                u = Math.abs(o - n) <= e;
              a.done = l && u;
            }
            return (a.value = a.done ? o : n), a;
          },
        };
      }
      function ep({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: n = 325,
        bounceDamping: r = 10,
        bounceStiffness: s = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: h,
      }) {
        let c, d;
        let p = t[0],
          m = { done: !1, value: p },
          f = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          v = (t) =>
            void 0 === a
              ? l
              : void 0 === l
              ? a
              : Math.abs(a - t) < Math.abs(l - t)
              ? a
              : l,
          g = i * e,
          y = p + g,
          x = void 0 === o ? y : o(y);
        x !== y && (g = x - p);
        let P = (t) => -g * Math.exp(-t / n),
          b = (t) => x + P(t),
          w = (t) => {
            let e = P(t),
              i = b(t);
            (m.done = Math.abs(e) <= u), (m.value = m.done ? x : i);
          },
          A = (t) => {
            f(m.value) &&
              ((c = t),
              (d = ed({
                keyframes: [m.value, v(m.value)],
                velocity: eo(b, t, m.value),
                damping: r,
                stiffness: s,
                restDelta: u,
                restSpeed: h,
              })));
          };
        return (
          A(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (d || void 0 !== c || ((e = !0), w(t), A(t)),
              void 0 !== c && t > c)
                ? d.next(t - c)
                : (e || w(t), m);
            },
          }
        );
      }
      let em = (t) => {
        let e = ({ timestamp: e }) => t(e);
        return {
          start: () => td.Wi.update(e, !0),
          stop: () => (0, td.Pn)(e),
          now: () =>
            td.frameData.isProcessing
              ? td.frameData.timestamp
              : performance.now(),
        };
      };
      function ef(t) {
        let e = 0,
          i = t.next(e);
        for (; !i.done && e < 2e4; ) (e += 50), (i = t.next(e));
        return e >= 2e4 ? 1 / 0 : e;
      }
      let ev = { decay: ep, inertia: ep, tween: er, keyframes: er, spring: ed };
      function eg({
        autoplay: t = !0,
        delay: e = 0,
        driver: i = em,
        keyframes: n,
        type: r = "keyframes",
        repeat: s = 0,
        repeatDelay: o = 0,
        repeatType: a = "loop",
        onPlay: l,
        onStop: u,
        onComplete: h,
        onUpdate: c,
        ...d
      }) {
        let p,
          m,
          f,
          v,
          g,
          y = 1,
          x = !1,
          P = () => {
            m = new Promise((t) => {
              p = t;
            });
          };
        P();
        let b = ev[r] || er;
        b !== er &&
          "number" != typeof n[0] &&
          ((v = (0, ei.s)([0, 100], n, { clamp: !1 })), (n = [0, 100]));
        let w = b({ ...d, keyframes: n });
        "mirror" === a &&
          (g = b({
            ...d,
            keyframes: [...n].reverse(),
            velocity: -(d.velocity || 0),
          }));
        let A = "idle",
          T = null,
          S = null,
          V = null;
        null === w.calculatedDuration && s && (w.calculatedDuration = ef(w));
        let { calculatedDuration: C } = w,
          E = 1 / 0,
          D = 1 / 0;
        null !== C && (D = (E = C + o) * (s + 1) - o);
        let M = 0,
          R = (t) => {
            if (null === S) return;
            y > 0 && (S = Math.min(S, t)),
              y < 0 && (S = Math.min(t - D / y, S));
            let i =
                (M = null !== T ? T : Math.round(t - S) * y) -
                e * (y >= 0 ? 1 : -1),
              r = y >= 0 ? i < 0 : i > D;
            (M = Math.max(i, 0)), "finished" === A && null === T && (M = D);
            let l = M,
              u = w;
            if (s) {
              let t = M / E,
                e = Math.floor(t),
                i = t % 1;
              !i && t >= 1 && (i = 1), 1 === i && e--;
              let n = !!((e = Math.min(e, s + 1)) % 2);
              n &&
                ("reverse" === a
                  ? ((i = 1 - i), o && (i -= o / E))
                  : "mirror" === a && (u = g));
              let r = (0, ea.u)(0, 1, i);
              M > D && (r = "reverse" === a && n ? 1 : 0), (l = r * E);
            }
            let h = r ? { done: !1, value: n[0] } : u.next(l);
            v && (h.value = v(h.value));
            let { done: d } = h;
            r || null === C || (d = y >= 0 ? M >= D : M <= 0);
            let p = null === T && ("finished" === A || ("running" === A && d));
            return c && c(h.value), p && j(), h;
          },
          k = () => {
            f && f.stop(), (f = void 0);
          },
          L = () => {
            (A = "idle"), k(), p(), P(), (S = V = null);
          },
          j = () => {
            (A = "finished"), h && h(), k(), p();
          },
          F = () => {
            if (x) return;
            f || (f = i(R));
            let t = f.now();
            l && l(),
              null !== T ? (S = t - T) : (S && "finished" !== A) || (S = t),
              "finished" === A && P(),
              (V = S),
              (T = null),
              (A = "running"),
              f.start();
          };
        t && F();
        let B = {
          then: (t, e) => m.then(t, e),
          get time() {
            return tZ(M);
          },
          set time(newTime) {
            (M = newTime = tH(newTime)),
              null === T && f && 0 !== y
                ? (S = f.now() - newTime / y)
                : (T = newTime);
          },
          get duration() {
            return tZ(
              null === w.calculatedDuration ? ef(w) : w.calculatedDuration
            );
          },
          get speed() {
            return y;
          },
          set speed(newSpeed) {
            if (newSpeed === y || !f) return;
            (y = newSpeed), (B.time = tZ(M));
          },
          get state() {
            return A;
          },
          play: F,
          pause: () => {
            (A = "paused"), (T = M);
          },
          stop: () => {
            (x = !0), "idle" !== A && ((A = "idle"), u && u(), L());
          },
          cancel: () => {
            null !== V && R(V), L();
          },
          complete: () => {
            A = "finished";
          },
          sample: (t) => ((S = 0), R(t)),
        };
        return B;
      }
      let ey =
          ((s = () => Object.hasOwnProperty.call(Element.prototype, "animate")),
          () => (void 0 === n && (n = s()), n)),
        ex = new Set([
          "opacity",
          "clipPath",
          "filter",
          "transform",
          "backgroundColor",
        ]),
        eP = (t, e) =>
          "spring" === e.type ||
          "backgroundColor" === t ||
          !(function t(e) {
            return !!(
              !e ||
              ("string" == typeof e && tG[e]) ||
              tX(e) ||
              (Array.isArray(e) && e.every(t))
            );
          })(e.ease),
        eb = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        ew = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        eA = { type: "keyframes", duration: 0.8 },
        eT = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        eS = (t, { keyframes: e }) =>
          e.length > 2
            ? eA
            : M.has(t)
            ? t.startsWith("scale")
              ? ew(e[1])
              : eb
            : eT;
      var eV = i(89155);
      let eC = (t, e) =>
        "zIndex" !== t &&
        !!(
          "number" == typeof e ||
          Array.isArray(e) ||
          ("string" == typeof e &&
            (eV.P.test(e) || "0" === e) &&
            !e.startsWith("url("))
        );
      var eE = i(2038);
      let eD = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function eM(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = i.match(eE.KP) || [];
        if (!n) return t;
        let r = i.replace(n, ""),
          s = eD.has(e) ? 1 : 0;
        return n !== i && (s *= 100), e + "(" + s + r + ")";
      }
      let eR = /([a-z-]*)\(.*?\)/g,
        ek = {
          ...eV.P,
          getAnimatableNone: (t) => {
            let e = t.match(eR);
            return e ? e.map(eM).join(" ") : t;
          },
        };
      var eL = i(2199);
      let ej = {
          ...I,
          color: eL.$,
          backgroundColor: eL.$,
          outlineColor: eL.$,
          fill: eL.$,
          stroke: eL.$,
          borderColor: eL.$,
          borderTopColor: eL.$,
          borderRightColor: eL.$,
          borderBottomColor: eL.$,
          borderLeftColor: eL.$,
          filter: ek,
          WebkitFilter: ek,
        },
        eF = (t) => ej[t];
      function eB(t, e) {
        let i = eF(t);
        return (
          i !== ek && (i = eV.P),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
      let eO = (t) => /^0[^.\s]+$/.test(t);
      function e$(t, e) {
        return t[e] || t.default || t;
      }
      let eW =
        (t, e, i, n = {}) =>
        (r) => {
          let s = e$(n, t) || {},
            o = s.delay || n.delay || 0,
            { elapsed: a = 0 } = n;
          a -= tH(o);
          let l = (function (t, e, i, n) {
              let r, s;
              let o = eC(e, i);
              r = Array.isArray(i) ? [...i] : [null, i];
              let a = void 0 !== n.from ? n.from : t.get(),
                l = [];
              for (let t = 0; t < r.length; t++) {
                var u;
                null === r[t] && (r[t] = 0 === t ? a : r[t - 1]),
                  ("number" == typeof (u = r[t])
                    ? 0 === u
                    : null !== u
                    ? "none" === u || "0" === u || eO(u)
                    : void 0) && l.push(t),
                  "string" == typeof r[t] &&
                    "none" !== r[t] &&
                    "0" !== r[t] &&
                    (s = r[t]);
              }
              if (o && l.length && s)
                for (let t = 0; t < l.length; t++) r[l[t]] = eB(e, s);
              return r;
            })(e, t, i, s),
            u = l[0],
            h = l[l.length - 1],
            c = eC(t, u),
            d = eC(t, h);
          (0, tz.K)(
            c === d,
            `You are trying to animate ${t} from "${u}" to "${h}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${h} via the \`style\` property.`
          );
          let p = {
            keyframes: l,
            velocity: e.getVelocity(),
            ease: "easeOut",
            ...s,
            delay: -a,
            onUpdate: (t) => {
              e.set(t), s.onUpdate && s.onUpdate(t);
            },
            onComplete: () => {
              r(), s.onComplete && s.onComplete();
            },
          };
          if (
            (!(function ({
              when: t,
              delay: e,
              delayChildren: i,
              staggerChildren: n,
              staggerDirection: r,
              repeat: s,
              repeatType: o,
              repeatDelay: a,
              from: l,
              elapsed: u,
              ...h
            }) {
              return !!Object.keys(h).length;
            })(s) && (p = { ...p, ...eS(t, p) }),
            p.duration && (p.duration = tH(p.duration)),
            p.repeatDelay && (p.repeatDelay = tH(p.repeatDelay)),
            !c || !d || tY.current || !1 === s.type)
          )
            return (function ({
              keyframes: t,
              delay: e,
              onUpdate: i,
              onComplete: n,
            }) {
              let r = () => (
                i && i(t[t.length - 1]),
                n && n(),
                {
                  time: 0,
                  speed: 1,
                  duration: 0,
                  play: tR.Z,
                  pause: tR.Z,
                  stop: tR.Z,
                  then: (t) => (t(), Promise.resolve()),
                  cancel: tR.Z,
                  complete: tR.Z,
                }
              );
              return e
                ? eg({
                    keyframes: [0, 1],
                    duration: 0,
                    delay: e,
                    onComplete: r,
                  })
                : r();
            })(tY.current ? { ...p, delay: 0 } : p);
          if (
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate
          ) {
            let i = (function (t, e, { onUpdate: i, onComplete: n, ...r }) {
              let s, o;
              if (
                !(
                  ey() &&
                  ex.has(e) &&
                  !r.repeatDelay &&
                  "mirror" !== r.repeatType &&
                  0 !== r.damping &&
                  "inertia" !== r.type
                )
              )
                return !1;
              let a = !1,
                l = () => {
                  o = new Promise((t) => {
                    s = t;
                  });
                };
              l();
              let { keyframes: u, duration: h = 300, ease: c, times: d } = r;
              if (eP(e, r)) {
                let t = eg({ ...r, repeat: 0, delay: 0 }),
                  e = { done: !1, value: u[0] },
                  i = [],
                  n = 0;
                for (; !e.done && n < 2e4; )
                  (e = t.sample(n)), i.push(e.value), (n += 10);
                (d = void 0), (u = i), (h = n - 10), (c = "linear");
              }
              let p = (function (
                t,
                e,
                i,
                {
                  delay: n = 0,
                  duration: r,
                  repeat: s = 0,
                  repeatType: o = "loop",
                  ease: a,
                  times: l,
                } = {}
              ) {
                let u = { [e]: i };
                l && (u.offset = l);
                let h = (function t(e) {
                  if (e)
                    return tX(e) ? tq(e) : Array.isArray(e) ? e.map(t) : tG[e];
                })(a);
                return (
                  Array.isArray(h) && (u.easing = h),
                  t.animate(u, {
                    delay: n,
                    duration: r,
                    easing: Array.isArray(h) ? "linear" : h,
                    fill: "both",
                    iterations: s + 1,
                    direction: "reverse" === o ? "alternate" : "normal",
                  })
                );
              })(t.owner.current, e, u, {
                ...r,
                duration: h,
                ease: c,
                times: d,
              });
              r.syncStart &&
                (p.startTime = td.frameData.isProcessing
                  ? td.frameData.timestamp
                  : document.timeline
                  ? document.timeline.currentTime
                  : performance.now());
              let m = () => p.cancel(),
                f = () => {
                  td.Wi.update(m), s(), l();
                };
              return (
                (p.onfinish = () => {
                  t.set(
                    (function (t, { repeat: e, repeatType: i = "loop" }) {
                      let n =
                        e && "loop" !== i && e % 2 == 1 ? 0 : t.length - 1;
                      return t[n];
                    })(u, r)
                  ),
                    n && n(),
                    f();
                }),
                {
                  then: (t, e) => o.then(t, e),
                  attachTimeline: (t) => (
                    (p.timeline = t), (p.onfinish = null), tR.Z
                  ),
                  get time() {
                    return tZ(p.currentTime || 0);
                  },
                  set time(newTime) {
                    p.currentTime = tH(newTime);
                  },
                  get speed() {
                    return p.playbackRate;
                  },
                  set speed(newSpeed) {
                    p.playbackRate = newSpeed;
                  },
                  get duration() {
                    return tZ(h);
                  },
                  play: () => {
                    a || (p.play(), (0, td.Pn)(m));
                  },
                  pause: () => p.pause(),
                  stop: () => {
                    if (((a = !0), "idle" === p.playState)) return;
                    let { currentTime: e } = p;
                    if (e) {
                      let i = eg({ ...r, autoplay: !1 });
                      t.setWithVelocity(
                        i.sample(e - 10).value,
                        i.sample(e).value,
                        10
                      );
                    }
                    f();
                  },
                  complete: () => p.finish(),
                  cancel: f,
                }
              );
            })(e, t, p);
            if (i) return i;
          }
          return eg(p);
        };
      function eI(t) {
        return !!(k(t) && t.add);
      }
      let eU = (t) => /^\-?\d*\.?\d+$/.test(t);
      var eN = i(74101);
      let ez = (t) => (e) => e.test(t),
        eH = [
          O.Rx,
          $.px,
          $.aQ,
          $.RW,
          $.vw,
          $.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        eZ = (t) => eH.find(ez(t)),
        eY = [...eH, eL.$, eV.P],
        eX = (t) => eY.find(ez(t));
      function eq(t, e, { delay: i = 0, transitionOverride: n, type: r } = {}) {
        let {
            transition: s = t.getDefaultTransition(),
            transitionEnd: o,
            ...a
          } = t.makeTargetAnimatable(e),
          l = t.getValue("willChange");
        n && (s = n);
        let u = [],
          h = r && t.animationState && t.animationState.getState()[r];
        for (let e in a) {
          let n = t.getValue(e),
            r = a[e];
          if (
            !n ||
            void 0 === r ||
            (h &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let n = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), n;
              })(h, e))
          )
            continue;
          let o = { delay: i, elapsed: 0, ...s };
          if (window.HandoffAppearAnimations && !n.hasAnimated) {
            let i = t.getProps()[tN];
            i &&
              ((o.elapsed = window.HandoffAppearAnimations(i, e, n, td.Wi)),
              (o.syncStart = !0));
          }
          n.start(
            eW(e, n, r, t.shouldReduceMotion && M.has(e) ? { type: !1 } : o)
          );
          let c = n.animation;
          eI(l) && (l.add(e), c.then(() => l.remove(e))), u.push(c);
        }
        return (
          o &&
            Promise.all(u).then(() => {
              o &&
                (function (t, e) {
                  let i = tU(t, e),
                    {
                      transitionEnd: n = {},
                      transition: r = {},
                      ...s
                    } = i ? t.makeTargetAnimatable(i, !1) : {};
                  for (let e in (s = { ...s, ...n })) {
                    let i = tu(s[e]);
                    t.hasValue(e)
                      ? t.getValue(e).set(i)
                      : t.addValue(e, (0, eN.BX)(i));
                  }
                })(t, o);
            }),
          u
        );
      }
      function eG(t, e, i = {}) {
        let n = tU(t, e, i.custom),
          { transition: r = t.getDefaultTransition() || {} } = n || {};
        i.transitionOverride && (r = i.transitionOverride);
        let s = n ? () => Promise.all(eq(t, n, i)) : () => Promise.resolve(),
          o =
            t.variantChildren && t.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: s = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = r;
                  return (function (t, e, i = 0, n = 0, r = 1, s) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * n,
                      l = 1 === r ? (t = 0) => t * n : (t = 0) => a - t * n;
                    return (
                      Array.from(t.variantChildren)
                        .sort(eK)
                        .forEach((t, n) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              eG(t, e, { ...s, delay: i + l(n) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, s + n, o, a, i);
                }
              : () => Promise.resolve(),
          { when: a } = r;
        if (!a) return Promise.all([s(), o(i.delay)]);
        {
          let [t, e] = "beforeChildren" === a ? [s, o] : [o, s];
          return t().then(() => e());
        }
      }
      function eK(t, e) {
        return t.sortNodePosition(e);
      }
      let e_ = [...f].reverse(),
        eJ = f.length;
      function eQ(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      class e0 extends tV {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (function (t, e, i = {}) {
                          let n;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            n = Promise.all(e.map((e) => eG(t, e, i)));
                          else if ("string" == typeof e) n = eG(t, e, i);
                          else {
                            let r =
                              "function" == typeof e ? tU(t, e, i.custom) : e;
                            n = Promise.all(eq(t, r, i));
                          }
                          return n.then(() => t.notify("AnimationComplete", e));
                        })(t, e, i)
                      )
                    ),
                  i = {
                    animate: eQ(!0),
                    whileInView: eQ(),
                    whileHover: eQ(),
                    whileTap: eQ(),
                    whileDrag: eQ(),
                    whileFocus: eQ(),
                    exit: eQ(),
                  },
                  n = !0,
                  r = (e, i) => {
                    let n = tU(t, i);
                    if (n) {
                      let { transition: t, transitionEnd: i, ...r } = n;
                      e = { ...e, ...r, ...i };
                    }
                    return e;
                  };
                function s(s, o) {
                  let a = t.getProps(),
                    l = t.getVariantContext(!0) || {},
                    u = [],
                    h = new Set(),
                    c = {},
                    d = 1 / 0;
                  for (let e = 0; e < eJ; e++) {
                    var f;
                    let v = e_[e],
                      g = i[v],
                      y = void 0 !== a[v] ? a[v] : l[v],
                      x = p(y),
                      P = v === o ? g.isActive : null;
                    !1 === P && (d = e);
                    let b = y === l[v] && y !== a[v] && x;
                    if (
                      (b && n && t.manuallyAnimateOnMount && (b = !1),
                      (g.protectedKeys = { ...c }),
                      (!g.isActive && null === P) ||
                        (!y && !g.prevProp) ||
                        m(y) ||
                        "boolean" == typeof y)
                    )
                      continue;
                    let w =
                        ((f = g.prevProp),
                        "string" == typeof y
                          ? y !== f
                          : !!Array.isArray(y) && !tI(y, f)),
                      A =
                        w || (v === o && g.isActive && !b && x) || (e > d && x),
                      T = Array.isArray(y) ? y : [y],
                      S = T.reduce(r, {});
                    !1 === P && (S = {});
                    let { prevResolvedValues: V = {} } = g,
                      C = { ...V, ...S },
                      E = (t) => {
                        (A = !0), h.delete(t), (g.needsAnimating[t] = !0);
                      };
                    for (let t in C) {
                      let e = S[t],
                        i = V[t];
                      c.hasOwnProperty(t) ||
                        (e !== i
                          ? ta(e) && ta(i)
                            ? !tI(e, i) || w
                              ? E(t)
                              : (g.protectedKeys[t] = !0)
                            : void 0 !== e
                            ? E(t)
                            : h.add(t)
                          : void 0 !== e && h.has(t)
                          ? E(t)
                          : (g.protectedKeys[t] = !0));
                    }
                    (g.prevProp = y),
                      (g.prevResolvedValues = S),
                      g.isActive && (c = { ...c, ...S }),
                      n && t.blockInitialAnimation && (A = !1),
                      A &&
                        !b &&
                        u.push(
                          ...T.map((t) => ({
                            animation: t,
                            options: { type: v, ...s },
                          }))
                        );
                  }
                  if (h.size) {
                    let e = {};
                    h.forEach((i) => {
                      let n = t.getBaseTarget(i);
                      void 0 !== n && (e[i] = n);
                    }),
                      u.push({ animation: e });
                  }
                  let v = !!u.length;
                  return (
                    n &&
                      !1 === a.initial &&
                      !t.manuallyAnimateOnMount &&
                      (v = !1),
                    (n = !1),
                    v ? e(u) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: s,
                  setActive: function (e, n, r) {
                    var o;
                    if (i[e].isActive === n) return Promise.resolve();
                    null === (o = t.variantChildren) ||
                      void 0 === o ||
                      o.forEach((t) => {
                        var i;
                        return null === (i = t.animationState) || void 0 === i
                          ? void 0
                          : i.setActive(e, n);
                      }),
                      (i[e].isActive = n);
                    let a = s(r, e);
                    for (let t in i) i[t].protectedKeys = {};
                    return a;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          this.unmount(), m(t) && (this.unmount = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {}
      }
      let e1 = 0;
      class e2 extends tV {
        constructor() {
          super(...arguments), (this.id = e1++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let {
              isPresent: t,
              onExitComplete: e,
              custom: i,
            } = this.node.presenceContext,
            { isPresent: n } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === n) return;
          let r = this.node.animationState.setActive("exit", !t, {
            custom: null != i ? i : this.node.getProps().custom,
          });
          e && !t && r.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      let e5 = (t, e) => Math.abs(t - e);
      class e3 {
        constructor(t, e, { transformPagePoint: i } = {}) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = () => {
              var t, e;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let i = e4(this.lastMoveEventInfo, this.history),
                n = null !== this.startEvent,
                r =
                  ((t = i.offset),
                  (e = { x: 0, y: 0 }),
                  Math.sqrt(e5(t.x, e.x) ** 2 + e5(t.y, e.y) ** 2) >= 3);
              if (!n && !r) return;
              let { point: s } = i,
                { timestamp: o } = td.frameData;
              this.history.push({ ...s, timestamp: o });
              let { onStart: a, onMove: l } = this.handlers;
              n ||
                (a && a(this.lastMoveEvent, i),
                (this.startEvent = this.lastMoveEvent)),
                l && l(this.lastMoveEvent, i);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = e6(e, this.transformPagePoint)),
                td.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
                return;
              let { onEnd: i, onSessionEnd: n } = this.handlers,
                r = e4(
                  "pointercancel" === t.type
                    ? this.lastMoveEventInfo
                    : e6(e, this.transformPagePoint),
                  this.history
                );
              this.startEvent && i && i(t, r), n && n(t, r);
            }),
            !tv(t))
          )
            return;
          (this.handlers = e), (this.transformPagePoint = i);
          let n = e6(tg(t), this.transformPagePoint),
            { point: r } = n,
            { timestamp: s } = td.frameData;
          this.history = [{ ...r, timestamp: s }];
          let { onSessionStart: o } = e;
          o && o(t, e4(n, this.history)),
            (this.removeListeners = (0, tP.z)(
              tx(window, "pointermove", this.handlePointerMove),
              tx(window, "pointerup", this.handlePointerUp),
              tx(window, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, td.Pn)(this.updatePoint);
        }
      }
      function e6(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function e9(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function e4({ point: t }, e) {
        return {
          point: t,
          delta: e9(t, e8(e)),
          offset: e9(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              n = null,
              r = e8(t);
            for (
              ;
              i >= 0 && ((n = t[i]), !(r.timestamp - n.timestamp > tH(0.1)));

            )
              i--;
            if (!n) return { x: 0, y: 0 };
            let s = tZ(r.timestamp - n.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (r.x - n.x) / s, y: (r.y - n.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function e8(t) {
        return t[t.length - 1];
      }
      var e7 = i(42868),
        it = i(40007);
      function ie(t) {
        return t.max - t.min;
      }
      function ii(t, e = 0, i = 0.01) {
        return Math.abs(t - e) <= i;
      }
      function ir(t, e, i, n = 0.5) {
        (t.origin = n),
          (t.originPoint = (0, it.C)(e.min, e.max, t.origin)),
          (t.scale = ie(i) / ie(e)),
          (ii(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = (0, it.C)(i.min, i.max, t.origin) - t.originPoint),
          (ii(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function is(t, e, i, n) {
        ir(t.x, e.x, i.x, n ? n.originX : void 0),
          ir(t.y, e.y, i.y, n ? n.originY : void 0);
      }
      function io(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + ie(e));
      }
      function ia(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + ie(e));
      }
      function il(t, e, i) {
        ia(t.x, e.x, i.x), ia(t.y, e.y, i.y);
      }
      function iu(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function ih(t, e) {
        let i = e.min - t.min,
          n = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, n] = [n, i]), { min: i, max: n }
        );
      }
      function ic(t, e, i) {
        return { min: id(t, e), max: id(t, i) };
      }
      function id(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let ip = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        im = () => ({ x: ip(), y: ip() }),
        iv = () => ({ min: 0, max: 0 }),
        ig = () => ({ x: iv(), y: iv() });
      function iy(t) {
        return [t("x"), t("y")];
      }
      function ix({ top: t, left: e, right: i, bottom: n }) {
        return { x: { min: e, max: i }, y: { min: t, max: n } };
      }
      function iP(t) {
        return void 0 === t || 1 === t;
      }
      function ib({ scale: t, scaleX: e, scaleY: i }) {
        return !iP(t) || !iP(e) || !iP(i);
      }
      function iw(t) {
        return ib(t) || iA(t) || t.z || t.rotate || t.rotateX || t.rotateY;
      }
      function iA(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function iT(t, e, i, n, r) {
        return void 0 !== r && (t = n + r * (t - n)), n + i * (t - n) + e;
      }
      function iS(t, e = 0, i = 1, n, r) {
        (t.min = iT(t.min, e, i, n, r)), (t.max = iT(t.max, e, i, n, r));
      }
      function iV(t, { x: e, y: i }) {
        iS(t.x, e.translate, e.scale, e.originPoint),
          iS(t.y, i.translate, i.scale, i.originPoint);
      }
      function iC(t) {
        return Number.isInteger(t)
          ? t
          : t > 1.0000000000001 || t < 0.999999999999
          ? t
          : 1;
      }
      function iE(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function iD(t, e, [i, n, r]) {
        let s = void 0 !== e[r] ? e[r] : 0.5,
          o = (0, it.C)(t.min, t.max, s);
        iS(t, e[i], e[n], o, e.scale);
      }
      let iM = ["x", "scaleX", "originX"],
        iR = ["y", "scaleY", "originY"];
      function ik(t, e) {
        iD(t.x, e, iM), iD(t.y, e, iR);
      }
      function iL(t, e) {
        return ix(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              n = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: n.y, right: n.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let ij = new WeakMap();
      class iF {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = ig()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          (i && !1 === i.isPresent) ||
            (this.panSession = new e3(
              t,
              {
                onSessionStart: (t) => {
                  this.stopAnimation(),
                    e && this.snapToCursor(tg(t, "page").point);
                },
                onStart: (t, e) => {
                  let {
                    drag: i,
                    dragPropagation: n,
                    onDragStart: r,
                  } = this.getProps();
                  if (
                    i &&
                    !n &&
                    (this.openGlobalLock && this.openGlobalLock(),
                    (this.openGlobalLock = tT(i)),
                    !this.openGlobalLock)
                  )
                    return;
                  (this.isDragging = !0),
                    (this.currentDirection = null),
                    this.resolveConstraints(),
                    this.visualElement.projection &&
                      ((this.visualElement.projection.isAnimationBlocked = !0),
                      (this.visualElement.projection.target = void 0)),
                    iy((t) => {
                      let e = this.getAxisMotionValue(t).get() || 0;
                      if ($.aQ.test(e)) {
                        let { projection: i } = this.visualElement;
                        if (i && i.layout) {
                          let n = i.layout.layoutBox[t];
                          if (n) {
                            let t = ie(n);
                            e = (parseFloat(e) / 100) * t;
                          }
                        }
                      }
                      this.originPoint[t] = e;
                    }),
                    r && td.Wi.update(() => r(t, e), !1, !0);
                  let { animationState: s } = this.visualElement;
                  s && s.setActive("whileDrag", !0);
                },
                onMove: (t, e) => {
                  let {
                    dragPropagation: i,
                    dragDirectionLock: n,
                    onDirectionLock: r,
                    onDrag: s,
                  } = this.getProps();
                  if (!i && !this.openGlobalLock) return;
                  let { offset: o } = e;
                  if (n && null === this.currentDirection) {
                    (this.currentDirection = (function (t, e = 10) {
                      let i = null;
                      return (
                        Math.abs(t.y) > e
                          ? (i = "y")
                          : Math.abs(t.x) > e && (i = "x"),
                        i
                      );
                    })(o)),
                      null !== this.currentDirection &&
                        r &&
                        r(this.currentDirection);
                    return;
                  }
                  this.updateAxis("x", e.point, o),
                    this.updateAxis("y", e.point, o),
                    this.visualElement.render(),
                    s && s(t, e);
                },
                onSessionEnd: (t, e) => this.stop(t, e),
              },
              { transformPagePoint: this.visualElement.getTransformPagePoint() }
            ));
        }
        stop(t, e) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: n } = e;
          this.startAnimation(n);
          let { onDragEnd: r } = this.getProps();
          r && td.Wi.update(() => r(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, i) {
          let { drag: n } = this.getProps();
          if (!i || !iB(t, n, this.currentDirection)) return;
          let r = this.getAxisMotionValue(t),
            s = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (s = (function (t, { min: e, max: i }, n) {
              return (
                void 0 !== e && t < e
                  ? (t = n ? (0, it.C)(e, t, n.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = n ? (0, it.C)(i, t, n.max) : Math.min(t, i)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            r.set(s);
        }
        resolveConstraints() {
          let { dragConstraints: t, dragElastic: e } = this.getProps(),
            { layout: i } = this.visualElement.projection || {},
            n = this.constraints;
          t && d(t)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : t && i
            ? (this.constraints = (function (
                t,
                { top: e, left: i, bottom: n, right: r }
              ) {
                return { x: iu(t.x, i, r), y: iu(t.y, e, n) };
              })(i.layoutBox, t))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: ic(t, "left", "right"), y: ic(t, "top", "bottom") }
              );
            })(e)),
            n !== this.constraints &&
              i &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              iy((t) => {
                this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(i.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !d(e)) return !1;
          let n = e.current;
          (0, tz.k)(
            null !== n,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          let s = (function (t, e, i) {
              let n = iL(t, i),
                { scroll: r } = e;
              return r && (iE(n.x, r.offset.x), iE(n.y, r.offset.y)), n;
            })(n, r.root, this.visualElement.getTransformPagePoint()),
            o = { x: ih((t = r.layout.layoutBox).x, s.x), y: ih(t.y, s.y) };
          if (i) {
            let t = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!t), t && (o = ix(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: n,
              dragTransition: r,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            iy((o) => {
              if (!iB(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: n ? 200 : 1e6,
                bounceDamping: n ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...r,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            })
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return i.start(eW(t, i, 0, e));
        }
        stopAnimation() {
          iy((t) => this.getAxisMotionValue(t).stop());
        }
        getAxisMotionValue(t) {
          let e = "_drag" + t.toUpperCase(),
            i = this.visualElement.getProps();
          return (
            i[e] ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          iy((e) => {
            let { drag: i } = this.getProps();
            if (!iB(e, i, this.currentDirection)) return;
            let { projection: n } = this.visualElement,
              r = this.getAxisMotionValue(e);
            if (n && n.layout) {
              let { min: i, max: s } = n.layout.layoutBox[e];
              r.set(t[e] - (0, it.C)(i, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!d(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let n = { x: 0, y: 0 };
          iy((t) => {
            let e = this.getAxisMotionValue(t);
            if (e) {
              let i = e.get();
              n[t] = (function (t, e) {
                let i = 0.5,
                  n = ie(t),
                  r = ie(e);
                return (
                  r > n
                    ? (i = (0, e7.Y)(e.min, e.max - n, t.min))
                    : n > r && (i = (0, e7.Y)(t.min, t.max - r, e.min)),
                  (0, ea.u)(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: r } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = r ? r({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            iy((e) => {
              if (!iB(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: r, max: s } = this.constraints[e];
              i.set((0, it.C)(r, s, n[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          ij.set(this.visualElement, this);
          let t = tx(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              d(t) && (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            n = i.addEventListener("measure", e);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
            e();
          let r = tf(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            s = i.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (iy((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            r(), t(), n(), s && s();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: n = !1,
              dragConstraints: r = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: n,
            dragConstraints: r,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function iB(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class iO extends tV {
        constructor(t) {
          super(t),
            (this.removeGroupControls = tR.Z),
            (this.removeListeners = tR.Z),
            (this.controls = new iF(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || tR.Z);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let i$ = (t) => (e, i) => {
        t && td.Wi.update(() => t(e, i));
      };
      class iW extends tV {
        constructor() {
          super(...arguments), (this.removePointerDownListener = tR.Z);
        }
        onPointerDown(t) {
          this.session = new e3(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: n,
          } = this.node.getProps();
          return {
            onSessionStart: i$(t),
            onStart: i$(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session, n && td.Wi.update(() => n(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = tx(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      let iI = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function iU(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let iN = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!$.px.test(t)) return t;
            t = parseFloat(t);
          }
          let i = iU(t, e.target.x),
            n = iU(t, e.target.y);
          return `${i}% ${n}%`;
        },
      };
      class iz extends o.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: n,
            } = this.props,
            { projection: r } = t;
          Object.assign(E, iZ),
            r &&
              (e.group && e.group.add(r),
              i && i.register && n && i.register(r),
              r.root.didUpdate(),
              r.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              r.setOptions({
                ...r.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (iI.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: n,
              isPresent: r,
            } = this.props,
            s = i.projection;
          return (
            s &&
              ((s.isPresent = r),
              n || t.layoutDependency !== e || void 0 === e
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent === r ||
                (r
                  ? s.promote()
                  : s.relegate() ||
                    td.Wi.postRender(() => {
                      let t = s.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            queueMicrotask(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: n } = t;
          n &&
            (n.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(n),
            i && i.deregister && i.deregister(n));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function iH(t) {
        let [e, i] = (function () {
            let t = (0, o.useContext)(u);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: i, register: n } = t,
              r = (0, o.useId)();
            return (
              (0, o.useEffect)(() => n(r), []),
              !e && i ? [!1, () => i && i(r)] : [!0]
            );
          })(),
          n = (0, o.useContext)(A);
        return o.createElement(iz, {
          ...t,
          layoutGroup: n,
          switchLayoutGroup: (0, o.useContext)(T),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let iZ = {
        borderRadius: {
          ...iN,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: iN,
        borderTopRightRadius: iN,
        borderBottomLeftRadius: iN,
        borderBottomRightRadius: iN,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: i }) => {
            let n = eV.P.parse(t);
            if (n.length > 5) return t;
            let r = eV.P.createTransformer(t),
              s = "number" != typeof n[0] ? 1 : 0,
              o = i.x.scale * e.x,
              a = i.y.scale * e.y;
            (n[0 + s] /= o), (n[1 + s] /= a);
            let l = (0, it.C)(o, a, 0.5);
            return (
              "number" == typeof n[2 + s] && (n[2 + s] /= l),
              "number" == typeof n[3 + s] && (n[3 + s] /= l),
              r(n)
            );
          },
        },
      };
      var iY = i(27026);
      let iX = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        iq = iX.length,
        iG = (t) => ("string" == typeof t ? parseFloat(t) : t),
        iK = (t) => "number" == typeof t || $.px.test(t);
      function i_(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let iJ = i0(0, 0.5, t6),
        iQ = i0(0.5, 0.95, tR.Z);
      function i0(t, e, i) {
        return (n) => (n < t ? 0 : n > e ? 1 : i((0, e7.Y)(t, e, n)));
      }
      function i1(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function i2(t, e) {
        i1(t.x, e.x), i1(t.y, e.y);
      }
      function i5(t, e, i, n, r) {
        return (
          (t -= e),
          (t = n + (1 / i) * (t - n)),
          void 0 !== r && (t = n + (1 / r) * (t - n)),
          t
        );
      }
      function i3(t, e, [i, n, r], s, o) {
        !(function (t, e = 0, i = 1, n = 0.5, r, s = t, o = t) {
          if (
            ($.aQ.test(e) &&
              ((e = parseFloat(e)),
              (e = (0, it.C)(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let a = (0, it.C)(s.min, s.max, n);
          t === s && (a -= e),
            (t.min = i5(t.min, e, i, a, r)),
            (t.max = i5(t.max, e, i, a, r));
        })(t, e[i], e[n], e[r], e.scale, s, o);
      }
      let i6 = ["x", "scaleX", "originX"],
        i9 = ["y", "scaleY", "originY"];
      function i4(t, e, i, n) {
        i3(t.x, e, i6, i ? i.x : void 0, n ? n.x : void 0),
          i3(t.y, e, i9, i ? i.y : void 0, n ? n.y : void 0);
      }
      function i8(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function i7(t) {
        return i8(t.x) && i8(t.y);
      }
      function nt(t, e) {
        return (
          Math.round(t.x.min) === Math.round(e.x.min) &&
          Math.round(t.x.max) === Math.round(e.x.max) &&
          Math.round(t.y.min) === Math.round(e.y.min) &&
          Math.round(t.y.max) === Math.round(e.y.max)
        );
      }
      function ne(t) {
        return ie(t.x) / ie(t.y);
      }
      var ni = i(77081);
      class nn {
        constructor() {
          this.members = [];
        }
        add(t) {
          (0, ni.y4)(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            ((0, ni.cl)(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: n } = t.options;
            !1 === n && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      function nr(t, e, i) {
        let n = "",
          r = t.x.translate / e.x,
          s = t.y.translate / e.y;
        if (
          ((r || s) && (n = `translate3d(${r}px, ${s}px, 0) `),
          (1 !== e.x || 1 !== e.y) && (n += `scale(${1 / e.x}, ${1 / e.y}) `),
          i)
        ) {
          let { rotate: t, rotateX: e, rotateY: r } = i;
          t && (n += `rotate(${t}deg) `),
            e && (n += `rotateX(${e}deg) `),
            r && (n += `rotateY(${r}deg) `);
        }
        let o = t.x.scale * e.x,
          a = t.y.scale * e.y;
        return (1 !== o || 1 !== a) && (n += `scale(${o}, ${a})`), n || "none";
      }
      let ns = (t, e) => t.depth - e.depth;
      class no {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          (0, ni.y4)(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          (0, ni.cl)(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(ns),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      let na = ["", "X", "Y", "Z"],
        nl = 0,
        nu = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        };
      function nh({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: n,
        resetTransform: r,
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            (this.id = nl++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (nu.totalNodes =
                  nu.resolvedTargetDeltas =
                  nu.recalculatedProjection =
                    0),
                  this.nodes.forEach(np),
                  this.nodes.forEach(nP),
                  this.nodes.forEach(nb),
                  this.nodes.forEach(nm),
                  window.MotionDebug && window.MotionDebug.record(nu);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new no());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) ||
                this.eventHandlers.set(t, new iY.L()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, i = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: n, layout: r, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (r || n) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let n = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = performance.now(),
                      n = ({ timestamp: r }) => {
                        let s = r - i;
                        s >= e && ((0, td.Pn)(n), t(s - e));
                      };
                    return td.Wi.read(n, !0), () => (0, td.Pn)(n);
                  })(n, 250)),
                  iI.hasAnimatedSinceResize &&
                    ((iI.hasAnimatedSinceResize = !1), this.nodes.forEach(nx));
              });
            }
            n && this.root.registerSharedNode(n, this),
              !1 !== this.options.animate &&
                s &&
                (n || r) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: i,
                    layout: n,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let r =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        nC,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = s.getProps(),
                      l = !this.targetLayout || !nt(this.targetLayout, n) || i,
                      u = !e && i;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = { ...e$(r, "layout"), onPlay: o, onComplete: a };
                      (s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || nx(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = n;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, td.Pn)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(nw),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let n = this.getTransformTemplate();
            (this.prevTransformTemplateValue = n
              ? n(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(nv);
              return;
            }
            this.isUpdating || this.nodes.forEach(ng),
              (this.isUpdating = !1),
              this.nodes.forEach(ny),
              this.nodes.forEach(nc),
              this.nodes.forEach(nd),
              this.clearAllSnapshots();
            let t = performance.now();
            (td.frameData.delta = (0, ea.u)(
              0,
              1e3 / 60,
              t - td.frameData.timestamp
            )),
              (td.frameData.timestamp = t),
              (td.frameData.isProcessing = !0),
              td.S6.update.process(td.frameData),
              td.S6.preRender.process(td.frameData),
              td.S6.render.process(td.frameData),
              (td.frameData.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0),
              queueMicrotask(() => this.update()));
          }
          clearAllSnapshots() {
            this.nodes.forEach(nf), this.sharedNodes.forEach(nA);
          }
          scheduleUpdateProjection() {
            td.Wi.preRender(this.updateProjection, !1, !0);
          }
          scheduleCheckAfterUnmount() {
            td.Wi.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = ig()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === t &&
              (e = !1),
              e &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase: t,
                  isRoot: n(this.instance),
                  offset: i(this.instance),
                });
          }
          resetTransform() {
            if (!r) return;
            let t = this.isLayoutDirty || this.shouldResetTransform,
              e = this.projectionDelta && !i7(this.projectionDelta),
              i = this.getTransformTemplate(),
              n = i ? i(this.latestValues, "") : void 0,
              s = n !== this.prevTransformTemplateValue;
            t &&
              (e || iw(this.latestValues) || s) &&
              (r(this.instance, n),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              n = this.removeElementScroll(i);
            return (
              t && (n = this.removeTransform(n)),
              nM((e = n).x),
              nM(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return ig();
            let e = t.measureViewportBox(),
              { scroll: i } = this.root;
            return i && (iE(e.x, i.offset.x), iE(e.y, i.offset.y)), e;
          }
          removeElementScroll(t) {
            let e = ig();
            i2(e, t);
            for (let i = 0; i < this.path.length; i++) {
              let n = this.path[i],
                { scroll: r, options: s } = n;
              if (n !== this.root && r && s.layoutScroll) {
                if (r.isRoot) {
                  i2(e, t);
                  let { scroll: i } = this.root;
                  i && (iE(e.x, -i.offset.x), iE(e.y, -i.offset.y));
                }
                iE(e.x, r.offset.x), iE(e.y, r.offset.y);
              }
            }
            return e;
          }
          applyTransform(t, e = !1) {
            let i = ig();
            i2(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t];
              !e &&
                n.options.layoutScroll &&
                n.scroll &&
                n !== n.root &&
                ik(i, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                iw(n.latestValues) && ik(i, n.latestValues);
            }
            return iw(this.latestValues) && ik(i, this.latestValues), i;
          }
          removeTransform(t) {
            let e = ig();
            i2(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !iw(i.latestValues)) continue;
              ib(i.latestValues) && i.updateSnapshot();
              let n = ig();
              i2(n, i.measurePageBox()),
                i4(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  n
                );
            }
            return iw(this.latestValues) && i4(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !==
                td.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, n, r;
            let s = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = s.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = s.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== s;
            if (
              !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = td.frameData.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = ig()),
                    (this.relativeTargetOrigin = ig()),
                    il(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    i2(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = ig()), (this.targetWithTransforms = ig())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (n = this.relativeTarget),
                      (r = this.relativeParent.target),
                      io(i.x, n.x, r.x),
                      io(i.y, n.y, r.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : i2(this.target, this.layout.layoutBox),
                      iV(this.target, this.targetDelta))
                    : i2(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = ig()),
                      (this.relativeTargetOrigin = ig()),
                      il(this.relativeTargetOrigin, this.target, t.target),
                      i2(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                nu.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              ib(this.parent.latestValues) ||
              iA(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              i = !!this.resumingFrom || this !== e,
              n = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (n = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (n = !1),
              this.resolvedRelativeTargetAt === td.frameData.timestamp &&
                (n = !1),
              n)
            )
              return;
            let { layout: r, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(r || s))
            )
              return;
            i2(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            !(function (t, e, i, n = !1) {
              let r, s;
              let o = i.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  s = (r = i[a]).projectionDelta;
                  let o = r.instance;
                  (!o || !o.style || "contents" !== o.style.display) &&
                    (n &&
                      r.options.layoutScroll &&
                      r.scroll &&
                      r !== r.root &&
                      ik(t, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
                    s && ((e.x *= s.x.scale), (e.y *= s.y.scale), iV(t, s)),
                    n && iw(r.latestValues) && ik(t, r.latestValues));
                }
                (e.x = iC(e.x)), (e.y = iC(e.y));
              }
            })(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                (e.target = e.layout.layoutBox);
            let { target: l } = e;
            if (!l) {
              this.projectionTransform &&
                ((this.projectionDelta = im()),
                (this.projectionTransform = "none"),
                this.scheduleRender());
              return;
            }
            this.projectionDelta ||
              ((this.projectionDelta = im()),
              (this.projectionDeltaWithTransform = im()));
            let u = this.projectionTransform;
            is(
              this.projectionDelta,
              this.layoutCorrected,
              l,
              this.latestValues
            ),
              (this.projectionTransform = nr(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform !== u ||
                this.treeScale.x !== o ||
                this.treeScale.y !== a) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              nu.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            if (
              (this.options.scheduleRender && this.options.scheduleRender(), t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let n = this.snapshot,
              r = n ? n.latestValues : {},
              s = { ...this.latestValues },
              o = im();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = ig(),
              l =
                (n ? n.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              h = !u || u.members.length <= 1,
              c = !!(
                l &&
                !h &&
                !0 === this.options.crossfade &&
                !this.path.some(nV)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let n = e / 1e3;
                if (
                  (nT(o.x, t.x, n),
                  nT(o.y, t.y, n),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, d, p, m;
                  il(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (p = this.relativeTarget),
                    (m = this.relativeTargetOrigin),
                    nS(p.x, m.x, a.x, n),
                    nS(p.y, m.y, a.y, n),
                    i &&
                      ((u = this.relativeTarget),
                      (d = i),
                      u.x.min === d.x.min &&
                        u.x.max === d.x.max &&
                        u.y.min === d.y.min &&
                        u.y.max === d.y.max) &&
                      (this.isProjectionDirty = !1),
                    i || (i = ig()),
                    i2(i, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = s),
                  (function (t, e, i, n, r, s) {
                    r
                      ? ((t.opacity = (0, it.C)(
                          0,
                          void 0 !== i.opacity ? i.opacity : 1,
                          iJ(n)
                        )),
                        (t.opacityExit = (0, it.C)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          iQ(n)
                        )))
                      : s &&
                        (t.opacity = (0, it.C)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== i.opacity ? i.opacity : 1,
                          n
                        ));
                    for (let r = 0; r < iq; r++) {
                      let s = `border${iX[r]}Radius`,
                        o = i_(e, s),
                        a = i_(i, s);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || iK(o) === iK(a)
                          ? ((t[s] = Math.max((0, it.C)(iG(o), iG(a), n), 0)),
                            ($.aQ.test(a) || $.aQ.test(o)) && (t[s] += "%"))
                          : (t[s] = a));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = (0, it.C)(e.rotate || 0, i.rotate || 0, n));
                  })(s, r, this.latestValues, n, c, h)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = n);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, td.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = td.Wi.update(() => {
                (iI.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, i) {
                    let n = k(t) ? t : (0, eN.BX)(t);
                    return n.start(eW("", n, 1e3, i)), n.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: n,
                latestValues: r,
              } = t;
            if (e && i && n) {
              if (
                this !== t &&
                this.layout &&
                n &&
                nR(
                  this.options.animationType,
                  this.layout.layoutBox,
                  n.layoutBox
                )
              ) {
                i = this.target || ig();
                let e = ie(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let n = ie(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + n);
              }
              i2(e, i),
                ik(e, r),
                is(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  r
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new nn()),
              this.sharedNodes.get(t).add(e);
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let n = this.getStack();
            n && n.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.rotate || i.rotateX || i.rotateY || i.rotateZ) && (e = !0),
              !e)
            )
              return;
            let n = {};
            for (let e = 0; e < na.length; e++) {
              let r = "rotate" + na[e];
              i[r] && ((n[r] = i[r]), t.setStaticValue(r, 0));
            }
            for (let e in (t.render(), n)) t.setStaticValue(e, n[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t = {}) {
            var e, i;
            let n = {};
            if (!this.instance || this.isSVG) return n;
            if (!this.isVisible) return { visibility: "hidden" };
            n.visibility = "";
            let r = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (n.opacity = ""),
                (n.pointerEvents = th(t.pointerEvents) || ""),
                (n.transform = r ? r(this.latestValues, "") : "none"),
                n
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents = th(t.pointerEvents) || "")),
                this.hasProjected &&
                  !iw(this.latestValues) &&
                  ((e.transform = r ? r({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (n.transform = nr(
                this.projectionDeltaWithTransform,
                this.treeScale,
                o
              )),
              r && (n.transform = r(o, n.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((n.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            s.animationValues
              ? (n.opacity =
                  s === this
                    ? null !==
                        (i =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (n.opacity =
                  s === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            E)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: i } = E[t],
                r = "none" === n.transform ? o[t] : e(o[t], s);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) n[i[e]] = r;
              } else n[t] = r;
            }
            return (
              this.options.layoutId &&
                (n.pointerEvents =
                  s === this ? th(t.pointerEvents) || "" : "none"),
              n
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(nv),
              this.root.sharedNodes.clear();
          }
        };
      }
      function nc(t) {
        t.updateLayout();
      }
      function nd(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: n } = t.layout,
            { animationType: r } = t.options,
            s = i.source !== t.layout.source;
          "size" === r
            ? iy((t) => {
                let n = s ? i.measuredBox[t] : i.layoutBox[t],
                  r = ie(n);
                (n.min = e[t].min), (n.max = n.min + r);
              })
            : nR(r, i.layoutBox, e) &&
              iy((n) => {
                let r = s ? i.measuredBox[n] : i.layoutBox[n],
                  o = ie(e[n]);
                (r.max = r.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[n].max = t.relativeTarget[n].min + o));
              });
          let o = im();
          is(o, e, i.layoutBox);
          let a = im();
          s
            ? is(a, t.applyTransform(n, !0), i.measuredBox)
            : is(a, e, i.layoutBox);
          let l = !i7(o),
            u = !1;
          if (!t.resumeFrom) {
            let n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: r, layout: s } = n;
              if (r && s) {
                let o = ig();
                il(o, i.layoutBox, r.layoutBox);
                let a = ig();
                il(a, e, s.layoutBox),
                  nt(o, a) || (u = !0),
                  n.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = n));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function np(t) {
        nu.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function nm(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function nf(t) {
        t.clearSnapshot();
      }
      function nv(t) {
        t.clearMeasurements();
      }
      function ng(t) {
        t.isLayoutDirty = !1;
      }
      function ny(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function nx(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function nP(t) {
        t.resolveTargetDelta();
      }
      function nb(t) {
        t.calcProjection();
      }
      function nw(t) {
        t.resetRotation();
      }
      function nA(t) {
        t.removeLeadSnapshot();
      }
      function nT(t, e, i) {
        (t.translate = (0, it.C)(e.translate, 0, i)),
          (t.scale = (0, it.C)(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function nS(t, e, i, n) {
        (t.min = (0, it.C)(e.min, i.min, n)),
          (t.max = (0, it.C)(e.max, i.max, n));
      }
      function nV(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let nC = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        nE = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent.toLowerCase().includes(t),
        nD = nE("applewebkit/") && !nE("chrome/") ? Math.round : tR.Z;
      function nM(t) {
        (t.min = nD(t.min)), (t.max = nD(t.max));
      }
      function nR(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !ii(ne(e), ne(i), 0.2))
        );
      }
      let nk = nh({
          attachResizeListener: (t, e) => tf(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        nL = { current: void 0 },
        nj = nh({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!nL.current) {
              let t = new nk({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (nL.current = t);
            }
            return nL.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        }),
        nF = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function nB(t, e, i = 1) {
        (0, tz.k)(
          i <= 4,
          `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`
        );
        let [n, r] = (function (t) {
          let e = nF.exec(t);
          if (!e) return [,];
          let [, i, n] = e;
          return [i, n];
        })(t);
        if (!n) return;
        let s = window.getComputedStyle(e).getPropertyValue(n);
        if (s) {
          let t = s.trim();
          return eU(t) ? parseFloat(t) : t;
        }
        return (0, F.tm)(r) ? nB(r, e, i + 1) : r;
      }
      let nO = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        n$ = (t) => nO.has(t),
        nW = (t) => Object.keys(t).some(n$),
        nI = (t) => t === O.Rx || t === $.px,
        nU = (t, e) => parseFloat(t.split(", ")[e]),
        nN =
          (t, e) =>
          (i, { transform: n }) => {
            if ("none" === n || !n) return 0;
            let r = n.match(/^matrix3d\((.+)\)$/);
            if (r) return nU(r[1], e);
            {
              let e = n.match(/^matrix\((.+)\)$/);
              return e ? nU(e[1], t) : 0;
            }
          },
        nz = new Set(["x", "y", "z"]),
        nH = D.filter((t) => !nz.has(t)),
        nZ = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: nN(4, 13),
          y: nN(5, 14),
        };
      (nZ.translateX = nZ.x), (nZ.translateY = nZ.y);
      let nY = (t, e, i) => {
          let n = e.measureViewportBox(),
            r = e.current,
            s = getComputedStyle(r),
            { display: o } = s,
            a = {};
          "none" === o && e.setStaticValue("display", t.display || "block"),
            i.forEach((t) => {
              a[t] = nZ[t](n, s);
            }),
            e.render();
          let l = e.measureViewportBox();
          return (
            i.forEach((i) => {
              let n = e.getValue(i);
              n && n.jump(a[i]), (t[i] = nZ[i](l, s));
            }),
            t
          );
        },
        nX = (t, e, i = {}, n = {}) => {
          (e = { ...e }), (n = { ...n });
          let r = Object.keys(e).filter(n$),
            s = [],
            o = !1,
            a = [];
          if (
            (r.forEach((r) => {
              let l;
              let u = t.getValue(r);
              if (!t.hasValue(r)) return;
              let h = i[r],
                c = eZ(h),
                d = e[r];
              if (ta(d)) {
                let t = d.length,
                  e = null === d[0] ? 1 : 0;
                c = eZ((h = d[e]));
                for (let i = e; i < t && null !== d[i]; i++)
                  l
                    ? (0, tz.k)(
                        eZ(d[i]) === l,
                        "All keyframes must be of the same type"
                      )
                    : ((l = eZ(d[i])),
                      (0, tz.k)(
                        l === c || (nI(c) && nI(l)),
                        "Keyframes must be of the same dimension as the current value"
                      ));
              } else l = eZ(d);
              if (c !== l) {
                if (nI(c) && nI(l)) {
                  let t = u.get();
                  "string" == typeof t && u.set(parseFloat(t)),
                    "string" == typeof d
                      ? (e[r] = parseFloat(d))
                      : Array.isArray(d) &&
                        l === $.px &&
                        (e[r] = d.map(parseFloat));
                } else
                  (null == c ? void 0 : c.transform) &&
                  (null == l ? void 0 : l.transform) &&
                  (0 === h || 0 === d)
                    ? 0 === h
                      ? u.set(l.transform(h))
                      : (e[r] = c.transform(d))
                    : (o ||
                        ((s = (function (t) {
                          let e = [];
                          return (
                            nH.forEach((i) => {
                              let n = t.getValue(i);
                              void 0 !== n &&
                                (e.push([i, n.get()]),
                                n.set(i.startsWith("scale") ? 1 : 0));
                            }),
                            e.length && t.render(),
                            e
                          );
                        })(t)),
                        (o = !0)),
                      a.push(r),
                      (n[r] = void 0 !== n[r] ? n[r] : e[r]),
                      u.jump(d));
              }
            }),
            !a.length)
          )
            return { target: e, transitionEnd: n };
          {
            let i = a.indexOf("height") >= 0 ? window.pageYOffset : null,
              r = nY(e, t, a);
            return (
              s.length &&
                s.forEach(([e, i]) => {
                  t.getValue(e).set(i);
                }),
              t.render(),
              w.j && null !== i && window.scrollTo({ top: i }),
              { target: r, transitionEnd: n }
            );
          }
        },
        nq = (t, e, i, n) => {
          var r, s;
          let o = (function (t, { ...e }, i) {
            let n = t.current;
            if (!(n instanceof Element)) return { target: e, transitionEnd: i };
            for (let r in (i && (i = { ...i }),
            t.values.forEach((t) => {
              let e = t.get();
              if (!(0, F.tm)(e)) return;
              let i = nB(e, n);
              i && t.set(i);
            }),
            e)) {
              let t = e[r];
              if (!(0, F.tm)(t)) continue;
              let s = nB(t, n);
              s && ((e[r] = s), i || (i = {}), void 0 === i[r] && (i[r] = t));
            }
            return { target: e, transitionEnd: i };
          })(t, e, n);
          return (
            (e = o.target),
            (n = o.transitionEnd),
            (r = e),
            (s = n),
            nW(r) ? nX(t, r, i, s) : { target: r, transitionEnd: s }
          );
        },
        nG = { current: null },
        nK = { current: !1 },
        n_ = new WeakMap(),
        nJ = Object.keys(b),
        nQ = nJ.length,
        n0 = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        n1 = v.length;
      class n2 {
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: n,
            visualState: r,
          },
          s = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.scheduleRender = () => td.Wi.render(this.render, !1, !0));
          let { latestValues: o, renderState: a } = r;
          (this.latestValues = o),
            (this.baseTarget = { ...o }),
            (this.initialValues = e.initial ? { ...o } : {}),
            (this.renderState = a),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = s),
            (this.isControllingVariants = g(e)),
            (this.isVariantNode = y(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: l, ...u } = this.scrapeMotionValuesFromProps(e, {});
          for (let t in u) {
            let e = u[t];
            void 0 !== o[t] && k(e) && (e.set(o[t], !1), eI(l) && l.add(t));
          }
        }
        scrapeMotionValuesFromProps(t, e) {
          return {};
        }
        mount(t) {
          (this.current = t),
            n_.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            nK.current ||
              (function () {
                if (((nK.current = !0), w.j)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (nG.current = t.matches);
                    t.addListener(e), e();
                  } else nG.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || nG.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (n_.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, td.Pn)(this.notifyUpdate),
          (0, td.Pn)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) this.features[t].unmount();
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i = M.has(t),
            n = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && td.Wi.update(this.notifyUpdate, !1, !0),
                i && this.projection && (this.projection.isTransformDirty = !0);
            }),
            r = e.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(t, () => {
            n(), r();
          });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        loadFeatures({ children: t, ...e }, i, n, r) {
          let s, o;
          for (let t = 0; t < nQ; t++) {
            let i = nJ[t],
              {
                isEnabled: n,
                Feature: r,
                ProjectionNode: a,
                MeasureLayout: l,
              } = b[i];
            a && (s = a),
              n(e) &&
                (!this.features[i] && r && (this.features[i] = new r(this)),
                l && (o = l));
          }
          if (!this.projection && s) {
            this.projection = new s(
              this.latestValues,
              this.parent && this.parent.projection
            );
            let {
              layoutId: t,
              layout: i,
              drag: n,
              dragConstraints: o,
              layoutScroll: a,
              layoutRoot: l,
            } = e;
            this.projection.setOptions({
              layoutId: t,
              layout: i,
              alwaysMeasureLayout: !!n || (o && d(o)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof i ? i : "both",
              initialPromotionConfig: r,
              layoutScroll: a,
              layoutRoot: l,
            });
          }
          return o;
        }
        updateFeatures() {
          for (let t in this.features) {
            let e = this.features[t];
            e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
          }
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props
          );
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : ig();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        makeTargetAnimatable(t, e = !0) {
          return this.makeTargetAnimatableFromInstance(t, this.props, e);
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < n0.length; e++) {
            let i = n0[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let n = t["on" + i];
            n && (this.propEventSubscriptions[i] = this.on(i, n));
          }
          (this.prevMotionValues = (function (t, e, i) {
            let { willChange: n } = e;
            for (let r in e) {
              let s = e[r],
                o = i[r];
              if (k(s)) t.addValue(r, s), eI(n) && n.add(r);
              else if (k(o))
                t.addValue(r, (0, eN.BX)(s, { owner: t })),
                  eI(n) && n.remove(r);
              else if (o !== s) {
                if (t.hasValue(r)) {
                  let e = t.getValue(r);
                  e.hasAnimated || e.set(s);
                } else {
                  let e = t.getStaticValue(r);
                  t.addValue(r, (0, eN.BX)(void 0 !== e ? e : s, { owner: t }));
                }
              }
            }
            for (let n in i) void 0 === e[n] && t.removeValue(n);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        getVariantContext(t = !1) {
          if (t) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let t = (this.parent && this.parent.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (t.initial = this.props.initial),
              t
            );
          }
          let e = {};
          for (let t = 0; t < n1; t++) {
            let i = v[t],
              n = this.props[i];
            (p(n) || !1 === n) && (e[i] = n);
          }
          return e;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          e !== this.values.get(t) &&
            (this.removeValue(t), this.bindToMotionValue(t, e)),
            this.values.set(t, e),
            (this.latestValues[t] = e.get());
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = (0, eN.BX)(e, { owner: this })), this.addValue(t, i)),
            i
          );
        }
        readValue(t) {
          var e;
          return void 0 === this.latestValues[t] && this.current
            ? null !== (e = this.getBaseTargetFromProps(this.props, t)) &&
              void 0 !== e
              ? e
              : this.readValueFromInstance(this.current, t, this.options)
            : this.latestValues[t];
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let { initial: i } = this.props,
            n =
              "string" == typeof i || "object" == typeof i
                ? null === (e = ts(this.props, i)) || void 0 === e
                  ? void 0
                  : e[t]
                : void 0;
          if (i && void 0 !== n) return n;
          let r = this.getBaseTargetFromProps(this.props, t);
          return void 0 === r || k(r)
            ? void 0 !== this.initialValues[t] && void 0 === n
              ? void 0
              : this.baseTarget[t]
            : r;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new iY.L()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class n5 extends n2 {
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
        makeTargetAnimatableFromInstance(
          { transition: t, transitionEnd: e, ...i },
          { transformValues: n },
          r
        ) {
          let s = (function (t, e, i) {
            let n = {};
            for (let r in t) {
              let t = (function (t, e) {
                if (e) return (e[t] || e.default || e).from;
              })(r, e);
              if (void 0 !== t) n[r] = t;
              else {
                let t = i.getValue(r);
                t && (n[r] = t.get());
              }
            }
            return n;
          })(i, t || {}, this);
          if ((n && (e && (e = n(e)), i && (i = n(i)), s && (s = n(s))), r)) {
            !(function (t, e, i) {
              var n, r;
              let s = Object.keys(e).filter((e) => !t.hasValue(e)),
                o = s.length;
              if (o)
                for (let a = 0; a < o; a++) {
                  let o = s[a],
                    l = e[o],
                    u = null;
                  Array.isArray(l) && (u = l[0]),
                    null === u &&
                      (u =
                        null !==
                          (r =
                            null !== (n = i[o]) && void 0 !== n
                              ? n
                              : t.readValue(o)) && void 0 !== r
                          ? r
                          : e[o]),
                    null != u &&
                      ("string" == typeof u && (eU(u) || eO(u))
                        ? (u = parseFloat(u))
                        : !eX(u) && eV.P.test(l) && (u = eB(o, l)),
                      t.addValue(o, (0, eN.BX)(u, { owner: t })),
                      void 0 === i[o] && (i[o] = u),
                      null !== u && t.setBaseTarget(o, u));
                }
            })(this, i, s);
            let t = nq(this, i, s, e);
            (e = t.transitionEnd), (i = t.target);
          }
          return { transition: t, transitionEnd: e, ...i };
        }
      }
      class n3 extends n5 {
        readValueFromInstance(t, e) {
          if (M.has(e)) {
            let t = eF(e);
            return (t && t.default) || 0;
          }
          {
            let i = window.getComputedStyle(t),
              n = ((0, F.f9)(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return iL(t, e);
        }
        build(t, e, i, n) {
          U(t, e, i, n.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e) {
          return tn(t, e);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          k(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
        renderInstance(t, e, i, n) {
          tt(t, e, i, n);
        }
      }
      class n6 extends n5 {
        constructor() {
          super(...arguments), (this.isSVGTag = !1);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (M.has(e)) {
            let t = eF(e);
            return (t && t.default) || 0;
          }
          return (e = te.has(e) ? e : Q(e)), t.getAttribute(e);
        }
        measureInstanceViewportBox() {
          return ig();
        }
        scrapeMotionValuesFromProps(t, e) {
          return tr(t, e);
        }
        build(t, e, i, n) {
          K(t, e, i, this.isSVGTag, n.transformTemplate);
        }
        renderInstance(t, e, i, n) {
          ti(t, e, i, n);
        }
        mount(t) {
          (this.isSVGTag = J(t.tagName)), super.mount(t);
        }
      }
      let n9 = (t, e) =>
          C(t)
            ? new n6(e, { enableHardwareAcceleration: !1 })
            : new n3(e, { enableHardwareAcceleration: !0 }),
        n4 = {
          animation: { Feature: e0 },
          exit: { Feature: e2 },
          inView: { Feature: tW },
          tap: { Feature: tL },
          focus: { Feature: tD },
          hover: { Feature: tE },
          pan: { Feature: iW },
          drag: { Feature: iO, ProjectionNode: nj, MeasureLayout: iH },
          layout: { ProjectionNode: nj, MeasureLayout: iH },
        },
        n8 = (function (t) {
          function e(e, i = {}) {
            return (function ({
              preloadedFeatures: t,
              createVisualElement: e,
              useRender: i,
              useVisualState: n,
              Component: r,
            }) {
              t &&
                (function (t) {
                  for (let e in t) b[e] = { ...b[e], ...t[e] };
                })(t);
              let s = (0, o.forwardRef)(function (s, m) {
                var f;
                let v;
                let y = {
                    ...(0, o.useContext)(a._),
                    ...s,
                    layoutId: (function ({ layoutId: t }) {
                      let e = (0, o.useContext)(A).id;
                      return e && void 0 !== t ? e + "-" + t : t;
                    })(s),
                  },
                  { isStatic: P } = y,
                  b = (function (t) {
                    let { initial: e, animate: i } = (function (t, e) {
                      if (g(t)) {
                        let { initial: e, animate: i } = t;
                        return {
                          initial: !1 === e || p(e) ? e : void 0,
                          animate: p(i) ? i : void 0,
                        };
                      }
                      return !1 !== t.inherit ? e : {};
                    })(t, (0, o.useContext)(l));
                    return (0, o.useMemo)(
                      () => ({ initial: e, animate: i }),
                      [x(e), x(i)]
                    );
                  })(s),
                  S = n(s, P);
                if (!P && w.j) {
                  b.visualElement = (function (t, e, i, n) {
                    let { visualElement: r } = (0, o.useContext)(l),
                      s = (0, o.useContext)(c),
                      d = (0, o.useContext)(u),
                      p = (0, o.useContext)(a._).reducedMotion,
                      m = (0, o.useRef)();
                    (n = n || s.renderer),
                      !m.current &&
                        n &&
                        (m.current = n(t, {
                          visualState: e,
                          parent: r,
                          props: i,
                          presenceContext: d,
                          blockInitialAnimation: !!d && !1 === d.initial,
                          reducedMotionConfig: p,
                        }));
                    let f = m.current;
                    (0, o.useInsertionEffect)(() => {
                      f && f.update(i, d);
                    });
                    let v = (0, o.useRef)(!!window.HandoffAppearAnimations);
                    return (
                      (0, h.L)(() => {
                        f &&
                          (f.render(),
                          v.current &&
                            f.animationState &&
                            f.animationState.animateChanges());
                      }),
                      (0, o.useEffect)(() => {
                        f &&
                          (f.updateFeatures(),
                          !v.current &&
                            f.animationState &&
                            f.animationState.animateChanges(),
                          (window.HandoffAppearAnimations = void 0),
                          (v.current = !1));
                      }),
                      f
                    );
                  })(r, S, y, e);
                  let i = (0, o.useContext)(T),
                    n = (0, o.useContext)(c).strict;
                  b.visualElement &&
                    (v = b.visualElement.loadFeatures(y, n, t, i));
                }
                return o.createElement(
                  l.Provider,
                  { value: b },
                  v && b.visualElement
                    ? o.createElement(v, {
                        visualElement: b.visualElement,
                        ...y,
                      })
                    : null,
                  i(
                    r,
                    s,
                    ((f = b.visualElement),
                    (0, o.useCallback)(
                      (t) => {
                        t && S.mount && S.mount(t),
                          f && (t ? f.mount(t) : f.unmount()),
                          m &&
                            ("function" == typeof m
                              ? m(t)
                              : d(m) && (m.current = t));
                      },
                      [f]
                    )),
                    S,
                    P,
                    b.visualElement
                  )
                );
              });
              return (s[S] = r), s;
            })(t(e, i));
          }
          if ("undefined" == typeof Proxy) return e;
          let i = new Map();
          return new Proxy(e, {
            get: (t, n) => (i.has(n) || i.set(n, e(n)), i.get(n)),
          });
        })((t, e) =>
          (function (t, { forwardMotionProps: e = !1 }, i, n) {
            return {
              ...(C(t) ? tp : tm),
              preloadedFeatures: i,
              useRender: (function (t = !1) {
                return (e, i, n, { latestValues: r }, s) => {
                  let a = (
                      C(e)
                        ? function (t, e, i, n) {
                            let r = (0, o.useMemo)(() => {
                              let i = _();
                              return (
                                K(
                                  i,
                                  e,
                                  { enableHardwareAcceleration: !1 },
                                  J(n),
                                  t.transformTemplate
                                ),
                                { ...i.attrs, style: { ...i.style } }
                              );
                            }, [e]);
                            if (t.style) {
                              let e = {};
                              z(e, t.style, t),
                                (r.style = { ...e, ...r.style });
                            }
                            return r;
                          }
                        : function (t, e, i) {
                            let n = {},
                              r = (function (t, e, i) {
                                let n = t.style || {},
                                  r = {};
                                return (
                                  z(r, n, t),
                                  Object.assign(
                                    r,
                                    (function ({ transformTemplate: t }, e, i) {
                                      return (0, o.useMemo)(() => {
                                        let n = N();
                                        return (
                                          U(
                                            n,
                                            e,
                                            { enableHardwareAcceleration: !i },
                                            t
                                          ),
                                          Object.assign({}, n.vars, n.style)
                                        );
                                      }, [e]);
                                    })(t, e, i)
                                  ),
                                  t.transformValues ? t.transformValues(r) : r
                                );
                              })(t, e, i);
                            return (
                              t.drag &&
                                !1 !== t.dragListener &&
                                ((n.draggable = !1),
                                (r.userSelect =
                                  r.WebkitUserSelect =
                                  r.WebkitTouchCallout =
                                    "none"),
                                (r.touchAction =
                                  !0 === t.drag
                                    ? "none"
                                    : `pan-${"x" === t.drag ? "y" : "x"}`)),
                              void 0 === t.tabIndex &&
                                (t.onTap || t.onTapStart || t.whileTap) &&
                                (n.tabIndex = 0),
                              (n.style = r),
                              n
                            );
                          }
                    )(i, r, s, e),
                    l = {
                      ...(function (t, e, i) {
                        let n = {};
                        for (let r in t)
                          ("values" !== r || "object" != typeof t.values) &&
                            (Y(r) ||
                              (!0 === i && Z(r)) ||
                              (!e && !Z(r)) ||
                              (t.draggable && r.startsWith("onDrag"))) &&
                            (n[r] = t[r]);
                        return n;
                      })(i, "string" == typeof e, t),
                      ...a,
                      ref: n,
                    },
                    { children: u } = i,
                    h = (0, o.useMemo)(() => (k(u) ? u.get() : u), [u]);
                  return (0, o.createElement)(e, { ...l, children: h });
                };
              })(e),
              createVisualElement: n,
              Component: t,
            };
          })(t, e, n4, n9)
        );
    },
    80417: function (t, e, i) {
      "use strict";
      i.d(e, {
        Xp: function () {
          return o;
        },
        f9: function () {
          return r;
        },
        tm: function () {
          return s;
        },
      });
      let n = (t) => (e) => "string" == typeof e && e.startsWith(t),
        r = n("--"),
        s = n("var(--"),
        o =
          /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g;
    },
    77081: function (t, e, i) {
      "use strict";
      function n(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function r(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      i.d(e, {
        cl: function () {
          return r;
        },
        y4: function () {
          return n;
        },
      });
    },
    43021: function (t, e, i) {
      "use strict";
      i.d(e, {
        u: function () {
          return n;
        },
      });
      let n = (t, e, i) => Math.min(Math.max(i, t), e);
    },
    46567: function (t, e, i) {
      "use strict";
      i.d(e, {
        K: function () {
          return r;
        },
        k: function () {
          return s;
        },
      });
      var n = i(26977);
      let r = n.Z,
        s = n.Z;
    },
    3245: function (t, e, i) {
      "use strict";
      i.d(e, {
        s: function () {
          return V;
        },
      });
      var n = i(46567),
        r = i(2199),
        s = i(43021),
        o = i(40007);
      function a(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      var l = i(93257),
        u = i(72808),
        h = i(26002);
      let c = (t, e, i) => {
          let n = t * t;
          return Math.sqrt(Math.max(0, i * (e * e - n) + n));
        },
        d = [l.$, u.m, h.J],
        p = (t) => d.find((e) => e.test(t));
      function m(t) {
        let e = p(t);
        (0, n.k)(
          !!e,
          `'${t}' is not an animatable color. Use the equivalent color code instead.`
        );
        let i = e.parse(t);
        return (
          e === h.J &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: n }) {
              (t /= 360), (i /= 100);
              let r = 0,
                s = 0,
                o = 0;
              if ((e /= 100)) {
                let n = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  l = 2 * i - n;
                (r = a(l, n, t + 1 / 3)),
                  (s = a(l, n, t)),
                  (o = a(l, n, t - 1 / 3));
              } else r = s = o = i;
              return {
                red: Math.round(255 * r),
                green: Math.round(255 * s),
                blue: Math.round(255 * o),
                alpha: n,
              };
            })(i)),
          i
        );
      }
      let f = (t, e) => {
        let i = m(t),
          n = m(e),
          r = { ...i };
        return (t) => (
          (r.red = c(i.red, n.red, t)),
          (r.green = c(i.green, n.green, t)),
          (r.blue = c(i.blue, n.blue, t)),
          (r.alpha = (0, o.C)(i.alpha, n.alpha, t)),
          u.m.transform(r)
        );
      };
      var v = i(44694),
        g = i(89155);
      let y = (t, e) => (i) => `${i > 0 ? e : t}`;
      function x(t, e) {
        return "number" == typeof t
          ? (i) => (0, o.C)(t, e, i)
          : r.$.test(t)
          ? f(t, e)
          : t.startsWith("var(")
          ? y(t, e)
          : w(t, e);
      }
      let P = (t, e) => {
          let i = [...t],
            n = i.length,
            r = t.map((t, i) => x(t, e[i]));
          return (t) => {
            for (let e = 0; e < n; e++) i[e] = r[e](t);
            return i;
          };
        },
        b = (t, e) => {
          let i = { ...t, ...e },
            n = {};
          for (let r in i)
            void 0 !== t[r] && void 0 !== e[r] && (n[r] = x(t[r], e[r]));
          return (t) => {
            for (let e in n) i[e] = n[e](t);
            return i;
          };
        },
        w = (t, e) => {
          let i = g.P.createTransformer(e),
            r = (0, g.V)(t),
            s = (0, g.V)(e);
          return r.numVars === s.numVars &&
            r.numColors === s.numColors &&
            r.numNumbers >= s.numNumbers
            ? (0, v.z)(P(r.values, s.values), i)
            : ((0, n.K)(
                !0,
                `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
              ),
              y(t, e));
        };
      var A = i(42868),
        T = i(26977);
      let S = (t, e) => (i) => (0, o.C)(t, e, i);
      function V(t, e, { clamp: i = !0, ease: o, mixer: a } = {}) {
        let l = t.length;
        if (
          ((0, n.k)(
            l === e.length,
            "Both input and output ranges must be the same length"
          ),
          1 === l)
        )
          return () => e[0];
        t[0] > t[l - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
        let u = (function (t, e, i) {
            let n = [],
              s =
                i ||
                (function (t) {
                  if ("number" == typeof t);
                  else if ("string" == typeof t) return r.$.test(t) ? f : w;
                  else if (Array.isArray(t)) return P;
                  else if ("object" == typeof t) return b;
                  return S;
                })(t[0]),
              o = t.length - 1;
            for (let i = 0; i < o; i++) {
              let r = s(t[i], t[i + 1]);
              if (e) {
                let t = Array.isArray(e) ? e[i] || T.Z : e;
                r = (0, v.z)(t, r);
              }
              n.push(r);
            }
            return n;
          })(e, o, a),
          h = u.length,
          c = (e) => {
            let i = 0;
            if (h > 1) for (; i < t.length - 2 && !(e < t[i + 1]); i++);
            let n = (0, A.Y)(t[i], t[i + 1], e);
            return u[i](n);
          };
        return i ? (e) => c((0, s.u)(t[0], t[l - 1], e)) : c;
      }
    },
    16613: function (t, e, i) {
      "use strict";
      i.d(e, {
        j: function () {
          return n;
        },
      });
      let n = "undefined" != typeof document;
    },
    40007: function (t, e, i) {
      "use strict";
      i.d(e, {
        C: function () {
          return n;
        },
      });
      let n = (t, e, i) => -i * t + i * e + t;
    },
    26977: function (t, e, i) {
      "use strict";
      i.d(e, {
        Z: function () {
          return n;
        },
      });
      let n = (t) => t;
    },
    34269: function (t, e, i) {
      "use strict";
      i.d(e, {
        Y: function () {
          return s;
        },
      });
      var n = i(40007),
        r = i(42868);
      function s(t) {
        let e = [0];
        return (
          !(function (t, e) {
            let i = t[t.length - 1];
            for (let s = 1; s <= e; s++) {
              let o = (0, r.Y)(0, e, s);
              t.push((0, n.C)(i, 1, o));
            }
          })(e, t.length - 1),
          e
        );
      }
    },
    44694: function (t, e, i) {
      "use strict";
      i.d(e, {
        z: function () {
          return r;
        },
      });
      let n = (t, e) => (i) => e(t(i)),
        r = (...t) => t.reduce(n);
    },
    42868: function (t, e, i) {
      "use strict";
      i.d(e, {
        Y: function () {
          return n;
        },
      });
      let n = (t, e, i) => {
        let n = e - t;
        return 0 === n ? 1 : (i - t) / n;
      };
    },
    27026: function (t, e, i) {
      "use strict";
      i.d(e, {
        L: function () {
          return r;
        },
      });
      var n = i(77081);
      class r {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (
            (0, n.y4)(this.subscriptions, t),
            () => (0, n.cl)(this.subscriptions, t)
          );
        }
        notify(t, e, i) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](t, e, i);
            else
              for (let r = 0; r < n; r++) {
                let n = this.subscriptions[r];
                n && n(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    10961: function (t, e, i) {
      "use strict";
      i.d(e, {
        h: function () {
          return r;
        },
      });
      var n = i(2265);
      function r(t) {
        let e = (0, n.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    538: function (t, e, i) {
      "use strict";
      i.d(e, {
        L: function () {
          return r;
        },
      });
      var n = i(2265);
      let r = i(16613).j ? n.useLayoutEffect : n.useEffect;
    },
    69815: function (t, e, i) {
      "use strict";
      function n(t, e) {
        return e ? (1e3 / e) * t : 0;
      }
      i.d(e, {
        R: function () {
          return n;
        },
      });
    },
    74101: function (t, e, i) {
      "use strict";
      i.d(e, {
        BX: function () {
          return u;
        },
        S1: function () {
          return a;
        },
      });
      var n = i(27026),
        r = i(69815),
        s = i(72363);
      let o = (t) => !isNaN(parseFloat(t)),
        a = { current: void 0 };
      class l {
        constructor(t, e = {}) {
          (this.version = "10.16.5"),
            (this.timeDelta = 0),
            (this.lastUpdated = 0),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              (this.prev = this.current), (this.current = t);
              let { delta: i, timestamp: n } = s.frameData;
              this.lastUpdated !== n &&
                ((this.timeDelta = i),
                (this.lastUpdated = n),
                s.Wi.postRender(this.scheduleVelocityCheck)),
                this.prev !== this.current &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.scheduleVelocityCheck = () =>
              s.Wi.postRender(this.velocityCheck)),
            (this.velocityCheck = ({ timestamp: t }) => {
              t !== this.lastUpdated &&
                ((this.prev = this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()));
            }),
            (this.hasAnimated = !1),
            (this.prev = this.current = t),
            (this.canTrackVelocity = o(this.current)),
            (this.owner = e.owner);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new n.L());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  s.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e), (this.prev = t), (this.timeDelta = i);
        }
        jump(t) {
          this.updateAndNotify(t),
            (this.prev = t),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return a.current && a.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          return this.canTrackVelocity
            ? (0, r.R)(
                parseFloat(this.current) - parseFloat(this.prev),
                this.timeDelta
              )
            : 0;
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function u(t, e) {
        return new l(t, e);
      }
    },
    93257: function (t, e, i) {
      "use strict";
      i.d(e, {
        $: function () {
          return r;
        },
      });
      var n = i(72808);
      let r = {
        test: (0, i(50686).i)("#"),
        parse: function (t) {
          let e = "",
            i = "",
            n = "",
            r = "";
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (i = t.substring(3, 5)),
                (n = t.substring(5, 7)),
                (r = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (i = t.substring(2, 3)),
                (n = t.substring(3, 4)),
                (r = t.substring(4, 5)),
                (e += e),
                (i += i),
                (n += n),
                (r += r)),
            {
              red: parseInt(e, 16),
              green: parseInt(i, 16),
              blue: parseInt(n, 16),
              alpha: r ? parseInt(r, 16) / 255 : 1,
            }
          );
        },
        transform: n.m.transform,
      };
    },
    26002: function (t, e, i) {
      "use strict";
      i.d(e, {
        J: function () {
          return a;
        },
      });
      var n = i(2980),
        r = i(43681),
        s = i(2038),
        o = i(50686);
      let a = {
        test: (0, o.i)("hsl", "hue"),
        parse: (0, o.d)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: i, alpha: o = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          r.aQ.transform((0, s.Nw)(e)) +
          ", " +
          r.aQ.transform((0, s.Nw)(i)) +
          ", " +
          (0, s.Nw)(n.Fq.transform(o)) +
          ")",
      };
    },
    2199: function (t, e, i) {
      "use strict";
      i.d(e, {
        $: function () {
          return a;
        },
      });
      var n = i(2038),
        r = i(93257),
        s = i(26002),
        o = i(72808);
      let a = {
        test: (t) => o.m.test(t) || r.$.test(t) || s.J.test(t),
        parse: (t) =>
          o.m.test(t)
            ? o.m.parse(t)
            : s.J.test(t)
            ? s.J.parse(t)
            : r.$.parse(t),
        transform: (t) =>
          (0, n.HD)(t)
            ? t
            : t.hasOwnProperty("red")
            ? o.m.transform(t)
            : s.J.transform(t),
      };
    },
    72808: function (t, e, i) {
      "use strict";
      i.d(e, {
        m: function () {
          return u;
        },
      });
      var n = i(43021),
        r = i(2980),
        s = i(2038),
        o = i(50686);
      let a = (t) => (0, n.u)(0, 255, t),
        l = { ...r.Rx, transform: (t) => Math.round(a(t)) },
        u = {
          test: (0, o.i)("rgb", "red"),
          parse: (0, o.d)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: n = 1 }) =>
            "rgba(" +
            l.transform(t) +
            ", " +
            l.transform(e) +
            ", " +
            l.transform(i) +
            ", " +
            (0, s.Nw)(r.Fq.transform(n)) +
            ")",
        };
    },
    50686: function (t, e, i) {
      "use strict";
      i.d(e, {
        d: function () {
          return s;
        },
        i: function () {
          return r;
        },
      });
      var n = i(2038);
      let r = (t, e) => (i) =>
          !!(
            ((0, n.HD)(i) && n.mj.test(i) && i.startsWith(t)) ||
            (e && Object.prototype.hasOwnProperty.call(i, e))
          ),
        s = (t, e, i) => (r) => {
          if (!(0, n.HD)(r)) return r;
          let [s, o, a, l] = r.match(n.KP);
          return {
            [t]: parseFloat(s),
            [e]: parseFloat(o),
            [i]: parseFloat(a),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    89155: function (t, e, i) {
      "use strict";
      i.d(e, {
        P: function () {
          return v;
        },
        V: function () {
          return d;
        },
      });
      var n = i(80417),
        r = i(26977),
        s = i(2199),
        o = i(2980),
        a = i(2038);
      let l = { regex: n.Xp, countKey: "Vars", token: "${v}", parse: r.Z },
        u = {
          regex: a.dA,
          countKey: "Colors",
          token: "${c}",
          parse: s.$.parse,
        },
        h = {
          regex: a.KP,
          countKey: "Numbers",
          token: "${n}",
          parse: o.Rx.parse,
        };
      function c(t, { regex: e, countKey: i, token: n, parse: r }) {
        let s = t.tokenised.match(e);
        s &&
          ((t["num" + i] = s.length),
          (t.tokenised = t.tokenised.replace(e, n)),
          t.values.push(...s.map(r)));
      }
      function d(t) {
        let e = t.toString(),
          i = {
            value: e,
            tokenised: e,
            values: [],
            numVars: 0,
            numColors: 0,
            numNumbers: 0,
          };
        return i.value.includes("var(--") && c(i, l), c(i, u), c(i, h), i;
      }
      function p(t) {
        return d(t).values;
      }
      function m(t) {
        let { values: e, numColors: i, numVars: n, tokenised: r } = d(t),
          o = e.length;
        return (t) => {
          let e = r;
          for (let r = 0; r < o; r++)
            e =
              r < n
                ? e.replace(l.token, t[r])
                : r < n + i
                ? e.replace(u.token, s.$.transform(t[r]))
                : e.replace(h.token, (0, a.Nw)(t[r]));
          return e;
        };
      }
      let f = (t) => ("number" == typeof t ? 0 : t),
        v = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              (0, a.HD)(t) &&
              ((null === (e = t.match(a.KP)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(a.dA)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: p,
          createTransformer: m,
          getAnimatableNone: function (t) {
            let e = p(t);
            return m(t)(e.map(f));
          },
        };
    },
    2980: function (t, e, i) {
      "use strict";
      i.d(e, {
        Fq: function () {
          return s;
        },
        Rx: function () {
          return r;
        },
        bA: function () {
          return o;
        },
      });
      var n = i(43021);
      let r = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        s = { ...r, transform: (t) => (0, n.u)(0, 1, t) },
        o = { ...r, default: 1 };
    },
    43681: function (t, e, i) {
      "use strict";
      i.d(e, {
        $C: function () {
          return h;
        },
        RW: function () {
          return s;
        },
        aQ: function () {
          return o;
        },
        px: function () {
          return a;
        },
        vh: function () {
          return l;
        },
        vw: function () {
          return u;
        },
      });
      var n = i(2038);
      let r = (t) => ({
          test: (e) =>
            (0, n.HD)(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        s = r("deg"),
        o = r("%"),
        a = r("px"),
        l = r("vh"),
        u = r("vw"),
        h = {
          ...o,
          parse: (t) => o.parse(t) / 100,
          transform: (t) => o.transform(100 * t),
        };
    },
    2038: function (t, e, i) {
      "use strict";
      i.d(e, {
        HD: function () {
          return a;
        },
        KP: function () {
          return r;
        },
        Nw: function () {
          return n;
        },
        dA: function () {
          return s;
        },
        mj: function () {
          return o;
        },
      });
      let n = (t) => Math.round(1e5 * t) / 1e5,
        r = /(-)?([\d]*\.?[\d])+/g,
        s =
          /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        o =
          /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function a(t) {
        return "string" == typeof t;
      }
    },
  },
]);
