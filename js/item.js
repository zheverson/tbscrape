var KISSY = function (a) {
    function e(a) {
        var k = {}, e;
        for (e in m)(function (b, g) {
            b[g] = function (c) {
                return h.log(c, g, a)
            }
        })(k, e);
        return k
    }

    var h, l = 0, m = {debug: 10, info: 20, warn: 30, error: 40};
    h = {
        __BUILD_TIME: "20141210150549",
        Env: {host: this},
        Config: {debug: "", fns: {}},
        version: "1.4.14",
        config: function (d, e) {
            var j, b, g = this, c, f = h.Config, s = f.fns;
            h.isObject(d) ? h.each(d, function (a, n) {
                (c = s[n]) ? c.call(g, a) : f[n] = a
            }) : (j = s[d], e === a ? b = j ? j.call(g) : f[d] : j ? b = j.call(g, e) : f[d] = e);
            return b
        },
        log: function () {
            return a
        },
        getLogger: function (a) {
            return e(a)
        },
        error: function () {
        },
        guid: function (a) {
            return (a || "") + l++
        },
        Logger: {}
    };
    h.Logger.Level = {DEBUG: "debug", INFO: "info", WARN: "warn", ERROR: "error"};
    return h
}();
(function (a, e) {
    function h() {
    }

    function l(g, i, c, f, b, k) {
        if (!i || !g)return g;
        var t, q, v, p;
        i[d] = g;
        k.push(i);
        v = a.keys(i);
        p = v.length;
        for (t = 0; t < p; t++)if (q = v[t], q !== d) {
            var h = g, m = i, x = c, F = f, H = b, K = k;
            if (x || !(q in h) || H) {
                var y = h[q], w = m[q];
                if (y === w)y === e && (h[q] = y); else if (F && (w = F.call(m, q, w)), H && w && (a.isArray(w) || a.isPlainObject(w)))w[d] ? h[q] = w[d] : (m = y && (a.isArray(y) || a.isPlainObject(y)) ? y : a.isArray(w) ? [] : {}, h[q] = m, l(m, w, x, F, j, K)); else if (w !== e && (x || !(q in h)))h[q] = w
            }
        }
        return g
    }

    function m(a, i) {
        return "constructor" ===
        a ? e : i
    }

    var d = "__MIX_CIRCULAR", k = this, j = !0, b = Object, g = b.create, c = !{toString: 1}.propertyIsEnumerable("toString"), f = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toString,toLocaleString,valueOf".split(",");
    (function (a, i) {
        for (var g in i)a[g] = i[g]
    })(a, {
        stamp: function (g, i, c) {
            var c = c || "__~ks_stamped", f = g[c];
            if (!f && !i)try {
                f = g[c] = a.guid(c)
            } catch (b) {
                f = e
            }
            return f
        }, keys: b.keys || function (a) {
            var i = [], g, b;
            for (g in a)a.hasOwnProperty(g) && i.push(g);
            if (c)for (b = f.length - 1; 0 <= b; b--)g = f[b], a.hasOwnProperty(g) &&
            i.push(g);
            return i
        }, mix: function (g, i, c, f, b) {
            "object" === typeof c && (f = c.whitelist, b = c.deep, c = c.overwrite);
            if (f && "function" !== typeof f)var h = f, f = function (i, g) {
                return a.inArray(i, h) ? g : e
            };
            c === e && (c = j);
            var t = [], q = 0;
            for (l(g, i, c, f, b, t); i = t[q++];)delete i[d];
            return g
        }, merge: function (g) {
            var g = a.makeArray(arguments), i = {}, c, f = g.length;
            for (c = 0; c < f; c++)a.mix(i, g[c]);
            return i
        }, augment: function (g, i) {
            var c = a.makeArray(arguments), f = c.length - 2, b = 1, d, t, q = c[f], v = c[f + 1];
            c[1] = i;
            a.isArray(v) || (q = v, v = e, f++);
            "boolean" !== typeof q &&
            (q = e, f++);
            for (; b < f; b++) {
                t = c[b];
                if (d = t.prototype)t = a.mix({}, d, !0, m);
                a.mix(g.prototype, t, q, v)
            }
            return g
        }, extend: function (c, i, f, b) {
            var d = i.prototype;
            d.constructor = i;
            g ? i = g(d) : (h.prototype = d, i = new h);
            i.constructor = c;
            c.prototype = a.mix(i, c.prototype);
            c.superclass = d;
            f && a.mix(i, f);
            b && a.mix(c, b);
            return c
        }, namespace: function () {
            var g = a.makeArray(arguments), i = g.length, c = null, f, b, d, t = g[i - 1] === j && i--;
            for (f = 0; f < i; f++) {
                d = ("" + g[f]).split(".");
                c = t ? k : this;
                for (b = k[d[0]] === c ? 1 : 0; b < d.length; ++b)c = c[d[b]] = c[d[b]] || {}
            }
            return c
        }
    })
})(KISSY);
(function (a, e) {
    var h = Array.prototype, l = h.indexOf, m = h.lastIndexOf, d = h.filter, k = h.every, j = h.some, b = h.map;
    a.mix(a, {
        each: function (g, c, f) {
            if (g) {
                var b, i, d = 0;
                b = g && g.length;
                i = b === e || "function" === a.type(g);
                f = f || null;
                if (i)for (i = a.keys(g); d < i.length && !(b = i[d], !1 === c.call(f, g[b], b, g)); d++); else for (i = g[0]; d < b && !1 !== c.call(f, i, d, g); i = g[++d]);
            }
            return g
        }, indexOf: l ? function (a, c) {
            return l.call(c, a)
        } : function (a, c) {
            for (var f = 0, b = c.length; f < b; ++f)if (c[f] === a)return f;
            return -1
        }, lastIndexOf: m ? function (a, c) {
            return m.call(c,
                a)
        } : function (a, c) {
            for (var f = c.length - 1; 0 <= f && c[f] !== a; f--);
            return f
        }, unique: function (g, c) {
            var f = g.slice();
            c && f.reverse();
            for (var b = 0, i, d; b < f.length;) {
                for (d = f[b]; (i = a.lastIndexOf(d, f)) !== b;)f.splice(i, 1);
                b += 1
            }
            c && f.reverse();
            return f
        }, inArray: function (g, c) {
            return -1 < a.indexOf(g, c)
        }, filter: d ? function (a, c, f) {
            return d.call(a, c, f || this)
        } : function (g, c, f) {
            var b = [];
            a.each(g, function (a, g, d) {
                c.call(f || this, a, g, d) && b.push(a)
            });
            return b
        }, map: b ? function (a, c, f) {
            return b.call(a, c, f || this)
        } : function (a, c, f) {
            for (var b =
                a.length, i = Array(b), d = 0; d < b; d++) {
                var e = "string" === typeof a ? a.charAt(d) : a[d];
                if (e || d in a)i[d] = c.call(f || this, e, d, a)
            }
            return i
        }, reduce: function (a, c, f) {
            var b = a.length;
            if ("function" !== typeof c)throw new TypeError("callback is not function!");
            if (0 === b && 2 === arguments.length)throw new TypeError("arguments invalid");
            var i = 0, d;
            if (3 <= arguments.length)d = f; else {
                do {
                    if (i in a) {
                        d = a[i++];
                        break
                    }
                    i += 1;
                    if (i >= b)throw new TypeError;
                } while (1)
            }
            for (; i < b;)i in a && (d = c.call(e, d, a[i], i, a)), i++;
            return d
        }, every: k ? function (a, c,
                                f) {
            return k.call(a, c, f || this)
        } : function (a, c, f) {
            for (var b = a && a.length || 0, i = 0; i < b; i++)if (i in a && !c.call(f, a[i], i, a))return !1;
            return !0
        }, some: j ? function (a, c, f) {
            return j.call(a, c, f || this)
        } : function (a, c, f) {
            for (var b = a && a.length || 0, i = 0; i < b; i++)if (i in a && c.call(f, a[i], i, a))return !0;
            return !1
        }, makeArray: function (b) {
            if (null == b)return [];
            if (a.isArray(b))return b;
            var c = typeof b.length, f = typeof b;
            if ("number" !== c || b.alert || "string" === f || "function" === f && !("item" in b && "number" === c))return [b];
            for (var c = [], f = 0, d = b.length; f <
            d; f++)c[f] = b[f];
            return c
        }
    })
})(KISSY);
(function (a, e) {
    function h(a) {
        var c = typeof a;
        return null == a || "object" !== c && "function" !== c
    }

    function l() {
        if (b)return b;
        var c = d;
        a.each(k, function (a) {
            c += a + "|"
        });
        c = c.slice(0, -1);
        return b = RegExp(c, "g")
    }

    function m() {
        if (g)return g;
        var c = d;
        a.each(j, function (a) {
            c += a + "|"
        });
        c += "&#(\\d{1,5});";
        return g = RegExp(c, "g")
    }

    var d = "", k = {
        "&amp;": "&",
        "&gt;": ">",
        "&lt;": "<",
        "&#x60;": "`",
        "&#x2F;": "/",
        "&quot;": '"',
        "&#x27;": "'"
    }, j = {}, b, g, c = /[\-#$\^*()+\[\]{}|\\,.?\s]/g;
    (function () {
        for (var a in k)j[k[a]] = a
    })();
    a.mix(a, {
        urlEncode: function (a) {
            return encodeURIComponent("" +
                a)
        }, urlDecode: function (a) {
            return decodeURIComponent(a.replace(/\+/g, " "))
        }, fromUnicode: function (a) {
            return a.replace(/\\u([a-f\d]{4})/ig, function (a, c) {
                return String.fromCharCode(parseInt(c, 16))
            })
        }, escapeHtml: function (a) {
            return (a + "").replace(l(), function (a) {
                return j[a]
            })
        }, escapeRegExp: function (a) {
            return a.replace(c, "\\$&")
        }, unEscapeHtml: function (a) {
            return a.replace(m(), function (a, c) {
                return k[a] || String.fromCharCode(+c)
            })
        }, param: function (c, b, i, g) {
            b = b || "&";
            i = i || "=";
            g === e && (g = !0);
            var k = [], r, j, t, q, v, p =
                a.urlEncode;
            for (r in c)if (v = c[r], r = p(r), h(v))k.push(r), v !== e && k.push(i, p(v + d)), k.push(b); else if (a.isArray(v) && v.length) {
                j = 0;
                for (q = v.length; j < q; ++j)t = v[j], h(t) && (k.push(r, g ? p("[]") : d), t !== e && k.push(i, p(t + d)), k.push(b))
            }
            k.pop();
            return k.join(d)
        }, unparam: function (c, b, i) {
            if ("string" !== typeof c || !(c = a.trim(c)))return {};
            for (var i = i || "=", d = {}, g, k = a.urlDecode, c = c.split(b || "&"), h = 0, t = c.length; h < t; ++h) {
                g = c[h].indexOf(i);
                if (-1 === g)b = k(c[h]), g = e; else {
                    b = k(c[h].substring(0, g));
                    g = c[h].substring(g + 1);
                    try {
                        g = k(g)
                    } catch (q) {
                    }
                    a.endsWith(b,
                        "[]") && (b = b.substring(0, b.length - 2))
                }
                b in d ? a.isArray(d[b]) ? d[b].push(g) : d[b] = [d[b], g] : d[b] = g
            }
            return d
        }
    });
    a.escapeHTML = a.escapeHtml;
    a.unEscapeHTML = a.unEscapeHtml
})(KISSY);
(function (a) {
    function e(a, e, m) {
        function d() {
        }

        var k = [].slice, j = k.call(arguments, 3), b = function () {
            var b = k.call(arguments);
            return e.apply(this instanceof d ? this : m || this, a ? b.concat(j) : j.concat(b))
        };
        d.prototype = e.prototype;
        b.prototype = new d;
        return b
    }

    a.mix(a, {
        noop: function () {
        }, bind: e(0, e, null, 0), rbind: e(0, e, null, 1), later: function (e, l, m, d, k) {
            var l = l || 0, j = e, b = a.makeArray(k), g;
            "string" === typeof e && (j = d[e]);
            e = function () {
                j.apply(d, b)
            };
            g = m ? setInterval(e, l) : setTimeout(e, l);
            return {
                id: g, interval: m, cancel: function () {
                    this.interval ?
                        clearInterval(g) : clearTimeout(g)
                }
            }
        }, throttle: function (e, l, m) {
            l = l || 150;
            if (-1 === l)return function () {
                e.apply(m || this, arguments)
            };
            var d = a.now();
            return function () {
                var k = a.now();
                k - d > l && (d = k, e.apply(m || this, arguments))
            }
        }, buffer: function (e, l, m) {
            function d() {
                d.stop();
                k = a.later(e, l, 0, m || this, arguments)
            }

            l = l || 150;
            if (-1 === l)return function () {
                e.apply(m || this, arguments)
            };
            var k = null;
            d.stop = function () {
                k && (k.cancel(), k = 0)
            };
            return d
        }
    })
})(KISSY);
(function (a, e) {
    function h(b, g, c) {
        var f = b, e, i, n, j;
        if (!b)return f;
        if (b[k])return c[b[k]].destination;
        if ("object" === typeof b) {
            j = b.constructor;
            if (a.inArray(j, [Boolean, String, Number, Date, RegExp]))f = new j(b.valueOf()); else if (e = a.isArray(b))f = g ? a.filter(b, g) : b.concat(); else if (i = a.isPlainObject(b))f = {};
            b[k] = j = a.guid("c");
            c[j] = {destination: f, input: b}
        }
        if (e)for (b = 0; b < f.length; b++)f[b] = h(f[b], g, c); else if (i)for (n in b)if (n !== k && (!g || g.call(b, b[n], n, b) !== d))f[n] = h(b[n], g, c);
        return f
    }

    function l(b, d, c, f) {
        if (b[j] ===
            d && d[j] === b)return m;
        b[j] = d;
        d[j] = b;
        var k = function (a, c) {
            return null !== a && a !== e && a[c] !== e
        }, i;
        for (i in d)!k(b, i) && k(d, i) && c.push("expected has key " + i + '", but missing from actual.');
        for (i in b)!k(d, i) && k(b, i) && c.push('expected missing key "' + i + '", but present in actual.');
        for (i in d)i !== j && (a.equals(b[i], d[i], c, f) || f.push('"' + i + '" was "' + (d[i] ? d[i].toString() : d[i]) + '" in expected, but was "' + (b[i] ? b[i].toString() : b[i]) + '" in actual.'));
        a.isArray(b) && a.isArray(d) && b.length !== d.length && f.push("arrays were not the same length");
        delete b[j];
        delete d[j];
        return 0 === c.length && 0 === f.length
    }

    var m = !0, d = !1, k = "__~ks_cloned", j = "__~ks_compared";
    a.mix(a, {
        equals: function (a, d, c, f) {
            c = c || [];
            f = f || [];
            return a === d ? m : a === e || null === a || d === e || null === d ? null == a && null == d : a instanceof Date && d instanceof Date ? a.getTime() === d.getTime() : "string" === typeof a && "string" === typeof d || "number" === typeof a && "number" === typeof d ? a === d : "object" === typeof a && "object" === typeof d ? l(a, d, c, f) : a === d
        }, clone: function (b, d) {
            var c = {}, f = h(b, d, c);
            a.each(c, function (a) {
                a = a.input;
                if (a[k])try {
                    delete a[k]
                } catch (c) {
                    a[k] = e
                }
            });
            c = null;
            return f
        }, now: Date.now || function () {
            return +new Date
        }
    })
})(KISSY);
(function (a, e) {
    var h = /^[\s\xa0]+|[\s\xa0]+$/g, l = String.prototype.trim, m = /\\?\{([^{}]+)\}/g;
    a.mix(a, {
        trim: l ? function (a) {
            return null == a ? "" : l.call(a)
        } : function (a) {
            return null == a ? "" : (a + "").replace(h, "")
        }, substitute: function (a, k, j) {
            return "string" !== typeof a || !k ? a : a.replace(j || m, function (a, d) {
                return "\\" === a.charAt(0) ? a.slice(1) : k[d] === e ? "" : k[d]
            })
        }, ucfirst: function (a) {
            a += "";
            return a.charAt(0).toUpperCase() + a.substring(1)
        }, startsWith: function (a, e) {
            return 0 === a.lastIndexOf(e, 0)
        }, endsWith: function (a, e) {
            var j =
                a.length - e.length;
            return 0 <= j && a.indexOf(e, j) === j
        }
    })
})(KISSY);
(function (a, e) {
    var h = {}, l = Object.prototype, m = l.toString;
    a.mix(a, {
        type: function (a) {
            return null == a ? "" + a : h[m.call(a)] || "object"
        }, isNull: function (a) {
            return null === a
        }, isUndefined: function (a) {
            return a === e
        }, isEmptyObject: function (a) {
            for (var k in a)if (k !== e)return !1;
            return !0
        }, isPlainObject: function (d) {
            if (!d || "object" !== a.type(d) || d.nodeType || d.window == d)return !1;
            var k, j;
            try {
                if ((j = d.constructor) && !l.hasOwnProperty.call(d, "constructor") && !l.hasOwnProperty.call(j.prototype, "isPrototypeOf"))return !1
            } catch (b) {
                return !1
            }
            for (k in d);
            return k === e || l.hasOwnProperty.call(d, k)
        }
    });
    a.each("Boolean,Number,String,Function,Date,RegExp,Object,Array".split(","), function (d, e) {
        h["[object " + d + "]"] = e = d.toLowerCase();
        a["is" + d] = function (d) {
            return a.type(d) === e
        }
    });
    a.isArray = Array.isArray || a.isArray
})(KISSY);
(function (a) {
    function e() {
        for (var a = 0, b; b = h[a++];)try {
            b()
        } catch (d) {
            setTimeout(function () {
                throw d;
            }, 0)
        }
        1 < a && (h = []);
        l = 0
    }

    var h = [], l = 0;
    a.setImmediate = function (a) {
        h.push(a);
        l || (l = 1, m())
    };
    var m;
    if ("function" === typeof setImmediate)m = function () {
        setImmediate(e)
    }; else if ("undefined" !== typeof process && "function" === typeof process.nextTick)m = function () {
        process.nextTick(e)
    }; else if ("undefined" !== typeof MessageChannel) {
        var d = new MessageChannel;
        d.port1.onmessage = function () {
            m = k;
            d.port1.onmessage = e;
            e()
        };
        var k = function () {
            d.port2.postMessage(0)
        };
        m = function () {
            setTimeout(e, 0);
            k()
        }
    } else m = function () {
        setTimeout(e, 0)
    }
})(KISSY);
(function (a) {
    function e(a, d) {
        for (var e = 0, h = a.length - 1, b = [], g; 0 <= h; h--)g = a[h], "." !== g && (".." === g ? e++ : e ? e-- : b[b.length] = g);
        if (d)for (; e--; e)b[b.length] = "..";
        return b = b.reverse()
    }

    var h = /^(\/?)([\s\S]+\/(?!$)|\/)?((?:\.{1,2}$|[\s\S]+?)?(\.[^.\/]*)?)$/, l = a.Path = {
        resolve: function () {
            var h = "", d, k = arguments, j, b = 0;
            for (d = k.length - 1; 0 <= d && !b; d--)j = k[d], "string" === typeof j && j && (h = j + "/" + h, b = "/" === j.charAt(0));
            h = e(a.filter(h.split("/"), function (a) {
                return !!a
            }), !b).join("/");
            return (b ? "/" : "") + h || "."
        }, normalize: function (h) {
            var d =
                "/" === h.charAt(0), k = "/" === h.slice(-1), h = e(a.filter(h.split("/"), function (a) {
                return !!a
            }), !d).join("/");
            !h && !d && (h = ".");
            h && k && (h += "/");
            return (d ? "/" : "") + h
        }, join: function () {
            var e = a.makeArray(arguments);
            return l.normalize(a.filter(e, function (a) {
                return a && "string" === typeof a
            }).join("/"))
        }, relative: function (e, d) {
            var e = l.normalize(e), d = l.normalize(d), h = a.filter(e.split("/"), function (a) {
                return !!a
            }), j = [], b, g, c = a.filter(d.split("/"), function (a) {
                return !!a
            });
            g = Math.min(h.length, c.length);
            for (b = 0; b < g && h[b] === c[b]; b++);
            for (g = b; b < h.length;)j.push(".."), b++;
            j = j.concat(c.slice(g));
            return j = j.join("/")
        }, basename: function (a, d) {
            var e;
            e = (a.match(h) || [])[3] || "";
            d && e && e.slice(-1 * d.length) === d && (e = e.slice(0, -1 * d.length));
            return e
        }, dirname: function (a) {
            var d = a.match(h) || [], a = d[1] || "", d = d[2] || "";
            if (!a && !d)return ".";
            d && (d = d.substring(0, d.length - 1));
            return a + d
        }, extname: function (a) {
            return (a.match(h) || [])[4] || ""
        }
    }
})(KISSY);
(function (a, e) {
    function h(c) {
        c._queryMap || (c._queryMap = a.unparam(c._query))
    }

    function l(a) {
        this._query = a || ""
    }

    function m(a, c) {
        return encodeURI(a).replace(c, function (a) {
            a = a.charCodeAt(0).toString(16);
            return "%" + (1 === a.length ? "0" + a : a)
        })
    }

    function d(c) {
        if (c instanceof d)return c.clone();
        var b = this;
        a.mix(b, {scheme: "", userInfo: "", hostname: "", port: "", path: "", query: "", fragment: ""});
        c = d.getComponents(c);
        a.each(c, function (c, i) {
            c = c || "";
            if ("query" === i)b.query = new l(c); else {
                try {
                    c = a.urlDecode(c)
                } catch (d) {
                }
                b[i] = c
            }
        });
        return b
    }

    var k = /[#\/\?@]/g, j = /[#\?]/g, b = /[#@]/g, g = /#/g, c = RegExp("^(?:([\\w\\d+.-]+):)?(?://(?:([^/?#@]*)@)?([\\w\\d\\-\\u0100-\\uffff.+%]*|\\[[^\\]]+\\])(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"), f = a.Path, s = {
        scheme: 1,
        userInfo: 2,
        hostname: 3,
        port: 4,
        path: 5,
        query: 6,
        fragment: 7
    };
    l.prototype = {
        constructor: l, clone: function () {
            return new l(this.toString())
        }, reset: function (a) {
            this._query = a || "";
            this._queryMap = null;
            return this
        }, count: function () {
            var c = 0, b, d;
            h(this);
            b = this._queryMap;
            for (d in b)a.isArray(b[d]) ?
                c += b[d].length : c++;
            return c
        }, has: function (c) {
            var b;
            h(this);
            b = this._queryMap;
            return c ? c in b : !a.isEmptyObject(b)
        }, get: function (a) {
            var c;
            h(this);
            c = this._queryMap;
            return a ? c[a] : c
        }, keys: function () {
            h(this);
            return a.keys(this._queryMap)
        }, set: function (c, b) {
            var d;
            h(this);
            d = this._queryMap;
            "string" === typeof c ? this._queryMap[c] = b : (c instanceof l && (c = c.get()), a.each(c, function (a, c) {
                d[c] = a
            }));
            return this
        }, remove: function (a) {
            h(this);
            a ? delete this._queryMap[a] : this._queryMap = {};
            return this
        }, add: function (a, c) {
            var b,
                d;
            if ("string" === typeof a)h(this), b = this._queryMap, d = b[a], d = d === e ? c : [].concat(d).concat(c), b[a] = d; else for (b in a instanceof l && (a = a.get()), a)this.add(b, a[b]);
            return this
        }, toString: function (c) {
            h(this);
            return a.param(this._queryMap, e, e, c)
        }
    };
    d.prototype = {
        constructor: d, clone: function () {
            var c = new d, b = this;
            a.each(s, function (a, d) {
                c[d] = b[d]
            });
            c.query = c.query.clone();
            return c
        }, resolve: function (c) {
            "string" === typeof c && (c = new d(c));
            var b = 0, g, e = this.clone();
            a.each("scheme,userInfo,hostname,port,path,query,fragment".split(","),
                function (d) {
                    if (d === "path")if (b)e[d] = c[d]; else {
                        if (d = c.path) {
                            b = 1;
                            if (!a.startsWith(d, "/"))if (e.hostname && !e.path)d = "/" + d; else if (e.path) {
                                g = e.path.lastIndexOf("/");
                                g !== -1 && (d = e.path.slice(0, g + 1) + d)
                            }
                            e.path = f.normalize(d)
                        }
                    } else if (d === "query") {
                        if (b || c.query.toString()) {
                            e.query = c.query.clone();
                            b = 1
                        }
                    } else if (b || c[d]) {
                        e[d] = c[d];
                        b = 1
                    }
                });
            return e
        }, getScheme: function () {
            return this.scheme
        }, setScheme: function (a) {
            this.scheme = a;
            return this
        }, getHostname: function () {
            return this.hostname
        }, setHostname: function (a) {
            this.hostname =
                a;
            return this
        }, setUserInfo: function (a) {
            this.userInfo = a;
            return this
        }, getUserInfo: function () {
            return this.userInfo
        }, setPort: function (a) {
            this.port = a;
            return this
        }, getPort: function () {
            return this.port
        }, setPath: function (a) {
            this.path = a;
            return this
        }, getPath: function () {
            return this.path
        }, setQuery: function (c) {
            "string" === typeof c && (a.startsWith(c, "?") && (c = c.slice(1)), c = new l(m(c, b)));
            this.query = c;
            return this
        }, getQuery: function () {
            return this.query
        }, getFragment: function () {
            return this.fragment
        }, setFragment: function (c) {
            a.startsWith(c,
                "#") && (c = c.slice(1));
            this.fragment = c;
            return this
        }, isSameOriginAs: function (a) {
            return this.hostname.toLowerCase() === a.hostname.toLowerCase() && this.scheme.toLowerCase() === a.scheme.toLowerCase() && this.port.toLowerCase() === a.port.toLowerCase()
        }, toString: function (c) {
            var b = [], d, e;
            if (d = this.scheme)b.push(m(d, k)), b.push(":");
            if (d = this.hostname) {
                b.push("//");
                if (e = this.userInfo)b.push(m(e, k)), b.push("@");
                b.push(encodeURIComponent(d));
                if (e = this.port)b.push(":"), b.push(e)
            }
            if (e = this.path)d && !a.startsWith(e, "/") &&
            (e = "/" + e), e = f.normalize(e), b.push(m(e, j));
            if (c = this.query.toString.call(this.query, c))b.push("?"), b.push(c);
            if (c = this.fragment)b.push("#"), b.push(m(c, g));
            return b.join("")
        }
    };
    d.Query = l;
    d.getComponents = function (b) {
        var d = (b || "").match(c) || [], f = {};
        a.each(s, function (a, c) {
            f[c] = d[a]
        });
        return f
    };
    a.Uri = d
})(KISSY);
(function (a, e) {
    function h(a) {
        var c = 0;
        return parseFloat(a.replace(/\./g, function () {
            return 0 === c++ ? "." : ""
        }))
    }

    function l(a, c) {
        var b;
        c.trident = 0.1;
        if ((b = a.match(/Trident\/([\d.]*)/)) && b[1])c.trident = h(b[1]);
        c.core = "trident"
    }

    function m(a) {
        var c, b;
        return (c = a.match(/MSIE ([^;]*)|Trident.*; rv(?:\s|:)?([0-9.]+)/)) && (b = c[1] || c[2]) ? h(b) : 0
    }

    function d(a) {
        var c, b = "", d = "", f, g = [6, 9], t, q = j && j.createElement("div"), v = [], p = {
            webkit: e,
            trident: e,
            gecko: e,
            presto: e,
            chrome: e,
            safari: e,
            firefox: e,
            ie: e,
            ieMode: e,
            opera: e,
            mobile: e,
            core: e,
            shell: e,
            phantomjs: e,
            os: e,
            ipad: e,
            iphone: e,
            ipod: e,
            ios: e,
            android: e,
            nodejs: e
        };
        q && q.getElementsByTagName && (q.innerHTML = "<\!--[if IE {{version}}]><s></s><![endif]--\>".replace("{{version}}", ""), v = q.getElementsByTagName("s"));
        if (0 < v.length) {
            l(a, p);
            f = g[0];
            for (g = g[1]; f <= g; f++)if (q.innerHTML = "<\!--[if IE {{version}}]><s></s><![endif]--\>".replace("{{version}}", f), 0 < v.length) {
                p[d = "ie"] = f;
                break
            }
            if (!p.ie && (t = m(a)))p[d = "ie"] = t
        } else if ((f = a.match(/AppleWebKit\/*\s*([\d.]*)/)) && f[1]) {
            p[b = "webkit"] = h(f[1]);
            if ((f =
                    a.match(/OPR\/(\d+\.\d+)/)) && f[1])p[d = "opera"] = h(f[1]); else if ((f = a.match(/Chrome\/([\d.]*)/)) && f[1])p[d = "chrome"] = h(f[1]); else if ((f = a.match(/\/([\d.]*) Safari/)) && f[1])p[d = "safari"] = h(f[1]);
            if (/ Mobile\//.test(a) && a.match(/iPad|iPod|iPhone/)) {
                p.mobile = "apple";
                if ((f = a.match(/OS ([^\s]*)/)) && f[1])p.ios = h(f[1].replace("_", "."));
                c = "ios";
                if ((f = a.match(/iPad|iPod|iPhone/)) && f[0])p[f[0].toLowerCase()] = p.ios
            } else if (/ Android/i.test(a)) {
                if (/Mobile/.test(a) && (c = p.mobile = "android"), (f = a.match(/Android ([^\s]*);/)) &&
                    f[1])p.android = h(f[1])
            } else if (f = a.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/))p.mobile = f[0].toLowerCase();
            if ((f = a.match(/PhantomJS\/([^\s]*)/)) && f[1])p.phantomjs = h(f[1])
        } else if ((f = a.match(/Presto\/([\d.]*)/)) && f[1]) {
            if (p[b = "presto"] = h(f[1]), (f = a.match(/Opera\/([\d.]*)/)) && f[1]) {
                p[d = "opera"] = h(f[1]);
                if ((f = a.match(/Opera\/.* Version\/([\d.]*)/)) && f[1])p[d] = h(f[1]);
                if ((f = a.match(/Opera Mini[^;]*/)) && f)p.mobile = f[0].toLowerCase(); else if ((f = a.match(/Opera Mobi[^;]*/)) && f)p.mobile = f[0]
            }
        } else if (t =
                m(a))p[d = "ie"] = t, l(a, p); else if (f = a.match(/Gecko/)) {
            p[b = "gecko"] = 0.1;
            if ((f = a.match(/rv:([\d.]*)/)) && f[1])p[b] = h(f[1]), /Mobile|Tablet/.test(a) && (p.mobile = "firefox");
            if ((f = a.match(/Firefox\/([\d.]*)/)) && f[1])p[d = "firefox"] = h(f[1])
        }
        c || (/windows|win32/i.test(a) ? c = "windows" : /macintosh|mac_powerpc/i.test(a) ? c = "macintosh" : /linux/i.test(a) ? c = "linux" : /rhino/i.test(a) && (c = "rhino"));
        p.os = c;
        p.core = p.core || b;
        p.shell = d;
        p.ieMode = p.ie && j.documentMode || p.ie;
        return p
    }

    var k = a.Env.host, j = k.document, k = k.navigator, b = KISSY.UA =
        d(k && k.userAgent || "");
    if ("object" === typeof process) {
        var g, c;
        if ((g = process.versions) && (c = g.node))b.os = process.platform, b.nodejs = h(c)
    }
    b.getDescriptorFromUserAgent = d;
    g = "webkit,trident,gecko,presto,chrome,safari,firefox,ie,opera".split(",");
    c = j && j.documentElement;
    var f = "";
    c && (a.each(g, function (a) {
        var c = b[a];
        c && (f += " ks-" + a + (parseInt(c) + ""), f += " ks-" + a)
    }), a.trim(f) && (c.className = a.trim(c.className + f)))
})(KISSY);
(function (a, e) {
    function h(a) {
        if (x[a])return x[a];
        if (!u || a in u)x[a] = {name: a, prefix: ""}; else {
            for (var c = a.charAt(0).toUpperCase() + a.slice(1), b, f = d.length; f--;)b = d[f] + c, b in u && (x[a] = {
                name: b,
                prefix: d[f]
            });
            x[a] = x[a] || {name: a, prefix: !1}
        }
        return x[a]
    }

    var l = a.Env.host, m = a.UA, d = ["", "Webkit", "Moz", "O", "ms"], k = l.document || {}, j, b, g, c, f, s, i, n = k.documentElement, u, r = !0, o = !1, t = "ontouchstart" in k && !m.phantomjs, q = m.ieMode;
    if (n && (n.querySelector && 8 !== q && (o = !0), u = n.style, a.each(d, function (a) {
            var b = a ? a + "Transition" : "transition",
                d = a ? a + "Transform" : "transform";
            f === e && b in u && (f = a, g = b);
            s === e && d in u && (s = a, c = d)
        }), r = "classList" in n, m = l.navigator || {}, j = "msPointerEnabled" in m, b = "pointerEnabled" in m, c))try {
        var v = k.createElement("p");
        n.insertBefore(v, n.firstChild);
        v.style[c] = "translate3d(1px,1px,1px)";
        var p = l.getComputedStyle(v), E = p.getPropertyValue(c) || p[c];
        n.removeChild(v);
        i = E !== e && 0 < E.length && "none" !== E
    } catch (L) {
        i = !0
    }
    var x = {};
    a.Features = {
        isMsPointerSupported: function () {
            return j
        }, isPointerSupported: function () {
            return b
        }, isTouchEventSupported: function () {
            return t
        },
        isTouchGestureSupported: function () {
            return t || b || j
        }, isDeviceMotionSupported: function () {
            return !!l.DeviceMotionEvent
        }, isHashChangeSupported: function () {
            return "onhashchange" in l && (!q || 7 < q)
        }, isTransitionSupported: function () {
            return f !== e
        }, isTransformSupported: function () {
            return s !== e
        }, isTransform3dSupported: function () {
            return i
        }, isClassListSupported: function () {
            return r
        }, isQuerySelectorSupported: function () {
            return !a.config("dom/selector") && o
        }, isIELessThan: function (a) {
            return !!(q && q < a)
        }, getTransitionPrefix: function () {
            return f
        },
        getTransformPrefix: function () {
            return s
        }, getTransitionProperty: function () {
            return g
        }, getTransformProperty: function () {
            return c
        }, getVendorCssPropPrefix: function (a) {
            return h(a).prefix
        }, getVendorCssPropName: function (a) {
            return h(a).name
        }
    }
})(KISSY);
(function (a) {
    (a.Loader = {}).Status = {ERROR: -1, INIT: 0, LOADING: 1, LOADED: 2, READY_TO_ATTACH: 3, ATTACHING: 4, ATTACHED: 5}
})(KISSY);
(function (a) {
    function e(a) {
        if ("string" === typeof a)return h(a);
        for (var c = [], b = 0, d = a.length; b < d; b++)c[b] = h(a[b]);
        return c
    }

    function h(c) {
        "/" === c.charAt(c.length - 1) && (c += "index");
        a.endsWith(c, ".js") && (c = c.slice(0, -3));
        return c
    }

    function l(c, b) {
        var d = b.indexOf("!");
        if (-1 !== d) {
            var f = b.substring(0, d), b = b.substring(d + 1);
            a.use(f, {
                sync: !0, success: function (a, d) {
                    d.alias && (b = d.alias(c, b, f))
                }
            })
        }
        return b
    }

    var m = a.Loader, d = a.Path, k = a.Env.host, j = a.startsWith, b = m.Status, g = b.ATTACHED, c = b.READY_TO_ATTACH, f = b.LOADED, s =
        b.ATTACHING, i = b.ERROR, n = m.Utils = {}, u = k.document;
    a.mix(n, {
        docHead: function () {
            return u.getElementsByTagName("head")[0] || u.documentElement
        }, normalDepModuleName: function (a, c) {
            var b = 0, f;
            if (!c)return c;
            if ("string" === typeof c)return j(c, "../") || j(c, "./") ? d.resolve(d.dirname(a), c) : d.normalize(c);
            for (f = c.length; b < f; b++)c[b] = n.normalDepModuleName(a, c[b]);
            return c
        }, createModulesInfo: function (c, b) {
            a.each(b, function (a) {
                n.createModuleInfo(c, a)
            })
        }, createModuleInfo: function (c, b, d) {
            var b = h(b), f = c.Env.mods, g = f[b];
            return g ? g : f[b] = g = new m.Module(a.mix({name: b, runtime: c}, d))
        }, getModules: function (c, b) {
            var d = [c], f, g, e, i, h = c.Env.mods;
            a.each(b, function (b) {
                f = h[b];
                !f || "css" !== f.getType() ? (g = n.unalias(c, b), (e = a.reduce(g, function (a, c) {
                    i = h[c];
                    return a && i && i.status >= s
                }, !0)) ? d.push(h[g[0]].exports) : d.push(null)) : d.push(void 0)
            });
            return d
        }, attachModsRecursively: function (a, c) {
            var b, d = a.length;
            for (b = 0; b < d; b++)n.attachModRecursively(a[b], c)
        }, checkModsLoadRecursively: function (a, c, b, d, f) {
            var b = b || [], f = f || {}, g, e = 1, i = a.length,
                h = b.length;
            for (g = 0; g < i; g++)e = e && n.checkModLoadRecursively(a[g], c, b, d, f), b.length = h;
            return !!e
        }, checkModLoadRecursively: function (a, b, d, g, e) {
            var h, k = b.Env.mods[a];
            if (a in e)return e[a];
            if (!k)return e[a] = !1;
            h = k.status;
            return h === i ? (g.push(k), e[a] = !1) : h >= c ? e[a] = !0 : h !== f ? e[a] = !1 : n.checkModsLoadRecursively(k.getNormalizedRequires(), b, d, g, e) ? (k.status = c, e[a] = !0) : e[a] = !1
        }, attachModRecursively: function (a, c) {
            var b = c.Env.mods[a];
            b.status >= s || (b.status = s, b.cjs || n.attachModsRecursively(b.getNormalizedRequires(),
                c), n.attachMod(c, b))
        }, attachMod: function (c, b) {
            var d = b.factory;
            if ("function" === typeof d) {
                var f;
                b.cjs && 1 < d.length && (f = a.bind(b.require, b));
                d = d.apply(b, b.cjs ? [c, f, b.exports, b] : n.getModules(c, b.getRequiresWithAlias()));
                void 0 !== d && (b.exports = d)
            } else b.exports = d;
            b.status = g
        }, getModNamesAsArray: function (a) {
            "string" === typeof a && (a = a.replace(/\s+/g, "").split(","));
            return a
        }, normalizeModNames: function (a, c, b) {
            return n.unalias(a, n.normalizeModNamesWithAlias(a, c, b))
        }, unalias: function (a, c) {
            for (var b = [].concat(c),
                     d, f, g, i = 0, h, k = a.Env.mods; !i;) {
                i = 1;
                for (d = b.length - 1; 0 <= d; d--)if ((f = k[b[d]]) && "alias" in f) {
                    i = 0;
                    g = f.alias;
                    "string" === typeof g && (g = [g]);
                    for (h = g.length - 1; 0 <= h; h--)g[h] || g.splice(h, 1);
                    b.splice.apply(b, [d, 1].concat(e(g)))
                }
            }
            return b
        }, normalizeModNamesWithAlias: function (a, c, b) {
            var d = [], f, g;
            if (c) {
                f = 0;
                for (g = c.length; f < g; f++)c[f] && d.push(l(a, e(c[f])))
            }
            b && (d = n.normalDepModuleName(b, d));
            return d
        }, registerModule: function (c, b, d, g) {
            var b = h(b), e = c.Env.mods, i = e[b];
            i && void 0 !== i.factory || (n.createModuleInfo(c, b), i = e[b],
                a.mix(i, {name: b, status: f, factory: d}), a.mix(i, g))
        }, getHash: function (a) {
            var c = 5381, b;
            for (b = a.length; -1 < --b;)c = (c << 5) + c + a.charCodeAt(b);
            return c + ""
        }, getRequiresFromFn: function (a) {
            var c = [];
            a.toString().replace(r, "").replace(o, function (a, b) {
                c.push(b.match(/^\s*["']([^'"\s]+)["']\s*$/)[1])
            });
            return c
        }
    });
    var r = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg, o = /[^.'"]\s*require\s*\(([^)]+)\)/g
})(KISSY);
(function (a) {
    function e(a, b) {
        return b in a ? a[b] : a.runtime.Config[b]
    }

    function h(c) {
        a.mix(this, c)
    }

    function l(c) {
        this.exports = {};
        this.status = k.Status.INIT;
        this.factory = this.name = void 0;
        this.cjs = 1;
        a.mix(this, c);
        this.waitedCallbacks = []
    }

    function m(a) {
        for (var b = [], d = 0; d < a.length; d++)b[d] = a[d];
        return b
    }

    function d(a) {
        "function" === typeof a && (a = {success: a});
        if (a && a.success) {
            var b = a.success;
            a.success = function () {
                b.apply(this, m(arguments).slice(1))
            };
            a.sync = 1;
            return a
        }
    }

    var k = a.Loader, j = a.Path, b = k.Utils;
    h.prototype =
    {
        constructor: h, reset: function (c) {
        a.mix(this, c)
    }, getTag: function () {
        return e(this, "tag")
    }, getName: function () {
        return this.name
    }, getBase: function () {
        return e(this, "base")
    }, getPrefixUriForCombo: function () {
        var a = this.name;
        return this.getBase() + (a && !this.isIgnorePackageNameInUri() ? a + "/" : "")
    }, getPackageUri: function () {
        this.packageUri = new a.Uri(this.getPrefixUriForCombo());
        return this.packageUri
    }, getBaseUri: function () {
        return e(this, "baseUri")
    }, isDebug: function () {
        return e(this, "debug")
    }, isIgnorePackageNameInUri: function () {
        return e(this,
            "ignorePackageNameInUri")
    }, getCharset: function () {
        return e(this, "charset")
    }, isCombine: function () {
        return e(this, "combine")
    }, getGroup: function () {
        return e(this, "group")
    }
    };
    k.Package = h;
    l.prototype = {
        kissy: 1, constructor: l, use: function (a, d) {
            a = b.getModNamesAsArray(a);
            return KISSY.use(b.normalDepModuleName(this.name, a), d)
        }, resolve: function (a) {
            return this.getFullPathUri().resolve(a)
        }, resolveByName: function (a) {
            return b.normalDepModuleName(this.name, a)
        }, require: function (c) {
            if ("string" === typeof c)return a.require(c,
                this.name);
            for (var b = c, g = 0; g < b.length; g++)b[g] = this.resolveByName(b[g]);
            g = m(arguments);
            g[0] = b;
            g[1] = d(g[1]);
            a.use.apply(a, g)
        }, wait: function (a) {
            this.waitedCallbacks.push(a)
        }, notifyAll: function () {
            for (var a, b = this.waitedCallbacks.length, d = 0; d < b; d++) {
                a = this.waitedCallbacks[d];
                try {
                    a(this)
                } catch (g) {
                    setTimeout(function () {
                        throw g;
                    }, 0)
                }
            }
            this.waitedCallbacks = []
        }, getType: function () {
            var a = this.type;
            a || (this.type = a = ".css" === j.extname(this.name).toLowerCase() ? "css" : "js");
            return a
        }, getFullPathUri: function () {
            var c,
                b, d, g;
            if (!this.fullPathUri) {
                if (this.fullpath)b = new a.Uri(this.fullpath); else {
                    b = this.getPackage();
                    c = b.getBaseUri();
                    g = this.getPath();
                    if (b.isIgnorePackageNameInUri() && (d = b.name))g = j.relative(d, g);
                    b = c.resolve(g);
                    if (c = this.getTag())c += "." + this.getType(), b.query.set("t", c)
                }
                this.fullPathUri = b
            }
            return this.fullPathUri
        }, getFullPath: function () {
            var a;
            this.fullpath || (a = this.getFullPathUri(), this.fullpath = a.toString());
            return this.fullpath
        }, getPath: function () {
            var a;
            if (!(a = this.path)) {
                a = this.name;
                var b = "." + this.getType(),
                    d = "-min";
                a = j.join(j.dirname(a), j.basename(a, b));
                this.getPackage().isDebug() && (d = "");
                a = this.path = a + d + b
            }
            return a
        }, getName: function () {
            return this.name
        }, getPackage: function () {
            var b;
            if (!(b = this.packageInfo)) {
                var d = this.name;
                b = this.runtime.config("packages");
                var d = d + "/", e = "", i;
                for (i in b)a.startsWith(d, i + "/") && i.length > e.length && (e = i);
                b = this.packageInfo = b[e] || g
            }
            return b
        }, getTag: function () {
            return this.tag || this.getPackage().getTag()
        }, getCharset: function () {
            return this.charset || this.getPackage().getCharset()
        },
        getRequiresWithAlias: function () {
            var a = this.requiresWithAlias, d = this.requires;
            if (!d || 0 === d.length)return d || [];
            a || (this.requiresWithAlias = a = b.normalizeModNamesWithAlias(this.runtime, d, this.name));
            return a
        }, getRequiredMods: function () {
            var c = this.runtime;
            return a.map(this.getNormalizedRequires(), function (a) {
                return b.createModuleInfo(c, a)
            })
        }, getNormalizedRequires: function () {
            var a, d = this.normalizedRequiresStatus, g = this.status, e = this.requires;
            if (!e || 0 === e.length)return e || [];
            if ((a = this.normalizedRequires) &&
                d === g)return a;
            this.normalizedRequiresStatus = g;
            return this.normalizedRequires = b.normalizeModNames(this.runtime, e, this.name)
        }
    };
    k.Module = l;
    var g = new h({name: "", runtime: a})
})(KISSY);
(function (a) {
    function e(a) {
        var d = 0;
        if (m.webkit)a.sheet && (d = 1); else if (a.sheet)try {
            a.sheet.cssRules && (d = 1)
        } catch (c) {
            "NS_ERROR_DOM_SECURITY_ERR" === c.name && (d = 1)
        }
        return d
    }

    function h() {
        for (var b in j) {
            var d = j[b], c = d.node;
            e(c, b) && (d.callback && d.callback.call(c), delete j[b])
        }
        k = a.isEmptyObject(j) ? 0 : setTimeout(h, l)
    }

    var l = 30, m = a.UA, d = a.Loader.Utils, k = 0, j = {};
    d.pollCss = function (a, d) {
        var c;
        c = j[a.href] = {};
        c.node = a;
        c.callback = d;
        k || h()
    };
    d.isCssLoaded = e
})(KISSY);
(function (a) {
    var e = a.Env.host.document, h = a.Loader.Utils, l = a.Path, m = {}, d, k = a.UA;
    a.getScript = function (j, b, g) {
        function c() {
            var a = o.readyState;
            if (!a || "loaded" === a || "complete" === a)o.onreadystatechange = o.onload = null, t(0)
        }

        var f = b, s = 0, i, n, u, r;
        a.startsWith(l.extname(j).toLowerCase(), ".css") && (s = 1);
        a.isPlainObject(f) && (b = f.success, i = f.error, n = f.timeout, g = f.charset, u = f.attrs);
        f = m[j] = m[j] || [];
        f.push([b, i]);
        if (1 < f.length)return f.node;
        var o = e.createElement(s ? "link" : "script");
        u && a.each(u, function (a, b) {
            o.setAttribute(b,
                a)
        });
        g && (o.charset = g);
        s ? (o.href = j, o.rel = "stylesheet") : (o.src = j, o.async = !0);
        f.node = o;
        var t = function (b) {
            var c;
            if (r) {
                r.cancel();
                r = void 0
            }
            a.each(m[j], function (a) {
                (c = a[b]) && c.call(o)
            });
            delete m[j]
        }, b = "onload" in o, g = a.Config.forceCssPoll || k.webkit && 536 > k.webkit;
        s && g && b && (b = !1);
        b ? (o.onload = c, o.onerror = function () {
            o.onerror = null;
            t(1)
        }) : s ? h.pollCss(o, function () {
            t(0)
        }) : o.onreadystatechange = c;
        n && (r = a.later(function () {
            t(1)
        }, 1E3 * n));
        d || (d = h.docHead());
        s ? d.appendChild(o) : d.insertBefore(o, d.firstChild);
        return o
    }
})(KISSY);
(function (a, e) {
    function h(b) {
        b = b.replace(/\\/g, "/");
        "/" !== b.charAt(b.length - 1) && (b += "/");
        k ? b = k.resolve(b) : (a.startsWith(b, "file:") || (b = "file:" + b), b = new a.Uri(b));
        return b
    }

    var l = a.Loader, m = l.Utils, d = a.Env.host.location, k, j, b = a.Config.fns;
    if (!a.UA.nodejs && d && (j = d.href))k = new a.Uri(j);
    a.Config.loadModsFn = function (b, c) {
        a.getScript(b.fullpath, c)
    };
    b.packages = function (b) {
        var c, d = this.Config, k = d.packages = d.packages || {};
        return b ? (a.each(b, function (b, d) {
            c = b.name || d;
            var f = h(b.base || b.path);
            b.name = c;
            b.base = f.toString();
            b.baseUri = f;
            b.runtime = a;
            delete b.path;
            k[c] ? k[c].reset(b) : k[c] = new l.Package(b)
        }), e) : !1 === b ? (d.packages = {}, e) : k
    };
    b.modules = function (b) {
        var c = this;
        b && a.each(b, function (b, d) {
            var e = m.createModuleInfo(c, d, b);
            e.status === l.Status.INIT && a.mix(e, b)
        })
    };
    b.base = function (a) {
        var b = this.Config;
        if (!a)return b.base;
        a = h(a);
        b.base = a.toString();
        b.baseUri = a;
        return e
    }
})(KISSY);
(function (a, e) {
    function h(b, c, d, f, h) {
        var i = c && c.length, j = [], l = [];
        a.each(c, function (c) {
            var q, m = {
                timeout: h, success: function () {
                    l.push(c);
                    q && r && (g.registerModule(b, q.name, r.factory, r.config), r = e);
                    --i || d(l, j)
                }, error: function () {
                    j.push(c);
                    --i || d(l, j)
                }, charset: f
            };
            c.combine || (q = c.mods[0], "css" === q.getType() ? q = e : k && (o = q.name, a.now(), m.attrs = {"data-mod-name": q.name}));
            a.Config.loadModsFn(c, m)
        })
    }

    function l(b, c) {
        a.mix(this, {runtime: b, waitingModules: c})
    }

    function m(a, b) {
        if (!a && "function" === typeof b && 1 < b.length) {
            var c =
                g.getRequiresFromFn(b);
            c.length && (a = a || {}, a.requires = c)
        } else a && a.requires && !a.cjs && (a.cjs = 0);
        return a
    }

    function d(a, b) {
        for (var a = a.split(/\//), b = b.split(/\//), c = Math.min(a.length, b.length), d = 0; d < c && a[d] === b[d]; d++);
        return a.slice(0, d).join("/") + "/"
    }

    var k = 10 > a.UA.ieMode, j = a.Loader, b = j.Status, g = j.Utils, c = g.getHash, f = b.LOADING, s = b.LOADED, i = b.READY_TO_ATTACH, n = b.ERROR, u = a.now();
    l.groupTag = u;
    var r, o;
    l.add = function (b, c, d, f, h) {
        if (3 === h && a.isArray(c))var i = c, c = d, d = {requires: i, cjs: 1};
        if ("function" === typeof b ||
            1 === h)if (d = c, c = b, d = m(d, c), k) {
            for (var b = a.Env.host.document.getElementsByTagName("script"), j, h = b.length - 1; 0 <= h; h--)if (i = b[h], "interactive" === i.readyState) {
                j = i;
                break
            }
            b = j ? j.getAttribute("data-mod-name") : o;
            g.registerModule(f, b, c, d);
            o = null
        } else r = {factory: c, config: d}; else k ? o = null : r = e, d = m(d, c), g.registerModule(f, b, c, d)
    };
    a.augment(l, {
        use: function (b) {
            var c = a.Config.timeout, d = this.runtime, b = a.keys(this.calculate(b));
            g.createModulesInfo(d, b);
            b = this.getComboUrls(b);
            a.each(b.css, function (b) {
                h(d, b, function (b,
                                  c) {
                    a.each(b, function (b) {
                        a.each(b.mods, function (b) {
                            g.registerModule(d, b.name, a.noop);
                            b.notifyAll()
                        })
                    });
                    a.each(c, function (b) {
                        a.each(b.mods, function (a) {
                            a.status = n;
                            a.notifyAll()
                        })
                    })
                }, b.charset, c)
            });
            a.each(b.js, function (b) {
                h(d, b, function () {
                    a.each(b, function (b) {
                        a.each(b.mods, function (a) {
                            a.factory || (a.status = n);
                            a.notifyAll()
                        })
                    })
                }, b.charset, c)
            })
        }, calculate: function (a, b, c) {
            var d, e, h, k, j = this.waitingModules, l = this.runtime, c = c || {}, b = b || {};
            for (d = 0; d < a.length; d++)e = a[d], b[e] || (b[e] = 1, h = g.createModuleInfo(l, e),
                k = h.status, k >= i || (k !== s && !j.contains(e) && (k !== f && (h.status = f, c[e] = 1), h.wait(function (a) {
                j.remove(a.name);
                j.notifyAll()
            }), j.add(e)), this.calculate(h.getNormalizedRequires(), b, c)));
            return c
        }, getComboMods: function (b, c) {
            for (var f = {}, e, h = this.runtime, i = 0, k = b.length, j, l, m, o, n, s, r, G, I; i < k; ++i) {
                j = b[i];
                j = g.createModuleInfo(h, j);
                m = j.getType();
                I = j.getFullPath();
                l = j.getPackage();
                r = l.name;
                n = l.getCharset();
                o = l.getTag();
                G = l.getGroup();
                s = l.getPrefixUriForCombo();
                e = l.getPackageUri();
                var z = r;
                (j.canBeCombined = l.isCombine() &&
                    a.startsWith(I, s)) && G ? (z = G + "_" + n + "_" + u, (l = c[z]) ? l.isSameOriginAs(e) ? l.setPath(d(l.getPath(), e.getPath())) : (z = r, c[r] = e) : c[z] = e.clone()) : c[r] = e;
                e = f[m] = f[m] || {};
                (m = e[z]) ? 1 === m.tags.length && m.tags[0] === o || m.tags.push(o) : (m = e[z] = [], m.charset = n, m.tags = [o]);
                m.push(j)
            }
            return f
        }, getComboUrls: function (a) {
            var b = this.runtime.Config, d = b.comboPrefix, f = b.comboSep, e = b.comboMaxFileNum, b = b.comboMaxUrlLength, g = {}, a = this.getComboMods(a, g), h = {}, i;
            for (i in a) {
                h[i] = {};
                for (var k in a[i]) {
                    var j = [], l = [], m = a[i][k], o = m.tags,
                        n = (o = 1 < o.length ? c(o.join("")) : o[0]) ? "?t=" + encodeURIComponent(o) + "." + i : "", o = n.length, s = g[k].toString(), r = s.length, u = s + d, A = h[i][k] = [], s = u.length;
                    A.charset = m.charset;
                    A.mods = [];
                    for (var J = function () {
                        A.push({combine: 1, fullpath: u + j.join(f) + n, mods: l})
                    }, C = 0; C < m.length; C++) {
                        var B = m[C];
                        A.mods.push(B);
                        var D = B.getFullPath();
                        if (B.canBeCombined) {
                            if (D = D.slice(r).replace(/\?.*$/, ""), j.push(D), l.push(B), j.length > e || s + j.join(f).length + o > b)j.pop(), l.pop(), J(), j = [], l = [], C--
                        } else A.push({combine: 0, fullpath: D, mods: [B]})
                    }
                    j.length &&
                    J()
                }
            }
            return h
        }
    });
    j.ComboLoader = l
})(KISSY);
(function (a, e) {
    function h(b) {
        a.mix(this, {fn: b, waitMods: {}})
    }

    var l = a.Loader, m = a.Env, d = l.Utils, k = a.setImmediate, j = l.ComboLoader;
    h.prototype = {
        constructor: h, notifyAll: function () {
            var b = this.fn;
            b && a.isEmptyObject(this.waitMods) && (this.fn = null, b())
        }, add: function (a) {
            this.waitMods[a] = 1
        }, remove: function (a) {
            delete this.waitMods[a]
        }, contains: function (a) {
            return this.waitMods[a]
        }
    };
    l.WaitingModules = h;
    a.mix(a, {
        add: function (b, d, c) {
            j.add(b, d, c, a, arguments.length)
        }, use: function (b, g, c) {
            function f() {
                ++u;
                var b = [];
                a.now();
                d.checkModsLoadRecursively(l, a, e, b) ? (d.attachModsRecursively(l, a), g && (m ? r() : k(r))) : b.length ? c && (m ? c.apply(a, b) : k(function () {
                    c.apply(a, b)
                })) : (o.fn = f, i.use(l))
            }

            var l, i, m, u = 0, r, o = new h(f);
            a.isPlainObject(g) && (m = g.sync, c = g.error, g = g.success);
            r = function () {
                g.apply(a, d.getModules(a, b))
            };
            b = d.getModNamesAsArray(b);
            b = d.normalizeModNamesWithAlias(a, b);
            l = d.unalias(a, b);
            i = new j(a, o);
            m ? o.notifyAll() : k(function () {
                o.notifyAll()
            });
            return a
        }, require: function (b, e) {
            if (b) {
                var c = d.unalias(a, d.normalizeModNamesWithAlias(a,
                    [b], e));
                d.attachModsRecursively(c, a);
                return d.getModules(a, c)[1]
            }
        }
    });
    m.mods = {}
})(KISSY);
(function (a) {
    function e(c) {
        var f = c.src || "";
        if (!f.match(g))return 0;
        var c = (c = c.getAttribute("data-config")) ? (new Function("return " + c))() : {}, e = c.comboPrefix || k, h = c.comboSep || j, l, u = f.indexOf(e);
        -1 === u ? l = f.replace(b, "$1") : (l = f.substring(0, u), "/" !== l.charAt(l.length - 1) && (l += "/"), e = f.substring(u + e.length).split(h), a.each(e, function (a) {
            if (a.match(g))return l += a.replace(b, "$1"), !1
        }));
        "tag" in c || (e = f.lastIndexOf("?t="), -1 !== e && (f = f.substring(e + 1), c.tag = m.getHash(d + f)));
        c.base = c.base || l;
        return c
    }

    function h() {
        var a =
            l.getElementsByTagName("script"), b, d;
        for (b = a.length - 1; 0 <= b; b--)if (d = e(a[b]))return d;
        return null
    }

    var l = a.Env.host && a.Env.host.document, m = a.Loader.Utils, d = "20141210150549", k = "??", j = ",", b = /^(.*)(seed|kissy)(?:-min)?\.js[^/]*/i, g = /(seed|kissy)(?:-min)?\.js/i;
    a.config({comboPrefix: k, comboSep: j, charset: "utf-8", lang: "zh-cn"});
    a.UA.nodejs ? a.config({
        charset: "utf-8",
        base: __dirname.replace(/\\/g, "/").replace(/\/$/, "") + "/"
    }) : l && l.getElementsByTagName && a.config(a.mix({comboMaxUrlLength: 2E3, comboMaxFileNum: 40}, h()))
})(KISSY);
KISSY.add("i18n", {
    alias: function (a, e) {
        return e + "/i18n/" + a.Config.lang
    }
});
(function (a, e) {
    function h() {
        if (!b) {
            d && !m.nodejs && u(l, i, h);
            b = 1;
            for (var c = 0; c < g.length; c++)try {
                g[c](a)
            } catch (e) {
                setTimeout(function () {
                    throw e;
                }, 0)
            }
        }
    }

    var l = a.Env.host, m = a.UA, d = l.document, k = d && d.documentElement, j = l.location, b = 0, g = [], c = /^#?([\w-]+)$/, f = /\S/, s = !(!d || !d.addEventListener), i = "load", n = s ? function (a, b, c) {
        a.addEventListener(b, c, !1)
    } : function (a, b, c) {
        a.attachEvent("on" + b, c)
    }, u = s ? function (a, b, c) {
        a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        a.detachEvent("on" + b, c)
    };
    a.mix(a, {
        isWindow: function (a) {
            return null !=
                a && a == a.window
        }, parseXML: function (a) {
            if (a.documentElement)return a;
            var b;
            try {
                l.DOMParser ? b = (new DOMParser).parseFromString(a, "text/xml") : (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = !1, b.loadXML(a))
            } catch (c) {
                b = e
            }
            !b || !b.documentElement || b.getElementsByTagName("parsererror");
            return b
        }, globalEval: function (a) {
            a && f.test(a) && (l.execScript ? l.execScript(a) : l.eval.call(l, a))
        }, ready: function (c) {
            if (b)try {
                c(a)
            } catch (d) {
                setTimeout(function () {
                    throw d;
                }, 0)
            } else g.push(c);
            return this
        }, available: function (b, e) {
            var b =
                (b + "").match(c)[1], f = 1, g = a.later(function () {
                if (500 < ++f)g.cancel(); else {
                    var a = d.getElementById(b);
                    a && (e(a), g.cancel())
                }
            }, 40, !0)
        }
    });
    if (j && -1 !== (j.search || "").indexOf("ks-debug"))a.Config.debug = !0;
    (function () {
        if (!d || "complete" === d.readyState)h(); else if (n(l, i, h), s) {
            var a = function () {
                u(d, "DOMContentLoaded", a);
                h()
            };
            n(d, "DOMContentLoaded", a)
        } else {
            var b = function () {
                "complete" === d.readyState && (u(d, "readystatechange", b), h())
            };
            n(d, "readystatechange", b);
            var c, e = k && k.doScroll;
            try {
                c = null === l.frameElement
            } catch (f) {
                c = !1
            }
            if (e && c) {
                var g = function () {
                    try {
                        e("left"), h()
                    } catch (a) {
                        setTimeout(g, 40)
                    }
                };
                g()
            }
        }
    })();
    if (m.ie)try {
        d.execCommand("BackgroundImageCache", !1, !0)
    } catch (r) {
    }
})(KISSY, void 0);
(function (a) {
    a.config({
        modules: {
            core: {alias: "dom,event,io,anim,base,node,json,ua,cookie".split(",")},
            ajax: {alias: "io"},
            "rich-base": {alias: "base"}
        }
    });
    if ("undefined" !== typeof location) {
        var e = a.startsWith(location.href, "https") ? "https://s.tbcdn.cn/s/kissy/" : "http://a.tbcdn.cn/s/kissy/";
        a.config({packages: {gallery: {base: e}, kg: {base: "//g.alicdn.com/"}, mobile: {base: e}}})
    }
})(KISSY);
(function (a, e, h) {
    a({"anim/transition?": {alias: KISSY.Features.isTransitionSupported() ? "anim/transition" : ""}});
    a({anim: {requires: ["anim/base", "anim/timer", "anim/transition?"]}});
    a({"anim/base": {requires: ["dom", "promise"]}});
    a({"anim/timer": {requires: ["dom", "anim/base"]}});
    a({"anim/transition": {requires: ["dom", "anim/base"]}});
    a({attribute: {requires: ["event/custom"]}});
    a({base: {requires: ["attribute"]}});
    a({button: {requires: ["node", "component/control"]}});
    a({color: {requires: ["attribute"]}});
    a({
        combobox: {
            requires: ["node",
                "component/control", "menu", "attribute", "io"]
        }
    });
    a({"component/container": {requires: ["component/control", "component/manager"]}});
    a({"component/control": {requires: ["node", "base", "promise", "component/manager", "xtemplate/runtime"]}});
    a({"component/extension/align": {requires: ["node"]}});
    a({"component/extension/content-render": {requires: ["component/extension/content-xtpl"]}});
    a({"component/extension/delegate-children": {requires: ["node", "component/manager"]}});
    a({"component/plugin/drag": {requires: ["dd"]}});
    a({"component/plugin/resize": {requires: ["resizable"]}});
    a({"date/format": {requires: ["date/gregorian", "i18n!date"]}});
    a({"date/gregorian": {requires: ["i18n!date"]}});
    a({"date/picker": {requires: "node,date/gregorian,i18n!date/picker,component/control,date/format,date/picker-xtpl".split(",")}});
    a({"date/popup-picker": {requires: ["date/picker-xtpl", "date/picker", "component/extension/shim", "component/extension/align"]}});
    a({dd: {requires: ["node", "base"]}});
    a({"dd/plugin/constrain": {requires: ["node", "base"]}});
    a({"dd/plugin/proxy": {requires: ["node", "dd", "base"]}});
    a({"dd/plugin/scroll": {requires: ["node", "dd", "base"]}});
    a({
        "dom/basic": {alias: ["dom/base", e.isIELessThan(9) ? "dom/ie" : "", e.isClassListSupported() ? "" : "dom/class-list"]},
        dom: {alias: ["dom/basic", !e.isQuerySelectorSupported() ? "dom/selector" : ""]}
    });
    a({"dom/base": {requires: ["ua"]}});
    a({"dom/class-list": {requires: ["dom/base"]}});
    a({"dom/ie": {requires: ["dom/base"]}});
    a({"dom/selector": {requires: ["dom/basic"]}});
    a({
        editor: {
            requires: ["node", "html-parser",
                "component/control", "ua"]
        }
    });
    a({event: {requires: ["event/dom", "event/custom"]}});
    a({"event/custom": {requires: ["event/base"]}});
    a({"event/dom": {alias: ["event/dom/base", e.isTouchGestureSupported() ? "event/dom/touch" : "", e.isDeviceMotionSupported() ? "event/dom/shake" : "", e.isHashChangeSupported() ? "" : "event/dom/hashchange", e.isIELessThan(9) ? "event/dom/ie" : "", h.ie ? "" : "event/dom/focusin"]}});
    a({"event/dom/base": {requires: ["event/base", "dom"]}});
    a({"event/dom/focusin": {requires: ["event/dom/base"]}});
    a({
        "event/dom/hashchange": {
            requires: ["event/dom/base",
                "dom"]
        }
    });
    a({"event/dom/ie": {requires: ["event/dom/base", "dom"]}});
    a({"event/dom/shake": {requires: ["event/dom/base"]}});
    a({"event/dom/touch": {requires: ["event/dom/base", "dom"]}});
    a({"filter-menu": {requires: ["menu", "component/extension/content-xtpl", "component/extension/content-render"]}});
    a({io: {requires: ["dom", "event/custom", "promise", "event/dom"]}});
    a({kison: {requires: ["base"]}});
    a({menu: {requires: "node,component/container,component/extension/delegate-children,component/control,component/extension/content-render,component/extension/content-xtpl,component/extension/align,component/extension/shim".split(",")}});
    a({menubutton: {requires: ["node", "button", "component/extension/content-xtpl", "component/extension/content-render", "menu"]}});
    a({mvc: {requires: ["io", "json", "attribute", "node"]}});
    a({node: {requires: ["dom", "event/dom", "anim"]}});
    a({overlay: {requires: "component/container,component/extension/shim,component/extension/align,node,component/extension/content-xtpl,component/extension/content-render".split(",")}});
    a({resizable: {requires: ["node", "base", "dd"]}});
    a({"resizable/plugin/proxy": {requires: ["node", "base"]}});
    a({"scroll-view": {alias: e.isTouchGestureSupported() ? "scroll-view/drag" : "scroll-view/base"}});
    a({"scroll-view/base": {requires: ["node", "anim", "component/container", "component/extension/content-render"]}});
    a({"scroll-view/drag": {requires: ["scroll-view/base", "node", "anim"]}});
    a({"scroll-view/plugin/pull-to-refresh": {requires: ["base"]}});
    a({"scroll-view/plugin/scrollbar": {requires: ["base", "node", "component/control"]}});
    a({separator: {requires: ["component/control"]}});
    a({
        "split-button": {
            requires: ["component/container",
                "button", "menubutton"]
        }
    });
    a({stylesheet: {requires: ["dom"]}});
    a({swf: {requires: ["dom", "json", "attribute"]}});
    a({tabs: {requires: ["component/container", "toolbar", "button"]}});
    a({toolbar: {requires: ["component/container", "component/extension/delegate-children", "node"]}});
    a({tree: {requires: ["node", "component/container", "component/extension/content-xtpl", "component/extension/content-render", "component/extension/delegate-children"]}});
    a({xtemplate: {requires: ["xtemplate/runtime", "xtemplate/compiler"]}});
    a({"xtemplate/compiler": {requires: ["xtemplate/runtime"]}});
    a({"xtemplate/runtime": {requires: ["path"]}})
})(function (a) {
    KISSY.config("modules", a)
}, KISSY.Features, KISSY.UA);
(function (a) {
    a.add("ua", function () {
        return a.UA
    });
    a.add("uri", function () {
        return a.Uri
    });
    a.add("path", function () {
        return a.Path
    });
    var e = a.UA, h = a.Env.host, l = (e.nodejs && "object" === typeof global ? global : h).JSON;
    9 > e.ieMode && (l = null);
    if (l)a.add("json", function () {
        return a.JSON = l
    }), a.parseJson = function (a) {
        return l.parse(a)
    }; else {
        var m = /^[\],:{}\s]*$/, d = /(?:^|:|,)(?:\s*\[)+/g, k = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g;
        a.parseJson = function (b) {
            return null ===
            b ? b : "string" === typeof b && (b = a.trim(b)) && m.test(b.replace(k, "@").replace(j, "]").replace(d, "")) ? (new Function("return " + b))() : a.error("Invalid Json: " + b)
        }
    }
    a.UA.nodejs && (a.KISSY = a, module.exports = a)
})(KISSY);
!function (a, b) {
    a.TB = a.TB || {};
    var c = TB.Global = {};
    c.version = "2.1", c.versionName = "3.5.30", c.v = {}, c.util = {}, c.fn = {}, c.config = {}, c.ui = {}, c.init = function () {
        var a = this;
        c.el = c.util.$("J_SiteNav"), c.blacklist = c.blacklist || [];
        try {
            var d = location.search, e = d.length ? d.substring(1) : "", f = b.unparam(e);
            b.each(f, function (a, b) {
                ~b.indexOf("fn-") && /^\d+\.\d+\.\d+$/.test(a) && (c.v[b] = a)
            })
        } catch (g) {
        }
        c.el ? a.load("fn-core") : c.blacklist = c.blacklist.concat(["fn-core", "fn-login-info", "fn-tmsg", "fn-mini-cart", "fn-site-map"]), b.each(a.fn, function (d, e) {
            !b.inArray(e, c.blacklist) && a.load(e)
        }), a.init = function () {
        }
    }, c.get = function (a, b) {
        var c = this, d = c.config[a];
        return b ? d[b] : d
    }, c.set = function (a, c, d) {
        var e = this, f = e.config[a];
        b.isObject(c) ? b.each(c, function (b, c) {
            e.set(a, c, b)
        }) : f[c] = d
    }, c.add = function (a, b, c) {
        var d = this;
        c = c || {}, d.fn[a] = b, d.config[a] = {}, d.set(a, c)
    }, c.load = function (a) {
        var b = this, c = b.get(a, "load");
        if (!c) {
            b.set(a, "load", !0);
            try {
                b.fn[a]()
            } catch (d) {
            }
        }
    }, c.use = function (a, d) {
        var e = this, f = e.get(a, "exports");
        b.isFunction(d) && (f ? d.call(e, c, f) : (e.get(a, "callback").push(d), e.load(a)))
    }, c.exports = function (a, b) {
        var d = this, e = d.get(a, "callback");
        for (d.set(a, "exports", b); e && e.length;) {
            var f = e.shift();
            f.call(d, c, b)
        }
    }, c.reload = function () {
        var a = ["fn-core", "fn-login-info", "fn-tmsg", "fn-mini-cart"];
        b.each(a, function (a) {
            c.set(a, {load: !1, isRender: !1}), c.isLogin = c.util.isLogin(), c.load(a)
        })
    }
}(window, KISSY), !function (a, b) {
    var c = window, d = c.document, e = d.body, f = a.util, g = " ", h = {};
    f.isNotEmptyString = function (a) {
        return "string" == typeof a && "" !== a
    }, f.getCookie = function (a) {
        var b = d.cookie.match("(?:^|;)\\s*" + a + "=([^;]*)");
        return b && b[1] ? decodeURIComponent(b[1]) : ""
    }, f.setCookie = function (a, b, c, e, f, g) {
        var h = String(encodeURIComponent(b)), i = c;
        "number" == typeof i && (i = new Date, i.setTime(i.getTime() + 24 * c * 60 * 60 * 1e3)), i instanceof Date && (h += "; expires=" + i.toUTCString()), this.isNotEmptyString(e) && (h += "; domain=" + e), this.isNotEmptyString(f) && (h += "; path=" + f), g && (h += "; secure"), d.cookie = a + "=" + h
    }, f.$ = function (a) {
        return d.getElementById(a)
    }, f.selector = function (a, b) {
        var c = b ? d.getElementById(b) || b : d;
        if (d.querySelectorAll)return c.querySelectorAll("." + a);
        for (var e = c.getElementsByTagName("*"), g = e.length, h = [], i = 0; g > i; i++) {
            var j = e[i];
            f.hasClass(j, a) && h.push(j)
        }
        return h
    }, f.contains = function (a, b) {
        for (; b && "BODY" !== b.nodeName;) {
            if (a === b.parentNode)return !0;
            b = b.parentNode
        }
        return !1
    }, f.hasClass = function (a, b) {
        var c = a && a.className;
        return c && (g + c + g).indexOf(g + b + g) > -1
    }, f.addClass = function (a, c) {
        var d = a && a.className;
        a && (d = g + d + g, !~d.indexOf(g + c + g) && (a.className = b.trim(d + c)))
    }, f.removeClass = function (a, c) {
        var d = a && a.className;
        d && (d = (g + d + g).replace(g + c + g, g), a.className = b.trim(d))
    }, f.addEvent = function (a, b, c, d) {
        a && (a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c))
    }, f.removeEvent = function (a, b, c, d) {
        a && (a.removeEventListener ? a.removeEventListener(b, c, !!d) : a.detachEvent && a.detachEvent("on" + b, c))
    }, f.getEvent = function (a) {
        return a ? a : c.event
    }, f.getTarget = function (a) {
        return a.target || a.srcElement
    }, f.preventDefault = function (a) {
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    }, f.stopPropagation = function (a) {
        a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0
    }, f.css = function (a, b, d) {
        var e = function (a, b) {
            var d;
            if (c.getComputedStyle)d = c.getComputedStyle(a, null)[b]; else if (d = a.currentStyle[b], "auto" === d && ("width" === b || "height" == b))return f.getWH(a, b);
            return d
        }, g = function (a, b, c) {
            a && (a.style[b] = c)
        };
        return d ? void g(a, b, d) : e(a, b)
    }, f.getWH = function (a, c, d) {
        if (!a)return "";
        var e = "width" === c ? a.offsetWidth : a.offsetHeight, g = "width" === c ? ["Left", "Right"] : ["Top", "Bottom"];
        return d ? ("border" === d && b.each(g, function (b) {
            e += parseFloat(f.css(a, "border" + b + "Width")) || 0
        }), "margin" === d && b.each(g, function (b) {
            e += parseFloat(f.css(a, "margin" + b)) || 0
        })) : b.each(g, function (b) {
            e -= parseFloat(f.css(a, "padding" + b)) || 0
        }), e + "px"
    }, f.isLogin = function () {
        var a = f.getCookie("_nk_") || f.getCookie("tracknick"), b = f.getCookie("_l_g_"), c = f.getCookie("lgc");
        return !!(b && a || c)
    }, f.fromUnicode = function (a) {
        return a.replace(/\\u([a-f\d]{4})/gi, function (a, b) {
            return String.fromCharCode(parseInt(b, 16))
        })
    }, f.encodeGBK = function (a) {
        function b(a) {
            if (!a)return "";
            if (c.ActiveXObject)return execScript('SetLocale "zh-cn"', "vbscript"), h[a] = a.replace(/[\d\D]/g, function (a) {
                return c.vbsval = "", execScript('window.vbsval=Hex(Asc("' + a + '"))', "vbscript"), "%" + c.vbsval.slice(0, 2) + "%" + c.vbsval.slice(-2)
            });
            var b = d.createElement("img");
            return "gbk" === f.getCharset() ? (b.src = "//go.mmstat.com/jsclick?logtype=2&globaljs=1&separator=" + a, h[a] = b.src.split("&separator=").pop()) : h[a] = f.encodeGBKByIframe(a)
        }

        return a ? h[a] ? h[a] : h[a] = a.replace(/([^\x00-\xff]+)|([\x00-\xff]+)/g, function (a, c, d) {
            return b(c) + encodeURIComponent(d || "")
        }) : ""
    }, f.getNick = function (a) {
        var b = f.getCookie("_nk_"), c = f.getCookie("lgc"), d = f.fromUnicode(b || c);
        return d && (d = d.replace(/[<>%&;\\'"]/g, "")), a ? f.encodeGBK(d).toLowerCase() : d
    }, f.getTag = function () {
        return parseInt(b.unparam(f.getCookie("uc1")).tag)
    }, f.isDaily = function () {
        return !!~location.hostname.indexOf("daily.taobao.net")
    }, f.getHost = function () {
        return this.isDaily() ? ".daily.taobao.net" : ".taobao.com"
    }, f.getUA = function () {
        return c.navigator && c.navigator.userAgent || ""
    }, f.isIE6 = function () {
        var a = f.getUA(), b = a.match(/MSIE ([\w.]+)/);
        return !(!b || "6.0" !== b[1])
    }, f.isIE7 = function () {
        var a = f.getUA(), b = a.match(/MSIE ([\w.]+)/);
        return !(!b || "7.0" !== b[1])
    }, f.isMobile = function () {
        var a = f.getUA();
        return !!a.match(/AppleWebKit.*Mobile.*/) || "ontouchstart" in d.documentElement
    }, f.isHttps = function () {
        return "https:" === location.protocol
    }, f.jsonp = function (a, d, e, f) {
        "function" == typeof d && (e = d, d = void 0);
        var g = b.guid("jsonp"), h = d && !b.isEmptyObject(d) && b.param(d) + "&" || "", i = "";
        b.isObject(f) && f.callbackName && (g = f.callbackName), c[g] = e, i += a + (~a.indexOf("?") ? "&" : "?") + h, i += "callback=" + g + "&t=" + b.now(), b.getScript(i, f || {})
    }, f.scrollTop = function () {
        var a = c.pageYOffset;
        return "number" != typeof a && (a = d.documentElement.scrollTop, "number" != typeof a && (a = e.scrollTop)), a
    }, f.getCharset = function () {
        return /utf\-*8/i.test(document.charset || document.characterSet) ? "utf8" : "gbk"
    }, f.encodeGBKByIframe = function (a) {
        if (!a)return "";
        try {
            var b = document.createElement("iframe");
            b.src = "about:blank", b.setAttribute("style", "display:none;visibility:hidden;"), document.body.appendChild(b);
            var c = b.contentWindow.document;
            c.charset = c.characterSet = "GBK", c.write("<body><a href='?" + a + "'>X</a></body>"), c.close();
            var d = c.body.firstChild.href, e = d.substr(d.lastIndexOf("?") + 1);
            return document.body.removeChild(b), e
        } catch (f) {
            return ""
        }
    }, a.isLogin = f.isLogin(), a.isIE6 = f.isIE6(), a.isMobile = f.isMobile(), a.isDaily = f.isDaily(), a.isHTTPS = f.isHttps(), a.host = f.getHost(), TB.namespace = TB.namespace || function () {
            b.namespace.apply(TB, arguments)
        }
}(TB.Global, KISSY), !function (a) {
    var b = window, c = a.util;
    a.isMobile && c.addEvent(b, "DOMContentLoaded", function () {
        c.addClass(c.$("J_SiteNav"), "site-nav-mobile")
    })
}(TB.Global), !function (a, b) {
    var c = a.util, d = parseFloat(b.version);
    d > 1.1 && (b.config({
        packages: [{
            name: "tbc",
            path: c.isDaily() ? "//g-assets.daily.taobao.net/tbc/" : "//g.alicdn.com/tbc/",
            ignorePackageNameInUri: !0
        }]
    }), b.config({
        packages: [{
            name: "kg",
            path: c.isDaily() ? "//g-assets.daily.taobao.net/kg/" : "//g.alicdn.com/kg/",
            ignorePackageNameInUri: !0
        }]
    }), 1.2 === d && b.config({map: [[/(\/tbc\/)tbc\//g, "$1"], [/(\/kg\/)kg\//g, "$1"]]}), window.TBC = {
        use: function (a, c) {
            b.use("json", function (b, d) {
                var e = window._tbc_alias;
                if (e)return b.use(e[a], c);
                var f, g = new Date, h = [g.getFullYear(), g.getMonth(), g.getDate()].join("-"), i = window.localStorage && (window.JSON || d);
                return i && (f = localStorage.getItem("_tbc_alias"), f && (f = d.parse(f), f[h])) ? (e = window._tbc_alias = f[h], b.use(e[a], c)) : void b.getScript("//tms.alicdn.com/go/act/tbc/alias.php", function () {
                    b.use(_tbc_alias[a], c), i && (f = {}, f[h] = _tbc_alias, localStorage.setItem("_tbc_alias", d.stringify(f)))
                })
            })
        }
    }), d >= 1.4 && b.config({
        modules: {
            sizzle: {alias: ["node"]},
            ajax: {alias: ["io"]},
            calendar: {alias: ["gallery/calendar-deprecated/1.0/"]},
            datalazyload: {alias: ["gallery/datalazyload/1.0/"]},
            switchable: {alias: ["gallery/switchable/1.3.1/"]},
            imagezoom: {alias: ["gallery/imagezoom/1.0/"]},
            waterfall: {alias: ["gallery/waterfall/1.0/"]},
            flash: {alias: ["gallery/flash/1.0/"]}
        }
    })
}(TB.Global, KISSY), !function (a, b) {
    var c = document, d = a.util;
    a.add("fn-core", function () {
        var e = {
            home: ['<li class="menu home" data-spm="1581860521">', '<div class="menu-hd">', a.isMobile ? '<a href="//www.taobao.com/" target="_top"><span class="g-icon">&#xe600;</span></a>' : '<a href="//www.taobao.com/" target="_top" class="h">\u6dd8\u5b9d\u7f51\u9996\u9875</a>', "</div>", "</li>"].join(""),
            loginInfo: a.isLogin ? '<li id="J_LoginInfo" class="J_Menu menu login-info" data-fn-name="fn-login-info" data-spm="754894437"></li>' : '<li id="J_LoginInfo" class="menu" data-spm="1997563269"><div id="J_LoginInfoHd" class="menu-hd"></div></li>',
            tmsg: a.isLogin && -1 === b.indexOf("fn-tmsg", a.blacklist) ? ['<li id="J_Tmsg" class="tmsg" data-spm="1997563201"><div class="J_Menu menu" data-fn-name="fn-tmsg"><div class="menu-hd J_Tmsg_Basic tmsg_basic"><span class="J_Tmsg_Logo tmsg_logo_area" style="zoom:1;"><span class="J_Tmsg_Logo_Loading tmsg_logo_loading"></span> <span class="J_Tmsg_Logo_Icon tmsg_logo_icon g-icon" style="display:none">&#xe602;</span> <span class="J_Tmsg_Logo_Text tmsg_logo_text">\u6d88\u606f</span> <span class="J_Tmsg_Logo_Unread tmsg_logo_unread"></span></span> <span class="arrow-icon-wrapper"><span class="g-icon arrow-icon">&#xe605;</span></span></div><div class="menu-bd"><div class="J_Tmsg_Panel_Apps tmsg_panel_apps"></div></div></div>', '<div class="J_Tmsg_Panels tmsg_panels"><div class="J_Tmsg_Panel_Detail tmsg_panel_detail"></div><div class="J_Tmsg_Panel_history tmsg_panel_history"></div><div class="J_Tmsg_Panel_Strong tmsg_panel_strong"></div><div class="J_Tmsg_Panel_Setting tmsg_panel_setting"></div></div></li>'].join("") : "",
            myTaobao: ['<li class="J_Menu menu my-taobao" data-spm="1997525045">', '<div class="menu-hd J_MenuMyTaobao">', '<a href="//i' + a.host + '/my_taobao.htm" target="_top">\u6211\u7684\u6dd8\u5b9d</a>', '<span class="arrow-icon-wrapper"><span class="g-icon arrow-icon">&#xe605;</span></span>', "</div>", '<div class="menu-bd menu-list">', '<div class="menu-bd-panel">', '<a href="//buyertrade' + a.host + '/trade/itemlist/list_bought_items.htm" target="_top">\u5df2\u4e70\u5230\u7684\u5b9d\u8d1d</a>', '<a href="//lu.taobao.com/newMyPath.htm" target="_top">\u6211\u7684\u8db3\u8ff9</a>', '<a href="//guang.taobao.com/?scm=2022.1.1.1" target="_top">\u7231\u901b\u8857 <em class="J_GuangCount guang-count"></em></a>', '<a href="//daren.taobao.com/" target="_top">\u6dd8\u5b9d\u8fbe\u4eba</a>', '<a href="//love.taobao.com/" target="_top">\u65b0\u6b22</a>', a.isMobile ? '<a href="//i' + a.host + '/my_taobao.htm" target="_top" class="site-nav-btn">\u67e5\u770b\u6211\u7684\u6dd8\u5b9d</a>' : "", "</div>", "</div>", "</li>"].join(""),
            miniCart: -1 === b.indexOf("fn-mini-cart", a.blacklist) ? ['<li id="J_MiniCart" class="J_Menu menu menu-empty" data-fn-name="fn-mini-cart" data-spm="1997525049">', '<div class="menu-hd">', '<a href="//cart.taobao.com/cart.htm?from=mini&ad_id=&am_id=&cm_id=&pm_id=1501036000a02c5c3739" target="_top">', '<span class="g-icon">&#xe603;</span>', "<span>\u8d2d\u7269\u8f66</span>", '<strong class="h"></strong>', "</a>", '<span class="arrow-icon-wrapper"><span class="g-icon arrow-icon">&#xe605;</span></span>', "</div>", '<div class="menu-bd">', '<div class="menu-bd-panel"></div>', "</div>", "</li>"].join("") : "",
            favorite: ['<li class="J_Menu menu favorite" data-spm="1997525053">', '<div class="menu-hd">', '<a href="//shoucang.taobao.com/item_collect.htm" target="_top">', '<span class="g-icon">&#xe604;</span>', "<span>\u6536\u85cf\u5939</span>", "</a>", '<span class="arrow-icon-wrapper"><span class="g-icon arrow-icon">&#xe605;</span></span>', "</div>", '<div class="menu-bd menu-list">', '<div class="menu-bd-panel">', '<a href="//shoucang.taobao.com/item_collect.htm" target="_top">\u6536\u85cf\u7684\u5b9d\u8d1d</a>', '<a href="//shoucang.taobao.com/shop_collect_list.htm" target="_top">\u6536\u85cf\u7684\u5e97\u94fa</a>', "</div>", "</div>", "</li>"].join(""),
            guide: ['<li class="menu guide" data-spm="1997563209">', '<div class="menu-hd">', '<a href="//www.taobao.com/markets/tbhome/market-list" target="_top">\u5546\u54c1\u5206\u7c7b</a>', "</div>", "</li>"].join(""),
            pipe: '<li class="site-nav-pipe">|</li>',
            sellerCenter: ['<li class="J_Menu menu seller-center" data-spm="1997525073">', '<div class="menu-hd">', '<a href="//mai' + a.host + '/seller_admin.htm" target="_top">\u5356\u5bb6\u4e2d\u5fc3</a>', '<span class="arrow-icon-wrapper"><span class="g-icon arrow-icon">&#xe605;</span></span>', "</div>", '<div class="menu-bd menu-list">', '<div class="menu-bd-panel">', '<a href="//mai.taobao.com/seller_admin.htm" target="_top">\u514d\u8d39\u5f00\u5e97</a>', '<a href="//trade' + a.host + '/trade/itemlist/list_sold_items.htm" target="_top">\u5df2\u5356\u51fa\u7684\u5b9d\u8d1d</a>', '<a href="//sell' + a.host + '/auction/goods/goods_on_sale.htm" target="_top">\u51fa\u552e\u4e2d\u7684\u5b9d\u8d1d</a>', '<a href="//fuwu' + a.host + '/?tracelog=tbdd" target="_top">\u5356\u5bb6\u670d\u52a1\u5e02\u573a</a>', '<a href="//daxue.taobao.com" target="_top">\u5356\u5bb6\u57f9\u8bad\u4e2d\u5fc3</a>', "</div>", "</div>", "</li>"].join(""),
            mobile: ['<li class="menu mobile" data-spm="1997563273">', '<div class="menu-hd">', '<a href="//www.taobao.com/m" target="_top">\u624b\u673a\u901b\u6dd8\u5b9d</a>', "</div>", "</li>"].join(""),
            service: window.g_config && window.g_config.supportLink ? ['<li class="menu service" data-spm="754895749">', '<div class="menu-hd">', '<a href="' + window.g_config.supportLink + '" target="_top">\u8054\u7cfb\u5ba2\u670d</a>', "</div>", "</li>"].join("") : ['<li class="J_Menu menu service" data-spm="754895749">', '<div class="menu-hd">', '<a href="//service.taobao.com/support/main/service_center.htm" target="_top">\u8054\u7cfb\u5ba2\u670d</a>', '<span class="arrow-icon-wrapper"><span class="g-icon arrow-icon">&#xe605;</span></span>', "</div>", '<div class="menu-bd menu-list">', '<div class="menu-bd-panel">', '<a href="//service' + a.host + '/support/main/service_center.htm" target="_top">\u6d88\u8d39\u8005\u5ba2\u670d</a>', '<a href="//sellerhelp' + a.host + '/market/service/index.php?page=sellerIndex" target="_top">\u5356\u5bb6\u5ba2\u670d</a>', "</div>", "</div>", "</li>"].join(""),
            siteMap: ['<li id="J_SiteMap" class="J_Menu menu site-map" data-fn-name="fn-site-map" data-spm="1997525077">', '<div class="menu-hd">', '<a href="//www.taobao.com/sitemap.php?id=sitemap2" target="_top">', '<span class="g-icon">&#xe601;</span>', "<span>\u7f51\u7ad9\u5bfc\u822a</span>", "</a>", '<span class="arrow-icon-wrapper"><span class="g-icon arrow-icon">&#xe605;</span></span>', "</div>", '<div class="menu-bd"><div id="J_SiteMapBd" class="menu-bd-panel"></div></div>', "</li>"].join(""),
            suggest: ['<li class="menu global-suggest" data-fn-name="fn-suggest">', '<div class="search-panel">', '<form target="_top" action="//s.taobao.com/search">', '<div class="search-button"><button class="g-icon btn-search" type="submit">\u0151</button></div>', '<div class="search-panel-fields search-common-panel">', '<input id="J_GlobalSuggestInput" value="" name="q" aria-label="\u641c\u7d22" placeholder="\u641c\u7d22" accesskey="s" autocomplete="off">', "</div>", "</form>", "</div>", "</li>"].join(""),
            weekend: '<li id="J_Weekend" class="menu weekend" data-spm="1996803849"></li>'
        }, f = ["loginInfo", "tmsg", "mobile", "weekend"], g = ["myTaobao", "miniCart", "favorite", "guide", "pipe", "sellerCenter", "service", "siteMap"], h = null, i = 200, j = function () {
            this.init()
        };
        j.prototype.init = function () {
            var a = this;
            a.render(), a.bind()
        }, j.prototype.render = function () {
            var b = this, c = d.$("J_SiteNavBdL"), h = d.$("J_SiteNavBdR");
            a.ui = a.ui || {}, f = a.ui.l || f, g = a.ui.r || g, a.isMobile ? ("home" !== f[0] && f.unshift("home"), e.mobile = "", a.isLogin || (e.myTaobao = "", e.miniCart = "", e.favorite = "", e.guide = "", e.sellerCenter = "")) : "home" !== g[0] && g.unshift("home"), c.innerHTML = b.renderUI(f), h.innerHTML = b.renderUI(g)
        }, j.prototype.bind = function () {
            var e = this;
            e.$menus = d.selector("J_Menu", a.el), e.menuCls = a.isMobile ? "menu-click" : "menu-hover", b.each(e.$menus, function (a) {
                e.menuBind(a)
            }), a.isMobile && d.addEvent(c, "click", function () {
                e.menuClose()
            })
        }, j.prototype.renderUI = function (a) {
            var c = "";
            return b.each(a, function (a) {
                c += b.isObject(a) ? a.tpl : e[a]
            }), c
        }, j.prototype.menuBind = function (c) {
            var e = this, f = function (a) {
                var b = d.getEvent(a), f = d.getTarget(b), g = d.selector("menu-hd", c)[0];
                d.stopPropagation(b), d.contains(g, f) && (d.preventDefault(b), d.hasClass(c, e.menuCls) ? e.menuClose(c) : (e.menuClose(), e.menuOpen(c)))
            }, g = function (a) {
                var f = d.getEvent(a), g = f.type, j = f.relatedTarget || ("mouseover" === g ? f.fromElement : f.toElement);
                d.contains(c, j) || j === c || (h && h.cancel(), h = b.later(function () {
                    "mouseover" === g ? (e.menuClose(), e.menuOpen(c)) : e.menuClose()
                }, i))
            };
            a.isMobile ? d.addEvent(c, "click", f) : (d.addEvent(c, "mouseover", g), d.addEvent(c, "mouseout", g))
        }, j.prototype.menuOpen = function (b) {
            var c = this, e = b.getAttribute("data-fn-name");
            if (e) {
                var f = a.get(e, "exports"), g = a.get(e, "isRender"), h = a.get(e, "cbRender");
                f && (g || (a.set(e, "isRender", !0), a.set(e, "cbResult", f[h]())), a.get(e, "cbResult") && d.addClass(b, c.menuCls))
            } else d.addClass(b, c.menuCls);
            a.isIE6 && !a.isHTTPS && c.iframeShim(b)
        }, j.prototype.menuClose = function (a) {
            var c = this;
            a ? d.removeClass(a, c.menuCls) : b.each(c.$menus, function (a) {
                d.removeClass(a, c.menuCls)
            })
        }, j.prototype.iframeShim = function () {
        }, a.exports("fn-core", new j)
    })
}(TB.Global, KISSY), !function (a, b) {
    var c = a.util, d = "fn-login-info";
    a.writeLoginInfo = function (a, b) {
        var c = this;
        c.set(d, a || {}), c.set(d, "async", b || !1)
    }, a.add(d, function () {
        var e = function () {
            this.el = c.$("J_LoginInfo"), this.init()
        };
        e.prototype.init = function () {
            var b = this, e = a.get(d), f = b.getLoginInfo(e);
            a.isLogin ? b.el.innerHTML = f : c.$("J_LoginInfoHd").innerHTML = f
        }, e.prototype.render = function () {
            var a = this;
            if (a.getAvatar(), a.getMedals(), window.goldlog)try {
                window.goldlog.record("/tbvip.5.6", "", "url=" + encodeURIComponent(location.host + location.pathname), "H46717827")
            } catch (b) {
            }
            return !0
        }, e.prototype.getAvatar = function () {
            var a = c.$("J_UserAvatar"), b = a.getElementsByTagName("img")[0], d = c.getNick(!0), e = "//gtms03.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_80x80.jpg";
            d && (d = "//wwc.alicdn.com/avatar/getAvatar.do?userNick=" + d + "&width=80&height=80&type=sns"), b.setAttribute("src", e)
        }, e.prototype.getMedals = function () {
            var d = this, e = c.getHost(), f = "//vip" + e + "/ajax/getUserPrivilegeCard.do", g = function (e) {
                var f = c.$("J_UserMedal"), g = c.$("J_Global_UserVipLevel");
                if (e.data && (e.data.userLevel || 0 === e.data.userLevel) && (g.innerHTML = '<a href="//vip.taobao.com/growth_info.htm" target="_top" class="vip-icon vip-icon-' + e.data.userLevel + '"></a>'), e.data && e.data.apass && (g.innerHTML += '<a href="//apass.taobao.com/" target="_top" class="apass-icon"></a>'), !(1 === e.code && e.status && e.data && e.data.isLogin && e.data.privileges))return f.style.display = "none";
                var h = c.$("J_UserMedalCont"), i = c.$("J_ArrowL"), j = c.$("J_ArrowR"), k = e.data.privileges, l = k.length, m = "", n = Math.ceil(l / 4) - 1, o = 0;
                b.each(k, function (a) {
                    a.privilegeName = a.privilegeName.replace("\u9636\u68af", ""), m += b.substitute('<a href="{privilegeUrl}" target="_top" title="{privilegeName}"><img src="{privilegeImage}" title="{privilegeName}">{privilegeName}</a>', a)
                }), c.removeClass(f, "site-nav-loading"), h.innerHTML = m, l > 4 && c.addClass(f, "medal-arrow-show");
                var p = function () {
                    h.style.left = -220 * o + "px"
                };
                if (e.data && e.data.privilegeSize > 0) {
                    var q = c.$("J_UserPrivilegeCount");
                    c.addClass(q, "global-user-privilege-count"), q.innerHTML = "\u6211\u53ef\u5c0a\u4eab<b>" + e.data.privilegeSize + "</b>\u9879\u7279\u6743"
                }
                var r = c.$("J_UserPrivilegeTip"), s = k[0];
                if (s && -999 != s.occurDays) {
                    var t;
                    t = s.occurDays > 0 ? '<p class="user-privilege-ing"><a href="' + s.privilegeUrl + '" target="_top">\u6211\u5f53\u524d\u53ef\u4ee5\u4eab\u53d7<b>' + s.occurDays + "</b>\u5929<b>" + s.privilegeName + "</b>\uff01</a></p>" : s.occurDays < 0 ? '<p class="user-privilege-coming"><a href="' + s.privilegeUrl + '" target="_top">\u8ddd\u79bb<b>' + s.privilegeName + "</b>\u5f00\u59cb\u8fd8\u5269<b>" + Math.abs(s.occurDays) + "</b>\u5929\uff01</a></p>" : '<p class="user-privilege-ing"><a href="' + s.privilegeUrl + '" target="_top">\u6211\u8fd8\u53ef\u4eab\u53d7\u6700\u540e\u4e00\u5929<b>' + s.privilegeName + "</b>\u3002</a></p>", r.innerHTML = t
                }
                c.addEvent(i, "click", function (a) {
                    var b = c.getEvent(a);
                    c.preventDefault(b), c.stopPropagation(b), o > 0 && (o -= 1, p())
                }), c.addEvent(j, "click", function (a) {
                    var b = c.getEvent(a);
                    c.preventDefault(b), c.stopPropagation(b), n > o && (o += 1, p())
                }), a.use("fn-core", function (a, b) {
                    b.iframeShim(d.el, !0)
                })
            };
            c.jsonp(f, {_input_charset: "utf-8", from: "diaoding"}, g, {charset: "gbk"})
        }, e.prototype.getLoginTpl = function (b) {
            var c = '<a href="{spaceUrl}" target="_top" class="login-info-nick">{nick}</a>', d = '<img src="//wwc.alicdn.com/avatar/getAvatar.do?userNick={userNick}&width=30&height=30&type=sns" width="30" height="30" alt="{nick}\u7684\u5934\u50cf">', e = '<a href="//vip.taobao.com" target="_top" class="vip-icon vip-icon-{tag}"></a>', f = '<a href="//vip.taobao.com/growth_info.htm" target="_top" class="vip-icon vip-icon-{tag}"></a>';
            (-1 === b || isNaN(b)) && (e = "", f = ""), a.isMobile ? (c = "", e = "") : d = "";
            var g = '<a href="{loginUrl}" target="_top" class="h">\u4eb2\uff0c\u8bf7\u767b\u5f55</a> <a href="{regUrl}" target="_top">\u514d\u8d39\u6ce8\u518c</a>', h = ['<div class="menu-hd">', d, c, e, '<span class="arrow-icon-wrapper"><span class="g-icon arrow-icon">&#xe605;</span></span>', "</div>", '<div class="menu-bd">', '<div class="menu-bd-panel">', '<a href="//i.taobao.com/my_taobao.htm?ad_id=&am_id=&cm_id=&pm_id=1501036000a02c5c3739" target="_top" id="J_UserAvatar" class="user-avatar">', '<img src="//assets.alicdn.com/g/s.gif" width="80" height="80" alt="{nick}\u7684\u5934\u50cf">', "</a>", '<div class="user-info">', '<p class="user-operate">', '<a href="//member1' + a.host + '/member/fresh/account_security.htm" target="_top">\u8d26\u53f7\u7ba1\u7406</a>', '<span class="site-nav-pipe">|</span>', '<a href="{logoutUrl}" target="_top">\u9000\u51fa</a>', "</p>", '<p id="J_Global_UserVipLevel">', f, "</p>", "<p>", '<a href="{powerUrl}" target="_top"><strong id="J_UserPrivilegeCount">{powerTit}</strong></a>', "</p>", 0 === b || -1 === b ? '<p><a href="{serviceUrl}" target="_top">{serviceTit}</a></p>' : "", "</div>", '<div id="J_UserPrivilegeTip" class="user-privilege-tip">', "</div>", '<div id="J_UserMedal" class="user-medal site-nav-loading">', '<div class="user-medal-bd">', '<div id="J_UserMedalCont" class="user-medal-cont"></div>', "</div>", '<a href="javascript:;" target="_top" id="J_ArrowL" class="medal-arrow arrow-l">&lt;</span></a>', '<a href="javascript:;" target="_top" id="J_ArrowR" class="medal-arrow arrow-r">&gt;</a>', "</div>", "</div>", "</div>"].join("");
            return a.isLogin ? h : g
        }, e.prototype.getLoginInfo = function (d) {
            var e = this, f = d.loginServer || "https://login" + a.host, g = d.loginServer || "//login" + a.host, h = d.loginUrl || f + "/member/login.jhtml?f=top", i = d.logoutUrl || g + "/member/logout.jhtml?f=top&out=true", j = "//reg" + a.host + "/member/new_register.jhtml?from=tbtop&ex_info=&ex_sign=", k = "//i" + a.host + "/my_taobao.htm?ad_id=&am_id=&cm_id=&pm_id=1501036000a02c5c3739", l = c.getNick(), m = c.getNick(!0), n = c.getTag(), o = location.href;
            /^http.*(\/member\/login\.jhtml)$/i.test(o) && (o = "");
            var p = d.redirectUrl || o;
            h += (~h.indexOf("?") ? "&" : "?") + "redirectURL=" + encodeURIComponent(p), i += (~i.indexOf("?") ? "&" : "?") + "redirectURL=" + encodeURIComponent(p);
            var q, r, s, t;
            0 === n || -1 === n ? (q = "//new.taobao.com/?ad_id=&am_id=1301066543d8134877ba&cm_id=&pm_id=", r = "\u65b0\u624b\u8d2d\u7269\u5165\u95e8\u6559\u5b66", s = "//vip.taobao.com/newuser/newGift.htm", t = "\u5feb\u53bb\u9886\u65b0\u4eba\u793c\u91d1!") : 7 === n ? (q = "//vip.taobao.com/vip_club.htm", r = "\u7acb\u523b\u6fc0\u6d3b\u6211\u7684\u8eab\u4efd") : (q = "//vip.taobao.com/privilege/privilege_detail.htm", r = "\u67e5\u770b\u6211\u7684\u4f1a\u5458\u7279\u6743");
            var u = e.getLoginTpl(n), v = {
                loginUrl: h,
                logoutUrl: i,
                regUrl: j,
                spaceUrl: k,
                nick: l,
                tag: n,
                userNick: m,
                powerUrl: q,
                powerTit: r,
                serviceUrl: s,
                serviceTit: t
            };
            return b.substitute(u, v)
        }, a.set(d, {exports: new e, cbRender: "render"})
    })
}(TB.Global, KISSY), function (a, b) {
    a.add("fn-tmsg", function () {
        function c() {
            a.set("fn-tmsg", {
                isRender: !1, cbRender: "showList", exports: {
                    showList: function () {
                        return !i && j && TMsg.base.renderHover(), a.set("fn-tmsg", "isRender", !1), !0
                    }
                }
            })
        }

        function d() {
            a.util.isLogin() ? b.use("core", function () {
                b.getScript(g + h, function () {
                    j ? b.use("tbc/umpp/" + f + "/", function () {
                        b.use("tbc/tmsg/" + e + "/", c)
                    }) : c()
                })
            }) : j ? b.use("tbc/umpp/" + f + "/") : b.use("core", function () {
                b.getScript(g + h + "?t=" + b.now())
            })
        }

        var e = a.v["fn-tmsg"] || "3.4.6", f = a.v["fn-umpp"] || "1.5.4", g = (a.util.isDaily() ? "//g-assets.daily.taobao.net" : "//g.alicdn.com") + "/tbc/", h = a.util.isLogin() ? "??umpp/" + f + "/index-min.js,tmsg/" + e + "/index-min.js" : "umpp/" + f + "/index-min.js", i = window.ActiveXObject && !window.XMLHttpRequest, j = parseFloat(b.version) >= 1.2;
        if (window.TMsg && b.TBC && b.TBC.umpp)try {
            b.TBC.umpp.destroy(), TMsg.base.destroy(), b.TBC.umpp.init(), a.util.isLogin() && TMsg.base.init()
        } catch (k) {
        } else b.ready(function () {
            d()
        })
    })
}(TB.Global, KISSY), !function (a, b) {
    function c(a) {
        if (b && b.unparam)return d.userCookie && "2" == d.userCookie.version ? b.unparam(a, "&amp;") : b.unparam(a);
        if (a) {
            for (var c = a.split("&"), e = {}, f = 0; f < c.length; f++) {
                var g = c[f].split("=");
                e[g[0]] = e[g[1]]
            }
            return e
        }
        return {}
    }

    var d = window, e = "fn-mini-cart", f = a.util, g = "g_config" in d && "appId" in d.g_config ? parseInt(d.g_config.appId) : void 0, h = "mini-cart", i = "menu-empty", j = f.getHost();
    a.setCartNum = function (b) {
        a.use("fn-mini-cart", function (a, c) {
            c.setCartNum.call(c, b)
        })
    }, a.add(e, function () {
        function k() {
            var a = this;
            this.$cart = f.$("J_MiniCart"), this.$cart && (f.addClass(this.$cart, i), f.addEvent(f.$("mc-menu-hd"), "click", function () {
                f.removeClass(a.$cart, "menu-hover"), d.MiniCart && (d.MiniCart._clicked = !1);
                var b = new Image;
                b.src = "//gm.mmstat.com/tbcart.1.56&t=" + +new Date
            }), this.update()), this.cartNum = 0, d.MiniCart && d.MiniCart.reset && d.MiniCart.reset()
        }

        k.prototype.update = function () {
            function a(c) {
                if (c = c || 0) {
                    var e = {keys: "TCART_234_" + c + "_q", t: b.now()};
                    f.jsonp(o, e, function (b) {
                        if (b) {
                            var c = k >= 0 ? k : m ? 1 : 0;
                            d.setCartNum(b[e.keys]), f.setCookie("mt", "ci=" + b[e.keys] + "_" + c + (l ? "&" + l : ""), 7, j)
                        } else m && a()
                    })
                } else b.getScript(n + "callback=TB.Global.setCartNum&t=" + +new Date + (g ? "&appid=" + g : ""))
            }

            var d = this, e = c(f.getCookie("mt")), h = e && e.ci ? e.ci.split("_") : [void 0, void 0], i = parseInt(h[0], 10), k = parseInt(h[1], 10), l = e ? e.cp : void 0, m = f.isLogin(), n = "//cart" + j + "/top_cart_quantity.htm?", o = "//count." + (f.isDaily() ? "daily.taobao.net" : f.isHttps() ? "taobao.com" : "tbcdn.cn") + "/counter6";
            if (d._OFF = 0 > h, m)e ? 1 == k ? d.setCartNum(i) : a() : a(f.getCookie("unb")); else {
                var p = f.getCookie("t");
                p ? i >= 0 ? d.setCartNum(i) : a(p) : d.setCartNum(0)
            }
        }, k.prototype.setCartNum = function (a) {
            var c = this;
            if (b.isNumber(a) && !c._OFF && c.$cart) {
                var e = c.$cart.getElementsByTagName("a")[0], k = '<span class="g-icon">&#xe603;</span><span>\u8d2d\u7269\u8f66</span>', l = 19 !== g;
                0 > a && (c._OFF = -1 === a, e.innerHTML = k, f.removeClass(c.$cart, h), d.MiniCart && c.off()), e.innerHTML = k + (c._OFF !== !0 ? '<strong id="J_MiniCartNum" class="h">' + a + "</strong>" : ""), e.href = "//cart" + j + "/cart.htm?from=mini&ad_id=&am_id=&cm_id=&pm_id=1501036000a02c5c3739", f.addClass(c.$cart, h), c._OFF !== !0 || f.isMobile() || (l = !1), f[(l ? "remove" : "add") + "Class"](c.$cart, i), f.addClass(c.$cart, "menu"), e.id = "mc-menu-hd", d.MiniCart && (d.MiniCart.cartNum = a, d.MiniCart.isExpired = !0)
            }
        }, k.prototype.off = function () {
            var a = f.selector("menu-bd-panel", "J_MiniCart");
            return a && a[0] ? (a[0].innerHTML = d.MiniCart._parseMsg(" "), f.addClass(a[0], "mini-cart-closed"), !0) : (f.addClass(self.$cart, i), !1)
        }, k.prototype.renderMenu = function () {
            var c = this;
            return 19 !== g ? c._OFF !== !0 || f.isMobile() ? (d.MiniCart ? d.MiniCart.render() : b.ready(function () {
                var g = a.v[e] || "0.0.3";
                b.getScript((f.isDaily() ? "//g-assets.daily.taobao.net" : "//g.alicdn.com") + "/tb/mini-cart/" + g + "/index-min.js", function () {
                    b.use("tb/mini-cart", function () {
                        var a = f.$("J_MiniCartNum"), b = a ? a.innerHTML : -1;
                        return -1 === b || c._OFF === !0 ? c.off() : void d.MiniCart.init(b, !0)
                    })
                })
            }), !0) : (f.addClass(c.$cart, i), !1) : !1
        }, a.set(e, {exports: new k, cbRender: "renderMenu", isRender: !1})
    }, {})
}(TB.Global, KISSY), !function (a, b) {
    var c = a.util, d = "fn-site-map", e = "//tms.alicdn.com/go/rgn/global/site-map-ajax.php";
    a.add(d, function () {
        var f = function () {
            this.el = c.$("J_SiteMap"), this.init()
        };
        f.prototype.init = function () {
        }, f.prototype.render = function () {
            var f = this, g = c.$("J_SiteNavBd"), h = c.$("J_SiteMapBd");
            if (!a.isMobile) {
                var i = parseFloat(c.css(g, "width")) - 18 + "px";
                c.css(h, "width", i)
            }
            return c.jsonp(a.get(d, "url") || e, function (d) {
                if (!h)return !1;
                h.innerHTML = d;
                var e = c.selector("mod-wrap", h), g = 0;
                b.each(e, function (a) {
                    var b = parseInt(c.css(a, "height"));
                    b > g && (g = b)
                }), b.each(e, function (a) {
                    c.css(a, "height", g + "px")
                }), a.use("fn-core", function (a, b) {
                    b.iframeShim(f.el, !0)
                }), b.use("node,cookie", function (a, b, c) {
                    b.all(".J_SetAreaCookie").on("click", function (a) {
                        var d = b.all(a.target).attr("data-cookie");
                        c.set("thw", d, 30, ".taobao.com")
                    })
                })
            }), !0
        }, a.set(d, {exports: new f, cbRender: "render"})
    })
}(TB.Global, KISSY), function (a, b) {
    a.add("fn-webww", function () {
        var c = window.g_config, d = c ? c.appId : "", e = b.unparam(location.search.substring(1));
        if (a.v["fn-webww"] = "1.1.7", d && -1 != d || "tstart" in e || "tdog" in e) {
            var f = location.protocol + (a.util.isDaily ? a.util.isHttps() ? "//g.alicdn.com" : "//g.tbcdn.cn" : "//assets.daily.taobao.net/g") + "/aliww/web.ww/scripts/webww.js";
            b.ready(function () {
                b.use("dom", function (a, b) {
                    b && (window.Light || a.getScript(f))
                })
            })
        }
    })
}(TB.Global, KISSY), function (a, b) {
    var c = "fn-tracker";
    a.add(c, function () {
        if (!window.JSTracker) {
            var d = function () {
                window.goldlog && goldlog.record("/tracker.400.1", "", "", "H46836965")
            };
            window.JSTracker = {_configs: {}, config: d, debug: d, error: d, info: d, log: d, send: d, warn: d}
        }
        var e = location.protocol + (a.util.isDaily ? "//g.alicdn.com" : "//g-assets.daily.taobao.net") + "/tb/tracker/", f = a.v && a.v[c] || "3.0.4";
        e += f + "/index.js", b.getScript(e)
    })
}(TB.Global, KISSY), function (a, b) {
    a.add("fn-check-b2b-user", function () {
        var c = b.unparam(a.util.getCookie("uc1")), d = encodeURIComponent(location.href);
        if (c.cbu && !(d.indexOf("www.taobao.com") > -1 && !/taobao\.com\/(\w+)/g.test(d) || d.indexOf("list.taobao.com") > -1 || d.indexOf("service.taobao.com") > -1)) {
            var e = document.createElement("div");
            e.className = "cbu-cover", e.innerHTML = "<!--[if lte IE 6.5]><iframe></iframe><![endif]-->", document.body.appendChild(e);
            var f = document.createElement("iframe");
            f.src = "//reg" + a.util.getHost() + "/member/changeNick2B.jhtml?t=" + b.now() + "&url=" + d, f.className = "cbu-iframe", f.allowTransparency = "true", document.body.appendChild(f), document.documentElement.style.overflow = "hidden"
        }
    })
}(TB.Global, KISSY), function (a, b) {
    a.add("fn-check-bad-seller", function () {
        function c() {
            document.body.appendChild(f), document.body.appendChild(g), document.documentElement.style.overflow = "hidden"
        }

        var d = b.unparam(a.util.getCookie("mt")), e = encodeURIComponent(location.href);
        if (d.np) {
            var f = document.createElement("div");
            f.className = "cbu-cover", f.innerHTML = "<!--[if lte IE 6.5]><iframe></iframe><![endif]-->";
            var g = document.createElement("iframe");
            g.src = "//law" + a.util.getHost() + "/rulefaces/summon.htm?t=" + b.now() + "&url=" + e, g.className = "cbu-iframe", g.allowTransparency = "true", c()
        }
    })
}(TB.Global, KISSY), !function (a, b) {
    var c, d, e = a.util, f = "fn-login", g = e.getNick(), h = !1;
    a.add(f, function () {
        c = a.v && a.v[f] || "2.2.5", d = "tbc/mini-login/" + c + "/index";
        var i = {};
        i.getUser = function () {
        }, i.Mini = {}, i.Mini.popup = function (c, e) {
            if (window.parseFloat(b.version, 10) < 1.2)return void b.log("ERR: KISSY version less than 1.2.0(fn-login)");
            b.isFunction(c) && (e = c, c = null);
            var g = a.get(f, "popup");
            g ? g.show(function () {
                e && e(), i.reloadGlobal()
            }) : b.use(d, function (b, d) {
                a.set(f, "popup", d), d.show(c, function () {
                    e && e(), i.reloadGlobal()
                })
            })
        }, i.Mini.hide = function () {
            var b = a.get(f, "popup");
            b && b.hide()
        }, i.reloadGlobal = function () {
            var b = e.getNick();
            if (b !== g) {
                try {
                    a.reload()
                } catch (c) {
                }
                g = b
            }
        }, i.open = function () {
        }, i.redirect = function () {
        }, a.exports(f, i), h || (e.addEvent(window, "load", function () {
        }), h = !0)
    })
}(TB.Global, KISSY), !function (a, b) {
    var c = a.util, d = "fn-suggest";
    a.add(d, function () {
        var e = {};
        a.exports(d, e), e.loadPlugin = function (c) {
            var f = a.v && a.v[d] || "1.0.29", g = ",tbc/search-suggest/" + f + "/", h = ["dom", "index", "plugin/history", "plugin/bts", "new_suggest.css"];
            b.use(h.join(g), function (a, b, d, f, g) {
                var h = (new g).getBucket(), i = ["history", "cat", "global", "list", "shop"], j = [new f], k = "//suggest.taobao.com/sug?k=1&area=c2c&bucketid=" + h, l = "", m = new d({
                    plugins: j,
                    sugConfig: {sourceUrl: k, node: "#" + c.node, resultFormat: l},
                    mods: {sort: i}
                });
                m.on("beforeSubmit", function () {
                    var a = this.get("form");
                    a && !a[0].initiative_id && b.append(e.createInput(c.date), a[0])
                })
            })
        }, e.createInput = function (a) {
            var b = document.createElement("input");
            return b.setAttribute("type", "hidden"), b.setAttribute("name", "initiative_id"), b.setAttribute("value", "diaoding_" + (a || "")), b
        }, e.init = function (a) {
            if (a.node || (a.node = "J_GlobalSuggestInput"), window.parseFloat(b.version, 10) < 1.3) {
                b.log("the version of KISSY is lower than 1.3");
                var d = c.$(a.node);
                return d && d.parentNode.appendChild(e.createInput(a.date)), !1
            }
            e.loadPlugin(a)
        }
    })
}(TB.Global, KISSY), !function (a) {
    var b = a.util, c = "fn-super-bowl", d = "//tms.alicdn.com/go/rgn/global/super-bowl.php", e = "undefined" != typeof SUPER_BOWL_IS_SHOW;
    a.add(c, function () {
        var f = function () {
        };
        f.prototype.init = function (a) {
            e && b.jsonp(d, function (b) {
                a(b)
            })
        }, a.exports(c, f)
    })
}(TB.Global), !function (a, b) {
    var c = a.util, d = "fn-weekend", e = "//tce.alicdn.com/api/data.htm?ids=79618";
    a.add(d, function () {
        var f = function () {
            this.init()
        };
        f.prototype.init = function () {
            var a = c.$("J_Weekend"), d = c.$("J_SiteNavBd");
            b.ready(function () {
                if (d) {
                    var f = parseFloat(c.css(d, "width"));
                    if (1190 > f)return !1
                }
                b.use("ajax", function (b, d) {
                    new d({
                        dataType: "jsonp", url: e, cache: !0, jsonpCallback: "tce_79618", success: function (d) {
                            if (d && d[79618]) {
                                var e = d[79618].value.data[0];
                                if ("true" === e.status) {
                                    var f = e.list;
                                    if (f && "" !== f) {
                                        f = f.split(",");
                                        var g = location.href.split("?")[0], h = !1;
                                        if (b.each(f, function (a) {
                                                return new RegExp(a).test(g) ? h = !0 : void 0
                                            }), !h)return !1
                                    }
                                    var i = e.img1, j = e.img2, k = e.href;
                                    a.innerHTML = ['<div class="menu-hd">', '<a href="' + k + '"  data-spm="d3">', '<img id="J_WeekendImg" src="' + i + '"/>', "</a>", "</div>"].join(""), c.css(a, "display", "block");
                                    var l = c.$("J_WeekendImg");
                                    c.addEvent(a, "mouseover", function () {
                                        l.setAttribute("src", j)
                                    }), c.addEvent(a, "mouseout", function () {
                                        l.setAttribute("src", i)
                                    })
                                }
                            }
                        }
                    })
                })
            })
        }, a.exports(d, f), a.set(d, {exports: new f, cbRender: "init"})
    })
}(TB.Global, KISSY), function (a, b) {
    a.add("fn-tbar", function () {
        function c() {
            b.isFunction(f.error) && f.error()
        }

        function d(a) {
            b.use("kg/tbar/" + a.version + "/", {
                success: function (b, d) {
                    try {
                        f.config && d.config(f.config);
                        var e = b.isArray(a.item) ? a.item : [];
                        e = b.map(e, function (a) {
                            return a.name
                        }), b.isArray(f.blackList) && (e = e.concat(f.blackList));
                        var g = {blackList: e};
                        b.isArray(f.items) && (g.items = f.items);
                        var h = new d(g);
                        h.render(), b.isFunction(f.success) && f.success()
                    } catch (i) {
                        c()
                    }
                }, error: c
            })
        }

        a.plugin || (a.plugin = {});
        var e = "//tce.alicdn.com/api/data.htm?ids=91060", f = {};
        a.plugin.showSideBar = function (a) {
            a && (f = a), b.use("ajax", function (a, b) {
                new b({
                    url: e, dataType: "jsonp", cache: !0, jsonpCallback: "tce_91060", success: function (b) {
                        if (b && b[91060]) {
                            var e = b[91060].value.config[0];
                            if (!e || !e.version || "true" !== e.show)return a.isFunction(f.error) && f.error(), !1;
                            var g = (window.g_config || {}).appId || 0, h = e.page;
                            return h && h.length && (h = a.map(h, function (a) {
                                return 1 * a.appid
                            }), -1 !== a.indexOf(g, h)) ? (a.isFunction(f.error) && f.error(), !1) : d(e)
                        }
                        c()
                    }, error: c
                })
            })
        }
    })
}(TB.Global, KISSY), function (a, b) {
    a.add("fn-accessibility", function () {
        b.ready(function () {
            function b(d) {
                9 == d.keyCode && c++, 10 === c && (a.util.removeEvent(window, "keydown", b), window.JSTracker2 && JSTracker2.push({
                    url: "http://wai.taobao.com",
                    msg: location.host + location.pathname,
                    sampling: 1
                }))
            }

            var c = 0;
            a.util.addEvent(window, "keydown", b)
        })
    })
}(TB.Global, KISSY), function (a, b) {
    a.add("fn-pad", function () {
        b.ready(function () {
            var a = navigator.userAgent, b = /iPad|taobao_apad|Android.+Tablet|GT-N5100|GT-N5110|GT-N5110|GT-N8000|GT-N8010|GT-P3100|GT-P5110|GT-P5210|Lenovo A3000|LG-V500|MediaPad|MI PAD|Nexus 7|P98 3G|Ramosi9|SM-P600|SM-P601|SM-T110|SM-T210|SM-T211|SM-T310|SM-T311|SM-T320|SM-T321|SM-T520|SM-T700|SM-T705|SM-T800|SM-T805|V703|V719|V819|V919|V975|Venue 7|X98 3G/i;
            if (b.test(a)) {
                var c = window.g_config || {}, d = location.search;
                if (6 !== c.appId && !/[\?&]ttid=/.test(d)) {
                    var e = document.getElementById("J_SiteNav"), f = window.innerWidth, g = e.offsetWidth;
                    f > g && (e.style.width = f + "px");
                    var h = !/[&\?]pad_preview=1/.test(location.search), i = document.createElement("iframe");
                    i.setAttribute("width", "100%"), i.setAttribute("height", "160px"), i.setAttribute("src", location.protocol + "//" + (h ? "www" : "cdnprepub.tms") + ".taobao.com/market/app/site-nav-banner.php?redirect_url=" + encodeURIComponent(location.href.replace(/#.*$/g, ""))), i.setAttribute("frameborder", "0"), i.setAttribute("scrolling", "no");
                    var j = document.createElement("span");
                    j.appendChild(document.createTextNode("\u00d7"));
                    var k = document.createElement("div");
                    k.className = "tb-global-pad-notice", k.appendChild(j), k.appendChild(i), j.onclick = function () {
                        if (k.style.display = "none", window.goldlog)try {
                            window.goldlog.record("/ipadapp.141226.1", "", "url=" + encodeURIComponent(location.host + location.pathname), "H46926338")
                        } catch (a) {
                        }
                    };
                    var l = document.getElementById("J_SiteNav");
                    l && l.insertBefore(k, document.getElementById("J_SiteNavBd"))
                }
            }
        })
    })
}(TB.Global, KISSY), !function (a, b) {
    var c = "fn-browser-update", d = a.util;
    a.add(c, function () {
        var e = function () {
            this.init()
        };
        e.prototype.init = function () {
            var a = this;
            b.ready(function () {
                (d.isIE7() || d.isIE6()) && b.use("dom", function () {
                    a.render()
                })
            })
        }, e.prototype.render = function () {
            KISSY.use("kg/browser-updater/6.0.0/", function (a, b) {
                b.show()
            })
        }, a.exports(c, e)
    })
}(TB.Global, KISSY);
!function (e) {
    function t(t, n) {
        var o = g_config.ver || "";
        if (-1 !== e.indexOf(location.host, u))alert(t.message); else {
            var a = {key: s, name: t.name, message: t.message, stack: t.stack || "", custom: n || "", v: o, t: e.now()};
            window.__logs && (a.logs = window.__logs.toString());
            var i = l + "?" + e.param(a);
            (new Image).src = i
        }
    }

    var n = location.host.indexOf("daily") > -1 ? "//g-assets.daily.taobao.net" : "//g.alicdn.com", o = "tb", a = "item-detail", i = g_config.ver, r = [n, o, a, i].join("/"), c = "tbdetail", s = c + ".err", l = "//poc.taobao.com/1.gif", u = ["item.daily.taobao.net", "itempre.taobao.com", "detailpre.taobao.com", "detaildaily.taobao.net"], d = "ks-debug";
    try {
        if (!window.matchMedia && window.screen.width < 1180) {
            var m = document.createElement("link");
            m.rel = "stylesheet", m.href = r + "/index-1179-min.css";
            var f = document.getElementsByTagName("head")[0];
            f.appendChild(m)
        }
    } catch (p) {
    }
    !function () {
        var n = e.Loader || {}, o = n.Utils || {};
        o.attachMod = function (a, i) {
            var r, c = i.factory;
            if ("function" == typeof c) {
                var s;
                i.requires && i.requires.length && (s = e.bind(i.require, i));
                try {
                    r = c.apply(i, i.cjs ? [a, s, i.exports, i] : o.getModules(a, i.getRequiresWithAlias()))
                } catch (l) {
                    t(l, i.name), setTimeout(function () {
                        throw l.stack
                    }, 1)
                }
                void 0 !== r && (i.exports = r)
            } else i.exports = c;
            i.status = n.Status.ATTACHED
        }
    }(), function g() {
        function t(e) {
            "object" == typeof e && (e = e[y] || e[v]);
            var t = l ? m : f;
            return t + e
        }

        var n = {base: r, ignorePackageNameInUri: !0};
        if (-1 !== e.indexOf(location.hostname, u)) {
            var o = location.href.replace(/#.*/gi, ""), i = e.unparam(o.split("?")[1]);
            i._path && (i._base = i._path);
            for (var c in n)i["_" + c] && (n[c] = i["_" + c])
        }
        var s = i && d in i, l = !!~location.hostname.indexOf("daily"), m = "//g-assets.daily.taobao.net/", f = "//g.alicdn.com/", p = "daily", h = "pre", v = "pub", y = location.host.indexOf(p) > -1 ? p : location.host.indexOf(h) > -1 ? h : v;
        location.href.indexOf("env=" + v) > -1 && (y = v);
        var _ = {};
        _[a] = n;
        var g = {combine: !s, packages: _}, b = {
            packages: {
                tbc: {base: t("tbc/"), ignorePackageNameInUri: !0},
                tb: {base: t("tb/"), ignorePackageNameInUri: !0},
                kg: {base: t("kg/"), ignorePackageNameInUri: !0},
                "address-detail": {base: t("ccc/address-detail/1.1.2/"), debug: !0, ignorePackageNameInUri: !0},
                wangpu: {base: t("shop/wangpu/1.4.11/"), ignorePackageNameInUri: !0, charset: "utf-8", tag: "20140523"},
                "sd/data_sufei": {base: t("sd/data_sufei/1.3.6/sufei"), ignorePackageNameInUri: !0}
            },
            modules: {
                "item-detail/index": {requires: ["core", "overlay", "xtemplate", "imagezoom", "switchable", "datalazyload", "sku", "log"]},
                sku: {alias: ["tbc/sku/1.0.7/"]},
                log: {alias: ["tbc/log/0.4.1/"]},
                slide: {alias: ["kg/slide/2.0.2/"]},
                header: {alias: ["tbc/header/1.4.8/"]},
                rate: {alias: ["kg/rate/0.0.2/"]},
                favorite: {alias: ["kg/favorite/" + (g_config.favoriteVersion ? g_config.favoriteVersion : "1.1.0") + "/"]},
                "address-detail/wlroute": {requires: ["node", "io", "xtemplate", "overlay", "event", "address-detail/wlroute.css"]},
                seckill: {alias: ["tb/item-seckill/0.0.5/"]},
                records: {alias: ["tb/item-records/0.0.4/"]}
            }
        };
        "undefined" != typeof Config && (g = e.mix(g, Config, {deep: !0})), y === v && (g = e.mix(g, b, {deep: !0})), e.config(g)
    }()
}(KISSY), function (S) {
    function getElementsByClassName(e) {
        if (document.getElementsByClassName)return document.getElementsByClassName(e);
        for (var t = [], n = document.getElementsByTagName("*"), o = 0, a = n.length; a > o; o++) {
            var i = n[o];
            RegExp("(^|\\s)" + e + "(\\s|$)").test(i.className) && t.push(i)
        }
        return t
    }

    function addEvent(e, t, n) {
        e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, function (t) {
            var t = t || window.event;
            t.preventDefault = t.preventDefault || function () {
                    t.returnValue = !1
                }, t.stopPropagation = t.stopPropagation || function () {
                    t.cancelBubble = !0
                }, n.call(e, t)
        })
    }

    function each(e, t) {
        for (var n = 0, o = e.length; o > n; n++)t(e[n], n)
    }

    function now() {
        return g_config.vdata.sys.now
    }

    function toArray(e) {
        for (var t = 0, n = e.length, o = []; n > t; t++)o[t] = e[t];
        return o
    }

    function querySelectorAll(e) {
        var t = [];
        if (document.querySelectorAll)t = document.querySelectorAll(e); else {
            var n = e.match(classReg);
            if (n) {
                var o = n[1];
                t = getElementsByClassName(o)
            } else {
                e = e.slice(1);
                var a = document.getElementById(e);
                a && t.push(a)
            }
        }
        return toArray(t)
    }

    function initComponent(component, Component) {
        if (component.init)eval(component.init); else if (Component && Component.init) {
            var config = g_config;
            component.config && (config = eval(component.config)), Component.init(config)
        }
    }

    function getPath(e) {
        return e.path
    }

    function isScript(e) {
        return e && e.match(/(https?:)?\/\//)
    }

    function loadComponent(e, t) {
        var n = getPath(e);
        if (n && !e.loaded) {
            e.loaded = !0;
            var o = function (n, o) {
                e.defer ? setTimeout(function () {
                    initComponent(e, o)
                }, 20) : initComponent(e, o), t && t(n, o)
            };
            isScript(n) ? KISSY.getScript(n, o) : KISSY.use(n, o)
        }
    }

    function loadBootstrapComponents(e) {
        each(e, function (e) {
            loadComponent(e)
        })
    }

    function loadMainComponents(e, t) {
        var n = [], o = [];
        each(e, function (e) {
            var t = getPath(e);
            isScript(t) ? o.push(t) : n.push(t)
        }), KISSY.use(n, {
            success: t, error: function () {
                each(e, function (e) {
                    loadComponent(e)
                })
            }
        }), each(o, function (e) {
            KISSY.getScript(e)
        })
    }

    function loadCoreComponents(e) {
        each(e, function (e) {
            loadComponent(e)
        })
    }

    function loadLazyComponents(e) {
        var t = "mouseenter", n = "mouseleave", o = "click", a = "hover", i = "key", r = "scroll", c = "time", s = 200;
        each(e, function (e) {
            var l = e.trigger, u = l.split(":"), d = u[0], m = u[1];
            if (o === d) {
                var f = querySelectorAll(m);
                each(f, function (t) {
                    addEvent(t, o, function () {
                        loadComponent(e)
                    })
                })
            } else if (a === d) {
                var f = querySelectorAll(m);
                each(f, function (o) {
                    var a = null;
                    addEvent(o, t, function () {
                        a = setTimeout(function () {
                            a = null, loadComponent(e)
                        }, s)
                    }), addEvent(o, n, function () {
                        a && clearTimeout(a)
                    })
                })
            } else if (r === d) {
                var f = querySelectorAll(m);
                each(f, function (t) {
                    Viewport.watch(t, function () {
                        loadComponent(e)
                    })
                })
            } else if (c === d)setTimeout(function () {
                loadComponent(e)
            }, Number(m)); else if (i === d) {
                var p = {ctrl: "ctrlKey", shift: "shiftKey", alt: "altKey", meta: "metaKey"}, g = function (e, t) {
                    var n = t.replace(/\s/g, "").toLowerCase().split("+"), o = 0;
                    return each(n, function (t) {
                        var n = p[t];
                        n ? e[n] && o++ : Number(t) == e.keyCode && o++
                    }), n.length === o
                };
                addEvent(document, "keydown", function (t) {
                    var n = t.target, o = m.tagName;
                    g(t, m) && "INPUT" !== o && "SELECT" !== o && "TEXTAREA" !== o && !n.isContentEditable && (t.preventDefault(), loadComponent(e))
                })
            }
        })
    }

    function loadComponents() {
        function e() {
            e.loaded || (e.loaded = !0, loadCoreComponents(coreComponents), loadLazyComponents(lazyComponents))
        }

        loadBootstrapComponents(bootstrapComponents), loadMainComponents(mainComponents, function () {
            navigator.userAgent.toLowerCase().indexOf("ie") > -1 ? (each(["mouseenter", "mousemove", "scroll", "click"], function (t) {
                addEvent(document.body, t, e)
            }), addEvent(window, "keydown", e)) : e()
        })
    }

    window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e) {
            window.setTimeout(e, 1e3 / 60)
        };
    var classReg = /^\.([\w\-]+)$/;
    Viewport = function () {
        function e() {
            function e(e, t, n) {
                function o() {
                    a && (a.cancel(), a = 0), i = S.now(), e.apply(n || this, arguments), r = S.now()
                }

                var a, i = 0, r = 0;
                return t = t || 150, S.mix(function () {
                    !i || r >= i && S.now() - r > t || i > r && S.now() - i > 8 * t ? o() : (a && a.cancel(), a = S.later(o, t, 0, null, arguments))
                }, {
                    stop: function () {
                        a && (a.cancel(), a = 0)
                    }
                })
            }

            function t(e) {
                return e._ks_lazy_width ? e._ks_lazy_width : e._ks_lazy_width = r.outerWidth(e)
            }

            function n(e) {
                return e._ks_lazy_height ? e._ks_lazy_height : e._ks_lazy_height = r.outerHeight(e)
            }

            function o(e, o, i) {
                if (!e.offsetWidth)return !1;
                var c, s = r.offset(e), l = !0, u = s.left, d = s.top, m = {
                    left: u,
                    top: d,
                    right: u + t(e),
                    bottom: d + n(e)
                };
                return c = a(o, m), c && i && (l = a(i, m)), l && c
            }

            function a(e, t) {
                var n = {};
                return n.top = Math.max(e.top, t.top), n.bottom = Math.min(e.bottom, t.bottom), n.left = Math.max(e.left, t.left), n.right = Math.min(e.right, t.right), n.bottom >= n.top && n.right >= n.left
            }

            function i(e) {
                var t = this;
                return t instanceof i ? (e && (t.container = e), t._callbacks = {}, t._containerIsNotDocument = 9 != t.container.nodeType, t._initLoadEvent(), void t.resume()) : new i(e)
            }

            var r = KISSY.require("dom"), c = KISSY.require("event"), s = window, l = s.document, u = "data-lazy", d = "default", m = "scroll", f = "touchmove", p = "resize", g = 100, h = 0;
            return i.prototype = {
                diff: d,
                placeholder: "//g.alicdn.com/s.gif",
                container: l,
                autoDestroy: !0,
                lazyHandle: function (e) {
                    var t = e.getAttribute(u), n = e.getAttribute(u + "-" + t);
                    if (t && n) {
                        var o = e.getAttribute(t);
                        o != n && e.setAttribute(t, n), e.removeAttribute(u)
                    }
                },
                _initLoadEvent: function () {
                    var t = this, n = t.autoDestroy;
                    t._loadFn = e(function () {
                        n && 0 == t._counter && S.isEmptyObject(t._callbacks) && t.destroy(), t._loadItems()
                    }, g, t)
                },
                refresh: function () {
                    this._loadFn()
                },
                _loadItems: function () {
                    var e = this, t = e.container;
                    (!e._containerIsNotDocument || t.offsetWidth) && (e._windowRegion = e._getBoundingRect(), !e._backCompact && e._containerIsNotDocument && (e._containerRegion = e._getBoundingRect(e.container)), S.each(e._callbacks, function (t, n) {
                        t && e._loadItem(n, t)
                    }))
                },
                _loadItem: function (e, t) {
                    var n = this, t = t || n._callbacks[e];
                    if (!t)return !0;
                    var a = t.el, i = !1, r = t.fn;
                    if (n.force || o(a, n._windowRegion, n._containerRegion))try {
                        i = r.call(a, a)
                    } catch (c) {
                        setTimeout(function () {
                            throw c
                        }, 0)
                    }
                    return i !== !1 && delete n._callbacks[e], i
                },
                add: function (e, t) {
                    e = r.get(e);
                    var n = this, o = n._callbacks, a = {el: e || document, fn: t || n.lazyHandle}, i = ++h;
                    o[i] = a, n._windowRegion ? n._loadItem(i, a) : n.refresh()
                },
                remove: function (e, t) {
                    e = r.get(e);
                    var n = this._callbacks;
                    S.each(n, function (o, a) {
                        o.el == e && (t ? o.fn == t : 1) && delete n[a]
                    })
                },
                _getBoundingRect: function (e) {
                    var t, n, o, a;
                    if (void 0 !== e) {
                        t = r.outerHeight(e), n = r.outerWidth(e);
                        var i = r.offset(e);
                        o = i.left, a = i.top
                    } else t = r.viewportHeight(), n = r.viewportWidth(), o = r.scrollLeft(), a = r.scrollTop();
                    var c = this.diff, s = c === d ? n : c, l = 0, u = s, m = c === d ? t : c, f = 0, p = m, g = o + n, h = a + t;
                    return S.isObject(c) && (l = c.left || 0, u = c.right || 0, f = c.top || 0, p = c.bottom || 0), o -= l, g += u, a -= f, h += p, {
                        left: o,
                        top: a,
                        right: g,
                        bottom: h
                    }
                },
                pause: function () {
                    var e = this, t = e._loadFn;
                    if (!e._destroyed && (c.remove(s, m, t), c.remove(s, f, t), c.remove(s, p, t), t.stop(), e._containerIsNotDocument)) {
                        var n = e.container;
                        c.remove(n, m, t), c.remove(n, f, t)
                    }
                },
                resume: function () {
                    var e = this, t = e._loadFn;
                    if (!e._destroyed && (c.on(s, m, t), c.on(s, f, t), c.on(s, p, t), e._containerIsNotDocument)) {
                        var n = e.container;
                        c.on(n, m, t), c.on(n, f, t)
                    }
                },
                destroy: function () {
                    var e = this;
                    e.pause(), e._callbacks = {}, e._destroyed = 1
                }
            }, new i
        }

        var t;
        return {
            watch: function (n, o) {
                t || (t = e()), t.add(n, o)
            }
        }
    }();
    var components = [];
    try {
        each(Components, function (component) {
            if (!(component.start && new Date(component.start) > now() || component.end && new Date(component.end) < now()))if (component.precondition)try {
                eval(component.precondition) && components.push(component)
            } catch (e) {
            } else components.push(component)
        })
    } catch (e) {
    }
    var bootstrapComponents = [], mainComponents = [{
        name: "detail",
        path: "item-detail/index",
        load: "main"
    }], coreComponents = [], lazyComponents = [];
    each(components, function (e) {
        var t = e.load;
        "bootstrap" == t ? bootstrapComponents.push(e) : "main" == t ? mainComponents.push(e) : "lazy" == t && e.trigger ? lazyComponents.push(e) : coreComponents.push(e)
    }), loadComponents()
}(KISSY);
/**
 * Created by jiangjiang on 12/31/15.
 */
