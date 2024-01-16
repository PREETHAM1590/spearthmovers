"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1749],
  {
    81749: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return y;
          },
        });
      let r = n(21024),
        i = n(68533)._(n(2265)),
        o = r._(n(54887)),
        l = r._(n(42251)),
        a = n(38630),
        u = n(76906),
        s = n(60337);
      n(76184);
      let d = n(46993),
        f = r._(n(10536)),
        c = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function p(e, t, n, r, i, o) {
        let l = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== l &&
          ((e["data-loaded-src"] = l),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && i(!0), null == n ? void 0 : n.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let r = !1,
                    i = !1;
                  n.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => r,
                    isPropagationStopped: () => i,
                    persist: () => {},
                    preventDefault: () => {
                      (r = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (i = !0), t.stopPropagation();
                    },
                  });
                }
                (null == r ? void 0 : r.current) && r.current(e);
              }
            }));
      }
      function m(e) {
        let [t, n] = i.version.split(".", 2),
          r = parseInt(t, 10),
          o = parseInt(n, 10);
        return r > 18 || (18 === r && o >= 3)
          ? { fetchPriority: e }
          : { fetchpriority: e };
      }
      let g = (0, i.forwardRef)((e, t) => {
        let {
          src: n,
          srcSet: r,
          sizes: o,
          height: l,
          width: a,
          decoding: u,
          className: s,
          style: d,
          fetchPriority: f,
          placeholder: c,
          loading: g,
          unoptimized: h,
          fill: y,
          onLoadRef: b,
          onLoadingCompleteRef: v,
          setBlurComplete: _,
          setShowAltText: w,
          onLoad: S,
          onError: C,
          ...P
        } = e;
        return i.default.createElement("img", {
          ...P,
          ...m(f),
          loading: g,
          width: a,
          height: l,
          decoding: u,
          "data-nimg": y ? "fill" : "1",
          className: s,
          style: d,
          sizes: o,
          srcSet: r,
          src: n,
          ref: (0, i.useCallback)(
            (e) => {
              t &&
                ("function" == typeof t
                  ? t(e)
                  : "object" == typeof t && (t.current = e)),
                e && (C && (e.src = e.src), e.complete && p(e, c, b, v, _, h));
            },
            [n, c, b, v, _, C, h, t]
          ),
          onLoad: (e) => {
            p(e.currentTarget, c, b, v, _, h);
          },
          onError: (e) => {
            w(!0), "empty" !== c && _(!0), C && C(e);
          },
        });
      });
      function h(e) {
        let { isAppRouter: t, imgAttributes: n } = e,
          r = {
            as: "image",
            imageSrcSet: n.srcSet,
            imageSizes: n.sizes,
            crossOrigin: n.crossOrigin,
            referrerPolicy: n.referrerPolicy,
            ...m(n.fetchPriority),
          };
        return t && o.default.preload
          ? (o.default.preload(n.src, r), null)
          : i.default.createElement(
              l.default,
              null,
              i.default.createElement("link", {
                key: "__nimg-" + n.src + n.srcSet + n.sizes,
                rel: "preload",
                href: n.srcSet ? void 0 : n.src,
                ...r,
              })
            );
      }
      let y = (0, i.forwardRef)((e, t) => {
        let n = (0, i.useContext)(d.RouterContext),
          r = (0, i.useContext)(s.ImageConfigContext),
          o = (0, i.useMemo)(() => {
            let e = c || r || u.imageConfigDefault,
              t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
              n = e.deviceSizes.sort((e, t) => e - t);
            return { ...e, allSizes: t, deviceSizes: n };
          }, [r]),
          { onLoad: l, onLoadingComplete: p } = e,
          m = (0, i.useRef)(l);
        (0, i.useEffect)(() => {
          m.current = l;
        }, [l]);
        let y = (0, i.useRef)(p);
        (0, i.useEffect)(() => {
          y.current = p;
        }, [p]);
        let [b, v] = (0, i.useState)(!1),
          [_, w] = (0, i.useState)(!1),
          { props: S, meta: C } = (0, a.getImgProps)(e, {
            defaultLoader: f.default,
            imgConf: o,
            blurComplete: b,
            showAltText: _,
          });
        return i.default.createElement(
          i.default.Fragment,
          null,
          i.default.createElement(g, {
            ...S,
            unoptimized: C.unoptimized,
            placeholder: C.placeholder,
            fill: C.fill,
            onLoadRef: m,
            onLoadingCompleteRef: y,
            setBlurComplete: v,
            setShowAltText: w,
            ref: t,
          }),
          C.priority
            ? i.default.createElement(h, { isAppRouter: !n, imgAttributes: S })
            : null
        );
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    2595: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = n(21024)._(n(2265)).default.createContext({});
    },
    43044: function (e, t) {
      function n(e) {
        let {
          ampFirst: t = !1,
          hybrid: n = !1,
          hasQuery: r = !1,
        } = void 0 === e ? {} : e;
        return t || (n && r);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    38630: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }),
        n(76184);
      let r = n(67160),
        i = n(76906);
      function o(e) {
        return void 0 !== e.default;
      }
      function l(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function a(e, t) {
        var n;
        let a,
          u,
          s,
          {
            src: d,
            sizes: f,
            unoptimized: c = !1,
            priority: p = !1,
            loading: m,
            className: g,
            quality: h,
            width: y,
            height: b,
            fill: v = !1,
            style: _,
            onLoad: w,
            onLoadingComplete: S,
            placeholder: C = "empty",
            blurDataURL: P,
            fetchPriority: j,
            layout: E,
            objectFit: O,
            objectPosition: x,
            lazyBoundary: M,
            lazyRoot: z,
            ...k
          } = e,
          { imgConf: I, showAltText: A, blurComplete: R, defaultLoader: D } = t,
          U = I || i.imageConfigDefault;
        if ("allSizes" in U) a = U;
        else {
          let e = [...U.deviceSizes, ...U.imageSizes].sort((e, t) => e - t),
            t = U.deviceSizes.sort((e, t) => e - t);
          a = { ...U, allSizes: e, deviceSizes: t };
        }
        let L = k.loader || D;
        delete k.loader, delete k.srcSet;
        let N = "__next_img_default" in L;
        if (N) {
          if ("custom" === a.loader)
            throw Error(
              'Image with src "' +
                d +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let e = L;
          L = (t) => {
            let { config: n, ...r } = t;
            return e(r);
          };
        }
        if (E) {
          "fill" === E && (v = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[E];
          e && (_ = { ..._, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[E];
          t && !f && (f = t);
        }
        let B = "",
          F = l(y),
          G = l(b);
        if ("object" == typeof (n = d) && (o(n) || void 0 !== n.src)) {
          let e = o(d) ? d.default : d;
          if (!e.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e)
            );
          if (!e.height || !e.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e)
            );
          if (
            ((u = e.blurWidth),
            (s = e.blurHeight),
            (P = P || e.blurDataURL),
            (B = e.src),
            !v)
          ) {
            if (F || G) {
              if (F && !G) {
                let t = F / e.width;
                G = Math.round(e.height * t);
              } else if (!F && G) {
                let t = G / e.height;
                F = Math.round(e.width * t);
              }
            } else (F = e.width), (G = e.height);
          }
        }
        let T = !p && ("lazy" === m || void 0 === m);
        (!(d = "string" == typeof d ? d : B) ||
          d.startsWith("data:") ||
          d.startsWith("blob:")) &&
          ((c = !0), (T = !1)),
          a.unoptimized && (c = !0),
          N && d.endsWith(".svg") && !a.dangerouslyAllowSVG && (c = !0),
          p && (j = "high");
        let W = l(h),
          H = Object.assign(
            v
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: O,
                  objectPosition: x,
                }
              : {},
            A ? {} : { color: "transparent" },
            _
          ),
          V =
            R || "empty" === C
              ? null
              : "blur" === C
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, r.getImageBlurSvg)({
                  widthInt: F,
                  heightInt: G,
                  blurWidth: u,
                  blurHeight: s,
                  blurDataURL: P || "",
                  objectFit: H.objectFit,
                }) +
                '")'
              : 'url("' + C + '")',
          q = V
            ? {
                backgroundSize: H.objectFit || "cover",
                backgroundPosition: H.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: V,
              }
            : {},
          $ = (function (e) {
            let {
              config: t,
              src: n,
              unoptimized: r,
              width: i,
              quality: o,
              sizes: l,
              loader: a,
            } = e;
            if (r) return { src: n, srcSet: void 0, sizes: void 0 };
            let { widths: u, kind: s } = (function (e, t, n) {
                let { deviceSizes: r, allSizes: i } = e;
                if (n) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let r; (r = e.exec(n)); r) t.push(parseInt(r[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: i.filter((t) => t >= r[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: i, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: r, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [t, 2 * t].map(
                            (e) => i.find((t) => t >= e) || i[i.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(t, i, l),
              d = u.length - 1;
            return {
              sizes: l || "w" !== s ? l : "100vw",
              srcSet: u
                .map(
                  (e, r) =>
                    a({ config: t, src: n, quality: o, width: e }) +
                    " " +
                    ("w" === s ? e : r + 1) +
                    s
                )
                .join(", "),
              src: a({ config: t, src: n, quality: o, width: u[d] }),
            };
          })({
            config: a,
            src: d,
            unoptimized: c,
            width: F,
            quality: W,
            sizes: f,
            loader: L,
          });
        return {
          props: {
            ...k,
            loading: T ? "lazy" : m,
            fetchPriority: j,
            width: F,
            height: G,
            decoding: "async",
            className: g,
            style: { ...H, ...q },
            sizes: $.sizes,
            srcSet: $.srcSet,
            src: $.src,
          },
          meta: { unoptimized: c, priority: p, placeholder: C, fill: v },
        };
      }
    },
    42251: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          defaultHead: function () {
            return s;
          },
          default: function () {
            return p;
          },
        });
      let r = n(21024),
        i = n(68533)._(n(2265)),
        o = r._(n(27392)),
        l = n(2595),
        a = n(27484),
        u = n(43044);
      function s(e) {
        void 0 === e && (e = !1);
        let t = [i.default.createElement("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              i.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          t
        );
      }
      function d(e, t) {
        return "string" == typeof t || "number" == typeof t
          ? e
          : t.type === i.default.Fragment
          ? e.concat(
              i.default.Children.toArray(t.props.children).reduce(
                (e, t) =>
                  "string" == typeof t || "number" == typeof t
                    ? e
                    : e.concat(t),
                []
              )
            )
          : e.concat(t);
      }
      n(76184);
      let f = ["name", "httpEquiv", "charSet", "itemProp"];
      function c(e, t) {
        let { inAmpMode: n } = t;
        return e
          .reduce(d, [])
          .reverse()
          .concat(s(n).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return (i) => {
                let o = !0,
                  l = !1;
                if (
                  i.key &&
                  "number" != typeof i.key &&
                  i.key.indexOf("$") > 0
                ) {
                  l = !0;
                  let t = i.key.slice(i.key.indexOf("$") + 1);
                  e.has(t) ? (o = !1) : e.add(t);
                }
                switch (i.type) {
                  case "title":
                  case "base":
                    t.has(i.type) ? (o = !1) : t.add(i.type);
                    break;
                  case "meta":
                    for (let e = 0, t = f.length; e < t; e++) {
                      let t = f[e];
                      if (i.props.hasOwnProperty(t)) {
                        if ("charSet" === t) n.has(t) ? (o = !1) : n.add(t);
                        else {
                          let e = i.props[t],
                            n = r[t] || new Set();
                          ("name" !== t || !l) && n.has(e)
                            ? (o = !1)
                            : (n.add(e), (r[t] = n));
                        }
                      }
                    }
                }
                return o;
              };
            })()
          )
          .reverse()
          .map((e, t) => {
            let r = e.key || t;
            if (
              !n &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((t) => e.props.href.startsWith(t))
            ) {
              let t = { ...(e.props || {}) };
              return (
                (t["data-href"] = t.href),
                (t.href = void 0),
                (t["data-optimized-fonts"] = !0),
                i.default.cloneElement(e, t)
              );
            }
            return i.default.cloneElement(e, { key: r });
          });
      }
      let p = function (e) {
        let { children: t } = e,
          n = (0, i.useContext)(l.AmpStateContext),
          r = (0, i.useContext)(a.HeadManagerContext);
        return i.default.createElement(
          o.default,
          {
            reduceComponentsToState: c,
            headManager: r,
            inAmpMode: (0, u.isInAmpMode)(n),
          },
          t
        );
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    67160: function (e, t) {
      function n(e) {
        let {
            widthInt: t,
            heightInt: n,
            blurWidth: r,
            blurHeight: i,
            blurDataURL: o,
            objectFit: l,
          } = e,
          a = r ? 40 * r : t,
          u = i ? 40 * i : n,
          s = a && u ? "viewBox='0 0 " + a + " " + u + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          s +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (s
            ? "none"
            : "contain" === l
            ? "xMidYMid"
            : "cover" === l
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          o +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    60337: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = n(21024)._(n(2265)),
        i = n(76906),
        o = r.default.createContext(i.imageConfigDefault);
    },
    76906: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          VALID_LOADERS: function () {
            return n;
          },
          imageConfigDefault: function () {
            return r;
          },
        });
      let n = ["default", "imgix", "cloudinary", "akamai", "custom"],
        r = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "inline",
          remotePatterns: [],
          unoptimized: !1,
        };
    },
    10536: function (e, t) {
      function n(e) {
        let { config: t, src: n, width: r, quality: i } = e;
        return (
          t.path +
          "?url=" +
          encodeURIComponent(n) +
          "&w=" +
          r +
          "&q=" +
          (i || 75)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        (n.__next_img_default = !0);
      let r = n;
    },
    27392: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let r = n(2265),
        i = r.useLayoutEffect,
        o = r.useEffect;
      function l(e) {
        let { headManager: t, reduceComponentsToState: n } = e;
        function l() {
          if (t && t.mountedInstances) {
            let i = r.Children.toArray(
              Array.from(t.mountedInstances).filter(Boolean)
            );
            t.updateHead(n(i, e));
          }
        }
        return (
          i(() => {
            var n;
            return (
              null == t ||
                null == (n = t.mountedInstances) ||
                n.add(e.children),
              () => {
                var n;
                null == t ||
                  null == (n = t.mountedInstances) ||
                  n.delete(e.children);
              }
            );
          }),
          i(
            () => (
              t && (t._pendingUpdate = l),
              () => {
                t && (t._pendingUpdate = l);
              }
            )
          ),
          o(
            () => (
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null)),
              () => {
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    76184: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "warnOnce", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = (e) => {};
    },
  },
]);
