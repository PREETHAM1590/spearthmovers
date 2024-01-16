(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3860],
  {
    13860: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 65600));
    },
    65600: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return eC;
          },
        });
      var a,
        i,
        r,
        l,
        s,
        o,
        c,
        d,
        u,
        g,
        h,
        m,
        b,
        f,
        p,
        x,
        v,
        _,
        z,
        C = n(57437),
        w = n(2265),
        y = n(28481),
        j = n(71424),
        I = n(74578);
      let k = /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/,
        N = /^#([0-9A-F]{3}){1,2}$/i,
        E = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
        S = "hadsa";
      ((a = g || (g = {})).PRIVATE = "private"),
        (a.CAN_BE_EMBEDDED = "can_be_embedded"),
        ((i = h || (h = {})).NEVER = "never"),
        (i.EVERY_24_HOURS = "every_24_hours");
      let R = { LIGHT: "light", DARK: "dark" };
      ((r = m || (m = {})).LEFT = "left"), (r.RIGHT = "right");
      let A = (e) => N.test(e),
        T = I.z.object({
          theme: I.z.union([I.z.literal(R.LIGHT), I.z.literal(R.DARK)]),
          user_message_color: I.z
            .string()
            .refine(A, { message: "userMessageColor has invalid value." }),
          button_color: I.z
            .string()
            .refine(A, { message: "buttonColor has invalid value." }),
          display_name: I.z.string().optional().nullable(),
          profile_picture_file: I.z.string().optional().nullable(),
          chat_icon: I.z.string().optional().nullable(),
          auto_open_chat_window_after: I.z.number().optional().nullable(),
          align_chat_button: I.z.nativeEnum(m),
          message_placeholder: I.z.string().optional().nullable(),
        }),
        L = I.z.object({ active: I.z.boolean(), label: I.z.string() }),
        D = I.z.object({ title: I.z.string(), name: L, email: L, phone: L }),
        O = I.z.object({
          active: I.z.boolean(),
          emails: I.z
            .array(
              I.z
                .string()
                .refine((e) => E.test(e), { message: "Invalid email address." })
            )
            .max(10),
        }),
        M = I.z.object({ daily_leads_collected: O, daily_conversations: O });
      ((l = b || (b = {})).ONE_FAILED = "oneFailed"),
        (l.ONE_SOURCE_FAILED = "oneFailed"),
        (l.FAILED = "failed"),
        (l.LIMIT_EXCEEDED = "limitExceeded"),
        (l.TRAINING = "training"),
        (l.TRAINED = "trained"),
        (l.ALL_TRAINED = "allTrained"),
        (l.ONE_TRAINING = "oneTraining"),
        ((s = f || (f = {})).GPT_3_TURBO = "gpt-3.5-turbo"),
        (s.GPT_4 = "gpt-4"),
        I.z.object({
          id: I.z.string(),
          user_id: I.z.string(),
          name: I.z.string(),
          model: I.z.nativeEnum(f),
          temp: I.z.number().gte(0).lte(1),
          visibility: I.z.nativeEnum(g).optional().nullable(),
          thumbnail_url: I.z.string().optional().nullable(),
          domains: I.z
            .array(
              I.z
                .string()
                .refine((e) => k.test(e), {
                  message: "domain has invalid value.",
                })
            )
            .optional()
            .nullable(),
          only_allow_on_added_domains: I.z.boolean(),
          instructions: I.z.string().optional().nullable(),
          initial_messages: I.z.array(I.z.string()).optional().nullable(),
          suggested_messages: I.z.array(I.z.string()).optional().nullable(),
          collect_customer_information: D.optional().nullable(),
          notifications_settings: M.optional().nullable(),
          index_name: I.z.string(),
          ip_limit: I.z.number().optional().nullable(),
          ip_limit_timeframe: I.z.number().optional().nullable(),
          ip_limit_message: I.z.string().optional().nullable(),
          styles: T.optional().nullable(),
          num_of_characters: I.z.number().optional().nullable(),
          created_at: I.z.coerce.date(),
          last_trained_at: I.z.coerce.date(),
          status: I.z.nativeEnum(b),
          custom_domains: I.z.array(I.z.string()).optional().nullable(),
          retraining_interval: I.z.nativeEnum(h).optional().nullable(),
          current_training_id: I.z.string().optional().nullable(),
        }),
        ((o = p || (p = {})).TO_BE_DELETED = "to_be_deleted"),
        (o.VALID = "valid"),
        (o.INVALID = "invalid"),
        (o.NEW = "new"),
        ((c = x || (x = {})).TRAINING = "training"),
        (c.TRAINED = "trained"),
        (c.FAILED = "failed"),
        (c.FAILED_LIMIT_EXCEEDED = "failed (limit exceeded)"),
        ((d = v || (v = {})).SUCCESS = "success"),
        (d.FAILED = "failed"),
        ((u = _ || (_ = {})).API = "API"),
        (u.WHATSAPP = "WhatsApp"),
        (u.SLACK = "Slack"),
        (u.CHATBASE_SITE = "Chatbase site"),
        (u.WIDGET_OR_IFRAME = "Widget or Iframe"),
        (u.IFRAME = "Iframe"),
        (u.WIDGET = "Widget"),
        (u.UNSPECIFIED = "Unspecified"),
        ((z || (z = {})).LEADS_SUBMIT = "leads.submit");
      let B = "Hi! What can I help you with?";
      f.GPT_3_TURBO;
      let P = {
          theme: R.LIGHT,
          user_message_color: "#3B81F6",
          button_color: "#000000",
          display_name: "",
          auto_open_chat_window_after: 3,
          align_chat_button: m.RIGHT,
        },
        G = {
          name: { active: !1, label: "Name" },
          email: { active: !1, label: "Email" },
          phone: { active: !1, label: "Phone Number" },
        };
      var V = n(96061),
        F = n(36135),
        H = n(16691),
        U = n.n(H),
        Z = n(53036),
        W = n(87199),
        K = n(95224);
      n(79874), n(5804), n(25566);
      let J = async (e) => {
          let { url: t, headers: n, data: a } = e,
            i = await fetch(t, {
              method: "POST",
              headers: new Headers({
                "Content-Type": "application/json",
                ...n,
              }),
              body: JSON.stringify(a),
            });
          if (!i.ok) {
            let e = await i.json();
            throw Error((null == e ? void 0 : e.message) || i.statusText);
          }
          return i.json();
        },
        q = (e) => {
          let { src: t, width: n, quality: a } = e;
          return ""
            .concat("https://backend.chatbase.co", "/storage/v1/object/public/")
            .concat(t, "?width=")
            .concat(n, "&quality=")
            .concat(a || 50);
        };
      var $ = function (e) {
          var t;
          let n = e.chatbot.styles,
            a = e.chatbot.id,
            i = e.chatbot.initial_messages
              ? e.chatbot.initial_messages.map((e) => ({
                  role: "assistant",
                  content: e,
                }))
              : [{ role: "assistant", content: B }],
            [r, l] = w.useState(!1);
          return (
            (0, w.useEffect)(() => {
              let e = (e) => {
                var t;
                (null === (t = e.data) || void 0 === t
                  ? void 0
                  : t.windowInnerWidth) && l(!0);
              };
              return (
                window.addEventListener("message", e),
                () => {
                  window.removeEventListener("message", e);
                }
              );
            }, []),
            (0, C.jsxs)("div", {
              className: (0, F.cn)(
                "z-10 flex justify-between border-b py-1",
                "group-[.cb-dark]:border-[#3f3f46]",
                "group-[.cb-light]:border-[#f1f1f0]"
              ),
              children: [
                (0, C.jsxs)("div", {
                  className: "flex items-center",
                  children: [
                    (null == n ? void 0 : n.profile_picture_file) &&
                      (0, C.jsx)(U(), {
                        src: (t =
                          null == n
                            ? void 0
                            : n.profile_picture_file).startsWith("data")
                          ? t
                          : q({
                              src: "chatbots-profile-pictures/" + t,
                              width: 35,
                            }),
                        alt: "profile picture",
                        width: 35,
                        height: 35,
                        className: "m-1 mr-2  rounded-full",
                      }),
                    (null == n ? void 0 : n.display_name) &&
                      (0, C.jsx)("h1", {
                        className: (0, F.cn)(
                          "text-lg font-bold",
                          "group-[.cb-dark]:text-zinc-300",
                          "group-[.cb-light]:text-zinc-700"
                        ),
                        children: null == n ? void 0 : n.display_name,
                      }),
                  ],
                }),
                (0, C.jsxs)("div", {
                  className: "flex items-center justify-center",
                  children: [
                    (0, C.jsx)(K.z, {
                      variant: "ghost",
                      className: (0, F.cn)(
                        "px-0 py-3 text-sm transition-transform duration-700 ease-in-out hover:rotate-180 hover:bg-inherit",
                        "group-[.cb-dark]:text-zinc-300 group-[.cb-dark]:hover:text-zinc-400",
                        "group-[.cb-light]:text-zinc-700 group-[.cb-light]:hover:text-zinc-600"
                      ),
                      onClick: () => {
                        e.onChatReset && e.onChatReset();
                      },
                      children: (0, C.jsx)(Z, { className: "h-5 w-5" }),
                    }),
                    (r || e.isReadOnly) &&
                      (0, C.jsx)(K.z, {
                        variant: "ghost",
                        className: (0, F.cn)(
                          "ml-3 px-0 py-3 text-sm  hover:bg-inherit",
                          "group-[.cb-dark]:text-zinc-300 group-[.cb-dark]:hover:text-zinc-400",
                          "group-[.cb-light]:text-zinc-700 group-[.cb-light]:hover:text-zinc-600"
                        ),
                        onClick: () => {
                          a &&
                            e.onChatReset &&
                            i &&
                            !e.isReadOnly &&
                            window.parent.postMessage({ closeIframe: !0 }, "*");
                        },
                        children: (0, C.jsx)(W, { className: "h-6 w-6" }),
                      }),
                  ],
                }),
              ],
            })
          );
        },
        X = n(61396),
        Q = n.n(X),
        Y = n(70326),
        ee = n(70130);
      let et = (e) => {
        let t = (0, w.createRef)(),
          n = e.chatbot.styles || P,
          a = async (n) => {
            n &&
              t.current &&
              (t.current.reset(),
              e.onMessageSend &&
                e.onInputChange &&
                (e.onMessageSend(e.input, n), e.onInputChange("")));
          },
          i = (n) => {
            if ((n && n.preventDefault(), e.input && !e.disabled)) {
              if (0 === Math.floor(30 * Math.random())) {
                var a;
                null == t ||
                  null === (a = t.current) ||
                  void 0 === a ||
                  a.execute();
              } else
                e.onMessageSend &&
                  e.onInputChange &&
                  (e.onMessageSend(e.input, S), e.onInputChange(""));
            }
          },
          r = (0, w.useRef)(null),
          l = (0, w.useRef)(!1),
          s = () => {
            r.current &&
              l.current &&
              ((r.current.style.height = "24px"),
              (r.current.style.height = r.current.scrollHeight + "px"));
          };
        return (
          (0, w.useEffect)(() => {
            s(), "" === e.input || l.current || (l.current = !0);
          }, [e.input]),
          (0, C.jsx)(C.Fragment, {
            children: (0, C.jsxs)("form", {
              onSubmit: i,
              children: [
                (0, C.jsx)("div", {
                  className: "flex gap-2 overflow-x-auto p-3",
                  children:
                    e.chatbot.suggested_messages &&
                    e.chatbot.suggested_messages.map((t, n) =>
                      (0, C.jsx)(
                        K.z,
                        {
                          variant: "default",
                          size: "sm",
                          onClick: () => {
                            !e.disabled &&
                              e.onMessageSend &&
                              e.onMessageSend(t, S);
                          },
                          type: "button",
                          className: (0, F.cn)(
                            "whitespace-nowrap font-normal shadow-none",
                            "group-[.cb-dark]:bg-zinc-800 group-[.cb-dark]:text-white group-[.cb-dark]:hover:bg-zinc-700",
                            "group-[.cb-light]:bg-zinc-200/50 group-[.cb-light]:text-black group-[.cb-light]:hover:bg-zinc-200"
                          ),
                          children: t,
                        },
                        n
                      )
                    ),
                }),
                (0, C.jsxs)("div", {
                  className: (0, F.cn)(
                    "flex border-t px-4 py-3",
                    "group-[.cb-dark]:border-[#3f3f46]",
                    "group-[.cb-light]:border-[#e4e4e7]"
                  ),
                  children: [
                    (0, C.jsx)("div", {
                      className: "flex w-full items-center leading-none",
                      children: (0, C.jsx)("textarea", {
                        "aria-label": "chat input",
                        required: !0,
                        maxLength: 4e3,
                        ref: r,
                        rows: 1,
                        tabIndex: 0,
                        style: { height: "24px" },
                        className: (0, F.cn)(
                          "mr-3 max-h-36 w-full resize-none bg-transparent pr-3 leading-[24px] focus:outline-none focus:ring-0  focus-visible:ring-0",
                          { "cursor-not-allowed": e.readOnly },
                          "group-[.cb-dark]:text-white",
                          "group-[.cb-light]:text-black"
                        ),
                        value: e.input,
                        disabled: e.readOnly,
                        onChange: (t) => {
                          e.onInputChange && e.onInputChange(t.target.value);
                        },
                        placeholder:
                          (null == n ? void 0 : n.message_placeholder) ||
                          "Message...",
                        onKeyDown: (t) => {
                          "Enter" === t.key &&
                            !t.shiftKey &&
                            e.onInputChange &&
                            e.onMessageSend &&
                            i(t);
                        },
                      }),
                    }),
                    (0, C.jsx)("div", {
                      className: "flex  items-end leading-none",
                      children: (0, C.jsx)(K.z, {
                        variant: "link",
                        type: "submit",
                        className: (0, F.cn)(
                          "p-1",
                          "group-[.cb-dark]:text-zinc-300",
                          "group-[.cb-light]:text-zinc-700"
                        ),
                        disabled: !e.input || e.disabled || e.readOnly,
                        children: (0, C.jsx)(Y, { className: "h-5 w-5" }),
                      }),
                    }),
                  ],
                }),
                (0, C.jsx)(ee.Z, {
                  ref: t,
                  size: "invisible",
                  sitekey: "6LdQyeUkAAAAAK_5dC_7EsRhIi9MSVZC2hc_irOz",
                  onChange: a,
                }),
                e.shouldShowChatbaseBranding &&
                  (0, C.jsxs)("p", {
                    className: (0, F.cn)(
                      "pb-2 text-center text-xs",
                      "group-[.cb-dark]:text-[#b4b4b5]",
                      "group-[.cb-light]:text-[#3f3f46]"
                    ),
                    children: [
                      "Powered By",
                      (0, C.jsx)(Q(), {
                        target: "_blank",
                        className: (0, F.cn)(
                          "ml-1 font-semibold",
                          "group-[.cb-dark]:text-[#f1f1f0]",
                          "group-[.cb-light]:text-[#141410]"
                        ),
                        href: "/",
                        children: "Chatbase.co",
                      }),
                    ],
                  }),
              ],
            }),
          })
        );
      };
      var en = n(73634),
        ea = n(31716),
        ei = n(18616),
        er = n(10375),
        el = n(54440),
        es = n.n(el),
        eo = n(32767),
        ec = n.n(eo),
        ed = (e) => {
          let { theme: t } = e;
          return (
            t || (t = R.LIGHT),
            (0, C.jsxs)("span", {
              className: es()(ec().root, {
                "[&>span]:bg-zinc-500": t === R.DARK,
                "[&>span]:bg-zinc-400": t === R.LIGHT,
              }),
              children: [
                (0, C.jsx)("span", {}),
                (0, C.jsx)("span", {}),
                (0, C.jsx)("span", {}),
              ],
            })
          );
        };
      let eu = () =>
        (0, C.jsx)("div", {
          className: "mr-8 flex justify-start",
          children: (0, C.jsx)("div", {
            className: (0, F.cn)(
              "mb-3 flex items-center justify-start rounded-lg px-4 py-5",
              "group-[.cb-dark]:bg-[#3f3f46] group-[.cb-dark]:text-white",
              "group-[.cb-light]:bg-[#f1f1f0] group-[.cb-light]:text-black"
            ),
            children: (0, C.jsx)(ed, {}),
          }),
        });
      function eg(e) {
        let { message: t, chatbotStyles: n, className: a } = e,
          { role: i = "assistant", content: r } = t,
          l =
            (null == n ? void 0 : n.user_message_color) || P.user_message_color;
        return r
          ? (0, C.jsx)("div", {
              className:
                "assistant" != i
                  ? "ml-8 flex justify-end"
                  : "mr-8 flex justify-start",
              children: (0, C.jsx)("div", {
                className: (0, F.cn)(
                  "mb-3 max-w-prose overflow-auto rounded-lg px-4 py-3",
                  {
                    "group-[.cb-dark]:bg-[#3f3f46] group-[.cb-light]:bg-[#f1f1f0] group-[.cb-dark]:text-white group-[.cb-light]:text-black":
                      "user" !== i,
                  }
                ),
                style:
                  "user" === i
                    ? {
                        backgroundColor: l,
                        color: (0, er.Z)(l).isDark() ? "white" : "black",
                      }
                    : {},
                children: (0, C.jsx)("div", {
                  className: (0, F.cn)(
                    "flex flex-col items-start gap-4 break-words",
                    {
                      dark:
                        ((null == n ? void 0 : n.theme) === R.DARK &&
                          "assistant" === i) ||
                        ("user" === i && (0, er.Z)(l).isDark()),
                    }
                  ),
                  children: (0, C.jsx)("div", {
                    className: (0, F.cn)(
                      "prose w-full break-words text-left text-inherit dark:prose-invert",
                      a
                    ),
                    children: (0, C.jsx)(ea.D, {
                      remarkPlugins: [ei.Z],
                      linkTarget: "_blank",
                      children: r,
                    }),
                  }),
                }),
              }),
            })
          : null;
      }
      var eh = function (e) {
          var t, n, a, i, r, l, s;
          let [o, c] = (0, w.useState)(""),
            [d, u] = (0, w.useState)(""),
            [g, h] = (0, w.useState)(""),
            [m, b] = (0, w.useState)(""),
            [f, p] = (0, w.useState)(!1),
            x = async () => {
              try {
                e.onChangeCollectCustomerInfoChatLineVisibility(!1),
                  sessionStorage.setItem(
                    "ignoreCollectCustomerInfo",
                    (!0).toString()
                  );
              } catch (e) {
                console.log(e);
              }
            },
            v = async (t) => {
              t.preventDefault();
              try {
                if ((p(!0), b(""), (g && g.length < 6) || g.length > 14)) {
                  b("Phone number is invalid"), p(!1);
                  return;
                }
                if (!d && !o && !g) {
                  b("Please fill at least one field"), p(!1);
                  return;
                }
                try {
                  sessionStorage.setItem(
                    "customerInformation",
                    JSON.stringify({ email: o, name: d, phone: g })
                  );
                } catch (e) {
                  console.log(e);
                }
                await J({
                  url: "/api/fe/add-collected-customer-information",
                  data: {
                    conversationId: e.conversationId,
                    customerEmail: o,
                    customerName: d,
                    customerPhone: g,
                    chatbotId: e.chatbot.id,
                  },
                }),
                  e.onChangeCollectCustomerInfoChatLineVisibility(!1),
                  j.A.success("Success", {
                    description: "Submitted successfully",
                  }),
                  p(!1);
              } catch (t) {
                console.log(t),
                  e.onChangeCollectCustomerInfoChatLineVisibility(!1),
                  p(!1);
              }
            };
          return (0, C.jsx)("div", {
            className: "float-left clear-both mb-3 mr-8",
            children: (0, C.jsx)("div", {
              className: (0, F.cn)(
                "overflow-auto rounded-lg  px-4 py-3",
                "group-[.cb-dark]:bg-[#3f3f46] group-[.cb-dark]:text-white",
                "group-[.cb-light]:bg-[#f1f1f0] group-[.cb-light]:text-black"
              ),
              children: (0, C.jsx)("div", {
                className: "flex space-x-3",
                children: (0, C.jsx)("div", {
                  className: "flex-1 gap-4",
                  children: (0, C.jsx)("div", {
                    className: "text-left text-inherit  ",
                    children: (0, C.jsxs)("form", {
                      onSubmit: v,
                      className: " min-w-[16rem]",
                      children: [
                        (0, C.jsxs)("div", {
                          className: " mb-4 flex  justify-between",
                          children: [
                            (0, C.jsx)("h4", {
                              className: "  pr-8 font-semibold ",
                              children:
                                null ===
                                  (t =
                                    e.chatbot.collect_customer_information) ||
                                void 0 === t
                                  ? void 0
                                  : t.title,
                            }),
                            (0, C.jsx)(K.z, {
                              variant: "link",
                              type: "button",
                              onClick: x,
                              className: (0, F.cn)(
                                " p-0",
                                "group-[.cb-dark]:text-zinc-300 group-[.cb-dark]:hover:text-zinc-400",
                                "group-[.cb-light]:text-zinc-700 group-[.cb-light]:hover:text-zinc-600"
                              ),
                              children: (0, C.jsx)(W, { className: "h-4 w-4" }),
                            }),
                          ],
                        }),
                        (null ===
                          (n = e.chatbot.collect_customer_information) ||
                        void 0 === n
                          ? void 0
                          : n.name.active) &&
                          (0, C.jsxs)("div", {
                            className: "mb-4",
                            children: [
                              (0, C.jsx)("label", {
                                className: "mb-1 block text-sm font-medium",
                                children:
                                  (null ===
                                    (a =
                                      e.chatbot.collect_customer_information) ||
                                  void 0 === a
                                    ? void 0
                                    : a.name.label) || G.name.label,
                              }),
                              (0, C.jsx)("div", {
                                className: (0, F.cn)(
                                  "flex w-full rounded",
                                  "group-[.cb-dark]:bg-black",
                                  "group-[.cb-light]:bg-white"
                                ),
                                children: (0, C.jsx)("input", {
                                  className: (0, F.cn)(
                                    "focus:ring-none w-full min-w-0 flex-auto appearance-none rounded border bg-inherit p-1 px-3 py-2 focus:outline-none sm:text-sm",
                                    "group-[.cb-dark]:border-[#5f5f5e]",
                                    "group-[.cb-light]:border-[#cfcfce]"
                                  ),
                                  value: d,
                                  onChange: (e) => {
                                    u(e.target.value);
                                  },
                                  maxLength: 70,
                                }),
                              }),
                            ],
                          }),
                        (null ===
                          (i = e.chatbot.collect_customer_information) ||
                        void 0 === i
                          ? void 0
                          : i.email.active) &&
                          (0, C.jsxs)("div", {
                            className: "mb-4",
                            children: [
                              (0, C.jsx)("label", {
                                className: "mb-1 block text-sm font-medium",
                                children:
                                  (null ===
                                    (r =
                                      e.chatbot.collect_customer_information) ||
                                  void 0 === r
                                    ? void 0
                                    : r.email.label) || G.email.label,
                              }),
                              (0, C.jsx)("div", {
                                className: (0, F.cn)(
                                  "flex w-full rounded",
                                  "group-[.cb-dark]:bg-black",
                                  "group-[.cb-light]:bg-white"
                                ),
                                children: (0, C.jsx)("input", {
                                  type: "email",
                                  required: !0,
                                  className: (0, F.cn)(
                                    "focus:ring-none w-full min-w-0 flex-auto rounded border bg-inherit  p-1 px-3    py-2 focus:outline-none sm:text-sm ",
                                    "group-[.cb-dark]:border-[#5f5f5e]",
                                    "group-[.cb-light]:border-[#cfcfce]"
                                  ),
                                  value: o,
                                  onChange: (e) => {
                                    c(e.target.value);
                                  },
                                }),
                              }),
                            ],
                          }),
                        (null ===
                          (l = e.chatbot.collect_customer_information) ||
                        void 0 === l
                          ? void 0
                          : l.phone.active) &&
                          (0, C.jsxs)("div", {
                            className: "mb-4",
                            children: [
                              (0, C.jsx)("label", {
                                className: "mb-1 block text-sm font-medium",
                                children:
                                  (null ===
                                    (s =
                                      e.chatbot.collect_customer_information) ||
                                  void 0 === s
                                    ? void 0
                                    : s.phone.label) || G.phone.label,
                              }),
                              (0, C.jsx)("div", {
                                className: (0, F.cn)(
                                  "flex w-full rounded",
                                  "group-[.cb-dark]:bg-black",
                                  "group-[.cb-light]:bg-white"
                                ),
                                children: (0, C.jsx)("input", {
                                  type: "tel",
                                  required: !0,
                                  className: (0, F.cn)(
                                    "focus:ring-none w-full min-w-0  flex-auto appearance-none rounded border bg-inherit  p-1 px-3    py-2 focus:outline-none sm:text-sm ",
                                    "group-[.cb-dark]:border-[#5f5f5e]",
                                    "group-[.cb-light]:border-[#cfcfce]"
                                  ),
                                  value: g,
                                  onChange: (e) => {
                                    h(e.target.value);
                                  },
                                }),
                              }),
                            ],
                          }),
                        (0, C.jsxs)("div", {
                          className: "flex items-end justify-between",
                          children: [
                            (0, C.jsx)("div", {
                              children:
                                m &&
                                (0, C.jsx)("p", {
                                  className: "mb-2 mr-2 text-sm text-red-500",
                                  children: m,
                                }),
                            }),
                            (0, C.jsx)(K.z, {
                              loading: f,
                              children:
                                !f && (0, C.jsx)(Y, { className: "h-4 w-4" }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          });
        },
        em = n(24930),
        eb = n.n(em);
      let ef = (e) => {
        let { children: t } = e;
        return (0, C.jsx)(C.Fragment, { children: t });
      };
      var ep = eb()(() => Promise.resolve(ef), { ssr: !1 });
      let ex = (e) => {
        let { children: t, scrollToBottomRef: n } = e,
          a = (0, en.qJ)();
        return (n.current = a), (0, C.jsx)("div", { children: t });
      };
      function ev(e) {
        let t =
          e.showCollectUserInfoChatLine &&
          e.onChangeCollectCustomerInfoChatLineVisibility &&
          e.conversationIdRef;
        return (0, C.jsx)(ep, {
          children: (0, C.jsx)(en.ZP, {
            className: "h-full",
            scrollViewClassName: "",
            followButtonClassName: (0, F.cn)(
              "scrolldown-icon !h-[30px] !w-[30px] !rounded-full",
              "group-[.cb-dark]:!bg-zinc-700 group-[.cb-dark]:!text-white",
              "group-[.cb-light]:!text-dark group-[.cb-light]:!bg-zinc-100"
            ),
            children: (0, C.jsx)("div", {
              className: "px-3 pt-4",
              children: (0, C.jsxs)(ex, {
                scrollToBottomRef: e.scrollToBottomRef,
                children: [
                  e.messages.map((t, n) => {
                    let { content: a, role: i } = t;
                    return (0, C.jsx)(
                      eg,
                      {
                        message: { role: i, content: a },
                        chatbotStyles: e.chatbot.styles,
                      },
                      n
                    );
                  }),
                  t &&
                    (0, C.jsx)(eh, {
                      conversationId: e.conversationIdRef.current,
                      onChangeCollectCustomerInfoChatLineVisibility:
                        e.onChangeCollectCustomerInfoChatLineVisibility,
                      chatbot: e.chatbot,
                    }),
                  e.loading && (0, C.jsx)(eu, {}),
                ],
              }),
            }),
          }),
        });
      }
      function e_(e) {
        let t = e.chatbot.styles || P,
          n = (0, V.j)(
            "flex h-full flex-auto shrink-0 flex-col overflow-hidden bg-gray-100 group",
            {
              variants: {
                theme: {
                  [R.DARK]: "cb-dark bg-black",
                  [R.LIGHT]: "cb-light bg-white",
                },
              },
              defaultVariants: { theme: R.LIGHT },
            }
          );
        return (0, C.jsxs)("div", {
          className: (0, F.cn)(n({ theme: t.theme })),
          children: [
            (0, C.jsx)("div", {
              className: "w-full px-3",
              children: (0, C.jsx)($, {
                chatbot: e.chatbot,
                onChatReset: e.onChatReset,
                disabled: e.isStillStreaming || e.readOnly,
                conversationIdRef: e.conversationIdRef,
                isReadOnly: e.readOnly,
              }),
            }),
            (0, C.jsx)("div", {
              className: "h-full overflow-auto",
              children: (0, C.jsx)(ev, {
                chatbot: e.chatbot,
                messages: e.messages,
                loading: e.loading,
                scrollToBottomRef: e.scrollToBottomRef,
                conversationIdRef: e.conversationIdRef,
                showCollectUserInfoChatLine: e.showCollectUserInfoChatLine,
                onChangeCollectCustomerInfoChatLineVisibility:
                  e.onChangeCollectCustomerInfoChatLineVisibility,
              }),
            }),
            (0, C.jsx)("div", {
              className: "bg-inherit",
              children: (0, C.jsx)(et, {
                chatbot: e.chatbot,
                disabled: e.loading || e.isStillStreaming || e.readOnly,
                readOnly: e.readOnly,
                input: e.input,
                onInputChange: e.onInputChange,
                onMessageSend: e.onMessageSend,
                shouldShowChatbaseBranding: e.shouldShowChatbaseBranding,
              }),
            }),
          ],
        });
      }
      let ez = {
        genericError: {
          title: "Something went wrong",
          description: "Please try again later",
        },
      };
      function eC(e) {
        let { chatbot: t, shouldShowChatbaseBranding: n } = e,
          { id: a } = t,
          i = t.initial_messages
            ? t.initial_messages.map((e) => ({ role: "assistant", content: e }))
            : [{ role: "assistant", content: B }],
          [r, l] = (0, w.useState)(i.filter((e) => e.content)),
          [s, o] = (0, w.useState)(""),
          [c, d] = (0, w.useState)(!1),
          [u, g] = (0, w.useState)(!1),
          [h, m] = (0, w.useState)(!1),
          b = (0, w.useRef)(() => {});
        (0, w.useEffect)(() => {
          try {
            l(
              localStorage.getItem(t.id)
                ? JSON.parse(localStorage.getItem(t.id) || "")
                : i.filter((e) => e.content)
            );
          } catch (e) {
            console.log(e);
          }
        }, []),
          (0, w.useEffect)(() => {
            if (!u)
              try {
                localStorage.setItem(t.id, JSON.stringify(r));
              } catch (e) {
                console.log(e);
              }
          }, [u, r]);
        let f = (0, w.useRef)("");
        (0, w.useEffect)(() => {
          if (!f.current) {
            f.current = (0, y.x0)() + "-" + a;
            return;
          }
        }, [f.current]),
          (0, w.useEffect)(() => {
            var e;
            let n =
              (null === (e = t.initial_messages) || void 0 === e
                ? void 0
                : e.length) || 1;
            if (r.length <= n) return;
            if (u || c) return m(!1);
            let a = !0;
            try {
              a =
                Object.values(t.collect_customer_information || {}).some(
                  (e) => "string" != typeof e && e.active
                ) &&
                !sessionStorage.getItem("customerInformation") &&
                "true" !== sessionStorage.getItem("ignoreCollectCustomerInfo");
            } catch (e) {
              console.log(e);
            }
            m(a);
          }, [u, c]);
        let p = async (e, n) => {
          if (!c)
            try {
              let i = [...r, { content: e, role: "user" }];
              l(i), d(!0), b.current && b.current();
              let s = i.slice(-30),
                o = null;
              try {
                o = sessionStorage.getItem("customerInformation")
                  ? JSON.parse(
                      sessionStorage.getItem("customerInformation") || ""
                    )
                  : null;
              } catch (e) {
                console.log(e);
              }
              let c = await fetch("/api/fe/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  messages: s,
                  captchaCode: n,
                  chatId: a,
                  conversationId: f.current,
                  customerEmail: null == o ? void 0 : o.email,
                }),
              });
              if (!c.ok) {
                let e = await c.json();
                if (429 === c.status)
                  throw Error(
                    t.ip_limit_message || "Too many messages in a row"
                  );
                throw Error((null == e ? void 0 : e.message) || c.statusText);
              }
              let u = c.body;
              if (!u) return;
              let h = u.getReader(),
                m = new TextDecoder("utf-8"),
                p = !1;
              d(!1);
              let x = "";
              for (; !p; ) {
                g(!0);
                let { value: e, done: t } = await h.read();
                p = t;
                let n = m.decode(e, { stream: !0 }),
                  a = "";
                (a = n), (x += a), l([...i, { content: x, role: "assistant" }]);
              }
              g(!1);
            } catch (e) {
              console.log(e),
                e instanceof Error
                  ? j.A.error("Error", { description: e.message })
                  : j.A.error(ez.genericError.title, {
                      description: ez.genericError.description,
                    }),
                d(!1);
            }
        };
        return (0, C.jsx)("div", {
          className: "h-screen",
          children: (0, C.jsx)(e_, {
            chatbot: t,
            messages: r,
            onChatReset: () => {
              try {
                localStorage.removeItem(t.id);
              } catch (e) {
                console.log(e);
              }
              l(i.filter((e) => e.content)), f && (f.current = "");
            },
            input: s,
            onInputChange: o,
            onMessageSend: p,
            loading: c,
            isStillStreaming: u,
            scrollToBottomRef: b,
            conversationIdRef: f,
            showCollectUserInfoChatLine: h,
            onChangeCollectCustomerInfoChatLineVisibility: m,
            readOnly: !1,
            shouldShowChatbaseBranding: n,
          }),
        });
      }
    },
    95224: function (e, t, n) {
      "use strict";
      n.d(t, {
        z: function () {
          return h;
        },
      });
      var a = n(57437),
        i = n(2265),
        r = n(67256),
        l = n(96061),
        s = n(54440),
        o = n.n(s),
        c = n(23986),
        d = (e) => {
          let { ...t } = e;
          return (0, a.jsxs)("svg", {
            "aria-hidden": "true",
            className: (0, c.m)(
              o()(
                "animate-spin fill-violet-600 text-zinc-200 dark:text-zinc-600",
                t.className
              )
            ),
            viewBox: "0 0 100 101",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, a.jsx)("path", {
                d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                fill: "currentColor",
              }),
              (0, a.jsx)("path", {
                d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                fill: "currentFill",
              }),
            ],
          });
        },
        u = n(36135);
      let g = (0, l.j)(
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
        h = i.forwardRef((e, t) => {
          let {
              className: n,
              variant: i,
              size: l,
              loading: s = !1,
              asChild: o = !1,
              ...c
            } = e,
            h = o ? r.g7 : "button";
          return s
            ? (delete c.disabled,
              (0, a.jsxs)(h, {
                className: (0, u.cn)(
                  g({ variant: i, size: l, className: n }),
                  "flex flex-row items-center gap-2"
                ),
                ref: t,
                disabled: !0,
                ...c,
                children: [
                  (0, a.jsx)(d, {
                    className: (0, u.cn)({
                      "h-[0.85rem] w-[0.85rem]": "sm" === l,
                      "h-4 w-4": "sm" !== l,
                      "fill-zinc-600":
                        "destructive" !== i && "destructiveGhost" !== i,
                      "fill-red-500":
                        "destructive" === i || "destructiveGhost" === i,
                    }),
                  }),
                  c.children,
                ],
              }))
            : (0, a.jsx)(h, {
                className: (0, u.cn)(g({ variant: i, size: l, className: n })),
                ref: t,
                ...c,
              });
        });
      h.displayName = "Button";
    },
    36135: function (e, t, n) {
      "use strict";
      n.d(t, {
        cn: function () {
          return r;
        },
      });
      var a = n(57042),
        i = n(23986);
      function r() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (0, i.m)((0, a.W)(t));
      }
    },
    32767: function (e) {
      e.exports = {
        root: "LoadingDots_root__IA4pe",
        blink: "LoadingDots_blink__vuyyb",
      };
    },
  },
]);
