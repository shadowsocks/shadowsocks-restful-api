!function(e) {
    var r = {};
    function t(n) {
        if (r[n]) return r[n].exports;
        var a = r[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(a.exports, a, a.exports, t), a.l = !0, a.exports;
    }
    t.m = e, t.c = r, t.d = function(e, r, n) {
        t.o(e, r) || Object.defineProperty(e, r, {
            enumerable: !0,
            get: n
        });
    }, t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, t.t = function(e, r) {
        if (1 & r && (e = t(e)), 8 & r) return e;
        if (4 & r && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (t.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & r && "string" != typeof e) for (var a in e) t.d(n, a, function(r) {
            return e[r];
        }.bind(null, a));
        return n;
    }, t.n = function(e) {
        var r = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return t.d(r, "a", r), r;
    }, t.o = function(e, r) {
        return Object.prototype.hasOwnProperty.call(e, r);
    }, t.p = "", t(t.s = 21);
}([ function(e, r) {
    e.exports = require("debug");
}, function(e, r) {
    e.exports = require("validator");
}, function(e, r) {
    e.exports = require("fs");
}, function(e, r) {
    e.exports = require("path");
}, function(e, r) {
    e.exports = require("crypto");
}, function(e, r) {
    e.exports = require("jsonwebtoken");
}, function(e, r, t) {
    "use strict";
    var n, a, s, o = (n = u(regeneratorRuntime.mark(function e(r) {
        var t, n, a;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (r) {
                    e.next = 2;
                    break;
                }
                throw new Error("illegal argument");

              case 2:
                if (t = r.port, n = r.password, a = r.method, !(!t || !Number.isInteger(t) || t < 1 || t > 65535)) {
                    e.next = 6;
                    break;
                }
                throw new Error("illegal argument");

              case 6:
                if (n && "string" == typeof n && !(n.length < 1)) {
                    e.next = 9;
                    break;
                }
                throw new Error("illegal argument");

              case 9:
                if (a && "string" == typeof a && l.isIn(a, [ "aes-128-gcm", "aes-192-gcm", "aes-256-gcm", "aes-128-cfb", "aes-192-cfb", "aes-256-cfb", "aes-128-ctr", "aes-192-ctr", "aes-256-ctr", "camellia-128-cfb", "camellia-192-cfb", "camellia-256-cfb", "bf-cfb", "chacha20-ietf-poly1305", "xchacha20-ietf-poly1305", "salsa20", "chacha20", "chacha20-ietf" ])) {
                    e.next = 12;
                    break;
                }
                throw new Error("illegal argument");

              case 12:
                m.addPort({
                    port: t,
                    password: n,
                    method: a
                });

              case 14:
              case "end":
                return e.stop();
            }
        }, e, this);
    })), function(e) {
        return n.apply(this, arguments);
    }), i = (a = u(regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (!(isNaN(r) || !Number.isInteger(r) || r < 1 || r > 65535)) {
                    e.next = 2;
                    break;
                }
                throw new Error("illegal argument");

              case 2:
                return e.next = 5, m.removePort(r);

              case 5:
              case "end":
                return e.stop();
            }
        }, e, this);
    })), function(e) {
        return a.apply(this, arguments);
    }), c = (s = u(regeneratorRuntime.mark(function e() {
        var r;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = m.getPorts(), e.abrupt("return", r);

              case 2:
              case "end":
                return e.stop();
            }
        }, e, this);
    })), function() {
        return s.apply(this, arguments);
    });
    function u(e) {
        return function() {
            var r = e.apply(this, arguments);
            return new Promise(function(e, t) {
                return function n(a, s) {
                    try {
                        var o = r[a](s), i = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    if (!o.done) return Promise.resolve(i).then(function(e) {
                        n("next", e);
                    }, function(e) {
                        n("throw", e);
                    });
                    e(i);
                }("next");
            });
        };
    }
    var p = t(2), f = t(3), l = t(1), h = (t(0)("dao"), f.resolve(__dirname, "./ports.json")), m = {
        ports: [],
        getPorts: function() {
            return this.ports;
        },
        setPorts: function(e) {
            if (!e || !Array.isArray(e)) throw new Error("illegal argument");
            e.forEach(function(e) {
                var r = e.port, t = e.password, n = e.method;
                if (!r || !Number.isInteger(r) || r < 1 || r > 65535) throw new Error("illegal argument, port illegal");
                if (!t || "string" != typeof t || t.length < 1) throw new Error("illegal argument, password illegal");
                if (!n || "string" != typeof n || !l.isIn(n, [ "aes-128-gcm", "aes-192-gcm", "aes-256-gcm", "aes-128-cfb", "aes-192-cfb", "aes-256-cfb", "aes-128-ctr", "aes-192-ctr", "aes-256-ctr", "camellia-128-cfb", "camellia-192-cfb", "camellia-256-cfb", "bf-cfb", "chacha20-ietf-poly1305", "xchacha20-ietf-poly1305", "salsa20", "chacha20", "chacha20-ietf" ])) throw new Error("illegal argument");
            });
            var r = e.map(function(e) {
                return e.port;
            });
            if (new Set(r).size !== r.length) throw new Error("illegal argument, duplicate ports");
            this.ports = JSON.parse(JSON.stringify(e));
        },
        addPort: function(e) {
            if (!e) throw new Error("illegal argument");
            var r = e.port, t = e.password, n = e.method;
            if (!r || !Number.isInteger(r) || r < 1 || r > 65535) throw new Error("illegal argument");
            if (!t || "string" != typeof t || t.length < 1) throw new Error("illegal argument");
            if (!n || "string" != typeof n || !l.isIn(n, [ "aes-128-gcm", "aes-192-gcm", "aes-256-gcm", "aes-128-cfb", "aes-192-cfb", "aes-256-cfb", "aes-128-ctr", "aes-192-ctr", "aes-256-ctr", "camellia-128-cfb", "camellia-192-cfb", "camellia-256-cfb", "bf-cfb", "chacha20-ietf-poly1305", "xchacha20-ietf-poly1305", "salsa20", "chacha20", "chacha20-ietf" ])) throw new Error("illegal argument");
            if (this.ports.map(function(e) {
                return e.port;
            }).includes(r)) throw new Error("port already exists in database");
            this.ports.push({
                port: r,
                password: t,
                method: n
            }), this.savePortsToFile();
        },
        removePort: function(e) {
            if (isNaN(e) || !Number.isInteger(e) || e < 1 || e > 65535) throw new Error("illegal argument");
            this.ports = this.ports.filter(function(r) {
                return r.port !== e;
            }), this.savePortsToFile();
        },
        initPortsFromFile: function() {
            try {
                var e = p.readFileSync(h, "utf8");
                e && this.setPorts(JSON.parse(e));
            } catch (e) {
                p.openSync(h, "w");
            }
        },
        savePortsToFile: function() {
            p.writeFile(h, JSON.stringify(this.ports), function(e) {
                if (e) throw e;
            });
        }
    };
    m.initPortsFromFile(), e.exports.addPort = o, e.exports.removePort = i, e.exports.getAllPorts = c;
}, function(e, r) {
    e.exports = require("portastic");
}, function(e, r) {
    e.exports = require("async-lock");
}, function(e, r) {
    e.exports = require("unix-dgram");
}, function(e, r, t) {
    "use strict";
    var n, a, s, o, i, c, u, p, f, l, h, m, g, d, w, b, x, v, y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, k = (n = W(regeneratorRuntime.mark(function e() {
        var r, t, n, a, s = this;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, U.getAllPorts();

              case 2:
                return r = e.sent, e.prev = 3, e.next = 6, N();

              case 6:
                t = e.sent, n = t.map(function(e) {
                    return e.port;
                }), r.forEach(function() {
                    var e = W(regeneratorRuntime.mark(function e(r) {
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (n.includes(r.port)) {
                                    e.next = 3;
                                    break;
                                }
                                return e.next = 3, P(r);

                              case 3:
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        }, e, s);
                    }));
                    return function(r) {
                        return e.apply(this, arguments);
                    };
                }()), a = r.map(function(e) {
                    return e.port;
                }), t.forEach(function() {
                    var e = W(regeneratorRuntime.mark(function e(r) {
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (a.includes(r.port)) {
                                    e.next = 3;
                                    break;
                                }
                                return e.next = 3, O(r.port);

                              case 3:
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        }, e, s);
                    }));
                    return function(r) {
                        return e.apply(this, arguments);
                    };
                }()), e.next = 23;
                break;

              case 13:
                if (e.prev = 13, e.t0 = e.catch(3), "shadowsocks unreachable" !== e.t0.message) {
                    e.next = 18;
                    break;
                }
                e.next = 22;
                break;

              case 18:
                if ("shadowsocks no response" !== e.t0.message) {
                    e.next = 21;
                    break;
                }
                e.next = 22;
                break;

              case 21:
                throw e.t0;

              case 22:
              case 23:
              case 24:
              case "end":
                return e.stop();
            }
        }, e, this, [ [ 3, 13 ] ]);
    })), function() {
        return n.apply(this, arguments);
    }), E = (a = W(regeneratorRuntime.mark(function e(r) {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (r) {
                    e.next = 2;
                    break;
                }
                throw new Error("illegal argument");

              case 2:
                if (r === Y) {
                    e.next = 5;
                    break;
                }
                throw new Error("invalid password");

              case 5:
              case 6:
              case "end":
                return e.stop();
            }
        }, e, this);
    })), function(e) {
        return a.apply(this, arguments);
    }), R = (s = W(regeneratorRuntime.mark(function e(r) {
        var t, n, a;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (r) {
                    e.next = 2;
                    break;
                }
                throw new Error("illegal argument");

              case 2:
                if (t = r.port, n = r.password, a = r.method, !(!t || !Number.isInteger(t) || t < 1 || t > 65535)) {
                    e.next = 6;
                    break;
                }
                throw new Error("illegal argument");

              case 6:
                if (n && "string" == typeof n && !(n.length < 1)) {
                    e.next = 9;
                    break;
                }
                throw new Error("illegal argument");

              case 9:
                if (a && "string" == typeof a && H.isIn(a, [ "aes-128-gcm", "aes-192-gcm", "aes-256-gcm", "aes-128-cfb", "aes-192-cfb", "aes-256-cfb", "aes-128-ctr", "aes-192-ctr", "aes-256-ctr", "camellia-128-cfb", "camellia-192-cfb", "camellia-256-cfb", "bf-cfb", "chacha20-ietf-poly1305", "xchacha20-ietf-poly1305", "salsa20", "chacha20", "chacha20-ietf" ])) {
                    e.next = 12;
                    break;
                }
                throw new Error("illegal argument");

              case 12:
                return e.next = 15, P({
                    port: t,
                    password: n,
                    method: a
                });

              case 15:
                return e.next = 17, U.addPort({
                    port: t,
                    password: n,
                    method: a
                });

              case 17:
              case "end":
                return e.stop();
            }
        }, e, this);
    })), function(e) {
        return s.apply(this, arguments);
    }), P = (o = W(regeneratorRuntime.mark(function e(r) {
        var t, n, a, s;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (r) {
                    e.next = 2;
                    break;
                }
                throw new Error("illegal argument");

              case 2:
                if (t = r.port, n = r.password, a = r.method, !(!t || !Number.isInteger(t) || t < 1 || t > 65535)) {
                    e.next = 6;
                    break;
                }
                throw new Error("illegal argument");

              case 6:
                if (n && "string" == typeof n && !(n.length < 1)) {
                    e.next = 9;
                    break;
                }
                throw new Error("illegal argument");

              case 9:
                if (a && "string" == typeof a && H.isIn(a, [ "aes-128-gcm", "aes-192-gcm", "aes-256-gcm", "aes-128-cfb", "aes-192-cfb", "aes-256-cfb", "aes-128-ctr", "aes-192-ctr", "aes-256-ctr", "camellia-128-cfb", "camellia-192-cfb", "camellia-256-cfb", "bf-cfb", "chacha20-ietf-poly1305", "xchacha20-ietf-poly1305", "salsa20", "chacha20", "chacha20-ietf" ])) {
                    e.next = 12;
                    break;
                }
                throw new Error("illegal argument");

              case 12:
                return e.next = 15, J(t);

              case 15:
                if (!e.sent) {
                    e.next = 17;
                    break;
                }
                throw new Error("port already exists from shadowsocks");

              case 17:
                return e.next = 20, L(t);

              case 20:
                if (e.sent) {
                    e.next = 22;
                    break;
                }
                throw new Error("port not available from operating system");

              case 22:
                return e.next = 25, Z.getType();

              case 25:
                if ("libev" !== (s = e.sent)) {
                    e.next = 31;
                    break;
                }
                return e.next = 29, j({
                    port: t,
                    password: n,
                    method: a
                });

              case 29:
                e.next = 37;
                break;

              case 31:
                if ("python" !== s) {
                    e.next = 36;
                    break;
                }
                return e.next = 34, F({
                    port: t,
                    password: n
                });

              case 34:
                e.next = 37;
                break;

              case 36:
                throw new Error("should not come here");

              case 37:
                return e.next = 40, J(t);

              case 40:
                if (e.sent) {
                    e.next = 42;
                    break;
                }
                throw new Error("shadowsocks failed adding port");

              case 42:
              case 43:
              case "end":
                return e.stop();
            }
        }, e, this);
    })), function(e) {
        return o.apply(this, arguments);
    }), N = (i = W(regeneratorRuntime.mark(function e() {
        var r, t, n;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, Z.getType();

              case 2:
                if ("libev" !== (r = e.sent)) {
                    e.next = 10;
                    break;
                }
                return e.next = 6, A();

              case 6:
                return t = e.sent, e.abrupt("return", t);

              case 10:
                if ("python" !== r) {
                    e.next = 17;
                    break;
                }
                return e.next = 13, getAllPortsFromPython();

              case 13:
                return n = e.sent, e.abrupt("return", n);

              case 17:
                throw new Error("should not come here");

              case 18:
              case 19:
              case "end":
                return e.stop();
            }
        }, e, this);
    })), function() {
        return i.apply(this, arguments);
    }), S = (c = W(regeneratorRuntime.mark(function e() {
        var r, t, n;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, Z.getType();

              case 2:
                if ("libev" !== (r = e.sent)) {
                    e.next = 10;
                    break;
                }
                return e.next = 6, q();

              case 6:
                return t = e.sent, e.abrupt("return", t);

              case 10:
                if ("python" !== r) {
                    e.next = 17;
                    break;
                }
                return e.next = 13, getAllTrafficFromPython();

              case 13:
                return n = e.sent, e.abrupt("return", n);

              case 17:
                throw new Error("should not come here");

              case 18:
              case 19:
              case "end":
                return e.stop();
            }
        }, e, this);
    })), function() {
        return c.apply(this, arguments);
    }), I = (u = W(regeneratorRuntime.mark(function e() {
        var r, t;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, Z.getType();

              case 2:
                if ("libev" !== (r = e.sent)) {
                    e.next = 8;
                    break;
                }
                return e.next = 6, T();

              case 6:
                e.next = 14;
                break;

              case 8:
                if ("python" !== r) {
                    e.next = 13;
                    break;
                }
                return e.next = 11, _();

              case 11:
                e.next = 14;
                break;

              case 13:
                throw new Error("should not come here");

              case 14:
                return t = {
                    pong: "pong"
                }, e.abrupt("return", t);

              case 17:
              case "end":
                return e.stop();
            }
        }, e, this);
    })), function() {
        return u.apply(this, arguments);
    }), O = (p = W(regeneratorRuntime.mark(function e(r) {
        var t;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (!(isNaN(r) || !Number.isInteger(r) || r < 1 || r > 65535)) {
                    e.next = 2;
                    break;
                }
                throw new Error("illegal argument");

              case 2:
                return e.next = 5, Z.getType();

              case 5:
                if ("libev" !== (t = e.sent)) {
                    e.next = 11;
                    break;
                }
                return e.next = 9, K(r);

              case 9:
                e.next = 17;
                break;

              case 11:
                if ("python" !== t) {
                    e.next = 16;
                    break;
                }
                return e.next = 14, C(r);

              case 14:
                e.next = 17;
                break;

              case 16:
                throw new Error("should not come here");

              case 17:
                return e.next = 20, J(r);

              case 20:
                if (!e.sent) {
                    e.next = 22;
                    break;
                }
                throw new Error("shadowsocks failed removing port");

              case 22:
                return e.next = 25, L(r);

              case 25:
                if (e.sent) {
                    e.next = 27;
                    break;
                }
                throw new Error("operating system failed removing port");

              case 27:
                return e.next = 30, U.removePort(r);

              case 30:
              case "end":
                return e.stop();
            }
        }, e, this);
    })), function(e) {
        return p.apply(this, arguments);
    }), T = (f = W(regeneratorRuntime.mark(function e() {
        var r, t, n;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = $.getCommandKeyword("libev", "ping"), e.next = 3, ee(r);

              case 3:
                if ("stat:" !== (t = e.sent).substr(0, 5)) {
                    e.next = 9;
                    break;
                }
                return n = JSON.parse(t.substr(5)), e.abrupt("return", n);

              case 9:
                throw new Error("pingLibev, received unknown message");

              case 10:
              case 11:
              case "end":
                return e.stop();
            }
        }, e, this);
    })), function() {
        return f.apply(this, arguments);
    }), _ = (l = W(regeneratorRuntime.mark(function e() {
        var r, t;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = $.getCommandKeyword("python", "ping"), e.next = 3, ee(r);

              case 3:
                if ("pong" !== (t = e.sent).substr(0, 4)) {
                    e.next = 8;
                    break;
                }
                return e.abrupt("return", t);

              case 8:
                throw new Error("pingPython, received unknown message");

              case 9:
              case 10:
              case "end":
                return e.stop();
            }
        }, e, this);
    })), function() {
        return l.apply(this, arguments);
    }), A = (h = W(regeneratorRuntime.mark(function e() {
        var r, t, n, a;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = $.getCommandKeyword("libev", "getAllPorts"), e.next = 3, ee(r);

              case 3:
                if (t = e.sent, n = [], "[\n\t" !== t.substr(0, 3)) {
                    e.next = 10;
                    break;
                }
                a = JSON.parse(t), n = a.map(function(e) {
                    return {
                        port: Number(e.server_port),
                        password: e.password,
                        method: e.method
                    };
                }), e.next = 14;
                break;

              case 10:
                if ("\n]" !== t.substr(0, 2)) {
                    e.next = 13;
                    break;
                }
                e.next = 14;
                break;

              case 13:
                throw new Error("getAllPortsFromLibev, received unknown message");

              case 14:
                return e.abrupt("return", n);

              case 16:
              case "end":
                return e.stop();
            }
        }, e, this);
    })), function() {
        return h.apply(this, arguments);
    }), q = (m = W(regeneratorRuntime.mark(function e() {
        var r, t, n, a, s;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return r = $.getCommandKeyword("libev", "getAllTraffic"), e.next = 3, ee(r);

              case 3:
                if (t = e.sent, n = void 0, "stat:" !== t.substr(0, 5)) {
                    e.next = 9;
                    break;
                }
                n = JSON.parse(t.substr(5)), e.next = 10;
                break;

              case 9:
                throw new Error("getAllTrafficFromLibev, received unknown message");

              case 10:
                return a = Object.keys(n), s = [], a.forEach(function(e) {
                    var r = {
                        port: Number(e),
                        traffic: Number(n[e])
                    };
                    s.push(r);
                }), e.abrupt("return", s);

              case 15:
              case "end":
                return e.stop();
            }
        }, e, this);
    })), function() {
        return m.apply(this, arguments);
    }), j = (g = W(regeneratorRuntime.mark(function e(r) {
        var t, n, a;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (!(!r || "object" !== (void 0 === r ? "undefined" : y(r)) || !r.hasOwnProperty("port") || !r.hasOwnProperty("password") || isNaN(r.port) || !Number.isInteger(r.port) || r.port < 1 || r.port > 65535 || "string" != typeof r.password || r.password.length < 1)) {
                    e.next = 2;
                    break;
                }
                throw new Error("illegal argument");

              case 2:
                return t = $.getCommandKeyword("libev", "add"), n = t + ": " + JSON.stringify({
                    server_port: r.port,
                    password: r.password,
                    method: r.method
                }), e.next = 7, ee(n);

              case 7:
                if ("ok" !== (a = e.sent).substr(0, 2)) {
                    e.next = 11;
                    break;
                }
                e.next = 16;
                break;

              case 11:
                if ("err" !== a.substr(0, 3)) {
                    e.next = 15;
                    break;
                }
                throw new Error("illegal command");

              case 15:
                throw new Error("sendAddToLibev, received unknown message:" + a);

              case 16:
              case 17:
              case "end":
                return e.stop();
            }
        }, e, this);
    })), function(e) {
        return g.apply(this, arguments);
    }), F = (d = W(regeneratorRuntime.mark(function e(r) {
        var t, n, a;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (!(!r || "object" !== (void 0 === r ? "undefined" : y(r)) || !r.hasOwnProperty("port") || !r.hasOwnProperty("password") || isNaN(r.port) || !Number.isInteger(r.port) || r.port < 1 || r.port > 65535 || "string" != typeof r.password || r.password.length < 1)) {
                    e.next = 2;
                    break;
                }
                throw new Error("illegal argument");

              case 2:
                return t = $.getCommandKeyword("python", "add"), n = t + ": " + JSON.stringify({
                    server_port: r.port,
                    password: r.password
                }), e.next = 7, ee(n);

              case 7:
                if ("ok" !== (a = e.sent).substr(0, 2)) {
                    e.next = 11;
                    break;
                }
                e.next = 16;
                break;

              case 11:
                if ("err" !== a.substr(0, 3)) {
                    e.next = 15;
                    break;
                }
                throw new Error("illegal command");

              case 15:
                throw new Error("sendAddToPython, received unknown message:" + a);

              case 16:
              case 17:
              case "end":
                return e.stop();
            }
        }, e, this);
    })), function(e) {
        return d.apply(this, arguments);
    }), J = (w = W(regeneratorRuntime.mark(function e(r) {
        var t, n;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (!(isNaN(r) || !Number.isInteger(r) || r < 1 || r > 65535)) {
                    e.next = 2;
                    break;
                }
                throw new Error("illegal argument");

              case 2:
                return e.next = 5, N();

              case 5:
                return t = e.sent, n = t.map(function(e) {
                    return e.port;
                }), e.abrupt("return", n.includes(r));

              case 8:
              case "end":
                return e.stop();
            }
        }, e, this);
    })), function(e) {
        return w.apply(this, arguments);
    }), L = (b = W(regeneratorRuntime.mark(function e(r) {
        var t;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (!(isNaN(r) || !Number.isInteger(r) || r < 1 || r > 65535)) {
                    e.next = 2;
                    break;
                }
                throw new Error("illegal argument");

              case 2:
                return e.next = 5, Q.test(r);

              case 5:
                return t = e.sent, e.abrupt("return", t);

              case 7:
              case "end":
                return e.stop();
            }
        }, e, this);
    })), function(e) {
        return b.apply(this, arguments);
    }), K = (x = W(regeneratorRuntime.mark(function e(r) {
        var t, n, a;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (!(isNaN(r) || !Number.isInteger(r) || r < 1 || r > 65535)) {
                    e.next = 2;
                    break;
                }
                throw new Error("illegal argument");

              case 2:
                return t = $.getCommandKeyword("libev", "remove"), n = t + ": " + JSON.stringify({
                    server_port: r
                }), e.next = 7, ee(n);

              case 7:
                if ("ok" !== (a = e.sent).substr(0, 2)) {
                    e.next = 11;
                    break;
                }
                e.next = 16;
                break;

              case 11:
                if ("err" !== a.substr(0, 3)) {
                    e.next = 15;
                    break;
                }
                throw new Error("illegal command");

              case 15:
                throw new Error("sendRemoveFromLibev, received unknown message:" + a);

              case 16:
              case 17:
              case "end":
                return e.stop();
            }
        }, e, this);
    })), function(e) {
        return x.apply(this, arguments);
    }), C = (v = W(regeneratorRuntime.mark(function e(r) {
        var t, n, a;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (!(isNaN(r) || !Number.isInteger(r) || r < 1 || r > 65535)) {
                    e.next = 2;
                    break;
                }
                throw new Error("illegal argument");

              case 2:
                return t = $.getCommandKeyword("python", "remove"), n = t + ": " + JSON.stringify({
                    server_port: r
                }), e.next = 7, ee(n);

              case 7:
                if ("ok" !== (a = e.sent).substr(0, 2)) {
                    e.next = 11;
                    break;
                }
                e.next = 16;
                break;

              case 11:
                if ("err" !== a.substr(0, 3)) {
                    e.next = 15;
                    break;
                }
                throw new Error("illegal command");

              case 15:
                throw new Error("sendRemoveFromPython, received unknown message:" + a);

              case 16:
              case 17:
              case "end":
                return e.stop();
            }
        }, e, this);
    })), function(e) {
        return v.apply(this, arguments);
    });
    function W(e) {
        return function() {
            var r = e.apply(this, arguments);
            return new Promise(function(e, t) {
                return function n(a, s) {
                    try {
                        var o = r[a](s), i = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    if (!o.done) return Promise.resolve(i).then(function(e) {
                        n("next", e);
                    }, function(e) {
                        n("throw", e);
                    });
                    e(i);
                }("next");
            });
        };
    }
    var B = t(9), M = t(2), D = t(3), G = new (t(8))(), H = t(1), z = (t(0)("service"), 
    B.createSocket("unix_dgram")), Q = t(7), U = t(6), V = D.resolve(__dirname, "/tmp/shadowsocks-manager.sock"), X = D.resolve(__dirname, "/tmp/ss-controller.sock"), Y = process.env.LOGIN_PASSWORD, Z = {
        type: null,
        getType: function() {
            var e = W(regeneratorRuntime.mark(function e() {
                var r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (!this.type) {
                            e.next = 9;
                            break;
                        }
                        if ("libev" !== this.type && "python" !== this.type) {
                            e.next = 5;
                            break;
                        }
                        return e.abrupt("return", this.type);

                      case 5:
                        throw new Error("unknown shadowsocks type");

                      case 6:
                        e.next = 22;
                        break;

                      case 9:
                        return e.next = 11, ee("ping");

                      case 11:
                        if ("stat:" !== (r = e.sent).substr(0, 5)) {
                            e.next = 16;
                            break;
                        }
                        this.type = "libev", e.next = 21;
                        break;

                      case 16:
                        if ("pong" !== r.substr(0, 5)) {
                            e.next = 20;
                            break;
                        }
                        this.type = "libev", e.next = 21;
                        break;

                      case 20:
                        throw new Error("shadowsocksType.getType, received unknown message");

                      case 21:
                        return e.abrupt("return", this.type);

                      case 22:
                      case 23:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }));
            return function() {
                return e.apply(this, arguments);
            };
        }()
    }, $ = {
        commandKeywords: {
            libev: {
                ping: "ping",
                getAllPorts: "list",
                getAllTraffic: "ping",
                add: "add",
                remove: "remove"
            },
            python: {
                ping: "ping",
                getAllPorts: "",
                getAllTraffic: "",
                add: "add",
                remove: "remove"
            }
        },
        getCommandKeyword: function(e, r) {
            if ("libev" !== e && "python" !== e) throw new Error("illegal argument");
            if ("ping" !== r && "getAllPorts" !== r && "getAllTraffic" !== r && "add" !== r && "remove" !== r) throw new Error("illegal argument");
            return this.commandKeywords[e][r];
        }
    };
    function ee(e) {
        if (!e || "string" != typeof e) throw new Error("illegal argument");
        if ("ping" !== e && "list" !== e && "add: " !== e.substr(0, 5) && "remove: " !== e.substr(0, 8)) throw new Error("illegal argument");
        if ("add: " === e.substr(0, 5)) {
            var r = e.substr(5);
            if (!re(r)) throw new Error("illegal argument");
            var t = JSON.parse(r);
            if (!t.hasOwnProperty("server_port") || !t.hasOwnProperty("password") || isNaN(t.server_port) || !Number.isInteger(t.server_port) || t.server_port < 1 || t.server_port > 65535 || "string" != typeof t.password || t.password.length < 1) throw new Error("illegal argument");
        }
        if ("remove: " === e.substr(0, 8)) {
            var n = e.substr(8);
            if (!re(n)) throw new Error("illegal argument");
            var a = JSON.parse(n);
            if (!a.hasOwnProperty("server_port") || isNaN(a.server_port) || !Number.isInteger(a.server_port) || a.server_port < 1 || a.server_port > 65535) throw new Error("illegal argument");
        }
        return G.acquire("key", function() {
            return new Promise(function(r, t) {
                var n = !1;
                z.once("message", function(e) {
                    n = !0;
                    var t = new String(e);
                    r(t);
                });
                try {
                    !function(e) {
                        var r = new Buffer(e);
                        z.send(r, 0, r.length, V, function(e) {
                            if (e) throw new Error("shadowsocks unreachable");
                        });
                    }(e);
                } catch (e) {
                    throw z.removeAllListeners("message"), e;
                }
                setTimeout(function() {
                    n || (z.removeAllListeners("message"), t(new Error("shadowsocks no response")));
                }, 1e3);
            });
        }, {}).then(function(e) {
            return e;
        });
    }
    function re(e) {
        try {
            JSON.parse(e);
        } catch (e) {
            return !1;
        }
        return !0;
    }
    M.existsSync(X) && M.unlinkSync(X), z.bind(X), z.on("error", function(e) {
        throw new Error("client on error, shadowsocks error", e);
    }), k(), setInterval(function() {
        k();
    }, 3e3), e.exports.login = E, e.exports.addPort = R, e.exports.getAllPorts = N, 
    e.exports.getAllTraffic = S, e.exports.ping = I, e.exports.removePort = O;
}, function(e, r, t) {
    "use strict";
    var n, a, s, o, i, c, u = (n = g(regeneratorRuntime.mark(function e(r, t) {
        var n, a;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (r.checkBody("password", "Invalid password").notEmpty(), !(n = r.validationErrors())) {
                    e.next = 4;
                    break;
                }
                return e.abrupt("return", t.status(400).send({
                    error: n
                }));

              case 4:
                return e.prev = 4, e.next = 7, d.login(r.body.password);

              case 7:
                return a = w.sign({}, v, {
                    expiresIn: 86400
                }), e.abrupt("return", t.status(201).send({
                    token: a
                }));

              case 11:
                if (e.prev = 11, e.t0 = e.catch(4), "invalid password" !== e.t0.message) {
                    e.next = 15;
                    break;
                }
                return e.abrupt("return", t.status(401).end());

              case 15:
                return e.abrupt("return", t.status(500).end({
                    error: e.t0
                }));

              case 16:
              case 17:
              case "end":
                return e.stop();
            }
        }, e, this, [ [ 4, 11 ] ]);
    })), function(e, r) {
        return n.apply(this, arguments);
    }), p = (a = g(regeneratorRuntime.mark(function e(r, t) {
        var n;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if ("string" == typeof r.body.port && (r.body.port = parseInt(r.body.port)), r.checkBody("port", "Invalid port number").isInt({
                    min: 1,
                    max: 65535
                }), r.checkBody("password", "Invalid password").notEmpty(), r.checkBody("method", "Invalid encryption method").optional().isIn([ "aes-128-gcm", "aes-192-gcm", "aes-256-gcm", "aes-128-cfb", "aes-192-cfb", "aes-256-cfb", "aes-128-ctr", "aes-192-ctr", "aes-256-ctr", "camellia-128-cfb", "camellia-192-cfb", "camellia-256-cfb", "bf-cfb", "chacha20-ietf-poly1305", "xchacha20-ietf-poly1305", "salsa20", "chacha20", "chacha20-ietf" ]), 
                !(n = r.validationErrors())) {
                    e.next = 8;
                    break;
                }
                return e.abrupt("return", t.status(400).send({
                    error: n
                }));

              case 8:
                return r.body.method || (r.body.method = "aes-256-cfb"), e.prev = 11, e.next = 14, 
                d.addPort(r.body);

              case 14:
                return e.abrupt("return", t.status(201).end());

              case 17:
                if (e.prev = 17, e.t0 = e.catch(11), "port already exists from shadowsocks" !== e.t0.message) {
                    e.next = 21;
                    break;
                }
                return e.abrupt("return", t.status(409).end());

              case 21:
                if ("port not available from operating system" !== e.t0.message) {
                    e.next = 24;
                    break;
                }
                return e.abrupt("return", t.status(410).end());

              case 24:
                if ("shadowsocks failed adding port" !== e.t0.message) {
                    e.next = 27;
                    break;
                }
                return e.abrupt("return", t.status(422).end());

              case 27:
                if ("operating system failed adding port" !== e.t0.message) {
                    e.next = 30;
                    break;
                }
                return e.abrupt("return", t.status(427).end());

              case 30:
                if ("shadowsocks unreachable" !== e.t0.message) {
                    e.next = 33;
                    break;
                }
                return e.abrupt("return", t.status(424).end());

              case 33:
                if ("shadowsocks no response" !== e.t0.message) {
                    e.next = 36;
                    break;
                }
                return e.abrupt("return", t.status(425).end());

              case 36:
                return e.abrupt("return", t.status(500).send({
                    error: e.t0
                }));

              case 38:
              case 39:
              case "end":
                return e.stop();
            }
        }, e, this, [ [ 11, 17 ] ]);
    })), function(e, r) {
        return a.apply(this, arguments);
    }), f = (s = g(regeneratorRuntime.mark(function e(r, t) {
        var n;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.prev = 0, e.next = 3, d.getAllPorts();

              case 3:
                return n = e.sent, e.abrupt("return", t.status(200).send(n));

              case 7:
                if (e.prev = 7, e.t0 = e.catch(0), "shadowsocks unreachable" !== e.t0.message) {
                    e.next = 11;
                    break;
                }
                return e.abrupt("return", t.status(424).end());

              case 11:
                if ("shadowsocks no response" !== e.t0.message) {
                    e.next = 14;
                    break;
                }
                return e.abrupt("return", t.status(425).end());

              case 14:
                return e.abrupt("return", t.status(500).send({
                    error: e.t0
                }));

              case 16:
              case 17:
              case "end":
                return e.stop();
            }
        }, e, this, [ [ 0, 7 ] ]);
    })), function(e, r) {
        return s.apply(this, arguments);
    }), l = (o = g(regeneratorRuntime.mark(function e(r, t) {
        var n;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.prev = 0, e.next = 3, d.getAllTraffic();

              case 3:
                return n = e.sent, e.abrupt("return", t.status(200).send(n));

              case 7:
                if (e.prev = 7, e.t0 = e.catch(0), "shadowsocks unreachable" !== e.t0.message) {
                    e.next = 11;
                    break;
                }
                return e.abrupt("return", t.status(424).end());

              case 11:
                if ("shadowsocks no response" !== e.t0.message) {
                    e.next = 14;
                    break;
                }
                return e.abrupt("return", t.status(425).end());

              case 14:
                return e.abrupt("return", t.status(500).send({
                    error: e.t0
                }));

              case 16:
              case 17:
              case "end":
                return e.stop();
            }
        }, e, this, [ [ 0, 7 ] ]);
    })), function(e, r) {
        return o.apply(this, arguments);
    }), h = (i = g(regeneratorRuntime.mark(function e(r, t) {
        var n;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.prev = 0, e.next = 3, d.ping();

              case 3:
                return n = e.sent, e.abrupt("return", t.status(200).send(n));

              case 7:
                if (e.prev = 7, e.t0 = e.catch(0), "shadowsocks unreachable" !== e.t0.message) {
                    e.next = 11;
                    break;
                }
                return e.abrupt("return", t.status(424).end());

              case 11:
                if ("shadowsocks no response" !== e.t0.message) {
                    e.next = 14;
                    break;
                }
                return e.abrupt("return", t.status(425).end());

              case 14:
                return e.abrupt("return", t.status(500).send({
                    error: e.t0
                }));

              case 16:
              case 17:
              case "end":
                return e.stop();
            }
        }, e, this, [ [ 0, 7 ] ]);
    })), function(e, r) {
        return i.apply(this, arguments);
    }), m = (c = g(regeneratorRuntime.mark(function e(r, t) {
        var n;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if ("string" == typeof r.query.port && (r.query.port = parseInt(r.query.port)), 
                r.checkQuery("port", "Invalid port number").isInt({
                    min: 1,
                    max: 65535
                }), !(n = r.validationErrors())) {
                    e.next = 6;
                    break;
                }
                return e.abrupt("return", t.status(400).send({
                    error: n
                }));

              case 6:
                return e.prev = 7, e.next = 10, d.removePort(Number(r.query.port));

              case 10:
                return e.abrupt("return", t.status(204).end());

              case 13:
                if (e.prev = 13, e.t0 = e.catch(7), "shadowsocks failed removing port" !== e.t0.message) {
                    e.next = 17;
                    break;
                }
                return e.abrupt("return", t.status(422).end());

              case 17:
                if ("operating system failed removing port" !== e.t0.message) {
                    e.next = 20;
                    break;
                }
                return e.abrupt("return", t.status(427).end());

              case 20:
                if ("shadowsocks unreachable" !== e.t0.message) {
                    e.next = 23;
                    break;
                }
                return e.abrupt("return", t.status(424).end());

              case 23:
                if ("shadowsocks no response" !== e.t0.message) {
                    e.next = 26;
                    break;
                }
                return e.abrupt("return", t.status(425).end());

              case 26:
                return e.abrupt("return", t.status(500).send({
                    error: e.t0
                }));

              case 28:
              case 29:
              case "end":
                return e.stop();
            }
        }, e, this, [ [ 7, 13 ] ]);
    })), function(e, r) {
        return c.apply(this, arguments);
    });
    function g(e) {
        return function() {
            var r = e.apply(this, arguments);
            return new Promise(function(e, t) {
                return function n(a, s) {
                    try {
                        var o = r[a](s), i = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    if (!o.done) return Promise.resolve(i).then(function(e) {
                        n("next", e);
                    }, function(e) {
                        n("throw", e);
                    });
                    e(i);
                }("next");
            });
        };
    }
    t(1);
    var d = t(10), w = t(5), b = t(4), x = (t(0)("controller"), process.env.LOGIN_PASSWORD), v = b.createHash("sha256").update(x + "W93Ciowi2398(@qi30vmbj02i@WWSoekwoiK").digest("hex");
    e.exports.login = u, e.exports.addPort = p, e.exports.getAllPorts = f, e.exports.getAllTraffic = l, 
    e.exports.ping = h, e.exports.removePort = m;
}, function(e, r) {
    e.exports = require("passport-jwt");
}, function(e, r) {
    e.exports = require("passport");
}, function(e, r) {
    e.exports = require("express-validator");
}, function(e, r) {
    e.exports = require("body-parser");
}, function(e, r) {
    e.exports = require("https");
}, function(e, r) {
    e.exports = require("express");
}, function(e, r) {
    e.exports = require("dotenv");
}, function(e, r, t) {
    "use strict";
    t(18).config();
    var n = t(17), a = t(2), s = t(16), o = t(15), i = t(14), c = t(4), u = t(13), p = t(12), f = p.Strategy, l = p.ExtractJwt, h = process.env.LOGIN_PASSWORD, m = c.createHash("sha256").update(h + "W93Ciowi2398(@qi30vmbj02i@WWSoekwoiK").digest("hex"), g = void 0;
    Number(process.env.LISTEN_PORT) && Number(process.env.LISTEN_PORT) >= 1 && Number(process.env.LISTEN_PORT) <= 65535 ? g = process.env.LISTEN_PORT : (console.warn("LISTEN_PORT invalid. Using 4001."), 
    g = 4001);
    var d = {
        jwtFromRequest: l.fromAuthHeaderAsBearerToken(),
        secretOrKey: m
    };
    u.use(new f(d, function(e, r) {
        return r(null, {
            id: 1
        });
    }));
    var w = u.authenticate("jwt", {
        session: !1
    }), b = void 0, x = void 0;
    try {
        b = a.readFileSync("./server.key", "utf8"), x = a.readFileSync("./server.cert", "utf8");
    } catch (e) {
        console.error("reading ./server.key or ./server.cert failed"), process.exit(1);
    }
    var v = {
        key: b,
        cert: x
    }, y = n(), k = void 0;
    try {
        k = s.createServer(v, y);
    } catch (e) {
        console.error("ssl key and/or certificate error corrupted"), process.exit(2);
    }
    y.use(o.json()), y.use(o.urlencoded({
        extended: !0
    })), y.use(i());
    var E = t(11);
    y.post("/login", E.login), y.post("/", w, E.addPort), y.delete("/", w, E.removePort), 
    y.get("/all", w, E.getAllPorts), y.get("/traffic/all", w, E.getAllTraffic), y.get("/ping", w, E.ping), 
    k.listen(g, function() {
        console.log("listening on port", g);
    }).on("error", function(e) {
        console.error("express server error: " + e), process.exit(3);
    }), e.exports = y;
}, function(e, r) {
    e.exports = require("babel-polyfill");
}, function(e, r, t) {
    t(20), e.exports = t(19);
} ]);