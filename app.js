!function(r) {
    var e = {};
    function t(n) {
        if (e[n]) return e[n].exports;
        var s = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return r[n].call(s.exports, s, s.exports, t), s.l = !0, s.exports;
    }
    t.m = r, t.c = e, t.d = function(r, e, n) {
        t.o(r, e) || Object.defineProperty(r, e, {
            enumerable: !0,
            get: n
        });
    }, t.r = function(r) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(r, "__esModule", {
            value: !0
        });
    }, t.t = function(r, e) {
        if (1 & e && (r = t(r)), 8 & e) return r;
        if (4 & e && "object" == typeof r && r && r.__esModule) return r;
        var n = Object.create(null);
        if (t.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: r
        }), 2 & e && "string" != typeof r) for (var s in r) t.d(n, s, function(e) {
            return r[e];
        }.bind(null, s));
        return n;
    }, t.n = function(r) {
        var e = r && r.__esModule ? function() {
            return r.default;
        } : function() {
            return r;
        };
        return t.d(e, "a", e), e;
    }, t.o = function(r, e) {
        return Object.prototype.hasOwnProperty.call(r, e);
    }, t.p = "", t(t.s = 22);
}([ function(r, e) {
    r.exports = require("debug");
}, function(r, e) {
    r.exports = require("fs");
}, function(r, e) {
    r.exports = require("path");
}, function(r, e) {
    r.exports = require("validator");
}, function(r, e) {
    r.exports = require("crypto");
}, function(r, e) {
    r.exports = require("jsonwebtoken");
}, function(r, e, t) {
    "use strict";
    var n, s, a, o = (n = c(regeneratorRuntime.mark(function r(e) {
        var t, n;
        return regeneratorRuntime.wrap(function(r) {
            for (;;) switch (r.prev = r.next) {
              case 0:
                if (e) {
                    r.next = 2;
                    break;
                }
                throw new Error("illegal argument");

              case 2:
                if (t = e.port, n = e.password, !(!t || !Number.isInteger(t) || t < 1 || t > 65535)) {
                    r.next = 6;
                    break;
                }
                throw new Error("illegal argument");

              case 6:
                if (n && "string" == typeof n && !(n.length < 1)) {
                    r.next = 9;
                    break;
                }
                throw new Error("illegal argument");

              case 9:
                d.addPort({
                    port: t,
                    password: n
                });

              case 11:
              case "end":
                return r.stop();
            }
        }, r, this);
    })), function(r) {
        return n.apply(this, arguments);
    }), u = (s = c(regeneratorRuntime.mark(function r(e) {
        return regeneratorRuntime.wrap(function(r) {
            for (;;) switch (r.prev = r.next) {
              case 0:
                if (!(isNaN(e) || !Number.isInteger(e) || e < 1 || e > 65535)) {
                    r.next = 2;
                    break;
                }
                throw new Error("illegal argument");

              case 2:
                return r.next = 5, d.removePort(e);

              case 5:
              case "end":
                return r.stop();
            }
        }, r, this);
    })), function(r) {
        return s.apply(this, arguments);
    }), i = (a = c(regeneratorRuntime.mark(function r() {
        var e;
        return regeneratorRuntime.wrap(function(r) {
            for (;;) switch (r.prev = r.next) {
              case 0:
                return e = d.getPorts(), r.abrupt("return", e);

              case 2:
              case "end":
                return r.stop();
            }
        }, r, this);
    })), function() {
        return a.apply(this, arguments);
    });
    function c(r) {
        return function() {
            var e = r.apply(this, arguments);
            return new Promise(function(r, t) {
                return function n(s, a) {
                    try {
                        var o = e[s](a), u = o.value;
                    } catch (r) {
                        return void t(r);
                    }
                    if (!o.done) return Promise.resolve(u).then(function(r) {
                        n("next", r);
                    }, function(r) {
                        n("throw", r);
                    });
                    r(u);
                }("next");
            });
        };
    }
    var p = t(1), f = t(2), l = (t(0)("dao"), f.resolve(__dirname, "./ports.json")), d = {
        ports: [],
        getPorts: function() {
            return this.ports;
        },
        setPorts: function(r) {
            if (!r || !Array.isArray(r)) throw new Error("illegal argument");
            r.forEach(function(r) {
                var e = r.port, t = r.password;
                if (!e || !Number.isInteger(e) || e < 1 || e > 65535) throw new Error("illegal argument, port illegal");
                if (!t || "string" != typeof t || t.length < 1) throw new Error("illegal argument, password illegal");
            });
            var e = r.map(function(r) {
                return r.port;
            });
            if (new Set(e).size !== e.length) throw new Error("illegal argument, duplicate ports");
            this.ports = JSON.parse(JSON.stringify(r));
        },
        addPort: function(r) {
            if (!r) throw new Error("illegal argument");
            var e = r.port, t = r.password;
            if (!e || !Number.isInteger(e) || e < 1 || e > 65535) throw new Error("illegal argument");
            if (!t || "string" != typeof t || t.length < 1) throw new Error("illegal argument");
            if (this.ports.map(function(r) {
                return r.port;
            }).includes(e)) throw new Error("port already exists in database");
            this.ports.push({
                port: e,
                password: t
            }), this.savePortsToFile();
        },
        removePort: function(r) {
            if (isNaN(r) || !Number.isInteger(r) || r < 1 || r > 65535) throw new Error("illegal argument");
            this.ports = this.ports.filter(function(e) {
                return e.port !== r;
            }), this.savePortsToFile();
        },
        initPortsFromFile: function() {
            try {
                var r = p.readFileSync(l, "utf8");
                r && this.setPorts(JSON.parse(r));
            } catch (r) {
                p.openSync(l, "w");
            }
        },
        savePortsToFile: function() {
            p.writeFile(l, JSON.stringify(this.ports), function(r) {
                if (r) throw r;
            });
        }
    };
    d.initPortsFromFile(), r.exports.addPort = o, r.exports.removePort = u, r.exports.getAllPorts = i;
}, function(r, e) {
    r.exports = require("portastic");
}, function(r, e) {
    r.exports = require("async-lock");
}, function(r, e) {
    r.exports = require("unix-dgram");
}, function(r, e, t) {
    "use strict";
    var n, s, a, o, u, i, c, p, f, l, d, g, m, w, h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(r) {
        return typeof r;
    } : function(r) {
        return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, v = (n = T(regeneratorRuntime.mark(function r() {
        var e, t, n, s = this;
        return regeneratorRuntime.wrap(function(r) {
            for (;;) switch (r.prev = r.next) {
              case 0:
                return r.next = 2, M.getAllPorts();

              case 2:
                return e = r.sent, r.prev = 3, r.next = 6, y();

              case 6:
                t = r.sent, n = t.map(function(r) {
                    return r.port;
                }), e.forEach(function() {
                    var r = T(regeneratorRuntime.mark(function r(e) {
                        return regeneratorRuntime.wrap(function(r) {
                            for (;;) switch (r.prev = r.next) {
                              case 0:
                                if (n.includes(e.port)) {
                                    r.next = 3;
                                    break;
                                }
                                return r.next = 3, k(e);

                              case 3:
                              case 4:
                              case "end":
                                return r.stop();
                            }
                        }, r, s);
                    }));
                    return function(e) {
                        return r.apply(this, arguments);
                    };
                }()), r.next = 21;
                break;

              case 11:
                if (r.prev = 11, r.t0 = r.catch(3), "shadowsocks unreachable" !== r.t0.message) {
                    r.next = 16;
                    break;
                }
                r.next = 20;
                break;

              case 16:
                if ("shadowsocks no response" !== r.t0.message) {
                    r.next = 19;
                    break;
                }
                r.next = 20;
                break;

              case 19:
                throw r.t0;

              case 20:
              case 21:
              case 22:
              case "end":
                return r.stop();
            }
        }, r, this, [ [ 3, 11 ] ]);
    })), function() {
        return n.apply(this, arguments);
    }), b = (s = T(regeneratorRuntime.mark(function r(e) {
        return regeneratorRuntime.wrap(function(r) {
            for (;;) switch (r.prev = r.next) {
              case 0:
                if (e) {
                    r.next = 2;
                    break;
                }
                throw new Error("illegal argument");

              case 2:
                if (e === G) {
                    r.next = 5;
                    break;
                }
                throw new Error("invalid password");

              case 5:
              case 6:
              case "end":
                return r.stop();
            }
        }, r, this);
    })), function(r) {
        return s.apply(this, arguments);
    }), x = (a = T(regeneratorRuntime.mark(function r(e) {
        var t, n;
        return regeneratorRuntime.wrap(function(r) {
            for (;;) switch (r.prev = r.next) {
              case 0:
                if (e) {
                    r.next = 2;
                    break;
                }
                throw new Error("illegal argument");

              case 2:
                if (t = e.port, n = e.password, !(!t || !Number.isInteger(t) || t < 1 || t > 65535)) {
                    r.next = 6;
                    break;
                }
                throw new Error("illegal argument");

              case 6:
                if (n && "string" == typeof n && !(n.length < 1)) {
                    r.next = 9;
                    break;
                }
                throw new Error("illegal argument");

              case 9:
                return r.next = 12, k({
                    port: t,
                    password: n
                });

              case 12:
                return r.next = 14, M.addPort({
                    port: t,
                    password: n
                });

              case 14:
              case "end":
                return r.stop();
            }
        }, r, this);
    })), function(r) {
        return a.apply(this, arguments);
    }), k = (o = T(regeneratorRuntime.mark(function r(e) {
        var t, n;
        return regeneratorRuntime.wrap(function(r) {
            for (;;) switch (r.prev = r.next) {
              case 0:
                if (e) {
                    r.next = 2;
                    break;
                }
                throw new Error("illegal argument");

              case 2:
                if (t = e.port, n = e.password, !(!t || !Number.isInteger(t) || t < 1 || t > 65535)) {
                    r.next = 6;
                    break;
                }
                throw new Error("illegal argument");

              case 6:
                if (n && "string" == typeof n && !(n.length < 1)) {
                    r.next = 9;
                    break;
                }
                throw new Error("illegal argument");

              case 9:
                return r.next = 12, _(t);

              case 12:
                if (!r.sent) {
                    r.next = 14;
                    break;
                }
                throw new Error("port already exists from shadowsocks");

              case 14:
                return r.next = 17, I(t);

              case 17:
                if (r.sent) {
                    r.next = 19;
                    break;
                }
                throw new Error("port not available from operating system");

              case 19:
                return r.next = 22, O({
                    port: t,
                    password: n
                });

              case 22:
                return r.next = 24, _(t);

              case 24:
                if (r.sent) {
                    r.next = 26;
                    break;
                }
                throw new Error("shadowsocks failed adding port");

              case 26:
              case 27:
              case "end":
                return r.stop();
            }
        }, r, this);
    })), function(r) {
        return o.apply(this, arguments);
    }), y = (u = T(regeneratorRuntime.mark(function r() {
        var e;
        return regeneratorRuntime.wrap(function(r) {
            for (;;) switch (r.prev = r.next) {
              case 0:
                return r.next = 2, S();

              case 2:
                return e = r.sent, r.abrupt("return", e);

              case 4:
              case "end":
                return r.stop();
            }
        }, r, this);
    })), function() {
        return u.apply(this, arguments);
    }), E = (i = T(regeneratorRuntime.mark(function r() {
        var e, t, n;
        return regeneratorRuntime.wrap(function(r) {
            for (;;) switch (r.prev = r.next) {
              case 0:
                return r.next = 2, P();

              case 2:
                return e = r.sent, t = Object.keys(e), n = [], t.forEach(function(r) {
                    var t = {
                        port: Number(r),
                        traffic: Number(e[r])
                    };
                    n.push(t);
                }), r.abrupt("return", n);

              case 7:
              case "end":
                return r.stop();
            }
        }, r, this);
    })), function() {
        return i.apply(this, arguments);
    }), N = (c = T(regeneratorRuntime.mark(function r() {
        var e;
        return regeneratorRuntime.wrap(function(r) {
            for (;;) switch (r.prev = r.next) {
              case 0:
                return r.next = 2, P();

              case 2:
                return e = {
                    pong: "pong"
                }, r.abrupt("return", e);

              case 4:
              case "end":
                return r.stop();
            }
        }, r, this);
    })), function() {
        return c.apply(this, arguments);
    }), R = (p = T(regeneratorRuntime.mark(function r(e) {
        return regeneratorRuntime.wrap(function(r) {
            for (;;) switch (r.prev = r.next) {
              case 0:
                if (!(isNaN(e) || !Number.isInteger(e) || e < 1 || e > 65535)) {
                    r.next = 2;
                    break;
                }
                throw new Error("illegal argument");

              case 2:
                return r.next = 5, q(e);

              case 5:
                return r.next = 7, _(e);

              case 7:
                if (!r.sent) {
                    r.next = 9;
                    break;
                }
                throw new Error("shadowsocks failed removing port");

              case 9:
                return r.next = 12, I(e);

              case 12:
                if (r.sent) {
                    r.next = 14;
                    break;
                }
                throw new Error("operating system failed removing port");

              case 14:
                return r.next = 17, M.removePort(e);

              case 17:
              case "end":
                return r.stop();
            }
        }, r, this);
    })), function(r) {
        return p.apply(this, arguments);
    }), P = (f = T(regeneratorRuntime.mark(function r() {
        var e, t;
        return regeneratorRuntime.wrap(function(r) {
            for (;;) switch (r.prev = r.next) {
              case 0:
                return r.next = 2, H("ping");

              case 2:
                if ("stat:" !== (e = r.sent).substr(0, 5)) {
                    r.next = 8;
                    break;
                }
                return t = JSON.parse(e.substr(5)), r.abrupt("return", t);

              case 8:
                throw new Error("sendPing, received unknown message");

              case 9:
              case 10:
              case "end":
                return r.stop();
            }
        }, r, this);
    })), function() {
        return f.apply(this, arguments);
    }), S = (l = T(regeneratorRuntime.mark(function r() {
        var e, t, n;
        return regeneratorRuntime.wrap(function(r) {
            for (;;) switch (r.prev = r.next) {
              case 0:
                return r.next = 2, H("list");

              case 2:
                if (e = r.sent, t = [], "[\n\t" !== e.substr(0, 3)) {
                    r.next = 9;
                    break;
                }
                n = JSON.parse(e), t = n.map(function(r) {
                    return {
                        port: Number(r.server_port),
                        password: r.password
                    };
                }), r.next = 13;
                break;

              case 9:
                if ("\n]" !== e.substr(0, 2)) {
                    r.next = 12;
                    break;
                }
                r.next = 13;
                break;

              case 12:
                throw new Error("sendList, received unknown message");

              case 13:
                return r.abrupt("return", t);

              case 15:
              case "end":
                return r.stop();
            }
        }, r, this);
    })), function() {
        return l.apply(this, arguments);
    }), O = (d = T(regeneratorRuntime.mark(function r(e) {
        var t, n;
        return regeneratorRuntime.wrap(function(r) {
            for (;;) switch (r.prev = r.next) {
              case 0:
                if (!(!e || "object" !== (void 0 === e ? "undefined" : h(e)) || !e.hasOwnProperty("port") || !e.hasOwnProperty("password") || isNaN(e.port) || !Number.isInteger(e.port) || e.port < 1 || e.port > 65535 || "string" != typeof e.password || e.password.length < 1)) {
                    r.next = 2;
                    break;
                }
                throw new Error("illegal argument");

              case 2:
                return t = "add: " + JSON.stringify({
                    server_port: e.port,
                    password: e.password
                }), r.next = 6, H(t);

              case 6:
                if ("ok" !== (n = r.sent).substr(0, 2)) {
                    r.next = 10;
                    break;
                }
                r.next = 15;
                break;

              case 10:
                if ("err" !== n.substr(0, 3)) {
                    r.next = 14;
                    break;
                }
                throw new Error("illegal command");

              case 14:
                throw new Error("sendAdd, received unknown message:" + n);

              case 15:
              case 16:
              case "end":
                return r.stop();
            }
        }, r, this);
    })), function(r) {
        return d.apply(this, arguments);
    }), _ = (g = T(regeneratorRuntime.mark(function r(e) {
        var t, n;
        return regeneratorRuntime.wrap(function(r) {
            for (;;) switch (r.prev = r.next) {
              case 0:
                if (!(isNaN(e) || !Number.isInteger(e) || e < 1 || e > 65535)) {
                    r.next = 2;
                    break;
                }
                throw new Error("illegal argument");

              case 2:
                return r.next = 5, S();

              case 5:
                return t = r.sent, n = t.map(function(r) {
                    return r.port;
                }), r.abrupt("return", n.includes(e));

              case 8:
              case "end":
                return r.stop();
            }
        }, r, this);
    })), function(r) {
        return g.apply(this, arguments);
    }), I = (m = T(regeneratorRuntime.mark(function r(e) {
        var t;
        return regeneratorRuntime.wrap(function(r) {
            for (;;) switch (r.prev = r.next) {
              case 0:
                if (!(isNaN(e) || !Number.isInteger(e) || e < 1 || e > 65535)) {
                    r.next = 2;
                    break;
                }
                throw new Error("illegal argument");

              case 2:
                return r.next = 5, W.test(e);

              case 5:
                return t = r.sent, r.abrupt("return", t);

              case 7:
              case "end":
                return r.stop();
            }
        }, r, this);
    })), function(r) {
        return m.apply(this, arguments);
    }), q = (w = T(regeneratorRuntime.mark(function r(e) {
        var t, n;
        return regeneratorRuntime.wrap(function(r) {
            for (;;) switch (r.prev = r.next) {
              case 0:
                if (!(isNaN(e) || !Number.isInteger(e) || e < 1 || e > 65535)) {
                    r.next = 2;
                    break;
                }
                throw new Error("illegal argument");

              case 2:
                return t = "remove: " + JSON.stringify({
                    server_port: e
                }), r.next = 6, H(t);

              case 6:
                if ("ok" !== (n = r.sent).substr(0, 2)) {
                    r.next = 10;
                    break;
                }
                r.next = 15;
                break;

              case 10:
                if ("err" !== n.substr(0, 3)) {
                    r.next = 14;
                    break;
                }
                throw new Error("illegal command");

              case 14:
                throw new Error("sendRemove, received unknown message:" + n);

              case 15:
              case 16:
              case "end":
                return r.stop();
            }
        }, r, this);
    })), function(r) {
        return w.apply(this, arguments);
    });
    function T(r) {
        return function() {
            var e = r.apply(this, arguments);
            return new Promise(function(r, t) {
                return function n(s, a) {
                    try {
                        var o = e[s](a), u = o.value;
                    } catch (r) {
                        return void t(r);
                    }
                    if (!o.done) return Promise.resolve(u).then(function(r) {
                        n("next", r);
                    }, function(r) {
                        n("throw", r);
                    });
                    r(u);
                }("next");
            });
        };
    }
    var A = t(9), j = t(1), F = t(2), J = new (t(8))(), L = (t(3), t(0)("service"), 
    A.createSocket("unix_dgram")), W = t(7), M = t(6), B = F.resolve(__dirname, "/tmp/shadowsocks-manager.sock"), D = F.resolve(__dirname, "/tmp/ss-controller.sock"), G = process.env.LOGIN_PASSWORD;
    function H(r) {
        if (!r || "string" != typeof r) throw new Error("illegal argument");
        if ("ping" !== r && "list" !== r && "add: " !== r.substr(0, 5) && "remove: " !== r.substr(0, 8)) throw new Error("illegal argument");
        if ("add: " === r.substr(0, 5)) {
            var e = r.substr(5);
            if (!K(e)) throw new Error("illegal argument");
            var t = JSON.parse(e);
            if (!t.hasOwnProperty("server_port") || !t.hasOwnProperty("password") || isNaN(t.server_port) || !Number.isInteger(t.server_port) || t.server_port < 1 || t.server_port > 65535 || "string" != typeof t.password || t.password.length < 1) throw new Error("illegal argument");
        }
        if ("remove: " === r.substr(0, 8)) {
            var n = r.substr(8);
            if (!K(n)) throw new Error("illegal argument");
            var s = JSON.parse(n);
            if (!s.hasOwnProperty("server_port") || isNaN(s.server_port) || !Number.isInteger(s.server_port) || s.server_port < 1 || s.server_port > 65535) throw new Error("illegal argument");
        }
        return J.acquire("key", function() {
            return new Promise(function(e, t) {
                var n = !1;
                L.once("message", function(r) {
                    n = !0;
                    var t = new String(r);
                    e(t);
                });
                try {
                    !function(r) {
                        var e = new Buffer(r);
                        L.send(e, 0, e.length, B, function(r) {
                            if (r) throw new Error("shadowsocks unreachable");
                        });
                    }(r);
                } catch (r) {
                    throw L.removeAllListeners("message"), r;
                }
                setTimeout(function() {
                    n || (L.removeAllListeners("message"), t(new Error("shadowsocks no response")));
                }, 1e3);
            });
        }, {}).then(function(r) {
            return r;
        });
    }
    function K(r) {
        try {
            JSON.parse(r);
        } catch (r) {
            return !1;
        }
        return !0;
    }
    j.existsSync(D) && j.unlinkSync(D), L.bind(D), L.on("error", function(r) {
        throw new Error("client on error, shadowsocks error", r);
    }), v(), setInterval(function() {
        v();
    }, 3e3), r.exports.login = b, r.exports.addPort = x, r.exports.getAllPorts = y, 
    r.exports.getAllTraffic = E, r.exports.ping = N, r.exports.removePort = R;
}, function(r, e, t) {
    "use strict";
    var n, s, a, o, u, i, c = (n = m(regeneratorRuntime.mark(function r(e, t) {
        var n, s;
        return regeneratorRuntime.wrap(function(r) {
            for (;;) switch (r.prev = r.next) {
              case 0:
                if (e.checkBody("password", "Invalid password").notEmpty(), !(n = e.validationErrors())) {
                    r.next = 4;
                    break;
                }
                return r.abrupt("return", t.status(400).send({
                    error: n
                }));

              case 4:
                return r.prev = 4, r.next = 7, w.login(e.body.password);

              case 7:
                return s = h.sign({}, x, {
                    expiresIn: 86400
                }), r.abrupt("return", t.status(201).send({
                    token: s
                }));

              case 11:
                if (r.prev = 11, r.t0 = r.catch(4), "invalid password" !== r.t0.message) {
                    r.next = 15;
                    break;
                }
                return r.abrupt("return", t.status(401).end());

              case 15:
                return r.abrupt("return", t.status(500).end({
                    error: r.t0
                }));

              case 16:
              case 17:
              case "end":
                return r.stop();
            }
        }, r, this, [ [ 4, 11 ] ]);
    })), function(r, e) {
        return n.apply(this, arguments);
    }), p = (s = m(regeneratorRuntime.mark(function r(e, t) {
        var n;
        return regeneratorRuntime.wrap(function(r) {
            for (;;) switch (r.prev = r.next) {
              case 0:
                if ("string" == typeof e.body.port && (e.body.port = parseInt(e.body.port)), e.checkBody("port", "Invalid port number").isInt({
                    min: 1,
                    max: 65535
                }), e.checkBody("password", "Invalid password").notEmpty(), !(n = e.validationErrors())) {
                    r.next = 7;
                    break;
                }
                return r.abrupt("return", t.status(400).send({
                    error: n
                }));

              case 7:
                return r.prev = 8, r.next = 11, w.addPort(e.body);

              case 11:
                return r.abrupt("return", t.status(201).end());

              case 14:
                if (r.prev = 14, r.t0 = r.catch(8), "port already exists from shadowsocks" !== r.t0.message) {
                    r.next = 18;
                    break;
                }
                return r.abrupt("return", t.status(409).end());

              case 18:
                if ("port not available from operating system" !== r.t0.message) {
                    r.next = 21;
                    break;
                }
                return r.abrupt("return", t.status(410).end());

              case 21:
                if ("shadowsocks failed adding port" !== r.t0.message) {
                    r.next = 24;
                    break;
                }
                return r.abrupt("return", t.status(422).end());

              case 24:
                if ("operating system failed adding port" !== r.t0.message) {
                    r.next = 27;
                    break;
                }
                return r.abrupt("return", t.status(427).end());

              case 27:
                if ("shadowsocks unreachable" !== r.t0.message) {
                    r.next = 30;
                    break;
                }
                return r.abrupt("return", t.status(424).end());

              case 30:
                if ("shadowsocks no response" !== r.t0.message) {
                    r.next = 33;
                    break;
                }
                return r.abrupt("return", t.status(425).end());

              case 33:
                return r.abrupt("return", t.status(500).send({
                    error: r.t0
                }));

              case 35:
              case 36:
              case "end":
                return r.stop();
            }
        }, r, this, [ [ 8, 14 ] ]);
    })), function(r, e) {
        return s.apply(this, arguments);
    }), f = (a = m(regeneratorRuntime.mark(function r(e, t) {
        var n;
        return regeneratorRuntime.wrap(function(r) {
            for (;;) switch (r.prev = r.next) {
              case 0:
                return r.prev = 0, r.next = 3, w.getAllPorts();

              case 3:
                return n = r.sent, r.abrupt("return", t.status(200).send(n));

              case 7:
                if (r.prev = 7, r.t0 = r.catch(0), "shadowsocks unreachable" !== r.t0.message) {
                    r.next = 11;
                    break;
                }
                return r.abrupt("return", t.status(424).end());

              case 11:
                if ("shadowsocks no response" !== r.t0.message) {
                    r.next = 14;
                    break;
                }
                return r.abrupt("return", t.status(425).end());

              case 14:
                return r.abrupt("return", t.status(500).send({
                    error: r.t0
                }));

              case 16:
              case 17:
              case "end":
                return r.stop();
            }
        }, r, this, [ [ 0, 7 ] ]);
    })), function(r, e) {
        return a.apply(this, arguments);
    }), l = (o = m(regeneratorRuntime.mark(function r(e, t) {
        var n;
        return regeneratorRuntime.wrap(function(r) {
            for (;;) switch (r.prev = r.next) {
              case 0:
                return r.prev = 0, r.next = 3, w.getAllTraffic();

              case 3:
                return n = r.sent, r.abrupt("return", t.status(200).send(n));

              case 7:
                if (r.prev = 7, r.t0 = r.catch(0), "shadowsocks unreachable" !== r.t0.message) {
                    r.next = 11;
                    break;
                }
                return r.abrupt("return", t.status(424).end());

              case 11:
                if ("shadowsocks no response" !== r.t0.message) {
                    r.next = 14;
                    break;
                }
                return r.abrupt("return", t.status(425).end());

              case 14:
                return r.abrupt("return", t.status(500).send({
                    error: r.t0
                }));

              case 16:
              case 17:
              case "end":
                return r.stop();
            }
        }, r, this, [ [ 0, 7 ] ]);
    })), function(r, e) {
        return o.apply(this, arguments);
    }), d = (u = m(regeneratorRuntime.mark(function r(e, t) {
        var n;
        return regeneratorRuntime.wrap(function(r) {
            for (;;) switch (r.prev = r.next) {
              case 0:
                return r.prev = 0, r.next = 3, w.ping();

              case 3:
                return n = r.sent, r.abrupt("return", t.status(200).send(n));

              case 7:
                if (r.prev = 7, r.t0 = r.catch(0), "shadowsocks unreachable" !== r.t0.message) {
                    r.next = 11;
                    break;
                }
                return r.abrupt("return", t.status(424).end());

              case 11:
                if ("shadowsocks no response" !== r.t0.message) {
                    r.next = 14;
                    break;
                }
                return r.abrupt("return", t.status(425).end());

              case 14:
                return r.abrupt("return", t.status(500).send({
                    error: r.t0
                }));

              case 16:
              case 17:
              case "end":
                return r.stop();
            }
        }, r, this, [ [ 0, 7 ] ]);
    })), function(r, e) {
        return u.apply(this, arguments);
    }), g = (i = m(regeneratorRuntime.mark(function r(e, t) {
        var n;
        return regeneratorRuntime.wrap(function(r) {
            for (;;) switch (r.prev = r.next) {
              case 0:
                if ("string" == typeof e.query.port && (e.query.port = parseInt(e.query.port)), 
                e.checkQuery("port", "Invalid port number").isInt({
                    min: 1,
                    max: 65535
                }), !(n = e.validationErrors())) {
                    r.next = 6;
                    break;
                }
                return r.abrupt("return", t.status(400).send({
                    error: n
                }));

              case 6:
                return r.prev = 7, r.next = 10, w.removePort(Number(e.query.port));

              case 10:
                return r.abrupt("return", t.status(204).end());

              case 13:
                if (r.prev = 13, r.t0 = r.catch(7), "shadowsocks failed removing port" !== r.t0.message) {
                    r.next = 17;
                    break;
                }
                return r.abrupt("return", t.status(422).end());

              case 17:
                if ("operating system failed removing port" !== r.t0.message) {
                    r.next = 20;
                    break;
                }
                return r.abrupt("return", t.status(427).end());

              case 20:
                if ("shadowsocks unreachable" !== r.t0.message) {
                    r.next = 23;
                    break;
                }
                return r.abrupt("return", t.status(424).end());

              case 23:
                if ("shadowsocks no response" !== r.t0.message) {
                    r.next = 26;
                    break;
                }
                return r.abrupt("return", t.status(425).end());

              case 26:
                return r.abrupt("return", t.status(500).send({
                    error: r.t0
                }));

              case 28:
              case 29:
              case "end":
                return r.stop();
            }
        }, r, this, [ [ 7, 13 ] ]);
    })), function(r, e) {
        return i.apply(this, arguments);
    });
    function m(r) {
        return function() {
            var e = r.apply(this, arguments);
            return new Promise(function(r, t) {
                return function n(s, a) {
                    try {
                        var o = e[s](a), u = o.value;
                    } catch (r) {
                        return void t(r);
                    }
                    if (!o.done) return Promise.resolve(u).then(function(r) {
                        n("next", r);
                    }, function(r) {
                        n("throw", r);
                    });
                    r(u);
                }("next");
            });
        };
    }
    t(3);
    var w = t(10), h = t(5), v = t(4), b = (t(0)("controller"), process.env.LOGIN_PASSWORD), x = v.createHash("sha256").update(b + "W93Ciowi2398(@qi30vmbj02i@WWSoekwoiK").digest("hex");
    r.exports.login = c, r.exports.addPort = p, r.exports.getAllPorts = f, r.exports.getAllTraffic = l, 
    r.exports.ping = d, r.exports.removePort = g;
}, function(r, e) {
    r.exports = require("passport-jwt");
}, function(r, e) {
    r.exports = require("passport");
}, function(r, e) {
    r.exports = require("express-rate-limit");
}, function(r, e) {
    r.exports = require("express-validator");
}, function(r, e) {
    r.exports = require("body-parser");
}, function(r, e) {
    r.exports = require("https");
}, function(r, e) {
    r.exports = require("express");
}, function(r, e) {
    r.exports = require("dotenv");
}, function(r, e, t) {
    "use strict";
    t(19).config();
    var n = t(18), s = t(1), a = t(17), o = t(16), u = t(15), i = t(14), c = t(4), p = t(13), f = t(12), l = f.Strategy, d = f.ExtractJwt, g = process.env.LOGIN_PASSWORD, m = c.createHash("sha256").update(g + "W93Ciowi2398(@qi30vmbj02i@WWSoekwoiK").digest("hex"), w = void 0;
    Number(process.env.LISTEN_PORT) && Number(process.env.LISTEN_PORT) >= 1 && Number(process.env.LISTEN_PORT) <= 65535 ? w = process.env.LISTEN_PORT : (console.warn("LISTEN_PORT invalid. Using 4001."), 
    w = 4001);
    var h = {
        jwtFromRequest: d.fromAuthHeaderAsBearerToken(),
        secretOrKey: m
    };
    p.use(new l(h, function(r, e) {
        return e(null, {
            id: 1
        });
    }));
    var v = p.authenticate("jwt", {
        session: !1
    }), b = void 0, x = void 0;
    try {
        b = s.readFileSync("./server.key", "utf8"), x = s.readFileSync("./server.cert", "utf8");
    } catch (r) {
        console.error("reading ./server.key or ./server.cert failed"), process.exit(1);
    }
    var k = {
        key: b,
        cert: x
    }, y = n(), E = void 0;
    try {
        E = a.createServer(k, y);
    } catch (r) {
        console.error("ssl key and/or certificate error corrupted"), process.exit(2);
    }
    var N = new i({
        windowMs: 9e5,
        max: 50,
        delayMs: 0
    });
    y.use(N), y.use(o.json()), y.use(o.urlencoded({
        extended: !0
    })), y.use(u());
    var R = t(11);
    y.post("/login", R.login), y.post("/", v, R.addPort), y.delete("/", v, R.removePort), 
    y.get("/all", v, R.getAllPorts), y.get("/traffic/all", v, R.getAllTraffic), y.get("/ping", v, R.ping), 
    E.listen(w, function() {
        console.log("listening on port", w);
    }).on("error", function(r) {
        console.error("express server error: " + r), process.exit(3);
    }), r.exports = y;
}, function(r, e) {
    r.exports = require("babel-polyfill");
}, function(r, e, t) {
    t(21), r.exports = t(20);
} ]);