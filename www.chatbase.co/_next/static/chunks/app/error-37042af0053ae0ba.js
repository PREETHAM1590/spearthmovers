(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7601],
  {
    29435: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 5943));
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
        a = s(76184),
        l = s(81749),
        i = n._(s(10536)),
        c = (e) => {
          (0, a.warnOnce)(
            "Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk."
          );
          let { props: t } = (0, r.getImgProps)(e, {
            defaultLoader: i.default,
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
        o = l.Image;
    },
    5943: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return y;
          },
          metadata: function () {
            return k;
          },
        });
      var n = s(57437),
        r = s(61396),
        a = s.n(r),
        l = s(2265),
        i = s(36135);
      let c = (0, l.forwardRef)((e, t) => {
        let { color: s = "black", size: r = "10", className: a, ...l } = e;
        return (0, n.jsxs)("svg", {
          ref: t,
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "10.25 10.25 19.75 19.75",
          fill: "current",
          className: (0, i.cn)(
            "text-".concat(s, " w-").concat(r, " h-").concat(r),
            a
          ),
          ...l,
          children: [
            " ",
            (0, n.jsxs)("g", {
              children: [
                (0, n.jsxs)("g", {
                  children: [
                    (0, n.jsx)("path", {
                      d: "M22.25,14.58c-0.07,0-0.14,0.01-0.21,0.02v0.54L22.25,14.58L22.25,14.58L22.25,14.58z M17.68,24.13c0.02,0,0.03,0,0.05,0 L17.68,24.13L17.68,24.13z",
                    }),
                    (0, n.jsx)("path", {
                      d: "M22.03,14.6v0.54l-0.41,1.06l-0.11,0.29l-2.63,6.81c-0.07,0.18-0.18,0.34-0.31,0.47c-0.09,0.08-0.19,0.16-0.3,0.21 c-0.16,0.09-0.35,0.14-0.54,0.14h-0.05l3.35-8.71C21.2,14.98,21.59,14.68,22.03,14.6z",
                    }),
                    (0, n.jsx)("path", {
                      d: "M22.1,16.32c-0.02,0-0.04,0-0.07,0l-0.09,0.21L18.9,24.5c-0.14,0.38-0.62,0.67-1,0.73l-0.16,0.2h0.16 c0.52,0,1-0.34,1.19-0.85l3.16-8.23L22.1,16.32z",
                    }),
                    (0, n.jsx)("polygon", {
                      points: "22.25,14.58 22.25,16.34 22.03,16.34 22.03,14.62",
                    }),
                    (0, n.jsx)("polygon", {
                      points: "17.89,24.07 17.89,25.42 17.68,25.42 17.68,24.13",
                    }),
                  ],
                }),
                (0, n.jsxs)("g", {
                  children: [
                    (0, n.jsx)("path", {
                      d: "M28.91,19.84l-5.78,2.97V21.9l5.19-2.58v-0.03l-5.19-2.58V15.8l5.78,2.97c0.2,0.1,0.33,0.31,0.33,0.54v0 C29.24,19.53,29.11,19.73,28.91,19.84z",
                    }),
                    (0, n.jsx)("path", {
                      className: "fill-none stroke-current stroke-[0.2]",
                      d: "M23.24,23.24v0.89l5.56-2.91c0.19-0.1,0.32-0.3,0.32-0.53 M27.02,20.07l-3.79-1.92v-0.05v-0.84",
                    }),
                    (0, n.jsx)("line", {
                      className: "fill-none stroke-current stroke-[0.2]",
                      x1: "23.24",
                      y1: "24.13",
                      x2: "23.24",
                      y2: "22.01",
                    }),
                    (0, n.jsx)("line", {
                      className: "fill-none stroke-current stroke-[0.2]",
                      x1: "23.24",
                      y1: "18.09",
                      x2: "23.24",
                      y2: "15.97",
                    }),
                    (0, n.jsx)("line", {
                      className: "fill-none stroke-current stroke-[0.2]",
                      x1: "29.11",
                      y1: "20.69",
                      x2: "29.13",
                      y2: "19.3",
                    }),
                  ],
                }),
                (0, n.jsxs)("g", {
                  children: [
                    (0, n.jsx)("path", {
                      d: "M11.09,19.84l5.78,2.97V21.9l-5.19-2.58v-0.03l5.19-2.58V15.8l-5.78,2.97c-0.2,0.1-0.33,0.31-0.33,0.54v0 C10.76,19.53,10.89,19.73,11.09,19.84z",
                    }),
                    (0, n.jsx)("path", {
                      className: "fill-none stroke-current stroke-[0.2]",
                      d: "M16.76,23.24v0.89l-5.56-2.91c-0.19-0.1-0.32-0.3-0.32-0.53 M12.98,20.07l3.79-1.92v-0.05v-0.84",
                    }),
                    (0, n.jsx)("line", {
                      className: "fill-none stroke-current stroke-[0.2]",
                      x1: "16.76",
                      y1: "24.13",
                      x2: "16.76",
                      y2: "22.01",
                    }),
                    (0, n.jsx)("line", {
                      className: "fill-none stroke-current stroke-[0.2]",
                      x1: "16.76",
                      y1: "18.09",
                      x2: "16.76",
                      y2: "15.97",
                    }),
                    (0, n.jsx)("line", {
                      className: "fill-none stroke-current stroke-[0.2]",
                      x1: "10.89",
                      y1: "20.69",
                      x2: "10.87",
                      y2: "19.3",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      });
      c.displayName = "ApiIcon";
      let o = (0, l.forwardRef)((e, t) => {
        let { color: s = "black", size: r = "10", className: a, ...l } = e;
        return (0, n.jsx)("svg", {
          ref: t,
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "8 8 23 23",
          fill: "none",
          className: (0, i.cn)(
            "text-".concat(s, " w-").concat(r, " h-").concat(r),
            a
          ),
          ...l,
          children: (0, n.jsx)("g", {
            children: (0, n.jsxs)("g", {
              children: [
                (0, n.jsx)("line", {
                  className: "stroke-current stroke-[0.6]",
                  x1: "8.81",
                  y1: "26.07",
                  x2: "31.19",
                  y2: "26.07",
                }),
                (0, n.jsx)("line", {
                  className: "stroke-current stroke-[0.6]",
                  x1: "8.81",
                  y1: "26.66",
                  x2: "31.19",
                  y2: "26.66",
                }),
                (0, n.jsxs)("g", {
                  children: [
                    (0, n.jsx)("path", {
                      className: "stroke-current stroke-[0.6]",
                      d: "M12.77,25.38l-1.26-0.76c-0.28-0.17-0.37-0.54-0.2-0.82l5.35-8.86c0.11-0.19,0.36-0.25,0.55-0.14l1.6,0.96 c0.19,0.11,0.25,0.36,0.14,0.55l-5.35,8.86C13.42,25.46,13.05,25.55,12.77,25.38z",
                    }),
                    (0, n.jsx)("path", {
                      className: "stroke-current stroke-[0.6]",
                      d: "M21.84,25.47h-1.87c-0.21,0-0.39-0.17-0.39-0.39v-9.73c0-0.21,0.17-0.39,0.39-0.39h1.89 c0.21,0,0.39,0.17,0.39,0.39v9.71C22.25,25.29,22.07,25.47,21.84,25.47z",
                    }),
                    (0, n.jsx)("path", {
                      className: "stroke-current stroke-[0.6]",
                      d: "M24.99,25.47h-1.7c-0.25,0-0.45-0.2-0.45-0.45v-8.19c0-0.2,0.16-0.36,0.36-0.36h1.95 c0.2,0,0.36,0.16,0.36,0.36v8.12C25.51,25.24,25.28,25.47,24.99,25.47z",
                    }),
                    (0, n.jsx)("path", {
                      className: "stroke-current stroke-[0.6]",
                      d: "M28.36,25.47h-1.77c-0.27,0-0.49-0.22-0.49-0.49V13.76c0-0.23,0.19-0.41,0.41-0.41h1.84 c0.23,0,0.41,0.19,0.41,0.41v11.31C28.76,25.29,28.58,25.47,28.36,25.47z",
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      });
      o.displayName = "BlogIcon";
      let x = (0, l.forwardRef)((e, t) => {
        let { color: s = "black", size: r = "10", className: a, ...l } = e;
        return (0, n.jsx)("svg", {
          ref: t,
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "12 12 16 16",
          fill: "none",
          className: (0, i.cn)(
            "text-".concat(s, " w-").concat(r, " h-").concat(r),
            a
          ),
          ...l,
          children: (0, n.jsx)("g", {
            children: (0, n.jsxs)("g", {
              children: [
                (0, n.jsx)("line", {
                  className: "stroke-current stroke-[0.6498]",
                  x1: "19.82",
                  y1: "15.51",
                  x2: "19.82",
                  y2: "26.23",
                }),
                (0, n.jsx)("path", {
                  className: "stroke-current stroke-[0.6498]",
                  d: "M19.82,15.51l-5.87-1.69c-0.8-0.23-1.6,0.37-1.6,1.2v7.4c0,0.99,0.65,1.85,1.6,2.12l5.87,1.69l5.87-1.69 c0.94-0.27,1.6-1.14,1.6-2.12v-7.39c0-0.84-0.8-1.44-1.6-1.21L19.82,15.51",
                }),
                (0, n.jsx)("line", {
                  className: "stroke-current stroke-[0.6399]",
                  x1: "24.91",
                  y1: "16.81",
                  x2: "21.98",
                  y2: "17.65",
                }),
                (0, n.jsx)("line", {
                  className: "stroke-current stroke-[0.2753]",
                  x1: "24.91",
                  y1: "18.5",
                  x2: "21.98",
                  y2: "19.35",
                }),
              ],
            }),
          }),
        });
      });
      x.displayName = "GuideIcon";
      var d = s(48341),
        m = s(39787),
        h = s(44315),
        u = s(57382),
        g = function (e) {
          return (0, n.jsxs)(u.NavigationMenuLink, {
            href: e.item.href,
            target: e.item.target ? e.item.target : "_self",
            className:
              "group/item flex w-full max-w-sm items-start gap-2 rounded-md p-2 transition-colors duration-500 ease-in-out hover:bg-zinc-100",
            children: [
              (0, n.jsxs)("div", {
                className:
                  "rounded-md border border-zinc-300 bg-white p-2 transition-colors duration-500 ease-in-out group-hover/item:border-zinc-500",
                children: [
                  (0, n.jsx)("span", {
                    className: "sr-only",
                    children: e.item.name,
                  }),
                  e.item.icon,
                ],
              }),
              (0, n.jsxs)("div", {
                className: "flex flex-col gap-0.5",
                children: [
                  (0, n.jsx)("span", {
                    className:
                      "text-sm font-semibold leading-6 text-gray-700  group-hover/item:text-zinc-900",
                    children: e.item.name,
                  }),
                  (0, n.jsx)("span", {
                    className:
                      "min-w-[260px] text-xs leading-5 text-zinc-500 group-hover/item:text-zinc-700",
                    children: e.item.description,
                  }),
                ],
              }),
            ],
          });
        },
        f = function (e) {
          return (0, n.jsx)(u.NavigationMenu, {
            children: (0, n.jsx)(u.NavigationMenuList, {
              children: (0, n.jsxs)(u.NavigationMenuItem, {
                children: [
                  (0, n.jsx)(u.NavigationMenuTrigger, {
                    className:
                      "h-auto p-0 text-sm font-semibold leading-6 text-gray-900 hover:bg-transparent",
                    children: e.title,
                  }),
                  (0, n.jsxs)(u.NavigationMenuContent, {
                    className: "flex flex-col gap-2 p-2",
                    children: [
                      (0, n.jsx)("h5", {
                        className:
                          "px-2 py-1 text-lg font-semibold leading-6 text-gray-900",
                        children: e.title,
                      }),
                      e.navigationItems.map((e) =>
                        (0, n.jsx)(g, { item: e }, e.name)
                      ),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        p = s(18659);
      let j = [
          {
            name: "Affiliate",
            href: "https://affiliates.chatbase.co/signup",
            target: "_blank",
          },
          { name: "Pricing", href: "/pricing" },
        ],
        v = [
          {
            name: "Guide",
            href: "/guide",
            icon: (0, n.jsx)(x, {
              className:
                "h-6 w-6 text-zinc-600 transition-transform duration-500 ease-in-out group-hover/item:rotate-3 group-hover/item:scale-125 group-hover/item:text-zinc-900",
            }),
            description:
              "Find out everything on how to use chatbase, and unlock its full potential.",
          },
          {
            name: "Blog",
            href: "/blog",
            icon: (0, n.jsx)(o, {
              className:
                "h-6 w-6 text-zinc-600 transition-transform duration-500 ease-in-out group-hover/item:rotate-3 group-hover/item:scale-125 group-hover/item:text-zinc-900",
            }),
            description:
              "Learn more about chatbase by reading our latest articles.",
          },
          {
            name: "API",
            href: "https://docs.chatbase.co/docs",
            target: "_blank",
            icon: (0, n.jsx)(c, {
              className:
                "h-6 w-6 text-zinc-600 transition-transform duration-500 ease-in-out group-hover/item:rotate-3 group-hover/item:scale-125 group-hover/item:text-zinc-900",
            }),
            description:
              "Explore our API and learn how to integrate chatbase with your app.",
          },
        ];
      var N = () =>
        (0, n.jsxs)(p.default, {
          children: [
            (0, n.jsx)("div", {
              className: "flex lg:hidden",
              children: (0, n.jsxs)(a(), {
                href: "/",
                children: [
                  (0, n.jsx)("span", {
                    className: "sr-only",
                    children: "Chatbase",
                  }),
                  (0, n.jsx)(d.Z, {}),
                ],
              }),
            }),
            (0, n.jsx)("div", {
              className: "flex lg:hidden",
              children: (0, n.jsx)(h.default, {
                navigation: j,
                resourcesNavigation: v,
              }),
            }),
            (0, n.jsxs)("div", {
              className: "hidden w-full items-center lg:flex",
              children: [
                (0, n.jsx)("div", {
                  className: "hidden lg:flex lg:flex-1 ",
                  children: (0, n.jsxs)(a(), {
                    href: "/",
                    className: "-m-1.5 p-1.5",
                    children: [
                      (0, n.jsx)("span", {
                        className: "sr-only",
                        children: "Chatbase",
                      }),
                      (0, n.jsx)(d.Z, { className: "w-32" }),
                    ],
                  }),
                }),
                (0, n.jsxs)("div", {
                  className: "flex flex-row gap-14",
                  children: [
                    j.map((e) =>
                      (0, n.jsx)(
                        a(),
                        {
                          target: e.target ? e.target : "_self",
                          href: e.href,
                          className:
                            "text-sm font-semibold leading-6 text-gray-900",
                          children: (0, n.jsxs)("div", {
                            children: [e.name, " "],
                          }),
                        },
                        e.name
                      )
                    ),
                    (0, n.jsx)(f, { title: "Resources", navigationItems: v }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: "hidden lg:flex lg:flex-1 lg:justify-end",
                  children: (0, n.jsx)(m.NavbarAppButton, {}),
                }),
              ],
            }),
          ],
        });
      let k = { title: "500 - Chatbase", description: "500 - Chatbase" };
      var y = function () {
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(N, {}),
            (0, n.jsx)("div", {
              className:
                "relative flex min-h-[86.1vh] flex-col justify-center overflow-x-clip scroll-smooth md:overflow-y-visible",
              children: (0, n.jsxs)("div", {
                className:
                  "mx-auto flex max-w-5xl flex-col items-center gap-6 px-3 text-center",
                children: [
                  (0, n.jsx)("h1", {
                    className: "text-6xl font-extrabold",
                    children: "500",
                  }),
                  (0, n.jsx)("p", {
                    className: "text-lg text-zinc-700",
                    children:
                      "We're sorry, something went wrong, please try again later.",
                  }),
                  (0, n.jsx)(a(), {
                    href: "/",
                    className:
                      "rounded-md bg-zinc-800 px-3 py-2 text-sm font-medium text-white hover:bg-zinc-700",
                    children: "Back to Home",
                  }),
                ],
              }),
            }),
          ],
        });
      };
    },
    48341: function (e, t, s) {
      "use strict";
      var n = s(57437),
        r = s(16691),
        a = s.n(r),
        l = s(54440),
        i = s.n(l);
      t.Z = (e) => {
        let { canNavigate: t, dark: s } = e;
        return (0, n.jsxs)("div", {
          className: "flex flex-row items-center gap-1",
          children: [
            (0, n.jsx)(a(), {
              src: "/images/chatbase-logo.svg",
              alt: "Chatbase",
              width: 32,
              height: 32,
              className: "aspect-square rounded-lg",
            }),
            !t &&
              (0, n.jsx)("span", {
                className: i()(
                  "hidden text-lg font-normal md:block",
                  s ? "text-white" : "text-zinc-800 "
                ),
                children: "Chatbase",
              }),
          ],
        });
      };
    },
    16691: function (e, t, s) {
      e.exports = s(67447);
    },
  },
  function (e) {
    e.O(
      0,
      [
        5250, 9350, 1749, 4853, 6557, 8064, 3584, 7445, 9104, 9050, 2971, 4938,
        1744,
      ],
      function () {
        return e((e.s = 29435));
      }
    ),
      (_N_E = e.O());
  },
]);
