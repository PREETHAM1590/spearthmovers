"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9050],
  {
    60986: function (e, t, a) {
      a.r(t);
      var n = a(57437),
        i = a(61396),
        r = a.n(i),
        s = a(14303);
      t.default = function (e) {
        let { children: t, eventName: a, ...i } = e;
        return (0, n.jsx)(r(), {
          onClick: () => {
            gtag("event", a), (0, s.c)().track(a);
          },
          ...i,
          children: t,
        });
      };
    },
    44315: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return _;
          },
        });
      var n = a(57437),
        i = a(2265),
        r = a(61396),
        s = a.n(r),
        o = a(72490),
        l = a(25326),
        d = a(27762),
        c = a(96061),
        u = a(36135);
      let f = d.fC,
        m = d.xz;
      d.x8;
      let x = d.h_,
        h = i.forwardRef((e, t) => {
          let { className: a, ...i } = e;
          return (0, n.jsx)(d.aV, {
            className: (0, u.cn)(
              "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
              a
            ),
            ...i,
            ref: t,
          });
        });
      h.displayName = d.aV.displayName;
      let p = (0, c.j)(
          "fixed z-50 gap-4 bg-white p-6 shadow-lg transition-all ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-500 data-[state=open]:duration-500 dark:bg-zinc-950",
          {
            variants: {
              side: {
                top: "inset-x-0 top-16 border-b data-[state=closed]:slide-out-to-top-16 h-full data-[state=open]:slide-in-from-top-16 data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
                bottom:
                  "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
                left: "inset-y-0 left-0 h-full w-screen border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
                right:
                  "inset-y-0 right-0 h-full w-screen border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
              },
            },
            defaultVariants: { side: "right" },
          }
        ),
        g = i.forwardRef((e, t) => {
          let { side: a = "right", className: i, children: r, ...s } = e;
          return (0, n.jsxs)(x, {
            children: [
              (0, n.jsx)(h, {}),
              (0, n.jsx)(d.VY, {
                ref: t,
                className: (0, u.cn)(p({ side: a }), i),
                ...s,
                children: r,
              }),
            ],
          });
        });
      (g.displayName = d.VY.displayName),
        (i.forwardRef((e, t) => {
          let { className: a, ...i } = e;
          return (0, n.jsx)(d.Dx, {
            ref: t,
            className: (0, u.cn)(
              "text-lg font-semibold text-zinc-950 dark:text-zinc-50",
              a
            ),
            ...i,
          });
        }).displayName = d.Dx.displayName),
        (i.forwardRef((e, t) => {
          let { className: a, ...i } = e;
          return (0, n.jsx)(d.dk, {
            ref: t,
            className: (0, u.cn)("text-sm text-zinc-500 dark:text-zinc-400", a),
            ...i,
          });
        }).displayName = d.dk.displayName);
      var b = a(96891),
        v = a(83523),
        N = a(6211),
        z = a(87199),
        j = a(95224),
        w = function () {
          return (0, n.jsx)(d.GG, {
            asChild: !0,
            children: (0, n.jsxs)(j.z, {
              variant: "link",
              type: "button",
              className:
                "-m-2.5 inline-flex items-center justify-between self-end rounded-md p-2.5 text-zinc-700",
              children: [
                (0, n.jsx)("span", {
                  className: "sr-only",
                  children: "Close main menu",
                }),
                (0, n.jsx)(z, { className: "h-6 w-6", "aria-hidden": "true" }),
              ],
            }),
          });
        },
        y = function (e) {
          let { item: t } = e;
          return (0, n.jsx)(d.GG, {
            asChild: !0,
            children: (0, n.jsx)(
              s(),
              {
                target: t.target ? t.target : "_self",
                href: t.href,
                className:
                  "flex w-full flex-row gap-3  rounded-md  p-2 text-start text-base  font-semibold  outline-0 transition-all duration-75 ease-in-out hover:bg-zinc-100 hover:text-violet-700 ",
                children: t.name,
              },
              t.name
            ),
          });
        },
        C = a(9208),
        k = function (e) {
          let { item: t } = e;
          return (0, n.jsx)(C.DialogClose, {
            asChild: !0,
            children: (0, n.jsxs)(
              s(),
              {
                href: t.href,
                target: t.target,
                className:
                  "group/item flex w-full items-start gap-2 rounded-md p-2 transition-colors duration-500 ease-in-out hover:bg-zinc-100",
                children: [
                  (0, n.jsxs)("div", {
                    className:
                      "rounded-md border border-zinc-300 bg-white p-2 transition-colors duration-500 ease-in-out group-hover/item:border-zinc-500",
                    children: [
                      (0, n.jsx)("span", {
                        className: "sr-only",
                        children: t.name,
                      }),
                      t.icon,
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: "flex flex-col gap-0.5",
                    children: [
                      (0, n.jsx)("span", {
                        className:
                          "text-sm font-semibold leading-6 text-gray-700  group-hover/item:text-zinc-900",
                        children: t.name,
                      }),
                      (0, n.jsx)("span", {
                        className:
                          "min-w-[260px] text-xs leading-5 text-zinc-500 group-hover/item:text-zinc-700",
                        children: t.description,
                      }),
                    ],
                  }),
                ],
              },
              t.name
            ),
          });
        };
      function _(e) {
        let { navigation: t, resourcesNavigation: a } = e,
          [r, s] = (0, i.useState)(!1);
        return (0, n.jsxs)(f, {
          modal: !1,
          open: r,
          onOpenChange: s,
          children: [
            (0, n.jsx)(m, {
              children: (0, n.jsx)("div", {
                className:
                  "-m-2.5 inline-flex items-center justify-between rounded-md p-2.5 text-gray-700",
                children: r
                  ? (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)("span", {
                          className: "sr-only",
                          children: "Close main menu",
                        }),
                        (0, n.jsx)(w, {}),
                      ],
                    })
                  : (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)("span", {
                          className: "sr-only",
                          children: "Open main menu",
                        }),
                        (0, n.jsx)(b.Z, {
                          className: "h-6 w-6 translate-y-1/4 rotate-90",
                          "aria-hidden": "true",
                        }),
                      ],
                    }),
              }),
            }),
            (0, n.jsxs)(g, {
              side: "top",
              className:
                "flex min-w-full flex-col items-start justify-start gap-2",
              children: [
                t.map((e) => (0, n.jsx)(y, { item: e }, e.name)),
                (0, n.jsx)(l.UQ, {
                  type: "single",
                  collapsible: !0,
                  className: "w-full",
                  children: (0, n.jsxs)(o.Qd, {
                    value: "item-1",
                    className: "p-0",
                    children: [
                      (0, n.jsx)(l.o4, {
                        className: "p-0",
                        children: (0, n.jsxs)("div", {
                          className:
                            "flex w-full flex-row items-center justify-between gap-3 rounded-md p-2 text-start text-base  font-semibold  outline-0 transition-all duration-75 ease-in-out",
                          children: [
                            (0, n.jsx)("span", {
                              className: " ",
                              children: "Resources",
                            }),
                            (0, n.jsx)(v.Z, {
                              className: "h-6 w-6",
                              "aria-hidden": "true",
                            }),
                          ],
                        }),
                      }),
                      (0, n.jsx)(l.vF, {
                        children: a.map((e) =>
                          (0, n.jsx)(k, { item: e }, e.name)
                        ),
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)("div", { className: "h-px w-full bg-gray-200" }),
                (0, n.jsx)(I, {}),
              ],
            }),
          ],
        });
      }
      function I() {
        return "authenticated" === (0, N.F)()
          ? (0, n.jsxs)(s(), {
              href: "/my-chatbots",
              className:
                "flex w-full flex-row gap-3  rounded-md  p-2 text-start text-base  font-semibold  outline-0 transition-all duration-75 ease-in-out hover:bg-zinc-100 hover:text-violet-700",
              children: [
                "Chatbots ",
                (0, n.jsx)("span", { "aria-hidden": "true", children: "→" }),
              ],
            })
          : (0, n.jsx)(s(), {
              href: "/auth/signin",
              className:
                "flex w-full flex-row gap-3  rounded-md  p-2 text-start text-base  font-semibold  outline-0 transition-all duration-75 ease-in-out hover:bg-zinc-100 hover:text-violet-700",
              children: "Log in",
            });
      }
    },
    18659: function (e, t, a) {
      a.r(t);
      var n = a(57437);
      a(2265);
      var i = a(34570),
        r = a(59291),
        s = a(82797);
      t.default = function (e) {
        let { children: t } = e,
          { scrollY: a } = (0, i.v)(),
          o = (0, r.H)(a, [0, 10], ["0px", "1px"]);
        return (0, n.jsx)(s.E.nav, {
          className:
            "sticky top-0 isolate z-10 flex justify-between border-zinc-200 bg-white px-6 py-4 lg:px-8",
          style: { borderBottomWidth: o },
          children: t,
        });
      };
    },
    39787: function (e, t, a) {
      a.r(t),
        a.d(t, {
          NavbarAppButton: function () {
            return d;
          },
        });
      var n = a(57437),
        i = a(61396),
        r = a.n(i),
        s = a(60986),
        o = a(79459),
        l = a(6211);
      function d() {
        switch ((0, l.F)()) {
          case "authenticated":
            return (0, n.jsxs)(r(), {
              href: "/my-chatbots",
              className:
                "text-sm font-semibold leading-6 text-zinc-900 transition-opacity animate-in fade-in",
              children: [
                "Chatbots ",
                (0, n.jsx)("span", { "aria-hidden": "true", children: "→" }),
              ],
            });
          case "unauthenticated":
            return (0, n.jsxs)("div", {
              className: "transition-opacity animate-in fade-in",
              children: [
                (0, n.jsx)(r(), {
                  href: "/auth/signin",
                  className: "text-sm font-semibold leading-6 text-zinc-900",
                  children: "Log in",
                }),
                (0, n.jsxs)(s.default, {
                  href: "/auth/signup",
                  className:
                    "ml-4 rounded-md bg-zinc-900   px-3 py-2  text-sm font-semibold  leading-7 text-white shadow-sm hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600",
                  eventName: o.A.CTA_NAV_CLICKED,
                  children: [
                    "Try for Free ",
                    (0, n.jsx)("span", {
                      "aria-hidden": "true",
                      children: "→",
                    }),
                  ],
                }),
              ],
            });
          case "pending":
          case "uninitialized":
            return null;
        }
      }
    },
    25326: function (e, t, a) {
      a.d(t, {
        Qd: function () {
          return d;
        },
        UQ: function () {
          return l;
        },
        o4: function () {
          return c;
        },
        vF: function () {
          return u;
        },
      });
      var n = a(57437),
        i = a(2265),
        r = a(72490),
        s = a(68291),
        o = a(36135);
      let l = r.fC,
        d = i.forwardRef((e, t) => {
          let { className: a, ...i } = e;
          return (0, n.jsx)(r.ck, {
            ref: t,
            className: (0, o.cn)("border-b", a),
            ...i,
          });
        });
      d.displayName = "AccordionItem";
      let c = i.forwardRef((e, t) => {
        let { className: a, children: i, withArrow: l = !0, ...d } = e;
        return (0, n.jsx)(r.h4, {
          className: "flex",
          children: (0, n.jsxs)(r.xz, {
            ref: t,
            className: (0, o.cn)(
              "group/accordion flex flex-1 items-center justify-between py-4 text-sm font-medium  outline-none ring-0 transition-all duration-300 ease-in-out focus:outline-none focus:ring-0 [&[data-state=open]>svg]:opacity-100",
              a
            ),
            ...d,
            children: [
              i,
              l &&
                (0, n.jsx)(s.Z, {
                  className: (0, o.cn)(
                    "hidden h-5 w-5 shrink-0 text-zinc-900 opacity-0 transition-all  duration-300 ease-in-out group-hover/accordion:translate-x-1 group-hover/accordion:opacity-100 lg:block dark:text-zinc-900 dark:group-hover/accordion:text-zinc-900 [&[data-state=open]>svg]:translate-x-2 [&[data-state=open]>svg]:opacity-100"
                  ),
                }),
            ],
          }),
        });
      });
      c.displayName = r.xz.displayName;
      let u = i.forwardRef((e, t) => {
        let { className: a, children: i, ...s } = e;
        return (0, n.jsx)(r.VY, {
          ref: t,
          className: (0, o.cn)(
            "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
            a
          ),
          ...s,
          children: (0, n.jsx)("div", { className: "pb-4 pt-0", children: i }),
        });
      });
      u.displayName = r.VY.displayName;
    },
    95224: function (e, t, a) {
      a.d(t, {
        z: function () {
          return m;
        },
      });
      var n = a(57437),
        i = a(2265),
        r = a(67256),
        s = a(96061),
        o = a(54440),
        l = a.n(o),
        d = a(23986),
        c = (e) => {
          let { ...t } = e;
          return (0, n.jsxs)("svg", {
            "aria-hidden": "true",
            className: (0, d.m)(
              l()(
                "animate-spin fill-violet-600 text-zinc-200 dark:text-zinc-600",
                t.className
              )
            ),
            viewBox: "0 0 100 101",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, n.jsx)("path", {
                d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                fill: "currentColor",
              }),
              (0, n.jsx)("path", {
                d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                fill: "currentFill",
              }),
            ],
          });
        },
        u = a(36135);
      let f = (0, s.j)(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80",
          {
            variants: {
              variant: {
                default:
                  "bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-800/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90",
                destructive:
                  "bg-red-500 text-zinc-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-zinc-50 dark:hover:bg-red-900/90",
                outline:
                  "border border-zinc-200 bg-transparent shadow-sm hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",
                secondary:
                  "bg-zinc-100 text-zinc-900 shadow-sm hover:bg-zinc-200/90 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80",
                ghost:
                  "hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",
                link: "text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50",
                destructiveGhost:
                  "text-red-500 hover:bg-red-50 hover:text-red-600",
              },
              size: {
                default: "h-9 px-4 py-2",
                sm: "h-7 rounded-md px-3",
                lg: "h-10 rounded-md px-8",
                icon: "h-10 w-10",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          }
        ),
        m = i.forwardRef((e, t) => {
          let {
              className: a,
              variant: i,
              size: s,
              loading: o = !1,
              asChild: l = !1,
              ...d
            } = e,
            m = l ? r.g7 : "button";
          return o
            ? (delete d.disabled,
              (0, n.jsxs)(m, {
                className: (0, u.cn)(
                  f({ variant: i, size: s, className: a }),
                  "flex flex-row items-center gap-2"
                ),
                ref: t,
                disabled: !0,
                ...d,
                children: [
                  (0, n.jsx)(c, {
                    className: (0, u.cn)({
                      "h-[0.85rem] w-[0.85rem]": "sm" === s,
                      "h-4 w-4": "sm" !== s,
                      "fill-zinc-600":
                        "destructive" !== i && "destructiveGhost" !== i,
                      "fill-red-500":
                        "destructive" === i || "destructiveGhost" === i,
                    }),
                  }),
                  d.children,
                ],
              }))
            : (0, n.jsx)(m, {
                className: (0, u.cn)(f({ variant: i, size: s, className: a })),
                ref: t,
                ...d,
              });
        });
      m.displayName = "Button";
    },
    9208: function (e, t, a) {
      a.r(t),
        a.d(t, {
          Dialog: function () {
            return l;
          },
          DialogClose: function () {
            return u;
          },
          DialogContent: function () {
            return m;
          },
          DialogDescription: function () {
            return g;
          },
          DialogFooter: function () {
            return h;
          },
          DialogHeader: function () {
            return x;
          },
          DialogOverlay: function () {
            return f;
          },
          DialogPortal: function () {
            return c;
          },
          DialogTitle: function () {
            return p;
          },
          DialogTrigger: function () {
            return d;
          },
        });
      var n = a(57437),
        i = a(2265),
        r = a(27762),
        s = a(82549),
        o = a(36135);
      let l = r.fC,
        d = r.xz,
        c = r.h_,
        u = r.x8,
        f = i.forwardRef((e, t) => {
          let { className: a, ...i } = e;
          return (0, n.jsx)(r.aV, {
            ref: t,
            className: (0, o.cn)(
              "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
              a
            ),
            ...i,
          });
        });
      f.displayName = r.aV.displayName;
      let m = i.forwardRef((e, t) => {
        let { className: a, children: i, hideCloseButton: l = !1, ...d } = e;
        return (0, n.jsxs)(c, {
          children: [
            (0, n.jsx)(f, {}),
            (0, n.jsxs)(r.VY, {
              ref: t,
              className: (0, o.cn)(
                "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-zinc-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:border-zinc-800 dark:bg-zinc-950",
                a
              ),
              ...d,
              children: [
                i,
                !l &&
                  (0, n.jsxs)(r.x8, {
                    className:
                      "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-zinc-100 data-[state=open]:text-zinc-500 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300 dark:data-[state=open]:bg-zinc-800 dark:data-[state=open]:text-zinc-400",
                    children: [
                      (0, n.jsx)(s.Z, { className: "h-4 w-4" }),
                      (0, n.jsx)("span", {
                        className: "sr-only",
                        children: "Close",
                      }),
                    ],
                  }),
              ],
            }),
          ],
        });
      });
      m.displayName = r.VY.displayName;
      let x = (e) => {
        let { className: t, ...a } = e;
        return (0, n.jsx)("div", {
          className: (0, o.cn)(
            "flex flex-col space-y-1.5 text-center sm:text-left",
            t
          ),
          ...a,
        });
      };
      x.displayName = "DialogHeader";
      let h = (e) => {
        let { className: t, ...a } = e;
        return (0, n.jsx)("div", {
          className: (0, o.cn)(
            "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
            t
          ),
          ...a,
        });
      };
      h.displayName = "DialogFooter";
      let p = i.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, n.jsx)(r.Dx, {
          ref: t,
          className: (0, o.cn)(
            "text-lg font-semibold leading-none tracking-tight",
            a
          ),
          ...i,
        });
      });
      p.displayName = r.Dx.displayName;
      let g = i.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, n.jsx)(r.dk, {
          ref: t,
          className: (0, o.cn)("text-sm text-zinc-500 dark:text-zinc-400", a),
          ...i,
        });
      });
      g.displayName = r.dk.displayName;
    },
    57382: function (e, t, a) {
      a.r(t),
        a.d(t, {
          NavigationMenu: function () {
            return d;
          },
          NavigationMenuContent: function () {
            return x;
          },
          NavigationMenuIndicator: function () {
            return g;
          },
          NavigationMenuItem: function () {
            return u;
          },
          NavigationMenuLink: function () {
            return h;
          },
          NavigationMenuList: function () {
            return c;
          },
          NavigationMenuTrigger: function () {
            return m;
          },
          NavigationMenuViewport: function () {
            return p;
          },
          navigationMenuTriggerStyle: function () {
            return f;
          },
        });
      var n = a(57437),
        i = a(2265),
        r = a(5720),
        s = a(96061),
        o = a(83523),
        l = a(36135);
      let d = i.forwardRef((e, t) => {
        let { className: a, children: i, ...s } = e;
        return (0, n.jsxs)(r.fC, {
          ref: t,
          className: (0, l.cn)(
            "relative z-10 flex max-w-max flex-1 items-center justify-center",
            a
          ),
          ...s,
          children: [i, (0, n.jsx)(p, {})],
        });
      });
      d.displayName = r.fC.displayName;
      let c = i.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, n.jsx)(r.aV, {
          ref: t,
          className: (0, l.cn)(
            "group flex flex-1 list-none items-center justify-center space-x-1",
            a
          ),
          ...i,
        });
      });
      c.displayName = r.aV.displayName;
      let u = r.ck,
        f = (0, s.j)(
          "group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:text-zinc-900 outline-zinc-950 focus:outline-1 focus:text-zinc-900 disabled:pointer-events-none disabled:opacity-50 dark:hover:text-zinc-50 dark:focus:text-zinc-50"
        ),
        m = i.forwardRef((e, t) => {
          let { className: a, children: i, ...s } = e;
          return (0, n.jsxs)(r.xz, {
            ref: t,
            className: (0, l.cn)(f(), "group", a),
            ...s,
            children: [
              i,
              "",
              (0, n.jsx)(o.Z, {
                className:
                  "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
                "aria-hidden": "true",
              }),
            ],
          });
        });
      m.displayName = r.xz.displayName;
      let x = i.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, n.jsx)(r.VY, {
          ref: t,
          className: (0, l.cn)(
            "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
            a
          ),
          ...i,
        });
      });
      x.displayName = r.VY.displayName;
      let h = r.rU,
        p = i.forwardRef((e, t) => {
          let { className: a, ...i } = e;
          return (0, n.jsx)("div", {
            className: (0, l.cn)(
              "absolute left-0 top-full flex justify-center"
            ),
            children: (0, n.jsx)(r.l_, {
              className: (0, l.cn)(
                "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border border-zinc-200 bg-white text-zinc-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)] dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50",
                a
              ),
              ref: t,
              ...i,
            }),
          });
        });
      p.displayName = r.l_.displayName;
      let g = i.forwardRef((e, t) => {
        let { className: a, ...i } = e;
        return (0, n.jsx)(r.z$, {
          ref: t,
          className: (0, l.cn)(
            "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
            a
          ),
          ...i,
          children: (0, n.jsx)("div", {
            className:
              "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-zinc-200 shadow-md dark:bg-zinc-800",
          }),
        });
      });
      g.displayName = r.z$.displayName;
    },
    79459: function (e, t, a) {
      a.d(t, {
        A: function () {
          return n;
        },
      });
      let n = {
        CHATBOT_CREATED: "chatbot_created",
        CHATBOT_RETRAINED: "chatbot_retrained",
        CTA_NAV_CLICKED: "cta_nav_clicked",
        CTA_HOME_1_CLICKED: "cta_home_1_clicked",
        CTA_HOME_2_CLICKED: "cta_home_2_clicked",
        SIGNED_IN: "signed_in",
        SIGNED_UP: "signed_up",
        SIGN_UP_EMAIL_SENT: "sign_up_email_sent",
        SUBSCRIPTION_CREATED: "subscription_created",
        SUBSCRIPTION_FLOW_STARTED: "subscription_flow_started",
      };
    },
    6211: function (e, t, a) {
      a.d(t, {
        F: function () {
          return r;
        },
      });
      var n = a(2265),
        i = a(51097);
      function r() {
        let [e, t] = n.useState("uninitialized"),
          a = (0, i.e)();
        return (
          n.useEffect(() => {
            let e = a.auth.onAuthStateChange((e, a) => {
              (null == a ? void 0 : a.user)
                ? t("authenticated")
                : t("unauthenticated");
            });
            return () => {
              e.data.subscription.unsubscribe();
            };
          }, []),
          e
        );
      }
    },
    14303: function (e, t, a) {
      a.d(t, {
        c: function () {
          return n;
        },
      });
      let n = () => window.analytics;
    },
    51097: function (e, t, a) {
      a.d(t, {
        e: function () {
          return i;
        },
      });
      var n = a(59494);
      let i = () =>
        (0, n.AY)(
          "https://backend.chatbase.co",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwanZxYXFsYm9yaHR4anljbWdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM4MDc0OTAsImV4cCI6MTk4OTM4MzQ5MH0.6-gIEwcRpD2ec27Ne2N-ixS5km-nkeWD862XNfrBOpI"
        );
    },
    36135: function (e, t, a) {
      a.d(t, {
        cn: function () {
          return r;
        },
      });
      var n = a(57042),
        i = a(23986);
      function r() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return (0, i.m)((0, n.W)(t));
      }
    },
  },
]);
