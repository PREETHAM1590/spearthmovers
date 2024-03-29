(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6557],
  {
    89494: function (e, t, s) {
      "use strict";
      var i = (function () {
        if ("undefined" != typeof self) return self;
        if ("undefined" != typeof window) return window;
        if (void 0 !== s.g) return s.g;
        throw Error("unable to locate global object");
      })();
      (e.exports = t = i.fetch),
        i.fetch && (t.default = i.fetch.bind(i)),
        (t.Headers = i.Headers),
        (t.Request = i.Request),
        (t.Response = i.Response);
    },
    33212: function (e, t) {
      "use strict";
      /*!
       * cookie
       * Copyright(c) 2012-2014 Roman Shtylman
       * Copyright(c) 2015 Douglas Christopher Wilson
       * MIT Licensed
       */ (t.Q = function (e, t) {
        if ("string" != typeof e)
          throw TypeError("argument str must be a string");
        for (var s = {}, i = (t || {}).decode || r, n = 0; n < e.length; ) {
          var a = e.indexOf("=", n);
          if (-1 === a) break;
          var o = e.indexOf(";", n);
          if (-1 === o) o = e.length;
          else if (o < a) {
            n = e.lastIndexOf(";", a - 1) + 1;
            continue;
          }
          var l = e.slice(n, a).trim();
          if (void 0 === s[l]) {
            var h = e.slice(a + 1, o).trim();
            34 === h.charCodeAt(0) && (h = h.slice(1, -1)),
              (s[l] = (function (e, t) {
                try {
                  return t(e);
                } catch (t) {
                  return e;
                }
              })(h, i));
          }
          n = o + 1;
        }
        return s;
      }),
        (t.q = function (e, t, r) {
          var a = r || {},
            o = a.encode || n;
          if ("function" != typeof o)
            throw TypeError("option encode is invalid");
          if (!i.test(e)) throw TypeError("argument name is invalid");
          var l = o(t);
          if (l && !i.test(l)) throw TypeError("argument val is invalid");
          var h = e + "=" + l;
          if (null != a.maxAge) {
            var c = a.maxAge - 0;
            if (isNaN(c) || !isFinite(c))
              throw TypeError("option maxAge is invalid");
            h += "; Max-Age=" + Math.floor(c);
          }
          if (a.domain) {
            if (!i.test(a.domain)) throw TypeError("option domain is invalid");
            h += "; Domain=" + a.domain;
          }
          if (a.path) {
            if (!i.test(a.path)) throw TypeError("option path is invalid");
            h += "; Path=" + a.path;
          }
          if (a.expires) {
            var u = a.expires;
            if (
              ("[object Date]" !== s.call(u) && !(u instanceof Date)) ||
              isNaN(u.valueOf())
            )
              throw TypeError("option expires is invalid");
            h += "; Expires=" + u.toUTCString();
          }
          if (
            (a.httpOnly && (h += "; HttpOnly"),
            a.secure && (h += "; Secure"),
            a.priority)
          )
            switch (
              "string" == typeof a.priority
                ? a.priority.toLowerCase()
                : a.priority
            ) {
              case "low":
                h += "; Priority=Low";
                break;
              case "medium":
                h += "; Priority=Medium";
                break;
              case "high":
                h += "; Priority=High";
                break;
              default:
                throw TypeError("option priority is invalid");
            }
          if (a.sameSite)
            switch (
              "string" == typeof a.sameSite
                ? a.sameSite.toLowerCase()
                : a.sameSite
            ) {
              case !0:
              case "strict":
                h += "; SameSite=Strict";
                break;
              case "lax":
                h += "; SameSite=Lax";
                break;
              case "none":
                h += "; SameSite=None";
                break;
              default:
                throw TypeError("option sameSite is invalid");
            }
          return h;
        });
      var s = Object.prototype.toString,
        i = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
      function r(e) {
        return -1 !== e.indexOf("%") ? decodeURIComponent(e) : e;
      }
      function n(e) {
        return encodeURIComponent(e);
      }
    },
    54440: function (e, t) {
      var s;
      /*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ !(function () {
        "use strict";
        var i = {}.hasOwnProperty;
        function r() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var s = arguments[t];
            if (s) {
              var n = typeof s;
              if ("string" === n || "number" === n) e.push(s);
              else if (Array.isArray(s)) {
                if (s.length) {
                  var a = r.apply(null, s);
                  a && e.push(a);
                }
              } else if ("object" === n) {
                if (s.toString === Object.prototype.toString)
                  for (var o in s) i.call(s, o) && s[o] && e.push(o);
                else e.push(s.toString());
              }
            }
          }
          return e.join(" ");
        }
        e.exports
          ? ((r.default = r), (e.exports = r))
          : void 0 !==
              (s = function () {
                return r;
              }.apply(t, [])) && (e.exports = s);
      })();
    },
    19472: function (e) {
      var t = function () {
        if ("object" == typeof self && self) return self;
        if ("object" == typeof window && window) return window;
        throw Error("Unable to resolve global `this`");
      };
      e.exports = (function () {
        if (this) return this;
        if ("object" == typeof globalThis && globalThis) return globalThis;
        try {
          Object.defineProperty(Object.prototype, "__global__", {
            get: function () {
              return this;
            },
            configurable: !0,
          });
        } catch (e) {
          return t();
        }
        try {
          if (!__global__) return t();
          return __global__;
        } finally {
          delete Object.prototype.__global__;
        }
      })();
    },
    1775: function (e, t, s) {
      if ("object" == typeof globalThis) i = globalThis;
      else
        try {
          i = s(19472);
        } catch (e) {
        } finally {
          if ((i || "undefined" == typeof window || (i = window), !i))
            throw Error("Could not determine global this");
        }
      var i,
        r = i.WebSocket || i.MozWebSocket,
        n = s(55506);
      function a(e, t) {
        return t ? new r(e, t) : new r(e);
      }
      r &&
        ["CONNECTING", "OPEN", "CLOSING", "CLOSED"].forEach(function (e) {
          Object.defineProperty(a, e, {
            get: function () {
              return r[e];
            },
          });
        }),
        (e.exports = { w3cwebsocket: r ? a : null, version: n });
    },
    55506: function (e, t, s) {
      e.exports = s(62151).version;
    },
    59494: function (e, t, s) {
      "use strict";
      s.d(t, {
        AY: function () {
          return tN;
        },
      });
      let i = (e) => {
        let t;
        return (
          (t =
            e ||
            ("undefined" == typeof fetch
              ? (...e) =>
                  Promise.resolve()
                    .then(s.t.bind(s, 89494, 23))
                    .then(({ default: t }) => t(...e))
              : fetch)),
          (...e) => t(...e)
        );
      };
      class r extends Error {
        constructor(e, t = "FunctionsError", s) {
          super(e), (this.name = t), (this.context = s);
        }
      }
      class n extends r {
        constructor(e) {
          super(
            "Failed to send a request to the Edge Function",
            "FunctionsFetchError",
            e
          );
        }
      }
      class a extends r {
        constructor(e) {
          super(
            "Relay Error invoking the Edge Function",
            "FunctionsRelayError",
            e
          );
        }
      }
      class o extends r {
        constructor(e) {
          super(
            "Edge Function returned a non-2xx status code",
            "FunctionsHttpError",
            e
          );
        }
      }
      class l {
        constructor(e, { headers: t = {}, customFetch: s } = {}) {
          (this.url = e), (this.headers = t), (this.fetch = i(s));
        }
        setAuth(e) {
          this.headers.Authorization = `Bearer ${e}`;
        }
        invoke(e, t = {}) {
          var s, i, r, l, h;
          return (
            (i = this),
            (r = void 0),
            (l = void 0),
            (h = function* () {
              try {
                let i;
                let { headers: r, method: l, body: h } = t,
                  c = {};
                h &&
                  ((r &&
                    !Object.prototype.hasOwnProperty.call(r, "Content-Type")) ||
                    !r) &&
                  (("undefined" != typeof Blob && h instanceof Blob) ||
                  h instanceof ArrayBuffer
                    ? ((c["Content-Type"] = "application/octet-stream"),
                      (i = h))
                    : "string" == typeof h
                    ? ((c["Content-Type"] = "text/plain"), (i = h))
                    : "undefined" != typeof FormData && h instanceof FormData
                    ? (i = h)
                    : ((c["Content-Type"] = "application/json"),
                      (i = JSON.stringify(h))));
                let u = yield this.fetch(`${this.url}/${e}`, {
                    method: l || "POST",
                    headers: Object.assign(
                      Object.assign(Object.assign({}, c), this.headers),
                      r
                    ),
                    body: i,
                  }).catch((e) => {
                    throw new n(e);
                  }),
                  d = u.headers.get("x-relay-error");
                if (d && "true" === d) throw new a(u);
                if (!u.ok) throw new o(u);
                let f = (
                  null !== (s = u.headers.get("Content-Type")) && void 0 !== s
                    ? s
                    : "text/plain"
                )
                  .split(";")[0]
                  .trim();
                return {
                  data:
                    "application/json" === f
                      ? yield u.json()
                      : "application/octet-stream" === f
                      ? yield u.blob()
                      : "multipart/form-data" === f
                      ? yield u.formData()
                      : yield u.text(),
                  error: null,
                };
              } catch (e) {
                return { data: null, error: e };
              }
            }),
            new (l || (l = Promise))(function (e, t) {
              function s(e) {
                try {
                  a(h.next(e));
                } catch (e) {
                  t(e);
                }
              }
              function n(e) {
                try {
                  a(h.throw(e));
                } catch (e) {
                  t(e);
                }
              }
              function a(t) {
                var i;
                t.done
                  ? e(t.value)
                  : ((i = t.value) instanceof l
                      ? i
                      : new l(function (e) {
                          e(i);
                        })
                    ).then(s, n);
              }
              a((h = h.apply(i, r || [])).next());
            })
          );
        }
      }
      var h,
        c,
        u,
        d,
        f,
        p,
        g,
        m,
        y,
        v,
        _,
        b,
        w,
        k,
        S,
        T,
        j,
        O,
        E,
        $,
        P = s(89494),
        x = s.n(P);
      class C {
        constructor(e) {
          (this.shouldThrowOnError = !1),
            (this.method = e.method),
            (this.url = e.url),
            (this.headers = e.headers),
            (this.schema = e.schema),
            (this.body = e.body),
            (this.shouldThrowOnError = e.shouldThrowOnError),
            (this.signal = e.signal),
            (this.isMaybeSingle = e.isMaybeSingle),
            e.fetch
              ? (this.fetch = e.fetch)
              : "undefined" == typeof fetch
              ? (this.fetch = x())
              : (this.fetch = fetch);
        }
        throwOnError() {
          return (this.shouldThrowOnError = !0), this;
        }
        then(e, t) {
          void 0 === this.schema ||
            (["GET", "HEAD"].includes(this.method)
              ? (this.headers["Accept-Profile"] = this.schema)
              : (this.headers["Content-Profile"] = this.schema)),
            "GET" !== this.method &&
              "HEAD" !== this.method &&
              (this.headers["Content-Type"] = "application/json");
          let s = (0, this.fetch)(this.url.toString(), {
            method: this.method,
            headers: this.headers,
            body: JSON.stringify(this.body),
            signal: this.signal,
          }).then(async (e) => {
            var t, s, i;
            let r = null,
              n = null,
              a = null,
              o = e.status,
              l = e.statusText;
            if (e.ok) {
              if ("HEAD" !== this.method) {
                let t = await e.text();
                "" === t ||
                  (n =
                    "text/csv" === this.headers.Accept
                      ? t
                      : this.headers.Accept &&
                        this.headers.Accept.includes(
                          "application/vnd.pgrst.plan+text"
                        )
                      ? t
                      : JSON.parse(t));
              }
              let i =
                  null === (t = this.headers.Prefer) || void 0 === t
                    ? void 0
                    : t.match(/count=(exact|planned|estimated)/),
                h =
                  null === (s = e.headers.get("content-range")) || void 0 === s
                    ? void 0
                    : s.split("/");
              i && h && h.length > 1 && (a = parseInt(h[1])),
                this.isMaybeSingle &&
                  "GET" === this.method &&
                  Array.isArray(n) &&
                  (n.length > 1
                    ? ((r = {
                        code: "PGRST116",
                        details: `Results contain ${n.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                        hint: null,
                        message:
                          "JSON object requested, multiple (or no) rows returned",
                      }),
                      (n = null),
                      (a = null),
                      (o = 406),
                      (l = "Not Acceptable"))
                    : (n = 1 === n.length ? n[0] : null));
            } else {
              let t = await e.text();
              try {
                (r = JSON.parse(t)),
                  Array.isArray(r) &&
                    404 === e.status &&
                    ((n = []), (r = null), (o = 200), (l = "OK"));
              } catch (s) {
                404 === e.status && "" === t
                  ? ((o = 204), (l = "No Content"))
                  : (r = { message: t });
              }
              if (
                (r &&
                  this.isMaybeSingle &&
                  (null === (i = null == r ? void 0 : r.details) || void 0 === i
                    ? void 0
                    : i.includes("Results contain 0 rows")) &&
                  ((r = null), (o = 200), (l = "OK")),
                r && this.shouldThrowOnError)
              )
                throw r;
            }
            return { error: r, data: n, count: a, status: o, statusText: l };
          });
          return (
            this.shouldThrowOnError ||
              (s = s.catch((e) => {
                var t, s, i;
                return {
                  error: {
                    message: `${
                      null !== (t = null == e ? void 0 : e.name) && void 0 !== t
                        ? t
                        : "FetchError"
                    }: ${null == e ? void 0 : e.message}`,
                    details: `${
                      null !== (s = null == e ? void 0 : e.stack) &&
                      void 0 !== s
                        ? s
                        : ""
                    }`,
                    hint: "",
                    code: `${
                      null !== (i = null == e ? void 0 : e.code) && void 0 !== i
                        ? i
                        : ""
                    }`,
                  },
                  data: null,
                  count: null,
                  status: 0,
                  statusText: "",
                };
              })),
            s.then(e, t)
          );
        }
      }
      class R extends C {
        select(e) {
          let t = !1,
            s = (null != e ? e : "*")
              .split("")
              .map((e) =>
                /\s/.test(e) && !t ? "" : ('"' === e && (t = !t), e)
              )
              .join("");
          return (
            this.url.searchParams.set("select", s),
            this.headers.Prefer && (this.headers.Prefer += ","),
            (this.headers.Prefer += "return=representation"),
            this
          );
        }
        order(e, { ascending: t = !0, nullsFirst: s, foreignTable: i } = {}) {
          let r = i ? `${i}.order` : "order",
            n = this.url.searchParams.get(r);
          return (
            this.url.searchParams.set(
              r,
              `${n ? `${n},` : ""}${e}.${t ? "asc" : "desc"}${
                void 0 === s ? "" : s ? ".nullsfirst" : ".nullslast"
              }`
            ),
            this
          );
        }
        limit(e, { foreignTable: t } = {}) {
          let s = void 0 === t ? "limit" : `${t}.limit`;
          return this.url.searchParams.set(s, `${e}`), this;
        }
        range(e, t, { foreignTable: s } = {}) {
          let i = void 0 === s ? "offset" : `${s}.offset`,
            r = void 0 === s ? "limit" : `${s}.limit`;
          return (
            this.url.searchParams.set(i, `${e}`),
            this.url.searchParams.set(r, `${t - e + 1}`),
            this
          );
        }
        abortSignal(e) {
          return (this.signal = e), this;
        }
        single() {
          return (
            (this.headers.Accept = "application/vnd.pgrst.object+json"), this
          );
        }
        maybeSingle() {
          return (
            "GET" === this.method
              ? (this.headers.Accept = "application/json")
              : (this.headers.Accept = "application/vnd.pgrst.object+json"),
            (this.isMaybeSingle = !0),
            this
          );
        }
        csv() {
          return (this.headers.Accept = "text/csv"), this;
        }
        geojson() {
          return (this.headers.Accept = "application/geo+json"), this;
        }
        explain({
          analyze: e = !1,
          verbose: t = !1,
          settings: s = !1,
          buffers: i = !1,
          wal: r = !1,
          format: n = "text",
        } = {}) {
          let a = [
              e ? "analyze" : null,
              t ? "verbose" : null,
              s ? "settings" : null,
              i ? "buffers" : null,
              r ? "wal" : null,
            ]
              .filter(Boolean)
              .join("|"),
            o = this.headers.Accept;
          return (
            (this.headers.Accept = `application/vnd.pgrst.plan+${n}; for="${o}"; options=${a};`),
            this
          );
        }
        rollback() {
          var e;
          return (
            (null !== (e = this.headers.Prefer) && void 0 !== e ? e : "").trim()
              .length > 0
              ? (this.headers.Prefer += ",tx=rollback")
              : (this.headers.Prefer = "tx=rollback"),
            this
          );
        }
        returns() {
          return this;
        }
      }
      class A extends R {
        eq(e, t) {
          return this.url.searchParams.append(e, `eq.${t}`), this;
        }
        neq(e, t) {
          return this.url.searchParams.append(e, `neq.${t}`), this;
        }
        gt(e, t) {
          return this.url.searchParams.append(e, `gt.${t}`), this;
        }
        gte(e, t) {
          return this.url.searchParams.append(e, `gte.${t}`), this;
        }
        lt(e, t) {
          return this.url.searchParams.append(e, `lt.${t}`), this;
        }
        lte(e, t) {
          return this.url.searchParams.append(e, `lte.${t}`), this;
        }
        like(e, t) {
          return this.url.searchParams.append(e, `like.${t}`), this;
        }
        likeAllOf(e, t) {
          return (
            this.url.searchParams.append(e, `like(all).{${t.join(",")}}`), this
          );
        }
        likeAnyOf(e, t) {
          return (
            this.url.searchParams.append(e, `like(any).{${t.join(",")}}`), this
          );
        }
        ilike(e, t) {
          return this.url.searchParams.append(e, `ilike.${t}`), this;
        }
        ilikeAllOf(e, t) {
          return (
            this.url.searchParams.append(e, `ilike(all).{${t.join(",")}}`), this
          );
        }
        ilikeAnyOf(e, t) {
          return (
            this.url.searchParams.append(e, `ilike(any).{${t.join(",")}}`), this
          );
        }
        is(e, t) {
          return this.url.searchParams.append(e, `is.${t}`), this;
        }
        in(e, t) {
          let s = t
            .map((e) =>
              "string" == typeof e && RegExp("[,()]").test(e)
                ? `"${e}"`
                : `${e}`
            )
            .join(",");
          return this.url.searchParams.append(e, `in.(${s})`), this;
        }
        contains(e, t) {
          return (
            "string" == typeof t
              ? this.url.searchParams.append(e, `cs.${t}`)
              : Array.isArray(t)
              ? this.url.searchParams.append(e, `cs.{${t.join(",")}}`)
              : this.url.searchParams.append(e, `cs.${JSON.stringify(t)}`),
            this
          );
        }
        containedBy(e, t) {
          return (
            "string" == typeof t
              ? this.url.searchParams.append(e, `cd.${t}`)
              : Array.isArray(t)
              ? this.url.searchParams.append(e, `cd.{${t.join(",")}}`)
              : this.url.searchParams.append(e, `cd.${JSON.stringify(t)}`),
            this
          );
        }
        rangeGt(e, t) {
          return this.url.searchParams.append(e, `sr.${t}`), this;
        }
        rangeGte(e, t) {
          return this.url.searchParams.append(e, `nxl.${t}`), this;
        }
        rangeLt(e, t) {
          return this.url.searchParams.append(e, `sl.${t}`), this;
        }
        rangeLte(e, t) {
          return this.url.searchParams.append(e, `nxr.${t}`), this;
        }
        rangeAdjacent(e, t) {
          return this.url.searchParams.append(e, `adj.${t}`), this;
        }
        overlaps(e, t) {
          return (
            "string" == typeof t
              ? this.url.searchParams.append(e, `ov.${t}`)
              : this.url.searchParams.append(e, `ov.{${t.join(",")}}`),
            this
          );
        }
        textSearch(e, t, { config: s, type: i } = {}) {
          let r = "";
          "plain" === i
            ? (r = "pl")
            : "phrase" === i
            ? (r = "ph")
            : "websearch" === i && (r = "w");
          let n = void 0 === s ? "" : `(${s})`;
          return this.url.searchParams.append(e, `${r}fts${n}.${t}`), this;
        }
        match(e) {
          return (
            Object.entries(e).forEach(([e, t]) => {
              this.url.searchParams.append(e, `eq.${t}`);
            }),
            this
          );
        }
        not(e, t, s) {
          return this.url.searchParams.append(e, `not.${t}.${s}`), this;
        }
        or(e, { foreignTable: t } = {}) {
          let s = t ? `${t}.or` : "or";
          return this.url.searchParams.append(s, `(${e})`), this;
        }
        filter(e, t, s) {
          return this.url.searchParams.append(e, `${t}.${s}`), this;
        }
      }
      class I {
        constructor(e, { headers: t = {}, schema: s, fetch: i }) {
          (this.url = e),
            (this.headers = t),
            (this.schema = s),
            (this.fetch = i);
        }
        select(e, { head: t = !1, count: s } = {}) {
          let i = !1,
            r = (null != e ? e : "*")
              .split("")
              .map((e) =>
                /\s/.test(e) && !i ? "" : ('"' === e && (i = !i), e)
              )
              .join("");
          return (
            this.url.searchParams.set("select", r),
            s && (this.headers.Prefer = `count=${s}`),
            new A({
              method: t ? "HEAD" : "GET",
              url: this.url,
              headers: this.headers,
              schema: this.schema,
              fetch: this.fetch,
              allowEmpty: !1,
            })
          );
        }
        insert(e, { count: t, defaultToNull: s = !0 } = {}) {
          let i = [];
          if (
            (this.headers.Prefer && i.push(this.headers.Prefer),
            t && i.push(`count=${t}`),
            s || i.push("missing=default"),
            (this.headers.Prefer = i.join(",")),
            Array.isArray(e))
          ) {
            let t = e.reduce((e, t) => e.concat(Object.keys(t)), []);
            if (t.length > 0) {
              let e = [...new Set(t)].map((e) => `"${e}"`);
              this.url.searchParams.set("columns", e.join(","));
            }
          }
          return new A({
            method: "POST",
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: e,
            fetch: this.fetch,
            allowEmpty: !1,
          });
        }
        upsert(
          e,
          {
            onConflict: t,
            ignoreDuplicates: s = !1,
            count: i,
            defaultToNull: r = !0,
          } = {}
        ) {
          let n = [`resolution=${s ? "ignore" : "merge"}-duplicates`];
          if (
            (void 0 !== t && this.url.searchParams.set("on_conflict", t),
            this.headers.Prefer && n.push(this.headers.Prefer),
            i && n.push(`count=${i}`),
            r || n.push("missing=default"),
            (this.headers.Prefer = n.join(",")),
            Array.isArray(e))
          ) {
            let t = e.reduce((e, t) => e.concat(Object.keys(t)), []);
            if (t.length > 0) {
              let e = [...new Set(t)].map((e) => `"${e}"`);
              this.url.searchParams.set("columns", e.join(","));
            }
          }
          return new A({
            method: "POST",
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: e,
            fetch: this.fetch,
            allowEmpty: !1,
          });
        }
        update(e, { count: t } = {}) {
          let s = [];
          return (
            this.headers.Prefer && s.push(this.headers.Prefer),
            t && s.push(`count=${t}`),
            (this.headers.Prefer = s.join(",")),
            new A({
              method: "PATCH",
              url: this.url,
              headers: this.headers,
              schema: this.schema,
              body: e,
              fetch: this.fetch,
              allowEmpty: !1,
            })
          );
        }
        delete({ count: e } = {}) {
          let t = [];
          return (
            e && t.push(`count=${e}`),
            this.headers.Prefer && t.unshift(this.headers.Prefer),
            (this.headers.Prefer = t.join(",")),
            new A({
              method: "DELETE",
              url: this.url,
              headers: this.headers,
              schema: this.schema,
              fetch: this.fetch,
              allowEmpty: !1,
            })
          );
        }
      }
      let L = { "X-Client-Info": "postgrest-js/1.8.4" };
      class U {
        constructor(e, { headers: t = {}, schema: s, fetch: i } = {}) {
          (this.url = e),
            (this.headers = Object.assign(Object.assign({}, L), t)),
            (this.schemaName = s),
            (this.fetch = i);
        }
        from(e) {
          return new I(new URL(`${this.url}/${e}`), {
            headers: Object.assign({}, this.headers),
            schema: this.schemaName,
            fetch: this.fetch,
          });
        }
        schema(e) {
          return new U(this.url, {
            headers: this.headers,
            schema: e,
            fetch: this.fetch,
          });
        }
        rpc(e, t = {}, { head: s = !1, count: i } = {}) {
          let r, n;
          let a = new URL(`${this.url}/rpc/${e}`);
          s
            ? ((r = "HEAD"),
              Object.entries(t).forEach(([e, t]) => {
                a.searchParams.append(e, `${t}`);
              }))
            : ((r = "POST"), (n = t));
          let o = Object.assign({}, this.headers);
          return (
            i && (o.Prefer = `count=${i}`),
            new A({
              method: r,
              url: a,
              headers: o,
              schema: this.schemaName,
              body: n,
              fetch: this.fetch,
              allowEmpty: !1,
            })
          );
        }
      }
      var N = s(1775);
      let D = { "X-Client-Info": "realtime-js/2.8.0" };
      ((b = h || (h = {}))[(b.connecting = 0)] = "connecting"),
        (b[(b.open = 1)] = "open"),
        (b[(b.closing = 2)] = "closing"),
        (b[(b.closed = 3)] = "closed"),
        ((w = c || (c = {})).closed = "closed"),
        (w.errored = "errored"),
        (w.joined = "joined"),
        (w.joining = "joining"),
        (w.leaving = "leaving"),
        ((k = u || (u = {})).close = "phx_close"),
        (k.error = "phx_error"),
        (k.join = "phx_join"),
        (k.reply = "phx_reply"),
        (k.leave = "phx_leave"),
        (k.access_token = "access_token"),
        ((d || (d = {})).websocket = "websocket"),
        ((S = f || (f = {})).Connecting = "connecting"),
        (S.Open = "open"),
        (S.Closing = "closing"),
        (S.Closed = "closed");
      class F {
        constructor(e, t) {
          (this.callback = e),
            (this.timerCalc = t),
            (this.timer = void 0),
            (this.tries = 0),
            (this.callback = e),
            (this.timerCalc = t);
        }
        reset() {
          (this.tries = 0), clearTimeout(this.timer);
        }
        scheduleTimeout() {
          clearTimeout(this.timer),
            (this.timer = setTimeout(() => {
              (this.tries = this.tries + 1), this.callback();
            }, this.timerCalc(this.tries + 1)));
        }
      }
      class q {
        constructor() {
          this.HEADER_LENGTH = 1;
        }
        decode(e, t) {
          return e.constructor === ArrayBuffer
            ? t(this._binaryDecode(e))
            : "string" == typeof e
            ? t(JSON.parse(e))
            : t({});
        }
        _binaryDecode(e) {
          let t = new DataView(e),
            s = new TextDecoder();
          return this._decodeBroadcast(e, t, s);
        }
        _decodeBroadcast(e, t, s) {
          let i = t.getUint8(1),
            r = t.getUint8(2),
            n = this.HEADER_LENGTH + 2,
            a = s.decode(e.slice(n, n + i));
          n += i;
          let o = s.decode(e.slice(n, n + r));
          return (
            (n += r),
            {
              ref: null,
              topic: a,
              event: o,
              payload: JSON.parse(s.decode(e.slice(n, e.byteLength))),
            }
          );
        }
      }
      class J {
        constructor(e, t, s = {}, i = 1e4) {
          (this.channel = e),
            (this.event = t),
            (this.payload = s),
            (this.timeout = i),
            (this.sent = !1),
            (this.timeoutTimer = void 0),
            (this.ref = ""),
            (this.receivedResp = null),
            (this.recHooks = []),
            (this.refEvent = null),
            (this.rateLimited = !1);
        }
        resend(e) {
          (this.timeout = e),
            this._cancelRefEvent(),
            (this.ref = ""),
            (this.refEvent = null),
            (this.receivedResp = null),
            (this.sent = !1),
            this.send();
        }
        send() {
          this._hasReceived("timeout") ||
            (this.startTimeout(),
            (this.sent = !0),
            "rate limited" !==
              this.channel.socket.push({
                topic: this.channel.topic,
                event: this.event,
                payload: this.payload,
                ref: this.ref,
                join_ref: this.channel._joinRef(),
              }) || (this.rateLimited = !0));
        }
        updatePayload(e) {
          this.payload = Object.assign(Object.assign({}, this.payload), e);
        }
        receive(e, t) {
          var s;
          return (
            this._hasReceived(e) &&
              t(
                null === (s = this.receivedResp) || void 0 === s
                  ? void 0
                  : s.response
              ),
            this.recHooks.push({ status: e, callback: t }),
            this
          );
        }
        startTimeout() {
          this.timeoutTimer ||
            ((this.ref = this.channel.socket._makeRef()),
            (this.refEvent = this.channel._replyEventName(this.ref)),
            this.channel._on(this.refEvent, {}, (e) => {
              this._cancelRefEvent(),
                this._cancelTimeout(),
                (this.receivedResp = e),
                this._matchReceive(e);
            }),
            (this.timeoutTimer = setTimeout(() => {
              this.trigger("timeout", {});
            }, this.timeout)));
        }
        trigger(e, t) {
          this.refEvent &&
            this.channel._trigger(this.refEvent, { status: e, response: t });
        }
        destroy() {
          this._cancelRefEvent(), this._cancelTimeout();
        }
        _cancelRefEvent() {
          this.refEvent && this.channel._off(this.refEvent, {});
        }
        _cancelTimeout() {
          clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0);
        }
        _matchReceive({ status: e, response: t }) {
          this.recHooks
            .filter((t) => t.status === e)
            .forEach((e) => e.callback(t));
        }
        _hasReceived(e) {
          return this.receivedResp && this.receivedResp.status === e;
        }
      }
      ((T = p || (p = {})).SYNC = "sync"),
        (T.JOIN = "join"),
        (T.LEAVE = "leave");
      class M {
        constructor(e, t) {
          (this.channel = e),
            (this.state = {}),
            (this.pendingDiffs = []),
            (this.joinRef = null),
            (this.caller = {
              onJoin: () => {},
              onLeave: () => {},
              onSync: () => {},
            });
          let s = (null == t ? void 0 : t.events) || {
            state: "presence_state",
            diff: "presence_diff",
          };
          this.channel._on(s.state, {}, (e) => {
            let { onJoin: t, onLeave: s, onSync: i } = this.caller;
            (this.joinRef = this.channel._joinRef()),
              (this.state = M.syncState(this.state, e, t, s)),
              this.pendingDiffs.forEach((e) => {
                this.state = M.syncDiff(this.state, e, t, s);
              }),
              (this.pendingDiffs = []),
              i();
          }),
            this.channel._on(s.diff, {}, (e) => {
              let { onJoin: t, onLeave: s, onSync: i } = this.caller;
              this.inPendingSyncState()
                ? this.pendingDiffs.push(e)
                : ((this.state = M.syncDiff(this.state, e, t, s)), i());
            }),
            this.onJoin((e, t, s) => {
              this.channel._trigger("presence", {
                event: "join",
                key: e,
                currentPresences: t,
                newPresences: s,
              });
            }),
            this.onLeave((e, t, s) => {
              this.channel._trigger("presence", {
                event: "leave",
                key: e,
                currentPresences: t,
                leftPresences: s,
              });
            }),
            this.onSync(() => {
              this.channel._trigger("presence", { event: "sync" });
            });
        }
        static syncState(e, t, s, i) {
          let r = this.cloneDeep(e),
            n = this.transformState(t),
            a = {},
            o = {};
          return (
            this.map(r, (e, t) => {
              n[e] || (o[e] = t);
            }),
            this.map(n, (e, t) => {
              let s = r[e];
              if (s) {
                let i = t.map((e) => e.presence_ref),
                  r = s.map((e) => e.presence_ref),
                  n = t.filter((e) => 0 > r.indexOf(e.presence_ref)),
                  l = s.filter((e) => 0 > i.indexOf(e.presence_ref));
                n.length > 0 && (a[e] = n), l.length > 0 && (o[e] = l);
              } else a[e] = t;
            }),
            this.syncDiff(r, { joins: a, leaves: o }, s, i)
          );
        }
        static syncDiff(e, t, s, i) {
          let { joins: r, leaves: n } = {
            joins: this.transformState(t.joins),
            leaves: this.transformState(t.leaves),
          };
          return (
            s || (s = () => {}),
            i || (i = () => {}),
            this.map(r, (t, i) => {
              var r;
              let n = null !== (r = e[t]) && void 0 !== r ? r : [];
              if (((e[t] = this.cloneDeep(i)), n.length > 0)) {
                let s = e[t].map((e) => e.presence_ref),
                  i = n.filter((e) => 0 > s.indexOf(e.presence_ref));
                e[t].unshift(...i);
              }
              s(t, n, i);
            }),
            this.map(n, (t, s) => {
              let r = e[t];
              if (!r) return;
              let n = s.map((e) => e.presence_ref);
              (r = r.filter((e) => 0 > n.indexOf(e.presence_ref))),
                (e[t] = r),
                i(t, r, s),
                0 === r.length && delete e[t];
            }),
            e
          );
        }
        static map(e, t) {
          return Object.getOwnPropertyNames(e).map((s) => t(s, e[s]));
        }
        static transformState(e) {
          return Object.getOwnPropertyNames((e = this.cloneDeep(e))).reduce(
            (t, s) => {
              let i = e[s];
              return (
                "metas" in i
                  ? (t[s] = i.metas.map(
                      (e) => (
                        (e.presence_ref = e.phx_ref),
                        delete e.phx_ref,
                        delete e.phx_ref_prev,
                        e
                      )
                    ))
                  : (t[s] = i),
                t
              );
            },
            {}
          );
        }
        static cloneDeep(e) {
          return JSON.parse(JSON.stringify(e));
        }
        onJoin(e) {
          this.caller.onJoin = e;
        }
        onLeave(e) {
          this.caller.onLeave = e;
        }
        onSync(e) {
          this.caller.onSync = e;
        }
        inPendingSyncState() {
          return !this.joinRef || this.joinRef !== this.channel._joinRef();
        }
      }
      ((j = g || (g = {})).abstime = "abstime"),
        (j.bool = "bool"),
        (j.date = "date"),
        (j.daterange = "daterange"),
        (j.float4 = "float4"),
        (j.float8 = "float8"),
        (j.int2 = "int2"),
        (j.int4 = "int4"),
        (j.int4range = "int4range"),
        (j.int8 = "int8"),
        (j.int8range = "int8range"),
        (j.json = "json"),
        (j.jsonb = "jsonb"),
        (j.money = "money"),
        (j.numeric = "numeric"),
        (j.oid = "oid"),
        (j.reltime = "reltime"),
        (j.text = "text"),
        (j.time = "time"),
        (j.timestamp = "timestamp"),
        (j.timestamptz = "timestamptz"),
        (j.timetz = "timetz"),
        (j.tsrange = "tsrange"),
        (j.tstzrange = "tstzrange");
      let z = (e, t, s = {}) => {
          var i;
          let r = null !== (i = s.skipTypes) && void 0 !== i ? i : [];
          return Object.keys(t).reduce(
            (s, i) => ((s[i] = B(i, e, t, r)), s),
            {}
          );
        },
        B = (e, t, s, i) => {
          let r = t.find((t) => t.name === e),
            n = null == r ? void 0 : r.type,
            a = s[e];
          return n && !i.includes(n) ? K(n, a) : G(a);
        },
        K = (e, t) => {
          if ("_" === e.charAt(0)) return Y(t, e.slice(1, e.length));
          switch (e) {
            case g.bool:
              return H(t);
            case g.float4:
            case g.float8:
            case g.int2:
            case g.int4:
            case g.int8:
            case g.numeric:
            case g.oid:
              return V(t);
            case g.json:
            case g.jsonb:
              return W(t);
            case g.timestamp:
              return Q(t);
            case g.abstime:
            case g.date:
            case g.daterange:
            case g.int4range:
            case g.int8range:
            case g.money:
            case g.reltime:
            case g.text:
            case g.time:
            case g.timestamptz:
            case g.timetz:
            case g.tsrange:
            case g.tstzrange:
            default:
              return G(t);
          }
        },
        G = (e) => e,
        H = (e) => {
          switch (e) {
            case "t":
              return !0;
            case "f":
              return !1;
            default:
              return e;
          }
        },
        V = (e) => {
          if ("string" == typeof e) {
            let t = parseFloat(e);
            if (!Number.isNaN(t)) return t;
          }
          return e;
        },
        W = (e) => {
          if ("string" == typeof e)
            try {
              return JSON.parse(e);
            } catch (e) {
              console.log(`JSON parse error: ${e}`);
            }
          return e;
        },
        Y = (e, t) => {
          if ("string" != typeof e) return e;
          let s = e.length - 1,
            i = e[s];
          if ("{" === e[0] && "}" === i) {
            let i;
            let r = e.slice(1, s);
            try {
              i = JSON.parse("[" + r + "]");
            } catch (e) {
              i = r ? r.split(",") : [];
            }
            return i.map((e) => K(t, e));
          }
          return e;
        },
        Q = (e) => ("string" == typeof e ? e.replace(" ", "T") : e);
      ((O = m || (m = {})).ALL = "*"),
        (O.INSERT = "INSERT"),
        (O.UPDATE = "UPDATE"),
        (O.DELETE = "DELETE"),
        ((E = y || (y = {})).BROADCAST = "broadcast"),
        (E.PRESENCE = "presence"),
        (E.POSTGRES_CHANGES = "postgres_changes"),
        (($ = v || (v = {})).SUBSCRIBED = "SUBSCRIBED"),
        ($.TIMED_OUT = "TIMED_OUT"),
        ($.CLOSED = "CLOSED"),
        ($.CHANNEL_ERROR = "CHANNEL_ERROR");
      class X {
        constructor(e, t = { config: {} }, s) {
          (this.topic = e),
            (this.params = t),
            (this.socket = s),
            (this.bindings = {}),
            (this.state = c.closed),
            (this.joinedOnce = !1),
            (this.pushBuffer = []),
            (this.subTopic = e.replace(/^realtime:/i, "")),
            (this.params.config = Object.assign(
              { broadcast: { ack: !1, self: !1 }, presence: { key: "" } },
              t.config
            )),
            (this.timeout = this.socket.timeout),
            (this.joinPush = new J(this, u.join, this.params, this.timeout)),
            (this.rejoinTimer = new F(
              () => this._rejoinUntilConnected(),
              this.socket.reconnectAfterMs
            )),
            this.joinPush.receive("ok", () => {
              (this.state = c.joined),
                this.rejoinTimer.reset(),
                this.pushBuffer.forEach((e) => e.send()),
                (this.pushBuffer = []);
            }),
            this._onClose(() => {
              this.rejoinTimer.reset(),
                this.socket.log(
                  "channel",
                  `close ${this.topic} ${this._joinRef()}`
                ),
                (this.state = c.closed),
                this.socket._remove(this);
            }),
            this._onError((e) => {
              this._isLeaving() ||
                this._isClosed() ||
                (this.socket.log("channel", `error ${this.topic}`, e),
                (this.state = c.errored),
                this.rejoinTimer.scheduleTimeout());
            }),
            this.joinPush.receive("timeout", () => {
              this._isJoining() &&
                (this.socket.log(
                  "channel",
                  `timeout ${this.topic}`,
                  this.joinPush.timeout
                ),
                (this.state = c.errored),
                this.rejoinTimer.scheduleTimeout());
            }),
            this._on(u.reply, {}, (e, t) => {
              this._trigger(this._replyEventName(t), e);
            }),
            (this.presence = new M(this)),
            (this.broadcastEndpointURL = this._broadcastEndpointURL());
        }
        subscribe(e, t = this.timeout) {
          var s, i;
          if (
            (this.socket.isConnected() || this.socket.connect(),
            this.joinedOnce)
          )
            throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
          {
            let {
              config: { broadcast: r, presence: n },
            } = this.params;
            this._onError((t) => e && e("CHANNEL_ERROR", t)),
              this._onClose(() => e && e("CLOSED"));
            let a = {},
              o = {
                broadcast: r,
                presence: n,
                postgres_changes:
                  null !==
                    (i =
                      null === (s = this.bindings.postgres_changes) ||
                      void 0 === s
                        ? void 0
                        : s.map((e) => e.filter)) && void 0 !== i
                    ? i
                    : [],
              };
            this.socket.accessToken &&
              (a.access_token = this.socket.accessToken),
              this.updateJoinPayload(Object.assign({ config: o }, a)),
              (this.joinedOnce = !0),
              this._rejoin(t),
              this.joinPush
                .receive("ok", ({ postgres_changes: t }) => {
                  var s;
                  if (
                    (this.socket.accessToken &&
                      this.socket.setAuth(this.socket.accessToken),
                    void 0 === t)
                  ) {
                    e && e("SUBSCRIBED");
                    return;
                  }
                  {
                    let i = this.bindings.postgres_changes,
                      r =
                        null !== (s = null == i ? void 0 : i.length) &&
                        void 0 !== s
                          ? s
                          : 0,
                      n = [];
                    for (let s = 0; s < r; s++) {
                      let r = i[s],
                        {
                          filter: { event: a, schema: o, table: l, filter: h },
                        } = r,
                        c = t && t[s];
                      if (
                        c &&
                        c.event === a &&
                        c.schema === o &&
                        c.table === l &&
                        c.filter === h
                      )
                        n.push(
                          Object.assign(Object.assign({}, r), { id: c.id })
                        );
                      else {
                        this.unsubscribe(),
                          e &&
                            e(
                              "CHANNEL_ERROR",
                              Error(
                                "mismatch between server and client bindings for postgres changes"
                              )
                            );
                        return;
                      }
                    }
                    (this.bindings.postgres_changes = n), e && e("SUBSCRIBED");
                    return;
                  }
                })
                .receive("error", (t) => {
                  e &&
                    e(
                      "CHANNEL_ERROR",
                      Error(
                        JSON.stringify(Object.values(t).join(", ") || "error")
                      )
                    );
                })
                .receive("timeout", () => {
                  e && e("TIMED_OUT");
                });
          }
          return this;
        }
        presenceState() {
          return this.presence.state;
        }
        async track(e, t = {}) {
          return await this.send(
            { type: "presence", event: "track", payload: e },
            t.timeout || this.timeout
          );
        }
        async untrack(e = {}) {
          return await this.send({ type: "presence", event: "untrack" }, e);
        }
        on(e, t, s) {
          return this._on(e, t, s);
        }
        async send(e, t = {}) {
          var s, i;
          if (this._canPush() || "broadcast" !== e.type)
            return new Promise((s) => {
              var i, r, n;
              let a = this._push(e.type, e, t.timeout || this.timeout);
              a.rateLimited && s("rate limited"),
                "broadcast" !== e.type ||
                  (null ===
                    (n =
                      null ===
                        (r =
                          null === (i = this.params) || void 0 === i
                            ? void 0
                            : i.config) || void 0 === r
                        ? void 0
                        : r.broadcast) || void 0 === n
                    ? void 0
                    : n.ack) ||
                  s("ok"),
                a.receive("ok", () => s("ok")),
                a.receive("timeout", () => s("timed out"));
            });
          {
            let { event: r, payload: n } = e,
              a = {
                method: "POST",
                headers: {
                  apikey:
                    null !== (s = this.socket.accessToken) && void 0 !== s
                      ? s
                      : "",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  messages: [{ topic: this.subTopic, event: r, payload: n }],
                }),
              };
            try {
              if (
                (
                  await this._fetchWithTimeout(
                    this.broadcastEndpointURL,
                    a,
                    null !== (i = t.timeout) && void 0 !== i ? i : this.timeout
                  )
                ).ok
              )
                return "ok";
              return "error";
            } catch (e) {
              if ("AbortError" === e.name) return "timed out";
              return "error";
            }
          }
        }
        updateJoinPayload(e) {
          this.joinPush.updatePayload(e);
        }
        unsubscribe(e = this.timeout) {
          this.state = c.leaving;
          let t = () => {
            this.socket.log("channel", `leave ${this.topic}`),
              this._trigger(u.close, "leave", this._joinRef());
          };
          return (
            this.rejoinTimer.reset(),
            this.joinPush.destroy(),
            new Promise((s) => {
              let i = new J(this, u.leave, {}, e);
              i
                .receive("ok", () => {
                  t(), s("ok");
                })
                .receive("timeout", () => {
                  t(), s("timed out");
                })
                .receive("error", () => {
                  s("error");
                }),
                i.send(),
                this._canPush() || i.trigger("ok", {});
            })
          );
        }
        _broadcastEndpointURL() {
          let e = this.socket.endPoint;
          return (
            (e = (e = e.replace(/^ws/i, "http")).replace(
              /(\/socket\/websocket|\/socket|\/websocket)\/?$/i,
              ""
            )).replace(/\/+$/, "") + "/api/broadcast"
          );
        }
        async _fetchWithTimeout(e, t, s) {
          let i = new AbortController(),
            r = setTimeout(() => i.abort(), s),
            n = await this.socket.fetch(
              e,
              Object.assign(Object.assign({}, t), { signal: i.signal })
            );
          return clearTimeout(r), n;
        }
        _push(e, t, s = this.timeout) {
          if (!this.joinedOnce)
            throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
          let i = new J(this, e, t, s);
          return (
            this._canPush()
              ? i.send()
              : (i.startTimeout(), this.pushBuffer.push(i)),
            i
          );
        }
        _onMessage(e, t, s) {
          return t;
        }
        _isMember(e) {
          return this.topic === e;
        }
        _joinRef() {
          return this.joinPush.ref;
        }
        _trigger(e, t, s) {
          var i, r;
          let n = e.toLocaleLowerCase(),
            { close: a, error: o, leave: l, join: h } = u;
          if (s && [a, o, l, h].indexOf(n) >= 0 && s !== this._joinRef())
            return;
          let c = this._onMessage(n, t, s);
          if (t && !c)
            throw "channel onMessage callbacks must return the payload, modified or unmodified";
          ["insert", "update", "delete"].includes(n)
            ? null === (i = this.bindings.postgres_changes) ||
              void 0 === i ||
              i
                .filter((e) => {
                  var t, s, i;
                  return (
                    (null === (t = e.filter) || void 0 === t
                      ? void 0
                      : t.event) === "*" ||
                    (null ===
                      (i =
                        null === (s = e.filter) || void 0 === s
                          ? void 0
                          : s.event) || void 0 === i
                      ? void 0
                      : i.toLocaleLowerCase()) === n
                  );
                })
                .map((e) => e.callback(c, s))
            : null === (r = this.bindings[n]) ||
              void 0 === r ||
              r
                .filter((e) => {
                  var s, i, r, a, o, l;
                  if (
                    !["broadcast", "presence", "postgres_changes"].includes(n)
                  )
                    return e.type.toLocaleLowerCase() === n;
                  if ("id" in e) {
                    let n = e.id,
                      a =
                        null === (s = e.filter) || void 0 === s
                          ? void 0
                          : s.event;
                    return (
                      n &&
                      (null === (i = t.ids) || void 0 === i
                        ? void 0
                        : i.includes(n)) &&
                      ("*" === a ||
                        (null == a ? void 0 : a.toLocaleLowerCase()) ===
                          (null === (r = t.data) || void 0 === r
                            ? void 0
                            : r.type.toLocaleLowerCase()))
                    );
                  }
                  {
                    let s =
                      null ===
                        (o =
                          null === (a = null == e ? void 0 : e.filter) ||
                          void 0 === a
                            ? void 0
                            : a.event) || void 0 === o
                        ? void 0
                        : o.toLocaleLowerCase();
                    return (
                      "*" === s ||
                      s ===
                        (null === (l = null == t ? void 0 : t.event) ||
                        void 0 === l
                          ? void 0
                          : l.toLocaleLowerCase())
                    );
                  }
                })
                .map((e) => {
                  if ("object" == typeof c && "ids" in c) {
                    let e = c.data,
                      {
                        schema: t,
                        table: s,
                        commit_timestamp: i,
                        type: r,
                        errors: n,
                      } = e;
                    c = Object.assign(
                      Object.assign(
                        {},
                        {
                          schema: t,
                          table: s,
                          commit_timestamp: i,
                          eventType: r,
                          new: {},
                          old: {},
                          errors: n,
                        }
                      ),
                      this._getPayloadRecords(e)
                    );
                  }
                  e.callback(c, s);
                });
        }
        _isClosed() {
          return this.state === c.closed;
        }
        _isJoined() {
          return this.state === c.joined;
        }
        _isJoining() {
          return this.state === c.joining;
        }
        _isLeaving() {
          return this.state === c.leaving;
        }
        _replyEventName(e) {
          return `chan_reply_${e}`;
        }
        _on(e, t, s) {
          let i = e.toLocaleLowerCase(),
            r = { type: i, filter: t, callback: s };
          return (
            this.bindings[i]
              ? this.bindings[i].push(r)
              : (this.bindings[i] = [r]),
            this
          );
        }
        _off(e, t) {
          let s = e.toLocaleLowerCase();
          return (
            (this.bindings[s] = this.bindings[s].filter((e) => {
              var i;
              return !(
                (null === (i = e.type) || void 0 === i
                  ? void 0
                  : i.toLocaleLowerCase()) === s && X.isEqual(e.filter, t)
              );
            })),
            this
          );
        }
        static isEqual(e, t) {
          if (Object.keys(e).length !== Object.keys(t).length) return !1;
          for (let s in e) if (e[s] !== t[s]) return !1;
          return !0;
        }
        _rejoinUntilConnected() {
          this.rejoinTimer.scheduleTimeout(),
            this.socket.isConnected() && this._rejoin();
        }
        _onClose(e) {
          this._on(u.close, {}, e);
        }
        _onError(e) {
          this._on(u.error, {}, (t) => e(t));
        }
        _canPush() {
          return this.socket.isConnected() && this._isJoined();
        }
        _rejoin(e = this.timeout) {
          this._isLeaving() ||
            (this.socket._leaveOpenTopic(this.topic),
            (this.state = c.joining),
            this.joinPush.resend(e));
        }
        _getPayloadRecords(e) {
          let t = { new: {}, old: {} };
          return (
            ("INSERT" === e.type || "UPDATE" === e.type) &&
              (t.new = z(e.columns, e.record)),
            ("UPDATE" === e.type || "DELETE" === e.type) &&
              (t.old = z(e.columns, e.old_record)),
            t
          );
        }
      }
      let Z = () => {};
      class ee {
        constructor(e, t) {
          var i, r;
          (this.accessToken = null),
            (this.channels = []),
            (this.endPoint = ""),
            (this.headers = D),
            (this.params = {}),
            (this.timeout = 1e4),
            (this.transport = N.w3cwebsocket),
            (this.heartbeatIntervalMs = 3e4),
            (this.heartbeatTimer = void 0),
            (this.pendingHeartbeatRef = null),
            (this.ref = 0),
            (this.logger = Z),
            (this.conn = null),
            (this.sendBuffer = []),
            (this.serializer = new q()),
            (this.stateChangeCallbacks = {
              open: [],
              close: [],
              error: [],
              message: [],
            }),
            (this.eventsPerSecondLimitMs = 100),
            (this.inThrottle = !1),
            (this._resolveFetch = (e) => {
              let t;
              return (
                (t =
                  e ||
                  ("undefined" == typeof fetch
                    ? (...e) =>
                        Promise.resolve()
                          .then(s.t.bind(s, 89494, 23))
                          .then(({ default: t }) => t(...e))
                    : fetch)),
                (...e) => t(...e)
              );
            }),
            (this.endPoint = `${e}/${d.websocket}`),
            (null == t ? void 0 : t.params) && (this.params = t.params),
            (null == t ? void 0 : t.headers) &&
              (this.headers = Object.assign(
                Object.assign({}, this.headers),
                t.headers
              )),
            (null == t ? void 0 : t.timeout) && (this.timeout = t.timeout),
            (null == t ? void 0 : t.logger) && (this.logger = t.logger),
            (null == t ? void 0 : t.transport) &&
              (this.transport = t.transport),
            (null == t ? void 0 : t.heartbeatIntervalMs) &&
              (this.heartbeatIntervalMs = t.heartbeatIntervalMs);
          let n =
            null === (i = null == t ? void 0 : t.params) || void 0 === i
              ? void 0
              : i.eventsPerSecond;
          n && (this.eventsPerSecondLimitMs = Math.floor(1e3 / n));
          let a =
            null === (r = null == t ? void 0 : t.params) || void 0 === r
              ? void 0
              : r.apikey;
          a && (this.accessToken = a),
            (this.reconnectAfterMs = (null == t ? void 0 : t.reconnectAfterMs)
              ? t.reconnectAfterMs
              : (e) => [1e3, 2e3, 5e3, 1e4][e - 1] || 1e4),
            (this.encode = (null == t ? void 0 : t.encode)
              ? t.encode
              : (e, t) => t(JSON.stringify(e))),
            (this.decode = (null == t ? void 0 : t.decode)
              ? t.decode
              : this.serializer.decode.bind(this.serializer)),
            (this.reconnectTimer = new F(async () => {
              this.disconnect(), this.connect();
            }, this.reconnectAfterMs)),
            (this.fetch = this._resolveFetch(null == t ? void 0 : t.fetch));
        }
        connect() {
          !this.conn &&
            ((this.conn = new this.transport(
              this._endPointURL(),
              [],
              null,
              this.headers
            )),
            this.conn &&
              ((this.conn.binaryType = "arraybuffer"),
              (this.conn.onopen = () => this._onConnOpen()),
              (this.conn.onerror = (e) => this._onConnError(e)),
              (this.conn.onmessage = (e) => this._onConnMessage(e)),
              (this.conn.onclose = (e) => this._onConnClose(e))));
        }
        disconnect(e, t) {
          this.conn &&
            ((this.conn.onclose = function () {}),
            e ? this.conn.close(e, null != t ? t : "") : this.conn.close(),
            (this.conn = null),
            this.heartbeatTimer && clearInterval(this.heartbeatTimer),
            this.reconnectTimer.reset());
        }
        getChannels() {
          return this.channels;
        }
        async removeChannel(e) {
          let t = await e.unsubscribe();
          return 0 === this.channels.length && this.disconnect(), t;
        }
        async removeAllChannels() {
          let e = await Promise.all(this.channels.map((e) => e.unsubscribe()));
          return this.disconnect(), e;
        }
        log(e, t, s) {
          this.logger(e, t, s);
        }
        connectionState() {
          switch (this.conn && this.conn.readyState) {
            case h.connecting:
              return f.Connecting;
            case h.open:
              return f.Open;
            case h.closing:
              return f.Closing;
            default:
              return f.Closed;
          }
        }
        isConnected() {
          return this.connectionState() === f.Open;
        }
        channel(e, t = { config: {} }) {
          let s = new X(`realtime:${e}`, t, this);
          return this.channels.push(s), s;
        }
        push(e) {
          let { topic: t, event: s, payload: i, ref: r } = e,
            n = () => {
              this.encode(e, (e) => {
                var t;
                null === (t = this.conn) || void 0 === t || t.send(e);
              });
            };
          if ((this.log("push", `${t} ${s} (${r})`, i), this.isConnected())) {
            if (["broadcast", "presence", "postgres_changes"].includes(s)) {
              if (this._throttle(n)()) return "rate limited";
            } else n();
          } else this.sendBuffer.push(n);
        }
        setAuth(e) {
          (this.accessToken = e),
            this.channels.forEach((t) => {
              e && t.updateJoinPayload({ access_token: e }),
                t.joinedOnce &&
                  t._isJoined() &&
                  t._push(u.access_token, { access_token: e });
            });
        }
        _makeRef() {
          let e = this.ref + 1;
          return (
            e === this.ref ? (this.ref = 0) : (this.ref = e),
            this.ref.toString()
          );
        }
        _leaveOpenTopic(e) {
          let t = this.channels.find(
            (t) => t.topic === e && (t._isJoined() || t._isJoining())
          );
          t &&
            (this.log("transport", `leaving duplicate topic "${e}"`),
            t.unsubscribe());
        }
        _remove(e) {
          this.channels = this.channels.filter(
            (t) => t._joinRef() !== e._joinRef()
          );
        }
        _endPointURL() {
          return this._appendParams(
            this.endPoint,
            Object.assign({}, this.params, { vsn: "1.0.0" })
          );
        }
        _onConnMessage(e) {
          this.decode(e.data, (e) => {
            let { topic: t, event: s, payload: i, ref: r } = e;
            ((r && r === this.pendingHeartbeatRef) ||
              s === (null == i ? void 0 : i.type)) &&
              (this.pendingHeartbeatRef = null),
              this.log(
                "receive",
                `${i.status || ""} ${t} ${s} ${(r && "(" + r + ")") || ""}`,
                i
              ),
              this.channels
                .filter((e) => e._isMember(t))
                .forEach((e) => e._trigger(s, i, r)),
              this.stateChangeCallbacks.message.forEach((t) => t(e));
          });
        }
        _onConnOpen() {
          this.log("transport", `connected to ${this._endPointURL()}`),
            this._flushSendBuffer(),
            this.reconnectTimer.reset(),
            this.heartbeatTimer && clearInterval(this.heartbeatTimer),
            (this.heartbeatTimer = setInterval(
              () => this._sendHeartbeat(),
              this.heartbeatIntervalMs
            )),
            this.stateChangeCallbacks.open.forEach((e) => e());
        }
        _onConnClose(e) {
          this.log("transport", "close", e),
            this._triggerChanError(),
            this.heartbeatTimer && clearInterval(this.heartbeatTimer),
            this.reconnectTimer.scheduleTimeout(),
            this.stateChangeCallbacks.close.forEach((t) => t(e));
        }
        _onConnError(e) {
          this.log("transport", e.message),
            this._triggerChanError(),
            this.stateChangeCallbacks.error.forEach((t) => t(e));
        }
        _triggerChanError() {
          this.channels.forEach((e) => e._trigger(u.error));
        }
        _appendParams(e, t) {
          if (0 === Object.keys(t).length) return e;
          let s = e.match(/\?/) ? "&" : "?",
            i = new URLSearchParams(t);
          return `${e}${s}${i}`;
        }
        _flushSendBuffer() {
          this.isConnected() &&
            this.sendBuffer.length > 0 &&
            (this.sendBuffer.forEach((e) => e()), (this.sendBuffer = []));
        }
        _sendHeartbeat() {
          var e;
          if (this.isConnected()) {
            if (this.pendingHeartbeatRef) {
              (this.pendingHeartbeatRef = null),
                this.log(
                  "transport",
                  "heartbeat timeout. Attempting to re-establish connection"
                ),
                null === (e = this.conn) ||
                  void 0 === e ||
                  e.close(1e3, "hearbeat timeout");
              return;
            }
            (this.pendingHeartbeatRef = this._makeRef()),
              this.push({
                topic: "phoenix",
                event: "heartbeat",
                payload: {},
                ref: this.pendingHeartbeatRef,
              }),
              this.setAuth(this.accessToken);
          }
        }
        _throttle(e, t = this.eventsPerSecondLimitMs) {
          return () =>
            !!this.inThrottle ||
            (e(),
            t > 0 &&
              ((this.inThrottle = !0),
              setTimeout(() => {
                this.inThrottle = !1;
              }, t)),
            !1);
        }
      }
      class et extends Error {
        constructor(e) {
          super(e), (this.__isStorageError = !0), (this.name = "StorageError");
        }
      }
      function es(e) {
        return "object" == typeof e && null !== e && "__isStorageError" in e;
      }
      class ei extends et {
        constructor(e, t) {
          super(e), (this.name = "StorageApiError"), (this.status = t);
        }
        toJSON() {
          return {
            name: this.name,
            message: this.message,
            status: this.status,
          };
        }
      }
      class er extends et {
        constructor(e, t) {
          super(e),
            (this.name = "StorageUnknownError"),
            (this.originalError = t);
        }
      }
      let en = (e) => {
          let t;
          return (
            (t =
              e ||
              ("undefined" == typeof fetch
                ? (...e) =>
                    Promise.resolve()
                      .then(s.t.bind(s, 89494, 23))
                      .then(({ default: t }) => t(...e))
                : fetch)),
            (...e) => t(...e)
          );
        },
        ea = () => {
          var e, t, i, r;
          return (
            (e = void 0),
            (t = void 0),
            (i = void 0),
            (r = function* () {
              return "undefined" == typeof Response
                ? (yield Promise.resolve().then(s.t.bind(s, 89494, 23)))
                    .Response
                : Response;
            }),
            new (i || (i = Promise))(function (s, n) {
              function a(e) {
                try {
                  l(r.next(e));
                } catch (e) {
                  n(e);
                }
              }
              function o(e) {
                try {
                  l(r.throw(e));
                } catch (e) {
                  n(e);
                }
              }
              function l(e) {
                var t;
                e.done
                  ? s(e.value)
                  : ((t = e.value) instanceof i
                      ? t
                      : new i(function (e) {
                          e(t);
                        })
                    ).then(a, o);
              }
              l((r = r.apply(e, t || [])).next());
            })
          );
        };
      var eo = function (e, t, s, i) {
        return new (s || (s = Promise))(function (r, n) {
          function a(e) {
            try {
              l(i.next(e));
            } catch (e) {
              n(e);
            }
          }
          function o(e) {
            try {
              l(i.throw(e));
            } catch (e) {
              n(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? r(e.value)
              : ((t = e.value) instanceof s
                  ? t
                  : new s(function (e) {
                      e(t);
                    })
                ).then(a, o);
          }
          l((i = i.apply(e, t || [])).next());
        });
      };
      let el = (e) =>
          e.msg ||
          e.message ||
          e.error_description ||
          e.error ||
          JSON.stringify(e),
        eh = (e, t) =>
          eo(void 0, void 0, void 0, function* () {
            e instanceof (yield ea())
              ? e
                  .json()
                  .then((s) => {
                    t(new ei(el(s), e.status || 500));
                  })
                  .catch((e) => {
                    t(new er(el(e), e));
                  })
              : t(new er(el(e), e));
          }),
        ec = (e, t, s, i) => {
          let r = {
            method: e,
            headers: (null == t ? void 0 : t.headers) || {},
          };
          return "GET" === e
            ? r
            : ((r.headers = Object.assign(
                { "Content-Type": "application/json" },
                null == t ? void 0 : t.headers
              )),
              (r.body = JSON.stringify(i)),
              Object.assign(Object.assign({}, r), s));
        };
      function eu(e, t, s, i, r, n) {
        return eo(this, void 0, void 0, function* () {
          return new Promise((a, o) => {
            e(s, ec(t, i, r, n))
              .then((e) => {
                if (!e.ok) throw e;
                return (null == i ? void 0 : i.noResolveJson) ? e : e.json();
              })
              .then((e) => a(e))
              .catch((e) => eh(e, o));
          });
        });
      }
      function ed(e, t, s, i) {
        return eo(this, void 0, void 0, function* () {
          return eu(e, "GET", t, s, i);
        });
      }
      function ef(e, t, s, i, r) {
        return eo(this, void 0, void 0, function* () {
          return eu(e, "POST", t, i, r, s);
        });
      }
      function ep(e, t, s, i, r) {
        return eo(this, void 0, void 0, function* () {
          return eu(e, "DELETE", t, i, r, s);
        });
      }
      var eg = function (e, t, s, i) {
        return new (s || (s = Promise))(function (r, n) {
          function a(e) {
            try {
              l(i.next(e));
            } catch (e) {
              n(e);
            }
          }
          function o(e) {
            try {
              l(i.throw(e));
            } catch (e) {
              n(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? r(e.value)
              : ((t = e.value) instanceof s
                  ? t
                  : new s(function (e) {
                      e(t);
                    })
                ).then(a, o);
          }
          l((i = i.apply(e, t || [])).next());
        });
      };
      let em = {
          limit: 100,
          offset: 0,
          sortBy: { column: "name", order: "asc" },
        },
        ey = {
          cacheControl: "3600",
          contentType: "text/plain;charset=UTF-8",
          upsert: !1,
        };
      class ev {
        constructor(e, t = {}, s, i) {
          (this.url = e),
            (this.headers = t),
            (this.bucketId = s),
            (this.fetch = en(i));
        }
        uploadOrUpdate(e, t, s, i) {
          return eg(this, void 0, void 0, function* () {
            try {
              let r;
              let n = Object.assign(Object.assign({}, ey), i),
                a = Object.assign(
                  Object.assign({}, this.headers),
                  "POST" === e && { "x-upsert": String(n.upsert) }
                );
              "undefined" != typeof Blob && s instanceof Blob
                ? ((r = new FormData()).append("cacheControl", n.cacheControl),
                  r.append("", s))
                : "undefined" != typeof FormData && s instanceof FormData
                ? (r = s).append("cacheControl", n.cacheControl)
                : ((r = s),
                  (a["cache-control"] = `max-age=${n.cacheControl}`),
                  (a["content-type"] = n.contentType));
              let o = this._removeEmptyFolders(t),
                l = this._getFinalPath(o),
                h = yield this.fetch(
                  `${this.url}/object/${l}`,
                  Object.assign(
                    { method: e, body: r, headers: a },
                    (null == n ? void 0 : n.duplex) ? { duplex: n.duplex } : {}
                  )
                );
              if (h.ok) return { data: { path: o }, error: null };
              {
                let e = yield h.json();
                return { data: null, error: e };
              }
            } catch (e) {
              if (es(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        upload(e, t, s) {
          return eg(this, void 0, void 0, function* () {
            return this.uploadOrUpdate("POST", e, t, s);
          });
        }
        uploadToSignedUrl(e, t, s, i) {
          return eg(this, void 0, void 0, function* () {
            let r = this._removeEmptyFolders(e),
              n = this._getFinalPath(r),
              a = new URL(this.url + `/object/upload/sign/${n}`);
            a.searchParams.set("token", t);
            try {
              let e;
              let t = Object.assign({ upsert: ey.upsert }, i),
                n = Object.assign(Object.assign({}, this.headers), {
                  "x-upsert": String(t.upsert),
                });
              "undefined" != typeof Blob && s instanceof Blob
                ? ((e = new FormData()).append("cacheControl", t.cacheControl),
                  e.append("", s))
                : "undefined" != typeof FormData && s instanceof FormData
                ? (e = s).append("cacheControl", t.cacheControl)
                : ((e = s),
                  (n["cache-control"] = `max-age=${t.cacheControl}`),
                  (n["content-type"] = t.contentType));
              let o = yield this.fetch(a.toString(), {
                method: "PUT",
                body: e,
                headers: n,
              });
              if (o.ok) return { data: { path: r }, error: null };
              {
                let e = yield o.json();
                return { data: null, error: e };
              }
            } catch (e) {
              if (es(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        createSignedUploadUrl(e) {
          return eg(this, void 0, void 0, function* () {
            try {
              let t = this._getFinalPath(e),
                s = yield ef(
                  this.fetch,
                  `${this.url}/object/upload/sign/${t}`,
                  {},
                  { headers: this.headers }
                ),
                i = new URL(this.url + s.url),
                r = i.searchParams.get("token");
              if (!r) throw new et("No token returned by API");
              return {
                data: { signedUrl: i.toString(), path: e, token: r },
                error: null,
              };
            } catch (e) {
              if (es(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        update(e, t, s) {
          return eg(this, void 0, void 0, function* () {
            return this.uploadOrUpdate("PUT", e, t, s);
          });
        }
        move(e, t) {
          return eg(this, void 0, void 0, function* () {
            try {
              return {
                data: yield ef(
                  this.fetch,
                  `${this.url}/object/move`,
                  { bucketId: this.bucketId, sourceKey: e, destinationKey: t },
                  { headers: this.headers }
                ),
                error: null,
              };
            } catch (e) {
              if (es(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        copy(e, t) {
          return eg(this, void 0, void 0, function* () {
            try {
              return {
                data: {
                  path: (yield ef(
                    this.fetch,
                    `${this.url}/object/copy`,
                    {
                      bucketId: this.bucketId,
                      sourceKey: e,
                      destinationKey: t,
                    },
                    { headers: this.headers }
                  )).Key,
                },
                error: null,
              };
            } catch (e) {
              if (es(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        createSignedUrl(e, t, s) {
          return eg(this, void 0, void 0, function* () {
            try {
              let i = this._getFinalPath(e),
                r = yield ef(
                  this.fetch,
                  `${this.url}/object/sign/${i}`,
                  Object.assign(
                    { expiresIn: t },
                    (null == s ? void 0 : s.transform)
                      ? { transform: s.transform }
                      : {}
                  ),
                  { headers: this.headers }
                ),
                n = (null == s ? void 0 : s.download)
                  ? `&download=${!0 === s.download ? "" : s.download}`
                  : "";
              return {
                data: (r = {
                  signedUrl: encodeURI(`${this.url}${r.signedURL}${n}`),
                }),
                error: null,
              };
            } catch (e) {
              if (es(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        createSignedUrls(e, t, s) {
          return eg(this, void 0, void 0, function* () {
            try {
              let i = yield ef(
                  this.fetch,
                  `${this.url}/object/sign/${this.bucketId}`,
                  { expiresIn: t, paths: e },
                  { headers: this.headers }
                ),
                r = (null == s ? void 0 : s.download)
                  ? `&download=${!0 === s.download ? "" : s.download}`
                  : "";
              return {
                data: i.map((e) =>
                  Object.assign(Object.assign({}, e), {
                    signedUrl: e.signedURL
                      ? encodeURI(`${this.url}${e.signedURL}${r}`)
                      : null,
                  })
                ),
                error: null,
              };
            } catch (e) {
              if (es(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        download(e, t) {
          return eg(this, void 0, void 0, function* () {
            let s = void 0 !== (null == t ? void 0 : t.transform),
              i = this.transformOptsToQueryString(
                (null == t ? void 0 : t.transform) || {}
              ),
              r = i ? `?${i}` : "";
            try {
              let t = this._getFinalPath(e),
                i = yield ed(
                  this.fetch,
                  `${this.url}/${
                    s ? "render/image/authenticated" : "object"
                  }/${t}${r}`,
                  { headers: this.headers, noResolveJson: !0 }
                );
              return { data: yield i.blob(), error: null };
            } catch (e) {
              if (es(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        getPublicUrl(e, t) {
          let s = this._getFinalPath(e),
            i = [],
            r = (null == t ? void 0 : t.download)
              ? `download=${!0 === t.download ? "" : t.download}`
              : "";
          "" !== r && i.push(r);
          let n = void 0 !== (null == t ? void 0 : t.transform),
            a = this.transformOptsToQueryString(
              (null == t ? void 0 : t.transform) || {}
            );
          "" !== a && i.push(a);
          let o = i.join("&");
          return (
            "" !== o && (o = `?${o}`),
            {
              data: {
                publicUrl: encodeURI(
                  `${this.url}/${n ? "render/image" : "object"}/public/${s}${o}`
                ),
              },
            }
          );
        }
        remove(e) {
          return eg(this, void 0, void 0, function* () {
            try {
              return {
                data: yield ep(
                  this.fetch,
                  `${this.url}/object/${this.bucketId}`,
                  { prefixes: e },
                  { headers: this.headers }
                ),
                error: null,
              };
            } catch (e) {
              if (es(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        list(e, t, s) {
          return eg(this, void 0, void 0, function* () {
            try {
              let i = Object.assign(Object.assign(Object.assign({}, em), t), {
                prefix: e || "",
              });
              return {
                data: yield ef(
                  this.fetch,
                  `${this.url}/object/list/${this.bucketId}`,
                  i,
                  { headers: this.headers },
                  s
                ),
                error: null,
              };
            } catch (e) {
              if (es(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        _getFinalPath(e) {
          return `${this.bucketId}/${e}`;
        }
        _removeEmptyFolders(e) {
          return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
        }
        transformOptsToQueryString(e) {
          let t = [];
          return (
            e.width && t.push(`width=${e.width}`),
            e.height && t.push(`height=${e.height}`),
            e.resize && t.push(`resize=${e.resize}`),
            e.format && t.push(`format=${e.format}`),
            e.quality && t.push(`quality=${e.quality}`),
            t.join("&")
          );
        }
      }
      let e_ = { "X-Client-Info": "storage-js/2.5.4" };
      var eb = function (e, t, s, i) {
        return new (s || (s = Promise))(function (r, n) {
          function a(e) {
            try {
              l(i.next(e));
            } catch (e) {
              n(e);
            }
          }
          function o(e) {
            try {
              l(i.throw(e));
            } catch (e) {
              n(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? r(e.value)
              : ((t = e.value) instanceof s
                  ? t
                  : new s(function (e) {
                      e(t);
                    })
                ).then(a, o);
          }
          l((i = i.apply(e, t || [])).next());
        });
      };
      class ew {
        constructor(e, t = {}, s) {
          (this.url = e),
            (this.headers = Object.assign(Object.assign({}, e_), t)),
            (this.fetch = en(s));
        }
        listBuckets() {
          return eb(this, void 0, void 0, function* () {
            try {
              return {
                data: yield ed(this.fetch, `${this.url}/bucket`, {
                  headers: this.headers,
                }),
                error: null,
              };
            } catch (e) {
              if (es(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        getBucket(e) {
          return eb(this, void 0, void 0, function* () {
            try {
              return {
                data: yield ed(this.fetch, `${this.url}/bucket/${e}`, {
                  headers: this.headers,
                }),
                error: null,
              };
            } catch (e) {
              if (es(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        createBucket(e, t = { public: !1 }) {
          return eb(this, void 0, void 0, function* () {
            try {
              return {
                data: yield ef(
                  this.fetch,
                  `${this.url}/bucket`,
                  {
                    id: e,
                    name: e,
                    public: t.public,
                    file_size_limit: t.fileSizeLimit,
                    allowed_mime_types: t.allowedMimeTypes,
                  },
                  { headers: this.headers }
                ),
                error: null,
              };
            } catch (e) {
              if (es(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        updateBucket(e, t) {
          return eb(this, void 0, void 0, function* () {
            try {
              return {
                data: yield (function (e, t, s, i, r) {
                  return eo(this, void 0, void 0, function* () {
                    return eu(e, "PUT", t, i, void 0, s);
                  });
                })(
                  this.fetch,
                  `${this.url}/bucket/${e}`,
                  {
                    id: e,
                    name: e,
                    public: t.public,
                    file_size_limit: t.fileSizeLimit,
                    allowed_mime_types: t.allowedMimeTypes,
                  },
                  { headers: this.headers }
                ),
                error: null,
              };
            } catch (e) {
              if (es(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        emptyBucket(e) {
          return eb(this, void 0, void 0, function* () {
            try {
              return {
                data: yield ef(
                  this.fetch,
                  `${this.url}/bucket/${e}/empty`,
                  {},
                  { headers: this.headers }
                ),
                error: null,
              };
            } catch (e) {
              if (es(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        deleteBucket(e) {
          return eb(this, void 0, void 0, function* () {
            try {
              return {
                data: yield ep(
                  this.fetch,
                  `${this.url}/bucket/${e}`,
                  {},
                  { headers: this.headers }
                ),
                error: null,
              };
            } catch (e) {
              if (es(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
      }
      class ek extends ew {
        constructor(e, t = {}, s) {
          super(e, t, s);
        }
        from(e) {
          return new ev(this.url, this.headers, e, this.fetch);
        }
      }
      let eS = "";
      eS =
        "undefined" != typeof Deno
          ? "deno"
          : "undefined" != typeof document
          ? "web"
          : "undefined" != typeof navigator &&
            "ReactNative" === navigator.product
          ? "react-native"
          : "node";
      let eT = { "X-Client-Info": `supabase-js-${eS}/2.38.0` },
        ej = (e) => {
          let t;
          return (
            (t = e || ("undefined" == typeof fetch ? x() : fetch)),
            (...e) => t(...e)
          );
        },
        eO = () => ("undefined" == typeof Headers ? P.Headers : Headers),
        eE = (e, t, s) => {
          let i = ej(s),
            r = eO();
          return (s, n) => {
            var a, o, l, h;
            return (
              (a = void 0),
              (o = void 0),
              (l = void 0),
              (h = function* () {
                var a;
                let o = null !== (a = yield t()) && void 0 !== a ? a : e,
                  l = new r(null == n ? void 0 : n.headers);
                return (
                  l.has("apikey") || l.set("apikey", e),
                  l.has("Authorization") ||
                    l.set("Authorization", `Bearer ${o}`),
                  i(s, Object.assign(Object.assign({}, n), { headers: l }))
                );
              }),
              new (l || (l = Promise))(function (e, t) {
                function s(e) {
                  try {
                    r(h.next(e));
                  } catch (e) {
                    t(e);
                  }
                }
                function i(e) {
                  try {
                    r(h.throw(e));
                  } catch (e) {
                    t(e);
                  }
                }
                function r(t) {
                  var r;
                  t.done
                    ? e(t.value)
                    : ((r = t.value) instanceof l
                        ? r
                        : new l(function (e) {
                            e(r);
                          })
                      ).then(s, i);
                }
                r((h = h.apply(a, o || [])).next());
              })
            );
          };
        },
        e$ = () => "undefined" != typeof document,
        eP = { tested: !1, writable: !1 },
        ex = () => {
          if (!e$()) return !1;
          try {
            if ("object" != typeof globalThis.localStorage) return !1;
          } catch (e) {
            return !1;
          }
          if (eP.tested) return eP.writable;
          let e = `lswt-${Math.random()}${Math.random()}`;
          try {
            globalThis.localStorage.setItem(e, e),
              globalThis.localStorage.removeItem(e),
              (eP.tested = !0),
              (eP.writable = !0);
          } catch (e) {
            (eP.tested = !0), (eP.writable = !1);
          }
          return eP.writable;
        };
      function eC(e) {
        let t = {},
          s = new URL(e);
        if (s.hash && "#" === s.hash[0])
          try {
            new URLSearchParams(s.hash.substring(1)).forEach((e, s) => {
              t[s] = e;
            });
          } catch (e) {}
        return (
          s.searchParams.forEach((e, s) => {
            t[s] = e;
          }),
          t
        );
      }
      let eR = (e) => {
          let t;
          return (
            (t =
              e ||
              ("undefined" == typeof fetch
                ? (...e) =>
                    Promise.resolve()
                      .then(s.t.bind(s, 89494, 23))
                      .then(({ default: t }) => t(...e))
                : fetch)),
            (...e) => t(...e)
          );
        },
        eA = (e) =>
          "object" == typeof e &&
          null !== e &&
          "status" in e &&
          "ok" in e &&
          "json" in e &&
          "function" == typeof e.json,
        eI = async (e, t, s) => {
          await e.setItem(t, JSON.stringify(s));
        },
        eL = async (e, t) => {
          let s = await e.getItem(t);
          if (!s) return null;
          try {
            return JSON.parse(s);
          } catch (e) {
            return s;
          }
        },
        eU = async (e, t) => {
          await e.removeItem(t);
        };
      class eN {
        constructor() {
          this.promise = new eN.promiseConstructor((e, t) => {
            (this.resolve = e), (this.reject = t);
          });
        }
      }
      function eD(e) {
        let t = e.split(".");
        if (3 !== t.length)
          throw Error("JWT is not valid: not a JWT structure");
        if (
          !/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i.test(
            t[1]
          )
        )
          throw Error("JWT is not valid: payload is not in base64url format");
        return JSON.parse(
          (function (e) {
            let t, s, i, r, n, a, o;
            let l =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
              h = "",
              c = 0;
            for (e = e.replace("-", "+").replace("_", "/"); c < e.length; )
              (r = l.indexOf(e.charAt(c++))),
                (n = l.indexOf(e.charAt(c++))),
                (a = l.indexOf(e.charAt(c++))),
                (o = l.indexOf(e.charAt(c++))),
                (t = (r << 2) | (n >> 4)),
                (s = ((15 & n) << 4) | (a >> 2)),
                (i = ((3 & a) << 6) | o),
                (h += String.fromCharCode(t)),
                64 != a && 0 != s && (h += String.fromCharCode(s)),
                64 != o && 0 != i && (h += String.fromCharCode(i));
            return h;
          })(t[1])
        );
      }
      async function eF(e) {
        return await new Promise((t) => {
          setTimeout(() => t(null), e);
        });
      }
      function eq(e) {
        return ("0" + e.toString(16)).substr(-2);
      }
      function eJ() {
        let e = new Uint32Array(56);
        if ("undefined" == typeof crypto) {
          let e =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
            t = e.length,
            s = "";
          for (let i = 0; i < 56; i++)
            s += e.charAt(Math.floor(Math.random() * t));
          return s;
        }
        return crypto.getRandomValues(e), Array.from(e, eq).join("");
      }
      async function eM(e) {
        let t = new TextEncoder().encode(e),
          s = await crypto.subtle.digest("SHA-256", t);
        return Array.from(new Uint8Array(s))
          .map((e) => String.fromCharCode(e))
          .join("");
      }
      async function ez(e) {
        return "undefined" != typeof crypto &&
          void 0 !== crypto.subtle &&
          "undefined" != typeof TextEncoder
          ? btoa(await eM(e))
              .replace(/\+/g, "-")
              .replace(/\//g, "_")
              .replace(/=+$/, "")
          : (console.warn(
              "WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."
            ),
            e);
      }
      eN.promiseConstructor = Promise;
      class eB extends Error {
        constructor(e, t) {
          super(e),
            (this.__isAuthError = !0),
            (this.name = "AuthError"),
            (this.status = t);
        }
      }
      function eK(e) {
        return "object" == typeof e && null !== e && "__isAuthError" in e;
      }
      class eG extends eB {
        constructor(e, t) {
          super(e, t), (this.name = "AuthApiError"), (this.status = t);
        }
        toJSON() {
          return {
            name: this.name,
            message: this.message,
            status: this.status,
          };
        }
      }
      class eH extends eB {
        constructor(e, t) {
          super(e), (this.name = "AuthUnknownError"), (this.originalError = t);
        }
      }
      class eV extends eB {
        constructor(e, t, s) {
          super(e), (this.name = t), (this.status = s);
        }
        toJSON() {
          return {
            name: this.name,
            message: this.message,
            status: this.status,
          };
        }
      }
      class eW extends eV {
        constructor() {
          super("Auth session missing!", "AuthSessionMissingError", 400);
        }
      }
      class eY extends eV {
        constructor() {
          super(
            "Auth session or user missing",
            "AuthInvalidTokenResponseError",
            500
          );
        }
      }
      class eQ extends eV {
        constructor(e) {
          super(e, "AuthInvalidCredentialsError", 400);
        }
      }
      class eX extends eV {
        constructor(e, t = null) {
          super(e, "AuthImplicitGrantRedirectError", 500),
            (this.details = null),
            (this.details = t);
        }
        toJSON() {
          return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details,
          };
        }
      }
      class eZ extends eV {
        constructor(e, t = null) {
          super(e, "AuthPKCEGrantCodeExchangeError", 500),
            (this.details = null),
            (this.details = t);
        }
        toJSON() {
          return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details,
          };
        }
      }
      class e0 extends eV {
        constructor(e, t) {
          super(e, "AuthRetryableFetchError", t);
        }
      }
      function e1(e) {
        return eK(e) && "AuthRetryableFetchError" === e.name;
      }
      var e4 = function (e, t) {
        var s = {};
        for (var i in e)
          Object.prototype.hasOwnProperty.call(e, i) &&
            0 > t.indexOf(i) &&
            (s[i] = e[i]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var r = 0, i = Object.getOwnPropertySymbols(e);
            r < i.length;
            r++
          )
            0 > t.indexOf(i[r]) &&
              Object.prototype.propertyIsEnumerable.call(e, i[r]) &&
              (s[i[r]] = e[i[r]]);
        return s;
      };
      let e2 = (e) =>
          e.msg ||
          e.message ||
          e.error_description ||
          e.error ||
          JSON.stringify(e),
        e3 = [502, 503, 504];
      async function e5(e) {
        let t;
        if (!eA(e)) throw new e0(e2(e), 0);
        if (e3.includes(e.status)) throw new e0(e2(e), e.status);
        try {
          t = await e.json();
        } catch (e) {
          throw new eH(e2(e), e);
        }
        throw new eG(e2(t), e.status || 500);
      }
      let e8 = (e, t, s, i) => {
        let r = { method: e, headers: (null == t ? void 0 : t.headers) || {} };
        return "GET" === e
          ? r
          : ((r.headers = Object.assign(
              { "Content-Type": "application/json;charset=UTF-8" },
              null == t ? void 0 : t.headers
            )),
            (r.body = JSON.stringify(i)),
            Object.assign(Object.assign({}, r), s));
      };
      async function e6(e, t, s, i) {
        var r;
        let n = Object.assign({}, null == i ? void 0 : i.headers);
        (null == i ? void 0 : i.jwt) && (n.Authorization = `Bearer ${i.jwt}`);
        let a =
          null !== (r = null == i ? void 0 : i.query) && void 0 !== r ? r : {};
        (null == i ? void 0 : i.redirectTo) && (a.redirect_to = i.redirectTo);
        let o = Object.keys(a).length
            ? "?" + new URLSearchParams(a).toString()
            : "",
          l = await e9(
            e,
            t,
            s + o,
            { headers: n, noResolveJson: null == i ? void 0 : i.noResolveJson },
            {},
            null == i ? void 0 : i.body
          );
        return (null == i ? void 0 : i.xform)
          ? null == i
            ? void 0
            : i.xform(l)
          : { data: Object.assign({}, l), error: null };
      }
      async function e9(e, t, s, i, r, n) {
        let a;
        let o = e8(t, i, r, n);
        try {
          a = await e(s, o);
        } catch (e) {
          throw (console.error(e), new e0(e2(e), 0));
        }
        if ((a.ok || (await e5(a)), null == i ? void 0 : i.noResolveJson))
          return a;
        try {
          return await a.json();
        } catch (e) {
          await e5(e);
        }
      }
      function e7(e) {
        var t, s;
        let i = null;
        return (
          e.access_token &&
            e.refresh_token &&
            e.expires_in &&
            ((i = Object.assign({}, e)), !e.expires_at) &&
            (i.expires_at =
              ((s = e.expires_in), Math.round(Date.now() / 1e3) + s)),
          {
            data: {
              session: i,
              user: null !== (t = e.user) && void 0 !== t ? t : e,
            },
            error: null,
          }
        );
      }
      function te(e) {
        var t;
        return {
          data: { user: null !== (t = e.user) && void 0 !== t ? t : e },
          error: null,
        };
      }
      function tt(e) {
        return { data: e, error: null };
      }
      function ts(e) {
        let {
          action_link: t,
          email_otp: s,
          hashed_token: i,
          redirect_to: r,
          verification_type: n,
        } = e;
        return {
          data: {
            properties: {
              action_link: t,
              email_otp: s,
              hashed_token: i,
              redirect_to: r,
              verification_type: n,
            },
            user: Object.assign(
              {},
              e4(e, [
                "action_link",
                "email_otp",
                "hashed_token",
                "redirect_to",
                "verification_type",
              ])
            ),
          },
          error: null,
        };
      }
      function ti(e) {
        return e;
      }
      var tr = function (e, t) {
        var s = {};
        for (var i in e)
          Object.prototype.hasOwnProperty.call(e, i) &&
            0 > t.indexOf(i) &&
            (s[i] = e[i]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var r = 0, i = Object.getOwnPropertySymbols(e);
            r < i.length;
            r++
          )
            0 > t.indexOf(i[r]) &&
              Object.prototype.propertyIsEnumerable.call(e, i[r]) &&
              (s[i[r]] = e[i[r]]);
        return s;
      };
      class tn {
        constructor({ url: e = "", headers: t = {}, fetch: s }) {
          (this.url = e),
            (this.headers = t),
            (this.fetch = eR(s)),
            (this.mfa = {
              listFactors: this._listFactors.bind(this),
              deleteFactor: this._deleteFactor.bind(this),
            });
        }
        async signOut(e, t = "global") {
          try {
            return (
              await e6(this.fetch, "POST", `${this.url}/logout?scope=${t}`, {
                headers: this.headers,
                jwt: e,
                noResolveJson: !0,
              }),
              { data: null, error: null }
            );
          } catch (e) {
            if (eK(e)) return { data: null, error: e };
            throw e;
          }
        }
        async inviteUserByEmail(e, t = {}) {
          try {
            return await e6(this.fetch, "POST", `${this.url}/invite`, {
              body: { email: e, data: t.data },
              headers: this.headers,
              redirectTo: t.redirectTo,
              xform: te,
            });
          } catch (e) {
            if (eK(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        async generateLink(e) {
          try {
            let { options: t } = e,
              s = tr(e, ["options"]),
              i = Object.assign(Object.assign({}, s), t);
            return (
              "newEmail" in s &&
                ((i.new_email = null == s ? void 0 : s.newEmail),
                delete i.newEmail),
              await e6(this.fetch, "POST", `${this.url}/admin/generate_link`, {
                body: i,
                headers: this.headers,
                xform: ts,
                redirectTo: null == t ? void 0 : t.redirectTo,
              })
            );
          } catch (e) {
            if (eK(e))
              return { data: { properties: null, user: null }, error: e };
            throw e;
          }
        }
        async createUser(e) {
          try {
            return await e6(this.fetch, "POST", `${this.url}/admin/users`, {
              body: e,
              headers: this.headers,
              xform: te,
            });
          } catch (e) {
            if (eK(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        async listUsers(e) {
          var t, s, i, r, n, a, o;
          try {
            let l = { nextPage: null, lastPage: 0, total: 0 },
              h = await e6(this.fetch, "GET", `${this.url}/admin/users`, {
                headers: this.headers,
                noResolveJson: !0,
                query: {
                  page:
                    null !==
                      (s =
                        null === (t = null == e ? void 0 : e.page) ||
                        void 0 === t
                          ? void 0
                          : t.toString()) && void 0 !== s
                      ? s
                      : "",
                  per_page:
                    null !==
                      (r =
                        null === (i = null == e ? void 0 : e.perPage) ||
                        void 0 === i
                          ? void 0
                          : i.toString()) && void 0 !== r
                      ? r
                      : "",
                },
                xform: ti,
              });
            if (h.error) throw h.error;
            let c = await h.json(),
              u =
                null !== (n = h.headers.get("x-total-count")) && void 0 !== n
                  ? n
                  : 0,
              d =
                null !==
                  (o =
                    null === (a = h.headers.get("link")) || void 0 === a
                      ? void 0
                      : a.split(",")) && void 0 !== o
                  ? o
                  : [];
            return (
              d.length > 0 &&
                (d.forEach((e) => {
                  let t = parseInt(
                      e.split(";")[0].split("=")[1].substring(0, 1)
                    ),
                    s = JSON.parse(e.split(";")[1].split("=")[1]);
                  l[`${s}Page`] = t;
                }),
                (l.total = parseInt(u))),
              { data: Object.assign(Object.assign({}, c), l), error: null }
            );
          } catch (e) {
            if (eK(e)) return { data: { users: [] }, error: e };
            throw e;
          }
        }
        async getUserById(e) {
          try {
            return await e6(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
              headers: this.headers,
              xform: te,
            });
          } catch (e) {
            if (eK(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        async updateUserById(e, t) {
          try {
            return await e6(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
              body: t,
              headers: this.headers,
              xform: te,
            });
          } catch (e) {
            if (eK(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        async deleteUser(e, t = !1) {
          try {
            return await e6(
              this.fetch,
              "DELETE",
              `${this.url}/admin/users/${e}`,
              {
                headers: this.headers,
                body: { should_soft_delete: t },
                xform: te,
              }
            );
          } catch (e) {
            if (eK(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        async _listFactors(e) {
          try {
            let { data: t, error: s } = await e6(
              this.fetch,
              "GET",
              `${this.url}/admin/users/${e.userId}/factors`,
              {
                headers: this.headers,
                xform: (e) => ({ data: { factors: e }, error: null }),
              }
            );
            return { data: t, error: s };
          } catch (e) {
            if (eK(e)) return { data: null, error: e };
            throw e;
          }
        }
        async _deleteFactor(e) {
          try {
            return {
              data: await e6(
                this.fetch,
                "DELETE",
                `${this.url}/admin/users/${e.userId}/factors/${e.id}`,
                { headers: this.headers }
              ),
              error: null,
            };
          } catch (e) {
            if (eK(e)) return { data: null, error: e };
            throw e;
          }
        }
      }
      let ta = "2.55.0",
        to = { "X-Client-Info": `gotrue-js/${ta}` },
        tl = {
          getItem: (e) => (ex() ? globalThis.localStorage.getItem(e) : null),
          setItem: (e, t) => {
            ex() && globalThis.localStorage.setItem(e, t);
          },
          removeItem: (e) => {
            ex() && globalThis.localStorage.removeItem(e);
          },
        };
      function th(e = {}) {
        return {
          getItem: (t) => e[t] || null,
          setItem: (t, s) => {
            e[t] = s;
          },
          removeItem: (t) => {
            delete e[t];
          },
        };
      }
      globalThis &&
        ex() &&
        globalThis.localStorage &&
        globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug");
      class tc extends Error {
        constructor(e) {
          super(e), (this.isAcquireTimeout = !0);
        }
      }
      !(function () {
        if ("object" != typeof globalThis)
          try {
            Object.defineProperty(Object.prototype, "__magic__", {
              get: function () {
                return this;
              },
              configurable: !0,
            }),
              (__magic__.globalThis = __magic__),
              delete Object.prototype.__magic__;
          } catch (e) {
            "undefined" != typeof self && (self.globalThis = self);
          }
      })();
      let tu = {
        url: "http://localhost:9999",
        storageKey: "supabase.auth.token",
        autoRefreshToken: !0,
        persistSession: !0,
        detectSessionInUrl: !0,
        headers: to,
        flowType: "implicit",
        debug: !1,
      };
      async function td(e, t, s) {
        return await s();
      }
      class tf {
        constructor(e) {
          var t;
          (this.memoryStorage = null),
            (this.stateChangeEmitters = new Map()),
            (this.autoRefreshTicker = null),
            (this.visibilityChangedCallback = null),
            (this.refreshingDeferred = null),
            (this.initializePromise = null),
            (this.detectSessionInUrl = !0),
            (this.lockAcquired = !1),
            (this.pendingInLock = []),
            (this.broadcastChannel = null),
            (this.logger = console.log),
            (this.instanceID = tf.nextInstanceID),
            (tf.nextInstanceID += 1),
            this.instanceID > 0 &&
              e$() &&
              console.warn(
                "Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key."
              );
          let s = Object.assign(Object.assign({}, tu), e);
          if (
            ((this.logDebugMessages = !!s.debug),
            "function" == typeof s.debug && (this.logger = s.debug),
            (this.persistSession = s.persistSession),
            (this.storageKey = s.storageKey),
            (this.autoRefreshToken = s.autoRefreshToken),
            (this.admin = new tn({
              url: s.url,
              headers: s.headers,
              fetch: s.fetch,
            })),
            (this.url = s.url),
            (this.headers = s.headers),
            (this.fetch = eR(s.fetch)),
            (this.lock = s.lock || td),
            (this.detectSessionInUrl = s.detectSessionInUrl),
            (this.flowType = s.flowType),
            (this.mfa = {
              verify: this._verify.bind(this),
              enroll: this._enroll.bind(this),
              unenroll: this._unenroll.bind(this),
              challenge: this._challenge.bind(this),
              listFactors: this._listFactors.bind(this),
              challengeAndVerify: this._challengeAndVerify.bind(this),
              getAuthenticatorAssuranceLevel:
                this._getAuthenticatorAssuranceLevel.bind(this),
            }),
            this.persistSession
              ? s.storage
                ? (this.storage = s.storage)
                : ex()
                ? (this.storage = tl)
                : ((this.memoryStorage = {}),
                  (this.storage = th(this.memoryStorage)))
              : ((this.memoryStorage = {}),
                (this.storage = th(this.memoryStorage))),
            e$() &&
              globalThis.BroadcastChannel &&
              this.persistSession &&
              this.storageKey)
          ) {
            try {
              this.broadcastChannel = new globalThis.BroadcastChannel(
                this.storageKey
              );
            } catch (e) {
              console.error(
                "Failed to create a new BroadcastChannel, multi-tab state changes will not be available",
                e
              );
            }
            null === (t = this.broadcastChannel) ||
              void 0 === t ||
              t.addEventListener("message", async (e) => {
                this._debug(
                  "received broadcast notification from other tab or client",
                  e
                ),
                  await this._notifyAllSubscribers(
                    e.data.event,
                    e.data.session,
                    !1
                  );
              });
          }
          this.initialize();
        }
        _debug(...e) {
          return (
            this.logDebugMessages &&
              this.logger(
                `GoTrueClient@${
                  this.instanceID
                } (${ta}) ${new Date().toISOString()}`,
                ...e
              ),
            this
          );
        }
        async initialize() {
          return (
            this.initializePromise ||
              (this.initializePromise = (async () =>
                await this._acquireLock(
                  -1,
                  async () => await this._initialize()
                ))()),
            await this.initializePromise
          );
        }
        async _initialize() {
          try {
            let e = !!e$() && (await this._isPKCEFlow());
            if (
              (this._debug("#_initialize()", "begin", "is PKCE flow", e),
              e || (this.detectSessionInUrl && this._isImplicitGrantFlow()))
            ) {
              let { data: t, error: s } = await this._getSessionFromURL(e);
              if (s)
                return (
                  this._debug(
                    "#_initialize()",
                    "error detecting session from URL",
                    s
                  ),
                  await this._removeSession(),
                  { error: s }
                );
              let { session: i, redirectType: r } = t;
              return (
                this._debug(
                  "#_initialize()",
                  "detected session in URL",
                  i,
                  "redirect type",
                  r
                ),
                await this._saveSession(i),
                setTimeout(async () => {
                  "recovery" === r
                    ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", i)
                    : await this._notifyAllSubscribers("SIGNED_IN", i);
                }, 0),
                { error: null }
              );
            }
            return await this._recoverAndRefresh(), { error: null };
          } catch (e) {
            if (eK(e)) return { error: e };
            return {
              error: new eH("Unexpected error during initialization", e),
            };
          } finally {
            await this._handleVisibilityChange(),
              this._debug("#_initialize()", "end");
          }
        }
        async signUp(e) {
          var t, s, i;
          try {
            let r;
            if ((await this._removeSession(), "email" in e)) {
              let { email: s, password: i, options: n } = e,
                a = null,
                o = null;
              if ("pkce" === this.flowType) {
                let e = eJ();
                await eI(this.storage, `${this.storageKey}-code-verifier`, e),
                  (a = await ez(e)),
                  (o = e === a ? "plain" : "s256");
              }
              r = await e6(this.fetch, "POST", `${this.url}/signup`, {
                headers: this.headers,
                redirectTo: null == n ? void 0 : n.emailRedirectTo,
                body: {
                  email: s,
                  password: i,
                  data:
                    null !== (t = null == n ? void 0 : n.data) && void 0 !== t
                      ? t
                      : {},
                  gotrue_meta_security: {
                    captcha_token: null == n ? void 0 : n.captchaToken,
                  },
                  code_challenge: a,
                  code_challenge_method: o,
                },
                xform: e7,
              });
            } else if ("phone" in e) {
              let { phone: t, password: n, options: a } = e;
              r = await e6(this.fetch, "POST", `${this.url}/signup`, {
                headers: this.headers,
                body: {
                  phone: t,
                  password: n,
                  data:
                    null !== (s = null == a ? void 0 : a.data) && void 0 !== s
                      ? s
                      : {},
                  channel:
                    null !== (i = null == a ? void 0 : a.channel) &&
                    void 0 !== i
                      ? i
                      : "sms",
                  gotrue_meta_security: {
                    captcha_token: null == a ? void 0 : a.captchaToken,
                  },
                },
                xform: e7,
              });
            } else
              throw new eQ(
                "You must provide either an email or phone number and a password"
              );
            let { data: n, error: a } = r;
            if (a || !n)
              return { data: { user: null, session: null }, error: a };
            let o = n.session,
              l = n.user;
            return (
              n.session &&
                (await this._saveSession(n.session),
                await this._notifyAllSubscribers("SIGNED_IN", o)),
              { data: { user: l, session: o }, error: null }
            );
          } catch (e) {
            if (eK(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async signInWithPassword(e) {
          try {
            let t;
            if ((await this._removeSession(), "email" in e)) {
              let { email: s, password: i, options: r } = e;
              t = await e6(
                this.fetch,
                "POST",
                `${this.url}/token?grant_type=password`,
                {
                  headers: this.headers,
                  body: {
                    email: s,
                    password: i,
                    gotrue_meta_security: {
                      captcha_token: null == r ? void 0 : r.captchaToken,
                    },
                  },
                  xform: e7,
                }
              );
            } else if ("phone" in e) {
              let { phone: s, password: i, options: r } = e;
              t = await e6(
                this.fetch,
                "POST",
                `${this.url}/token?grant_type=password`,
                {
                  headers: this.headers,
                  body: {
                    phone: s,
                    password: i,
                    gotrue_meta_security: {
                      captcha_token: null == r ? void 0 : r.captchaToken,
                    },
                  },
                  xform: e7,
                }
              );
            } else
              throw new eQ(
                "You must provide either an email or phone number and a password"
              );
            let { data: s, error: i } = t;
            if (i) return { data: { user: null, session: null }, error: i };
            if (!s || !s.session || !s.user)
              return { data: { user: null, session: null }, error: new eY() };
            return (
              s.session &&
                (await this._saveSession(s.session),
                await this._notifyAllSubscribers("SIGNED_IN", s.session)),
              { data: { user: s.user, session: s.session }, error: i }
            );
          } catch (e) {
            if (eK(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async signInWithOAuth(e) {
          var t, s, i, r;
          return (
            await this._removeSession(),
            await this._handleProviderSignIn(e.provider, {
              redirectTo:
                null === (t = e.options) || void 0 === t
                  ? void 0
                  : t.redirectTo,
              scopes:
                null === (s = e.options) || void 0 === s ? void 0 : s.scopes,
              queryParams:
                null === (i = e.options) || void 0 === i
                  ? void 0
                  : i.queryParams,
              skipBrowserRedirect:
                null === (r = e.options) || void 0 === r
                  ? void 0
                  : r.skipBrowserRedirect,
            })
          );
        }
        async exchangeCodeForSession(e) {
          return (
            await this.initializePromise,
            this._acquireLock(-1, async () => this._exchangeCodeForSession(e))
          );
        }
        async _exchangeCodeForSession(e) {
          let t = await eL(this.storage, `${this.storageKey}-code-verifier`),
            { data: s, error: i } = await e6(
              this.fetch,
              "POST",
              `${this.url}/token?grant_type=pkce`,
              {
                headers: this.headers,
                body: { auth_code: e, code_verifier: t },
                xform: e7,
              }
            );
          return (await eU(this.storage, `${this.storageKey}-code-verifier`), i)
            ? { data: { user: null, session: null }, error: i }
            : s && s.session && s.user
            ? (s.session &&
                (await this._saveSession(s.session),
                await this._notifyAllSubscribers("SIGNED_IN", s.session)),
              { data: s, error: i })
            : { data: { user: null, session: null }, error: new eY() };
        }
        async signInWithIdToken(e) {
          await this._removeSession();
          try {
            let {
                options: t,
                provider: s,
                token: i,
                access_token: r,
                nonce: n,
              } = e,
              { data: a, error: o } = await e6(
                this.fetch,
                "POST",
                `${this.url}/token?grant_type=id_token`,
                {
                  headers: this.headers,
                  body: {
                    provider: s,
                    id_token: i,
                    access_token: r,
                    nonce: n,
                    gotrue_meta_security: {
                      captcha_token: null == t ? void 0 : t.captchaToken,
                    },
                  },
                  xform: e7,
                }
              );
            if (o) return { data: { user: null, session: null }, error: o };
            if (!a || !a.session || !a.user)
              return { data: { user: null, session: null }, error: new eY() };
            return (
              a.session &&
                (await this._saveSession(a.session),
                await this._notifyAllSubscribers("SIGNED_IN", a.session)),
              { data: a, error: o }
            );
          } catch (e) {
            if (eK(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async signInWithOtp(e) {
          var t, s, i, r, n;
          try {
            if ((await this._removeSession(), "email" in e)) {
              let { email: i, options: r } = e,
                n = null,
                a = null;
              if ("pkce" === this.flowType) {
                let e = eJ();
                await eI(this.storage, `${this.storageKey}-code-verifier`, e),
                  (n = await ez(e)),
                  (a = e === n ? "plain" : "s256");
              }
              let { error: o } = await e6(
                this.fetch,
                "POST",
                `${this.url}/otp`,
                {
                  headers: this.headers,
                  body: {
                    email: i,
                    data:
                      null !== (t = null == r ? void 0 : r.data) && void 0 !== t
                        ? t
                        : {},
                    create_user:
                      null === (s = null == r ? void 0 : r.shouldCreateUser) ||
                      void 0 === s ||
                      s,
                    gotrue_meta_security: {
                      captcha_token: null == r ? void 0 : r.captchaToken,
                    },
                    code_challenge: n,
                    code_challenge_method: a,
                  },
                  redirectTo: null == r ? void 0 : r.emailRedirectTo,
                }
              );
              return { data: { user: null, session: null }, error: o };
            }
            if ("phone" in e) {
              let { phone: t, options: s } = e,
                { data: a, error: o } = await e6(
                  this.fetch,
                  "POST",
                  `${this.url}/otp`,
                  {
                    headers: this.headers,
                    body: {
                      phone: t,
                      data:
                        null !== (i = null == s ? void 0 : s.data) &&
                        void 0 !== i
                          ? i
                          : {},
                      create_user:
                        null ===
                          (r = null == s ? void 0 : s.shouldCreateUser) ||
                        void 0 === r ||
                        r,
                      gotrue_meta_security: {
                        captcha_token: null == s ? void 0 : s.captchaToken,
                      },
                      channel:
                        null !== (n = null == s ? void 0 : s.channel) &&
                        void 0 !== n
                          ? n
                          : "sms",
                    },
                  }
                );
              return {
                data: {
                  user: null,
                  session: null,
                  messageId: null == a ? void 0 : a.message_id,
                },
                error: o,
              };
            }
            throw new eQ("You must provide either an email or phone number.");
          } catch (e) {
            if (eK(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async verifyOtp(e) {
          var t, s;
          try {
            let i, r;
            "email_change" !== e.type &&
              "phone_change" !== e.type &&
              (await this._removeSession()),
              "options" in e &&
                ((i =
                  null === (t = e.options) || void 0 === t
                    ? void 0
                    : t.redirectTo),
                (r =
                  null === (s = e.options) || void 0 === s
                    ? void 0
                    : s.captchaToken));
            let { data: n, error: a } = await e6(
              this.fetch,
              "POST",
              `${this.url}/verify`,
              {
                headers: this.headers,
                body: Object.assign(Object.assign({}, e), {
                  gotrue_meta_security: { captcha_token: r },
                }),
                redirectTo: i,
                xform: e7,
              }
            );
            if (a) throw a;
            if (!n) throw Error("An error occurred on token verification.");
            let o = n.session,
              l = n.user;
            return (
              (null == o ? void 0 : o.access_token) &&
                (await this._saveSession(o),
                await this._notifyAllSubscribers("SIGNED_IN", o)),
              { data: { user: l, session: o }, error: null }
            );
          } catch (e) {
            if (eK(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async signInWithSSO(e) {
          var t, s, i;
          try {
            return (
              await this._removeSession(),
              await e6(this.fetch, "POST", `${this.url}/sso`, {
                body: Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        Object.assign(
                          {},
                          "providerId" in e
                            ? { provider_id: e.providerId }
                            : null
                        ),
                        "domain" in e ? { domain: e.domain } : null
                      ),
                      {
                        redirect_to:
                          null !==
                            (s =
                              null === (t = e.options) || void 0 === t
                                ? void 0
                                : t.redirectTo) && void 0 !== s
                            ? s
                            : void 0,
                      }
                    ),
                    (
                      null === (i = null == e ? void 0 : e.options) ||
                      void 0 === i
                        ? void 0
                        : i.captchaToken
                    )
                      ? {
                          gotrue_meta_security: {
                            captcha_token: e.options.captchaToken,
                          },
                        }
                      : null
                  ),
                  { skip_http_redirect: !0 }
                ),
                headers: this.headers,
                xform: tt,
              })
            );
          } catch (e) {
            if (eK(e)) return { data: null, error: e };
            throw e;
          }
        }
        async reauthenticate() {
          return (
            await this.initializePromise,
            await this._acquireLock(
              -1,
              async () => await this._reauthenticate()
            )
          );
        }
        async _reauthenticate() {
          try {
            return await this._useSession(async (e) => {
              let {
                data: { session: t },
                error: s,
              } = e;
              if (s) throw s;
              if (!t) throw new eW();
              let { error: i } = await e6(
                this.fetch,
                "GET",
                `${this.url}/reauthenticate`,
                { headers: this.headers, jwt: t.access_token }
              );
              return { data: { user: null, session: null }, error: i };
            });
          } catch (e) {
            if (eK(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async resend(e) {
          try {
            "email_change" != e.type &&
              "phone_change" != e.type &&
              (await this._removeSession());
            let t = `${this.url}/resend`;
            if ("email" in e) {
              let { email: s, type: i, options: r } = e,
                { error: n } = await e6(this.fetch, "POST", t, {
                  headers: this.headers,
                  body: {
                    email: s,
                    type: i,
                    gotrue_meta_security: {
                      captcha_token: null == r ? void 0 : r.captchaToken,
                    },
                  },
                  redirectTo: null == r ? void 0 : r.emailRedirectTo,
                });
              return { data: { user: null, session: null }, error: n };
            }
            if ("phone" in e) {
              let { phone: s, type: i, options: r } = e,
                { data: n, error: a } = await e6(this.fetch, "POST", t, {
                  headers: this.headers,
                  body: {
                    phone: s,
                    type: i,
                    gotrue_meta_security: {
                      captcha_token: null == r ? void 0 : r.captchaToken,
                    },
                  },
                });
              return {
                data: {
                  user: null,
                  session: null,
                  messageId: null == n ? void 0 : n.message_id,
                },
                error: a,
              };
            }
            throw new eQ(
              "You must provide either an email or phone number and a type"
            );
          } catch (e) {
            if (eK(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async getSession() {
          return (
            await this.initializePromise,
            this._acquireLock(-1, async () => this._useSession(async (e) => e))
          );
        }
        async _acquireLock(e, t) {
          this._debug("#_acquireLock", "begin", e);
          try {
            if (this.lockAcquired) {
              let e = this.pendingInLock.length
                  ? this.pendingInLock[this.pendingInLock.length - 1]
                  : Promise.resolve(),
                s = (async () => (await e, await t()))();
              return (
                this.pendingInLock.push(
                  (async () => {
                    try {
                      await s;
                    } catch (e) {}
                  })()
                ),
                s
              );
            }
            return await this.lock(`lock:${this.storageKey}`, e, async () => {
              this._debug(
                "#_acquireLock",
                "lock acquired for storage key",
                this.storageKey
              );
              try {
                this.lockAcquired = !0;
                let e = t();
                for (
                  this.pendingInLock.push(
                    (async () => {
                      try {
                        await e;
                      } catch (e) {}
                    })()
                  ),
                    await e;
                  this.pendingInLock.length;

                ) {
                  let e = [...this.pendingInLock];
                  await Promise.all(e), this.pendingInLock.splice(0, e.length);
                }
                return await e;
              } finally {
                this._debug(
                  "#_acquireLock",
                  "lock released for storage key",
                  this.storageKey
                ),
                  (this.lockAcquired = !1);
              }
            });
          } finally {
            this._debug("#_acquireLock", "end");
          }
        }
        async _useSession(e) {
          this._debug("#_useSession", "begin");
          try {
            let t = await this.__loadSession();
            return await e(t);
          } finally {
            this._debug("#_useSession", "end");
          }
        }
        async __loadSession() {
          this._debug("#__loadSession()", "begin"),
            this.lockAcquired ||
              this._debug(
                "#__loadSession()",
                "used outside of an acquired lock!",
                Error().stack
              );
          try {
            let e = null,
              t = await eL(this.storage, this.storageKey);
            if (
              (this._debug("#getSession()", "session from storage", t),
              null !== t &&
                (this._isValidSession(t)
                  ? (e = t)
                  : (this._debug(
                      "#getSession()",
                      "session from storage is not valid"
                    ),
                    await this._removeSession())),
              !e)
            )
              return { data: { session: null }, error: null };
            let s = !!e.expires_at && e.expires_at <= Date.now() / 1e3;
            if (
              (this._debug(
                "#__loadSession()",
                `session has${s ? "" : " not"} expired`,
                "expires_at",
                e.expires_at
              ),
              !s)
            )
              return { data: { session: e }, error: null };
            let { session: i, error: r } = await this._callRefreshToken(
              e.refresh_token
            );
            if (r) return { data: { session: null }, error: r };
            return { data: { session: i }, error: null };
          } finally {
            this._debug("#__loadSession()", "end");
          }
        }
        async getUser(e) {
          return e
            ? await this._getUser(e)
            : (await this.initializePromise,
              this._acquireLock(-1, async () => await this._getUser()));
        }
        async _getUser(e) {
          try {
            if (e)
              return await e6(this.fetch, "GET", `${this.url}/user`, {
                headers: this.headers,
                jwt: e,
                xform: te,
              });
            return await this._useSession(async (e) => {
              var t, s;
              let { data: i, error: r } = e;
              if (r) throw r;
              return await e6(this.fetch, "GET", `${this.url}/user`, {
                headers: this.headers,
                jwt:
                  null !==
                    (s =
                      null === (t = i.session) || void 0 === t
                        ? void 0
                        : t.access_token) && void 0 !== s
                    ? s
                    : void 0,
                xform: te,
              });
            });
          } catch (e) {
            if (eK(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        async updateUser(e, t = {}) {
          return (
            await this.initializePromise,
            await this._acquireLock(
              -1,
              async () => await this._updateUser(e, t)
            )
          );
        }
        async _updateUser(e, t = {}) {
          try {
            return await this._useSession(async (s) => {
              let { data: i, error: r } = s;
              if (r) throw r;
              if (!i.session) throw new eW();
              let n = i.session,
                a = null,
                o = null;
              if ("pkce" === this.flowType && null != e.email) {
                let e = eJ();
                await eI(this.storage, `${this.storageKey}-code-verifier`, e),
                  (a = await ez(e)),
                  (o = e === a ? "plain" : "s256");
              }
              let { data: l, error: h } = await e6(
                this.fetch,
                "PUT",
                `${this.url}/user`,
                {
                  headers: this.headers,
                  redirectTo: null == t ? void 0 : t.emailRedirectTo,
                  body: Object.assign(Object.assign({}, e), {
                    code_challenge: a,
                    code_challenge_method: o,
                  }),
                  jwt: n.access_token,
                  xform: te,
                }
              );
              if (h) throw h;
              return (
                (n.user = l.user),
                await this._saveSession(n),
                await this._notifyAllSubscribers("USER_UPDATED", n),
                { data: { user: n.user }, error: null }
              );
            });
          } catch (e) {
            if (eK(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        _decodeJWT(e) {
          return eD(e);
        }
        async setSession(e) {
          return (
            await this.initializePromise,
            await this._acquireLock(-1, async () => await this._setSession(e))
          );
        }
        async _setSession(e) {
          try {
            if (!e.access_token || !e.refresh_token) throw new eW();
            let t = Date.now() / 1e3,
              s = t,
              i = !0,
              r = null,
              n = eD(e.access_token);
            if ((n.exp && (i = (s = n.exp) <= t), i)) {
              let { session: t, error: s } = await this._callRefreshToken(
                e.refresh_token
              );
              if (s) return { data: { user: null, session: null }, error: s };
              if (!t)
                return { data: { user: null, session: null }, error: null };
              r = t;
            } else {
              let { data: i, error: n } = await this._getUser(e.access_token);
              if (n) throw n;
              (r = {
                access_token: e.access_token,
                refresh_token: e.refresh_token,
                user: i.user,
                token_type: "bearer",
                expires_in: s - t,
                expires_at: s,
              }),
                await this._saveSession(r),
                await this._notifyAllSubscribers("SIGNED_IN", r);
            }
            return { data: { user: r.user, session: r }, error: null };
          } catch (e) {
            if (eK(e)) return { data: { session: null, user: null }, error: e };
            throw e;
          }
        }
        async refreshSession(e) {
          return (
            await this.initializePromise,
            await this._acquireLock(
              -1,
              async () => await this._refreshSession(e)
            )
          );
        }
        async _refreshSession(e) {
          try {
            return await this._useSession(async (t) => {
              var s;
              if (!e) {
                let { data: i, error: r } = t;
                if (r) throw r;
                e = null !== (s = i.session) && void 0 !== s ? s : void 0;
              }
              if (!(null == e ? void 0 : e.refresh_token)) throw new eW();
              let { session: i, error: r } = await this._callRefreshToken(
                e.refresh_token
              );
              return r
                ? { data: { user: null, session: null }, error: r }
                : i
                ? { data: { user: i.user, session: i }, error: null }
                : { data: { user: null, session: null }, error: null };
            });
          } catch (e) {
            if (eK(e)) return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async _getSessionFromURL(e) {
          try {
            if (!e$()) throw new eX("No browser detected.");
            if ("implicit" !== this.flowType || this._isImplicitGrantFlow()) {
              if ("pkce" == this.flowType && !e)
                throw new eZ("Not a valid PKCE flow url.");
            } else throw new eX("Not a valid implicit grant flow url.");
            let t = eC(window.location.href);
            if (e) {
              if (!t.code) throw new eZ("No code detected.");
              let { data: e, error: s } = await this._exchangeCodeForSession(
                t.code
              );
              if (s) throw s;
              let i = new URL(window.location.href);
              return (
                i.searchParams.delete("code"),
                window.history.replaceState(
                  window.history.state,
                  "",
                  i.toString()
                ),
                {
                  data: { session: e.session, redirectType: null },
                  error: null,
                }
              );
            }
            if (t.error || t.error_description || t.error_code)
              throw new eX(
                t.error_description ||
                  "Error in URL with unspecified error_description",
                {
                  error: t.error || "unspecified_error",
                  code: t.error_code || "unspecified_code",
                }
              );
            let {
              provider_token: s,
              provider_refresh_token: i,
              access_token: r,
              refresh_token: n,
              expires_in: a,
              expires_at: o,
              token_type: l,
            } = t;
            if (!r || !a || !n || !l) throw new eX("No session defined in URL");
            let h = Math.round(Date.now() / 1e3),
              c = parseInt(a),
              u = h + c;
            o && (u = parseInt(o));
            let d = u - h;
            1e3 * d <= 3e4 &&
              console.warn(
                `@supabase/gotrue-js: Session as retrieved from URL expires in ${d}s, should have been closer to ${c}s`
              );
            let f = u - c;
            h - f >= 120
              ? console.warn(
                  "@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",
                  f,
                  u,
                  h
                )
              : h - f < 0 &&
                console.warn(
                  "@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clok for skew",
                  f,
                  u,
                  h
                );
            let { data: p, error: g } = await this._getUser(r);
            if (g) throw g;
            let m = {
              provider_token: s,
              provider_refresh_token: i,
              access_token: r,
              expires_in: c,
              expires_at: u,
              refresh_token: n,
              token_type: l,
              user: p.user,
            };
            return (
              (window.location.hash = ""),
              this._debug(
                "#_getSessionFromURL()",
                "clearing window.location.hash"
              ),
              { data: { session: m, redirectType: t.type }, error: null }
            );
          } catch (e) {
            if (eK(e))
              return { data: { session: null, redirectType: null }, error: e };
            throw e;
          }
        }
        _isImplicitGrantFlow() {
          let e = eC(window.location.href);
          return !!(e$() && (e.access_token || e.error_description));
        }
        async _isPKCEFlow() {
          let e = eC(window.location.href),
            t = await eL(this.storage, `${this.storageKey}-code-verifier`);
          return !!(e.code && t);
        }
        async signOut(e = { scope: "global" }) {
          return (
            await this.initializePromise,
            await this._acquireLock(-1, async () => await this._signOut(e))
          );
        }
        async _signOut({ scope: e } = { scope: "global" }) {
          return await this._useSession(async (t) => {
            var s;
            let { data: i, error: r } = t;
            if (r) return { error: r };
            let n =
              null === (s = i.session) || void 0 === s
                ? void 0
                : s.access_token;
            if (n) {
              let { error: t } = await this.admin.signOut(n, e);
              if (
                t &&
                !(
                  eK(t) &&
                  "AuthApiError" === t.name &&
                  (404 === t.status || 401 === t.status)
                )
              )
                return { error: t };
            }
            return (
              "others" !== e &&
                (await this._removeSession(),
                await eU(this.storage, `${this.storageKey}-code-verifier`),
                await this._notifyAllSubscribers("SIGNED_OUT", null)),
              { error: null }
            );
          });
        }
        onAuthStateChange(e) {
          let t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
              /[xy]/g,
              function (e) {
                let t = (16 * Math.random()) | 0;
                return ("x" == e ? t : (3 & t) | 8).toString(16);
              }
            ),
            s = {
              id: t,
              callback: e,
              unsubscribe: () => {
                this._debug(
                  "#unsubscribe()",
                  "state change callback with id removed",
                  t
                ),
                  this.stateChangeEmitters.delete(t);
              },
            };
          return (
            this._debug(
              "#onAuthStateChange()",
              "registered callback with id",
              t
            ),
            this.stateChangeEmitters.set(t, s),
            (async () => {
              await this.initializePromise,
                await this._acquireLock(-1, async () => {
                  this._emitInitialSession(t);
                });
            })(),
            { data: { subscription: s } }
          );
        }
        async _emitInitialSession(e) {
          return await this._useSession(async (t) => {
            var s, i;
            try {
              let {
                data: { session: i },
                error: r,
              } = t;
              if (r) throw r;
              await (null === (s = this.stateChangeEmitters.get(e)) ||
              void 0 === s
                ? void 0
                : s.callback("INITIAL_SESSION", i)),
                this._debug("INITIAL_SESSION", "callback id", e, "session", i);
            } catch (t) {
              await (null === (i = this.stateChangeEmitters.get(e)) ||
              void 0 === i
                ? void 0
                : i.callback("INITIAL_SESSION", null)),
                this._debug("INITIAL_SESSION", "callback id", e, "error", t),
                console.error(t);
            }
          });
        }
        async resetPasswordForEmail(e, t = {}) {
          let s = null,
            i = null;
          if ("pkce" === this.flowType) {
            let e = eJ();
            await eI(this.storage, `${this.storageKey}-code-verifier`, e),
              (s = await ez(e)),
              (i = e === s ? "plain" : "s256");
          }
          try {
            return await e6(this.fetch, "POST", `${this.url}/recover`, {
              body: {
                email: e,
                code_challenge: s,
                code_challenge_method: i,
                gotrue_meta_security: { captcha_token: t.captchaToken },
              },
              headers: this.headers,
              redirectTo: t.redirectTo,
            });
          } catch (e) {
            if (eK(e)) return { data: null, error: e };
            throw e;
          }
        }
        async _refreshAccessToken(e) {
          let t = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
          this._debug(t, "begin");
          try {
            var s, i;
            let r = Date.now();
            return await ((s = async (s) => (
              await eF(200 * s),
              this._debug(t, "refreshing attempt", s),
              await e6(
                this.fetch,
                "POST",
                `${this.url}/token?grant_type=refresh_token`,
                { body: { refresh_token: e }, headers: this.headers, xform: e7 }
              )
            )),
            (i = (e, t, s) =>
              s &&
              s.error &&
              e1(s.error) &&
              Date.now() + (e + 1) * 200 - r < 3e4),
            new Promise((e, t) => {
              (async () => {
                for (let r = 0; r < 1 / 0; r++)
                  try {
                    let t = await s(r);
                    if (!i(r, null, t)) {
                      e(t);
                      return;
                    }
                  } catch (e) {
                    if (!i(r, e)) {
                      t(e);
                      return;
                    }
                  }
              })();
            }));
          } catch (e) {
            if ((this._debug(t, "error", e), eK(e)))
              return { data: { session: null, user: null }, error: e };
            throw e;
          } finally {
            this._debug(t, "end");
          }
        }
        _isValidSession(e) {
          return (
            "object" == typeof e &&
            null !== e &&
            "access_token" in e &&
            "refresh_token" in e &&
            "expires_at" in e
          );
        }
        async _handleProviderSignIn(e, t) {
          let s = await this._getUrlForProvider(e, {
            redirectTo: t.redirectTo,
            scopes: t.scopes,
            queryParams: t.queryParams,
          });
          return (
            this._debug(
              "#_handleProviderSignIn()",
              "provider",
              e,
              "options",
              t,
              "url",
              s
            ),
            e$() && !t.skipBrowserRedirect && window.location.assign(s),
            { data: { provider: e, url: s }, error: null }
          );
        }
        async _recoverAndRefresh() {
          var e;
          let t = "#_recoverAndRefresh()";
          this._debug(t, "begin");
          try {
            let s = await eL(this.storage, this.storageKey);
            if (
              (this._debug(t, "session from storage", s),
              !this._isValidSession(s))
            ) {
              this._debug(t, "session is not valid"),
                null !== s && (await this._removeSession());
              return;
            }
            let i = Math.round(Date.now() / 1e3),
              r =
                (null !== (e = s.expires_at) && void 0 !== e ? e : 1 / 0) <
                i + 10;
            if (
              (this._debug(
                t,
                `session has${r ? "" : " not"} expired with margin of 10s`
              ),
              r)
            ) {
              if (this.autoRefreshToken && s.refresh_token) {
                let { error: e } = await this._callRefreshToken(
                  s.refresh_token
                );
                e &&
                  (console.error(e),
                  e1(e) ||
                    (this._debug(
                      t,
                      "refresh failed with a non-retryable error, removing the session",
                      e
                    ),
                    await this._removeSession()));
              }
            } else await this._notifyAllSubscribers("SIGNED_IN", s);
          } catch (e) {
            this._debug(t, "error", e), console.error(e);
            return;
          } finally {
            this._debug(t, "end");
          }
        }
        async _callRefreshToken(e) {
          var t, s;
          if (!e) throw new eW();
          if (this.refreshingDeferred) return this.refreshingDeferred.promise;
          let i = `#_callRefreshToken(${e.substring(0, 5)}...)`;
          this._debug(i, "begin");
          try {
            this.refreshingDeferred = new eN();
            let { data: t, error: s } = await this._refreshAccessToken(e);
            if (s) throw s;
            if (!t.session) throw new eW();
            await this._saveSession(t.session),
              await this._notifyAllSubscribers("TOKEN_REFRESHED", t.session);
            let i = { session: t.session, error: null };
            return this.refreshingDeferred.resolve(i), i;
          } catch (e) {
            if ((this._debug(i, "error", e), eK(e))) {
              let s = { session: null, error: e };
              return (
                null === (t = this.refreshingDeferred) ||
                  void 0 === t ||
                  t.resolve(s),
                s
              );
            }
            throw (
              (null === (s = this.refreshingDeferred) ||
                void 0 === s ||
                s.reject(e),
              e)
            );
          } finally {
            (this.refreshingDeferred = null), this._debug(i, "end");
          }
        }
        async _notifyAllSubscribers(e, t, s = !0) {
          let i = `#_notifyAllSubscribers(${e})`;
          this._debug(i, "begin", t, `broadcast = ${s}`);
          try {
            this.broadcastChannel &&
              s &&
              this.broadcastChannel.postMessage({ event: e, session: t });
            let i = [],
              r = Array.from(this.stateChangeEmitters.values()).map(
                async (s) => {
                  try {
                    await s.callback(e, t);
                  } catch (e) {
                    i.push(e);
                  }
                }
              );
            if ((await Promise.all(r), i.length > 0)) {
              for (let e = 0; e < i.length; e += 1) console.error(i[e]);
              throw i[0];
            }
          } finally {
            this._debug(i, "end");
          }
        }
        async _saveSession(e) {
          this._debug("#_saveSession()", e), await this._persistSession(e);
        }
        _persistSession(e) {
          return (
            this._debug("#_persistSession()", e),
            eI(this.storage, this.storageKey, e)
          );
        }
        async _removeSession() {
          this._debug("#_removeSession()"),
            await eU(this.storage, this.storageKey);
        }
        _removeVisibilityChangedCallback() {
          this._debug("#_removeVisibilityChangedCallback()");
          let e = this.visibilityChangedCallback;
          this.visibilityChangedCallback = null;
          try {
            e &&
              e$() &&
              (null == window ? void 0 : window.removeEventListener) &&
              window.removeEventListener("visibilitychange", e);
          } catch (e) {
            console.error("removing visibilitychange callback failed", e);
          }
        }
        async _startAutoRefresh() {
          await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
          let e = setInterval(() => this._autoRefreshTokenTick(), 3e4);
          (this.autoRefreshTicker = e),
            e && "object" == typeof e && "function" == typeof e.unref
              ? e.unref()
              : "undefined" != typeof Deno &&
                "function" == typeof Deno.unrefTimer &&
                Deno.unrefTimer(e),
            setTimeout(async () => {
              await this.initializePromise, await this._autoRefreshTokenTick();
            }, 0);
        }
        async _stopAutoRefresh() {
          this._debug("#_stopAutoRefresh()");
          let e = this.autoRefreshTicker;
          (this.autoRefreshTicker = null), e && clearInterval(e);
        }
        async startAutoRefresh() {
          this._removeVisibilityChangedCallback(),
            await this._startAutoRefresh();
        }
        async stopAutoRefresh() {
          this._removeVisibilityChangedCallback(),
            await this._stopAutoRefresh();
        }
        async _autoRefreshTokenTick() {
          this._debug("#_autoRefreshTokenTick()", "begin");
          try {
            await this._acquireLock(0, async () => {
              try {
                let e = Date.now();
                try {
                  return await this._useSession(async (t) => {
                    let {
                      data: { session: s },
                    } = t;
                    if (!s || !s.refresh_token || !s.expires_at) {
                      this._debug("#_autoRefreshTokenTick()", "no session");
                      return;
                    }
                    let i = Math.floor((1e3 * s.expires_at - e) / 3e4);
                    this._debug(
                      "#_autoRefreshTokenTick()",
                      `access token expires in ${i} ticks, a tick lasts 30000ms, refresh threshold is 3 ticks`
                    ),
                      i <= 3 && (await this._callRefreshToken(s.refresh_token));
                  });
                } catch (e) {
                  console.error(
                    "Auto refresh tick failed with error. This is likely a transient error.",
                    e
                  );
                }
              } finally {
                this._debug("#_autoRefreshTokenTick()", "end");
              }
            });
          } catch (e) {
            if (e.isAcquireTimeout || e instanceof tc)
              this._debug("auto refresh token tick lock not available");
            else throw e;
          }
        }
        async _handleVisibilityChange() {
          if (
            (this._debug("#_handleVisibilityChange()"),
            !e$() || !(null == window ? void 0 : window.addEventListener))
          )
            return this.autoRefreshToken && this.startAutoRefresh(), !1;
          try {
            (this.visibilityChangedCallback = async () =>
              await this._onVisibilityChanged(!1)),
              null == window ||
                window.addEventListener(
                  "visibilitychange",
                  this.visibilityChangedCallback
                ),
              await this._onVisibilityChanged(!0);
          } catch (e) {
            console.error("_handleVisibilityChange", e);
          }
        }
        async _onVisibilityChanged(e) {
          let t = `#_onVisibilityChanged(${e})`;
          this._debug(t, "visibilityState", document.visibilityState),
            "visible" === document.visibilityState
              ? (this.autoRefreshToken && this._startAutoRefresh(),
                e ||
                  (await this.initializePromise,
                  await this._acquireLock(-1, async () => {
                    if ("visible" !== document.visibilityState) {
                      this._debug(
                        t,
                        "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting"
                      );
                      return;
                    }
                    await this._recoverAndRefresh();
                  })))
              : "hidden" === document.visibilityState &&
                this.autoRefreshToken &&
                this._stopAutoRefresh();
        }
        async _getUrlForProvider(e, t) {
          let s = [`provider=${encodeURIComponent(e)}`];
          if (
            ((null == t ? void 0 : t.redirectTo) &&
              s.push(`redirect_to=${encodeURIComponent(t.redirectTo)}`),
            (null == t ? void 0 : t.scopes) &&
              s.push(`scopes=${encodeURIComponent(t.scopes)}`),
            "pkce" === this.flowType)
          ) {
            let e = eJ();
            await eI(this.storage, `${this.storageKey}-code-verifier`, e);
            let t = await ez(e),
              i = e === t ? "plain" : "s256";
            this._debug(
              "PKCE",
              "code verifier",
              `${e.substring(0, 5)}...`,
              "code challenge",
              t,
              "method",
              i
            );
            let r = new URLSearchParams({
              code_challenge: `${encodeURIComponent(t)}`,
              code_challenge_method: `${encodeURIComponent(i)}`,
            });
            s.push(r.toString());
          }
          if (null == t ? void 0 : t.queryParams) {
            let e = new URLSearchParams(t.queryParams);
            s.push(e.toString());
          }
          return `${this.url}/authorize?${s.join("&")}`;
        }
        async _unenroll(e) {
          try {
            return await this._useSession(async (t) => {
              var s;
              let { data: i, error: r } = t;
              return r
                ? { data: null, error: r }
                : await e6(
                    this.fetch,
                    "DELETE",
                    `${this.url}/factors/${e.factorId}`,
                    {
                      headers: this.headers,
                      jwt:
                        null === (s = null == i ? void 0 : i.session) ||
                        void 0 === s
                          ? void 0
                          : s.access_token,
                    }
                  );
            });
          } catch (e) {
            if (eK(e)) return { data: null, error: e };
            throw e;
          }
        }
        async _enroll(e) {
          try {
            return await this._useSession(async (t) => {
              var s, i;
              let { data: r, error: n } = t;
              if (n) return { data: null, error: n };
              let { data: a, error: o } = await e6(
                this.fetch,
                "POST",
                `${this.url}/factors`,
                {
                  body: {
                    friendly_name: e.friendlyName,
                    factor_type: e.factorType,
                    issuer: e.issuer,
                  },
                  headers: this.headers,
                  jwt:
                    null === (s = null == r ? void 0 : r.session) ||
                    void 0 === s
                      ? void 0
                      : s.access_token,
                }
              );
              return o
                ? { data: null, error: o }
                : ((null === (i = null == a ? void 0 : a.totp) || void 0 === i
                    ? void 0
                    : i.qr_code) &&
                    (a.totp.qr_code = `data:image/svg+xml;utf-8,${a.totp.qr_code}`),
                  { data: a, error: null });
            });
          } catch (e) {
            if (eK(e)) return { data: null, error: e };
            throw e;
          }
        }
        async _verify(e) {
          return this._acquireLock(-1, async () => {
            try {
              return await this._useSession(async (t) => {
                var s;
                let { data: i, error: r } = t;
                if (r) return { data: null, error: r };
                let { data: n, error: a } = await e6(
                  this.fetch,
                  "POST",
                  `${this.url}/factors/${e.factorId}/verify`,
                  {
                    body: { code: e.code, challenge_id: e.challengeId },
                    headers: this.headers,
                    jwt:
                      null === (s = null == i ? void 0 : i.session) ||
                      void 0 === s
                        ? void 0
                        : s.access_token,
                  }
                );
                return a
                  ? { data: null, error: a }
                  : (await this._saveSession(
                      Object.assign(
                        {
                          expires_at:
                            Math.round(Date.now() / 1e3) + n.expires_in,
                        },
                        n
                      )
                    ),
                    await this._notifyAllSubscribers(
                      "MFA_CHALLENGE_VERIFIED",
                      n
                    ),
                    { data: n, error: a });
              });
            } catch (e) {
              if (eK(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        async _challenge(e) {
          return this._acquireLock(-1, async () => {
            try {
              return await this._useSession(async (t) => {
                var s;
                let { data: i, error: r } = t;
                return r
                  ? { data: null, error: r }
                  : await e6(
                      this.fetch,
                      "POST",
                      `${this.url}/factors/${e.factorId}/challenge`,
                      {
                        headers: this.headers,
                        jwt:
                          null === (s = null == i ? void 0 : i.session) ||
                          void 0 === s
                            ? void 0
                            : s.access_token,
                      }
                    );
              });
            } catch (e) {
              if (eK(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        async _challengeAndVerify(e) {
          let { data: t, error: s } = await this._challenge({
            factorId: e.factorId,
          });
          return s
            ? { data: null, error: s }
            : await this._verify({
                factorId: e.factorId,
                challengeId: t.id,
                code: e.code,
              });
        }
        async _listFactors() {
          let {
            data: { user: e },
            error: t,
          } = await this.getUser();
          if (t) return { data: null, error: t };
          let s = (null == e ? void 0 : e.factors) || [],
            i = s.filter(
              (e) => "totp" === e.factor_type && "verified" === e.status
            );
          return { data: { all: s, totp: i }, error: null };
        }
        async _getAuthenticatorAssuranceLevel() {
          return this._acquireLock(
            -1,
            async () =>
              await this._useSession(async (e) => {
                var t, s;
                let {
                  data: { session: i },
                  error: r,
                } = e;
                if (r) return { data: null, error: r };
                if (!i)
                  return {
                    data: {
                      currentLevel: null,
                      nextLevel: null,
                      currentAuthenticationMethods: [],
                    },
                    error: null,
                  };
                let n = this._decodeJWT(i.access_token),
                  a = null;
                n.aal && (a = n.aal);
                let o = a;
                return (
                  (null !==
                    (s =
                      null === (t = i.user.factors) || void 0 === t
                        ? void 0
                        : t.filter((e) => "verified" === e.status)) &&
                  void 0 !== s
                    ? s
                    : []
                  ).length > 0 && (o = "aal2"),
                  {
                    data: {
                      currentLevel: a,
                      nextLevel: o,
                      currentAuthenticationMethods: n.amr || [],
                    },
                    error: null,
                  }
                );
              })
          );
        }
      }
      tf.nextInstanceID = 0;
      class tp extends tf {
        constructor(e) {
          super(e);
        }
      }
      let tg = { headers: eT },
        tm = { schema: "public" },
        ty = {
          autoRefreshToken: !0,
          persistSession: !0,
          detectSessionInUrl: !0,
          flowType: "implicit",
        },
        tv = {};
      class t_ {
        constructor(e, t, s) {
          var i, r, n, a, o, l, h, c;
          if (((this.supabaseUrl = e), (this.supabaseKey = t), !e))
            throw Error("supabaseUrl is required.");
          if (!t) throw Error("supabaseKey is required.");
          let u = e.replace(/\/$/, "");
          (this.realtimeUrl = `${u}/realtime/v1`.replace(/^http/i, "ws")),
            (this.authUrl = `${u}/auth/v1`),
            (this.storageUrl = `${u}/storage/v1`),
            (this.functionsUrl = `${u}/functions/v1`);
          let d = `sb-${
              new URL(this.authUrl).hostname.split(".")[0]
            }-auth-token`,
            f = (function (e, t) {
              let { db: s, auth: i, realtime: r, global: n } = e,
                { db: a, auth: o, realtime: l, global: h } = t;
              return {
                db: Object.assign(Object.assign({}, a), s),
                auth: Object.assign(Object.assign({}, o), i),
                realtime: Object.assign(Object.assign({}, l), r),
                global: Object.assign(Object.assign({}, h), n),
              };
            })(null != s ? s : {}, {
              db: tm,
              realtime: tv,
              auth: Object.assign(Object.assign({}, ty), { storageKey: d }),
              global: tg,
            });
          (this.storageKey =
            null !==
              (r =
                null === (i = f.auth) || void 0 === i
                  ? void 0
                  : i.storageKey) && void 0 !== r
              ? r
              : ""),
            (this.headers =
              null !==
                (a =
                  null === (n = f.global) || void 0 === n
                    ? void 0
                    : n.headers) && void 0 !== a
                ? a
                : {}),
            (this.auth = this._initSupabaseAuthClient(
              null !== (o = f.auth) && void 0 !== o ? o : {},
              this.headers,
              null === (l = f.global) || void 0 === l ? void 0 : l.fetch
            )),
            (this.fetch = eE(
              t,
              this._getAccessToken.bind(this),
              null === (h = f.global) || void 0 === h ? void 0 : h.fetch
            )),
            (this.realtime = this._initRealtimeClient(
              Object.assign({ headers: this.headers }, f.realtime)
            )),
            (this.rest = new U(`${u}/rest/v1`, {
              headers: this.headers,
              schema: null === (c = f.db) || void 0 === c ? void 0 : c.schema,
              fetch: this.fetch,
            })),
            this._listenForAuthEvents();
        }
        get functions() {
          return new l(this.functionsUrl, {
            headers: this.headers,
            customFetch: this.fetch,
          });
        }
        get storage() {
          return new ek(this.storageUrl, this.headers, this.fetch);
        }
        from(e) {
          return this.rest.from(e);
        }
        schema(e) {
          return this.rest.schema(e);
        }
        rpc(e, t = {}, s) {
          return this.rest.rpc(e, t, s);
        }
        channel(e, t = { config: {} }) {
          return this.realtime.channel(e, t);
        }
        getChannels() {
          return this.realtime.getChannels();
        }
        removeChannel(e) {
          return this.realtime.removeChannel(e);
        }
        removeAllChannels() {
          return this.realtime.removeAllChannels();
        }
        _getAccessToken() {
          var e, t, s, i, r, n;
          return (
            (s = this),
            (i = void 0),
            (r = void 0),
            (n = function* () {
              let { data: s } = yield this.auth.getSession();
              return null !==
                (t =
                  null === (e = s.session) || void 0 === e
                    ? void 0
                    : e.access_token) && void 0 !== t
                ? t
                : null;
            }),
            new (r || (r = Promise))(function (e, t) {
              function a(e) {
                try {
                  l(n.next(e));
                } catch (e) {
                  t(e);
                }
              }
              function o(e) {
                try {
                  l(n.throw(e));
                } catch (e) {
                  t(e);
                }
              }
              function l(t) {
                var s;
                t.done
                  ? e(t.value)
                  : ((s = t.value) instanceof r
                      ? s
                      : new r(function (e) {
                          e(s);
                        })
                    ).then(a, o);
              }
              l((n = n.apply(s, i || [])).next());
            })
          );
        }
        _initSupabaseAuthClient(
          {
            autoRefreshToken: e,
            persistSession: t,
            detectSessionInUrl: s,
            storage: i,
            storageKey: r,
            flowType: n,
            debug: a,
          },
          o,
          l
        ) {
          let h = {
            Authorization: `Bearer ${this.supabaseKey}`,
            apikey: `${this.supabaseKey}`,
          };
          return new tp({
            url: this.authUrl,
            headers: Object.assign(Object.assign({}, h), o),
            storageKey: r,
            autoRefreshToken: e,
            persistSession: t,
            detectSessionInUrl: s,
            storage: i,
            flowType: n,
            debug: a,
            fetch: l,
          });
        }
        _initRealtimeClient(e) {
          return new ee(
            this.realtimeUrl,
            Object.assign(Object.assign({}, e), {
              params: Object.assign(
                { apikey: this.supabaseKey },
                null == e ? void 0 : e.params
              ),
            })
          );
        }
        _listenForAuthEvents() {
          return this.auth.onAuthStateChange((e, t) => {
            this._handleTokenChanged(
              e,
              "CLIENT",
              null == t ? void 0 : t.access_token
            );
          });
        }
        _handleTokenChanged(e, t, s) {
          ("TOKEN_REFRESHED" === e || "SIGNED_IN" === e) &&
          this.changedAccessToken !== s
            ? (this.realtime.setAuth(null != s ? s : null),
              (this.changedAccessToken = s))
            : "SIGNED_OUT" === e &&
              (this.realtime.setAuth(this.supabaseKey),
              "STORAGE" == t && this.auth.signOut(),
              (this.changedAccessToken = void 0));
        }
      }
      let tb = (e, t, s) => new t_(e, t, s);
      function tw(e) {
        return (
          null != e &&
          "object" == typeof e &&
          !0 === e["@@functional/placeholder"]
        );
      }
      function tk(e) {
        return function t(s) {
          return 0 == arguments.length || tw(s) ? t : e.apply(this, arguments);
        };
      }
      function tS(e) {
        return function t(s, i) {
          switch (arguments.length) {
            case 0:
              return t;
            case 1:
              return tw(s)
                ? t
                : tk(function (t) {
                    return e(s, t);
                  });
            default:
              return tw(s) && tw(i)
                ? t
                : tw(s)
                ? tk(function (t) {
                    return e(t, i);
                  })
                : tw(i)
                ? tk(function (t) {
                    return e(s, t);
                  })
                : e(s, i);
          }
        };
      }
      function tT(e) {
        return function t(s, i, r) {
          switch (arguments.length) {
            case 0:
              return t;
            case 1:
              return tw(s)
                ? t
                : tS(function (t, i) {
                    return e(s, t, i);
                  });
            case 2:
              return tw(s) && tw(i)
                ? t
                : tw(s)
                ? tS(function (t, s) {
                    return e(t, i, s);
                  })
                : tw(i)
                ? tS(function (t, i) {
                    return e(s, t, i);
                  })
                : tk(function (t) {
                    return e(s, i, t);
                  });
            default:
              return tw(s) && tw(i) && tw(r)
                ? t
                : tw(s) && tw(i)
                ? tS(function (t, s) {
                    return e(t, s, r);
                  })
                : tw(s) && tw(r)
                ? tS(function (t, s) {
                    return e(t, i, s);
                  })
                : tw(i) && tw(r)
                ? tS(function (t, i) {
                    return e(s, t, i);
                  })
                : tw(s)
                ? tk(function (t) {
                    return e(t, i, r);
                  })
                : tw(i)
                ? tk(function (t) {
                    return e(s, t, r);
                  })
                : tw(r)
                ? tk(function (t) {
                    return e(s, i, t);
                  })
                : e(s, i, r);
          }
        };
      }
      function tj(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function tO(e, t) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }
      var tE = tT(function (e, t, s) {
          var i,
            r = {};
          for (i in ((s = s || {}), (t = t || {})))
            tO(i, t) && (r[i] = tO(i, s) ? e(i, t[i], s[i]) : t[i]);
          for (i in s) tO(i, s) && !tO(i, r) && (r[i] = s[i]);
          return r;
        }),
        t$ = tT(function e(t, s, i) {
          return tE(
            function (s, i, r) {
              return tj(i) && tj(r) ? e(t, i, r) : t(s, i, r);
            },
            s,
            i
          );
        }),
        tP = tS(function (e, t) {
          return t$(
            function (e, t, s) {
              return s;
            },
            e,
            t
          );
        }),
        tx = s(33212);
      function tC() {
        return "undefined" != typeof window && void 0 !== window.document;
      }
      var tR = { path: "/", sameSite: "lax", httpOnly: !1, maxAge: 31536e6 };
      function tA(e) {
        return RegExp(".{1," + e + "}", "g");
      }
      var tI = tA(3180);
      async function tL(e, t) {
        let s = await t(e);
        if (s) return s;
        let i = [];
        for (let s = 0; ; s++) {
          let r = `${e}.${s}`,
            n = await t(r);
          if (!n) break;
          i.push(n);
        }
        if (i.length > 0) return i.join("");
      }
      async function tU(e, t, s) {
        if (await t(e)) {
          await s(e);
          return;
        }
        for (let i = 0; ; i++) {
          let r = `${e}.${i}`;
          if (!(await t(r))) break;
          await s(r);
        }
      }
      function tN(e, t, s) {
        let i, r;
        if (!e || !t)
          throw Error(`Your project's URL and Key are required to create a Supabase client!

Check your Supabase project's API settings to find these values

https://supabase.com/dashboard/project/_/settings/api`);
        let n = {},
          a = !0;
        s && ({ cookies: n, isSingleton: a = !0, cookieOptions: i, ...r } = s);
        let o = tP(
          {
            global: { headers: { "X-Client-Info": "supabase-ssr/0.0.10" } },
            auth: {
              flowType: "pkce",
              autoRefreshToken: tC(),
              detectSessionInUrl: tC(),
              persistSession: !0,
              storage: {
                getItem: async (e) =>
                  await tL(e, async (e) =>
                    "function" == typeof n.get
                      ? await n.get(e)
                      : tC()
                      ? (0, tx.Q)(document.cookie)[e]
                      : void 0
                  ),
                setItem: async (e, t) => {
                  let s = await (function (e, t, s) {
                    let i = void 0 !== s ? tA(s) : tI;
                    if (1 === Math.ceil(t.length / (s ?? 3180)))
                      return [{ name: e, value: t }];
                    let r = [],
                      n = t.match(i);
                    return (
                      null == n ||
                        n.forEach((t, s) => {
                          let i = `${e}.${s}`;
                          r.push({ name: i, value: t });
                        }),
                      r
                    );
                  })(e, t);
                  await Promise.all(
                    s.map(async (e) => {
                      "function" == typeof n.set
                        ? await n.set(e.name, e.value, {
                            ...tR,
                            ...i,
                            maxAge: tR.maxAge,
                          })
                        : tC() &&
                          (document.cookie = (0, tx.q)(e.name, e.value, {
                            ...tR,
                            ...i,
                            maxAge: tR.maxAge,
                          }));
                    })
                  );
                },
                removeItem: async (e) => {
                  if (
                    "function" == typeof n.remove &&
                    "function" != typeof n.get
                  ) {
                    console.log(
                      "Removing chunked cookie without a `get` method is not supported.\n\n	When you call the `createBrowserClient` function from the `@supabase/ssr` package, make sure you declare both a `get` and `remove` method on the `cookies` object.\n\nhttps://supabase.com/docs/guides/auth/server-side/creating-a-client"
                    );
                    return;
                  }
                  await tU(
                    e,
                    async (e) =>
                      "function" == typeof n.get
                        ? await n.get(e)
                        : tC()
                        ? (0, tx.Q)(document.cookie)[e]
                        : void 0,
                    async (e) => {
                      "function" == typeof n.remove
                        ? await n.remove(e, { ...tR, ...i, maxAge: 0 })
                        : tC() &&
                          (document.cookie = (0, tx.q)(e, "", {
                            ...tR,
                            ...i,
                            maxAge: 0,
                          }));
                    }
                  );
                },
              },
            },
          },
          r
        );
        if (a) {
          let s = tC();
          if (s && _) return _;
          let i = tb(e, t, o);
          return s && (_ = i), i;
        }
        return tb(e, t, o);
      }
    },
    62151: function (e) {
      "use strict";
      e.exports = { version: "1.0.34" };
    },
  },
]);
