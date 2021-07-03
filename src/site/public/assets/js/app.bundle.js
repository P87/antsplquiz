/*! For license information please see app.bundle.js.LICENSE.txt */
(self.webpackChunkAntsPLQuiz = self.webpackChunkAntsPLQuiz || []).push([
  [804],
  {
    418: (e) => {
      "use strict";
      var t = Object.getOwnPropertySymbols,
        n = Object.prototype.hasOwnProperty,
        r = Object.prototype.propertyIsEnumerable;
      function l(e) {
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
        : function (e, a) {
            for (var o, u, i = l(e), s = 1; s < arguments.length; s++) {
              for (var c in (o = Object(arguments[s])))
                n.call(o, c) && (i[c] = o[c]);
              if (t) {
                u = t(o);
                for (var f = 0; f < u.length; f++)
                  r.call(o, u[f]) && (i[u[f]] = o[u[f]]);
              }
            }
            return i;
          };
    },
    448: (e, t, n) => {
      "use strict";
      var r = n(294),
        l = n(418),
        a = n(840);
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
      var f = !(
          "undefined" == typeof window ||
          void 0 === window.document ||
          void 0 === window.document.createElement
        ),
        d =
          /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        p = Object.prototype.hasOwnProperty,
        m = {},
        h = {};
      function v(e, t, n, r, l, a, o) {
        (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
          (this.attributeName = r),
          (this.attributeNamespace = l),
          (this.mustUseProperty = n),
          (this.propertyName = e),
          (this.type = t),
          (this.sanitizeURL = a),
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
      var y = /[\-:]([a-z])/g;
      function b(e) {
        return e[1].toUpperCase();
      }
      function w(e, t, n, r) {
        var l = g.hasOwnProperty(t) ? g[t] : null;
        (null !== l
          ? 0 === l.type
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
          })(t, n, l, r) && (n = null),
          r || null === l
            ? (function (e) {
                return (
                  !!p.call(h, e) ||
                  (!p.call(m, e) &&
                    (d.test(e) ? (h[e] = !0) : ((m[e] = !0), !1)))
                );
              })(t) &&
              (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : l.mustUseProperty
            ? (e[l.propertyName] = null === n ? 3 !== l.type && "" : n)
            : ((t = l.attributeName),
              (r = l.attributeNamespace),
              null === n
                ? e.removeAttribute(t)
                : ((n =
                    3 === (l = l.type) || (4 === l && !0 === n) ? "" : "" + n),
                  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
        .split(" ")
        .forEach(function (e) {
          var t = e.replace(y, b);
          g[t] = new v(t, 1, !1, e, null, !1, !1);
        }),
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(y, b);
            g[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
          }),
        ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
          var t = e.replace(y, b);
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
      var k = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        E = 60103,
        S = 60106,
        _ = 60107,
        x = 60108,
        C = 60114,
        N = 60109,
        P = 60110,
        T = 60112,
        z = 60113,
        L = 60120,
        O = 60115,
        M = 60116,
        D = 60121,
        R = 60128,
        F = 60129,
        I = 60130,
        U = 60131;
      if ("function" == typeof Symbol && Symbol.for) {
        var j = Symbol.for;
        (E = j("react.element")),
          (S = j("react.portal")),
          (_ = j("react.fragment")),
          (x = j("react.strict_mode")),
          (C = j("react.profiler")),
          (N = j("react.provider")),
          (P = j("react.context")),
          (T = j("react.forward_ref")),
          (z = j("react.suspense")),
          (L = j("react.suspense_list")),
          (O = j("react.memo")),
          (M = j("react.lazy")),
          (D = j("react.block")),
          j("react.scope"),
          (R = j("react.opaque.id")),
          (F = j("react.debug_trace_mode")),
          (I = j("react.offscreen")),
          (U = j("react.legacy_hidden"));
      }
      var A,
        Q = "function" == typeof Symbol && Symbol.iterator;
      function V(e) {
        return null === e || "object" != typeof e
          ? null
          : "function" == typeof (e = (Q && e[Q]) || e["@@iterator"])
          ? e
          : null;
      }
      function $(e) {
        if (void 0 === A)
          try {
            throw Error();
          } catch (e) {
            var t = e.stack.trim().match(/\n( *(at )?)/);
            A = (t && t[1]) || "";
          }
        return "\n" + A + e;
      }
      var B = !1;
      function H(e, t) {
        if (!e || B) return "";
        B = !0;
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
              var l = e.stack.split("\n"),
                a = r.stack.split("\n"),
                o = l.length - 1,
                u = a.length - 1;
              1 <= o && 0 <= u && l[o] !== a[u];

            )
              u--;
            for (; 1 <= o && 0 <= u; o--, u--)
              if (l[o] !== a[u]) {
                if (1 !== o || 1 !== u)
                  do {
                    if ((o--, 0 > --u || l[o] !== a[u]))
                      return "\n" + l[o].replace(" at new ", " at ");
                  } while (1 <= o && 0 <= u);
                break;
              }
          }
        } finally {
          (B = !1), (Error.prepareStackTrace = n);
        }
        return (e = e ? e.displayName || e.name : "") ? $(e) : "";
      }
      function W(e) {
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
            return H(e.type, !1);
          case 11:
            return H(e.type.render, !1);
          case 22:
            return H(e.type._render, !1);
          case 1:
            return H(e.type, !0);
          default:
            return "";
        }
      }
      function q(e) {
        if (null == e) return null;
        if ("function" == typeof e) return e.displayName || e.name || null;
        if ("string" == typeof e) return e;
        switch (e) {
          case _:
            return "Fragment";
          case S:
            return "Portal";
          case C:
            return "Profiler";
          case x:
            return "StrictMode";
          case z:
            return "Suspense";
          case L:
            return "SuspenseList";
        }
        if ("object" == typeof e)
          switch (e.$$typeof) {
            case P:
              return (e.displayName || "Context") + ".Consumer";
            case N:
              return (e._context.displayName || "Context") + ".Provider";
            case T:
              var t = e.render;
              return (
                (t = t.displayName || t.name || ""),
                e.displayName ||
                  ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
              );
            case O:
              return q(e.type);
            case D:
              return q(e._render);
            case M:
              (t = e._payload), (e = e._init);
              try {
                return q(e(t));
              } catch (e) {}
          }
        return null;
      }
      function Y(e) {
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
      function X(e) {
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
              var l = n.get,
                a = n.set;
              return (
                Object.defineProperty(e, t, {
                  configurable: !0,
                  get: function () {
                    return l.call(this);
                  },
                  set: function (e) {
                    (r = "" + e), a.call(this, e);
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
      function G(e) {
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
      function Z(e) {
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
      function J(e, t) {
        var n = t.checked;
        return l({}, t, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: null != n ? n : e._wrapperState.initialChecked,
        });
      }
      function ee(e, t) {
        var n = null == t.defaultValue ? "" : t.defaultValue,
          r = null != t.checked ? t.checked : t.defaultChecked;
        (n = Y(null != t.value ? t.value : n)),
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
        null != (t = t.checked) && w(e, "checked", t, !1);
      }
      function ne(e, t) {
        te(e, t);
        var n = Y(t.value),
          r = t.type;
        if (null != n)
          "number" === r
            ? ((0 === n && "" === e.value) || e.value != n) &&
              (e.value = "" + n)
            : e.value !== "" + n && (e.value = "" + n);
        else if ("submit" === r || "reset" === r)
          return void e.removeAttribute("value");
        t.hasOwnProperty("value")
          ? le(e, t.type, n)
          : t.hasOwnProperty("defaultValue") &&
            le(e, t.type, Y(t.defaultValue)),
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
      function le(e, t, n) {
        ("number" === t && Z(e.ownerDocument) === e) ||
          (null == n
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
      }
      function ae(e, t) {
        return (
          (e = l({ children: void 0 }, t)),
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
          for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
          for (n = 0; n < e.length; n++)
            (l = t.hasOwnProperty("$" + e[n].value)),
              e[n].selected !== l && (e[n].selected = l),
              l && r && (e[n].defaultSelected = !0);
        } else {
          for (n = "" + Y(n), t = null, l = 0; l < e.length; l++) {
            if (e[l].value === n)
              return (
                (e[l].selected = !0), void (r && (e[l].defaultSelected = !0))
              );
            null !== t || e[l].disabled || (t = e[l]);
          }
          null !== t && (t.selected = !0);
        }
      }
      function ue(e, t) {
        if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
        return l({}, t, {
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
        e._wrapperState = { initialValue: Y(n) };
      }
      function se(e, t) {
        var n = Y(t.value),
          r = Y(t.defaultValue);
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
      var fe = "http://www.w3.org/1999/xhtml";
      function de(e) {
        switch (e) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function pe(e, t) {
        return null == e || "http://www.w3.org/1999/xhtml" === e
          ? de(t)
          : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
          ? "http://www.w3.org/1999/xhtml"
          : e;
      }
      var me,
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
                (me = me || document.createElement("div")).innerHTML =
                  "<svg>" + t.valueOf().toString() + "</svg>",
                  t = me.firstChild;
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
      var ye = {
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
        be = ["Webkit", "ms", "Moz", "O"];
      function we(e, t, n) {
        return null == t || "boolean" == typeof t || "" === t
          ? ""
          : n ||
            "number" != typeof t ||
            0 === t ||
            (ye.hasOwnProperty(e) && ye[e])
          ? ("" + t).trim()
          : t + "px";
      }
      function ke(e, t) {
        for (var n in ((e = e.style), t))
          if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf("--"),
              l = we(n, t[n], r);
            "float" === n && (n = "cssFloat"),
              r ? e.setProperty(n, l) : (e[n] = l);
          }
      }
      Object.keys(ye).forEach(function (e) {
        be.forEach(function (t) {
          (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ye[t] = ye[e]);
        });
      });
      var Ee = l(
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
      function Se(e, t) {
        if (t) {
          if (
            Ee[e] &&
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
      function _e(e, t) {
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
      function xe(e) {
        return (
          (e = e.target || e.srcElement || window).correspondingUseElement &&
            (e = e.correspondingUseElement),
          3 === e.nodeType ? e.parentNode : e
        );
      }
      var Ce = null,
        Ne = null,
        Pe = null;
      function Te(e) {
        if ((e = Jr(e))) {
          if ("function" != typeof Ce) throw Error(o(280));
          var t = e.stateNode;
          t && ((t = tl(t)), Ce(e.stateNode, e.type, t));
        }
      }
      function ze(e) {
        Ne ? (Pe ? Pe.push(e) : (Pe = [e])) : (Ne = e);
      }
      function Le() {
        if (Ne) {
          var e = Ne,
            t = Pe;
          if (((Pe = Ne = null), Te(e), t))
            for (e = 0; e < t.length; e++) Te(t[e]);
        }
      }
      function Oe(e, t) {
        return e(t);
      }
      function Me(e, t, n, r, l) {
        return e(t, n, r, l);
      }
      function De() {}
      var Re = Oe,
        Fe = !1,
        Ie = !1;
      function Ue() {
        (null === Ne && null === Pe) || (De(), Le());
      }
      function je(e, t) {
        var n = e.stateNode;
        if (null === n) return null;
        var r = tl(n);
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
      var Ae = !1;
      if (f)
        try {
          var Qe = {};
          Object.defineProperty(Qe, "passive", {
            get: function () {
              Ae = !0;
            },
          }),
            window.addEventListener("test", Qe, Qe),
            window.removeEventListener("test", Qe, Qe);
        } catch (he) {
          Ae = !1;
        }
      function Ve(e, t, n, r, l, a, o, u, i) {
        var s = Array.prototype.slice.call(arguments, 3);
        try {
          t.apply(n, s);
        } catch (e) {
          this.onError(e);
        }
      }
      var $e = !1,
        Be = null,
        He = !1,
        We = null,
        qe = {
          onError: function (e) {
            ($e = !0), (Be = e);
          },
        };
      function Ye(e, t, n, r, l, a, o, u, i) {
        ($e = !1), (Be = null), Ve.apply(qe, arguments);
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
      function Xe(e) {
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
      function Ge(e) {
        if (Ke(e) !== e) throw Error(o(188));
      }
      function Ze(e) {
        if (
          !(e = (function (e) {
            var t = e.alternate;
            if (!t) {
              if (null === (t = Ke(e))) throw Error(o(188));
              return t !== e ? null : e;
            }
            for (var n = e, r = t; ; ) {
              var l = n.return;
              if (null === l) break;
              var a = l.alternate;
              if (null === a) {
                if (null !== (r = l.return)) {
                  n = r;
                  continue;
                }
                break;
              }
              if (l.child === a.child) {
                for (a = l.child; a; ) {
                  if (a === n) return Ge(l), e;
                  if (a === r) return Ge(l), t;
                  a = a.sibling;
                }
                throw Error(o(188));
              }
              if (n.return !== r.return) (n = l), (r = a);
              else {
                for (var u = !1, i = l.child; i; ) {
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
                if (!u) {
                  for (i = a.child; i; ) {
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
      function Je(e, t) {
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
        lt = !1,
        at = [],
        ot = null,
        ut = null,
        it = null,
        st = new Map(),
        ct = new Map(),
        ft = [],
        dt =
          "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " "
          );
      function pt(e, t, n, r, l) {
        return {
          blockedOn: e,
          domEventName: t,
          eventSystemFlags: 16 | n,
          nativeEvent: l,
          targetContainers: [r],
        };
      }
      function mt(e, t) {
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
      function ht(e, t, n, r, l, a) {
        return null === e || e.nativeEvent !== a
          ? ((e = pt(t, n, r, l, a)),
            null !== t && null !== (t = Jr(t)) && tt(t),
            e)
          : ((e.eventSystemFlags |= r),
            (t = e.targetContainers),
            null !== l && -1 === t.indexOf(l) && t.push(l),
            e);
      }
      function vt(e) {
        var t = Zr(e.target);
        if (null !== t) {
          var n = Ke(t);
          if (null !== n)
            if (13 === (t = n.tag)) {
              if (null !== (t = Xe(n)))
                return (
                  (e.blockedOn = t),
                  void rt(e.lanePriority, function () {
                    a.unstable_runWithPriority(e.priority, function () {
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
          var n = Zt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
          if (null !== n)
            return null !== (t = Jr(n)) && tt(t), (e.blockedOn = n), !1;
          t.shift();
        }
        return !0;
      }
      function yt(e, t, n) {
        gt(e) && n.delete(t);
      }
      function bt() {
        for (lt = !1; 0 < at.length; ) {
          var e = at[0];
          if (null !== e.blockedOn) {
            null !== (e = Jr(e.blockedOn)) && et(e);
            break;
          }
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Zt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n) {
              e.blockedOn = n;
              break;
            }
            t.shift();
          }
          null === e.blockedOn && at.shift();
        }
        null !== ot && gt(ot) && (ot = null),
          null !== ut && gt(ut) && (ut = null),
          null !== it && gt(it) && (it = null),
          st.forEach(yt),
          ct.forEach(yt);
      }
      function wt(e, t) {
        e.blockedOn === t &&
          ((e.blockedOn = null),
          lt ||
            ((lt = !0),
            a.unstable_scheduleCallback(a.unstable_NormalPriority, bt)));
      }
      function kt(e) {
        function t(t) {
          return wt(t, e);
        }
        if (0 < at.length) {
          wt(at[0], e);
          for (var n = 1; n < at.length; n++) {
            var r = at[n];
            r.blockedOn === e && (r.blockedOn = null);
          }
        }
        for (
          null !== ot && wt(ot, e),
            null !== ut && wt(ut, e),
            null !== it && wt(it, e),
            st.forEach(t),
            ct.forEach(t),
            n = 0;
          n < ft.length;
          n++
        )
          (r = ft[n]).blockedOn === e && (r.blockedOn = null);
        for (; 0 < ft.length && null === (n = ft[0]).blockedOn; )
          vt(n), null === n.blockedOn && ft.shift();
      }
      function Et(e, t) {
        var n = {};
        return (
          (n[e.toLowerCase()] = t.toLowerCase()),
          (n["Webkit" + e] = "webkit" + t),
          (n["Moz" + e] = "moz" + t),
          n
        );
      }
      var St = {
          animationend: Et("Animation", "AnimationEnd"),
          animationiteration: Et("Animation", "AnimationIteration"),
          animationstart: Et("Animation", "AnimationStart"),
          transitionend: Et("Transition", "TransitionEnd"),
        },
        _t = {},
        xt = {};
      function Ct(e) {
        if (_t[e]) return _t[e];
        if (!St[e]) return e;
        var t,
          n = St[e];
        for (t in n) if (n.hasOwnProperty(t) && t in xt) return (_t[e] = n[t]);
        return e;
      }
      f &&
        ((xt = document.createElement("div").style),
        "AnimationEvent" in window ||
          (delete St.animationend.animation,
          delete St.animationiteration.animation,
          delete St.animationstart.animation),
        "TransitionEvent" in window || delete St.transitionend.transition);
      var Nt = Ct("animationend"),
        Pt = Ct("animationiteration"),
        Tt = Ct("animationstart"),
        zt = Ct("transitionend"),
        Lt = new Map(),
        Ot = new Map(),
        Mt = [
          "abort",
          "abort",
          Nt,
          "animationEnd",
          Pt,
          "animationIteration",
          Tt,
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
          zt,
          "transitionEnd",
          "waiting",
          "waiting",
        ];
      function Dt(e, t) {
        for (var n = 0; n < e.length; n += 2) {
          var r = e[n],
            l = e[n + 1];
          (l = "on" + (l[0].toUpperCase() + l.slice(1))),
            Ot.set(r, t),
            Lt.set(r, l),
            s(l, [r]);
        }
      }
      (0, a.unstable_now)();
      var Rt = 8;
      function Ft(e) {
        if (0 != (1 & e)) return (Rt = 15), 1;
        if (0 != (2 & e)) return (Rt = 14), 2;
        if (0 != (4 & e)) return (Rt = 13), 4;
        var t = 24 & e;
        return 0 !== t
          ? ((Rt = 12), t)
          : 0 != (32 & e)
          ? ((Rt = 11), 32)
          : 0 != (t = 192 & e)
          ? ((Rt = 10), t)
          : 0 != (256 & e)
          ? ((Rt = 9), 256)
          : 0 != (t = 3584 & e)
          ? ((Rt = 8), t)
          : 0 != (4096 & e)
          ? ((Rt = 7), 4096)
          : 0 != (t = 4186112 & e)
          ? ((Rt = 6), t)
          : 0 != (t = 62914560 & e)
          ? ((Rt = 5), t)
          : 67108864 & e
          ? ((Rt = 4), 67108864)
          : 0 != (134217728 & e)
          ? ((Rt = 3), 134217728)
          : 0 != (t = 805306368 & e)
          ? ((Rt = 2), t)
          : 0 != (1073741824 & e)
          ? ((Rt = 1), 1073741824)
          : ((Rt = 8), e);
      }
      function It(e, t) {
        var n = e.pendingLanes;
        if (0 === n) return (Rt = 0);
        var r = 0,
          l = 0,
          a = e.expiredLanes,
          o = e.suspendedLanes,
          u = e.pingedLanes;
        if (0 !== a) (r = a), (l = Rt = 15);
        else if (0 != (a = 134217727 & n)) {
          var i = a & ~o;
          0 !== i
            ? ((r = Ft(i)), (l = Rt))
            : 0 != (u &= a) && ((r = Ft(u)), (l = Rt));
        } else
          0 != (a = n & ~o)
            ? ((r = Ft(a)), (l = Rt))
            : 0 !== u && ((r = Ft(u)), (l = Rt));
        if (0 === r) return 0;
        if (
          ((r = n & (((0 > (r = 31 - $t(r)) ? 0 : 1 << r) << 1) - 1)),
          0 !== t && t !== r && 0 == (t & o))
        ) {
          if ((Ft(t), l <= Rt)) return t;
          Rt = l;
        }
        if (0 !== (t = e.entangledLanes))
          for (e = e.entanglements, t &= r; 0 < t; )
            (l = 1 << (n = 31 - $t(t))), (r |= e[n]), (t &= ~l);
        return r;
      }
      function Ut(e) {
        return 0 != (e = -1073741825 & e.pendingLanes)
          ? e
          : 1073741824 & e
          ? 1073741824
          : 0;
      }
      function jt(e, t) {
        switch (e) {
          case 15:
            return 1;
          case 14:
            return 2;
          case 12:
            return 0 === (e = At(24 & ~t)) ? jt(10, t) : e;
          case 10:
            return 0 === (e = At(192 & ~t)) ? jt(8, t) : e;
          case 8:
            return (
              0 === (e = At(3584 & ~t)) &&
                0 === (e = At(4186112 & ~t)) &&
                (e = 512),
              e
            );
          case 2:
            return 0 === (t = At(805306368 & ~t)) && (t = 268435456), t;
        }
        throw Error(o(358, e));
      }
      function At(e) {
        return e & -e;
      }
      function Qt(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t;
      }
      function Vt(e, t, n) {
        e.pendingLanes |= t;
        var r = t - 1;
        (e.suspendedLanes &= r),
          (e.pingedLanes &= r),
          ((e = e.eventTimes)[(t = 31 - $t(t))] = n);
      }
      var $t = Math.clz32
          ? Math.clz32
          : function (e) {
              return 0 === e ? 32 : (31 - ((Bt(e) / Ht) | 0)) | 0;
            },
        Bt = Math.log,
        Ht = Math.LN2,
        Wt = a.unstable_UserBlockingPriority,
        qt = a.unstable_runWithPriority,
        Yt = !0;
      function Kt(e, t, n, r) {
        Fe || De();
        var l = Gt,
          a = Fe;
        Fe = !0;
        try {
          Me(l, e, t, n, r);
        } finally {
          (Fe = a) || Ue();
        }
      }
      function Xt(e, t, n, r) {
        qt(Wt, Gt.bind(null, e, t, n, r));
      }
      function Gt(e, t, n, r) {
        var l;
        if (Yt)
          if ((l = 0 == (4 & t)) && 0 < at.length && -1 < dt.indexOf(e))
            (e = pt(null, e, t, n, r)), at.push(e);
          else {
            var a = Zt(e, t, n, r);
            if (null === a) l && mt(e, r);
            else {
              if (l) {
                if (-1 < dt.indexOf(e))
                  return (e = pt(a, e, t, n, r)), void at.push(e);
                if (
                  (function (e, t, n, r, l) {
                    switch (t) {
                      case "focusin":
                        return (ot = ht(ot, e, t, n, r, l)), !0;
                      case "dragenter":
                        return (ut = ht(ut, e, t, n, r, l)), !0;
                      case "mouseover":
                        return (it = ht(it, e, t, n, r, l)), !0;
                      case "pointerover":
                        var a = l.pointerId;
                        return (
                          st.set(a, ht(st.get(a) || null, e, t, n, r, l)), !0
                        );
                      case "gotpointercapture":
                        return (
                          (a = l.pointerId),
                          ct.set(a, ht(ct.get(a) || null, e, t, n, r, l)),
                          !0
                        );
                    }
                    return !1;
                  })(a, e, t, n, r)
                )
                  return;
                mt(e, r);
              }
              Lr(e, t, r, null, n);
            }
          }
      }
      function Zt(e, t, n, r) {
        var l = xe(r);
        if (null !== (l = Zr(l))) {
          var a = Ke(l);
          if (null === a) l = null;
          else {
            var o = a.tag;
            if (13 === o) {
              if (null !== (l = Xe(a))) return l;
              l = null;
            } else if (3 === o) {
              if (a.stateNode.hydrate)
                return 3 === a.tag ? a.stateNode.containerInfo : null;
              l = null;
            } else a !== l && (l = null);
          }
        }
        return Lr(e, t, r, l, n), null;
      }
      var Jt = null,
        en = null,
        tn = null;
      function nn() {
        if (tn) return tn;
        var e,
          t,
          n = en,
          r = n.length,
          l = "value" in Jt ? Jt.value : Jt.textContent,
          a = l.length;
        for (e = 0; e < r && n[e] === l[e]; e++);
        var o = r - e;
        for (t = 1; t <= o && n[r - t] === l[a - t]; t++);
        return (tn = l.slice(e, 1 < t ? 1 - t : void 0));
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
      function ln() {
        return !0;
      }
      function an() {
        return !1;
      }
      function on(e) {
        function t(t, n, r, l, a) {
          for (var o in ((this._reactName = t),
          (this._targetInst = r),
          (this.type = n),
          (this.nativeEvent = l),
          (this.target = a),
          (this.currentTarget = null),
          e))
            e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(l) : l[o]));
          return (
            (this.isDefaultPrevented = (
              null != l.defaultPrevented
                ? l.defaultPrevented
                : !1 === l.returnValue
            )
              ? ln
              : an),
            (this.isPropagationStopped = an),
            this
          );
        }
        return (
          l(t.prototype, {
            preventDefault: function () {
              this.defaultPrevented = !0;
              var e = this.nativeEvent;
              e &&
                (e.preventDefault
                  ? e.preventDefault()
                  : "unknown" != typeof e.returnValue && (e.returnValue = !1),
                (this.isDefaultPrevented = ln));
            },
            stopPropagation: function () {
              var e = this.nativeEvent;
              e &&
                (e.stopPropagation
                  ? e.stopPropagation()
                  : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
                (this.isPropagationStopped = ln));
            },
            persist: function () {},
            isPersistent: ln,
          }),
          t
        );
      }
      var un,
        sn,
        cn,
        fn = {
          eventPhase: 0,
          bubbles: 0,
          cancelable: 0,
          timeStamp: function (e) {
            return e.timeStamp || Date.now();
          },
          defaultPrevented: 0,
          isTrusted: 0,
        },
        dn = on(fn),
        pn = l({}, fn, { view: 0, detail: 0 }),
        mn = on(pn),
        hn = l({}, pn, {
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
          getModifierState: Cn,
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
        gn = on(l({}, hn, { dataTransfer: 0 })),
        yn = on(l({}, pn, { relatedTarget: 0 })),
        bn = on(
          l({}, fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
        ),
        wn = on(
          l({}, fn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          })
        ),
        kn = on(l({}, fn, { data: 0 })),
        En = {
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
        Sn = {
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
        _n = {
          Alt: "altKey",
          Control: "ctrlKey",
          Meta: "metaKey",
          Shift: "shiftKey",
        };
      function xn(e) {
        var t = this.nativeEvent;
        return t.getModifierState
          ? t.getModifierState(e)
          : !!(e = _n[e]) && !!t[e];
      }
      function Cn() {
        return xn;
      }
      var Nn = on(
          l({}, pn, {
            key: function (e) {
              if (e.key) {
                var t = En[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = rn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? Sn[e.keyCode] || "Unidentified"
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
            getModifierState: Cn,
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
        Pn = on(
          l({}, hn, {
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
        Tn = on(
          l({}, pn, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Cn,
          })
        ),
        zn = on(
          l({}, fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
        ),
        Ln = on(
          l({}, hn, {
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
        On = [9, 13, 27, 32],
        Mn = f && "CompositionEvent" in window,
        Dn = null;
      f && "documentMode" in document && (Dn = document.documentMode);
      var Rn = f && "TextEvent" in window && !Dn,
        Fn = f && (!Mn || (Dn && 8 < Dn && 11 >= Dn)),
        In = String.fromCharCode(32),
        Un = !1;
      function jn(e, t) {
        switch (e) {
          case "keyup":
            return -1 !== On.indexOf(t.keyCode);
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
      function An(e) {
        return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
      }
      var Qn = !1,
        Vn = {
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
        return "input" === t ? !!Vn[e.type] : "textarea" === t;
      }
      function Bn(e, t, n, r) {
        ze(r),
          0 < (t = Mr(t, "onChange")).length &&
            ((n = new dn("onChange", "change", null, n, r)),
            e.push({ event: n, listeners: t }));
      }
      var Hn = null,
        Wn = null;
      function qn(e) {
        xr(e, 0);
      }
      function Yn(e) {
        if (G(el(e))) return e;
      }
      function Kn(e, t) {
        if ("change" === e) return t;
      }
      var Xn = !1;
      if (f) {
        var Gn;
        if (f) {
          var Zn = "oninput" in document;
          if (!Zn) {
            var Jn = document.createElement("div");
            Jn.setAttribute("oninput", "return;"),
              (Zn = "function" == typeof Jn.oninput);
          }
          Gn = Zn;
        } else Gn = !1;
        Xn = Gn && (!document.documentMode || 9 < document.documentMode);
      }
      function er() {
        Hn && (Hn.detachEvent("onpropertychange", tr), (Wn = Hn = null));
      }
      function tr(e) {
        if ("value" === e.propertyName && Yn(Wn)) {
          var t = [];
          if ((Bn(t, Wn, e, xe(e)), (e = qn), Fe)) e(t);
          else {
            Fe = !0;
            try {
              Oe(e, t);
            } finally {
              (Fe = !1), Ue();
            }
          }
        }
      }
      function nr(e, t, n) {
        "focusin" === e
          ? (er(), (Wn = n), (Hn = t).attachEvent("onpropertychange", tr))
          : "focusout" === e && er();
      }
      function rr(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e)
          return Yn(Wn);
      }
      function lr(e, t) {
        if ("click" === e) return Yn(t);
      }
      function ar(e, t) {
        if ("input" === e || "change" === e) return Yn(t);
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
      function fr(e, t) {
        return (
          !(!e || !t) &&
          (e === t ||
            ((!e || 3 !== e.nodeType) &&
              (t && 3 === t.nodeType
                ? fr(e, t.parentNode)
                : "contains" in e
                ? e.contains(t)
                : !!e.compareDocumentPosition &&
                  !!(16 & e.compareDocumentPosition(t)))))
        );
      }
      function dr() {
        for (var e = window, t = Z(); t instanceof e.HTMLIFrameElement; ) {
          try {
            var n = "string" == typeof t.contentWindow.location.href;
          } catch (e) {
            n = !1;
          }
          if (!n) break;
          t = Z((e = t.contentWindow).document);
        }
        return t;
      }
      function pr(e) {
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
      var mr = f && "documentMode" in document && 11 >= document.documentMode,
        hr = null,
        vr = null,
        gr = null,
        yr = !1;
      function br(e, t, n) {
        var r =
          n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
        yr ||
          null == hr ||
          hr !== Z(r) ||
          ((r =
            "selectionStart" in (r = hr) && pr(r)
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
            0 < (r = Mr(vr, "onSelect")).length &&
              ((t = new dn("onSelect", "select", null, t, n)),
              e.push({ event: t, listeners: r }),
              (t.target = hr))));
      }
      Dt(
        "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
          " "
        ),
        0
      ),
        Dt(
          "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
            " "
          ),
          1
        ),
        Dt(Mt, 2);
      for (
        var wr =
            "change selectionchange textInput compositionstart compositionend compositionupdate".split(
              " "
            ),
          kr = 0;
        kr < wr.length;
        kr++
      )
        Ot.set(wr[kr], 0);
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
      var Er =
          "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
          ),
        Sr = new Set(
          "cancel close invalid load scroll toggle".split(" ").concat(Er)
        );
      function _r(e, t, n) {
        var r = e.type || "unknown-event";
        (e.currentTarget = n),
          (function (e, t, n, r, l, a, u, i, s) {
            if ((Ye.apply(this, arguments), $e)) {
              if (!$e) throw Error(o(198));
              var c = Be;
              ($e = !1), (Be = null), He || ((He = !0), (We = c));
            }
          })(r, t, void 0, e),
          (e.currentTarget = null);
      }
      function xr(e, t) {
        t = 0 != (4 & t);
        for (var n = 0; n < e.length; n++) {
          var r = e[n],
            l = r.event;
          r = r.listeners;
          e: {
            var a = void 0;
            if (t)
              for (var o = r.length - 1; 0 <= o; o--) {
                var u = r[o],
                  i = u.instance,
                  s = u.currentTarget;
                if (((u = u.listener), i !== a && l.isPropagationStopped()))
                  break e;
                _r(l, u, s), (a = i);
              }
            else
              for (o = 0; o < r.length; o++) {
                if (
                  ((i = (u = r[o]).instance),
                  (s = u.currentTarget),
                  (u = u.listener),
                  i !== a && l.isPropagationStopped())
                )
                  break e;
                _r(l, u, s), (a = i);
              }
          }
        }
        if (He) throw ((e = We), (He = !1), (We = null), e);
      }
      function Cr(e, t) {
        var n = nl(t),
          r = e + "__bubble";
        n.has(r) || (zr(t, e, 2, !1), n.add(r));
      }
      var Nr = "_reactListening" + Math.random().toString(36).slice(2);
      function Pr(e) {
        e[Nr] ||
          ((e[Nr] = !0),
          u.forEach(function (t) {
            Sr.has(t) || Tr(t, !1, e, null), Tr(t, !0, e, null);
          }));
      }
      function Tr(e, t, n, r) {
        var l =
            4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
          a = n;
        if (
          ("selectionchange" === e && 9 !== n.nodeType && (a = n.ownerDocument),
          null !== r && !t && Sr.has(e))
        ) {
          if ("scroll" !== e) return;
          (l |= 2), (a = r);
        }
        var o = nl(a),
          u = e + "__" + (t ? "capture" : "bubble");
        o.has(u) || (t && (l |= 4), zr(a, e, l, t), o.add(u));
      }
      function zr(e, t, n, r) {
        var l = Ot.get(t);
        switch (void 0 === l ? 2 : l) {
          case 0:
            l = Kt;
            break;
          case 1:
            l = Xt;
            break;
          default:
            l = Gt;
        }
        (n = l.bind(null, t, n, e)),
          (l = void 0),
          !Ae ||
            ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
            (l = !0),
          r
            ? void 0 !== l
              ? e.addEventListener(t, n, { capture: !0, passive: l })
              : e.addEventListener(t, n, !0)
            : void 0 !== l
            ? e.addEventListener(t, n, { passive: l })
            : e.addEventListener(t, n, !1);
      }
      function Lr(e, t, n, r, l) {
        var a = r;
        if (0 == (1 & t) && 0 == (2 & t) && null !== r)
          e: for (;;) {
            if (null === r) return;
            var o = r.tag;
            if (3 === o || 4 === o) {
              var u = r.stateNode.containerInfo;
              if (u === l || (8 === u.nodeType && u.parentNode === l)) break;
              if (4 === o)
                for (o = r.return; null !== o; ) {
                  var i = o.tag;
                  if (
                    (3 === i || 4 === i) &&
                    ((i = o.stateNode.containerInfo) === l ||
                      (8 === i.nodeType && i.parentNode === l))
                  )
                    return;
                  o = o.return;
                }
              for (; null !== u; ) {
                if (null === (o = Zr(u))) return;
                if (5 === (i = o.tag) || 6 === i) {
                  r = a = o;
                  continue e;
                }
                u = u.parentNode;
              }
            }
            r = r.return;
          }
        !(function (e, t, n) {
          if (Ie) return e();
          Ie = !0;
          try {
            Re(e, t, n);
          } finally {
            (Ie = !1), Ue();
          }
        })(function () {
          var r = a,
            l = xe(n),
            o = [];
          e: {
            var u = Lt.get(e);
            if (void 0 !== u) {
              var i = dn,
                s = e;
              switch (e) {
                case "keypress":
                  if (0 === rn(n)) break e;
                case "keydown":
                case "keyup":
                  i = Nn;
                  break;
                case "focusin":
                  (s = "focus"), (i = yn);
                  break;
                case "focusout":
                  (s = "blur"), (i = yn);
                  break;
                case "beforeblur":
                case "afterblur":
                  i = yn;
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
                  i = Tn;
                  break;
                case Nt:
                case Pt:
                case Tt:
                  i = bn;
                  break;
                case zt:
                  i = zn;
                  break;
                case "scroll":
                  i = mn;
                  break;
                case "wheel":
                  i = Ln;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  i = wn;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  i = Pn;
              }
              var c = 0 != (4 & t),
                f = !c && "scroll" === e,
                d = c ? (null !== u ? u + "Capture" : null) : u;
              c = [];
              for (var p, m = r; null !== m; ) {
                var h = (p = m).stateNode;
                if (
                  (5 === p.tag &&
                    null !== h &&
                    ((p = h),
                    null !== d &&
                      null != (h = je(m, d)) &&
                      c.push(Or(m, h, p))),
                  f)
                )
                  break;
                m = m.return;
              }
              0 < c.length &&
                ((u = new i(u, s, null, n, l)),
                o.push({ event: u, listeners: c }));
            }
          }
          if (0 == (7 & t)) {
            if (
              ((i = "mouseout" === e || "pointerout" === e),
              (!(u = "mouseover" === e || "pointerover" === e) ||
                0 != (16 & t) ||
                !(s = n.relatedTarget || n.fromElement) ||
                (!Zr(s) && !s[Xr])) &&
                (i || u) &&
                ((u =
                  l.window === l
                    ? l
                    : (u = l.ownerDocument)
                    ? u.defaultView || u.parentWindow
                    : window),
                i
                  ? ((i = r),
                    null !==
                      (s = (s = n.relatedTarget || n.toElement)
                        ? Zr(s)
                        : null) &&
                      (s !== (f = Ke(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                      (s = null))
                  : ((i = null), (s = r)),
                i !== s))
            ) {
              if (
                ((c = vn),
                (h = "onMouseLeave"),
                (d = "onMouseEnter"),
                (m = "mouse"),
                ("pointerout" !== e && "pointerover" !== e) ||
                  ((c = Pn),
                  (h = "onPointerLeave"),
                  (d = "onPointerEnter"),
                  (m = "pointer")),
                (f = null == i ? u : el(i)),
                (p = null == s ? u : el(s)),
                ((u = new c(h, m + "leave", i, n, l)).target = f),
                (u.relatedTarget = p),
                (h = null),
                Zr(l) === r &&
                  (((c = new c(d, m + "enter", s, n, l)).target = p),
                  (c.relatedTarget = f),
                  (h = c)),
                (f = h),
                i && s)
              )
                e: {
                  for (d = s, m = 0, p = c = i; p; p = Dr(p)) m++;
                  for (p = 0, h = d; h; h = Dr(h)) p++;
                  for (; 0 < m - p; ) (c = Dr(c)), m--;
                  for (; 0 < p - m; ) (d = Dr(d)), p--;
                  for (; m--; ) {
                    if (c === d || (null !== d && c === d.alternate)) break e;
                    (c = Dr(c)), (d = Dr(d));
                  }
                  c = null;
                }
              else c = null;
              null !== i && Rr(o, u, i, c, !1),
                null !== s && null !== f && Rr(o, f, s, c, !0);
            }
            if (
              "select" ===
                (i =
                  (u = r ? el(r) : window).nodeName &&
                  u.nodeName.toLowerCase()) ||
              ("input" === i && "file" === u.type)
            )
              var v = Kn;
            else if ($n(u))
              if (Xn) v = ar;
              else {
                v = rr;
                var g = nr;
              }
            else
              (i = u.nodeName) &&
                "input" === i.toLowerCase() &&
                ("checkbox" === u.type || "radio" === u.type) &&
                (v = lr);
            switch (
              (v && (v = v(e, r))
                ? Bn(o, v, n, l)
                : (g && g(e, u, r),
                  "focusout" === e &&
                    (g = u._wrapperState) &&
                    g.controlled &&
                    "number" === u.type &&
                    le(u, "number", u.value)),
              (g = r ? el(r) : window),
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
                yr = !0;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                (yr = !1), br(o, n, l);
                break;
              case "selectionchange":
                if (mr) break;
              case "keydown":
              case "keyup":
                br(o, n, l);
            }
            var y;
            if (Mn)
              e: {
                switch (e) {
                  case "compositionstart":
                    var b = "onCompositionStart";
                    break e;
                  case "compositionend":
                    b = "onCompositionEnd";
                    break e;
                  case "compositionupdate":
                    b = "onCompositionUpdate";
                    break e;
                }
                b = void 0;
              }
            else
              Qn
                ? jn(e, n) && (b = "onCompositionEnd")
                : "keydown" === e &&
                  229 === n.keyCode &&
                  (b = "onCompositionStart");
            b &&
              (Fn &&
                "ko" !== n.locale &&
                (Qn || "onCompositionStart" !== b
                  ? "onCompositionEnd" === b && Qn && (y = nn())
                  : ((en = "value" in (Jt = l) ? Jt.value : Jt.textContent),
                    (Qn = !0))),
              0 < (g = Mr(r, b)).length &&
                ((b = new kn(b, e, null, n, l)),
                o.push({ event: b, listeners: g }),
                (y || null !== (y = An(n))) && (b.data = y))),
              (y = Rn
                ? (function (e, t) {
                    switch (e) {
                      case "compositionend":
                        return An(t);
                      case "keypress":
                        return 32 !== t.which ? null : ((Un = !0), In);
                      case "textInput":
                        return (e = t.data) === In && Un ? null : e;
                      default:
                        return null;
                    }
                  })(e, n)
                : (function (e, t) {
                    if (Qn)
                      return "compositionend" === e || (!Mn && jn(e, t))
                        ? ((e = nn()), (tn = en = Jt = null), (Qn = !1), e)
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
                        return Fn && "ko" !== t.locale ? null : t.data;
                      default:
                        return null;
                    }
                  })(e, n)) &&
                0 < (r = Mr(r, "onBeforeInput")).length &&
                ((l = new kn("onBeforeInput", "beforeinput", null, n, l)),
                o.push({ event: l, listeners: r }),
                (l.data = y));
          }
          xr(o, t);
        });
      }
      function Or(e, t, n) {
        return { instance: e, listener: t, currentTarget: n };
      }
      function Mr(e, t) {
        for (var n = t + "Capture", r = []; null !== e; ) {
          var l = e,
            a = l.stateNode;
          5 === l.tag &&
            null !== a &&
            ((l = a),
            null != (a = je(e, n)) && r.unshift(Or(e, a, l)),
            null != (a = je(e, t)) && r.push(Or(e, a, l))),
            (e = e.return);
        }
        return r;
      }
      function Dr(e) {
        if (null === e) return null;
        do {
          e = e.return;
        } while (e && 5 !== e.tag);
        return e || null;
      }
      function Rr(e, t, n, r, l) {
        for (var a = t._reactName, o = []; null !== n && n !== r; ) {
          var u = n,
            i = u.alternate,
            s = u.stateNode;
          if (null !== i && i === r) break;
          5 === u.tag &&
            null !== s &&
            ((u = s),
            l
              ? null != (i = je(n, a)) && o.unshift(Or(n, i, u))
              : l || (null != (i = je(n, a)) && o.push(Or(n, i, u)))),
            (n = n.return);
        }
        0 !== o.length && e.push({ event: t, listeners: o });
      }
      function Fr() {}
      var Ir = null,
        Ur = null;
      function jr(e, t) {
        switch (e) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            return !!t.autoFocus;
        }
        return !1;
      }
      function Ar(e, t) {
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
      var Qr = "function" == typeof setTimeout ? setTimeout : void 0,
        Vr = "function" == typeof clearTimeout ? clearTimeout : void 0;
      function $r(e) {
        (1 === e.nodeType || (9 === e.nodeType && null != (e = e.body))) &&
          (e.textContent = "");
      }
      function Br(e) {
        for (; null != e; e = e.nextSibling) {
          var t = e.nodeType;
          if (1 === t || 3 === t) break;
        }
        return e;
      }
      function Hr(e) {
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
      var Wr = 0,
        qr = Math.random().toString(36).slice(2),
        Yr = "__reactFiber$" + qr,
        Kr = "__reactProps$" + qr,
        Xr = "__reactContainer$" + qr,
        Gr = "__reactEvents$" + qr;
      function Zr(e) {
        var t = e[Yr];
        if (t) return t;
        for (var n = e.parentNode; n; ) {
          if ((t = n[Xr] || n[Yr])) {
            if (
              ((n = t.alternate),
              null !== t.child || (null !== n && null !== n.child))
            )
              for (e = Hr(e); null !== e; ) {
                if ((n = e[Yr])) return n;
                e = Hr(e);
              }
            return t;
          }
          n = (e = n).parentNode;
        }
        return null;
      }
      function Jr(e) {
        return !(e = e[Yr] || e[Xr]) ||
          (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
          ? null
          : e;
      }
      function el(e) {
        if (5 === e.tag || 6 === e.tag) return e.stateNode;
        throw Error(o(33));
      }
      function tl(e) {
        return e[Kr] || null;
      }
      function nl(e) {
        var t = e[Gr];
        return void 0 === t && (t = e[Gr] = new Set()), t;
      }
      var rl = [],
        ll = -1;
      function al(e) {
        return { current: e };
      }
      function ol(e) {
        0 > ll || ((e.current = rl[ll]), (rl[ll] = null), ll--);
      }
      function ul(e, t) {
        ll++, (rl[ll] = e.current), (e.current = t);
      }
      var il = {},
        sl = al(il),
        cl = al(!1),
        fl = il;
      function dl(e, t) {
        var n = e.type.contextTypes;
        if (!n) return il;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
          return r.__reactInternalMemoizedMaskedChildContext;
        var l,
          a = {};
        for (l in n) a[l] = t[l];
        return (
          r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
              t),
            (e.__reactInternalMemoizedMaskedChildContext = a)),
          a
        );
      }
      function pl(e) {
        return null != e.childContextTypes;
      }
      function ml() {
        ol(cl), ol(sl);
      }
      function hl(e, t, n) {
        if (sl.current !== il) throw Error(o(168));
        ul(sl, t), ul(cl, n);
      }
      function vl(e, t, n) {
        var r = e.stateNode;
        if (((e = t.childContextTypes), "function" != typeof r.getChildContext))
          return n;
        for (var a in (r = r.getChildContext()))
          if (!(a in e)) throw Error(o(108, q(t) || "Unknown", a));
        return l({}, n, r);
      }
      function gl(e) {
        return (
          (e =
            ((e = e.stateNode) &&
              e.__reactInternalMemoizedMergedChildContext) ||
            il),
          (fl = sl.current),
          ul(sl, e),
          ul(cl, cl.current),
          !0
        );
      }
      function yl(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(o(169));
        n
          ? ((e = vl(e, t, fl)),
            (r.__reactInternalMemoizedMergedChildContext = e),
            ol(cl),
            ol(sl),
            ul(sl, e))
          : ol(cl),
          ul(cl, n);
      }
      var bl = null,
        wl = null,
        kl = a.unstable_runWithPriority,
        El = a.unstable_scheduleCallback,
        Sl = a.unstable_cancelCallback,
        _l = a.unstable_shouldYield,
        xl = a.unstable_requestPaint,
        Cl = a.unstable_now,
        Nl = a.unstable_getCurrentPriorityLevel,
        Pl = a.unstable_ImmediatePriority,
        Tl = a.unstable_UserBlockingPriority,
        zl = a.unstable_NormalPriority,
        Ll = a.unstable_LowPriority,
        Ol = a.unstable_IdlePriority,
        Ml = {},
        Dl = void 0 !== xl ? xl : function () {},
        Rl = null,
        Fl = null,
        Il = !1,
        Ul = Cl(),
        jl =
          1e4 > Ul
            ? Cl
            : function () {
                return Cl() - Ul;
              };
      function Al() {
        switch (Nl()) {
          case Pl:
            return 99;
          case Tl:
            return 98;
          case zl:
            return 97;
          case Ll:
            return 96;
          case Ol:
            return 95;
          default:
            throw Error(o(332));
        }
      }
      function Ql(e) {
        switch (e) {
          case 99:
            return Pl;
          case 98:
            return Tl;
          case 97:
            return zl;
          case 96:
            return Ll;
          case 95:
            return Ol;
          default:
            throw Error(o(332));
        }
      }
      function Vl(e, t) {
        return (e = Ql(e)), kl(e, t);
      }
      function $l(e, t, n) {
        return (e = Ql(e)), El(e, t, n);
      }
      function Bl() {
        if (null !== Fl) {
          var e = Fl;
          (Fl = null), Sl(e);
        }
        Hl();
      }
      function Hl() {
        if (!Il && null !== Rl) {
          Il = !0;
          var e = 0;
          try {
            var t = Rl;
            Vl(99, function () {
              for (; e < t.length; e++) {
                var n = t[e];
                do {
                  n = n(!0);
                } while (null !== n);
              }
            }),
              (Rl = null);
          } catch (t) {
            throw (null !== Rl && (Rl = Rl.slice(e + 1)), El(Pl, Bl), t);
          } finally {
            Il = !1;
          }
        }
      }
      var Wl = k.ReactCurrentBatchConfig;
      function ql(e, t) {
        if (e && e.defaultProps) {
          for (var n in ((t = l({}, t)), (e = e.defaultProps)))
            void 0 === t[n] && (t[n] = e[n]);
          return t;
        }
        return t;
      }
      var Yl = al(null),
        Kl = null,
        Xl = null,
        Gl = null;
      function Zl() {
        Gl = Xl = Kl = null;
      }
      function Jl(e) {
        var t = Yl.current;
        ol(Yl), (e.type._context._currentValue = t);
      }
      function ea(e, t) {
        for (; null !== e; ) {
          var n = e.alternate;
          if ((e.childLanes & t) === t) {
            if (null === n || (n.childLanes & t) === t) break;
            n.childLanes |= t;
          } else (e.childLanes |= t), null !== n && (n.childLanes |= t);
          e = e.return;
        }
      }
      function ta(e, t) {
        (Kl = e),
          (Gl = Xl = null),
          null !== (e = e.dependencies) &&
            null !== e.firstContext &&
            (0 != (e.lanes & t) && (Mo = !0), (e.firstContext = null));
      }
      function na(e, t) {
        if (Gl !== e && !1 !== t && 0 !== t)
          if (
            (("number" == typeof t && 1073741823 !== t) ||
              ((Gl = e), (t = 1073741823)),
            (t = { context: e, observedBits: t, next: null }),
            null === Xl)
          ) {
            if (null === Kl) throw Error(o(308));
            (Xl = t),
              (Kl.dependencies = {
                lanes: 0,
                firstContext: t,
                responders: null,
              });
          } else Xl = Xl.next = t;
        return e._currentValue;
      }
      var ra = !1;
      function la(e) {
        e.updateQueue = {
          baseState: e.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: { pending: null },
          effects: null,
        };
      }
      function aa(e, t) {
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
      function oa(e, t) {
        return {
          eventTime: e,
          lane: t,
          tag: 0,
          payload: null,
          callback: null,
          next: null,
        };
      }
      function ua(e, t) {
        if (null !== (e = e.updateQueue)) {
          var n = (e = e.shared).pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
      }
      function ia(e, t) {
        var n = e.updateQueue,
          r = e.alternate;
        if (null !== r && n === (r = r.updateQueue)) {
          var l = null,
            a = null;
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
              null === a ? (l = a = o) : (a = a.next = o), (n = n.next);
            } while (null !== n);
            null === a ? (l = a = t) : (a = a.next = t);
          } else l = a = t;
          return (
            (n = {
              baseState: r.baseState,
              firstBaseUpdate: l,
              lastBaseUpdate: a,
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
      function sa(e, t, n, r) {
        var a = e.updateQueue;
        ra = !1;
        var o = a.firstBaseUpdate,
          u = a.lastBaseUpdate,
          i = a.shared.pending;
        if (null !== i) {
          a.shared.pending = null;
          var s = i,
            c = s.next;
          (s.next = null), null === u ? (o = c) : (u.next = c), (u = s);
          var f = e.alternate;
          if (null !== f) {
            var d = (f = f.updateQueue).lastBaseUpdate;
            d !== u &&
              (null === d ? (f.firstBaseUpdate = c) : (d.next = c),
              (f.lastBaseUpdate = s));
          }
        }
        if (null !== o) {
          for (d = a.baseState, u = 0, f = c = s = null; ; ) {
            i = o.lane;
            var p = o.eventTime;
            if ((r & i) === i) {
              null !== f &&
                (f = f.next =
                  {
                    eventTime: p,
                    lane: 0,
                    tag: o.tag,
                    payload: o.payload,
                    callback: o.callback,
                    next: null,
                  });
              e: {
                var m = e,
                  h = o;
                switch (((i = t), (p = n), h.tag)) {
                  case 1:
                    if ("function" == typeof (m = h.payload)) {
                      d = m.call(p, d, i);
                      break e;
                    }
                    d = m;
                    break e;
                  case 3:
                    m.flags = (-4097 & m.flags) | 64;
                  case 0:
                    if (
                      null ==
                      (i =
                        "function" == typeof (m = h.payload)
                          ? m.call(p, d, i)
                          : m)
                    )
                      break e;
                    d = l({}, d, i);
                    break e;
                  case 2:
                    ra = !0;
                }
              }
              null !== o.callback &&
                ((e.flags |= 32),
                null === (i = a.effects) ? (a.effects = [o]) : i.push(o));
            } else
              (p = {
                eventTime: p,
                lane: i,
                tag: o.tag,
                payload: o.payload,
                callback: o.callback,
                next: null,
              }),
                null === f ? ((c = f = p), (s = d)) : (f = f.next = p),
                (u |= i);
            if (null === (o = o.next)) {
              if (null === (i = a.shared.pending)) break;
              (o = i.next),
                (i.next = null),
                (a.lastBaseUpdate = i),
                (a.shared.pending = null);
            }
          }
          null === f && (s = d),
            (a.baseState = s),
            (a.firstBaseUpdate = c),
            (a.lastBaseUpdate = f),
            (Ru |= u),
            (e.lanes = u),
            (e.memoizedState = d);
        }
      }
      function ca(e, t, n) {
        if (((e = t.effects), (t.effects = null), null !== e))
          for (t = 0; t < e.length; t++) {
            var r = e[t],
              l = r.callback;
            if (null !== l) {
              if (((r.callback = null), (r = n), "function" != typeof l))
                throw Error(o(191, l));
              l.call(r);
            }
          }
      }
      var fa = new r.Component().refs;
      function da(e, t, n, r) {
        (n = null == (n = n(r, (t = e.memoizedState))) ? t : l({}, t, n)),
          (e.memoizedState = n),
          0 === e.lanes && (e.updateQueue.baseState = n);
      }
      var pa = {
        isMounted: function (e) {
          return !!(e = e._reactInternals) && Ke(e) === e;
        },
        enqueueSetState: function (e, t, n) {
          e = e._reactInternals;
          var r = oi(),
            l = ui(e),
            a = oa(r, l);
          (a.payload = t), null != n && (a.callback = n), ua(e, a), ii(e, l, r);
        },
        enqueueReplaceState: function (e, t, n) {
          e = e._reactInternals;
          var r = oi(),
            l = ui(e),
            a = oa(r, l);
          (a.tag = 1),
            (a.payload = t),
            null != n && (a.callback = n),
            ua(e, a),
            ii(e, l, r);
        },
        enqueueForceUpdate: function (e, t) {
          e = e._reactInternals;
          var n = oi(),
            r = ui(e),
            l = oa(n, r);
          (l.tag = 2), null != t && (l.callback = t), ua(e, l), ii(e, r, n);
        },
      };
      function ma(e, t, n, r, l, a, o) {
        return "function" == typeof (e = e.stateNode).shouldComponentUpdate
          ? e.shouldComponentUpdate(r, a, o)
          : !(
              t.prototype &&
              t.prototype.isPureReactComponent &&
              ir(n, r) &&
              ir(l, a)
            );
      }
      function ha(e, t, n) {
        var r = !1,
          l = il,
          a = t.contextType;
        return (
          "object" == typeof a && null !== a
            ? (a = na(a))
            : ((l = pl(t) ? fl : sl.current),
              (a = (r = null != (r = t.contextTypes)) ? dl(e, l) : il)),
          (t = new t(n, a)),
          (e.memoizedState =
            null !== t.state && void 0 !== t.state ? t.state : null),
          (t.updater = pa),
          (e.stateNode = t),
          (t._reactInternals = e),
          r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
              l),
            (e.__reactInternalMemoizedMaskedChildContext = a)),
          t
        );
      }
      function va(e, t, n, r) {
        (e = t.state),
          "function" == typeof t.componentWillReceiveProps &&
            t.componentWillReceiveProps(n, r),
          "function" == typeof t.UNSAFE_componentWillReceiveProps &&
            t.UNSAFE_componentWillReceiveProps(n, r),
          t.state !== e && pa.enqueueReplaceState(t, t.state, null);
      }
      function ga(e, t, n, r) {
        var l = e.stateNode;
        (l.props = n), (l.state = e.memoizedState), (l.refs = fa), la(e);
        var a = t.contextType;
        "object" == typeof a && null !== a
          ? (l.context = na(a))
          : ((a = pl(t) ? fl : sl.current), (l.context = dl(e, a))),
          sa(e, n, l, r),
          (l.state = e.memoizedState),
          "function" == typeof (a = t.getDerivedStateFromProps) &&
            (da(e, t, a, n), (l.state = e.memoizedState)),
          "function" == typeof t.getDerivedStateFromProps ||
            "function" == typeof l.getSnapshotBeforeUpdate ||
            ("function" != typeof l.UNSAFE_componentWillMount &&
              "function" != typeof l.componentWillMount) ||
            ((t = l.state),
            "function" == typeof l.componentWillMount && l.componentWillMount(),
            "function" == typeof l.UNSAFE_componentWillMount &&
              l.UNSAFE_componentWillMount(),
            t !== l.state && pa.enqueueReplaceState(l, l.state, null),
            sa(e, n, l, r),
            (l.state = e.memoizedState)),
          "function" == typeof l.componentDidMount && (e.flags |= 4);
      }
      var ya = Array.isArray;
      function ba(e, t, n) {
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
            var l = "" + e;
            return null !== t &&
              null !== t.ref &&
              "function" == typeof t.ref &&
              t.ref._stringRef === l
              ? t.ref
              : (((t = function (e) {
                  var t = r.refs;
                  t === fa && (t = r.refs = {}),
                    null === e ? delete t[l] : (t[l] = e);
                })._stringRef = l),
                t);
          }
          if ("string" != typeof e) throw Error(o(284));
          if (!n._owner) throw Error(o(290, e));
        }
        return e;
      }
      function wa(e, t) {
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
      function ka(e) {
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
        function l(e, t) {
          return ((e = Ai(e, t)).index = 0), (e.sibling = null), e;
        }
        function a(t, n, r) {
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
            ? (((t = Bi(n, e.mode, r)).return = e), t)
            : (((t = l(t, n)).return = e), t);
        }
        function s(e, t, n, r) {
          return null !== t && t.elementType === n.type
            ? (((r = l(t, n.props)).ref = ba(e, t, n)), (r.return = e), r)
            : (((r = Qi(n.type, n.key, n.props, null, e.mode, r)).ref = ba(
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
            ? (((t = Hi(n, e.mode, r)).return = e), t)
            : (((t = l(t, n.children || [])).return = e), t);
        }
        function f(e, t, n, r, a) {
          return null === t || 7 !== t.tag
            ? (((t = Vi(n, e.mode, r, a)).return = e), t)
            : (((t = l(t, n)).return = e), t);
        }
        function d(e, t, n) {
          if ("string" == typeof t || "number" == typeof t)
            return ((t = Bi("" + t, e.mode, n)).return = e), t;
          if ("object" == typeof t && null !== t) {
            switch (t.$$typeof) {
              case E:
                return (
                  ((n = Qi(t.type, t.key, t.props, null, e.mode, n)).ref = ba(
                    e,
                    null,
                    t
                  )),
                  (n.return = e),
                  n
                );
              case S:
                return ((t = Hi(t, e.mode, n)).return = e), t;
            }
            if (ya(t) || V(t))
              return ((t = Vi(t, e.mode, n, null)).return = e), t;
            wa(e, t);
          }
          return null;
        }
        function p(e, t, n, r) {
          var l = null !== t ? t.key : null;
          if ("string" == typeof n || "number" == typeof n)
            return null !== l ? null : i(e, t, "" + n, r);
          if ("object" == typeof n && null !== n) {
            switch (n.$$typeof) {
              case E:
                return n.key === l
                  ? n.type === _
                    ? f(e, t, n.props.children, r, l)
                    : s(e, t, n, r)
                  : null;
              case S:
                return n.key === l ? c(e, t, n, r) : null;
            }
            if (ya(n) || V(n)) return null !== l ? null : f(e, t, n, r, null);
            wa(e, n);
          }
          return null;
        }
        function m(e, t, n, r, l) {
          if ("string" == typeof r || "number" == typeof r)
            return i(t, (e = e.get(n) || null), "" + r, l);
          if ("object" == typeof r && null !== r) {
            switch (r.$$typeof) {
              case E:
                return (
                  (e = e.get(null === r.key ? n : r.key) || null),
                  r.type === _
                    ? f(t, e, r.props.children, l, r.key)
                    : s(t, e, r, l)
                );
              case S:
                return c(
                  t,
                  (e = e.get(null === r.key ? n : r.key) || null),
                  r,
                  l
                );
            }
            if (ya(r) || V(r)) return f(t, (e = e.get(n) || null), r, l, null);
            wa(t, r);
          }
          return null;
        }
        function h(l, o, u, i) {
          for (
            var s = null, c = null, f = o, h = (o = 0), v = null;
            null !== f && h < u.length;
            h++
          ) {
            f.index > h ? ((v = f), (f = null)) : (v = f.sibling);
            var g = p(l, f, u[h], i);
            if (null === g) {
              null === f && (f = v);
              break;
            }
            e && f && null === g.alternate && t(l, f),
              (o = a(g, o, h)),
              null === c ? (s = g) : (c.sibling = g),
              (c = g),
              (f = v);
          }
          if (h === u.length) return n(l, f), s;
          if (null === f) {
            for (; h < u.length; h++)
              null !== (f = d(l, u[h], i)) &&
                ((o = a(f, o, h)),
                null === c ? (s = f) : (c.sibling = f),
                (c = f));
            return s;
          }
          for (f = r(l, f); h < u.length; h++)
            null !== (v = m(f, l, h, u[h], i)) &&
              (e &&
                null !== v.alternate &&
                f.delete(null === v.key ? h : v.key),
              (o = a(v, o, h)),
              null === c ? (s = v) : (c.sibling = v),
              (c = v));
          return (
            e &&
              f.forEach(function (e) {
                return t(l, e);
              }),
            s
          );
        }
        function v(l, u, i, s) {
          var c = V(i);
          if ("function" != typeof c) throw Error(o(150));
          if (null == (i = c.call(i))) throw Error(o(151));
          for (
            var f = (c = null), h = u, v = (u = 0), g = null, y = i.next();
            null !== h && !y.done;
            v++, y = i.next()
          ) {
            h.index > v ? ((g = h), (h = null)) : (g = h.sibling);
            var b = p(l, h, y.value, s);
            if (null === b) {
              null === h && (h = g);
              break;
            }
            e && h && null === b.alternate && t(l, h),
              (u = a(b, u, v)),
              null === f ? (c = b) : (f.sibling = b),
              (f = b),
              (h = g);
          }
          if (y.done) return n(l, h), c;
          if (null === h) {
            for (; !y.done; v++, y = i.next())
              null !== (y = d(l, y.value, s)) &&
                ((u = a(y, u, v)),
                null === f ? (c = y) : (f.sibling = y),
                (f = y));
            return c;
          }
          for (h = r(l, h); !y.done; v++, y = i.next())
            null !== (y = m(h, l, v, y.value, s)) &&
              (e &&
                null !== y.alternate &&
                h.delete(null === y.key ? v : y.key),
              (u = a(y, u, v)),
              null === f ? (c = y) : (f.sibling = y),
              (f = y));
          return (
            e &&
              h.forEach(function (e) {
                return t(l, e);
              }),
            c
          );
        }
        return function (e, r, a, i) {
          var s =
            "object" == typeof a &&
            null !== a &&
            a.type === _ &&
            null === a.key;
          s && (a = a.props.children);
          var c = "object" == typeof a && null !== a;
          if (c)
            switch (a.$$typeof) {
              case E:
                e: {
                  for (c = a.key, s = r; null !== s; ) {
                    if (s.key === c) {
                      switch (s.tag) {
                        case 7:
                          if (a.type === _) {
                            n(e, s.sibling),
                              ((r = l(s, a.props.children)).return = e),
                              (e = r);
                            break e;
                          }
                          break;
                        default:
                          if (s.elementType === a.type) {
                            n(e, s.sibling),
                              ((r = l(s, a.props)).ref = ba(e, s, a)),
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
                  a.type === _
                    ? (((r = Vi(a.props.children, e.mode, i, a.key)).return =
                        e),
                      (e = r))
                    : (((i = Qi(a.type, a.key, a.props, null, e.mode, i)).ref =
                        ba(e, r, a)),
                      (i.return = e),
                      (e = i));
                }
                return u(e);
              case S:
                e: {
                  for (s = a.key; null !== r; ) {
                    if (r.key === s) {
                      if (
                        4 === r.tag &&
                        r.stateNode.containerInfo === a.containerInfo &&
                        r.stateNode.implementation === a.implementation
                      ) {
                        n(e, r.sibling),
                          ((r = l(r, a.children || [])).return = e),
                          (e = r);
                        break e;
                      }
                      n(e, r);
                      break;
                    }
                    t(e, r), (r = r.sibling);
                  }
                  ((r = Hi(a, e.mode, i)).return = e), (e = r);
                }
                return u(e);
            }
          if ("string" == typeof a || "number" == typeof a)
            return (
              (a = "" + a),
              null !== r && 6 === r.tag
                ? (n(e, r.sibling), ((r = l(r, a)).return = e), (e = r))
                : (n(e, r), ((r = Bi(a, e.mode, i)).return = e), (e = r)),
              u(e)
            );
          if (ya(a)) return h(e, r, a, i);
          if (V(a)) return v(e, r, a, i);
          if ((c && wa(e, a), void 0 === a && !s))
            switch (e.tag) {
              case 1:
              case 22:
              case 0:
              case 11:
              case 15:
                throw Error(o(152, q(e.type) || "Component"));
            }
          return n(e, r);
        };
      }
      var Ea = ka(!0),
        Sa = ka(!1),
        _a = {},
        xa = al(_a),
        Ca = al(_a),
        Na = al(_a);
      function Pa(e) {
        if (e === _a) throw Error(o(174));
        return e;
      }
      function Ta(e, t) {
        switch ((ul(Na, t), ul(Ca, e), ul(xa, _a), (e = t.nodeType))) {
          case 9:
          case 11:
            t = (t = t.documentElement) ? t.namespaceURI : pe(null, "");
            break;
          default:
            t = pe(
              (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
              (e = e.tagName)
            );
        }
        ol(xa), ul(xa, t);
      }
      function za() {
        ol(xa), ol(Ca), ol(Na);
      }
      function La(e) {
        Pa(Na.current);
        var t = Pa(xa.current),
          n = pe(t, e.type);
        t !== n && (ul(Ca, e), ul(xa, n));
      }
      function Oa(e) {
        Ca.current === e && (ol(xa), ol(Ca));
      }
      var Ma = al(0);
      function Da(e) {
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
      var Ra = null,
        Fa = null,
        Ia = !1;
      function Ua(e, t) {
        var n = Ui(5, null, null, 0);
        (n.elementType = "DELETED"),
          (n.type = "DELETED"),
          (n.stateNode = t),
          (n.return = e),
          (n.flags = 8),
          null !== e.lastEffect
            ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
            : (e.firstEffect = e.lastEffect = n);
      }
      function ja(e, t) {
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
      function Aa(e) {
        if (Ia) {
          var t = Fa;
          if (t) {
            var n = t;
            if (!ja(e, t)) {
              if (!(t = Br(n.nextSibling)) || !ja(e, t))
                return (
                  (e.flags = (-1025 & e.flags) | 2), (Ia = !1), void (Ra = e)
                );
              Ua(Ra, n);
            }
            (Ra = e), (Fa = Br(t.firstChild));
          } else (e.flags = (-1025 & e.flags) | 2), (Ia = !1), (Ra = e);
        }
      }
      function Qa(e) {
        for (
          e = e.return;
          null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

        )
          e = e.return;
        Ra = e;
      }
      function Va(e) {
        if (e !== Ra) return !1;
        if (!Ia) return Qa(e), (Ia = !0), !1;
        var t = e.type;
        if (
          5 !== e.tag ||
          ("head" !== t && "body" !== t && !Ar(t, e.memoizedProps))
        )
          for (t = Fa; t; ) Ua(e, t), (t = Br(t.nextSibling));
        if ((Qa(e), 13 === e.tag)) {
          if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
            throw Error(o(317));
          e: {
            for (e = e.nextSibling, t = 0; e; ) {
              if (8 === e.nodeType) {
                var n = e.data;
                if ("/$" === n) {
                  if (0 === t) {
                    Fa = Br(e.nextSibling);
                    break e;
                  }
                  t--;
                } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
              }
              e = e.nextSibling;
            }
            Fa = null;
          }
        } else Fa = Ra ? Br(e.stateNode.nextSibling) : null;
        return !0;
      }
      function $a() {
        (Fa = Ra = null), (Ia = !1);
      }
      var Ba = [];
      function Ha() {
        for (var e = 0; e < Ba.length; e++)
          Ba[e]._workInProgressVersionPrimary = null;
        Ba.length = 0;
      }
      var Wa = k.ReactCurrentDispatcher,
        qa = k.ReactCurrentBatchConfig,
        Ya = 0,
        Ka = null,
        Xa = null,
        Ga = null,
        Za = !1,
        Ja = !1;
      function eo() {
        throw Error(o(321));
      }
      function to(e, t) {
        if (null === t) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
          if (!or(e[n], t[n])) return !1;
        return !0;
      }
      function no(e, t, n, r, l, a) {
        if (
          ((Ya = a),
          (Ka = t),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.lanes = 0),
          (Wa.current = null === e || null === e.memoizedState ? To : zo),
          (e = n(r, l)),
          Ja)
        ) {
          a = 0;
          do {
            if (((Ja = !1), !(25 > a))) throw Error(o(301));
            (a += 1),
              (Ga = Xa = null),
              (t.updateQueue = null),
              (Wa.current = Lo),
              (e = n(r, l));
          } while (Ja);
        }
        if (
          ((Wa.current = Po),
          (t = null !== Xa && null !== Xa.next),
          (Ya = 0),
          (Ga = Xa = Ka = null),
          (Za = !1),
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
          null === Ga ? (Ka.memoizedState = Ga = e) : (Ga = Ga.next = e), Ga
        );
      }
      function lo() {
        if (null === Xa) {
          var e = Ka.alternate;
          e = null !== e ? e.memoizedState : null;
        } else e = Xa.next;
        var t = null === Ga ? Ka.memoizedState : Ga.next;
        if (null !== t) (Ga = t), (Xa = e);
        else {
          if (null === e) throw Error(o(310));
          (e = {
            memoizedState: (Xa = e).memoizedState,
            baseState: Xa.baseState,
            baseQueue: Xa.baseQueue,
            queue: Xa.queue,
            next: null,
          }),
            null === Ga ? (Ka.memoizedState = Ga = e) : (Ga = Ga.next = e);
        }
        return Ga;
      }
      function ao(e, t) {
        return "function" == typeof t ? t(e) : t;
      }
      function oo(e) {
        var t = lo(),
          n = t.queue;
        if (null === n) throw Error(o(311));
        n.lastRenderedReducer = e;
        var r = Xa,
          l = r.baseQueue,
          a = n.pending;
        if (null !== a) {
          if (null !== l) {
            var u = l.next;
            (l.next = a.next), (a.next = u);
          }
          (r.baseQueue = l = a), (n.pending = null);
        }
        if (null !== l) {
          (l = l.next), (r = r.baseState);
          var i = (u = a = null),
            s = l;
          do {
            var c = s.lane;
            if ((Ya & c) === c)
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
              var f = {
                lane: c,
                action: s.action,
                eagerReducer: s.eagerReducer,
                eagerState: s.eagerState,
                next: null,
              };
              null === i ? ((u = i = f), (a = r)) : (i = i.next = f),
                (Ka.lanes |= c),
                (Ru |= c);
            }
            s = s.next;
          } while (null !== s && s !== l);
          null === i ? (a = r) : (i.next = u),
            or(r, t.memoizedState) || (Mo = !0),
            (t.memoizedState = r),
            (t.baseState = a),
            (t.baseQueue = i),
            (n.lastRenderedState = r);
        }
        return [t.memoizedState, n.dispatch];
      }
      function uo(e) {
        var t = lo(),
          n = t.queue;
        if (null === n) throw Error(o(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch,
          l = n.pending,
          a = t.memoizedState;
        if (null !== l) {
          n.pending = null;
          var u = (l = l.next);
          do {
            (a = e(a, u.action)), (u = u.next);
          } while (u !== l);
          or(a, t.memoizedState) || (Mo = !0),
            (t.memoizedState = a),
            null === t.baseQueue && (t.baseState = a),
            (n.lastRenderedState = a);
        }
        return [a, r];
      }
      function io(e, t, n) {
        var r = t._getVersion;
        r = r(t._source);
        var l = t._workInProgressVersionPrimary;
        if (
          (null !== l
            ? (e = l === r)
            : ((e = e.mutableReadLanes),
              (e = (Ya & e) === e) &&
                ((t._workInProgressVersionPrimary = r), Ba.push(t))),
          e)
        )
          return n(t._source);
        throw (Ba.push(t), Error(o(350)));
      }
      function so(e, t, n, r) {
        var l = Nu;
        if (null === l) throw Error(o(349));
        var a = t._getVersion,
          u = a(t._source),
          i = Wa.current,
          s = i.useState(function () {
            return io(l, t, n);
          }),
          c = s[1],
          f = s[0];
        s = Ga;
        var d = e.memoizedState,
          p = d.refs,
          m = p.getSnapshot,
          h = d.source;
        d = d.subscribe;
        var v = Ka;
        return (
          (e.memoizedState = { refs: p, source: t, subscribe: r }),
          i.useEffect(
            function () {
              (p.getSnapshot = n), (p.setSnapshot = c);
              var e = a(t._source);
              if (!or(u, e)) {
                (e = n(t._source)),
                  or(f, e) ||
                    (c(e),
                    (e = ui(v)),
                    (l.mutableReadLanes |= e & l.pendingLanes)),
                  (e = l.mutableReadLanes),
                  (l.entangledLanes |= e);
                for (var r = l.entanglements, o = e; 0 < o; ) {
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
                var e = p.getSnapshot,
                  n = p.setSnapshot;
                try {
                  n(e(t._source));
                  var r = ui(v);
                  l.mutableReadLanes |= r & l.pendingLanes;
                } catch (e) {
                  n(function () {
                    throw e;
                  });
                }
              });
            },
            [t, r]
          ),
          (or(m, n) && or(h, t) && or(d, r)) ||
            (((e = {
              pending: null,
              dispatch: null,
              lastRenderedReducer: ao,
              lastRenderedState: f,
            }).dispatch = c =
              No.bind(null, Ka, e)),
            (s.queue = e),
            (s.baseQueue = null),
            (f = io(l, t, n)),
            (s.memoizedState = s.baseState = f)),
          f
        );
      }
      function co(e, t, n) {
        return so(lo(), e, t, n);
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
              lastRenderedReducer: ao,
              lastRenderedState: e,
            }).dispatch =
            No.bind(null, Ka, e)),
          [t.memoizedState, e]
        );
      }
      function po(e, t, n, r) {
        return (
          (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
          null === (t = Ka.updateQueue)
            ? ((t = { lastEffect: null }),
              (Ka.updateQueue = t),
              (t.lastEffect = e.next = e))
            : null === (n = t.lastEffect)
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
          e
        );
      }
      function mo(e) {
        return (e = { current: e }), (ro().memoizedState = e);
      }
      function ho() {
        return lo().memoizedState;
      }
      function vo(e, t, n, r) {
        var l = ro();
        (Ka.flags |= e),
          (l.memoizedState = po(1 | t, n, void 0, void 0 === r ? null : r));
      }
      function go(e, t, n, r) {
        var l = lo();
        r = void 0 === r ? null : r;
        var a = void 0;
        if (null !== Xa) {
          var o = Xa.memoizedState;
          if (((a = o.destroy), null !== r && to(r, o.deps)))
            return void po(t, n, a, r);
        }
        (Ka.flags |= e), (l.memoizedState = po(1 | t, n, a, r));
      }
      function yo(e, t) {
        return vo(516, 4, e, t);
      }
      function bo(e, t) {
        return go(516, 4, e, t);
      }
      function wo(e, t) {
        return go(4, 2, e, t);
      }
      function ko(e, t) {
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
      function Eo(e, t, n) {
        return (
          (n = null != n ? n.concat([e]) : null),
          go(4, 2, ko.bind(null, t, e), n)
        );
      }
      function So() {}
      function _o(e, t) {
        var n = lo();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && to(t, r[1])
          ? r[0]
          : ((n.memoizedState = [e, t]), e);
      }
      function xo(e, t) {
        var n = lo();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && to(t, r[1])
          ? r[0]
          : ((e = e()), (n.memoizedState = [e, t]), e);
      }
      function Co(e, t) {
        var n = Al();
        Vl(98 > n ? 98 : n, function () {
          e(!0);
        }),
          Vl(97 < n ? 97 : n, function () {
            var n = qa.transition;
            qa.transition = 1;
            try {
              e(!1), t();
            } finally {
              qa.transition = n;
            }
          });
      }
      function No(e, t, n) {
        var r = oi(),
          l = ui(e),
          a = {
            lane: l,
            action: n,
            eagerReducer: null,
            eagerState: null,
            next: null,
          },
          o = t.pending;
        if (
          (null === o ? (a.next = a) : ((a.next = o.next), (o.next = a)),
          (t.pending = a),
          (o = e.alternate),
          e === Ka || (null !== o && o === Ka))
        )
          Ja = Za = !0;
        else {
          if (
            0 === e.lanes &&
            (null === o || 0 === o.lanes) &&
            null !== (o = t.lastRenderedReducer)
          )
            try {
              var u = t.lastRenderedState,
                i = o(u, n);
              if (((a.eagerReducer = o), (a.eagerState = i), or(i, u))) return;
            } catch (e) {}
          ii(e, l, r);
        }
      }
      var Po = {
          readContext: na,
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
        To = {
          readContext: na,
          useCallback: function (e, t) {
            return (ro().memoizedState = [e, void 0 === t ? null : t]), e;
          },
          useContext: na,
          useEffect: yo,
          useImperativeHandle: function (e, t, n) {
            return (
              (n = null != n ? n.concat([e]) : null),
              vo(4, 2, ko.bind(null, t, e), n)
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
                No.bind(null, Ka, e)),
              [r.memoizedState, e]
            );
          },
          useRef: mo,
          useState: fo,
          useDebugValue: So,
          useDeferredValue: function (e) {
            var t = fo(e),
              n = t[0],
              r = t[1];
            return (
              yo(
                function () {
                  var t = qa.transition;
                  qa.transition = 1;
                  try {
                    r(e);
                  } finally {
                    qa.transition = t;
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
            return mo((e = Co.bind(null, e[1]))), [e, t];
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
            if (Ia) {
              var e = !1,
                t = (function (e) {
                  return { $$typeof: R, toString: e, valueOf: e };
                })(function () {
                  throw (
                    (e || ((e = !0), n("r:" + (Wr++).toString(36))),
                    Error(o(355)))
                  );
                }),
                n = fo(t)[1];
              return (
                0 == (2 & Ka.mode) &&
                  ((Ka.flags |= 516),
                  po(
                    5,
                    function () {
                      n("r:" + (Wr++).toString(36));
                    },
                    void 0,
                    null
                  )),
                t
              );
            }
            return fo((t = "r:" + (Wr++).toString(36))), t;
          },
          unstable_isNewReconciler: !1,
        },
        zo = {
          readContext: na,
          useCallback: _o,
          useContext: na,
          useEffect: bo,
          useImperativeHandle: Eo,
          useLayoutEffect: wo,
          useMemo: xo,
          useReducer: oo,
          useRef: ho,
          useState: function () {
            return oo(ao);
          },
          useDebugValue: So,
          useDeferredValue: function (e) {
            var t = oo(ao),
              n = t[0],
              r = t[1];
            return (
              bo(
                function () {
                  var t = qa.transition;
                  qa.transition = 1;
                  try {
                    r(e);
                  } finally {
                    qa.transition = t;
                  }
                },
                [e]
              ),
              n
            );
          },
          useTransition: function () {
            var e = oo(ao)[0];
            return [ho().current, e];
          },
          useMutableSource: co,
          useOpaqueIdentifier: function () {
            return oo(ao)[0];
          },
          unstable_isNewReconciler: !1,
        },
        Lo = {
          readContext: na,
          useCallback: _o,
          useContext: na,
          useEffect: bo,
          useImperativeHandle: Eo,
          useLayoutEffect: wo,
          useMemo: xo,
          useReducer: uo,
          useRef: ho,
          useState: function () {
            return uo(ao);
          },
          useDebugValue: So,
          useDeferredValue: function (e) {
            var t = uo(ao),
              n = t[0],
              r = t[1];
            return (
              bo(
                function () {
                  var t = qa.transition;
                  qa.transition = 1;
                  try {
                    r(e);
                  } finally {
                    qa.transition = t;
                  }
                },
                [e]
              ),
              n
            );
          },
          useTransition: function () {
            var e = uo(ao)[0];
            return [ho().current, e];
          },
          useMutableSource: co,
          useOpaqueIdentifier: function () {
            return uo(ao)[0];
          },
          unstable_isNewReconciler: !1,
        },
        Oo = k.ReactCurrentOwner,
        Mo = !1;
      function Do(e, t, n, r) {
        t.child = null === e ? Sa(t, null, n, r) : Ea(t, e.child, n, r);
      }
      function Ro(e, t, n, r, l) {
        n = n.render;
        var a = t.ref;
        return (
          ta(t, l),
          (r = no(e, t, n, r, a, l)),
          null === e || Mo
            ? ((t.flags |= 1), Do(e, t, r, l), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.flags &= -517),
              (e.lanes &= ~l),
              Jo(e, t, l))
        );
      }
      function Fo(e, t, n, r, l, a) {
        if (null === e) {
          var o = n.type;
          return "function" != typeof o ||
            ji(o) ||
            void 0 !== o.defaultProps ||
            null !== n.compare ||
            void 0 !== n.defaultProps
            ? (((e = Qi(n.type, null, r, t, t.mode, a)).ref = t.ref),
              (e.return = t),
              (t.child = e))
            : ((t.tag = 15), (t.type = o), Io(e, t, o, r, l, a));
        }
        return (
          (o = e.child),
          0 == (l & a) &&
          ((l = o.memoizedProps),
          (n = null !== (n = n.compare) ? n : ir)(l, r) && e.ref === t.ref)
            ? Jo(e, t, a)
            : ((t.flags |= 1),
              ((e = Ai(o, r)).ref = t.ref),
              (e.return = t),
              (t.child = e))
        );
      }
      function Io(e, t, n, r, l, a) {
        if (null !== e && ir(e.memoizedProps, r) && e.ref === t.ref) {
          if (((Mo = !1), 0 == (a & l)))
            return (t.lanes = e.lanes), Jo(e, t, a);
          0 != (16384 & e.flags) && (Mo = !0);
        }
        return Ao(e, t, n, r, a);
      }
      function Uo(e, t, n) {
        var r = t.pendingProps,
          l = r.children,
          a = null !== e ? e.memoizedState : null;
        if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode)
          if (0 == (4 & t.mode)) (t.memoizedState = { baseLanes: 0 }), vi(0, n);
          else {
            if (0 == (1073741824 & n))
              return (
                (e = null !== a ? a.baseLanes | n : n),
                (t.lanes = t.childLanes = 1073741824),
                (t.memoizedState = { baseLanes: e }),
                vi(0, e),
                null
              );
            (t.memoizedState = { baseLanes: 0 }),
              vi(0, null !== a ? a.baseLanes : n);
          }
        else
          null !== a
            ? ((r = a.baseLanes | n), (t.memoizedState = null))
            : (r = n),
            vi(0, r);
        return Do(e, t, l, n), t.child;
      }
      function jo(e, t) {
        var n = t.ref;
        ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
          (t.flags |= 128);
      }
      function Ao(e, t, n, r, l) {
        var a = pl(n) ? fl : sl.current;
        return (
          (a = dl(t, a)),
          ta(t, l),
          (n = no(e, t, n, r, a, l)),
          null === e || Mo
            ? ((t.flags |= 1), Do(e, t, n, l), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.flags &= -517),
              (e.lanes &= ~l),
              Jo(e, t, l))
        );
      }
      function Qo(e, t, n, r, l) {
        if (pl(n)) {
          var a = !0;
          gl(t);
        } else a = !1;
        if ((ta(t, l), null === t.stateNode))
          null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
            ha(t, n, r),
            ga(t, n, r, l),
            (r = !0);
        else if (null === e) {
          var o = t.stateNode,
            u = t.memoizedProps;
          o.props = u;
          var i = o.context,
            s = n.contextType;
          s =
            "object" == typeof s && null !== s
              ? na(s)
              : dl(t, (s = pl(n) ? fl : sl.current));
          var c = n.getDerivedStateFromProps,
            f =
              "function" == typeof c ||
              "function" == typeof o.getSnapshotBeforeUpdate;
          f ||
            ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
              "function" != typeof o.componentWillReceiveProps) ||
            ((u !== r || i !== s) && va(t, o, r, s)),
            (ra = !1);
          var d = t.memoizedState;
          (o.state = d),
            sa(t, r, o, l),
            (i = t.memoizedState),
            u !== r || d !== i || cl.current || ra
              ? ("function" == typeof c &&
                  (da(t, n, c, r), (i = t.memoizedState)),
                (u = ra || ma(t, n, u, r, d, i, s))
                  ? (f ||
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
            aa(e, t),
            (u = t.memoizedProps),
            (s = t.type === t.elementType ? u : ql(t.type, u)),
            (o.props = s),
            (f = t.pendingProps),
            (d = o.context),
            (i =
              "object" == typeof (i = n.contextType) && null !== i
                ? na(i)
                : dl(t, (i = pl(n) ? fl : sl.current)));
          var p = n.getDerivedStateFromProps;
          (c =
            "function" == typeof p ||
            "function" == typeof o.getSnapshotBeforeUpdate) ||
            ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
              "function" != typeof o.componentWillReceiveProps) ||
            ((u !== f || d !== i) && va(t, o, r, i)),
            (ra = !1),
            (d = t.memoizedState),
            (o.state = d),
            sa(t, r, o, l);
          var m = t.memoizedState;
          u !== f || d !== m || cl.current || ra
            ? ("function" == typeof p &&
                (da(t, n, p, r), (m = t.memoizedState)),
              (s = ra || ma(t, n, s, r, d, m, i))
                ? (c ||
                    ("function" != typeof o.UNSAFE_componentWillUpdate &&
                      "function" != typeof o.componentWillUpdate) ||
                    ("function" == typeof o.componentWillUpdate &&
                      o.componentWillUpdate(r, m, i),
                    "function" == typeof o.UNSAFE_componentWillUpdate &&
                      o.UNSAFE_componentWillUpdate(r, m, i)),
                  "function" == typeof o.componentDidUpdate && (t.flags |= 4),
                  "function" == typeof o.getSnapshotBeforeUpdate &&
                    (t.flags |= 256))
                : ("function" != typeof o.componentDidUpdate ||
                    (u === e.memoizedProps && d === e.memoizedState) ||
                    (t.flags |= 4),
                  "function" != typeof o.getSnapshotBeforeUpdate ||
                    (u === e.memoizedProps && d === e.memoizedState) ||
                    (t.flags |= 256),
                  (t.memoizedProps = r),
                  (t.memoizedState = m)),
              (o.props = r),
              (o.state = m),
              (o.context = i),
              (r = s))
            : ("function" != typeof o.componentDidUpdate ||
                (u === e.memoizedProps && d === e.memoizedState) ||
                (t.flags |= 4),
              "function" != typeof o.getSnapshotBeforeUpdate ||
                (u === e.memoizedProps && d === e.memoizedState) ||
                (t.flags |= 256),
              (r = !1));
        }
        return Vo(e, t, n, r, a, l);
      }
      function Vo(e, t, n, r, l, a) {
        jo(e, t);
        var o = 0 != (64 & t.flags);
        if (!r && !o) return l && yl(t, n, !1), Jo(e, t, a);
        (r = t.stateNode), (Oo.current = t);
        var u =
          o && "function" != typeof n.getDerivedStateFromError
            ? null
            : r.render();
        return (
          (t.flags |= 1),
          null !== e && o
            ? ((t.child = Ea(t, e.child, null, a)),
              (t.child = Ea(t, null, u, a)))
            : Do(e, t, u, a),
          (t.memoizedState = r.state),
          l && yl(t, n, !0),
          t.child
        );
      }
      function $o(e) {
        var t = e.stateNode;
        t.pendingContext
          ? hl(0, t.pendingContext, t.pendingContext !== t.context)
          : t.context && hl(0, t.context, !1),
          Ta(e, t.containerInfo);
      }
      var Bo,
        Ho,
        Wo,
        qo = { dehydrated: null, retryLane: 0 };
      function Yo(e, t, n) {
        var r,
          l = t.pendingProps,
          a = Ma.current,
          o = !1;
        return (
          (r = 0 != (64 & t.flags)) ||
            (r = (null === e || null !== e.memoizedState) && 0 != (2 & a)),
          r
            ? ((o = !0), (t.flags &= -65))
            : (null !== e && null === e.memoizedState) ||
              void 0 === l.fallback ||
              !0 === l.unstable_avoidThisFallback ||
              (a |= 1),
          ul(Ma, 1 & a),
          null === e
            ? (void 0 !== l.fallback && Aa(t),
              (e = l.children),
              (a = l.fallback),
              o
                ? ((e = Ko(t, e, a, n)),
                  (t.child.memoizedState = { baseLanes: n }),
                  (t.memoizedState = qo),
                  e)
                : "number" == typeof l.unstable_expectedLoadTime
                ? ((e = Ko(t, e, a, n)),
                  (t.child.memoizedState = { baseLanes: n }),
                  (t.memoizedState = qo),
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
                ? ((l = (function (e, t, n, r, l) {
                    var a = t.mode,
                      o = e.child;
                    e = o.sibling;
                    var u = { mode: "hidden", children: n };
                    return (
                      0 == (2 & a) && t.child !== o
                        ? (((n = t.child).childLanes = 0),
                          (n.pendingProps = u),
                          null !== (o = n.lastEffect)
                            ? ((t.firstEffect = n.firstEffect),
                              (t.lastEffect = o),
                              (o.nextEffect = null))
                            : (t.firstEffect = t.lastEffect = null))
                        : (n = Ai(o, u)),
                      null !== e
                        ? (r = Ai(e, r))
                        : ((r = Vi(r, a, l, null)).flags |= 2),
                      (r.return = t),
                      (n.return = t),
                      (n.sibling = r),
                      (t.child = n),
                      r
                    );
                  })(e, t, l.children, l.fallback, n)),
                  (o = t.child),
                  (a = e.child.memoizedState),
                  (o.memoizedState =
                    null === a
                      ? { baseLanes: n }
                      : { baseLanes: a.baseLanes | n }),
                  (o.childLanes = e.childLanes & ~n),
                  (t.memoizedState = qo),
                  l)
                : ((n = (function (e, t, n, r) {
                    var l = e.child;
                    return (
                      (e = l.sibling),
                      (n = Ai(l, { mode: "visible", children: n })),
                      0 == (2 & t.mode) && (n.lanes = r),
                      (n.return = t),
                      (n.sibling = null),
                      null !== e &&
                        ((e.nextEffect = null),
                        (e.flags = 8),
                        (t.firstEffect = t.lastEffect = e)),
                      (t.child = n)
                    );
                  })(e, t, l.children, n)),
                  (t.memoizedState = null),
                  n))
        );
      }
      function Ko(e, t, n, r) {
        var l = e.mode,
          a = e.child;
        return (
          (t = { mode: "hidden", children: t }),
          0 == (2 & l) && null !== a
            ? ((a.childLanes = 0), (a.pendingProps = t))
            : (a = $i(t, l, 0, null)),
          (n = Vi(n, l, r, null)),
          (a.return = e),
          (n.return = e),
          (a.sibling = n),
          (e.child = a),
          n
        );
      }
      function Xo(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        null !== n && (n.lanes |= t), ea(e.return, t);
      }
      function Go(e, t, n, r, l, a) {
        var o = e.memoizedState;
        null === o
          ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: l,
              lastEffect: a,
            })
          : ((o.isBackwards = t),
            (o.rendering = null),
            (o.renderingStartTime = 0),
            (o.last = r),
            (o.tail = n),
            (o.tailMode = l),
            (o.lastEffect = a));
      }
      function Zo(e, t, n) {
        var r = t.pendingProps,
          l = r.revealOrder,
          a = r.tail;
        if ((Do(e, t, r.children, n), 0 != (2 & (r = Ma.current))))
          (r = (1 & r) | 2), (t.flags |= 64);
        else {
          if (null !== e && 0 != (64 & e.flags))
            e: for (e = t.child; null !== e; ) {
              if (13 === e.tag) null !== e.memoizedState && Xo(e, n);
              else if (19 === e.tag) Xo(e, n);
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
        if ((ul(Ma, r), 0 == (2 & t.mode))) t.memoizedState = null;
        else
          switch (l) {
            case "forwards":
              for (n = t.child, l = null; null !== n; )
                null !== (e = n.alternate) && null === Da(e) && (l = n),
                  (n = n.sibling);
              null === (n = l)
                ? ((l = t.child), (t.child = null))
                : ((l = n.sibling), (n.sibling = null)),
                Go(t, !1, l, n, a, t.lastEffect);
              break;
            case "backwards":
              for (n = null, l = t.child, t.child = null; null !== l; ) {
                if (null !== (e = l.alternate) && null === Da(e)) {
                  t.child = l;
                  break;
                }
                (e = l.sibling), (l.sibling = n), (n = l), (l = e);
              }
              Go(t, !0, n, null, a, t.lastEffect);
              break;
            case "together":
              Go(t, !1, null, null, void 0, t.lastEffect);
              break;
            default:
              t.memoizedState = null;
          }
        return t.child;
      }
      function Jo(e, t, n) {
        if (
          (null !== e && (t.dependencies = e.dependencies),
          (Ru |= t.lanes),
          0 != (n & t.childLanes))
        ) {
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = Ai((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Ai(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        return null;
      }
      function eu(e, t) {
        if (!Ia)
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
            return pl(t.type) && ml(), null;
          case 3:
            return (
              za(),
              ol(cl),
              ol(sl),
              Ha(),
              (r = t.stateNode).pendingContext &&
                ((r.context = r.pendingContext), (r.pendingContext = null)),
              (null !== e && null !== e.child) ||
                (Va(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
              null
            );
          case 5:
            Oa(t);
            var a = Pa(Na.current);
            if (((n = t.type), null !== e && null != t.stateNode))
              Ho(e, t, n, r), e.ref !== t.ref && (t.flags |= 128);
            else {
              if (!r) {
                if (null === t.stateNode) throw Error(o(166));
                return null;
              }
              if (((e = Pa(xa.current)), Va(t))) {
                (r = t.stateNode), (n = t.type);
                var u = t.memoizedProps;
                switch (((r[Yr] = t), (r[Kr] = u), n)) {
                  case "dialog":
                    Cr("cancel", r), Cr("close", r);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    Cr("load", r);
                    break;
                  case "video":
                  case "audio":
                    for (e = 0; e < Er.length; e++) Cr(Er[e], r);
                    break;
                  case "source":
                    Cr("error", r);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    Cr("error", r), Cr("load", r);
                    break;
                  case "details":
                    Cr("toggle", r);
                    break;
                  case "input":
                    ee(r, u), Cr("invalid", r);
                    break;
                  case "select":
                    (r._wrapperState = { wasMultiple: !!u.multiple }),
                      Cr("invalid", r);
                    break;
                  case "textarea":
                    ie(r, u), Cr("invalid", r);
                }
                for (var s in (Se(n, u), (e = null), u))
                  u.hasOwnProperty(s) &&
                    ((a = u[s]),
                    "children" === s
                      ? "string" == typeof a
                        ? r.textContent !== a && (e = ["children", a])
                        : "number" == typeof a &&
                          r.textContent !== "" + a &&
                          (e = ["children", "" + a])
                      : i.hasOwnProperty(s) &&
                        null != a &&
                        "onScroll" === s &&
                        Cr("scroll", r));
                switch (n) {
                  case "input":
                    X(r), re(r, u, !0);
                    break;
                  case "textarea":
                    X(r), ce(r);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    "function" == typeof u.onClick && (r.onclick = Fr);
                }
                (r = e), (t.updateQueue = r), null !== r && (t.flags |= 4);
              } else {
                switch (
                  ((s = 9 === a.nodeType ? a : a.ownerDocument),
                  e === fe && (e = de(n)),
                  e === fe
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
                  (e[Yr] = t),
                  (e[Kr] = r),
                  Bo(e, t),
                  (t.stateNode = e),
                  (s = _e(n, r)),
                  n)
                ) {
                  case "dialog":
                    Cr("cancel", e), Cr("close", e), (a = r);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    Cr("load", e), (a = r);
                    break;
                  case "video":
                  case "audio":
                    for (a = 0; a < Er.length; a++) Cr(Er[a], e);
                    a = r;
                    break;
                  case "source":
                    Cr("error", e), (a = r);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    Cr("error", e), Cr("load", e), (a = r);
                    break;
                  case "details":
                    Cr("toggle", e), (a = r);
                    break;
                  case "input":
                    ee(e, r), (a = J(e, r)), Cr("invalid", e);
                    break;
                  case "option":
                    a = ae(e, r);
                    break;
                  case "select":
                    (e._wrapperState = { wasMultiple: !!r.multiple }),
                      (a = l({}, r, { value: void 0 })),
                      Cr("invalid", e);
                    break;
                  case "textarea":
                    ie(e, r), (a = ue(e, r)), Cr("invalid", e);
                    break;
                  default:
                    a = r;
                }
                Se(n, a);
                var c = a;
                for (u in c)
                  if (c.hasOwnProperty(u)) {
                    var f = c[u];
                    "style" === u
                      ? ke(e, f)
                      : "dangerouslySetInnerHTML" === u
                      ? null != (f = f ? f.__html : void 0) && ve(e, f)
                      : "children" === u
                      ? "string" == typeof f
                        ? ("textarea" !== n || "" !== f) && ge(e, f)
                        : "number" == typeof f && ge(e, "" + f)
                      : "suppressContentEditableWarning" !== u &&
                        "suppressHydrationWarning" !== u &&
                        "autoFocus" !== u &&
                        (i.hasOwnProperty(u)
                          ? null != f && "onScroll" === u && Cr("scroll", e)
                          : null != f && w(e, u, f, s));
                  }
                switch (n) {
                  case "input":
                    X(e), re(e, r, !1);
                    break;
                  case "textarea":
                    X(e), ce(e);
                    break;
                  case "option":
                    null != r.value && e.setAttribute("value", "" + Y(r.value));
                    break;
                  case "select":
                    (e.multiple = !!r.multiple),
                      null != (u = r.value)
                        ? oe(e, !!r.multiple, u, !1)
                        : null != r.defaultValue &&
                          oe(e, !!r.multiple, r.defaultValue, !0);
                    break;
                  default:
                    "function" == typeof a.onClick && (e.onclick = Fr);
                }
                jr(n, r) && (t.flags |= 4);
              }
              null !== t.ref && (t.flags |= 128);
            }
            return null;
          case 6:
            if (e && null != t.stateNode) Wo(0, t, e.memoizedProps, r);
            else {
              if ("string" != typeof r && null === t.stateNode)
                throw Error(o(166));
              (n = Pa(Na.current)),
                Pa(xa.current),
                Va(t)
                  ? ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[Yr] = t),
                    r.nodeValue !== n && (t.flags |= 4))
                  : (((r = (
                      9 === n.nodeType ? n : n.ownerDocument
                    ).createTextNode(r))[Yr] = t),
                    (t.stateNode = r));
            }
            return null;
          case 13:
            return (
              ol(Ma),
              (r = t.memoizedState),
              0 != (64 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r),
                  (n = !1),
                  null === e
                    ? void 0 !== t.memoizedProps.fallback && Va(t)
                    : (n = null !== e.memoizedState),
                  r &&
                    !n &&
                    0 != (2 & t.mode) &&
                    ((null === e &&
                      !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                    0 != (1 & Ma.current)
                      ? 0 === Ou && (Ou = 3)
                      : ((0 !== Ou && 3 !== Ou) || (Ou = 4),
                        null === Nu ||
                          (0 == (134217727 & Ru) && 0 == (134217727 & Fu)) ||
                          di(Nu, Tu))),
                  (r || n) && (t.flags |= 4),
                  null)
            );
          case 4:
            return za(), null === e && Pr(t.stateNode.containerInfo), null;
          case 10:
            return Jl(t), null;
          case 17:
            return pl(t.type) && ml(), null;
          case 19:
            if ((ol(Ma), null === (r = t.memoizedState))) return null;
            if (((u = 0 != (64 & t.flags)), null === (s = r.rendering)))
              if (u) eu(r, !1);
              else {
                if (0 !== Ou || (null !== e && 0 != (64 & e.flags)))
                  for (e = t.child; null !== e; ) {
                    if (null !== (s = Da(e))) {
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
                      return ul(Ma, (1 & Ma.current) | 2), t.child;
                    }
                    e = e.sibling;
                  }
                null !== r.tail &&
                  jl() > Au &&
                  ((t.flags |= 64), (u = !0), eu(r, !1), (t.lanes = 33554432));
              }
            else {
              if (!u)
                if (null !== (e = Da(s))) {
                  if (
                    ((t.flags |= 64),
                    (u = !0),
                    null !== (n = e.updateQueue) &&
                      ((t.updateQueue = n), (t.flags |= 4)),
                    eu(r, !0),
                    null === r.tail &&
                      "hidden" === r.tailMode &&
                      !s.alternate &&
                      !Ia)
                  )
                    return (
                      null !== (t = t.lastEffect = r.lastEffect) &&
                        (t.nextEffect = null),
                      null
                    );
                } else
                  2 * jl() - r.renderingStartTime > Au &&
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
                (r.renderingStartTime = jl()),
                (n.sibling = null),
                (t = Ma.current),
                ul(Ma, u ? (1 & t) | 2 : 1 & t),
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
            pl(e.type) && ml();
            var t = e.flags;
            return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null;
          case 3:
            if ((za(), ol(cl), ol(sl), Ha(), 0 != (64 & (t = e.flags))))
              throw Error(o(285));
            return (e.flags = (-4097 & t) | 64), e;
          case 5:
            return Oa(e), null;
          case 13:
            return (
              ol(Ma),
              4096 & (t = e.flags) ? ((e.flags = (-4097 & t) | 64), e) : null
            );
          case 19:
            return ol(Ma), null;
          case 4:
            return za(), null;
          case 10:
            return Jl(e), null;
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
            (n += W(r)), (r = r.return);
          } while (r);
          var l = n;
        } catch (e) {
          l = "\nError generating stack: " + e.message + "\n" + e.stack;
        }
        return { value: e, source: t, stack: l };
      }
      function lu(e, t) {
        try {
          console.error(t.value);
        } catch (e) {
          setTimeout(function () {
            throw e;
          });
        }
      }
      (Bo = function (e, t) {
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
        (Ho = function (e, t, n, r) {
          var a = e.memoizedProps;
          if (a !== r) {
            (e = t.stateNode), Pa(xa.current);
            var o,
              u = null;
            switch (n) {
              case "input":
                (a = J(e, a)), (r = J(e, r)), (u = []);
                break;
              case "option":
                (a = ae(e, a)), (r = ae(e, r)), (u = []);
                break;
              case "select":
                (a = l({}, a, { value: void 0 })),
                  (r = l({}, r, { value: void 0 })),
                  (u = []);
                break;
              case "textarea":
                (a = ue(e, a)), (r = ue(e, r)), (u = []);
                break;
              default:
                "function" != typeof a.onClick &&
                  "function" == typeof r.onClick &&
                  (e.onclick = Fr);
            }
            for (f in (Se(n, r), (n = null), a))
              if (!r.hasOwnProperty(f) && a.hasOwnProperty(f) && null != a[f])
                if ("style" === f) {
                  var s = a[f];
                  for (o in s)
                    s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                } else
                  "dangerouslySetInnerHTML" !== f &&
                    "children" !== f &&
                    "suppressContentEditableWarning" !== f &&
                    "suppressHydrationWarning" !== f &&
                    "autoFocus" !== f &&
                    (i.hasOwnProperty(f)
                      ? u || (u = [])
                      : (u = u || []).push(f, null));
            for (f in r) {
              var c = r[f];
              if (
                ((s = null != a ? a[f] : void 0),
                r.hasOwnProperty(f) && c !== s && (null != c || null != s))
              )
                if ("style" === f)
                  if (s) {
                    for (o in s)
                      !s.hasOwnProperty(o) ||
                        (c && c.hasOwnProperty(o)) ||
                        (n || (n = {}), (n[o] = ""));
                    for (o in c)
                      c.hasOwnProperty(o) &&
                        s[o] !== c[o] &&
                        (n || (n = {}), (n[o] = c[o]));
                  } else n || (u || (u = []), u.push(f, n)), (n = c);
                else
                  "dangerouslySetInnerHTML" === f
                    ? ((c = c ? c.__html : void 0),
                      (s = s ? s.__html : void 0),
                      null != c && s !== c && (u = u || []).push(f, c))
                    : "children" === f
                    ? ("string" != typeof c && "number" != typeof c) ||
                      (u = u || []).push(f, "" + c)
                    : "suppressContentEditableWarning" !== f &&
                      "suppressHydrationWarning" !== f &&
                      (i.hasOwnProperty(f)
                        ? (null != c && "onScroll" === f && Cr("scroll", e),
                          u || s === c || (u = []))
                        : "object" == typeof c && null !== c && c.$$typeof === R
                        ? c.toString()
                        : (u = u || []).push(f, c));
            }
            n && (u = u || []).push("style", n);
            var f = u;
            (t.updateQueue = f) && (t.flags |= 4);
          }
        }),
        (Wo = function (e, t, n, r) {
          n !== r && (t.flags |= 4);
        });
      var au = "function" == typeof WeakMap ? WeakMap : Map;
      function ou(e, t, n) {
        ((n = oa(-1, n)).tag = 3), (n.payload = { element: null });
        var r = t.value;
        return (
          (n.callback = function () {
            Bu || ((Bu = !0), (Hu = r)), lu(0, t);
          }),
          n
        );
      }
      function uu(e, t, n) {
        (n = oa(-1, n)).tag = 3;
        var r = e.type.getDerivedStateFromError;
        if ("function" == typeof r) {
          var l = t.value;
          n.payload = function () {
            return lu(0, t), r(l);
          };
        }
        var a = e.stateNode;
        return (
          null !== a &&
            "function" == typeof a.componentDidCatch &&
            (n.callback = function () {
              "function" != typeof r &&
                (null === Wu ? (Wu = new Set([this])) : Wu.add(this), lu(0, t));
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
              Di(e, t);
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
                t.elementType === t.type ? n : ql(t.type, n),
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
      function fu(e, t, n) {
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
                var l = e;
                (r = l.next),
                  0 != (4 & (l = l.tag)) &&
                    0 != (1 & l) &&
                    (Li(n, e), zi(n, e)),
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
                        : ql(n.type, t.memoizedProps)),
                    e.componentDidUpdate(
                      r,
                      t.memoizedState,
                      e.__reactInternalSnapshotBeforeUpdate
                    ))),
              void (null !== (t = n.updateQueue) && ca(n, t, e))
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
              ca(n, t, e);
            }
            return;
          case 5:
            return (
              (e = n.stateNode),
              void (
                null === t &&
                4 & n.flags &&
                jr(n.type, n.memoizedProps) &&
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
                null !== n && ((n = n.dehydrated), null !== n && kt(n))))
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
      function du(e, t) {
        for (var n = e; ; ) {
          if (5 === n.tag) {
            var r = n.stateNode;
            if (t)
              "function" == typeof (r = r.style).setProperty
                ? r.setProperty("display", "none", "important")
                : (r.display = "none");
            else {
              r = n.stateNode;
              var l = n.memoizedProps.style;
              (l = null != l && l.hasOwnProperty("display") ? l.display : null),
                (r.style.display = we("display", l));
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
      function pu(e, t) {
        if (wl && "function" == typeof wl.onCommitFiberUnmount)
          try {
            wl.onCommitFiberUnmount(bl, t);
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
                  l = r.destroy;
                if (((r = r.tag), void 0 !== l))
                  if (0 != (4 & r)) Li(t, n);
                  else {
                    r = t;
                    try {
                      l();
                    } catch (e) {
                      Di(r, e);
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
                Di(t, e);
              }
            break;
          case 5:
            su(t);
            break;
          case 4:
            bu(e, t);
        }
      }
      function mu(e) {
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
        r ? gu(e, n, t) : yu(e, n, t);
      }
      function gu(e, t, n) {
        var r = e.tag,
          l = 5 === r || 6 === r;
        if (l)
          (e = l ? e.stateNode : e.stateNode.instance),
            t
              ? 8 === n.nodeType
                ? n.parentNode.insertBefore(e, t)
                : n.insertBefore(e, t)
              : (8 === n.nodeType
                  ? (t = n.parentNode).insertBefore(e, n)
                  : (t = n).appendChild(e),
                null != (n = n._reactRootContainer) ||
                  null !== t.onclick ||
                  (t.onclick = Fr));
        else if (4 !== r && null !== (e = e.child))
          for (gu(e, t, n), e = e.sibling; null !== e; )
            gu(e, t, n), (e = e.sibling);
      }
      function yu(e, t, n) {
        var r = e.tag,
          l = 5 === r || 6 === r;
        if (l)
          (e = l ? e.stateNode : e.stateNode.instance),
            t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (4 !== r && null !== (e = e.child))
          for (yu(e, t, n), e = e.sibling; null !== e; )
            yu(e, t, n), (e = e.sibling);
      }
      function bu(e, t) {
        for (var n, r, l = t, a = !1; ; ) {
          if (!a) {
            a = l.return;
            e: for (;;) {
              if (null === a) throw Error(o(160));
              switch (((n = a.stateNode), a.tag)) {
                case 5:
                  r = !1;
                  break e;
                case 3:
                case 4:
                  (n = n.containerInfo), (r = !0);
                  break e;
              }
              a = a.return;
            }
            a = !0;
          }
          if (5 === l.tag || 6 === l.tag) {
            e: for (var u = e, i = l, s = i; ; )
              if ((pu(u, s), null !== s.child && 4 !== s.tag))
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
                (i = l.stateNode),
                8 === u.nodeType
                  ? u.parentNode.removeChild(i)
                  : u.removeChild(i))
              : n.removeChild(l.stateNode);
          } else if (4 === l.tag) {
            if (null !== l.child) {
              (n = l.stateNode.containerInfo),
                (r = !0),
                (l.child.return = l),
                (l = l.child);
              continue;
            }
          } else if ((pu(e, l), null !== l.child)) {
            (l.child.return = l), (l = l.child);
            continue;
          }
          if (l === t) break;
          for (; null === l.sibling; ) {
            if (null === l.return || l.return === t) return;
            4 === (l = l.return).tag && (a = !1);
          }
          (l.sibling.return = l.return), (l = l.sibling);
        }
      }
      function wu(e, t) {
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
              var l = null !== e ? e.memoizedProps : r;
              e = t.type;
              var a = t.updateQueue;
              if (((t.updateQueue = null), null !== a)) {
                for (
                  n[Kr] = r,
                    "input" === e &&
                      "radio" === r.type &&
                      null != r.name &&
                      te(n, r),
                    _e(e, l),
                    t = _e(e, r),
                    l = 0;
                  l < a.length;
                  l += 2
                ) {
                  var u = a[l],
                    i = a[l + 1];
                  "style" === u
                    ? ke(n, i)
                    : "dangerouslySetInnerHTML" === u
                    ? ve(n, i)
                    : "children" === u
                    ? ge(n, i)
                    : w(n, u, i, t);
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
                      null != (a = r.value)
                        ? oe(n, !!r.multiple, a, !1)
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
              ((n.hydrate = !1), kt(n.containerInfo))
            );
          case 12:
            return;
          case 13:
            return (
              null !== t.memoizedState && ((ju = jl()), du(t.child, !0)),
              void ku(t)
            );
          case 19:
            return void ku(t);
          case 17:
            return;
          case 23:
          case 24:
            return void du(t, null !== t.memoizedState);
        }
        throw Error(o(163));
      }
      function ku(e) {
        var t = e.updateQueue;
        if (null !== t) {
          e.updateQueue = null;
          var n = e.stateNode;
          null === n && (n = e.stateNode = new iu()),
            t.forEach(function (t) {
              var r = Fi.bind(null, e, t);
              n.has(t) || (n.add(t), t.then(r, r));
            });
        }
      }
      function Eu(e, t) {
        return (
          null !== e &&
          (null === (e = e.memoizedState) || null !== e.dehydrated) &&
          null !== (t = t.memoizedState) &&
          null === t.dehydrated
        );
      }
      var Su = Math.ceil,
        _u = k.ReactCurrentDispatcher,
        xu = k.ReactCurrentOwner,
        Cu = 0,
        Nu = null,
        Pu = null,
        Tu = 0,
        zu = 0,
        Lu = al(0),
        Ou = 0,
        Mu = null,
        Du = 0,
        Ru = 0,
        Fu = 0,
        Iu = 0,
        Uu = null,
        ju = 0,
        Au = 1 / 0;
      function Qu() {
        Au = jl() + 500;
      }
      var Vu,
        $u = null,
        Bu = !1,
        Hu = null,
        Wu = null,
        qu = !1,
        Yu = null,
        Ku = 90,
        Xu = [],
        Gu = [],
        Zu = null,
        Ju = 0,
        ei = null,
        ti = -1,
        ni = 0,
        ri = 0,
        li = null,
        ai = !1;
      function oi() {
        return 0 != (48 & Cu) ? jl() : -1 !== ti ? ti : (ti = jl());
      }
      function ui(e) {
        if (0 == (2 & (e = e.mode))) return 1;
        if (0 == (4 & e)) return 99 === Al() ? 1 : 2;
        if ((0 === ni && (ni = Du), 0 !== Wl.transition)) {
          0 !== ri && (ri = null !== Uu ? Uu.pendingLanes : 0), (e = ni);
          var t = 4186112 & ~ri;
          return (
            0 == (t &= -t) && 0 == (t = (e = 4186112 & ~e) & -e) && (t = 8192),
            t
          );
        }
        return (
          (e = Al()),
          (e = jt(
            0 != (4 & Cu) && 98 === e
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
        if (50 < Ju) throw ((Ju = 0), (ei = null), Error(o(185)));
        if (null === (e = si(e, t))) return null;
        Vt(e, t, n), e === Nu && ((Fu |= t), 4 === Ou && di(e, Tu));
        var r = Al();
        1 === t
          ? 0 != (8 & Cu) && 0 == (48 & Cu)
            ? pi(e)
            : (ci(e, n), 0 === Cu && (Qu(), Bl()))
          : (0 == (4 & Cu) ||
              (98 !== r && 99 !== r) ||
              (null === Zu ? (Zu = new Set([e])) : Zu.add(e)),
            ci(e, n)),
          (Uu = e);
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
            l = e.pingedLanes,
            a = e.expirationTimes,
            u = e.pendingLanes;
          0 < u;

        ) {
          var i = 31 - $t(u),
            s = 1 << i,
            c = a[i];
          if (-1 === c) {
            if (0 == (s & r) || 0 != (s & l)) {
              (c = t), Ft(s);
              var f = Rt;
              a[i] = 10 <= f ? c + 250 : 6 <= f ? c + 5e3 : -1;
            }
          } else c <= t && (e.expiredLanes |= s);
          u &= ~s;
        }
        if (((r = It(e, e === Nu ? Tu : 0)), (t = Rt), 0 === r))
          null !== n &&
            (n !== Ml && Sl(n),
            (e.callbackNode = null),
            (e.callbackPriority = 0));
        else {
          if (null !== n) {
            if (e.callbackPriority === t) return;
            n !== Ml && Sl(n);
          }
          15 === t
            ? ((n = pi.bind(null, e)),
              null === Rl ? ((Rl = [n]), (Fl = El(Pl, Hl))) : Rl.push(n),
              (n = Ml))
            : (n =
                14 === t
                  ? $l(99, pi.bind(null, e))
                  : $l(
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
                      fi.bind(null, e)
                    )),
            (e.callbackPriority = t),
            (e.callbackNode = n);
        }
      }
      function fi(e) {
        if (((ti = -1), (ri = ni = 0), 0 != (48 & Cu))) throw Error(o(327));
        var t = e.callbackNode;
        if (Ti() && e.callbackNode !== t) return null;
        var n = It(e, e === Nu ? Tu : 0);
        if (0 === n) return null;
        var r = n,
          l = Cu;
        Cu |= 16;
        var a = wi();
        for ((Nu === e && Tu === r) || (Qu(), yi(e, r)); ; )
          try {
            Si();
            break;
          } catch (t) {
            bi(e, t);
          }
        if (
          (Zl(),
          (_u.current = a),
          (Cu = l),
          null !== Pu ? (r = 0) : ((Nu = null), (Tu = 0), (r = Ou)),
          0 != (Du & Fu))
        )
          yi(e, 0);
        else if (0 !== r) {
          if (
            (2 === r &&
              ((Cu |= 64),
              e.hydrate && ((e.hydrate = !1), $r(e.containerInfo)),
              0 !== (n = Ut(e)) && (r = ki(e, n))),
            1 === r)
          )
            throw ((t = Mu), yi(e, 0), di(e, n), ci(e, jl()), t);
          switch (
            ((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)
          ) {
            case 0:
            case 1:
              throw Error(o(345));
            case 2:
              Ci(e);
              break;
            case 3:
              if (
                (di(e, n), (62914560 & n) === n && 10 < (r = ju + 500 - jl()))
              ) {
                if (0 !== It(e, 0)) break;
                if (((l = e.suspendedLanes) & n) !== n) {
                  oi(), (e.pingedLanes |= e.suspendedLanes & l);
                  break;
                }
                e.timeoutHandle = Qr(Ci.bind(null, e), r);
                break;
              }
              Ci(e);
              break;
            case 4:
              if ((di(e, n), (4186112 & n) === n)) break;
              for (r = e.eventTimes, l = -1; 0 < n; ) {
                var u = 31 - $t(n);
                (a = 1 << u), (u = r[u]) > l && (l = u), (n &= ~a);
              }
              if (
                ((n = l),
                10 <
                  (n =
                    (120 > (n = jl() - n)
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
                      : 1960 * Su(n / 1960)) - n))
              ) {
                e.timeoutHandle = Qr(Ci.bind(null, e), n);
                break;
              }
              Ci(e);
              break;
            case 5:
              Ci(e);
              break;
            default:
              throw Error(o(329));
          }
        }
        return ci(e, jl()), e.callbackNode === t ? fi.bind(null, e) : null;
      }
      function di(e, t) {
        for (
          t &= ~Iu,
            t &= ~Fu,
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
      function pi(e) {
        if (0 != (48 & Cu)) throw Error(o(327));
        if ((Ti(), e === Nu && 0 != (e.expiredLanes & Tu))) {
          var t = Tu,
            n = ki(e, t);
          0 != (Du & Fu) && (n = ki(e, (t = It(e, t))));
        } else n = ki(e, (t = It(e, 0)));
        if (
          (0 !== e.tag &&
            2 === n &&
            ((Cu |= 64),
            e.hydrate && ((e.hydrate = !1), $r(e.containerInfo)),
            0 !== (t = Ut(e)) && (n = ki(e, t))),
          1 === n)
        )
          throw ((n = Mu), yi(e, 0), di(e, t), ci(e, jl()), n);
        return (
          (e.finishedWork = e.current.alternate),
          (e.finishedLanes = t),
          Ci(e),
          ci(e, jl()),
          null
        );
      }
      function mi(e, t) {
        var n = Cu;
        Cu |= 1;
        try {
          return e(t);
        } finally {
          0 === (Cu = n) && (Qu(), Bl());
        }
      }
      function hi(e, t) {
        var n = Cu;
        (Cu &= -2), (Cu |= 8);
        try {
          return e(t);
        } finally {
          0 === (Cu = n) && (Qu(), Bl());
        }
      }
      function vi(e, t) {
        ul(Lu, zu), (zu |= t), (Du |= t);
      }
      function gi() {
        (zu = Lu.current), ol(Lu);
      }
      function yi(e, t) {
        (e.finishedWork = null), (e.finishedLanes = 0);
        var n = e.timeoutHandle;
        if ((-1 !== n && ((e.timeoutHandle = -1), Vr(n)), null !== Pu))
          for (n = Pu.return; null !== n; ) {
            var r = n;
            switch (r.tag) {
              case 1:
                null != (r = r.type.childContextTypes) && ml();
                break;
              case 3:
                za(), ol(cl), ol(sl), Ha();
                break;
              case 5:
                Oa(r);
                break;
              case 4:
                za();
                break;
              case 13:
              case 19:
                ol(Ma);
                break;
              case 10:
                Jl(r);
                break;
              case 23:
              case 24:
                gi();
            }
            n = n.return;
          }
        (Nu = e),
          (Pu = Ai(e.current, null)),
          (Tu = zu = Du = t),
          (Ou = 0),
          (Mu = null),
          (Iu = Fu = Ru = 0);
      }
      function bi(e, t) {
        for (;;) {
          var n = Pu;
          try {
            if ((Zl(), (Wa.current = Po), Za)) {
              for (var r = Ka.memoizedState; null !== r; ) {
                var l = r.queue;
                null !== l && (l.pending = null), (r = r.next);
              }
              Za = !1;
            }
            if (
              ((Ya = 0),
              (Ga = Xa = Ka = null),
              (Ja = !1),
              (xu.current = null),
              null === n || null === n.return)
            ) {
              (Ou = 1), (Mu = t), (Pu = null);
              break;
            }
            e: {
              var a = e,
                o = n.return,
                u = n,
                i = t;
              if (
                ((t = Tu),
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
                var f = 0 != (1 & Ma.current),
                  d = o;
                do {
                  var p;
                  if ((p = 13 === d.tag)) {
                    var m = d.memoizedState;
                    if (null !== m) p = null !== m.dehydrated;
                    else {
                      var h = d.memoizedProps;
                      p =
                        void 0 !== h.fallback &&
                        (!0 !== h.unstable_avoidThisFallback || !f);
                    }
                  }
                  if (p) {
                    var v = d.updateQueue;
                    if (null === v) {
                      var g = new Set();
                      g.add(s), (d.updateQueue = g);
                    } else v.add(s);
                    if (0 == (2 & d.mode)) {
                      if (
                        ((d.flags |= 64),
                        (u.flags |= 16384),
                        (u.flags &= -2981),
                        1 === u.tag)
                      )
                        if (null === u.alternate) u.tag = 17;
                        else {
                          var y = oa(-1, 1);
                          (y.tag = 2), ua(u, y);
                        }
                      u.lanes |= 1;
                      break e;
                    }
                    (i = void 0), (u = t);
                    var b = a.pingCache;
                    if (
                      (null === b
                        ? ((b = a.pingCache = new au()),
                          (i = new Set()),
                          b.set(s, i))
                        : void 0 === (i = b.get(s)) &&
                          ((i = new Set()), b.set(s, i)),
                      !i.has(u))
                    ) {
                      i.add(u);
                      var w = Ri.bind(null, a, s, u);
                      s.then(w, w);
                    }
                    (d.flags |= 4096), (d.lanes = t);
                    break e;
                  }
                  d = d.return;
                } while (null !== d);
                i = Error(
                  (q(u.type) || "A React component") +
                    " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."
                );
              }
              5 !== Ou && (Ou = 2), (i = ru(i, u)), (d = o);
              do {
                switch (d.tag) {
                  case 3:
                    (a = i),
                      (d.flags |= 4096),
                      (t &= -t),
                      (d.lanes |= t),
                      ia(d, ou(0, a, t));
                    break e;
                  case 1:
                    a = i;
                    var k = d.type,
                      E = d.stateNode;
                    if (
                      0 == (64 & d.flags) &&
                      ("function" == typeof k.getDerivedStateFromError ||
                        (null !== E &&
                          "function" == typeof E.componentDidCatch &&
                          (null === Wu || !Wu.has(E))))
                    ) {
                      (d.flags |= 4096),
                        (t &= -t),
                        (d.lanes |= t),
                        ia(d, uu(d, a, t));
                      break e;
                    }
                }
                d = d.return;
              } while (null !== d);
            }
            xi(n);
          } catch (e) {
            (t = e), Pu === n && null !== n && (Pu = n = n.return);
            continue;
          }
          break;
        }
      }
      function wi() {
        var e = _u.current;
        return (_u.current = Po), null === e ? Po : e;
      }
      function ki(e, t) {
        var n = Cu;
        Cu |= 16;
        var r = wi();
        for ((Nu === e && Tu === t) || yi(e, t); ; )
          try {
            Ei();
            break;
          } catch (t) {
            bi(e, t);
          }
        if ((Zl(), (Cu = n), (_u.current = r), null !== Pu))
          throw Error(o(261));
        return (Nu = null), (Tu = 0), Ou;
      }
      function Ei() {
        for (; null !== Pu; ) _i(Pu);
      }
      function Si() {
        for (; null !== Pu && !_l(); ) _i(Pu);
      }
      function _i(e) {
        var t = Vu(e.alternate, e, zu);
        (e.memoizedProps = e.pendingProps),
          null === t ? xi(e) : (Pu = t),
          (xu.current = null);
      }
      function xi(e) {
        var t = e;
        do {
          var n = t.alternate;
          if (((e = t.return), 0 == (2048 & t.flags))) {
            if (null !== (n = tu(n, t, zu))) return void (Pu = n);
            if (
              (24 !== (n = t).tag && 23 !== n.tag) ||
              null === n.memoizedState ||
              0 != (1073741824 & zu) ||
              0 == (4 & n.mode)
            ) {
              for (var r = 0, l = n.child; null !== l; )
                (r |= l.lanes | l.childLanes), (l = l.sibling);
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
            if (null !== (n = nu(t))) return (n.flags &= 2047), void (Pu = n);
            null !== e &&
              ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
          }
          if (null !== (t = t.sibling)) return void (Pu = t);
          Pu = t = e;
        } while (null !== t);
        0 === Ou && (Ou = 5);
      }
      function Ci(e) {
        var t = Al();
        return Vl(99, Ni.bind(null, e, t)), null;
      }
      function Ni(e, t) {
        do {
          Ti();
        } while (null !== Yu);
        if (0 != (48 & Cu)) throw Error(o(327));
        var n = e.finishedWork;
        if (null === n) return null;
        if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
          throw Error(o(177));
        e.callbackNode = null;
        var r = n.lanes | n.childLanes,
          l = r,
          a = e.pendingLanes & ~l;
        (e.pendingLanes = l),
          (e.suspendedLanes = 0),
          (e.pingedLanes = 0),
          (e.expiredLanes &= l),
          (e.mutableReadLanes &= l),
          (e.entangledLanes &= l),
          (l = e.entanglements);
        for (var u = e.eventTimes, i = e.expirationTimes; 0 < a; ) {
          var s = 31 - $t(a),
            c = 1 << s;
          (l[s] = 0), (u[s] = -1), (i[s] = -1), (a &= ~c);
        }
        if (
          (null !== Zu && 0 == (24 & r) && Zu.has(e) && Zu.delete(e),
          e === Nu && ((Pu = Nu = null), (Tu = 0)),
          1 < n.flags
            ? null !== n.lastEffect
              ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
              : (r = n)
            : (r = n.firstEffect),
          null !== r)
        ) {
          if (
            ((l = Cu),
            (Cu |= 32),
            (xu.current = null),
            (Ir = Yt),
            pr((u = dr())))
          ) {
            if ("selectionStart" in u)
              i = { start: u.selectionStart, end: u.selectionEnd };
            else
              e: if (
                ((i = ((i = u.ownerDocument) && i.defaultView) || window),
                (c = i.getSelection && i.getSelection()) && 0 !== c.rangeCount)
              ) {
                (i = c.anchorNode),
                  (a = c.anchorOffset),
                  (s = c.focusNode),
                  (c = c.focusOffset);
                try {
                  i.nodeType, s.nodeType;
                } catch (e) {
                  i = null;
                  break e;
                }
                var f = 0,
                  d = -1,
                  p = -1,
                  m = 0,
                  h = 0,
                  v = u,
                  g = null;
                t: for (;;) {
                  for (
                    var y;
                    v !== i || (0 !== a && 3 !== v.nodeType) || (d = f + a),
                      v !== s || (0 !== c && 3 !== v.nodeType) || (p = f + c),
                      3 === v.nodeType && (f += v.nodeValue.length),
                      null !== (y = v.firstChild);

                  )
                    (g = v), (v = y);
                  for (;;) {
                    if (v === u) break t;
                    if (
                      (g === i && ++m === a && (d = f),
                      g === s && ++h === c && (p = f),
                      null !== (y = v.nextSibling))
                    )
                      break;
                    g = (v = g).parentNode;
                  }
                  v = y;
                }
                i = -1 === d || -1 === p ? null : { start: d, end: p };
              } else i = null;
            i = i || { start: 0, end: 0 };
          } else i = null;
          (Ur = { focusedElem: u, selectionRange: i }),
            (Yt = !1),
            (li = null),
            (ai = !1),
            ($u = r);
          do {
            try {
              Pi();
            } catch (e) {
              if (null === $u) throw Error(o(330));
              Di($u, e), ($u = $u.nextEffect);
            }
          } while (null !== $u);
          (li = null), ($u = r);
          do {
            try {
              for (u = e; null !== $u; ) {
                var b = $u.flags;
                if ((16 & b && ge($u.stateNode, ""), 128 & b)) {
                  var w = $u.alternate;
                  if (null !== w) {
                    var k = w.ref;
                    null !== k &&
                      ("function" == typeof k ? k(null) : (k.current = null));
                  }
                }
                switch (1038 & b) {
                  case 2:
                    vu($u), ($u.flags &= -3);
                    break;
                  case 6:
                    vu($u), ($u.flags &= -3), wu($u.alternate, $u);
                    break;
                  case 1024:
                    $u.flags &= -1025;
                    break;
                  case 1028:
                    ($u.flags &= -1025), wu($u.alternate, $u);
                    break;
                  case 4:
                    wu($u.alternate, $u);
                    break;
                  case 8:
                    bu(u, (i = $u));
                    var E = i.alternate;
                    mu(i), null !== E && mu(E);
                }
                $u = $u.nextEffect;
              }
            } catch (e) {
              if (null === $u) throw Error(o(330));
              Di($u, e), ($u = $u.nextEffect);
            }
          } while (null !== $u);
          if (
            ((k = Ur),
            (w = dr()),
            (b = k.focusedElem),
            (u = k.selectionRange),
            w !== b &&
              b &&
              b.ownerDocument &&
              fr(b.ownerDocument.documentElement, b))
          ) {
            null !== u &&
              pr(b) &&
              ((w = u.start),
              void 0 === (k = u.end) && (k = w),
              "selectionStart" in b
                ? ((b.selectionStart = w),
                  (b.selectionEnd = Math.min(k, b.value.length)))
                : (k =
                    ((w = b.ownerDocument || document) && w.defaultView) ||
                    window).getSelection &&
                  ((k = k.getSelection()),
                  (i = b.textContent.length),
                  (E = Math.min(u.start, i)),
                  (u = void 0 === u.end ? E : Math.min(u.end, i)),
                  !k.extend && E > u && ((i = u), (u = E), (E = i)),
                  (i = cr(b, E)),
                  (a = cr(b, u)),
                  i &&
                    a &&
                    (1 !== k.rangeCount ||
                      k.anchorNode !== i.node ||
                      k.anchorOffset !== i.offset ||
                      k.focusNode !== a.node ||
                      k.focusOffset !== a.offset) &&
                    ((w = w.createRange()).setStart(i.node, i.offset),
                    k.removeAllRanges(),
                    E > u
                      ? (k.addRange(w), k.extend(a.node, a.offset))
                      : (w.setEnd(a.node, a.offset), k.addRange(w))))),
              (w = []);
            for (k = b; (k = k.parentNode); )
              1 === k.nodeType &&
                w.push({ element: k, left: k.scrollLeft, top: k.scrollTop });
            for (
              "function" == typeof b.focus && b.focus(), b = 0;
              b < w.length;
              b++
            )
              ((k = w[b]).element.scrollLeft = k.left),
                (k.element.scrollTop = k.top);
          }
          (Yt = !!Ir), (Ur = Ir = null), (e.current = n), ($u = r);
          do {
            try {
              for (b = e; null !== $u; ) {
                var S = $u.flags;
                if ((36 & S && fu(b, $u.alternate, $u), 128 & S)) {
                  w = void 0;
                  var _ = $u.ref;
                  if (null !== _) {
                    var x = $u.stateNode;
                    switch ($u.tag) {
                      case 5:
                        w = x;
                        break;
                      default:
                        w = x;
                    }
                    "function" == typeof _ ? _(w) : (_.current = w);
                  }
                }
                $u = $u.nextEffect;
              }
            } catch (e) {
              if (null === $u) throw Error(o(330));
              Di($u, e), ($u = $u.nextEffect);
            }
          } while (null !== $u);
          ($u = null), Dl(), (Cu = l);
        } else e.current = n;
        if (qu) (qu = !1), (Yu = e), (Ku = t);
        else
          for ($u = r; null !== $u; )
            (t = $u.nextEffect),
              ($u.nextEffect = null),
              8 & $u.flags && (((S = $u).sibling = null), (S.stateNode = null)),
              ($u = t);
        if (
          (0 === (r = e.pendingLanes) && (Wu = null),
          1 === r ? (e === ei ? Ju++ : ((Ju = 0), (ei = e))) : (Ju = 0),
          (n = n.stateNode),
          wl && "function" == typeof wl.onCommitFiberRoot)
        )
          try {
            wl.onCommitFiberRoot(bl, n, void 0, 64 == (64 & n.current.flags));
          } catch (e) {}
        if ((ci(e, jl()), Bu)) throw ((Bu = !1), (e = Hu), (Hu = null), e);
        return 0 != (8 & Cu) || Bl(), null;
      }
      function Pi() {
        for (; null !== $u; ) {
          var e = $u.alternate;
          ai ||
            null === li ||
            (0 != (8 & $u.flags)
              ? Je($u, li) && (ai = !0)
              : 13 === $u.tag && Eu(e, $u) && Je($u, li) && (ai = !0));
          var t = $u.flags;
          0 != (256 & t) && cu(e, $u),
            0 == (512 & t) ||
              qu ||
              ((qu = !0),
              $l(97, function () {
                return Ti(), null;
              })),
            ($u = $u.nextEffect);
        }
      }
      function Ti() {
        if (90 !== Ku) {
          var e = 97 < Ku ? 97 : Ku;
          return (Ku = 90), Vl(e, Oi);
        }
        return !1;
      }
      function zi(e, t) {
        Xu.push(t, e),
          qu ||
            ((qu = !0),
            $l(97, function () {
              return Ti(), null;
            }));
      }
      function Li(e, t) {
        Gu.push(t, e),
          qu ||
            ((qu = !0),
            $l(97, function () {
              return Ti(), null;
            }));
      }
      function Oi() {
        if (null === Yu) return !1;
        var e = Yu;
        if (((Yu = null), 0 != (48 & Cu))) throw Error(o(331));
        var t = Cu;
        Cu |= 32;
        var n = Gu;
        Gu = [];
        for (var r = 0; r < n.length; r += 2) {
          var l = n[r],
            a = n[r + 1],
            u = l.destroy;
          if (((l.destroy = void 0), "function" == typeof u))
            try {
              u();
            } catch (e) {
              if (null === a) throw Error(o(330));
              Di(a, e);
            }
        }
        for (n = Xu, Xu = [], r = 0; r < n.length; r += 2) {
          (l = n[r]), (a = n[r + 1]);
          try {
            var i = l.create;
            l.destroy = i();
          } catch (e) {
            if (null === a) throw Error(o(330));
            Di(a, e);
          }
        }
        for (i = e.current.firstEffect; null !== i; )
          (e = i.nextEffect),
            (i.nextEffect = null),
            8 & i.flags && ((i.sibling = null), (i.stateNode = null)),
            (i = e);
        return (Cu = t), Bl(), !0;
      }
      function Mi(e, t, n) {
        ua(e, (t = ou(0, (t = ru(n, t)), 1))),
          (t = oi()),
          null !== (e = si(e, 1)) && (Vt(e, 1, t), ci(e, t));
      }
      function Di(e, t) {
        if (3 === e.tag) Mi(e, e, t);
        else
          for (var n = e.return; null !== n; ) {
            if (3 === n.tag) {
              Mi(n, e, t);
              break;
            }
            if (1 === n.tag) {
              var r = n.stateNode;
              if (
                "function" == typeof n.type.getDerivedStateFromError ||
                ("function" == typeof r.componentDidCatch &&
                  (null === Wu || !Wu.has(r)))
              ) {
                var l = uu(n, (e = ru(t, e)), 1);
                if ((ua(n, l), (l = oi()), null !== (n = si(n, 1))))
                  Vt(n, 1, l), ci(n, l);
                else if (
                  "function" == typeof r.componentDidCatch &&
                  (null === Wu || !Wu.has(r))
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
      function Ri(e, t, n) {
        var r = e.pingCache;
        null !== r && r.delete(t),
          (t = oi()),
          (e.pingedLanes |= e.suspendedLanes & n),
          Nu === e &&
            (Tu & n) === n &&
            (4 === Ou || (3 === Ou && (62914560 & Tu) === Tu && 500 > jl() - ju)
              ? yi(e, 0)
              : (Iu |= n)),
          ci(e, t);
      }
      function Fi(e, t) {
        var n = e.stateNode;
        null !== n && n.delete(t),
          0 == (t = 0) &&
            (0 == (2 & (t = e.mode))
              ? (t = 1)
              : 0 == (4 & t)
              ? (t = 99 === Al() ? 1 : 2)
              : (0 === ni && (ni = Du),
                0 === (t = At(62914560 & ~ni)) && (t = 4194304))),
          (n = oi()),
          null !== (e = si(e, t)) && (Vt(e, t, n), ci(e, n));
      }
      function Ii(e, t, n, r) {
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
      function Ui(e, t, n, r) {
        return new Ii(e, t, n, r);
      }
      function ji(e) {
        return !(!(e = e.prototype) || !e.isReactComponent);
      }
      function Ai(e, t) {
        var n = e.alternate;
        return (
          null === n
            ? (((n = Ui(e.tag, t, e.key, e.mode)).elementType = e.elementType),
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
      function Qi(e, t, n, r, l, a) {
        var u = 2;
        if (((r = e), "function" == typeof e)) ji(e) && (u = 1);
        else if ("string" == typeof e) u = 5;
        else
          e: switch (e) {
            case _:
              return Vi(n.children, l, a, t);
            case F:
              (u = 8), (l |= 16);
              break;
            case x:
              (u = 8), (l |= 1);
              break;
            case C:
              return (
                ((e = Ui(12, n, t, 8 | l)).elementType = C),
                (e.type = C),
                (e.lanes = a),
                e
              );
            case z:
              return (
                ((e = Ui(13, n, t, l)).type = z),
                (e.elementType = z),
                (e.lanes = a),
                e
              );
            case L:
              return ((e = Ui(19, n, t, l)).elementType = L), (e.lanes = a), e;
            case I:
              return $i(n, l, a, t);
            case U:
              return ((e = Ui(24, n, t, l)).elementType = U), (e.lanes = a), e;
            default:
              if ("object" == typeof e && null !== e)
                switch (e.$$typeof) {
                  case N:
                    u = 10;
                    break e;
                  case P:
                    u = 9;
                    break e;
                  case T:
                    u = 11;
                    break e;
                  case O:
                    u = 14;
                    break e;
                  case M:
                    (u = 16), (r = null);
                    break e;
                  case D:
                    u = 22;
                    break e;
                }
              throw Error(o(130, null == e ? e : typeof e, ""));
          }
        return (
          ((t = Ui(u, n, t, l)).elementType = e), (t.type = r), (t.lanes = a), t
        );
      }
      function Vi(e, t, n, r) {
        return ((e = Ui(7, e, r, t)).lanes = n), e;
      }
      function $i(e, t, n, r) {
        return ((e = Ui(23, e, r, t)).elementType = I), (e.lanes = n), e;
      }
      function Bi(e, t, n) {
        return ((e = Ui(6, e, null, t)).lanes = n), e;
      }
      function Hi(e, t, n) {
        return (
          ((t = Ui(4, null !== e.children ? e.children : [], e.key, t)).lanes =
            n),
          (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
          }),
          t
        );
      }
      function Wi(e, t, n) {
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
          (this.eventTimes = Qt(0)),
          (this.expirationTimes = Qt(-1)),
          (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
              0),
          (this.entanglements = Qt(0)),
          (this.mutableSourceEagerHydrationData = null);
      }
      function qi(e, t, n) {
        var r =
          3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return {
          $$typeof: S,
          key: null == r ? null : "" + r,
          children: e,
          containerInfo: t,
          implementation: n,
        };
      }
      function Yi(e, t, n, r) {
        var l = t.current,
          a = oi(),
          u = ui(l);
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
                  if (pl(i.type)) {
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
            if (pl(s)) {
              n = vl(n, s, i);
              break e;
            }
          }
          n = i;
        } else n = il;
        return (
          null === t.context ? (t.context = n) : (t.pendingContext = n),
          ((t = oa(a, u)).payload = { element: e }),
          null !== (r = void 0 === r ? null : r) && (t.callback = r),
          ua(l, t),
          ii(l, u, a),
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
      function Xi(e, t) {
        if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
          var n = e.retryLane;
          e.retryLane = 0 !== n && n < t ? n : t;
        }
      }
      function Gi(e, t) {
        Xi(e, t), (e = e.alternate) && Xi(e, t);
      }
      function Zi(e, t, n) {
        var r =
          (null != n &&
            null != n.hydrationOptions &&
            n.hydrationOptions.mutableSources) ||
          null;
        if (
          ((n = new Wi(e, t, null != n && !0 === n.hydrate)),
          (t = Ui(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
          (n.current = t),
          (t.stateNode = n),
          la(t),
          (e[Xr] = n.current),
          Pr(8 === e.nodeType ? e.parentNode : e),
          r)
        )
          for (e = 0; e < r.length; e++) {
            var l = (t = r[e])._getVersion;
            (l = l(t._source)),
              null == n.mutableSourceEagerHydrationData
                ? (n.mutableSourceEagerHydrationData = [t, l])
                : n.mutableSourceEagerHydrationData.push(t, l);
          }
        this._internalRoot = n;
      }
      function Ji(e) {
        return !(
          !e ||
          (1 !== e.nodeType &&
            9 !== e.nodeType &&
            11 !== e.nodeType &&
            (8 !== e.nodeType ||
              " react-mount-point-unstable " !== e.nodeValue))
        );
      }
      function es(e, t, n, r, l) {
        var a = n._reactRootContainer;
        if (a) {
          var o = a._internalRoot;
          if ("function" == typeof l) {
            var u = l;
            l = function () {
              var e = Ki(o);
              u.call(e);
            };
          }
          Yi(t, o, e, l);
        } else {
          if (
            ((a = n._reactRootContainer =
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
                return new Zi(e, 0, t ? { hydrate: !0 } : void 0);
              })(n, r)),
            (o = a._internalRoot),
            "function" == typeof l)
          ) {
            var i = l;
            l = function () {
              var e = Ki(o);
              i.call(e);
            };
          }
          hi(function () {
            Yi(t, o, e, l);
          });
        }
        return Ki(o);
      }
      function ts(e, t) {
        var n =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!Ji(t)) throw Error(o(200));
        return qi(e, t, null, n);
      }
      (Vu = function (e, t, n) {
        var r = t.lanes;
        if (null !== e)
          if (e.memoizedProps !== t.pendingProps || cl.current) Mo = !0;
          else {
            if (0 == (n & r)) {
              switch (((Mo = !1), t.tag)) {
                case 3:
                  $o(t), $a();
                  break;
                case 5:
                  La(t);
                  break;
                case 1:
                  pl(t.type) && gl(t);
                  break;
                case 4:
                  Ta(t, t.stateNode.containerInfo);
                  break;
                case 10:
                  r = t.memoizedProps.value;
                  var l = t.type._context;
                  ul(Yl, l._currentValue), (l._currentValue = r);
                  break;
                case 13:
                  if (null !== t.memoizedState)
                    return 0 != (n & t.child.childLanes)
                      ? Yo(e, t, n)
                      : (ul(Ma, 1 & Ma.current),
                        null !== (t = Jo(e, t, n)) ? t.sibling : null);
                  ul(Ma, 1 & Ma.current);
                  break;
                case 19:
                  if (((r = 0 != (n & t.childLanes)), 0 != (64 & e.flags))) {
                    if (r) return Zo(e, t, n);
                    t.flags |= 64;
                  }
                  if (
                    (null !== (l = t.memoizedState) &&
                      ((l.rendering = null),
                      (l.tail = null),
                      (l.lastEffect = null)),
                    ul(Ma, Ma.current),
                    r)
                  )
                    break;
                  return null;
                case 23:
                case 24:
                  return (t.lanes = 0), Uo(e, t, n);
              }
              return Jo(e, t, n);
            }
            Mo = 0 != (16384 & e.flags);
          }
        else Mo = !1;
        switch (((t.lanes = 0), t.tag)) {
          case 2:
            if (
              ((r = t.type),
              null !== e &&
                ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              (e = t.pendingProps),
              (l = dl(t, sl.current)),
              ta(t, n),
              (l = no(null, t, r, e, l, n)),
              (t.flags |= 1),
              "object" == typeof l &&
                null !== l &&
                "function" == typeof l.render &&
                void 0 === l.$$typeof)
            ) {
              if (
                ((t.tag = 1),
                (t.memoizedState = null),
                (t.updateQueue = null),
                pl(r))
              ) {
                var a = !0;
                gl(t);
              } else a = !1;
              (t.memoizedState =
                null !== l.state && void 0 !== l.state ? l.state : null),
                la(t);
              var u = r.getDerivedStateFromProps;
              "function" == typeof u && da(t, r, u, e),
                (l.updater = pa),
                (t.stateNode = l),
                (l._reactInternals = t),
                ga(t, r, e, n),
                (t = Vo(null, t, r, !0, a, n));
            } else (t.tag = 0), Do(null, t, l, n), (t = t.child);
            return t;
          case 16:
            l = t.elementType;
            e: {
              switch (
                (null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (e = t.pendingProps),
                (l = (a = l._init)(l._payload)),
                (t.type = l),
                (a = t.tag =
                  (function (e) {
                    if ("function" == typeof e) return ji(e) ? 1 : 0;
                    if (null != e) {
                      if ((e = e.$$typeof) === T) return 11;
                      if (e === O) return 14;
                    }
                    return 2;
                  })(l)),
                (e = ql(l, e)),
                a)
              ) {
                case 0:
                  t = Ao(null, t, l, e, n);
                  break e;
                case 1:
                  t = Qo(null, t, l, e, n);
                  break e;
                case 11:
                  t = Ro(null, t, l, e, n);
                  break e;
                case 14:
                  t = Fo(null, t, l, ql(l.type, e), r, n);
                  break e;
              }
              throw Error(o(306, l, ""));
            }
            return t;
          case 0:
            return (
              (r = t.type),
              (l = t.pendingProps),
              Ao(e, t, r, (l = t.elementType === r ? l : ql(r, l)), n)
            );
          case 1:
            return (
              (r = t.type),
              (l = t.pendingProps),
              Qo(e, t, r, (l = t.elementType === r ? l : ql(r, l)), n)
            );
          case 3:
            if (($o(t), (r = t.updateQueue), null === e || null === r))
              throw Error(o(282));
            if (
              ((r = t.pendingProps),
              (l = null !== (l = t.memoizedState) ? l.element : null),
              aa(e, t),
              sa(t, r, null, n),
              (r = t.memoizedState.element) === l)
            )
              $a(), (t = Jo(e, t, n));
            else {
              if (
                ((a = (l = t.stateNode).hydrate) &&
                  ((Fa = Br(t.stateNode.containerInfo.firstChild)),
                  (Ra = t),
                  (a = Ia = !0)),
                a)
              ) {
                if (null != (e = l.mutableSourceEagerHydrationData))
                  for (l = 0; l < e.length; l += 2)
                    ((a = e[l])._workInProgressVersionPrimary = e[l + 1]),
                      Ba.push(a);
                for (n = Sa(t, null, r, n), t.child = n; n; )
                  (n.flags = (-3 & n.flags) | 1024), (n = n.sibling);
              } else Do(e, t, r, n), $a();
              t = t.child;
            }
            return t;
          case 5:
            return (
              La(t),
              null === e && Aa(t),
              (r = t.type),
              (l = t.pendingProps),
              (a = null !== e ? e.memoizedProps : null),
              (u = l.children),
              Ar(r, l) ? (u = null) : null !== a && Ar(r, a) && (t.flags |= 16),
              jo(e, t),
              Do(e, t, u, n),
              t.child
            );
          case 6:
            return null === e && Aa(t), null;
          case 13:
            return Yo(e, t, n);
          case 4:
            return (
              Ta(t, t.stateNode.containerInfo),
              (r = t.pendingProps),
              null === e ? (t.child = Ea(t, null, r, n)) : Do(e, t, r, n),
              t.child
            );
          case 11:
            return (
              (r = t.type),
              (l = t.pendingProps),
              Ro(e, t, r, (l = t.elementType === r ? l : ql(r, l)), n)
            );
          case 7:
            return Do(e, t, t.pendingProps, n), t.child;
          case 8:
          case 12:
            return Do(e, t, t.pendingProps.children, n), t.child;
          case 10:
            e: {
              (r = t.type._context),
                (l = t.pendingProps),
                (u = t.memoizedProps),
                (a = l.value);
              var i = t.type._context;
              if ((ul(Yl, i._currentValue), (i._currentValue = a), null !== u))
                if (
                  ((i = u.value),
                  0 ==
                    (a = or(i, a)
                      ? 0
                      : 0 |
                        ("function" == typeof r._calculateChangedBits
                          ? r._calculateChangedBits(i, a)
                          : 1073741823)))
                ) {
                  if (u.children === l.children && !cl.current) {
                    t = Jo(e, t, n);
                    break e;
                  }
                } else
                  for (null !== (i = t.child) && (i.return = t); null !== i; ) {
                    var s = i.dependencies;
                    if (null !== s) {
                      u = i.child;
                      for (var c = s.firstContext; null !== c; ) {
                        if (c.context === r && 0 != (c.observedBits & a)) {
                          1 === i.tag &&
                            (((c = oa(-1, n & -n)).tag = 2), ua(i, c)),
                            (i.lanes |= n),
                            null !== (c = i.alternate) && (c.lanes |= n),
                            ea(i.return, n),
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
              Do(e, t, l.children, n), (t = t.child);
            }
            return t;
          case 9:
            return (
              (l = t.type),
              (r = (a = t.pendingProps).children),
              ta(t, n),
              (r = r((l = na(l, a.unstable_observedBits)))),
              (t.flags |= 1),
              Do(e, t, r, n),
              t.child
            );
          case 14:
            return (
              (a = ql((l = t.type), t.pendingProps)),
              Fo(e, t, l, (a = ql(l.type, a)), r, n)
            );
          case 15:
            return Io(e, t, t.type, t.pendingProps, r, n);
          case 17:
            return (
              (r = t.type),
              (l = t.pendingProps),
              (l = t.elementType === r ? l : ql(r, l)),
              null !== e &&
                ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              (t.tag = 1),
              pl(r) ? ((e = !0), gl(t)) : (e = !1),
              ta(t, n),
              ha(t, r, l),
              ga(t, r, l, n),
              Vo(null, t, r, !0, e, n)
            );
          case 19:
            return Zo(e, t, n);
          case 23:
          case 24:
            return Uo(e, t, n);
        }
        throw Error(o(156, t.tag));
      }),
        (Zi.prototype.render = function (e) {
          Yi(e, this._internalRoot, null, null);
        }),
        (Zi.prototype.unmount = function () {
          var e = this._internalRoot,
            t = e.containerInfo;
          Yi(null, e, null, function () {
            t[Xr] = null;
          });
        }),
        (et = function (e) {
          13 === e.tag && (ii(e, 4, oi()), Gi(e, 4));
        }),
        (tt = function (e) {
          13 === e.tag && (ii(e, 67108864, oi()), Gi(e, 67108864));
        }),
        (nt = function (e) {
          if (13 === e.tag) {
            var t = oi(),
              n = ui(e);
            ii(e, n, t), Gi(e, n);
          }
        }),
        (rt = function (e, t) {
          return t();
        }),
        (Ce = function (e, t, n) {
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
                    var l = tl(r);
                    if (!l) throw Error(o(90));
                    G(r), ne(r, l);
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
        (Oe = mi),
        (Me = function (e, t, n, r, l) {
          var a = Cu;
          Cu |= 4;
          try {
            return Vl(98, e.bind(null, t, n, r, l));
          } finally {
            0 === (Cu = a) && (Qu(), Bl());
          }
        }),
        (De = function () {
          0 == (49 & Cu) &&
            ((function () {
              if (null !== Zu) {
                var e = Zu;
                (Zu = null),
                  e.forEach(function (e) {
                    (e.expiredLanes |= 24 & e.pendingLanes), ci(e, jl());
                  });
              }
              Bl();
            })(),
            Ti());
        }),
        (Re = function (e, t) {
          var n = Cu;
          Cu |= 2;
          try {
            return e(t);
          } finally {
            0 === (Cu = n) && (Qu(), Bl());
          }
        });
      var ns = { Events: [Jr, el, tl, ze, Le, Ti, { current: !1 }] },
        rs = {
          findFiberByHostInstance: Zr,
          bundleType: 0,
          version: "17.0.2",
          rendererPackageName: "react-dom",
        },
        ls = {
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
          currentDispatcherRef: k.ReactCurrentDispatcher,
          findHostInstanceByFiber: function (e) {
            return null === (e = Ze(e)) ? null : e.stateNode;
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
        var as = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!as.isDisabled && as.supportsFiber)
          try {
            (bl = as.inject(ls)), (wl = as);
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
          return null === (e = Ze(t)) ? null : e.stateNode;
        }),
        (t.flushSync = function (e, t) {
          var n = Cu;
          if (0 != (48 & n)) return e(t);
          Cu |= 1;
          try {
            if (e) return Vl(99, e.bind(null, t));
          } finally {
            (Cu = n), Bl();
          }
        }),
        (t.hydrate = function (e, t, n) {
          if (!Ji(t)) throw Error(o(200));
          return es(null, e, t, !0, n);
        }),
        (t.render = function (e, t, n) {
          if (!Ji(t)) throw Error(o(200));
          return es(null, e, t, !1, n);
        }),
        (t.unmountComponentAtNode = function (e) {
          if (!Ji(e)) throw Error(o(40));
          return (
            !!e._reactRootContainer &&
            (hi(function () {
              es(null, null, e, !1, function () {
                (e._reactRootContainer = null), (e[Xr] = null);
              });
            }),
            !0)
          );
        }),
        (t.unstable_batchedUpdates = mi),
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
          if (!Ji(n)) throw Error(o(200));
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
        l = 60103,
        a = 60106;
      (t.Fragment = 60107), (t.StrictMode = 60108), (t.Profiler = 60114);
      var o = 60109,
        u = 60110,
        i = 60112;
      t.Suspense = 60113;
      var s = 60115,
        c = 60116;
      if ("function" == typeof Symbol && Symbol.for) {
        var f = Symbol.for;
        (l = f("react.element")),
          (a = f("react.portal")),
          (t.Fragment = f("react.fragment")),
          (t.StrictMode = f("react.strict_mode")),
          (t.Profiler = f("react.profiler")),
          (o = f("react.provider")),
          (u = f("react.context")),
          (i = f("react.forward_ref")),
          (t.Suspense = f("react.suspense")),
          (s = f("react.memo")),
          (c = f("react.lazy"));
      }
      var d = "function" == typeof Symbol && Symbol.iterator;
      function p(e) {
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
      var m = {
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
          (this.updater = n || m);
      }
      function g() {}
      function y(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = h),
          (this.updater = n || m);
      }
      (v.prototype.isReactComponent = {}),
        (v.prototype.setState = function (e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(p(85));
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (v.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (g.prototype = v.prototype);
      var b = (y.prototype = new g());
      (b.constructor = y), r(b, v.prototype), (b.isPureReactComponent = !0);
      var w = { current: null },
        k = Object.prototype.hasOwnProperty,
        E = { key: !0, ref: !0, __self: !0, __source: !0 };
      function S(e, t, n) {
        var r,
          a = {},
          o = null,
          u = null;
        if (null != t)
          for (r in (void 0 !== t.ref && (u = t.ref),
          void 0 !== t.key && (o = "" + t.key),
          t))
            k.call(t, r) && !E.hasOwnProperty(r) && (a[r] = t[r]);
        var i = arguments.length - 2;
        if (1 === i) a.children = n;
        else if (1 < i) {
          for (var s = Array(i), c = 0; c < i; c++) s[c] = arguments[c + 2];
          a.children = s;
        }
        if (e && e.defaultProps)
          for (r in (i = e.defaultProps)) void 0 === a[r] && (a[r] = i[r]);
        return {
          $$typeof: l,
          type: e,
          key: o,
          ref: u,
          props: a,
          _owner: w.current,
        };
      }
      function _(e) {
        return "object" == typeof e && null !== e && e.$$typeof === l;
      }
      var x = /\/+/g;
      function C(e, t) {
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
      function N(e, t, n, r, o) {
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
                case l:
                case a:
                  i = !0;
              }
          }
        if (i)
          return (
            (o = o((i = e))),
            (e = "" === r ? "." + C(i, 0) : r),
            Array.isArray(o)
              ? ((n = ""),
                null != e && (n = e.replace(x, "$&/") + "/"),
                N(o, t, n, "", function (e) {
                  return e;
                }))
              : null != o &&
                (_(o) &&
                  (o = (function (e, t) {
                    return {
                      $$typeof: l,
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
                        : ("" + o.key).replace(x, "$&/") + "/") +
                      e
                  )),
                t.push(o)),
            1
          );
        if (((i = 0), (r = "" === r ? "." : r + ":"), Array.isArray(e)))
          for (var s = 0; s < e.length; s++) {
            var c = r + C((u = e[s]), s);
            i += N(u, t, n, c, o);
          }
        else if (
          "function" ==
          typeof (c = (function (e) {
            return null === e || "object" != typeof e
              ? null
              : "function" == typeof (e = (d && e[d]) || e["@@iterator"])
              ? e
              : null;
          })(e))
        )
          for (e = c.call(e), s = 0; !(u = e.next()).done; )
            i += N((u = u.value), t, n, (c = r + C(u, s++)), o);
        else if ("object" === u)
          throw (
            ((t = "" + e),
            Error(
              p(
                31,
                "[object Object]" === t
                  ? "object with keys {" + Object.keys(e).join(", ") + "}"
                  : t
              )
            ))
          );
        return i;
      }
      function P(e, t, n) {
        if (null == e) return e;
        var r = [],
          l = 0;
        return (
          N(e, r, "", "", function (e) {
            return t.call(n, e, l++);
          }),
          r
        );
      }
      function T(e) {
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
      var z = { current: null };
      function L() {
        var e = z.current;
        if (null === e) throw Error(p(321));
        return e;
      }
      var O = {
        ReactCurrentDispatcher: z,
        ReactCurrentBatchConfig: { transition: 0 },
        ReactCurrentOwner: w,
        IsSomeRendererActing: { current: !1 },
        assign: r,
      };
      (t.Children = {
        map: P,
        forEach: function (e, t, n) {
          P(
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
            P(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            P(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!_(e)) throw Error(p(143));
          return e;
        },
      }),
        (t.Component = v),
        (t.PureComponent = y),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O),
        (t.cloneElement = function (e, t, n) {
          if (null == e) throw Error(p(267, e));
          var a = r({}, e.props),
            o = e.key,
            u = e.ref,
            i = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((u = t.ref), (i = w.current)),
              void 0 !== t.key && (o = "" + t.key),
              e.type && e.type.defaultProps)
            )
              var s = e.type.defaultProps;
            for (c in t)
              k.call(t, c) &&
                !E.hasOwnProperty(c) &&
                (a[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c]);
          }
          var c = arguments.length - 2;
          if (1 === c) a.children = n;
          else if (1 < c) {
            s = Array(c);
            for (var f = 0; f < c; f++) s[f] = arguments[f + 2];
            a.children = s;
          }
          return {
            $$typeof: l,
            type: e.type,
            key: o,
            ref: u,
            props: a,
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
        (t.createElement = S),
        (t.createFactory = function (e) {
          var t = S.bind(null, e);
          return (t.type = e), t;
        }),
        (t.createRef = function () {
          return { current: null };
        }),
        (t.forwardRef = function (e) {
          return { $$typeof: i, render: e };
        }),
        (t.isValidElement = _),
        (t.lazy = function (e) {
          return {
            $$typeof: c,
            _payload: { _status: -1, _result: e },
            _init: T,
          };
        }),
        (t.memo = function (e, t) {
          return { $$typeof: s, type: e, compare: void 0 === t ? null : t };
        }),
        (t.useCallback = function (e, t) {
          return L().useCallback(e, t);
        }),
        (t.useContext = function (e, t) {
          return L().useContext(e, t);
        }),
        (t.useDebugValue = function () {}),
        (t.useEffect = function (e, t) {
          return L().useEffect(e, t);
        }),
        (t.useImperativeHandle = function (e, t, n) {
          return L().useImperativeHandle(e, t, n);
        }),
        (t.useLayoutEffect = function (e, t) {
          return L().useLayoutEffect(e, t);
        }),
        (t.useMemo = function (e, t) {
          return L().useMemo(e, t);
        }),
        (t.useReducer = function (e, t, n) {
          return L().useReducer(e, t, n);
        }),
        (t.useRef = function (e) {
          return L().useRef(e);
        }),
        (t.useState = function (e) {
          return L().useState(e);
        }),
        (t.version = "17.0.2");
    },
    294: (e, t, n) => {
      "use strict";
      e.exports = n(408);
    },
    53: (e, t) => {
      "use strict";
      var n, r, l, a;
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
          f = function () {
            if (null !== s)
              try {
                var e = t.unstable_now();
                s(!0, e), (s = null);
              } catch (e) {
                throw (setTimeout(f, 0), e);
              }
          };
        (n = function (e) {
          null !== s ? setTimeout(n, 0, e) : ((s = e), setTimeout(f, 0));
        }),
          (r = function (e, t) {
            c = setTimeout(e, t);
          }),
          (l = function () {
            clearTimeout(c);
          }),
          (t.unstable_shouldYield = function () {
            return !1;
          }),
          (a = t.unstable_forceFrameRate = function () {});
      } else {
        var d = window.setTimeout,
          p = window.clearTimeout;
        if ("undefined" != typeof console) {
          var m = window.cancelAnimationFrame;
          "function" != typeof window.requestAnimationFrame &&
            console.error(
              "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
            ),
            "function" != typeof m &&
              console.error(
                "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
              );
        }
        var h = !1,
          v = null,
          g = -1,
          y = 5,
          b = 0;
        (t.unstable_shouldYield = function () {
          return t.unstable_now() >= b;
        }),
          (a = function () {}),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (y = 0 < e ? Math.floor(1e3 / e) : 5);
          });
        var w = new MessageChannel(),
          k = w.port2;
        (w.port1.onmessage = function () {
          if (null !== v) {
            var e = t.unstable_now();
            b = e + y;
            try {
              v(!0, e) ? k.postMessage(null) : ((h = !1), (v = null));
            } catch (e) {
              throw (k.postMessage(null), e);
            }
          } else h = !1;
        }),
          (n = function (e) {
            (v = e), h || ((h = !0), k.postMessage(null));
          }),
          (r = function (e, n) {
            g = d(function () {
              e(t.unstable_now());
            }, n);
          }),
          (l = function () {
            p(g), (g = -1);
          });
      }
      function E(e, t) {
        var n = e.length;
        e.push(t);
        e: for (;;) {
          var r = (n - 1) >>> 1,
            l = e[r];
          if (!(void 0 !== l && 0 < x(l, t))) break e;
          (e[r] = t), (e[n] = l), (n = r);
        }
      }
      function S(e) {
        return void 0 === (e = e[0]) ? null : e;
      }
      function _(e) {
        var t = e[0];
        if (void 0 !== t) {
          var n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, l = e.length; r < l; ) {
              var a = 2 * (r + 1) - 1,
                o = e[a],
                u = a + 1,
                i = e[u];
              if (void 0 !== o && 0 > x(o, n))
                void 0 !== i && 0 > x(i, o)
                  ? ((e[r] = i), (e[u] = n), (r = u))
                  : ((e[r] = o), (e[a] = n), (r = a));
              else {
                if (!(void 0 !== i && 0 > x(i, n))) break e;
                (e[r] = i), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        return null;
      }
      function x(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id;
      }
      var C = [],
        N = [],
        P = 1,
        T = null,
        z = 3,
        L = !1,
        O = !1,
        M = !1;
      function D(e) {
        for (var t = S(N); null !== t; ) {
          if (null === t.callback) _(N);
          else {
            if (!(t.startTime <= e)) break;
            _(N), (t.sortIndex = t.expirationTime), E(C, t);
          }
          t = S(N);
        }
      }
      function R(e) {
        if (((M = !1), D(e), !O))
          if (null !== S(C)) (O = !0), n(F);
          else {
            var t = S(N);
            null !== t && r(R, t.startTime - e);
          }
      }
      function F(e, n) {
        (O = !1), M && ((M = !1), l()), (L = !0);
        var a = z;
        try {
          for (
            D(n), T = S(C);
            null !== T &&
            (!(T.expirationTime > n) || (e && !t.unstable_shouldYield()));

          ) {
            var o = T.callback;
            if ("function" == typeof o) {
              (T.callback = null), (z = T.priorityLevel);
              var u = o(T.expirationTime <= n);
              (n = t.unstable_now()),
                "function" == typeof u ? (T.callback = u) : T === S(C) && _(C),
                D(n);
            } else _(C);
            T = S(C);
          }
          if (null !== T) var i = !0;
          else {
            var s = S(N);
            null !== s && r(R, s.startTime - n), (i = !1);
          }
          return i;
        } finally {
          (T = null), (z = a), (L = !1);
        }
      }
      var I = a;
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
          O || L || ((O = !0), n(F));
        }),
        (t.unstable_getCurrentPriorityLevel = function () {
          return z;
        }),
        (t.unstable_getFirstCallbackNode = function () {
          return S(C);
        }),
        (t.unstable_next = function (e) {
          switch (z) {
            case 1:
            case 2:
            case 3:
              var t = 3;
              break;
            default:
              t = z;
          }
          var n = z;
          z = t;
          try {
            return e();
          } finally {
            z = n;
          }
        }),
        (t.unstable_pauseExecution = function () {}),
        (t.unstable_requestPaint = I),
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
          var n = z;
          z = e;
          try {
            return t();
          } finally {
            z = n;
          }
        }),
        (t.unstable_scheduleCallback = function (e, a, o) {
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
              id: P++,
              callback: a,
              priorityLevel: e,
              startTime: o,
              expirationTime: (i = o + i),
              sortIndex: -1,
            }),
            o > u
              ? ((e.sortIndex = o),
                E(N, e),
                null === S(C) &&
                  e === S(N) &&
                  (M ? l() : (M = !0), r(R, o - u)))
              : ((e.sortIndex = i), E(C, e), O || L || ((O = !0), n(F))),
            e
          );
        }),
        (t.unstable_wrapCallback = function (e) {
          var t = z;
          return function () {
            var n = z;
            z = t;
            try {
              return e.apply(this, arguments);
            } finally {
              z = n;
            }
          };
        });
    },
    840: (e, t, n) => {
      "use strict";
      e.exports = n(53);
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
        l =
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
        a =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                "default" !== n &&
                  Object.prototype.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return l(t, e), t;
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const o = a(n(294)),
        u = n(212),
        i = ({ answerSets: e }) => {
          const [t, n] = o.useState({
              question: "",
              answerType: "",
              deadlineDay: void 0,
              deadlineMonth: void 0,
              deadlineYear: void 0,
              deadlineHour: void 0,
              deadlineMinute: void 0,
              points: void 0,
            }),
            [r, l] = o.useState(null),
            a = (e) => {
              n({ ...t, [e.target.name]: e.target.value });
            };
          return o.default.createElement(
            "form",
            {
              onSubmit: async (e) => {
                e.preventDefault();
                const {
                  question: n,
                  answerType: r,
                  deadlineDay: a,
                  deadlineMonth: o,
                  deadlineYear: u,
                  deadlineHour: i,
                  deadlineMinute: s,
                  points: c,
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
                        deadline: `${u}-${o}-${a} ${i}:${s}:00`,
                        points: c,
                      }),
                    })
                  ).json()
                ).success
                  ? l(!0)
                  : l(!1);
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
                onChange: a,
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
                  onChange: a,
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
                    { value: "yesno" },
                    "Yes/No"
                  ),
                  o.default.createElement(
                    "option",
                    { value: "number" },
                    "Number"
                  ),
                  o.default.createElement(
                    "option",
                    { value: "score" },
                    "Score"
                  ),
                  o.default.createElement(
                    "option",
                    { value: "leaguetable" },
                    "League Table"
                  )
                )
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
                    onChange: a,
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
                    onChange: a,
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
                    onChange: a,
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
                    onChange: a,
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
                    onChange: a,
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
                    onChange: a,
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
          n && o.default.createElement(i, { answerSets: e }),
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
          o.default.createElement("h2", null, "Active Questions"),
          o.default.createElement(
            "div",
            null,
            o.default.createElement(
              "div",
              { className: "row" },
              o.default.createElement("div", { className: "col" }, "Question"),
              o.default.createElement("div", { className: "col" }, "Deadline"),
              o.default.createElement("div", { className: "col" }, "Type"),
              o.default.createElement("div", { className: "col" }, "Points")
            ),
            t.activeQuestions.map((t) => {
              const n = u.formatDateToEnglish(t.deadline),
                r =
                  t.answer_type ??
                  e.find((e) => e && e.id === t.answer_set_id)?.name;
              return o.default.createElement(
                "div",
                { className: "row" },
                o.default.createElement(
                  "div",
                  { className: "col" },
                  t.question
                ),
                o.default.createElement("div", { className: "col" }, n),
                o.default.createElement("div", { className: "col" }, r),
                o.default.createElement("div", { className: "col" }, t.points)
              );
            })
          ),
          o.default.createElement("h2", null, "Previous Questions"),
          o.default.createElement(
            "div",
            null,
            o.default.createElement(
              "div",
              { className: "row" },
              o.default.createElement("div", { className: "col" }, "Question"),
              o.default.createElement("div", { className: "col" }, "Answer"),
              o.default.createElement("div", { className: "col" }, "Deadline"),
              o.default.createElement("div", { className: "col" }, "Type"),
              o.default.createElement("div", { className: "col" }, "Points")
            ),
            t.pastQuestions.map((t) => {
              const n = u.formatDateToEnglish(t.deadline),
                r =
                  t.answer_type ??
                  e.find((e) => e && e.id === t.answer_set_id)?.name;
              return o.default.createElement(
                "div",
                { className: "row" },
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
                o.default.createElement("div", { className: "col" }, t.points)
              );
            })
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
        l =
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
        a =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                "default" !== n &&
                  Object.prototype.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return l(t, e), t;
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.QuestionsNav = void 0);
      const o = a(n(294)),
        u = n(212);
      (t.QuestionsNav = ({
        onPreviousQuestionsClick: e,
        onActiveQuestionsClick: t,
        displayActiveQuestions: n,
      }) =>
        o.default.createElement(
          "div",
          { className: "row" },
          o.default.createElement(
            "ul",
            { className: "nav nav-tabs mb-3" },
            o.default.createElement(
              "li",
              { className: "nav-item" },
              o.default.createElement(
                "a",
                {
                  className: n ? "nav-link active" : "nav-link",
                  href: "/",
                  onClick: t,
                },
                "Active Questions"
              )
            ),
            o.default.createElement(
              "li",
              { className: "nav-item" },
              o.default.createElement(
                "a",
                {
                  className: n ? "nav-link" : "nav-link active",
                  href: "#",
                  onClick: e,
                },
                "Previous Questions"
              )
            )
          )
        )),
        (t.default = () => {
          const [e, n] = o.useState(!1),
            [r, l] = o.useState([]),
            [a, i] = o.useState([]),
            [s, c] = o.useState(!0);
          return (
            o.useEffect(() => {
              n(!0),
                e ||
                  (async function () {
                    const e = await fetch("/questions/active", {
                      method: "POST",
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                      },
                    });
                    l(await e.json());
                  })();
            }),
            o.default.createElement(
              "div",
              { className: "p-1" },
              o.default.createElement(t.QuestionsNav, {
                onPreviousQuestionsClick: async (e) => {
                  if ((e.preventDefault(), a.length)) return void c(!1);
                  const t = await fetch("/questions/previous", {
                    method: "POST",
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                  });
                  i(await t.json()), c(!1);
                },
                onActiveQuestionsClick: (e) => {
                  e.preventDefault(), c(!0);
                },
                displayActiveQuestions: s,
              }),
              s
                ? r.length
                  ? o.default.createElement(
                      "div",
                      null,
                      r.map((e) =>
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
                              e.points
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
                              e.question
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
                              u.formatDateToEnglish(e.deadline)
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
                                  "button",
                                  {
                                    className: "btn btn-success",
                                    type: "button",
                                  },
                                  "Answer"
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  : o.default.createElement(
                      "div",
                      { className: "col" },
                      "No Active Questions"
                    )
                : a.length
                ? o.default.createElement(
                    "div",
                    null,
                    a.map((e) =>
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
                            e.points
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
                            e.question
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
                            u.formatDateToEnglish(e.deadline)
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
                                "button",
                                {
                                  className: "btn btn-success",
                                  type: "button",
                                },
                                "Answer"
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                : o.default.createElement(
                    "div",
                    { className: "col" },
                    "No Previous Questions"
                  )
            )
          );
        });
    },
    212: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.formatDateToEnglish = void 0),
        (t.formatDateToEnglish = (e) => {
          const t = new Date(e),
            [n, r, l, a, o, u] = [
              (t.getMonth() + 1).toString(),
              t.getDate().toString(),
              t.getFullYear().toString(),
              t.getHours().toString(),
              t.getMinutes().toString(),
              t.getSeconds().toString(),
            ];
          return `${1 === r.length ? "0" + r : r}/${
            1 === n.length ? "0" + n : n
          }/${l} ${1 === a.length ? "0" + a : a}:${
            1 === o.length ? "0" + o : o
          }:${1 === u.length ? "0" + u : u}`;
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
      const l = r(n(294)),
        a = r(n(935)),
        o = r(n(735)),
        u = r(n(626)),
        i = document.getElementById("admin-questions");
      i &&
        (async function () {
          const e = await (await fetch("/admin/questions/answer-sets")).json(),
            t = await (await fetch("/admin/questions/get-questions")).json();
          a.default.render(
            l.default.createElement(o.default, { answerSets: e, questions: t }),
            i
          );
        })();
      const s = document.getElementById("questions-container");
      s &&
        (async function () {
          a.default.render(l.default.createElement(u.default, null), s);
        })();
    },
  },
  (e) => {
    "use strict";
    e((e.s = 690));
  },
]);
