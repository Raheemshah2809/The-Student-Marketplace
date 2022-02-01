! function (e) {
    "use strict";

    function t() {
        var e = 0;
        jQuery(".br-article-list-inner", ".br-article-list").each(function () {
            var t = jQuery(this),
                a = e;
            if (e += 1, t.find(".br-article").size() > 0) {
                if (!i) return !1;
                var h = (parseInt(t.find(".br-article").css("margin-right"), 10), parseInt(t.parent().css("width"), 10), t),
                    g = 0;
                h.find(".br-article").each(function () {
                    g = g + parseInt(jQuery(this).width(), 10) + parseInt(jQuery(this).css("padding-right"), 10) + parseInt(jQuery(this).css("margin-right"), 10)
                });
                d[a] = g / 2, c[a] && (jQuery(this).parent().parent().parent().addClass("isscrolling"), jQuery(".br-article-list-inner").eq(a).parent().parent().parent().attr("rel", a), t.find(".br-article").clone().appendTo(this), c[a] = !1);
                var y = d[a] + l[a];
                Math.abs(y) <= Math.abs(s[a]) && o(a), u[a] || (u[a] = setInterval(function () {
                    r(t, a)
                }, n))
            }
        }), setTimeout(function () {
            new t
        }, n)
    }

    function r(e, t) {
        s[t] = s[t] - 1, e.css("left", s[t] + "px")
    }

    function o(e) {
        s[e] = 0, jQuery(".br-article-list").eq(e).find(".br-article-list-inner").css("left", "0px")
    }

    function a(e, t) {
        var r = document.createElement("CANVAS"),
            o = r.getContext("2d"),
            a = new Image;
        return r.height = t, r.width = e, o.drawImage(a, 0, 0), setTimeout(function () {
            r = null
        }, 10), r.toDataURL("image/png")
    }
    var i = !0,
        n = 40,
        s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        l = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        c = [!0, !0, !0, !0, !0, !0, !0, !0, !0, !0],
        u = [],
        d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    Array.prototype.forEach2 = function (e) {
        for (var t = this.length, r = 0; t > r; r++) e(this[r], r)
    }, new t, jQuery(document).on("ready", function () {
        jQuery("[data-ot-css]", "body").toArray().forEach2(function (e) {
            var t = jQuery(e);
            t.attr("style", t.data("ot-css"))
        });
        var e = window.devicePixelRatio > 1;
        if (e) {
            jQuery(".retina-check", "body").toArray().forEach2(function (e) {
                jQuery(e).addClass("go-retina")
            });
            jQuery("img[data-ot-retina]", "body").toArray().forEach2(function (e) {
                var t = jQuery(e),
                    r = new Image;
                return "" == t.data("ot-retina") ? !1 : (r.src = t.attr("src"), void jQuery(r).load(function () {
                    var e = jQuery(this);
                    t.attr("src", a(e[0].width, e[0].height)), t.css({
                        "background-image": "url('" + t.data("ot-retina") + "')",
                        "background-size": "100% 100%",
                        "background-repeat": "none"
                    })
                }))
            })
        }
    })
    var h = !1;


    jQuery(".breaking-news").on("mouseenter", function () {
        var e = jQuery(this).attr("rel");
        clearTimeout(u[e])
    }).on("mouseleave", function () {
        var e = jQuery(this).attr("rel");
        u[e] = !1
    });

    jQuery("[data-spacer-color]", "body").toArray().forEach2(function (e) {
        var t = jQuery(e);
        t.css({
            color: t.data("spacer-color"),
            "background-color": t.data("spacer-color")
        })
    });
}(jQuery);