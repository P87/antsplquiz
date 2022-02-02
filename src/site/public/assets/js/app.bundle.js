/*! For license information please see app.bundle.js.LICENSE.txt */
(self.webpackChunkAntsPLQuiz = self.webpackChunkAntsPLQuiz || []).push([
  [804],
  {
    418: (e) => {
      "use strict";
      var t = Object.getOwnPropertySymbols,
        n = Object.prototype.hasOwnProperty,
        r = Object.prototype.propertyIsEnumerable;
      function a(e) {
        if (null == e)
          throw new TypeError(
            "Object.assign cannot be called with null or undefined"
          );
        return Object(e);
      }
      e.exports = (function () {
        try {
          if (!Object.assign) return !1;
          var e = new String("abc");
          if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
            return !1;
          for (var t = {}, n = 0; n < 10; n++)
            t["_" + String.fromCharCode(n)] = n;
          if (
            "0123456789" !==
            Object.getOwnPropertyNames(t)
              .map(function (e) {
                return t[e];
              })
              .join("")
          )
            return !1;
          var r = {};
          return (
            "abcdefghijklmnopqrst".split("").forEach(function (e) {
              r[e] = e;
            }),
            "abcdefghijklmnopqrst" ===
              Object.keys(Object.assign({}, r)).join("")
          );
        } catch (e) {
          return !1;
        }
      })()
        ? Object.assign
        : function (e, l) {
            for (var o, u, i = a(e), s = 1; s < arguments.length; s++) {
              for (var c in (o = Object(arguments[s])))
                n.call(o, c) && (i[c] = o[c]);
              if (t) {
                u = t(o);
                for (var d = 0; d < u.length; d++)
                  r.call(o, u[d]) && (i[u[d]] = o[u[d]]);
              }
            }
            return i;
          };
    },
    448: (e, t, n) => {
      "use strict";
      var r = n(294),
        a = n(418),
        l = n(840);
      function o(e) {
        for (
          var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
          n < arguments.length;
          n++
        )
          t += "&args[]=" + encodeURIComponent(arguments[n]);
        return (
          "Minified React error #" +
          e +
          "; visit " +
          t +
          " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
      }
      if (!r) throw Error(o(227));
      var u = new Set(),
        i = {};
      function s(e, t) {
        c(e, t), c(e + "Capture", t);
      }
      function c(e, t) {
        for (i[e] = t, e = 0; e < t.length; e++) u.add(t[e]);
      }
      var d = !(
          "undefined" == typeof window ||
          void 0 === window.document ||
          void 0 === window.document.createElement
        ),
        f =
          /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        m = Object.prototype.hasOwnProperty,
        p = {},
        h = {};
      function v(e, t, n, r, a, l, o) {
        (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
          (this.attributeName = r),
          (this.attributeNamespace = a),
          (this.mustUseProperty = n),
          (this.propertyName = e),
          (this.type = t),
          (this.sanitizeURL = l),
          (this.removeEmptyString = o);
      }
      var g = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
        .split(" ")
        .forEach(function (e) {
          g[e] = new v(e, 0, !1, e, null, !1, !1);
        }),
        [
          ["acceptCharset", "accept-charset"],
          ["className", "class"],
          ["htmlFor", "for"],
          ["httpEquiv", "http-equiv"],
        ].forEach(function (e) {
          var t = e[0];
          g[t] = new v(t, 1, !1, e[1], null, !1, !1);
        }),
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(
          function (e) {
            g[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
          }
        ),
        [
          "autoReverse",
          "externalResourcesRequired",
          "focusable",
          "preserveAlpha",
        ].forEach(function (e) {
          g[e] = new v(e, 2, !1, e, null, !1, !1);
        }),
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
          .split(" ")
          .forEach(function (e) {
            g[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
          }),
        ["checked", "multiple", "muted", "selected"].forEach(function (e) {
          g[e] = new v(e, 3, !0, e, null, !1, !1);
        }),
        ["capture", "download"].forEach(function (e) {
          g[e] = new v(e, 4, !1, e, null, !1, !1);
        }),
        ["cols", "rows", "size", "span"].forEach(function (e) {
          g[e] = new v(e, 6, !1, e, null, !1, !1);
        }),
        ["rowSpan", "start"].forEach(function (e) {
          g[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
        });
      var b = /[\-:]([a-z])/g;
      function y(e) {
        return e[1].toUpperCase();
      }
      function E(e, t, n, r) {
        var a = g.hasOwnProperty(t) ? g[t] : null;
        (null !== a
          ? 0 === a.type
          : !r &&
            2 < t.length &&
            ("o" === t[0] || "O" === t[0]) &&
            ("n" === t[1] || "N" === t[1])) ||
          ((function (e, t, n, r) {
            if (
              null == t ||
              (function (e, t, n, r) {
                if (null !== n && 0 === n.type) return !1;
                switch (typeof t) {
                  case "function":
                  case "symbol":
                    return !0;
                  case "boolean":
                    return (
                      !r &&
                      (null !== n
                        ? !n.acceptsBooleans
                        : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                          "aria-" !== e)
                    );
                  default:
                    return !1;
                }
              })(e, t, n, r)
            )
              return !0;
            if (r) return !1;
            if (null !== n)
              switch (n.type) {
                case 3:
                  return !t;
                case 4:
                  return !1 === t;
                case 5:
                  return isNaN(t);
                case 6:
                  return isNaN(t) || 1 > t;
              }
            return !1;
          })(t, n, a, r) && (n = null),
          r || null === a
            ? (function (e) {
                return (
                  !!m.call(h, e) ||
                  (!m.call(p, e) &&
                    (f.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                );
              })(t) &&
              (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : a.mustUseProperty
            ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
            : ((t = a.attributeName),
              (r = a.attributeNamespace),
              null === n
                ? e.removeAttribute(t)
                : ((n =
                    3 === (a = a.type) || (4 === a && !0 === n) ? "" : "" + n),
                  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
        .split(" ")
        .forEach(function (e) {
          var t = e.replace(b, y);
          g[t] = new v(t, 1, !1, e, null, !1, !1);
        }),
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(b, y);
            g[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
          }),
        ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
          var t = e.replace(b, y);
          g[t] = new v(
            t,
            1,
            !1,
            e,
            "http://www.w3.org/XML/1998/namespace",
            !1,
            !1
          );
        }),
        ["tabIndex", "crossOrigin"].forEach(function (e) {
          g[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
        }),
        (g.xlinkHref = new v(
          "xlinkHref",
          1,
          !1,
          "xlink:href",
          "http://www.w3.org/1999/xlink",
          !0,
          !1
        )),
        ["src", "href", "action", "formAction"].forEach(function (e) {
          g[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
        });
      var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        _ = 60103,
        k = 60106,
        S = 60107,
        N = 60108,
        P = 60114,
        x = 60109,
        T = 60110,
        C = 60112,
        O = 60113,
        M = 60120,
        j = 60115,
        A = 60116,
        L = 60121,
        D = 60128,
        z = 60129,
        R = 60130,
        I = 60131;
      if ("function" == typeof Symbol && Symbol.for) {
        var U = Symbol.for;
        (_ = U("react.element")),
          (k = U("react.portal")),
          (S = U("react.fragment")),
          (N = U("react.strict_mode")),
          (P = U("react.profiler")),
          (x = U("react.provider")),
          (T = U("react.context")),
          (C = U("react.forward_ref")),
          (O = U("react.suspense")),
          (M = U("react.suspense_list")),
          (j = U("react.memo")),
          (A = U("react.lazy")),
          (L = U("react.block")),
          U("react.scope"),
          (D = U("react.opaque.id")),
          (z = U("react.debug_trace_mode")),
          (R = U("react.offscreen")),
          (I = U("react.legacy_hidden"));
      }
      var q,
        F = "function" == typeof Symbol && Symbol.iterator;
      function B(e) {
        return null === e || "object" != typeof e
          ? null
          : "function" == typeof (e = (F && e[F]) || e["@@iterator"])
          ? e
          : null;
      }
      function $(e) {
        if (void 0 === q)
          try {
            throw Error();
          } catch (e) {
            var t = e.stack.trim().match(/\n( *(at )?)/);
            q = (t && t[1]) || "";
          }
        return "\n" + q + e;
      }
      var Y = !1;
      function Q(e, t) {
        if (!e || Y) return "";
        Y = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (t)
            if (
              ((t = function () {
                throw Error();
              }),
              Object.defineProperty(t.prototype, "props", {
                set: function () {
                  throw Error();
                },
              }),
              "object" == typeof Reflect && Reflect.construct)
            ) {
              try {
                Reflect.construct(t, []);
              } catch (e) {
                var r = e;
              }
              Reflect.construct(e, [], t);
            } else {
              try {
                t.call();
              } catch (e) {
                r = e;
              }
              e.call(t.prototype);
            }
          else {
            try {
              throw Error();
            } catch (e) {
              r = e;
            }
            e();
          }
        } catch (e) {
          if (e && r && "string" == typeof e.stack) {
            for (
              var a = e.stack.split("\n"),
                l = r.stack.split("\n"),
                o = a.length - 1,
                u = l.length - 1;
              1 <= o && 0 <= u && a[o] !== l[u];

            )
              u--;
            for (; 1 <= o && 0 <= u; o--, u--)
              if (a[o] !== l[u]) {
                if (1 !== o || 1 !== u)
                  do {
                    if ((o--, 0 > --u || a[o] !== l[u]))
                      return "\n" + a[o].replace(" at new ", " at ");
                  } while (1 <= o && 0 <= u);
                break;
              }
          }
        } finally {
          (Y = !1), (Error.prepareStackTrace = n);
        }
        return (e = e ? e.displayName || e.name : "") ? $(e) : "";
      }
      function V(e) {
        switch (e.tag) {
          case 5:
            return $(e.type);
          case 16:
            return $("Lazy");
          case 13:
            return $("Suspense");
          case 19:
            return $("SuspenseList");
          case 0:
          case 2:
          case 15:
            return Q(e.type, !1);
          case 11:
            return Q(e.type.render, !1);
          case 22:
            return Q(e.type._render, !1);
          case 1:
            return Q(e.type, !0);
          default:
            return "";
        }
      }
      function H(e) {
        if (null == e) return null;
        if ("function" == typeof e) return e.displayName || e.name || null;
        if ("string" == typeof e) return e;
        switch (e) {
          case S:
            return "Fragment";
          case k:
            return "Portal";
          case P:
            return "Profiler";
          case N:
            return "StrictMode";
          case O:
            return "Suspense";
          case M:
            return "SuspenseList";
        }
        if ("object" == typeof e)
          switch (e.$$typeof) {
            case T:
              return (e.displayName || "Context") + ".Consumer";
            case x:
              return (e._context.displayName || "Context") + ".Provider";
            case C:
              var t = e.render;
              return (
                (t = t.displayName || t.name || ""),
                e.displayName ||
                  ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
              );
            case j:
              return H(e.type);
            case L:
              return H(e._render);
            case A:
              (t = e._payload), (e = e._init);
              try {
                return H(e(t));
              } catch (e) {}
          }
        return null;
      }
      function W(e) {
        switch (typeof e) {
          case "boolean":
          case "number":
          case "object":
          case "string":
          case "undefined":
            return e;
          default:
            return "";
        }
      }
      function K(e) {
        var t = e.type;
        return (
          (e = e.nodeName) &&
          "input" === e.toLowerCase() &&
          ("checkbox" === t || "radio" === t)
        );
      }
      function G(e) {
        e._valueTracker ||
          (e._valueTracker = (function (e) {
            var t = K(e) ? "checked" : "value",
              n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
              r = "" + e[t];
            if (
              !e.hasOwnProperty(t) &&
              void 0 !== n &&
              "function" == typeof n.get &&
              "function" == typeof n.set
            ) {
              var a = n.get,
                l = n.set;
              return (
                Object.defineProperty(e, t, {
                  configurable: !0,
                  get: function () {
                    return a.call(this);
                  },
                  set: function (e) {
                    (r = "" + e), l.call(this, e);
                  },
                }),
                Object.defineProperty(e, t, { enumerable: n.enumerable }),
                {
                  getValue: function () {
                    return r;
                  },
                  setValue: function (e) {
                    r = "" + e;
                  },
                  stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                  },
                }
              );
            }
          })(e));
      }
      function X(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
          r = "";
        return (
          e && (r = K(e) ? (e.checked ? "true" : "false") : e.value),
          (e = r) !== n && (t.setValue(e), !0)
        );
      }
      function J(e) {
        if (
          void 0 ===
          (e = e || ("undefined" != typeof document ? document : void 0))
        )
          return null;
        try {
          return e.activeElement || e.body;
        } catch (t) {
          return e.body;
        }
      }
      function Z(e, t) {
        var n = t.checked;
        return a({}, t, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: null != n ? n : e._wrapperState.initialChecked,
        });
      }
      function ee(e, t) {
        var n = null == t.defaultValue ? "" : t.defaultValue,
          r = null != t.checked ? t.checked : t.defaultChecked;
        (n = W(null != t.value ? t.value : n)),
          (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
              "checkbox" === t.type || "radio" === t.type
                ? null != t.checked
                : null != t.value,
          });
      }
      function te(e, t) {
        null != (t = t.checked) && E(e, "checked", t, !1);
      }
      function ne(e, t) {
        te(e, t);
        var n = W(t.value),
          r = t.type;
        if (null != n)
          "number" === r
            ? ((0 === n && "" === e.value) || e.value != n) &&
              (e.value = "" + n)
            : e.value !== "" + n && (e.value = "" + n);
        else if ("submit" === r || "reset" === r)
          return void e.removeAttribute("value");
        t.hasOwnProperty("value")
          ? ae(e, t.type, n)
          : t.hasOwnProperty("defaultValue") &&
            ae(e, t.type, W(t.defaultValue)),
          null == t.checked &&
            null != t.defaultChecked &&
            (e.defaultChecked = !!t.defaultChecked);
      }
      function re(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
          var r = t.type;
          if (
            !(
              ("submit" !== r && "reset" !== r) ||
              (void 0 !== t.value && null !== t.value)
            )
          )
            return;
          (t = "" + e._wrapperState.initialValue),
            n || t === e.value || (e.value = t),
            (e.defaultValue = t);
        }
        "" !== (n = e.name) && (e.name = ""),
          (e.defaultChecked = !!e._wrapperState.initialChecked),
          "" !== n && (e.name = n);
      }
      function ae(e, t, n) {
        ("number" === t && J(e.ownerDocument) === e) ||
          (null == n
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
      }
      function le(e, t) {
        return (
          (e = a({ children: void 0 }, t)),
          (t = (function (e) {
            var t = "";
            return (
              r.Children.forEach(e, function (e) {
                null != e && (t += e);
              }),
              t
            );
          })(t.children)) && (e.children = t),
          e
        );
      }
      function oe(e, t, n, r) {
        if (((e = e.options), t)) {
          t = {};
          for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
          for (n = 0; n < e.length; n++)
            (a = t.hasOwnProperty("$" + e[n].value)),
              e[n].selected !== a && (e[n].selected = a),
              a && r && (e[n].defaultSelected = !0);
        } else {
          for (n = "" + W(n), t = null, a = 0; a < e.length; a++) {
            if (e[a].value === n)
              return (
                (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
              );
            null !== t || e[a].disabled || (t = e[a]);
          }
          null !== t && (t.selected = !0);
        }
      }
      function ue(e, t) {
        if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
        return a({}, t, {
          value: void 0,
          defaultValue: void 0,
          children: "" + e._wrapperState.initialValue,
        });
      }
      function ie(e, t) {
        var n = t.value;
        if (null == n) {
          if (((n = t.children), (t = t.defaultValue), null != n)) {
            if (null != t) throw Error(o(92));
            if (Array.isArray(n)) {
              if (!(1 >= n.length)) throw Error(o(93));
              n = n[0];
            }
            t = n;
          }
          null == t && (t = ""), (n = t);
        }
        e._wrapperState = { initialValue: W(n) };
      }
      function se(e, t) {
        var n = W(t.value),
          r = W(t.defaultValue);
        null != n &&
          ((n = "" + n) !== e.value && (e.value = n),
          null == t.defaultValue &&
            e.defaultValue !== n &&
            (e.defaultValue = n)),
          null != r && (e.defaultValue = "" + r);
      }
      function ce(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue &&
          "" !== t &&
          null !== t &&
          (e.value = t);
      }
      var de = "http://www.w3.org/1999/xhtml";
      function fe(e) {
        switch (e) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function me(e, t) {
        return null == e || "http://www.w3.org/1999/xhtml" === e
          ? fe(t)
          : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
          ? "http://www.w3.org/1999/xhtml"
          : e;
      }
      var pe,
        he,
        ve =
          ((he = function (e, t) {
            if (
              "http://www.w3.org/2000/svg" !== e.namespaceURI ||
              "innerHTML" in e
            )
              e.innerHTML = t;
            else {
              for (
                (pe = pe || document.createElement("div")).innerHTML =
                  "<svg>" + t.valueOf().toString() + "</svg>",
                  t = pe.firstChild;
                e.firstChild;

              )
                e.removeChild(e.firstChild);
              for (; t.firstChild; ) e.appendChild(t.firstChild);
            }
          }),
          "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
            ? function (e, t, n, r) {
                MSApp.execUnsafeLocalFunction(function () {
                  return he(e, t);
                });
              }
            : he);
      function ge(e, t) {
        if (t) {
          var n = e.firstChild;
          if (n && n === e.lastChild && 3 === n.nodeType)
            return void (n.nodeValue = t);
        }
        e.textContent = t;
      }
      var be = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridArea: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0,
        },
        ye = ["Webkit", "ms", "Moz", "O"];
      function Ee(e, t, n) {
        return null == t || "boolean" == typeof t || "" === t
          ? ""
          : n ||
            "number" != typeof t ||
            0 === t ||
            (be.hasOwnProperty(e) && be[e])
          ? ("" + t).trim()
          : t + "px";
      }
      function we(e, t) {
        for (var n in ((e = e.style), t))
          if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf("--"),
              a = Ee(n, t[n], r);
            "float" === n && (n = "cssFloat"),
              r ? e.setProperty(n, a) : (e[n] = a);
          }
      }
      Object.keys(be).forEach(function (e) {
        ye.forEach(function (t) {
          (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (be[t] = be[e]);
        });
      });
      var _e = a(
        { menuitem: !0 },
        {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          embed: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0,
        }
      );
      function ke(e, t) {
        if (t) {
          if (
            _e[e] &&
            (null != t.children || null != t.dangerouslySetInnerHTML)
          )
            throw Error(o(137, e));
          if (null != t.dangerouslySetInnerHTML) {
            if (null != t.children) throw Error(o(60));
            if (
              "object" != typeof t.dangerouslySetInnerHTML ||
              !("__html" in t.dangerouslySetInnerHTML)
            )
              throw Error(o(61));
          }
          if (null != t.style && "object" != typeof t.style) throw Error(o(62));
        }
      }
      function Se(e, t) {
        if (-1 === e.indexOf("-")) return "string" == typeof t.is;
        switch (e) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return !1;
          default:
            return !0;
        }
      }
      function Ne(e) {
        return (
          (e = e.target || e.srcElement || window).correspondingUseElement &&
            (e = e.correspondingUseElement),
          3 === e.nodeType ? e.parentNode : e
        );
      }
      var Pe = null,
        xe = null,
        Te = null;
      function Ce(e) {
        if ((e = Zr(e))) {
          if ("function" != typeof Pe) throw Error(o(280));
          var t = e.stateNode;
          t && ((t = ta(t)), Pe(e.stateNode, e.type, t));
        }
      }
      function Oe(e) {
        xe ? (Te ? Te.push(e) : (Te = [e])) : (xe = e);
      }
      function Me() {
        if (xe) {
          var e = xe,
            t = Te;
          if (((Te = xe = null), Ce(e), t))
            for (e = 0; e < t.length; e++) Ce(t[e]);
        }
      }
      function je(e, t) {
        return e(t);
      }
      function Ae(e, t, n, r, a) {
        return e(t, n, r, a);
      }
      function Le() {}
      var De = je,
        ze = !1,
        Re = !1;
      function Ie() {
        (null === xe && null === Te) || (Le(), Me());
      }
      function Ue(e, t) {
        var n = e.stateNode;
        if (null === n) return null;
        var r = ta(n);
        if (null === r) return null;
        n = r[t];
        e: switch (t) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (r = !r.disabled) ||
              (r = !(
                "button" === (e = e.type) ||
                "input" === e ||
                "select" === e ||
                "textarea" === e
              )),
              (e = !r);
            break e;
          default:
            e = !1;
        }
        if (e) return null;
        if (n && "function" != typeof n) throw Error(o(231, t, typeof n));
        return n;
      }
      var qe = !1;
      if (d)
        try {
          var Fe = {};
          Object.defineProperty(Fe, "passive", {
            get: function () {
              qe = !0;
            },
          }),
            window.addEventListener("test", Fe, Fe),
            window.removeEventListener("test", Fe, Fe);
        } catch (he) {
          qe = !1;
        }
      function Be(e, t, n, r, a, l, o, u, i) {
        var s = Array.prototype.slice.call(arguments, 3);
        try {
          t.apply(n, s);
        } catch (e) {
          this.onError(e);
        }
      }
      var $e = !1,
        Ye = null,
        Qe = !1,
        Ve = null,
        He = {
          onError: function (e) {
            ($e = !0), (Ye = e);
          },
        };
      function We(e, t, n, r, a, l, o, u, i) {
        ($e = !1), (Ye = null), Be.apply(He, arguments);
      }
      function Ke(e) {
        var t = e,
          n = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
          e = t;
          do {
            0 != (1026 & (t = e).flags) && (n = t.return), (e = t.return);
          } while (e);
        }
        return 3 === t.tag ? n : null;
      }
      function Ge(e) {
        if (13 === e.tag) {
          var t = e.memoizedState;
          if (
            (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
            null !== t)
          )
            return t.dehydrated;
        }
        return null;
      }
      function Xe(e) {
        if (Ke(e) !== e) throw Error(o(188));
      }
      function Je(e) {
        if (
          !(e = (function (e) {
            var t = e.alternate;
            if (!t) {
              if (null === (t = Ke(e))) throw Error(o(188));
              return t !== e ? null : e;
            }
            for (var n = e, r = t; ; ) {
              var a = n.return;
              if (null === a) break;
              var l = a.alternate;
              if (null === l) {
                if (null !== (r = a.return)) {
                  n = r;
                  continue;
                }
                break;
              }
              if (a.child === l.child) {
                for (l = a.child; l; ) {
                  if (l === n) return Xe(a), e;
                  if (l === r) return Xe(a), t;
                  l = l.sibling;
                }
                throw Error(o(188));
              }
              if (n.return !== r.return) (n = a), (r = l);
              else {
                for (var u = !1, i = a.child; i; ) {
                  if (i === n) {
                    (u = !0), (n = a), (r = l);
                    break;
                  }
                  if (i === r) {
                    (u = !0), (r = a), (n = l);
                    break;
                  }
                  i = i.sibling;
                }
                if (!u) {
                  for (i = l.child; i; ) {
                    if (i === n) {
                      (u = !0), (n = l), (r = a);
                      break;
                    }
                    if (i === r) {
                      (u = !0), (r = l), (n = a);
                      break;
                    }
                    i = i.sibling;
                  }
                  if (!u) throw Error(o(189));
                }
              }
              if (n.alternate !== r) throw Error(o(190));
            }
            if (3 !== n.tag) throw Error(o(188));
            return n.stateNode.current === n ? e : t;
          })(e))
        )
          return null;
        for (var t = e; ; ) {
          if (5 === t.tag || 6 === t.tag) return t;
          if (t.child) (t.child.return = t), (t = t.child);
          else {
            if (t === e) break;
            for (; !t.sibling; ) {
              if (!t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
        }
        return null;
      }
      function Ze(e, t) {
        for (var n = e.alternate; null !== t; ) {
          if (t === e || t === n) return !0;
          t = t.return;
        }
        return !1;
      }
      var et,
        tt,
        nt,
        rt,
        at = !1,
        lt = [],
        ot = null,
        ut = null,
        it = null,
        st = new Map(),
        ct = new Map(),
        dt = [],
        ft =
          "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " "
          );
      function mt(e, t, n, r, a) {
        return {
          blockedOn: e,
          domEventName: t,
          eventSystemFlags: 16 | n,
          nativeEvent: a,
          targetContainers: [r],
        };
      }
      function pt(e, t) {
        switch (e) {
          case "focusin":
          case "focusout":
            ot = null;
            break;
          case "dragenter":
          case "dragleave":
            ut = null;
            break;
          case "mouseover":
          case "mouseout":
            it = null;
            break;
          case "pointerover":
          case "pointerout":
            st.delete(t.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            ct.delete(t.pointerId);
        }
      }
      function ht(e, t, n, r, a, l) {
        return null === e || e.nativeEvent !== l
          ? ((e = mt(t, n, r, a, l)),
            null !== t && null !== (t = Zr(t)) && tt(t),
            e)
          : ((e.eventSystemFlags |= r),
            (t = e.targetContainers),
            null !== a && -1 === t.indexOf(a) && t.push(a),
            e);
      }
      function vt(e) {
        var t = Jr(e.target);
        if (null !== t) {
          var n = Ke(t);
          if (null !== n)
            if (13 === (t = n.tag)) {
              if (null !== (t = Ge(n)))
                return (
                  (e.blockedOn = t),
                  void rt(e.lanePriority, function () {
                    l.unstable_runWithPriority(e.priority, function () {
                      nt(n);
                    });
                  })
                );
            } else if (3 === t && n.stateNode.hydrate)
              return void (e.blockedOn =
                3 === n.tag ? n.stateNode.containerInfo : null);
        }
        e.blockedOn = null;
      }
      function gt(e) {
        if (null !== e.blockedOn) return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
          var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
          if (null !== n)
            return null !== (t = Zr(n)) && tt(t), (e.blockedOn = n), !1;
          t.shift();
        }
        return !0;
      }
      function bt(e, t, n) {
        gt(e) && n.delete(t);
      }
      function yt() {
        for (at = !1; 0 < lt.length; ) {
          var e = lt[0];
          if (null !== e.blockedOn) {
            null !== (e = Zr(e.blockedOn)) && et(e);
            break;
          }
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n) {
              e.blockedOn = n;
              break;
            }
            t.shift();
          }
          null === e.blockedOn && lt.shift();
        }
        null !== ot && gt(ot) && (ot = null),
          null !== ut && gt(ut) && (ut = null),
          null !== it && gt(it) && (it = null),
          st.forEach(bt),
          ct.forEach(bt);
      }
      function Et(e, t) {
        e.blockedOn === t &&
          ((e.blockedOn = null),
          at ||
            ((at = !0),
            l.unstable_scheduleCallback(l.unstable_NormalPriority, yt)));
      }
      function wt(e) {
        function t(t) {
          return Et(t, e);
        }
        if (0 < lt.length) {
          Et(lt[0], e);
          for (var n = 1; n < lt.length; n++) {
            var r = lt[n];
            r.blockedOn === e && (r.blockedOn = null);
          }
        }
        for (
          null !== ot && Et(ot, e),
            null !== ut && Et(ut, e),
            null !== it && Et(it, e),
            st.forEach(t),
            ct.forEach(t),
            n = 0;
          n < dt.length;
          n++
        )
          (r = dt[n]).blockedOn === e && (r.blockedOn = null);
        for (; 0 < dt.length && null === (n = dt[0]).blockedOn; )
          vt(n), null === n.blockedOn && dt.shift();
      }
      function _t(e, t) {
        var n = {};
        return (
          (n[e.toLowerCase()] = t.toLowerCase()),
          (n["Webkit" + e] = "webkit" + t),
          (n["Moz" + e] = "moz" + t),
          n
        );
      }
      var kt = {
          animationend: _t("Animation", "AnimationEnd"),
          animationiteration: _t("Animation", "AnimationIteration"),
          animationstart: _t("Animation", "AnimationStart"),
          transitionend: _t("Transition", "TransitionEnd"),
        },
        St = {},
        Nt = {};
      function Pt(e) {
        if (St[e]) return St[e];
        if (!kt[e]) return e;
        var t,
          n = kt[e];
        for (t in n) if (n.hasOwnProperty(t) && t in Nt) return (St[e] = n[t]);
        return e;
      }
      d &&
        ((Nt = document.createElement("div").style),
        "AnimationEvent" in window ||
          (delete kt.animationend.animation,
          delete kt.animationiteration.animation,
          delete kt.animationstart.animation),
        "TransitionEvent" in window || delete kt.transitionend.transition);
      var xt = Pt("animationend"),
        Tt = Pt("animationiteration"),
        Ct = Pt("animationstart"),
        Ot = Pt("transitionend"),
        Mt = new Map(),
        jt = new Map(),
        At = [
          "abort",
          "abort",
          xt,
          "animationEnd",
          Tt,
          "animationIteration",
          Ct,
          "animationStart",
          "canplay",
          "canPlay",
          "canplaythrough",
          "canPlayThrough",
          "durationchange",
          "durationChange",
          "emptied",
          "emptied",
          "encrypted",
          "encrypted",
          "ended",
          "ended",
          "error",
          "error",
          "gotpointercapture",
          "gotPointerCapture",
          "load",
          "load",
          "loadeddata",
          "loadedData",
          "loadedmetadata",
          "loadedMetadata",
          "loadstart",
          "loadStart",
          "lostpointercapture",
          "lostPointerCapture",
          "playing",
          "playing",
          "progress",
          "progress",
          "seeking",
          "seeking",
          "stalled",
          "stalled",
          "suspend",
          "suspend",
          "timeupdate",
          "timeUpdate",
          Ot,
          "transitionEnd",
          "waiting",
          "waiting",
        ];
      function Lt(e, t) {
        for (var n = 0; n < e.length; n += 2) {
          var r = e[n],
            a = e[n + 1];
          (a = "on" + (a[0].toUpperCase() + a.slice(1))),
            jt.set(r, t),
            Mt.set(r, a),
            s(a, [r]);
        }
      }
      (0, l.unstable_now)();
      var Dt = 8;
      function zt(e) {
        if (0 != (1 & e)) return (Dt = 15), 1;
        if (0 != (2 & e)) return (Dt = 14), 2;
        if (0 != (4 & e)) return (Dt = 13), 4;
        var t = 24 & e;
        return 0 !== t
          ? ((Dt = 12), t)
          : 0 != (32 & e)
          ? ((Dt = 11), 32)
          : 0 != (t = 192 & e)
          ? ((Dt = 10), t)
          : 0 != (256 & e)
          ? ((Dt = 9), 256)
          : 0 != (t = 3584 & e)
          ? ((Dt = 8), t)
          : 0 != (4096 & e)
          ? ((Dt = 7), 4096)
          : 0 != (t = 4186112 & e)
          ? ((Dt = 6), t)
          : 0 != (t = 62914560 & e)
          ? ((Dt = 5), t)
          : 67108864 & e
          ? ((Dt = 4), 67108864)
          : 0 != (134217728 & e)
          ? ((Dt = 3), 134217728)
          : 0 != (t = 805306368 & e)
          ? ((Dt = 2), t)
          : 0 != (1073741824 & e)
          ? ((Dt = 1), 1073741824)
          : ((Dt = 8), e);
      }
      function Rt(e, t) {
        var n = e.pendingLanes;
        if (0 === n) return (Dt = 0);
        var r = 0,
          a = 0,
          l = e.expiredLanes,
          o = e.suspendedLanes,
          u = e.pingedLanes;
        if (0 !== l) (r = l), (a = Dt = 15);
        else if (0 != (l = 134217727 & n)) {
          var i = l & ~o;
          0 !== i
            ? ((r = zt(i)), (a = Dt))
            : 0 != (u &= l) && ((r = zt(u)), (a = Dt));
        } else
          0 != (l = n & ~o)
            ? ((r = zt(l)), (a = Dt))
            : 0 !== u && ((r = zt(u)), (a = Dt));
        if (0 === r) return 0;
        if (
          ((r = n & (((0 > (r = 31 - $t(r)) ? 0 : 1 << r) << 1) - 1)),
          0 !== t && t !== r && 0 == (t & o))
        ) {
          if ((zt(t), a <= Dt)) return t;
          Dt = a;
        }
        if (0 !== (t = e.entangledLanes))
          for (e = e.entanglements, t &= r; 0 < t; )
            (a = 1 << (n = 31 - $t(t))), (r |= e[n]), (t &= ~a);
        return r;
      }
      function It(e) {
        return 0 != (e = -1073741825 & e.pendingLanes)
          ? e
          : 1073741824 & e
          ? 1073741824
          : 0;
      }
      function Ut(e, t) {
        switch (e) {
          case 15:
            return 1;
          case 14:
            return 2;
          case 12:
            return 0 === (e = qt(24 & ~t)) ? Ut(10, t) : e;
          case 10:
            return 0 === (e = qt(192 & ~t)) ? Ut(8, t) : e;
          case 8:
            return (
              0 === (e = qt(3584 & ~t)) &&
                0 === (e = qt(4186112 & ~t)) &&
                (e = 512),
              e
            );
          case 2:
            return 0 === (t = qt(805306368 & ~t)) && (t = 268435456), t;
        }
        throw Error(o(358, e));
      }
      function qt(e) {
        return e & -e;
      }
      function Ft(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t;
      }
      function Bt(e, t, n) {
        e.pendingLanes |= t;
        var r = t - 1;
        (e.suspendedLanes &= r),
          (e.pingedLanes &= r),
          ((e = e.eventTimes)[(t = 31 - $t(t))] = n);
      }
      var $t = Math.clz32
          ? Math.clz32
          : function (e) {
              return 0 === e ? 32 : (31 - ((Yt(e) / Qt) | 0)) | 0;
            },
        Yt = Math.log,
        Qt = Math.LN2,
        Vt = l.unstable_UserBlockingPriority,
        Ht = l.unstable_runWithPriority,
        Wt = !0;
      function Kt(e, t, n, r) {
        ze || Le();
        var a = Xt,
          l = ze;
        ze = !0;
        try {
          Ae(a, e, t, n, r);
        } finally {
          (ze = l) || Ie();
        }
      }
      function Gt(e, t, n, r) {
        Ht(Vt, Xt.bind(null, e, t, n, r));
      }
      function Xt(e, t, n, r) {
        var a;
        if (Wt)
          if ((a = 0 == (4 & t)) && 0 < lt.length && -1 < ft.indexOf(e))
            (e = mt(null, e, t, n, r)), lt.push(e);
          else {
            var l = Jt(e, t, n, r);
            if (null === l) a && pt(e, r);
            else {
              if (a) {
                if (-1 < ft.indexOf(e))
                  return (e = mt(l, e, t, n, r)), void lt.push(e);
                if (
                  (function (e, t, n, r, a) {
                    switch (t) {
                      case "focusin":
                        return (ot = ht(ot, e, t, n, r, a)), !0;
                      case "dragenter":
                        return (ut = ht(ut, e, t, n, r, a)), !0;
                      case "mouseover":
                        return (it = ht(it, e, t, n, r, a)), !0;
                      case "pointerover":
                        var l = a.pointerId;
                        return (
                          st.set(l, ht(st.get(l) || null, e, t, n, r, a)), !0
                        );
                      case "gotpointercapture":
                        return (
                          (l = a.pointerId),
                          ct.set(l, ht(ct.get(l) || null, e, t, n, r, a)),
                          !0
                        );
                    }
                    return !1;
                  })(l, e, t, n, r)
                )
                  return;
                pt(e, r);
              }
              Mr(e, t, r, null, n);
            }
          }
      }
      function Jt(e, t, n, r) {
        var a = Ne(r);
        if (null !== (a = Jr(a))) {
          var l = Ke(a);
          if (null === l) a = null;
          else {
            var o = l.tag;
            if (13 === o) {
              if (null !== (a = Ge(l))) return a;
              a = null;
            } else if (3 === o) {
              if (l.stateNode.hydrate)
                return 3 === l.tag ? l.stateNode.containerInfo : null;
              a = null;
            } else l !== a && (a = null);
          }
        }
        return Mr(e, t, r, a, n), null;
      }
      var Zt = null,
        en = null,
        tn = null;
      function nn() {
        if (tn) return tn;
        var e,
          t,
          n = en,
          r = n.length,
          a = "value" in Zt ? Zt.value : Zt.textContent,
          l = a.length;
        for (e = 0; e < r && n[e] === a[e]; e++);
        var o = r - e;
        for (t = 1; t <= o && n[r - t] === a[l - t]; t++);
        return (tn = a.slice(e, 1 < t ? 1 - t : void 0));
      }
      function rn(e) {
        var t = e.keyCode;
        return (
          "charCode" in e
            ? 0 === (e = e.charCode) && 13 === t && (e = 13)
            : (e = t),
          10 === e && (e = 13),
          32 <= e || 13 === e ? e : 0
        );
      }
      function an() {
        return !0;
      }
      function ln() {
        return !1;
      }
      function on(e) {
        function t(t, n, r, a, l) {
          for (var o in ((this._reactName = t),
          (this._targetInst = r),
          (this.type = n),
          (this.nativeEvent = a),
          (this.target = l),
          (this.currentTarget = null),
          e))
            e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
          return (
            (this.isDefaultPrevented = (
              null != a.defaultPrevented
                ? a.defaultPrevented
                : !1 === a.returnValue
            )
              ? an
              : ln),
            (this.isPropagationStopped = ln),
            this
          );
        }
        return (
          a(t.prototype, {
            preventDefault: function () {
              this.defaultPrevented = !0;
              var e = this.nativeEvent;
              e &&
                (e.preventDefault
                  ? e.preventDefault()
                  : "unknown" != typeof e.returnValue && (e.returnValue = !1),
                (this.isDefaultPrevented = an));
            },
            stopPropagation: function () {
              var e = this.nativeEvent;
              e &&
                (e.stopPropagation
                  ? e.stopPropagation()
                  : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
                (this.isPropagationStopped = an));
            },
            persist: function () {},
            isPersistent: an,
          }),
          t
        );
      }
      var un,
        sn,
        cn,
        dn = {
          eventPhase: 0,
          bubbles: 0,
          cancelable: 0,
          timeStamp: function (e) {
            return e.timeStamp || Date.now();
          },
          defaultPrevented: 0,
          isTrusted: 0,
        },
        fn = on(dn),
        mn = a({}, dn, { view: 0, detail: 0 }),
        pn = on(mn),
        hn = a({}, mn, {
          screenX: 0,
          screenY: 0,
          clientX: 0,
          clientY: 0,
          pageX: 0,
          pageY: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          getModifierState: Pn,
          button: 0,
          buttons: 0,
          relatedTarget: function (e) {
            return void 0 === e.relatedTarget
              ? e.fromElement === e.srcElement
                ? e.toElement
                : e.fromElement
              : e.relatedTarget;
          },
          movementX: function (e) {
            return "movementX" in e
              ? e.movementX
              : (e !== cn &&
                  (cn && "mousemove" === e.type
                    ? ((un = e.screenX - cn.screenX),
                      (sn = e.screenY - cn.screenY))
                    : (sn = un = 0),
                  (cn = e)),
                un);
          },
          movementY: function (e) {
            return "movementY" in e ? e.movementY : sn;
          },
        }),
        vn = on(hn),
        gn = on(a({}, hn, { dataTransfer: 0 })),
        bn = on(a({}, mn, { relatedTarget: 0 })),
        yn = on(
          a({}, dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
        ),
        En = on(
          a({}, dn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          })
        ),
        wn = on(a({}, dn, { data: 0 })),
        _n = {
          Esc: "Escape",
          Spacebar: " ",
          Left: "ArrowLeft",
          Up: "ArrowUp",
          Right: "ArrowRight",
          Down: "ArrowDown",
          Del: "Delete",
          Win: "OS",
          Menu: "ContextMenu",
          Apps: "ContextMenu",
          Scroll: "ScrollLock",
          MozPrintableKey: "Unidentified",
        },
        kn = {
          8: "Backspace",
          9: "Tab",
          12: "Clear",
          13: "Enter",
          16: "Shift",
          17: "Control",
          18: "Alt",
          19: "Pause",
          20: "CapsLock",
          27: "Escape",
          32: " ",
          33: "PageUp",
          34: "PageDown",
          35: "End",
          36: "Home",
          37: "ArrowLeft",
          38: "ArrowUp",
          39: "ArrowRight",
          40: "ArrowDown",
          45: "Insert",
          46: "Delete",
          112: "F1",
          113: "F2",
          114: "F3",
          115: "F4",
          116: "F5",
          117: "F6",
          118: "F7",
          119: "F8",
          120: "F9",
          121: "F10",
          122: "F11",
          123: "F12",
          144: "NumLock",
          145: "ScrollLock",
          224: "Meta",
        },
        Sn = {
          Alt: "altKey",
          Control: "ctrlKey",
          Meta: "metaKey",
          Shift: "shiftKey",
        };
      function Nn(e) {
        var t = this.nativeEvent;
        return t.getModifierState
          ? t.getModifierState(e)
          : !!(e = Sn[e]) && !!t[e];
      }
      function Pn() {
        return Nn;
      }
      var xn = on(
          a({}, mn, {
            key: function (e) {
              if (e.key) {
                var t = _n[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = rn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? kn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Pn,
            charCode: function (e) {
              return "keypress" === e.type ? rn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? rn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          })
        ),
        Tn = on(
          a({}, hn, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0,
          })
        ),
        Cn = on(
          a({}, mn, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Pn,
          })
        ),
        On = on(
          a({}, dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
        ),
        Mn = on(
          a({}, hn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          })
        ),
        jn = [9, 13, 27, 32],
        An = d && "CompositionEvent" in window,
        Ln = null;
      d && "documentMode" in document && (Ln = document.documentMode);
      var Dn = d && "TextEvent" in window && !Ln,
        zn = d && (!An || (Ln && 8 < Ln && 11 >= Ln)),
        Rn = String.fromCharCode(32),
        In = !1;
      function Un(e, t) {
        switch (e) {
          case "keyup":
            return -1 !== jn.indexOf(t.keyCode);
          case "keydown":
            return 229 !== t.keyCode;
          case "keypress":
          case "mousedown":
          case "focusout":
            return !0;
          default:
            return !1;
        }
      }
      function qn(e) {
        return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
      }
      var Fn = !1,
        Bn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
      function $n(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!Bn[e.type] : "textarea" === t;
      }
      function Yn(e, t, n, r) {
        Oe(r),
          0 < (t = Ar(t, "onChange")).length &&
            ((n = new fn("onChange", "change", null, n, r)),
            e.push({ event: n, listeners: t }));
      }
      var Qn = null,
        Vn = null;
      function Hn(e) {
        Nr(e, 0);
      }
      function Wn(e) {
        if (X(ea(e))) return e;
      }
      function Kn(e, t) {
        if ("change" === e) return t;
      }
      var Gn = !1;
      if (d) {
        var Xn;
        if (d) {
          var Jn = "oninput" in document;
          if (!Jn) {
            var Zn = document.createElement("div");
            Zn.setAttribute("oninput", "return;"),
              (Jn = "function" == typeof Zn.oninput);
          }
          Xn = Jn;
        } else Xn = !1;
        Gn = Xn && (!document.documentMode || 9 < document.documentMode);
      }
      function er() {
        Qn && (Qn.detachEvent("onpropertychange", tr), (Vn = Qn = null));
      }
      function tr(e) {
        if ("value" === e.propertyName && Wn(Vn)) {
          var t = [];
          if ((Yn(t, Vn, e, Ne(e)), (e = Hn), ze)) e(t);
          else {
            ze = !0;
            try {
              je(e, t);
            } finally {
              (ze = !1), Ie();
            }
          }
        }
      }
      function nr(e, t, n) {
        "focusin" === e
          ? (er(), (Vn = n), (Qn = t).attachEvent("onpropertychange", tr))
          : "focusout" === e && er();
      }
      function rr(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e)
          return Wn(Vn);
      }
      function ar(e, t) {
        if ("click" === e) return Wn(t);
      }
      function lr(e, t) {
        if ("input" === e || "change" === e) return Wn(t);
      }
      var or =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        ur = Object.prototype.hasOwnProperty;
      function ir(e, t) {
        if (or(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++)
          if (!ur.call(t, n[r]) || !or(e[n[r]], t[n[r]])) return !1;
        return !0;
      }
      function sr(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
      }
      function cr(e, t) {
        var n,
          r = sr(e);
        for (e = 0; r; ) {
          if (3 === r.nodeType) {
            if (((n = e + r.textContent.length), e <= t && n >= t))
              return { node: r, offset: t - e };
            e = n;
          }
          e: {
            for (; r; ) {
              if (r.nextSibling) {
                r = r.nextSibling;
                break e;
              }
              r = r.parentNode;
            }
            r = void 0;
          }
          r = sr(r);
        }
      }
      function dr(e, t) {
        return (
          !(!e || !t) &&
          (e === t ||
            ((!e || 3 !== e.nodeType) &&
              (t && 3 === t.nodeType
                ? dr(e, t.parentNode)
                : "contains" in e
                ? e.contains(t)
                : !!e.compareDocumentPosition &&
                  !!(16 & e.compareDocumentPosition(t)))))
        );
      }
      function fr() {
        for (var e = window, t = J(); t instanceof e.HTMLIFrameElement; ) {
          try {
            var n = "string" == typeof t.contentWindow.location.href;
          } catch (e) {
            n = !1;
          }
          if (!n) break;
          t = J((e = t.contentWindow).document);
        }
        return t;
      }
      function mr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return (
          t &&
          (("input" === t &&
            ("text" === e.type ||
              "search" === e.type ||
              "tel" === e.type ||
              "url" === e.type ||
              "password" === e.type)) ||
            "textarea" === t ||
            "true" === e.contentEditable)
        );
      }
      var pr = d && "documentMode" in document && 11 >= document.documentMode,
        hr = null,
        vr = null,
        gr = null,
        br = !1;
      function yr(e, t, n) {
        var r =
          n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
        br ||
          null == hr ||
          hr !== J(r) ||
          ((r =
            "selectionStart" in (r = hr) && mr(r)
              ? { start: r.selectionStart, end: r.selectionEnd }
              : {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
          (gr && ir(gr, r)) ||
            ((gr = r),
            0 < (r = Ar(vr, "onSelect")).length &&
              ((t = new fn("onSelect", "select", null, t, n)),
              e.push({ event: t, listeners: r }),
              (t.target = hr))));
      }
      Lt(
        "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
          " "
        ),
        0
      ),
        Lt(
          "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
            " "
          ),
          1
        ),
        Lt(At, 2);
      for (
        var Er =
            "change selectionchange textInput compositionstart compositionend compositionupdate".split(
              " "
            ),
          wr = 0;
        wr < Er.length;
        wr++
      )
        jt.set(Er[wr], 0);
      c("onMouseEnter", ["mouseout", "mouseover"]),
        c("onMouseLeave", ["mouseout", "mouseover"]),
        c("onPointerEnter", ["pointerout", "pointerover"]),
        c("onPointerLeave", ["pointerout", "pointerover"]),
        s(
          "onChange",
          "change click focusin focusout input keydown keyup selectionchange".split(
            " "
          )
        ),
        s(
          "onSelect",
          "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
            " "
          )
        ),
        s("onBeforeInput", [
          "compositionend",
          "keypress",
          "textInput",
          "paste",
        ]),
        s(
          "onCompositionEnd",
          "compositionend focusout keydown keypress keyup mousedown".split(" ")
        ),
        s(
          "onCompositionStart",
          "compositionstart focusout keydown keypress keyup mousedown".split(
            " "
          )
        ),
        s(
          "onCompositionUpdate",
          "compositionupdate focusout keydown keypress keyup mousedown".split(
            " "
          )
        );
      var _r =
          "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
          ),
        kr = new Set(
          "cancel close invalid load scroll toggle".split(" ").concat(_r)
        );
      function Sr(e, t, n) {
        var r = e.type || "unknown-event";
        (e.currentTarget = n),
          (function (e, t, n, r, a, l, u, i, s) {
            if ((We.apply(this, arguments), $e)) {
              if (!$e) throw Error(o(198));
              var c = Ye;
              ($e = !1), (Ye = null), Qe || ((Qe = !0), (Ve = c));
            }
          })(r, t, void 0, e),
          (e.currentTarget = null);
      }
      function Nr(e, t) {
        t = 0 != (4 & t);
        for (var n = 0; n < e.length; n++) {
          var r = e[n],
            a = r.event;
          r = r.listeners;
          e: {
            var l = void 0;
            if (t)
              for (var o = r.length - 1; 0 <= o; o--) {
                var u = r[o],
                  i = u.instance,
                  s = u.currentTarget;
                if (((u = u.listener), i !== l && a.isPropagationStopped()))
                  break e;
                Sr(a, u, s), (l = i);
              }
            else
              for (o = 0; o < r.length; o++) {
                if (
                  ((i = (u = r[o]).instance),
                  (s = u.currentTarget),
                  (u = u.listener),
                  i !== l && a.isPropagationStopped())
                )
                  break e;
                Sr(a, u, s), (l = i);
              }
          }
        }
        if (Qe) throw ((e = Ve), (Qe = !1), (Ve = null), e);
      }
      function Pr(e, t) {
        var n = na(t),
          r = e + "__bubble";
        n.has(r) || (Or(t, e, 2, !1), n.add(r));
      }
      var xr = "_reactListening" + Math.random().toString(36).slice(2);
      function Tr(e) {
        e[xr] ||
          ((e[xr] = !0),
          u.forEach(function (t) {
            kr.has(t) || Cr(t, !1, e, null), Cr(t, !0, e, null);
          }));
      }
      function Cr(e, t, n, r) {
        var a =
            4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
          l = n;
        if (
          ("selectionchange" === e && 9 !== n.nodeType && (l = n.ownerDocument),
          null !== r && !t && kr.has(e))
        ) {
          if ("scroll" !== e) return;
          (a |= 2), (l = r);
        }
        var o = na(l),
          u = e + "__" + (t ? "capture" : "bubble");
        o.has(u) || (t && (a |= 4), Or(l, e, a, t), o.add(u));
      }
      function Or(e, t, n, r) {
        var a = jt.get(t);
        switch (void 0 === a ? 2 : a) {
          case 0:
            a = Kt;
            break;
          case 1:
            a = Gt;
            break;
          default:
            a = Xt;
        }
        (n = a.bind(null, t, n, e)),
          (a = void 0),
          !qe ||
            ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
            (a = !0),
          r
            ? void 0 !== a
              ? e.addEventListener(t, n, { capture: !0, passive: a })
              : e.addEventListener(t, n, !0)
            : void 0 !== a
            ? e.addEventListener(t, n, { passive: a })
            : e.addEventListener(t, n, !1);
      }
      function Mr(e, t, n, r, a) {
        var l = r;
        if (0 == (1 & t) && 0 == (2 & t) && null !== r)
          e: for (;;) {
            if (null === r) return;
            var o = r.tag;
            if (3 === o || 4 === o) {
              var u = r.stateNode.containerInfo;
              if (u === a || (8 === u.nodeType && u.parentNode === a)) break;
              if (4 === o)
                for (o = r.return; null !== o; ) {
                  var i = o.tag;
                  if (
                    (3 === i || 4 === i) &&
                    ((i = o.stateNode.containerInfo) === a ||
                      (8 === i.nodeType && i.parentNode === a))
                  )
                    return;
                  o = o.return;
                }
              for (; null !== u; ) {
                if (null === (o = Jr(u))) return;
                if (5 === (i = o.tag) || 6 === i) {
                  r = l = o;
                  continue e;
                }
                u = u.parentNode;
              }
            }
            r = r.return;
          }
        !(function (e, t, n) {
          if (Re) return e();
          Re = !0;
          try {
            De(e, t, n);
          } finally {
            (Re = !1), Ie();
          }
        })(function () {
          var r = l,
            a = Ne(n),
            o = [];
          e: {
            var u = Mt.get(e);
            if (void 0 !== u) {
              var i = fn,
                s = e;
              switch (e) {
                case "keypress":
                  if (0 === rn(n)) break e;
                case "keydown":
                case "keyup":
                  i = xn;
                  break;
                case "focusin":
                  (s = "focus"), (i = bn);
                  break;
                case "focusout":
                  (s = "blur"), (i = bn);
                  break;
                case "beforeblur":
                case "afterblur":
                  i = bn;
                  break;
                case "click":
                  if (2 === n.button) break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  i = vn;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  i = gn;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  i = Cn;
                  break;
                case xt:
                case Tt:
                case Ct:
                  i = yn;
                  break;
                case Ot:
                  i = On;
                  break;
                case "scroll":
                  i = pn;
                  break;
                case "wheel":
                  i = Mn;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  i = En;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  i = Tn;
              }
              var c = 0 != (4 & t),
                d = !c && "scroll" === e,
                f = c ? (null !== u ? u + "Capture" : null) : u;
              c = [];
              for (var m, p = r; null !== p; ) {
                var h = (m = p).stateNode;
                if (
                  (5 === m.tag &&
                    null !== h &&
                    ((m = h),
                    null !== f &&
                      null != (h = Ue(p, f)) &&
                      c.push(jr(p, h, m))),
                  d)
                )
                  break;
                p = p.return;
              }
              0 < c.length &&
                ((u = new i(u, s, null, n, a)),
                o.push({ event: u, listeners: c }));
            }
          }
          if (0 == (7 & t)) {
            if (
              ((i = "mouseout" === e || "pointerout" === e),
              (!(u = "mouseover" === e || "pointerover" === e) ||
                0 != (16 & t) ||
                !(s = n.relatedTarget || n.fromElement) ||
                (!Jr(s) && !s[Gr])) &&
                (i || u) &&
                ((u =
                  a.window === a
                    ? a
                    : (u = a.ownerDocument)
                    ? u.defaultView || u.parentWindow
                    : window),
                i
                  ? ((i = r),
                    null !==
                      (s = (s = n.relatedTarget || n.toElement)
                        ? Jr(s)
                        : null) &&
                      (s !== (d = Ke(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                      (s = null))
                  : ((i = null), (s = r)),
                i !== s))
            ) {
              if (
                ((c = vn),
                (h = "onMouseLeave"),
                (f = "onMouseEnter"),
                (p = "mouse"),
                ("pointerout" !== e && "pointerover" !== e) ||
                  ((c = Tn),
                  (h = "onPointerLeave"),
                  (f = "onPointerEnter"),
                  (p = "pointer")),
                (d = null == i ? u : ea(i)),
                (m = null == s ? u : ea(s)),
                ((u = new c(h, p + "leave", i, n, a)).target = d),
                (u.relatedTarget = m),
                (h = null),
                Jr(a) === r &&
                  (((c = new c(f, p + "enter", s, n, a)).target = m),
                  (c.relatedTarget = d),
                  (h = c)),
                (d = h),
                i && s)
              )
                e: {
                  for (f = s, p = 0, m = c = i; m; m = Lr(m)) p++;
                  for (m = 0, h = f; h; h = Lr(h)) m++;
                  for (; 0 < p - m; ) (c = Lr(c)), p--;
                  for (; 0 < m - p; ) (f = Lr(f)), m--;
                  for (; p--; ) {
                    if (c === f || (null !== f && c === f.alternate)) break e;
                    (c = Lr(c)), (f = Lr(f));
                  }
                  c = null;
                }
              else c = null;
              null !== i && Dr(o, u, i, c, !1),
                null !== s && null !== d && Dr(o, d, s, c, !0);
            }
            if (
              "select" ===
                (i =
                  (u = r ? ea(r) : window).nodeName &&
                  u.nodeName.toLowerCase()) ||
              ("input" === i && "file" === u.type)
            )
              var v = Kn;
            else if ($n(u))
              if (Gn) v = lr;
              else {
                v = rr;
                var g = nr;
              }
            else
              (i = u.nodeName) &&
                "input" === i.toLowerCase() &&
                ("checkbox" === u.type || "radio" === u.type) &&
                (v = ar);
            switch (
              (v && (v = v(e, r))
                ? Yn(o, v, n, a)
                : (g && g(e, u, r),
                  "focusout" === e &&
                    (g = u._wrapperState) &&
                    g.controlled &&
                    "number" === u.type &&
                    ae(u, "number", u.value)),
              (g = r ? ea(r) : window),
              e)
            ) {
              case "focusin":
                ($n(g) || "true" === g.contentEditable) &&
                  ((hr = g), (vr = r), (gr = null));
                break;
              case "focusout":
                gr = vr = hr = null;
                break;
              case "mousedown":
                br = !0;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                (br = !1), yr(o, n, a);
                break;
              case "selectionchange":
                if (pr) break;
              case "keydown":
              case "keyup":
                yr(o, n, a);
            }
            var b;
            if (An)
              e: {
                switch (e) {
                  case "compositionstart":
                    var y = "onCompositionStart";
                    break e;
                  case "compositionend":
                    y = "onCompositionEnd";
                    break e;
                  case "compositionupdate":
                    y = "onCompositionUpdate";
                    break e;
                }
                y = void 0;
              }
            else
              Fn
                ? Un(e, n) && (y = "onCompositionEnd")
                : "keydown" === e &&
                  229 === n.keyCode &&
                  (y = "onCompositionStart");
            y &&
              (zn &&
                "ko" !== n.locale &&
                (Fn || "onCompositionStart" !== y
                  ? "onCompositionEnd" === y && Fn && (b = nn())
                  : ((en = "value" in (Zt = a) ? Zt.value : Zt.textContent),
                    (Fn = !0))),
              0 < (g = Ar(r, y)).length &&
                ((y = new wn(y, e, null, n, a)),
                o.push({ event: y, listeners: g }),
                (b || null !== (b = qn(n))) && (y.data = b))),
              (b = Dn
                ? (function (e, t) {
                    switch (e) {
                      case "compositionend":
                        return qn(t);
                      case "keypress":
                        return 32 !== t.which ? null : ((In = !0), Rn);
                      case "textInput":
                        return (e = t.data) === Rn && In ? null : e;
                      default:
                        return null;
                    }
                  })(e, n)
                : (function (e, t) {
                    if (Fn)
                      return "compositionend" === e || (!An && Un(e, t))
                        ? ((e = nn()), (tn = en = Zt = null), (Fn = !1), e)
                        : null;
                    switch (e) {
                      case "paste":
                        return null;
                      case "keypress":
                        if (
                          !(t.ctrlKey || t.altKey || t.metaKey) ||
                          (t.ctrlKey && t.altKey)
                        ) {
                          if (t.char && 1 < t.char.length) return t.char;
                          if (t.which) return String.fromCharCode(t.which);
                        }
                        return null;
                      case "compositionend":
                        return zn && "ko" !== t.locale ? null : t.data;
                      default:
                        return null;
                    }
                  })(e, n)) &&
                0 < (r = Ar(r, "onBeforeInput")).length &&
                ((a = new wn("onBeforeInput", "beforeinput", null, n, a)),
                o.push({ event: a, listeners: r }),
                (a.data = b));
          }
          Nr(o, t);
        });
      }
      function jr(e, t, n) {
        return { instance: e, listener: t, currentTarget: n };
      }
      function Ar(e, t) {
        for (var n = t + "Capture", r = []; null !== e; ) {
          var a = e,
            l = a.stateNode;
          5 === a.tag &&
            null !== l &&
            ((a = l),
            null != (l = Ue(e, n)) && r.unshift(jr(e, l, a)),
            null != (l = Ue(e, t)) && r.push(jr(e, l, a))),
            (e = e.return);
        }
        return r;
      }
      function Lr(e) {
        if (null === e) return null;
        do {
          e = e.return;
        } while (e && 5 !== e.tag);
        return e || null;
      }
      function Dr(e, t, n, r, a) {
        for (var l = t._reactName, o = []; null !== n && n !== r; ) {
          var u = n,
            i = u.alternate,
            s = u.stateNode;
          if (null !== i && i === r) break;
          5 === u.tag &&
            null !== s &&
            ((u = s),
            a
              ? null != (i = Ue(n, l)) && o.unshift(jr(n, i, u))
              : a || (null != (i = Ue(n, l)) && o.push(jr(n, i, u)))),
            (n = n.return);
        }
        0 !== o.length && e.push({ event: t, listeners: o });
      }
      function zr() {}
      var Rr = null,
        Ir = null;
      function Ur(e, t) {
        switch (e) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            return !!t.autoFocus;
        }
        return !1;
      }
      function qr(e, t) {
        return (
          "textarea" === e ||
          "option" === e ||
          "noscript" === e ||
          "string" == typeof t.children ||
          "number" == typeof t.children ||
          ("object" == typeof t.dangerouslySetInnerHTML &&
            null !== t.dangerouslySetInnerHTML &&
            null != t.dangerouslySetInnerHTML.__html)
        );
      }
      var Fr = "function" == typeof setTimeout ? setTimeout : void 0,
        Br = "function" == typeof clearTimeout ? clearTimeout : void 0;
      function $r(e) {
        (1 === e.nodeType || (9 === e.nodeType && null != (e = e.body))) &&
          (e.textContent = "");
      }
      function Yr(e) {
        for (; null != e; e = e.nextSibling) {
          var t = e.nodeType;
          if (1 === t || 3 === t) break;
        }
        return e;
      }
      function Qr(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
          if (8 === e.nodeType) {
            var n = e.data;
            if ("$" === n || "$!" === n || "$?" === n) {
              if (0 === t) return e;
              t--;
            } else "/$" === n && t++;
          }
          e = e.previousSibling;
        }
        return null;
      }
      var Vr = 0,
        Hr = Math.random().toString(36).slice(2),
        Wr = "__reactFiber$" + Hr,
        Kr = "__reactProps$" + Hr,
        Gr = "__reactContainer$" + Hr,
        Xr = "__reactEvents$" + Hr;
      function Jr(e) {
        var t = e[Wr];
        if (t) return t;
        for (var n = e.parentNode; n; ) {
          if ((t = n[Gr] || n[Wr])) {
            if (
              ((n = t.alternate),
              null !== t.child || (null !== n && null !== n.child))
            )
              for (e = Qr(e); null !== e; ) {
                if ((n = e[Wr])) return n;
                e = Qr(e);
              }
            return t;
          }
          n = (e = n).parentNode;
        }
        return null;
      }
      function Zr(e) {
        return !(e = e[Wr] || e[Gr]) ||
          (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
          ? null
          : e;
      }
      function ea(e) {
        if (5 === e.tag || 6 === e.tag) return e.stateNode;
        throw Error(o(33));
      }
      function ta(e) {
        return e[Kr] || null;
      }
      function na(e) {
        var t = e[Xr];
        return void 0 === t && (t = e[Xr] = new Set()), t;
      }
      var ra = [],
        aa = -1;
      function la(e) {
        return { current: e };
      }
      function oa(e) {
        0 > aa || ((e.current = ra[aa]), (ra[aa] = null), aa--);
      }
      function ua(e, t) {
        aa++, (ra[aa] = e.current), (e.current = t);
      }
      var ia = {},
        sa = la(ia),
        ca = la(!1),
        da = ia;
      function fa(e, t) {
        var n = e.type.contextTypes;
        if (!n) return ia;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
          return r.__reactInternalMemoizedMaskedChildContext;
        var a,
          l = {};
        for (a in n) l[a] = t[a];
        return (
          r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
              t),
            (e.__reactInternalMemoizedMaskedChildContext = l)),
          l
        );
      }
      function ma(e) {
        return null != e.childContextTypes;
      }
      function pa() {
        oa(ca), oa(sa);
      }
      function ha(e, t, n) {
        if (sa.current !== ia) throw Error(o(168));
        ua(sa, t), ua(ca, n);
      }
      function va(e, t, n) {
        var r = e.stateNode;
        if (((e = t.childContextTypes), "function" != typeof r.getChildContext))
          return n;
        for (var l in (r = r.getChildContext()))
          if (!(l in e)) throw Error(o(108, H(t) || "Unknown", l));
        return a({}, n, r);
      }
      function ga(e) {
        return (
          (e =
            ((e = e.stateNode) &&
              e.__reactInternalMemoizedMergedChildContext) ||
            ia),
          (da = sa.current),
          ua(sa, e),
          ua(ca, ca.current),
          !0
        );
      }
      function ba(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(o(169));
        n
          ? ((e = va(e, t, da)),
            (r.__reactInternalMemoizedMergedChildContext = e),
            oa(ca),
            oa(sa),
            ua(sa, e))
          : oa(ca),
          ua(ca, n);
      }
      var ya = null,
        Ea = null,
        wa = l.unstable_runWithPriority,
        _a = l.unstable_scheduleCallback,
        ka = l.unstable_cancelCallback,
        Sa = l.unstable_shouldYield,
        Na = l.unstable_requestPaint,
        Pa = l.unstable_now,
        xa = l.unstable_getCurrentPriorityLevel,
        Ta = l.unstable_ImmediatePriority,
        Ca = l.unstable_UserBlockingPriority,
        Oa = l.unstable_NormalPriority,
        Ma = l.unstable_LowPriority,
        ja = l.unstable_IdlePriority,
        Aa = {},
        La = void 0 !== Na ? Na : function () {},
        Da = null,
        za = null,
        Ra = !1,
        Ia = Pa(),
        Ua =
          1e4 > Ia
            ? Pa
            : function () {
                return Pa() - Ia;
              };
      function qa() {
        switch (xa()) {
          case Ta:
            return 99;
          case Ca:
            return 98;
          case Oa:
            return 97;
          case Ma:
            return 96;
          case ja:
            return 95;
          default:
            throw Error(o(332));
        }
      }
      function Fa(e) {
        switch (e) {
          case 99:
            return Ta;
          case 98:
            return Ca;
          case 97:
            return Oa;
          case 96:
            return Ma;
          case 95:
            return ja;
          default:
            throw Error(o(332));
        }
      }
      function Ba(e, t) {
        return (e = Fa(e)), wa(e, t);
      }
      function $a(e, t, n) {
        return (e = Fa(e)), _a(e, t, n);
      }
      function Ya() {
        if (null !== za) {
          var e = za;
          (za = null), ka(e);
        }
        Qa();
      }
      function Qa() {
        if (!Ra && null !== Da) {
          Ra = !0;
          var e = 0;
          try {
            var t = Da;
            Ba(99, function () {
              for (; e < t.length; e++) {
                var n = t[e];
                do {
                  n = n(!0);
                } while (null !== n);
              }
            }),
              (Da = null);
          } catch (t) {
            throw (null !== Da && (Da = Da.slice(e + 1)), _a(Ta, Ya), t);
          } finally {
            Ra = !1;
          }
        }
      }
      var Va = w.ReactCurrentBatchConfig;
      function Ha(e, t) {
        if (e && e.defaultProps) {
          for (var n in ((t = a({}, t)), (e = e.defaultProps)))
            void 0 === t[n] && (t[n] = e[n]);
          return t;
        }
        return t;
      }
      var Wa = la(null),
        Ka = null,
        Ga = null,
        Xa = null;
      function Ja() {
        Xa = Ga = Ka = null;
      }
      function Za(e) {
        var t = Wa.current;
        oa(Wa), (e.type._context._currentValue = t);
      }
      function el(e, t) {
        for (; null !== e; ) {
          var n = e.alternate;
          if ((e.childLanes & t) === t) {
            if (null === n || (n.childLanes & t) === t) break;
            n.childLanes |= t;
          } else (e.childLanes |= t), null !== n && (n.childLanes |= t);
          e = e.return;
        }
      }
      function tl(e, t) {
        (Ka = e),
          (Xa = Ga = null),
          null !== (e = e.dependencies) &&
            null !== e.firstContext &&
            (0 != (e.lanes & t) && (Ao = !0), (e.firstContext = null));
      }
      function nl(e, t) {
        if (Xa !== e && !1 !== t && 0 !== t)
          if (
            (("number" == typeof t && 1073741823 !== t) ||
              ((Xa = e), (t = 1073741823)),
            (t = { context: e, observedBits: t, next: null }),
            null === Ga)
          ) {
            if (null === Ka) throw Error(o(308));
            (Ga = t),
              (Ka.dependencies = {
                lanes: 0,
                firstContext: t,
                responders: null,
              });
          } else Ga = Ga.next = t;
        return e._currentValue;
      }
      var rl = !1;
      function al(e) {
        e.updateQueue = {
          baseState: e.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: { pending: null },
          effects: null,
        };
      }
      function ll(e, t) {
        (e = e.updateQueue),
          t.updateQueue === e &&
            (t.updateQueue = {
              baseState: e.baseState,
              firstBaseUpdate: e.firstBaseUpdate,
              lastBaseUpdate: e.lastBaseUpdate,
              shared: e.shared,
              effects: e.effects,
            });
      }
      function ol(e, t) {
        return {
          eventTime: e,
          lane: t,
          tag: 0,
          payload: null,
          callback: null,
          next: null,
        };
      }
      function ul(e, t) {
        if (null !== (e = e.updateQueue)) {
          var n = (e = e.shared).pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
      }
      function il(e, t) {
        var n = e.updateQueue,
          r = e.alternate;
        if (null !== r && n === (r = r.updateQueue)) {
          var a = null,
            l = null;
          if (null !== (n = n.firstBaseUpdate)) {
            do {
              var o = {
                eventTime: n.eventTime,
                lane: n.lane,
                tag: n.tag,
                payload: n.payload,
                callback: n.callback,
                next: null,
              };
              null === l ? (a = l = o) : (l = l.next = o), (n = n.next);
            } while (null !== n);
            null === l ? (a = l = t) : (l = l.next = t);
          } else a = l = t;
          return (
            (n = {
              baseState: r.baseState,
              firstBaseUpdate: a,
              lastBaseUpdate: l,
              shared: r.shared,
              effects: r.effects,
            }),
            void (e.updateQueue = n)
          );
        }
        null === (e = n.lastBaseUpdate)
          ? (n.firstBaseUpdate = t)
          : (e.next = t),
          (n.lastBaseUpdate = t);
      }
      function sl(e, t, n, r) {
        var l = e.updateQueue;
        rl = !1;
        var o = l.firstBaseUpdate,
          u = l.lastBaseUpdate,
          i = l.shared.pending;
        if (null !== i) {
          l.shared.pending = null;
          var s = i,
            c = s.next;
          (s.next = null), null === u ? (o = c) : (u.next = c), (u = s);
          var d = e.alternate;
          if (null !== d) {
            var f = (d = d.updateQueue).lastBaseUpdate;
            f !== u &&
              (null === f ? (d.firstBaseUpdate = c) : (f.next = c),
              (d.lastBaseUpdate = s));
          }
        }
        if (null !== o) {
          for (f = l.baseState, u = 0, d = c = s = null; ; ) {
            i = o.lane;
            var m = o.eventTime;
            if ((r & i) === i) {
              null !== d &&
                (d = d.next =
                  {
                    eventTime: m,
                    lane: 0,
                    tag: o.tag,
                    payload: o.payload,
                    callback: o.callback,
                    next: null,
                  });
              e: {
                var p = e,
                  h = o;
                switch (((i = t), (m = n), h.tag)) {
                  case 1:
                    if ("function" == typeof (p = h.payload)) {
                      f = p.call(m, f, i);
                      break e;
                    }
                    f = p;
                    break e;
                  case 3:
                    p.flags = (-4097 & p.flags) | 64;
                  case 0:
                    if (
                      null ==
                      (i =
                        "function" == typeof (p = h.payload)
                          ? p.call(m, f, i)
                          : p)
                    )
                      break e;
                    f = a({}, f, i);
                    break e;
                  case 2:
                    rl = !0;
                }
              }
              null !== o.callback &&
                ((e.flags |= 32),
                null === (i = l.effects) ? (l.effects = [o]) : i.push(o));
            } else
              (m = {
                eventTime: m,
                lane: i,
                tag: o.tag,
                payload: o.payload,
                callback: o.callback,
                next: null,
              }),
                null === d ? ((c = d = m), (s = f)) : (d = d.next = m),
                (u |= i);
            if (null === (o = o.next)) {
              if (null === (i = l.shared.pending)) break;
              (o = i.next),
                (i.next = null),
                (l.lastBaseUpdate = i),
                (l.shared.pending = null);
            }
          }
          null === d && (s = f),
            (l.baseState = s),
            (l.firstBaseUpdate = c),
            (l.lastBaseUpdate = d),
            (Du |= u),
            (e.lanes = u),
            (e.memoizedState = f);
        }
      }
      function cl(e, t, n) {
        if (((e = t.effects), (t.effects = null), null !== e))
          for (t = 0; t < e.length; t++) {
            var r = e[t],
              a = r.callback;
            if (null !== a) {
              if (((r.callback = null), (r = n), "function" != typeof a))
                throw Error(o(191, a));
              a.call(r);
            }
          }
      }
      var dl = new r.Component().refs;
      function fl(e, t, n, r) {
        (n = null == (n = n(r, (t = e.memoizedState))) ? t : a({}, t, n)),
          (e.memoizedState = n),
          0 === e.lanes && (e.updateQueue.baseState = n);
      }
      var ml = {
        isMounted: function (e) {
          return !!(e = e._reactInternals) && Ke(e) === e;
        },
        enqueueSetState: function (e, t, n) {
          e = e._reactInternals;
          var r = oi(),
            a = ui(e),
            l = ol(r, a);
          (l.payload = t), null != n && (l.callback = n), ul(e, l), ii(e, a, r);
        },
        enqueueReplaceState: function (e, t, n) {
          e = e._reactInternals;
          var r = oi(),
            a = ui(e),
            l = ol(r, a);
          (l.tag = 1),
            (l.payload = t),
            null != n && (l.callback = n),
            ul(e, l),
            ii(e, a, r);
        },
        enqueueForceUpdate: function (e, t) {
          e = e._reactInternals;
          var n = oi(),
            r = ui(e),
            a = ol(n, r);
          (a.tag = 2), null != t && (a.callback = t), ul(e, a), ii(e, r, n);
        },
      };
      function pl(e, t, n, r, a, l, o) {
        return "function" == typeof (e = e.stateNode).shouldComponentUpdate
          ? e.shouldComponentUpdate(r, l, o)
          : !(
              t.prototype &&
              t.prototype.isPureReactComponent &&
              ir(n, r) &&
              ir(a, l)
            );
      }
      function hl(e, t, n) {
        var r = !1,
          a = ia,
          l = t.contextType;
        return (
          "object" == typeof l && null !== l
            ? (l = nl(l))
            : ((a = ma(t) ? da : sa.current),
              (l = (r = null != (r = t.contextTypes)) ? fa(e, a) : ia)),
          (t = new t(n, l)),
          (e.memoizedState =
            null !== t.state && void 0 !== t.state ? t.state : null),
          (t.updater = ml),
          (e.stateNode = t),
          (t._reactInternals = e),
          r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
              a),
            (e.__reactInternalMemoizedMaskedChildContext = l)),
          t
        );
      }
      function vl(e, t, n, r) {
        (e = t.state),
          "function" == typeof t.componentWillReceiveProps &&
            t.componentWillReceiveProps(n, r),
          "function" == typeof t.UNSAFE_componentWillReceiveProps &&
            t.UNSAFE_componentWillReceiveProps(n, r),
          t.state !== e && ml.enqueueReplaceState(t, t.state, null);
      }
      function gl(e, t, n, r) {
        var a = e.stateNode;
        (a.props = n), (a.state = e.memoizedState), (a.refs = dl), al(e);
        var l = t.contextType;
        "object" == typeof l && null !== l
          ? (a.context = nl(l))
          : ((l = ma(t) ? da : sa.current), (a.context = fa(e, l))),
          sl(e, n, a, r),
          (a.state = e.memoizedState),
          "function" == typeof (l = t.getDerivedStateFromProps) &&
            (fl(e, t, l, n), (a.state = e.memoizedState)),
          "function" == typeof t.getDerivedStateFromProps ||
            "function" == typeof a.getSnapshotBeforeUpdate ||
            ("function" != typeof a.UNSAFE_componentWillMount &&
              "function" != typeof a.componentWillMount) ||
            ((t = a.state),
            "function" == typeof a.componentWillMount && a.componentWillMount(),
            "function" == typeof a.UNSAFE_componentWillMount &&
              a.UNSAFE_componentWillMount(),
            t !== a.state && ml.enqueueReplaceState(a, a.state, null),
            sl(e, n, a, r),
            (a.state = e.memoizedState)),
          "function" == typeof a.componentDidMount && (e.flags |= 4);
      }
      var bl = Array.isArray;
      function yl(e, t, n) {
        if (
          null !== (e = n.ref) &&
          "function" != typeof e &&
          "object" != typeof e
        ) {
          if (n._owner) {
            if ((n = n._owner)) {
              if (1 !== n.tag) throw Error(o(309));
              var r = n.stateNode;
            }
            if (!r) throw Error(o(147, e));
            var a = "" + e;
            return null !== t &&
              null !== t.ref &&
              "function" == typeof t.ref &&
              t.ref._stringRef === a
              ? t.ref
              : (((t = function (e) {
                  var t = r.refs;
                  t === dl && (t = r.refs = {}),
                    null === e ? delete t[a] : (t[a] = e);
                })._stringRef = a),
                t);
          }
          if ("string" != typeof e) throw Error(o(284));
          if (!n._owner) throw Error(o(290, e));
        }
        return e;
      }
      function El(e, t) {
        if ("textarea" !== e.type)
          throw Error(
            o(
              31,
              "[object Object]" === Object.prototype.toString.call(t)
                ? "object with keys {" + Object.keys(t).join(", ") + "}"
                : t
            )
          );
      }
      function wl(e) {
        function t(t, n) {
          if (e) {
            var r = t.lastEffect;
            null !== r
              ? ((r.nextEffect = n), (t.lastEffect = n))
              : (t.firstEffect = t.lastEffect = n),
              (n.nextEffect = null),
              (n.flags = 8);
          }
        }
        function n(n, r) {
          if (!e) return null;
          for (; null !== r; ) t(n, r), (r = r.sibling);
          return null;
        }
        function r(e, t) {
          for (e = new Map(); null !== t; )
            null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
              (t = t.sibling);
          return e;
        }
        function a(e, t) {
          return ((e = qi(e, t)).index = 0), (e.sibling = null), e;
        }
        function l(t, n, r) {
          return (
            (t.index = r),
            e
              ? null !== (r = t.alternate)
                ? (r = r.index) < n
                  ? ((t.flags = 2), n)
                  : r
                : ((t.flags = 2), n)
              : n
          );
        }
        function u(t) {
          return e && null === t.alternate && (t.flags = 2), t;
        }
        function i(e, t, n, r) {
          return null === t || 6 !== t.tag
            ? (((t = Yi(n, e.mode, r)).return = e), t)
            : (((t = a(t, n)).return = e), t);
        }
        function s(e, t, n, r) {
          return null !== t && t.elementType === n.type
            ? (((r = a(t, n.props)).ref = yl(e, t, n)), (r.return = e), r)
            : (((r = Fi(n.type, n.key, n.props, null, e.mode, r)).ref = yl(
                e,
                t,
                n
              )),
              (r.return = e),
              r);
        }
        function c(e, t, n, r) {
          return null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
            ? (((t = Qi(n, e.mode, r)).return = e), t)
            : (((t = a(t, n.children || [])).return = e), t);
        }
        function d(e, t, n, r, l) {
          return null === t || 7 !== t.tag
            ? (((t = Bi(n, e.mode, r, l)).return = e), t)
            : (((t = a(t, n)).return = e), t);
        }
        function f(e, t, n) {
          if ("string" == typeof t || "number" == typeof t)
            return ((t = Yi("" + t, e.mode, n)).return = e), t;
          if ("object" == typeof t && null !== t) {
            switch (t.$$typeof) {
              case _:
                return (
                  ((n = Fi(t.type, t.key, t.props, null, e.mode, n)).ref = yl(
                    e,
                    null,
                    t
                  )),
                  (n.return = e),
                  n
                );
              case k:
                return ((t = Qi(t, e.mode, n)).return = e), t;
            }
            if (bl(t) || B(t))
              return ((t = Bi(t, e.mode, n, null)).return = e), t;
            El(e, t);
          }
          return null;
        }
        function m(e, t, n, r) {
          var a = null !== t ? t.key : null;
          if ("string" == typeof n || "number" == typeof n)
            return null !== a ? null : i(e, t, "" + n, r);
          if ("object" == typeof n && null !== n) {
            switch (n.$$typeof) {
              case _:
                return n.key === a
                  ? n.type === S
                    ? d(e, t, n.props.children, r, a)
                    : s(e, t, n, r)
                  : null;
              case k:
                return n.key === a ? c(e, t, n, r) : null;
            }
            if (bl(n) || B(n)) return null !== a ? null : d(e, t, n, r, null);
            El(e, n);
          }
          return null;
        }
        function p(e, t, n, r, a) {
          if ("string" == typeof r || "number" == typeof r)
            return i(t, (e = e.get(n) || null), "" + r, a);
          if ("object" == typeof r && null !== r) {
            switch (r.$$typeof) {
              case _:
                return (
                  (e = e.get(null === r.key ? n : r.key) || null),
                  r.type === S
                    ? d(t, e, r.props.children, a, r.key)
                    : s(t, e, r, a)
                );
              case k:
                return c(
                  t,
                  (e = e.get(null === r.key ? n : r.key) || null),
                  r,
                  a
                );
            }
            if (bl(r) || B(r)) return d(t, (e = e.get(n) || null), r, a, null);
            El(t, r);
          }
          return null;
        }
        function h(a, o, u, i) {
          for (
            var s = null, c = null, d = o, h = (o = 0), v = null;
            null !== d && h < u.length;
            h++
          ) {
            d.index > h ? ((v = d), (d = null)) : (v = d.sibling);
            var g = m(a, d, u[h], i);
            if (null === g) {
              null === d && (d = v);
              break;
            }
            e && d && null === g.alternate && t(a, d),
              (o = l(g, o, h)),
              null === c ? (s = g) : (c.sibling = g),
              (c = g),
              (d = v);
          }
          if (h === u.length) return n(a, d), s;
          if (null === d) {
            for (; h < u.length; h++)
              null !== (d = f(a, u[h], i)) &&
                ((o = l(d, o, h)),
                null === c ? (s = d) : (c.sibling = d),
                (c = d));
            return s;
          }
          for (d = r(a, d); h < u.length; h++)
            null !== (v = p(d, a, h, u[h], i)) &&
              (e &&
                null !== v.alternate &&
                d.delete(null === v.key ? h : v.key),
              (o = l(v, o, h)),
              null === c ? (s = v) : (c.sibling = v),
              (c = v));
          return (
            e &&
              d.forEach(function (e) {
                return t(a, e);
              }),
            s
          );
        }
        function v(a, u, i, s) {
          var c = B(i);
          if ("function" != typeof c) throw Error(o(150));
          if (null == (i = c.call(i))) throw Error(o(151));
          for (
            var d = (c = null), h = u, v = (u = 0), g = null, b = i.next();
            null !== h && !b.done;
            v++, b = i.next()
          ) {
            h.index > v ? ((g = h), (h = null)) : (g = h.sibling);
            var y = m(a, h, b.value, s);
            if (null === y) {
              null === h && (h = g);
              break;
            }
            e && h && null === y.alternate && t(a, h),
              (u = l(y, u, v)),
              null === d ? (c = y) : (d.sibling = y),
              (d = y),
              (h = g);
          }
          if (b.done) return n(a, h), c;
          if (null === h) {
            for (; !b.done; v++, b = i.next())
              null !== (b = f(a, b.value, s)) &&
                ((u = l(b, u, v)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b));
            return c;
          }
          for (h = r(a, h); !b.done; v++, b = i.next())
            null !== (b = p(h, a, v, b.value, s)) &&
              (e &&
                null !== b.alternate &&
                h.delete(null === b.key ? v : b.key),
              (u = l(b, u, v)),
              null === d ? (c = b) : (d.sibling = b),
              (d = b));
          return (
            e &&
              h.forEach(function (e) {
                return t(a, e);
              }),
            c
          );
        }
        return function (e, r, l, i) {
          var s =
            "object" == typeof l &&
            null !== l &&
            l.type === S &&
            null === l.key;
          s && (l = l.props.children);
          var c = "object" == typeof l && null !== l;
          if (c)
            switch (l.$$typeof) {
              case _:
                e: {
                  for (c = l.key, s = r; null !== s; ) {
                    if (s.key === c) {
                      switch (s.tag) {
                        case 7:
                          if (l.type === S) {
                            n(e, s.sibling),
                              ((r = a(s, l.props.children)).return = e),
                              (e = r);
                            break e;
                          }
                          break;
                        default:
                          if (s.elementType === l.type) {
                            n(e, s.sibling),
                              ((r = a(s, l.props)).ref = yl(e, s, l)),
                              (r.return = e),
                              (e = r);
                            break e;
                          }
                      }
                      n(e, s);
                      break;
                    }
                    t(e, s), (s = s.sibling);
                  }
                  l.type === S
                    ? (((r = Bi(l.props.children, e.mode, i, l.key)).return =
                        e),
                      (e = r))
                    : (((i = Fi(l.type, l.key, l.props, null, e.mode, i)).ref =
                        yl(e, r, l)),
                      (i.return = e),
                      (e = i));
                }
                return u(e);
              case k:
                e: {
                  for (s = l.key; null !== r; ) {
                    if (r.key === s) {
                      if (
                        4 === r.tag &&
                        r.stateNode.containerInfo === l.containerInfo &&
                        r.stateNode.implementation === l.implementation
                      ) {
                        n(e, r.sibling),
                          ((r = a(r, l.children || [])).return = e),
                          (e = r);
                        break e;
                      }
                      n(e, r);
                      break;
                    }
                    t(e, r), (r = r.sibling);
                  }
                  ((r = Qi(l, e.mode, i)).return = e), (e = r);
                }
                return u(e);
            }
          if ("string" == typeof l || "number" == typeof l)
            return (
              (l = "" + l),
              null !== r && 6 === r.tag
                ? (n(e, r.sibling), ((r = a(r, l)).return = e), (e = r))
                : (n(e, r), ((r = Yi(l, e.mode, i)).return = e), (e = r)),
              u(e)
            );
          if (bl(l)) return h(e, r, l, i);
          if (B(l)) return v(e, r, l, i);
          if ((c && El(e, l), void 0 === l && !s))
            switch (e.tag) {
              case 1:
              case 22:
              case 0:
              case 11:
              case 15:
                throw Error(o(152, H(e.type) || "Component"));
            }
          return n(e, r);
        };
      }
      var _l = wl(!0),
        kl = wl(!1),
        Sl = {},
        Nl = la(Sl),
        Pl = la(Sl),
        xl = la(Sl);
      function Tl(e) {
        if (e === Sl) throw Error(o(174));
        return e;
      }
      function Cl(e, t) {
        switch ((ua(xl, t), ua(Pl, e), ua(Nl, Sl), (e = t.nodeType))) {
          case 9:
          case 11:
            t = (t = t.documentElement) ? t.namespaceURI : me(null, "");
            break;
          default:
            t = me(
              (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
              (e = e.tagName)
            );
        }
        oa(Nl), ua(Nl, t);
      }
      function Ol() {
        oa(Nl), oa(Pl), oa(xl);
      }
      function Ml(e) {
        Tl(xl.current);
        var t = Tl(Nl.current),
          n = me(t, e.type);
        t !== n && (ua(Pl, e), ua(Nl, n));
      }
      function jl(e) {
        Pl.current === e && (oa(Nl), oa(Pl));
      }
      var Al = la(0);
      function Ll(e) {
        for (var t = e; null !== t; ) {
          if (13 === t.tag) {
            var n = t.memoizedState;
            if (
              null !== n &&
              (null === (n = n.dehydrated) ||
                "$?" === n.data ||
                "$!" === n.data)
            )
              return t;
          } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
            if (0 != (64 & t.flags)) return t;
          } else if (null !== t.child) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break;
          for (; null === t.sibling; ) {
            if (null === t.return || t.return === e) return null;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
        return null;
      }
      var Dl = null,
        zl = null,
        Rl = !1;
      function Il(e, t) {
        var n = Ii(5, null, null, 0);
        (n.elementType = "DELETED"),
          (n.type = "DELETED"),
          (n.stateNode = t),
          (n.return = e),
          (n.flags = 8),
          null !== e.lastEffect
            ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
            : (e.firstEffect = e.lastEffect = n);
      }
      function Ul(e, t) {
        switch (e.tag) {
          case 5:
            var n = e.type;
            return (
              null !==
                (t =
                  1 !== t.nodeType ||
                  n.toLowerCase() !== t.nodeName.toLowerCase()
                    ? null
                    : t) && ((e.stateNode = t), !0)
            );
          case 6:
            return (
              null !==
                (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
              ((e.stateNode = t), !0)
            );
          case 13:
          default:
            return !1;
        }
      }
      function ql(e) {
        if (Rl) {
          var t = zl;
          if (t) {
            var n = t;
            if (!Ul(e, t)) {
              if (!(t = Yr(n.nextSibling)) || !Ul(e, t))
                return (
                  (e.flags = (-1025 & e.flags) | 2), (Rl = !1), void (Dl = e)
                );
              Il(Dl, n);
            }
            (Dl = e), (zl = Yr(t.firstChild));
          } else (e.flags = (-1025 & e.flags) | 2), (Rl = !1), (Dl = e);
        }
      }
      function Fl(e) {
        for (
          e = e.return;
          null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

        )
          e = e.return;
        Dl = e;
      }
      function Bl(e) {
        if (e !== Dl) return !1;
        if (!Rl) return Fl(e), (Rl = !0), !1;
        var t = e.type;
        if (
          5 !== e.tag ||
          ("head" !== t && "body" !== t && !qr(t, e.memoizedProps))
        )
          for (t = zl; t; ) Il(e, t), (t = Yr(t.nextSibling));
        if ((Fl(e), 13 === e.tag)) {
          if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
            throw Error(o(317));
          e: {
            for (e = e.nextSibling, t = 0; e; ) {
              if (8 === e.nodeType) {
                var n = e.data;
                if ("/$" === n) {
                  if (0 === t) {
                    zl = Yr(e.nextSibling);
                    break e;
                  }
                  t--;
                } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
              }
              e = e.nextSibling;
            }
            zl = null;
          }
        } else zl = Dl ? Yr(e.stateNode.nextSibling) : null;
        return !0;
      }
      function $l() {
        (zl = Dl = null), (Rl = !1);
      }
      var Yl = [];
      function Ql() {
        for (var e = 0; e < Yl.length; e++)
          Yl[e]._workInProgressVersionPrimary = null;
        Yl.length = 0;
      }
      var Vl = w.ReactCurrentDispatcher,
        Hl = w.ReactCurrentBatchConfig,
        Wl = 0,
        Kl = null,
        Gl = null,
        Xl = null,
        Jl = !1,
        Zl = !1;
      function eo() {
        throw Error(o(321));
      }
      function to(e, t) {
        if (null === t) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
          if (!or(e[n], t[n])) return !1;
        return !0;
      }
      function no(e, t, n, r, a, l) {
        if (
          ((Wl = l),
          (Kl = t),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.lanes = 0),
          (Vl.current = null === e || null === e.memoizedState ? Co : Oo),
          (e = n(r, a)),
          Zl)
        ) {
          l = 0;
          do {
            if (((Zl = !1), !(25 > l))) throw Error(o(301));
            (l += 1),
              (Xl = Gl = null),
              (t.updateQueue = null),
              (Vl.current = Mo),
              (e = n(r, a));
          } while (Zl);
        }
        if (
          ((Vl.current = To),
          (t = null !== Gl && null !== Gl.next),
          (Wl = 0),
          (Xl = Gl = Kl = null),
          (Jl = !1),
          t)
        )
          throw Error(o(300));
        return e;
      }
      function ro() {
        var e = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null,
        };
        return (
          null === Xl ? (Kl.memoizedState = Xl = e) : (Xl = Xl.next = e), Xl
        );
      }
      function ao() {
        if (null === Gl) {
          var e = Kl.alternate;
          e = null !== e ? e.memoizedState : null;
        } else e = Gl.next;
        var t = null === Xl ? Kl.memoizedState : Xl.next;
        if (null !== t) (Xl = t), (Gl = e);
        else {
          if (null === e) throw Error(o(310));
          (e = {
            memoizedState: (Gl = e).memoizedState,
            baseState: Gl.baseState,
            baseQueue: Gl.baseQueue,
            queue: Gl.queue,
            next: null,
          }),
            null === Xl ? (Kl.memoizedState = Xl = e) : (Xl = Xl.next = e);
        }
        return Xl;
      }
      function lo(e, t) {
        return "function" == typeof t ? t(e) : t;
      }
      function oo(e) {
        var t = ao(),
          n = t.queue;
        if (null === n) throw Error(o(311));
        n.lastRenderedReducer = e;
        var r = Gl,
          a = r.baseQueue,
          l = n.pending;
        if (null !== l) {
          if (null !== a) {
            var u = a.next;
            (a.next = l.next), (l.next = u);
          }
          (r.baseQueue = a = l), (n.pending = null);
        }
        if (null !== a) {
          (a = a.next), (r = r.baseState);
          var i = (u = l = null),
            s = a;
          do {
            var c = s.lane;
            if ((Wl & c) === c)
              null !== i &&
                (i = i.next =
                  {
                    lane: 0,
                    action: s.action,
                    eagerReducer: s.eagerReducer,
                    eagerState: s.eagerState,
                    next: null,
                  }),
                (r = s.eagerReducer === e ? s.eagerState : e(r, s.action));
            else {
              var d = {
                lane: c,
                action: s.action,
                eagerReducer: s.eagerReducer,
                eagerState: s.eagerState,
                next: null,
              };
              null === i ? ((u = i = d), (l = r)) : (i = i.next = d),
                (Kl.lanes |= c),
                (Du |= c);
            }
            s = s.next;
          } while (null !== s && s !== a);
          null === i ? (l = r) : (i.next = u),
            or(r, t.memoizedState) || (Ao = !0),
            (t.memoizedState = r),
            (t.baseState = l),
            (t.baseQueue = i),
            (n.lastRenderedState = r);
        }
        return [t.memoizedState, n.dispatch];
      }
      function uo(e) {
        var t = ao(),
          n = t.queue;
        if (null === n) throw Error(o(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch,
          a = n.pending,
          l = t.memoizedState;
        if (null !== a) {
          n.pending = null;
          var u = (a = a.next);
          do {
            (l = e(l, u.action)), (u = u.next);
          } while (u !== a);
          or(l, t.memoizedState) || (Ao = !0),
            (t.memoizedState = l),
            null === t.baseQueue && (t.baseState = l),
            (n.lastRenderedState = l);
        }
        return [l, r];
      }
      function io(e, t, n) {
        var r = t._getVersion;
        r = r(t._source);
        var a = t._workInProgressVersionPrimary;
        if (
          (null !== a
            ? (e = a === r)
            : ((e = e.mutableReadLanes),
              (e = (Wl & e) === e) &&
                ((t._workInProgressVersionPrimary = r), Yl.push(t))),
          e)
        )
          return n(t._source);
        throw (Yl.push(t), Error(o(350)));
      }
      function so(e, t, n, r) {
        var a = xu;
        if (null === a) throw Error(o(349));
        var l = t._getVersion,
          u = l(t._source),
          i = Vl.current,
          s = i.useState(function () {
            return io(a, t, n);
          }),
          c = s[1],
          d = s[0];
        s = Xl;
        var f = e.memoizedState,
          m = f.refs,
          p = m.getSnapshot,
          h = f.source;
        f = f.subscribe;
        var v = Kl;
        return (
          (e.memoizedState = { refs: m, source: t, subscribe: r }),
          i.useEffect(
            function () {
              (m.getSnapshot = n), (m.setSnapshot = c);
              var e = l(t._source);
              if (!or(u, e)) {
                (e = n(t._source)),
                  or(d, e) ||
                    (c(e),
                    (e = ui(v)),
                    (a.mutableReadLanes |= e & a.pendingLanes)),
                  (e = a.mutableReadLanes),
                  (a.entangledLanes |= e);
                for (var r = a.entanglements, o = e; 0 < o; ) {
                  var i = 31 - $t(o),
                    s = 1 << i;
                  (r[i] |= e), (o &= ~s);
                }
              }
            },
            [n, t, r]
          ),
          i.useEffect(
            function () {
              return r(t._source, function () {
                var e = m.getSnapshot,
                  n = m.setSnapshot;
                try {
                  n(e(t._source));
                  var r = ui(v);
                  a.mutableReadLanes |= r & a.pendingLanes;
                } catch (e) {
                  n(function () {
                    throw e;
                  });
                }
              });
            },
            [t, r]
          ),
          (or(p, n) && or(h, t) && or(f, r)) ||
            (((e = {
              pending: null,
              dispatch: null,
              lastRenderedReducer: lo,
              lastRenderedState: d,
            }).dispatch = c =
              xo.bind(null, Kl, e)),
            (s.queue = e),
            (s.baseQueue = null),
            (d = io(a, t, n)),
            (s.memoizedState = s.baseState = d)),
          d
        );
      }
      function co(e, t, n) {
        return so(ao(), e, t, n);
      }
      function fo(e) {
        var t = ro();
        return (
          "function" == typeof e && (e = e()),
          (t.memoizedState = t.baseState = e),
          (e = (e = t.queue =
            {
              pending: null,
              dispatch: null,
              lastRenderedReducer: lo,
              lastRenderedState: e,
            }).dispatch =
            xo.bind(null, Kl, e)),
          [t.memoizedState, e]
        );
      }
      function mo(e, t, n, r) {
        return (
          (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
          null === (t = Kl.updateQueue)
            ? ((t = { lastEffect: null }),
              (Kl.updateQueue = t),
              (t.lastEffect = e.next = e))
            : null === (n = t.lastEffect)
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
          e
        );
      }
      function po(e) {
        return (e = { current: e }), (ro().memoizedState = e);
      }
      function ho() {
        return ao().memoizedState;
      }
      function vo(e, t, n, r) {
        var a = ro();
        (Kl.flags |= e),
          (a.memoizedState = mo(1 | t, n, void 0, void 0 === r ? null : r));
      }
      function go(e, t, n, r) {
        var a = ao();
        r = void 0 === r ? null : r;
        var l = void 0;
        if (null !== Gl) {
          var o = Gl.memoizedState;
          if (((l = o.destroy), null !== r && to(r, o.deps)))
            return void mo(t, n, l, r);
        }
        (Kl.flags |= e), (a.memoizedState = mo(1 | t, n, l, r));
      }
      function bo(e, t) {
        return vo(516, 4, e, t);
      }
      function yo(e, t) {
        return go(516, 4, e, t);
      }
      function Eo(e, t) {
        return go(4, 2, e, t);
      }
      function wo(e, t) {
        return "function" == typeof t
          ? ((e = e()),
            t(e),
            function () {
              t(null);
            })
          : null != t
          ? ((e = e()),
            (t.current = e),
            function () {
              t.current = null;
            })
          : void 0;
      }
      function _o(e, t, n) {
        return (
          (n = null != n ? n.concat([e]) : null),
          go(4, 2, wo.bind(null, t, e), n)
        );
      }
      function ko() {}
      function So(e, t) {
        var n = ao();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && to(t, r[1])
          ? r[0]
          : ((n.memoizedState = [e, t]), e);
      }
      function No(e, t) {
        var n = ao();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && to(t, r[1])
          ? r[0]
          : ((e = e()), (n.memoizedState = [e, t]), e);
      }
      function Po(e, t) {
        var n = qa();
        Ba(98 > n ? 98 : n, function () {
          e(!0);
        }),
          Ba(97 < n ? 97 : n, function () {
            var n = Hl.transition;
            Hl.transition = 1;
            try {
              e(!1), t();
            } finally {
              Hl.transition = n;
            }
          });
      }
      function xo(e, t, n) {
        var r = oi(),
          a = ui(e),
          l = {
            lane: a,
            action: n,
            eagerReducer: null,
            eagerState: null,
            next: null,
          },
          o = t.pending;
        if (
          (null === o ? (l.next = l) : ((l.next = o.next), (o.next = l)),
          (t.pending = l),
          (o = e.alternate),
          e === Kl || (null !== o && o === Kl))
        )
          Zl = Jl = !0;
        else {
          if (
            0 === e.lanes &&
            (null === o || 0 === o.lanes) &&
            null !== (o = t.lastRenderedReducer)
          )
            try {
              var u = t.lastRenderedState,
                i = o(u, n);
              if (((l.eagerReducer = o), (l.eagerState = i), or(i, u))) return;
            } catch (e) {}
          ii(e, a, r);
        }
      }
      var To = {
          readContext: nl,
          useCallback: eo,
          useContext: eo,
          useEffect: eo,
          useImperativeHandle: eo,
          useLayoutEffect: eo,
          useMemo: eo,
          useReducer: eo,
          useRef: eo,
          useState: eo,
          useDebugValue: eo,
          useDeferredValue: eo,
          useTransition: eo,
          useMutableSource: eo,
          useOpaqueIdentifier: eo,
          unstable_isNewReconciler: !1,
        },
        Co = {
          readContext: nl,
          useCallback: function (e, t) {
            return (ro().memoizedState = [e, void 0 === t ? null : t]), e;
          },
          useContext: nl,
          useEffect: bo,
          useImperativeHandle: function (e, t, n) {
            return (
              (n = null != n ? n.concat([e]) : null),
              vo(4, 2, wo.bind(null, t, e), n)
            );
          },
          useLayoutEffect: function (e, t) {
            return vo(4, 2, e, t);
          },
          useMemo: function (e, t) {
            var n = ro();
            return (
              (t = void 0 === t ? null : t),
              (e = e()),
              (n.memoizedState = [e, t]),
              e
            );
          },
          useReducer: function (e, t, n) {
            var r = ro();
            return (
              (t = void 0 !== n ? n(t) : t),
              (r.memoizedState = r.baseState = t),
              (e = (e = r.queue =
                {
                  pending: null,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }).dispatch =
                xo.bind(null, Kl, e)),
              [r.memoizedState, e]
            );
          },
          useRef: po,
          useState: fo,
          useDebugValue: ko,
          useDeferredValue: function (e) {
            var t = fo(e),
              n = t[0],
              r = t[1];
            return (
              bo(
                function () {
                  var t = Hl.transition;
                  Hl.transition = 1;
                  try {
                    r(e);
                  } finally {
                    Hl.transition = t;
                  }
                },
                [e]
              ),
              n
            );
          },
          useTransition: function () {
            var e = fo(!1),
              t = e[0];
            return po((e = Po.bind(null, e[1]))), [e, t];
          },
          useMutableSource: function (e, t, n) {
            var r = ro();
            return (
              (r.memoizedState = {
                refs: { getSnapshot: t, setSnapshot: null },
                source: e,
                subscribe: n,
              }),
              so(r, e, t, n)
            );
          },
          useOpaqueIdentifier: function () {
            if (Rl) {
              var e = !1,
                t = (function (e) {
                  return { $$typeof: D, toString: e, valueOf: e };
                })(function () {
                  throw (
                    (e || ((e = !0), n("r:" + (Vr++).toString(36))),
                    Error(o(355)))
                  );
                }),
                n = fo(t)[1];
              return (
                0 == (2 & Kl.mode) &&
                  ((Kl.flags |= 516),
                  mo(
                    5,
                    function () {
                      n("r:" + (Vr++).toString(36));
                    },
                    void 0,
                    null
                  )),
                t
              );
            }
            return fo((t = "r:" + (Vr++).toString(36))), t;
          },
          unstable_isNewReconciler: !1,
        },
        Oo = {
          readContext: nl,
          useCallback: So,
          useContext: nl,
          useEffect: yo,
          useImperativeHandle: _o,
          useLayoutEffect: Eo,
          useMemo: No,
          useReducer: oo,
          useRef: ho,
          useState: function () {
            return oo(lo);
          },
          useDebugValue: ko,
          useDeferredValue: function (e) {
            var t = oo(lo),
              n = t[0],
              r = t[1];
            return (
              yo(
                function () {
                  var t = Hl.transition;
                  Hl.transition = 1;
                  try {
                    r(e);
                  } finally {
                    Hl.transition = t;
                  }
                },
                [e]
              ),
              n
            );
          },
          useTransition: function () {
            var e = oo(lo)[0];
            return [ho().current, e];
          },
          useMutableSource: co,
          useOpaqueIdentifier: function () {
            return oo(lo)[0];
          },
          unstable_isNewReconciler: !1,
        },
        Mo = {
          readContext: nl,
          useCallback: So,
          useContext: nl,
          useEffect: yo,
          useImperativeHandle: _o,
          useLayoutEffect: Eo,
          useMemo: No,
          useReducer: uo,
          useRef: ho,
          useState: function () {
            return uo(lo);
          },
          useDebugValue: ko,
          useDeferredValue: function (e) {
            var t = uo(lo),
              n = t[0],
              r = t[1];
            return (
              yo(
                function () {
                  var t = Hl.transition;
                  Hl.transition = 1;
                  try {
                    r(e);
                  } finally {
                    Hl.transition = t;
                  }
                },
                [e]
              ),
              n
            );
          },
          useTransition: function () {
            var e = uo(lo)[0];
            return [ho().current, e];
          },
          useMutableSource: co,
          useOpaqueIdentifier: function () {
            return uo(lo)[0];
          },
          unstable_isNewReconciler: !1,
        },
        jo = w.ReactCurrentOwner,
        Ao = !1;
      function Lo(e, t, n, r) {
        t.child = null === e ? kl(t, null, n, r) : _l(t, e.child, n, r);
      }
      function Do(e, t, n, r, a) {
        n = n.render;
        var l = t.ref;
        return (
          tl(t, a),
          (r = no(e, t, n, r, l, a)),
          null === e || Ao
            ? ((t.flags |= 1), Lo(e, t, r, a), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.flags &= -517),
              (e.lanes &= ~a),
              Zo(e, t, a))
        );
      }
      function zo(e, t, n, r, a, l) {
        if (null === e) {
          var o = n.type;
          return "function" != typeof o ||
            Ui(o) ||
            void 0 !== o.defaultProps ||
            null !== n.compare ||
            void 0 !== n.defaultProps
            ? (((e = Fi(n.type, null, r, t, t.mode, l)).ref = t.ref),
              (e.return = t),
              (t.child = e))
            : ((t.tag = 15), (t.type = o), Ro(e, t, o, r, a, l));
        }
        return (
          (o = e.child),
          0 == (a & l) &&
          ((a = o.memoizedProps),
          (n = null !== (n = n.compare) ? n : ir)(a, r) && e.ref === t.ref)
            ? Zo(e, t, l)
            : ((t.flags |= 1),
              ((e = qi(o, r)).ref = t.ref),
              (e.return = t),
              (t.child = e))
        );
      }
      function Ro(e, t, n, r, a, l) {
        if (null !== e && ir(e.memoizedProps, r) && e.ref === t.ref) {
          if (((Ao = !1), 0 == (l & a)))
            return (t.lanes = e.lanes), Zo(e, t, l);
          0 != (16384 & e.flags) && (Ao = !0);
        }
        return qo(e, t, n, r, l);
      }
      function Io(e, t, n) {
        var r = t.pendingProps,
          a = r.children,
          l = null !== e ? e.memoizedState : null;
        if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode)
          if (0 == (4 & t.mode)) (t.memoizedState = { baseLanes: 0 }), vi(0, n);
          else {
            if (0 == (1073741824 & n))
              return (
                (e = null !== l ? l.baseLanes | n : n),
                (t.lanes = t.childLanes = 1073741824),
                (t.memoizedState = { baseLanes: e }),
                vi(0, e),
                null
              );
            (t.memoizedState = { baseLanes: 0 }),
              vi(0, null !== l ? l.baseLanes : n);
          }
        else
          null !== l
            ? ((r = l.baseLanes | n), (t.memoizedState = null))
            : (r = n),
            vi(0, r);
        return Lo(e, t, a, n), t.child;
      }
      function Uo(e, t) {
        var n = t.ref;
        ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
          (t.flags |= 128);
      }
      function qo(e, t, n, r, a) {
        var l = ma(n) ? da : sa.current;
        return (
          (l = fa(t, l)),
          tl(t, a),
          (n = no(e, t, n, r, l, a)),
          null === e || Ao
            ? ((t.flags |= 1), Lo(e, t, n, a), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.flags &= -517),
              (e.lanes &= ~a),
              Zo(e, t, a))
        );
      }
      function Fo(e, t, n, r, a) {
        if (ma(n)) {
          var l = !0;
          ga(t);
        } else l = !1;
        if ((tl(t, a), null === t.stateNode))
          null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
            hl(t, n, r),
            gl(t, n, r, a),
            (r = !0);
        else if (null === e) {
          var o = t.stateNode,
            u = t.memoizedProps;
          o.props = u;
          var i = o.context,
            s = n.contextType;
          s =
            "object" == typeof s && null !== s
              ? nl(s)
              : fa(t, (s = ma(n) ? da : sa.current));
          var c = n.getDerivedStateFromProps,
            d =
              "function" == typeof c ||
              "function" == typeof o.getSnapshotBeforeUpdate;
          d ||
            ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
              "function" != typeof o.componentWillReceiveProps) ||
            ((u !== r || i !== s) && vl(t, o, r, s)),
            (rl = !1);
          var f = t.memoizedState;
          (o.state = f),
            sl(t, r, o, a),
            (i = t.memoizedState),
            u !== r || f !== i || ca.current || rl
              ? ("function" == typeof c &&
                  (fl(t, n, c, r), (i = t.memoizedState)),
                (u = rl || pl(t, n, u, r, f, i, s))
                  ? (d ||
                      ("function" != typeof o.UNSAFE_componentWillMount &&
                        "function" != typeof o.componentWillMount) ||
                      ("function" == typeof o.componentWillMount &&
                        o.componentWillMount(),
                      "function" == typeof o.UNSAFE_componentWillMount &&
                        o.UNSAFE_componentWillMount()),
                    "function" == typeof o.componentDidMount && (t.flags |= 4))
                  : ("function" == typeof o.componentDidMount && (t.flags |= 4),
                    (t.memoizedProps = r),
                    (t.memoizedState = i)),
                (o.props = r),
                (o.state = i),
                (o.context = s),
                (r = u))
              : ("function" == typeof o.componentDidMount && (t.flags |= 4),
                (r = !1));
        } else {
          (o = t.stateNode),
            ll(e, t),
            (u = t.memoizedProps),
            (s = t.type === t.elementType ? u : Ha(t.type, u)),
            (o.props = s),
            (d = t.pendingProps),
            (f = o.context),
            (i =
              "object" == typeof (i = n.contextType) && null !== i
                ? nl(i)
                : fa(t, (i = ma(n) ? da : sa.current)));
          var m = n.getDerivedStateFromProps;
          (c =
            "function" == typeof m ||
            "function" == typeof o.getSnapshotBeforeUpdate) ||
            ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
              "function" != typeof o.componentWillReceiveProps) ||
            ((u !== d || f !== i) && vl(t, o, r, i)),
            (rl = !1),
            (f = t.memoizedState),
            (o.state = f),
            sl(t, r, o, a);
          var p = t.memoizedState;
          u !== d || f !== p || ca.current || rl
            ? ("function" == typeof m &&
                (fl(t, n, m, r), (p = t.memoizedState)),
              (s = rl || pl(t, n, s, r, f, p, i))
                ? (c ||
                    ("function" != typeof o.UNSAFE_componentWillUpdate &&
                      "function" != typeof o.componentWillUpdate) ||
                    ("function" == typeof o.componentWillUpdate &&
                      o.componentWillUpdate(r, p, i),
                    "function" == typeof o.UNSAFE_componentWillUpdate &&
                      o.UNSAFE_componentWillUpdate(r, p, i)),
                  "function" == typeof o.componentDidUpdate && (t.flags |= 4),
                  "function" == typeof o.getSnapshotBeforeUpdate &&
                    (t.flags |= 256))
                : ("function" != typeof o.componentDidUpdate ||
                    (u === e.memoizedProps && f === e.memoizedState) ||
                    (t.flags |= 4),
                  "function" != typeof o.getSnapshotBeforeUpdate ||
                    (u === e.memoizedProps && f === e.memoizedState) ||
                    (t.flags |= 256),
                  (t.memoizedProps = r),
                  (t.memoizedState = p)),
              (o.props = r),
              (o.state = p),
              (o.context = i),
              (r = s))
            : ("function" != typeof o.componentDidUpdate ||
                (u === e.memoizedProps && f === e.memoizedState) ||
                (t.flags |= 4),
              "function" != typeof o.getSnapshotBeforeUpdate ||
                (u === e.memoizedProps && f === e.memoizedState) ||
                (t.flags |= 256),
              (r = !1));
        }
        return Bo(e, t, n, r, l, a);
      }
      function Bo(e, t, n, r, a, l) {
        Uo(e, t);
        var o = 0 != (64 & t.flags);
        if (!r && !o) return a && ba(t, n, !1), Zo(e, t, l);
        (r = t.stateNode), (jo.current = t);
        var u =
          o && "function" != typeof n.getDerivedStateFromError
            ? null
            : r.render();
        return (
          (t.flags |= 1),
          null !== e && o
            ? ((t.child = _l(t, e.child, null, l)),
              (t.child = _l(t, null, u, l)))
            : Lo(e, t, u, l),
          (t.memoizedState = r.state),
          a && ba(t, n, !0),
          t.child
        );
      }
      function $o(e) {
        var t = e.stateNode;
        t.pendingContext
          ? ha(0, t.pendingContext, t.pendingContext !== t.context)
          : t.context && ha(0, t.context, !1),
          Cl(e, t.containerInfo);
      }
      var Yo,
        Qo,
        Vo,
        Ho = { dehydrated: null, retryLane: 0 };
      function Wo(e, t, n) {
        var r,
          a = t.pendingProps,
          l = Al.current,
          o = !1;
        return (
          (r = 0 != (64 & t.flags)) ||
            (r = (null === e || null !== e.memoizedState) && 0 != (2 & l)),
          r
            ? ((o = !0), (t.flags &= -65))
            : (null !== e && null === e.memoizedState) ||
              void 0 === a.fallback ||
              !0 === a.unstable_avoidThisFallback ||
              (l |= 1),
          ua(Al, 1 & l),
          null === e
            ? (void 0 !== a.fallback && ql(t),
              (e = a.children),
              (l = a.fallback),
              o
                ? ((e = Ko(t, e, l, n)),
                  (t.child.memoizedState = { baseLanes: n }),
                  (t.memoizedState = Ho),
                  e)
                : "number" == typeof a.unstable_expectedLoadTime
                ? ((e = Ko(t, e, l, n)),
                  (t.child.memoizedState = { baseLanes: n }),
                  (t.memoizedState = Ho),
                  (t.lanes = 33554432),
                  e)
                : (((n = $i(
                    { mode: "visible", children: e },
                    t.mode,
                    n,
                    null
                  )).return = t),
                  (t.child = n)))
            : (e.memoizedState,
              o
                ? ((a = (function (e, t, n, r, a) {
                    var l = t.mode,
                      o = e.child;
                    e = o.sibling;
                    var u = { mode: "hidden", children: n };
                    return (
                      0 == (2 & l) && t.child !== o
                        ? (((n = t.child).childLanes = 0),
                          (n.pendingProps = u),
                          null !== (o = n.lastEffect)
                            ? ((t.firstEffect = n.firstEffect),
                              (t.lastEffect = o),
                              (o.nextEffect = null))
                            : (t.firstEffect = t.lastEffect = null))
                        : (n = qi(o, u)),
                      null !== e
                        ? (r = qi(e, r))
                        : ((r = Bi(r, l, a, null)).flags |= 2),
                      (r.return = t),
                      (n.return = t),
                      (n.sibling = r),
                      (t.child = n),
                      r
                    );
                  })(e, t, a.children, a.fallback, n)),
                  (o = t.child),
                  (l = e.child.memoizedState),
                  (o.memoizedState =
                    null === l
                      ? { baseLanes: n }
                      : { baseLanes: l.baseLanes | n }),
                  (o.childLanes = e.childLanes & ~n),
                  (t.memoizedState = Ho),
                  a)
                : ((n = (function (e, t, n, r) {
                    var a = e.child;
                    return (
                      (e = a.sibling),
                      (n = qi(a, { mode: "visible", children: n })),
                      0 == (2 & t.mode) && (n.lanes = r),
                      (n.return = t),
                      (n.sibling = null),
                      null !== e &&
                        ((e.nextEffect = null),
                        (e.flags = 8),
                        (t.firstEffect = t.lastEffect = e)),
                      (t.child = n)
                    );
                  })(e, t, a.children, n)),
                  (t.memoizedState = null),
                  n))
        );
      }
      function Ko(e, t, n, r) {
        var a = e.mode,
          l = e.child;
        return (
          (t = { mode: "hidden", children: t }),
          0 == (2 & a) && null !== l
            ? ((l.childLanes = 0), (l.pendingProps = t))
            : (l = $i(t, a, 0, null)),
          (n = Bi(n, a, r, null)),
          (l.return = e),
          (n.return = e),
          (l.sibling = n),
          (e.child = l),
          n
        );
      }
      function Go(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        null !== n && (n.lanes |= t), el(e.return, t);
      }
      function Xo(e, t, n, r, a, l) {
        var o = e.memoizedState;
        null === o
          ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: a,
              lastEffect: l,
            })
          : ((o.isBackwards = t),
            (o.rendering = null),
            (o.renderingStartTime = 0),
            (o.last = r),
            (o.tail = n),
            (o.tailMode = a),
            (o.lastEffect = l));
      }
      function Jo(e, t, n) {
        var r = t.pendingProps,
          a = r.revealOrder,
          l = r.tail;
        if ((Lo(e, t, r.children, n), 0 != (2 & (r = Al.current))))
          (r = (1 & r) | 2), (t.flags |= 64);
        else {
          if (null !== e && 0 != (64 & e.flags))
            e: for (e = t.child; null !== e; ) {
              if (13 === e.tag) null !== e.memoizedState && Go(e, n);
              else if (19 === e.tag) Go(e, n);
              else if (null !== e.child) {
                (e.child.return = e), (e = e.child);
                continue;
              }
              if (e === t) break e;
              for (; null === e.sibling; ) {
                if (null === e.return || e.return === t) break e;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }
          r &= 1;
        }
        if ((ua(Al, r), 0 == (2 & t.mode))) t.memoizedState = null;
        else
          switch (a) {
            case "forwards":
              for (n = t.child, a = null; null !== n; )
                null !== (e = n.alternate) && null === Ll(e) && (a = n),
                  (n = n.sibling);
              null === (n = a)
                ? ((a = t.child), (t.child = null))
                : ((a = n.sibling), (n.sibling = null)),
                Xo(t, !1, a, n, l, t.lastEffect);
              break;
            case "backwards":
              for (n = null, a = t.child, t.child = null; null !== a; ) {
                if (null !== (e = a.alternate) && null === Ll(e)) {
                  t.child = a;
                  break;
                }
                (e = a.sibling), (a.sibling = n), (n = a), (a = e);
              }
              Xo(t, !0, n, null, l, t.lastEffect);
              break;
            case "together":
              Xo(t, !1, null, null, void 0, t.lastEffect);
              break;
            default:
              t.memoizedState = null;
          }
        return t.child;
      }
      function Zo(e, t, n) {
        if (
          (null !== e && (t.dependencies = e.dependencies),
          (Du |= t.lanes),
          0 != (n & t.childLanes))
        ) {
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = qi((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = qi(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        return null;
      }
      function eu(e, t) {
        if (!Rl)
          switch (e.tailMode) {
            case "hidden":
              t = e.tail;
              for (var n = null; null !== t; )
                null !== t.alternate && (n = t), (t = t.sibling);
              null === n ? (e.tail = null) : (n.sibling = null);
              break;
            case "collapsed":
              n = e.tail;
              for (var r = null; null !== n; )
                null !== n.alternate && (r = n), (n = n.sibling);
              null === r
                ? t || null === e.tail
                  ? (e.tail = null)
                  : (e.tail.sibling = null)
                : (r.sibling = null);
          }
      }
      function tu(e, t, n) {
        var r = t.pendingProps;
        switch (t.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return null;
          case 1:
            return ma(t.type) && pa(), null;
          case 3:
            return (
              Ol(),
              oa(ca),
              oa(sa),
              Ql(),
              (r = t.stateNode).pendingContext &&
                ((r.context = r.pendingContext), (r.pendingContext = null)),
              (null !== e && null !== e.child) ||
                (Bl(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
              null
            );
          case 5:
            jl(t);
            var l = Tl(xl.current);
            if (((n = t.type), null !== e && null != t.stateNode))
              Qo(e, t, n, r), e.ref !== t.ref && (t.flags |= 128);
            else {
              if (!r) {
                if (null === t.stateNode) throw Error(o(166));
                return null;
              }
              if (((e = Tl(Nl.current)), Bl(t))) {
                (r = t.stateNode), (n = t.type);
                var u = t.memoizedProps;
                switch (((r[Wr] = t), (r[Kr] = u), n)) {
                  case "dialog":
                    Pr("cancel", r), Pr("close", r);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    Pr("load", r);
                    break;
                  case "video":
                  case "audio":
                    for (e = 0; e < _r.length; e++) Pr(_r[e], r);
                    break;
                  case "source":
                    Pr("error", r);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    Pr("error", r), Pr("load", r);
                    break;
                  case "details":
                    Pr("toggle", r);
                    break;
                  case "input":
                    ee(r, u), Pr("invalid", r);
                    break;
                  case "select":
                    (r._wrapperState = { wasMultiple: !!u.multiple }),
                      Pr("invalid", r);
                    break;
                  case "textarea":
                    ie(r, u), Pr("invalid", r);
                }
                for (var s in (ke(n, u), (e = null), u))
                  u.hasOwnProperty(s) &&
                    ((l = u[s]),
                    "children" === s
                      ? "string" == typeof l
                        ? r.textContent !== l && (e = ["children", l])
                        : "number" == typeof l &&
                          r.textContent !== "" + l &&
                          (e = ["children", "" + l])
                      : i.hasOwnProperty(s) &&
                        null != l &&
                        "onScroll" === s &&
                        Pr("scroll", r));
                switch (n) {
                  case "input":
                    G(r), re(r, u, !0);
                    break;
                  case "textarea":
                    G(r), ce(r);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    "function" == typeof u.onClick && (r.onclick = zr);
                }
                (r = e), (t.updateQueue = r), null !== r && (t.flags |= 4);
              } else {
                switch (
                  ((s = 9 === l.nodeType ? l : l.ownerDocument),
                  e === de && (e = fe(n)),
                  e === de
                    ? "script" === n
                      ? (((e = s.createElement("div")).innerHTML =
                          "<script></script>"),
                        (e = e.removeChild(e.firstChild)))
                      : "string" == typeof r.is
                      ? (e = s.createElement(n, { is: r.is }))
                      : ((e = s.createElement(n)),
                        "select" === n &&
                          ((s = e),
                          r.multiple
                            ? (s.multiple = !0)
                            : r.size && (s.size = r.size)))
                    : (e = s.createElementNS(e, n)),
                  (e[Wr] = t),
                  (e[Kr] = r),
                  Yo(e, t),
                  (t.stateNode = e),
                  (s = Se(n, r)),
                  n)
                ) {
                  case "dialog":
                    Pr("cancel", e), Pr("close", e), (l = r);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    Pr("load", e), (l = r);
                    break;
                  case "video":
                  case "audio":
                    for (l = 0; l < _r.length; l++) Pr(_r[l], e);
                    l = r;
                    break;
                  case "source":
                    Pr("error", e), (l = r);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    Pr("error", e), Pr("load", e), (l = r);
                    break;
                  case "details":
                    Pr("toggle", e), (l = r);
                    break;
                  case "input":
                    ee(e, r), (l = Z(e, r)), Pr("invalid", e);
                    break;
                  case "option":
                    l = le(e, r);
                    break;
                  case "select":
                    (e._wrapperState = { wasMultiple: !!r.multiple }),
                      (l = a({}, r, { value: void 0 })),
                      Pr("invalid", e);
                    break;
                  case "textarea":
                    ie(e, r), (l = ue(e, r)), Pr("invalid", e);
                    break;
                  default:
                    l = r;
                }
                ke(n, l);
                var c = l;
                for (u in c)
                  if (c.hasOwnProperty(u)) {
                    var d = c[u];
                    "style" === u
                      ? we(e, d)
                      : "dangerouslySetInnerHTML" === u
                      ? null != (d = d ? d.__html : void 0) && ve(e, d)
                      : "children" === u
                      ? "string" == typeof d
                        ? ("textarea" !== n || "" !== d) && ge(e, d)
                        : "number" == typeof d && ge(e, "" + d)
                      : "suppressContentEditableWarning" !== u &&
                        "suppressHydrationWarning" !== u &&
                        "autoFocus" !== u &&
                        (i.hasOwnProperty(u)
                          ? null != d && "onScroll" === u && Pr("scroll", e)
                          : null != d && E(e, u, d, s));
                  }
                switch (n) {
                  case "input":
                    G(e), re(e, r, !1);
                    break;
                  case "textarea":
                    G(e), ce(e);
                    break;
                  case "option":
                    null != r.value && e.setAttribute("value", "" + W(r.value));
                    break;
                  case "select":
                    (e.multiple = !!r.multiple),
                      null != (u = r.value)
                        ? oe(e, !!r.multiple, u, !1)
                        : null != r.defaultValue &&
                          oe(e, !!r.multiple, r.defaultValue, !0);
                    break;
                  default:
                    "function" == typeof l.onClick && (e.onclick = zr);
                }
                Ur(n, r) && (t.flags |= 4);
              }
              null !== t.ref && (t.flags |= 128);
            }
            return null;
          case 6:
            if (e && null != t.stateNode) Vo(0, t, e.memoizedProps, r);
            else {
              if ("string" != typeof r && null === t.stateNode)
                throw Error(o(166));
              (n = Tl(xl.current)),
                Tl(Nl.current),
                Bl(t)
                  ? ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[Wr] = t),
                    r.nodeValue !== n && (t.flags |= 4))
                  : (((r = (
                      9 === n.nodeType ? n : n.ownerDocument
                    ).createTextNode(r))[Wr] = t),
                    (t.stateNode = r));
            }
            return null;
          case 13:
            return (
              oa(Al),
              (r = t.memoizedState),
              0 != (64 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r),
                  (n = !1),
                  null === e
                    ? void 0 !== t.memoizedProps.fallback && Bl(t)
                    : (n = null !== e.memoizedState),
                  r &&
                    !n &&
                    0 != (2 & t.mode) &&
                    ((null === e &&
                      !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                    0 != (1 & Al.current)
                      ? 0 === ju && (ju = 3)
                      : ((0 !== ju && 3 !== ju) || (ju = 4),
                        null === xu ||
                          (0 == (134217727 & Du) && 0 == (134217727 & zu)) ||
                          fi(xu, Cu))),
                  (r || n) && (t.flags |= 4),
                  null)
            );
          case 4:
            return Ol(), null === e && Tr(t.stateNode.containerInfo), null;
          case 10:
            return Za(t), null;
          case 17:
            return ma(t.type) && pa(), null;
          case 19:
            if ((oa(Al), null === (r = t.memoizedState))) return null;
            if (((u = 0 != (64 & t.flags)), null === (s = r.rendering)))
              if (u) eu(r, !1);
              else {
                if (0 !== ju || (null !== e && 0 != (64 & e.flags)))
                  for (e = t.child; null !== e; ) {
                    if (null !== (s = Ll(e))) {
                      for (
                        t.flags |= 64,
                          eu(r, !1),
                          null !== (u = s.updateQueue) &&
                            ((t.updateQueue = u), (t.flags |= 4)),
                          null === r.lastEffect && (t.firstEffect = null),
                          t.lastEffect = r.lastEffect,
                          r = n,
                          n = t.child;
                        null !== n;

                      )
                        (e = r),
                          ((u = n).flags &= 2),
                          (u.nextEffect = null),
                          (u.firstEffect = null),
                          (u.lastEffect = null),
                          null === (s = u.alternate)
                            ? ((u.childLanes = 0),
                              (u.lanes = e),
                              (u.child = null),
                              (u.memoizedProps = null),
                              (u.memoizedState = null),
                              (u.updateQueue = null),
                              (u.dependencies = null),
                              (u.stateNode = null))
                            : ((u.childLanes = s.childLanes),
                              (u.lanes = s.lanes),
                              (u.child = s.child),
                              (u.memoizedProps = s.memoizedProps),
                              (u.memoizedState = s.memoizedState),
                              (u.updateQueue = s.updateQueue),
                              (u.type = s.type),
                              (e = s.dependencies),
                              (u.dependencies =
                                null === e
                                  ? null
                                  : {
                                      lanes: e.lanes,
                                      firstContext: e.firstContext,
                                    })),
                          (n = n.sibling);
                      return ua(Al, (1 & Al.current) | 2), t.child;
                    }
                    e = e.sibling;
                  }
                null !== r.tail &&
                  Ua() > qu &&
                  ((t.flags |= 64), (u = !0), eu(r, !1), (t.lanes = 33554432));
              }
            else {
              if (!u)
                if (null !== (e = Ll(s))) {
                  if (
                    ((t.flags |= 64),
                    (u = !0),
                    null !== (n = e.updateQueue) &&
                      ((t.updateQueue = n), (t.flags |= 4)),
                    eu(r, !0),
                    null === r.tail &&
                      "hidden" === r.tailMode &&
                      !s.alternate &&
                      !Rl)
                  )
                    return (
                      null !== (t = t.lastEffect = r.lastEffect) &&
                        (t.nextEffect = null),
                      null
                    );
                } else
                  2 * Ua() - r.renderingStartTime > qu &&
                    1073741824 !== n &&
                    ((t.flags |= 64),
                    (u = !0),
                    eu(r, !1),
                    (t.lanes = 33554432));
              r.isBackwards
                ? ((s.sibling = t.child), (t.child = s))
                : (null !== (n = r.last) ? (n.sibling = s) : (t.child = s),
                  (r.last = s));
            }
            return null !== r.tail
              ? ((n = r.tail),
                (r.rendering = n),
                (r.tail = n.sibling),
                (r.lastEffect = t.lastEffect),
                (r.renderingStartTime = Ua()),
                (n.sibling = null),
                (t = Al.current),
                ua(Al, u ? (1 & t) | 2 : 1 & t),
                n)
              : null;
          case 23:
          case 24:
            return (
              gi(),
              null !== e &&
                (null !== e.memoizedState) != (null !== t.memoizedState) &&
                "unstable-defer-without-hiding" !== r.mode &&
                (t.flags |= 4),
              null
            );
        }
        throw Error(o(156, t.tag));
      }
      function nu(e) {
        switch (e.tag) {
          case 1:
            ma(e.type) && pa();
            var t = e.flags;
            return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null;
          case 3:
            if ((Ol(), oa(ca), oa(sa), Ql(), 0 != (64 & (t = e.flags))))
              throw Error(o(285));
            return (e.flags = (-4097 & t) | 64), e;
          case 5:
            return jl(e), null;
          case 13:
            return (
              oa(Al),
              4096 & (t = e.flags) ? ((e.flags = (-4097 & t) | 64), e) : null
            );
          case 19:
            return oa(Al), null;
          case 4:
            return Ol(), null;
          case 10:
            return Za(e), null;
          case 23:
          case 24:
            return gi(), null;
          default:
            return null;
        }
      }
      function ru(e, t) {
        try {
          var n = "",
            r = t;
          do {
            (n += V(r)), (r = r.return);
          } while (r);
          var a = n;
        } catch (e) {
          a = "\nError generating stack: " + e.message + "\n" + e.stack;
        }
        return { value: e, source: t, stack: a };
      }
      function au(e, t) {
        try {
          console.error(t.value);
        } catch (e) {
          setTimeout(function () {
            throw e;
          });
        }
      }
      (Yo = function (e, t) {
        for (var n = t.child; null !== n; ) {
          if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
          else if (4 !== n.tag && null !== n.child) {
            (n.child.return = n), (n = n.child);
            continue;
          }
          if (n === t) break;
          for (; null === n.sibling; ) {
            if (null === n.return || n.return === t) return;
            n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
        }
      }),
        (Qo = function (e, t, n, r) {
          var l = e.memoizedProps;
          if (l !== r) {
            (e = t.stateNode), Tl(Nl.current);
            var o,
              u = null;
            switch (n) {
              case "input":
                (l = Z(e, l)), (r = Z(e, r)), (u = []);
                break;
              case "option":
                (l = le(e, l)), (r = le(e, r)), (u = []);
                break;
              case "select":
                (l = a({}, l, { value: void 0 })),
                  (r = a({}, r, { value: void 0 })),
                  (u = []);
                break;
              case "textarea":
                (l = ue(e, l)), (r = ue(e, r)), (u = []);
                break;
              default:
                "function" != typeof l.onClick &&
                  "function" == typeof r.onClick &&
                  (e.onclick = zr);
            }
            for (d in (ke(n, r), (n = null), l))
              if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && null != l[d])
                if ("style" === d) {
                  var s = l[d];
                  for (o in s)
                    s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                } else
                  "dangerouslySetInnerHTML" !== d &&
                    "children" !== d &&
                    "suppressContentEditableWarning" !== d &&
                    "suppressHydrationWarning" !== d &&
                    "autoFocus" !== d &&
                    (i.hasOwnProperty(d)
                      ? u || (u = [])
                      : (u = u || []).push(d, null));
            for (d in r) {
              var c = r[d];
              if (
                ((s = null != l ? l[d] : void 0),
                r.hasOwnProperty(d) && c !== s && (null != c || null != s))
              )
                if ("style" === d)
                  if (s) {
                    for (o in s)
                      !s.hasOwnProperty(o) ||
                        (c && c.hasOwnProperty(o)) ||
                        (n || (n = {}), (n[o] = ""));
                    for (o in c)
                      c.hasOwnProperty(o) &&
                        s[o] !== c[o] &&
                        (n || (n = {}), (n[o] = c[o]));
                  } else n || (u || (u = []), u.push(d, n)), (n = c);
                else
                  "dangerouslySetInnerHTML" === d
                    ? ((c = c ? c.__html : void 0),
                      (s = s ? s.__html : void 0),
                      null != c && s !== c && (u = u || []).push(d, c))
                    : "children" === d
                    ? ("string" != typeof c && "number" != typeof c) ||
                      (u = u || []).push(d, "" + c)
                    : "suppressContentEditableWarning" !== d &&
                      "suppressHydrationWarning" !== d &&
                      (i.hasOwnProperty(d)
                        ? (null != c && "onScroll" === d && Pr("scroll", e),
                          u || s === c || (u = []))
                        : "object" == typeof c && null !== c && c.$$typeof === D
                        ? c.toString()
                        : (u = u || []).push(d, c));
            }
            n && (u = u || []).push("style", n);
            var d = u;
            (t.updateQueue = d) && (t.flags |= 4);
          }
        }),
        (Vo = function (e, t, n, r) {
          n !== r && (t.flags |= 4);
        });
      var lu = "function" == typeof WeakMap ? WeakMap : Map;
      function ou(e, t, n) {
        ((n = ol(-1, n)).tag = 3), (n.payload = { element: null });
        var r = t.value;
        return (
          (n.callback = function () {
            Yu || ((Yu = !0), (Qu = r)), au(0, t);
          }),
          n
        );
      }
      function uu(e, t, n) {
        (n = ol(-1, n)).tag = 3;
        var r = e.type.getDerivedStateFromError;
        if ("function" == typeof r) {
          var a = t.value;
          n.payload = function () {
            return au(0, t), r(a);
          };
        }
        var l = e.stateNode;
        return (
          null !== l &&
            "function" == typeof l.componentDidCatch &&
            (n.callback = function () {
              "function" != typeof r &&
                (null === Vu ? (Vu = new Set([this])) : Vu.add(this), au(0, t));
              var e = t.stack;
              this.componentDidCatch(t.value, {
                componentStack: null !== e ? e : "",
              });
            }),
          n
        );
      }
      var iu = "function" == typeof WeakSet ? WeakSet : Set;
      function su(e) {
        var t = e.ref;
        if (null !== t)
          if ("function" == typeof t)
            try {
              t(null);
            } catch (t) {
              Li(e, t);
            }
          else t.current = null;
      }
      function cu(e, t) {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
          case 22:
            return;
          case 1:
            if (256 & t.flags && null !== e) {
              var n = e.memoizedProps,
                r = e.memoizedState;
              (t = (e = t.stateNode).getSnapshotBeforeUpdate(
                t.elementType === t.type ? n : Ha(t.type, n),
                r
              )),
                (e.__reactInternalSnapshotBeforeUpdate = t);
            }
            return;
          case 3:
            return void (256 & t.flags && $r(t.stateNode.containerInfo));
          case 5:
          case 6:
          case 4:
          case 17:
            return;
        }
        throw Error(o(163));
      }
      function du(e, t, n) {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
          case 22:
            if (
              null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
            ) {
              e = t = t.next;
              do {
                if (3 == (3 & e.tag)) {
                  var r = e.create;
                  e.destroy = r();
                }
                e = e.next;
              } while (e !== t);
            }
            if (
              null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
            ) {
              e = t = t.next;
              do {
                var a = e;
                (r = a.next),
                  0 != (4 & (a = a.tag)) &&
                    0 != (1 & a) &&
                    (Mi(n, e), Oi(n, e)),
                  (e = r);
              } while (e !== t);
            }
            return;
          case 1:
            return (
              (e = n.stateNode),
              4 & n.flags &&
                (null === t
                  ? e.componentDidMount()
                  : ((r =
                      n.elementType === n.type
                        ? t.memoizedProps
                        : Ha(n.type, t.memoizedProps)),
                    e.componentDidUpdate(
                      r,
                      t.memoizedState,
                      e.__reactInternalSnapshotBeforeUpdate
                    ))),
              void (null !== (t = n.updateQueue) && cl(n, t, e))
            );
          case 3:
            if (null !== (t = n.updateQueue)) {
              if (((e = null), null !== n.child))
                switch (n.child.tag) {
                  case 5:
                    e = n.child.stateNode;
                    break;
                  case 1:
                    e = n.child.stateNode;
                }
              cl(n, t, e);
            }
            return;
          case 5:
            return (
              (e = n.stateNode),
              void (
                null === t &&
                4 & n.flags &&
                Ur(n.type, n.memoizedProps) &&
                e.focus()
              )
            );
          case 6:
          case 4:
          case 12:
            return;
          case 13:
            return void (
              null === n.memoizedState &&
              ((n = n.alternate),
              null !== n &&
                ((n = n.memoizedState),
                null !== n && ((n = n.dehydrated), null !== n && wt(n))))
            );
          case 19:
          case 17:
          case 20:
          case 21:
          case 23:
          case 24:
            return;
        }
        throw Error(o(163));
      }
      function fu(e, t) {
        for (var n = e; ; ) {
          if (5 === n.tag) {
            var r = n.stateNode;
            if (t)
              "function" == typeof (r = r.style).setProperty
                ? r.setProperty("display", "none", "important")
                : (r.display = "none");
            else {
              r = n.stateNode;
              var a = n.memoizedProps.style;
              (a = null != a && a.hasOwnProperty("display") ? a.display : null),
                (r.style.display = Ee("display", a));
            }
          } else if (6 === n.tag)
            n.stateNode.nodeValue = t ? "" : n.memoizedProps;
          else if (
            ((23 !== n.tag && 24 !== n.tag) ||
              null === n.memoizedState ||
              n === e) &&
            null !== n.child
          ) {
            (n.child.return = n), (n = n.child);
            continue;
          }
          if (n === e) break;
          for (; null === n.sibling; ) {
            if (null === n.return || n.return === e) return;
            n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
        }
      }
      function mu(e, t) {
        if (Ea && "function" == typeof Ea.onCommitFiberUnmount)
          try {
            Ea.onCommitFiberUnmount(ya, t);
          } catch (e) {}
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
          case 22:
            if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
              var n = (e = e.next);
              do {
                var r = n,
                  a = r.destroy;
                if (((r = r.tag), void 0 !== a))
                  if (0 != (4 & r)) Mi(t, n);
                  else {
                    r = t;
                    try {
                      a();
                    } catch (e) {
                      Li(r, e);
                    }
                  }
                n = n.next;
              } while (n !== e);
            }
            break;
          case 1:
            if (
              (su(t),
              "function" == typeof (e = t.stateNode).componentWillUnmount)
            )
              try {
                (e.props = t.memoizedProps),
                  (e.state = t.memoizedState),
                  e.componentWillUnmount();
              } catch (e) {
                Li(t, e);
              }
            break;
          case 5:
            su(t);
            break;
          case 4:
            yu(e, t);
        }
      }
      function pu(e) {
        (e.alternate = null),
          (e.child = null),
          (e.dependencies = null),
          (e.firstEffect = null),
          (e.lastEffect = null),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.pendingProps = null),
          (e.return = null),
          (e.updateQueue = null);
      }
      function hu(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag;
      }
      function vu(e) {
        e: {
          for (var t = e.return; null !== t; ) {
            if (hu(t)) break e;
            t = t.return;
          }
          throw Error(o(160));
        }
        var n = t;
        switch (((t = n.stateNode), n.tag)) {
          case 5:
            var r = !1;
            break;
          case 3:
          case 4:
            (t = t.containerInfo), (r = !0);
            break;
          default:
            throw Error(o(161));
        }
        16 & n.flags && (ge(t, ""), (n.flags &= -17));
        e: t: for (n = e; ; ) {
          for (; null === n.sibling; ) {
            if (null === n.return || hu(n.return)) {
              n = null;
              break e;
            }
            n = n.return;
          }
          for (
            n.sibling.return = n.return, n = n.sibling;
            5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

          ) {
            if (2 & n.flags) continue t;
            if (null === n.child || 4 === n.tag) continue t;
            (n.child.return = n), (n = n.child);
          }
          if (!(2 & n.flags)) {
            n = n.stateNode;
            break e;
          }
        }
        r ? gu(e, n, t) : bu(e, n, t);
      }
      function gu(e, t, n) {
        var r = e.tag,
          a = 5 === r || 6 === r;
        if (a)
          (e = a ? e.stateNode : e.stateNode.instance),
            t
              ? 8 === n.nodeType
                ? n.parentNode.insertBefore(e, t)
                : n.insertBefore(e, t)
              : (8 === n.nodeType
                  ? (t = n.parentNode).insertBefore(e, n)
                  : (t = n).appendChild(e),
                null != (n = n._reactRootContainer) ||
                  null !== t.onclick ||
                  (t.onclick = zr));
        else if (4 !== r && null !== (e = e.child))
          for (gu(e, t, n), e = e.sibling; null !== e; )
            gu(e, t, n), (e = e.sibling);
      }
      function bu(e, t, n) {
        var r = e.tag,
          a = 5 === r || 6 === r;
        if (a)
          (e = a ? e.stateNode : e.stateNode.instance),
            t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (4 !== r && null !== (e = e.child))
          for (bu(e, t, n), e = e.sibling; null !== e; )
            bu(e, t, n), (e = e.sibling);
      }
      function yu(e, t) {
        for (var n, r, a = t, l = !1; ; ) {
          if (!l) {
            l = a.return;
            e: for (;;) {
              if (null === l) throw Error(o(160));
              switch (((n = l.stateNode), l.tag)) {
                case 5:
                  r = !1;
                  break e;
                case 3:
                case 4:
                  (n = n.containerInfo), (r = !0);
                  break e;
              }
              l = l.return;
            }
            l = !0;
          }
          if (5 === a.tag || 6 === a.tag) {
            e: for (var u = e, i = a, s = i; ; )
              if ((mu(u, s), null !== s.child && 4 !== s.tag))
                (s.child.return = s), (s = s.child);
              else {
                if (s === i) break e;
                for (; null === s.sibling; ) {
                  if (null === s.return || s.return === i) break e;
                  s = s.return;
                }
                (s.sibling.return = s.return), (s = s.sibling);
              }
            r
              ? ((u = n),
                (i = a.stateNode),
                8 === u.nodeType
                  ? u.parentNode.removeChild(i)
                  : u.removeChild(i))
              : n.removeChild(a.stateNode);
          } else if (4 === a.tag) {
            if (null !== a.child) {
              (n = a.stateNode.containerInfo),
                (r = !0),
                (a.child.return = a),
                (a = a.child);
              continue;
            }
          } else if ((mu(e, a), null !== a.child)) {
            (a.child.return = a), (a = a.child);
            continue;
          }
          if (a === t) break;
          for (; null === a.sibling; ) {
            if (null === a.return || a.return === t) return;
            4 === (a = a.return).tag && (l = !1);
          }
          (a.sibling.return = a.return), (a = a.sibling);
        }
      }
      function Eu(e, t) {
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
          case 22:
            var n = t.updateQueue;
            if (null !== (n = null !== n ? n.lastEffect : null)) {
              var r = (n = n.next);
              do {
                3 == (3 & r.tag) &&
                  ((e = r.destroy), (r.destroy = void 0), void 0 !== e && e()),
                  (r = r.next);
              } while (r !== n);
            }
            return;
          case 1:
            return;
          case 5:
            if (null != (n = t.stateNode)) {
              r = t.memoizedProps;
              var a = null !== e ? e.memoizedProps : r;
              e = t.type;
              var l = t.updateQueue;
              if (((t.updateQueue = null), null !== l)) {
                for (
                  n[Kr] = r,
                    "input" === e &&
                      "radio" === r.type &&
                      null != r.name &&
                      te(n, r),
                    Se(e, a),
                    t = Se(e, r),
                    a = 0;
                  a < l.length;
                  a += 2
                ) {
                  var u = l[a],
                    i = l[a + 1];
                  "style" === u
                    ? we(n, i)
                    : "dangerouslySetInnerHTML" === u
                    ? ve(n, i)
                    : "children" === u
                    ? ge(n, i)
                    : E(n, u, i, t);
                }
                switch (e) {
                  case "input":
                    ne(n, r);
                    break;
                  case "textarea":
                    se(n, r);
                    break;
                  case "select":
                    (e = n._wrapperState.wasMultiple),
                      (n._wrapperState.wasMultiple = !!r.multiple),
                      null != (l = r.value)
                        ? oe(n, !!r.multiple, l, !1)
                        : e !== !!r.multiple &&
                          (null != r.defaultValue
                            ? oe(n, !!r.multiple, r.defaultValue, !0)
                            : oe(n, !!r.multiple, r.multiple ? [] : "", !1));
                }
              }
            }
            return;
          case 6:
            if (null === t.stateNode) throw Error(o(162));
            return void (t.stateNode.nodeValue = t.memoizedProps);
          case 3:
            return void (
              (n = t.stateNode).hydrate &&
              ((n.hydrate = !1), wt(n.containerInfo))
            );
          case 12:
            return;
          case 13:
            return (
              null !== t.memoizedState && ((Uu = Ua()), fu(t.child, !0)),
              void wu(t)
            );
          case 19:
            return void wu(t);
          case 17:
            return;
          case 23:
          case 24:
            return void fu(t, null !== t.memoizedState);
        }
        throw Error(o(163));
      }
      function wu(e) {
        var t = e.updateQueue;
        if (null !== t) {
          e.updateQueue = null;
          var n = e.stateNode;
          null === n && (n = e.stateNode = new iu()),
            t.forEach(function (t) {
              var r = zi.bind(null, e, t);
              n.has(t) || (n.add(t), t.then(r, r));
            });
        }
      }
      function _u(e, t) {
        return (
          null !== e &&
          (null === (e = e.memoizedState) || null !== e.dehydrated) &&
          null !== (t = t.memoizedState) &&
          null === t.dehydrated
        );
      }
      var ku = Math.ceil,
        Su = w.ReactCurrentDispatcher,
        Nu = w.ReactCurrentOwner,
        Pu = 0,
        xu = null,
        Tu = null,
        Cu = 0,
        Ou = 0,
        Mu = la(0),
        ju = 0,
        Au = null,
        Lu = 0,
        Du = 0,
        zu = 0,
        Ru = 0,
        Iu = null,
        Uu = 0,
        qu = 1 / 0;
      function Fu() {
        qu = Ua() + 500;
      }
      var Bu,
        $u = null,
        Yu = !1,
        Qu = null,
        Vu = null,
        Hu = !1,
        Wu = null,
        Ku = 90,
        Gu = [],
        Xu = [],
        Ju = null,
        Zu = 0,
        ei = null,
        ti = -1,
        ni = 0,
        ri = 0,
        ai = null,
        li = !1;
      function oi() {
        return 0 != (48 & Pu) ? Ua() : -1 !== ti ? ti : (ti = Ua());
      }
      function ui(e) {
        if (0 == (2 & (e = e.mode))) return 1;
        if (0 == (4 & e)) return 99 === qa() ? 1 : 2;
        if ((0 === ni && (ni = Lu), 0 !== Va.transition)) {
          0 !== ri && (ri = null !== Iu ? Iu.pendingLanes : 0), (e = ni);
          var t = 4186112 & ~ri;
          return (
            0 == (t &= -t) && 0 == (t = (e = 4186112 & ~e) & -e) && (t = 8192),
            t
          );
        }
        return (
          (e = qa()),
          (e = Ut(
            0 != (4 & Pu) && 98 === e
              ? 12
              : (e = (function (e) {
                  switch (e) {
                    case 99:
                      return 15;
                    case 98:
                      return 10;
                    case 97:
                    case 96:
                      return 8;
                    case 95:
                      return 2;
                    default:
                      return 0;
                  }
                })(e)),
            ni
          ))
        );
      }
      function ii(e, t, n) {
        if (50 < Zu) throw ((Zu = 0), (ei = null), Error(o(185)));
        if (null === (e = si(e, t))) return null;
        Bt(e, t, n), e === xu && ((zu |= t), 4 === ju && fi(e, Cu));
        var r = qa();
        1 === t
          ? 0 != (8 & Pu) && 0 == (48 & Pu)
            ? mi(e)
            : (ci(e, n), 0 === Pu && (Fu(), Ya()))
          : (0 == (4 & Pu) ||
              (98 !== r && 99 !== r) ||
              (null === Ju ? (Ju = new Set([e])) : Ju.add(e)),
            ci(e, n)),
          (Iu = e);
      }
      function si(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
          (e.childLanes |= t),
            null !== (n = e.alternate) && (n.childLanes |= t),
            (n = e),
            (e = e.return);
        return 3 === n.tag ? n.stateNode : null;
      }
      function ci(e, t) {
        for (
          var n = e.callbackNode,
            r = e.suspendedLanes,
            a = e.pingedLanes,
            l = e.expirationTimes,
            u = e.pendingLanes;
          0 < u;

        ) {
          var i = 31 - $t(u),
            s = 1 << i,
            c = l[i];
          if (-1 === c) {
            if (0 == (s & r) || 0 != (s & a)) {
              (c = t), zt(s);
              var d = Dt;
              l[i] = 10 <= d ? c + 250 : 6 <= d ? c + 5e3 : -1;
            }
          } else c <= t && (e.expiredLanes |= s);
          u &= ~s;
        }
        if (((r = Rt(e, e === xu ? Cu : 0)), (t = Dt), 0 === r))
          null !== n &&
            (n !== Aa && ka(n),
            (e.callbackNode = null),
            (e.callbackPriority = 0));
        else {
          if (null !== n) {
            if (e.callbackPriority === t) return;
            n !== Aa && ka(n);
          }
          15 === t
            ? ((n = mi.bind(null, e)),
              null === Da ? ((Da = [n]), (za = _a(Ta, Qa))) : Da.push(n),
              (n = Aa))
            : (n =
                14 === t
                  ? $a(99, mi.bind(null, e))
                  : $a(
                      (n = (function (e) {
                        switch (e) {
                          case 15:
                          case 14:
                            return 99;
                          case 13:
                          case 12:
                          case 11:
                          case 10:
                            return 98;
                          case 9:
                          case 8:
                          case 7:
                          case 6:
                          case 4:
                          case 5:
                            return 97;
                          case 3:
                          case 2:
                          case 1:
                            return 95;
                          case 0:
                            return 90;
                          default:
                            throw Error(o(358, e));
                        }
                      })(t)),
                      di.bind(null, e)
                    )),
            (e.callbackPriority = t),
            (e.callbackNode = n);
        }
      }
      function di(e) {
        if (((ti = -1), (ri = ni = 0), 0 != (48 & Pu))) throw Error(o(327));
        var t = e.callbackNode;
        if (Ci() && e.callbackNode !== t) return null;
        var n = Rt(e, e === xu ? Cu : 0);
        if (0 === n) return null;
        var r = n,
          a = Pu;
        Pu |= 16;
        var l = Ei();
        for ((xu === e && Cu === r) || (Fu(), bi(e, r)); ; )
          try {
            ki();
            break;
          } catch (t) {
            yi(e, t);
          }
        if (
          (Ja(),
          (Su.current = l),
          (Pu = a),
          null !== Tu ? (r = 0) : ((xu = null), (Cu = 0), (r = ju)),
          0 != (Lu & zu))
        )
          bi(e, 0);
        else if (0 !== r) {
          if (
            (2 === r &&
              ((Pu |= 64),
              e.hydrate && ((e.hydrate = !1), $r(e.containerInfo)),
              0 !== (n = It(e)) && (r = wi(e, n))),
            1 === r)
          )
            throw ((t = Au), bi(e, 0), fi(e, n), ci(e, Ua()), t);
          switch (
            ((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)
          ) {
            case 0:
            case 1:
              throw Error(o(345));
            case 2:
              Pi(e);
              break;
            case 3:
              if (
                (fi(e, n), (62914560 & n) === n && 10 < (r = Uu + 500 - Ua()))
              ) {
                if (0 !== Rt(e, 0)) break;
                if (((a = e.suspendedLanes) & n) !== n) {
                  oi(), (e.pingedLanes |= e.suspendedLanes & a);
                  break;
                }
                e.timeoutHandle = Fr(Pi.bind(null, e), r);
                break;
              }
              Pi(e);
              break;
            case 4:
              if ((fi(e, n), (4186112 & n) === n)) break;
              for (r = e.eventTimes, a = -1; 0 < n; ) {
                var u = 31 - $t(n);
                (l = 1 << u), (u = r[u]) > a && (a = u), (n &= ~l);
              }
              if (
                ((n = a),
                10 <
                  (n =
                    (120 > (n = Ua() - n)
                      ? 120
                      : 480 > n
                      ? 480
                      : 1080 > n
                      ? 1080
                      : 1920 > n
                      ? 1920
                      : 3e3 > n
                      ? 3e3
                      : 4320 > n
                      ? 4320
                      : 1960 * ku(n / 1960)) - n))
              ) {
                e.timeoutHandle = Fr(Pi.bind(null, e), n);
                break;
              }
              Pi(e);
              break;
            case 5:
              Pi(e);
              break;
            default:
              throw Error(o(329));
          }
        }
        return ci(e, Ua()), e.callbackNode === t ? di.bind(null, e) : null;
      }
      function fi(e, t) {
        for (
          t &= ~Ru,
            t &= ~zu,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            e = e.expirationTimes;
          0 < t;

        ) {
          var n = 31 - $t(t),
            r = 1 << n;
          (e[n] = -1), (t &= ~r);
        }
      }
      function mi(e) {
        if (0 != (48 & Pu)) throw Error(o(327));
        if ((Ci(), e === xu && 0 != (e.expiredLanes & Cu))) {
          var t = Cu,
            n = wi(e, t);
          0 != (Lu & zu) && (n = wi(e, (t = Rt(e, t))));
        } else n = wi(e, (t = Rt(e, 0)));
        if (
          (0 !== e.tag &&
            2 === n &&
            ((Pu |= 64),
            e.hydrate && ((e.hydrate = !1), $r(e.containerInfo)),
            0 !== (t = It(e)) && (n = wi(e, t))),
          1 === n)
        )
          throw ((n = Au), bi(e, 0), fi(e, t), ci(e, Ua()), n);
        return (
          (e.finishedWork = e.current.alternate),
          (e.finishedLanes = t),
          Pi(e),
          ci(e, Ua()),
          null
        );
      }
      function pi(e, t) {
        var n = Pu;
        Pu |= 1;
        try {
          return e(t);
        } finally {
          0 === (Pu = n) && (Fu(), Ya());
        }
      }
      function hi(e, t) {
        var n = Pu;
        (Pu &= -2), (Pu |= 8);
        try {
          return e(t);
        } finally {
          0 === (Pu = n) && (Fu(), Ya());
        }
      }
      function vi(e, t) {
        ua(Mu, Ou), (Ou |= t), (Lu |= t);
      }
      function gi() {
        (Ou = Mu.current), oa(Mu);
      }
      function bi(e, t) {
        (e.finishedWork = null), (e.finishedLanes = 0);
        var n = e.timeoutHandle;
        if ((-1 !== n && ((e.timeoutHandle = -1), Br(n)), null !== Tu))
          for (n = Tu.return; null !== n; ) {
            var r = n;
            switch (r.tag) {
              case 1:
                null != (r = r.type.childContextTypes) && pa();
                break;
              case 3:
                Ol(), oa(ca), oa(sa), Ql();
                break;
              case 5:
                jl(r);
                break;
              case 4:
                Ol();
                break;
              case 13:
              case 19:
                oa(Al);
                break;
              case 10:
                Za(r);
                break;
              case 23:
              case 24:
                gi();
            }
            n = n.return;
          }
        (xu = e),
          (Tu = qi(e.current, null)),
          (Cu = Ou = Lu = t),
          (ju = 0),
          (Au = null),
          (Ru = zu = Du = 0);
      }
      function yi(e, t) {
        for (;;) {
          var n = Tu;
          try {
            if ((Ja(), (Vl.current = To), Jl)) {
              for (var r = Kl.memoizedState; null !== r; ) {
                var a = r.queue;
                null !== a && (a.pending = null), (r = r.next);
              }
              Jl = !1;
            }
            if (
              ((Wl = 0),
              (Xl = Gl = Kl = null),
              (Zl = !1),
              (Nu.current = null),
              null === n || null === n.return)
            ) {
              (ju = 1), (Au = t), (Tu = null);
              break;
            }
            e: {
              var l = e,
                o = n.return,
                u = n,
                i = t;
              if (
                ((t = Cu),
                (u.flags |= 2048),
                (u.firstEffect = u.lastEffect = null),
                null !== i &&
                  "object" == typeof i &&
                  "function" == typeof i.then)
              ) {
                var s = i;
                if (0 == (2 & u.mode)) {
                  var c = u.alternate;
                  c
                    ? ((u.updateQueue = c.updateQueue),
                      (u.memoizedState = c.memoizedState),
                      (u.lanes = c.lanes))
                    : ((u.updateQueue = null), (u.memoizedState = null));
                }
                var d = 0 != (1 & Al.current),
                  f = o;
                do {
                  var m;
                  if ((m = 13 === f.tag)) {
                    var p = f.memoizedState;
                    if (null !== p) m = null !== p.dehydrated;
                    else {
                      var h = f.memoizedProps;
                      m =
                        void 0 !== h.fallback &&
                        (!0 !== h.unstable_avoidThisFallback || !d);
                    }
                  }
                  if (m) {
                    var v = f.updateQueue;
                    if (null === v) {
                      var g = new Set();
                      g.add(s), (f.updateQueue = g);
                    } else v.add(s);
                    if (0 == (2 & f.mode)) {
                      if (
                        ((f.flags |= 64),
                        (u.flags |= 16384),
                        (u.flags &= -2981),
                        1 === u.tag)
                      )
                        if (null === u.alternate) u.tag = 17;
                        else {
                          var b = ol(-1, 1);
                          (b.tag = 2), ul(u, b);
                        }
                      u.lanes |= 1;
                      break e;
                    }
                    (i = void 0), (u = t);
                    var y = l.pingCache;
                    if (
                      (null === y
                        ? ((y = l.pingCache = new lu()),
                          (i = new Set()),
                          y.set(s, i))
                        : void 0 === (i = y.get(s)) &&
                          ((i = new Set()), y.set(s, i)),
                      !i.has(u))
                    ) {
                      i.add(u);
                      var E = Di.bind(null, l, s, u);
                      s.then(E, E);
                    }
                    (f.flags |= 4096), (f.lanes = t);
                    break e;
                  }
                  f = f.return;
                } while (null !== f);
                i = Error(
                  (H(u.type) || "A React component") +
                    " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."
                );
              }
              5 !== ju && (ju = 2), (i = ru(i, u)), (f = o);
              do {
                switch (f.tag) {
                  case 3:
                    (l = i),
                      (f.flags |= 4096),
                      (t &= -t),
                      (f.lanes |= t),
                      il(f, ou(0, l, t));
                    break e;
                  case 1:
                    l = i;
                    var w = f.type,
                      _ = f.stateNode;
                    if (
                      0 == (64 & f.flags) &&
                      ("function" == typeof w.getDerivedStateFromError ||
                        (null !== _ &&
                          "function" == typeof _.componentDidCatch &&
                          (null === Vu || !Vu.has(_))))
                    ) {
                      (f.flags |= 4096),
                        (t &= -t),
                        (f.lanes |= t),
                        il(f, uu(f, l, t));
                      break e;
                    }
                }
                f = f.return;
              } while (null !== f);
            }
            Ni(n);
          } catch (e) {
            (t = e), Tu === n && null !== n && (Tu = n = n.return);
            continue;
          }
          break;
        }
      }
      function Ei() {
        var e = Su.current;
        return (Su.current = To), null === e ? To : e;
      }
      function wi(e, t) {
        var n = Pu;
        Pu |= 16;
        var r = Ei();
        for ((xu === e && Cu === t) || bi(e, t); ; )
          try {
            _i();
            break;
          } catch (t) {
            yi(e, t);
          }
        if ((Ja(), (Pu = n), (Su.current = r), null !== Tu))
          throw Error(o(261));
        return (xu = null), (Cu = 0), ju;
      }
      function _i() {
        for (; null !== Tu; ) Si(Tu);
      }
      function ki() {
        for (; null !== Tu && !Sa(); ) Si(Tu);
      }
      function Si(e) {
        var t = Bu(e.alternate, e, Ou);
        (e.memoizedProps = e.pendingProps),
          null === t ? Ni(e) : (Tu = t),
          (Nu.current = null);
      }
      function Ni(e) {
        var t = e;
        do {
          var n = t.alternate;
          if (((e = t.return), 0 == (2048 & t.flags))) {
            if (null !== (n = tu(n, t, Ou))) return void (Tu = n);
            if (
              (24 !== (n = t).tag && 23 !== n.tag) ||
              null === n.memoizedState ||
              0 != (1073741824 & Ou) ||
              0 == (4 & n.mode)
            ) {
              for (var r = 0, a = n.child; null !== a; )
                (r |= a.lanes | a.childLanes), (a = a.sibling);
              n.childLanes = r;
            }
            null !== e &&
              0 == (2048 & e.flags) &&
              (null === e.firstEffect && (e.firstEffect = t.firstEffect),
              null !== t.lastEffect &&
                (null !== e.lastEffect &&
                  (e.lastEffect.nextEffect = t.firstEffect),
                (e.lastEffect = t.lastEffect)),
              1 < t.flags &&
                (null !== e.lastEffect
                  ? (e.lastEffect.nextEffect = t)
                  : (e.firstEffect = t),
                (e.lastEffect = t)));
          } else {
            if (null !== (n = nu(t))) return (n.flags &= 2047), void (Tu = n);
            null !== e &&
              ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
          }
          if (null !== (t = t.sibling)) return void (Tu = t);
          Tu = t = e;
        } while (null !== t);
        0 === ju && (ju = 5);
      }
      function Pi(e) {
        var t = qa();
        return Ba(99, xi.bind(null, e, t)), null;
      }
      function xi(e, t) {
        do {
          Ci();
        } while (null !== Wu);
        if (0 != (48 & Pu)) throw Error(o(327));
        var n = e.finishedWork;
        if (null === n) return null;
        if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
          throw Error(o(177));
        e.callbackNode = null;
        var r = n.lanes | n.childLanes,
          a = r,
          l = e.pendingLanes & ~a;
        (e.pendingLanes = a),
          (e.suspendedLanes = 0),
          (e.pingedLanes = 0),
          (e.expiredLanes &= a),
          (e.mutableReadLanes &= a),
          (e.entangledLanes &= a),
          (a = e.entanglements);
        for (var u = e.eventTimes, i = e.expirationTimes; 0 < l; ) {
          var s = 31 - $t(l),
            c = 1 << s;
          (a[s] = 0), (u[s] = -1), (i[s] = -1), (l &= ~c);
        }
        if (
          (null !== Ju && 0 == (24 & r) && Ju.has(e) && Ju.delete(e),
          e === xu && ((Tu = xu = null), (Cu = 0)),
          1 < n.flags
            ? null !== n.lastEffect
              ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
              : (r = n)
            : (r = n.firstEffect),
          null !== r)
        ) {
          if (
            ((a = Pu),
            (Pu |= 32),
            (Nu.current = null),
            (Rr = Wt),
            mr((u = fr())))
          ) {
            if ("selectionStart" in u)
              i = { start: u.selectionStart, end: u.selectionEnd };
            else
              e: if (
                ((i = ((i = u.ownerDocument) && i.defaultView) || window),
                (c = i.getSelection && i.getSelection()) && 0 !== c.rangeCount)
              ) {
                (i = c.anchorNode),
                  (l = c.anchorOffset),
                  (s = c.focusNode),
                  (c = c.focusOffset);
                try {
                  i.nodeType, s.nodeType;
                } catch (e) {
                  i = null;
                  break e;
                }
                var d = 0,
                  f = -1,
                  m = -1,
                  p = 0,
                  h = 0,
                  v = u,
                  g = null;
                t: for (;;) {
                  for (
                    var b;
                    v !== i || (0 !== l && 3 !== v.nodeType) || (f = d + l),
                      v !== s || (0 !== c && 3 !== v.nodeType) || (m = d + c),
                      3 === v.nodeType && (d += v.nodeValue.length),
                      null !== (b = v.firstChild);

                  )
                    (g = v), (v = b);
                  for (;;) {
                    if (v === u) break t;
                    if (
                      (g === i && ++p === l && (f = d),
                      g === s && ++h === c && (m = d),
                      null !== (b = v.nextSibling))
                    )
                      break;
                    g = (v = g).parentNode;
                  }
                  v = b;
                }
                i = -1 === f || -1 === m ? null : { start: f, end: m };
              } else i = null;
            i = i || { start: 0, end: 0 };
          } else i = null;
          (Ir = { focusedElem: u, selectionRange: i }),
            (Wt = !1),
            (ai = null),
            (li = !1),
            ($u = r);
          do {
            try {
              Ti();
            } catch (e) {
              if (null === $u) throw Error(o(330));
              Li($u, e), ($u = $u.nextEffect);
            }
          } while (null !== $u);
          (ai = null), ($u = r);
          do {
            try {
              for (u = e; null !== $u; ) {
                var y = $u.flags;
                if ((16 & y && ge($u.stateNode, ""), 128 & y)) {
                  var E = $u.alternate;
                  if (null !== E) {
                    var w = E.ref;
                    null !== w &&
                      ("function" == typeof w ? w(null) : (w.current = null));
                  }
                }
                switch (1038 & y) {
                  case 2:
                    vu($u), ($u.flags &= -3);
                    break;
                  case 6:
                    vu($u), ($u.flags &= -3), Eu($u.alternate, $u);
                    break;
                  case 1024:
                    $u.flags &= -1025;
                    break;
                  case 1028:
                    ($u.flags &= -1025), Eu($u.alternate, $u);
                    break;
                  case 4:
                    Eu($u.alternate, $u);
                    break;
                  case 8:
                    yu(u, (i = $u));
                    var _ = i.alternate;
                    pu(i), null !== _ && pu(_);
                }
                $u = $u.nextEffect;
              }
            } catch (e) {
              if (null === $u) throw Error(o(330));
              Li($u, e), ($u = $u.nextEffect);
            }
          } while (null !== $u);
          if (
            ((w = Ir),
            (E = fr()),
            (y = w.focusedElem),
            (u = w.selectionRange),
            E !== y &&
              y &&
              y.ownerDocument &&
              dr(y.ownerDocument.documentElement, y))
          ) {
            null !== u &&
              mr(y) &&
              ((E = u.start),
              void 0 === (w = u.end) && (w = E),
              "selectionStart" in y
                ? ((y.selectionStart = E),
                  (y.selectionEnd = Math.min(w, y.value.length)))
                : (w =
                    ((E = y.ownerDocument || document) && E.defaultView) ||
                    window).getSelection &&
                  ((w = w.getSelection()),
                  (i = y.textContent.length),
                  (_ = Math.min(u.start, i)),
                  (u = void 0 === u.end ? _ : Math.min(u.end, i)),
                  !w.extend && _ > u && ((i = u), (u = _), (_ = i)),
                  (i = cr(y, _)),
                  (l = cr(y, u)),
                  i &&
                    l &&
                    (1 !== w.rangeCount ||
                      w.anchorNode !== i.node ||
                      w.anchorOffset !== i.offset ||
                      w.focusNode !== l.node ||
                      w.focusOffset !== l.offset) &&
                    ((E = E.createRange()).setStart(i.node, i.offset),
                    w.removeAllRanges(),
                    _ > u
                      ? (w.addRange(E), w.extend(l.node, l.offset))
                      : (E.setEnd(l.node, l.offset), w.addRange(E))))),
              (E = []);
            for (w = y; (w = w.parentNode); )
              1 === w.nodeType &&
                E.push({ element: w, left: w.scrollLeft, top: w.scrollTop });
            for (
              "function" == typeof y.focus && y.focus(), y = 0;
              y < E.length;
              y++
            )
              ((w = E[y]).element.scrollLeft = w.left),
                (w.element.scrollTop = w.top);
          }
          (Wt = !!Rr), (Ir = Rr = null), (e.current = n), ($u = r);
          do {
            try {
              for (y = e; null !== $u; ) {
                var k = $u.flags;
                if ((36 & k && du(y, $u.alternate, $u), 128 & k)) {
                  E = void 0;
                  var S = $u.ref;
                  if (null !== S) {
                    var N = $u.stateNode;
                    switch ($u.tag) {
                      case 5:
                        E = N;
                        break;
                      default:
                        E = N;
                    }
                    "function" == typeof S ? S(E) : (S.current = E);
                  }
                }
                $u = $u.nextEffect;
              }
            } catch (e) {
              if (null === $u) throw Error(o(330));
              Li($u, e), ($u = $u.nextEffect);
            }
          } while (null !== $u);
          ($u = null), La(), (Pu = a);
        } else e.current = n;
        if (Hu) (Hu = !1), (Wu = e), (Ku = t);
        else
          for ($u = r; null !== $u; )
            (t = $u.nextEffect),
              ($u.nextEffect = null),
              8 & $u.flags && (((k = $u).sibling = null), (k.stateNode = null)),
              ($u = t);
        if (
          (0 === (r = e.pendingLanes) && (Vu = null),
          1 === r ? (e === ei ? Zu++ : ((Zu = 0), (ei = e))) : (Zu = 0),
          (n = n.stateNode),
          Ea && "function" == typeof Ea.onCommitFiberRoot)
        )
          try {
            Ea.onCommitFiberRoot(ya, n, void 0, 64 == (64 & n.current.flags));
          } catch (e) {}
        if ((ci(e, Ua()), Yu)) throw ((Yu = !1), (e = Qu), (Qu = null), e);
        return 0 != (8 & Pu) || Ya(), null;
      }
      function Ti() {
        for (; null !== $u; ) {
          var e = $u.alternate;
          li ||
            null === ai ||
            (0 != (8 & $u.flags)
              ? Ze($u, ai) && (li = !0)
              : 13 === $u.tag && _u(e, $u) && Ze($u, ai) && (li = !0));
          var t = $u.flags;
          0 != (256 & t) && cu(e, $u),
            0 == (512 & t) ||
              Hu ||
              ((Hu = !0),
              $a(97, function () {
                return Ci(), null;
              })),
            ($u = $u.nextEffect);
        }
      }
      function Ci() {
        if (90 !== Ku) {
          var e = 97 < Ku ? 97 : Ku;
          return (Ku = 90), Ba(e, ji);
        }
        return !1;
      }
      function Oi(e, t) {
        Gu.push(t, e),
          Hu ||
            ((Hu = !0),
            $a(97, function () {
              return Ci(), null;
            }));
      }
      function Mi(e, t) {
        Xu.push(t, e),
          Hu ||
            ((Hu = !0),
            $a(97, function () {
              return Ci(), null;
            }));
      }
      function ji() {
        if (null === Wu) return !1;
        var e = Wu;
        if (((Wu = null), 0 != (48 & Pu))) throw Error(o(331));
        var t = Pu;
        Pu |= 32;
        var n = Xu;
        Xu = [];
        for (var r = 0; r < n.length; r += 2) {
          var a = n[r],
            l = n[r + 1],
            u = a.destroy;
          if (((a.destroy = void 0), "function" == typeof u))
            try {
              u();
            } catch (e) {
              if (null === l) throw Error(o(330));
              Li(l, e);
            }
        }
        for (n = Gu, Gu = [], r = 0; r < n.length; r += 2) {
          (a = n[r]), (l = n[r + 1]);
          try {
            var i = a.create;
            a.destroy = i();
          } catch (e) {
            if (null === l) throw Error(o(330));
            Li(l, e);
          }
        }
        for (i = e.current.firstEffect; null !== i; )
          (e = i.nextEffect),
            (i.nextEffect = null),
            8 & i.flags && ((i.sibling = null), (i.stateNode = null)),
            (i = e);
        return (Pu = t), Ya(), !0;
      }
      function Ai(e, t, n) {
        ul(e, (t = ou(0, (t = ru(n, t)), 1))),
          (t = oi()),
          null !== (e = si(e, 1)) && (Bt(e, 1, t), ci(e, t));
      }
      function Li(e, t) {
        if (3 === e.tag) Ai(e, e, t);
        else
          for (var n = e.return; null !== n; ) {
            if (3 === n.tag) {
              Ai(n, e, t);
              break;
            }
            if (1 === n.tag) {
              var r = n.stateNode;
              if (
                "function" == typeof n.type.getDerivedStateFromError ||
                ("function" == typeof r.componentDidCatch &&
                  (null === Vu || !Vu.has(r)))
              ) {
                var a = uu(n, (e = ru(t, e)), 1);
                if ((ul(n, a), (a = oi()), null !== (n = si(n, 1))))
                  Bt(n, 1, a), ci(n, a);
                else if (
                  "function" == typeof r.componentDidCatch &&
                  (null === Vu || !Vu.has(r))
                )
                  try {
                    r.componentDidCatch(t, e);
                  } catch (e) {}
                break;
              }
            }
            n = n.return;
          }
      }
      function Di(e, t, n) {
        var r = e.pingCache;
        null !== r && r.delete(t),
          (t = oi()),
          (e.pingedLanes |= e.suspendedLanes & n),
          xu === e &&
            (Cu & n) === n &&
            (4 === ju || (3 === ju && (62914560 & Cu) === Cu && 500 > Ua() - Uu)
              ? bi(e, 0)
              : (Ru |= n)),
          ci(e, t);
      }
      function zi(e, t) {
        var n = e.stateNode;
        null !== n && n.delete(t),
          0 == (t = 0) &&
            (0 == (2 & (t = e.mode))
              ? (t = 1)
              : 0 == (4 & t)
              ? (t = 99 === qa() ? 1 : 2)
              : (0 === ni && (ni = Lu),
                0 === (t = qt(62914560 & ~ni)) && (t = 4194304))),
          (n = oi()),
          null !== (e = si(e, t)) && (Bt(e, t, n), ci(e, n));
      }
      function Ri(e, t, n, r) {
        (this.tag = e),
          (this.key = n),
          (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
              null),
          (this.index = 0),
          (this.ref = null),
          (this.pendingProps = t),
          (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
              null),
          (this.mode = r),
          (this.flags = 0),
          (this.lastEffect = this.firstEffect = this.nextEffect = null),
          (this.childLanes = this.lanes = 0),
          (this.alternate = null);
      }
      function Ii(e, t, n, r) {
        return new Ri(e, t, n, r);
      }
      function Ui(e) {
        return !(!(e = e.prototype) || !e.isReactComponent);
      }
      function qi(e, t) {
        var n = e.alternate;
        return (
          null === n
            ? (((n = Ii(e.tag, t, e.key, e.mode)).elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.type = e.type),
              (n.flags = 0),
              (n.nextEffect = null),
              (n.firstEffect = null),
              (n.lastEffect = null)),
          (n.childLanes = e.childLanes),
          (n.lanes = e.lanes),
          (n.child = e.child),
          (n.memoizedProps = e.memoizedProps),
          (n.memoizedState = e.memoizedState),
          (n.updateQueue = e.updateQueue),
          (t = e.dependencies),
          (n.dependencies =
            null === t
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext }),
          (n.sibling = e.sibling),
          (n.index = e.index),
          (n.ref = e.ref),
          n
        );
      }
      function Fi(e, t, n, r, a, l) {
        var u = 2;
        if (((r = e), "function" == typeof e)) Ui(e) && (u = 1);
        else if ("string" == typeof e) u = 5;
        else
          e: switch (e) {
            case S:
              return Bi(n.children, a, l, t);
            case z:
              (u = 8), (a |= 16);
              break;
            case N:
              (u = 8), (a |= 1);
              break;
            case P:
              return (
                ((e = Ii(12, n, t, 8 | a)).elementType = P),
                (e.type = P),
                (e.lanes = l),
                e
              );
            case O:
              return (
                ((e = Ii(13, n, t, a)).type = O),
                (e.elementType = O),
                (e.lanes = l),
                e
              );
            case M:
              return ((e = Ii(19, n, t, a)).elementType = M), (e.lanes = l), e;
            case R:
              return $i(n, a, l, t);
            case I:
              return ((e = Ii(24, n, t, a)).elementType = I), (e.lanes = l), e;
            default:
              if ("object" == typeof e && null !== e)
                switch (e.$$typeof) {
                  case x:
                    u = 10;
                    break e;
                  case T:
                    u = 9;
                    break e;
                  case C:
                    u = 11;
                    break e;
                  case j:
                    u = 14;
                    break e;
                  case A:
                    (u = 16), (r = null);
                    break e;
                  case L:
                    u = 22;
                    break e;
                }
              throw Error(o(130, null == e ? e : typeof e, ""));
          }
        return (
          ((t = Ii(u, n, t, a)).elementType = e), (t.type = r), (t.lanes = l), t
        );
      }
      function Bi(e, t, n, r) {
        return ((e = Ii(7, e, r, t)).lanes = n), e;
      }
      function $i(e, t, n, r) {
        return ((e = Ii(23, e, r, t)).elementType = R), (e.lanes = n), e;
      }
      function Yi(e, t, n) {
        return ((e = Ii(6, e, null, t)).lanes = n), e;
      }
      function Qi(e, t, n) {
        return (
          ((t = Ii(4, null !== e.children ? e.children : [], e.key, t)).lanes =
            n),
          (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
          }),
          t
        );
      }
      function Vi(e, t, n) {
        (this.tag = t),
          (this.containerInfo = e),
          (this.finishedWork =
            this.pingCache =
            this.current =
            this.pendingChildren =
              null),
          (this.timeoutHandle = -1),
          (this.pendingContext = this.context = null),
          (this.hydrate = n),
          (this.callbackNode = null),
          (this.callbackPriority = 0),
          (this.eventTimes = Ft(0)),
          (this.expirationTimes = Ft(-1)),
          (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
              0),
          (this.entanglements = Ft(0)),
          (this.mutableSourceEagerHydrationData = null);
      }
      function Hi(e, t, n) {
        var r =
          3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return {
          $$typeof: k,
          key: null == r ? null : "" + r,
          children: e,
          containerInfo: t,
          implementation: n,
        };
      }
      function Wi(e, t, n, r) {
        var a = t.current,
          l = oi(),
          u = ui(a);
        e: if (n) {
          t: {
            if (Ke((n = n._reactInternals)) !== n || 1 !== n.tag)
              throw Error(o(170));
            var i = n;
            do {
              switch (i.tag) {
                case 3:
                  i = i.stateNode.context;
                  break t;
                case 1:
                  if (ma(i.type)) {
                    i = i.stateNode.__reactInternalMemoizedMergedChildContext;
                    break t;
                  }
              }
              i = i.return;
            } while (null !== i);
            throw Error(o(171));
          }
          if (1 === n.tag) {
            var s = n.type;
            if (ma(s)) {
              n = va(n, s, i);
              break e;
            }
          }
          n = i;
        } else n = ia;
        return (
          null === t.context ? (t.context = n) : (t.pendingContext = n),
          ((t = ol(l, u)).payload = { element: e }),
          null !== (r = void 0 === r ? null : r) && (t.callback = r),
          ul(a, t),
          ii(a, u, l),
          u
        );
      }
      function Ki(e) {
        if (!(e = e.current).child) return null;
        switch (e.child.tag) {
          case 5:
          default:
            return e.child.stateNode;
        }
      }
      function Gi(e, t) {
        if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
          var n = e.retryLane;
          e.retryLane = 0 !== n && n < t ? n : t;
        }
      }
      function Xi(e, t) {
        Gi(e, t), (e = e.alternate) && Gi(e, t);
      }
      function Ji(e, t, n) {
        var r =
          (null != n &&
            null != n.hydrationOptions &&
            n.hydrationOptions.mutableSources) ||
          null;
        if (
          ((n = new Vi(e, t, null != n && !0 === n.hydrate)),
          (t = Ii(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
          (n.current = t),
          (t.stateNode = n),
          al(t),
          (e[Gr] = n.current),
          Tr(8 === e.nodeType ? e.parentNode : e),
          r)
        )
          for (e = 0; e < r.length; e++) {
            var a = (t = r[e])._getVersion;
            (a = a(t._source)),
              null == n.mutableSourceEagerHydrationData
                ? (n.mutableSourceEagerHydrationData = [t, a])
                : n.mutableSourceEagerHydrationData.push(t, a);
          }
        this._internalRoot = n;
      }
      function Zi(e) {
        return !(
          !e ||
          (1 !== e.nodeType &&
            9 !== e.nodeType &&
            11 !== e.nodeType &&
            (8 !== e.nodeType ||
              " react-mount-point-unstable " !== e.nodeValue))
        );
      }
      function es(e, t, n, r, a) {
        var l = n._reactRootContainer;
        if (l) {
          var o = l._internalRoot;
          if ("function" == typeof a) {
            var u = a;
            a = function () {
              var e = Ki(o);
              u.call(e);
            };
          }
          Wi(t, o, e, a);
        } else {
          if (
            ((l = n._reactRootContainer =
              (function (e, t) {
                if (
                  (t ||
                    (t = !(
                      !(t = e
                        ? 9 === e.nodeType
                          ? e.documentElement
                          : e.firstChild
                        : null) ||
                      1 !== t.nodeType ||
                      !t.hasAttribute("data-reactroot")
                    )),
                  !t)
                )
                  for (var n; (n = e.lastChild); ) e.removeChild(n);
                return new Ji(e, 0, t ? { hydrate: !0 } : void 0);
              })(n, r)),
            (o = l._internalRoot),
            "function" == typeof a)
          ) {
            var i = a;
            a = function () {
              var e = Ki(o);
              i.call(e);
            };
          }
          hi(function () {
            Wi(t, o, e, a);
          });
        }
        return Ki(o);
      }
      function ts(e, t) {
        var n =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!Zi(t)) throw Error(o(200));
        return Hi(e, t, null, n);
      }
      (Bu = function (e, t, n) {
        var r = t.lanes;
        if (null !== e)
          if (e.memoizedProps !== t.pendingProps || ca.current) Ao = !0;
          else {
            if (0 == (n & r)) {
              switch (((Ao = !1), t.tag)) {
                case 3:
                  $o(t), $l();
                  break;
                case 5:
                  Ml(t);
                  break;
                case 1:
                  ma(t.type) && ga(t);
                  break;
                case 4:
                  Cl(t, t.stateNode.containerInfo);
                  break;
                case 10:
                  r = t.memoizedProps.value;
                  var a = t.type._context;
                  ua(Wa, a._currentValue), (a._currentValue = r);
                  break;
                case 13:
                  if (null !== t.memoizedState)
                    return 0 != (n & t.child.childLanes)
                      ? Wo(e, t, n)
                      : (ua(Al, 1 & Al.current),
                        null !== (t = Zo(e, t, n)) ? t.sibling : null);
                  ua(Al, 1 & Al.current);
                  break;
                case 19:
                  if (((r = 0 != (n & t.childLanes)), 0 != (64 & e.flags))) {
                    if (r) return Jo(e, t, n);
                    t.flags |= 64;
                  }
                  if (
                    (null !== (a = t.memoizedState) &&
                      ((a.rendering = null),
                      (a.tail = null),
                      (a.lastEffect = null)),
                    ua(Al, Al.current),
                    r)
                  )
                    break;
                  return null;
                case 23:
                case 24:
                  return (t.lanes = 0), Io(e, t, n);
              }
              return Zo(e, t, n);
            }
            Ao = 0 != (16384 & e.flags);
          }
        else Ao = !1;
        switch (((t.lanes = 0), t.tag)) {
          case 2:
            if (
              ((r = t.type),
              null !== e &&
                ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              (e = t.pendingProps),
              (a = fa(t, sa.current)),
              tl(t, n),
              (a = no(null, t, r, e, a, n)),
              (t.flags |= 1),
              "object" == typeof a &&
                null !== a &&
                "function" == typeof a.render &&
                void 0 === a.$$typeof)
            ) {
              if (
                ((t.tag = 1),
                (t.memoizedState = null),
                (t.updateQueue = null),
                ma(r))
              ) {
                var l = !0;
                ga(t);
              } else l = !1;
              (t.memoizedState =
                null !== a.state && void 0 !== a.state ? a.state : null),
                al(t);
              var u = r.getDerivedStateFromProps;
              "function" == typeof u && fl(t, r, u, e),
                (a.updater = ml),
                (t.stateNode = a),
                (a._reactInternals = t),
                gl(t, r, e, n),
                (t = Bo(null, t, r, !0, l, n));
            } else (t.tag = 0), Lo(null, t, a, n), (t = t.child);
            return t;
          case 16:
            a = t.elementType;
            e: {
              switch (
                (null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (e = t.pendingProps),
                (a = (l = a._init)(a._payload)),
                (t.type = a),
                (l = t.tag =
                  (function (e) {
                    if ("function" == typeof e) return Ui(e) ? 1 : 0;
                    if (null != e) {
                      if ((e = e.$$typeof) === C) return 11;
                      if (e === j) return 14;
                    }
                    return 2;
                  })(a)),
                (e = Ha(a, e)),
                l)
              ) {
                case 0:
                  t = qo(null, t, a, e, n);
                  break e;
                case 1:
                  t = Fo(null, t, a, e, n);
                  break e;
                case 11:
                  t = Do(null, t, a, e, n);
                  break e;
                case 14:
                  t = zo(null, t, a, Ha(a.type, e), r, n);
                  break e;
              }
              throw Error(o(306, a, ""));
            }
            return t;
          case 0:
            return (
              (r = t.type),
              (a = t.pendingProps),
              qo(e, t, r, (a = t.elementType === r ? a : Ha(r, a)), n)
            );
          case 1:
            return (
              (r = t.type),
              (a = t.pendingProps),
              Fo(e, t, r, (a = t.elementType === r ? a : Ha(r, a)), n)
            );
          case 3:
            if (($o(t), (r = t.updateQueue), null === e || null === r))
              throw Error(o(282));
            if (
              ((r = t.pendingProps),
              (a = null !== (a = t.memoizedState) ? a.element : null),
              ll(e, t),
              sl(t, r, null, n),
              (r = t.memoizedState.element) === a)
            )
              $l(), (t = Zo(e, t, n));
            else {
              if (
                ((l = (a = t.stateNode).hydrate) &&
                  ((zl = Yr(t.stateNode.containerInfo.firstChild)),
                  (Dl = t),
                  (l = Rl = !0)),
                l)
              ) {
                if (null != (e = a.mutableSourceEagerHydrationData))
                  for (a = 0; a < e.length; a += 2)
                    ((l = e[a])._workInProgressVersionPrimary = e[a + 1]),
                      Yl.push(l);
                for (n = kl(t, null, r, n), t.child = n; n; )
                  (n.flags = (-3 & n.flags) | 1024), (n = n.sibling);
              } else Lo(e, t, r, n), $l();
              t = t.child;
            }
            return t;
          case 5:
            return (
              Ml(t),
              null === e && ql(t),
              (r = t.type),
              (a = t.pendingProps),
              (l = null !== e ? e.memoizedProps : null),
              (u = a.children),
              qr(r, a) ? (u = null) : null !== l && qr(r, l) && (t.flags |= 16),
              Uo(e, t),
              Lo(e, t, u, n),
              t.child
            );
          case 6:
            return null === e && ql(t), null;
          case 13:
            return Wo(e, t, n);
          case 4:
            return (
              Cl(t, t.stateNode.containerInfo),
              (r = t.pendingProps),
              null === e ? (t.child = _l(t, null, r, n)) : Lo(e, t, r, n),
              t.child
            );
          case 11:
            return (
              (r = t.type),
              (a = t.pendingProps),
              Do(e, t, r, (a = t.elementType === r ? a : Ha(r, a)), n)
            );
          case 7:
            return Lo(e, t, t.pendingProps, n), t.child;
          case 8:
          case 12:
            return Lo(e, t, t.pendingProps.children, n), t.child;
          case 10:
            e: {
              (r = t.type._context),
                (a = t.pendingProps),
                (u = t.memoizedProps),
                (l = a.value);
              var i = t.type._context;
              if ((ua(Wa, i._currentValue), (i._currentValue = l), null !== u))
                if (
                  ((i = u.value),
                  0 ==
                    (l = or(i, l)
                      ? 0
                      : 0 |
                        ("function" == typeof r._calculateChangedBits
                          ? r._calculateChangedBits(i, l)
                          : 1073741823)))
                ) {
                  if (u.children === a.children && !ca.current) {
                    t = Zo(e, t, n);
                    break e;
                  }
                } else
                  for (null !== (i = t.child) && (i.return = t); null !== i; ) {
                    var s = i.dependencies;
                    if (null !== s) {
                      u = i.child;
                      for (var c = s.firstContext; null !== c; ) {
                        if (c.context === r && 0 != (c.observedBits & l)) {
                          1 === i.tag &&
                            (((c = ol(-1, n & -n)).tag = 2), ul(i, c)),
                            (i.lanes |= n),
                            null !== (c = i.alternate) && (c.lanes |= n),
                            el(i.return, n),
                            (s.lanes |= n);
                          break;
                        }
                        c = c.next;
                      }
                    } else
                      u = 10 === i.tag && i.type === t.type ? null : i.child;
                    if (null !== u) u.return = i;
                    else
                      for (u = i; null !== u; ) {
                        if (u === t) {
                          u = null;
                          break;
                        }
                        if (null !== (i = u.sibling)) {
                          (i.return = u.return), (u = i);
                          break;
                        }
                        u = u.return;
                      }
                    i = u;
                  }
              Lo(e, t, a.children, n), (t = t.child);
            }
            return t;
          case 9:
            return (
              (a = t.type),
              (r = (l = t.pendingProps).children),
              tl(t, n),
              (r = r((a = nl(a, l.unstable_observedBits)))),
              (t.flags |= 1),
              Lo(e, t, r, n),
              t.child
            );
          case 14:
            return (
              (l = Ha((a = t.type), t.pendingProps)),
              zo(e, t, a, (l = Ha(a.type, l)), r, n)
            );
          case 15:
            return Ro(e, t, t.type, t.pendingProps, r, n);
          case 17:
            return (
              (r = t.type),
              (a = t.pendingProps),
              (a = t.elementType === r ? a : Ha(r, a)),
              null !== e &&
                ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              (t.tag = 1),
              ma(r) ? ((e = !0), ga(t)) : (e = !1),
              tl(t, n),
              hl(t, r, a),
              gl(t, r, a, n),
              Bo(null, t, r, !0, e, n)
            );
          case 19:
            return Jo(e, t, n);
          case 23:
          case 24:
            return Io(e, t, n);
        }
        throw Error(o(156, t.tag));
      }),
        (Ji.prototype.render = function (e) {
          Wi(e, this._internalRoot, null, null);
        }),
        (Ji.prototype.unmount = function () {
          var e = this._internalRoot,
            t = e.containerInfo;
          Wi(null, e, null, function () {
            t[Gr] = null;
          });
        }),
        (et = function (e) {
          13 === e.tag && (ii(e, 4, oi()), Xi(e, 4));
        }),
        (tt = function (e) {
          13 === e.tag && (ii(e, 67108864, oi()), Xi(e, 67108864));
        }),
        (nt = function (e) {
          if (13 === e.tag) {
            var t = oi(),
              n = ui(e);
            ii(e, n, t), Xi(e, n);
          }
        }),
        (rt = function (e, t) {
          return t();
        }),
        (Pe = function (e, t, n) {
          switch (t) {
            case "input":
              if ((ne(e, n), (t = n.name), "radio" === n.type && null != t)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                  n = n.querySelectorAll(
                    "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                  ),
                    t = 0;
                  t < n.length;
                  t++
                ) {
                  var r = n[t];
                  if (r !== e && r.form === e.form) {
                    var a = ta(r);
                    if (!a) throw Error(o(90));
                    X(r), ne(r, a);
                  }
                }
              }
              break;
            case "textarea":
              se(e, n);
              break;
            case "select":
              null != (t = n.value) && oe(e, !!n.multiple, t, !1);
          }
        }),
        (je = pi),
        (Ae = function (e, t, n, r, a) {
          var l = Pu;
          Pu |= 4;
          try {
            return Ba(98, e.bind(null, t, n, r, a));
          } finally {
            0 === (Pu = l) && (Fu(), Ya());
          }
        }),
        (Le = function () {
          0 == (49 & Pu) &&
            ((function () {
              if (null !== Ju) {
                var e = Ju;
                (Ju = null),
                  e.forEach(function (e) {
                    (e.expiredLanes |= 24 & e.pendingLanes), ci(e, Ua());
                  });
              }
              Ya();
            })(),
            Ci());
        }),
        (De = function (e, t) {
          var n = Pu;
          Pu |= 2;
          try {
            return e(t);
          } finally {
            0 === (Pu = n) && (Fu(), Ya());
          }
        });
      var ns = { Events: [Zr, ea, ta, Oe, Me, Ci, { current: !1 }] },
        rs = {
          findFiberByHostInstance: Jr,
          bundleType: 0,
          version: "17.0.2",
          rendererPackageName: "react-dom",
        },
        as = {
          bundleType: rs.bundleType,
          version: rs.version,
          rendererPackageName: rs.rendererPackageName,
          rendererConfig: rs.rendererConfig,
          overrideHookState: null,
          overrideHookStateDeletePath: null,
          overrideHookStateRenamePath: null,
          overrideProps: null,
          overridePropsDeletePath: null,
          overridePropsRenamePath: null,
          setSuspenseHandler: null,
          scheduleUpdate: null,
          currentDispatcherRef: w.ReactCurrentDispatcher,
          findHostInstanceByFiber: function (e) {
            return null === (e = Je(e)) ? null : e.stateNode;
          },
          findFiberByHostInstance:
            rs.findFiberByHostInstance ||
            function () {
              return null;
            },
          findHostInstancesForRefresh: null,
          scheduleRefresh: null,
          scheduleRoot: null,
          setRefreshHandler: null,
          getCurrentFiber: null,
        };
      if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        var ls = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!ls.isDisabled && ls.supportsFiber)
          try {
            (ya = ls.inject(as)), (Ea = ls);
          } catch (he) {}
      }
      (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ns),
        (t.createPortal = ts),
        (t.findDOMNode = function (e) {
          if (null == e) return null;
          if (1 === e.nodeType) return e;
          var t = e._reactInternals;
          if (void 0 === t) {
            if ("function" == typeof e.render) throw Error(o(188));
            throw Error(o(268, Object.keys(e)));
          }
          return null === (e = Je(t)) ? null : e.stateNode;
        }),
        (t.flushSync = function (e, t) {
          var n = Pu;
          if (0 != (48 & n)) return e(t);
          Pu |= 1;
          try {
            if (e) return Ba(99, e.bind(null, t));
          } finally {
            (Pu = n), Ya();
          }
        }),
        (t.hydrate = function (e, t, n) {
          if (!Zi(t)) throw Error(o(200));
          return es(null, e, t, !0, n);
        }),
        (t.render = function (e, t, n) {
          if (!Zi(t)) throw Error(o(200));
          return es(null, e, t, !1, n);
        }),
        (t.unmountComponentAtNode = function (e) {
          if (!Zi(e)) throw Error(o(40));
          return (
            !!e._reactRootContainer &&
            (hi(function () {
              es(null, null, e, !1, function () {
                (e._reactRootContainer = null), (e[Gr] = null);
              });
            }),
            !0)
          );
        }),
        (t.unstable_batchedUpdates = pi),
        (t.unstable_createPortal = function (e, t) {
          return ts(
            e,
            t,
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null
          );
        }),
        (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
          if (!Zi(n)) throw Error(o(200));
          if (null == e || void 0 === e._reactInternals) throw Error(o(38));
          return es(e, t, n, !1, r);
        }),
        (t.version = "17.0.2");
    },
    935: (e, t, n) => {
      "use strict";
      !(function e() {
        if (
          "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
          "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
        )
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
          } catch (e) {
            console.error(e);
          }
      })(),
        (e.exports = n(448));
    },
    408: (e, t, n) => {
      "use strict";
      var r = n(418),
        a = 60103,
        l = 60106;
      (t.Fragment = 60107), (t.StrictMode = 60108), (t.Profiler = 60114);
      var o = 60109,
        u = 60110,
        i = 60112;
      t.Suspense = 60113;
      var s = 60115,
        c = 60116;
      if ("function" == typeof Symbol && Symbol.for) {
        var d = Symbol.for;
        (a = d("react.element")),
          (l = d("react.portal")),
          (t.Fragment = d("react.fragment")),
          (t.StrictMode = d("react.strict_mode")),
          (t.Profiler = d("react.profiler")),
          (o = d("react.provider")),
          (u = d("react.context")),
          (i = d("react.forward_ref")),
          (t.Suspense = d("react.suspense")),
          (s = d("react.memo")),
          (c = d("react.lazy"));
      }
      var f = "function" == typeof Symbol && Symbol.iterator;
      function m(e) {
        for (
          var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
          n < arguments.length;
          n++
        )
          t += "&args[]=" + encodeURIComponent(arguments[n]);
        return (
          "Minified React error #" +
          e +
          "; visit " +
          t +
          " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
      }
      var p = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        h = {};
      function v(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = h),
          (this.updater = n || p);
      }
      function g() {}
      function b(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = h),
          (this.updater = n || p);
      }
      (v.prototype.isReactComponent = {}),
        (v.prototype.setState = function (e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(m(85));
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (v.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (g.prototype = v.prototype);
      var y = (b.prototype = new g());
      (y.constructor = b), r(y, v.prototype), (y.isPureReactComponent = !0);
      var E = { current: null },
        w = Object.prototype.hasOwnProperty,
        _ = { key: !0, ref: !0, __self: !0, __source: !0 };
      function k(e, t, n) {
        var r,
          l = {},
          o = null,
          u = null;
        if (null != t)
          for (r in (void 0 !== t.ref && (u = t.ref),
          void 0 !== t.key && (o = "" + t.key),
          t))
            w.call(t, r) && !_.hasOwnProperty(r) && (l[r] = t[r]);
        var i = arguments.length - 2;
        if (1 === i) l.children = n;
        else if (1 < i) {
          for (var s = Array(i), c = 0; c < i; c++) s[c] = arguments[c + 2];
          l.children = s;
        }
        if (e && e.defaultProps)
          for (r in (i = e.defaultProps)) void 0 === l[r] && (l[r] = i[r]);
        return {
          $$typeof: a,
          type: e,
          key: o,
          ref: u,
          props: l,
          _owner: E.current,
        };
      }
      function S(e) {
        return "object" == typeof e && null !== e && e.$$typeof === a;
      }
      var N = /\/+/g;
      function P(e, t) {
        return "object" == typeof e && null !== e && null != e.key
          ? (function (e) {
              var t = { "=": "=0", ":": "=2" };
              return (
                "$" +
                e.replace(/[=:]/g, function (e) {
                  return t[e];
                })
              );
            })("" + e.key)
          : t.toString(36);
      }
      function x(e, t, n, r, o) {
        var u = typeof e;
        ("undefined" !== u && "boolean" !== u) || (e = null);
        var i = !1;
        if (null === e) i = !0;
        else
          switch (u) {
            case "string":
            case "number":
              i = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case a:
                case l:
                  i = !0;
              }
          }
        if (i)
          return (
            (o = o((i = e))),
            (e = "" === r ? "." + P(i, 0) : r),
            Array.isArray(o)
              ? ((n = ""),
                null != e && (n = e.replace(N, "$&/") + "/"),
                x(o, t, n, "", function (e) {
                  return e;
                }))
              : null != o &&
                (S(o) &&
                  (o = (function (e, t) {
                    return {
                      $$typeof: a,
                      type: e.type,
                      key: t,
                      ref: e.ref,
                      props: e.props,
                      _owner: e._owner,
                    };
                  })(
                    o,
                    n +
                      (!o.key || (i && i.key === o.key)
                        ? ""
                        : ("" + o.key).replace(N, "$&/") + "/") +
                      e
                  )),
                t.push(o)),
            1
          );
        if (((i = 0), (r = "" === r ? "." : r + ":"), Array.isArray(e)))
          for (var s = 0; s < e.length; s++) {
            var c = r + P((u = e[s]), s);
            i += x(u, t, n, c, o);
          }
        else if (
          "function" ==
          typeof (c = (function (e) {
            return null === e || "object" != typeof e
              ? null
              : "function" == typeof (e = (f && e[f]) || e["@@iterator"])
              ? e
              : null;
          })(e))
        )
          for (e = c.call(e), s = 0; !(u = e.next()).done; )
            i += x((u = u.value), t, n, (c = r + P(u, s++)), o);
        else if ("object" === u)
          throw (
            ((t = "" + e),
            Error(
              m(
                31,
                "[object Object]" === t
                  ? "object with keys {" + Object.keys(e).join(", ") + "}"
                  : t
              )
            ))
          );
        return i;
      }
      function T(e, t, n) {
        if (null == e) return e;
        var r = [],
          a = 0;
        return (
          x(e, r, "", "", function (e) {
            return t.call(n, e, a++);
          }),
          r
        );
      }
      function C(e) {
        if (-1 === e._status) {
          var t = e._result;
          (t = t()),
            (e._status = 0),
            (e._result = t),
            t.then(
              function (t) {
                0 === e._status &&
                  ((t = t.default), (e._status = 1), (e._result = t));
              },
              function (t) {
                0 === e._status && ((e._status = 2), (e._result = t));
              }
            );
        }
        if (1 === e._status) return e._result;
        throw e._result;
      }
      var O = { current: null };
      function M() {
        var e = O.current;
        if (null === e) throw Error(m(321));
        return e;
      }
      var j = {
        ReactCurrentDispatcher: O,
        ReactCurrentBatchConfig: { transition: 0 },
        ReactCurrentOwner: E,
        IsSomeRendererActing: { current: !1 },
        assign: r,
      };
      (t.Children = {
        map: T,
        forEach: function (e, t, n) {
          T(
            e,
            function () {
              t.apply(this, arguments);
            },
            n
          );
        },
        count: function (e) {
          var t = 0;
          return (
            T(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            T(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!S(e)) throw Error(m(143));
          return e;
        },
      }),
        (t.Component = v),
        (t.PureComponent = b),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j),
        (t.cloneElement = function (e, t, n) {
          if (null == e) throw Error(m(267, e));
          var l = r({}, e.props),
            o = e.key,
            u = e.ref,
            i = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((u = t.ref), (i = E.current)),
              void 0 !== t.key && (o = "" + t.key),
              e.type && e.type.defaultProps)
            )
              var s = e.type.defaultProps;
            for (c in t)
              w.call(t, c) &&
                !_.hasOwnProperty(c) &&
                (l[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c]);
          }
          var c = arguments.length - 2;
          if (1 === c) l.children = n;
          else if (1 < c) {
            s = Array(c);
            for (var d = 0; d < c; d++) s[d] = arguments[d + 2];
            l.children = s;
          }
          return {
            $$typeof: a,
            type: e.type,
            key: o,
            ref: u,
            props: l,
            _owner: i,
          };
        }),
        (t.createContext = function (e, t) {
          return (
            void 0 === t && (t = null),
            ((e = {
              $$typeof: u,
              _calculateChangedBits: t,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
            }).Provider = { $$typeof: o, _context: e }),
            (e.Consumer = e)
          );
        }),
        (t.createElement = k),
        (t.createFactory = function (e) {
          var t = k.bind(null, e);
          return (t.type = e), t;
        }),
        (t.createRef = function () {
          return { current: null };
        }),
        (t.forwardRef = function (e) {
          return { $$typeof: i, render: e };
        }),
        (t.isValidElement = S),
        (t.lazy = function (e) {
          return {
            $$typeof: c,
            _payload: { _status: -1, _result: e },
            _init: C,
          };
        }),
        (t.memo = function (e, t) {
          return { $$typeof: s, type: e, compare: void 0 === t ? null : t };
        }),
        (t.useCallback = function (e, t) {
          return M().useCallback(e, t);
        }),
        (t.useContext = function (e, t) {
          return M().useContext(e, t);
        }),
        (t.useDebugValue = function () {}),
        (t.useEffect = function (e, t) {
          return M().useEffect(e, t);
        }),
        (t.useImperativeHandle = function (e, t, n) {
          return M().useImperativeHandle(e, t, n);
        }),
        (t.useLayoutEffect = function (e, t) {
          return M().useLayoutEffect(e, t);
        }),
        (t.useMemo = function (e, t) {
          return M().useMemo(e, t);
        }),
        (t.useReducer = function (e, t, n) {
          return M().useReducer(e, t, n);
        }),
        (t.useRef = function (e) {
          return M().useRef(e);
        }),
        (t.useState = function (e) {
          return M().useState(e);
        }),
        (t.version = "17.0.2");
    },
    294: (e, t, n) => {
      "use strict";
      e.exports = n(408);
    },
    53: (e, t) => {
      "use strict";
      var n, r, a, l;
      if (
        "object" == typeof performance &&
        "function" == typeof performance.now
      ) {
        var o = performance;
        t.unstable_now = function () {
          return o.now();
        };
      } else {
        var u = Date,
          i = u.now();
        t.unstable_now = function () {
          return u.now() - i;
        };
      }
      if ("undefined" == typeof window || "function" != typeof MessageChannel) {
        var s = null,
          c = null,
          d = function () {
            if (null !== s)
              try {
                var e = t.unstable_now();
                s(!0, e), (s = null);
              } catch (e) {
                throw (setTimeout(d, 0), e);
              }
          };
        (n = function (e) {
          null !== s ? setTimeout(n, 0, e) : ((s = e), setTimeout(d, 0));
        }),
          (r = function (e, t) {
            c = setTimeout(e, t);
          }),
          (a = function () {
            clearTimeout(c);
          }),
          (t.unstable_shouldYield = function () {
            return !1;
          }),
          (l = t.unstable_forceFrameRate = function () {});
      } else {
        var f = window.setTimeout,
          m = window.clearTimeout;
        if ("undefined" != typeof console) {
          var p = window.cancelAnimationFrame;
          "function" != typeof window.requestAnimationFrame &&
            console.error(
              "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
            ),
            "function" != typeof p &&
              console.error(
                "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
              );
        }
        var h = !1,
          v = null,
          g = -1,
          b = 5,
          y = 0;
        (t.unstable_shouldYield = function () {
          return t.unstable_now() >= y;
        }),
          (l = function () {}),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (b = 0 < e ? Math.floor(1e3 / e) : 5);
          });
        var E = new MessageChannel(),
          w = E.port2;
        (E.port1.onmessage = function () {
          if (null !== v) {
            var e = t.unstable_now();
            y = e + b;
            try {
              v(!0, e) ? w.postMessage(null) : ((h = !1), (v = null));
            } catch (e) {
              throw (w.postMessage(null), e);
            }
          } else h = !1;
        }),
          (n = function (e) {
            (v = e), h || ((h = !0), w.postMessage(null));
          }),
          (r = function (e, n) {
            g = f(function () {
              e(t.unstable_now());
            }, n);
          }),
          (a = function () {
            m(g), (g = -1);
          });
      }
      function _(e, t) {
        var n = e.length;
        e.push(t);
        e: for (;;) {
          var r = (n - 1) >>> 1,
            a = e[r];
          if (!(void 0 !== a && 0 < N(a, t))) break e;
          (e[r] = t), (e[n] = a), (n = r);
        }
      }
      function k(e) {
        return void 0 === (e = e[0]) ? null : e;
      }
      function S(e) {
        var t = e[0];
        if (void 0 !== t) {
          var n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length; r < a; ) {
              var l = 2 * (r + 1) - 1,
                o = e[l],
                u = l + 1,
                i = e[u];
              if (void 0 !== o && 0 > N(o, n))
                void 0 !== i && 0 > N(i, o)
                  ? ((e[r] = i), (e[u] = n), (r = u))
                  : ((e[r] = o), (e[l] = n), (r = l));
              else {
                if (!(void 0 !== i && 0 > N(i, n))) break e;
                (e[r] = i), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        return null;
      }
      function N(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id;
      }
      var P = [],
        x = [],
        T = 1,
        C = null,
        O = 3,
        M = !1,
        j = !1,
        A = !1;
      function L(e) {
        for (var t = k(x); null !== t; ) {
          if (null === t.callback) S(x);
          else {
            if (!(t.startTime <= e)) break;
            S(x), (t.sortIndex = t.expirationTime), _(P, t);
          }
          t = k(x);
        }
      }
      function D(e) {
        if (((A = !1), L(e), !j))
          if (null !== k(P)) (j = !0), n(z);
          else {
            var t = k(x);
            null !== t && r(D, t.startTime - e);
          }
      }
      function z(e, n) {
        (j = !1), A && ((A = !1), a()), (M = !0);
        var l = O;
        try {
          for (
            L(n), C = k(P);
            null !== C &&
            (!(C.expirationTime > n) || (e && !t.unstable_shouldYield()));

          ) {
            var o = C.callback;
            if ("function" == typeof o) {
              (C.callback = null), (O = C.priorityLevel);
              var u = o(C.expirationTime <= n);
              (n = t.unstable_now()),
                "function" == typeof u ? (C.callback = u) : C === k(P) && S(P),
                L(n);
            } else S(P);
            C = k(P);
          }
          if (null !== C) var i = !0;
          else {
            var s = k(x);
            null !== s && r(D, s.startTime - n), (i = !1);
          }
          return i;
        } finally {
          (C = null), (O = l), (M = !1);
        }
      }
      var R = l;
      (t.unstable_IdlePriority = 5),
        (t.unstable_ImmediatePriority = 1),
        (t.unstable_LowPriority = 4),
        (t.unstable_NormalPriority = 3),
        (t.unstable_Profiling = null),
        (t.unstable_UserBlockingPriority = 2),
        (t.unstable_cancelCallback = function (e) {
          e.callback = null;
        }),
        (t.unstable_continueExecution = function () {
          j || M || ((j = !0), n(z));
        }),
        (t.unstable_getCurrentPriorityLevel = function () {
          return O;
        }),
        (t.unstable_getFirstCallbackNode = function () {
          return k(P);
        }),
        (t.unstable_next = function (e) {
          switch (O) {
            case 1:
            case 2:
            case 3:
              var t = 3;
              break;
            default:
              t = O;
          }
          var n = O;
          O = t;
          try {
            return e();
          } finally {
            O = n;
          }
        }),
        (t.unstable_pauseExecution = function () {}),
        (t.unstable_requestPaint = R),
        (t.unstable_runWithPriority = function (e, t) {
          switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              e = 3;
          }
          var n = O;
          O = e;
          try {
            return t();
          } finally {
            O = n;
          }
        }),
        (t.unstable_scheduleCallback = function (e, l, o) {
          var u = t.unstable_now();
          switch (
            ((o =
              "object" == typeof o &&
              null !== o &&
              "number" == typeof (o = o.delay) &&
              0 < o
                ? u + o
                : u),
            e)
          ) {
            case 1:
              var i = -1;
              break;
            case 2:
              i = 250;
              break;
            case 5:
              i = 1073741823;
              break;
            case 4:
              i = 1e4;
              break;
            default:
              i = 5e3;
          }
          return (
            (e = {
              id: T++,
              callback: l,
              priorityLevel: e,
              startTime: o,
              expirationTime: (i = o + i),
              sortIndex: -1,
            }),
            o > u
              ? ((e.sortIndex = o),
                _(x, e),
                null === k(P) &&
                  e === k(x) &&
                  (A ? a() : (A = !0), r(D, o - u)))
              : ((e.sortIndex = i), _(P, e), j || M || ((j = !0), n(z))),
            e
          );
        }),
        (t.unstable_wrapCallback = function (e) {
          var t = O;
          return function () {
            var n = O;
            O = t;
            try {
              return e.apply(this, arguments);
            } finally {
              O = n;
            }
          };
        });
    },
    840: (e, t, n) => {
      "use strict";
      e.exports = n(53);
    },
    238: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  });
              }
            : function (e, t, n, r) {
                void 0 === r && (r = n), (e[r] = t[n]);
              }),
        a =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        l =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                "default" !== n &&
                  Object.prototype.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return a(t, e), t;
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const o = l(n(294));
      t.default = ({ questionId: e }) => {
        const [t, n] = o.useState(""),
          [r, a] = o.useState();
        return o.default.createElement(
          o.default.Fragment,
          null,
          r &&
            o.default.createElement(
              "div",
              { className: "alert alert-success" },
              t,
              " bonus successfully added"
            ),
          !1 === r &&
            o.default.createElement(
              "div",
              { className: "alert alert-danger" },
              "There was an error adding the bonus points"
            ),
          !r &&
            o.default.createElement(
              "div",
              { className: "form-floating" },
              o.default.createElement("input", {
                type: "number",
                className: "form-control",
                id: "number",
                name: "number",
                placeholder: "Add Bonus Points",
                value: t,
                onChange: (e) => {
                  n(e.target.value);
                },
              }),
              o.default.createElement(
                "label",
                { htmlFor: "number", className: "form-label" },
                "Add bonus points"
              )
            ),
          t &&
            o.default.createElement(
              "div",
              { className: "mt-4" },
              o.default.createElement(
                "button",
                {
                  className: "btn btn-success",
                  type: "button",
                  onClick: async (n) => {
                    const r = window.location.pathname.split("/")[3];
                    return (
                      n.preventDefault(),
                      (
                        await (
                          await fetch(
                            `/admin/questions/add-bonus-points/${e}`,
                            {
                              method: "POST",
                              headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                              },
                              body: JSON.stringify({ points: t, userId: r }),
                            }
                          )
                        ).json()
                      ).success
                        ? a(!0)
                        : a(!1),
                      !0
                    );
                  },
                },
                "Add Bonus Points"
              )
            )
        );
      };
    },
    473: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  });
              }
            : function (e, t, n, r) {
                void 0 === r && (r = n), (e[r] = t[n]);
              }),
        a =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        l =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                "default" !== n &&
                  Object.prototype.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return a(t, e), t;
          },
        o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const u = l(n(294)),
        i = o(n(797));
      t.default = () => {
        const [e, t] = u.useState(""),
          [n, r] = u.useState(!0),
          [a, l] = u.useState(),
          [o, s] = u.useState(null),
          [c, d] = u.useState({
            question: "",
            answerType: "",
            deadlineDay: void 0,
            deadlineMonth: void 0,
            deadlineYear: void 0,
            deadlineHour: void 0,
            deadlineMinute: void 0,
            points: void 0,
            answerAmount: 1,
          });
        u.useEffect(() => {
          const e = window.location.pathname.split("/")[4];
          fetch(`/questions/get/${e}`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
            .then((e) => e.json())
            .then((e) => {
              if (e.success) {
                r(!1), l(e.question);
                const t = new Date(e.question.deadline);
                d({
                  ...c,
                  question: e.question.question,
                  deadlineDay: t.getDate(),
                  deadlineMonth: t.getMonth() + 1,
                  deadlineYear: t.getFullYear(),
                  deadlineHour: t.getHours(),
                  deadlineMinute: t.getMinutes(),
                  points: e.question.points,
                });
              } else t("There was an error, please refresh and try again.");
            })
            .catch(() => {
              t("There was an error, please refresh and try again");
            });
        }, []);
        const f = (e) => {
          d({ ...c, [e.target.name]: e.target.value });
        };
        return n
          ? u.default.createElement(i.default, null)
          : u.default.createElement(
              "form",
              {
                onSubmit: async (e) => {
                  e.preventDefault();
                  const {
                    question: t,
                    deadlineDay: n,
                    deadlineMonth: r,
                    deadlineYear: l,
                    deadlineHour: o,
                    deadlineMinute: u,
                    points: i,
                  } = c;
                  (
                    await (
                      await fetch(`/admin/questions/edit/${a.id}`, {
                        method: "POST",
                        headers: {
                          Accept: "application/json",
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                          question: t,
                          deadline: `${l}-${r}-${n} ${o}:${u}:00`,
                          points: i,
                        }),
                      })
                    ).json()
                  ).success
                    ? s(!0)
                    : s(!1);
                },
              },
              !0 === o &&
                u.default.createElement(
                  "div",
                  { className: "alert alert-success" },
                  "Question updated successfully"
                ),
              !1 === o &&
                u.default.createElement(
                  "div",
                  { className: "alert alert-danger" },
                  "Error updating question. Please try again."
                ),
              e &&
                u.default.createElement(
                  "div",
                  { className: "alert alert-danger" },
                  e
                ),
              u.default.createElement(
                "div",
                { className: "mb-3" },
                u.default.createElement(
                  "label",
                  { htmlFor: "question", className: "form-label" },
                  "Question"
                ),
                u.default.createElement("input", {
                  type: "text",
                  className: "form-control",
                  id: "question",
                  name: "question",
                  onChange: f,
                  value: c.question,
                })
              ),
              u.default.createElement(
                "div",
                { className: "mb-3" },
                u.default.createElement(
                  "label",
                  { className: "form-label" },
                  "Deadline"
                ),
                u.default.createElement(
                  "div",
                  { className: "row" },
                  u.default.createElement(
                    "div",
                    { className: "col" },
                    u.default.createElement("input", {
                      type: "number",
                      name: "deadlineDay",
                      className: "form-control",
                      placeholder: "DD",
                      onChange: f,
                      value: c.deadlineDay,
                    })
                  ),
                  u.default.createElement(
                    "div",
                    { className: "col" },
                    u.default.createElement("input", {
                      type: "number",
                      name: "deadlineMonth",
                      className: "form-control",
                      placeholder: "MM",
                      onChange: f,
                      value: c.deadlineMonth,
                    })
                  ),
                  u.default.createElement(
                    "div",
                    { className: "col" },
                    u.default.createElement("input", {
                      type: "number",
                      name: "deadlineYear",
                      className: "form-control",
                      placeholder: "YYYY",
                      onChange: f,
                      value: c.deadlineYear,
                    })
                  ),
                  u.default.createElement(
                    "div",
                    { className: "col" },
                    u.default.createElement("input", {
                      type: "number",
                      name: "deadlineHour",
                      className: "form-control",
                      placeholder: "HH (24 hour)",
                      onChange: f,
                      value: c.deadlineHour,
                    })
                  ),
                  u.default.createElement(
                    "div",
                    { className: "col" },
                    u.default.createElement("input", {
                      type: "number",
                      name: "deadlineMinute",
                      className: "form-control",
                      placeholder: "MM",
                      onChange: f,
                      value: c.deadlineMinute,
                    })
                  )
                )
              ),
              u.default.createElement(
                "div",
                { className: "mb-3" },
                u.default.createElement(
                  "div",
                  { className: "row" },
                  u.default.createElement(
                    "label",
                    { htmlFor: "points", className: "col-sm-2 col-form-label" },
                    "Points"
                  ),
                  u.default.createElement(
                    "div",
                    { className: "col-sm-10" },
                    u.default.createElement("input", {
                      type: "number",
                      className: "form-control",
                      id: "points",
                      name: "points",
                      onChange: f,
                      value: c.points,
                    })
                  )
                )
              ),
              u.default.createElement(
                "div",
                { className: "mb-3" },
                u.default.createElement(
                  "button",
                  { type: "submit", className: "btn btn-primary" },
                  "Update Question"
                )
              )
            );
      };
    },
    603: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  });
              }
            : function (e, t, n, r) {
                void 0 === r && (r = n), (e[r] = t[n]);
              }),
        a =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        l =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                "default" !== n &&
                  Object.prototype.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return a(t, e), t;
          },
        o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const u = l(n(294)),
        i = o(n(797)),
        s = n(212);
      t.default = () => {
        const [e, t] = u.useState(""),
          [n, r] = u.useState(!0),
          [a, l] = u.useState(!1),
          [o, c] = u.useState([]);
        return (
          u.useEffect(() => {
            fetch("/admin/power-tokens/get-all", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            })
              .then((e) => e.json())
              .then((e) => {
                e.success ? c(e.tokens) : t(e.message);
              })
              .catch(() => {
                t("There was an error, please refresh and try again");
              })
              .finally(() => {
                r(!1);
              });
          }, []),
          n && !e
            ? u.default.createElement(i.default, null)
            : u.default.createElement(
                "div",
                null,
                e &&
                  u.default.createElement(
                    "div",
                    {
                      className: "alert alert-danger text-center mt-4",
                      role: "alert",
                    },
                    e
                  ),
                a &&
                  u.default.createElement(
                    "div",
                    {
                      className: "alert alert-success text-center mt-4",
                      role: "alert",
                    },
                    "Power Tokens Generated and gifted to all users"
                  ),
                !o.length &&
                  u.default.createElement(
                    "div",
                    { className: "alert alert-warning text-center mt-4" },
                    "No Power Tokens Found"
                  ),
                !!o.length &&
                  u.default.createElement(
                    "div",
                    { className: "row bg-secondary fw-bold p-1 text-white" },
                    u.default.createElement(
                      "div",
                      { className: "col-4" },
                      "Display Name (Username)"
                    ),
                    u.default.createElement(
                      "div",
                      { className: "col text-center" },
                      "Token Type"
                    ),
                    u.default.createElement(
                      "div",
                      { className: "col text-center" },
                      "Question ID"
                    ),
                    u.default.createElement(
                      "div",
                      { className: "col text-center" },
                      "Date Applied"
                    ),
                    u.default.createElement(
                      "div",
                      { className: "col text-center" },
                      "Points"
                    )
                  ),
                o.map((e) =>
                  u.default.createElement(
                    "div",
                    {
                      className:
                        "row p-1 border-start border-end border-dark border-bottom",
                    },
                    u.default.createElement(
                      "div",
                      { className: "col-4" },
                      u.default.createElement(
                        "a",
                        { href: `/admin/users/${e.user_id}` },
                        e.display_name,
                        " (",
                        e.username,
                        ")"
                      )
                    ),
                    u.default.createElement(
                      "div",
                      { className: "col text-center" },
                      e.type
                    ),
                    u.default.createElement(
                      "div",
                      { className: "col text-center" },
                      e.question_id
                        ? u.default.createElement("a", {
                            href: `/admin/questions/${e.question_id}`,
                          })
                        : null
                    ),
                    u.default.createElement(
                      "div",
                      { className: "col text-center" },
                      e.date_applied
                        ? s.formatDateToEnglish(e.date_applied)
                        : null
                    ),
                    u.default.createElement(
                      "div",
                      { className: "col text-center" },
                      e.points
                    )
                  )
                ),
                !e &&
                  u.default.createElement(
                    "div",
                    { className: "text-center" },
                    !!o.length &&
                      u.default.createElement(
                        "div",
                        { className: "alert alert-warning text-center mt-5" },
                        "Tokens have been previously generated. If for some reason some users are missing tokens you can try and regenerate the tokens:"
                      ),
                    u.default.createElement(
                      "button",
                      {
                        className: "btn btn-primary mt-5",
                        onClick: (e) => {
                          r(!0),
                            e.preventDefault(),
                            fetch("/admin/power-tokens/generate", {
                              method: "POST",
                              headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                              },
                            })
                              .then((e) => e.json())
                              .then((e) => {
                                e.success ? (l(!0), c(e.tokens)) : t(e.message);
                              })
                              .catch(() => {
                                t(
                                  "There was an error, please refresh and try again"
                                );
                              })
                              .finally(() => {
                                r(!1);
                              });
                        },
                      },
                      "Generate Tokens For All Players"
                    )
                  )
              )
        );
      };
    },
    735: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  });
              }
            : function (e, t, n, r) {
                void 0 === r && (r = n), (e[r] = t[n]);
              }),
        a =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        l =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                "default" !== n &&
                  Object.prototype.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return a(t, e), t;
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const o = l(n(294)),
        u = n(212),
        i = l(n(635)),
        s = ({ answerSets: e }) => {
          const [t, n] = o.useState({
              question: "",
              answerType: "",
              deadlineDay: void 0,
              deadlineMonth: void 0,
              deadlineYear: void 0,
              deadlineHour: void 0,
              deadlineMinute: void 0,
              points: void 0,
              answerAmount: 1,
            }),
            [r, a] = o.useState(null),
            l = (e) => {
              n({ ...t, [e.target.name]: e.target.value });
            },
            u = new Date();
          return o.default.createElement(
            "form",
            {
              onSubmit: async (e) => {
                e.preventDefault();
                const {
                  question: n,
                  answerType: r,
                  deadlineDay: l,
                  deadlineMonth: o,
                  deadlineYear: u,
                  deadlineHour: i,
                  deadlineMinute: s,
                  points: c,
                  answerAmount: d,
                } = t;
                (
                  await (
                    await fetch("/admin/questions/add-question", {
                      method: "POST",
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        question: n,
                        answerType: isNaN(r) ? r : null,
                        answerSetId: isNaN(r) ? null : +r,
                        deadline: `${u}-${o}-${l} ${i}:${s}:00`,
                        points: c,
                        answerAmount: d,
                      }),
                    })
                  ).json()
                ).success
                  ? a(!0)
                  : a(!1);
              },
            },
            !0 === r &&
              o.default.createElement(
                "div",
                { className: "alert alert-success" },
                "Question added successfully"
              ),
            !1 === r &&
              o.default.createElement(
                "div",
                { className: "alert alert-danger" },
                "Error adding question. Please try again."
              ),
            o.default.createElement(
              "div",
              { className: "mb-3" },
              o.default.createElement(
                "label",
                { htmlFor: "question", className: "form-label" },
                "Question"
              ),
              o.default.createElement("input", {
                type: "text",
                className: "form-control",
                id: "question",
                name: "question",
                onChange: l,
                value: t.question,
              })
            ),
            o.default.createElement(
              "div",
              { className: "mb-3" },
              o.default.createElement(
                "label",
                { htmlFor: "answer-type", className: "form-label" },
                "Answer Type"
              ),
              o.default.createElement(
                "select",
                {
                  className: "form-select",
                  id: "answer-type",
                  "aria-label": "Select an answer type",
                  name: "answerType",
                  onChange: l,
                  value: t.answerType,
                },
                o.default.createElement(
                  "option",
                  null,
                  "Select an answer type"
                ),
                o.default.createElement(
                  "optgroup",
                  { label: "From an answer set" },
                  e.map((e) =>
                    o.default.createElement(
                      "option",
                      { value: `${e.id}` },
                      e.name
                    )
                  )
                ),
                o.default.createElement(
                  "optgroup",
                  { label: "Single Type" },
                  o.default.createElement(
                    "option",
                    { value: i.YESNO_TYPE },
                    "Yes/No"
                  ),
                  o.default.createElement(
                    "option",
                    { value: i.NUMBER_TYPE },
                    "Number"
                  ),
                  o.default.createElement(
                    "option",
                    { value: i.CORRECT_SCORE_TYPE },
                    "Score"
                  )
                )
              )
            ),
            o.default.createElement(
              "div",
              { className: "mb-3" },
              o.default.createElement(
                "div",
                { className: "alert alert-info" },
                "The Current Time Is: ",
                u.getUTCHours() < 9 && "0",
                u.getUTCHours(),
                ":",
                u.getUTCMinutes() < 9 && "0",
                u.getUTCMinutes()
              )
            ),
            o.default.createElement(
              "div",
              { className: "mb-3" },
              o.default.createElement(
                "label",
                { className: "form-label" },
                "Deadline"
              ),
              o.default.createElement(
                "div",
                { className: "row" },
                o.default.createElement(
                  "div",
                  { className: "col" },
                  o.default.createElement("input", {
                    type: "number",
                    name: "deadlineDay",
                    className: "form-control",
                    placeholder: "DD",
                    onChange: l,
                    value: t.deadlineDay,
                  })
                ),
                o.default.createElement(
                  "div",
                  { className: "col" },
                  o.default.createElement("input", {
                    type: "number",
                    name: "deadlineMonth",
                    className: "form-control",
                    placeholder: "MM",
                    onChange: l,
                    value: t.deadlineMonth,
                  })
                ),
                o.default.createElement(
                  "div",
                  { className: "col" },
                  o.default.createElement("input", {
                    type: "number",
                    name: "deadlineYear",
                    className: "form-control",
                    placeholder: "YYYY",
                    onChange: l,
                    value: t.deadlineYear,
                  })
                ),
                o.default.createElement(
                  "div",
                  { className: "col" },
                  o.default.createElement("input", {
                    type: "number",
                    name: "deadlineHour",
                    className: "form-control",
                    placeholder: "HH (24 hour)",
                    onChange: l,
                    value: t.deadlineHour,
                  })
                ),
                o.default.createElement(
                  "div",
                  { className: "col" },
                  o.default.createElement("input", {
                    type: "number",
                    name: "deadlineMinute",
                    className: "form-control",
                    placeholder: "MM",
                    onChange: l,
                    value: t.deadlineMinute,
                  })
                )
              )
            ),
            o.default.createElement(
              "div",
              { className: "mb-3" },
              o.default.createElement(
                "div",
                { className: "row" },
                o.default.createElement(
                  "label",
                  {
                    htmlFor: "answerAmount",
                    className: "col-sm-2 col-form-label",
                  },
                  "How many answers for this question?"
                ),
                o.default.createElement(
                  "div",
                  { className: "col-sm-10" },
                  o.default.createElement("input", {
                    type: "number",
                    className: "form-control",
                    id: "answerAmount",
                    name: "answerAmount",
                    onChange: l,
                    value: t.answerAmount,
                  })
                )
              )
            ),
            o.default.createElement(
              "div",
              { className: "mb-3" },
              o.default.createElement(
                "div",
                { className: "row" },
                o.default.createElement(
                  "label",
                  { htmlFor: "points", className: "col-sm-2 col-form-label" },
                  "Points"
                ),
                o.default.createElement(
                  "div",
                  { className: "col-sm-10" },
                  o.default.createElement("input", {
                    type: "number",
                    className: "form-control",
                    id: "points",
                    name: "points",
                    onChange: l,
                    value: t.points,
                  })
                )
              )
            ),
            o.default.createElement(
              "div",
              { className: "mb-3" },
              o.default.createElement(
                "button",
                { type: "submit", className: "btn btn-primary" },
                "Save Question"
              )
            )
          );
        };
      t.default = ({ answerSets: e, questions: t }) => {
        const [n, r] = o.useState(!1);
        return o.default.createElement(
          "div",
          null,
          n && o.default.createElement(s, { answerSets: e }),
          !n &&
            o.default.createElement(
              "button",
              {
                type: "button",
                className: "btn btn-primary",
                onClick: () => {
                  r(!n);
                },
              },
              "New Question"
            ),
          o.default.createElement(
            "h2",
            { className: "mb-3 mt-5" },
            "Active Questions"
          ),
          o.default.createElement(
            "div",
            null,
            o.default.createElement(
              "div",
              {
                className:
                  "row border-bottom border-dark p-2 bg-secondary fw-bold text-light",
              },
              o.default.createElement("div", { className: "col" }, "Question"),
              o.default.createElement("div", { className: "col" }, "Deadline"),
              o.default.createElement("div", { className: "col" }, "Type"),
              o.default.createElement("div", { className: "col" }, "Points"),
              o.default.createElement("div", { className: "col" }, "Action")
            ),
            t.activeQuestions.map((t) => {
              const n = u.formatDateToEnglish(t.deadline),
                r =
                  t.answer_type ??
                  e.find((e) => e && e.id === t.answer_set_id)?.name;
              return o.default.createElement(
                "div",
                { className: "row border border-dark border-top-0 p-2" },
                o.default.createElement(
                  "div",
                  { className: "col" },
                  t.question
                ),
                o.default.createElement("div", { className: "col" }, n),
                o.default.createElement("div", { className: "col" }, r),
                o.default.createElement("div", { className: "col" }, t.points),
                o.default.createElement(
                  "div",
                  { className: "col" },
                  o.default.createElement(
                    "a",
                    {
                      className: "btn btn-sm btn-primary",
                      href: `/admin/questions/edit/${t.id}`,
                    },
                    "Edit"
                  ),
                  o.default.createElement(
                    "a",
                    {
                      className: "btn btn-sm btn-success ms-1",
                      href: `/admin/questions/set-correct-answer/${t.id}`,
                    },
                    "Set Answer"
                  )
                )
              );
            })
          ),
          o.default.createElement(
            "h2",
            { className: "mb-3 mt-5" },
            "Previous Questions"
          ),
          o.default.createElement(
            "div",
            null,
            o.default.createElement(
              "div",
              {
                className:
                  "row border-bottom border-dark p-2 bg-secondary fw-bold text-light",
              },
              o.default.createElement("div", { className: "col" }, "Question"),
              o.default.createElement("div", { className: "col" }, "Answer"),
              o.default.createElement("div", { className: "col" }, "Deadline"),
              o.default.createElement("div", { className: "col" }, "Type"),
              o.default.createElement("div", { className: "col" }, "Points"),
              o.default.createElement("div", { className: "col" }, "Action")
            ),
            t.pastQuestions.map((t) => {
              const n = u.formatDateToEnglish(t.deadline),
                r =
                  t.answer_type ??
                  e.find((e) => e && e.id === t.answer_set_id)?.name;
              return o.default.createElement(
                "div",
                { className: "row border border-dark border-top-0 p-2" },
                o.default.createElement(
                  "div",
                  { className: "col" },
                  t.question
                ),
                o.default.createElement(
                  "div",
                  { className: "col" },
                  t.correct_answer
                ),
                o.default.createElement("div", { className: "col" }, n),
                o.default.createElement("div", { className: "col" }, r),
                o.default.createElement("div", { className: "col" }, t.points),
                o.default.createElement(
                  "div",
                  { className: "col" },
                  o.default.createElement(
                    "a",
                    {
                      className: "btn btn-sm btn-primary",
                      href: `/admin/questions/edit/${t.id}`,
                    },
                    "Edit"
                  ),
                  o.default.createElement(
                    "a",
                    {
                      className: "btn btn-sm btn-success ms-1",
                      href: `/admin/questions/set-correct-answer/${t.id}`,
                    },
                    "Set Answer"
                  )
                )
              );
            })
          )
        );
      };
    },
    38: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  });
              }
            : function (e, t, n, r) {
                void 0 === r && (r = n), (e[r] = t[n]);
              }),
        a =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        l =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                "default" !== n &&
                  Object.prototype.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return a(t, e), t;
          },
        o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const u = l(n(294)),
        i = o(n(321)),
        s = n(635),
        c = o(n(35)),
        d = o(n(69)),
        f = o(n(403)),
        m = o(n(421)),
        p = o(n(892)),
        h = o(n(797)),
        v = +window.location.pathname.split("/")[4];
      t.default = () => {
        const [e, t] = u.useState(""),
          [n, r] = u.useState(!0),
          [a, l] = u.useState(),
          [o, g] = u.useState();
        return (
          u.useEffect(() => {
            fetch(`/questions/get-correct-answers/${v}`, {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            })
              .then((e) => e.json())
              .then((e) => {
                e.success
                  ? (l(e.question), g(e.setAnswers))
                  : t("There was an error, please refresh and try again.");
              })
              .catch(() => {
                t("There was an error, please refresh and try again");
              })
              .finally(() => {
                r(!1);
              });
          }, []),
          n || !a
            ? u.default.createElement(h.default, null)
            : a[0].correct_answer
            ? u.default.createElement(
                "div",
                {
                  className: "alert alert-warning text-center mt-5",
                  role: "alert",
                },
                "This question has already had it's answer set."
              )
            : u.default.createElement(
                u.default.Fragment,
                null,
                u.default.createElement(
                  "h2",
                  { className: "mb-4" },
                  "Q: ",
                  a[0].question
                ),
                e &&
                  u.default.createElement(
                    "div",
                    {
                      className: "alert alert-danger text-center",
                      role: "alert",
                    },
                    e
                  ),
                a[0].answer_type === s.CORRECT_SCORE_TYPE &&
                  u.default.createElement(c.default, {
                    submitUrl: `/admin/questions/set-correct-text-answer/${v}`,
                    setErrorMessage: t,
                    questionId: v,
                  }),
                a[0].answer_type === s.NUMBER_TYPE &&
                  u.default.createElement(i.default, {
                    setErrorMessage: t,
                    submitUrl: `/admin/questions/set-correct-text-answer/${v}`,
                    questionId: v,
                  }),
                a[0].answer_type === s.YESNO_TYPE &&
                  u.default.createElement(m.default, {
                    setErrorMessage: t,
                    submitUrl: `/admin/questions/set-correct-text-answer/${v}`,
                    questionId: v,
                  }),
                a[0].answer_set_id === s.ALL_PLAYERS_TYPE &&
                  u.default.createElement(d.default, {
                    answerAmount: a[0].answer_amount,
                    setErrorMessage: t,
                    submitUrl: `/admin/questions/set-correct-players-answer/${v}`,
                    questionId: v,
                  }),
                a[0].answer_set_id === s.ALL_TEAMS_TYPE &&
                  u.default.createElement(f.default, {
                    answerAmount: a[0].answer_amount,
                    setErrorMessage: t,
                    submitUrl: `/admin/questions/set-correct-teams-answer/${v}`,
                    setAnswers: o,
                    questionId: v,
                  }),
                a[0].answer_set_id === s.ALL_MANAGERS_TYPE &&
                  u.default.createElement(p.default, {
                    answerAmount: a[0].answer_amount,
                    setErrorMessage: t,
                    setAnswers: o,
                    submitUrl: `/admin/questions/set-correct-managers-answer/${v}`,
                    questionId: v,
                  })
              )
        );
      };
    },
    552: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  });
              }
            : function (e, t, n, r) {
                void 0 === r && (r = n), (e[r] = t[n]);
              }),
        a =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        l =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                "default" !== n &&
                  Object.prototype.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return a(t, e), t;
          },
        o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const u = l(n(294)),
        i = o(n(797));
      t.default = () => {
        const [e, t] = u.useState(""),
          [n, r] = u.useState(!0),
          [a, l] = u.useState(),
          [o, s] = u.useState(""),
          [c, d] = u.useState(!1);
        return (
          u.useEffect(() => {
            fetch("/admin/standings/get-league-table", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            })
              .then((e) => e.json())
              .then((e) => {
                e.success ? (l(e.standings), s(e.dateAdded)) : t(e.message);
              })
              .catch(() => {
                t("There was an error, please refresh and try again");
              })
              .finally(() => {
                r(!1);
              });
          }, []),
          (!n && a) || e
            ? a
              ? u.default.createElement(
                  "div",
                  null,
                  e &&
                    u.default.createElement(
                      "div",
                      {
                        className: "alert alert-danger text-center",
                        role: "alert",
                      },
                      e
                    ),
                  c &&
                    u.default.createElement(
                      "div",
                      {
                        className: "alert alert-success text-center mt-4",
                        role: "alert",
                      },
                      "League Table Generated."
                    ),
                  0 === a.length &&
                    u.default.createElement(
                      "div",
                      {
                        className: "alert alert-warning text-center mt-5",
                        role: "alert",
                      },
                      "No league tables found"
                    ),
                  !c &&
                    u.default.createElement(
                      "button",
                      {
                        className: "btn btn-primary mt-5",
                        onClick: (e) => {
                          r(!0),
                            e.preventDefault(),
                            fetch("/admin/standings/generate-league-table", {
                              method: "POST",
                              headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                              },
                            })
                              .then((e) => e.json())
                              .then((e) => {
                                e.success
                                  ? (l(e.standings), d(!0))
                                  : t(e.message);
                              })
                              .catch(() => {
                                t(
                                  "There was an error, please refresh and try again"
                                );
                              })
                              .finally(() => {
                                r(!1);
                              });
                        },
                      },
                      "Generate League Table"
                    ),
                  o &&
                    u.default.createElement(
                      "div",
                      { className: "col-12 p-2" },
                      "Last Updated: ",
                      o
                    ),
                  0 !== Object.keys(a).length &&
                    u.default.createElement(
                      u.default.Fragment,
                      null,
                      u.default.createElement(
                        "div",
                        { className: "row border border-dark p-2 mt-4" },
                        u.default.createElement(
                          "div",
                          { className: "col-1" },
                          "Pos."
                        ),
                        u.default.createElement(
                          "div",
                          { className: "col-9" },
                          "Name"
                        ),
                        u.default.createElement(
                          "div",
                          { className: "col-2" },
                          "Points"
                        )
                      ),
                      a.map((e, t) =>
                        u.default.createElement(
                          "div",
                          {
                            className:
                              "row border border-dark border-top-0 p-2",
                          },
                          u.default.createElement(
                            "div",
                            { className: "col-1" },
                            t + 1
                          ),
                          u.default.createElement(
                            "div",
                            { className: "col-9" },
                            e.userDisplayName
                          ),
                          u.default.createElement(
                            "div",
                            { className: "col-2" },
                            e.points
                          )
                        )
                      )
                    )
                )
              : u.default.createElement(u.default.Fragment, null)
            : u.default.createElement(i.default, null)
        );
      };
    },
    436: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  });
              }
            : function (e, t, n, r) {
                void 0 === r && (r = n), (e[r] = t[n]);
              }),
        a =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        l =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                "default" !== n &&
                  Object.prototype.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return a(t, e), t;
          },
        o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const u = l(n(294)),
        i = o(n(238)),
        s = o(n(797)),
        c = o(n(332));
      t.default = () => {
        const [e, t] = u.useState(),
          [n, r] = u.useState(""),
          [a, l] = u.useState(!0),
          [o, d] = u.useState({}),
          [f, m] = u.useState({});
        return (
          u.useEffect(() => {
            const e = window.location.pathname.split("/")[3];
            fetch(`/admin/users/get/${e}`, {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            })
              .then((e) => e.json())
              .then((e) => {
                e.success
                  ? (t(e.user[0]), d(e.questions), m(e.answers))
                  : r("There was an error, please refresh and try again.");
              })
              .catch(() => {
                r("There was an error, please refresh and try again");
              })
              .finally(() => {
                l(!1);
              });
          }, []),
          (!a && e) || n
            ? e
              ? u.default.createElement(
                  "div",
                  null,
                  n &&
                    u.default.createElement(
                      "div",
                      {
                        className: "alert alert-danger text-center",
                        role: "alert",
                      },
                      n
                    ),
                  u.default.createElement(
                    "h2",
                    null,
                    e.display_name,
                    " (",
                    e.username,
                    ")"
                  ),
                  u.default.createElement(
                    "div",
                    null,
                    Object.keys(o).map((e) => {
                      const t = o[e],
                        n = f && f[e];
                      return u.default.createElement(
                        "div",
                        { className: "m-3 p-3 border border-dark" },
                        u.default.createElement(
                          "div",
                          { className: "fw-bold" },
                          t.question
                        ),
                        u.default.createElement(
                          "div",
                          null,
                          n &&
                            u.default.createElement(
                              "ul",
                              null,
                              n.map((e) =>
                                u.default.createElement(
                                  "li",
                                  null,
                                  e.name || e.answer,
                                  !!e.correct &&
                                    u.default.createElement(
                                      u.default.Fragment,
                                      null,
                                      " ",
                                      u.default.createElement(c.default, null)
                                    )
                                )
                              )
                            )
                        ),
                        null === t.added_points &&
                          u.default.createElement(i.default, {
                            questionId: +e,
                          }),
                        t.added_points &&
                          u.default.createElement(
                            "div",
                            { className: "alert alert-warning" },
                            t.added_points,
                            " bonus points have been added for this question"
                          )
                      );
                    })
                  )
                )
              : u.default.createElement(u.default.Fragment, null)
            : u.default.createElement(s.default, null)
        );
      };
    },
    895: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  });
              }
            : function (e, t, n, r) {
                void 0 === r && (r = n), (e[r] = t[n]);
              }),
        a =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        l =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                "default" !== n &&
                  Object.prototype.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return a(t, e), t;
          },
        o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const u = l(n(294)),
        i = o(n(797));
      t.default = () => {
        const [e, t] = u.useState([]),
          [n, r] = u.useState(""),
          [a, l] = u.useState(!0);
        u.useEffect(() => {
          fetch("/admin/users/get-all", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
            .then((e) => e.json())
            .then((e) => {
              e.success
                ? t(e.users)
                : r("There was an error, please refresh and try again.");
            })
            .catch(() => {
              r("There was an error, please refresh and try again");
            })
            .finally(() => {
              l(!1);
            });
        }, []);
        const o = (e, n) => {
            n.preventDefault(),
              fetch(`/admin/users/set-paid/${e}`, {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
              })
                .then((e) => e.json())
                .then((e) => {
                  e.success
                    ? t(e.users)
                    : r("There was an error, please refresh and try again.");
                })
                .catch(() => {
                  r("There was an error, please refresh and try again");
                });
          },
          s = (e, n) => {
            n.preventDefault(),
              fetch(`/admin/users/set-confirmed/${e}`, {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
              })
                .then((e) => e.json())
                .then((e) => {
                  e.success
                    ? t(e.users)
                    : r("There was an error, please refresh and try again.");
                })
                .catch(() => {
                  r("There was an error, please refresh and try again");
                });
          };
        return a
          ? u.default.createElement(i.default, null)
          : u.default.createElement(
              "div",
              null,
              n &&
                u.default.createElement(
                  "div",
                  { className: "alert alert-danger" },
                  n
                ),
              u.default.createElement(
                "div",
                { className: "row bg-secondary fw-bold p-1 text-white" },
                u.default.createElement(
                  "div",
                  { className: "col-3" },
                  "Display Name (Username)"
                ),
                u.default.createElement("div", { className: "col-3" }, "Email"),
                u.default.createElement(
                  "div",
                  { className: "col text-center" },
                  "Confirmed"
                ),
                u.default.createElement(
                  "div",
                  { className: "col text-center" },
                  "Paid"
                ),
                u.default.createElement(
                  "div",
                  { className: "col text-center" },
                  "Is Admin"
                ),
                u.default.createElement(
                  "div",
                  { className: "col text-center" },
                  "Action"
                )
              ),
              e.map((e) =>
                u.default.createElement(
                  "div",
                  {
                    className:
                      "row p-1 border-start border-end border-dark border-bottom",
                  },
                  u.default.createElement(
                    "div",
                    { className: "col-3" },
                    u.default.createElement(
                      "a",
                      { href: `/admin/users/${e.id}` },
                      e.display_name,
                      " (",
                      e.username,
                      ")"
                    )
                  ),
                  u.default.createElement(
                    "div",
                    { className: "col-3" },
                    e.email
                  ),
                  u.default.createElement(
                    "div",
                    { className: "col text-center" },
                    e.confirmed ? "Yes" : "No"
                  ),
                  u.default.createElement(
                    "div",
                    { className: "col text-center" },
                    e.paid ? "Yes" : "No"
                  ),
                  u.default.createElement(
                    "div",
                    { className: "col text-center" },
                    e.is_admin ? "Yes" : "No"
                  ),
                  u.default.createElement(
                    "div",
                    { className: "col text-center" },
                    !e.paid &&
                      u.default.createElement(
                        "button",
                        {
                          className: "btn btn-sm btn-primary mb-1",
                          onClick: o.bind(this, e.id),
                        },
                        "Set Paid"
                      ),
                    !e.confirmed &&
                      u.default.createElement(
                        "button",
                        {
                          className: "btn btn-sm btn-secondary",
                          onClick: s.bind(this, e.id),
                        },
                        "Set Confirmed"
                      )
                  )
                )
              )
            );
      };
    },
    626: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  });
              }
            : function (e, t, n, r) {
                void 0 === r && (r = n), (e[r] = t[n]);
              }),
        a =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        l =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                "default" !== n &&
                  Object.prototype.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return a(t, e), t;
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.PreviousNav = t.ActiveQuestionBox = t.QuestionsNav = void 0);
      const o = l(n(294)),
        u = n(212);
      var i;
      !(function (e) {
        (e[(e.UNANSWERED = 0)] = "UNANSWERED"),
          (e[(e.ACTIVE = 1)] = "ACTIVE"),
          (e[(e.PREVIOUS = 2)] = "PREVIOUS"),
          (e[(e.UNSETTLED = 3)] = "UNSETTLED"),
          (e[(e.SETTLED = 4)] = "SETTLED");
      })(i || (i = {})),
        (t.QuestionsNav = ({
          onPreviousQuestionsClick: e,
          onActiveQuestionsClick: t,
          onUnansweredQuestionsClick: n,
          activeTab: r,
          unansweredCount: a,
        }) =>
          o.default.createElement(
            "div",
            { className: "row mt-4" },
            o.default.createElement(
              "ul",
              { className: "nav nav-tabs mb-3" },
              o.default.createElement(
                "li",
                { className: "nav-item" },
                o.default.createElement(
                  "a",
                  {
                    className:
                      r === i.UNANSWERED ? "nav-link active" : "nav-link",
                    href: "/",
                    onClick: n,
                  },
                  "Unanswered",
                  a > 0 &&
                    o.default.createElement(
                      "span",
                      { className: "badge bg-danger ms-1 rounded-pill" },
                      a
                    )
                )
              ),
              o.default.createElement(
                "li",
                { className: "nav-item" },
                o.default.createElement(
                  "a",
                  {
                    className: r === i.ACTIVE ? "nav-link active" : "nav-link",
                    href: "/",
                    onClick: t,
                  },
                  "Active"
                )
              ),
              o.default.createElement(
                "li",
                { className: "nav-item" },
                o.default.createElement(
                  "a",
                  {
                    className:
                      r === i.PREVIOUS ? "nav-link active" : "nav-link",
                    href: "#",
                    onClick: e,
                  },
                  "Previous"
                )
              )
            )
          )),
        (t.ActiveQuestionBox = ({
          hasAnswered: e,
          question: t,
          activeAnswer: n,
        }) =>
          o.default.createElement(
            "div",
            { className: "mb-3" },
            o.default.createElement(
              "div",
              {
                className:
                  "row p-2 border bg-primary fw-bold text-light border-dark",
              },
              o.default.createElement(
                "div",
                { className: "col-10" },
                "Max Points"
              ),
              o.default.createElement(
                "div",
                { className: "col-2 text-end" },
                t.points * t.answer_amount
              )
            ),
            o.default.createElement(
              "div",
              {
                className:
                  "row p-2 border border-top-0 border-bottom-0 border-dark",
              },
              o.default.createElement(
                "div",
                { className: "col-12" },
                t.question
              )
            ),
            o.default.createElement(
              "div",
              {
                className:
                  "row p-2 border border-top-0 fw-bold border-bottom-0 border-dark",
              },
              o.default.createElement(
                "div",
                { className: "col-12" },
                "Deadline: ",
                u.formatDateToEnglish(t.deadline)
              )
            ),
            e &&
              o.default.createElement(
                "div",
                {
                  className:
                    "row p-2 border border-top-0 border-bottom-0 border-dark",
                },
                o.default.createElement(
                  "div",
                  { className: "col-12" },
                  "Your Answer:",
                  o.default.createElement(
                    "ul",
                    null,
                    n &&
                      Object.values(n).map((e) =>
                        o.default.createElement("li", null, e.name || e.answer)
                      )
                  )
                )
              ),
            o.default.createElement(
              "div",
              {
                className:
                  "row p-2 border border-top-0 text-center border-dark",
              },
              o.default.createElement(
                "div",
                { className: "col-12" },
                o.default.createElement(
                  "div",
                  { className: "d-grid gap-2" },
                  o.default.createElement(
                    "a",
                    {
                      href: `/questions/answer/${t.id}`,
                      className: "btn btn-success",
                      role: "button",
                    },
                    e && "Edit",
                    " Answer"
                  )
                )
              )
            )
          )),
        (t.PreviousNav = ({ activeTab: e, onTabClick: t }) =>
          o.default.createElement(
            "ul",
            { className: "nav nav-tabs mb-3" },
            o.default.createElement(
              "li",
              { className: "nav-item" },
              o.default.createElement(
                "a",
                {
                  className: e === i.UNSETTLED ? "nav-link active" : "nav-link",
                  href: "#",
                  onClick: t.bind(this, i.UNSETTLED),
                },
                "Unsettled"
              )
            ),
            o.default.createElement(
              "li",
              { className: "nav-item" },
              o.default.createElement(
                "a",
                {
                  className: e === i.SETTLED ? "nav-link active" : "nav-link",
                  href: "#",
                  onClick: t.bind(this, i.SETTLED),
                },
                "Settled"
              )
            )
          )),
        (t.default = () => {
          const [e, n] = o.useState({}),
            [r, a] = o.useState([]),
            [l, s] = o.useState({}),
            [c, d] = o.useState({}),
            [f, m] = o.useState({}),
            [p, h] = o.useState(),
            [v, g] = o.useState(i.ACTIVE),
            [b, y] = o.useState(i.SETTLED);
          o.useEffect(() => {
            !(async function () {
              const e = await (
                  await fetch("/questions/active", {
                    method: "POST",
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                  })
                ).json(),
                t = Object.keys(e.questions).filter(
                  (t) => e.answers && e.answers[t] && !e.answers[t].length
                );
              n(e.questions), a(t), s(e.answers), t.length && g(i.UNANSWERED);
            })();
          }, []);
          const E = Object.values(e).some(
            (e) => (l && !l[e.id]) || !l[e.id].length
          );
          return o.default.createElement(
            "div",
            { className: "p-1" },
            o.default.createElement(t.QuestionsNav, {
              onPreviousQuestionsClick: async (e) => {
                if ((e.preventDefault(), Object.keys(c).length))
                  return void g(i.PREVIOUS);
                const t = await (
                  await fetch("/questions/previous", {
                    method: "POST",
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                  })
                ).json();
                d(t.questions),
                  m(t.answers),
                  h(t.correctAnswers),
                  g(i.PREVIOUS);
              },
              onActiveQuestionsClick: (e) => {
                e.preventDefault(), g(i.ACTIVE);
              },
              onUnansweredQuestionsClick: (e) => {
                e.preventDefault(), g(i.UNANSWERED);
              },
              activeTab: v,
              unansweredCount: r.length,
            }),
            E &&
              o.default.createElement(
                "div",
                { className: "alert alert-danger text-center" },
                "You have questions that need answering!"
              ),
            v === i.UNANSWERED &&
              (r.length
                ? o.default.createElement(
                    "div",
                    null,
                    r.map((n) =>
                      o.default.createElement(t.ActiveQuestionBox, {
                        question: e[n],
                        hasAnswered: !!l[n]?.length,
                        activeAnswer: l[n],
                      })
                    )
                  )
                : o.default.createElement(
                    "div",
                    { className: "alert alert-success text-center" },
                    "Nothing to see here. You have answered all the active questions."
                  )),
            v === i.ACTIVE &&
              (Object.keys(e).length
                ? o.default.createElement(
                    "div",
                    null,
                    Object.keys(e).map((n) =>
                      o.default.createElement(t.ActiveQuestionBox, {
                        hasAnswered: !!l[n]?.length,
                        question: e[n],
                        activeAnswer: l[n],
                      })
                    )
                  )
                : o.default.createElement(
                    "div",
                    { className: "col" },
                    "No Active Questions"
                  )),
            v === i.PREVIOUS &&
              (Object.keys(c).length
                ? o.default.createElement(
                    "div",
                    null,
                    o.default.createElement(t.PreviousNav, {
                      activeTab: b,
                      onTabClick: (e, t) => {
                        t.preventDefault(), y(e);
                      },
                    }),
                    Object.keys(c)
                      .filter((e) =>
                        b === i.SETTLED ? p && !!p[e] : !p || (p && !p[e])
                      )
                      .map((e) => {
                        const t = p && !!p[e],
                          n = !!f[e]?.length,
                          r = c[e],
                          a = r.added_points,
                          l =
                            (n &&
                              f[e] &&
                              Object.values(f[e]).filter((e) => e.correct)) ||
                            [],
                          i = t && l.length === r.answer_amount,
                          s = t && !l.length;
                        return o.default.createElement(
                          "div",
                          { className: "mb-3" },
                          o.default.createElement(
                            "div",
                            {
                              className: `row p-2 border ${
                                i ? "bg-success" : "bg-primary"
                              } ${s && !a ? "bg-danger" : ""} ${
                                (!s && !i && t) || a ? "bg-warning" : ""
                              } fw-bold text-light border-dark`,
                            },
                            o.default.createElement(
                              "div",
                              { className: "col-10" },
                              !t && "Max",
                              " Points"
                            ),
                            o.default.createElement(
                              "div",
                              { className: "col-2 text-end" },
                              !t && r.points * r.answer_amount,
                              t && !a && r.points * l.length,
                              a && a
                            )
                          ),
                          o.default.createElement(
                            "div",
                            {
                              className:
                                "row p-2 border border-top-0 border-bottom-0 border-dark",
                            },
                            o.default.createElement(
                              "div",
                              { className: "col-12" },
                              r.question
                            )
                          ),
                          o.default.createElement(
                            "div",
                            {
                              className:
                                "row p-2 border border-top-0 fw-bold border-bottom-0 border-dark",
                            },
                            o.default.createElement(
                              "div",
                              { className: "col-12" },
                              "Deadline: ",
                              u.formatDateToEnglish(r.deadline)
                            )
                          ),
                          o.default.createElement(
                            "div",
                            {
                              className:
                                "row p-2 border border-top-0 border-dark",
                            },
                            n
                              ? o.default.createElement(
                                  o.default.Fragment,
                                  null,
                                  o.default.createElement(
                                    "div",
                                    { className: "col-12" },
                                    "Your Answer:",
                                    o.default.createElement(
                                      "ul",
                                      null,
                                      f[e] &&
                                        Object.values(f[e]).map((e) =>
                                          o.default.createElement(
                                            "li",
                                            null,
                                            e.name || e.answer
                                          )
                                        )
                                    )
                                  ),
                                  i &&
                                    o.default.createElement(
                                      "div",
                                      { className: "col-12" },
                                      o.default.createElement(
                                        "div",
                                        { className: "alert alert-success" },
                                        "Nice one! You got this question right"
                                      )
                                    ),
                                  !i &&
                                    p &&
                                    p[e] &&
                                    o.default.createElement(
                                      "div",
                                      { className: "col-12" },
                                      o.default.createElement(
                                        "div",
                                        { className: "alert alert-warning" },
                                        "The correct answer was:",
                                        o.default.createElement(
                                          "ul",
                                          null,
                                          p[e].map((e) =>
                                            o.default.createElement(
                                              "li",
                                              null,
                                              e.correctAnswer
                                            )
                                          )
                                        )
                                      )
                                    ),
                                  a &&
                                    o.default.createElement(
                                      "div",
                                      { className: "col-12" },
                                      o.default.createElement(
                                        "div",
                                        { className: "alert alert-success" },
                                        "You were awarded ",
                                        a,
                                        " points for this question"
                                      )
                                    )
                                )
                              : o.default.createElement(
                                  "div",
                                  { className: "alert alert-danger" },
                                  "We don't have an answer from you for this question"
                                )
                          )
                        );
                      })
                  )
                : o.default.createElement(
                    "div",
                    { className: "col" },
                    "No Previous Questions"
                  ))
          );
        });
    },
    332: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const a = r(n(294));
      t.default = () =>
        a.default.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "currentColor",
            className: "bi bi-check-circle-fill text-success",
            viewBox: "0 0 16 16",
          },
          a.default.createElement("path", {
            d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z",
          })
        );
    },
    882: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const a = r(n(294));
      t.default = () =>
        a.default.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "28",
            height: "28",
            fill: "currentColor",
            className: "bi bi-chevron-double-up",
            viewBox: "0 0 16 16",
          },
          a.default.createElement("path", {
            fillRule: "evenodd",
            d: "M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z",
          }),
          a.default.createElement("path", {
            fillRule: "evenodd",
            d: "M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z",
          })
        );
    },
    642: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const a = r(n(294));
      t.default = () =>
        a.default.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "28",
            height: "28",
            fill: "currentColor",
            className: "bi bi-shield-lock-fill",
            viewBox: "0 0 16 16",
          },
          a.default.createElement("path", {
            fillRule: "evenodd",
            d: "M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z",
          })
        );
    },
    272: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  });
              }
            : function (e, t, n, r) {
                void 0 === r && (r = n), (e[r] = t[n]);
              }),
        a =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        l =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                "default" !== n &&
                  Object.prototype.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return a(t, e), t;
          },
        o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const u = l(n(294)),
        i = n(212),
        s = o(n(797));
      t.default = () => {
        const [e, t] = u.useState(""),
          [n, r] = u.useState(!0),
          [a, l] = u.useState(),
          [o, c] = u.useState("");
        return (
          u.useEffect(() => {
            fetch("/leader-board/get-table", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            })
              .then((e) => e.json())
              .then((e) => {
                e.success ? (l(e.standings), c(e.dateAdded)) : t(e.message);
              })
              .catch(() => {
                t("There was an error, please refresh and try again");
              })
              .finally(() => {
                r(!1);
              });
          }, []),
          (!n && a) || e
            ? a
              ? u.default.createElement(
                  "div",
                  null,
                  e &&
                    u.default.createElement(
                      "div",
                      {
                        className: "alert alert-danger text-center",
                        role: "alert",
                      },
                      e
                    ),
                  0 === a.length &&
                    u.default.createElement(
                      "div",
                      {
                        className: "alert alert-warning text-center mt-5",
                        role: "alert",
                      },
                      "No league tables found"
                    ),
                  o &&
                    u.default.createElement(
                      "div",
                      { className: "col-12 p-2" },
                      "Last Updated: ",
                      i.formatDateToEnglish(o)
                    ),
                  0 !== Object.keys(a).length &&
                    u.default.createElement(
                      u.default.Fragment,
                      null,
                      u.default.createElement(
                        "div",
                        { className: "row border border-dark p-2 mt-4" },
                        u.default.createElement(
                          "div",
                          { className: "col-1" },
                          "Pos."
                        ),
                        u.default.createElement(
                          "div",
                          { className: "col-9" },
                          "Name"
                        ),
                        u.default.createElement(
                          "div",
                          { className: "col-2" },
                          "Points"
                        )
                      ),
                      a.map((e, t) =>
                        u.default.createElement(
                          "div",
                          {
                            className:
                              "row border border-dark border-top-0 p-2",
                          },
                          u.default.createElement(
                            "div",
                            { className: "col-1" },
                            t + 1
                          ),
                          u.default.createElement(
                            "div",
                            { className: "col-9" },
                            e.userDisplayName
                          ),
                          u.default.createElement(
                            "div",
                            { className: "col-2" },
                            e.points
                          )
                        )
                      )
                    )
                )
              : u.default.createElement(u.default.Fragment, null)
            : u.default.createElement(s.default, null)
        );
      };
    },
    797: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const a = r(n(294));
      t.default = () =>
        a.default.createElement(
          "div",
          { className: "d-flex align-items-center pt-5 pb-5" },
          a.default.createElement("strong", null, "Loading..."),
          a.default.createElement("div", {
            className: "spinner-border ms-auto text-warning",
            role: "status",
            "aria-hidden": "true",
          })
        );
    },
    388: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  });
              }
            : function (e, t, n, r) {
                void 0 === r && (r = n), (e[r] = t[n]);
              }),
        a =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        l =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                "default" !== n &&
                  Object.prototype.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return a(t, e), t;
          },
        o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const u = l(n(294)),
        i = n(212),
        s = l(n(635)),
        c = n(725),
        d = o(n(797));
      t.default = () => {
        const [e, t] = u.useState(),
          [n, r] = u.useState(""),
          [a, l] = u.useState(!0),
          [o, f] = u.useState(),
          [m, p] = u.useState(),
          [h, v] = u.useState(),
          [g, b] = u.useState([]);
        return (
          u.useEffect(() => {
            const e = window.location.pathname.split("/")[3];
            fetch(`/questions/get/${e}`, {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            })
              .then((e) => e.json())
              .then((e) => {
                if (e.success) {
                  const n = e.question;
                  t(n),
                    f(e.setAnswers),
                    v(new Date(n.deadline)),
                    b(e.powerTokens),
                    n.answer_set_id === s.ALL_PLAYERS_TYPE
                      ? p(e.answers)
                      : p(
                          e.answers.map((e) =>
                            n.answer_set_id
                              ? `${e.answer_set_id}`
                              : `${e.answer}`
                          )
                        );
                } else r("There was an error, please refresh and try again.");
              })
              .catch(() => {
                r("There was an error, please refresh and try again");
              })
              .finally(() => {
                l(!1);
              });
          }, []),
          a
            ? u.default.createElement(d.default, null)
            : u.default.createElement(
                "div",
                { className: "p-1" },
                n &&
                  u.default.createElement(
                    "div",
                    {
                      className: "alert alert-danger text-center",
                      role: "alert",
                    },
                    n
                  ),
                e &&
                  u.default.createElement(
                    "div",
                    null,
                    u.default.createElement(
                      "div",
                      {
                        className:
                          "row border-bottom border-dark mb-4 pb-4 text-center",
                      },
                      u.default.createElement(
                        "h1",
                        { className: "col-12" },
                        "Q: ",
                        e.question
                      )
                    ),
                    u.default.createElement(
                      "div",
                      { className: "row text-center" },
                      u.default.createElement(
                        "div",
                        { className: "col-6 border-end" },
                        "Max Points:"
                      ),
                      u.default.createElement(
                        "div",
                        { className: "col-6" },
                        "Deadline:"
                      )
                    ),
                    u.default.createElement(
                      "div",
                      {
                        className:
                          "row text-center fw-bold border-bottom pb-4 mb-4",
                      },
                      u.default.createElement(
                        "div",
                        { className: "col-6 border-end" },
                        e.points * e.answer_amount
                      ),
                      u.default.createElement(
                        "div",
                        { className: "col-6" },
                        i.formatDateToEnglish(e.deadline)
                      )
                    ),
                    h && h > new Date()
                      ? u.default.createElement(c.AnswerForm, {
                          question: e,
                          setErrorMessage: r,
                          setAnswers: o,
                          savedAnswer: m,
                          powerTokens: g,
                        })
                      : u.default.createElement(
                          "div",
                          {
                            className: "alert alert-warning text-center",
                            role: "alert",
                          },
                          "The deadline for this question has passed."
                        )
                  )
              )
        );
      };
    },
    725: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  });
              }
            : function (e, t, n, r) {
                void 0 === r && (r = n), (e[r] = t[n]);
              }),
        a =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        l =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                "default" !== n &&
                  Object.prototype.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return a(t, e), t;
          },
        o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AnswerForm = void 0);
      const u = l(n(635)),
        i = o(n(321)),
        s = o(n(421)),
        c = o(n(35)),
        d = o(n(403)),
        f = o(n(69)),
        m = o(n(892)),
        p = o(n(294));
      t.AnswerForm = ({
        question: e,
        setErrorMessage: t,
        setAnswers: n,
        savedAnswer: r,
        powerTokens: a,
      }) => {
        switch (e.answer_type) {
          case u.NUMBER_TYPE:
            return p.default.createElement(i.default, {
              setErrorMessage: t,
              savedAnswer: r,
              submitUrl: `/questions/set-text-answer/${e.id}`,
              powerTokens: a,
              questionId: e.id,
            });
          case u.YESNO_TYPE:
            return p.default.createElement(s.default, {
              setErrorMessage: t,
              savedAnswer: r,
              submitUrl: `/questions/set-text-answer/${e.id}`,
              powerTokens: a,
              questionId: e.id,
            });
          case u.CORRECT_SCORE_TYPE:
            return p.default.createElement(c.default, {
              setErrorMessage: t,
              savedAnswer: r,
              submitUrl: `/questions/set-text-answer/${e.id}`,
              powerTokens: a,
              questionId: e.id,
            });
          case null:
            if (e.answer_set_id === u.ALL_TEAMS_TYPE && n)
              return p.default.createElement(d.default, {
                answerAmount: e.answer_amount,
                setErrorMessage: t,
                savedAnswer: r,
                setAnswers: n,
                submitUrl: `/questions/set-teams-answer/${e.id}`,
                powerTokens: a,
                questionId: e.id,
              });
            if (e.answer_set_id === u.ALL_PLAYERS_TYPE)
              return p.default.createElement(f.default, {
                answerAmount: e.answer_amount,
                setErrorMessage: t,
                setAnswers: n,
                savedAnswer: r,
                submitUrl: `/questions/set-players-answer/${e.id}`,
                powerTokens: a,
                questionId: e.id,
              });
            if (e.answer_set_id === u.ALL_MANAGERS_TYPE)
              return p.default.createElement(m.default, {
                answerAmount: e.answer_amount,
                setErrorMessage: t,
                setAnswers: n,
                savedAnswer: r,
                submitUrl: `/questions/set-managers-answer/${e.id}`,
                powerTokens: a,
                questionId: e.id,
              });
        }
        return p.default.createElement(
          "div",
          { className: "text-center" },
          "It appears this type of question isn't ready to answer yet"
        );
      };
    },
    35: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  });
              }
            : function (e, t, n, r) {
                void 0 === r && (r = n), (e[r] = t[n]);
              }),
        a =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        l =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                "default" !== n &&
                  Object.prototype.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return a(t, e), t;
          },
        o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const u = l(n(294)),
        i = o(n(749)),
        s = o(n(565));
      t.default = ({
        setErrorMessage: e,
        savedAnswer: t,
        submitUrl: n,
        powerTokens: r,
        questionId: a,
      }) => {
        const [l, o] = u.useState(""),
          [c, d] = u.useState(""),
          [f, m] = u.useState(!1),
          [p, h] = u.useState(!1),
          [v, g] = u.useState(!1),
          [b, y] = u.useState();
        return (
          u.useEffect(() => {
            if (t && t[0] && t[0].length && !v) {
              const e = t[0].split("-");
              o(e[0]), d(e[1]), g(!0);
            }
          }),
          f
            ? u.default.createElement(
                "div",
                { className: "text-center" },
                "Submitting..."
              )
            : p
            ? u.default.createElement(
                "div",
                { className: "alert alert-success text-center", role: "alert" },
                "Answer Saved."
              )
            : u.default.createElement(
                "div",
                null,
                !!r &&
                  !!r.length &&
                  u.default.createElement(i.default, {
                    powerTokens: r,
                    setPowerToken: y,
                    questionId: a,
                  }),
                u.default.createElement(
                  "div",
                  { className: "row" },
                  u.default.createElement(
                    "div",
                    { className: "col-5" },
                    u.default.createElement(
                      "div",
                      { className: "form-floating mb-3" },
                      u.default.createElement("input", {
                        type: "number",
                        className: "form-control",
                        id: "homeScore",
                        name: "score[]",
                        placeholder: "Home Score",
                        value: l,
                        onChange: (e) => {
                          o(e.target.value);
                        },
                      }),
                      u.default.createElement(
                        "label",
                        { htmlFor: "homeScore", className: "form-label" },
                        "Home Score"
                      )
                    )
                  ),
                  u.default.createElement(
                    "div",
                    { className: "col-2 text-center lh58" },
                    " -"
                  ),
                  u.default.createElement(
                    "div",
                    { className: "col-5" },
                    u.default.createElement(
                      "div",
                      { className: "form-floating" },
                      u.default.createElement("input", {
                        type: "number",
                        className: "form-control",
                        id: "awayScore",
                        name: "score[]",
                        placeholder: "Away Score",
                        value: c,
                        onChange: (e) => {
                          d(e.target.value);
                        },
                      }),
                      u.default.createElement(
                        "label",
                        {
                          htmlFor: "awayScore",
                          className: "form-label text-center",
                        },
                        "Away Score"
                      )
                    )
                  )
                ),
                u.default.createElement(
                  "div",
                  {
                    className: "alert alert-warning text-center",
                    role: "alert",
                  },
                  "Please pay attention to your answer, it matters which score you put as Home vs Away!"
                ),
                l &&
                  c &&
                  u.default.createElement(
                    "div",
                    {
                      className:
                        "mt-4 text-center " + (b ? "alert alert-warning" : ""),
                    },
                    u.default.createElement(s.default, {
                      powerToken: b,
                      savedAnswer: !!t?.length,
                    }),
                    u.default.createElement(
                      "button",
                      {
                        className: "btn btn-success " + (b ? "mt-4" : ""),
                        type: "button",
                        onClick: () => {
                          if (!l && !c)
                            return void e("Both values must be set");
                          const t = `${l}-${c}`;
                          fetch(n, {
                            method: "POST",
                            headers: {
                              Accept: "application/json",
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ answer: t, powerToken: b }),
                          })
                            .then((e) => e.json())
                            .then((t) => {
                              t.success ? h(!0) : e(t.message);
                            })
                            .catch(() => {
                              e(
                                "Error saving answer, please refresh and try again"
                              );
                            })
                            .finally(() => m(!1));
                        },
                      },
                      t?.length ? "Update" : "Submit",
                      " Answer"
                    )
                  )
              )
        );
      };
    },
    892: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  });
              }
            : function (e, t, n, r) {
                void 0 === r && (r = n), (e[r] = t[n]);
              }),
        a =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        l =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                "default" !== n &&
                  Object.prototype.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return a(t, e), t;
          },
        o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const u = l(n(294)),
        i = o(n(749)),
        s = o(n(565));
      t.default = ({
        answerAmount: e,
        setAnswers: t,
        setErrorMessage: n,
        savedAnswer: r,
        submitUrl: a,
        powerTokens: l,
        questionId: o,
      }) => {
        const [c, d] = u.useState([]),
          [f, m] = u.useState(!1),
          [p, h] = u.useState(!1),
          [v, g] = u.useState(!1),
          [b, y] = u.useState();
        u.useEffect(() => {
          r && !v && (d(r), g(!0));
        });
        const E = (e, t) => {
          const n = c.slice();
          (n[e] = t.target.value), d(n);
        };
        if (f)
          return u.default.createElement(
            "div",
            { className: "text-center" },
            "Submitting..."
          );
        if (!t || !t.length)
          return u.default.createElement(
            "div",
            { className: "text-center alert alert-danger" },
            "There was an error, please reload and try again."
          );
        const w = [];
        for (let n = 0; n < e; n++)
          w.push(
            u.default.createElement(
              "select",
              {
                className: "form-select form-select-lg mb-3",
                "aria-label": "Select a manager",
                onChange: E.bind(this, n),
              },
              u.default.createElement(
                "option",
                { selected: !0, value: "" },
                "Select a manager"
              ),
              t.map((e) =>
                u.default.createElement(
                  "option",
                  { value: e.id, selected: c[n] && c[n] === e.id.toString() },
                  e.answer
                )
              )
            )
          );
        return p
          ? u.default.createElement(
              "div",
              { className: "alert alert-success text-center", role: "alert" },
              "Answer Saved."
            )
          : u.default.createElement(
              "div",
              null,
              !!l &&
                !!l.length &&
                u.default.createElement(i.default, {
                  powerTokens: l,
                  setPowerToken: y,
                  questionId: o,
                }),
              w,
              c.length === e &&
                c.every((e) => "" !== e) &&
                u.default.createElement(
                  "div",
                  {
                    className:
                      "mt-4 text-center " + (b ? "alert alert-warning" : ""),
                  },
                  u.default.createElement(s.default, {
                    powerToken: b,
                    savedAnswer: !!r?.length,
                  }),
                  u.default.createElement(
                    "button",
                    {
                      className: "btn btn-success " + (b ? "mt-4" : ""),
                      type: "button",
                      onClick: () => {
                        fetch(a, {
                          method: "POST",
                          headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({ answer: c, powerToken: b }),
                        })
                          .then((e) => e.json())
                          .then((e) => {
                            e.success ? h(!0) : n(e.message);
                          })
                          .catch(() => {
                            n(
                              "Error saving answer, please refresh and try again"
                            );
                          })
                          .finally(() => m(!1));
                      },
                    },
                    r?.length ? "Update" : "Submit",
                    " Answer"
                  )
                )
            );
      };
    },
    321: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  });
              }
            : function (e, t, n, r) {
                void 0 === r && (r = n), (e[r] = t[n]);
              }),
        a =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        l =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                "default" !== n &&
                  Object.prototype.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return a(t, e), t;
          },
        o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const u = l(n(294)),
        i = o(n(749)),
        s = o(n(565));
      t.default = ({
        setErrorMessage: e,
        savedAnswer: t,
        submitUrl: n,
        powerTokens: r,
        questionId: a,
      }) => {
        const [l, o] = u.useState(""),
          [c, d] = u.useState(!1),
          [f, m] = u.useState(!1),
          [p, h] = u.useState(!1),
          [v, g] = u.useState();
        return (
          u.useEffect(() => {
            t && !p && (o(t[0]), h(!0));
          }),
          c
            ? u.default.createElement(
                "div",
                { className: "text-center" },
                "Submitting..."
              )
            : f
            ? u.default.createElement(
                "div",
                { className: "alert alert-success text-center", role: "alert" },
                "Answer Saved."
              )
            : u.default.createElement(
                "div",
                null,
                !!r &&
                  !!r.length &&
                  u.default.createElement(i.default, {
                    powerTokens: r,
                    setPowerToken: g,
                    questionId: a,
                  }),
                u.default.createElement(
                  "div",
                  { className: "form-floating" },
                  u.default.createElement("input", {
                    type: "number",
                    className: "form-control",
                    id: "number",
                    name: "number",
                    placeholder: "Your Answer",
                    value: l,
                    onChange: (e) => {
                      o(e.target.value);
                    },
                  }),
                  u.default.createElement(
                    "label",
                    { htmlFor: "number", className: "form-label" },
                    "Your Answer"
                  )
                ),
                l &&
                  "" !== l &&
                  u.default.createElement(
                    "div",
                    {
                      className:
                        "mt-4 text-center " + (v ? "alert alert-warning" : ""),
                    },
                    u.default.createElement(s.default, {
                      powerToken: v,
                      savedAnswer: !!t?.length,
                    }),
                    u.default.createElement(
                      "button",
                      {
                        className: "btn btn-success " + (v ? "mt-4" : ""),
                        type: "button",
                        onClick: () => {
                          fetch(n, {
                            method: "POST",
                            headers: {
                              Accept: "application/json",
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ answer: l, powerToken: v }),
                          })
                            .then((e) => e.json())
                            .then((t) => {
                              t.success ? m(!0) : e(t.message);
                            })
                            .catch(() => {
                              e(
                                "Error saving answer, please refresh and try again"
                              );
                            })
                            .finally(() => d(!1));
                        },
                      },
                      t?.length ? "Update" : "Submit",
                      " Answer"
                    )
                  )
              )
        );
      };
    },
    69: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  });
              }
            : function (e, t, n, r) {
                void 0 === r && (r = n), (e[r] = t[n]);
              }),
        a =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        l =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                "default" !== n &&
                  Object.prototype.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return a(t, e), t;
          },
        o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const u = l(n(294)),
        i = o(n(749)),
        s = o(n(565));
      let c;
      t.default = ({
        answerAmount: e,
        setErrorMessage: t,
        savedAnswer: n,
        setAnswers: r,
        submitUrl: a,
        powerTokens: l,
        questionId: o,
      }) => {
        const [d, f] = u.useState([]),
          [m, p] = u.useState(!1),
          [h, v] = u.useState(!1),
          [g, b] = u.useState(!1),
          [y, E] = u.useState(""),
          [w, _] = u.useState([]),
          [k, S] = u.useState();
        u.useEffect(() => {
          n && r && !g && (f(r), b(!0));
        });
        return m
          ? u.default.createElement(
              "div",
              { className: "text-center" },
              "Submitting..."
            )
          : h
          ? u.default.createElement(
              "div",
              { className: "alert alert-success text-center", role: "alert" },
              "Answer Saved."
            )
          : u.default.createElement(
              "div",
              null,
              !!l &&
                !!l.length &&
                u.default.createElement(i.default, {
                  powerTokens: l,
                  setPowerToken: S,
                  questionId: o,
                }),
              u.default.createElement(
                "div",
                { className: "alert alert-warning text-center", role: "alert" },
                'Start typing the name of the player you want and select them from the list. Please bear in mind that the search only returns 10 names so you might have to be specific with your search. Eg. Instead of "Son" search for "Son Heung"',
                u.default.createElement("br", null),
                u.default.createElement("br", null),
                u.default.createElement(
                  "strong",
                  null,
                  "If you can't find the player you want please inform Ant ASAP so he can get them added!"
                )
              ),
              u.default.createElement(
                "div",
                { className: "form-floating" },
                u.default.createElement("input", {
                  type: "text",
                  className: "form-control",
                  id: "player",
                  name: "player",
                  placeholder: "Player",
                  onChange: (e) => {
                    const n = e.target.value;
                    E(e.target.value),
                      clearTimeout(c),
                      n.length > 2 &&
                        (c = setTimeout(() => {
                          ((e) => {
                            fetch("/questions/player-search", {
                              method: "POST",
                              headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                              },
                              body: JSON.stringify({ search: e }),
                            })
                              .then((e) => e.json())
                              .then((e) => {
                                e.success
                                  ? _(e.players)
                                  : t(
                                      "There was an error searching for your player, please refresh and try again"
                                    );
                              });
                          })(n);
                        }, 1500));
                  },
                  value: y,
                }),
                u.default.createElement(
                  "label",
                  { htmlFor: "username", className: "form-label" },
                  "Player"
                )
              ),
              u.default.createElement(
                "div",
                { id: "players-list" },
                u.default.createElement(
                  "div",
                  { className: "list-group" },
                  0 !== w.length &&
                    w.map((e) =>
                      u.default.createElement(
                        "a",
                        {
                          href: "#",
                          className: "list-group-item list-group-item-action",
                          onClick: () =>
                            ((e) => {
                              f(d.filter((t) => t.id !== e.id).concat([e])),
                                _([]),
                                E("");
                            })(e),
                        },
                        e.answer
                      )
                    )
                )
              ),
              0 !== d.length &&
                u.default.createElement(
                  "ul",
                  { className: "nav nav-tabs" },
                  u.default.createElement(
                    "li",
                    { className: "nav-item mt-3" },
                    u.default.createElement(
                      "a",
                      {
                        className: "nav-link active",
                        "aria-current": "page",
                        href: "#",
                      },
                      "Your Answer(s)"
                    )
                  )
                ),
              u.default.createElement(
                "ul",
                {
                  id: "selected-players",
                  className: "list-group list-group-flush",
                },
                d.map((e) =>
                  u.default.createElement(
                    "li",
                    { className: "list-group-item" },
                    u.default.createElement(
                      "div",
                      { className: "row" },
                      u.default.createElement(
                        "div",
                        { className: "col-10 fw-bold" },
                        e.answer
                      ),
                      u.default.createElement(
                        "div",
                        { className: "col-2 text-end" },
                        u.default.createElement(
                          "button",
                          {
                            className: "btn btn-sm btn-danger pl-2",
                            onClick: () =>
                              ((e) => {
                                f(d.filter((t) => t.id !== e.id));
                              })(e),
                          },
                          "Remove"
                        )
                      )
                    )
                  )
                )
              ),
              d.length === e &&
                u.default.createElement(
                  "div",
                  {
                    className:
                      "mt-4 text-center " + (k ? "alert alert-warning" : ""),
                  },
                  u.default.createElement(s.default, {
                    powerToken: k,
                    savedAnswer: !!n?.length,
                  }),
                  u.default.createElement(
                    "button",
                    {
                      className: "btn btn-success " + (k ? "mt-4" : ""),
                      type: "button",
                      onClick: () => {
                        fetch(a, {
                          method: "POST",
                          headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({ answer: d, powerToken: k }),
                        })
                          .then((e) => e.json())
                          .then((e) => {
                            e.success ? v(!0) : t(e.message);
                          })
                          .catch(() => {
                            t(
                              "Error saving answer, please refresh and try again"
                            );
                          })
                          .finally(() => p(!1));
                      },
                    },
                    n?.length ? "Update" : "Submit",
                    " Answer"
                  )
                )
            );
      };
    },
    565: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const a = r(n(294));
      t.default = ({ powerToken: e, savedAnswer: t }) =>
        a.default.createElement(
          a.default.Fragment,
          null,
          e &&
            a.default.createElement(
              a.default.Fragment,
              null,
              a.default.createElement(
                "span",
                null,
                t
                  ? "If you update your answer you will be using your"
                  : "You are about to use your",
                " ",
                "double" === e.type ? '"Go big or go home"' : '"Play it safe"',
                " ",
                "power token"
              ),
              a.default.createElement("br", null)
            )
        );
    },
    749: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  });
              }
            : function (e, t, n, r) {
                void 0 === r && (r = n), (e[r] = t[n]);
              }),
        a =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        l =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                "default" !== n &&
                  Object.prototype.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return a(t, e), t;
          },
        o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const u = l(n(294)),
        i = o(n(882)),
        s = o(n(642));
      t.default = ({ powerTokens: e, setPowerToken: t, questionId: n }) => {
        const [r, a] = u.useState(),
          [l, o] = u.useState(),
          [c, d] = u.useState();
        u.useEffect(() => {
          e.forEach((e) => {
            "double" === e.type ? o(e) : d(e),
              e.question_id === n && (t && t(e), a(e));
          });
        }, []);
        const f = (l, o) => {
          o.preventDefault();
          let u = l;
          l.id === r?.id &&
            ((u = void 0), e.forEach((e) => (e.question_id = void 0))),
            u &&
              ((u.question_id = n),
              e?.forEach((e) => {
                e.question_id = void 0;
              })),
            a(u),
            t && t(u);
        };
        return c || l
          ? u.default.createElement(
              "div",
              { className: "row mt-5 mb-5" },
              (!l?.question_id || !c?.question_id) &&
                u.default.createElement(
                  "span",
                  null,
                  "You have power tokens available to use:"
                ),
              l &&
                u.default.createElement(
                  "div",
                  { className: "col-6 text-center" },
                  u.default.createElement(
                    "div",
                    {
                      className:
                        "border border-1 border-dark pt-3 pb-3 power-token bg-primary text-white " +
                        ((l.question_id === n && r?.id !== c?.id) ||
                        r?.id === l.id
                          ? "bg-success"
                          : ""),
                      onClick: f.bind(this, l),
                    },
                    u.default.createElement(i.default, null),
                    u.default.createElement("br", null),
                    u.default.createElement(
                      "span",
                      { className: "fw-bold" },
                      "Go big or go home"
                    ),
                    u.default.createElement("br", null),
                    "(Double points)"
                  )
                ),
              c &&
                u.default.createElement(
                  "div",
                  { className: "col-6 text-center" },
                  u.default.createElement(
                    "div",
                    {
                      className:
                        "border border-1 border-dark pt-3 pb-3 power-token bg-primary text-white " +
                        ((c.question_id && r?.id !== l?.id) || r?.id === c.id
                          ? "bg-success"
                          : ""),
                      onClick: f.bind(this, c),
                    },
                    u.default.createElement(s.default, null),
                    u.default.createElement("br", null),
                    u.default.createElement(
                      "span",
                      { className: "fw-bold" },
                      "Play it safe"
                    ),
                    u.default.createElement("br", null),
                    "(Cannot score < 0)"
                  )
                )
            )
          : null;
      };
    },
    403: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  });
              }
            : function (e, t, n, r) {
                void 0 === r && (r = n), (e[r] = t[n]);
              }),
        a =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        l =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                "default" !== n &&
                  Object.prototype.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return a(t, e), t;
          },
        o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const u = l(n(294)),
        i = o(n(749)),
        s = o(n(565));
      t.default = ({
        answerAmount: e,
        setAnswers: t,
        setErrorMessage: n,
        savedAnswer: r,
        submitUrl: a,
        powerTokens: l,
        questionId: o,
      }) => {
        const [c, d] = u.useState([]),
          [f, m] = u.useState(!1),
          [p, h] = u.useState(!1),
          [v, g] = u.useState(!1),
          [b, y] = u.useState();
        u.useEffect(() => {
          r && !v && (d(r), g(!0));
        });
        const E = (e, t) => {
          const n = c.slice();
          (n[e] = t.target.value), d(n);
        };
        if (f)
          return u.default.createElement(
            "div",
            { className: "text-center" },
            "Submitting..."
          );
        if (p)
          return u.default.createElement(
            "div",
            { className: "alert alert-success text-center", role: "alert" },
            "Answer Saved."
          );
        if (!t || !t.length)
          return u.default.createElement(
            "div",
            { className: "text-center alert alert-danger" },
            "There was an error, please reload and try again."
          );
        const w = [];
        for (let n = 0; n < e; n++)
          w.push(
            u.default.createElement(
              "select",
              {
                className: "form-select form-select-lg mb-3",
                "aria-label": "Select a team",
                onChange: E.bind(this, n),
              },
              u.default.createElement(
                "option",
                { selected: !0, value: "" },
                "Select a team"
              ),
              t.map((e) =>
                u.default.createElement(
                  "option",
                  { value: e.id, selected: c[n] && c[n] === e.id.toString() },
                  e.answer
                )
              )
            )
          );
        return u.default.createElement(
          "div",
          null,
          !!l &&
            !!l.length &&
            u.default.createElement(i.default, {
              powerTokens: l,
              setPowerToken: y,
              questionId: o,
            }),
          w,
          c.length === e &&
            c.every((e) => "" !== e) &&
            u.default.createElement(
              "div",
              {
                className:
                  "mt-4 text-center " + (b ? "alert alert-warning" : ""),
              },
              u.default.createElement(s.default, {
                powerToken: b,
                savedAnswer: !!r?.length,
              }),
              u.default.createElement(
                "button",
                {
                  className: "btn btn-success " + (b ? "mt-4" : ""),
                  type: "button",
                  onClick: () => {
                    fetch(a, {
                      method: "POST",
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({ answer: c, powerToken: b }),
                    })
                      .then((e) => e.json())
                      .then((e) => {
                        e.success ? h(!0) : n(e.message);
                      })
                      .catch(() => {
                        n("Error saving answer, please refresh and try again");
                      })
                      .finally(() => m(!1));
                  },
                },
                r?.length ? "Update" : "Submit",
                " Answer"
              )
            )
        );
      };
    },
    421: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  });
              }
            : function (e, t, n, r) {
                void 0 === r && (r = n), (e[r] = t[n]);
              }),
        a =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        l =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                "default" !== n &&
                  Object.prototype.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return a(t, e), t;
          },
        o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const u = l(n(294)),
        i = o(n(749)),
        s = o(n(565));
      t.default = ({
        setErrorMessage: e,
        savedAnswer: t,
        submitUrl: n,
        powerTokens: r,
        questionId: a,
      }) => {
        const [l, o] = u.useState(""),
          [c, d] = u.useState(!1),
          [f, m] = u.useState(!1),
          [p, h] = u.useState(!1),
          [v, g] = u.useState();
        return (
          u.useEffect(() => {
            t && !p && (o(t[0]), h(!0));
          }),
          c
            ? u.default.createElement(
                "div",
                { className: "text-center" },
                "Submitting..."
              )
            : f
            ? u.default.createElement(
                "div",
                { className: "alert alert-success text-center", role: "alert" },
                "Answer Saved."
              )
            : u.default.createElement(
                "div",
                null,
                !!r &&
                  !!r.length &&
                  u.default.createElement(i.default, {
                    powerTokens: r,
                    setPowerToken: g,
                    questionId: a,
                  }),
                u.default.createElement(
                  "select",
                  {
                    className: "form-select form-select-lg mb-3",
                    "aria-label": "Select Yes or No",
                    onChange: (e) => {
                      o(e.target.value);
                    },
                  },
                  u.default.createElement(
                    "option",
                    { value: "", selected: !0 },
                    "Select an Answer"
                  ),
                  u.default.createElement(
                    "option",
                    { value: "yes", selected: "yes" === l },
                    "Yes"
                  ),
                  u.default.createElement(
                    "option",
                    { value: "no", selected: "no" === l },
                    "No"
                  )
                ),
                l &&
                  "" !== l &&
                  u.default.createElement(
                    "div",
                    {
                      className:
                        "mt-4 text-center " + (v ? "alert alert-warning" : ""),
                    },
                    u.default.createElement(s.default, {
                      powerToken: v,
                      savedAnswer: !!t?.length,
                    }),
                    u.default.createElement(
                      "button",
                      {
                        className: "btn btn-success " + (v ? "mt-4" : ""),
                        type: "button",
                        onClick: () => {
                          fetch(n, {
                            method: "POST",
                            headers: {
                              Accept: "application/json",
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ answer: l, powerToken: v }),
                          })
                            .then((e) => e.json())
                            .then((t) => {
                              t.success ? m(!0) : e(t.message);
                            })
                            .catch(() => {
                              e(
                                "Error saving answer, please refresh and try again"
                              );
                            })
                            .finally(() => d(!1));
                        },
                      },
                      t?.length ? "Update" : "Submit",
                      " Answer"
                    )
                  )
              )
        );
      };
    },
    212: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.formatDateToEnglish = void 0),
        (t.formatDateToEnglish = (e) => {
          const t = new Date(e),
            [n, r, a, l, o] = [
              (t.getMonth() + 1).toString(),
              t.getDate().toString(),
              t.getFullYear().toString(),
              t.getHours().toString(),
              t.getMinutes().toString(),
              t.getSeconds().toString(),
            ];
          return `${1 === r.length ? "0" + r : r}/${
            1 === n.length ? "0" + n : n
          }/${a} ${1 === l.length ? "0" + l : l}:${
            1 === o.length ? "0" + o : o
          }`;
        });
    },
    690: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const a = r(n(294)),
        l = r(n(935)),
        o = r(n(735)),
        u = r(n(626)),
        i = r(n(388)),
        s = r(n(473)),
        c = r(n(38)),
        d = r(n(895)),
        f = r(n(436)),
        m = r(n(552)),
        p = r(n(272)),
        h = r(n(603)),
        v = document.getElementById("admin-questions"),
        g = document.getElementById("questions-container"),
        b = document.getElementById("answer-question-container"),
        y = document.getElementById("admin-edit-question"),
        E = document.getElementById("admin-set-correct-answer"),
        w = document.getElementById("admin-users"),
        _ = document.getElementById("admin-user"),
        k = document.getElementById("admin-standings"),
        S = document.getElementById("leader-board"),
        N = document.getElementById("admin-power-tokens");
      v &&
        (async function () {
          const e = await (await fetch("/admin/questions/answer-sets")).json(),
            t = await (await fetch("/admin/questions/get-questions")).json();
          l.default.render(
            a.default.createElement(o.default, { answerSets: e, questions: t }),
            v
          );
        })(),
        y && l.default.render(a.default.createElement(s.default, null), y),
        g && l.default.render(a.default.createElement(u.default, null), g),
        b && l.default.render(a.default.createElement(i.default, null), b),
        E && l.default.render(a.default.createElement(c.default, null), E),
        w && l.default.render(a.default.createElement(d.default, null), w),
        _ && l.default.render(a.default.createElement(f.default, null), _),
        k && l.default.render(a.default.createElement(m.default, null), k),
        S && l.default.render(a.default.createElement(p.default, null), S),
        N && l.default.render(a.default.createElement(h.default, null), N);
    },
    635: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.YESNO_TYPE =
          t.NUMBER_TYPE =
          t.CORRECT_SCORE_TYPE =
          t.ALL_MANAGERS_TYPE =
          t.ALL_PLAYERS_TYPE =
          t.ALL_TEAMS_TYPE =
            void 0),
        (t.ALL_TEAMS_TYPE = 1),
        (t.ALL_PLAYERS_TYPE = 2),
        (t.ALL_MANAGERS_TYPE = 3),
        (t.CORRECT_SCORE_TYPE = "score"),
        (t.NUMBER_TYPE = "number"),
        (t.YESNO_TYPE = "yesno");
    },
  },
  (e) => {
    "use strict";
    e((e.s = 690));
  },
]);
