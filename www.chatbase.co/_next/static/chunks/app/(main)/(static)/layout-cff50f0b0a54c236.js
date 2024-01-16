(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6668],
  {
    64170: function (e, t, s) {
      Promise.resolve().then(s.t.bind(s, 81749, 23)),
        Promise.resolve().then(s.t.bind(s, 25250, 23)),
        Promise.resolve().then(s.bind(s, 56206)),
        Promise.resolve().then(s.bind(s, 39787)),
        Promise.resolve().then(s.bind(s, 44315)),
        Promise.resolve().then(s.bind(s, 18659)),
        Promise.resolve().then(s.bind(s, 57382));
    },
    67447: function (e, t, s) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var s in t)
            Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
        })(t, {
          unstable_getImgProps: function () {
            return c;
          },
          default: function () {
            return o;
          },
        });
      let n = s(21024),
        r = s(38630),
        i = s(76184),
        a = s(81749),
        l = n._(s(10536)),
        c = (e) => {
          (0, i.warnOnce)(
            "Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk."
          );
          let { props: t } = (0, r.getImgProps)(e, {
            defaultLoader: l.default,
            imgConf: {
              deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
              imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
              path: "/_next/image",
              loader: "default",
              dangerouslyAllowSVG: !1,
              unoptimized: !1,
            },
          });
          for (let [e, s] of Object.entries(t)) void 0 === s && delete t[e];
          return { props: t };
        },
        o = a.Image;
    },
    56206: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return b;
          },
        });
      var n = s(57437),
        r = s(61396),
        i = s.n(r),
        a = s(24033),
        l = s(4593),
        c = s(48341),
        o = s(36135),
        d = s(7302),
        h = s(56530),
        u = s.n(h),
        f = s(51371),
        x = function () {
          return (0, n.jsx)(d.$_, {
            writeKey: "EgAXhy3GfzDDUMTZFMqQgwSjOZH0BBG0",
            defaultDestinationBehavior: "ask",
            shouldRequireConsent: u(),
            children: (e) => {
              let { saveConsent: t, preferences: s } = e;
              return (0, n.jsx)(f.Z, {
                footer: !0,
                saveConsent: function (e) {
                  t(e);
                },
                preferences: s,
              });
            },
          });
        },
        m = s(95224);
      function b() {
        let { dark: e, className: t } =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : { dark: !1 },
          s = "/" === (0, a.usePathname)() || e;
        return (0, n.jsxs)("footer", {
          className: (0, o.cn)(
            "relative z-30  w-full px-6",
            s ? "bg-zinc-900 text-white" : "bg-zinc-100 text-black",
            t
          ),
          children: [
            (0, n.jsxs)("div", {
              className: (0, o.cn)(
                "flex flex-row justify-between border-b",
                s
                  ? "border-zinc-800 bg-zinc-900 py-12 text-white transition-colors duration-150"
                  : "border-zinc-400 bg-zinc-100 py-12 text-black transition-colors duration-150"
              ),
              children: [
                (0, n.jsxs)("div", {
                  className: (0, o.cn)(
                    "col-span-1 lg:col-span-2",
                    s ? "text-white" : "text-zinc-800 "
                  ),
                  children: [
                    (0, n.jsx)(i(), {
                      className:
                        "flex flex-initial items-center font-bold md:mr-24",
                      href: "/",
                      children: (0, n.jsx)("span", {
                        className: "mb-6",
                        children: (0, n.jsx)(c.Z, {
                          className: "w-32",
                          dark: s,
                        }),
                      }),
                    }),
                    (0, n.jsx)(i(), {
                      className: "block text-sm ",
                      href: "/privacy",
                      children: "Privacy Policy",
                    }),
                    (0, n.jsx)(i(), {
                      className: "block text-sm ",
                      href: "/terms",
                      children: "Terms of Service",
                    }),
                    (0, n.jsx)(x, {}),
                  ],
                }),
                (0, n.jsx)("div", {
                  className:
                    "col-span-1 flex items-start text-black lg:col-span-6 lg:justify-end",
                  children: (0, n.jsx)("div", {
                    className: "flex h-10 items-center space-x-6",
                    children: (0, n.jsx)("a", {
                      "aria-label": "LinkedIn Account",
                      target: "_blank",
                      href: "https://www.linkedin.com/company/chatbase-co",
                      children: (0, n.jsx)(l.Z, {
                        className: (0, o.cn)(
                          s ? "text-white" : "text-zinc-800 "
                        ),
                      }),
                    }),
                  }),
                }),
              ],
            }),
            (0, n.jsx)("div", {
              className: "py-6  text-black",
              children: (0, n.jsx)(i(), {
                href: "/help",
                children: (0, n.jsx)(m.z, {
                  className: (0, o.cn)(
                    "w-auto whitespace-nowrap rounded border   bg-inherit px-2 py-1 font-semibold",
                    s
                      ? "border-zinc-800 text-white hover:bg-zinc-800 hover:text-white"
                      : "border-zinc-400 text-black hover:bg-zinc-200 hover:text-black"
                  ),
                  children: "Contact Support",
                }),
              }),
            }),
          ],
        });
      }
    },
    4593: function (e, t, s) {
      "use strict";
      var n = s(57437);
      t.Z = (e) => {
        let { ...t } = e;
        return (0, n.jsx)("svg", {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...t,
          children: (0, n.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
            fill: "currentColor",
          }),
        });
      };
    },
    48341: function (e, t, s) {
      "use strict";
      var n = s(57437),
        r = s(16691),
        i = s.n(r),
        a = s(54440),
        l = s.n(a);
      t.Z = (e) => {
        let { canNavigate: t, dark: s } = e;
        return (0, n.jsxs)("div", {
          className: "flex flex-row items-center gap-1",
          children: [
            (0, n.jsx)(i(), {
              src: "/images/chatbase-logo.svg",
              alt: "Chatbase",
              width: 32,
              height: 32,
              className: "aspect-square rounded-lg",
            }),
            !t &&
              (0, n.jsx)("span", {
                className: l()(
                  "hidden text-lg font-normal md:block",
                  s ? "text-white" : "text-zinc-800 "
                ),
                children: "Chatbase",
              }),
          ],
        });
      };
    },
    51371: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return x;
        },
      });
      var n = s(57437),
        r = s(2265),
        i = s(25326),
        a = s(95224),
        l = s(9208),
        c = s(12647),
        o = s(68792),
        d = s(36135);
      let h = r.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, n.jsx)(o.fC, {
          className: (0, d.cn)(
            "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-violet-500 data-[state=unchecked]:bg-zinc-200 dark:focus-visible:ring-zinc-300 dark:focus-visible:ring-offset-zinc-950 dark:data-[state=checked]:bg-zinc-50 dark:data-[state=unchecked]:bg-zinc-800",
            s
          ),
          ...r,
          ref: t,
          children: (0, n.jsx)(o.bU, {
            className: (0, d.cn)(
              "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-zinc-950"
            ),
          }),
        });
      });
      h.displayName = o.fC.displayName;
      var u = s(62442),
        f = s(82549),
        x = function (e) {
          let [t, s] = r.useState(
            !e.preferences ||
              (function (e) {
                for (let t in e) if (!e[t]) return !1;
                return !0;
              })(e.preferences)
          );
          return (0, n.jsxs)(l.Dialog, {
            children: [
              (0, n.jsx)(l.DialogTrigger, {
                asChild: !0,
                children: (0, n.jsx)(a.z, {
                  type: "button",
                  size: "sm",
                  variant: e.footer ? "ghost" : "outline",
                  className: (0, d.cn)({
                    "text-sm p-0 block w-full text-left hover:bg-inherit hover:text-inherit":
                      e.footer,
                  }),
                  children: e.footer ? "Cookie Preferences" : "Details",
                }),
              }),
              (0, n.jsxs)(l.DialogContent, {
                className: "sm:max-w-md",
                children: [
                  (0, n.jsxs)(l.DialogHeader, {
                    className: "gap-6",
                    children: [
                      (0, n.jsx)(l.DialogTitle, {
                        children: "Cookie Preferences",
                      }),
                      (0, n.jsx)(l.DialogDescription, {
                        children:
                          'We use cookies to improve your site experience. The "strictly necessary" cookies are required for Chatbase to function.',
                      }),
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className: "flex flex-col gap-3",
                    children: (0, n.jsxs)(i.UQ, {
                      type: "single",
                      collapsible: !0,
                      className: "w-full",
                      defaultValue: "item-2",
                      children: [
                        (0, n.jsxs)(i.Qd, {
                          value: "item-1",
                          className: "rounded-t-lg border border-b-0",
                          children: [
                            (0, n.jsx)(i.o4, {
                              withArrow: !1,
                              children: (0, n.jsx)("div", {
                                className:
                                  "flex w-full items-center justify-between px-4",
                                children: (0, n.jsxs)("div", {
                                  className: "flex flex-row items-center gap-3",
                                  children: [
                                    (0, n.jsx)("div", {
                                      className:
                                        "rounded-lg bg-green-600 p-0.5",
                                      children: (0, n.jsx)(u.Z, {
                                        className: "h-4 w-4 text-white",
                                      }),
                                    }),
                                    (0, n.jsx)("p", {
                                      children: "Strictly Necessary Cookies",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            (0, n.jsx)(i.vF, {
                              className:
                                "items-center border-t bg-zinc-50/60 px-5 pt-4 text-sm font-normal text-zinc-700",
                              children:
                                "These are the cookies required for Chatbase to function.",
                            }),
                          ],
                        }),
                        (0, n.jsxs)(i.Qd, {
                          value: "item-2",
                          className: "rounded-b-lg border",
                          children: [
                            (0, n.jsx)(i.o4, {
                              withArrow: !1,
                              children: (0, n.jsx)("div", {
                                className:
                                  "flex w-full items-center justify-between px-4",
                                children: (0, n.jsxs)("div", {
                                  className: "flex flex-row items-center gap-3",
                                  children: [
                                    (0, n.jsx)("div", {
                                      className: (0, d.cn)(
                                        "rounded-lg bg-zinc-600 p-0.5 transition-colors duration-150 ease-in-out",
                                        t && "bg-green-600"
                                      ),
                                      children: t
                                        ? (0, n.jsx)(u.Z, {
                                            className: "h-4 w-4 text-white",
                                          })
                                        : (0, n.jsx)(f.Z, {
                                            className: "h-4 w-4 text-white",
                                          }),
                                    }),
                                    (0, n.jsx)("p", {
                                      children: "Tracking cookies",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            (0, n.jsx)(i.vF, {
                              className:
                                "items-center border-t bg-zinc-50/60 px-5 pt-4",
                              children: (0, n.jsxs)("div", {
                                className: "flex flex-row items-center gap-3",
                                children: [
                                  (0, n.jsx)(h, {
                                    id: "tracking",
                                    checked: t,
                                    onClick: () => s(!t),
                                  }),
                                  (0, n.jsx)(c._, {
                                    htmlFor: "tracking",
                                    className:
                                      "text-sm font-normal text-zinc-700",
                                    children:
                                      "We include analytics cookies to understand how you use our product and design better experiences.",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, n.jsx)(l.DialogClose, {
                    asChild: !0,
                    children: (0, n.jsx)(a.z, {
                      type: "button",
                      variant: "outline",
                      onClick: () => {
                        e.saveConsent(t);
                      },
                      children: "Save settings",
                    }),
                  }),
                ],
              }),
            ],
          });
        };
    },
    12647: function (e, t, s) {
      "use strict";
      s.d(t, {
        _: function () {
          return o;
        },
      });
      var n = s(57437),
        r = s(2265),
        i = s(36743),
        a = s(96061),
        l = s(36135);
      let c = (0, a.j)(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        ),
        o = r.forwardRef((e, t) => {
          let { className: s, ...r } = e;
          return (0, n.jsx)(i.f, {
            ref: t,
            className: (0, l.cn)(c(), s),
            ...r,
          });
        });
      o.displayName = i.f.displayName;
    },
    16691: function (e, t, s) {
      e.exports = s(67447);
    },
  },
  function (e) {
    e.O(
      0,
      [
        5250, 9350, 1749, 4853, 6557, 8064, 3584, 7445, 9104, 1170, 9050, 2971,
        4938, 1744,
      ],
      function () {
        return e((e.s = 64170));
      }
    ),
      (_N_E = e.O());
  },
]);
