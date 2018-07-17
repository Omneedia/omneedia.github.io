! function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.io = e() : t.io = e()
}(this, function () {
    return function (n) {
        function r(t) {
            if (o[t]) return o[t].exports;
            var e = o[t] = {
                exports: {},
                id: t,
                loaded: !1
            };
            return n[t].call(e.exports, e, e.exports, r), e.loaded = !0, e.exports
        }
        var o = {};
        return r.m = n, r.c = o, r.p = "", r(0)
    }([function (t, e, n) {
        "use strict";

        function r(t, e) {
            "object" === (void 0 === t ? "undefined" : c(t)) && (e = t, t = void 0), e = e || {};
            var n, r = u(t),
                o = r.source,
                i = r.id,
                s = r.path,
                a = h[i] && s in h[i].nsps;
            return e.forceNew || e["force new connection"] || !1 === e.multiplex || a ? (l("ignoring socket cache for %s", o), n = p(o, e)) : (h[i] || (l("new io instance for %s", o), h[i] = p(o, e)), n = h[i]), r.query && !e.query && (e.query = r.query), n.socket(r.path, e)
        }
        var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            },
            u = n(1),
            o = n(7),
            p = n(13),
            l = n(3)("socket.io-client");
        t.exports = e = r;
        var h = e.managers = {};
        e.protocol = o.protocol, e.connect = r, e.Manager = n(13), e.Socket = n(37)
    }, function (t, e, n) {
        (function (o) {
            "use strict";
            var i = n(2),
                s = n(3)("socket.io-client:url");
            t.exports = function (t, e) {
                var n = t;
                e = e || o.location, null == t && (t = e.protocol + "//" + e.host), "string" == typeof t && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? e.protocol + t : e.host + t), /^(https?|wss?):\/\//.test(t) || (s("protocol-less url %s", t), t = void 0 !== e ? e.protocol + "//" + t : "https://" + t), s("parse %s", t), n = i(t)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";
                var r = -1 !== n.host.indexOf(":") ? "[" + n.host + "]" : n.host;
                return n.id = n.protocol + "://" + r + ":" + n.port, n.href = n.protocol + "://" + r + (e && e.port === n.port ? "" : ":" + n.port), n
            }
        }).call(e, function () {
            return this
        }())
    }, function (t, e) {
        var a = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
            c = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        t.exports = function (t) {
            var e = t,
                n = t.indexOf("["),
                r = t.indexOf("]"); - 1 != n && -1 != r && (t = t.substring(0, n) + t.substring(n, r).replace(/:/g, ";") + t.substring(r, t.length));
            for (var o = a.exec(t || ""), i = {}, s = 14; s--;) i[c[s]] = o[s] || "";
            return -1 != n && -1 != r && (i.source = e, i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":"), i.authority = i.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), i.ipv6uri = !0), i
        }
    }, function (n, i, r) {
        (function (e) {
            function t() {
                var t;
                try {
                    t = i.storage.debug
                } catch (t) {}
                return !t && void 0 !== e && "env" in e && (t = e.env.DEBUG), t
            }(i = n.exports = r(5)).log = function () {
                return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
            }, i.formatArgs = function (t) {
                var e = this.useColors;
                if (t[0] = (e ? "%c" : "") + this.namespace + (e ? " %c" : " ") + t[0] + (e ? "%c " : " ") + "+" + i.humanize(this.diff), e) {
                    var n = "color: " + this.color;
                    t.splice(1, 0, n, "color: inherit");
                    var r = 0,
                        o = 0;
                    t[0].replace(/%[a-zA-Z%]/g, function (t) {
                        "%%" !== t && (r++, "%c" === t && (o = r))
                    }), t.splice(o, 0, n)
                }
            }, i.save = function (t) {
                try {
                    null == t ? i.storage.removeItem("debug") : i.storage.debug = t
                } catch (t) {}
            }, i.load = t, i.useColors = function () {
                return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && 31 <= parseInt(RegExp.$1, 10) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
            }, i.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function () {
                try {
                    return window.localStorage
                } catch (t) {}
            }(), i.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], i.formatters.j = function (t) {
                try {
                    return JSON.stringify(t)
                } catch (t) {
                    return "[UnexpectedJSONParseError]: " + t.message
                }
            }, i.enable(t())
        }).call(i, r(4))
    }, function (t, e) {
        function n() {
            throw new Error("setTimeout has not been defined")
        }

        function r() {
            throw new Error("clearTimeout has not been defined")
        }

        function o(e) {
            if (u === setTimeout) return setTimeout(e, 0);
            if ((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(e, 0);
            try {
                return u(e, 0)
            } catch (t) {
                try {
                    return u.call(null, e, 0)
                } catch (t) {
                    return u.call(this, e, 0)
                }
            }
        }

        function i() {
            d && h && (d = !1, h.length ? f = h.concat(f) : g = -1, f.length && s())
        }

        function s() {
            if (!d) {
                var t = o(i);
                d = !0;
                for (var e = f.length; e;) {
                    for (h = f, f = []; ++g < e;) h && h[g].run();
                    g = -1, e = f.length
                }
                h = null, d = !1,
                    function (e) {
                        if (p === clearTimeout) return clearTimeout(e);
                        if ((p === r || !p) && clearTimeout) return p = clearTimeout, clearTimeout(e);
                        try {
                            p(e)
                        } catch (t) {
                            try {
                                return p.call(null, e)
                            } catch (t) {
                                return p.call(this, e)
                            }
                        }
                    }(t)
            }
        }

        function a(t, e) {
            this.fun = t, this.array = e
        }

        function c() {}
        var u, p, l = t.exports = {};
        ! function () {
            try {
                u = "function" == typeof setTimeout ? setTimeout : n
            } catch (t) {
                u = n
            }
            try {
                p = "function" == typeof clearTimeout ? clearTimeout : r
            } catch (t) {
                p = r
            }
        }();
        var h, f = [],
            d = !1,
            g = -1;
        l.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (1 < arguments.length)
                for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            f.push(new a(t, e)), 1 !== f.length || d || o(s)
        }, a.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, l.title = "browser", l.browser = !0, l.env = {}, l.argv = [], l.version = "", l.versions = {}, l.on = c, l.addListener = c, l.once = c, l.off = c, l.removeListener = c, l.removeAllListeners = c, l.emit = c, l.prependListener = c, l.prependOnceListener = c, l.listeners = function (t) {
            return []
        }, l.binding = function (t) {
            throw new Error("process.binding is not supported")
        }, l.cwd = function () {
            return "/"
        }, l.chdir = function (t) {
            throw new Error("process.chdir is not supported")
        }, l.umask = function () {
            return 0
        }
    }, function (t, a, e) {
        function n(t) {
            function r() {
                if (r.enabled) {
                    var o = r,
                        t = +new Date,
                        e = t - (c || t);
                    o.diff = e, o.prev = c, o.curr = t, c = t;
                    for (var i = new Array(arguments.length), n = 0; n < i.length; n++) i[n] = arguments[n];
                    i[0] = a.coerce(i[0]), "string" != typeof i[0] && i.unshift("%O");
                    var s = 0;
                    i[0] = i[0].replace(/%([a-zA-Z%])/g, function (t, e) {
                        if ("%%" === t) return t;
                        s++;
                        var n = a.formatters[e];
                        if ("function" == typeof n) {
                            var r = i[s];
                            t = n.call(o, r), i.splice(s, 1), s--
                        }
                        return t
                    }), a.formatArgs.call(o, i), (r.log || a.log || console.log.bind(console)).apply(o, i)
                }
            }
            return r.namespace = t, r.enabled = a.enabled(t), r.useColors = a.useColors(), r.color = function (t) {
                var e, n = 0;
                for (e in t) n = (n << 5) - n + t.charCodeAt(e), n |= 0;
                return a.colors[Math.abs(n) % a.colors.length]
            }(t), "function" == typeof a.init && a.init(r), r
        }
        var c;
        (a = t.exports = n.debug = n.default = n).coerce = function (t) {
            return t instanceof Error ? t.stack || t.message : t
        }, a.disable = function () {
            a.enable("")
        }, a.enable = function (t) {
            a.save(t), a.names = [], a.skips = [];
            for (var e = ("string" == typeof t ? t : "").split(/[\s,]+/), n = e.length, r = 0; r < n; r++) e[r] && ("-" === (t = e[r].replace(/\*/g, ".*?"))[0] ? a.skips.push(new RegExp("^" + t.substr(1) + "$")) : a.names.push(new RegExp("^" + t + "$")))
        }, a.enabled = function (t) {
            var e, n;
            for (e = 0, n = a.skips.length; e < n; e++)
                if (a.skips[e].test(t)) return !1;
            for (e = 0, n = a.names.length; e < n; e++)
                if (a.names[e].test(t)) return !0;
            return !1
        }, a.humanize = e(6), a.names = [], a.skips = [], a.formatters = {}
    }, function (t, e) {
        function i(t, e, n) {
            if (!(t < e)) return t < 1.5 * e ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s"
        }
        var s = 1e3,
            a = 60 * s,
            c = 60 * a,
            u = 24 * c,
            p = 365.25 * u;
        t.exports = function (t, e) {
            e = e || {};
            var n, r, o = typeof t;
            if ("string" === o && 0 < t.length) return function (t) {
                if (!(100 < (t = String(t)).length)) {
                    var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);
                    if (e) {
                        var n = parseFloat(e[1]);
                        switch ((e[2] || "ms").toLowerCase()) {
                            case "years":
                            case "year":
                            case "yrs":
                            case "yr":
                            case "y":
                                return n * p;
                            case "days":
                            case "day":
                            case "d":
                                return n * u;
                            case "hours":
                            case "hour":
                            case "hrs":
                            case "hr":
                            case "h":
                                return n * c;
                            case "minutes":
                            case "minute":
                            case "mins":
                            case "min":
                            case "m":
                                return n * a;
                            case "seconds":
                            case "second":
                            case "secs":
                            case "sec":
                            case "s":
                                return n * s;
                            case "milliseconds":
                            case "millisecond":
                            case "msecs":
                            case "msec":
                            case "ms":
                                return n;
                            default:
                                return
                        }
                    }
                }
            }(t);
            if ("number" === o && !1 === isNaN(t)) return e.long ? i(r = t, u, "day") || i(r, c, "hour") || i(r, a, "minute") || i(r, s, "second") || r + " ms" : u <= (n = t) ? Math.round(n / u) + "d" : c <= n ? Math.round(n / c) + "h" : a <= n ? Math.round(n / a) + "m" : s <= n ? Math.round(n / s) + "s" : n + "ms";
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t))
        }
    }, function (t, s, e) {
        function n() {}

        function i(t) {
            var e = "" + t.type;
            return s.BINARY_EVENT !== t.type && s.BINARY_ACK !== t.type || (e += t.attachments + "-"), t.nsp && "/" !== t.nsp && (e += t.nsp + ","), null != t.id && (e += t.id), null != t.data && (e += JSON.stringify(t.data)), u("encoded %j as %s", t, e), e
        }

        function r() {
            this.reconstructor = null
        }

        function o(t) {
            var e = 0,
                n = {
                    type: Number(t.charAt(0))
                };
            if (null == s.types[n.type]) return c();
            if (s.BINARY_EVENT === n.type || s.BINARY_ACK === n.type) {
                for (var r = "";
                    "-" !== t.charAt(++e) && (r += t.charAt(e), e != t.length););
                if (r != Number(r) || "-" !== t.charAt(e)) throw new Error("Illegal attachments");
                n.attachments = Number(r)
            }
            if ("/" === t.charAt(e + 1))
                for (n.nsp = ""; ++e;) {
                    if ("," === (i = t.charAt(e))) break;
                    if (n.nsp += i, e === t.length) break
                } else n.nsp = "/";
            var o = t.charAt(e + 1);
            if ("" !== o && Number(o) == o) {
                for (n.id = ""; ++e;) {
                    var i;
                    if (null == (i = t.charAt(e)) || Number(i) != i) {
                        --e;
                        break
                    }
                    if (n.id += t.charAt(e), e === t.length) break
                }
                n.id = Number(n.id)
            }
            return t.charAt(++e) && (n = function (t, e) {
                try {
                    t.data = JSON.parse(e)
                } catch (t) {
                    return c()
                }
                return t
            }(n, t.substr(e))), u("decoded %s as %j", t, n), n
        }

        function a(t) {
            this.reconPack = t, this.buffers = []
        }

        function c() {
            return {
                type: s.ERROR,
                data: "parser error"
            }
        }
        var u = e(3)("socket.io-parser"),
            p = e(8),
            l = e(9),
            h = e(11),
            f = e(12);
        s.protocol = 4, s.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], s.CONNECT = 0, s.DISCONNECT = 1, s.EVENT = 2, s.ACK = 3, s.ERROR = 4, s.BINARY_EVENT = 5, s.BINARY_ACK = 6, s.Encoder = n, s.Decoder = r, n.prototype.encode = function (t, e) {
            var n, o;
            (t.type !== s.EVENT && t.type !== s.ACK || !l(t.data) || (t.type = t.type === s.EVENT ? s.BINARY_EVENT : s.BINARY_ACK), u("encoding packet %j", t), s.BINARY_EVENT === t.type || s.BINARY_ACK === t.type) ? (n = t, o = e, h.removeBlobs(n, function (t) {
                var e = h.deconstructPacket(t),
                    n = i(e.packet),
                    r = e.buffers;
                r.unshift(n), o(r)
            })) : e([i(t)])
        }, p(r.prototype), r.prototype.add = function (t) {
            var e;
            if ("string" == typeof t) e = o(t), s.BINARY_EVENT === e.type || s.BINARY_ACK === e.type ? (this.reconstructor = new a(e), 0 === this.reconstructor.reconPack.attachments && this.emit("decoded", e)) : this.emit("decoded", e);
            else {
                if (!f(t) && !t.base64) throw new Error("Unknown type: " + t);
                if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
                (e = this.reconstructor.takeBinaryData(t)) && (this.reconstructor = null, this.emit("decoded", e))
            }
        }, r.prototype.destroy = function () {
            this.reconstructor && this.reconstructor.finishedReconstruction()
        }, a.prototype.takeBinaryData = function (t) {
            if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
                var e = h.reconstructPacket(this.reconPack, this.buffers);
                return this.finishedReconstruction(), e
            }
            return null
        }, a.prototype.finishedReconstruction = function () {
            this.reconPack = null, this.buffers = []
        }
    }, function (t, e, n) {
        function r(t) {
            if (t) return function (t) {
                for (var e in r.prototype) t[e] = r.prototype[e];
                return t
            }(t)
        }(t.exports = r).prototype.on = r.prototype.addEventListener = function (t, e) {
            return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this
        }, r.prototype.once = function (t, e) {
            function n() {
                this.off(t, n), e.apply(this, arguments)
            }
            return n.fn = e, this.on(t, n), this
        }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function (t, e) {
            if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
            var n = this._callbacks["$" + t];
            if (!n) return this;
            if (1 == arguments.length) return delete this._callbacks["$" + t], this;
            for (var r, o = 0; o < n.length; o++)
                if ((r = n[o]) === e || r.fn === e) {
                    n.splice(o, 1);
                    break
                }
            return this
        }, r.prototype.emit = function (t) {
            this._callbacks = this._callbacks || {};
            var e = [].slice.call(arguments, 1),
                n = this._callbacks["$" + t];
            if (n)
                for (var r = 0, o = (n = n.slice(0)).length; r < o; ++r) n[r].apply(this, e);
            return this
        }, r.prototype.listeners = function (t) {
            return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []
        }, r.prototype.hasListeners = function (t) {
            return !!this.listeners(t).length
        }
    }, function (e, t, n) {
        (function (i) {
            var s = n(10),
                t = Object.prototype.toString,
                a = "function" == typeof i.Blob || "[object BlobConstructor]" === t.call(i.Blob),
                c = "function" == typeof i.File || "[object FileConstructor]" === t.call(i.File);
            e.exports = function t(e) {
                if (!e || "object" != typeof e) return !1;
                if (s(e)) {
                    for (var n = 0, r = e.length; n < r; n++)
                        if (t(e[n])) return !0;
                    return !1
                }
                if ("function" == typeof i.Buffer && i.Buffer.isBuffer && i.Buffer.isBuffer(e) || "function" == typeof i.ArrayBuffer && e instanceof ArrayBuffer || a && e instanceof Blob || c && e instanceof File) return !0;
                if (e.toJSON && "function" == typeof e.toJSON && 1 === arguments.length) return t(e.toJSON(), !0);
                for (var o in e)
                    if (Object.prototype.hasOwnProperty.call(e, o) && t(e[o])) return !0;
                return !1
            }
        }).call(t, function () {
            return this
        }())
    }, function (t, e) {
        var n = {}.toString;
        t.exports = Array.isArray || function (t) {
            return "[object Array]" == n.call(t)
        }
    }, function (t, n, r) {
        (function (t) {
            var p = r(10),
                l = r(12),
                e = Object.prototype.toString,
                h = "function" == typeof t.Blob || "[object BlobConstructor]" === e.call(t.Blob),
                f = "function" == typeof t.File || "[object FileConstructor]" === e.call(t.File);
            n.deconstructPacket = function (t) {
                var e = [],
                    n = t.data,
                    r = t;
                return r.data = function t(e, n) {
                    if (!e) return e;
                    if (l(e)) {
                        var r = {
                            _placeholder: !0,
                            num: n.length
                        };
                        return n.push(e), r
                    }
                    if (p(e)) {
                        for (var o = new Array(e.length), i = 0; i < e.length; i++) o[i] = t(e[i], n);
                        return o
                    }
                    if ("object" == typeof e && !(e instanceof Date)) {
                        for (var s in o = {}, e) o[s] = t(e[s], n);
                        return o
                    }
                    return e
                }(n, e), r.attachments = e.length, {
                    packet: r,
                    buffers: e
                }
            }, n.reconstructPacket = function (t, e) {
                return t.data = function t(e, n) {
                    if (!e) return e;
                    if (e && e._placeholder) return n[e.num];
                    if (p(e))
                        for (var r = 0; r < e.length; r++) e[r] = t(e[r], n);
                    else if ("object" == typeof e)
                        for (var o in e) e[o] = t(e[o], n);
                    return e
                }(t.data, e), t.attachments = void 0, t
            }, n.removeBlobs = function (t, a) {
                var c = 0,
                    u = t;
                (function t(e, n, r) {
                    if (!e) return e;
                    if (h && e instanceof Blob || f && e instanceof File) {
                        c++;
                        var o = new FileReader;
                        o.onload = function () {
                            r ? r[n] = this.result : u = this.result, --c || a(u)
                        }, o.readAsArrayBuffer(e)
                    } else if (p(e))
                        for (var i = 0; i < e.length; i++) t(e[i], i, e);
                    else if ("object" == typeof e && !l(e))
                        for (var s in e) t(e[s], s, e)
                })(u), c || a(u)
            }
        }).call(n, function () {
            return this
        }())
    }, function (t, e) {
        (function (e) {
            t.exports = function (t) {
                return e.Buffer && e.Buffer.isBuffer(t) || e.ArrayBuffer && t instanceof ArrayBuffer
            }
        }).call(e, function () {
            return this
        }())
    }, function (t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(this instanceof r)) return new r(t, e);
            t && "object" === (void 0 === t ? "undefined" : o(t)) && (e = t, t = void 0), (e = e || {}).path = e.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = e, this.reconnection(!1 !== e.reconnection), this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e.reconnectionDelay || 1e3), this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3), this.randomizationFactor(e.randomizationFactor || .5), this.backoff = new f({
                min: this.reconnectionDelay(),
                max: this.reconnectionDelayMax(),
                jitter: this.randomizationFactor()
            }), this.timeout(null == e.timeout ? 2e4 : e.timeout), this.readyState = "closed", this.uri = t, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [];
            var n = e.parser || a;
            this.encoder = new n.Encoder, this.decoder = new n.Decoder, this.autoConnect = !1 !== e.autoConnect, this.autoConnect && this.open()
        }
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            },
            c = n(14),
            i = n(37),
            s = n(8),
            a = n(7),
            u = n(39),
            p = n(40),
            l = n(3)("socket.io-client:manager"),
            h = n(36),
            f = n(41),
            d = Object.prototype.hasOwnProperty;
        (t.exports = r).prototype.emitAll = function () {
            for (var t in this.emit.apply(this, arguments), this.nsps) d.call(this.nsps, t) && this.nsps[t].emit.apply(this.nsps[t], arguments)
        }, r.prototype.updateSocketIds = function () {
            for (var t in this.nsps) d.call(this.nsps, t) && (this.nsps[t].id = this.generateId(t))
        }, r.prototype.generateId = function (t) {
            return ("/" === t ? "" : t + "#") + this.engine.id
        }, s(r.prototype), r.prototype.reconnection = function (t) {
            return arguments.length ? (this._reconnection = !!t, this) : this._reconnection
        }, r.prototype.reconnectionAttempts = function (t) {
            return arguments.length ? (this._reconnectionAttempts = t, this) : this._reconnectionAttempts
        }, r.prototype.reconnectionDelay = function (t) {
            return arguments.length ? (this._reconnectionDelay = t, this.backoff && this.backoff.setMin(t), this) : this._reconnectionDelay
        }, r.prototype.randomizationFactor = function (t) {
            return arguments.length ? (this._randomizationFactor = t, this.backoff && this.backoff.setJitter(t), this) : this._randomizationFactor
        }, r.prototype.reconnectionDelayMax = function (t) {
            return arguments.length ? (this._reconnectionDelayMax = t, this.backoff && this.backoff.setMax(t), this) : this._reconnectionDelayMax
        }, r.prototype.timeout = function (t) {
            return arguments.length ? (this._timeout = t, this) : this._timeout
        }, r.prototype.maybeReconnectOnOpen = function () {
            !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
        }, r.prototype.open = r.prototype.connect = function (n, t) {
            if (l("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;
            l("opening %s", this.uri), this.engine = c(this.uri, this.opts);
            var e = this.engine,
                r = this;
            this.readyState = "opening", this.skipReconnect = !1;
            var o = u(e, "open", function () {
                    r.onopen(), n && n()
                }),
                i = u(e, "error", function (t) {
                    if (l("connect_error"), r.cleanup(), r.readyState = "closed", r.emitAll("connect_error", t), n) {
                        var e = new Error("Connection error");
                        e.data = t, n(e)
                    } else r.maybeReconnectOnOpen()
                });
            if (!1 !== this._timeout) {
                var s = this._timeout;
                l("connect attempt will timeout after %d", s);
                var a = setTimeout(function () {
                    l("connect attempt timed out after %d", s), o.destroy(), e.close(), e.emit("error", "timeout"), r.emitAll("connect_timeout", s)
                }, s);
                this.subs.push({
                    destroy: function () {
                        clearTimeout(a)
                    }
                })
            }
            return this.subs.push(o), this.subs.push(i), this
        }, r.prototype.onopen = function () {
            l("open"), this.cleanup(), this.readyState = "open", this.emit("open");
            var t = this.engine;
            this.subs.push(u(t, "data", p(this, "ondata"))), this.subs.push(u(t, "ping", p(this, "onping"))), this.subs.push(u(t, "pong", p(this, "onpong"))), this.subs.push(u(t, "error", p(this, "onerror"))), this.subs.push(u(t, "close", p(this, "onclose"))), this.subs.push(u(this.decoder, "decoded", p(this, "ondecoded")))
        }, r.prototype.onping = function () {
            this.lastPing = new Date, this.emitAll("ping")
        }, r.prototype.onpong = function () {
            this.emitAll("pong", new Date - this.lastPing)
        }, r.prototype.ondata = function (t) {
            this.decoder.add(t)
        }, r.prototype.ondecoded = function (t) {
            this.emit("packet", t)
        }, r.prototype.onerror = function (t) {
            l("error", t), this.emitAll("error", t)
        }, r.prototype.socket = function (t, e) {
            function n() {
                ~h(o.connecting, r) || o.connecting.push(r)
            }
            var r = this.nsps[t];
            if (!r) {
                r = new i(this, t, e), this.nsps[t] = r;
                var o = this;
                r.on("connecting", n), r.on("connect", function () {
                    r.id = o.generateId(t)
                }), this.autoConnect && n()
            }
            return r
        }, r.prototype.destroy = function (t) {
            var e = h(this.connecting, t);
            ~e && this.connecting.splice(e, 1), this.connecting.length || this.close()
        }, r.prototype.packet = function (n) {
            l("writing packet %j", n);
            var r = this;
            n.query && 0 === n.type && (n.nsp += "?" + n.query), r.encoding ? r.packetBuffer.push(n) : (r.encoding = !0, this.encoder.encode(n, function (t) {
                for (var e = 0; e < t.length; e++) r.engine.write(t[e], n.options);
                r.encoding = !1, r.processPacketQueue()
            }))
        }, r.prototype.processPacketQueue = function () {
            if (0 < this.packetBuffer.length && !this.encoding) {
                var t = this.packetBuffer.shift();
                this.packet(t)
            }
        }, r.prototype.cleanup = function () {
            l("cleanup");
            for (var t = this.subs.length, e = 0; e < t; e++) {
                this.subs.shift().destroy()
            }
            this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy()
        }, r.prototype.close = r.prototype.disconnect = function () {
            l("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, "opening" === this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close()
        }, r.prototype.onclose = function (t) {
            l("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", t), this._reconnection && !this.skipReconnect && this.reconnect()
        }, r.prototype.reconnect = function () {
            if (this.reconnecting || this.skipReconnect) return this;
            var e = this;
            if (this.backoff.attempts >= this._reconnectionAttempts) l("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1;
            else {
                var t = this.backoff.duration();
                l("will wait %dms before reconnect attempt", t), this.reconnecting = !0;
                var n = setTimeout(function () {
                    e.skipReconnect || (l("attempting reconnect"), e.emitAll("reconnect_attempt", e.backoff.attempts), e.emitAll("reconnecting", e.backoff.attempts), e.skipReconnect || e.open(function (t) {
                        t ? (l("reconnect attempt error"), e.reconnecting = !1, e.reconnect(), e.emitAll("reconnect_error", t.data)) : (l("reconnect success"), e.onreconnect())
                    }))
                }, t);
                this.subs.push({
                    destroy: function () {
                        clearTimeout(n)
                    }
                })
            }
        }, r.prototype.onreconnect = function () {
            var t = this.backoff.attempts;
            this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", t)
        }
    }, function (t, e, n) {
        t.exports = n(15), t.exports.parser = n(22)
    }, function (e, t, n) {
        (function (r) {
            function l(t, e) {
                if (!(this instanceof l)) return new l(t, e);
                e = e || {}, t && "object" == typeof t && (e = t, t = null), t ? (t = a(t), e.hostname = t.host, e.secure = "https" === t.protocol || "wss" === t.protocol, e.port = t.port, t.query && (e.query = t.query)) : e.host && (e.hostname = a(e.host).host), this.secure = null != e.secure ? e.secure : r.location && "https:" === location.protocol, e.hostname && !e.port && (e.port = this.secure ? "443" : "80"), this.agent = e.agent || !1, this.hostname = e.hostname || (r.location ? location.hostname : "localhost"), this.port = e.port || (r.location && location.port ? location.port : this.secure ? 443 : 80), this.query = e.query || {}, "string" == typeof this.query && (this.query = c.decode(this.query)), this.upgrade = !1 !== e.upgrade, this.path = (e.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!e.forceJSONP, this.jsonp = !1 !== e.jsonp, this.forceBase64 = !!e.forceBase64, this.enablesXDR = !!e.enablesXDR, this.timestampParam = e.timestampParam || "t", this.timestampRequests = e.timestampRequests, this.transports = e.transports || ["polling", "websocket"], this.transportOptions = e.transportOptions || {}, this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = e.policyPort || 843, this.rememberUpgrade = e.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = e.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== e.perMessageDeflate && (e.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = e.pfx || null, this.key = e.key || null, this.passphrase = e.passphrase || null, this.cert = e.cert || null, this.ca = e.ca || null, this.ciphers = e.ciphers || null, this.rejectUnauthorized = void 0 === e.rejectUnauthorized || e.rejectUnauthorized, this.forceNode = !!e.forceNode;
                var n = "object" == typeof r && r;
                n.global === n && (e.extraHeaders && 0 < Object.keys(e.extraHeaders).length && (this.extraHeaders = e.extraHeaders), e.localAddress && (this.localAddress = e.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open()
            }
            var o = n(16),
                t = n(8),
                h = n(3)("engine.io-client:socket"),
                i = n(36),
                s = n(22),
                a = n(2),
                c = n(30);
            (e.exports = l).priorWebsocketSuccess = !1, t(l.prototype), l.protocol = s.protocol, (l.Socket = l).Transport = n(21), l.transports = n(16), l.parser = n(22), l.prototype.createTransport = function (t) {
                h('creating transport "%s"', t);
                var e = function (t) {
                    var e = {};
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                    return e
                }(this.query);
                e.EIO = s.protocol, e.transport = t;
                var n = this.transportOptions[t] || {};
                return this.id && (e.sid = this.id), new o[t]({
                    query: e,
                    socket: this,
                    agent: n.agent || this.agent,
                    hostname: n.hostname || this.hostname,
                    port: n.port || this.port,
                    secure: n.secure || this.secure,
                    path: n.path || this.path,
                    forceJSONP: n.forceJSONP || this.forceJSONP,
                    jsonp: n.jsonp || this.jsonp,
                    forceBase64: n.forceBase64 || this.forceBase64,
                    enablesXDR: n.enablesXDR || this.enablesXDR,
                    timestampRequests: n.timestampRequests || this.timestampRequests,
                    timestampParam: n.timestampParam || this.timestampParam,
                    policyPort: n.policyPort || this.policyPort,
                    pfx: n.pfx || this.pfx,
                    key: n.key || this.key,
                    passphrase: n.passphrase || this.passphrase,
                    cert: n.cert || this.cert,
                    ca: n.ca || this.ca,
                    ciphers: n.ciphers || this.ciphers,
                    rejectUnauthorized: n.rejectUnauthorized || this.rejectUnauthorized,
                    perMessageDeflate: n.perMessageDeflate || this.perMessageDeflate,
                    extraHeaders: n.extraHeaders || this.extraHeaders,
                    forceNode: n.forceNode || this.forceNode,
                    localAddress: n.localAddress || this.localAddress,
                    requestTimeout: n.requestTimeout || this.requestTimeout,
                    protocols: n.protocols || void 0
                })
            }, l.prototype.open = function () {
                var t;
                if (this.rememberUpgrade && l.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) t = "websocket";
                else {
                    if (0 === this.transports.length) {
                        var e = this;
                        return void setTimeout(function () {
                            e.emit("error", "No transports available")
                        }, 0)
                    }
                    t = this.transports[0]
                }
                this.readyState = "opening";
                try {
                    t = this.createTransport(t)
                } catch (t) {
                    return this.transports.shift(), void this.open()
                }
                t.open(), this.setTransport(t)
            }, l.prototype.setTransport = function (t) {
                h("setting transport %s", t.name);
                var e = this;
                this.transport && (h("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), (this.transport = t).on("drain", function () {
                    e.onDrain()
                }).on("packet", function (t) {
                    e.onPacket(t)
                }).on("error", function (t) {
                    e.onError(t)
                }).on("close", function () {
                    e.onClose("transport close")
                })
            }, l.prototype.probe = function (n) {
                function t() {
                    if (p.onlyBinaryUpgrades) {
                        var t = !this.supportsBinary && p.transport.supportsBinary;
                        u = u || t
                    }
                    u || (h('probe transport "%s" opened', n), c.send([{
                        type: "ping",
                        data: "probe"
                    }]), c.once("packet", function (t) {
                        if (!u)
                            if ("pong" === t.type && "probe" === t.data) {
                                if (h('probe transport "%s" pong', n), p.upgrading = !0, p.emit("upgrading", c), !c) return;
                                l.priorWebsocketSuccess = "websocket" === c.name, h('pausing current transport "%s"', p.transport.name), p.transport.pause(function () {
                                    u || "closed" !== p.readyState && (h("changing transport and sending upgrade packet"), a(), p.setTransport(c), c.send([{
                                        type: "upgrade"
                                    }]), p.emit("upgrade", c), c = null, p.upgrading = !1, p.flush())
                                })
                            } else {
                                h('probe transport "%s" failed', n);
                                var e = new Error("probe error");
                                e.transport = c.name, p.emit("upgradeError", e)
                            }
                    }))
                }

                function r() {
                    u || (u = !0, a(), c.close(), c = null)
                }

                function e(t) {
                    var e = new Error("probe error: " + t);
                    e.transport = c.name, r(), h('probe transport "%s" failed because of error: %s', n, t), p.emit("upgradeError", e)
                }

                function o() {
                    e("transport closed")
                }

                function i() {
                    e("socket closed")
                }

                function s(t) {
                    c && t.name !== c.name && (h('"%s" works - aborting "%s"', t.name, c.name), r())
                }

                function a() {
                    c.removeListener("open", t), c.removeListener("error", e), c.removeListener("close", o), p.removeListener("close", i), p.removeListener("upgrading", s)
                }
                h('probing transport "%s"', n);
                var c = this.createTransport(n, {
                        probe: 1
                    }),
                    u = !1,
                    p = this;
                l.priorWebsocketSuccess = !1, c.once("open", t), c.once("error", e), c.once("close", o), this.once("close", i), this.once("upgrading", s), c.open()
            }, l.prototype.onOpen = function () {
                if (h("socket open"), this.readyState = "open", l.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause) {
                    h("starting upgrade probes");
                    for (var t = 0, e = this.upgrades.length; t < e; t++) this.probe(this.upgrades[t])
                }
            }, l.prototype.onPacket = function (t) {
                if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (h('socket receive: type "%s", data "%s"', t.type, t.data), this.emit("packet", t), this.emit("heartbeat"), t.type) {
                    case "open":
                        this.onHandshake(JSON.parse(t.data));
                        break;
                    case "pong":
                        this.setPing(), this.emit("pong");
                        break;
                    case "error":
                        var e = new Error("server error");
                        e.code = t.data, this.onError(e);
                        break;
                    case "message":
                        this.emit("data", t.data), this.emit("message", t.data)
                } else h('packet received with socket readyState "%s"', this.readyState)
            }, l.prototype.onHandshake = function (t) {
                this.emit("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.onOpen(), "closed" !== this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat))
            }, l.prototype.onHeartbeat = function (t) {
                clearTimeout(this.pingTimeoutTimer);
                var e = this;
                e.pingTimeoutTimer = setTimeout(function () {
                    "closed" !== e.readyState && e.onClose("ping timeout")
                }, t || e.pingInterval + e.pingTimeout)
            }, l.prototype.setPing = function () {
                var t = this;
                clearTimeout(t.pingIntervalTimer), t.pingIntervalTimer = setTimeout(function () {
                    h("writing ping packet - expecting pong within %sms", t.pingTimeout), t.ping(), t.onHeartbeat(t.pingTimeout)
                }, t.pingInterval)
            }, l.prototype.ping = function () {
                var t = this;
                this.sendPacket("ping", function () {
                    t.emit("ping")
                })
            }, l.prototype.onDrain = function () {
                this.writeBuffer.splice(0, this.prevBufferLen), (this.prevBufferLen = 0) === this.writeBuffer.length ? this.emit("drain") : this.flush()
            }, l.prototype.flush = function () {
                "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (h("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
            }, l.prototype.write = l.prototype.send = function (t, e, n) {
                return this.sendPacket("message", t, e, n), this
            }, l.prototype.sendPacket = function (t, e, n, r) {
                if ("function" == typeof e && (r = e, e = void 0), "function" == typeof n && (r = n, n = null), "closing" !== this.readyState && "closed" !== this.readyState) {
                    (n = n || {}).compress = !1 !== n.compress;
                    var o = {
                        type: t,
                        data: e,
                        options: n
                    };
                    this.emit("packetCreate", o), this.writeBuffer.push(o), r && this.once("flush", r), this.flush()
                }
            }, l.prototype.close = function () {
                function t() {
                    r.onClose("forced close"), h("socket closing - telling transport to close"), r.transport.close()
                }

                function e() {
                    r.removeListener("upgrade", e), r.removeListener("upgradeError", e), t()
                }

                function n() {
                    r.once("upgrade", e), r.once("upgradeError", e)
                }
                if ("opening" === this.readyState || "open" === this.readyState) {
                    this.readyState = "closing";
                    var r = this;
                    this.writeBuffer.length ? this.once("drain", function () {
                        this.upgrading ? n() : t()
                    }) : this.upgrading ? n() : t()
                }
                return this
            }, l.prototype.onError = function (t) {
                h("socket error %j", t), l.priorWebsocketSuccess = !1, this.emit("error", t), this.onClose("transport error", t)
            }, l.prototype.onClose = function (t, e) {
                if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
                    h('socket close with reason: "%s"', t);
                    clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", t, e), this.writeBuffer = [], this.prevBufferLen = 0
                }
            }, l.prototype.filterUpgrades = function (t) {
                for (var e = [], n = 0, r = t.length; n < r; n++) ~i(this.transports, t[n]) && e.push(t[n]);
                return e
            }
        }).call(t, function () {
            return this
        }())
    }, function (t, e, n) {
        (function (s) {
            var a = n(17),
                c = n(19),
                u = n(33),
                t = n(34);
            e.polling = function (t) {
                var e = !1,
                    n = !1,
                    r = !1 !== t.jsonp;
                if (s.location) {
                    var o = "https:" === location.protocol,
                        i = location.port;
                    i || (i = o ? 443 : 80), e = t.hostname !== location.hostname || i !== t.port, n = t.secure !== o
                }
                if (t.xdomain = e, t.xscheme = n, "open" in new a(t) && !t.forceJSONP) return new c(t);
                if (!r) throw new Error("JSONP disabled");
                return new u(t)
            }, e.websocket = t
        }).call(e, function () {
            return this
        }())
    }, function (t, e, n) {
        (function (o) {
            var i = n(18);
            t.exports = function (t) {
                var e = t.xdomain,
                    n = t.xscheme,
                    r = t.enablesXDR;
                try {
                    if ("undefined" != typeof XMLHttpRequest && (!e || i)) return new XMLHttpRequest
                } catch (t) {}
                try {
                    if ("undefined" != typeof XDomainRequest && !n && r) return new XDomainRequest
                } catch (t) {}
                if (!e) try {
                    return new(o[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                } catch (t) {}
            }
        }).call(e, function () {
            return this
        }())
    }, function (e, t) {
        try {
            e.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
        } catch (t) {
            e.exports = !1
        }
    }, function (p, t, l) {
        (function (o) {
            function e() {}

            function t(t) {
                if (r.call(this, t), this.requestTimeout = t.requestTimeout, this.extraHeaders = t.extraHeaders, o.location) {
                    var e = "https:" === location.protocol,
                        n = location.port;
                    n || (n = e ? 443 : 80), this.xd = t.hostname !== o.location.hostname || n !== t.port, this.xs = t.secure !== e
                }
            }

            function i(t) {
                this.method = t.method || "GET", this.uri = t.uri, this.xd = !!t.xd, this.xs = !!t.xs, this.async = !1 !== t.async, this.data = void 0 !== t.data ? t.data : null, this.agent = t.agent, this.isBinary = t.isBinary, this.supportsBinary = t.supportsBinary, this.enablesXDR = t.enablesXDR, this.requestTimeout = t.requestTimeout, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.extraHeaders = t.extraHeaders, this.create()
            }

            function n() {
                for (var t in i.requests) i.requests.hasOwnProperty(t) && i.requests[t].abort()
            }
            var s = l(17),
                r = l(20),
                a = l(8),
                c = l(31),
                u = l(3)("engine.io-client:polling-xhr");
            p.exports = t, p.exports.Request = i, c(t, r), t.prototype.supportsBinary = !0, t.prototype.request = function (t) {
                return (t = t || {}).uri = this.uri(), t.xd = this.xd, t.xs = this.xs, t.agent = this.agent || !1, t.supportsBinary = this.supportsBinary, t.enablesXDR = this.enablesXDR, t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized, t.requestTimeout = this.requestTimeout, t.extraHeaders = this.extraHeaders, new i(t)
            }, t.prototype.doWrite = function (t, e) {
                var n = "string" != typeof t && void 0 !== t,
                    r = this.request({
                        method: "POST",
                        data: t,
                        isBinary: n
                    }),
                    o = this;
                r.on("success", e), r.on("error", function (t) {
                    o.onError("xhr post error", t)
                }), this.sendXhr = r
            }, t.prototype.doPoll = function () {
                u("xhr poll");
                var t = this.request(),
                    e = this;
                t.on("data", function (t) {
                    e.onData(t)
                }), t.on("error", function (t) {
                    e.onError("xhr poll error", t)
                }), this.pollXhr = t
            }, a(i.prototype), i.prototype.create = function () {
                var t = {
                    agent: this.agent,
                    xdomain: this.xd,
                    xscheme: this.xs,
                    enablesXDR: this.enablesXDR
                };
                t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized;
                var e = this.xhr = new s(t),
                    n = this;
                try {
                    u("xhr open %s: %s", this.method, this.uri), e.open(this.method, this.uri, this.async);
                    try {
                        if (this.extraHeaders)
                            for (var r in e.setDisableHeaderCheck && e.setDisableHeaderCheck(!0), this.extraHeaders) this.extraHeaders.hasOwnProperty(r) && e.setRequestHeader(r, this.extraHeaders[r])
                    } catch (t) {}
                    if ("POST" === this.method) try {
                        this.isBinary ? e.setRequestHeader("Content-type", "application/octet-stream") : e.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                    } catch (t) {}
                    try {
                        e.setRequestHeader("Accept", "*/*")
                    } catch (t) {}
                    "withCredentials" in e && (e.withCredentials = !0), this.requestTimeout && (e.timeout = this.requestTimeout), this.hasXDR() ? (e.onload = function () {
                        n.onLoad()
                    }, e.onerror = function () {
                        n.onError(e.responseText)
                    }) : e.onreadystatechange = function () {
                        if (2 === e.readyState) {
                            var t;
                            try {
                                t = e.getResponseHeader("Content-Type")
                            } catch (t) {}
                            "application/octet-stream" === t && (e.responseType = "arraybuffer")
                        }
                        4 === e.readyState && (200 === e.status || 1223 === e.status ? n.onLoad() : setTimeout(function () {
                            n.onError(e.status)
                        }, 0))
                    }, u("xhr data %s", this.data), e.send(this.data)
                } catch (t) {
                    return void setTimeout(function () {
                        n.onError(t)
                    }, 0)
                }
                o.document && (this.index = i.requestsCount++, i.requests[this.index] = this)
            }, i.prototype.onSuccess = function () {
                this.emit("success"), this.cleanup()
            }, i.prototype.onData = function (t) {
                this.emit("data", t), this.onSuccess()
            }, i.prototype.onError = function (t) {
                this.emit("error", t), this.cleanup(!0)
            }, i.prototype.cleanup = function (t) {
                if (void 0 !== this.xhr && null !== this.xhr) {
                    if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = e : this.xhr.onreadystatechange = e, t) try {
                        this.xhr.abort()
                    } catch (t) {}
                    o.document && delete i.requests[this.index], this.xhr = null
                }
            }, i.prototype.onLoad = function () {
                var t;
                try {
                    var e;
                    try {
                        e = this.xhr.getResponseHeader("Content-Type")
                    } catch (t) {}
                    t = "application/octet-stream" === e && this.xhr.response || this.xhr.responseText
                } catch (t) {
                    this.onError(t)
                }
                null != t && this.onData(t)
            }, i.prototype.hasXDR = function () {
                return void 0 !== o.XDomainRequest && !this.xs && this.enablesXDR
            }, i.prototype.abort = function () {
                this.cleanup()
            }, i.requestsCount = 0, i.requests = {}, o.document && (o.attachEvent ? o.attachEvent("onunload", n) : o.addEventListener && o.addEventListener("beforeunload", n, !1))
        }).call(t, function () {
            return this
        }())
    }, function (t, e, n) {
        function r(t) {
            var e = t && t.forceBase64;
            p && !e || (this.supportsBinary = !1), o.call(this, t)
        }
        var o = n(21),
            i = n(30),
            s = n(22),
            a = n(31),
            c = n(32),
            u = n(3)("engine.io-client:polling");
        t.exports = r;
        var p = null != new(n(17))({
            xdomain: !1
        }).responseType;
        a(r, o), r.prototype.name = "polling", r.prototype.doOpen = function () {
            this.poll()
        }, r.prototype.pause = function (t) {
            function e() {
                u("paused"), n.readyState = "paused", t()
            }
            var n = this;
            if (this.readyState = "pausing", this.polling || !this.writable) {
                var r = 0;
                this.polling && (u("we are currently polling - waiting to pause"), r++, this.once("pollComplete", function () {
                    u("pre-pause polling complete"), --r || e()
                })), this.writable || (u("we are currently writing - waiting to pause"), r++, this.once("drain", function () {
                    u("pre-pause writing complete"), --r || e()
                }))
            } else e()
        }, r.prototype.poll = function () {
            u("polling"), this.polling = !0, this.doPoll(), this.emit("poll")
        }, r.prototype.onData = function (t) {
            var r = this;
            u("polling got data %s", t);
            s.decodePayload(t, this.socket.binaryType, function (t, e, n) {
                return "opening" === r.readyState && r.onOpen(), "close" === t.type ? (r.onClose(), !1) : void r.onPacket(t)
            }), "closed" !== this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" === this.readyState ? this.poll() : u('ignoring poll - transport state "%s"', this.readyState))
        }, r.prototype.doClose = function () {
            function t() {
                u("writing close packet"), e.write([{
                    type: "close"
                }])
            }
            var e = this;
            "open" === this.readyState ? (u("transport open - closing"), t()) : (u("transport not open - deferring close"), this.once("open", t))
        }, r.prototype.write = function (t) {
            var e = this;
            this.writable = !1;
            var n = function () {
                e.writable = !0, e.emit("drain")
            };
            s.encodePayload(t, this.supportsBinary, function (t) {
                e.doWrite(t, n)
            })
        }, r.prototype.uri = function () {
            var t = this.query || {},
                e = this.secure ? "https" : "http",
                n = "";
            return !1 !== this.timestampRequests && (t[this.timestampParam] = c()), this.supportsBinary || t.sid || (t.b64 = 1), t = i.encode(t), this.port && ("https" === e && 443 !== Number(this.port) || "http" === e && 80 !== Number(this.port)) && (n = ":" + this.port), t.length && (t = "?" + t), e + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t
        }
    }, function (t, e, n) {
        function r(t) {
            this.path = t.path, this.hostname = t.hostname, this.port = t.port, this.secure = t.secure, this.query = t.query, this.timestampParam = t.timestampParam, this.timestampRequests = t.timestampRequests, this.readyState = "", this.agent = t.agent || !1, this.socket = t.socket, this.enablesXDR = t.enablesXDR, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.forceNode = t.forceNode, this.extraHeaders = t.extraHeaders, this.localAddress = t.localAddress
        }
        var o = n(22);
        n(8)((t.exports = r).prototype), r.prototype.onError = function (t, e) {
            var n = new Error(t);
            return n.type = "TransportError", n.description = e, this.emit("error", n), this
        }, r.prototype.open = function () {
            return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this
        }, r.prototype.close = function () {
            return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this
        }, r.prototype.send = function (t) {
            if ("open" !== this.readyState) throw new Error("Transport not open");
            this.write(t)
        }, r.prototype.onOpen = function () {
            this.readyState = "open", this.writable = !0, this.emit("open")
        }, r.prototype.onData = function (t) {
            var e = o.decodePacket(t, this.socket.binaryType);
            this.onPacket(e)
        }, r.prototype.onPacket = function (t) {
            this.emit("packet", t)
        }, r.prototype.onClose = function () {
            this.readyState = "closed", this.emit("close")
        }
    }, function (t, y, r) {
        (function (u) {
            function a(t, e, n) {
                if (!e) return y.encodeBase64Packet(t, n);
                if (l) return function (t, e, n) {
                    if (!e) return y.encodeBase64Packet(t, n);
                    var r = new FileReader;
                    return r.onload = function () {
                        t.data = r.result, y.encodePacket(t, e, !0, n)
                    }, r.readAsArrayBuffer(t.data)
                }(t, e, n);
                var r = new Uint8Array(1);
                return r[0] = f[t.type], n(new m([r.buffer, t.data]))
            }

            function o(t, e, n) {
                for (var o = new Array(t.length), r = c(t.length, n), i = function (n, t, r) {
                        e(t, function (t, e) {
                            o[n] = e, r(t, o)
                        })
                    }, s = 0; s < t.length; s++) i(s, t[s], r)
            }
            var i, t = r(23),
                s = r(9),
                h = r(24),
                c = r(25),
                p = r(26);
            u && u.ArrayBuffer && (i = r(28));
            var e = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent),
                n = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent),
                l = e || n;
            y.protocol = 3;
            var f = y.packets = {
                    open: 0,
                    close: 1,
                    ping: 2,
                    pong: 3,
                    message: 4,
                    upgrade: 5,
                    noop: 6
                },
                d = t(f),
                g = {
                    type: "error",
                    data: "parser error"
                },
                m = r(29);
            y.encodePacket = function (t, e, n, r) {
                "function" == typeof e && (r = e, e = !1), "function" == typeof n && (r = n, n = null);
                var o, i = void 0 === t.data ? void 0 : t.data.buffer || t.data;
                if (u.ArrayBuffer && i instanceof ArrayBuffer) return function (t, e, n) {
                    if (!e) return y.encodeBase64Packet(t, n);
                    var r = t.data,
                        o = new Uint8Array(r),
                        i = new Uint8Array(1 + r.byteLength);
                    i[0] = f[t.type];
                    for (var s = 0; s < o.length; s++) i[s + 1] = o[s];
                    return n(i.buffer)
                }(t, e, r);
                if (m && i instanceof u.Blob) return a(t, e, r);
                if (i && i.base64) return o = t, r("b" + y.packets[o.type] + o.data.data);
                var s = f[t.type];
                return void 0 !== t.data && (s += n ? p.encode(String(t.data), {
                    strict: !1
                }) : String(t.data)), r("" + s)
            }, y.encodeBase64Packet = function (e, n) {
                var r, o = "b" + y.packets[e.type];
                if (m && e.data instanceof u.Blob) {
                    var i = new FileReader;
                    return i.onload = function () {
                        var t = i.result.split(",")[1];
                        n(o + t)
                    }, i.readAsDataURL(e.data)
                }
                try {
                    r = String.fromCharCode.apply(null, new Uint8Array(e.data))
                } catch (t) {
                    for (var s = new Uint8Array(e.data), a = new Array(s.length), c = 0; c < s.length; c++) a[c] = s[c];
                    r = String.fromCharCode.apply(null, a)
                }
                return o += u.btoa(r), n(o)
            }, y.decodePacket = function (t, e, n) {
                if (void 0 === t) return g;
                if ("string" == typeof t) {
                    if ("b" === t.charAt(0)) return y.decodeBase64Packet(t.substr(1), e);
                    if (n && !1 === (t = function (t) {
                            try {
                                t = p.decode(t, {
                                    strict: !1
                                })
                            } catch (t) {
                                return !1
                            }
                            return t
                        }(t))) return g;
                    var r = t.charAt(0);
                    return Number(r) == r && d[r] ? 1 < t.length ? {
                        type: d[r],
                        data: t.substring(1)
                    } : {
                        type: d[r]
                    } : g
                }
                r = new Uint8Array(t)[0];
                var o = h(t, 1);
                return m && "blob" === e && (o = new m([o])), {
                    type: d[r],
                    data: o
                }
            }, y.decodeBase64Packet = function (t, e) {
                var n = d[t.charAt(0)];
                if (!i) return {
                    type: n,
                    data: {
                        base64: !0,
                        data: t.substr(1)
                    }
                };
                var r = i.decode(t.substr(1));
                return "blob" === e && m && (r = new m([r])), {
                    type: n,
                    data: r
                }
            }, y.encodePayload = function (t, e, n) {
                "function" == typeof e && (n = e, e = null);
                var r = s(t);
                return e && r ? m && !l ? y.encodePayloadAsBlob(t, n) : y.encodePayloadAsArrayBuffer(t, n) : t.length ? void o(t, function (t, n) {
                    y.encodePacket(t, !!r && e, !1, function (t) {
                        var e;
                        n(null, (e = t).length + ":" + e)
                    })
                }, function (t, e) {
                    return n(e.join(""))
                }) : n("0:")
            }, y.decodePayload = function (t, e, n) {
                if ("string" != typeof t) return y.decodePayloadAsBinary(t, e, n);
                var r;
                if ("function" == typeof e && (n = e, e = null), "" === t) return n(g, 0, 1);
                for (var o, i, s = "", a = 0, c = t.length; a < c; a++) {
                    var u = t.charAt(a);
                    if (":" === u) {
                        if ("" === s || s != (o = Number(s))) return n(g, 0, 1);
                        if (s != (i = t.substr(a + 1, o)).length) return n(g, 0, 1);
                        if (i.length) {
                            if (r = y.decodePacket(i, e, !1), g.type === r.type && g.data === r.data) return n(g, 0, 1);
                            if (!1 === n(r, a + o, c)) return
                        }
                        a += o, s = ""
                    } else s += u
                }
                return "" !== s ? n(g, 0, 1) : void 0
            }, y.encodePayloadAsArrayBuffer = function (t, r) {
                return t.length ? void o(t, function (t, e) {
                    y.encodePacket(t, !0, !0, function (t) {
                        return e(null, t)
                    })
                }, function (t, e) {
                    var n = e.reduce(function (t, e) {
                            var n;
                            return t + (n = "string" == typeof e ? e.length : e.byteLength).toString().length + n + 2
                        }, 0),
                        s = new Uint8Array(n),
                        a = 0;
                    return e.forEach(function (t) {
                        var e = "string" == typeof t,
                            n = t;
                        if (e) {
                            for (var r = new Uint8Array(t.length), o = 0; o < t.length; o++) r[o] = t.charCodeAt(o);
                            n = r.buffer
                        }
                        s[a++] = e ? 0 : 1;
                        var i = n.byteLength.toString();
                        for (o = 0; o < i.length; o++) s[a++] = parseInt(i[o]);
                        s[a++] = 255;
                        for (r = new Uint8Array(n), o = 0; o < r.length; o++) s[a++] = r[o]
                    }), r(s.buffer)
                }) : r(new ArrayBuffer(0))
            }, y.encodePayloadAsBlob = function (t, n) {
                o(t, function (t, a) {
                    y.encodePacket(t, !0, !0, function (t) {
                        var e = new Uint8Array(1);
                        if (e[0] = 1, "string" == typeof t) {
                            for (var n = new Uint8Array(t.length), r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
                            t = n.buffer, e[0] = 0
                        }
                        var o = (t instanceof ArrayBuffer ? t.byteLength : t.size).toString(),
                            i = new Uint8Array(o.length + 1);
                        for (r = 0; r < o.length; r++) i[r] = parseInt(o[r]);
                        if (i[o.length] = 255, m) {
                            var s = new m([e.buffer, i.buffer, t]);
                            a(null, s)
                        }
                    })
                }, function (t, e) {
                    return n(new m(e))
                })
            }, y.decodePayloadAsBinary = function (t, n, r) {
                "function" == typeof n && (r = n, n = null);
                for (var e = t, o = []; 0 < e.byteLength;) {
                    for (var i = new Uint8Array(e), s = 0 === i[0], a = "", c = 1; 255 !== i[c]; c++) {
                        if (310 < a.length) return r(g, 0, 1);
                        a += i[c]
                    }
                    e = h(e, 2 + a.length), a = parseInt(a);
                    var u = h(e, 0, a);
                    if (s) try {
                        u = String.fromCharCode.apply(null, new Uint8Array(u))
                    } catch (t) {
                        var p = new Uint8Array(u);
                        u = "";
                        for (c = 0; c < p.length; c++) u += String.fromCharCode(p[c])
                    }
                    o.push(u), e = h(e, a)
                }
                var l = o.length;
                o.forEach(function (t, e) {
                    r(y.decodePacket(t, n, !0), e, l)
                })
            }
        }).call(y, function () {
            return this
        }())
    }, function (t, e) {
        t.exports = Object.keys || function (t) {
            var e = [],
                n = Object.prototype.hasOwnProperty;
            for (var r in t) n.call(t, r) && e.push(r);
            return e
        }
    }, function (t, e) {
        t.exports = function (t, e, n) {
            var r = t.byteLength;
            if (e = e || 0, n = n || r, t.slice) return t.slice(e, n);
            if (e < 0 && (e += r), n < 0 && (n += r), r < n && (n = r), r <= e || n <= e || 0 === r) return new ArrayBuffer(0);
            for (var o = new Uint8Array(t), i = new Uint8Array(n - e), s = e, a = 0; s < n; s++, a++) i[a] = o[s];
            return i.buffer
        }
    }, function (t, e) {
        function s() {}
        t.exports = function (t, n, r) {
            function o(t, e) {
                if (o.count <= 0) throw new Error("after called too many times");
                --o.count, t ? (i = !0, n(t), n = r) : 0 !== o.count || i || n(null, e)
            }
            var i = !1;
            return r = r || s, 0 === (o.count = t) ? n() : o
        }
    }, function (t, g, m) {
        var y;
        (function (f, d) {
            ! function (t) {
                function a(t) {
                    for (var e, n, r = [], o = 0, i = t.length; o < i;) 55296 <= (e = t.charCodeAt(o++)) && e <= 56319 && o < i ? 56320 == (64512 & (n = t.charCodeAt(o++))) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e), o--) : r.push(e);
                    return r
                }

                function r(t, e) {
                    if (55296 <= t && t <= 57343) {
                        if (e) throw Error("Lone surrogate U+" + t.toString(16).toUpperCase() + " is not a scalar value");
                        return !1
                    }
                    return !0
                }

                function o(t, e) {
                    return h(t >> e & 63 | 128)
                }

                function c(t, e) {
                    if (0 == (4294967168 & t)) return h(t);
                    var n = "";
                    return 0 == (4294965248 & t) ? n = h(t >> 6 & 31 | 192) : 0 == (4294901760 & t) ? (r(t, e) || (t = 65533), n = h(t >> 12 & 15 | 224), n += o(t, 6)) : 0 == (4292870144 & t) && (n = h(t >> 18 & 7 | 240), n += o(t, 12), n += o(t, 6)), n + h(63 & t | 128)
                }

                function i() {
                    if (p <= l) throw Error("Invalid byte index");
                    var t = 255 & u[l];
                    if (l++, 128 == (192 & t)) return 63 & t;
                    throw Error("Invalid continuation byte")
                }

                function s(t) {
                    var e, n;
                    if (p < l) throw Error("Invalid byte index");
                    if (l == p) return !1;
                    if (e = 255 & u[l], l++, 0 == (128 & e)) return e;
                    if (192 == (224 & e)) {
                        if (128 <= (n = (31 & e) << 6 | i())) return n;
                        throw Error("Invalid continuation byte")
                    }
                    if (224 == (240 & e)) {
                        if (2048 <= (n = (15 & e) << 12 | i() << 6 | i())) return r(n, t) ? n : 65533;
                        throw Error("Invalid continuation byte")
                    }
                    if (240 == (248 & e) && (65536 <= (n = (7 & e) << 18 | i() << 12 | i() << 6 | i()) && n <= 1114111)) return n;
                    throw Error("Invalid UTF-8 detected")
                }
                var e = ("object" == typeof f && f && f.exports, "object" == typeof d && d);
                e.global !== e && e.window;
                var u, p, l, h = String.fromCharCode,
                    n = {
                        version: "2.1.2",
                        encode: function (t, e) {
                            for (var n = !1 !== (e = e || {}).strict, r = a(t), o = r.length, i = -1, s = ""; ++i < o;) s += c(r[i], n);
                            return s
                        },
                        decode: function (t, e) {
                            var n = !1 !== (e = e || {}).strict;
                            u = a(t), p = u.length, l = 0;
                            for (var r, o = []; !1 !== (r = s(n));) o.push(r);
                            return function (t) {
                                for (var e, n = t.length, r = -1, o = ""; ++r < n;) 65535 < (e = t[r]) && (o += h((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), o += h(e);
                                return o
                            }(o)
                        }
                    };
                void 0 === (y = function () {
                    return n
                }.call(g, m, g, f)) || (f.exports = y)
            }()
        }).call(g, m(27)(t), function () {
            return this
        }())
    }, function (t, e) {
        t.exports = function (t) {
            return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children = [], t.webpackPolyfill = 1), t
        }
    }, function (t, e) {
        ! function () {
            "use strict";
            for (var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", l = new Uint8Array(256), t = 0; t < i.length; t++) l[i.charCodeAt(t)] = t;
            e.encode = function (t) {
                var e, n = new Uint8Array(t),
                    r = n.length,
                    o = "";
                for (e = 0; e < r; e += 3) o += i[n[e] >> 2], o += i[(3 & n[e]) << 4 | n[e + 1] >> 4], o += i[(15 & n[e + 1]) << 2 | n[e + 2] >> 6], o += i[63 & n[e + 2]];
                return r % 3 == 2 ? o = o.substring(0, o.length - 1) + "=" : r % 3 == 1 && (o = o.substring(0, o.length - 2) + "=="), o
            }, e.decode = function (t) {
                var e, n, r, o, i, s = .75 * t.length,
                    a = t.length,
                    c = 0;
                "=" === t[t.length - 1] && (s--, "=" === t[t.length - 2] && s--);
                var u = new ArrayBuffer(s),
                    p = new Uint8Array(u);
                for (e = 0; e < a; e += 4) n = l[t.charCodeAt(e)], r = l[t.charCodeAt(e + 1)], o = l[t.charCodeAt(e + 2)], i = l[t.charCodeAt(e + 3)], p[c++] = n << 2 | r >> 4, p[c++] = (15 & r) << 4 | o >> 2, p[c++] = (3 & o) << 6 | 63 & i;
                return u
            }
        }()
    }, function (c, t) {
        (function (t) {
            function o(t) {
                for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    if (n.buffer instanceof ArrayBuffer) {
                        var r = n.buffer;
                        if (n.byteLength !== r.byteLength) {
                            var o = new Uint8Array(n.byteLength);
                            o.set(new Uint8Array(r, n.byteOffset, n.byteLength)), r = o.buffer
                        }
                        t[e] = r
                    }
                }
            }

            function e(t, e) {
                e = e || {};
                var n = new i;
                o(t);
                for (var r = 0; r < t.length; r++) n.append(t[r]);
                return e.type ? n.getBlob(e.type) : n.getBlob()
            }

            function n(t, e) {
                return o(t), new Blob(t, e || {})
            }
            var i = t.BlobBuilder || t.WebKitBlobBuilder || t.MSBlobBuilder || t.MozBlobBuilder,
                r = function () {
                    try {
                        return 2 === new Blob(["hi"]).size
                    } catch (t) {
                        return !1
                    }
                }(),
                s = r && function () {
                    try {
                        return 2 === new Blob([new Uint8Array([1, 2])]).size
                    } catch (t) {
                        return !1
                    }
                }(),
                a = i && i.prototype.append && i.prototype.getBlob;
            c.exports = r ? s ? t.Blob : n : a ? e : void 0
        }).call(t, function () {
            return this
        }())
    }, function (t, e) {
        e.encode = function (t) {
            var e = "";
            for (var n in t) t.hasOwnProperty(n) && (e.length && (e += "&"), e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
            return e
        }, e.decode = function (t) {
            for (var e = {}, n = t.split("&"), r = 0, o = n.length; r < o; r++) {
                var i = n[r].split("=");
                e[decodeURIComponent(i[0])] = decodeURIComponent(i[1])
            }
            return e
        }
    }, function (t, e) {
        t.exports = function (t, e) {
            var n = function () {};
            n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t
        }
    }, function (t, e) {
        "use strict";

        function n(t) {
            for (var e = ""; e = i[t % s] + e, 0 < (t = Math.floor(t / s)););
            return e
        }

        function r() {
            var t = n(+new Date);
            return t !== o ? (c = 0, o = t) : t + "." + n(c++)
        }
        for (var o, i = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), s = 64, a = {}, c = 0, u = 0; u < s; u++) a[i[u]] = u;
        r.encode = n, r.decode = function (t) {
            var e = 0;
            for (u = 0; u < t.length; u++) e = e * s + a[t.charAt(u)];
            return e
        }, t.exports = r
    }, function (s, t, a) {
        (function (n) {
            function r() {}

            function t(t) {
                o.call(this, t), this.query = this.query || {}, i || (n.___eio || (n.___eio = []), i = n.___eio), this.index = i.length;
                var e = this;
                i.push(function (t) {
                    e.onData(t)
                }), this.query.j = this.index, n.document && n.addEventListener && n.addEventListener("beforeunload", function () {
                    e.script && (e.script.onerror = r)
                }, !1)
            }
            var o = a(20),
                e = a(31);
            s.exports = t;
            var i, u = /\n/g,
                p = /\\n/g;
            e(t, o), t.prototype.supportsBinary = !1, t.prototype.doClose = function () {
                this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), o.prototype.doClose.call(this)
            }, t.prototype.doPoll = function () {
                var e = this,
                    t = document.createElement("script");
                this.script && (this.script.parentNode.removeChild(this.script), this.script = null), t.async = !0, t.src = this.uri(), t.onerror = function (t) {
                    e.onError("jsonp poll error", t)
                };
                var n = document.getElementsByTagName("script")[0];
                n ? n.parentNode.insertBefore(t, n) : (document.head || document.body).appendChild(t), this.script = t, "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout(function () {
                    var t = document.createElement("iframe");
                    document.body.appendChild(t), document.body.removeChild(t)
                }, 100)
            }, t.prototype.doWrite = function (t, e) {
                function n() {
                    r(), e()
                }

                function r() {
                    if (o.iframe) try {
                        o.form.removeChild(o.iframe)
                    } catch (t) {
                        o.onError("jsonp polling iframe removal error", t)
                    }
                    try {
                        var t = '<iframe src="javascript:0" name="' + o.iframeId + '">';
                        i = document.createElement(t)
                    } catch (t) {
                        (i = document.createElement("iframe")).name = o.iframeId, i.src = "javascript:0"
                    }
                    i.id = o.iframeId, o.form.appendChild(i), o.iframe = i
                }
                var o = this;
                if (!this.form) {
                    var i, s = document.createElement("form"),
                        a = document.createElement("textarea"),
                        c = this.iframeId = "eio_iframe_" + this.index;
                    s.className = "socketio", s.style.position = "absolute", s.style.top = "-1000px", s.style.left = "-1000px", s.target = c, s.method = "POST", s.setAttribute("accept-charset", "utf-8"), a.name = "d", s.appendChild(a), document.body.appendChild(s), this.form = s, this.area = a
                }
                this.form.action = this.uri(), r(), t = t.replace(p, "\\\n"), this.area.value = t.replace(u, "\\n");
                try {
                    this.form.submit()
                } catch (t) {}
                this.iframe.attachEvent ? this.iframe.onreadystatechange = function () {
                    "complete" === o.iframe.readyState && n()
                } : this.iframe.onload = n
            }
        }).call(t, function () {
            return this
        }())
    }, function (l, t, h) {
        (function (i) {
            function t(t) {
                t && t.forceBase64 && (this.supportsBinary = !1), this.perMessageDeflate = t.perMessageDeflate, this.usingBrowserWebSocket = u && !t.forceNode, this.protocols = t.protocols, this.usingBrowserWebSocket || (p = e), n.call(this, t)
            }
            var e, n = h(21),
                s = h(22),
                r = h(30),
                o = h(31),
                a = h(32),
                c = h(3)("engine.io-client:websocket"),
                u = i.WebSocket || i.MozWebSocket;
            if ("undefined" == typeof window) try {
                e = h(35)
            } catch (t) {}
            var p = u;
            p || "undefined" != typeof window || (p = e), o(l.exports = t, n), t.prototype.name = "websocket", t.prototype.supportsBinary = !0, t.prototype.doOpen = function () {
                if (this.check()) {
                    var t = this.uri(),
                        e = this.protocols,
                        n = {
                            agent: this.agent,
                            perMessageDeflate: this.perMessageDeflate
                        };
                    n.pfx = this.pfx, n.key = this.key, n.passphrase = this.passphrase, n.cert = this.cert, n.ca = this.ca, n.ciphers = this.ciphers, n.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (n.headers = this.extraHeaders), this.localAddress && (n.localAddress = this.localAddress);
                    try {
                        this.ws = this.usingBrowserWebSocket ? e ? new p(t, e) : new p(t) : new p(t, e, n)
                    } catch (t) {
                        return this.emit("error", t)
                    }
                    void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners()
                }
            }, t.prototype.addEventListeners = function () {
                var e = this;
                this.ws.onopen = function () {
                    e.onOpen()
                }, this.ws.onclose = function () {
                    e.onClose()
                }, this.ws.onmessage = function (t) {
                    e.onData(t.data)
                }, this.ws.onerror = function (t) {
                    e.onError("websocket error", t)
                }
            }, t.prototype.write = function (t) {
                var r = this;
                this.writable = !1;
                for (var o = t.length, e = 0, n = o; e < n; e++) ! function (n) {
                    s.encodePacket(n, r.supportsBinary, function (t) {
                        if (!r.usingBrowserWebSocket) {
                            var e = {};
                            if (n.options && (e.compress = n.options.compress), r.perMessageDeflate)("string" == typeof t ? i.Buffer.byteLength(t) : t.length) < r.perMessageDeflate.threshold && (e.compress = !1)
                        }
                        try {
                            r.usingBrowserWebSocket ? r.ws.send(t) : r.ws.send(t, e)
                        } catch (t) {
                            c("websocket closed before onclose event")
                        }--o || (r.emit("flush"), setTimeout(function () {
                            r.writable = !0, r.emit("drain")
                        }, 0))
                    })
                }(t[e])
            }, t.prototype.onClose = function () {
                n.prototype.onClose.call(this)
            }, t.prototype.doClose = function () {
                void 0 !== this.ws && this.ws.close()
            }, t.prototype.uri = function () {
                var t = this.query || {},
                    e = this.secure ? "wss" : "ws",
                    n = "";
                return this.port && ("wss" === e && 443 !== Number(this.port) || "ws" === e && 80 !== Number(this.port)) && (n = ":" + this.port), this.timestampRequests && (t[this.timestampParam] = a()), this.supportsBinary || (t.b64 = 1), (t = r.encode(t)).length && (t = "?" + t), e + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t
            }, t.prototype.check = function () {
                return !(!p || "__initialize" in p && this.name === t.prototype.name)
            }
        }).call(t, function () {
            return this
        }())
    }, function (t, e) {}, function (t, e) {
        var r = [].indexOf;
        t.exports = function (t, e) {
            if (r) return t.indexOf(e);
            for (var n = 0; n < t.length; ++n)
                if (t[n] === e) return n;
            return -1
        }
    }, function (t, e, n) {
        "use strict";

        function r(t, e, n) {
            this.io = t, this.nsp = e, (this.json = this).ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, n && n.query && (this.query = n.query), this.io.autoConnect && this.open()
        }
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            },
            i = n(7),
            s = n(8),
            a = n(38),
            c = n(39),
            u = n(40),
            p = n(3)("socket.io-client:socket"),
            l = n(30);
        t.exports = r;
        var h = {
                connect: 1,
                connect_error: 1,
                connect_timeout: 1,
                connecting: 1,
                disconnect: 1,
                error: 1,
                reconnect: 1,
                reconnect_attempt: 1,
                reconnect_failed: 1,
                reconnect_error: 1,
                reconnecting: 1,
                ping: 1,
                pong: 1
            },
            f = s.prototype.emit;
        s(r.prototype), r.prototype.subEvents = function () {
            if (!this.subs) {
                var t = this.io;
                this.subs = [c(t, "open", u(this, "onopen")), c(t, "packet", u(this, "onpacket")), c(t, "close", u(this, "onclose"))]
            }
        }, r.prototype.open = r.prototype.connect = function () {
            return this.connected || (this.subEvents(), this.io.open(), "open" === this.io.readyState && this.onopen(), this.emit("connecting")), this
        }, r.prototype.send = function () {
            var t = a(arguments);
            return t.unshift("message"), this.emit.apply(this, t), this
        }, r.prototype.emit = function (t) {
            if (h.hasOwnProperty(t)) return f.apply(this, arguments), this;
            var e = a(arguments),
                n = {
                    type: i.EVENT,
                    data: e,
                    options: {}
                };
            return n.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof e[e.length - 1] && (p("emitting packet with ack id %d", this.ids), this.acks[this.ids] = e.pop(), n.id = this.ids++), this.connected ? this.packet(n) : this.sendBuffer.push(n), delete this.flags, this
        }, r.prototype.packet = function (t) {
            t.nsp = this.nsp, this.io.packet(t)
        }, r.prototype.onopen = function () {
            if (p("transport is open - connecting"), "/" !== this.nsp)
                if (this.query) {
                    var t = "object" === o(this.query) ? l.encode(this.query) : this.query;
                    p("sending connect packet with query %s", t), this.packet({
                        type: i.CONNECT,
                        query: t
                    })
                } else this.packet({
                    type: i.CONNECT
                })
        }, r.prototype.onclose = function (t) {
            p("close (%s)", t), this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", t)
        }, r.prototype.onpacket = function (t) {
            if (t.nsp === this.nsp) switch (t.type) {
                case i.CONNECT:
                    this.onconnect();
                    break;
                case i.EVENT:
                case i.BINARY_EVENT:
                    this.onevent(t);
                    break;
                case i.ACK:
                case i.BINARY_ACK:
                    this.onack(t);
                    break;
                case i.DISCONNECT:
                    this.ondisconnect();
                    break;
                case i.ERROR:
                    this.emit("error", t.data)
            }
        }, r.prototype.onevent = function (t) {
            var e = t.data || [];
            p("emitting event %j", e), null != t.id && (p("attaching ack callback to event"), e.push(this.ack(t.id))), this.connected ? f.apply(this, e) : this.receiveBuffer.push(e)
        }, r.prototype.ack = function (e) {
            var n = this,
                r = !1;
            return function () {
                if (!r) {
                    r = !0;
                    var t = a(arguments);
                    p("sending ack %j", t), n.packet({
                        type: i.ACK,
                        id: e,
                        data: t
                    })
                }
            }
        }, r.prototype.onack = function (t) {
            var e = this.acks[t.id];
            "function" == typeof e ? (p("calling ack %s with %j", t.id, t.data), e.apply(this, t.data), delete this.acks[t.id]) : p("bad ack %s", t.id)
        }, r.prototype.onconnect = function () {
            this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered()
        }, r.prototype.emitBuffered = function () {
            var t;
            for (t = 0; t < this.receiveBuffer.length; t++) f.apply(this, this.receiveBuffer[t]);
            for (this.receiveBuffer = [], t = 0; t < this.sendBuffer.length; t++) this.packet(this.sendBuffer[t]);
            this.sendBuffer = []
        }, r.prototype.ondisconnect = function () {
            p("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect")
        }, r.prototype.destroy = function () {
            if (this.subs) {
                for (var t = 0; t < this.subs.length; t++) this.subs[t].destroy();
                this.subs = null
            }
            this.io.destroy(this)
        }, r.prototype.close = r.prototype.disconnect = function () {
            return this.connected && (p("performing disconnect (%s)", this.nsp), this.packet({
                type: i.DISCONNECT
            })), this.destroy(), this.connected && this.onclose("io client disconnect"), this
        }, r.prototype.compress = function (t) {
            return this.flags = this.flags || {}, this.flags.compress = t, this
        }
    }, function (t, e) {
        t.exports = function (t, e) {
            for (var n = [], r = (e = e || 0) || 0; r < t.length; r++) n[r - e] = t[r];
            return n
        }
    }, function (t, e) {
        "use strict";
        t.exports = function (t, e, n) {
            return t.on(e, n), {
                destroy: function () {
                    t.removeListener(e, n)
                }
            }
        }
    }, function (t, e) {
        var r = [].slice;
        t.exports = function (t, e) {
            if ("string" == typeof e && (e = t[e]), "function" != typeof e) throw new Error("bind() requires a function");
            var n = r.call(arguments, 2);
            return function () {
                return e.apply(t, n.concat(r.call(arguments)))
            }
        }
    }, function (t, e) {
        function n(t) {
            t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = 0 < t.jitter && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0
        }(t.exports = n).prototype.duration = function () {
            var t = this.ms * Math.pow(this.factor, this.attempts++);
            if (this.jitter) {
                var e = Math.random(),
                    n = Math.floor(e * this.jitter * t);
                t = 0 == (1 & Math.floor(10 * e)) ? t - n : t + n
            }
            return 0 | Math.min(t, this.max)
        }, n.prototype.reset = function () {
            this.attempts = 0
        }, n.prototype.setMin = function (t) {
            this.ms = t
        }, n.prototype.setMax = function (t) {
            this.max = t
        }, n.prototype.setJitter = function (t) {
            this.jitter = t
        }
    }])
});
var Latinise = {};

function isNumeric(t) {
    return !isNaN(parseFloat(t)) && isFinite(t)
}

function utf8_encode(t) {
    t = t.replace(/\r\n/g, "\n");
    for (var e = "", n = 0; n < t.length; n++) {
        var r = t.charCodeAt(n);
        r < 128 ? e += String.fromCharCode(r) : (127 < r && r < 2048 ? e += String.fromCharCode(r >> 6 | 192) : (e += String.fromCharCode(r >> 12 | 224), e += String.fromCharCode(r >> 6 & 63 | 128)), e += String.fromCharCode(63 & r | 128))
    }
    return e
}

function utf8_decode(t) {
    for (var e = "", n = 0, r = c1 = c2 = 0; n < t.length;)(r = t.charCodeAt(n)) < 128 ? (e += String.fromCharCode(r), n++) : 191 < r && r < 224 ? (c2 = t.charCodeAt(n + 1), e += String.fromCharCode((31 & r) << 6 | 63 & c2), n += 2) : (c2 = t.charCodeAt(n + 1), c3 = t.charCodeAt(n + 2), e += String.fromCharCode((15 & r) << 12 | (63 & c2) << 6 | 63 & c3), n += 3);
    return e
}
Latinise.latin_map = {
        "Á": "A",
        "Ă": "A",
        "Ắ": "A",
        "Ặ": "A",
        "Ằ": "A",
        "Ẳ": "A",
        "Ẵ": "A",
        "Ǎ": "A",
        "Â": "A",
        "Ấ": "A",
        "Ậ": "A",
        "Ầ": "A",
        "Ẩ": "A",
        "Ẫ": "A",
        "Ä": "A",
        "Ǟ": "A",
        "Ȧ": "A",
        "Ǡ": "A",
        "Ạ": "A",
        "Ȁ": "A",
        "À": "A",
        "Ả": "A",
        "Ȃ": "A",
        "Ā": "A",
        "Ą": "A",
        "Å": "A",
        "Ǻ": "A",
        "Ḁ": "A",
        "Ⱥ": "A",
        "Ã": "A",
        "Ꜳ": "AA",
        "Æ": "AE",
        "Ǽ": "AE",
        "Ǣ": "AE",
        "Ꜵ": "AO",
        "Ꜷ": "AU",
        "Ꜹ": "AV",
        "Ꜻ": "AV",
        "Ꜽ": "AY",
        "Ḃ": "B",
        "Ḅ": "B",
        "Ɓ": "B",
        "Ḇ": "B",
        "Ƀ": "B",
        "Ƃ": "B",
        "Ć": "C",
        "Č": "C",
        "Ç": "C",
        "Ḉ": "C",
        "Ĉ": "C",
        "Ċ": "C",
        "Ƈ": "C",
        "Ȼ": "C",
        "Ď": "D",
        "Ḑ": "D",
        "Ḓ": "D",
        "Ḋ": "D",
        "Ḍ": "D",
        "Ɗ": "D",
        "Ḏ": "D",
        "ǲ": "D",
        "ǅ": "D",
        "Đ": "D",
        "Ƌ": "D",
        "Ǳ": "DZ",
        "Ǆ": "DZ",
        "É": "E",
        "Ĕ": "E",
        "Ě": "E",
        "Ȩ": "E",
        "Ḝ": "E",
        "Ê": "E",
        "Ế": "E",
        "Ệ": "E",
        "Ề": "E",
        "Ể": "E",
        "Ễ": "E",
        "Ḙ": "E",
        "Ë": "E",
        "Ė": "E",
        "Ẹ": "E",
        "Ȅ": "E",
        "È": "E",
        "Ẻ": "E",
        "Ȇ": "E",
        "Ē": "E",
        "Ḗ": "E",
        "Ḕ": "E",
        "Ę": "E",
        "Ɇ": "E",
        "Ẽ": "E",
        "Ḛ": "E",
        "Ꝫ": "ET",
        "Ḟ": "F",
        "Ƒ": "F",
        "Ǵ": "G",
        "Ğ": "G",
        "Ǧ": "G",
        "Ģ": "G",
        "Ĝ": "G",
        "Ġ": "G",
        "Ɠ": "G",
        "Ḡ": "G",
        "Ǥ": "G",
        "Ḫ": "H",
        "Ȟ": "H",
        "Ḩ": "H",
        "Ĥ": "H",
        "Ⱨ": "H",
        "Ḧ": "H",
        "Ḣ": "H",
        "Ḥ": "H",
        "Ħ": "H",
        "Í": "I",
        "Ĭ": "I",
        "Ǐ": "I",
        "Î": "I",
        "Ï": "I",
        "Ḯ": "I",
        "İ": "I",
        "Ị": "I",
        "Ȉ": "I",
        "Ì": "I",
        "Ỉ": "I",
        "Ȋ": "I",
        "Ī": "I",
        "Į": "I",
        "Ɨ": "I",
        "Ĩ": "I",
        "Ḭ": "I",
        "Ꝺ": "D",
        "Ꝼ": "F",
        "Ᵹ": "G",
        "Ꞃ": "R",
        "Ꞅ": "S",
        "Ꞇ": "T",
        "Ꝭ": "IS",
        "Ĵ": "J",
        "Ɉ": "J",
        "Ḱ": "K",
        "Ǩ": "K",
        "Ķ": "K",
        "Ⱪ": "K",
        "Ꝃ": "K",
        "Ḳ": "K",
        "Ƙ": "K",
        "Ḵ": "K",
        "Ꝁ": "K",
        "Ꝅ": "K",
        "Ĺ": "L",
        "Ƚ": "L",
        "Ľ": "L",
        "Ļ": "L",
        "Ḽ": "L",
        "Ḷ": "L",
        "Ḹ": "L",
        "Ⱡ": "L",
        "Ꝉ": "L",
        "Ḻ": "L",
        "Ŀ": "L",
        "Ɫ": "L",
        "ǈ": "L",
        "Ł": "L",
        "Ǉ": "LJ",
        "Ḿ": "M",
        "Ṁ": "M",
        "Ṃ": "M",
        "Ɱ": "M",
        "Ń": "N",
        "Ň": "N",
        "Ņ": "N",
        "Ṋ": "N",
        "Ṅ": "N",
        "Ṇ": "N",
        "Ǹ": "N",
        "Ɲ": "N",
        "Ṉ": "N",
        "Ƞ": "N",
        "ǋ": "N",
        "Ñ": "N",
        "Ǌ": "NJ",
        "Ó": "O",
        "Ŏ": "O",
        "Ǒ": "O",
        "Ô": "O",
        "Ố": "O",
        "Ộ": "O",
        "Ồ": "O",
        "Ổ": "O",
        "Ỗ": "O",
        "Ö": "O",
        "Ȫ": "O",
        "Ȯ": "O",
        "Ȱ": "O",
        "Ọ": "O",
        "Ő": "O",
        "Ȍ": "O",
        "Ò": "O",
        "Ỏ": "O",
        "Ơ": "O",
        "Ớ": "O",
        "Ợ": "O",
        "Ờ": "O",
        "Ở": "O",
        "Ỡ": "O",
        "Ȏ": "O",
        "Ꝋ": "O",
        "Ꝍ": "O",
        "Ō": "O",
        "Ṓ": "O",
        "Ṑ": "O",
        "Ɵ": "O",
        "Ǫ": "O",
        "Ǭ": "O",
        "Ø": "O",
        "Ǿ": "O",
        "Õ": "O",
        "Ṍ": "O",
        "Ṏ": "O",
        "Ȭ": "O",
        "Ƣ": "OI",
        "Ꝏ": "OO",
        "Ɛ": "E",
        "Ɔ": "O",
        "Ȣ": "OU",
        "Ṕ": "P",
        "Ṗ": "P",
        "Ꝓ": "P",
        "Ƥ": "P",
        "Ꝕ": "P",
        "Ᵽ": "P",
        "Ꝑ": "P",
        "Ꝙ": "Q",
        "Ꝗ": "Q",
        "Ŕ": "R",
        "Ř": "R",
        "Ŗ": "R",
        "Ṙ": "R",
        "Ṛ": "R",
        "Ṝ": "R",
        "Ȑ": "R",
        "Ȓ": "R",
        "Ṟ": "R",
        "Ɍ": "R",
        "Ɽ": "R",
        "Ꜿ": "C",
        "Ǝ": "E",
        "Ś": "S",
        "Ṥ": "S",
        "Š": "S",
        "Ṧ": "S",
        "Ş": "S",
        "Ŝ": "S",
        "Ș": "S",
        "Ṡ": "S",
        "Ṣ": "S",
        "Ṩ": "S",
        "Ť": "T",
        "Ţ": "T",
        "Ṱ": "T",
        "Ț": "T",
        "Ⱦ": "T",
        "Ṫ": "T",
        "Ṭ": "T",
        "Ƭ": "T",
        "Ṯ": "T",
        "Ʈ": "T",
        "Ŧ": "T",
        "Ɐ": "A",
        "Ꞁ": "L",
        "Ɯ": "M",
        "Ʌ": "V",
        "Ꜩ": "TZ",
        "Ú": "U",
        "Ŭ": "U",
        "Ǔ": "U",
        "Û": "U",
        "Ṷ": "U",
        "Ü": "U",
        "Ǘ": "U",
        "Ǚ": "U",
        "Ǜ": "U",
        "Ǖ": "U",
        "Ṳ": "U",
        "Ụ": "U",
        "Ű": "U",
        "Ȕ": "U",
        "Ù": "U",
        "Ủ": "U",
        "Ư": "U",
        "Ứ": "U",
        "Ự": "U",
        "Ừ": "U",
        "Ử": "U",
        "Ữ": "U",
        "Ȗ": "U",
        "Ū": "U",
        "Ṻ": "U",
        "Ų": "U",
        "Ů": "U",
        "Ũ": "U",
        "Ṹ": "U",
        "Ṵ": "U",
        "Ꝟ": "V",
        "Ṿ": "V",
        "Ʋ": "V",
        "Ṽ": "V",
        "Ꝡ": "VY",
        "Ẃ": "W",
        "Ŵ": "W",
        "Ẅ": "W",
        "Ẇ": "W",
        "Ẉ": "W",
        "Ẁ": "W",
        "Ⱳ": "W",
        "Ẍ": "X",
        "Ẋ": "X",
        "Ý": "Y",
        "Ŷ": "Y",
        "Ÿ": "Y",
        "Ẏ": "Y",
        "Ỵ": "Y",
        "Ỳ": "Y",
        "Ƴ": "Y",
        "Ỷ": "Y",
        "Ỿ": "Y",
        "Ȳ": "Y",
        "Ɏ": "Y",
        "Ỹ": "Y",
        "Ź": "Z",
        "Ž": "Z",
        "Ẑ": "Z",
        "Ⱬ": "Z",
        "Ż": "Z",
        "Ẓ": "Z",
        "Ȥ": "Z",
        "Ẕ": "Z",
        "Ƶ": "Z",
        "Ĳ": "IJ",
        "Œ": "OE",
        "ᴀ": "A",
        "ᴁ": "AE",
        "ʙ": "B",
        "ᴃ": "B",
        "ᴄ": "C",
        "ᴅ": "D",
        "ᴇ": "E",
        "ꜰ": "F",
        "ɢ": "G",
        "ʛ": "G",
        "ʜ": "H",
        "ɪ": "I",
        "ʁ": "R",
        "ᴊ": "J",
        "ᴋ": "K",
        "ʟ": "L",
        "ᴌ": "L",
        "ᴍ": "M",
        "ɴ": "N",
        "ᴏ": "O",
        "ɶ": "OE",
        "ᴐ": "O",
        "ᴕ": "OU",
        "ᴘ": "P",
        "ʀ": "R",
        "ᴎ": "N",
        "ᴙ": "R",
        "ꜱ": "S",
        "ᴛ": "T",
        "ⱻ": "E",
        "ᴚ": "R",
        "ᴜ": "U",
        "ᴠ": "V",
        "ᴡ": "W",
        "ʏ": "Y",
        "ᴢ": "Z",
        "á": "a",
        "ă": "a",
        "ắ": "a",
        "ặ": "a",
        "ằ": "a",
        "ẳ": "a",
        "ẵ": "a",
        "ǎ": "a",
        "â": "a",
        "ấ": "a",
        "ậ": "a",
        "ầ": "a",
        "ẩ": "a",
        "ẫ": "a",
        "ä": "a",
        "ǟ": "a",
        "ȧ": "a",
        "ǡ": "a",
        "ạ": "a",
        "ȁ": "a",
        "à": "a",
        "ả": "a",
        "ȃ": "a",
        "ā": "a",
        "ą": "a",
        "ᶏ": "a",
        "ẚ": "a",
        "å": "a",
        "ǻ": "a",
        "ḁ": "a",
        "ⱥ": "a",
        "ã": "a",
        "ꜳ": "aa",
        "æ": "ae",
        "ǽ": "ae",
        "ǣ": "ae",
        "ꜵ": "ao",
        "ꜷ": "au",
        "ꜹ": "av",
        "ꜻ": "av",
        "ꜽ": "ay",
        "ḃ": "b",
        "ḅ": "b",
        "ɓ": "b",
        "ḇ": "b",
        "ᵬ": "b",
        "ᶀ": "b",
        "ƀ": "b",
        "ƃ": "b",
        "ɵ": "o",
        "ć": "c",
        "č": "c",
        "ç": "c",
        "ḉ": "c",
        "ĉ": "c",
        "ɕ": "c",
        "ċ": "c",
        "ƈ": "c",
        "ȼ": "c",
        "ď": "d",
        "ḑ": "d",
        "ḓ": "d",
        "ȡ": "d",
        "ḋ": "d",
        "ḍ": "d",
        "ɗ": "d",
        "ᶑ": "d",
        "ḏ": "d",
        "ᵭ": "d",
        "ᶁ": "d",
        "đ": "d",
        "ɖ": "d",
        "ƌ": "d",
        "ı": "i",
        "ȷ": "j",
        "ɟ": "j",
        "ʄ": "j",
        "ǳ": "dz",
        "ǆ": "dz",
        "é": "e",
        "ĕ": "e",
        "ě": "e",
        "ȩ": "e",
        "ḝ": "e",
        "ê": "e",
        "ế": "e",
        "ệ": "e",
        "ề": "e",
        "ể": "e",
        "ễ": "e",
        "ḙ": "e",
        "ë": "e",
        "ė": "e",
        "ẹ": "e",
        "ȅ": "e",
        "è": "e",
        "ẻ": "e",
        "ȇ": "e",
        "ē": "e",
        "ḗ": "e",
        "ḕ": "e",
        "ⱸ": "e",
        "ę": "e",
        "ᶒ": "e",
        "ɇ": "e",
        "ẽ": "e",
        "ḛ": "e",
        "ꝫ": "et",
        "ḟ": "f",
        "ƒ": "f",
        "ᵮ": "f",
        "ᶂ": "f",
        "ǵ": "g",
        "ğ": "g",
        "ǧ": "g",
        "ģ": "g",
        "ĝ": "g",
        "ġ": "g",
        "ɠ": "g",
        "ḡ": "g",
        "ᶃ": "g",
        "ǥ": "g",
        "ḫ": "h",
        "ȟ": "h",
        "ḩ": "h",
        "ĥ": "h",
        "ⱨ": "h",
        "ḧ": "h",
        "ḣ": "h",
        "ḥ": "h",
        "ɦ": "h",
        "ẖ": "h",
        "ħ": "h",
        "ƕ": "hv",
        "í": "i",
        "ĭ": "i",
        "ǐ": "i",
        "î": "i",
        "ï": "i",
        "ḯ": "i",
        "ị": "i",
        "ȉ": "i",
        "ì": "i",
        "ỉ": "i",
        "ȋ": "i",
        "ī": "i",
        "į": "i",
        "ᶖ": "i",
        "ɨ": "i",
        "ĩ": "i",
        "ḭ": "i",
        "ꝺ": "d",
        "ꝼ": "f",
        "ᵹ": "g",
        "ꞃ": "r",
        "ꞅ": "s",
        "ꞇ": "t",
        "ꝭ": "is",
        "ǰ": "j",
        "ĵ": "j",
        "ʝ": "j",
        "ɉ": "j",
        "ḱ": "k",
        "ǩ": "k",
        "ķ": "k",
        "ⱪ": "k",
        "ꝃ": "k",
        "ḳ": "k",
        "ƙ": "k",
        "ḵ": "k",
        "ᶄ": "k",
        "ꝁ": "k",
        "ꝅ": "k",
        "ĺ": "l",
        "ƚ": "l",
        "ɬ": "l",
        "ľ": "l",
        "ļ": "l",
        "ḽ": "l",
        "ȴ": "l",
        "ḷ": "l",
        "ḹ": "l",
        "ⱡ": "l",
        "ꝉ": "l",
        "ḻ": "l",
        "ŀ": "l",
        "ɫ": "l",
        "ᶅ": "l",
        "ɭ": "l",
        "ł": "l",
        "ǉ": "lj",
        "ſ": "s",
        "ẜ": "s",
        "ẛ": "s",
        "ẝ": "s",
        "ḿ": "m",
        "ṁ": "m",
        "ṃ": "m",
        "ɱ": "m",
        "ᵯ": "m",
        "ᶆ": "m",
        "ń": "n",
        "ň": "n",
        "ņ": "n",
        "ṋ": "n",
        "ȵ": "n",
        "ṅ": "n",
        "ṇ": "n",
        "ǹ": "n",
        "ɲ": "n",
        "ṉ": "n",
        "ƞ": "n",
        "ᵰ": "n",
        "ᶇ": "n",
        "ɳ": "n",
        "ñ": "n",
        "ǌ": "nj",
        "ó": "o",
        "ŏ": "o",
        "ǒ": "o",
        "ô": "o",
        "ố": "o",
        "ộ": "o",
        "ồ": "o",
        "ổ": "o",
        "ỗ": "o",
        "ö": "o",
        "ȫ": "o",
        "ȯ": "o",
        "ȱ": "o",
        "ọ": "o",
        "ő": "o",
        "ȍ": "o",
        "ò": "o",
        "ỏ": "o",
        "ơ": "o",
        "ớ": "o",
        "ợ": "o",
        "ờ": "o",
        "ở": "o",
        "ỡ": "o",
        "ȏ": "o",
        "ꝋ": "o",
        "ꝍ": "o",
        "ⱺ": "o",
        "ō": "o",
        "ṓ": "o",
        "ṑ": "o",
        "ǫ": "o",
        "ǭ": "o",
        "ø": "o",
        "ǿ": "o",
        "õ": "o",
        "ṍ": "o",
        "ṏ": "o",
        "ȭ": "o",
        "ƣ": "oi",
        "ꝏ": "oo",
        "ɛ": "e",
        "ᶓ": "e",
        "ɔ": "o",
        "ᶗ": "o",
        "ȣ": "ou",
        "ṕ": "p",
        "ṗ": "p",
        "ꝓ": "p",
        "ƥ": "p",
        "ᵱ": "p",
        "ᶈ": "p",
        "ꝕ": "p",
        "ᵽ": "p",
        "ꝑ": "p",
        "ꝙ": "q",
        "ʠ": "q",
        "ɋ": "q",
        "ꝗ": "q",
        "ŕ": "r",
        "ř": "r",
        "ŗ": "r",
        "ṙ": "r",
        "ṛ": "r",
        "ṝ": "r",
        "ȑ": "r",
        "ɾ": "r",
        "ᵳ": "r",
        "ȓ": "r",
        "ṟ": "r",
        "ɼ": "r",
        "ᵲ": "r",
        "ᶉ": "r",
        "ɍ": "r",
        "ɽ": "r",
        "ↄ": "c",
        "ꜿ": "c",
        "ɘ": "e",
        "ɿ": "r",
        "ś": "s",
        "ṥ": "s",
        "š": "s",
        "ṧ": "s",
        "ş": "s",
        "ŝ": "s",
        "ș": "s",
        "ṡ": "s",
        "ṣ": "s",
        "ṩ": "s",
        "ʂ": "s",
        "ᵴ": "s",
        "ᶊ": "s",
        "ȿ": "s",
        "ɡ": "g",
        "ᴑ": "o",
        "ᴓ": "o",
        "ᴝ": "u",
        "ť": "t",
        "ţ": "t",
        "ṱ": "t",
        "ț": "t",
        "ȶ": "t",
        "ẗ": "t",
        "ⱦ": "t",
        "ṫ": "t",
        "ṭ": "t",
        "ƭ": "t",
        "ṯ": "t",
        "ᵵ": "t",
        "ƫ": "t",
        "ʈ": "t",
        "ŧ": "t",
        "ᵺ": "th",
        "ɐ": "a",
        "ᴂ": "ae",
        "ǝ": "e",
        "ᵷ": "g",
        "ɥ": "h",
        "ʮ": "h",
        "ʯ": "h",
        "ᴉ": "i",
        "ʞ": "k",
        "ꞁ": "l",
        "ɯ": "m",
        "ɰ": "m",
        "ᴔ": "oe",
        "ɹ": "r",
        "ɻ": "r",
        "ɺ": "r",
        "ⱹ": "r",
        "ʇ": "t",
        "ʌ": "v",
        "ʍ": "w",
        "ʎ": "y",
        "ꜩ": "tz",
        "ú": "u",
        "ŭ": "u",
        "ǔ": "u",
        "û": "u",
        "ṷ": "u",
        "ü": "u",
        "ǘ": "u",
        "ǚ": "u",
        "ǜ": "u",
        "ǖ": "u",
        "ṳ": "u",
        "ụ": "u",
        "ű": "u",
        "ȕ": "u",
        "ù": "u",
        "ủ": "u",
        "ư": "u",
        "ứ": "u",
        "ự": "u",
        "ừ": "u",
        "ử": "u",
        "ữ": "u",
        "ȗ": "u",
        "ū": "u",
        "ṻ": "u",
        "ų": "u",
        "ᶙ": "u",
        "ů": "u",
        "ũ": "u",
        "ṹ": "u",
        "ṵ": "u",
        "ᵫ": "ue",
        "ꝸ": "um",
        "ⱴ": "v",
        "ꝟ": "v",
        "ṿ": "v",
        "ʋ": "v",
        "ᶌ": "v",
        "ⱱ": "v",
        "ṽ": "v",
        "ꝡ": "vy",
        "ẃ": "w",
        "ŵ": "w",
        "ẅ": "w",
        "ẇ": "w",
        "ẉ": "w",
        "ẁ": "w",
        "ⱳ": "w",
        "ẘ": "w",
        "ẍ": "x",
        "ẋ": "x",
        "ᶍ": "x",
        "ý": "y",
        "ŷ": "y",
        "ÿ": "y",
        "ẏ": "y",
        "ỵ": "y",
        "ỳ": "y",
        "ƴ": "y",
        "ỷ": "y",
        "ỿ": "y",
        "ȳ": "y",
        "ẙ": "y",
        "ɏ": "y",
        "ỹ": "y",
        "ź": "z",
        "ž": "z",
        "ẑ": "z",
        "ʑ": "z",
        "ⱬ": "z",
        "ż": "z",
        "ẓ": "z",
        "ȥ": "z",
        "ẕ": "z",
        "ᵶ": "z",
        "ᶎ": "z",
        "ʐ": "z",
        "ƶ": "z",
        "ɀ": "z",
        "ﬀ": "ff",
        "ﬃ": "ffi",
        "ﬄ": "ffl",
        "ﬁ": "fi",
        "ﬂ": "fl",
        "ĳ": "ij",
        "œ": "oe",
        "ﬆ": "st",
        "ₐ": "a",
        "ₑ": "e",
        "ᵢ": "i",
        "ⱼ": "j",
        "ₒ": "o",
        "ᵣ": "r",
        "ᵤ": "u",
        "ᵥ": "v",
        "ₓ": "x"
    }, String.prototype.latinise = function () {
        return this.replace(/[^A-Za-z0-9\[\] ]/g, function (t) {
            return Latinise.latin_map[t] || t
        })
    }, String.prototype.latinize = String.prototype.latinise, String.prototype.isLatin = function () {
        return this == this.latinise()
    }, String.prototype.toDate = function () {
        try {
            var t = this.split("T")[0],
                e = this.split("T")[1].split("Z")[0],
                n = 1 * t.split("-")[0],
                r = 1 * t.split("-")[1] - 1,
                o = 1 * t.split("-")[2],
                i = 1 * e.split(":")[0],
                s = 1 * e.split(":")[1],
                a = 1 * e.split(":")[2],
                c = new Date(n, r, o, i, s, a);
            return c.setHours(c.getHours() - c.getTimezoneOffset() / 60), c
        } catch (t) {
            return new Date(0, 0, 0, 0, 0, 0)
        }
    }, String.prototype.cleanURL = function () {
        return this.replace(/([^:])(\/\/+)/g, "$1/")
    }, String.prototype.replaceAll = function (t, e) {
        return this.replace(new RegExp(t.replace(/([.?*+^$[\]\\(){}|-])/gi, "\\$1"), "ig"), e)
    }, String.prototype.lpad = function (t, e) {
        for (var n = this; n.length < e;) n = t + n;
        return n
    }, Date.prototype.toMySQL = function () {
        function t(t) {
            return 0 <= t && t < 10 ? "0" + t.toString() : -10 < t && t < 0 ? "-0" + (-1 * t).toString() : t.toString()
        }
        return this.getUTCFullYear() + "-" + t(1 + this.getUTCMonth()) + "-" + t(this.getUTCDate()) + " " + t(this.getUTCHours()) + ":" + t(this.getUTCMinutes()) + ":" + t(this.getUTCSeconds())
    },
    function () {
        if (!window.google || !google.gears) {
            var e = null;
            if ("undefined" != typeof GearsFactory) e = new GearsFactory;
            else try {
                -1 != (e = new ActiveXObject("Gears.Factory")).getBuildInfo().indexOf("ie_mobile") && e.privateSetGlobalObject(this)
            } catch (t) {
                void 0 !== navigator.mimeTypes && navigator.mimeTypes["application/x-googlegears"] && ((e = document.createElement("object")).style.display = "none", e.width = 0, e.height = 0, e.type = "application/x-googlegears", document.documentElement.appendChild(e))
            }
            e && (window.google || (google = {}), google.gears || (google.gears = {
                factory: e
            }))
        }
    }(), Persist = function () {
        var c, u, n, r, p, o, i, a, l, s, h, f;
        a = ["expires", "path", "domain"], l = escape, s = unescape, h = document, (i = {
            set: function (t, e) {
                var n, r = 2 < arguments.length ? arguments[2] : {},
                    o = ((n = new Date).setTime(n.getTime()), n),
                    i = {};
                if (r.expires)
                    if (-1 == r.expires) i.expires = -1;
                    else {
                        var s = 864e5 * r.expires;
                        i.expires = new Date(o.getTime() + s), i.expires = i.expires.toGMTString()
                    }
                for (var a = ["path", "domain", "secure"], c = 0; c < a.length; c++) r[a[c]] && (i[a[c]] = r[a[c]]);
                var u = f(t, e, i);
                return h.cookie = u, e
            },
            has: function (t) {
                t = l(t);
                var e = h.cookie,
                    n = e.indexOf(t + "="),
                    r = (t.length, e.substring(0, t.length));
                return !(!n && t != r || n < 0)
            },
            get: function (t) {
                t = l(t);
                var e, n = h.cookie,
                    r = n.indexOf(t + "="),
                    o = r + t.length + 1,
                    i = n.substring(0, t.length);
                return !r && t != i || r < 0 ? null : ((e = n.indexOf(";", o)) < 0 && (e = n.length), s(n.substring(o, e)))
            },
            remove: function (t) {
                var e = i.get(t),
                    n = {
                        expires: "Thu, 01-Jan-1970 00:00:01 GMT"
                    };
                return h.cookie = f(t, "", n), e
            },
            keys: function () {
                for (var t, e = h.cookie.split("; "), n = [], r = 0; r < e.length; r++) t = e[r].split("="), n.push(s(t[0]));
                return n
            },
            all: function () {
                for (var t, e = h.cookie.split("; "), n = [], r = 0; r < e.length; r++) t = e[r].split("="), n.push([s(t[0]), s(t[1])]);
                return n
            },
            version: "0.2.1",
            enabled: !(f = function (t, e) {
                var n, r, o = [],
                    i = 2 < arguments.length ? arguments[2] : {};
                o.push(l(t) + "=" + l(e));
                for (var s = 0; s < a.length; s++)(r = i[n = a[s]]) && o.push(n + "=" + r);
                return i.secure && o.push("secure"), o.join("; ")
            })
        }).enabled = function () {
            var t = "__EC_TEST__",
                e = new Date;
            return e = e.toGMTString(), this.set(t, e), this.enabled = this.remove(t) == e, this.enabled
        }.call(i), o = i;
        var d = Array.prototype.indexOf ? function (t, e) {
            return Array.prototype.indexOf.call(t, e)
        } : function (t, e) {
            for (var n = 0, r = t.length; n < r; n++)
                if (t[n] == e) return n;
            return -1
        };
        p = function () {}, n = function (t) {
            return "PS" + t.replace(/_/g, "__").replace(/ /g, "_s")
        };
        var g = {
            search_order: ["localstorage", "globalstorage", "gears", "cookie", "ie", "flash"],
            name_re: /^[a-z][a-z0-9_ \-]+$/i,
            methods: ["init", "get", "set", "remove", "load", "save", "iterate"],
            sql: {
                version: "1",
                create: "CREATE TABLE IF NOT EXISTS persist_data (k TEXT UNIQUE NOT NULL PRIMARY KEY, v TEXT NOT NULL)",
                get: "SELECT v FROM persist_data WHERE k = ?",
                set: "INSERT INTO persist_data(k, v) VALUES (?, ?)",
                remove: "DELETE FROM persist_data WHERE k = ?",
                keys: "SELECT * FROM persist_data"
            },
            flash: {
                div_id: "_persist_flash_wrap",
                id: "_persist_flash",
                path: "persist.swf",
                size: {
                    w: 1,
                    h: 1
                },
                params: {
                    autostart: !0
                }
            }
        };
        return u = {
            gears: {
                size: -1,
                test: function () {
                    return !(!window.google || !window.google.gears)
                },
                methods: {
                    init: function () {
                        var t;
                        (t = this.db = google.gears.factory.create("beta.database")).open(n(this.name)), t.execute(g.sql.create).close()
                    },
                    get: function (t) {
                        var e, n, r = g.sql.get,
                            o = this.db;
                        return o.execute("BEGIN").close(), n = (e = o.execute(r, [t])).isValidRow() ? e.field(0) : null, e.close(), o.execute("COMMIT").close(), n
                    },
                    set: function (t, e) {
                        var n = g.sql.remove,
                            r = g.sql.set,
                            o = this.db;
                        return o.execute("BEGIN").close(), o.execute(n, [t]).close(), o.execute(r, [t, e]).close(), o.execute("COMMIT").close(), e
                    },
                    remove: function (t) {
                        g.sql.get;
                        var e = g.sql.remove,
                            n = this.db;
                        return n.execute("BEGIN").close(), n.execute(e, [t]).close(), n.execute("COMMIT").close(), !0
                    },
                    iterate: function (t, e) {
                        var n, r = g.sql.keys;
                        for (n = this.db.execute(r); n.isValidRow();) t.call(e || this, n.field(0), n.field(1)), n.next();
                        n.close()
                    }
                }
            },
            globalstorage: {
                size: 5242880,
                test: function () {
                    if (!window.globalStorage) return !1;
                    var e = "127.0.0.1";
                    this.o && this.o.domain && (e = this.o.domain);
                    try {
                        globalStorage[e];
                        return !0
                    } catch (t) {
                        return window.console && window.console.warn && console.warn("globalStorage exists, but couldn't use it because your browser is running on domain:", e), !1
                    }
                },
                methods: {
                    key: function (t) {
                        return n(this.name) + n(t)
                    },
                    init: function () {
                        this.store = globalStorage[this.o.domain]
                    },
                    get: function (t) {
                        return t = this.key(t), this.store.getItem(t)
                    },
                    set: function (t, e) {
                        return t = this.key(t), this.store.setItem(t, e), e
                    },
                    remove: function (t) {
                        var e;
                        return t = this.key(t), e = this.store.getItem[t], this.store.removeItem(t), e
                    }
                }
            },
            localstorage: {
                size: -1,
                test: function () {
                    try {
                        return !(!window.localStorage || null != window.localStorage.setItem("test", null)) && (!/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent) || (9 <= RegExp.$1 || "file:" != window.location.protocol && !!window.localStorage))
                    } catch (t) {
                        return !1
                    }
                },
                methods: {
                    key: function (t) {
                        return this.name + ">" + t
                    },
                    init: function () {
                        this.store = localStorage
                    },
                    get: function (t) {
                        return t = this.key(t), this.store.getItem(t)
                    },
                    set: function (t, e) {
                        return t = this.key(t), this.store.setItem(t, e), e
                    },
                    remove: function (t) {
                        var e;
                        return t = this.key(t), e = this.store.getItem(t), this.store.removeItem(t), e
                    },
                    iterate: function (t, e) {
                        for (var n, r, o = this.store, i = 0; i < o.length; i++) 2 == (r = (n = o.key(i)).split(">")).length && r[0] == this.name && t.call(e || this, r[1], o.getItem(n))
                    }
                }
            },
            ie: {
                prefix: "_persist_data-",
                size: 65536,
                test: function () {
                    return !!window.ActiveXObject
                },
                make_userdata: function (t) {
                    var e = document.createElement("div");
                    return e.id = t, e.style.display = "none", e.addBehavior("#default#userdata"), document.body.appendChild(e), e
                },
                methods: {
                    init: function () {
                        var t = u.ie.prefix + n(this.name);
                        this.el = u.ie.make_userdata(t), this.o.defer && this.load()
                    },
                    get: function (t) {
                        return t = n(t), this.o.defer || this.load(), this.el.getAttribute(t)
                    },
                    set: function (t, e) {
                        return t = n(t), this.el.setAttribute(t, e), this.o.defer || this.save(), e
                    },
                    remove: function (t) {
                        var e;
                        return t = n(t), this.o.defer || this.load(), e = this.el.getAttribute(t), this.el.removeAttribute(t), this.o.defer || this.save(), e
                    },
                    load: function () {
                        this.el.load(n(this.name))
                    },
                    save: function () {
                        this.el.save(n(this.name))
                    }
                }
            },
            cookie: {
                delim: ":",
                size: 4e3,
                test: function () {
                    return !!c.Cookie.enabled
                },
                methods: {
                    key: function (t) {
                        return this.name + u.cookie.delim + t
                    },
                    get: function (t, e) {
                        return t = this.key(t), o.get(t)
                    },
                    set: function (t, e, n) {
                        return t = this.key(t), o.set(t, e, this.o), e
                    },
                    remove: function (t, e) {
                        return t = this.key(t), o.remove(t)
                    }
                }
            },
            flash: {
                test: function () {
                    try {
                        if (!swfobject) return !1
                    } catch (t) {
                        return !1
                    }
                    return 8 <= swfobject.getFlashPlayerVersion().major
                },
                methods: {
                    init: function () {
                        if (!u.flash.el) {
                            var t, e, n = g.flash;
                            (t = document.createElement("div")).id = n.div_id, (e = document.createElement("div")).id = n.id, t.appendChild(e), document.body.appendChild(t), u.flash.el = swfobject.createSWF({
                                id: n.id,
                                data: this.o.swf_path || n.path,
                                width: n.size.w,
                                height: n.size.h
                            }, n.params, n.id)
                        }
                        this.el = u.flash.el
                    },
                    get: function (t) {
                        return t = n(t), this.el.get(this.name, t)
                    },
                    set: function (t, e) {
                        return t = n(t), this.el.set(this.name, t, e)
                    },
                    remove: function (t) {
                        return t = n(t), this.el.remove(this.name, t)
                    }
                }
            }
        }, r = function () {
            for (var t, e, n = g.methods, r = g.search_order, o = 0, i = n.length; o < i; o++) c.Store.prototype[n[o]] = p;
            c.type = null, c.size = -1;
            for (var s = 0, a = r.length; !c.type && s < a; s++)
                if ((t = u[r[s]]).test())
                    for (e in c.type = r[s], c.size = t.size, t.methods) c.Store.prototype[e] = t.methods[e];
            c._init = !0
        }, c = {
            VERSION: "0.3.1",
            type: null,
            size: 0,
            add: function (t) {
                u[t.id] = t, g.search_order = [t.id].concat(g.search_order), r()
            },
            remove: function (t) {
                var e = d(g.search_order, t);
                e < 0 || (g.search_order.splice(e, 1), delete u[t], r())
            },
            Cookie: o,
            Store: function (t, e) {
                if (!g.name_re.exec(t)) throw new Error("Invalid name");
                if (!c.type) throw new Error("No suitable storage found");
                e = e || {}, this.name = t, e.domain = e.domain || location.hostname || "localhost", e.domain = e.domain.replace(/:\d+$/, ""), e.domain = "localhost" == e.domain ? "" : e.domain, (this.o = e).expires = e.expires || 730, e.path = e.path || "/", this.o.search_order && (g.search_order = this.o.search_order, r()), this.init()
            }
        }, r(), c
    }(), Base64 = {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encode: function (t) {
            var e, n, r, o, i, s, a, c = "",
                u = 0;
            for (t = utf8_encode(t); u < t.length;) o = (e = t.charCodeAt(u++)) >> 2, i = (3 & e) << 4 | (n = t.charCodeAt(u++)) >> 4, s = (15 & n) << 2 | (r = t.charCodeAt(u++)) >> 6, a = 63 & r, isNaN(n) ? s = a = 64 : isNaN(r) && (a = 64), c = c + this._keyStr.charAt(o) + this._keyStr.charAt(i) + this._keyStr.charAt(s) + this._keyStr.charAt(a);
            return c
        },
        decode: function (t) {
            var e, n, r, o, i, s, a = "",
                c = 0;
            for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); c < t.length;) e = this._keyStr.indexOf(t.charAt(c++)) << 2 | (o = this._keyStr.indexOf(t.charAt(c++))) >> 4, n = (15 & o) << 4 | (i = this._keyStr.indexOf(t.charAt(c++))) >> 2, r = (3 & i) << 6 | (s = this._keyStr.indexOf(t.charAt(c++))), a += String.fromCharCode(e), 64 != i && (a += String.fromCharCode(n)), 64 != s && (a += String.fromCharCode(r));
            return a = utf8_decode(a)
        }
    }, md5 = function (t) {
        function s(t, e) {
            return t + e & 4294967295
        }

        function i(t, e) {
            var n = t[0],
                r = t[1],
                o = t[2],
                i = t[3];
            r = l(r = l(r = l(r = l(r = p(r = p(r = p(r = p(r = u(r = u(r = u(r = u(r = c(r = c(r = c(r = c(r, o = c(o, i = c(i, n = c(n, r, o, i, e[0], 7, -680876936), r, o, e[1], 12, -389564586), n, r, e[2], 17, 606105819), i, n, e[3], 22, -1044525330), o = c(o, i = c(i, n = c(n, r, o, i, e[4], 7, -176418897), r, o, e[5], 12, 1200080426), n, r, e[6], 17, -1473231341), i, n, e[7], 22, -45705983), o = c(o, i = c(i, n = c(n, r, o, i, e[8], 7, 1770035416), r, o, e[9], 12, -1958414417), n, r, e[10], 17, -42063), i, n, e[11], 22, -1990404162), o = c(o, i = c(i, n = c(n, r, o, i, e[12], 7, 1804603682), r, o, e[13], 12, -40341101), n, r, e[14], 17, -1502002290), i, n, e[15], 22, 1236535329), o = u(o, i = u(i, n = u(n, r, o, i, e[1], 5, -165796510), r, o, e[6], 9, -1069501632), n, r, e[11], 14, 643717713), i, n, e[0], 20, -373897302), o = u(o, i = u(i, n = u(n, r, o, i, e[5], 5, -701558691), r, o, e[10], 9, 38016083), n, r, e[15], 14, -660478335), i, n, e[4], 20, -405537848), o = u(o, i = u(i, n = u(n, r, o, i, e[9], 5, 568446438), r, o, e[14], 9, -1019803690), n, r, e[3], 14, -187363961), i, n, e[8], 20, 1163531501), o = u(o, i = u(i, n = u(n, r, o, i, e[13], 5, -1444681467), r, o, e[2], 9, -51403784), n, r, e[7], 14, 1735328473), i, n, e[12], 20, -1926607734), o = p(o, i = p(i, n = p(n, r, o, i, e[5], 4, -378558), r, o, e[8], 11, -2022574463), n, r, e[11], 16, 1839030562), i, n, e[14], 23, -35309556), o = p(o, i = p(i, n = p(n, r, o, i, e[1], 4, -1530992060), r, o, e[4], 11, 1272893353), n, r, e[7], 16, -155497632), i, n, e[10], 23, -1094730640), o = p(o, i = p(i, n = p(n, r, o, i, e[13], 4, 681279174), r, o, e[0], 11, -358537222), n, r, e[3], 16, -722521979), i, n, e[6], 23, 76029189), o = p(o, i = p(i, n = p(n, r, o, i, e[9], 4, -640364487), r, o, e[12], 11, -421815835), n, r, e[15], 16, 530742520), i, n, e[2], 23, -995338651), o = l(o, i = l(i, n = l(n, r, o, i, e[0], 6, -198630844), r, o, e[7], 10, 1126891415), n, r, e[14], 15, -1416354905), i, n, e[5], 21, -57434055), o = l(o, i = l(i, n = l(n, r, o, i, e[12], 6, 1700485571), r, o, e[3], 10, -1894986606), n, r, e[10], 15, -1051523), i, n, e[1], 21, -2054922799), o = l(o, i = l(i, n = l(n, r, o, i, e[8], 6, 1873313359), r, o, e[15], 10, -30611744), n, r, e[6], 15, -1560198380), i, n, e[13], 21, 1309151649), o = l(o, i = l(i, n = l(n, r, o, i, e[4], 6, -145523070), r, o, e[11], 10, -1120210379), n, r, e[2], 15, 718787259), i, n, e[9], 21, -343485551), t[0] = s(n, t[0]), t[1] = s(r, t[1]), t[2] = s(o, t[2]), t[3] = s(i, t[3])
        }

        function a(t, e, n, r, o, i) {
            return s((e = s(s(e, t), s(r, i))) << o | e >>> 32 - o, n)
        }

        function c(t, e, n, r, o, i, s) {
            return a(e & n | ~e & r, t, e, o, i, s)
        }

        function u(t, e, n, r, o, i, s) {
            return a(e & r | n & ~r, t, e, o, i, s)
        }

        function p(t, e, n, r, o, i, s) {
            return a(e ^ n ^ r, t, e, o, i, s)
        }

        function l(t, e, n, r, o, i, s) {
            return a(n ^ (e | ~r), t, e, o, i, s)
        }

        function h(t) {
            var e, n = [];
            for (e = 0; e < 64; e += 4) n[e >> 2] = t.charCodeAt(e) + (t.charCodeAt(e + 1) << 8) + (t.charCodeAt(e + 2) << 16) + (t.charCodeAt(e + 3) << 24);
            return n
        }
        var r = "0123456789abcdef".split("");

        function n(t) {
            for (var e = "", n = 0; n < 4; n++) e += r[t >> 8 * n + 4 & 15] + r[t >> 8 * n & 15];
            return e
        }
        return function (t) {
            for (var e = 0; e < t.length; e++) t[e] = n(t[e]);
            return t.join("")
        }(function (t) {
            txt = "";
            var e, n = t.length,
                r = [1732584193, -271733879, -1732584194, 271733878];
            for (e = 64; e <= t.length; e += 64) i(r, h(t.substring(e - 64, e)));
            t = t.substring(e - 64);
            var o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (e = 0; e < t.length; e++) o[e >> 2] |= t.charCodeAt(e) << (e % 4 << 3);
            if (o[e >> 2] |= 128 << (e % 4 << 3), 55 < e)
                for (i(r, o), e = 0; e < 16; e++) o[e] = 0;
            return o[14] = 8 * n, i(r, o), r
        }(t))
    }, window.cipher = {
        encrypt: function (t, e) {
            for (var n, r, o = (e = e.split("").reverse().join("")).split(""), i = [], s = 0; s < o.length; s++) {
                var a = e.charCodeAt(s) + (r = s, (n = t).charCodeAt(Math.floor(r % n.length)));
                i.push(a.toString().lpad("0", 3))
            }
            return Base64.encode(i.join("") + "|" + t)
        },
        decrypt: function (t, e) {
            var n = Base64.decode(e);
            if (-1 == n.indexOf("|")) return !1;
            var r = n.split("|")[1];
            if (!r) return !1;
            if (r != t) return !1;
            n = n.split("|")[0].match(/.{1,3}/g);
            for (var o, i, s = [], a = 0; a < n.length; a++) s.push(String.fromCharCode(1 * n[a] - (i = a, (o = t).charCodeAt(Math.floor(i % o.length)))));
            return s.reverse().join("")
        }
    };
var _Overlay = function (t) {
    var e, n = function () {},
        r = {
            onbeforeshow: n,
            onshow: n,
            onbeforehide: n,
            onhide: n,
            text: "",
            icon: null,
            spinner: null,
            duration: null,
            id: null,
            parentEl: null
        },
        o = function () {
            var t = (document.body || document.documentElement).style,
                e = "transition";
            if ("string" == typeof t[e]) return !0;
            var n = ["Moz", "Webkit", "Khtml", "O", "ms"];
            e = e.charAt(0).toUpperCase() + e.substr(1);
            for (var r = 0; r < n.length; r++)
                if ("string" == typeof t[n[r] + e]) return !0;
            return !1
        }(),
        i = function (t, e) {
            var n = {};
            for (var r in t) n[r] = t[r];
            for (var o in e) n[o] = e[o];
            return n
        }(r, t),
        s = function (t) {
            "ios-overlay-show" === t.animationName && i.onshow(), "ios-overlay-hide" === t.animationName && (c(), i.onhide())
        },
        a = ((e = document.createElement("div")).className = "ui-ios-overlay", e.innerHTML += '<span class="title">' + i.text + "</span", t.icon ? e.innerHTML += '<div class="' + t.icon + '">' : t.spinner && e.appendChild(t.spinner.el), o && (e.addEventListener("webkitAnimationEnd", s, !1), e.addEventListener("msAnimationEnd", s, !1), e.addEventListener("oAnimationEnd", s, !1), e.addEventListener("animationend", s, !1)), t.parentEl ? document.getElementById(t.parentEl).appendChild(e) : document.body.appendChild(e), i.onbeforeshow(), o ? e.className += " ios-overlay-show" : "function" == typeof $ && $(e).fadeIn({
            duration: 200
        }, function () {
            i.onshow()
        }), i.duration && window.setTimeout(function () {
            a()
        }, i.duration), function () {
            i.onbeforehide(), o ? e.className = e.className.replace("show", "hide") : "function" == typeof $ && $(e).fadeOut({
                duration: 200
            }, function () {
                c(), i.onhide()
            })
        }),
        c = function () {
            t.parentEl ? document.getElementById(t.parentEl).removeChild(e) : document.body.removeChild(e)
        };
    return {
        hide: a,
        destroy: c,
        update: function (t) {
            t.text && (e.getElementsByTagName("span")[0].innerHTML = t.text), t.icon && (i.spinner && (i.spinner.el.parentNode.removeChild(i.spinner.el), i.spinner = null), e.innerHTML += '<div class="' + t.icon + '">')
        }
    }
};
JSON.flatten = function (t) {
        var a = {};
        return function t(e, n) {
            if (Object(e) !== e) a[n] = e;
            else if (Array.isArray(e)) {
                for (var r = 0, o = e.length; r < o; r++) t(e[r], n ? n + "." + r : "" + r);
                0 == o && (a[n] = [])
            } else {
                var i = !0;
                for (var s in e) i = !1, t(e[s], n ? n + "." + s : s);
                i && (a[n] = {})
            }
        }(t, ""), a
    }, JSON.unflatten = function (t) {
        "use strict";
        if (Object(t) !== t || Array.isArray(t)) return t;
        var e, n, r, o, i, s = {};
        for (var a in t) {
            for (e = s, n = "", o = 0; r = a.indexOf(".", o), i = a.substring(o, -1 !== r ? r : void 0), e = e[n] || (e[n] = isNaN(parseInt(i)) ? {} : []), n = i, o = r + 1, 0 <= r;);
            e[n] = t[a]
        }
        return s[""]
    }, Array.prototype.getFields = function (e) {
        return this.map(function (t) {
            return t[e]
        })
    }, Array.prototype.equals = function (t) {
        if (!t) return !1;
        if (this.length != t.length) return !1;
        for (var e = 0, n = this.length; e < n; e++)
            if (this[e] instanceof Array && t[e] instanceof Array) {
                if (!this[e].equals(t[e])) return !1
            } else if (this[e] != t[e]) return !1;
        return !0
    }, Array.prototype.diff = function (e) {
        return this.filter(function (t) {
            return e.indexOf(t) < 0
        })
    }, Array.prototype.query = function (t) {
        return alasql(t, [this])
    }, Array.prototype.render = function (t) {
        var e = "";

        function n(t, e) {
            for (var n in e) - 1 < t.indexOf("{" + n + "}") && (e[n] || (e[n] = ""), t = t.replaceAll("{" + n + "}", e[n]));
            return t
        }
        if (!Array.isArray(t)) {
            var r = [];
            r.push(t), t = r
        }
        for (var o = 0; o < t.length; o++) e += n(this.join(""), t[o]);
        return e
    }, Array.prototype.remove = function () {
        for (var t, e, n = arguments, r = n.length; r && this.length;)
            for (t = n[--r]; - 1 !== (e = this.indexOf(t));) this.splice(e, 1);
        return this
    },
    function (t) {
        "use strict";
        var e = t.prototype,
            r = e.parseFromString;
        try {
            if ((new t).parseFromString("", "text/html")) return
        } catch (t) {}
        e.parseFromString = function (t, e) {
            if (/^\s*text\/html\s*(?:;|$)/i.test(e)) {
                var n = document.implementation.createHTMLDocument("");
                return -1 < t.toLowerCase().indexOf("<!doctype") ? n.documentElement.innerHTML = t : n.body.innerHTML = t, n
            }
            return r.apply(this, arguments)
        }
    }(DOMParser), Object.defineProperty(Object.prototype, "watcher", {
        enumerable: !1,
        configurable: !0,
        writable: !1,
        value: function (e, n) {
            var r = this[e],
                o = r;
            delete this[e] && Object.defineProperty(this, e, {
                get: function () {
                    return o
                },
                set: function (t) {
                    return r = o, o = n.call(this, e, r, t)
                },
                enumerable: !0,
                configurable: !0
            })
        }
    }), Object.defineProperty(Object.prototype, "unwatcher", {
        enumerable: !1,
        configurable: !0,
        writable: !1,
        value: function (t) {
            var e = this[t];
            delete this[t], this[t] = e
        }
    }),
    function (i, a, t, E) {
        "use strict";

        function c(t, e, n) {
            return setTimeout(o(t, n), e)
        }

        function r(t, e, n) {
            return !!Array.isArray(t) && (s(t, n[e], n), !0)
        }

        function s(t, e, n) {
            var r;
            if (t)
                if (t.forEach) t.forEach(e, n);
                else if (t.length !== E)
                for (r = 0; r < t.length;) e.call(n, t[r], r, t), r++;
            else
                for (r in t) t.hasOwnProperty(r) && e.call(n, t[r], r, t)
        }

        function e(r, t, e) {
            var o = "DEPRECATED METHOD: " + t + "\n" + e + " AT \n";
            return function () {
                var t = new Error("get-stack-trace"),
                    e = t && t.stack ? t.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                    n = i.console && (i.console.warn || i.console.log);
                return n && n.call(i.console, o, e), r.apply(this, arguments)
            }
        }

        function n(t, e, n) {
            var r, o = e.prototype;
            (r = t.prototype = Object.create(o)).constructor = t, r._super = o, n && Q(r, n)
        }

        function o(t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }

        function u(t, e) {
            return typeof t == tt ? t.apply(e && e[0] || E, e) : t
        }

        function p(t, e) {
            return t === E ? e : t
        }

        function l(e, t, n) {
            s(d(t), function (t) {
                e.addEventListener(t, n, !1)
            })
        }

        function h(e, t, n) {
            s(d(t), function (t) {
                e.removeEventListener(t, n, !1)
            })
        }

        function w(t, e) {
            for (; t;) {
                if (t == e) return !0;
                t = t.parentNode
            }
            return !1
        }

        function f(t, e) {
            return -1 < t.indexOf(e)
        }

        function d(t) {
            return t.trim().split(/\s+/g)
        }

        function g(t, e, n) {
            if (t.indexOf && !n) return t.indexOf(e);
            for (var r = 0; r < t.length;) {
                if (n && t[r][n] == e || !n && t[r] === e) return r;
                r++
            }
            return -1
        }

        function m(t) {
            return Array.prototype.slice.call(t, 0)
        }

        function y(t, n, e) {
            for (var r = [], o = [], i = 0; i < t.length;) {
                var s = n ? t[i][n] : t[i];
                g(o, s) < 0 && r.push(t[i]), o[i] = s, i++
            }
            return e && (r = n ? r.sort(function (t, e) {
                return t[n] > e[n]
            }) : r.sort()), r
        }

        function v(t, e) {
            for (var n, r, o = e[0].toUpperCase() + e.slice(1), i = 0; i < K.length;) {
                if ((r = (n = K[i]) ? n + o : e) in t) return r;
                i++
            }
            return E
        }

        function A(t) {
            var e = t.ownerDocument || t;
            return e.defaultView || e.parentWindow || i
        }

        function b(e, t) {
            var n = this;
            this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function (t) {
                u(e.options.enable, [e]) && n.handler(t)
            }, this.init()
        }

        function S(t, e, n) {
            var r = n.pointers.length,
                o = n.changedPointers.length,
                i = e & ft && r - o == 0,
                s = e & (gt | mt) && r - o == 0;
            n.isFirst = !!i, n.isFinal = !!s, i && (t.session = {}), n.eventType = e,
                function (t, e) {
                    var n = t.session,
                        r = e.pointers,
                        o = r.length;
                    n.firstInput || (n.firstInput = T(e)), 1 < o && !n.firstMultiple ? n.firstMultiple = T(e) : 1 === o && (n.firstMultiple = !1);
                    var i = n.firstInput,
                        s = n.firstMultiple,
                        a = s ? s.center : i.center,
                        c = e.center = x(r);
                    e.timeStamp = rt(), e.deltaTime = e.timeStamp - i.timeStamp, e.angle = C(a, c), e.distance = N(a, c), u = n, p = e, l = p.center, h = u.offsetDelta || {}, f = u.prevDelta || {}, d = u.prevInput || {}, p.eventType !== ft && d.eventType !== gt || (f = u.prevDelta = {
                        x: d.deltaX || 0,
                        y: d.deltaY || 0
                    }, h = u.offsetDelta = {
                        x: l.x,
                        y: l.y
                    }), p.deltaX = f.x + (l.x - h.x), p.deltaY = f.y + (l.y - h.y), e.offsetDirection = O(e.deltaX, e.deltaY);
                    var u, p, l, h, f, d;
                    var g = _(e.deltaTime, e.deltaX, e.deltaY);
                    e.overallVelocityX = g.x, e.overallVelocityY = g.y, e.overallVelocity = nt(g.x) > nt(g.y) ? g.x : g.y, e.scale = s ? (v = s.pointers, A = r, N(A[0], A[1], _t) / N(v[0], v[1], _t)) : 1, e.rotation = s ? (m = s.pointers, y = r, C(y[1], y[0], _t) + C(m[1], m[0], _t)) : 0, e.maxPointers = n.prevInput ? e.pointers.length > n.prevInput.maxPointers ? e.pointers.length : n.prevInput.maxPointers : e.pointers.length,
                        function (t, e) {
                            var n, r, o, i, s = t.lastInterval || e,
                                a = e.timeStamp - s.timeStamp;
                            if (e.eventType != mt && (ht < a || s.velocity === E)) {
                                var c = e.deltaX - s.deltaX,
                                    u = e.deltaY - s.deltaY,
                                    p = _(a, c, u);
                                r = p.x, o = p.y, n = nt(p.x) > nt(p.y) ? p.x : p.y, i = O(c, u), t.lastInterval = e
                            } else n = s.velocity, r = s.velocityX, o = s.velocityY, i = s.direction;
                            e.velocity = n, e.velocityX = r, e.velocityY = o, e.direction = i
                        }(n, e);
                    var m, y;
                    var v, A;
                    var b = t.element;
                    w(e.srcEvent.target, b) && (b = e.srcEvent.target), e.target = b
                }(t, n), t.emit("hammer.input", n), t.recognize(n), t.session.prevInput = n
        }

        function T(t) {
            for (var e = [], n = 0; n < t.pointers.length;) e[n] = {
                clientX: et(t.pointers[n].clientX),
                clientY: et(t.pointers[n].clientY)
            }, n++;
            return {
                timeStamp: rt(),
                pointers: e,
                center: x(e),
                deltaX: t.deltaX,
                deltaY: t.deltaY
            }
        }

        function x(t) {
            var e = t.length;
            if (1 === e) return {
                x: et(t[0].clientX),
                y: et(t[0].clientY)
            };
            for (var n = 0, r = 0, o = 0; o < e;) n += t[o].clientX, r += t[o].clientY, o++;
            return {
                x: et(n / e),
                y: et(r / e)
            }
        }

        function _(t, e, n) {
            return {
                x: e / t || 0,
                y: n / t || 0
            }
        }

        function O(t, e) {
            return t === e ? yt : nt(t) >= nt(e) ? t < 0 ? vt : At : e < 0 ? bt : Et
        }

        function N(t, e, n) {
            n || (n = xt);
            var r = e[n[0]] - t[n[0]],
                o = e[n[1]] - t[n[1]];
            return Math.sqrt(r * r + o * o)
        }

        function C(t, e, n) {
            n || (n = xt);
            var r = e[n[0]] - t[n[0]],
                o = e[n[1]] - t[n[1]];
            return 180 * Math.atan2(o, r) / Math.PI
        }

        function k() {
            this.evEl = Nt, this.evWin = Ct, this.pressed = !1, b.apply(this, arguments)
        }

        function I() {
            this.evEl = Rt, this.evWin = Lt, b.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }

        function R() {
            this.evTarget = Dt, this.evWin = Ut, this.started = !1, b.apply(this, arguments)
        }

        function L() {
            this.evTarget = Mt, this.targetIds = {}, b.apply(this, arguments)
        }

        function P() {
            b.apply(this, arguments);
            var t = o(this.handler, this);
            this.touch = new L(this.manager, t), this.mouse = new k(this.manager, t), this.primaryTouch = null, this.lastTouches = []
        }

        function D(t) {
            var e = t.changedPointers[0];
            if (e.identifier === this.primaryTouch) {
                var n = {
                    x: e.clientX,
                    y: e.clientY
                };
                this.lastTouches.push(n);
                var r = this.lastTouches;
                setTimeout(function () {
                    var t = r.indexOf(n); - 1 < t && r.splice(t, 1)
                }, jt)
            }
        }

        function U(t, e) {
            this.manager = t, this.set(e)
        }

        function B(t) {
            this.options = Q({}, this.defaults, t || {}), this.id = st++, this.manager = null, this.options.enable = p(this.options.enable, !0), this.state = Jt, this.simultaneous = {}, this.requireFail = []
        }

        function M(t) {
            return t & ee ? "cancel" : t & Zt ? "end" : t & Kt ? "move" : t & Qt ? "start" : ""
        }

        function j(t) {
            return t == Et ? "down" : t == bt ? "up" : t == vt ? "left" : t == At ? "right" : ""
        }

        function q(t, e) {
            var n = e.manager;
            return n ? n.get(t) : t
        }

        function H() {
            B.apply(this, arguments)
        }

        function F() {
            H.apply(this, arguments), this.pX = null, this.pY = null
        }

        function z() {
            H.apply(this, arguments)
        }

        function G() {
            B.apply(this, arguments), this._timer = null, this._input = null
        }

        function Y() {
            H.apply(this, arguments)
        }

        function $() {
            H.apply(this, arguments)
        }

        function W() {
            B.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function X(t, e) {
            return (e = e || {}).recognizers = p(e.recognizers, X.defaults.preset), new V(t, e)
        }

        function V(t, e) {
            var n;
            this.options = Q({}, X.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = new((n = this).options.inputClass || (ct ? I : ut ? L : at ? P : k))(n, S), this.touchAction = new U(this, this.options.touchAction), J(this, !0), s(this.options.recognizers, function (t) {
                var e = this.add(new t[0](t[1]));
                t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
            }, this)
        }

        function J(n, r) {
            var o, i = n.element;
            i.style && (s(n.options.cssProps, function (t, e) {
                o = v(i.style, e), r ? (n.oldCssProps[o] = i.style[o], i.style[o] = t) : i.style[o] = n.oldCssProps[o] || ""
            }), r || (n.oldCssProps = {}))
        }
        var Q, K = ["", "webkit", "Moz", "MS", "ms", "o"],
            Z = a.createElement("div"),
            tt = "function",
            et = Math.round,
            nt = Math.abs,
            rt = Date.now;
        Q = "function" != typeof Object.assign ? function (t) {
            if (t === E || null === t) throw new TypeError("Cannot convert undefined or null to object");
            for (var e = Object(t), n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                if (r !== E && null !== r)
                    for (var o in r) r.hasOwnProperty(o) && (e[o] = r[o])
            }
            return e
        } : Object.assign;
        var ot = e(function (t, e, n) {
                for (var r = Object.keys(e), o = 0; o < r.length;)(!n || n && t[r[o]] === E) && (t[r[o]] = e[r[o]]), o++;
                return t
            }, "extend", "Use `assign`."),
            it = e(function (t, e) {
                return ot(t, e, !0)
            }, "merge", "Use `assign`."),
            st = 1,
            at = "ontouchstart" in i,
            ct = v(i, "PointerEvent") !== E,
            ut = at && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
            pt = "touch",
            lt = "mouse",
            ht = 25,
            ft = 1,
            dt = 2,
            gt = 4,
            mt = 8,
            yt = 1,
            vt = 2,
            At = 4,
            bt = 8,
            Et = 16,
            wt = vt | At,
            St = bt | Et,
            Tt = wt | St,
            xt = ["x", "y"],
            _t = ["clientX", "clientY"];
        b.prototype = {
            handler: function () {},
            init: function () {
                this.evEl && l(this.element, this.evEl, this.domHandler), this.evTarget && l(this.target, this.evTarget, this.domHandler), this.evWin && l(A(this.element), this.evWin, this.domHandler)
            },
            destroy: function () {
                this.evEl && h(this.element, this.evEl, this.domHandler), this.evTarget && h(this.target, this.evTarget, this.domHandler), this.evWin && h(A(this.element), this.evWin, this.domHandler)
            }
        };
        var Ot = {
                mousedown: ft,
                mousemove: dt,
                mouseup: gt
            },
            Nt = "mousedown",
            Ct = "mousemove mouseup";
        n(k, b, {
            handler: function (t) {
                var e = Ot[t.type];
                e & ft && 0 === t.button && (this.pressed = !0), e & dt && 1 !== t.which && (e = gt), this.pressed && (e & gt && (this.pressed = !1), this.callback(this.manager, e, {
                    pointers: [t],
                    changedPointers: [t],
                    pointerType: lt,
                    srcEvent: t
                }))
            }
        });
        var kt = {
                pointerdown: ft,
                pointermove: dt,
                pointerup: gt,
                pointercancel: mt,
                pointerout: mt
            },
            It = {
                2: pt,
                3: "pen",
                4: lt,
                5: "kinect"
            },
            Rt = "pointerdown",
            Lt = "pointermove pointerup pointercancel";
        i.MSPointerEvent && !i.PointerEvent && (Rt = "MSPointerDown", Lt = "MSPointerMove MSPointerUp MSPointerCancel"), n(I, b, {
            handler: function (t) {
                var e = this.store,
                    n = !1,
                    r = t.type.toLowerCase().replace("ms", ""),
                    o = kt[r],
                    i = It[t.pointerType] || t.pointerType,
                    s = i == pt,
                    a = g(e, t.pointerId, "pointerId");
                o & ft && (0 === t.button || s) ? a < 0 && (e.push(t), a = e.length - 1) : o & (gt | mt) && (n = !0), a < 0 || (e[a] = t, this.callback(this.manager, o, {
                    pointers: e,
                    changedPointers: [t],
                    pointerType: i,
                    srcEvent: t
                }), n && e.splice(a, 1))
            }
        });
        var Pt = {
                touchstart: ft,
                touchmove: dt,
                touchend: gt,
                touchcancel: mt
            },
            Dt = "touchstart",
            Ut = "touchstart touchmove touchend touchcancel";
        n(R, b, {
            handler: function (t) {
                var e = Pt[t.type];
                if (e === ft && (this.started = !0), this.started) {
                    var n = function (t, e) {
                        var n = m(t.touches),
                            r = m(t.changedTouches);
                        return e & (gt | mt) && (n = y(n.concat(r), "identifier", !0)), [n, r]
                    }.call(this, t, e);
                    e & (gt | mt) && n[0].length - n[1].length == 0 && (this.started = !1), this.callback(this.manager, e, {
                        pointers: n[0],
                        changedPointers: n[1],
                        pointerType: pt,
                        srcEvent: t
                    })
                }
            }
        });
        var Bt = {
                touchstart: ft,
                touchmove: dt,
                touchend: gt,
                touchcancel: mt
            },
            Mt = "touchstart touchmove touchend touchcancel";
        n(L, b, {
            handler: function (t) {
                var e = Bt[t.type],
                    n = function (t, e) {
                        var n = m(t.touches),
                            r = this.targetIds;
                        if (e & (ft | dt) && 1 === n.length) return r[n[0].identifier] = !0, [n, n];
                        var o, i, s = m(t.changedTouches),
                            a = [],
                            c = this.target;
                        if (i = n.filter(function (t) {
                                return w(t.target, c)
                            }), e === ft)
                            for (o = 0; o < i.length;) r[i[o].identifier] = !0, o++;
                        for (o = 0; o < s.length;) r[s[o].identifier] && a.push(s[o]), e & (gt | mt) && delete r[s[o].identifier], o++;
                        return a.length ? [y(i.concat(a), "identifier", !0), a] : void 0
                    }.call(this, t, e);
                n && this.callback(this.manager, e, {
                    pointers: n[0],
                    changedPointers: n[1],
                    pointerType: pt,
                    srcEvent: t
                })
            }
        });
        var jt = 2500,
            qt = 25;
        n(P, b, {
            handler: function (t, e, n) {
                var r = n.pointerType == pt,
                    o = n.pointerType == lt;
                if (!(o && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
                    if (r)(function (t, e) {
                        t & ft ? (this.primaryTouch = e.changedPointers[0].identifier, D.call(this, e)) : t & (gt | mt) && D.call(this, e)
                    }).call(this, e, n);
                    else if (o && function (t) {
                            for (var e = t.srcEvent.clientX, n = t.srcEvent.clientY, r = 0; r < this.lastTouches.length; r++) {
                                var o = this.lastTouches[r],
                                    i = Math.abs(e - o.x),
                                    s = Math.abs(n - o.y);
                                if (i <= qt && s <= qt) return !0
                            }
                            return !1
                        }.call(this, n)) return;
                    this.callback(t, e, n)
                }
            },
            destroy: function () {
                this.touch.destroy(), this.mouse.destroy()
            }
        });
        var Ht = v(Z.style, "touchAction"),
            Ft = Ht !== E,
            zt = "compute",
            Gt = "auto",
            Yt = "manipulation",
            $t = "none",
            Wt = "pan-x",
            Xt = "pan-y",
            Vt = function () {
                if (!Ft) return !1;
                var e = {},
                    n = i.CSS && i.CSS.supports;
                return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (t) {
                    e[t] = !n || i.CSS.supports("touch-action", t)
                }), e
            }();
        U.prototype = {
            set: function (t) {
                t == zt && (t = this.compute()), Ft && this.manager.element.style && Vt[t] && (this.manager.element.style[Ht] = t), this.actions = t.toLowerCase().trim()
            },
            update: function () {
                this.set(this.manager.options.touchAction)
            },
            compute: function () {
                var e = [];
                return s(this.manager.recognizers, function (t) {
                        u(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
                    }),
                    function (t) {
                        if (f(t, $t)) return $t;
                        var e = f(t, Wt),
                            n = f(t, Xt);
                        return e && n ? $t : e || n ? e ? Wt : Xt : f(t, Yt) ? Yt : Gt
                    }(e.join(" "))
            },
            preventDefaults: function (t) {
                var e = t.srcEvent,
                    n = t.offsetDirection;
                if (!this.manager.session.prevented) {
                    var r = this.actions,
                        o = f(r, $t) && !Vt[$t],
                        i = f(r, Xt) && !Vt[Xt],
                        s = f(r, Wt) && !Vt[Wt];
                    if (o) {
                        var a = 1 === t.pointers.length,
                            c = t.distance < 2,
                            u = t.deltaTime < 250;
                        if (a && c && u) return
                    }
                    return s && i ? void 0 : o || i && n & wt || s && n & St ? this.preventSrc(e) : void 0
                }
                e.preventDefault()
            },
            preventSrc: function (t) {
                this.manager.session.prevented = !0, t.preventDefault()
            }
        };
        var Jt = 1,
            Qt = 2,
            Kt = 4,
            Zt = 8,
            te = Zt,
            ee = 16;
        B.prototype = {
            defaults: {},
            set: function (t) {
                return Q(this.options, t), this.manager && this.manager.touchAction.update(), this
            },
            recognizeWith: function (t) {
                if (r(t, "recognizeWith", this)) return this;
                var e = this.simultaneous;
                return e[(t = q(t, this)).id] || (e[t.id] = t).recognizeWith(this), this
            },
            dropRecognizeWith: function (t) {
                return r(t, "dropRecognizeWith", this) || (t = q(t, this), delete this.simultaneous[t.id]), this
            },
            requireFailure: function (t) {
                if (r(t, "requireFailure", this)) return this;
                var e = this.requireFail;
                return -1 === g(e, t = q(t, this)) && (e.push(t), t.requireFailure(this)), this
            },
            dropRequireFailure: function (t) {
                if (r(t, "dropRequireFailure", this)) return this;
                t = q(t, this);
                var e = g(this.requireFail, t);
                return -1 < e && this.requireFail.splice(e, 1), this
            },
            hasRequireFailures: function () {
                return 0 < this.requireFail.length
            },
            canRecognizeWith: function (t) {
                return !!this.simultaneous[t.id]
            },
            emit: function (e) {
                function t(t) {
                    n.manager.emit(t, e)
                }
                var n = this,
                    r = this.state;
                r < Zt && t(n.options.event + M(r)), t(n.options.event), e.additionalEvent && t(e.additionalEvent), Zt <= r && t(n.options.event + M(r))
            },
            tryEmit: function (t) {
                return this.canEmit() ? this.emit(t) : void(this.state = 32)
            },
            canEmit: function () {
                for (var t = 0; t < this.requireFail.length;) {
                    if (!(this.requireFail[t].state & (32 | Jt))) return !1;
                    t++
                }
                return !0
            },
            recognize: function (t) {
                var e = Q({}, t);
                return u(this.options.enable, [this, e]) ? (this.state & (te | ee | 32) && (this.state = Jt), this.state = this.process(e), void(this.state & (Qt | Kt | Zt | ee) && this.tryEmit(e))) : (this.reset(), void(this.state = 32))
            },
            process: function (t) {},
            getTouchAction: function () {},
            reset: function () {}
        }, n(H, B, {
            defaults: {
                pointers: 1
            },
            attrTest: function (t) {
                var e = this.options.pointers;
                return 0 === e || t.pointers.length === e
            },
            process: function (t) {
                var e = this.state,
                    n = t.eventType,
                    r = e & (Qt | Kt),
                    o = this.attrTest(t);
                return r && (n & mt || !o) ? e | ee : r || o ? n & gt ? e | Zt : e & Qt ? e | Kt : Qt : 32
            }
        }), n(F, H, {
            defaults: {
                event: "pan",
                threshold: 10,
                pointers: 1,
                direction: Tt
            },
            getTouchAction: function () {
                var t = this.options.direction,
                    e = [];
                return t & wt && e.push(Xt), t & St && e.push(Wt), e
            },
            directionTest: function (t) {
                var e = this.options,
                    n = !0,
                    r = t.distance,
                    o = t.direction,
                    i = t.deltaX,
                    s = t.deltaY;
                return o & e.direction || (e.direction & wt ? (o = 0 === i ? yt : i < 0 ? vt : At, n = i != this.pX, r = Math.abs(t.deltaX)) : (o = 0 === s ? yt : s < 0 ? bt : Et, n = s != this.pY, r = Math.abs(t.deltaY))), t.direction = o, n && r > e.threshold && o & e.direction
            },
            attrTest: function (t) {
                return H.prototype.attrTest.call(this, t) && (this.state & Qt || !(this.state & Qt) && this.directionTest(t))
            },
            emit: function (t) {
                this.pX = t.deltaX, this.pY = t.deltaY;
                var e = j(t.direction);
                e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
            }
        }), n(z, H, {
            defaults: {
                event: "pinch",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function () {
                return [$t]
            },
            attrTest: function (t) {
                return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & Qt)
            },
            emit: function (t) {
                if (1 !== t.scale) {
                    var e = t.scale < 1 ? "in" : "out";
                    t.additionalEvent = this.options.event + e
                }
                this._super.emit.call(this, t)
            }
        }), n(G, B, {
            defaults: {
                event: "press",
                pointers: 1,
                time: 251,
                threshold: 9
            },
            getTouchAction: function () {
                return [Gt]
            },
            process: function (t) {
                var e = this.options,
                    n = t.pointers.length === e.pointers,
                    r = t.distance < e.threshold,
                    o = t.deltaTime > e.time;
                if (this._input = t, !r || !n || t.eventType & (gt | mt) && !o) this.reset();
                else if (t.eventType & ft) this.reset(), this._timer = c(function () {
                    this.state = te, this.tryEmit()
                }, e.time, this);
                else if (t.eventType & gt) return te;
                return 32
            },
            reset: function () {
                clearTimeout(this._timer)
            },
            emit: function (t) {
                this.state === te && (t && t.eventType & gt ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = rt(), this.manager.emit(this.options.event, this._input)))
            }
        }), n(Y, H, {
            defaults: {
                event: "rotate",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function () {
                return [$t]
            },
            attrTest: function (t) {
                return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & Qt)
            }
        }), n($, H, {
            defaults: {
                event: "swipe",
                threshold: 10,
                velocity: .3,
                direction: wt | St,
                pointers: 1
            },
            getTouchAction: function () {
                return F.prototype.getTouchAction.call(this)
            },
            attrTest: function (t) {
                var e, n = this.options.direction;
                return n & (wt | St) ? e = t.overallVelocity : n & wt ? e = t.overallVelocityX : n & St && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && n & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && nt(e) > this.options.velocity && t.eventType & gt
            },
            emit: function (t) {
                var e = j(t.offsetDirection);
                e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
            }
        }), n(W, B, {
            defaults: {
                event: "tap",
                pointers: 1,
                taps: 1,
                interval: 300,
                time: 250,
                threshold: 9,
                posThreshold: 10
            },
            getTouchAction: function () {
                return [Yt]
            },
            process: function (t) {
                var e = this.options,
                    n = t.pointers.length === e.pointers,
                    r = t.distance < e.threshold,
                    o = t.deltaTime < e.time;
                if (this.reset(), t.eventType & ft && 0 === this.count) return this.failTimeout();
                if (r && o && n) {
                    if (t.eventType != gt) return this.failTimeout();
                    var i = !this.pTime || t.timeStamp - this.pTime < e.interval,
                        s = !this.pCenter || N(this.pCenter, t.center) < e.posThreshold;
                    if (this.pTime = t.timeStamp, this.pCenter = t.center, s && i ? this.count += 1 : this.count = 1, this._input = t, 0 === this.count % e.taps) return this.hasRequireFailures() ? (this._timer = c(function () {
                        this.state = te, this.tryEmit()
                    }, e.interval, this), Qt) : te
                }
                return 32
            },
            failTimeout: function () {
                return this._timer = c(function () {
                    this.state = 32
                }, this.options.interval, this), 32
            },
            reset: function () {
                clearTimeout(this._timer)
            },
            emit: function () {
                this.state == te && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
            }
        }), X.VERSION = "2.0.8", X.defaults = {
            domEvents: !1,
            touchAction: zt,
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
                [Y, {
                    enable: !1
                }],
                [z, {
                        enable: !1
                    },
                    ["rotate"]
                ],
                [$, {
                    direction: wt
                }],
                [F, {
                        direction: wt
                    },
                    ["swipe"]
                ],
                [W],
                [W, {
                        event: "doubletap",
                        taps: 2
                    },
                    ["tap"]
                ],
                [G]
            ],
            cssProps: {
                userSelect: "none",
                touchSelect: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        };
        V.prototype = {
            set: function (t) {
                return Q(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
            },
            stop: function (t) {
                this.session.stopped = t ? 2 : 1
            },
            recognize: function (t) {
                var e = this.session;
                if (!e.stopped) {
                    this.touchAction.preventDefaults(t);
                    var n, r = this.recognizers,
                        o = e.curRecognizer;
                    (!o || o && o.state & te) && (o = e.curRecognizer = null);
                    for (var i = 0; i < r.length;) n = r[i], 2 === e.stopped || o && n != o && !n.canRecognizeWith(o) ? n.reset() : n.recognize(t), !o && n.state & (Qt | Kt | Zt) && (o = e.curRecognizer = n), i++
                }
            },
            get: function (t) {
                if (t instanceof B) return t;
                for (var e = this.recognizers, n = 0; n < e.length; n++)
                    if (e[n].options.event == t) return e[n];
                return null
            },
            add: function (t) {
                if (r(t, "add", this)) return this;
                var e = this.get(t.options.event);
                return e && this.remove(e), this.recognizers.push(t), (t.manager = this).touchAction.update(), t
            },
            remove: function (t) {
                if (r(t, "remove", this)) return this;
                if (t = this.get(t)) {
                    var e = this.recognizers,
                        n = g(e, t); - 1 !== n && (e.splice(n, 1), this.touchAction.update())
                }
                return this
            },
            on: function (t, e) {
                if (t !== E && e !== E) {
                    var n = this.handlers;
                    return s(d(t), function (t) {
                        n[t] = n[t] || [], n[t].push(e)
                    }), this
                }
            },
            off: function (t, e) {
                if (t !== E) {
                    var n = this.handlers;
                    return s(d(t), function (t) {
                        e ? n[t] && n[t].splice(g(n[t], e), 1) : delete n[t]
                    }), this
                }
            },
            emit: function (t, e) {
                var n, r, o;
                this.options.domEvents && (n = t, r = e, (o = a.createEvent("Event")).initEvent(n, !0, !0), (o.gesture = r).target.dispatchEvent(o));
                var i = this.handlers[t] && this.handlers[t].slice();
                if (i && i.length) {
                    e.type = t, e.preventDefault = function () {
                        e.srcEvent.preventDefault()
                    };
                    for (var s = 0; s < i.length;) i[s](e), s++
                }
            },
            destroy: function () {
                this.element && J(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
            }
        }, Q(X, {
            INPUT_START: ft,
            INPUT_MOVE: dt,
            INPUT_END: gt,
            INPUT_CANCEL: mt,
            STATE_POSSIBLE: Jt,
            STATE_BEGAN: Qt,
            STATE_CHANGED: Kt,
            STATE_ENDED: Zt,
            STATE_RECOGNIZED: te,
            STATE_CANCELLED: ee,
            STATE_FAILED: 32,
            DIRECTION_NONE: yt,
            DIRECTION_LEFT: vt,
            DIRECTION_RIGHT: At,
            DIRECTION_UP: bt,
            DIRECTION_DOWN: Et,
            DIRECTION_HORIZONTAL: wt,
            DIRECTION_VERTICAL: St,
            DIRECTION_ALL: Tt,
            Manager: V,
            Input: b,
            TouchAction: U,
            TouchInput: L,
            MouseInput: k,
            PointerEventInput: I,
            TouchMouseInput: P,
            SingleTouchInput: R,
            Recognizer: B,
            AttrRecognizer: H,
            Tap: W,
            Pan: F,
            Swipe: $,
            Pinch: z,
            Rotate: Y,
            Press: G,
            on: l,
            off: h,
            each: s,
            merge: it,
            extend: ot,
            assign: Q,
            inherit: n,
            bindFn: o,
            prefixed: v
        }), (void 0 !== i ? i : "undefined" != typeof self ? self : {}).Hammer = X, "function" == typeof define && define.amd ? define(function () {
            return X
        }) : "undefined" != typeof module && module.exports ? module.exports = X : i.Hammer = X
    }(window, document),
    function (t) {
        "object" == typeof exports ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (window.WatchJS = t(), window.watch = window.WatchJS.watch, window.unwatch = window.WatchJS.unwatch, window.callWatchers = window.WatchJS.callWatchers)
    }(function () {
        var s = {
                noMore: !1,
                useDirtyCheck: !1
            },
            a = [],
            c = [],
            i = [],
            u = !1;
        try {
            u = Object.defineProperty && Object.defineProperty({}, "x", {})
        } catch (t) {}
        var p = function (t) {
                return t && "[object Function]" == {}.toString.call(t)
            },
            h = function (t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            },
            f = function (t) {
                return "[object Object]" === {}.toString.apply(t)
            },
            l = function (t, e) {
                var n = [],
                    r = [];
                if ("string" != typeof t && "string" != typeof e) {
                    if (h(t) && e)
                        for (var o = 0; o < t.length; o++) void 0 === e[o] && n.push(o);
                    else
                        for (var o in t) t.hasOwnProperty(o) && e && void 0 === e[o] && n.push(o);
                    if (h(e) && t)
                        for (var i = 0; i < e.length; i++) void 0 === t[i] && r.push(i);
                    else
                        for (var i in e) e.hasOwnProperty(i) && t && void 0 === t[i] && r.push(i)
                }
                return {
                    added: n,
                    removed: r
                }
            },
            d = function (t) {
                if (null == t || "object" != typeof t) return t;
                var e = t.constructor();
                for (var n in t) e[n] = t[n];
                return e
            },
            g = function (e, n, r) {
                try {
                    Object.defineProperty(e, n, {
                        enumerable: !1,
                        configurable: !0,
                        writable: !1,
                        value: r
                    })
                } catch (t) {
                    e[n] = r
                }
            },
            m = function (t, e, n) {
                c[c.length] = {
                    prop: e,
                    object: t,
                    orig: d(t[e]),
                    callback: n
                }
            },
            y = function (t, e, n, r) {
                if ("string" != typeof t && (t instanceof Object || h(t))) {
                    if (h(t)) {
                        if (T(t, "__watchall__", e, n), void 0 === n || 0 < n)
                            for (var o = 0; o < t.length; o++) y(t[o], e, n, r)
                    } else {
                        var i = [];
                        for (o in t) "$val" == o || !u && "watchers" === o || Object.prototype.hasOwnProperty.call(t, o) && i.push(o);
                        v(t, i, e, n, r)
                    }
                    r && U(t, "$$watchlengthsubjectroot", e, n)
                }
            },
            v = function (t, e, n, r, o) {
                if ("string" != typeof t && (t instanceof Object || h(t)))
                    for (var i = 0; i < e.length; i++) {
                        var s = e[i];
                        A(t, s, n, r, o)
                    }
            },
            A = function (t, e, n, r, o) {
                "string" != typeof t && (t instanceof Object || h(t)) && (p(t[e]) || (null != t[e] && (void 0 === r || 0 < r) && y(t[e], n, void 0 !== r ? r - 1 : r), T(t, e, n, r), o && (void 0 === r || 0 < r) && U(t, e, n, r)))
            },
            t = function (t, r) {
                if (!(t instanceof String) && (t instanceof Object || h(t)))
                    if (h(t)) {
                        for (var e = ["__watchall__"], n = 0; n < t.length; n++) e.push(n);
                        b(t, e, r)
                    } else {
                        var o = function (t) {
                            var e = [];
                            for (var n in t) t.hasOwnProperty(n) && (t[n] instanceof Object ? o(t[n]) : e.push(n));
                            b(t, e, r)
                        };
                        o(t)
                    }
            },
            b = function (t, e, n) {
                for (var r in e) e.hasOwnProperty(r) && C(t, e[r], n)
            },
            e = [],
            n = null;

        function r() {
            n = null;
            for (var t = 0; t < e.length; t++) e[t]();
            e.length = 0
        }
        var E = function () {
                return n || (n = setTimeout(r)), n
            },
            w = function (t) {
                null == n && E(), e[e.length] = t
            },
            S = function (i, s, t, e) {
                var a = null,
                    c = -1,
                    u = h(i);
                y(i, function (t, e, n, r) {
                    var o = E();
                    if (c !== o && (c = o, (a = {
                            type: "update"
                        }).value = i, a.splices = null, w(function () {
                            s.call(this, a), a = null
                        })), u && i === this && null !== a) {
                        if ("pop" === e || "shift" === e) n = [], r = [r];
                        else if ("push" === e || "unshift" === e) n = [n], r = [];
                        else if ("splice" !== e) return;
                        a.splices || (a.splices = []), a.splices[a.splices.length] = {
                            index: t,
                            deleteCount: r ? r.length : 0,
                            addedCount: n ? n.length : 0,
                            added: n,
                            deleted: r
                        }
                    }
                }, 1 == t ? void 0 : 0, e)
            },
            o = function (t, e, i, s, a) {
                t && e && (A(t, e, function (t, e, n, r) {
                    var o = {
                        type: "update"
                    };
                    o.value = n, o.oldvalue = r, (s && f(n) || h(n)) && S(n, i, s, a), i.call(this, o)
                }, 0), (s && f(t[e]) || h(t[e])) && S(t[e], i, s, a))
            },
            T = function (u, p, t, l) {
                var e = !1,
                    n = h(u);
                u.watchers || (g(u, "watchers", {}), n && N(u, function (t, e, n, r) {
                    if (L(u, t, e, n, r), 0 !== l && n && (f(n) || h(n))) {
                        var o, i, s, a, c = u.watchers[p];
                        for ((a = u.watchers.__watchall__) && (c = c ? c.concat(a) : a), s = c ? c.length : 0, o = 0; o < s; o++)
                            if ("splice" !== e) y(n, c[o], void 0 === l ? l : l - 1);
                            else
                                for (i = 0; i < n.length; i++) y(n[i], c[o], void 0 === l ? l : l - 1)
                    }
                })), u.watchers[p] || (u.watchers[p] = [], n || (e = !0));
                for (var r = 0; r < u.watchers[p].length; r++)
                    if (u.watchers[p][r] === t) return;
                if (u.watchers[p].push(t), e) {
                    var i = u[p],
                        o = function (t, e) {
                            var n = i;
                            if (i = t, 0 !== l && u[p] && (f(u[p]) || h(u[p])) && !u[p].watchers) {
                                var r, o = u.watchers[p].length;
                                for (r = 0; r < o; r++) y(u[p], u.watchers[p][r], void 0 === l ? l : l - 1)
                            }
                            k(u, p) ? I(u, p) : s.noMore || n !== t && (e ? L(u, p, "set", t, n) : x(u, p, "set", t, n), s.noMore = !1)
                        };
                    s.useDirtyCheck ? m(u, p, o) : function (e, n, r, o) {
                        try {
                            Object.observe(e, function (t) {
                                t.forEach(function (t) {
                                    t.name === n && o(t.object[t.name])
                                })
                            })
                        } catch (t) {
                            try {
                                Object.defineProperty(e, n, {
                                    get: r,
                                    set: function (t) {
                                        o.call(this, t, !0)
                                    },
                                    enumerable: !0,
                                    configurable: !0
                                })
                            } catch (t) {
                                try {
                                    Object.prototype.__defineGetter__.call(e, n, r), Object.prototype.__defineSetter__.call(e, n, function (t) {
                                        o.call(this, t, !0)
                                    })
                                } catch (t) {
                                    m(e, n, o)
                                }
                            }
                        }
                    }(u, p, function () {
                        return i
                    }, o)
                }
            },
            x = function (t, e, n, r, o) {
                if (void 0 !== e) {
                    var i, s, a = t.watchers[e];
                    (s = t.watchers.__watchall__) && (a = a ? a.concat(s) : s), i = a ? a.length : 0;
                    for (var c = 0; c < i; c++) a[c].call(t, e, n, r, o)
                } else
                    for (var e in t) t.hasOwnProperty(e) && x(t, e, n, r, o)
            },
            _ = ["pop", "push", "reverse", "shift", "sort", "slice", "unshift", "splice"],
            O = function (a, c, u, p) {
                g(a, u, function () {
                    var t, e, n, r, o = 0;
                    if ("splice" === u) {
                        var i = arguments[0],
                            s = i + arguments[1];
                        for (n = a.slice(i, s), e = [], t = 2; t < arguments.length; t++) e[t - 2] = arguments[t];
                        o = i
                    } else e = 0 < arguments.length ? arguments[0] : void 0;
                    return r = c.apply(a, arguments), "slice" !== u && ("pop" === u ? (n = r, o = a.length) : "push" === u ? o = a.length - 1 : "shift" === u ? n = r : "unshift" !== u && void 0 === e && (e = r), p.call(a, o, u, e, n)), r
                })
            },
            N = function (t, e) {
                if (p(e) && t && !(t instanceof String) && h(t))
                    for (var n, r = _.length; r--;) O(t, t[n = _[r]], n, e)
            },
            C = function (t, e, n) {
                if (e) {
                    if (t.watchers[e])
                        if (void 0 === n) delete t.watchers[e];
                        else
                            for (var r = 0; r < t.watchers[e].length; r++) {
                                t.watchers[e][r] == n && t.watchers[e].splice(r, 1)
                            }
                } else delete t.watchers;
                B(t, e, n), M(t, e)
            },
            k = function (t, e) {
                return t.watchers && (t.watchers.__wjs_suspend__ || t.watchers["__wjs_suspend__" + e])
            },
            I = function (t, e) {
                w(function () {
                    delete t.watchers.__wjs_suspend__, delete t.watchers["__wjs_suspend__" + e]
                })
            },
            R = null,
            L = function (t, e, n, r, o) {
                i[i.length] = {
                    obj: t,
                    prop: e,
                    mode: n,
                    newval: r,
                    oldval: o
                }, null === R && (R = setTimeout(P))
            },
            P = function () {
                var t = null;
                R = null;
                for (var e = 0; e < i.length; e++) t = i[e], x(t.obj, t.prop, t.mode, t.newval, t.oldval);
                t && (i = [], t = null)
            },
            D = function (t, e) {
                var n, r = !0;
                if (t !== e)
                    if (f(t)) {
                        for (n in t)
                            if ((u || "watchers" !== n) && t[n] !== e[n]) {
                                r = !1;
                                break
                            }
                    } else r = !1;
                return r
            },
            U = function (t, e, n, r) {
                var o;
                o = d("$$watchlengthsubjectroot" === e ? t : t[e]), a.push({
                    obj: t,
                    prop: e,
                    actual: o,
                    watcher: n,
                    level: r
                })
            },
            B = function (t, e, n) {
                for (var r = 0; r < a.length; r++) {
                    var o = a[r];
                    o.obj == t && (e && o.prop != e || n && o.watcher != n || a.splice(r--, 1))
                }
            },
            M = function (t, e) {
                for (var n = 0; n < c.length; n++) {
                    var r = c[n],
                        o = r.object.watchers;
                    r.object == t && (!e || r.prop == e) && o && (!e || !o[e] || 0 == o[e].length) && c.splice(n--, 1)
                }
            };
        return setInterval(function () {
            for (var t = 0; t < a.length; t++) {
                var e = a[t];
                if ("$$watchlengthsubjectroot" === e.prop)((n = l(e.obj, e.actual)).added.length || n.removed.length) && (n.added.length && v(e.obj, n.added, e.watcher, e.level - 1, !0), e.watcher.call(e.obj, "root", "differentattr", n, e.actual)), e.actual = d(e.obj);
                else {
                    var n;
                    if ((n = l(e.obj[e.prop], e.actual)).added.length || n.removed.length) {
                        if (n.added.length)
                            for (var r = 0; r < e.obj.watchers[e.prop].length; r++) v(e.obj[e.prop], n.added, e.obj.watchers[e.prop][r], e.level - 1, !0);
                        x(e.obj, e.prop, "differentattr", n, e.actual)
                    }
                    e.actual = d(e.obj[e.prop])
                }
            }
            var o, i;
            if (0 < c.length)
                for (t = 0; t < c.length; t++) i = (o = c[t]).object[o.prop], D(o.orig, i) || (o.orig = d(i), o.callback(i))
        }, 50), s.watch = function () {
            p(arguments[1]) ? y.apply(this, arguments) : h(arguments[1]) ? v.apply(this, arguments) : A.apply(this, arguments)
        }, s.unwatch = function () {
            p(arguments[1]) ? t.apply(this, arguments) : h(arguments[1]) ? b.apply(this, arguments) : C.apply(this, arguments)
        }, s.callWatchers = x, s.suspend = function (t, e) {
            if (t.watchers) {
                var n = "__wjs_suspend__" + (void 0 !== e ? e : "");
                t.watchers[n] = !0
            }
        }, s.onChange = function () {
            (p(arguments[2]) ? o : S).apply(this, arguments)
        }, s
    }), window.location.origin || (window.location.origin = document.getElementsByTagName("base")[0].href), Settings.REMOTE_API || (Settings.REMOTE_API = document.getElementsByTagName("base")[0].href), App = {
        version: "0.9.1",
        versionDetail: {
            major: 0,
            minor: 9,
            patch: 1
        }
    }, App.apply = function (t, e, n) {
        if (n && App.apply(t, n), t && e && "object" == typeof e)
            for (var r in e) t[r] = e[r];
        return t
    }, App.apply(App, {
        global: function () {
            return this
        }(),
        namespaceCache: {},
        createNamespace: function (namespace, constructor, extend) {
            var cache = App.namespaceCache,
                ns = cache[namespace],
                i, n, part, parts, partials;

            function getArgs(t) {
                return t.toString().match(/function\s.*?\(([^)]*)\)/)[1].split(",").map(function (t) {
                    return t.replace(/\/\*.*\*\//, "").trim()
                }).filter(function (t) {
                    return t
                })
            }
            if (!ns && (ns = App.global, namespace))
                for (partials = [], parts = namespace.split("."), i = 0, n = parts.length; i < n; ++i) part = parts[i], ns = constructor ? extend ? ns[part] || (ns[part] = function () {
                    var _p = eval(extend);
                    return _p.apply(this, arguments), constructor
                }()) : ns[part] || (ns[part] = constructor) : ns[part] || (ns[part] = {}), partials.push(part), cache[partials.join(".")] = ns;
            return ns
        },
        isDefined: function (t) {
            return void 0 !== t
        },
        applyIf: function (t, e) {
            if (t)
                for (var n in e) App.isDefined(t[n]) || (t[n] = e[n]);
            return t
        },
        uuid: function () {
            for (var t, e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), n = new Array(36), r = 0, o = 0; o < 36; o++) 8 == o || 13 == o || 18 == o || 23 == o ? n[o] = "-" : 14 == o ? n[o] = "4" : (r <= 2 && (r = 33554432 + 16777216 * Math.random() | 0), t = 15 & r, r >>= 4, n[o] = e[19 == o ? 3 & t | 8 : t]);
            return n.join("")
        },
        IOKey: md5((new Date).toMySQL().split(" ")[0]),
        define: function (className, o) {
            if (o.statics) {
                var object = App.createNamespace(className);
                if (App.apply(object, o.statics), o.extend)
                    for (var _p = eval(o.extend), items = Object.getOwnPropertyNames(_p), i = 0; i < items.length; i++) object[items[i]] = _p[items[i]]
            } else {
                if (!o.constructor) throw "GURU MEDITATION: No constructor found";
                var object = App.createNamespace(className, o.constructor, o.extend);
                if (o.extend) {
                    var proto = eval(o.extend + ".prototype");
                    object.prototype = proto, object.prototype.constructor = o.constructor
                }
                for (var el in o) "constructor" != el && (object.prototype[el] = o[el])
            }
            return object
        },
        logger: {
            oldConsoleLog: null,
            enable: function () {
                null != this.oldConsoleLog && (window.console.log = this.oldConsoleLog)
            },
            disable: function () {
                this.oldConsoleLog = console.log, window.console.log = function () {}
            }
        },
        isURLOnline: function (t, e) {
            var n = new XMLHttpRequest;
            n.open("HEAD", t), n.onreadystatechange = function () {
                this.readyState == this.DONE && e(404 != this.status)
            }, n.send()
        },
        require: function (n, c) {
            if (Settings.DEBUG) {
                if (App.isArray(n)) return void App.requires(n, 0, c);
                if (-1 < n.indexOf("http")) return void App.request(n, function (t, e) {
                    try {
                        window.eval(e)
                    } catch (t) {
                        console.log("!! [ERR] " + n), console.log(t), console.log("-----------------")
                    }
                    return c()
                });
                n = n.replace(/\./g, "/");
                var u = "",
                    p = {},
                    l = [];

                function h(n, r, o, i) {
                    if (!n[r]) return o(i);
                    for (var t in n[r] = n[r].replace(/{version}/g, p.version), p.repositories) - 1 < n[r].indexOf(t) && (n[r] = p.repositories[t] + n[r].split(t)[1]), -1 == n[r].indexOf("http") && (n[r] = u.replace(".json", "/") + n[r]);
                    n[r] = n[r].cleanURL(), App.request(n[r], function (t, e) {
                        i.push(e), h(n, r + 1, o, i)
                    })
                }
                for (var t in Settings.PATHS) els = t.replace(/\./g, "/"), -1 < n.indexOf(els) && (u = Settings.PATHS[t] + "/" + n.split(els)[1]);
                "" == u && (u = n), -1 == u.indexOf(".json") && (u += ".json"), u = u.cleanURL(), App.request(u, function (t, e) {
                    for (var n = (p = JSON.parse(e)).package.js, r = [], o = 0; o < n.length; o++) App.isObject(n[o]) ? l.push(n[o]) : r.push(n[o]);
                    for (o = 0; o < p.package.css.length; o++) {
                        var i = p.package.css[o];
                        for (var s in i = i.replace(/{version}/g, p.version), p.repositories) - 1 < i.indexOf(s) && (i = p.repositories[s] + i.split(s)[1]);
                        i = -1 == u.replace(".json", "/").indexOf("http") ? App.origin() + u.replace(".json", "/") + i : u.replace(".json", "/") + i;
                        var a = document.createElement("link");
                        a.rel = "stylesheet", a.type = "text/css", a.href = i, document.getElementsByTagName("head")[0].appendChild(a)
                    }! function n(r, o, i) {
                        if (!r[o]) return i();
                        for (var t in r[o] = r[o].replace(/{version}/g, p.version), p.repositories) - 1 < r[o].indexOf(t) && (r[o] = p.repositories[t] + r[o].split(t)[1]); - 1 == r[o].indexOf("http") && (r[o] = u.replace(".json", "/") + r[o]), r[o] = r[o].cleanURL(), App.request(r[o], function (t, e) {
                            window.eval(e), n(r, o + 1, i)
                        })
                    }(r, 0, function () {
                        ! function e(n, r, o) {
                            if (!n[r]) return o();
                            for (var i in n[r]) App.isArray(n[r][i]) || (n[r][i] = [n[r][i]]), h(n[r][i], 0, function (t) {
                                window.eval(p.namespace + "." + i + "=function() {" + t.join("\n") + "}"), e(n, r + 1, o)
                            }, [])
                        }(l, 0, c)
                    })
                })
            } else c()
        },
        requires: function (t, e, n) {
            if (!t[e]) return n();
            App.require(t[e], function () {
                App.requires(t, e + 1, n)
            })
        },
        request: function (t, e) {
            var n = new XMLHttpRequest;
            if (App.isObject(t) || (t = {
                    url: t
                }), !t.uri && !t.url) throw "GURU MEDITATION: No URL parameter";
            if (t.uri) var r = t.uri;
            if (t.url) r = t.url;
            if (-1 < r.indexOf("://") && (r = t.url.split("://")[0] + "://" + t.url.split("://")[1].replace(/\/\//g, "/")), t.method) o = t.method;
            else var o = "GET";
            n.addEventListener("load", function () {
                200 === n.status ? e(null, n.responseText, n) : e(n, null)
            }, !1), n.addEventListener("progress", function (t) {}, !1), n.addEventListener("error", function (t) {
                e(t, null)
            }, !1), n.addEventListener("abort", function () {}, !1), n.open(o, r), "GET" == o && n.send(), "POST" == o && (n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), t.form ? n.send(encodeURI(function (t) {
                var e = "";
                for (var n in t) t.hasOwnProperty(n) && (0 < e.length && (e += "&"), e += encodeURI(n + "=" + t[n]));
                return e
            }(t.form))) : t.data ? (n.setRequestHeader("Content-Type", "application/json; charset=utf-8"), n.send(JSON.stringify(t.data))) : n.send())
        },
        __key__: new Persist.Store(Settings.NAMESPACE.replace(/\./g, "")),
        key: {
            set: function (t, e) {
                return !!t && (!!e && (null !== e && "object" == typeof e && (e = JSON.stringify(e)), void App.__key__.set(t, e)))
            },
            remove: function (t) {
                App.__key__.remove(t)
            },
            unset: function (t) {
                App.__key__.remove(t)
            },
            get: function (t) {
                var e = App.__key__.get(t);
                try {
                    return JSON.parse(e)
                } catch (t) {
                    return e
                }
            }
        }
    }), App.uid = App.uuid(), App.apply(App, {
        getObjectProperty: function (t, e) {
            for (var n = e.split("."); n.length && (t = t[n.shift()]););
            return t
        },
        getObjectProperties: function (t) {
            var e = JSON.flatten(t),
                n = [];
            for (var r in e) n.push(r);
            return n
        },
        setObjectProperty: function (t, e, n) {
            Object.prop = function (t, e, n) {
                for (var r, o = e.split("."), i = o.pop(); r = o.shift();) {
                    if (void 0 === t[r]) return;
                    t = t[r]
                }
                return n ? t[i] = n : t[i]
            }, Object.prop(t, e, n)
        }
    }), App.import = function (t, e) {
        var o = function (t, e, n) {
            if (!t[e]) return n();
            var r = document.createElement("script");
            r.type = "text/javascript", r.readyState ? r.onreadystatechange = function () {
                "loaded" != r.readyState && "complete" != r.readyState || (r.onreadystatechange = null, o(t, e + 1, n))
            } : r.onload = function () {
                o(t, e + 1, n)
            }, r.src = t[e], document.getElementsByTagName("head")[0].appendChild(r)
        };
        "string" == typeof t && (t = [t]), o(t, 0, e)
    }, App.apply(App, {
        shortid: function (t) {
            var e = function () {
                for (var t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", e = "", n = 0; n < 8; n++) e += t.charAt(Math.floor(Math.random() * t.length));
                return e
            };
            t = t || [];
            for (var n, r = 0; !n && r < 9999;) n = e(), -1 !== t.indexOf(n) && (n = null, r++);
            return n
        }
    }), App.apply(App, {
        isEmpty: function (t, e) {
            return null == t || !e && "" === t || App.isArray(t) && 0 === t.length
        },
        isNodeList: function (t) {
            return NodeList.prototype.isPrototypeOf(t)
        },
        isArray: "isArray" in Array ? Array.isArray : function (t) {
            return "[object Array]" === toString.call(t)
        },
        isDate: function (t) {
            return "[object Date]" === toString.call(t)
        },
        isObject: "[object Object]" === toString.call(null) ? function (t) {
            return null != t && "[object Object]" === toString.call(t) && void 0 === t.ownerDocument
        } : function (t) {
            return "[object Object]" === toString.call(t)
        },
        isSimpleObject: function (t) {
            return t instanceof Object && t.constructor === Object
        },
        isPrimitive: function (t) {
            var e = typeof t;
            return "string" === e || "number" === e || "boolean" === e
        },
        isFunction: "undefined" != typeof document && "function" == typeof document.getElementsByTagName("body") ? function (t) {
            return !!t && "[object Function]" === toString.call(t)
        } : function (t) {
            return !!t && "function" == typeof t
        },
        isNumber: function (t) {
            return "number" == typeof t && isFinite(t)
        },
        isNumeric: function (t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        },
        isString: function (t) {
            return "string" == typeof t
        },
        isBoolean: function (t) {
            return "boolean" == typeof t
        },
        isElement: function (t) {
            return !!t && 1 === t.nodeType
        },
        isTextNode: function (t) {
            return !!t && "#text" === t.nodeName
        },
        isDefined: function (t) {
            return void 0 !== t
        },
        isIterable: function (t) {
            return !(!t || "number" != typeof t.length || "string" == typeof t || App.isFunction(t)) && (t.propertyIsEnumerable ? !(!t.hasOwnProperty("length") || t.propertyIsEnumerable("length")) || iterableRe.test(toString.call(t)) : !!t.item)
        }
    }), App.apply(App, {
        convertImgToBase64URL: function (t, r, o) {
            var e = new Image;
            if (e.crossOrigin = "Anonymous", !o) o = "image/png";
            e.onload = function () {
                var t, e = document.createElement("CANVAS"),
                    n = e.getContext("2d");
                e.height = this.height, e.width = this.width, n.drawImage(this, 0, 0), t = e.toDataURL(o), r(t), e = null
            }, -1 < t.indexOf("url(") && (t = t.split("url(")[1].split(")")[0]), -1 == t.indexOf("http") ? r(t) : e.src = t
        },
        loadAPI: function (t) {
            var e = document.createElement("script");
            e.setAttribute("type", "text/javascript"), e.setAttribute("src", t), (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(e)
        },
        readFile: function (t, n) {
            var r = new FileReader;
            r.onload = function (t) {
                var e = r.result;
                n(e, t)
            }, r.readAsDataURL(t)
        },
        origin: function () {
            return window.location.protocol + "//" + window.location.host
        }
    }), App.apply(App, {
        blur: function (t) {
            if (t) t = document.querySelector(t);
            else t = document.getElementsByTagName("body")[0];
            var e = function (t) {
                    return document.createElementNS("http://www.w3.org/2000/svg", t)
                },
                n = document.location.protocol + "//" + document.location.host + document.location.pathname + document.location.search,
                r = e("svg"),
                o = e("filter");
            o.id = "blurme" + App.uuid();
            var i = e("feGaussianBlur");
            i.setAttribute("stdDeviation", "5"), r.setAttribute("style", "position:absolute"), r.setAttribute("width", "0"), r.setAttribute("height", "0"), o.appendChild(i), r.appendChild(o), document.getElementsByTagName("body")[0].appendChild(r);
            var s = "url(" + n + "#" + o.id + ")";
            t.style.filter = s
        },
        unblur: function (t) {
            if (t) t = document.querySelector(t);
            else t = document.getElementsByTagName("body")[0];
            t.style.filter = ""
        }
    });
var WatchManager = function () {
    var r = {},
        o = {};
    return {
        watch: function (t, n, e) {
            return Object.defineProperty(t, n, {
                set: function (e) {
                    o[n] = e, r[n].forEach(function (t) {
                        t(e)
                    })
                },
                get: function () {
                    return o[n]
                }
            }), r[n] || (r[n] = []), r[n].push(e), r[n].length - 1
        }
    }
}();

function setToken() {
    var t = (new Date).toMySQL().split(" ")[0];
    return Base64.encode(md5(t))
}

function getAllChildren(t) {
    var e = t.items ? t.items.items : [];
    return Ext.each(e, function (t) {
        e = e.concat(getAllChildren(t))
    }), e
}

function getAllChildrenIds(t) {
    for (var e = getAllChildren(t), n = 0, r = e.length; n < r; n++) e[n] = e[n].getId();
    return e
}
Settings.DEBUG, App.__NOTIFY__ = document.createElement("div"), App.__NOTIFY__.hide = !0, document.getElementsByTagName("body")[0].appendChild(App.__NOTIFY__), Ext.define("omneedia.webapp.GlobalMenu", {
    extend: "Ext.Panel",
    xtype: "Menu",
    border: !1,
    constructor: function (t) {
        this.callParent(arguments), this.initConfig(t);
        var e = [];
        e[0] = {
            iconCls: "qxIcon",
            text: "<b>" + window.document.title + "</b>",
            menu: {
                items: [{
                    text: "A propos de...",
                    handler: function () {
                        Ext.create("Ext.Window", {
                            title: "A propos de...",
                            width: 500,
                            modal: !0,
                            closable: !0,
                            resizable: !1,
                            height: 331,
                            layout: "vbox",
                            bodyStyle: "background-color:white",
                            border: !1,
                            buttonAlign: "center",
                            listeners: {
                                show: function () {}
                            },
                            bbar: [{
                                text: "Credits",
                                hidden: !0,
                                handler: function () {
                                    Ext.create("Ext.Window", {
                                        title: "Credits",
                                        width: 400,
                                        height: 500,
                                        modal: !0,
                                        closable: !0,
                                        resizable: !1,
                                        layout: "vbox",
                                        bodyStyle: "background-color:white",
                                        border: !1,
                                        bbar: ["->", {
                                            text: "Fermer",
                                            handler: function (t) {
                                                t.up().up().close()
                                            }
                                        }],
                                        items: []
                                    }).show().center()
                                }
                            }, {
                                text: "Licence",
                                hidden: !0,
                                handler: function () {
                                    Ext.create("Ext.Window", {
                                        title: "License",
                                        width: 640,
                                        height: 550,
                                        modal: !0,
                                        closable: !0,
                                        resizable: !0,
                                        layout: "vbox",
                                        bodyStyle: "background-color:white",
                                        border: !1,
                                        bbar: ["->", {
                                            text: "Fermer",
                                            handler: function (t) {
                                                t.up().up().close()
                                            }
                                        }],
                                        items: []
                                    }).show().center()
                                }
                            }, "->", {
                                text: "Fermer",
                                handler: function (t) {
                                    t.up().up().close()
                                }
                            }],
                            items: [{
                                height: 10,
                                border: !1
                            }, {
                                layout: "hbox",
                                border: !1,
                                items: [{
                                    xtype: "panel",
                                    border: !1,
                                    baseCls: "qxAboutLogo",
                                    width: 150,
                                    height: 150
                                }, {
                                    xtype: "panel",
                                    flex: 1,
                                    height: 150,
                                    width: 500,
                                    border: !1,
                                    html: "<div class=AboutBoxTitle>" + window.document.title + "<div class=AboutBoxDescription>" + Settings.DESCRIPTION + "</div><div class=AboutBoxVersion>version " + Settings.VERSION + "." + Settings.BUILD + "</div><div class=AboutBoxCopyright>" + Settings.COPYRIGHT + "</div>"
                                }]
                            }, {
                                layout: "hbox",
                                width: "100%",
                                border: !1,
                                items: [{
                                    border: !1,
                                    html: '<div class=AboutBoxLicence>EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT HOLDERS PROVIDE THE SOFTWARE "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE SOFTWARE IS WITH YOU. SHOULD THE SOFTWARE PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION. IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING WILL ANY COPYRIGHT HOLDER, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO USE THE SOFTWARE (INCLUDING BUT NOT LIMITED TO LOSS OF DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD PARTIES OR A FAILURE OF THE SOFTWARE TO OPERATE WITH ANY OTHER PROGRAMS), EVEN IF SUCH HOLDER HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</div>',
                                    flex: 1
                                }]
                            }]
                        }).show().center()
                    }
                }, {
                    iconCls: "mnu_preferences",
                    text: "Préférences",
                    handler: function () {
                        Ext.create("Ext.Window", {
                            title: "Préférences",
                            width: 380,
                            modal: !0,
                            closable: !0,
                            resizable: !1,
                            height: 470,
                            layout: "vbox",
                            bodyStyle: "background-color:white",
                            border: !1,
                            buttonAlign: "center",
                            layout: "accordion",
                            items: [],
                            listeners: {
                                show: function () {
                                    if (App.prefs)
                                        for (var t = 0; t < App.prefs.length; t++) {
                                            var e = Ext.create("Ext.grid.property.Grid", {
                                                title: "<b>" + App.prefs[t].title.toUpperCase() + "</b>"
                                            });
                                            this.add(e)
                                        }
                                }
                            }
                        }).show().center()
                    }
                }]
            }
        };
        for (var n = 0; n < this.menu.length; n++) e[n + 1] = this.menu[n];
        e[n + 1] = "->", e[n + 2] = {
            id: "GlobalMenuUser",
            menu: {
                items: [{
                    text: "Déconnexion",
                    handler: function () {
                        Auth.logout()
                    }
                }]
            }
        }, e[n + 3] = {
            id: "GlobalMenuDateTime"
        }, e[n + 4] = {
            id: "GlobalMenuLang",
            menu: {
                items: []
            }
        }, e[n + 5] = {
            iconCls: "QxNotificationBar",
            handler: function () {
                App.__NOTIFY__.center = document.createElement("iframe"), App.__NOTIFY__.center.style.width = "100%", App.__NOTIFY__.center.style.height = "100%", App.__NOTIFY__.center.style.position = "absolute", App.__NOTIFY__.center.style.left = "0px", App.__NOTIFY__.center.style.top = "0px", App.__NOTIFY__.center.style.border = "0px solid black", App.__NOTIFY__.center.src = "/notification-center", App.__NOTIFY__.center.id = App.uuid(), App.__NOTIFY__.appendChild(App.__NOTIFY__.center), App.__NOTIFY__.center.onload = function () {
                    var t = App.__NOTIFY__.center.contentWindow.document,
                        e = new Date;
                    t.querySelector(".date").innerHTML = e.toString("dddd") + "<br>" + e.toString("dd") + " " + e.toString("MMMM")
                }, App.__NOTIFY__.hide ? (App.__NOTIFY__.hide = !1, App.__NOTIFY__.classList.add("OASlidingPanel"), App.__NOTIFY__.classList.add("animated"), App.__NOTIFY__.classList.remove("slideOutRight"), App.__NOTIFY__.classList.add("slideInRight")) : (App.__NOTIFY__.hide = !0, App.__NOTIFY__.classList.remove("slideInRight"), App.__NOTIFY__.classList.add("slideOutRight"))
            }
        };
        var r = new Ext.Toolbar({
            items: e
        });
        if (this.addDocked(r), window.setInterval(function () {
                Ext.getCmp("GlobalMenuDateTime").setText(Ext.Date.format(new Date, "D d M Y H:i:s "))
            }, 1e3), Ext.getCmp("GlobalMenuUser").hide(), "mobile" != Settings.TYPE) {
            Auth.user(function (t) {
                t.mail && (Ext.getCmp("GlobalMenuUser").setText(t.mail.split("@")[0]), Ext.getCmp("GlobalMenuUser").show())
            });
            for (n = 0; n < Settings.LANGS.length; n++) Ext.getCmp("GlobalMenuLang").menu.add({
                text: Settings.LANGS[n].toUpperCase(),
                handler: function (t) {
                    window.localStorage.LANG = t.text.toLowerCase(), document.location.reload(!0)
                }
            }), Ext.getCmp("GlobalMenuLang").setText(App.DEFAULT_LANG.toUpperCase())
        }
    }
}), Settings.REMOTE_API && (-1 < Settings.REMOTE_API.indexOf("https") ? document.socket = io.connect(Settings.REMOTE_API, {
    query: "engine=worker&iokey=" + setToken() + "&z=" + window.z,
    secure: !0,
    transports: ["polling"]
}) : document.socket = io.connect(Settings.REMOTE_API, {
    query: "engine=worker&iokey=" + setToken() + "&z=" + window.z,
    reconnection: !0,
    reconnectionDelay: 1e3
})), Settings.DEBUG && document.socket.on("connect", function () {
    App.unblur();
    try {
        document.querySelector(".omneedia-overlay").style.display = "none"
    } catch (t) {}
}), document.socket.on("disconnect", function () {
    Settings.DEBUG && App.blur()
}), Settings.DEBUG && document.socket.on("session", function (t) {
    t = JSON.parse(t);
    if (localStorage.getItem("session")) {
        if (localStorage.getItem("session") != t.pid) {
            localStorage.setItem("session", t.pid);
            try {
                App.blur()
            } catch (t) {}
            location.reload()
        }
    } else localStorage.setItem("session", t.pid)
}), document.socket.on("SERVER__LOG", function (t) {
    console.log("%c LOG:", "color: #00F; font-size:12px", t)
}), document.socket.on("SERVER__INFO", function (t) {
    console.info("%cINFO: \n", 'color: green; font-family:"Arial", Helevetica; font-size:10px;font-weight:bold', t)
}), document.socket.on("SERVER__WARN", function (t) {
    console.warn("%cWARN: \n", 'color: orange; font-family:"Arial", Helevetica; font-size:10px;font-weight:bold', t)
}), document.socket.on("SERVER__DEBUG", function (t) {
    console.debug("%cDEBUG: \n", 'color: black; font-family:"Arial", Helevetica; font-size:10px;font-weight:bold', t)
}), document.socket.on("SERVER__ERROR", function (t) {
    console.error("%cERROR: \n", 'color: red; font-family:"Arial", Helevetica; font-size:10px;font-weight:bold', t)
}), App.define("App.IO", {
    socket: {},
    constructor: function (t) {
        if (!t) return !1; - 1 < t.indexOf("https") ? this.socket = io(t, {
            secure: !0,
            transports: ["polling"]
        }) : this.socket = io(t, {
            transports: ["polling"]
        })
    },
    connect: function (t) {
        -1 < t.indexOf("https") ? this.socket = io(t, {
            secure: !0,
            transports: ["polling"]
        }) : this.socket = io(t)
    },
    subscribe: function (t) {
        t = t.split(" ");
        for (var e = 0; e < t.length; e++) - 1 < t[e].indexOf("#") && this.socket.emit("#create", t[e])
    },
    on: function (t, e) {
        this.socket.on(t, e)
    },
    send: function (t, e, n) {
        var r = {
            uri: t,
            data: e,
            users: n
        }; - 1 < t.indexOf("#") && this.socket.emit("#send", JSON.stringify(r))
    }
}), i18n_framework = {}, i18n = {}, _ = function (e) {
    App.DEFAULT_LANG = window.localStorage.LANG;
    try {
        return i18n[App.DEFAULT_LANG][e]
    } catch (t) {
        return e
    }
}, App.apply(App, {
    getAcceptedLangs: function (n) {
        if ("mobile" == Settings.PLATFORM) {
            navigator.globalization.getPreferredLanguage(function (t) {
                n(t.value)
            }, function (t) {
                n(navigator.language || navigator.userLanguage)
            })
        } else App.request({
            url: Settings.REMOTE_API + "i18n"
        }, function (t, e) {
            n(t ? navigator.language || navigator.userLanguage : e)
        })
    },
    loadLang: function (t, e) {
        var u = [];
        var n = "";
        if (window.localStorage.LANG && (App._lang = window.localStorage.LANG), App._lang) n = -1 < App._lang.indexOf("-") ? App._lang + "|" + App._lang : App._lang + "|" + App._lang + "," + App._lang + "-" + App._lang.toUpperCase();
        else
            for (var r = 0; r < Settings.LANGS.length; r++) console.log(Settings.LANGS[r].toLowerCase()), console.log(t.toLowerCase()), console.log(t.toLowerCase().indexOf(Settings.LANGS[r].toLowerCase())), -1 < t.toLowerCase().indexOf(Settings.LANGS[r].toLowerCase()) && (n = Settings.LANGS[r] + "|" + t);
        "" == n ? -1 < Settings.LANGS[0].indexOf("-") ? App.DEFAULT_LANG = Settings.LANGS[0] + "|" + Settings.LANGS[0] : App.DEFAULT_LANG = Settings.LANGS[0] + "|" + Settings.LANGS[0] + "," + Settings.LANGS[0] + "-" + Settings.LANGS[0].toUpperCase() : App.DEFAULT_LANG = n, Settings.DEBUG ? (Settings.i18n.push(Settings.REMOTE_API + "Contents/Culture/" + App.DEFAULT_LANG.split("|")[0] + ".js"), function t(e, n, r) {
            if (!e[n]) return r();
            var o = e[n],
                i = App.DEFAULT_LANG.split("|")[1].split(","); - 1 < i[0].indexOf("-") && (i[0] = i[0].split("-")[0] + "-" + i[0].split("-")[1].toUpperCase());
            var s = o.replace(/{lang}/g, i[0]);
            if (i[1]) var a = o.replace(/{lang}/g, i[1]);
            else a = -1 < i[0].indexOf("-") ? o.replace(/{lang}/g, i[0].split("-")[0]) : "-1";
            var c = new XMLHttpRequest;
            c.addEventListener("load", function () {
                return -1 < a.indexOf(".json") ? u.push('i18n["' + App.DEFAULT_LANG.split("|")[0] + '"]=Object.assign(i18n["' + App.DEFAULT_LANG.split("|")[0] + '"],' + this.response + ");") : u.push(this.response), t(e, n + 1, r)
            }, !1), c.addEventListener("error", function () {
                return t(e, n + 1, r)
            }, !1), c.open("GET", s), c.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), c.send()
        }(Settings.i18n, 0, function () {
            App.DEFAULT_LANG = App.DEFAULT_LANG.split("|")[0], window.localStorage.setItem("LANG", App.DEFAULT_LANG), window.eval('if (!i18n["' + App.DEFAULT_LANG + '"]) i18n["' + App.DEFAULT_LANG + '"]={};i18n_framework["' + App.DEFAULT_LANG + '"]=function(){' + u.join(" ") + "};"), i18n_framework[App.DEFAULT_LANG](), e()
        })) : (App.DEFAULT_LANG = App.DEFAULT_LANG.split("|")[0], window.localStorage.setItem("LANG", App.DEFAULT_LANG), i18n_framework[App.DEFAULT_LANG](), e())
    }
}), App.apply(App, {
    $: function (e, t) {
        if (App.isArray(e))
            for (var s = [], n = 0; n < e.length; n++) s.push(e[n]);
        else if (App.isElement(e)) s = e;
        else if ("object" == typeof e) {
            (i = document.createElement(e.type)).id = "cmp-" + App.uuid();
            var r = App.getObjectProperties(e);
            for (n = 0; n < r.length; n++) "type" != r[n] && App.setObjectProperty(i, r[n], App.getObjectProperty(e, r[n]));
            s = i;
            t && App.$(s).appendTo(App.$(t))
        } else {
            if (t) var o = t;
            else o = document;
            if (App.isElement(e)) s = e;
            else try {
                if (-1 < e.indexOf("#")) s = o.getElementById(e.split("#")[1]);
                else {
                    s = o.querySelectorAll(e);
                    App.isNodeList(s) && (s = Array.prototype.slice.call(s))
                }
            } catch (t) {
                var i;
                (i = document.createElement("div")).innerHTML = e;
                s = [];
                for (var a = 0; a < i.childNodes.length; a++) s.push(i.childNodes[a])
            }
        }
        if (!App.isArray(s)) {
            var c = [];
            c.push(s), s = c
        }
        return {
            animate: function (t, e) {
                var n = function (t) {
                    var e = {
                        animation: "animationend",
                        OAnimation: "oAnimationEnd",
                        MozAnimation: "mozAnimationEnd",
                        WebkitAnimation: "webkitAnimationEnd"
                    };
                    for (var n in e)
                        if (void 0 !== t.style[n]) return e[n]
                }(document.createElement("div"));
                return App.$(s).addClass("animated " + t).one(n, function () {
                    App.$(s).removeClass("animated " + t), "function" == typeof e && e()
                }), App.$(s)
            },
            on: function (t, e) {
                for (var n = 0; n < s.length; n++) s[n] && s[n].addEventListener(t, e)
            },
            one: function (t, e) {
                for (var n = 0; n < s.length; n++) s[n] && s[n].addEventListener(t, function (t) {
                    t.target.removeEventListener(t.type, arguments.callee), e && e()
                })
            },
            up: function (t) {
                if (!t) return App.$(s[0].parentNode);
                for (var e = s[0]; e;) {
                    if (0 < e.parentNode.querySelectorAll(t).length) return App.$(e);
                    e = e.parentNode
                }
                return !1
            },
            down: function (t) {
                if (!t) return App.$(s[0].ChildNode);
                for (var e = s[0]; e;) {
                    if (0 < e.ChildNode.querySelectorAll(t).length) return App.$(e);
                    e = e.ChildNode
                }
                return !1
            },
            get: function (t) {
                return App.$(t, s[0])
            },
            attr: function (t, e) {
                for (var n = 0; n < s.length; n++)
                    if (s[n]) {
                        if (!e) return s[n].getAttribute(t);
                        s[n].setAttribute(t, e)
                    }
                return App.$(s)
            },
            dom: function () {
                return 1 == s.length ? s[0] : s
            },
            css: function (t, e) {
                for (var n = 0; n < s.length; n++)
                    if (s[n]) {
                        if (!e) return s[n].style[t];
                        s[n].style[t] = e
                    }
                return App.$(s)
            },
            html: function (t) {
                for (var e = 0; e < s.length; e++)
                    if (s[e]) {
                        if (!t) return s[e].innerHTML;
                        s[e].innerHTML = t
                    }
                return App.$(s)
            },
            find: function (t) {
                var e = s[0].querySelectorAll(t);
                return App.$(e)
            },
            remove: function () {
                for (var t = 0; t < s.length; t++) s[t] && s[t].parentNode.removeChild(s[t]);
                return App.$(s)
            },
            click: function (t) {
                for (var e = 0; e < s.length; e++) s[e].addEventListener("click", t, !0);
                return App.$(s)
            },
            appendTo: function (e) {
                for (var t = 0; t < s.length; t++)
                    if (s[t]) {
                        if (e.dom && (e = e.dom()), App.isString(e)) try {
                            e = document.querySelector(e)
                        } catch (t) {
                            var n = document.createElement("div");
                            n.innerHTML = e, e = n
                        }
                        e && e.appendChild(s[t])
                    }
                return App.$(s)
            },
            addClass: function (t) {
                for (var e = 0; e < s.length; e++)
                    if (s[e])
                        for (var n = 0; n < t.split(" ").length; n++) s[e].classList.add(t.split(" ")[n]);
                return App.$(s[0])
            },
            hasClass: function (t) {
                for (var e = 0; e < s.length; e++)
                    if (s[e]) return s.classList.contains(className)
            },
            removeClass: function (t) {
                for (var e = 0; e < s.length; e++)
                    if (s[e])
                        for (var n = 0; n < t.split(" ").length; n++) s[e].classList.remove(t.split(" ")[n]);
                return App.$(s)
            },
            show: function () {
                for (var t = 0; t < s.length; t++) s[t] && (s[t].style.display = "");
                return App.$(s)
            },
            hide: function () {
                for (var t = 0; t < s.length; t++) s[t] && (s[t].style.display = "none");
                return App.$(s)
            },
            delay: function (t) {
                return this._delay = t, App.$(s)
            },
            fadeOut: function (t) {
                if (!this._delay) {
                    if (!t) t = 1e3;
                    return function (t, e) {
                        var n = "in" === t,
                            r = n ? 0 : 1,
                            o = 50 / e;
                        n && (App.$(s).dom().style.display = "inline", App.$(s).dom().style.opacity = r);
                        var i = window.setInterval(function () {
                            r = n ? r + o : r - o, (App.$(s).dom().style.opacity = r) <= 0 && (App.$(s).dom().style.display = "none"), (r <= 0 || 1 <= r) && window.clearInterval(i)
                        }, 50)
                    }("out", t), App.$(s)
                }
                var e = this;
                setTimeout(function () {
                    e.fadeOut(t)
                }, this._delay)
            },
            fadeIn: function (t) {
                if (!this._delay) {
                    if (!t) t = 1e3;
                    return function (t, e) {
                        var n = "in" === t,
                            r = n ? 0 : 1,
                            o = 50 / e;
                        n && (App.$(s).dom().style.display = "inline", App.$(s).dom().style.opacity = r);
                        var i = window.setInterval(function () {
                            r = n ? r + o : r - o, (App.$(s).dom().style.opacity = r) <= 0 && (App.$(s).dom().style.display = "none"), (r <= 0 || 1 <= r) && window.clearInterval(i)
                        }, 50)
                    }("in", t), App.$(s)
                }
                var e = this;
                setTimeout(function () {
                    e.fadeOut(t)
                }, this._delay)
            },
            is: function (t) {
                var e, n;
                return t.indexOf("#") ? App.$(s).dom() === t : (e = App.$(s).dom(), n = t, (e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector).call(e, n))
            },
            next: function () {
                return App.$(App.$(s).dom().nextElementSibling)
            },
            prev: function () {
                return App.$(App.$(s).dom().previousElementSibling)
            }
        }
    }
}), Ext.define("Ext.overrides.layout.container.Container", {
    override: "Ext.layout.container.Container",
    notifyOwner: function () {
        this.owner.afterLayout(this)
    }
}), Ext.define("Ext.overrides.layout.container.Container", {
    override: "Ext.layout.container.Container",
    notifyOwner: function () {
        this.owner.afterLayout(this)
    }
}), App.apply(App, {
    remote: "",
    APP: {},
    libs: [],
    namespace: Settings.NAMESPACE,
    getArray: function (t, e) {
        for (var n = [], r = 0; r < t.length; r++) n.push(t[r][e]);
        return n
    }
}), App.define("App.info", {
    statics: {
        loading: function (t) {
            t || (t = "");
            var e = document.createElement("div");
            document.body.appendChild(e);
            var n = new Spinner({
                lines: 13,
                length: 11,
                width: 5,
                radius: 17,
                corners: 1,
                rotate: 0,
                color: "#FFF",
                speed: 1,
                trail: 60,
                shadow: !1,
                hwaccel: !1,
                className: "spinner",
                zIndex: 2e9,
                top: "auto",
                left: "auto"
            }).spin(e);
            App._loading = _Overlay({
                text: t,
                spinner: n
            })
        },
        success: function (t) {
            t || (t = ""), App._loading = _Overlay({
                icon: "overlay_check",
                text: t
            })
        },
        error: function (t) {
            t || (t = ""), App._loading = _Overlay({
                icon: "overlay_error",
                text: t
            })
        },
        hide: function () {
            App._loading && App._loading.hide()
        }
    }
}), App.apply(App, {
    stores: function (t) {
        var o = 0;
        var i = [];
        if (t instanceof Ext.Component) {
            for (var e = function e(t) {
                    var n = t.items ? t.items.items : [];
                    return Ext.each(n, function (t) {
                        n = n.concat(e(t))
                    }), n
                }(t), n = 0; n < e.length; n++) e[n].store && i.push(e[n].getStore());
            return {
                get: function () {
                    return i
                },
                on: function (t, r) {
                    for (var e = 0; e < i.length; e++) i[e].on(t, function (t) {
                        var e, n;
                        e = i.length - 1, n = r, o == e && n(), o++
                    })
                }
            }
        }
        return !1
    }
}), App.apply(App, {
    get: function (t, e) {
        return e ? "object" != typeof t ? null : 0 < t.query(e).length ? t.query(e)[0] : void 0 : 0 < Ext.ComponentQuery.query(t).length ? Ext.ComponentQuery.query(t)[0] : null
    },
    getData: function (t) {
        var e = {};
        if (t instanceof Ext.Component) {
            for (var n = function e(t) {
                    var n = t.items ? t.items.items : [];
                    return Ext.each(n, function (t) {
                        n = n.concat(e(t))
                    }), n
                }(t), r = 0; r < n.length; r++) n[r].bindTo ? n[r].getValue && (e[n[r].bindTo] = n[r].getValue()) : n[r].getValue && n[r].itemId && (e[n[r].xtype + "#" + n[r].itemId] = n[r].getValue());
            return e
        }
        return {
            result: {
                message: "MISMATCHED_TYPE",
                success: !1
            }
        }
    },
    getAll: function (t, e) {
        return e ? "object" == typeof t ? t.query(e) : void 0 : Ext.ComponentQuery.query(t)
    },
    using: function (t) {
        this.namespace = Settings.NAMESPACE;
        var e = Settings.REMOTE_API + "/api/" + t + "?javascript";
        Settings.DEBUG && App.libs.push(e)
    },
    STOREMODELS: {
        tree: {
            name: "treestore",
            model: "Ext.data.TreeModel",
            store: "Ext.data.TreeStore"
        },
        events: {
            name: "eventstore",
            model: "Ext.ux.Scheduler.model.Event",
            store: "Ext.ux.Scheduler.data.EventStore"
        },
        resources: {
            name: "resourcestore",
            model: "Ext.ux.Scheduler.model.Resource",
            store: "Ext.ux.Scheduler.data.ResourceStore"
        },
        resourcestree: {
            name: "resourcestore",
            model: "Ext.ux.Scheduler.model.Resource",
            store: "Ext.ux.Scheduler.data.ResourceTreeStore"
        }
    },
    items: function () {
        return this.FORMS.items.items
    },
    FORMS: {},
    show: function (t) {
        this.FORMS.layout.setActiveItem(t)
    },
    override: function (t, e) {
        return Ext.define(Settings.NAMESPACE + ".overrides." + t, e)
    }
}), App.define("App.model", {
    statics: {
        get: function (name) {
            return eval("var _p=" + Settings.NAMESPACE + ".model." + name), _p
        },
        create: function (t) {
            return Ext.define("MODEL_" + App.uuid(), t)
        },
        define: function (t, e, n) {
            if (e.extend = n || "Ext.data.Model", e.api) {
                if (e.api instanceof Object) {
                    var r = {};
                    e.api.create && (r.create = e.api.create), e.api.read && (r.read = e.api.read), e.api.update && (r.update = e.api.update), e.api.destroy && (r.destroy = e.api.destroy);
                    var o = !1;
                    Auth.User && (o = Auth.User.pudid);
                    var i = {
                        type: "direct",
                        extraParams: {
                            pudid: o
                        },
                        api: r
                    }
                } else i = {
                    type: "direct",
                    extraParams: {
                        pudid: o
                    },
                    directFn: e.api
                };
                i && (e.proxy = i), e.api = null
            }
            if (e.db && e.db.schema && (Settings.REMOTE_API && (my_url = Settings.REMOTE_API + "/db/" + e.db.schema + ":model"), e.proxy = {
                    type: "rest",
                    extraParams: {
                        fields: Ext.encode(e.db.fields),
                        where: Ext.encode(e.db.where)
                    },
                    url: my_url
                }, e.db = null), e.requires)
                for (var s = 0; s < e.requires.length; s++) e.requires[s] = Settings.NAMESPACE + ".model." + e.requires[s];
            return Ext.define(Settings.NAMESPACE + ".model." + t, e)
        }
    }
}), App.define("App.view", {
    statics: {
        define: function (t, e) {
            if (e.requires)
                for (var n = 0; n < e.requires.length; n++) e.requires[n] = Settings.NAMESPACE + ".view." + e.requires[n];
            return Ext.define(Settings.NAMESPACE + ".view." + t, e)
        },
        create: function (t, e) {
            return e ? Ext.create(Settings.NAMESPACE + ".view." + t, e) : Ext.create(Settings.NAMESPACE + ".view." + t)
        },
        show: function (t, e) {
            alert("not yet implemented")
        },
        hide: function (t, e) {
            alert("not yet implemented")
        },
        back: function (t, e) {
            alert("not yet implemented")
        }
    }
}), App.define("App.store", {
    statics: {
        createColumns: function (o, i) {
            var s = o.getStore();
            s.on("load", function (t) {
                for (var e = t.model.getFields(), n = [], r = 0; r < e.length; r++) n.push({
                    text: e[r].name,
                    width: 150,
                    dataIndex: e[r].name
                });
                o.reconfigure(s, n), i()
            })
        },
        createEditorColumns: function (s) {
            var a = s.getStore();
            a.on("load", function (t) {
                for (var e = t.model.getFields(), n = [], r = 0; r < e.length; r++) {
                    console.log(e[r].type.type);
                    var o = {
                            text: e[r].name,
                            width: 150,
                            dataIndex: e[r].name,
                            editor: {
                                allowBlank: !0
                            },
                            field: i
                        },
                        i = {};
                    "int" == e[r].type.type && (o.editor = {
                        xtype: "numberfield",
                        allowBlank: !0
                    }, o.xtype = "numbercolumn", o.format = "0"), "date" == e[r].type.type && (delete o.editor, o.xtype = "datecolumn", o.field = {
                        xtype: "datefield",
                        allowBlank: !0,
                        format: "m/d/Y"
                    }), n.push(o)
                }
                s.reconfigure(a, n)
            })
        },
        define: function (t, e) {
            if (e.extend = "Ext.data.Store", e.model && (e.requires || (e.requires = []), e.requires[0] = e.model, e.model = Settings.NAMESPACE + ".model." + e.model), e.requires)
                for (var n = 0; n < e.requires.length; n++) e.requires[n] = Settings.NAMESPACE + ".model." + e.requires[n], e.model = e.requires[n];
            return Ext.define(Settings.NAMESPACE + ".store." + t, e)
        },
        get: function (name) {
            return eval("var _p=" + Settings.NAMESPACE + ".store." + name), _p
        },
        create: function (t, e) {
            var n = ("M" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
            if (t instanceof Object == 1) {
                if ((e = t).type) var r = App.STOREMODELS[e.type];
                else r = {
                    name: "store",
                    model: "Ext.data.Model",
                    store: "Ext.data.Store"
                };
                App.model.define(n, {}, r.model), e.model = Settings.NAMESPACE + ".model." + n, e.require = [], e.require.push(Settings.NAMESPACE + ".model." + n)
            } else {
                if (e)
                    if (e.type) r = App.STOREMODELS[e.type];
                    else r = {
                        name: "store",
                        model: "Ext.data.Model",
                        store: "Ext.data.Store"
                    };
                else r = {
                    name: "store",
                    model: "Ext.data.Model",
                    store: "Ext.data.Store"
                }, e = {}; - 1 < t.indexOf("://") ? (App.model.define(n, {
                    api: {
                        read: "App.__QUERY__.exec"
                    },
                    extraParams: {
                        __SQL__: t
                    }
                }, r.model), "string" == typeof e && (e = {}), e.model = Settings.NAMESPACE + ".model." + n, e.require = [], e.require[0] = Settings.NAMESPACE + ".model." + n) : -1 < t.indexOf(".") ? (App.model.define(n, {
                    api: {
                        read: t
                    }
                }, r.model), e.model = Settings.NAMESPACE + ".model." + n, e.require = [], e.require.push(Settings.NAMESPACE + ".model." + n)) : ("string" == typeof e && (e = {}), e.model = Settings.NAMESPACE + ".model." + t, e.require = [], e.require[0] = Settings.NAMESPACE + ".model." + t)
            }
            try {
                var o = Ext.create(r.store, e);
                o.getProxy().extraParams || (o.getProxy().extraParams = {}), t.indexOf && -1 < t.indexOf("://") ? o.getProxy().extraParams.__SQL__ = "!" + cipher.encrypt(window.z, t) : o.getProxy().extraParams.__SQL__ = t
            } catch (t) {
                console.log(t)
            }
            return o
        }
    }
}), App.define("App.controller", {
    statics: {
        define: function (t, e) {
            if (e.extend = "Ext.app.Controller", e.requires)
                for (var n = 0; n < e.requires.length; n++) e.requires[n] = Settings.NAMESPACE + ".controller." + e.requires[n];
            return Ext.define(Settings.NAMESPACE + ".controller." + t, e)
        },
        create: function (t) {
            return Ext.create(Settings.NAMESPACE + ".controller." + t)
        }
    }
}), Ext.Ajax.setDefaultHeaders = {
    "accept-encoding": !0,
    z: window.z
}, Ext.override(Ext.data.proxy.Ajax, {
    headers: {
        "accept-encoding": !0,
        z: window.z
    }
}), App.apply(App, {
    init: function (t, e) {
        App.__INIT__ = t, App.key.get("app.udid") || App.key.set("app.udid", Base64.encode(App.uuid() + "|" + navigator.userAgent)), App.udid = App.key.get("app.udid"), User = {}, App._kickstart(t, e)
    },
    _kickstart: function (e, n) {
        var r = this;
        window.Kickstart && Kickstart.load && Kickstart.load(), r.FORMS = Ext.create("Ext.container.Viewport", {
            id: "OAContainer",
            layout: "card",
            border: !1,
            items: []
        }), Ext.require(Settings.NAMESPACE + ".view." + e), Ext.onReady(function () {
            var t = Ext.create(Settings.NAMESPACE + ".view." + e);
            t.on("render", function (t) {
                window.Kickstart && Kickstart.ready && Kickstart.ready(), n && n(t)
            }), r.FORMS.add(t)
        })
    },
    load: function (t) {
        App.getAcceptedLangs(function (t) {
            App.loadLang(t, function () {
                App.libs ? App.require(App.libs, Manifest) : Manifest()
            })
        })
    }
}), Auth = {
    logout: function () {
        if (App.$(".omneedia-overlay").show(), "mobile" == Settings.TYPE) Settings.REMOTE_AUTH || (Settings.REMOTE_AUTH = ""), Auth.window = window.open(Settings.REMOTE_AUTH + "/logout", "_blank", "location=no"), Auth.window.on("loadstart", function (t) {
            Auth.window.close()
        });
        else {
            Settings.REMOTE_AUTH || (Settings.REMOTE_AUTH = "");
            var t = document.createElement("div");
            t.className = "QxOverlay", t.style.zIndex = "99999999999999999", document.getElementsByTagName("body")[0].appendChild(t), Auth.window = window.open(Settings.REMOTE_AUTH + "/logout", "_blank"), __INTERVAL__ = window.setInterval(function () {
                if (Settings.REMOTE_AUTH) var t = Settings.REMOTE_AUTH;
                else t = "";
                Ext.Ajax.request({
                    url: t + "/account",
                    method: "POST",
                    withCredentials: !0,
                    useDefaultXhrHeader: !1,
                    success: function (t, e) {
                        window.clearInterval(__INTERVAL__), location.reload(!0)
                    },
                    failure: function (t, e) {
                        window.clearInterval(__INTERVAL__), location.reload(!0)
                    }
                })
            }, 1e3)
        }
    },
    doLogin: function (n) {
        var t = document.createElement("div");
        t.className = "QxOverlay", document.getElementsByTagName("body")[0].appendChild(t);
        var e = document.createElement("div");
        "mobile" == Settings.TYPE ? App.isPhone ? e.className = "QxLoginBox smartphone animated fadeInDownBig" : e.className = "QxLoginBox tablet animated fadeInDownBig" : e.className = "QxLoginBox animated fadeInDownBig", document.getElementsByTagName("body")[0].appendChild(e), App.$('<table width="100%" height="100%" border="0"><tr class=CWaitSignOn style="display:none"><td width=100% height=100% valign=middle align="center">En attente des informations d\'identification<br>&nbsp;<br><button class=css_btn_cancel>Annuler</button></td></tr><tr class=CSignOn><td class="QxPassports" width=100% height=100% valign=middle align="center"><div class=qxAboutLogo style="position:absolute;top:10px;width:100%;margin-bottom:10px"></div><big><b>' + Settings.TITLE + "</b></big><br>&nbsp;<br>&nbsp;</td></tr></table>").appendTo(".QxLoginBox");
        for (var r = 0; r < Settings.AUTH.passports.length; r++) Settings.AUTH.passport[Settings.AUTH.passports[r]] ? (_(Settings.AUTH.passport[Settings.AUTH.passports[r]].caption) ? sign_in_with = _(Settings.AUTH.passport[Settings.AUTH.passports[r]].caption) : sign_in_with = "Sign in with " + Settings.AUTH.passports[r], Settings.AUTH.passport[Settings.AUTH.passports[r]] = {
            caption: "&nbsp;" + sign_in_with
        }) : Settings.AUTH.passport[Settings.AUTH.passports[r]] = {
            caption: "&nbsp;Sign in with " + Settings.AUTH.passports[r]
        }, App.$(".QxPassports").html(App.$(".QxPassports").html() + '<a class="button_passport ' + Settings.AUTH.passports[r] + '">' + Settings.AUTH.passport[Settings.AUTH.passports[r]].caption + "</a>");
        App.$(".css_btn_cancel").click(function () {
            App.$(".CWaitSignOn").hide(), App.$(".CSignOn").show()
        }), App.$(".button_passport").click(function (t) {
            App.$(".CWaitSignOn").show(), App.$(".CSignOn").hide();
            var e = t.target.className.split("button_passport ")[1];
            Settings.REMOTE_AUTH ? window.open(Settings.REMOTE_AUTH + "/auth/" + e, "_blank", "location=no") : window.open("/auth/" + e, "_blank").focus();
            document.socket.on("#auth", function (t) {
                Auth.User = JSON.parse(t), App.$(".QxOverlay").remove(), App.unblur(".x-panel"), App.$(".QxLoginBox").addClass("bounceOutDown"), window.setTimeout(function () {
                    App.$(".QxLoginBox").remove()
                }, 1e3), "mobile" != Settings.TYPE && (Ext.getCmp("GlobalMenuUser").setText(Auth.User.mail.split("@")[0]), Ext.getCmp("GlobalMenuUser").show()), n && n(Auth.User)
            }), document.socket.on("#failedauth", function (t) {
                App.$(".QxLoginBox").addClass("bounceOutDown"), window.setTimeout(function () {
                    App.$(".QxLoginBox").remove()
                }, 1e3), App.notify("Auth", "Vous avez bien été identifié mais vous n'avez pas accès a cette application.")
            })
        })
    },
    user: function (n) {
        if (Settings.REMOTE_AUTH) var t = Settings.REMOTE_AUTH;
        else t = "";
        Ext.Ajax.request({
            url: t + "/account",
            method: "POST",
            params: {
                udid: App.udid
            },
            withCredentials: !0,
            useDefaultXhrHeader: !1,
            success: function (t, e) {
                Auth.User = JSON.parse(t.responseText), n(Auth.User)
            },
            failure: function (t, e) {}
        })
    },
    User: {},
    login: function (n) {
        if (Settings.REMOTE_AUTH) var t = Settings.REMOTE_AUTH;
        else t = "";
        App.blur(".x-panel"), Ext.Ajax.request({
            url: t + "/account",
            method: "POST",
            params: {
                udid: App.udid
            },
            withCredentials: !0,
            useDefaultXhrHeader: !1,
            success: function (t, e) {
                if (Auth.User = JSON.parse(t.responseText), "NOT_LOGIN" == Auth.User.response) return Auth.doLogin(n);
                App.$(".QxOverlay").remove(), App.unblur(".x-panel"), App.$(".QxLoginBox").addClass("bounceOutDown"), App.$(".x-panel").addClass("QxSharp"), "mobile" == Settings.TYPE && App.$(".x-container").addClass("QxSharp"), window.setTimeout(function () {
                    App.$(".QxLoginBox").remove()
                }, 1e3), n && n(Auth.User)
            },
            failure: function (t, e) {
                Auth.doLogin(n)
            }
        })
    }
}, App.define("App.DB", {
    statics: {
        remote: "",
        namespace: "",
        DB: "",
        ajax: function (t) {
            var e = new XMLHttpRequest;
            e.open(t.type, t.url), e.setRequestHeader("Content-Type", t.contentType), e.onload = function () {
                200 === e.status ? t.success(e.responseText) : t.error && t.error(e.status)
            }, "object" == typeof t.data && null !== t.data ? e.send(JSON.stringify(t.data)) : e.send(t.data)
        },
        get: function (t, e, n) {
            var r = t.split("://")[0];
            if (Settings.DB[r]) {
                var o = [{
                    action: "__QUERY__",
                    method: "exec",
                    data: [{
                        __SQL__: "!" + cipher.encrypt(window.z, t)
                    }],
                    type: "rpc",
                    tid: 1
                }];
                this.ajax({
                    type: "post",
                    url: Settings.DB[r],
                    data: JSON.stringify(o),
                    contentType: "application/json; charset=utf-8",
                    success: function (t) {
                        if ("string" == typeof (t = JSON.parse(t))[0].data) return e(t[0].data);
                        t[0].result, e(t[0].result)
                    }
                })
            } else App.__QUERY__.exec({
                __SQL__: "!" + cipher.encrypt(window.z, t)
            }, e)
        },
        del: function (t, e, n) {
            var r = t.split("://");
            if (!Array.isArray(e)) {
                n = e;
                e = [];
                if (1 <= r[1].split("?").length) {
                    var o = r[1].split("?")[1]; - 1 < o.indexOf("=") && (o = o.split("=")[1]), e = o.split(",")
                }
            }
            var i = r[1].split("?")[0];
            r[1].split("?")[1], r = r[0];
            if (Settings.DB[r]) {
                var s = [{
                    action: "__QUERY__",
                    method: "del",
                    data: [r, i, e],
                    type: "rpc",
                    tid: 1
                }];
                this.ajax({
                    type: "post",
                    url: Settings.DB[r],
                    data: JSON.stringify(s),
                    contentType: "application/json; charset=utf-8",
                    success: function (t) {
                        if ("string" == typeof (t = JSON.parse(t))[0].data) return n(t[0].data);
                        t[0].result, n(t[0].result)
                    }
                })
            } else App.__QUERY__.del(r, i, e, n)
        },
        post: function (t, e, n) {
            var r = (o = t.split("://"))[1],
                o = o[0];
            if (Settings.DB[o]) {
                var i = [{
                    action: "__QUERY__",
                    method: "post",
                    data: [o, r, e],
                    type: "rpc",
                    tid: 1
                }];
                this.ajax({
                    type: "post",
                    url: Settings.DB[o],
                    data: JSON.stringify(i),
                    contentType: "application/json; charset=utf-8",
                    success: function (t) {
                        if ("string" == typeof (t = JSON.parse(t))[0].data) return n(t[0].data);
                        t[0].result, n(t[0].result)
                    }
                })
            } else App.__QUERY__.post(o, r, e, n)
        }
    }
}), DB = App.DB, App.apply(App, {
    notify: function (i, s, t) {
        window.APP_NOTIFIER || (APP_NOTIFIER = []);
        Settings.TITLE, Settings.NAMESPACE;
        ! function () {
            if (0 < APP_NOTIFIER.length) {
                var t = APP_NOTIFIER[APP_NOTIFIER.length - 1];
                t = 1 * t.css("top").split("px")[0] + 1 * t.css("height").split("px")[0] + 20 + ".px"
            } else t = "35px";
            var e = App.$({
                    type: "div",
                    className: "OACard",
                    style: {
                        position: "absolute",
                        right: "40px",
                        top: t,
                        width: "400px",
                        height: "100px",
                        zIndex: "99999999"
                    }
                }).appendTo("body").addClass("animated").addClass("fadeInRightBig"),
                n = App.$({
                    type: "div",
                    className: "OACardHeader"
                }).appendTo(e);
            App.$({
                type: "div",
                className: "OACardIcon"
            }).appendTo(n), App.$({
                type: "div",
                className: "OACardTitle",
                innerHTML: Settings.TITLE.toUpperCase()
            }).appendTo(n);
            var r = App.$({
                type: "div",
                className: "OACardClose"
            }).appendTo(n);
            r.hide();
            var o = App.$({
                type: "div",
                className: "OACardContent"
            }).appendTo(e);
            App.$({
                type: "span",
                className: "OACardObject",
                innerHTML: i
            }).appendTo(o), App.$({
                type: "div",
                className: "OACardSubject",
                innerHTML: s
            }).appendTo(o), r.on("click", function () {
                for (var t = 0; t < APP_NOTIFIER.length; t++) APP_NOTIFIER[t].id == r.up(".OACard").id && APP_NOTIFIER.splice(t, 1);
                r.up(".OACard").remove()
            }), n.on("mouseover", function () {
                n.get(".OACardClose").show()
            }), n.on("mouseleave", function () {
                n.get(".OACardClose").hide()
            }), APP_NOTIFIER.push(e), setTimeout(function () {
                e.removeClass("fadeInRightBig").addClass("fadeOutUpBig"), APP_NOTIFIER.shift()
            }, 5e3)
        }()
    }
});