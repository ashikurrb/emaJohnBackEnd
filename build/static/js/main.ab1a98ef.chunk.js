(this["webpackJsonpema-john-simple"] =
  this["webpackJsonpema-john-simple"] || []).push([
  [0],
  {
    53: function (e, t, c) {},
    54: function (e, t, c) {},
    57: function (e, t, c) {},
    65: function (e, t, c) {},
    66: function (e, t, c) {},
    67: function (e, t, c) {},
    68: function (e, t, c) {},
    71: function (e, t, c) {},
    72: function (e, t, c) {},
    73: function (e, t, c) {
      "use strict";
      c.r(t);
      var n = c(4),
        r = c.n(n),
        i = c(40),
        s = c.n(i),
        a = (c(53), c(17)),
        j = c(15),
        o = (c(54), c(10)),
        l = c(30),
        u = c(41),
        d = {
          apiKey: "AIzaSyBZcWrewTZuE4MGtuBSkhsZ0SQUOPDQHU0",
          authDomain: "ema-john-simple-5bdb3.firebaseapp.com",
          projectId: "ema-john-simple-5bdb3",
          storageBucket: "ema-john-simple-5bdb3.appspot.com",
          messagingSenderId: "797567867305",
          appId: "1:797567867305:web:20eb0c08787c8596188cb8",
        };
      (function () {
        Object(u.a)(d);
      })();
      var b = function () {
          var e = Object(n.useState)({}),
            t = Object(o.a)(e, 2),
            c = t[0],
            r = t[1],
            i = Object(l.b)(),
            s = new l.a();
          return (
            Object(n.useEffect)(function () {
              Object(l.c)(i, function (e) {
                e && r(e);
              });
            }, []),
            {
              user: c,
              signInUsingGoogle: function () {
                return Object(l.d)(i, s);
              },
              logOut: function () {
                Object(l.e)(i).then(function () {
                  r({});
                });
              },
            }
          );
        },
        h = c(3),
        O = Object(n.createContext)(),
        p = function (e) {
          var t = e.children,
            c = b();
          return Object(h.jsx)(O.Provider, { value: c, children: t });
        },
        x = function () {
          return Object(n.useContext)(O);
        },
        f = c.p + "static/media/logo.0dd9a510.png",
        m =
          (c(57),
          function () {
            var e = x(),
              t = e.user,
              c = e.logOut;
            return Object(h.jsxs)("div", {
              className: "header",
              children: [
                Object(h.jsx)("img", { className: "logo", src: f, alt: "" }),
                Object(h.jsxs)("nav", {
                  children: [
                    Object(h.jsx)(a.c, { to: "/shop", children: "Shop" }),
                    Object(h.jsx)(a.c, {
                      to: "/review",
                      children: "Order Review",
                    }),
                    Object(h.jsx)(a.c, {
                      to: "/inventory",
                      children: "Manage Inventory",
                    }),
                    t.email &&
                      Object(h.jsx)(a.c, { to: "/orders", children: "Orders" }),
                    Object(h.jsxs)("span", {
                      className: "font-white",
                      children: [" ", t.displayName, " "],
                    }),
                    t.email
                      ? Object(h.jsx)("button", {
                          onClick: c,
                          children: "Logout",
                        })
                      : Object(h.jsx)(a.c, { to: "/login", children: "Login" }),
                    Object(h.jsx)(a.c, {
                      to: "/register",
                      children: "Register Here",
                    }),
                  ],
                }),
              ],
            });
          }),
        v = function () {
          return Object(h.jsx)("div", {
            children: Object(h.jsx)("h2", { children: "This is Inventory" }),
          });
        },
        g = c(38),
        y =
          (c(65),
          function () {
            var e,
              t = x().signInUsingGoogle,
              c = Object(g.useLocation)(),
              n = Object(g.useHistory)(),
              r =
                (null === (e = c.state) || void 0 === e ? void 0 : e.from) ||
                "/shop";
            return Object(h.jsxs)("div", {
              className: "login-form",
              children: [
                Object(h.jsx)("h1", { children: "Login Here" }),
                Object(h.jsxs)("form", {
                  onSubmit: "",
                  children: [
                    Object(h.jsx)("input", {
                      type: "email",
                      name: "",
                      placeholder: "Your Email",
                      id: "",
                    }),
                    Object(h.jsx)("br", {}),
                    Object(h.jsx)("input", {
                      type: "password",
                      name: "",
                      placeholder: "Password",
                      id: "",
                    }),
                    Object(h.jsx)("br", {}),
                    Object(h.jsx)("input", { type: "submit", value: "Login" }),
                  ],
                }),
                Object(h.jsxs)("p", {
                  children: [
                    "New to ema-John? ",
                    Object(h.jsx)(a.b, {
                      to: "/register",
                      children: "Create Account",
                    }),
                  ],
                }),
                Object(h.jsx)("div", {
                  children:
                    "..............................or..............................................",
                }),
                Object(h.jsx)("br", {}),
                Object(h.jsx)("button", {
                  className: "btn-regular",
                  onClick: function () {
                    t().then(function (e) {
                      n.push(r);
                    });
                  },
                  children: "Signin with Google",
                }),
              ],
            });
          }),
        S = function () {
          return Object(h.jsxs)("div", {
            children: [
              Object(h.jsx)("h1", { children: "404" }),
              Object(h.jsx)("h3", {
                children: "The page you are looking for is not available",
              }),
            ],
          });
        },
        N = function () {
          return localStorage.getItem("shopping_cart");
        },
        k = function (e) {
          localStorage.setItem("shopping_cart", JSON.stringify(e));
        },
        w = function () {
          var e = N();
          return e ? JSON.parse(e) : {};
        },
        C = function () {
          var e = Object(n.useState)([]),
            t = Object(o.a)(e, 2),
            c = t[0],
            r = t[1];
          return (
            Object(n.useEffect)(function () {
              var e = w(),
                t = Object.keys(e);
              fetch("http://localhost:5000/products/byKeys", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(t),
              })
                .then(function (e) {
                  return e.json();
                })
                .then(function (t) {
                  if ((console.log(t), t.length)) {
                    var c = [],
                      n = function (n) {
                        var r = t.find(function (e) {
                          return e.key === n;
                        });
                        if (r) {
                          var i = e[n];
                          (r.quantity = i), c.push(r);
                        }
                      };
                    for (var i in e) n(i);
                    r(c);
                  }
                });
            }, []),
            [c, r]
          );
        },
        I = c(12),
        R =
          (c(66),
          function (e) {
            var t,
              c = e.cart,
              n = 0,
              r = 0,
              i = Object(I.a)(c);
            try {
              for (i.s(); !(t = i.n()).done; ) {
                var s = t.value;
                s.quantity || (s.quantity = 1),
                  (r += s.price * s.quantity),
                  (n += s.quantity);
              }
            } catch (l) {
              i.e(l);
            } finally {
              i.f();
            }
            var a = r > 0 ? 15 : 0,
              j = 0.1 * (r + a),
              o = r + a + j;
            return Object(h.jsxs)("div", {
              className: "cart",
              children: [
                Object(h.jsx)("h3", { children: "Order Summary" }),
                Object(h.jsxs)("h4", { children: ["Items Ordered: ", n] }),
                Object(h.jsxs)("p", { children: ["Total: ", r.toFixed(2)] }),
                Object(h.jsxs)("p", { children: ["Shipping: ", a] }),
                Object(h.jsxs)("p", { children: ["Tax: ", j.toFixed(2)] }),
                Object(h.jsxs)("p", {
                  children: ["Grand Total: ", o.toFixed(2)],
                }),
                e.children,
              ],
            });
          }),
        P = function (e) {
          var t = e.product,
            c = t.name,
            n = t.price,
            r = t.quantity,
            i = t.key,
            s = e.handleRemove;
          return Object(h.jsx)("div", {
            className: "product",
            children: Object(h.jsxs)("div", {
              children: [
                Object(h.jsx)("h4", { className: "product-name", children: c }),
                Object(h.jsxs)("p", { children: ["Price: ", n] }),
                Object(h.jsxs)("p", { children: ["Quantity: ", r] }),
                Object(h.jsx)("button", {
                  onClick: function () {
                    return s(i);
                  },
                  className: "btn-regular",
                  children: "Remove",
                }),
              ],
            }),
          });
        },
        T = function () {
          var e = C(),
            t = Object(o.a)(e, 2),
            c = t[0],
            n = t[1],
            r = Object(j.useHistory)(),
            i = function (e) {
              var t = c.filter(function (t) {
                return t.key !== e;
              });
              n(t),
                (function (e) {
                  var t = N();
                  if (t) {
                    var c = JSON.parse(t);
                    delete c[e], k(c);
                  }
                })(e);
            };
          return Object(h.jsxs)("div", {
            className: "shop-container",
            children: [
              Object(h.jsx)("div", {
                className: "product-container",
                children: c.map(function (e) {
                  return Object(h.jsx)(
                    P,
                    { product: e, handleRemove: i },
                    e.key
                  );
                }),
              }),
              Object(h.jsx)("div", {
                className: "cart-container",
                children: Object(h.jsx)(R, {
                  cart: c,
                  children: Object(h.jsx)("button", {
                    onClick: function () {
                      r.push("/shipping");
                    },
                    className: "btn-regular",
                    children: "Proceed to Shipping",
                  }),
                }),
              }),
            ],
          });
        },
        q = function () {
          var e = Object(n.useState)([]),
            t = Object(o.a)(e, 2),
            c = t[0],
            r = t[1],
            i = x().user;
          return (
            Object(n.useEffect)(function () {
              fetch("http://localhost:5000/orders?email=".concat(i.email))
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  return r(e);
                });
            }, []),
            Object(h.jsxs)("div", {
              align: "center",
              children: [
                Object(h.jsx)("h1", { children: "Order Summary" }),
                Object(h.jsx)("hr", {}),
                Object(h.jsxs)("h2", {
                  children: ["You have placed: ", c.length, " orders"],
                }),
                Object(h.jsx)("ul", {
                  children: c.map(function (e) {
                    return Object(h.jsx)("li", { children: e.email }, e._id);
                  }),
                }),
              ],
            })
          );
        },
        A = c.p + "static/media/giphy.46a86830.gif",
        E = function () {
          return Object(h.jsx)("div", {
            children: Object(h.jsx)("img", { src: A, alt: "" }),
          });
        },
        J = c(8),
        L = c(27),
        F = ["children"],
        G = function (e) {
          var t = e.children,
            c = Object(L.a)(e, F),
            n = x().user;
          return Object(h.jsx)(
            j.Route,
            Object(J.a)(
              Object(J.a)({}, c),
              {},
              {
                render: function (e) {
                  var c = e.location;
                  return n.email
                    ? t
                    : Object(h.jsx)(j.Redirect, {
                        to: { pathname: "/login", state: { from: c } },
                      });
                },
              }
            )
          );
        },
        H =
          (c(67),
          function () {
            return Object(h.jsxs)("div", {
              className: "form-control",
              children: [
                Object(h.jsx)("h1", { children: "Create Account" }),
                Object(h.jsxs)("form", {
                  onSubmit: "",
                  children: [
                    Object(h.jsx)("input", {
                      type: "email",
                      name: "",
                      placeholder: "Enter Your Email",
                      id: "",
                    }),
                    Object(h.jsx)("br", {}),
                    Object(h.jsx)("input", {
                      type: "password",
                      name: "",
                      placeholder: "Enter your Password",
                      id: "",
                    }),
                    Object(h.jsx)("br", {}),
                    Object(h.jsx)("input", {
                      type: "password",
                      name: "",
                      placeholder: "Re-enter your Password",
                      id: "",
                    }),
                    Object(h.jsx)("br", {}),
                    Object(h.jsx)("input", {
                      type: "submit",
                      value: "Create Account",
                    }),
                  ],
                }),
                Object(h.jsxs)("p", {
                  children: [
                    "Already Have an Acoount? ",
                    Object(h.jsx)(a.b, { to: "/login", children: "Sign In" }),
                  ],
                }),
                Object(h.jsx)("div", {
                  children:
                    ".............................or...............................................",
                }),
                Object(h.jsx)("br", {}),
                Object(h.jsx)("button", {
                  className: "btn-regular",
                  children: "Signin with Google",
                }),
              ],
            });
          }),
        B = c(44),
        V =
          (c(68),
          function () {
            var e = Object(B.a)(),
              t = e.register,
              c = e.handleSubmit,
              n = e.reset,
              r = e.formState.errors,
              i = x().user;
            return Object(h.jsxs)("div", {
              children: [
                Object(h.jsx)("h2", { children: "This is shipping" }),
                Object(h.jsxs)("form", {
                  className: "shipping-form",
                  onSubmit: c(function (e) {
                    var t = w();
                    (e.order = t),
                      fetch("http://localhost:5000/orders", {
                        method: "POST",
                        headers: { "content-type": "application/json" },
                        body: JSON.stringify(e),
                      })
                        .then(function (e) {
                          return e.json();
                        })
                        .then(function (e) {
                          e.insertedId &&
                            (alert("your order placed successfully"),
                            localStorage.removeItem("shopping_cart"),
                            n());
                        });
                  }),
                  children: [
                    Object(h.jsx)(
                      "input",
                      Object(J.a)({ defaultValue: i.displayName }, t("name"))
                    ),
                    Object(h.jsx)("br", {}),
                    Object(h.jsx)(
                      "input",
                      Object(J.a)(
                        { defaultValue: i.email },
                        t("email", { required: !0 })
                      )
                    ),
                    Object(h.jsx)("br", {}),
                    r.email &&
                      Object(h.jsx)("span", {
                        className: "error",
                        children: "This field is required",
                      }),
                    Object(h.jsx)("br", {}),
                    Object(h.jsx)(
                      "input",
                      Object(J.a)(
                        { placeholder: "Address", defaultValue: "" },
                        t("address")
                      )
                    ),
                    Object(h.jsx)("br", {}),
                    Object(h.jsx)(
                      "input",
                      Object(J.a)(
                        { placeholder: "city", defaultValue: "" },
                        t("city")
                      )
                    ),
                    Object(h.jsx)("br", {}),
                    Object(h.jsx)(
                      "input",
                      Object(J.a)(
                        { placeholder: "Phone", defaultValue: "" },
                        t("phone")
                      )
                    ),
                    Object(h.jsx)("br", {}),
                    Object(h.jsx)("input", { type: "submit" }),
                  ],
                }),
              ],
            });
          }),
        M = c(9),
        U = c(45),
        Y = c(47),
        _ = (c(71), c(46)),
        D = function (e) {
          var t = e.product,
            c = t.name,
            n = t.img,
            r = t.seller,
            i = t.price,
            s = t.stock,
            a = t.star;
          return Object(h.jsxs)("div", {
            className: "product",
            children: [
              Object(h.jsx)("div", {
                children: Object(h.jsx)("img", { src: n, alt: "" }),
              }),
              Object(h.jsxs)("div", {
                children: [
                  Object(h.jsx)("h4", {
                    className: "product-name",
                    children: c,
                  }),
                  Object(h.jsx)("p", {
                    children: Object(h.jsxs)("small", {
                      children: ["by: ", r],
                    }),
                  }),
                  Object(h.jsxs)("p", { children: ["Price: ", i] }),
                  Object(h.jsx)("p", {
                    children: Object(h.jsxs)("small", {
                      children: ["only ", s, " left in stock - order soon"],
                    }),
                  }),
                  Object(h.jsx)(_.a, {
                    initialRating: a,
                    emptySymbol: "far fa-star icon-color",
                    fullSymbol: "fas fa-star icon-color",
                    readonly: !0,
                  }),
                  Object(h.jsx)("br", {}),
                  Object(h.jsxs)("button", {
                    onClick: function () {
                      return e.handleAddToCart(e.product);
                    },
                    className: "btn-regular",
                    children: [
                      Object(h.jsx)(U.a, { icon: Y.a }),
                      " add to cart",
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        Q =
          (c(72),
          function () {
            var e = Object(n.useState)([]),
              t = Object(o.a)(e, 2),
              c = t[0],
              r = t[1],
              i = C(c),
              s = Object(o.a)(i, 2),
              j = s[0],
              l = s[1],
              u = Object(n.useState)(0),
              d = Object(o.a)(u, 2),
              b = d[0],
              O = d[1],
              p = Object(n.useState)(0),
              x = Object(o.a)(p, 2),
              f = x[0],
              m = x[1],
              v = Object(n.useState)([]),
              g = Object(o.a)(v, 2),
              y = g[0],
              S = g[1];
            Object(n.useEffect)(
              function () {
                fetch(
                  "http://localhost:5000/products?page="
                    .concat(b, "&&size=")
                    .concat(10)
                )
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (e) {
                    r(e.products), S(e.products);
                    var t = e.count,
                      c = Math.ceil(t / 10);
                    m(c);
                  });
              },
              [b]
            );
            var w = function (e) {
              var t = j.find(function (t) {
                  return t.key === e.key;
                }),
                c = [];
              if (t) {
                var n = j.filter(function (t) {
                  return t.key !== e.key;
                });
                (t.quantity = t.quantity + 1),
                  (c = [].concat(Object(M.a)(n), [e]));
              } else (e.quantity = 1), (c = [].concat(Object(M.a)(j), [e]));
              l(c),
                (function (e) {
                  var t = N(),
                    c = {};
                  if (t)
                    if ((c = JSON.parse(t))[e]) {
                      var n = c[e] + 1;
                      c[e] = n;
                    } else c[e] = 1;
                  else c[e] = 1;
                  k(c);
                })(e.key);
            };
            return Object(h.jsxs)(h.Fragment, {
              children: [
                Object(h.jsx)("div", {
                  className: "search-container",
                  children: Object(h.jsx)("input", {
                    type: "text",
                    onChange: function (e) {
                      var t = e.target.value,
                        n = c.filter(function (e) {
                          return e.name.toLowerCase().includes(t.toLowerCase());
                        });
                      S(n);
                    },
                    placeholder: "Search Product",
                  }),
                }),
                Object(h.jsxs)("div", {
                  className: "shop-container",
                  children: [
                    Object(h.jsxs)("div", {
                      className: "product-container",
                      children: [
                        y.map(function (e) {
                          return Object(h.jsx)(
                            D,
                            { product: e, handleAddToCart: w },
                            e.key
                          );
                        }),
                        Object(h.jsx)("div", {
                          className: "pagination",
                          children: Object(M.a)(Array(f).keys()).map(function (
                            e
                          ) {
                            return Object(h.jsx)(
                              "button",
                              {
                                className: e === b ? "selected" : "",
                                onClick: function () {
                                  return O(e);
                                },
                                children: e + 1,
                              },
                              e
                            );
                          }),
                        }),
                      ],
                    }),
                    Object(h.jsx)("div", {
                      className: "cart-container",
                      children: Object(h.jsx)(R, {
                        cart: j,
                        children: Object(h.jsx)(a.b, {
                          to: "/review",
                          children: Object(h.jsx)("button", {
                            className: "btn-regular",
                            children: "Review Your Order",
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            });
          });
      var Z = function () {
          return Object(h.jsx)("div", {
            children: Object(h.jsx)(p, {
              children: Object(h.jsxs)(a.a, {
                children: [
                  Object(h.jsx)(m, {}),
                  Object(h.jsxs)(j.Switch, {
                    children: [
                      Object(h.jsx)(j.Route, {
                        exact: !0,
                        path: "/",
                        children: Object(h.jsx)(Q, {}),
                      }),
                      Object(h.jsx)(j.Route, {
                        path: "/shop",
                        children: Object(h.jsx)(Q, {}),
                      }),
                      Object(h.jsx)(j.Route, {
                        path: "/review",
                        children: Object(h.jsx)(T, {}),
                      }),
                      Object(h.jsx)(G, {
                        path: "/inventory",
                        children: Object(h.jsx)(v, {}),
                      }),
                      Object(h.jsx)(G, {
                        path: "/shipping",
                        children: Object(h.jsx)(V, {}),
                      }),
                      Object(h.jsx)(G, {
                        path: "/placeorder",
                        children: Object(h.jsx)(E, {}),
                      }),
                      Object(h.jsx)(G, {
                        path: "/orders",
                        children: Object(h.jsx)(q, {}),
                      }),
                      Object(h.jsx)(j.Route, {
                        path: "/login",
                        children: Object(h.jsx)(y, {}),
                      }),
                      Object(h.jsx)(j.Route, {
                        path: "/register",
                        children: Object(h.jsx)(H, {}),
                      }),
                      Object(h.jsx)(j.Route, {
                        path: "*",
                        children: Object(h.jsx)(S, {}),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        z = function (e) {
          e &&
            e instanceof Function &&
            c
              .e(3)
              .then(c.bind(null, 74))
              .then(function (t) {
                var c = t.getCLS,
                  n = t.getFID,
                  r = t.getFCP,
                  i = t.getLCP,
                  s = t.getTTFB;
                c(e), n(e), r(e), i(e), s(e);
              });
        };
      s.a.render(
        Object(h.jsx)(r.a.StrictMode, { children: Object(h.jsx)(Z, {}) }),
        document.getElementById("root")
      ),
        z();
    },
  },
  [[73, 1, 2]],
]);
//# sourceMappingURL=main.ab1a98ef.chunk.js.map
