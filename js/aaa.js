/**
 * Created by jiangjiang on 12/30/15.
 */
!function e(t, a, r) {
    function n(o, s) {
        if (!a[o]) {
            if (!t[o]) {
                var c = "function" == typeof require && require;
                if (!s && c)return c(o, !0);
                if (i)return i(o, !0);
                throw new Error("Cannot find module '" + o + "'")
            }
            var l = a[o] = {exports: {}};
            t[o][0].call(l.exports, function (e) {
                var a = t[o][1][e];
                return n(a ? a : e)
            }, l, l.exports, e, t, a, r)
        }
        return a[o].exports
    }

    for (var i = "function" == typeof require && require, o = 0; o < r.length; o++)n(r[o]);
    return n
}({
    1: [function (require, module, exports) {
        !function () {
            function tryToDecodeURIComponent(e, t) {
                var a = t || "";
                if (e)try {
                    a = decodeURIComponent(e)
                } catch (r) {
                }
                return a
            }

            function obj2param(e) {
                var t, a, r = [];
                for (t in e)e.hasOwnProperty(t) && (a = "" + e[t], r.push(util.isStartWith(t, s_plain_obj) ? a : t + "=" + encodeURIComponent(a)));
                return r.join("&")
            }

            function arr2param(e) {
                var t, a, r, n = [], i = e.length;
                for (r = 0; i > r; r++)t = e[r][0], a = e[r][1], n.push(util.isStartWith(t, s_plain_obj) ? a : t + "=" + encodeURIComponent(a));
                return n.join("&")
            }

            function arr2obj(e) {
                var t, a, r, n = {}, i = e.length;
                for (r = 0; i > r; r++)t = e[r][0], a = e[r][1], n[t] = a;
                return n
            }

            function objSimpleClone(e) {
                var t, a = {};
                for (t in e)e.hasOwnProperty(t) && (a[t] = e[t]);
                return a
            }

            function param2obj(e) {
                for (var t = e.split("&"), a = 0, r = t.length, n = {}; r > a; a++) {
                    var i = t[a], o = i.indexOf("="), s = i.substring(0, o), c = i.substring(o + 1);
                    n[s] = tryToDecodeURIComponent(c)
                }
                return n
            }

            function isNumber(e) {
                return "number" == typeof e
            }

            function isUnDefined(e) {
                return "undefined" == typeof e
            }

            function isString(e) {
                return "string" == typeof e
            }

            function isArray(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }

            function tryToGetAttribute(e, t) {
                return e && e.getAttribute ? e.getAttribute(t) || "" : ""
            }

            function tryToGetHref(e) {
                var t;
                try {
                    t = util.trim(e.getAttribute("href", 2))
                } catch (a) {
                }
                return t || ""
            }

            function getExParams() {
                var e = doc.getElementById("tb-beacon-aplus"), t = tryToGetAttribute(e, "exparams");
                if (!t)return t;
                var a, r, n = ["taobao.com", "tmall.com", "etao.com", "hitao.com", "taohua.com", "juhuasuan.com", "alimama.com"];
                if (is_in_iframe) {
                    for (r = n.length, a = 0; r > a; a++)if (isContain(hostsname, n[a]))return t;
                    t = t.replace(/\buserid=\w*&?/, "")
                }
                return t = t.replace(/\buserid=/, "uidaplus=")
            }

            function parseMetaContent(e, t) {
                var a, r, n = e.split(";"), i = n.length;
                for (a = 0; i > a; a++)r = n[a].split("="), t[util.trim(r[0]) || s_plain_obj] = tryToDecodeURIComponent(util.trim(r.slice(1).join("=")))
            }

            function getCookie(e) {
                var t = doc.cookie.match(new RegExp("(?:^|;)\\s*" + e + "=([^;]+)"));
                return t ? t[1] : ""
            }

            function makeCacheNum() {
                return Math.floor(268435456 * Math.random()).toString(16)
            }

            function init_getMetaMicroscopeData() {
                var e, t, a, r = util.getMetaTags(), n = r.length;
                for (e = 0; n > e; e++)t = r[e], "microscope-data" == tryToGetAttribute(t, "name") && (a = tryToGetAttribute(t, "content"), parseMetaContent(a, _microscope_data), is_head_has_meta_microscope_data = s_true);
                _microscope_data_params = obj2param(_microscope_data), ms_data_page_id = _microscope_data.pageId, ms_data_shop_id = _microscope_data.shopId, ms_data_instance_id = _microscope_data.siteInstanceId, ms_data_siteCategoryId = _microscope_data.siteCategory, ms_prototype_id = _microscope_data.prototypeId, site_instance_id_or_shop_id = ms_data_instance_id || ms_data_shop_id
            }

            function getMetaAtpData() {
                var e, t, a, r = util.getMetaTags(), n = r.length;
                for (e = 0; n > e; e++)t = r[e], "atp-beacon" == tryToGetAttribute(t, "name") && (a = tryToGetAttribute(t, "content"), parseMetaContent(a, _atp_beacon_data));
                _atp_beacon_data_params = obj2param(_atp_beacon_data)
            }

            function getMetaWaiting() {
                return util.getMetaCnt("aplus-waiting")
            }

            function getMetaTerminal() {
                return util.getMetaCnt("aplus-terminal")
            }

            function getMetaRateAhot() {
                var e = util.getMetaCnt("aplus-rate-ahot");
                return parseFloat(e) || 0
            }

            function getMetaAhot() {
                return util.getMetaCnt("ahot-aplus")
            }

            function isOnePage() {
                return util.getMetaCnt("isonepage") || "-1"
            }

            function getSPMProtocolFromMeta() {
                var e, t, a, r, n = util.getMetaTags();
                for (e = 0, t = n.length; t > e; e++)a = n[e], r = tryToGetAttribute(a, "name"), r == s_SPM_ATTR_NAME && (spm_protocol = tryToGetAttribute(a, s_SPM_DATA_PROTOCOL))
            }

            function getMetaSPMData(e) {
                var t, a, r, n, i, o, s = util.getMetaTags();
                if (s)for (t = 0, a = s.length; a > t; t++)if (n = s[t], i = tryToGetAttribute(n, "name"), i == e)return page_global_spm_id_origin = tryToGetAttribute(n, "content"), page_global_spm_id_origin.indexOf(":") >= 0 && (r = page_global_spm_id_origin.split(":"), spm_protocol = "i" == r[0] ? "i" : "u", page_global_spm_id_origin = r[1]), o = tryToGetAttribute(n, s_SPM_DATA_PROTOCOL), o && (spm_protocol = "i" == o ? "i" : "u"), page_global_is_wangpu = util.isStartWith(page_global_spm_id_origin, "110"), spm_ab = page_global_is_wangpu ? default_ab : page_global_spm_id_origin, s_true;
                return s_false
            }

            function init_getGlobalSPMId() {
                if (!isUnDefined(spm_ab))return spm_ab;
                if (spm_a && spm_b)return spm_a = spm_a.replace(/^{(\w+)}$/g, "$1"), spm_b = spm_b.replace(/^{(\w+)}$/g, "$1"), wh_in_page = s_true, spm_ab = spm_a + "." + spm_b, getSPMProtocolFromMeta(), goldlog.spm_ab = [spm_a, spm_b], spm_ab;
                var e;
                if (getMetaSPMData(s_SPM_ATTR_NAME) || getMetaSPMData("spm-id"), spm_ab = spm_ab || default_ab, !spm_ab)return spm_ab;
                var t, a = doc.getElementsByTagName("body");
                return e = spm_ab.split("."), goldlog.spm_ab = e, a = a && a.length ? a[0] : null, a && (t = tryToGetAttribute(a, s_SPM_ATTR_NAME), t ? (spm_ab = e[0] + "." + t, goldlog.spm_ab = [e[0], t]) : 1 == e.length && (spm_ab = default_ab)), spm_ab
            }

            function makePVId() {
                function e(e) {
                    var t = "0123456789abcdefhijklmnopqrstuvwxyzABCDEFHIJKLMNOPQRSTUVWXYZ", a = "0123456789abcdefghijkmnopqrstuvwxyzABCDEFGHIJKMNOPQRSTUVWXYZ";
                    return 1 == e ? t.substr(Math.floor(60 * Math.random()), 1) : 2 == e ? a.substr(Math.floor(60 * Math.random()), 1) : "0"
                }

                for (var t, a = "", r = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", n = !1; a.length < 6;)t = r.substr(Math.floor(62 * Math.random()), 1), !n && a.length <= 2 && ("g" == t.toLowerCase() || "l" == t.toLowerCase()) && (0 === a.length && "g" == t.toLowerCase() ? Math.random() < .5 && (t = e(1), n = !0) : 1 == a.length && "l" == t.toLowerCase() && "g" == a.charAt(0).toLowerCase() && (t = e(2), n = !0)), a += t;
                return win[s_pv_id_key] = a, a
            }

            function init_aplusQueue() {
                var e, t = win[s_aplus_queue];
                t.push = e = function () {
                    for (var e, a, r = 0, n = arguments.length; n > r; r++)e = arguments[r], isString(e) ? goldlog.send(hjlj_beacon_base + e) : isArray(e) && "push" != (a = e[0]) && (t[a] = t[a] || []).push(e.slice(1))
                };
                for (var a; a = t.shift();)e(a)
            }

            function onDOMReady(e) {
                var t = win.KISSY;
                t ? t.ready(e) : win.jQuery ? jQuery(doc).ready(e) : "complete" === doc.readyState ? e() : addEventListener(win, "load", e)
            }

            function recordValInWindowName() {
                var e, t;
                !is_in_iframe && is_https && (is_login_page && page_referrer ? (e = page_referrer, t = nameStorage.getItem(KEY.NAME_STORAGE.REFERRER_PV_ID)) : (e = page_url, t = pvid), nameStorage.setItem(KEY.NAME_STORAGE.REFERRER, e), nameStorage.setItem(KEY.NAME_STORAGE.REFERRER_PV_ID, t))
            }

            function addEventListener(e, t, a) {
                e[onevent]((atta ? "on" : "") + t, function (e) {
                    e = e || win.event;
                    var t = e.target || e.srcElement;
                    a(e, t)
                }, s_false)
            }

            function processGoldlogQueue() {
                function e() {
                    var e, t, a, r = win[s_GOLDMINER_QUEUE];
                    if (r && isArray(r) && r.length)for (; e = r.shift();)if (e && e.action && isString(e.action) && e.arguments && isArray(e.arguments)) {
                        for (a = e.action.split("."), t = win; a.length;)if (t = t[a.shift()], !t)return;
                        if ("function" == typeof t)try {
                            t.apply(t, e.arguments)
                        } catch (n) {
                        }
                    }
                }

                try {
                    e()
                } catch (t) {
                }
            }

            function init_watchGoldlogQueue() {
                var e = function () {
                    try {
                        processGoldlogQueue(), setTimeout(e, 200)
                    } catch (t) {
                    }
                };
                e(), addEventListener(win, "beforeunload", processGoldlogQueue)
            }

            function cleanParams(e) {
                var t, a, r, n, i = [], o = {};
                for (t = e.length - 1; t >= 0; t--)a = e[t], r = a[0], r != s_plain_obj && o.hasOwnProperty(r) || (n = a[1], ("aplus" == r || n) && (i.unshift([r, n]), o[r] = 1));
                return i
            }

            function cleanParamsForWindvane(e) {
                var t, a, r, n, i = [], o = {logtype: !0, cache: !0, scr: !0, "spm-cnt": !0};
                for (t = e.length - 1; t >= 0; t--)a = e[t], r = a[0], n = a[1], util.isStartWith(r, s_plain_obj) || o[r] || i.unshift([r, n]);
                return i
            }

            function tblogSend(e, t) {
                var a, r;
                if (t) {
                    if (isWindVane && isTerminal) {
                        r = cleanParamsForWindvane(cleanParams(t));
                        var n, i = {}, o = getSPMFromUrl(page_referrer), s = isOnePage(), c = s.split("|"), l = c[0], u = c[1] ? c[1] : "";
                        try {
                            a = arr2obj(r), n = JSON.stringify(a), "{}" == n && (n = "")
                        } catch (m) {
                            n = ""
                        }
                        i.functype = "2001", i.urlpagename = u, i.url = loc.href, i.spmcnt = (spm_ab || "0.0") + ".0.0", i.spmpre = o || "", i.lzsid = "", i.cna = acookie_cna || "", i.extendargs = n, i.isonepage = l, WindVane.call("WVTBUserTrack", "toUT", i), win[s_goldlog].windVaneData = i
                    }
                    return isUseLSProxy() ? useLSProxy({
                        url: makeUrl(e, t),
                        js: js_fdc_lsproxy,
                        referrer: loc.href
                    }) : goldlog.send(e, t)
                }
            }

            function mkPlainKey() {
                return s_plain_obj + Math.random()
            }

            function wp_bucketId(e, t) {
                var a, r = 2146271213;
                for (a = 0; a < e.length; a++)r = (r << 5) + r + e.charCodeAt(a);
                return (65535 & r) % t
            }

            function getSPMFromUrl(e) {
                var t, a = e.match(new RegExp("\\?.*spm=([\\w\\.\\-\\*]+)"));
                return a && (t = a[1]) && 5 == t.split(".").length ? t : null
            }

            function ifAdd(e, t) {
                var a, r, n, i, o = t.length;
                for (a = 0; o > a; a++)r = t[a], n = r[0], i = r[1], i && e.push([n, i])
            }

            function init_loadScripts() {
                var e = (new Date).getTime() / 36e5;
                Math.random() < .01 && addScript(url_g_alicdn + "/alilog/stat/a.js?t=" + e);
                var t = "laiwang", a = "/ilw/a/lwlog.js?v=140709";
                isContain(loc.href.split("?")[0], t) && addScript(url_g_alicdn + a);
                var r = "/alilog/mlog/xwj_heat.js?v=151116b", n = getMetaRateAhot() || CONFIG.RATE.AHOT_SAMPLING;
                (Math.random() < n || isAhot || CONFIG.DEBUG.AHOT) && addScript(url_g_alicdn + r), ms_data_instance_id && ms_prototype_id && ms_prototype_id.match(/^[124]$/) && ms_data_shop_id && addScriptFromFDC("wp-beacon.js?v=131014"), onDOMReady(function () {
                    setTimeout(function () {
                        addScript(url_g_alicdn + "/sd/data_sufei/1.4.8/aplus/index.js")
                    }, 1e3)
                })
            }

            function compareVersion(e, t) {
                e = e.toString().split("."), t = t.toString().split(".");
                for (var a = 0; a < e.length || a < t.length; a++) {
                    var r = parseInt(e[a], 10), n = parseInt(t[a], 10);
                    if (window.isNaN(r) && (r = 0), window.isNaN(n) && (n = 0), n > r)return -1;
                    if (r > n)return 1
                }
                return 0
            }

            function callback(e, t) {
                isAndroid && compareVersion(osVersion, "2.4.0") < 0 ? setTimeout(function () {
                    e && e(t)
                }, 1) : e && e(t)
            }

            function init_windVane() {
                var WV_Core = {
                    call: function (e, t, a, r, n, i) {
                        var o, s;
                        return lib.promise && (lib.promise.deferred ? s = lib.promise.deferred() : lib.promise.defer && (s = lib.promise.defer())), o = i > 0 ? setTimeout(function () {
                            WV_Core.onFailure(o, {ret: "TIMEOUT"})
                        }, i) : WV_Private.getSid(), a.sid = o, WV_Private.registerCall(o, r, n, s), isAndroid ? compareVersion(wvVersion, "2.7.0") >= 0 ? WV_Private.callMethodByPrompt(e, t, WV_Private.buildParam(a), o + "") : WindVane_Native && WindVane_Native.callMethod && WindVane_Native.callMethod(e, t, WV_Private.buildParam(a), o + "") : isIOS && WV_Private.callMethodByIframe(e, t, WV_Private.buildParam(a), o + ""), s ? s.promise() : void 0
                    }, fireEvent: function (e, t) {
                        var a = doc.createEvent("HTMLEvents");
                        a.initEvent(e, !1, !0), a.param = WV_Private.parseParam(t), doc.dispatchEvent(a)
                    }, getParam: function (e) {
                        return WV_Private.params[PARAM_PREFIX + e] || ""
                    }, onSuccess: function (e, t) {
                        clearTimeout(e);
                        var a = WV_Private.unregisterCall(e), r = a.success, n = a.deferred, i = WV_Private.parseParam(t);
                        callback(function (e) {
                            r && r(e), n && n.resolve(e)
                        }, i.value || i), WV_Private.onComplete(e)
                    }, onFailure: function (e, t) {
                        clearTimeout(e);
                        var a = WV_Private.unregisterCall(e), r = a.failure, n = a.deferred, i = WV_Private.parseParam(t);
                        callback(function (e) {
                            r && r(e), n && n.reject(e)
                        }, i), WV_Private.onComplete(e)
                    }
                }, WV_Private = {
                    params: {}, buildParam: function (e) {
                        return e && "object" == typeof e ? JSON.stringify(e) : e || ""
                    }, parseParam: function (str) {
                        var obj;
                        if (str && "string" == typeof str)try {
                            obj = JSON.parse(str)
                        } catch (e) {
                            obj = eval("(" + str + ")")
                        } else obj = str || {};
                        return obj
                    }, getSid: function () {
                        return Math.floor(Math.random() * (1 << 50)) + "" + inc++
                    }, registerCall: function (e, t, a, r) {
                        t && (callbackMap[SUCCESS_PREFIX + e] = t), a && (callbackMap[FAILURE_PREFIX + e] = a), r && (callbackMap[DEFERRED_PREFIX + e] = r)
                    }, unregisterCall: function (e) {
                        var t = SUCCESS_PREFIX + e, a = FAILURE_PREFIX + e, r = DEFERRED_PREFIX + e, n = {
                            success: callbackMap[t],
                            failure: callbackMap[a],
                            deferred: callbackMap[r]
                        };
                        return delete callbackMap[t], delete callbackMap[a], n.deferred && delete callbackMap[r], n
                    }, useIframe: function (e, t) {
                        var a = IFRAME_PREFIX + e, r = iframePool.pop();
                        r || (r = doc.createElement("iframe"), r.setAttribute("frameborder", "0"), r.style.cssText = "width:0;height:0;border:0;display:none;"), r.setAttribute("id", a), r.setAttribute("src", t), r.parentNode || setTimeout(function () {
                            doc.body.appendChild(r)
                        }, 5)
                    }, retrieveIframe: function (e) {
                        var t = IFRAME_PREFIX + e, a = doc.querySelector("#" + t);
                        iframePool.length >= iframeLimit ? doc.body.removeChild(a) : iframePool.push(a)
                    }, callMethodByIframe: function (e, t, a, r) {
                        var n = {"selfParam=1": 1, sid: this.parseParam(a).sid};
                        n = this.buildParam(n);
                        var i = LOCAL_PROTOCOL + "://" + e + ":" + r + "/" + t + "?" + n;
                        this.params[PARAM_PREFIX + r] = a, this.useIframe(r, i)
                    }, callMethodByPrompt: function (e, t, a, r) {
                        var n = LOCAL_PROTOCOL + "://" + e + ":" + r + "/" + t + "?" + a, i = WV_PROTOCOL + ":";
                        this.params[PARAM_PREFIX + r] = a, window.prompt(n, i)
                    }, onComplete: function (e) {
                        isIOS && this.retrieveIframe(e), delete this.params[PARAM_PREFIX + e]
                    }
                };
                for (var key in WV_Core)WV_Core.hasOwnProperty(key) && (win[s_goldlog][key] = WindVane[key] = WV_Core[key])
            }

            function addScript(e, t) {
                var a = "script", r = doc.createElement(a);
                r.type = "text/javascript", r.async = !0, r.src = is_https ? t || e : e;
                var n = doc.getElementsByTagName(a)[0];
                n.parentNode.insertBefore(r, n)
            }

            function addScriptFromFDC(e) {
                var t = "//assets.alicdn.com/s/fdc/", a = "//assets.alicdn.com/s/fdc/";
                addScript(t + e, a + e)
            }

            function createIframe(e, t) {
                var a = document.createElement("iframe");
                a.style.width = "1px", a.style.height = "1px", a.style.position = "absolute", a.style.display = "none", a.src = e, t && (a.name = t);
                var r = document.getElementsByTagName("body")[0];
                return r.appendChild(a), a
            }

            function checkLS() {
                var e = !1;
                if ("localStorage" in win && win.localStorage)try {
                    localStorage.setItem("test", "test"), localStorage.removeItem("test"), e = !0
                } catch (t) {
                }
                return e
            }

            function isUseLSProxy() {
                if (CONFIG.DEBUG.LS_PROXY)return !0;
                var e = navigator.userAgent;
                if (is_ali_app)return !1;
                var t = e.split(" Safari/");
                return 2 != t.length ? !1 : checkLS() && win.postMessage && t[1].match(/[\d\.]+/) && e.indexOf("AppleWebKit") > -1 && e.match(/\bVersion\/\d+/) && !e.match(/\bChrome\/\d+/) && !e.match(/TencentTraveler|QQBrowser/) && !e.match(/UCBrowser|UCWEB/)
            }

            function useLSProxy(e) {
                var t = "//mmstat.alicdn.com/aplus-proxy.html?v=20130115";
                createIframe(t, JSON.stringify(e)), win.addEventListener && win.JSON && win.addEventListener("message", function (e) {
                    function t() {
                        var e = hostsname.split("."), t = e.length;
                        return t > 1 ? e[t - 2] + "." + e[t - 1] : hostsname
                    }

                    var a = e.data;
                    try {
                        a = JSON.parse(a)
                    } catch (r) {
                        return
                    }
                    if (a[0] && "cna" == a[0].k)for (var n, i, o, s = 0, c = a.length; c > s; s++)n = a[s], o = n.k, i = encodeURIComponent(o) + "=" + ("cna" == o ? n.v : encodeURIComponent(n.v)) + "; domain=." + t() + "; path=/; expires=" + new Date(n.t).toGMTString(), doc.cookie = i
                })
            }

            function makeUrl(e, t) {
                var a = -1 == e.indexOf("?") ? "?" : "&", r = t ? isArray(t) ? arr2param(t) : obj2param(t) : "";
                return r ? e + a + r : e
            }

            function isDpp() {
                return isContain(getExParams(), "atp_isdpp")
            }

            function inAntiSpamWhiteList() {
                for (var e = !1, t = ["item.taobao.com", "detail.tmall.com", "list.tmall.com", "s.taobao.com", "list.taobao.com", "tw.taobao.com", "detail.tmall.hk", "chaoshi.tmall.com"], a = 0; a < t.length; a++) {
                    var r = t[a];
                    if (hostsname.indexOf(r) > -1) {
                        e = !0;
                        break
                    }
                }
                return isDpp() && (e = !0), e
            }

            function chkFPPage() {
                return !isTerminal && !is_ali_app && !/iPhone|iPad|iPod|Android/i.test(ua)
            }

            function try2AddFingerPrint(e) {
                if (chkFPPage()) {
                    var t, a, r = require("./lib/fingerprint").get(), n = ["fp", "fp2"];
                    for (t = 0; t < n.length; t++)a = n[t], r.hasOwnProperty(a) && e.push([a, r[a]])
                }
            }

            require("./lib/client");
            var win = window, doc = document, time_start = (new Date).getTime(), s_aplus_queue = "_ap", _k = "g_tb_aplus_loaded", _launch = "g_tb_aplus_launch", url_g_alicdn = "//g.alicdn.com";
            if (win[s_aplus_queue] || (win[s_aplus_queue] = []), !doc.getElementsByTagName("body").length)return void setTimeout(arguments.callee, 50);
            if (!win[_k]) {
                win[_k] = 1;
                var js_fdc_lsproxy = url_g_alicdn + "/alilog/mlog/lsproxy.js?v=20150514", _ali_analytics = "ali_analytics", util = require("./lib/util"), isContain = util.isContain, m_rule = require("./lib/rule"), CONFIG = {
                    VERSION: {
                        DEFAULT: "3",
                        MANUAL: 9,
                        MANUAL_TIMEOUT: 7
                    },
                    TIME: {MANUAL_TIMEOUT: 6e3},
                    RATE: {AHOT_SAMPLING: .1},
                    DEBUG: {
                        AHOT: location.search.indexOf("ap-debug-ahot") > -1,
                        ANTI_SPAM: location.search.indexOf("ap-debug-antispam") > -1,
                        LS_PROXY: location.search.indexOf("ap-debug-lsproxy") > -1
                    }
                }, KEY = {
                    NAME_STORAGE: {
                        REFERRER: "wm_referrer",
                        REFERRER_PV_ID: "refer_pv_id"
                    }
                }, VERSION = CONFIG.VERSION.DEFAULT, loc = location, loc_protocol = loc.protocol, is_https = "https:" == loc_protocol, is_in_iframe = parent !== win.self, use_protocol = is_https ? loc_protocol : "http:", default_ab = "0.0", hostsname = loc.hostname, isAhot = getMetaAhot(), isPad = /TB\-PD/i.test(navigator.userAgent), isTerminal = isPad ? !0 : getMetaTerminal(), tblog_beacon_base = use_protocol + "//log.mmstat.com/", hjlj_beacon_base = is_https ? tblog_beacon_base : use_protocol + (isTerminal ? "//wgo.mmstat.com/" : "//gm.mmstat.com/"), tblog_beacon_url = tblog_beacon_base + m_rule.getBeaconSrc(loc.hostname, isTerminal, is_in_iframe) + ".gif", tblog_data = [["logtype", is_in_iframe ? 0 : 1]], tblog_extra_data = [], page_url = loc.href, loc_hash = loc.hash, page_referrer = doc.referrer, is_login_page = is_https && (page_url.indexOf("login.taobao.com") >= 0 || page_url.indexOf("login.tmall.com") >= 0), atta = !!doc.attachEvent, s_attachEvent = "attachEvent", s_addEventListener = "addEventListener", onevent = atta ? s_attachEvent : s_addEventListener, s_false = !1, s_true = !0, s_plain_obj = "::-plain-::", s_SPM_ATTR_NAME = "data-spm", s_SPM_DATA_PROTOCOL = "data-spm-protocol", s_GOLDMINER_QUEUE = "goldlog_queue", s_pv_id_key = "g_aplus_pv_id", pvid = makePVId(), acookie_cna = getCookie("cna"), _microscope_data = {}, _microscope_data_params, _atp_beacon_data = {}, _atp_beacon_data_params, site_instance_id_or_shop_id, ms_data_shop_id, ms_data_instance_id, ms_data_page_id, ms_data_siteCategoryId, ms_prototype_id, wh_in_page = s_false, spm_a = win._SPM_a, spm_b = win._SPM_b, spm_protocol, spm_ab, page_global_spm_id_origin, page_global_is_wangpu, is_head_has_meta_microscope_data = s_false, goldlog, s_goldlog = "goldlog", ua = navigator.userAgent, lib = win.lib || (win.lib = {}), isIOS = /iPhone|iPad|iPod/i.test(ua), isAndroid = /Android/i.test(ua), isWindVane = /WindVane/i.test(ua), osVersion = ua.match(/(?:OS|Android)[\/\s](\d+[._]\d+(?:[._]\d+)?)/i), wvVersion = ua.match(/WindVane[\/\s](\d+[._]\d+[._]\d+)/), WindVane = {}, WindVane_Native = win.WindVane_Native, callbackMap = {}, inc = 1, iframePool = [], iframeLimit = 3, LOCAL_PROTOCOL = "hybrid", WV_PROTOCOL = "wv_hybrid", IFRAME_PREFIX = "iframe_", SUCCESS_PREFIX = "suc_", FAILURE_PREFIX = "err_", DEFERRED_PREFIX = "defer_", PARAM_PREFIX = "param_", waitingMeta = getMetaWaiting(), hasWaitingMeta = 1 == waitingMeta, m_log = require("./lib/log"), is_ali_app;
                ua.match(/AliApp\(([A-Z\-]+)\/([\d\.]+)\)/i) && (is_ali_app = !0);
                var nameStorage = function () {
                    function e() {
                        var e, t = [], i = !0;
                        for (var u in m)m.hasOwnProperty(u) && (i = !1, e = m[u] || "", t.push(l(u) + s + l(e)));
                        a.name = i ? r : n + l(r) + o + t.join(c)
                    }

                    function t(e, t, a) {
                        e && (e.addEventListener ? e.addEventListener(t, a, !1) : e.attachEvent && e.attachEvent("on" + t, function (t) {
                            a.call(e, t)
                        }))
                    }

                    var a = window;
                    if (a.nameStorage)return a.nameStorage;
                    var r, n = "nameStorage:", i = /^([^=]+)(?:=(.*))?$/, o = "?", s = "=", c = "&", l = encodeURIComponent, u = decodeURIComponent, m = {}, d = {};
                    return function (e) {
                        if (e && 0 === e.indexOf(n)) {
                            var t = e.split(/[:?]/);
                            t.shift(), r = u(t.shift()) || "";
                            for (var a, o, s, l = t.join(""), d = l.split(c), p = 0, f = d.length; f > p; p++)a = d[p].match(i), a && a[1] && (o = u(a[1]), s = u(a[2]) || "", m[o] = s)
                        } else r = e || ""
                    }(a.name), d.setItem = function (t, a) {
                        t && "undefined" != typeof a && (m[t] = String(a), e())
                    }, d.getItem = function (e) {
                        return m.hasOwnProperty(e) ? m[e] : null
                    }, d.removeItem = function (t) {
                        m.hasOwnProperty(t) && (m[t] = null, delete m[t], e())
                    }, d.clear = function () {
                        m = {}, e()
                    }, d.valueOf = function () {
                        return m
                    }, d.toString = function () {
                        var e = a.name;
                        return 0 === e.indexOf(n) ? e : n + e
                    }, t(a, "beforeunload", function () {
                        e()
                    }), d
                }();
                page_referrer = doc.referrer || nameStorage.getItem(KEY.NAME_STORAGE.REFERRER) || "", osVersion = osVersion ? (osVersion[1] || "0.0.0").replace(/_/g, ".") : "0.0.0", wvVersion = wvVersion ? (wvVersion[1] || "0.0.0").replace(/_/g, ".") : "0.0.0", goldlog = {
                    version: VERSION,
                    pvid: pvid,
                    referrer: page_referrer,
                    _d: {},
                    _microscope_data: _microscope_data,
                    on: addEventListener,
                    DOMReady: onDOMReady,
                    getCookie: getCookie,
                    tryToGetAttribute: tryToGetAttribute,
                    tryToGetHref: tryToGetHref,
                    isNumber: isNumber,
                    nameStorage: nameStorage,
                    send: function (e, t) {
                        var a = new Image, r = "_img_" + Math.random(), n = makeUrl(e, t);
                        return win[r] = a, a.onload = a.onerror = function () {
                            win[r] = null
                        }, a.src = n, a = null, n
                    },
                    emit: function (e, t) {
                        var a, r = "ued.1.1.2?type=9";
                        return isArray(t) ? a = [["_gm:id", e]].concat(t) : (a = objSimpleClone(t), a["_gm:id"] = e), goldlog.send(hjlj_beacon_base + r, a)
                    },
                    trace: function (e, t, a, r) {
                        goldlog.record(e, t, a, r)
                    },
                    record: function (e, t, a, r) {
                        r = (arguments[3] || "") + "";
                        var n, i, o = "?", s = s_false, c = "", l = (spm_ab || "0.0") + ".0.0." + pvid, u = "//ac.mmstat.com/";
                        if ("ac" == e)n = u + "1.gif", s = util.isStartWith(r, "A") && r.substr(1) == util.makeChkSum(e); else if (util.isStartWith(e, "ac-"))n = u + e.substr(3), s = util.isStartWith(r, "A") && r.substr(1) == util.makeChkSum(e); else if (util.isStartWith(e, "/"))s = util.isStartWith(r, "H") && r.substr(1) == util.makeChkSum(e), n = hjlj_beacon_base + e.substr(1), i = s_true, c += "&spm-cnt=" + l; else {
                            if (!util.isEndWith(e, ".gif"))return s_false;
                            n = tblog_beacon_base + e
                        }
                        if (!s && "%" != r && util.makeChkSum(page_url) != r)return s_false;
                        if (n += o + "cache=" + makeCacheNum() + "&gmkey=" + encodeURIComponent(t) + "&gokey=" + encodeURIComponent(a) + "&cna=" + acookie_cna + "&isbeta=" + VERSION + c, i && (n += "&logtype=2"), isWindVane && isTerminal) {
                            var m, d = {}, p = {
                                gmkey: t,
                                gokey: a,
                                isbeta: VERSION
                            }, f = isOnePage(), _ = f.split("|"), g = _[0], h = _[1] ? _[1] : "";
                            try {
                                m = JSON.stringify(p), "{}" == m && (m = "")
                            } catch (b) {
                                m = ""
                            }
                            d.functype = "2101", d.logkey = e, d.logkeyargs = m, d.urlpagename = h, d.url = loc.href, d.cna = acookie_cna || "", d.extendargs = "", d.isonepage = g, WindVane.call("WVTBUserTrack", "toUT", d)
                        }
                        return isUseLSProxy() ? useLSProxy({
                            url: n,
                            js: js_fdc_lsproxy,
                            referrer: loc.href
                        }) : goldlog.send(n)
                    },
                    launch: function (e, t) {
                        if (!win[_launch] || t) {
                            win[_launch] = s_true;
                            var a, r, n = VERSION, i = getExParams(), o = tblog_data.slice(0);
                            if (hasWaitingMeta && (n = CONFIG.VERSION.MANUAL, e && e.isWait && (n = CONFIG.VERSION.MANUAL_TIMEOUT)), e)for (a in e)e.hasOwnProperty(a) && (r = e[a]) && o.push([a, r]);
                            if (o.push(["isbeta", n]), o.push([mkPlainKey(), i]), o = o.concat(tblog_extra_data), t && (pvid = makePVId(), goldlog.pvid = pvid, o.push([s_plain_obj, t.gokey]), m_log.updateSPMCnt(o, t.page_id, pvid), m_log.updateSPMUrl(o, pvid)), win.g_aplus_pv_req = tblogSend(tblog_beacon_url, o), inAntiSpamWhiteList() || CONFIG.DEBUG.ANTI_SPAM) {
                                var s = param2obj(i).asid, c = obj2param({asid: s, pre: page_referrer});
                                goldlog.record("/ahot.1.9", "", c, "H1733420")
                            }
                        }
                    },
                    sendPV: m_log.sendPV
                }, win[s_goldlog] = goldlog, win.goldminer = {record: goldlog.emit}, win[s_GOLDMINER_QUEUE] && isArray(win[s_GOLDMINER_QUEUE]) || (win[s_GOLDMINER_QUEUE] = []), isTerminal || init_watchGoldlogQueue(), init_getMetaMicroscopeData(), init_getGlobalSPMId(), init_aplusQueue(), init_loadScripts(), isWindVane && isTerminal && init_windVane(), function () {
                    var e, t, a, r = getCookie("tracknick"), n = getCookie("thw"), i = /\btanx\.com$/.test(hostsname) ? getCookie("cnaui") : "", o = getSPMFromUrl(page_url), s = getSPMFromUrl(page_referrer), c = win[_ali_analytics] && win[_ali_analytics].ua && win[_ali_analytics].ua.ua_info || {};
                    if (loc_hash && 0 === loc_hash.indexOf("#") && (loc_hash = loc_hash.substr(1)), !is_in_iframe || m_rule.is_iframeExcption(page_referrer)) {
                        ("3" == ms_prototype_id || "5" == ms_prototype_id) && (t = getCookie("t"), a = t ? wp_bucketId(t, 20) : ""), e = [[mkPlainKey(), "title=" + escape(doc.title)], ["pre", page_referrer], ["cache", makeCacheNum()], ["scr", screen.width + "x" + screen.height]], acookie_cna && e.push([mkPlainKey(), "cna=" + acookie_cna]), r && e.push([mkPlainKey(), "nick=" + r]), ifAdd(e, [["wm_pageid", ms_data_page_id], ["wm_prototypeid", ms_prototype_id], ["wm_sid", ms_data_shop_id], ["spm-url", o], ["spm-pre", s], ["cnaui", i]]), e.push(["spm-cnt", (spm_ab || "0.0") + ".0.0." + pvid]), tblog_data = tblog_data.concat(e), ifAdd(tblog_extra_data, [["thw", n], ["bucket_id", a], ["urlokey", loc_hash], ["wm_instanceid", ms_data_instance_id], ["p", c.p], ["o", c.o], ["b", c.b], ["s", c.s], ["w", c.w], ["mx", c.mx], ["ism", c.ism]]), try2AddFingerPrint(tblog_extra_data), hasWaitingMeta ? setTimeout(function () {
                            goldlog.launch({isWait: !0})
                        }, CONFIG.TIME.MANUAL_TIMEOUT) : goldlog.launch();
                        var l = spm_ab.split(".")[0];
                        is_in_iframe || isTerminal || "a21bo.7724922" != spm_ab && "2013" != l && "a220o" != l || createIframe("//cookiemapping.wrating.com/link.html")
                    }
                    if (is_in_iframe) {
                        getMetaAtpData();
                        var u, m = _atp_beacon_data.on, d = "1" == m ? "//ac.mmstat.com/y.gif" : tblog_beacon_url;
                        d = isContain(hostsname, "wrating.com") ? tblog_beacon_url : d, "1" != m && "2" != m || !(u = _atp_beacon_data.chksum) || u !== util.makeChkSum(page_url).toString() || tblogSend(d, tblog_data)
                    }
                    addEventListener(win, "beforeunload", function () {
                        recordValInWindowName()
                    })
                }();
                var time_end = (new Date).getTime();
                setTimeout(function () {
                    Math.random() > 1e-4 || goldlog.emit("global_sample", {type: "timer", t: time_end - time_start})
                }, 1)
            }
        }(), function () {
            function e(e) {
                var t, a;
                try {
                    return t = [].slice.call(e)
                } catch (r) {
                    t = [], a = e.length;
                    for (var n = 0; a > n; n++)t.push(e[n]);
                    return t
                }
            }

            function t(e, t) {
                return e && e.getAttribute ? e.getAttribute(t) || "" : ""
            }

            function a(e, t, a) {
                if (e && e.setAttribute)try {
                    e.setAttribute(t, a)
                } catch (r) {
                }
            }

            function r(e, t) {
                if (e && e.removeAttribute)try {
                    e.removeAttribute(t)
                } catch (r) {
                    a(e, t, "")
                }
            }

            function n(e) {
                var t, a = e.match(new RegExp("\\?.*spm=([\\w\\.\\-\\*\\\\]+)"));
                return a && (t = a[1]) && 5 == t.split(".").length ? t : null
            }

            function i(e, t) {
                return 0 === e.indexOf(t)
            }

            function o(e) {
                for (var t = ["javascript:", "tel:", "sms:", "mailto:", "tmall://"], a = 0, r = t.length; r > a; a++)if (i(e, t[a]))return !0
            }

            function s(e) {
                return "string" == typeof e
            }

            function c(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }

            function l(e) {
                return "number" == typeof e
            }

            function u(e, t) {
                return e.indexOf(t) >= 0
            }

            function m(e, t) {
                return e.indexOf(t) > -1
            }

            function d(e, t) {
                for (var a = 0, r = t.length; r > a; a++)if (m(e, t[a]))return ve;
                return Ee
            }

            function p(e) {
                return s(e) ? e.replace(/^\s+|\s+$/g, "") : ""
            }

            function f(e) {
                return "undefined" == typeof e
            }

            function _(e, t) {
                var a = t || "";
                if (e)try {
                    a = decodeURIComponent(e)
                } catch (r) {
                }
                return a
            }

            function g() {
                return de = de || he.getElementsByTagName("head")[0], pe || (de ? pe = de.getElementsByTagName("meta") : [])
            }

            function h(e, t) {
                var a, r, n = e.split(";"), i = n.length;
                for (a = 0; i > a; a++)r = n[a].split("="), t[p(r[0]) || Fe] = _(p(r.slice(1).join("=")))
            }

            function b() {
                var e, a, r, n = g(), i = n.length;
                for (e = 0; i > e; e++)if (a = n[e], "aplus-terminal" == t(a, "name")) {
                    r = t(a, "content");
                    break
                }
                return r
            }

            function v() {
                var e, a, r, n, i = g();
                for (e = 0, a = i.length; a > e; e++)r = i[e], n = t(r, "name"), n == Xe && (fe = t(r, ze))
            }

            function E(e) {
                var a, r, n, o, s, c, l = g();
                if (l)for (a = 0, r = l.length; r > a; a++)if (o = l[a], s = t(o, "name"), s == e)return le = t(o, "content"), le.indexOf(":") >= 0 && (n = le.split(":"), fe = "i" == n[0] ? "i" : "u", le = n[1]), c = t(o, ze), c && (fe = "i" == c ? "i" : "u"), ue = i(le, "110"), ce = ue ? ke : le, ve;
                return Ee
            }

            function A() {
                var e, a, r, n = g(), i = n.length;
                for (e = 0; i > e; e++)if (a = n[e], "aplus-touch" == t(a, "name")) {
                    r = t(a, "content");
                    break
                }
                return r
            }

            function S() {
                return Math.floor(268435456 * Math.random()).toString(16)
            }

            function T(e) {
                var t, a, r = [];
                for (t in e)e.hasOwnProperty(t) && (a = "" + e[t], r.push(i(t, Fe) ? a : t + "=" + encodeURIComponent(a)));
                return r.join("&")
            }

            function P(e) {
                var t, a, r, n = [], o = e.length;
                for (r = 0; o > r; r++)t = e[r][0], a = e[r][1], n.push(i(t, Fe) ? a : t + "=" + encodeURIComponent(a));
                return n.join("&")
            }

            function y(e) {
                var t;
                try {
                    t = p(e.getAttribute("href", 2))
                } catch (a) {
                }
                return t || ""
            }

            function M(e, t, a) {
                return "tap" == t ? void R(e, a) : void e[We]((Ve ? "on" : "") + t, function (e) {
                    e = e || ge.event;
                    var t = e.target || e.srcElement;
                    a(t)
                }, Ee)
            }

            function R(e, t) {
                var a = "ontouchend" in document.createElement("div"), r = a ? "touchstart" : "mousedown";
                M(e, r, function (e) {
                    t && t(e)
                })
            }

            function w(e) {
                var t = ge.KISSY;
                t ? t.ready(e) : ge.jQuery ? jQuery(he).ready(e) : "complete" === he.readyState ? e() : M(ge, "load", e)
            }

            function O(e, t) {
                var a, r = new Image, n = "_img_" + Math.random(), i = -1 == e.indexOf("?") ? "?" : "&", o = t ? c(t) ? P(t) : T(t) : "";
                return ge[n] = r, r.onload = r.onerror = function () {
                    ge[n] = null
                }, r.src = a = o ? e + i + o : e, r = null, a
            }

            function I() {
                var e;
                if (xe && !Je && (e = Ae.match(/^[^?]+\?[^?]*spm=([^&#?]+)/), e && (Je = e[1] + "_")), !f(ce))return ce;
                if (ge._SPM_a && ge._SPM_b && (oe = ge._SPM_a.replace(/^{(\w*|-)}$/g, "$1"), se = ge._SPM_b.replace(/^{(\w*|-)}$/g, "$1"), oe && "-" != oe && se && "-" != se))return Ge = ve, ce = oe + "." + se, v(), ce;
                if (E(Xe) || E("spm-id"), !ce)return Ce = !0, ce = ke, ke;
                var a, r, n = he.getElementsByTagName("body");
                return n = n && n.length ? n[0] : null, n && (a = t(n, Xe), a && (r = ce.split("."), ce = r[0] + "." + a)), m(ce, ".") || (Ce = !0, ce = ke), ce
            }

            function x(a, r) {
                var n, i, o, s, c, l, u, m, d, p = [];
                for (n = e(a.getElementsByTagName("a")), i = e(a.getElementsByTagName("area")), s = n.concat(i), u = 0, m = s.length; m > u; u++) {
                    for (l = !1, c = o = s[u]; (c = c.parentNode) && c != a;)if (t(c, Xe)) {
                        l = !0;
                        break
                    }
                    l || (d = t(o, qe), r || "t" == d ? r && "t" == d && p.push(o) : p.push(o))
                }
                return p
            }

            function N(e, a, r, n) {
                var o, c, m, d, p, f, _, g, h, b, v, E, A, S, T, P, M, R;
                if (a = a || e.getAttribute(Xe) || "", a && (o = x(e, n), 0 !== o.length)) {
                    if (m = a.split("."), P = i(a, "110") && 3 == m.length, P && (M = m[2], m[2] = "w" + (M || "0"), a = m.join(".")), s(E = I()) && E.match(/^[\w\-\*]+(\.[\w\-\*\/]+)?$/))if (u(a, ".")) {
                        if (!i(a, E)) {
                            for (d = E.split("."), m = a.split("."), S = 0, A = d.length; A > S; S++)m[S] = d[S];
                            a = m.join(".")
                        }
                    } else u(E, ".") || (E += ".0"), a = E + "." + a;
                    if (a.match && a.match(/^[\w\-\*]+\.[\w\-\*\/]+\.[\w\-\*]+$/)) {
                        var w = n ? Ye : Ke;
                        for (R = parseInt(t(e, w)) || 0, T = 0, p = R, A = o.length; A > T; T++)c = o[T], f = y(c), (n || f) && (P && c.setAttribute(Ze, M), _ = c.getAttribute(et), _ && z(_) ? j(c, _, r) : (h = H(c.parentNode), h.a_spm_ab ? (v = h.a_spm_ab, b = h.ab_idx) : (v = void 0, p++, b = p), g = W(c) || b, n && (g = "at" + ((l(g) ? 1e3 : "") + g)), _ = v ? a + "-" + v + "." + g : a + "." + g, j(c, _, r)));
                        e.setAttribute(w, p)
                    }
                }
            }

            function k(e) {
                var t, a = ["mclick.simba.taobao.com", "click.simba.taobao.com", "click.tanx.com", "click.mz.simba.taobao.com", "click.tz.simba.taobao.com", "redirect.simba.taobao.com", "rdstat.tanx.com", "stat.simba.taobao.com", "s.click.taobao.com"], r = a.length;
                for (t = 0; r > t; t++)if (-1 != e.indexOf(a[t]))return !0;
                return !1
            }

            function C(e) {
                return e ? !!e.match(/^[^\?]*\balipay\.(?:com|net)\b/i) : Ee
            }

            function F(e) {
                return e ? !!e.match(/^[^\?]*\balipay\.(?:com|net)\/.*\?.*\bsign=.*/i) : Ee
            }

            function D(e) {
                for (var a; (e = e.parentNode) && e.tagName != Le;)if (a = t(e, ze))return a;
                return ""
            }

            function L(e, t) {
                if (e && /&?\bspm=[^&#]*/.test(e) && (e = e.replace(/&?\bspm=[^&#]*/g, "").replace(/&{2,}/g, "&").replace(/\?&/, "?").replace(/\?$/, "")), !t)return e;
                var a, r, n, i, o, s, c, l = "&";
                if (-1 != e.indexOf("#") && (n = e.split("#"), e = n.shift(), r = n.join("#")), i = e.split("?"), o = i.length - 1, n = i[0].split("//"), n = n[n.length - 1].split("/"), s = n.length > 1 ? n.pop() : "", o > 0 && (a = i.pop(), e = i.join("?")), a && o > 1 && -1 == a.indexOf("&") && -1 != a.indexOf("%") && (l = "%26"), e = e + "?spm=" + Je + t + (a ? l + a : "") + (r ? "#" + r : ""), c = m(s, ".") ? s.split(".").pop().toLowerCase() : "") {
                    if ({png: 1, jpg: 1, jpeg: 1, gif: 1, bmp: 1, swf: 1}.hasOwnProperty(c))return 0;
                    !a && 1 >= o && (r || {htm: 1, html: 1, php: 1}.hasOwnProperty(c) || (e += "&file=" + s))
                }
                return e
            }

            function V(e) {
                return e && Ae.split("#")[0] == e.split("#")[0]
            }

            function j(e, a, r) {
                if (e.setAttribute(et, a), !r && !t(e, $e) && (me = ge.g_aplus_pv_id, me && (a += "." + me), me || ce && ce != ke)) {
                    var n = y(e), s = "i" == (t(e, ze) || D(e) || fe), c = Oe + "tbspm.1.1?logtype=2&spm=";
                    n && !k(n) && (s || !(i(n, "#") || V(n) || o(n.toLowerCase()) || C(n) || F(n))) && (s ? (c += a + "&url=" + encodeURIComponent(n) + "&cache=" + S(), _e == e && O(c)) : r || (n = L(n, a)) && U(e, n))
                }
            }

            function U(e, t) {
                var a, r = e.innerHTML;
                r && -1 == r.indexOf("<") && (a = he.createElement("b"), a.style.display = "none", e.appendChild(a)), e.href = t, a && e.removeChild(a)
            }

            function W(e) {
                var a;
                return Ce ? a = "0" : (a = t(e, Xe), a && a.match(/^d\w+$/) || (a = "")), a
            }

            function G(e) {
                for (var t, a, r = e; e && e.tagName != De && e.tagName != Le && e.getAttribute;) {
                    if (a = e.getAttribute(Xe)) {
                        t = a, r = e;
                        break
                    }
                    if (!(e = e.parentNode))break
                }
                return t && !/^[\w\-\.]+$/.test(t) && (t = "0"), {spm_c: t, el: r}
            }

            function H(e) {
                for (var a, r = {}, n = ""; e && e.tagName != De && e.tagName != Le;) {
                    if (!n && (n = t(e, tt))) {
                        a = parseInt(t(e, "data-spm-ab-max-idx")) || 0, r.a_spm_ab = n, r.ab_idx = ++a, e.setAttribute("data-spm-ab-max-idx", a);
                        break
                    }
                    if (t(e, Xe))break;
                    e = e.parentNode
                }
                return r
            }

            function B(e) {
                var t;
                return e && (t = e.match(/&?\bspm=([^&#]*)/)) ? t[1] : ""
            }

            function X(e, t) {
                var a = y(e), r = B(a), n = null, i = ce && 2 == ce.split(".").length;
                return i ? (n = [ce, 0, W(e) || 0], void j(e, n.join("."), t)) : void(a && r && (a = a.replace(/&?\bspm=[^&#]*/g, "").replace(/&{2,}/g, "&").replace(/\?&/, "?").replace(/\?$/, "").replace(/\?#/, "#"), U(e, a)))
            }

            function z(e) {
                var t = e.split(".");
                return t[0] + "." + t[1] == ce
            }

            function Q(e, a) {
                _e = e, Ge && J();
                var r, n, i = t(e, et);
                if (i && z(i))j(e, i, a); else {
                    if (r = G(e.parentNode), n = r.spm_c, !n)return void X(e, a);
                    Ce && (n = "0"), N(r.el, n, a), N(r.el, n, a, !0)
                }
            }

            function $(t) {
                if (t && 1 == t.nodeType) {
                    r(t, Ke), r(t, Ye);
                    var a, n = e(t.getElementsByTagName("a")), i = e(t.getElementsByTagName("area")), o = n.concat(i), s = o.length;
                    for (a = 0; s > a; a++)r(o[a], et)
                }
            }

            function q(e) {
                var t = e.parentNode;
                if (!t)return "";
                var a = e.getAttribute(Xe), r = G(t), n = r.spm_c || 0;
                n && -1 != n.indexOf(".") && (n = n.split("."), n = n[n.length - 1]);
                var i = ce + "." + n, o = Ne[i] || 0;
                return o++, Ne[i] = o, a = a || o, i + ".i" + a
            }

            function K(e) {
                var a, r = e.tagName;
                return me = ge.g_aplus_pv_id, "A" != r && "AREA" != r ? a = q(e) : (Q(e, ve), a = t(e, et)), a = (a || "0.0.0.0").split("."), {
                    a: a[0],
                    b: a[1],
                    c: a[2],
                    d: a[3],
                    e: me
                }
            }

            function Y(e, t) {
                if (t || (t = he), he.evaluate)return t.evaluate(e, he, null, 9, null).singleNodeValue;
                for (var a, r = e.split("/"); !a && r.length > 0;)a = r.shift();
