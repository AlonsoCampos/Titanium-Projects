function hex_sha1(s) {
    return binb2hex(core_sha1(str2binb(s), s.length * chrsz));
}

function b64_sha1(s) {
    return binb2b64(core_sha1(str2binb(s), s.length * chrsz));
}

function str_sha1(s) {
    return binb2str(core_sha1(str2binb(s), s.length * chrsz));
}

function hex_hmac_sha1(key, data) {
    return binb2hex(core_hmac_sha1(key, data));
}

function b64_hmac_sha1(key, data) {
    return binb2b64(core_hmac_sha1(key, data));
}

function str_hmac_sha1(key, data) {
    return binb2str(core_hmac_sha1(key, data));
}

function sha1_vm_test() {
    return "a9993e364706816aba3e25717850c26c9cd0d89d" == hex_sha1("abc");
}

function core_sha1(x, len) {
    x[len >> 5] |= 128 << 24 - len % 32, x[(len + 64 >> 9 << 4) + 15] = len;
    var w = Array(80), a = 1732584193, b = -271733879, c = -1732584194, d = 271733878, e = -1009589776;
    for (var i = 0; x.length > i; i += 16) {
        var olda = a, oldb = b, oldc = c, oldd = d, olde = e;
        for (var j = 0; 80 > j; j++) {
            w[j] = 16 > j ? x[i + j] : rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
            var t = safe_add(safe_add(rol(a, 5), sha1_ft(j, b, c, d)), safe_add(safe_add(e, w[j]), sha1_kt(j)));
            e = d, d = c, c = rol(b, 30), b = a, a = t;
        }
        a = safe_add(a, olda), b = safe_add(b, oldb), c = safe_add(c, oldc), d = safe_add(d, oldd), 
        e = safe_add(e, olde);
    }
    return Array(a, b, c, d, e);
}

function sha1_ft(t, b, c, d) {
    return 20 > t ? b & c | ~b & d : 40 > t ? b ^ c ^ d : 60 > t ? b & c | b & d | c & d : b ^ c ^ d;
}

function sha1_kt(t) {
    return 20 > t ? 1518500249 : 40 > t ? 1859775393 : 60 > t ? -1894007588 : -899497514;
}

function core_hmac_sha1(key, data) {
    var bkey = str2binb(key);
    bkey.length > 16 && (bkey = core_sha1(bkey, key.length * chrsz));
    var ipad = Array(16), opad = Array(16);
    for (var i = 0; 16 > i; i++) ipad[i] = 909522486 ^ bkey[i], opad[i] = 1549556828 ^ bkey[i];
    var hash = core_sha1(ipad.concat(str2binb(data)), 512 + data.length * chrsz);
    return core_sha1(opad.concat(hash), 672);
}

function safe_add(x, y) {
    var lsw = (65535 & x) + (65535 & y), msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | 65535 & lsw;
}

function rol(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
}

function str2binb(str) {
    var bin = Array(), mask = (1 << chrsz) - 1;
    for (var i = 0; str.length * chrsz > i; i += chrsz) bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << 32 - chrsz - i % 32;
    return bin;
}

function binb2str(bin) {
    var str = "", mask = (1 << chrsz) - 1;
    for (var i = 0; 32 * bin.length > i; i += chrsz) str += String.fromCharCode(bin[i >> 5] >>> 32 - chrsz - i % 32 & mask);
    return str;
}

function binb2hex(binarray) {
    var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef", str = "";
    for (var i = 0; 4 * binarray.length > i; i++) str += hex_tab.charAt(15 & binarray[i >> 2] >> 8 * (3 - i % 4) + 4) + hex_tab.charAt(15 & binarray[i >> 2] >> 8 * (3 - i % 4));
    return str;
}

function binb2b64(binarray) {
    var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", str = "";
    for (var i = 0; 4 * binarray.length > i; i += 3) {
        var triplet = (255 & binarray[i >> 2] >> 8 * (3 - i % 4)) << 16 | (255 & binarray[i + 1 >> 2] >> 8 * (3 - (i + 1) % 4)) << 8 | 255 & binarray[i + 2 >> 2] >> 8 * (3 - (i + 2) % 4);
        for (var j = 0; 4 > j; j++) str += 8 * i + 6 * j > 32 * binarray.length ? b64pad : tab.charAt(63 & triplet >> 6 * (3 - j));
    }
    return str;
}

var hexcase = 0, b64pad = "", chrsz = 8, OAuth;

null == OAuth && (OAuth = {}), OAuth.setProperties = function(into, from) {
    if (null != into && null != from) for (var key in from) into[key] = from[key];
    return into;
}, OAuth.setProperties(OAuth, {
    percentEncode: function(s) {
        if (null == s) return "";
        if (s instanceof Array) {
            var e = "";
            for (var i = 0; s.length > i; ++s) "" != e && (e += "&"), e += OAuth.percentEncode(s[i]);
            return e;
        }
        return s = encodeURIComponent(s), s = s.replace(/\!/g, "%21"), s = s.replace(/\*/g, "%2A"), 
        s = s.replace(/\'/g, "%27"), s = s.replace(/\(/g, "%28"), s = s.replace(/\)/g, "%29"), 
        s;
    },
    decodePercent: function(s) {
        return null != s && (s = s.replace(/\+/g, " ")), decodeURIComponent(s);
    },
    getParameterList: function(parameters) {
        if (null == parameters) return [];
        if ("object" != typeof parameters) return OAuth.decodeForm(parameters + "");
        if (parameters instanceof Array) return parameters;
        var list = [];
        for (var p in parameters) list.push([ p, parameters[p] ]);
        return list;
    },
    getParameterMap: function(parameters) {
        if (null == parameters) return {};
        if ("object" != typeof parameters) return OAuth.getParameterMap(OAuth.decodeForm(parameters + ""));
        if (parameters instanceof Array) {
            var map = {};
            for (var p = 0; parameters.length > p; ++p) {
                var key = parameters[p][0];
                void 0 === map[key] && (map[key] = parameters[p][1]);
            }
            return map;
        }
        return parameters;
    },
    getParameter: function(parameters, name) {
        if (parameters instanceof Array) {
            for (var p = 0; parameters.length > p; ++p) if (parameters[p][0] == name) return parameters[p][1];
            return null;
        }
        return OAuth.getParameterMap(parameters)[name];
    },
    formEncode: function(parameters) {
        var form = "", list = OAuth.getParameterList(parameters);
        for (var p = 0; list.length > p; ++p) {
            var value = list[p][1];
            null == value && (value = ""), "" != form && (form += "&"), form += OAuth.percentEncode(list[p][0]) + "=" + OAuth.percentEncode(value);
        }
        return form;
    },
    decodeForm: function(form) {
        var list = [], nvps = form.split("&");
        for (var n = 0; nvps.length > n; ++n) {
            var nvp = nvps[n];
            if ("" == nvp) continue;
            var name, value, equals = nvp.indexOf("=");
            0 > equals ? (name = OAuth.decodePercent(nvp), value = null) : (name = OAuth.decodePercent(nvp.substring(0, equals)), 
            value = OAuth.decodePercent(nvp.substring(equals + 1))), list.push([ name, value ]);
        }
        return list;
    },
    setParameter: function(message, name, value) {
        var parameters = message.parameters;
        if (parameters instanceof Array) {
            for (var p = 0; parameters.length > p; ++p) parameters[p][0] == name && (void 0 === value ? parameters.splice(p, 1) : (parameters[p][1] = value, 
            value = void 0));
            void 0 !== value && parameters.push([ name, value ]);
        } else parameters = OAuth.getParameterMap(parameters), parameters[name] = value, 
        message.parameters = parameters;
    },
    setParameters: function(message, parameters) {
        var list = OAuth.getParameterList(parameters);
        for (var i = 0; list.length > i; ++i) OAuth.setParameter(message, list[i][0], list[i][1]);
    },
    completeRequest: function(message, accessor) {
        null == message.method && (message.method = "GET");
        var map = OAuth.getParameterMap(message.parameters);
        null == map.oauth_consumer_key && OAuth.setParameter(message, "oauth_consumer_key", accessor.consumerKey || ""), 
        null == map.oauth_token && null != accessor.token && OAuth.setParameter(message, "oauth_token", accessor.token), 
        null == map.oauth_version && OAuth.setParameter(message, "oauth_version", "1.0"), 
        null == map.oauth_timestamp && OAuth.setParameter(message, "oauth_timestamp", OAuth.timestamp()), 
        null == map.oauth_nonce && OAuth.setParameter(message, "oauth_nonce", OAuth.nonce(6)), 
        OAuth.SignatureMethod.sign(message, accessor);
    },
    setTimestampAndNonce: function(message) {
        OAuth.setParameter(message, "oauth_timestamp", OAuth.timestamp()), OAuth.setParameter(message, "oauth_nonce", OAuth.nonce(6));
    },
    addToURL: function(url, parameters) {
        newURL = url;
        if (null != parameters) {
            var toAdd = OAuth.formEncode(parameters);
            if (toAdd.length > 0) {
                var q = url.indexOf("?");
                newURL += 0 > q ? "?" : "&", newURL += toAdd;
            }
        }
        return newURL;
    },
    getAuthorizationHeader: function(realm, parameters) {
        var header = 'OAuth realm="' + OAuth.percentEncode(realm) + '"', list = OAuth.getParameterList(parameters);
        for (var p = 0; list.length > p; ++p) {
            var parameter = list[p], name = parameter[0];
            0 == name.indexOf("oauth_") && (header += "," + OAuth.percentEncode(name) + '="' + OAuth.percentEncode(parameter[1]) + '"');
        }
        return header;
    },
    correctTimestampFromSrc: function(parameterName) {
        parameterName = parameterName || "oauth_timestamp";
        var scripts = document.getElementsByTagName("script");
        if (null == scripts || !scripts.length) return;
        var src = scripts[scripts.length - 1].src;
        if (!src) return;
        var q = src.indexOf("?");
        if (0 > q) return;
        parameters = OAuth.getParameterMap(OAuth.decodeForm(src.substring(q + 1)));
        var t = parameters[parameterName];
        if (null == t) return;
        OAuth.correctTimestamp(t);
    },
    correctTimestamp: function(timestamp) {
        OAuth.timeCorrectionMsec = 1e3 * timestamp - new Date().getTime();
    },
    timeCorrectionMsec: 0,
    timestamp: function() {
        var t = new Date().getTime() + OAuth.timeCorrectionMsec;
        return "" + Math.floor(t / 1e3);
    },
    nonce: function(length) {
        var chars = OAuth.nonce.CHARS, result = "";
        for (var i = 0; length > i; ++i) {
            var rnum = Math.floor(Math.random() * chars.length);
            result += chars.substring(rnum, rnum + 1);
        }
        return result;
    }
}), OAuth.nonce.CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz", 
OAuth.declareClass = function(parent, name, newConstructor) {
    var previous = parent[name];
    parent[name] = newConstructor;
    if (null != newConstructor && null != previous) for (var key in previous) "prototype" != key && (newConstructor[key] = previous[key]);
    return newConstructor;
}, OAuth.declareClass(OAuth, "SignatureMethod", function() {}), OAuth.setProperties(OAuth.SignatureMethod.prototype, {
    sign: function(message) {
        var baseString = OAuth.SignatureMethod.getBaseString(message), signature = this.getSignature(baseString);
        return OAuth.setParameter(message, "oauth_signature", signature), signature;
    },
    initialize: function(name, accessor) {
        var consumerSecret;
        consumerSecret = null != accessor.accessorSecret && name.length > 9 && "-Accessor" == name.substring(name.length - 9) ? accessor.accessorSecret : accessor.consumerSecret, 
        this.key = OAuth.percentEncode(consumerSecret) + "&" + OAuth.percentEncode(accessor.tokenSecret);
    }
}), OAuth.setProperties(OAuth.SignatureMethod, {
    sign: function(message, accessor) {
        var name = OAuth.getParameterMap(message.parameters).oauth_signature_method;
        (null == name || "" == name) && (name = "HMAC-SHA1", OAuth.setParameter(message, "oauth_signature_method", name));
        OAuth.SignatureMethod.newMethod(name, accessor).sign(message);
    },
    newMethod: function(name, accessor) {
        var impl = OAuth.SignatureMethod.REGISTERED[name];
        if (null != impl) {
            var method = new impl();
            return method.initialize(name, accessor), method;
        }
        var err = new Error("signature_method_rejected"), acceptable = "";
        for (var r in OAuth.SignatureMethod.REGISTERED) "" != acceptable && (acceptable += "&"), 
        acceptable += OAuth.percentEncode(r);
        throw err.oauth_acceptable_signature_methods = acceptable, err;
    },
    REGISTERED: {},
    registerMethodClass: function(names, classConstructor) {
        for (var n = 0; names.length > n; ++n) OAuth.SignatureMethod.REGISTERED[names[n]] = classConstructor;
    },
    makeSubclass: function(getSignatureFunction) {
        var superClass = OAuth.SignatureMethod, subClass = function() {
            superClass.call(this);
        };
        return subClass.prototype = new superClass(), subClass.prototype.getSignature = getSignatureFunction, 
        subClass.prototype.constructor = subClass, subClass;
    },
    getBaseString: function(message) {
        var parameters, URL = message.action, q = URL.indexOf("?");
        if (0 > q) parameters = message.parameters; else {
            parameters = OAuth.decodeForm(URL.substring(q + 1));
            var toAdd = OAuth.getParameterList(message.parameters);
            for (var a = 0; toAdd.length > a; ++a) parameters.push(toAdd[a]);
        }
        return OAuth.percentEncode(message.method.toUpperCase()) + "&" + OAuth.percentEncode(OAuth.SignatureMethod.normalizeUrl(URL)) + "&" + OAuth.percentEncode(OAuth.SignatureMethod.normalizeParameters(parameters));
    },
    normalizeUrl: function(url) {
        var uri = OAuth.SignatureMethod.parseUri(url), scheme = uri.protocol.toLowerCase(), authority = uri.authority.toLowerCase(), dropPort = "http" == scheme && 80 == uri.port || "https" == scheme && 443 == uri.port;
        if (dropPort) {
            var index = authority.lastIndexOf(":");
            index >= 0 && (authority = authority.substring(0, index));
        }
        var path = uri.path;
        return path || (path = "/"), scheme + "://" + authority + path;
    },
    parseUri: function(str) {
        var o = {
            key: [ "source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor" ],
            parser: {
                strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/
            }
        }, m = o.parser.strict.exec(str), uri = {}, i = 14;
        while (i--) uri[o.key[i]] = m[i] || "";
        return uri;
    },
    normalizeParameters: function(parameters) {
        if (null == parameters) return "";
        var list = OAuth.getParameterList(parameters), sortable = [];
        for (var p = 0; list.length > p; ++p) {
            var nvp = list[p];
            "oauth_signature" != nvp[0] && sortable.push([ OAuth.percentEncode(nvp[0]) + " " + OAuth.percentEncode(nvp[1]), nvp ]);
        }
        sortable.sort(function(a, b) {
            return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
        });
        var sorted = [];
        for (var s = 0; sortable.length > s; ++s) sorted.push(sortable[s][1]);
        return OAuth.formEncode(sorted);
    }
}), OAuth.SignatureMethod.registerMethodClass([ "PLAINTEXT", "PLAINTEXT-Accessor" ], OAuth.SignatureMethod.makeSubclass(function() {
    return this.key;
})), OAuth.SignatureMethod.registerMethodClass([ "HMAC-SHA1", "HMAC-SHA1-Accessor" ], OAuth.SignatureMethod.makeSubclass(function(baseString) {
    b64pad = "=";
    var signature = b64_hmac_sha1(this.key, baseString);
    return signature;
}));

try {
    OAuth.correctTimestampFromSrc();
} catch (e) {}

var OAuthAdapter = function(pConsumerSecret, pConsumerKey, pSignatureMethod) {
    function showLoading() {
        if (loading) return;
        loading = !0, loadingView.value = 0, estimateID = firstLoad ? "tokenRequest" : "pageLoad", 
        estimates[estimateID] || (estimates[estimateID] = firstLoad ? 2e3 : 1e3), firstLoad = !1, 
        startTime = new Date().getTime(), intervalID = setInterval(updateProgress, 30), 
        webView && webView.hide(), loadingView && loadingView.show(), loadingContainer && loadingContainer.show();
    }
    function updateProgress() {
        loadingView && (loadingView.value = (new Date().getTime() - startTime) / estimates[estimateID]);
    }
    function authorizeUICallback(e) {
        var response = e.source.evalJS('(p = document.getElementById("oauth_pin")) && p.innerHTML;');
        response ? (pin = response.split("<code>")[1].split("</code>")[0], destroyAuthorizeUI(), 
        receivePinCallback()) : (loadingView && loadingView.hide(), loadingContainer && loadingContainer.hide(), 
        webView && webView.show()), loading = !1, clearInterval(intervalID), estimates[estimateID] = new Date().getTime() - startTime, 
        Ti.App.Properties.setString("Social-LoadingEstimates", JSON.stringify(estimates));
    }
    var consumerSecret = pConsumerSecret, consumerKey = pConsumerKey, signatureMethod = pSignatureMethod, pin = null, requestToken = null, requestTokenSecret = null, accessToken = null, accessTokenSecret = null, accessor = {
        consumerSecret: consumerSecret,
        tokenSecret: ""
    }, window = null, view = null, webView = null, loadingView = null, loadingContainer = null, receivePinCallback = null, accessTokenStore = {};
    this.loadAccessToken = function(pService) {
        var token;
        if (accessTokenStore[pService]) token = accessTokenStore[pService]; else {
            var raw = Ti.App.Properties.getString("Social.js-AccessToken-" + pService, "");
            if (!raw) return;
            try {
                token = accessTokenStore[pService] = JSON.parse(raw);
            } catch (err) {
                Ti.API.error("Failed to parse stored access token for " + pService + "!"), Ti.API.error(err);
                return;
            }
        }
        token.accessToken && (accessToken = token.accessToken), token.accessTokenSecret && (accessTokenSecret = token.accessTokenSecret);
    }, this.saveAccessToken = function(pService) {
        accessTokenStore[pService] = {
            accessToken: accessToken,
            accessTokenSecret: accessTokenSecret
        }, Ti.App.Properties.setString("Social.js-AccessToken-" + pService, JSON.stringify(accessTokenStore[pService]));
    }, this.clearAccessToken = function(pService) {
        delete accessTokenStore[pService], Ti.App.Properties.setString("Social.js-AccessToken-" + pService, null), 
        accessToken = null, accessTokenSecret = null;
    }, this.isAuthorized = function() {
        return null != accessToken && null != accessTokenSecret;
    };
    var createMessage = function(pUrl) {
        var message = {
            action: pUrl,
            method: "POST",
            parameters: []
        };
        return message.parameters.push([ "oauth_consumer_key", consumerKey ]), message.parameters.push([ "oauth_signature_method", signatureMethod ]), 
        message;
    };
    this.getPin = function() {
        return pin;
    }, this.getRequestToken = function(pUrl, callback) {
        accessor.tokenSecret = "";
        var message = createMessage(pUrl);
        OAuth.setTimestampAndNonce(message), OAuth.SignatureMethod.sign(message, accessor);
        var done = !1, client = Ti.Network.createHTTPClient({
            onload: function() {
                var responseParams = OAuth.getParameterMap(this.responseText);
                requestToken = responseParams.oauth_token, requestTokenSecret = responseParams.oauth_token_secret, 
                callback({
                    success: !0,
                    token: this.responseText
                }), done = !0;
            },
            onerror: function() {
                Ti.API.error("Social.js: FAILED to getRequestToken!"), Ti.API.error(this.responseText), 
                callback({
                    success: !1
                }), done = !0;
            }
        });
        client.open("POST", pUrl), client.send(OAuth.getParameterMap(message.parameters));
    };
    var estimateID, startTime, destroyAuthorizeUI = function() {
        if (null == window) return;
        try {
            webView.removeEventListener("load", authorizeUICallback), webView.removeEventListener("beforeload", showLoading), 
            loadingView.hide(), window.close(), loading = null, webView = null, loadingView = null, 
            loading = !1, firstLoad = !0, view = null, window = null;
        } catch (ex) {
            Ti.API.debug("Cannot destroy the authorize UI. Ignoring.");
        }
    }, firstLoad = !0, loading = !1, estimates = JSON.parse(Ti.App.Properties.getString("Social-LoadingEstimates", "{}")), intervalID = 0;
    this.showLoadingUI = function() {
        window = Ti.UI.createWindow({
            backgroundColor: "transparent",
            zIndex: 1e3
        }), Ti.Android || (window.opacity = 0, window.transform = Ti.UI.create2DMatrix().scale(0)), 
        view = Ti.UI.createView({
            top: 10,
            right: 10,
            bottom: 10,
            left: 10,
            backgroundColor: "#52D3FE",
            border: 10,
            borderColor: "#52D3FE",
            borderRadius: 10,
            borderWidth: 4,
            zIndex: -1
        });
        var closeLabel = Ti.UI.createButton({
            font: {
                fontSize: 11,
                fontWeight: "bold"
            },
            backgroundColor: "#52D3FE",
            borderColor: "#52D3FE",
            color: "#fff",
            style: 0,
            borderRadius: 6,
            title: "X",
            top: 8,
            right: 8,
            width: 30,
            height: 30
        });
        closeLabel.addEventListener("click", destroyAuthorizeUI), window.open();
        var offset = 0;
        Ti.Android && (offset = "10dp"), loadingContainer = Ti.UI.createView({
            top: offset,
            right: offset,
            bottom: offset,
            left: offset,
            backgroundColor: "#fff"
        }), loadingView = Ti.UI.createProgressBar({
            top: 10,
            right: 10,
            bottom: 10,
            left: 10,
            min: 0,
            max: 1,
            value: .5,
            message: "Loading, please wait.",
            backgroundColor: "#fff",
            font: {
                fontSize: 14,
                fontWeight: "bold"
            },
            style: 0
        }), view.add(loadingContainer), loadingContainer.add(loadingView), loadingView.show(), 
        window.add(view), window.add(closeLabel);
        if (!Ti.Android) {
            var tooBig = Ti.UI.createAnimation({
                transform: Ti.UI.create2DMatrix().scale(1.1),
                opacity: 1,
                duration: 350
            }), shrinkBack = Ti.UI.createAnimation({
                transform: Ti.UI.create2DMatrix(),
                duration: 400
            });
            tooBig.addEventListener("complete", function() {
                window.animate(shrinkBack);
            }), window.animate(tooBig);
        }
        showLoading();
    }, this.showAuthorizeUI = function(pUrl, pReceivePinCallback) {
        receivePinCallback = pReceivePinCallback;
        var offset = 0;
        Ti.Android && (offset = "10dp"), webView = Ti.UI.createWebView({
            url: pUrl,
            top: offset,
            right: offset,
            bottom: offset,
            left: offset,
            autoDetect: [ Ti.UI.AUTODETECT_NONE ]
        }), webView.addEventListener("beforeload", showLoading), webView.addEventListener("load", authorizeUICallback), 
        view.add(webView);
    }, this.getAccessToken = function(pUrl, callback) {
        accessor.tokenSecret = requestTokenSecret;
        var message = createMessage(pUrl);
        message.parameters.push([ "oauth_token", requestToken ]), message.parameters.push([ "oauth_verifier", pin ]), 
        OAuth.setTimestampAndNonce(message), OAuth.SignatureMethod.sign(message, accessor);
        var parameterMap = OAuth.getParameterMap(message.parameters), client = Ti.Network.createHTTPClient({
            onload: function() {
                var responseParams = OAuth.getParameterMap(this.responseText);
                var userid = responseParams.user_id;
                var username = responseParams.screen_name;
                accessToken = responseParams.oauth_token, accessTokenSecret = responseParams.oauth_token_secret, 
                callback({
                    success: !0,
                    username: username,
                    userid: userid
                });
            },
            onerror: function() {
                Ti.API.error("Social.js: FAILED to getAccessToken!"), Ti.API.error(this.responseText), 
                callback({
                    success: !1
                });
            }
        });
        client.open("POST", pUrl), client.send(parameterMap);
    }, this.send = function(options) {
        var pUrl = options.url, pParameters = options.parameters, pSuccessMessage = (options.title, 
        options.onSuccess), pErrorMessage = options.onError;
        if (null == accessToken || null == accessTokenSecret) {
            Ti.API.debug("The send status cannot be processed as the client doesn't have an access token. Authorize before trying to send.");
            return;
        }
        accessor.tokenSecret = accessTokenSecret;
        var message = createMessage(pUrl);
        message.parameters.push([ "oauth_token", accessToken ]);
        for (p in pParameters) message.parameters.push(pParameters[p]);
        OAuth.setTimestampAndNonce(message), OAuth.SignatureMethod.sign(message, accessor);
        var parameterMap = OAuth.getParameterMap(message.parameters), client = Ti.Network.createHTTPClient({
            onload: function() {
                200 == client.status ? pSuccessMessage && pSuccessMessage(this.responseText) : pErrorMessage && pErrorMessage(this.responseText);
            },
            onerror: function() {
                Ti.API.error("Social.js: FAILED to send a request!"), pErrorMessage && pErrorMessage(this.responseText);
            }
        });
        client.open("POST", pUrl), client.send(parameterMap);
    };
}, supportedSites = {
    twitter: {
        accessToken: "https://api.twitter.com/oauth/access_token",
        requestToken: "https://api.twitter.com/oauth/request_token",
        authorize: "https://api.twitter.com/oauth/authorize?",
        update: "https://api.twitter.com/1.1/statuses/update.json"
    }
};

exports.create = function(settings) {
    var site = (settings.site || "twitter").toLowerCase(), adapter = new OAuthAdapter(settings.consumerSecret, settings.consumerKey, "HMAC-SHA1");
    adapter.loadAccessToken(site);
    var urls = supportedSites[site];
    return null == urls ? (alert("The Social.js module does not support " + site + " yet!"), 
    null) : {
        isAuthorized: function() {
            return adapter.isAuthorized();
        },
        deauthorize: function() {
            adapter.clearAccessToken(site);
        },
        authorize: function(callback) {
            function receivePin() {
                adapter.getAccessToken(urls.accessToken, function(evt) {
                    evt.success ? (adapter.saveAccessToken(site), callback && callback({
                        username: evt.username,
                        userid: evt.userid
                    })) : alert("Twitter did not give us an access token!");
                });
            }
            adapter.isAuthorized() ? callback && callback() : (adapter.showLoadingUI(), adapter.getRequestToken(urls.requestToken, function(evt) {
                evt.success ? adapter.showAuthorizeUI(urls.authorize + evt.token, receivePin) : alert("Twitter did not give us a request token!");
            }));
        },
        share: function(options) {
            this.authorize(function() {
                adapter.send({
                    url: urls.update,
                    parameters: [ [ "status", options.message ] ],
                    title: "Twitter",
                    onSuccess: options.success,
                    onError: options.error
                });
            });
        }
    };
};