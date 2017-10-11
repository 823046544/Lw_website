!
function() {
    function o() {
        var o = !1;
        window.$S && window.$S.global_conf ? o = window.$S.global_conf.is_sxl: window.$S && window.$S.globalConf && (o = window.$S.globalConf.is_sxl);
        var e = {
            strikingly: {
                tips: "Please upgrade your browser to view this site properly. ",
                learnMoreURL: "https://support.strikingly.com/hc/en-us/articles/206256982",
                learnMoreText: "Learn More. "
            },
            sxl: {
                tips: "请升级你的浏览器以查看此页面。",
                learnMoreURL: "http://help.sxl.cn/hc/zh-cn/articles/206374141",
                learnMoreText: "了解更多。"
            }
        };
        return o ? e.sxl: e.strikingly
    }
    function e() {
        return '<div class="browser-error-dialog s-edit-modal" style="display:block; position: fixed; background-color:#e7e9eb ; width: 70%; left: 15%; bottom: 50px; text-align: center;"><p style="padding: 30px; font-size: 140%;"><strong><span>${tips}</span><a href="${learnMoreURL}" target="_blank">${learnMoreText}</a></strong></p></div>'
    }
    function n(o, e) {
        var n = -1,
        r = null;
        return o && -1 !== o.indexOf("MSIE") ? r = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})") : e && "Netscape" === e && -1 !== o.indexOf("Trident") && (r = new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})")),
        r && null !== r.exec(o) && (n = window.parseInt(RegExp.$1)),
        n
    }
    function r(o) {
        var e = -1,
        n = null;
        return o && -1 !== o.indexOf("Windows NT") && (n = new RegExp("Windows NT ([0-9]{1,}[.0-9]{0,});")),
        n && null !== n.exec(o) && (e = window.parseInt(RegExp.$1)),
        e
    }
    function i(n, r) {
        if (!$(".browser-error-dialog").length) {
            var i = o(),
            t = i.tips,
            l = i.learnMoreURL,
            a = i.learnMoreText,
            s = e();
            if ($("body").append(s.replace("${tips}", t).replace("${learnMoreURL}", l).replace("${learnMoreText}", a)), $(".browser-error-dialog").css("position", "absolute"), 6 === r) return;
            var w, d, p = window.parseInt($(".browser-error-dialog").css("bottom"));
            $(window).scroll(function() {
                window.clearTimeout(d),
                d = window.setTimeout(function() {
                    w = 0 !== document.body.scrollTop ? document.body.scrollTop: $(window).scrollTop(),
                    $(".browser-error-dialog").animate({
                        bottom: p - w
                    },
                    "slow")
                },
                150)
            })
        }
    }
    function t() {
        var o = window && window.navigator && window.navigator.userAgent,
        e = window && window.navigator && window.navigator.appName,
        t = n(o, e),
        l = r(o);
        if ( - 1 !== t) {
            var a = "";
            l < 10 && t < 11 && (a = "chrome"),
            a && i(a, t)
        }
    }
    function l() {
        window && t()
    }
    window.onload = l
} ();